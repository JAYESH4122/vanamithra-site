"use client";

import { motion } from "framer-motion";

export const ContactSection = () => (
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
          Get in <span className="text-[#30B254]">Touch</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {
            "Have questions about our organic products? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          }
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center mt-8">
          <div className="w-24 h-1 bg-gradient-to-r from-[#30B254] to-[#96BD40] rounded-full"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              {"Let's Connect"}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {
                "              Reach out to us for any inquiries about our organic products, wholesale opportunities, or partnership discussions."
              }
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email Us",
                description: "Send us an email anytime",
                contact: "hello@vanamithra.com",
                link: "mailto:hello@vanamithra.com",
              },
              {
                icon: "📞",
                title: "Call Us",
                description: "Mon to Fri from 9am to 6pm",
                contact: "+1 (555) 123-4567",
                link: "tel:+15551234567",
              },
              {
                icon: "📍",
                title: "Visit Us",
                description: "Come say hello at our office",
                contact: "Organic Farm Road, Green Valley",
                link: "#",
              },
            ].map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#30B254] to-[#96BD40] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 text-lg mb-1">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {method.description}
                  </p>
                  <p className="text-[#30B254] font-semibold">
                    {method.contact}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { name: "Facebook", icon: "📘", color: "hover:bg-blue-500" },
                { name: "Instagram", icon: "📷", color: "hover:bg-pink-500" },
                { name: "Twitter", icon: "🐦", color: "hover:bg-blue-400" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B254] focus:border-transparent transition-all duration-300"
                  placeholder="John"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B254] focus:border-transparent transition-all duration-300"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B254] focus:border-transparent transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B254] focus:border-transparent transition-all duration-300"
                placeholder="How can we help you?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#30B254] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform"
            >
              Send Message
            </motion.button>

            <p className="text-center text-gray-500 text-sm">
              {"    We'll get back to you within 24 hours"}
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
