import { motion } from "framer-motion"

export const AboutSection = () => (<section className="py-20 bg-gradient-to-b from-gray-50/50 to-white">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-[#30B254]">Vanamithra</span>
        </h2>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Your trusted partner in organic living and sustainable wellness
        </p>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-[#30B254] to-[#96BD40] rounded-full"></div>
        </div>
      </motion.div>
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Mission Statement */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Empowering Your Journey to Natural Wellness
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Vanamithra, we believe in the power of nature to heal, nourish, and transform lives. 
              Founded with a vision to make organic living accessible to everyone, we carefully curate 
              products that are pure, sustainable, and effective.
            </p>
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🌿",
                title: "100% Natural",
                description: "Pure ingredients from nature"
              },
              {
                icon: "🌎",
                title: "Eco-Friendly",
                description: "Sustainable and ethical sourcing"
              },
              {
                icon: "⭐",
                title: "Premium Quality",
                description: "Rigorous quality standards"
              },
              {
                icon: "💚",
                title: "Health First",
                description: "Wellness-focused products"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#30B254] to-[#96BD40] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-gray-800 text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
  
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button className="bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Our Story</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button className="border-2 border-[#30B254] text-[#30B254] font-semibold py-4 px-8 rounded-xl hover:bg-[#30B254] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <span>Contact Us</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
  
        {/* Right Content - Image/Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#30B254] to-[#96BD40] flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-6xl mb-6">🌱</div>
                <h3 className="text-2xl font-bold mb-4">Vanamithra</h3>
                <p className="text-white/80">Nature's Promise, Delivered</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20"
            >
              <div className="text-2xl">💚</div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20"
            >
              <div className="text-2xl">⭐</div>
            </motion.div>
          </div>
  
          {/* Stats Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#30B254] mb-2">5+</div>
              <div className="text-gray-600 font-medium">Years of Trust</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
  
      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "Our Mission",
            description: "To make organic and sustainable living accessible to every household while supporting local farmers and communities.",
            icon: "🎯"
          },
          {
            title: "Our Vision",
            description: "A world where everyone has access to pure, natural products that promote health and environmental sustainability.",
            icon: "🔭"
          },
          {
            title: "Our Values",
            description: "Integrity, sustainability, quality, and community are the core principles that guide everything we do.",
            icon: "💎"
          }
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#30B254]/20"
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#30B254] to-[#96BD40] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">{value.icon}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {value.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
</section>)
  
  export default AboutSection