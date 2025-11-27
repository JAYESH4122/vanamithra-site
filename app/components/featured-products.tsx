"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategoryName } from "@/lib/products-data";
import { Product, products } from "@/data/products";
import Image from "next/image";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get the first 4 products as featured products
    setFeaturedProducts(products.slice(0, 4));
    setIsLoading(false);
  }, []);

  const router = useRouter();

  return (
    <section className="py-8 md:py-16 primary-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Featured{" "}
                <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                  Products
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-white text-base md:text-xl max-w-2xl leading-relaxed"
            >
              Our most popular products based on sales
            </motion.p>
          </div>
          <Link href="/products">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
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
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 no-scrollbar">
            {featuredProducts.slice(0, 4).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="min-w-full flex-shrink-0 snap-center sm:min-w-0 bg-gradient-to-br from-white to-gray-300 border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
                onClick={() => router.push(`/${product.id}`)}
              >
                {/* Image Container */}
                <div className="relative w-full h-48 p-6 bg-gradient-to-br from-gray-300 to-white">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-white flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/saffron-gel.jpg"
                      alt={product.name}
                      width={160}
                      height={160}
                      className="object-contain drop-shadow-md"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset- bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300 rounded-2xl" />
                </div>

                {/* Info */}
                <div className="p-6">
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
                  <h3 className="font-bold text-gray-900 mb-2 text-lg leading-tight group-hover:text-primary-dark transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Category */}
                  <p className="text-sm text-gray-500 mb-4 capitalize font-medium">
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
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
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
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center lg:hidden"
        >
          <Link href="/products">
            <button className="bg-gradient-to-r from-primary to-primary-light text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              View All Products
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
