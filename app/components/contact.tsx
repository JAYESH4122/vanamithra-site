"use client";

import { motion } from "framer-motion";
import { contactData } from "@/data/home-page";
import { useState } from "react";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const phone = "917909102100";
    const text = `New Contact Form Submission:
        Name: ${name}
        Email: ${email}
        Message: ${message}`;

    const encoded = encodeURIComponent(text);

    // FIX: use location.href instead of window.open()
    window.location.href = `https://wa.me/${phone}?text=${encoded}`;

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-8 md:py-16 primary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-6xl font-bold text-white mb-4"
          >
            {contactData.title.main}{" "}
            <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
              {contactData.title.highlight}
            </span>
          </motion.h2>

          <p className="text-white text-base max-w-2xl mx-auto">
            {contactData.subtitle}
          </p>

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

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE – CONTACT DETAILS */}
          {/* LEFT SIDE – CONTACT DETAILS */}
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-6">
            {contactData.contactItems.map((item, i) => {
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case "email":
                    return (
                      <svg
                        className="w-4 h-4 md:w-6 md:h-6"
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
                        className="w-4 h-4 md:w-6 md:h-6"
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
                        className="w-4 h-4 md:w-6 md:h-6"
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
                        className="w-4 h-4 md:w-6 md:h-6"
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
                  transition={{
                    duration: 0.4,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-4 bg-white p-3 md:p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-transparent transition-all duration-300 will-change-transform"
                >
                  {/* ICON */}
                  <div
                    className={`md:w-14 md:h-14 w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform shrink-0`}
                  >
                    {getIcon(item.icon)}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 min-w-0 w-full">
                    <h4 className="font-semibold text-gray-800 text-xs md:text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-[10px] md:text-sm mb-1 md:mb-2 leading-tight">
                      {item.description}
                    </p>
                    <p className="text-primary-dark font-medium text-xs md:text-base truncate">
                      {item.contact}
                    </p>
                  </div>

                  {/* HOVER ARROW */}
                  <motion.div
                    initial={{ opacity: 0, x: -5 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="hidden md:block text-primary-dark opacity-0 group-hover:opacity-100 transition-all"
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
          </div>

          <div className="space-y-6">
            {/* SOCIAL MEDIA */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 mt-8">
              <h4 className="font-semibold text-gray-800 text-lg mb-4">
                Follow Us On Social Media
              </h4>
              <p className="text-gray-500 text-sm mb-4">
                Stay updated with our latest products and offers
              </p>

              <div className="flex gap-3">
                {contactData.socialMedia.map((social) => {
                  const getSocialIcon = (iconName: string) => {
                    switch (iconName) {
                      case "facebook":
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12a10 10 0 1 0-11.5 9.88v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1c.9 0 1.9.16 1.9.16v2h-1c-1 0-1.3.63-1.3 1.27V12h2.3l-.36 3h-2v7A10 10 0 0022 12" />
                          </svg>
                        );
                      case "instagram":
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m5 6a4 4 0 104 4a4 4 0 00-4-4m6.5-.25a1.25 1.25 0 11-1.25-1.25a1.25 1.25 0 011.25 1.25" />
                          </svg>
                        );
                      case "twitter":
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 2a4.48 4.48 0 00-4.47 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 3.16s-4 9 5 13a13.05 13.05 0 01-7.88 2.7c9 5.5 20 0 20-12.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3" />
                          </svg>
                        );
                      case "whatsapp":
                        return (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497s.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51c-.173-.008-.371-.01-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347M12.05 24h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374A9.86 9.86 0 01.158 11.892C.157 5.335 5.495 0 12.05 0c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994C21.928 19.55 17.494 24 12.05 24" />
                          </svg>
                        );
                      default:
                        return null;
                    }
                  };

                  return (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-sm hover:shadow-md transition-shadow will-change-transform`}
                    >
                      {getSocialIcon(social.icon)}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE – CONTACT FORM */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-gradient-to-br from-white to-gray-200 p-6 rounded-2xl border border-primary/20 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h3>

                <p className="text-gray-600 mb-6">
                  We&apos;ll get back to you within 24 hours
                </p>

                <div className="space-y-4 flex flex-col">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="h-11 bg-white rounded-lg border border-gray-200 px-4 text-gray-700 text-sm"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="h-11 bg-white rounded-lg border border-gray-200 px-4 text-gray-700 text-sm"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message..."
                    className="h-20 bg-white rounded-lg border border-gray-200 p-4 text-gray-700 text-sm"
                  />

                  <button
                    onClick={sendMessage}
                    className="w-full h-11 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow/90 hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
