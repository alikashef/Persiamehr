import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Subsidiaries from "@/components/sections/subsidiaries";
import { isLocale, type Locale } from "@/lib/i18n";

type LocalizedHomePageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    return {};
  }

  return {
    title:
      locale === "en"
        ? "Persiamehr | Specialized Medical Equipment Holding"
        : "پرشیامهر | هولدينغ متخصص في الأجهزة الطبية",
    description:
      locale === "en"
        ? "Executive consulting, organizational design, and market development for medical equipment companies."
        : "استشارات تنفيذية وتصميم تنظيمي وتطوير سوق لشركات الأجهزة الطبية.",
  };
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    notFound();
  }

  const currentLocale = locale as Locale;

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero locale={currentLocale} />
      <Services locale={currentLocale} />
      <Subsidiaries locale={currentLocale} />
      <Footer locale={currentLocale} />
    </main>
  );
}
