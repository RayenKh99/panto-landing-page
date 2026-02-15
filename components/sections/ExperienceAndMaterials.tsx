import { ArrowRight } from "akar-icons";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function ExperienceAndMaterials() {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Experience Block */}
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-32 pb-10 md:pb-20">
            {/* Experience Content */}
            <div className="flex flex-col space-y-6 sm:space-y-8 md:pr-12 lg:pr-16 max-w-2xl order-2">
              <span className="text-base sm:text-lg font-bold text-accent uppercase tracking-widest">
                Experiences
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
                We Provide You The Best Experience
              </h2>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                You don&apos;t have to worry about the result because all of these
                interiors are made by people who are professionals in their fields
                with an elegant and lucurious style and with premium quality
                materials
              </p>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover font-semibold transition-colors group w-fit"
              >
                More Info
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Experience Image */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-2xl md:rounded-r-3xl overflow-hidden shadow-xl order-1">
              <Image
                src="/images/experiences/experience1.png"
                alt="Modern living room with blue sofa"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeIn>

        {/* Materials Block */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 pt-10 md:pt-20">
            {/* Materials Content */}
            <div className="flex flex-col space-y-6 sm:space-y-8 md:order-1 md:pr-12 lg:pr-16 max-w-2xl">
              <span className="text-base sm:text-lg font-bold text-accent uppercase tracking-widest">
                Materials
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
                Very Serious Materials For Making Furniture
              </h2>
              <p className="text-base sm:text-lg text-secondary leading-relaxed">
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </p>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover font-semibold transition-colors group w-fit"
              >
                More Info
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Materials Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-[223px_1fr] gap-4 sm:gap-8 md:order-2">
              {/* Left Column - Stacked Images */}
              <div className="flex flex-col gap-4 sm:gap-9 md:-mt-8">
                {/* Top Left - Image 1 */}
                <div className="relative w-full md:w-[223px] h-[180px] sm:h-[250px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/experiences/materials1.png"
                    alt="Modern chair design"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Left - Image 2 */}
                <div className="relative w-full md:w-[223px] h-[220px] sm:h-[338px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/experiences/materials2.png"
                    alt="Furniture craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right - Full Height Image */}
              <div className="relative h-[410px] sm:h-[588px] lg:h-[600px] rounded-2xl md:rounded-l-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/experiences/materials3.png"
                  alt="Luxury dining room"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
