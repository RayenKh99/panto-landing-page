import { ArrowRight } from "akar-icons";
import Image from "next/image";

export default function ExperienceAndMaterials() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Experience Block */}
        <div className="grid grid-cols-2 gap-12 lg:gap-16 mb-32 pb-20">
          {/* Experience Content */}
          <div className="flex flex-col space-y-8 pr-12 lg:pr-16 max-w-2xl order-2">
            <span className="text-lg font-bold text-accent uppercase tracking-widest">
              Experiences
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
              We Provide You The Best Experience
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
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
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-r-3xl overflow-hidden shadow-xl order-1">
            <Image
              src="/images/experiences/experience1.png"
              alt="Modern living room with blue sofa"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Materials Block */}
        <div className="grid grid-cols-2 gap-12 lg:gap-16 pt-20">
          {/* Materials Content */}
          <div className="flex flex-col space-y-8 lg:order-1 pr-12 lg:pr-16 max-w-2xl">
            <span className="text-lg font-bold text-accent uppercase tracking-widest">
              Materials
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary leading-tight">
              Very Serious Materials For Making Furniture
            </h2>
            <p className="text-lg text-secondary leading-relaxed">
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
          <div className="grid grid-cols-[223px_1fr] gap-8 lg:order-2">
            {/* Left Column - Stacked Images */}
            <div className="flex flex-col gap-9 -mt-8">
              {/* Top Left - Image 1 */}
              <div className="relative w-[223px] h-[250px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/experiences/materials1.png"
                  alt="Modern chair design"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left - Image 2 */}
              <div className="relative w-[223px] h-[338px] rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/experiences/materials2.png"
                  alt="Furniture craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right - Full Height Image */}
            <div className="relative h-[588px] lg:h-[600px] rounded-l-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/experiences/materials3.png"
                alt="Luxury dining room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
