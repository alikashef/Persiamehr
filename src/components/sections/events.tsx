import {
  IconCalendarEvent,
  IconUsers,
  IconMapPin,
  IconClock,
  IconArrowLeft,
  IconBadge,
  IconWorld,
  IconSchool,
  IconMicrophone2,
} from "@tabler/icons-react";

const featuredEvents = [
  {
    type: "کنگره بین‌المللی",
    title: "سیزدهمین کنگره بین‌المللی جراحی لاپاروسکوپی ایران",
    date: "۱۵-۱۷ دی ماه ۱۴۰۴",
    location: "تهران، هتل اسپیناس پالاس",
    attendees: "۱۵۰۰+ شرکت‌کننده",
    badge: "ثبت‌نام باز است",
    badgeType: "green" as const,
    icon: IconMicrophone2,
    featured: true,
    tags: ["CME", "بین‌المللی", "لاپاروسکوپی"],
  },
  {
    type: "کارگاه تخصصی",
    title: "کارگاه عملی جراحی رباتیک — Da Vinci Xi",
    date: "۵ بهمن ماه ۱۴۰۴",
    location: "تهران، مرکز شبیه‌سازی پرسیا",
    attendees: "حداکثر ۲۰ نفر",
    badge: "ظرفیت محدود",
    badgeType: "amber" as const,
    icon: IconSchool,
    featured: false,
    tags: ["رباتیک", "عملی", "سطح پیشرفته"],
  },
  {
    type: "سمینار آنلاین",
    title: "سمینار مدیریت بازار تجهیزات پزشکی",
    date: "۲۰ بهمن ماه ۱۴۰۴",
    location: "آنلاین — بستر پرسیا مد",
    attendees: "بدون محدودیت",
    badge: "ثبت‌نام رایگان",
    badgeType: "blue" as const,
    icon: IconWorld,
    featured: false,
    tags: ["آنلاین", "مدیریت", "رایگان"],
  },
];

const pastHighlights = [
  { year: "۱۴۰۳", title: "دوازدهمین کنگره لاپاروسکوپی", attendees: "۱۴۰۰+" },
  { year: "۱۴۰۳", title: "فلوشیپ جراحی چاقی — اروپا", attendees: "۳۰+" },
  { year: "۱۴۰۲", title: "یازدهمین کنگره زنان پیشرفته", attendees: "۱۲۰۰+" },
  { year: "۱۴۰۲", title: "کارگاه آندوسکوپی پیشرفته", attendees: "۱۵۰+" },
];

const badgeStyles = {
  green: "bg-emerald-50 text-emerald-600 border-emerald-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
};

export default function Events() {
  return (
    <section id="events" className="py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              رویدادها و آموزش
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">
              کنگره‌ها، کارگاه‌ها{" "}
              <span className="gradient-text">و برنامه‌های آموزشی</span>
            </h2>
            <p className="text-base text-neutral-500 leading-7">
              پرسیا مهر هر ساله بیش از ۲۰ رویداد علمی-آموزشی برای اجتماع پزشکی
              ایران برگزار می‌کند.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-all duration-200 shrink-0"
          >
            تقویم کامل رویدادها
            <IconArrowLeft
              size={15}
              className="rtl:rotate-180 group-hover:-translate-x-0.5 transition-transform"
            />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredEvents.map((ev) => {
            const Icon = ev.icon;
            return (
              <div
                key={ev.title}
                className={`card-hover group bg-white rounded-2xl border overflow-hidden ${
                  ev.featured
                    ? "border-primary-200 ring-1 ring-primary-100 lg:col-span-1"
                    : "border-neutral-100"
                }`}
              >
                {ev.featured && (
                  <div className="bg-gradient-to-l from-primary-600 to-primary-500 px-5 py-2.5 flex items-center gap-2">
                    <IconBadge size={14} className="text-primary-100" />
                    <span className="text-xs font-semibold text-white">
                      رویداد ویژه ۱۴۰۴
                    </span>
                  </div>
                )}
                <div className="p-6">
                  {/* Type + badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                        <Icon size={16} className="text-primary-500" />
                      </div>
                      <span className="text-xs font-medium text-neutral-500">
                        {ev.type}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${badgeStyles[ev.badgeType]}`}
                    >
                      {ev.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-neutral-900 leading-tight mb-4 group-hover:text-primary-600 transition-colors">
                    {ev.title}
                  </h3>

                  {/* Meta info */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <IconClock size={13} className="text-neutral-400 shrink-0" />
                      {ev.date}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <IconMapPin size={13} className="text-neutral-400 shrink-0" />
                      {ev.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <IconUsers size={13} className="text-neutral-400 shrink-0" />
                      {ev.attendees}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {ev.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-1 bg-neutral-50 text-neutral-500 rounded-md border border-neutral-100 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`w-full text-center block py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      ev.featured
                        ? "bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/20"
                        : "bg-neutral-50 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 border border-neutral-100"
                    }`}
                  >
                    ثبت‌نام
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Past highlights */}
        <div className="bg-white rounded-2xl border border-neutral-100 p-7">
          <h3 className="text-base font-bold text-neutral-900 mb-6 flex items-center gap-2">
            <IconCalendarEvent size={18} className="text-primary-500" />
            رویدادهای برگزار شده
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastHighlights.map((p) => (
              <div
                key={p.title}
                className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 hover:border-primary-100 transition-colors"
              >
                <div className="text-xs font-bold text-primary-500 mb-2 font-mono">
                  {p.year}
                </div>
                <div className="text-sm font-semibold text-neutral-800 leading-tight mb-2">
                  {p.title}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <IconUsers size={11} />
                  {p.attendees} شرکت‌کننده
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
