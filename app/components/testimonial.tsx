"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/data/home-page";

export const TestimonialSection = () => (
  <section className="py-8 md:py-16 primary-bg">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-16">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {testimonialsData.title.main}{" "}
            <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
              {testimonialsData.title.highlight}
            </span>{" "}
            {testimonialsData.title.suffix}
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          {testimonialsData.subtitle}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <div className="w-32 h-1 bg-white rounded-full shadow-lg"></div>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonialsData.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            className="group relative will-change-transform"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-100 p-5 md:p-8 shadow-[0_6px_20px_-5px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_-4px_rgba(0,0,0,0.12)] border border-gray-200/50 transition-all duration-500 overflow-hidden">
              {/* Soft hover sheen */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary via-primary-light to-primary transition-opacity duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 text-primary">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17c-1.1 0-2-.9-2-2v-3c0-3 2.3-5.7 6-7l.6 1.2C9.1 7.1 8 9 8 11h2v4c0 1.1-.9 2-2 2zm10 0c-1.1 0-2-.9-2-2v-3c0-3 2.3-5.7 6-7l.6 1.2C19.1 7.1 18 9 18 11h2v4c0 1.1-.9 2-2 2z"></path>
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-500 ml-2 font-medium">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-8 leading-relaxed text-sm md:text-lg font-medium">
                “{testimonial.comment}”
              </p>

              {/* Avatar + Name + Role */}
              <div className="flex items-center">
                {/* Avatar */}
                <div
                  className={`h-10 w-10 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-base md:text-lg shadow-md mr-4`}
                >
                  {testimonial.avatar}
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Review Submission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 md:mt-16"
      >
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-100 p-4 md:p-6 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] border border-gray-200/60">
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              {/* Input Field */}
              <input
                type="text"
                placeholder="Share your experience with us..."
                className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-yellow focus:outline-none transition-all duration-300 text-gray-700 placeholder-gray-400 text-sm md:text-base shadow-sm"
              />

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-5 md:px-7 py-3 md:py-4 rounded-xl bg-yellow text-gray-900 font-bold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Submit</span>

                {/* New clean send icon — small on mobile */}
                <motion.svg
                  className="w-4 h-4 md:w-5 md:h-5 relative z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2L15 22l-4-9-9-4 20-7z"></path>
                </motion.svg>

                {/* Animated sheen effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 will-change-transform"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
