"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/lib/products-data";
import { categories } from "@/data/products";

export const CategorySection = () => {
  // Map categories with actual product counts
  const categoriesWithCounts = categories
    .filter(cat => cat.id !== "all") // Exclude "All Products" category
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
      medicine: "from-emerald-400 to-teal-500",
      healthcare: "from-teal-400 to-cyan-500",
      beautycare: "from-pink-400 to-rose-500",
      food: "from-orange-400 to-amber-500",
      agriculture: "from-lime-400 to-green-500",
    };
    return gradients[categoryId] || "from-gray-400 to-gray-500";
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Browse by{" "}
              <span className="bg-gradient-to-r from-[#30B254] via-[#96BD40] to-[#30B254] bg-clip-text text-transparent">
                Nature’s Best
              </span>
            </h2>
          </motion.div>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Explore categories filled with organic, authentic, nature-crafted essentials.
          </motion.p>


          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-[#30B254] via-[#96BD40] to-[#30B254] rounded-full shadow-lg"></div>
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
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center">

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
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 text-center group-hover:text-[#30B254] transition-colors">
                    {category.name}
                  </h3>

                  {/* Count */}
                  <p className="text-gray-500 text-sm">
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
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all">
              Explore All Categories
            </button>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default CategorySection;
