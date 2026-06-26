import Hero from "@/components/scenes/Hero";
import Manifesto from "@/components/scenes/Manifesto";
import Work from "@/components/scenes/Work";
import Services from "@/components/scenes/Services";
import Process from "@/components/scenes/Process";
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
      <Manifesto />
      <Work />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <Team />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
