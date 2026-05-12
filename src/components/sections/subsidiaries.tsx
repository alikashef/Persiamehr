import {
  IconFlask,
  IconPresentation,
  IconDeviceAnalytics,
  IconStars,
  IconWorldSearch,
  IconMicroscope,
  IconArrowLeft,
  IconExternalLink,
} from "@tabler/icons-react";

const subsidiaries = [
  {
    icon: IconFlask,
    name: "پرسیا ساینس",
    nameEn: "Persia Science",
    tagline: "تحقیق و توسعه تجهیزات پزشکی",
    description:
      "واردات و توزیع تجهیزات پیشرفته پزشکی از برندهای معتبر اروپایی و آمریکایی.",
    color: "from-blue-500 to-blue-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    icon: IconPresentation,
    name: "مدیا مد",
    nameEn: "Media Med",
    tagline: "بازاریابی و ارتباطات پزشکی",
    description:
      "خدمات بازاریابی تخصصی، تولید محتوای علمی و استراتژی ارتباطات برای شرکت‌های پزشکی.",
    color: "from-rose-500 to-rose-600",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "border-rose-100",
    badgeColor: "bg-rose-100 text-rose-600",
  },
  {
    icon: IconDeviceAnalytics,
    name: "پرسیا ادوانس",
    nameEn: "Persia Advance",
    tagline: "تکنولوژی و دیجیتال هلث",
    description:
      "توسعه راهکارهای دیجیتال بهداشت و پیاده‌سازی سیستم‌های هوشمند در مراکز درمانی.",
    color: "from-violet-500 to-violet-600",
    bgLight: "bg-violet-50",
    textColor: "text-violet-600",
    borderColor: "border-violet-100",
    badgeColor: "bg-violet-100 text-violet-600",
  },
  {
    icon: IconStars,
    name: "کنگره پلاس",
    nameEn: "Congress Plus",
    tagline: "برگزاری رویدادهای تخصصی",
    description:
      "سازماندهی و اجرای کنگره‌های بین‌المللی، سمپوزیوم‌ها و نمایشگاه‌های تجهیزات پزشکی.",
    color: "from-amber-500 to-amber-600",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-100",
    badgeColor: "bg-amber-100 text-amber-600",
  },
  {
    icon: IconWorldSearch,
    name: "ایران لاپاروسکوپی",
    nameEn: "Iran Laparoscopy",
    tagline: "تخصصی در جراحی لاپاروسکوپی",
    description:
      "آموزش، پژوهش و توسعه خدمات در حوزه جراحی لاپاروسکوپی، باریاتریک و هرنیا.",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-100",
    badgeColor: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: IconMicroscope,
    name: "ربوساینس",
    nameEn: "RoboScience",
    tagline: "جراحی رباتیک و تکنولوژی",
    description:
      "مرجع تخصصی جراحی رباتیک در ایران: آموزش، پژوهش و مشاوره فناوری‌های نوین جراحی.",
    color: "from-cyan-500 to-cyan-600",
    bgLight: "bg-cyan-50",
    textColor: "text-cyan-600",
    borderColor: "border-cyan-100",
    badgeColor: "bg-cyan-100 text-cyan-600",
  },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              زیرمجموعه‌های هلدینگ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
              اکوسیستم یکپارچه{" "}
              <span className="gradient-text">خدمات پزشکی</span>
            </h2>
            <p className="text-base text-neutral-500 leading-7">
              شش زیرمجموعه تخصصی که با هم یک چرخه کامل از تحقیق تا توزیع و
              آموزش در صنعت پزشکی را پوشش می‌دهند.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-800 transition-colors shrink-0"
          >
            مشاهده همه
            <IconArrowLeft
              size={16}
              className="rtl:rotate-180 group-hover:-translate-x-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subsidiaries.map((sub) => {
            const Icon = sub.icon;
            return (
              <div
                key={sub.name}
                className={`card-hover group bg-white rounded-2xl border ${sub.borderColor} p-7 flex flex-col`}
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${sub.bgLight} flex items-center justify-center`}
                  >
                    <Icon size={24} className={sub.textColor} />
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${sub.badgeColor} tracking-wide`}
                  >
                    {sub.tagline}
                  </span>
                </div>

                {/* Name */}
                <div className="mb-1">
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium tracking-wide">
                    {sub.nameEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-500 leading-7 mt-3 flex-grow">
                  {sub.description}
                </p>

                {/* Link */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href="#"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${sub.textColor} hover:opacity-80 transition-opacity`}
                  >
                    بازدید از سایت
                    <IconExternalLink size={12} />
                  </a>
                  <div
                    className={`w-7 h-7 rounded-lg ${sub.bgLight} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                  >
                    <IconArrowLeft
                      size={12}
                      className={`${sub.textColor} rtl:rotate-180`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
