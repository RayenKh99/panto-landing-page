import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BestSellingProduct from "@/components/sections/BestSellingProduct";
import ExperienceAndMaterials from "@/components/sections/ExperienceAndMaterials";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <BestSellingProduct />
      <ExperienceAndMaterials />
      <Testimonials />
      <Footer />
    </>
  );
}
