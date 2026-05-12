import {
  IconUserStar,
  IconSitemap,
  IconTrendingUp,
  IconMicroscope,
  IconSchool,
  IconCalendarEvent,
  IconArrowLeft,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconUserStar,
    title: "مشاوره اجرایی",
    description:
      "ارائه مشاوره استراتژیک در سطح مدیریت ارشد برای بهینه‌سازی عملکرد شرکت‌های فعال در حوزه تجهیزات پزشکی.",
    tags: ["استراتژی", "رهبری", "C-Suite"],
    highlight: true,
  },
  {
    icon: IconSitemap,
    title: "طراحی ساختار سازمانی",
    description:
      "بازطراحی و بهینه‌سازی ساختارهای سازمانی متناسب با الزامات صنعت پزشکی و استانداردهای بین‌المللی.",
    tags: ["OD", "فرایند", "KPI"],
    highlight: false,
  },
  {
    icon: IconTrendingUp,
    title: "توسعه بازار پزشکی",
    description:
      "تحلیل بازار، شناسایی فرصت‌های رشد و تدوین استراتژی ورود به بازارهای جدید برای تولیدکنندگان تجهیزات پزشکی.",
    tags: ["بازار", "صادرات", "Market Entry"],
    highlight: false,
  },
  {
    icon: IconCalendarEvent,
    title: "کنگره و سمینار",
    description:
      "طراحی، سازماندهی و اجرای کنگره‌های تخصصی پزشکی در سطح ملی و بین‌المللی با رویکرد علمی و تجاری.",
    tags: ["کنگره", "CME", "CPD"],
    highlight: false,
  },
  {
    icon: IconSchool,
    title: "آموزش و کارگاه",
    description:
      "برگزاری دوره‌های آموزشی، کارگاه‌های تخصصی و برنامه‌های Fellowship برای پزشکان و مدیران صنعت.",
    tags: ["Fellowship", "Workshop", "Online"],
    highlight: false,
  },
  {
    icon: IconMicroscope,
    title: "تحقیق و توسعه",
    description:
      "تسهیل همکاری‌های پژوهشی بین شرکت‌های تجهیزات پزشکی، مراکز درمانی و دانشگاه‌های علوم پزشکی.",
    tags: ["R&D", "کلینیکال", "Publication"],
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            خدمات تخصصی
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
            راهکارهای جامع برای{" "}
            <span className="gradient-text">رشد پایدار</span>{" "}
            در صنعت پزشکی
          </h2>
          <p className="text-lg text-neutral-500 leading-8">
            از مشاوره استراتژیک تا اجرای برنامه‌های آموزشی، پرسیا مهر در تمام
            مراحل توسعه کسب‌وکار پزشکی همراه شما است.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`
                  card-hover group relative rounded-2xl p-7 border transition-all duration-200 cursor-pointer
                  ${
                    s.highlight
                      ? "bg-primary-500 border-primary-500 text-white shadow-xl shadow-primary-500/25"
                      : "bg-white border-neutral-100 hover:border-primary-200"
                  }
                `}
              >
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
                <h3
                  className={`text-lg font-bold mb-3 ${
                    s.highlight ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-7 mb-5 ${
                    s.highlight ? "text-primary-100" : "text-neutral-500"
                  }`}
                >
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium ${
                        s.highlight
                          ? "bg-white/15 text-white"
                          : "bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group/link ${
                    s.highlight
                      ? "text-white/80 hover:text-white"
                      : "text-primary-500 hover:text-primary-700"
                  }`}
                >
                  بیشتر بدانید
                  <IconArrowLeft
                    size={14}
                    className="rtl:rotate-180 group-hover/link:-translate-x-0.5 transition-transform"
                  />
                </a>

                {/* Background number */}
                <span
                  className={`absolute bottom-6 left-7 text-7xl font-black select-none pointer-events-none transition-opacity ${
                    s.highlight ? "text-white/5" : "text-neutral-100 group-hover:text-primary-50"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
