"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products-data";
import { categories } from "@/data/products";

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

  return (
    <section className="py-8 md:py-16 primary-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Browse by{" "}
              <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
                Nature&apos;s Best
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Explore categories filled with organic, authentic, nature-crafted
            essentials.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="w-32 h-1 bg-white rounded-full shadow-lg"></div>
          </motion.div>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {categoriesWithCounts.map((category, index) => (
            <Link key={category.id} href={`/products?category=${category.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-white to-gray-300 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">
                  {/* Image */}
                  <div className="relative w-28 h-28 mb-5 rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black mb-1 text-center group-hover:text-primary-dark transition-colors">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-primary-dark text-sm">
                    {category.count} {category.count === 1 ? "item" : "items"}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Common CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/products">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all">
              Explore All Categories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
