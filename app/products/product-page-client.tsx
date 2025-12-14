"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiStar } from "react-icons/fi";
import { getProductsByCategory } from "@/lib/products-data";
import { categories } from "@/data/products";
import { productsPageData } from "@/data/products-page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function ProductsPageClient() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const previousProductsRef = useRef<string[]>([]);

  // Read category from URL query parameter on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const categoryExists = categories.some((cat) => cat.id === categoryParam);
      if (categoryExists) {
        setSelectedCategory(categoryParam);
      }
    }
  }, [searchParams]);

  const filteredProducts = getProductsByCategory(selectedCategory);

  useGSAP(
    () => {
      // Master timeline for initial page load
      const tl = gsap.timeline();

      // Page header animation
      tl.fromTo(
        ".products-header",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Category filter fade + slide
      tl.fromTo(
        ".category-filter",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Category buttons stagger — left ➜ right
      tl.fromTo(
        ".category-button",
        { opacity: 0, scale: 0.9, y: 12 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
          stagger: {
            each: 0.08, // smoother than amount
            from: "start", // left ➜ right
          },
        },
        "-=0.2"
      );

      // Products count animation
      tl.fromTo(
        ".products-count",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Initial products grid animation
      if (filteredProducts.length > 0) {
        tl.fromTo(
          ".product-card",
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: {
              amount: 0.8,
              from: "start",
              grid: "auto",
            },
            ease: "back.out(1.1)",
          },
          "-=0.2"
        );
      }
    },
    { scope: containerRef }
  );

  // Animate products when category changes
  useEffect(() => {
    const currentProductIds = filteredProducts.map((p) => p.id).join(",");
    const previousProductIds = previousProductsRef.current.join(",");

    // Only animate if products actually changed
    if (currentProductIds !== previousProductIds) {
      const cards = gsap.utils.toArray<HTMLElement>(".product-card");

      // Fade out old products smoothly
      if (previousProductsRef.current.length > 0) {
        gsap.to(".product-card", {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            // Then animate in new products
            gsap.fromTo(
              cards,
              {
                opacity: 0,
                y: 30,
                scale: 0.95,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: {
                  amount: 0.6,
                  from: "start",
                  grid: "auto",
                },
                ease: "back.out(1.1)",
              }
            );
          },
        });
      } else {
        // Initial animation
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 30,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: {
              amount: 0.6,
              from: "start",
              grid: "auto",
            },
            ease: "back.out(1.1)",
          }
        );
      }

      previousProductsRef.current = filteredProducts.map((p) => p.id);
    }
  }, [filteredProducts]);

  const handleCategoryChange = (categoryId: string) => {
    // Animate category button change
    const activeButton = document.querySelector(".category-button.bg-yellow");
    const newButton = document.querySelector(`[data-category="${categoryId}"]`);

    if (activeButton && newButton) {
      gsap.to(activeButton, {
        scale: 0.95,
        duration: 0.2,
        ease: "power2.inOut",
      });

      gsap.to(newButton, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          setSelectedCategory(categoryId);
          gsap.to(newButton, {
            scale: 1,
            duration: 0.1,
            ease: "power2.out",
          });
        },
      });
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen primary-bg">
      <main className="container mx-auto px-7 sm:px-6 py-12">
        {/* Page Header */}
        <div className="products-header text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {productsPageData.header.title.main}{" "}
            <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
              {productsPageData.header.title.highlight}
            </span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
            {productsPageData.header.subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter mb-12">
          {/* Row 1 — All Products (Mobile only) */}
          <div className="flex justify-center mb-4">
            <button
              data-category="all"
              onClick={() => handleCategoryChange("all")}
              className={`category-button px-6 py-3 rounded-xl font-semibold transition-colors duration-300 ${
                selectedCategory === "all"
                  ? "bg-yellow text-white shadow-lg"
                  : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow hover:text-yellow"
              }`}
            >
              {categories[0].name}
            </button>
          </div>

          {/* Row 2 — All Categories (but hide "All" on mobile) */}
          <div className="flex flex-wrap justify-center gap-3 flex-1 w-full">
            {categories
              .filter((category) => category.id !== "all") // remove "All" from row 2
              .map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`category-button px-6 py-3 rounded-xl font-semibold transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? "bg-yellow text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-yellow hover:text-yellow"
                  }`}
                >
                  {category.name}
                </button>
              ))}
          </div>
        </div>

        {/* Products Count */}
        <div className="products-count text-center mb-8">
          <p className="text-black">
            {productsPageData.productsCount.prefix}{" "}
            <span className="font-semibold text-black">
              {filteredProducts.length}
            </span>{" "}
            {productsPageData.productsCount.suffix}
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 ">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => router.push(`/${product.id}`)}
              className="product-card bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 group"
            >
              {/* Product Image */}
              <div className="relative w-full h-68 bg-white flex items-center justify-center overflow-hidden ">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                <Image src={product.image} alt="" width={300} height={200} />
                </div>

                {/* Discount Badge */}
                {product.variants[0].originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {Math.round(
                      (1 -
                        product.variants[0].price /
                          product.variants[0].originalPrice) *
                        100
                    )}
                    {productsPageData.productCard.off}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 md:p-5">
                {/* Category */}
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                  {categories.find((cat) => cat.id === product.category)?.name}
                </p>

                {/* Product Name */}
                <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-current"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    ({product.reviewCount})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-dark">
                      ₹{product.variants[0].price}
                    </span>
                    {product.variants[0].originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.variants[0].originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  className="w-full mt-4 bg-primary-dark text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300  hover:shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/${product.id}`);
                  }}
                >
                  {productsPageData.productCard.viewDetails}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {productsPageData.emptyState.title}
            </h3>
            <p className="text-gray-600">
              {productsPageData.emptyState.message}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
