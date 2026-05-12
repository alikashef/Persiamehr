import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { copy, getLocaleDirection, isLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LocalizedAboutPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    return {};
  }

  return {
    title: `${copy[locale].aboutPage.title} | Persiamehr`,
    description: copy[locale].aboutPage.description,
  };
}

export default async function LocalizedAboutPage({
  params,
}: LocalizedAboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    notFound();
  }

  const currentLocale = locale as Exclude<Locale, "fa">;
  const dir = getLocaleDirection(currentLocale);
  const isEn = currentLocale === "en";

  return (
    <main
      dir={dir}
      className={cn(
        "min-h-screen bg-white dark:bg-neutral-950",
        currentLocale === "en" && "text-right"
      )}
    >
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-[1120px] px-6 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-xs font-bold text-primary-600">
              {isEn ? "About Persiamehr" : "عن پرشیامهر"}
            </div>
            <h1 className="mb-5 text-4xl font-black leading-tight text-neutral-900">
              {isEn
                ? "A specialized partner for medical equipment growth"
                : "شريك متخصص لنمو أعمال الأجهزة الطبية"}
            </h1>
            <p className="text-base leading-8 text-neutral-500">
              {isEn
                ? "Persiamehr brings consulting, educational program design, and surgical training execution into one focused platform for medical companies and clinical teams."
                : "تجمع پرشیامهر بين الاستشارات وتصميم البرامج التعليمية وتنفيذ التدريب الجراحي ضمن منصة متخصصة للشركات الطبية والفرق العلاجية."}
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              isEn ? "Market development" : "تطوير السوق",
              isEn ? "Medical education" : "التعليم الطبي",
              isEn ? "Surgical training" : "التدريب الجراحي",
            ].map((item) => (
              <Card
                key={item}
                className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80"
              >
                <CardContent className="p-6 text-sm font-bold text-neutral-800">
                  {item}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer locale={currentLocale} />
    </main>
  );
}
