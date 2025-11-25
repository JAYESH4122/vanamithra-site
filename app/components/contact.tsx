"use client";

import { motion } from "framer-motion";
import { contactData } from "@/data/home-page";

export const ContactSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
    <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
      {/* HEADER */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          {contactData.title.main}{" "}
          <span className="bg-gradient-to-r from-[#30B254] via-[#96BD40] to-[#30B254] bg-clip-text text-transparent">
            {contactData.title.highlight}
          </span>
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {contactData.subtitle}
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-[#30B254] via-[#96BD40] to-[#30B254] mx-auto mt-6 rounded-full" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* CONTACT INFO */}
        <div className="space-y-6">
          {contactData.contactItems.map((item, i) => {
            // Map icon names to SVG components
            const getIcon = (iconName: string) => {
              switch (iconName) {
                case "email":
                  return (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  );
                case "phone":
                  return (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  );
                case "location":
                  return (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  );
                case "clock":
                  return (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  );
                default:
                  return null;
              }
            };

            return (
              <motion.a
                key={item.id}
                href={item.link}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-start gap-4 bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-transparent transition-all duration-300"
              >
                {/* ICON WITH GRADIENT */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-white`}
                >
                  {getIcon(item.icon)}
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">
                    {item.description}
                  </p>
                  <p className="text-[#30B254] font-medium text-base truncate">
                    {item.contact}
                  </p>
                </div>

                {/* HOVER ARROW */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-[#30B254] opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </motion.a>
            );
          })}

          {/* SOCIALS */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 mt-8">
            <h4 className="font-semibold text-gray-800 text-lg mb-4">
              Follow Us On Social Media
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Stay updated with our latest products and offers
            </p>
            <div className="flex gap-3">
              {contactData.socialMedia.map((social) => {
                // Map icon names to SVG components
                const getSocialIcon = (iconName: string) => {
                  switch (iconName) {
                    case "facebook":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12a10 10 0 1 0-11.5 9.88v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.9.16 1.9.16v2h-1c-1 0-1.3.63-1.3 1.27V12h2.3l-.36 3h-2v7A10 10 0 0 0 22 12" />
                        </svg>
                      );
                    case "instagram":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6a4 4 0 1 0 4 4a4 4 0 0 0-4-4zm6.5-.25a1.25 1.25 0 1 1-1.25-1.25a1.25 1.25 0 0 1 1.25 1.25z" />
                        </svg>
                      );
                    case "twitter":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 2a4.48 4.48 0 0 0-4.47 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 0 1 3 3.16s-4 9 5 13a13.05 13.05 0 0 1-7.88 2.7c9 5.5 20 0 20-12.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3" />
                        </svg>
                      );
                    case "whatsapp":
                      return (
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      );
                    default:
                      return null;
                  }
                };

                return (
                  <motion.a
                    key={social.name}
                    href={social.link || "#"}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-sm hover:shadow-md transition-all duration-300`}
                    title={social.name}
                  >
                    {getSocialIcon(social.icon)}
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CONTACT FORM PLACEHOLDER */}
        <div className="bg-gradient-to-br from-[#30B254]/5 to-[#96BD40]/10 p-8 rounded-2xl border border-[#30B254]/20">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Send us a Message
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;ll get back to you within 24 hours
          </p>
          <div className="space-y-4">
            <div className="h-12 bg-white rounded-lg border border-gray-200 flex items-center px-4 text-gray-400">
              Your Name
            </div>
            <div className="h-12 bg-white rounded-lg border border-gray-200 flex items-center px-4 text-gray-400">
              Your Email
            </div>
            <div className="h-24 bg-white rounded-lg border border-gray-200 flex items-start p-4 text-gray-400">
              Your Message...
            </div>
            <button className="w-full h-12 bg-gradient-to-r from-[#30B254] to-[#96BD40] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
