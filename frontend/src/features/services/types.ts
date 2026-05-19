import { IconSchool, IconSitemap, IconUserStar } from "@tabler/icons-react";
import type { ApiService } from "@/lib/api";

export const serviceIconMap = {
  school: IconSchool,
  sitemap: IconSitemap,
  "user-star": IconUserStar,
};

export const services = [
  {
    slug: "executive-consulting",
    icon: serviceIconMap["user-star"],
    title: "مشاوره اجرایی",
    summary:
      "مشاوره اجرایی با هدف توسعه بازار شرکت‌های تجهیزات پزشکی داخلی و خارجی.",
    description:
      "در این خدمت، وضعیت فعلی شرکت، ظرفیت‌های فروش، مسیرهای ورود به بازار، شبکه ارتباطی و مزیت رقابتی بررسی می‌شود تا یک نقشه عملیاتی برای رشد پایدار طراحی شود.",
    tags: ["توسعه بازار", "استراتژی", "شرکت‌های داخلی و خارجی"],
    sections: [
      {
        title: "تمرکز اصلی",
        body: "کمک به مدیران شرکت‌های تجهیزات پزشکی برای تصمیم‌گیری بهتر در توسعه بازار، انتخاب کانال‌های فروش، جایگاه‌سازی محصول و ساختن روابط حرفه‌ای با بازیگران کلیدی بازار.",
      },
      {
        title: "خروجی همکاری",
        body: "گزارش تشخیصی، برنامه اقدام مرحله‌ای، پیشنهادهای اجرایی برای توسعه فروش و چارچوب پیگیری شاخص‌های رشد.",
      },
      {
        title: "مناسب برای",
        body: "شرکت‌های تولیدکننده، واردکننده، توزیع‌کننده و برندهای خارجی که قصد ورود یا گسترش حضور در بازار تجهیزات پزشکی ایران را دارند.",
      },
    ],
    highlight: false,
  },
  {
    slug: "medical-education-program-design",
    icon: serviceIconMap.sitemap,
    title: "طراحی و مدیریت برنامه‌های پزشکی",
    summary:
      "طراحی و مدیریت برگزاری سمینار، کنگره پزشکی، دوره‌های آموزشی و کارگاه‌های تخصصی حضوری و آنلاین.",
    description:
      "پرشیامهر ساختار علمی، اجرایی و ارتباطی برنامه‌های تخصصی پزشکی را طراحی و مدیریت می‌کند؛ از تعریف هدف و مخاطب تا برنامه‌ریزی محتوایی، هماهنگی ارائه‌دهندگان و اجرای حضوری یا آنلاین.",
    tags: ["طراحی برنامه", "مدیریت اجرا", "حضوری و آنلاین"],
    sections: [
      {
        title: "دامنه خدمات",
        body: "طراحی ساختار برنامه، تدوین مسیر محتوایی، هماهنگی علمی، مدیریت مخاطبان، برنامه‌ریزی اجرایی و کنترل کیفیت تجربه شرکت‌کنندگان.",
      },
      {
        title: "مدل اجرا",
        body: "برنامه‌ها می‌توانند به شکل حضوری، آنلاین یا ترکیبی اجرا شوند و بر اساس نیاز برند، بیمارستان، انجمن علمی یا شرکت تجهیزات پزشکی طراحی می‌شوند.",
      },
      {
        title: "ارزش برای سازمان",
        body: "این خدمت به سازمان کمک می‌کند آموزش و ارتباط علمی را به یک ابزار جدی برای توسعه بازار، اعتمادسازی و معرفی تخصصی محصول تبدیل کند.",
      },
    ],
    highlight: false,
  },
  {
    slug: "surgical-training-execution",
    icon: serviceIconMap.school,
    title: "مجری برگزاری دوره‌های جراحی",
    summary:
      "مجری برگزاری دوره‌های جراحی عمومی، جراحی پلاستیک، چاقی، زنان، اندوسکوپی و رباتیک.",
    description:
      "این خدمت روی اجرای عملیاتی دوره‌های تخصصی جراحی تمرکز دارد؛ از آماده‌سازی برنامه آموزشی و هماهنگی مدرسین تا مدیریت اجرا، تجهیزات، سناریوهای آموزشی و تجربه شرکت‌کنندگان.",
    tags: ["جراحی عمومی", "رباتیک", "اندوسکوپی"],
    sections: [
      {
        title: "حوزه‌های تخصصی",
        body: "جراحی عمومی، جراحی پلاستیک، جراحی چاقی، زنان، اندوسکوپی و جراحی رباتیک با توجه به سطح مخاطب و هدف آموزشی برنامه‌ریزی می‌شوند.",
      },
      {
        title: "اجرای عملیاتی",
        body: "هماهنگی مدرسین، طراحی جدول دوره، آماده‌سازی تجهیزات آموزشی، مدیریت ثبت‌نام، کنترل اجرا و جمع‌آوری بازخورد بخشی از فرایند اجرایی است.",
      },
      {
        title: "نتیجه مورد انتظار",
        body: "دوره‌ای منظم، قابل سنجش و حرفه‌ای که برای پزشکان و تیم‌های درمانی تجربه آموزشی کاربردی و استاندارد فراهم کند.",
      },
    ],
    highlight: false,
  },
];

export type ServiceItem = (typeof services)[number];

export function getServices() {
  return services;
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function mapApiService(record: ApiService): ServiceItem {
  const fallback = getServiceBySlug(record.slug) ?? services[0];
  const icon =
    serviceIconMap[record.icon_key as keyof typeof serviceIconMap] ?? fallback.icon;

  return {
    ...fallback,
    slug: record.slug,
    icon,
    title: record.title,
    summary: record.summary,
    description: record.description,
    tags: Array.isArray(record.tags) ? record.tags : fallback.tags,
    sections: Array.isArray(record.sections) ? record.sections : fallback.sections,
    highlight: record.highlight,
  };
}

export function mapApiServices(records: ApiService[]): ServiceItem[] {
  return records.map((record) => mapApiService(record));
}
