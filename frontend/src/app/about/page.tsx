import Navbar from "@/components/layout/navbar";
import About from "@/features/about/components/about-section";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "درباره ما | پرشیامهر",
  description: "آشنایی با ماموریت، چشم‌انداز و مسیر رشد هلدینگ پرشیامهر",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
