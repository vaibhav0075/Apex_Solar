import HeroSection from "@/components/sections/home/HeroSection";
import CompanyOverview from "@/components/sections/home/CompanyOverview";
import ServicesSection from "@/components/sections/home/ServicesSection";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import ProcessTimeline from "@/components/sections/home/ProcessTimeline";
import WhySolarSection from "@/components/sections/home/WhySolarSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/sections/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <IndustriesSection />
      <ProcessTimeline />
      <WhySolarSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
