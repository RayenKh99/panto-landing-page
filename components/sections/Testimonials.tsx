"use client";

import { ChevronLeft, ChevronRight, Star } from "akar-icons";
import Image from "next/image";
import { useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const testimonials = [
  {
    id: 1,
    name: "Bang Upin",
    role: "Pedagang Asongan",
    review:
      "Terima kasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
    image: "/images/testimonials/card-background1.png",
    avatar: "/images/testimonials/user1.png",
  },
  {
    id: 2,
    name: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 4,
    image: "/images/testimonials/card-background2.png",
    avatar: "/images/testimonials/user2.png",
  },
  {
    id: 3,
    name: "Mpok Ina",
    role: "Karyawan Swasta",
    review:
      "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
    image: "/images/testimonials/card-background3.png",
    avatar: "/images/testimonials/user3.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    setScrollDirection(direction);
    scrollTimeoutRef.current = window.setTimeout(() => {
      setScrollDirection(null);
    }, 420);

    if (direction === "left") {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }
  };

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-40 xl:px-48 2xl:px-56">
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-sm font-bold text-accent uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Our Client Reviews
            </h2>
          </div>
        </FadeIn>

        {/* Testimonials Slider */}
        <FadeIn delay={0.2}>
          <div className="relative">
            {/* Left Arrow - Desktop */}
            <button
              onClick={() => scroll("left")}
              className="hidden sm:flex absolute left-[-24px] top-[30%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:shadow-xl transition-shadow z-30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} strokeWidth={2} className="text-primary" />
            </button>

            {/* Cards Grid */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${
                scrollDirection === "left"
                  ? "testimonials-scroll-left"
                  : scrollDirection === "right"
                    ? "testimonials-scroll-right"
                    : ""
              }`}
            >
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={`${currentIndex}-${testimonial.id}`}
                  className="relative rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300 h-[450px] sm:h-[500px] lg:h-[550px]"
                >
                  {/* Background Image - Full Card */}
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial background`}
                    fill
                    className="object-cover"
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-5 sm:p-6 mx-3 sm:mx-4 mb-3 sm:mb-4 rounded-2xl shadow-lg">
                    {/* Avatar */}
                    <div className="flex justify-center -mt-12 mb-4">
                      <div className="relative w-20 h-20 rounded-full border-8 border-white overflow-hidden">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover drop-shadow-2xl"
                        />
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-primary mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-secondary/60">
                        {testimonial.role}
                      </p>
                    </div>

                    {/* Review Text */}
                    <p className="text-sm text-secondary leading-relaxed text-center mb-4">
                      {testimonial.review}
                    </p>

                    {/* Star Rating */}
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < testimonial.rating
                              ? "text-accent fill-accent"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow - Desktop */}
            <button
              onClick={() => scroll("right")}
              className="hidden sm:flex absolute right-[-24px] top-[30%] -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg items-center justify-center hover:shadow-xl transition-shadow z-30"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} strokeWidth={2} className="text-primary" />
            </button>
          </div>

          {/* Mobile Navigation Arrows */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} strokeWidth={2} className="text-primary" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} strokeWidth={2} className="text-primary" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
