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
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-white to-gray-300 p-4 md:p-8 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.12)] border border-surface/30 transition-all duration-500 overflow-hidden">
              {/* Soft hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-primary via-primary-light to-primary transition-opacity duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 text-primary">
                <svg
                  className="w-12 h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.2 }}
                className="flex items-center mb-6"
              >
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
              </motion.div>

              {/* Comment */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.15 + 0.3 }}
                className="text-gray-700 mb-8 leading-relaxed text-sm md:text-lg font-medium"
              >
                “{testimonial.comment}”
              </motion.p>

              {/* Avatar + Info */}
              <div className="flex items-center">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.15 + 0.4 }}
                  className={`h-10 w-10 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-base md:text-lg shadow-md mr-4`}
                >
                  {testimonial.avatar}
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 + 0.45 }}
                >
                  <h4 className="font-bold text-gray-900 text-base md:text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
