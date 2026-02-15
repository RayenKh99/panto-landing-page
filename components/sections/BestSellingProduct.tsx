"use client";

import { Plus, Star, ChevronLeft, ChevronRight } from "akar-icons";
import Image from "next/image";
import { useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const products = [
  // Chair
  {
    id: 1,
    category: "Chair",
    name: "Sakarias Armchair",
    price: 392,
    image: "/images/products/sakarias-armchair.png",
    rating: 5,
  },
  {
    id: 2,
    category: "Chair",
    name: "Baltsar Chair",
    price: 299,
    image: "/images/products/baltsar-chair.png",
    rating: 5,
  },
  {
    id: 3,
    category: "Chair",
    name: "Anjay Chair",
    price: 519,
    image: "/images/products/anjay-chair.png",
    rating: 5,
  },
  {
    id: 4,
    category: "Chair",
    name: "Nyantuy Chair",
    price: 921,
    image: "/images/products/nyantuy-chair.png",
    rating: 5,
  },
  // Beds
  {
    id: 5,
    category: "Beds",
    name: "Luxora King Bed",
    price: 1299,
    image: "/images/products/luxora-king-bed.png",
    rating: 5,
  },
  {
    id: 6,
    category: "Beds",
    name: "Nordik Single Bed",
    price: 749,
    image: "/images/products/nordik-single-bed.png",
    rating: 4,
  },
  {
    id: 7,
    category: "Beds",
    name: "Somnia Queen Bed",
    price: 999,
    image: "/images/products/somnia-queen-bed.png",
    rating: 5,
  },
  {
    id: 8,
    category: "Beds",
    name: "Restwell Double Bed",
    price: 859,
    image: "/images/products/restwell-double-bed.png",
    rating: 4,
  },
  // Sofa
  {
    id: 9,
    category: "Sofa",
    name: "Velvet Cloud Sofa",
    price: 1450,
    image: "/images/products/velvet-clloud-sofa.png",
    rating: 5,
  },
  {
    id: 10,
    category: "Sofa",
    name: "Moderno L-Shape",
    price: 1899,
    image: "/images/products/moderno-l-shape.png",
    rating: 5,
  },
  {
    id: 11,
    category: "Sofa",
    name: "Compact Loveseat",
    price: 699,
    image: "/images/products/compact-loveseat.png",
    rating: 4,
  },
  {
    id: 12,
    category: "Sofa",
    name: "Recliner Pro Sofa",
    price: 1120,
    image: "/images/products/recliner-pro-sofa.png",
    rating: 5,
  },
  // Lamp
  {
    id: 13,
    category: "Lamp",
    name: "Aurora Floor Lamp",
    price: 189,
    image: "/images/products/aurora-floor-lamp.png",
    rating: 5,
  },
  {
    id: 14,
    category: "Lamp",
    name: "Pendant Globe Light",
    price: 245,
    image: "/images/products/pendant-globe-light.png",
    rating: 4,
  },
  {
    id: 15,
    category: "Lamp",
    name: "Minimalist Desk Lamp",
    price: 129,
    image: "/images/products/minimalist-desk-lamp.png",
    rating: 5,
  },
  {
    id: 16,
    category: "Lamp",
    name: "Vintage Edison Lamp",
    price: 175,
    image: "/images/products/vintage-edisson-lamp.png",
    rating: 4,
  },
];

export default function BestSellingProduct() {
  const [activeCategory, setActiveCategory] = useState("Chair");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const pageSize = 4;

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setScrollDirection(null);
  };

  const scroll = (direction: "left" | "right") => {
    if (filteredProducts.length === 0) return;

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    setScrollDirection(direction);
    scrollTimeoutRef.current = window.setTimeout(() => {
      setScrollDirection(null);
    }, 300);

    if (direction === "left") {
      setCurrentIndex((prev) =>
        prev === 0 ? filteredProducts.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === filteredProducts.length - 1 ? 0 : prev + 1
      );
    }
  };

  const visibleCount = Math.min(pageSize, filteredProducts.length);
  const visibleProducts =
    filteredProducts.length === 0
      ? []
      : Array.from({ length: visibleCount }, (_, index) =>
          filteredProducts[(currentIndex + index) % filteredProducts.length]
        );

  return (
    <section className="bg-background py-16 lg:py-32">
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
              Best Selling Product
            </h2>

            {/* Category Tabs */}
            <div className="inline-flex items-center bg-[#EEEEEE] rounded-full p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-white text-primary"
                      : "text-primary/60 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex justify-center mb-8 sm:mb-12" />
          </div>
        </FadeIn>

        {/* Product Grid with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute left-[-20px] top-[50%] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg transition-shadow z-10"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} strokeWidth={2} className="text-primary" />
          </button>

          {/* Product Grid */}
          <FadeIn key={activeCategory}>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 ${
                scrollDirection === "left"
                  ? "product-scroll-left"
                  : scrollDirection === "right"
                    ? "product-scroll-right"
                    : ""
              }`}
            >
              {visibleProducts.map((product) => (
                <div
                  key={`${activeCategory}-${product.id}`}
                  className="bg-white rounded-2xl pb-6 px-2 hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <div className="relative w-full aspect-square mb-6">
                    <div className="relative w-full h-full bg-gray-50 rounded-t-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3 px-4">
                    {/* Category Label */}
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: "#8D8D8D" }}
                    >
                      {product.category}
                    </span>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-secondary">
                      {product.name}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-accent fill-accent"
                        />
                      ))}
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-bold text-secondary">
                        $ {product.price}
                      </span>
                      <button
                        className="w-10 h-10 bg-secondary hover:bg-secondary/90 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Add to cart"
                      >
                        <Plus size={20} strokeWidth={2} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute right-[-20px] top-[50%] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:shadow-lg transition-shadow z-10"
            aria-label="Next products"
          >
            <ChevronRight size={20} strokeWidth={2} className="text-primary" />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} strokeWidth={2} className="text-primary" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label="Next products"
          >
            <ChevronRight size={20} strokeWidth={2} className="text-primary" />
          </button>
        </div>

        {/* View All Link */}
        <FadeIn delay={0.3}>
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="#products"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-base font-semibold transition-colors group"
            >
              View All
              <ChevronRight
                size={16}
                strokeWidth={2}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
