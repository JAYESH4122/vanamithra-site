"use client";

import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { useDebounce } from "@/hooks/useDebounce";
import { Product, products } from "@/data/products";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const searchDropdownRef = useRef<HTMLDivElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const searchDropdownDesktopRef = useRef<HTMLDivElement>(null);
  const searchDropdownMobileRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Categories", href: "/#categories" },
    { name: "Products", href: "/#products" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
  ];

  // Animate header on mount
  useGSAP(() => {
    // Logo animation
    gsap.fromTo(
      ".header-logo",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );

    // Nav items stagger
    gsap.fromTo(
      ".nav-item",
      { y: -15, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.1,
        ease: "power2.out",
      }
    );

    // Search bar animation
    gsap.fromTo(
      ".header-search",
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      // Animate menu items
      gsap.fromTo(
        ".mobile-nav-item",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    } else if (!isMenuOpen && mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  // Animate mobile search
  useEffect(() => {
    if (showMobileSearch && mobileSearchRef.current) {
      gsap.fromTo(
        mobileSearchRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    } else if (!showMobileSearch && mobileSearchRef.current) {
      gsap.to(mobileSearchRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [showMobileSearch]);

  // Animate search dropdowns
  useEffect(() => {
    const showDropdown = isSearchFocused && searchQuery.trim() !== "";

    if (showDropdown) {
      if (searchDropdownDesktopRef.current) {
        gsap.fromTo(
          searchDropdownDesktopRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
        );
      }
      if (searchDropdownMobileRef.current) {
        gsap.fromTo(
          searchDropdownMobileRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
        );
      }
    } else {
      if (searchDropdownDesktopRef.current) {
        gsap.to(searchDropdownDesktopRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            if (searchDropdownDesktopRef.current) {
              searchDropdownDesktopRef.current.style.display = "none";
            }
          },
        });
      }
      if (searchDropdownMobileRef.current) {
        gsap.to(searchDropdownMobileRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease: "power2.out",
          onComplete: () => {
            if (searchDropdownMobileRef.current) {
              searchDropdownMobileRef.current.style.display = "none";
            }
          },
        });
      }
    }

    // Make sure dropdown is visible before animating in
    if (showDropdown) {
      if (searchDropdownDesktopRef.current) {
        searchDropdownDesktopRef.current.style.display = "block";
      }
      if (searchDropdownMobileRef.current) {
        searchDropdownMobileRef.current.style.display = "block";
      }
    }
  }, [isSearchFocused, searchQuery]);

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

  // Handle escape key to close dropdown and mobile search
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchFocused(false);
        if (showMobileSearch) {
          setShowMobileSearch(false);
          setSearchQuery("");
        }
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showMobileSearch]);

  // Focus mobile search input when opened
  useEffect(() => {
    if (showMobileSearch && mobileSearchInputRef.current) {
      mobileSearchInputRef.current.focus();
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
  };

  const handleMobileSearchToggle = () => {
    setShowMobileSearch(!showMobileSearch);
    if (!showMobileSearch) {
      setIsSearchFocused(false);
      setSearchQuery("");
    }
  };

  const showDropdown = isSearchFocused && searchQuery.trim() !== "";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo flex items-center opacity-0">
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
              <a
                key={item.name}
                href={item.href}
                className="nav-item relative text-gray-700 font-medium hover:text-primary-dark transition-all text-sm group opacity-0"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Search (Desktop) */}
          <div
            className="hidden lg:flex items-center max-w-sm w-full ml-6 relative"
            ref={searchDropdownRef}
          >
            <div className="header-search relative w-full opacity-0">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Search Suggestions Dropdown */}
            {showDropdown && (
              <div
                ref={searchDropdownDesktopRef}
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                style={{ display: "none" }}
              >
                {searchResults.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 p-3 hover:bg-surface/30 transition-colors border-b border-gray-100 last:border-b-0"
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
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-gray-600 font-medium">
                      No products found
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Mobile Search Toggle Button */}
            <button
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={handleMobileSearchToggle}
            >
              <FiSearch size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - Only shown when toggled */}
        {showMobileSearch && (
          <div
            ref={mobileSearchRef}
            className="lg:hidden mt-3 relative"
            style={{ height: 0, opacity: 0, overflow: "hidden" }}
          >
            <div className="header-search relative">
              <input
                ref={mobileSearchInputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Mobile Search Suggestions Dropdown */}
            {showDropdown && (
              <div
                ref={searchDropdownMobileRef}
                className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50"
                style={{ display: "none" }}
              >
                {searchResults.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/${product.id}`}
                        onClick={handleProductClick}
                        className="flex items-center gap-3 p-3 hover:bg-surface/30 transition-colors border-b border-gray-100 last:border-b-0"
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
                    <div className="text-4xl mb-2">🔍</div>
                    <p className="text-gray-600 font-medium">
                      No products found
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Try searching with different keywords
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          style={{ height: 0, opacity: 0, overflow: "hidden" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="mobile-nav-item py-3 px-4 rounded-lg text-gray-700 font-medium hover:bg-surface hover:text-[var(--color-primary-dark)] transition opacity-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
