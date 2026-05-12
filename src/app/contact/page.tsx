import Navbar from "@/components/navbar";
import CTA from "@/components/sections/cta";
import Footer from "@/components/footer";

export const metadata = {
  title: "تماس با ما | پرشیامهر",
  description: "راه‌های ارتباط با تیم مشاوران پرشیامهر و ثبت درخواست همکاری",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CTA />
      <Footer />
    </main>
  );
}
