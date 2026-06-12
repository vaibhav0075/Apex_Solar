import PageHero from "@/components/shared/PageHero";
import SolarCalculator from "@/components/calculator/SolarCalculator";
import CTASection from "@/components/sections/home/CTASection";
import { images } from "@/data/images";

export default function CalculatorPage() {
  return (
    <>
      <PageHero
        title="Solar Calculator"
        description="Drag the sliders and watch your savings, payback, and ROI update in real time."
        image={images.solar}
      />

      <section className="section-padding bg-background-alt">
        <div className="container-wide">
          <SolarCalculator />
        </div>
      </section>

      <CTASection />
    </>
  );
}
