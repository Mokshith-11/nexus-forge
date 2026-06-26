import Hero from "@/components/scenes/Hero";
import TrustedBy from "@/components/scenes/TrustedBy";
import Manifesto from "@/components/scenes/Manifesto";
import Process from "@/components/scenes/Process";
import Work from "@/components/scenes/Work";
import Services from "@/components/scenes/Services";
import Why from "@/components/scenes/Why";
import Stats from "@/components/scenes/Stats";
import Testimonials from "@/components/scenes/Testimonials";
import Team from "@/components/scenes/Team";
import Faq from "@/components/scenes/Faq";
import Contact from "@/components/scenes/Contact";
import Footer from "@/components/scenes/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Manifesto />
      <Process />
      <Work />
      <Services />
      <Why />
      <Stats />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
