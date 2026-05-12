import Link from "next/link";
import {
  IconCut,
  IconActivityHeartbeat,
  IconHeartbeat,
  IconArrowRight,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const domains = [
  {
    icon: IconCut,
    title: "جراحی عمومی",
    titleEn: "General Surgery",
    description:
      "تجهیزات و راهکارهای نوین برای عمل‌های جراحی عمومی شامل ابزار لاپاروسکوپیک، پورت‌ها و تروکارها.",
    products: ["تروکار", "لاپاروسکوپ", "ایندوکات"],
    count: "۴۵+ محصول",
  },
  {
    icon: IconActivityHeartbeat,
    title: "جراحی باریاتریک",
    titleEn: "Bariatric Surgery",
    description:
      "ارائه کامل‌ترین مجموعه تجهیزات و آموزش تخصصی برای جراحی چاقی از اسلیو تا بایپس.",
    products: ["اسلیو", "بایپس", "باندینگ"],
    count: "۳۰+ محصول",
  },
  {
    icon: IconHeartbeat,
    title: "جراحی فتق",
    titleEn: "Hernia Surgery",
    description:
      "راهکارهای تخصصی برای جراحی فتق لاپاروسکوپی و باز با استفاده از مش‌های پیشرفته.",
    products: ["مش TE", "مش PP", "تاکر"],
    count: "۲۰+ محصول",
  },
 
];

export default function MedicalDomains() {
  return (
    <section id="domains" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            حوزه‌های تخصصی پزشکی
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
            پوشش جامع{" "}
            <span className="gradient-text">تخصص‌های جراحی</span>
          </h2>
          <p className="text-base text-neutral-500 leading-8">
            پرشیامهر در شش حوزه تخصصی پزشکی، خدمات یکپارچه آموزش، تجهیزات و
            مشاوره ارائه می‌دهد.
          </p>
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <Card
                key={domain.title}
                className="card-hover group relative gap-0 overflow-hidden rounded-2xl border-neutral-100 bg-white p-0"
              >
                {/* Top color bar */}
                <div className="h-1 w-full bg-gradient-to-l from-primary-300 via-primary-500 to-primary-700" />

                <CardContent className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors">
                        <Icon size={22} className="text-primary-500" />
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="h-7 rounded-full border-neutral-100 bg-neutral-50 px-3 text-xs font-medium text-neutral-400"
                    >
                      {domain.count}
                    </Badge>
                  </div>

                  {/* Title */}
                  <CardTitle className="mb-0.5 text-lg font-bold text-neutral-900 transition-colors group-hover:text-primary-600">
                    {domain.title}
                  </CardTitle>
                  <p className="text-xs text-neutral-400 font-medium tracking-wide mb-4">
                    {domain.titleEn}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-neutral-500 leading-7 mb-5">
                    {domain.description}
                  </p>

                  {/* Product chips */}
                  <div className="flex flex-wrap gap-2">
                    {domain.products.map((p) => (
                      <Badge
                        key={p}
                        variant="outline"
                        className="h-7 rounded-lg border-primary-100 bg-primary-50 px-3 text-xs font-medium text-primary-600 transition-colors group-hover:bg-primary-100"
                      >
                        {p}
                      </Badge>
                    ))}
                  </div>

                  {/* Learn more */}
                  <div className="mt-6 pt-5 border-t border-neutral-100">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="h-8 px-0 text-xs font-semibold text-neutral-400 hover:bg-transparent hover:text-primary-500"
                    >
                      <Link href="/contact">
                        اطلاعات بیشتر
                        <IconArrowRight
                          size={12}
                          className="rtl:rotate-180 group-hover/button:-translate-x-0.5 transition-transform"
                        />
                      </Link>
                    </Button>
                  </div>
                </CardContent>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/[0.02] group-hover:to-primary-500/[0.04] transition-all duration-300 pointer-events-none rounded-2xl" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
