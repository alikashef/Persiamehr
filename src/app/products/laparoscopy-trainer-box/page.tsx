import Image from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBox,
  IconCheck,
  IconDeviceDesktopAnalytics,
  IconMicroscope,
  IconRulerMeasure,
  IconSchool,
  IconShieldCheck,
  IconTargetArrow,
  IconTools,
} from "@tabler/icons-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    title: "تمرین مهارت‌های پایه",
    body: "مناسب برای هماهنگی چشم و دست، کنترل عمق، انتقال جسم، برش، گره‌زنی و بخیه‌زنی لاپاروسکوپی.",
    icon: IconTargetArrow,
  },
  {
    title: "طراحی مناسب آموزش",
    body: "فضای تمرین پایدار با زاویه دید کنترل‌شده برای استفاده در کارگاه‌های آموزشی، skill lab و برنامه‌های رزیدنتی.",
    icon: IconSchool,
  },
  {
    title: "قابل استفاده در دوره‌ها",
    body: "ساختار ماژولار برای تعریف سناریوهای تمرینی کوتاه، ارزیابی عملکرد و تکرار استاندارد تمرین‌ها.",
    icon: IconDeviceDesktopAnalytics,
  },
];

const trainingModules = [
  "هماهنگی دو دست و انتقال اشیا",
  "تمرین مسیر‌یابی ابزار داخل فضای محدود",
  "برش دقیق روی الگوهای آموزشی",
  "گره‌زنی داخل باکس با ابزار بلند",
  "بخیه‌زنی پایه و کنترل کشش نخ",
  "آماده‌سازی برای کارگاه‌های حضوری و آنلاین",
];

const specs = [
  { label: "کاربری", value: "آموزش لاپاروسکوپی" },
  { label: "محیط استفاده", value: "Skill Lab، دانشگاه، کارگاه تخصصی" },
  { label: "نوع محصول", value: "ترینر باکس آموزشی" },
  { label: "خدمات همراه", value: "طراحی دوره و سناریوی تمرین" },
];

const kitItems = [
  "باکس تمرینی با فضای داخلی قابل مشاهده",
  "محل ورود ابزار برای شبیه‌سازی زاویه لاپاروسکوپی",
  "سطح مناسب قرارگیری پدهای آموزشی",
  "راهنمای تعریف تمرین و مسیر ارزیابی",
];

export const metadata = {
  title: "ترینر باکس لاپاروسکوپی | محصولات آموزشی پرشیامهر",
  description:
    "صفحه معرفی ترینر باکس لاپاروسکوپی برای آموزش مهارت‌های پایه و کارگاه‌های تخصصی جراحی کم‌تهاجمی.",
};

export default function LaparoscopyTrainerBoxPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <Navbar />

      <section className="relative overflow-hidden bg-neutral-950 pt-32 text-white">
        <div className="absolute inset-0 opacity-45">
          <Image
            src="/hero-medical-equipment.png"
            alt="تجهیزات آموزشی پزشکی"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 via-neutral-950/88 to-neutral-950/58" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 lg:grid-cols-[1fr_440px] lg:px-16">
          <div>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              <IconArrowLeft size={15} className="rotate-180 rtl:rotate-0" />
              بازگشت به صفحه اصلی
            </Link>

            <Badge className="mb-5 rounded-full bg-primary-500/20 px-4 py-1.5 text-primary-100 ring-1 ring-primary-300/25">
              محصول آموزشی
            </Badge>
            <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              ترینر باکس لاپاروسکوپی
            </h1>
            <p className="max-w-3xl text-base leading-9 text-white/76 md:text-lg">
              یک ابزار آموزشی برای تمرین مهارت‌های پایه لاپاروسکوپی در محیط
              کنترل‌شده؛ مناسب برای رزیدنت‌ها، جراحان در مسیر ارتقای مهارت و
              برگزارکنندگان کارگاه‌های جراحی کم‌تهاجمی.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-primary-500 px-6 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
              >
                <Link href="/contact">درخواست معرفی محصول</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/20 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                <Link href="#specs">مشاهده مشخصات</Link>
              </Button>
            </div>
          </div>

          <Card className="self-end rounded-2xl border-white/10 bg-white/10 p-0 text-white shadow-2xl shadow-black/30 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                  <IconBox size={27} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    مناسب برای مراکز آموزشی
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    آموزش، تمرین، ارزیابی مهارت
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/8 p-4"
                  >
                    <div className="text-xs text-white/50">{item.label}</div>
                    <div className="mt-2 text-sm font-bold leading-6 text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[1fr_380px] lg:px-16">
          <div className="space-y-8">
            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <Card
                    key={feature.title}
                    className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80"
                  >
                    <CardContent className="p-6">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-200">
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

            <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
              <CardHeader className="p-7 pb-0">
                <CardTitle className="flex items-center gap-2 text-xl font-black text-neutral-900">
                  <IconMicroscope size={22} className="text-primary-500" />
                  تمرین‌هایی که پوشش می‌دهد
                </CardTitle>
              </CardHeader>
              <CardContent className="p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {trainingModules.map((module) => (
                    <div
                      key={module}
                      className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <IconCheck className="mt-1 text-primary-500" size={18} />
                      <span className="text-sm font-semibold leading-7 text-neutral-700">
                        {module}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card
              id="specs"
              className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80"
            >
              <CardHeader className="p-7 pb-0">
                <CardTitle className="flex items-center gap-2 text-xl font-black text-neutral-900">
                  <IconRulerMeasure size={22} className="text-primary-500" />
                  مشخصات و اقلام آموزشی
                </CardTitle>
              </CardHeader>
              <CardContent className="p-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-4 text-sm font-bold text-neutral-900">
                      مناسب برای
                    </h3>
                    <p className="text-sm leading-8 text-neutral-500">
                      استفاده در برنامه‌های آموزشی جراحی عمومی، زنان، چاقی و
                      دوره‌های مهارت‌محور لاپاروسکوپی؛ با امکان تعریف مسیر
                      تمرین متناسب با سطح شرکت‌کننده.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-4 text-sm font-bold text-neutral-900">
                      اجزای پیشنهادی پکیج
                    </h3>
                    <div className="space-y-3">
                      {kitItems.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <IconTools size={15} className="text-primary-500" />
                          <span className="text-sm leading-7 text-neutral-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
              <CardContent className="p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-200">
                  <IconShieldCheck size={24} />
                </div>
                <h2 className="mb-3 text-lg font-black text-neutral-900">
                  همراه با طراحی دوره
                </h2>
                <p className="text-sm leading-7 text-neutral-500">
                  تیم پرشیامهر می‌تواند کنار تامین محصول، ساختار کارگاه،
                  سناریوهای تمرین و مسیر ارزیابی شرکت‌کنندگان را هم طراحی کند.
                </p>
                <Separator className="my-6" />
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
                >
                  <Link href="/contact">دریافت مشاوره خرید</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
