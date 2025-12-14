"use client";

import Image from "next/image";
import { aboutData } from "@/data/home-page";
import { config } from "@/data/config";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  useGSAP(() => {
    // Check if mobile device for performance optimization
    const isMobile = window.innerWidth < 768;

    // Simplified timeline for better mobile performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
        markers: false, // Remove in production
      },
    });

    // Header animations
    tl.fromTo(
      ".about-header",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Divider animation
    tl.fromTo(
      ".about-divider",
      {
        scaleX: 0,
        transformOrigin: "center center",
      },
      {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Content animations - simplified for mobile
    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-left",
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // Left and right content
    contentTl.fromTo(
      [".about-left", ".about-right"],
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      }
    );

    // Optimized feature cards animation for mobile
    if (isMobile) {
      // Simpler animation for mobile - no stagger, no complex transforms
      contentTl.fromTo(
        ".about-feature",
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1, // Minimal stagger
          ease: "power2.out",
        },
        "+=0.1"
      );
    } else {
      // Full animation for desktop
      contentTl.fromTo(
        ".about-feature",
        {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: {
            amount: 0.4,
            from: "start",
            grid: "auto",
          },
          ease: "back.out(1.2)",
        },
        "+=0.2"
      );
    }
  }, []);

  return (
    <section id="about" className="scroll-mt-28 py-8 md:py-16 primary-bg">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="about-header text-3xl md:text-6xl font-bold text-white mb-4">
            {aboutData.title.main}{" "}
            <span className="bg-gradient-to-r from-black to-[#0C3B2E] bg-clip-text text-transparent">
              {aboutData.title.highlight}
            </span>
          </h2>
          <p className="text-white text-base max-w-2xl mx-auto">
            {aboutData.subtitle}
          </p>
          <div className="flex justify-center mt-8">
            <div className="about-divider w-32 h-1 bg-white rounded-full shadow-lg transform scale-x-0"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="about-left space-y-6 md:space-y-8">
            {/* Mission */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl text-center lg:text-left md:text-2xl font-bold text-black">
                {aboutData.mission.heading}
              </h3>
              <p className="text-white text-center lg:text-left text-sm leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>

            {/* Features - Optimized for mobile */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {aboutData.features.map((feature, i) => {
                const getIcon = (iconName: string) => {
                  switch (iconName) {
                    case "shield":
                      return (
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7 text-white"
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
                          className="w-5 h-5 sm:w-7 sm:h-7 text-white"
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
                          className="w-5 h-5 sm:w-7 sm:h-7 text-white"
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
                          className="w-5 h-5 sm:w-7 sm:h-7 text-white"
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
                  <div
                    key={i}
                    className="about-feature group bg-white p-2 md:p-4 sm:p-6 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-transparent transition-all duration-300 will-change-transform"
                  >
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {getIcon(feature.icon)}
                    </div>
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-lg mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE BOX */}
          <div className="about-right relative">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-dark to-primary h-full flex items-center justify-center p-8 md:p-12">
              <div className="text-center text-white flex items-center justify-center flex-col">
                <Image
                  alt="Vanamithra Logo"
                  src="/vanamithra-logo.png"
                  width={120}
                  height={50}
                  className="mb-4 md:mb-6"
                  priority={false}
                />
                <p className="text-white/80 text-base md:text-lg">
                  {config.company.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
