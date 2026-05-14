import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { apiClient } from "@/lib/api";
import { copy, getLocaleDirection, localizePath, type Locale } from "@/lib/i18n";
import { getServices, mapApiServices } from "@/lib/services";
import { cn } from "@/lib/utils";

type ServicesProps = {
  locale?: Locale;
};

async function getDisplayServices(locale: Locale) {
  try {
    const records = await apiClient.getServices();
    return mapApiServices(records, locale);
  } catch {
    return getServices(locale);
  }
}

export default async function Services({ locale = "fa" }: ServicesProps) {
  const services = await getDisplayServices(locale);
  const t = copy[locale].servicesSection;
  const dir = getLocaleDirection(locale);

  return (
    <section
      id="services"
      dir={dir}
      className={cn("py-24 bg-white", locale === "en" && "text-right")}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className=" mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            {t.eyebrow}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
            {t.titlePrefix}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>{" "}
            {t.titleSuffix}
          </h2>
          <p className="text-lg text-neutral-500 leading-8">
            {t.description}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Card
                key={s.title}
                className={`
                  card-hover group relative cursor-pointer rounded-2xl p-0 transition-all duration-200
                  ${
                    s.highlight
                      ? "border-primary-500 bg-primary-500 text-white shadow-xl shadow-primary-500/25"
                      : "border-neutral-100 bg-white hover:border-primary-200"
                  }
                `}
              >
                <CardContent className="p-7">
                {/* Icon */}
                <div
                  className={`
                    w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors
                    ${
                      s.highlight
                        ? "bg-white/20"
                        : "bg-primary-50 group-hover:bg-primary-100"
                    }
                  `}
                >
                  <Icon
                    size={24}
                    className={s.highlight ? "text-white" : "text-primary-500"}
                  />
                </div>

                {/* Title */}
                <CardTitle
                  className={`text-lg font-bold mb-3 ${
                    s.highlight ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {s.title}
                </CardTitle>

                {/* Description */}
                <p
                  className={`text-sm leading-7 mb-5 ${
                    s.highlight ? "text-primary-100" : "text-neutral-500"
                  }`}
                >
                  {s.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant={s.highlight ? "secondary" : "outline"}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        s.highlight
                          ? "bg-white/15 text-white"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group/link ${
                    s.highlight
                      ? "text-white/80 hover:text-white"
                    : "text-primary-500 hover:text-primary-700"
                  }`}
                >
                  <Link href={localizePath(`/services/${s.slug}`, locale)}>
                    {t.more}
                    <IconArrowRight
                      size={14}
                      className="rtl:rotate-180 group-hover/link:-translate-x-0.5 transition-transform ltr:rotate-180 ltr:group-hover/link:translate-x-0.5"
                    />
                  </Link>
                </Button>

                {/* Background number */}
                <span
                  className={`absolute bottom-6 left-7 text-7xl font-black select-none pointer-events-none transition-opacity ${
                    s.highlight ? "text-white/5" : "text-neutral-100 group-hover:text-primary-50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
