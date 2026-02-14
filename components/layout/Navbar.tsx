import { ShoppingBag } from "akar-icons";
import { ChevronDown } from "akar-icons";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/50 to-transparent">
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white tracking-wide">
              Panto
            </h1>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-2 text-white text-sm font-medium hover:text-white/80 transition-colors"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Furniture
                <ChevronDown
                  strokeWidth={4}
                  size={12}
                  className="text-white/80"
                />
              </button>
            </div>
            <a
              href="#shop"
              className="text-white text-sm font-medium hover:text-white/80 transition-colors"
            >
              Shop
            </a>
            <a
              href="#about"
              className="text-white text-sm font-medium hover:text-white/80 transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-white text-sm font-medium hover:text-white/80 transition-colors"
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
                className="text-white hover:text-white/80 transition-colors"
              />
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
