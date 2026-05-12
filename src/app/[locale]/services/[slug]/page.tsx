import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconCheck } from "@tabler/icons-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getLocaleDirection, isLocale, localizePath, type Locale } from "@/lib/i18n";
import { apiClient } from "@/lib/api";
import { getIcon } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

type LocalizedServicePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-dynamic";

const servicePageCopy = {
  en: { back: "Back to services", cta: "Request consultation", other: "Other services" },
  ar: { back: "العودة إلى الخدمات", cta: "طلب استشارة", other: "خدمات أخرى" },
} as const;

export async function generateMetadata({ params }: LocalizedServicePageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === "fa") return {};
  const service = await apiClient.getService(slug, locale).catch(() => null);
  if (!service) return { title: `Service not found | Persiamehr` };
  return { title: `${service.title} | Persiamehr`, description: service.summary };
}

export default async function LocalizedServiceDetailPage({ params }: LocalizedServicePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale) || locale === "fa") notFound();

  const currentLocale = locale as Exclude<Locale, "fa">;
  const dir = getLocaleDirection(currentLocale);
  const t = servicePageCopy[currentLocale];

  const [service, allServices] = await Promise.all([
    apiClient.getService(slug, currentLocale).catch(() => null),
    apiClient.getServices(currentLocale).catch(() => []),
  ]);

  if (!service) notFound();

  const Icon = getIcon(service.icon_name);

  return (
    <main
      dir={dir}
      className={cn("min-h-screen bg-neutral-50 dark:bg-neutral-950", currentLocale === "en" && "text-right")}
    >
      <Navbar />

      <section className="bg-neutral-950 pt-32 pb-16 text-white">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <Link
            href={`${localizePath("/", currentLocale)}#services`}
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <IconArrowLeft size={15} className="rtl:rotate-0 ltr:rotate-180" />
            {t.back}
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                <Icon size={28} />
              </div>
              <h1 className="mb-6 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
                {service.title}
              </h1>
              <p className="max-w-3xl text-base leading-9 text-white/75 md:text-lg">
                {service.summary}
              </p>
            </div>

            <Card className="rounded-2xl border-white/10 bg-white/8 p-0 text-white backdrop-blur">
              <CardContent className="p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="h-7 rounded-lg bg-white/10 px-3 text-xs font-semibold text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="lg" className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/20 hover:bg-primary-600">
                  <Link href={localizePath("/contact", currentLocale)}>{t.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[1fr_360px] lg:px-16">
          <div className="space-y-8">
            <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
              <CardContent className="p-7">
                <p className="text-base leading-9 text-neutral-600">{service.description}</p>
              </CardContent>
            </Card>
            <div className="grid gap-5">
              {service.sections.map((section) => (
                <Card key={section.title} className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
                  <CardHeader className="p-7 pb-0">
                    <CardTitle className="flex items-center gap-2 text-xl font-bold text-neutral-900">
                      <IconCheck size={20} className="text-primary-500" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-7 pt-4">
                    <p className="text-sm leading-8 text-neutral-600">{section.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <aside className="space-y-5">
            <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
              <CardHeader className="p-6 pb-0">
                <CardTitle className="text-sm font-bold text-neutral-900">{t.other}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 p-6 pt-4">
                {allServices.map((item) => (
                  <Button
                    key={item.slug}
                    asChild
                    variant={item.slug === service.slug ? "default" : "ghost"}
                    className="h-auto w-full justify-start rounded-xl px-4 py-3 text-right"
                  >
                    <Link href={localizePath(`/services/${item.slug}`, currentLocale)}>{item.title}</Link>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      <Footer locale={currentLocale} />
    </main>
  );
}
