"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { FiStar } from "react-icons/fi";
import { getProductsByCategory } from "@/lib/products-data";
import { categories } from "@/data/products";

export default function ProductsPageClient() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  // Read category from URL query parameter on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      // Verify that the category exists in our categories list
      const categoryExists = categories.some((cat) => cat.id === categoryParam);
      if (categoryExists) {
        setSelectedCategory(categoryParam);
      }
    }
  }, [searchParams]);

  const filteredProducts = getProductsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50">
      <main className="container mx-auto px-4 sm:px-6 py-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              Products
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our collection of organic, natural products sourced directly
            from nature
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filteredProducts.length}
            </span>{" "}
            products
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => router.push(`/${product.id}`)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 group"
            >
              {/* Product Image */}
              <div className="relative w-full h-56 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  🌿
                </div>

                {/* Discount Badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100
                    )}
                    % OFF
                  </div>
                )}

                {/* Stock Badge */}
                {product.inStock && (
                  <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    In Stock
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
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
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-gradient-to-r from-primary to-primary-light text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/${product.id}`);
                  }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </motion.div>
        )}
      </main>
    </div>
  );
}
