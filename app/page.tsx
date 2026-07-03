import Hero from "@/components/scenes/Hero";
import TrustedBy from "@/components/scenes/TrustedBy";
import Manifesto from "@/components/scenes/Manifesto";
import Process from "@/components/scenes/Process";
import Work from "@/components/scenes/Work";
import Services from "@/components/scenes/Services";
import Why from "@/components/scenes/Why";
import Stats from "@/components/scenes/Stats";
import Testimonials from "@/components/scenes/Testimonials";
import Faq from "@/components/scenes/Faq";
import Contact from "@/components/scenes/Contact";
import Footer from "@/components/scenes/Footer";
import SeoJsonLd from "@/components/SeoJsonLd";

export default function Home() {
  return (
    <main>
      <SeoJsonLd />
      <Hero />
      <TrustedBy />
      <Manifesto />
      <Process />
      <Work />
      <Services />
      <Why />
      <Stats />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
