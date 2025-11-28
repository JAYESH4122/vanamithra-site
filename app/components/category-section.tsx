"use client";

import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products-data";
import { categories } from "@/data/products";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const CategorySection = () => {
  // Map categories with actual product counts
  const categoriesWithCounts = categories
    .filter((cat) => cat.id !== "all") // Exclude "All Products" category
    .map((category) => {
      const productCount = getProductsByCategory(category.id).length;
      return {
        id: category.id,
        name: category.name,
        image: `/${category.id}.png`, // Assumes images are named after category IDs
        count: productCount,
        gradient: getCategoryGradient(category.id),
      };
    });

  function getCategoryGradient(categoryId: string): string {
    const gradients: Record<string, string> = {
      medicine: "from-primary to-primary-light",
      healthcare: "from-primary to-primary-light",
      beautycare: "from-primary to-primary-light",
      food: "from-primary to-primary-light",
      agriculture: "from-primary to-primary-light",
    };
    return gradients[categoryId] || "from-primary to-primary-light";
  }

  useGSAP(() => {
    // Animated background elements
    gsap.to(".category-bg-1", {
      scale: 1.15,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(".category-bg-2", {
      scale: 1.15,
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    // Header animation
    gsap.fromTo(
      ".category-header-wrapper",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".category-header-wrapper",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Title animation
    gsap.fromTo(
      ".category-title",
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".category-title",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Subtitle animation
    gsap.fromTo(
      ".category-subtitle",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".category-subtitle",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Divider animation
    gsap.fromTo(
      ".category-divider",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".category-divider",
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // Category cards stagger animation
    const cards = gsap.utils.toArray<HTMLElement>(".category-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.08,
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
  }, []);

  return (
    <section
      id="categories"
      className="scroll-mt-28 py-8 md:py-16 primary-bg relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="category-bg-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl will-change-transform" />
        <div className="category-bg-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl will-change-transform" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="category-header-wrapper text-center mb-10 md:mb-16 opacity-0">
          <div className="category-title opacity-0">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Browse by{" "}
              <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                Nature&apos;s Best
              </span>
            </h2>
          </div>

          <p className="category-subtitle text-white text-base md:text-xl max-w-3xl mx-auto leading-relaxed opacity-0">
            Explore categories filled with organic, authentic, nature-crafted
            essentials.
          </p>

          <div className="flex justify-center mt-8">
            <div className="category-divider w-32 h-1 bg-white rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 lg:gap-6">
          {categoriesWithCounts.map((category) => (
            <Link key={category.id} href={`/products?category=${category.id}`}>
              <div className="category-card group cursor-pointer opacity-0">
                <div className="bg-gradient-to-br from-white to-gray-300 border border-gray-200 rounded-2xl p-3 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  {/* Image */}
                  <div className="relative w-16 h-16 sm:w-28 sm:h-28 mb-3 sm:mb-5 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg font-semibold text-black mb-1 text-center group-hover:text-primary-dark transition-colors">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-primary-dark text-xs sm:text-sm">
                    {category.count} {category.count === 1 ? "item" : "items"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Common CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <button className="px-8 py-3 rounded-full bg-yellow text-black font-semibold text-sm shadow-md hover:bg-yellow/90 hover:shadow-lg transition-all">
              Explore All Categories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
