"use client";

import { ShoppingBag } from "akar-icons";
import { ChevronDown } from "akar-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
      isScrolled ? "bg-background shadow-sm" : "bg-transparent"
    }`}>
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold tracking-wide transition-colors duration-300 ${isScrolled ? "text-primary" : "text-white"}`}>
              Panto
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
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

          {/* Cart Icon */}
          <div className="flex-shrink-0">
            <button className="relative group" aria-label="Shopping cart">
              <ShoppingBag
                strokeWidth={2}
                size={24}
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-primary hover:text-primary/60"
                    : "text-white hover:text-white/80"
                }`}
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
