import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Subsidiaries from "@/components/sections/subsidiaries";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero locale="fa" />
      <Services locale="fa" />
      <Subsidiaries locale="fa" />
      {/* <MedicalDomains /> */}
      {/* <Stats /> */}
      <Footer locale="fa" />
    </main>
  );
}
