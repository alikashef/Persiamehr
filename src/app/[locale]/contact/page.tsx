import { notFound } from "next/navigation";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { copy, getLocaleDirection, isLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LocalizedContactPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: LocalizedContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    return {};
  }

  return {
    title: `${copy[locale].contactPage.title} | Persiamehr`,
    description: copy[locale].contactPage.description,
  };
}

export default async function LocalizedContactPage({
  params,
}: LocalizedContactPageProps) {
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
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 lg:grid-cols-[1fr_460px] lg:px-16">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-xs font-bold text-primary-600">
              {isEn ? "Start a conversation" : "ابدأ التواصل"}
            </div>
            <h1 className="mb-5 text-4xl font-black leading-tight text-neutral-900">
              {isEn ? "Contact Persiamehr" : "تواصل مع پرشیامهر"}
            </h1>
            <p className="text-base leading-8 text-neutral-500">
              {isEn
                ? "Tell us about your company, product, or training program. Our team will review your request and get back to you."
                : "أخبرنا عن شركتك أو منتجك أو برنامجك التدريبي. سيراجع فريقنا الطلب ويتواصل معك."}
            </p>
          </div>

          <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
            <CardHeader className="p-7 pb-0">
              <CardTitle className="text-xl font-black text-neutral-900">
                {isEn ? "Request form" : "نموذج الطلب"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 p-7">
              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  {isEn ? "Full name" : "الاسم الكامل"}
                </Label>
                <Input className="h-12 rounded-xl border-neutral-200 bg-neutral-50" />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  {isEn ? "Email or phone" : "البريد الإلكتروني أو الهاتف"}
                </Label>
                <Input dir="ltr" className="h-12 rounded-xl border-neutral-200 bg-neutral-50" />
              </div>
              <div>
                <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                  {isEn ? "Message" : "الرسالة"}
                </Label>
                <Textarea className="min-h-32 resize-none rounded-xl border-neutral-200 bg-neutral-50" />
              </div>
              <Button className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white hover:bg-primary-600">
                {isEn ? "Send request" : "إرسال الطلب"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer locale={currentLocale} />
    </main>
  );
}
