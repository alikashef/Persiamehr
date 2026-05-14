import Navbar from "@/components/navbar";
import CTA from "@/components/sections/cta";
import Footer from "@/components/footer";
import { apiClient } from "@/lib/api";

export const metadata = {
  title: "تماس با ما | پرشیامهر",
  description: "راه‌های ارتباط با تیم مشاوران پرشیامهر و ثبت درخواست همکاری",
};

async function getContactSettings() {
  try {
    return await apiClient.getSettings();
  } catch {
    return undefined;
  }
}

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
