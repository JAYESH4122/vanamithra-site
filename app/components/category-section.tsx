import { motion } from "framer-motion";

export const CategorySection = () => {
  const categories = [
    { id: 1, name: "Medicine", icon: "💊", count: 156 },
    { id: 2, name: "Health Care", icon: "💄", count: 89 },
    { id: 3, name: "Beauty Care", icon: "🧴", count: 73 },
    { id: 4, name: "Food Products", icon: "🥗", count: 112 },
    { id: 5, name: "Agriculture Items", icon: "🌾", count: 67 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-50/20 to-gray-50 relative overflow-hidden">
      {/* Subtle radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(48,178,84,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Shop by <span className="text-[#30B254]">Category</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover thoughtfully curated categories with natural, organic products for your wellbeing
          </p>

          <div className="flex justify-center mt-8">
            <div className="w-28 h-[3px] bg-gradient-to-r from-[#30B254] via-[#96BD40] to-[#30B254] rounded-full shadow-md"></div>
          </div>
        </motion.div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100/80 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col items-center">
                {/* Animated glow border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#30B254]/30 transition duration-500"></div>

                {/* Shine on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-[#30B254] to-[#96BD40] flex items-center justify-center shadow-lg"
                >
                  <span className="text-3xl text-white">{category.icon}</span>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center group-hover:text-[#0C3B30] transition-colors duration-300">
                  {category.name}
                </h3>

                {/* Count */}
                <p className="text-gray-500 text-sm mb-6 text-center group-hover:text-gray-600 transition-colors">
                  {category.count} {category.count === 1 ? "item" : "items"}
                </p>

                {/* Explore Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-auto"
                >
                  <button className="flex items-center gap-2 text-[#30B254] font-semibold text-sm group-hover:text-[#0C3B30] transition-all duration-300">
                    Explore
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
