import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/features/home/components/hero";
import Subsidiaries from "@/features/subsidiaries/components/subsidiaries-section";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Subsidiaries />
      </main>
      <Footer />
    </>
  );
}
