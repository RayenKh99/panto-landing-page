"use client";

import { Plus, Star, ChevronLeft, ChevronRight } from "akar-icons";
import Image from "next/image";
import { useState } from "react";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const products = [
  {
    id: 1,
    name: "Sakarias Armchair",
    price: 392,
    image: "/images/products/sakarias-armchair.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Baltsar Chair",
    price: 299,
    image: "/images/products/baltsar-chair.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Anjay Chair",
    price: 519,
    image: "/images/products/anjay-chair.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Nyantuy Chair",
    price: 921,
    image: "/images/products/nyantuy-chair.png",
    rating: 5,
  },
];

export default function BestSellingProduct() {
  const [activeCategory, setActiveCategory] = useState("Chair");
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) =>
        prev === 0 ? products.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }
  };

  const visibleProducts = [
    products[(currentIndex) % products.length],
    products[(currentIndex + 1) % products.length],
    products[(currentIndex + 2) % products.length],
    products[(currentIndex + 3) % products.length],
  ];

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
            Best Selling Product
          </h2>

          {/* Category Tabs */}
          <div className="inline-flex items-center bg-[#EEEEEE] rounded-full p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-white text-primary"
                    : "text-primary/60 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex justify-center mb-12" />
        </div>

        {/* Product Grid with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-[50%] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow z-10"
            aria-label="Previous products"
          >
            <ChevronLeft size={20} strokeWidth={2} className="text-primary" />
          </button>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <div
                key={product.id}
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
                  <span className="text-xs font-medium uppercase tracking-wide" style={{ color: "#8D8D8D" }}>
                    Chair
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

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-[50%] -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow z-10"
            aria-label="Next products"
          >
            <ChevronRight size={20} strokeWidth={2} className="text-primary" />
          </button>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
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
      </div>
    </section>
  );
}
