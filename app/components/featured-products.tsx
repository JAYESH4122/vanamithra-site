"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getCategoryName } from "@/lib/products-data";
import { Product, products } from "@/data/products";
import Image from "next/image";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 300;
    const scrollAmount = cardWidth + 24; // gap of 24px

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    // Update button states after scroll
    setTimeout(updateScrollButtons, 300);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", updateScrollButtons);
      return () => {
        scrollRef.current?.removeEventListener("scroll", updateScrollButtons);
      };
    }
  }, []);

  if (!isMounted) {
    return (
      <section id="products" className="py-8 md:py-16 primary-bg">
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { stiffness: 100, damping: 15, duration: 0.6 },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { stiffness: 400, damping: 25, duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { stiffness: 300, damping: 20, duration: 0.4 },
    },
  };

  return (
    <section className="py-8 md:py-16 primary-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-white text-base md:text-xl max-w-2xl leading-relaxed"
            >
              Our most popular products based on sales
            </motion.p>
          </div>

          <Link href="/products">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:flex items-center gap-2 bg-yellow text-black font-semibold py-3 px-6 rounded-xl hover:bg-yellow/90 hover:shadow-lg transition-all duration-300 group"
            >
              View All Products
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
            </motion.button>
          </Link>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <motion.div
            className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 no-scrollbar"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="min-w-full flex-shrink-0 snap-center sm:min-w-0 bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="bg-gray-200 h-48 rounded-xl mb-4 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <>
            <div className="relative">
              <motion.div
                ref={scrollRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
              >
                {featuredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    whileHover="hover"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative z-10 hover:z-20 min-w-full flex-shrink-0 snap-center sm:min-w-0 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer group will-change-transform"
                    onClick={() => router.push(`/${product.id}`)}
                  >
                    {/* Image Container */}
                    <div className="relative w-full h-46 overflow-hidden">
                      <motion.div
                        className="w-full h-full rounded-xl overflow-hidden bg-white flex items-center justify-center p-4"
                        variants={imageVariants}
                      >
                        <Image
                          src="/saffron-gel.jpg"
                          alt={product.name}
                          width={240}
                          height={160}
                          className="object-contain drop-shadow-md transition-transform duration-300"
                          priority
                        />
                      </motion.div>
                    </div>

                    {/* Info */}
                    <div className="p-4 bg-gradient-to-b from-gray-100 to-white">
                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating)
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
                            ₹{product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Quick Action */}
                        <motion.div
                          className="opacity-0 group-hover:opacity-100"
                          initial={{ x: 10 }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
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
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Arrow Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6 lg:hidden">
                <motion.button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={`p-3 rounded-2xl shadow-2xl transition-all duration-300 ${
                    canScrollLeft
                      ? "bg-gray-900 hover:bg-gray-800 active:scale-95 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={canScrollLeft ? { scale: 1.1 } : {}}
                  whileTap={canScrollLeft ? { scale: 0.9 } : {}}
                >
                  <svg
                    className={`w-6 h-6 ${
                      canScrollLeft ? "text-white" : "text-gray-200"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                  className={`p-3 rounded-2xl shadow-2xl transition-all duration-300 ${
                    canScrollRight
                      ? "bg-gray-900 hover:bg-gray-800 active:scale-95 cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  whileHover={canScrollRight ? { scale: 1.1 } : {}}
                  whileTap={canScrollRight ? { scale: 0.9 } : {}}
                >
                  <svg
                    className={`w-6 h-6 ${
                      canScrollRight ? "text-white" : "text-gray-200"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </>
        )}

        {/* Mobile View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 text-center lg:hidden"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow text-black font-semibold py-4 px-8 rounded-xl hover:bg-yellow/90 hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              View All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};