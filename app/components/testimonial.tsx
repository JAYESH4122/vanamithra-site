import { motion } from "framer-motion";

export const TestimonialSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
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
          What Our <span className="text-[#30B254]">Customers</span> Say
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Don't just take our word for it - hear from thousands of satisfied
          customers who trust Vanamithra for their organic lifestyle
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-[#30B254] to-[#96BD40] rounded-full"></div>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {[
          {
            name: "Sarah Johnson",
            role: "Health Enthusiast",
            comment:
              "The quality of organic products I've purchased from Vanamithra has been exceptional. Their commitment to sustainability and natural ingredients is truly impressive!",
            rating: 5,
            avatar: "SJ",
            color: "from-blue-400 to-cyan-500",
          },
          {
            name: "Michael Chen",
            role: "Nutrition Expert",
            comment:
              "As someone who values pure nutrition, I'm impressed with Vanamithra's product selection and authenticity. Everything is exactly as described - pure and natural.",
            rating: 5,
            avatar: "MC",
            color: "from-emerald-400 to-green-500",
          },
          {
            name: "Emma Rodriguez",
            role: "Wellness Coach",
            comment:
              "I regularly recommend Vanamithra products to my clients. The quality and effectiveness of their natural solutions are consistently outstanding.",
            rating: 4,
            avatar: "ER",
            color: "from-purple-400 to-pink-500",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative"
          >
            {/* Background Card */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#30B254] to-[#96BD40] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <svg
                  className="w-12 h-12 text-[#30B254]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-[#FFD700] fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2 font-medium">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Comment */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10"
              >
                &ldquo;{testimonial.comment}&rdquo;
              </motion.p>

              {/* Customer Info */}
              <div className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.4,
                    type: "spring",
                  }}
                  className={`relative h-14 w-14 rounded-2xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">
                    {testimonial.avatar}
                  </span>

                  {/* Online Indicator */}
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                >
                  <h4 className="font-bold text-gray-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {testimonial.role}
                  </p>
                </motion.div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
      >
        {[
          { number: "10K+", label: "Happy Customers" },
          { number: "4.9/5", label: "Average Rating" },
          { number: "500+", label: "Products" },
          { number: "98%", label: "Satisfaction Rate" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#30B254] mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
 export default TestimonialSection