import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CTA from "@/features/contact/components/contact-section";
import { getContactSettings } from "@/features/contact/services/contact-settings";

export const metadata = {
  title: "تماس با ما | پرشیامهر",
  description: "راه‌های ارتباط با تیم مشاوران پرشیامهر و ثبت درخواست همکاری",
};

export default async function ContactPage() {
  const settings = await getContactSettings();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CTA settings={settings} />
      <Footer />
    </main>
  );
}
