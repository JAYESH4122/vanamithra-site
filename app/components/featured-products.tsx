"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const FeaturedProducts = () => {
  const [cartItems, setCartItems] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      rating: 4.8,
      image: "/headphones.jpg",
      category: "Electronics",
      discount: 15,
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        rating: 4.8,
        image: "/headphones.jpg",
        category: "Electronics",
        discount: 15,
      },
      {
        id: 2,
        name: "Minimalist Watch",
        price: 149.99,
        rating: 4.6,
        image: "/watch.jpg",
        category: "Accessories",
        discount: 10,
      },
      {
        id: 3,
        name: "Designer Backpack",
        price: 89.99,
        rating: 4.7,
        image: "/backpack.jpg",
        category: "Fashion",
        discount: 20,
      },
      {
        id: 4,
        name: "Smart Home Speaker",
        price: 129.99,
        rating: 4.5,
        image: "/speaker.jpg",
        category: "Electronics",
        discount: 5,
      },
      {
        id: 5,
        name: "Running Shoes",
        price: 119.99,
        rating: 4.9,
        image: "/shoes.jpg",
        category: "Sports",
        discount: 25,
      },
      {
        id: 6,
        name: "Sunglasses",
        price: 79.99,
        rating: 4.4,
        image: "/sunglasses.jpg",
        category: "Accessories",
        discount: 15,
      },
      {
        id: 7,
        name: "Fitness Tracker",
        price: 69.99,
        rating: 4.3,
        image: "/tracker.jpg",
        category: "Electronics",
        discount: 10,
      },
      {
        id: 8,
        name: "Casual T-Shirt",
        price: 29.99,
        rating: 4.2,
        image: "/tshirt.jpg",
        category: "Fashion",
        discount: 30,
      },
    ];

    setFeaturedProducts(mockProducts);
    setIsLoading(false);
  }, []);

  const router = useRouter();

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              Featured <span className="text-[#30B254]">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg max-w-2xl"
            >
              Our most popular products based on sales
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-6 animate-pulse"
              >
                <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
                onClick={() => router.push(`/${product.id}`)}
              >
                {/* Product Image Area */}
                <div className="relative p-6 pb-0">
                  <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center h-48">
                    <div className="flex items-center justify-center h-full w-full">
                      <span className="text-4xl">📦</span>
                    </div>
                  </div>

                  {/* Discount Badge */}
                  {product.discount > 0 && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-[#30B254] hover:text-white transition-all duration-300 group-hover:bg-[#30B254] group-hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart();
                    }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-[#FFD700] fill-current"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      ({product.rating})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg leading-tight group-hover:text-[#0C3B30] transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Category */}
                  <p className="text-sm text-gray-500 mb-3 capitalize">
                    {product.category}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#30B254]">
                        ${product.price}
                      </span>
                      {product.discount > 0 && (
                        <span className="text-lg text-gray-500 line-through">
                          $
                          {(
                            product.price /
                            (1 - product.discount / 100)
                          ).toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Quick Add Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart();
                      }}
                    >
                      <svg
                        className="w-5 h-5"
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
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#30B254]/5 to-[#96BD40]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
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
          <button className="bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};
