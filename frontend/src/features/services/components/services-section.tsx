import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { apiClient } from "@/lib/api";
import { copy } from "@/constants/copy";
import { getServices, mapApiServices } from "@/features/services/types";

async function getDisplayServices() {
  try {
    return mapApiServices(await apiClient.getServices());
  } catch {
    return getServices();
  }
}

export default async function Services() {
  const services = await getDisplayServices();
  const t = copy.servicesSection;

  return (
    <section id="services" dir="rtl" className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-600">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            {t.eyebrow}
          </div>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
            {t.titlePrefix}{" "}
            <span className="gradient-text">{t.titleHighlight}</span>{" "}
            {t.titleSuffix}
          </h2>
          <p className="text-lg leading-8 text-neutral-500">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.slug}
                className={`card-hover group relative cursor-pointer rounded-2xl p-0 transition-all duration-200 ${
                  service.highlight
                    ? "border-primary-500 bg-primary-500 text-white shadow-xl shadow-primary-500/25"
                    : "border-neutral-100 bg-white hover:border-primary-200"
                }`}
              >
                <CardContent className="p-7">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                      service.highlight
                        ? "bg-white/20"
                        : "bg-primary-50 group-hover:bg-primary-100"
                    }`}
                  >
                    <Icon
                      size={24}
                      className={service.highlight ? "text-white" : "text-primary-500"}
                    />
                  </div>

                  <CardTitle
                    className={`mb-3 text-lg font-bold ${
                      service.highlight ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {service.title}
                  </CardTitle>

                  <p
                    className={`mb-5 text-sm leading-7 ${
                      service.highlight ? "text-primary-100" : "text-neutral-500"
                    }`}
                  >
                    {service.summary}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={service.highlight ? "secondary" : "outline"}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                          service.highlight
                            ? "bg-white/15 text-white"
                            : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                        }`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group/link ${
                      service.highlight
                        ? "text-white/80 hover:text-white"
                        : "text-primary-500 hover:text-primary-700"
                    }`}
                  >
                    <Link href={`/services/${service.slug}`}>
                      {t.more}
                      <IconArrowRight
                        size={14}
                        className="rotate-180 transition-transform group-hover/link:-translate-x-0.5"
                      />
                    </Link>
                  </Button>

                  <span
                    className={`pointer-events-none absolute bottom-6 left-7 select-none text-7xl font-black transition-opacity ${
                      service.highlight
                        ? "text-white/5"
                        : "text-neutral-100 group-hover:text-primary-50"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
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
