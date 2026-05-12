import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Subsidiaries from "@/components/sections/subsidiaries";
import MedicalDomains from "@/components/sections/medical-domains";
import Events from "@/components/sections/events";
import About from "@/components/sections/about";
import Stats from "@/components/sections/stats";
import CTA from "@/components/sections/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Subsidiaries />
      <MedicalDomains />
      <Events />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
