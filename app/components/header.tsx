"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { Product, products } from "@/data/products";
import { headerData } from "@/data/home-page";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { autoHeight } from "@/utils/home";
import { useRouter } from "next/navigation";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const searchDropdownRef = useRef<HTMLDivElement>(null);

  const navItems = headerData.navItems;
  const router = useRouter();

  // Main header animations
  useGSAP(
    () => {
      // Simple fade in up animation for all header elements
      gsap.fromTo(
        ".header-element",
        {
          y: -10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    },
    { scope: headerRef }
  );

  // Mobile menu animation with item animations
  useEffect(() => {
    if (!mobileMenuRef.current) return;
    const menu = mobileMenuRef.current;

    autoHeight(menu, isMenuOpen);

    if (isMenuOpen) {
      gsap.fromTo(
        menu.querySelectorAll(".mobile-nav-item"),
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
          stagger: 0.06,
        }
      );
    }
  }, [isMenuOpen]);

  // Mobile search animation
  useEffect(() => {
    if (!mobileSearchRef.current) return;

    if (showMobileSearch) {
      gsap.to(mobileSearchRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileSearchRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [showMobileSearch]);

  // Search dropdown animation
  useEffect(() => {
    if (!searchDropdownRef.current) return;

    const showDropdown = isSearchFocused && searchQuery.trim() !== "";

    if (showDropdown) {
      gsap.to(searchDropdownRef.current, {
        opacity: 1,
        scaleY: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    } else {
      gsap.to(searchDropdownRef.current, {
        opacity: 0,
        scaleY: 0,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isSearchFocused, searchQuery]);

  // Search functionality
  useEffect(() => {
    if (debouncedSearchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const query = debouncedSearchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    setSearchResults(filtered.slice(0, 5));
  }, [debouncedSearchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchDropdownRef.current &&
        !searchDropdownRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchFocused(false);
        if (showMobileSearch) {
          setShowMobileSearch(false);
          setSearchQuery("");
        }
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showMobileSearch, isMenuOpen]);

  // Focus mobile search input when opened
  useEffect(() => {
    if (showMobileSearch && mobileSearchRef.current) {
      const input = mobileSearchRef.current.querySelector("input");
      input?.focus();
    }
  }, [showMobileSearch]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsSearchFocused(true);
  };

  const handleProductClick = () => {
    setIsSearchFocused(false);
    setSearchQuery("");
    setShowMobileSearch(false);
    setIsMenuOpen(false);
  };

  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      setIsSearchFocused(false);
      setSearchQuery("");
    }
    // Close menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close search if open
    if (showMobileSearch) {
      setShowMobileSearch(false);
    }
  };

  const showDropdown = isSearchFocused && searchQuery.trim() !== "";

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Dynamic header height (correct even after GSAP animations)
    const headerHeight = headerRef.current?.offsetHeight || 80;

    // Calculate real section position
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = sectionPosition - headerHeight - 10;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Close mobile overlays
    setIsMenuOpen(false);
    setShowMobileSearch(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 py-2 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-element flex items-center">
            <Image
              src="/vanamithra-logo.png"
              alt="Vanamithra"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.href.startsWith("/#")) {
                    // Scroll behavior
                    const id = item.href.replace("/#", "");
                    scrollToSection(id);
                  } else {
                    // Route navigation
                    router.push(item.href);
                  }
                }}
                className="header-element relative text-gray-700 font-medium transition-all duration-300 text-sm group hover:-translate-y-0.5"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-primary to-primary-light transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Search (Desktop) */}
          <div className="hidden lg:flex items-center max-w-sm w-full ml-6 relative">
            <div className="header-element relative w-full">
              <input
                type="text"
                placeholder={headerData.search.placeholder}
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Suggestions Dropdown */}
            <div
              ref={searchDropdownRef}
              className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50 origin-top"
              style={{ opacity: 0, transform: "scaleY(0)" }}
            >
              {searchResults.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/${product.id}`}
                      onClick={handleProductClick}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 capitalize">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-primary-dark font-bold text-sm">
                        ₹{product.variants[0].price}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-2">
                    {headerData.search.noResults.title}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {headerData.search.noResults.message}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {headerData.search.noResults.subMessage}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              className="header-element text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={handleMobileSearchToggle}
            >
              <FiSearch size={20} />
            </button>

            <button
              className="header-element text-gray-700 p-2 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div
          ref={mobileSearchRef}
          className="lg:hidden mt-3 relative"
          style={{ height: 0, opacity: 0, overflow: "hidden" }}
        >
          <div className="relative">
            <input
              type="text"
              placeholder={headerData.search.placeholder}
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => setIsSearchFocused(true)}
              className="w-full px-4 py-3 rounded-2xl border border-gray-300 bg-white text-gray-700  shadow-sm focus:outline-none  focus:ring-primary/50  focus:border-primary transition-all"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Mobile Search Dropdown */}
          {showDropdown && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
              {searchResults.length > 0 ? (
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/${product.id}`}
                      onClick={handleProductClick}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 capitalize">
                          {product.category}
                        </p>
                      </div>
                      <div className="text-primary-dark font-bold text-sm">
                        ₹{product.variants[0].price}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="text-4xl mb-2">
                    {headerData.search.noResults.title}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {headerData.search.noResults.message}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {headerData.search.noResults.subMessage}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-start flex-col space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href.replace("/#", ""))}
              className="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium transition-all duration-300 hover:translate-x-1 active:scale-95"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
