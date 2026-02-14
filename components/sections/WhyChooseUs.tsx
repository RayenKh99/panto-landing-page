import { ArrowRight } from "akar-icons";

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="w-full px-8 lg:px-16 xl:px-20 2xl:px-24">
        {/* Content Section */}
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Title */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Why
              <br />
              Choosing Us
            </h2>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1: Luxury facilities */}
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

            {/* Feature 2: Affordable Price */}
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

            {/* Feature 3: Many Choices */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
