"use client";

import { featuredProductsData } from "@/data/home-page";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCategoryName } from "@/lib/products-data";
import { Product, products } from "@/data/products";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setFeaturedProducts(products.slice(0, 4));
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!isLoading && featuredProducts.length > 0) {
      // Header animation
      gsap.fromTo(
        ".featured-header",
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-header",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Subtitle animation
      gsap.fromTo(
        ".featured-subtitle",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-subtitle",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Button animation
      gsap.fromTo(
        ".featured-button",
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".featured-button",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      // Product cards stagger animation
      const cards = gsap.utils.toArray<HTMLElement>(".featured-card");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      });

      // Mobile button animation
      gsap.fromTo(
        ".featured-mobile-button",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".featured-mobile-button",
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }
  }, [isLoading, featuredProducts]);

  if (!isMounted) {
    return (
      <section className="scroll-mt-28 py-8 md:py-16 primary-bg">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 no-scrollbar">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 snap-center sm:min-w-0 bg-white rounded-2xl shadow-sm p-6 animate-pulse"
              >
                <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="products" className="scroll-mt-28 py-8 md:py-16 primary-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <div className="featured-header opacity-0">
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                {featuredProductsData.header.title.prefix}
                <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                  {featuredProductsData.header.title.highlight}
                </span>
              </h2>
            </div>

            <p className="featured-subtitle text-white text-base md:text-xl max-w-2xl leading-relaxed opacity-0">
              {featuredProductsData.header.subtitle}
            </p>
          </div>

          <Link href={featuredProductsData.cta.link}>
            <button className="featured-button hidden lg:flex items-center gap-2 bg-yellow text-black font-semibold py-3 px-6 rounded-xl hover:bg-yellow/90 hover:shadow-lg transition-all duration-300 group opacity-0">
              {featuredProductsData.cta.text}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 no-scrollbar">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="min-w-full flex-shrink-0 snap-center sm:min-w-0 bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="bg-gray-200 h-48 rounded-xl mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="relative">
              <div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar pb-4"
              >
                {featuredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="featured-card relative z-10 hover:z-20 min-w-[85%] sm:min-w-0 flex-shrink-0 snap-center bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group will-change-transform opacity-0"
                    onClick={() => router.push(`/${product.id}`)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-46 overflow-hidden">
                      <div className="w-full h-full rounded-xl overflow-hidden bg-white flex items-center justify-center p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={220}
                          height={180}
                          className="object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 bg-gradient-to-b from-gray-100 to-white">
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300 fill-current"
                                }`}
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-600 ml-2 font-medium">
                          ({product.rating})
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-bold text-gray-900 mb-1 text-lg leading-tight group-hover:text-primary-dark transition-colors duration-300 line-clamp-2 ">
                        {product.name}
                      </h3>

                      {/* Category */}
                      <p className="text-sm text-gray-500 mb-2 capitalize font-medium">
                        {getCategoryName(product.category)}
                      </p>

                      {/* Price */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-gray-900">
                            ₹{product.variants[0].price}
                          </span>
                          {product.variants[0].originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.variants[0].originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Quick Action */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Mobile View All */}
        <div className="featured-mobile-button mt-12 text-center lg:hidden opacity-0">
          <Link href={featuredProductsData.cta.link}>
            <button className="bg-yellow text-black font-semibold py-4 px-8 rounded-xl hover:bg-yellow/90 hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
              {featuredProductsData.cta.text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
