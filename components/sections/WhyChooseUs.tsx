import { ArrowRight } from "akar-icons";
import FadeIn from "@/components/ui/FadeIn";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
          {/* Title */}
          <FadeIn className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Why
              <br />
              Choosing Us
            </h2>
          </FadeIn>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1: Luxury facilities */}
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  Luxury facilities
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  The advantage of hiring a workspace with us is that givees you
                  comfortable service and all-around facilities.
                </p>
                <a
                  href="#luxury"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors group"
                >
                  More Info
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </FadeIn>

            {/* Feature 2: Affordable Price */}
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  Affordable Price
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  You can get a workspace of the highest quality at an affordable
                  price and still enjoy the facilities that are oly here.
                </p>
                <a
                  href="#affordable"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors group"
                >
                  More Info
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </FadeIn>

            {/* Feature 3: Many Choices */}
            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  Many Choices
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  We provide many unique work space choices so that you can choose
                  the workspace to your liking.
                </p>
                <a
                  href="#choices"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-sm font-semibold transition-colors group"
                >
                  More Info
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
