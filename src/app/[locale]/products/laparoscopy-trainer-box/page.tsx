import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  IconArrowLeft,
  IconBox,
  IconCheck,
  IconDeviceDesktopAnalytics,
  IconSchool,
  IconTargetArrow,
} from "@tabler/icons-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLocaleDirection, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LocalizedProductPageProps = {
  params: Promise<{ locale: string }>;
};

const productCopy = {
  en: {
    badge: "Education product",
    title: "Laparoscopy Trainer Box",
    description:
      "A practical training tool for core laparoscopic skills in a controlled environment, suitable for residents, surgeons, and minimally invasive surgery workshops.",
    back: "Back to home",
    cta: "Request product introduction",
    specs: "View specs",
    sideTitle: "Designed for training centers",
    sideSub: "Practice, training, evaluation",
    features: [
      {
        title: "Core skill practice",
        body: "Hand-eye coordination, depth control, object transfer, cutting, knot tying, and basic suturing.",
        icon: IconTargetArrow,
      },
      {
        title: "Education-ready design",
        body: "A stable practice setup for skill labs, residency programs, and hands-on workshops.",
        icon: IconSchool,
      },
      {
        title: "Workshop friendly",
        body: "Supports short practice scenarios, repeatable evaluation, and structured training pathways.",
        icon: IconDeviceDesktopAnalytics,
      },
    ],
    modules: [
      "Two-hand coordination and object transfer",
      "Instrument navigation in limited space",
      "Pattern cutting exercises",
      "Intracorporeal knot tying",
      "Basic suturing and thread tension control",
      "In-person and online workshop preparation",
    ],
  },
  ar: {
    badge: "منتج تعليمي",
    title: "صندوق تدريب تنظير البطن",
    description:
      "أداة تدريب عملية لمهارات تنظير البطن الأساسية ضمن بيئة مضبوطة، مناسبة للمقيمين والجراحين وورش الجراحة قليلة التوغل.",
    back: "العودة إلى الرئيسية",
    cta: "طلب تعريف بالمنتج",
    specs: "عرض المواصفات",
    sideTitle: "مصمم للمراكز التعليمية",
    sideSub: "تدريب، ممارسة، تقييم",
    features: [
      {
        title: "تدريب المهارات الأساسية",
        body: "تنسيق العين واليد، التحكم في العمق، نقل الأجسام، القطع، ربط العقد والخياطة الأساسية.",
        icon: IconTargetArrow,
      },
      {
        title: "تصميم مناسب للتعليم",
        body: "إعداد ثابت للتدريب في مختبرات المهارات وبرامج الإقامة وورش العمل التطبيقية.",
        icon: IconSchool,
      },
      {
        title: "مناسب للورش",
        body: "يدعم سيناريوهات تدريب قصيرة وتقييما قابلا للتكرار ومسارات تعليمية منظمة.",
        icon: IconDeviceDesktopAnalytics,
      },
    ],
    modules: [
      "تنسيق اليدين ونقل الأجسام",
      "تحريك الأدوات ضمن مساحة محدودة",
      "تمارين القطع على النماذج",
      "ربط العقد داخل الصندوق",
      "الخياطة الأساسية والتحكم بشد الخيط",
      "التحضير للورش الحضورية وعن بعد",
    ],
  },
} as const;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({ params }: LocalizedProductPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    return {};
  }

  const t = productCopy[locale];

  return {
    title: `${t.title} | Persiamehr`,
    description: t.description,
  };
}

export default async function LocalizedProductPage({
  params,
}: LocalizedProductPageProps) {
  const { locale } = await params;

  if (!isLocale(locale) || locale === "fa") {
    notFound();
  }

  const currentLocale = locale as Exclude<Locale, "fa">;
  const dir = getLocaleDirection(currentLocale);
  const t = productCopy[currentLocale];

  return (
    <main
      dir={dir}
      className={cn(
        "min-h-screen bg-neutral-50 dark:bg-neutral-950",
        currentLocale === "en" && "text-right"
      )}
    >
      <Navbar />

      <section className="relative overflow-hidden bg-neutral-950 pt-32 text-white">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/hero-medical-equipment.png"
            alt={t.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 via-neutral-950/88 to-neutral-950/58" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 lg:grid-cols-[1fr_440px] lg:px-16">
          <div>
            <Link
              href={localizePath("/", currentLocale)}
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <IconArrowLeft size={15} className="rtl:rotate-0 ltr:rotate-180" />
              {t.back}
            </Link>

            <Badge className="mb-5 rounded-full bg-primary-500/20 px-4 py-1.5 text-primary-100 ring-1 ring-primary-300/25">
              {t.badge}
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              {t.title}
            </h1>
            <p className="max-w-3xl text-base leading-9 text-white/76 md:text-lg">
              {t.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-xl bg-primary-500 px-6 font-semibold text-white hover:bg-primary-600">
                <Link href={localizePath("/contact", currentLocale)}>{t.cta}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-white/20 bg-white/10 px-6 font-semibold text-white hover:bg-white/15">
                <Link href="#specs">{t.specs}</Link>
              </Button>
            </div>
          </div>

          <Card className="self-end rounded-2xl border-white/10 bg-white/10 p-0 text-white shadow-2xl shadow-black/30 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white">
                  <IconBox size={27} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.sideTitle}</div>
                  <div className="mt-1 text-xs text-white/55">{t.sideSub}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="specs" className="py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="grid gap-5 md:grid-cols-3">
            {t.features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-500/10">
                      <Icon size={23} />
                    </div>
                    <h2 className="mb-3 text-base font-black text-neutral-900">
                      {feature.title}
                    </h2>
                    <p className="text-sm leading-7 text-neutral-500">
                      {feature.body}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
            <CardContent className="grid gap-3 p-7 sm:grid-cols-2">
              {t.modules.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5">
                  <IconCheck className="mt-1 text-primary-500" size={18} />
                  <span className="text-sm font-semibold leading-7 text-neutral-700">
                    {item}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer locale={currentLocale} />
    </main>
  );
}
