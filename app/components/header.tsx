"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useDebounce } from "@/hooks/useDebounce";
import { Product, products } from "@/data/products";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const headerRef = useRef(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Logo animation - fade in and slide from top
      tl.fromTo('.header-logo',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      )
        // Navigation items - stagger animation
        .fromTo('.nav-item',
          { y: -15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
          '-=0.3'
        )
        // Search bar - subtle entrance
        .fromTo('.header-search',
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Search functionality with debounced query
  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = debouncedSearchQuery.toLowerCase();
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    });

    // Limit to 5 results
    setSearchResults(filtered.slice(0, 5));
  }, [debouncedSearchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchDropdownRef.current && !searchDropdownRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearchFocused(true);
  };

  const handleProductClick = () => {
    setIsSearchFocused(false);
    setSearchQuery("");
  };

  const showDropdown = isSearchFocused && searchQuery.trim() !== "";

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="header-logo flex items-center"
          >
            <Image
              src="/vanamithra-logo.png"
              alt="Vanamithra"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, i) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item relative text-gray-700 font-medium hover:text-emerald-600 transition-all text-sm"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#30B254] to-[#96BD40] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search (Desktop) */}
          <div className="hidden lg:flex items-center max-w-sm w-full ml-6 relative" ref={searchDropdownRef}>
            <div className="header-search relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Suggestions Dropdown */}
            <AnimatePresence>
              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                >
                  {searchResults.length > 0 ? (
                    <div className="max-h-96 overflow-y-auto">
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/${product.id}`}
                          onClick={handleProductClick}
                          className="flex items-center gap-3 p-3 hover:bg-emerald-50 transition-colors border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h4>
                            <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                          </div>
                          <div className="text-emerald-600 font-bold text-sm">₹{product.price}</div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 text-center">
                      <div className="text-4xl mb-2">🔍</div>
                      <p className="text-gray-600 font-medium">No products found</p>
                      <p className="text-gray-400 text-sm mt-1">Try searching with different keywords</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 lg:hidden relative" ref={searchDropdownRef}>
          <div className="header-search relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Mobile Search Suggestions Dropdown */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
              >
                {searchResults.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 p-3 hover:bg-emerald-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h4>
                          <p className="text-xs text-gray-500 capitalize">{product.category}</p>
                        </div>
                        <div className="text-emerald-600 font-bold text-sm">₹{product.price}</div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-gray-600 font-medium">No products found</p>
                    <p className="text-gray-400 text-sm mt-1">Try searching with different keywords</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-600 transition"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;