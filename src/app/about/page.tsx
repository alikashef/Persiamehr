import Navbar from "@/components/navbar";
import About from "@/components/sections/about";
import Footer from "@/components/footer";

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
