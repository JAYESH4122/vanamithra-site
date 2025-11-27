"use client";

import { heroData } from "@/data/home-page";
import { createWhatsAppUrl } from "@/data/config";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export const Hero = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -5 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-8, 0, -8],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants: Variants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(191, 207, 187, 0.4)",
        "0 0 40px rgba(191, 207, 187, 0.2)",
        "0 0 20px rgba(191, 207, 187, 0.4)",
      ],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative primary-bg text-white py-10 md:py-24 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary-dark/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-primary"
              variants={itemVariants}
            >
              {heroData.title.main}
              <span className="">{heroData.title.highlight}</span>
              {heroData.title.suffix}
            </motion.h1>

            <motion.p
              className="text-lg sm:text-2xl mb-6 sm:mb-8 text-white/90 leading-relaxed font-primary"
              variants={itemVariants}
            >
              {heroData.subtitle.text}
              <span className="font-semibold">
                {heroData.subtitle.companyHighlight}
              </span>
              {heroData.subtitle.suffix}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button
                onClick={() => {
                  const whatsappUrl = createWhatsAppUrl(
                    heroData.whatsappMessage
                  );
                  window.open(whatsappUrl, "_blank");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-yellow text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-yellow/90 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2 will-change-transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="font-primary">{heroData.buttons.primary}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="border-2 border-yellow text-yellow font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl hover:bg-yellow/10 transition-colors duration-300 backdrop-blur-sm flex items-center justify-center gap-2 will-change-transform">
                <span className="text-yellow">{heroData.buttons.secondary}</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
