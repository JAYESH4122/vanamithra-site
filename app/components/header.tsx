"use client";

import { useEffect, useRef, useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  // Fix hydration mismatch by ensuring client-side only execution
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Only run GSAP animations on client side
    if (!isMounted) return;

    const tl = gsap.timeline();

    // Header entrance animation
    tl.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Logo animation
    tl.fromTo(
      logoRef.current,
      { scale: 0.8, rotation: -5 },
      { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Navigation items stagger animation
    tl.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    );

    // Search bar animation
    tl.fromTo(
      ".search-bar",
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.2"
    );
  }, [isMounted]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // Prevent hydration mismatch by rendering consistent content
  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 font-poppins"
      // Removed cz-shortcut-listen attribute that was causing hydration error
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with enhanced styling */}
          <div ref={logoRef} className="flex items-center group">
            <div className="relative">
              <Image
                src="/vanamithra-logo.png"
                alt="Vanamithra"
                width={160}
                height={40}
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-sm"
                loading="eager" // Prevent lazy loading for logo
              />
            </div>
          </div>

          {/* Desktop Navigation with enhanced responsive breakpoints */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item relative px-3 xl:px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-300 group text-sm xl:text-base"
              >
                <span className="relative z-10 whitespace-nowrap">
                  {item.name}
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-300 group-hover:w-full"></div>
              </a>
            ))}
          </nav>

          {/* Search Bar with better responsive behavior */}
          <div className="hidden lg:flex flex-1 max-w-md xl:max-w-xl mx-4 xl:mx-8">
            <div className="search-bar relative w-full transform transition-all duration-300 hover:scale-[1.02]">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 xl:py-3 px-4 xl:px-6 text-black rounded-2xl border border-gray-200 bg-gray-50/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 shadow-sm transition-all duration-300 font-light text-sm xl:text-base"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300">
                <FiSearch size={18} className="xl:w-5 xl:h-5" />
              </button>
            </div>
          </div>

          {/* Action Icons with responsive sizing */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMounted ? (
                <motion.div
                  animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              ) : (
                <FiMenu size={24} /> // Default server render
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search - Always visible on mobile */}
        <div className="mt-4 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for organic products..."
              className="w-full py-3 px-4 rounded-xl border text-black border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-400 shadow-sm transition-all duration-300 text-sm sm:text-base"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-emerald-600 rounded-lg transition-colors duration-300">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMounted && ( // Only render animated menu on client side
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="py-4 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-300 font-medium border-b border-gray-100 last:border-b-0 text-base sm:text-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
