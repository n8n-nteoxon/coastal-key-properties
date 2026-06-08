import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ProblemSection />
      <SolutionSection />
      <BenefitsGrid />
      <TestimonialsSection />
      <HowItWorks />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
