import { Search } from "akar-icons";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/assets/hero-bg.png')" }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative md:pt-48 pt-28 px-4 text-center md:w-1/2 mx-auto space-y-8">
        <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24 pt-8">
          <div className="max-w-2xl text-center">
            {/* Main Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Make Your Interior More Minimalistic & Modern
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.4}>
              <p className="text-lg lg:text-xl text-white/80 mb-10 leading-relaxed">
                Turn your room with panto into a lot more minimalist and modern with ease and speed
              </p>
            </FadeIn>

            {/* Search Bar */}
            <FadeIn delay={0.6}>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search furniture"
                  className="w-full px-6 py-4 pr-14 rounded-full text-gray-700 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white-500 bg-white/25 border border-gray-300 text-white"
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent hover:bg-accent-hover rounded-full flex items-center justify-center transition-colors"
                  aria-label="Search"
                >
                  <Search
                    strokeWidth={2}
                    size={20}
                    className="text-white"
                  />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Background gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
