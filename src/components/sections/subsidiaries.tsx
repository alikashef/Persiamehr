import { IconArrowLeft, IconArrowRight, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { copy, getLocaleDirection, localizePath, type Locale } from "@/lib/i18n";
import { apiClient, type ApiSubsidiary } from "@/lib/api";
import { cn } from "@/lib/utils";

type Theme = ApiSubsidiary["theme"];

const themeStyles: Record<Theme, {
  pattern: string; darkPattern: string; logoGradient: string;
  textColor: string; darkTextColor: string; borderColor: string;
  badgeColor: string; darkBadgeColor: string;
}> = {
  blue: {
    pattern: "from-blue-50 via-white to-cyan-50",
    darkPattern: "dark:from-blue-950/55 dark:via-neutral-950 dark:to-cyan-950/40",
    logoGradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600", darkTextColor: "dark:text-blue-300",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-100 text-blue-600",
    darkBadgeColor: "dark:bg-blue-400/10 dark:text-blue-200 dark:ring-1 dark:ring-blue-300/15",
  },
  rose: {
    pattern: "from-rose-50 via-white to-pink-50",
    darkPattern: "dark:from-rose-950/55 dark:via-neutral-950 dark:to-pink-950/40",
    logoGradient: "from-rose-500 to-pink-500",
    textColor: "text-rose-600", darkTextColor: "dark:text-rose-300",
    borderColor: "border-rose-100",
    badgeColor: "bg-rose-100 text-rose-600",
    darkBadgeColor: "dark:bg-rose-400/10 dark:text-rose-200 dark:ring-1 dark:ring-rose-300/15",
  },
  violet: {
    pattern: "from-violet-50 via-white to-fuchsia-50",
    darkPattern: "dark:from-violet-950/55 dark:via-neutral-950 dark:to-fuchsia-950/40",
    logoGradient: "from-violet-500 to-fuchsia-500",
    textColor: "text-violet-600", darkTextColor: "dark:text-violet-300",
    borderColor: "border-violet-100",
    badgeColor: "bg-violet-100 text-violet-600",
    darkBadgeColor: "dark:bg-violet-400/10 dark:text-violet-200 dark:ring-1 dark:ring-violet-300/15",
  },
  green: {
    pattern: "from-green-50 via-white to-emerald-50",
    darkPattern: "dark:from-green-950/55 dark:via-neutral-950 dark:to-emerald-950/40",
    logoGradient: "from-green-500 to-emerald-500",
    textColor: "text-green-600", darkTextColor: "dark:text-green-300",
    borderColor: "border-green-100",
    badgeColor: "bg-green-100 text-green-600",
    darkBadgeColor: "dark:bg-green-400/10 dark:text-green-200 dark:ring-1 dark:ring-green-300/15",
  },
};

type SubsidiariesProps = {
  locale?: Locale;
};

export default async function Subsidiaries({ locale = "fa" }: SubsidiariesProps) {
  const subsidiaries = await apiClient.getSubsidiaries(locale).catch(() => []);
  const t = copy[locale].subsidiaries;
  const dir = getLocaleDirection(locale);

  return (
    <section
      id="subsidiaries"
      dir={dir}
      className={cn("py-24 bg-neutral-50 dark:bg-neutral-950", locale === "en" && "text-right")}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {t.eyebrow}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
              {t.titlePrefix}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-base text-neutral-500 leading-7">{t.description}</p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="shrink-0 text-sm font-semibold text-primary-600 hover:text-primary-800"
          >
            <Link href={localizePath("/contact", locale)}>
              {t.all}
              <IconArrowLeft size={16} className="rtl:rotate-180 group-hover/button:-translate-x-0.5 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((sub) => {
            const styles = themeStyles[sub.theme] ?? themeStyles.blue;
            return (
              <Card
                key={sub.slug}
                className={`card-hover group flex overflow-hidden rounded-2xl bg-white p-0 ${styles.borderColor} dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-[0_22px_55px_rgb(0,0,0,0.32)]`}
              >
                <CardContent className="flex h-full flex-col p-0">
                  <div className={`relative overflow-hidden bg-gradient-to-br ${styles.pattern} ${styles.darkPattern} p-6`}>
                    <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/80 bg-white/40 blur-sm dark:border-white/10 dark:bg-white/5" />
                    <div className="absolute -right-12 -top-12 hidden h-32 w-32 rounded-full bg-white/45 blur-2xl dark:block dark:bg-white/5" />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${styles.logoGradient} text-lg font-black tracking-wide text-white shadow-lg shadow-black/10 ring-1 ring-white/35 dark:shadow-black/35 dark:ring-white/15`}>
                          {sub.monogram}
                        </div>
                        <div>
                          <CardTitle className="text-xl font-black text-neutral-900 transition-colors group-hover:text-primary-600">
                            {sub.name}
                          </CardTitle>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                            {sub.slug.replace(/-/g, " ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7 pt-6 dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
                    <Badge
                      variant="secondary"
                      className={`mb-5 h-7 w-fit rounded-full px-3 text-[10px] font-semibold tracking-wide ${styles.badgeColor} ${styles.darkBadgeColor}`}
                    >
                      {sub.tagline}
                    </Badge>

                    <p className="flex-grow text-sm leading-7 text-neutral-500">{sub.description}</p>

                    <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className={`h-8 px-0 text-xs font-semibold ${styles.textColor} ${styles.darkTextColor} hover:bg-transparent hover:opacity-80`}
                      >
                        <Link href={localizePath("/contact", locale)}>
                          {t.viewBrand}
                          <IconExternalLink size={12} />
                        </Link>
                      </Button>
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${styles.pattern} ${styles.darkPattern} opacity-0 ring-1 ring-transparent transition-opacity group-hover:opacity-100 dark:ring-white/10`}>
                        <IconArrowRight size={13} className={`${styles.textColor} ${styles.darkTextColor} rtl:rotate-180`} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
