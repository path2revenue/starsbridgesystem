import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Results from "@/components/Results";
import VideoTestimonials from "@/components/VideoTestimonials";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Honesty from "@/components/Honesty";
import Calendar from "@/components/Calendar";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <PainPoints />
        <Results />
        <VideoTestimonials />
        <Services />
        <Process />
        <Honesty />
        <Calendar />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
