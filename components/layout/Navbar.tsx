"use client";

import { ShoppingBag, Cross, ThreeLineHorizontal } from "akar-icons";
import { ChevronDown } from "akar-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled || isMobileMenuOpen ? "bg-background shadow-sm" : "bg-transparent"
    }`}>
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold tracking-wide transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
            }`}>
              Panto
            </h1>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            <div className="relative group">
              <button
                type="button"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-primary hover:text-primary/60"
                    : "text-white hover:text-white/80"
                }`}
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Furniture
                <ChevronDown
                  strokeWidth={4}
                  size={12}
                  className={`transition-colors duration-300 ${isScrolled ? "text-primary/60" : "text-white/80"}`}
                />
              </button>
            </div>
            <a
              href="#shop"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-primary hover:text-primary/60"
                  : "text-white hover:text-white/80"
              }`}
            >
              Shop
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-primary hover:text-primary/60"
                  : "text-white hover:text-white/80"
              }`}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled
                  ? "text-primary hover:text-primary/60"
                  : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Right Side: Cart + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button className="relative group" aria-label="Shopping cart">
              <ShoppingBag
                strokeWidth={2}
                size={24}
                className={`transition-colors duration-300 ${
                  isScrolled || isMobileMenuOpen
                    ? "text-primary hover:text-primary/60"
                    : "text-white hover:text-white/80"
                }`}
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Hamburger Menu Button - Mobile/Tablet Only */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <Cross
                  strokeWidth={2}
                  size={24}
                  className="text-primary"
                />
              ) : (
                <ThreeLineHorizontal
                  strokeWidth={2}
                  size={24}
                  className={`transition-colors duration-300 ${
                    isScrolled ? "text-primary" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-gray-200">
          <div className="px-5 sm:px-8 py-6 space-y-1">
            <a
              href="#furniture"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between py-3 text-primary font-medium"
            >
              Furniture
              <ChevronDown strokeWidth={4} size={12} className="text-primary/60" />
            </a>
            <a
              href="#shop"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-primary font-medium"
            >
              Shop
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-primary font-medium"
            >
              About Us
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-primary font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
