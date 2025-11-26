"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutData } from "@/data/home-page";
import { config } from "@/data/config";

export const AboutSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
    <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
        >
          {aboutData.title.main}{" "}
          <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            {aboutData.title.highlight}
          </span>
        </motion.h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {aboutData.subtitle}
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto mt-6 rounded-full" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-800">
              {aboutData.mission.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {aboutData.mission.description}
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {aboutData.features.map((feature, i) => {
              // Map icon names to SVG components
              const getIcon = (iconName: string) => {
                switch (iconName) {
                  case "shield":
                    return (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                      </svg>
                    );
                  case "globe":
                    return (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                      </svg>
                    );
                  case "star":
                    return (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3 7h7l-5.5 4.2 2.1 7L12 16l-6.6 4.2 2.1-7L2 9h7z" />
                      </svg>
                    );
                  case "check-circle":
                    return (
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21C7 21 3 17 3 12S7 3 12 3s9 4 9 9-4 9-9 9z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    );
                  default:
                    return null;
                }
              };

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {getIcon(feature.icon)}
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT IMAGE BOX */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary to-primary-light h-full flex items-center justify-center p-12">
            <div className="text-center text-white flex items-center justify-center flex-col">
              <Image
                alt=""
                src="/vanamithra-logo.png"
                width={140}
                height={60}
                className="mb-6"
              />
              <p className="text-white/80 text-lg">{config.company.tagline}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;