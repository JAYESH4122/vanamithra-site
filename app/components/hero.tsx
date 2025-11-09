import { motion } from 'framer-motion';

export const Hero = ()=> (
    <section className="relative bg-gradient-to-r from-[#0C3B30] via-[#30B254] to-[#96BD40] text-white py-16 md:py-24 overflow-hidden">
  {/* Background decorative elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#0C3B30]/20 rounded-full blur-3xl"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#96BD40]/10 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      {/* Text Content */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Embrace <span className="text-[#FFD700]">Natural</span> Living
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-xl sm:text-2xl mb-8 text-white/90 leading-relaxed max-w-2xl"
        >
          Discover authentic organic products and sustainable solutions from 
          <span className="font-semibold text-[#FFD700]"> Vanamithra</span>. 
          Your journey to wellness starts here.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <button className="bg-white text-[#0C3B30] font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
            <span>Shop Now</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          
          <button className="border-2 border-white/80 text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center justify-center gap-2 group">
            <span>Explore Products</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0"
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FFD700]">500+</div>
            <div className="text-white/80 text-sm">Organic Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FFD700]">10K+</div>
            <div className="text-white/80 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FFD700]">50+</div>
            <div className="text-white/80 text-sm">Farm Partners</div>
          </div>
        </motion.div>
      </div>

      {/* Product Card */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-md"
        >
          {/* Floating elements */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
          >
            <div className="text-2xl">🌿</div>
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/20"
          >
            <div className="text-2xl">⭐</div>
          </motion.div>

          {/* Main product card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2DAF51]/30 to-[#96BD40]/20 rounded-3xl blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-[#2DAF51] to-[#96BD40] rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              {/* Discount badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
              >
                20% OFF
              </motion.div>

              {/* Product image area */}
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/20 mb-6">
                <div className="aspect-square rounded-xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-6xl sm:text-7xl"
                  >
                    🌱
                  </motion.div>
                </div>
              </div>

              {/* Product info */}
              <div className="text-center">
                <h3 className="font-bold text-white text-xl sm:text-2xl mb-2">
                  Organic Honey Bundle
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Pure natural honey from sustainable beekeeping
                </p>
                
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#FFD700]">
                    ₹199.99
                  </span>
                  <span className="text-lg text-white/60 line-through">
                    ₹249.99
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg
                      key={star}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9 + star * 0.1 }}
                      className="w-5 h-5 text-[#FFD700] fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                  <span className="text-white/80 text-sm ml-2">(4.8)</span>
                </div>

                {/* Add to cart button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-[#0C3B30] font-semibold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>
)

export default Hero