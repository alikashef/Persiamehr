import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import type { ApiDepartmentCategory, ApiSubsidiary } from "@/lib/api";

export type Department = string;
export type SubsidiarySection = { title: string; body: string };

export type DepartmentCategoryItem = {
  title: string;
  slug: Department;
  description: string;
  order: number;
};

export type SubsidiaryItem = {
  name: string;
  slug: string;
  department: Department;
  monogram: string;
  logo: string;
  website: string;
  tagline: string;
  description: string;
  sections: SubsidiarySection[];
  tags: string[];
  pattern: string;
  darkPattern: string;
  logoGradient: string;
  textColor: string;
  darkTextColor: string;
  borderColor: string;
  badgeColor: string;
  darkBadgeColor: string;
};

export const subsidiaryDepartmentIconMap = {
  education: IconSchool,
  commerce: IconBriefcase,
};

export const departmentCategories: DepartmentCategoryItem[] = [
  {
    title: "آموزشی",
    slug: "education",
    description: "",
    order: 1,
  },
  {
    title: "بازرگانی",
    slug: "commerce",
    description: "",
    order: 2,
  },
];

const toneStyles = {
  blue: {
    pattern: "from-blue-50 via-white to-cyan-50",
    darkPattern: "dark:from-blue-950/55 dark:via-neutral-950 dark:to-cyan-950/40",
    logoGradient: "from-blue-500 to-cyan-500",
    textColor: "text-blue-600",
    darkTextColor: "dark:text-blue-300",
    borderColor: "border-blue-100",
    badgeColor: "bg-blue-100 text-blue-600",
    darkBadgeColor: "dark:bg-blue-400/10 dark:text-blue-200 dark:ring-1 dark:ring-blue-300/15",
  },
  rose: {
    pattern: "from-rose-50 via-white to-pink-50",
    darkPattern: "dark:from-rose-950/55 dark:via-neutral-950 dark:to-pink-950/40",
    logoGradient: "from-rose-500 to-pink-500",
    textColor: "text-rose-600",
    darkTextColor: "dark:text-rose-300",
    borderColor: "border-rose-100",
    badgeColor: "bg-rose-100 text-rose-600",
    darkBadgeColor: "dark:bg-rose-400/10 dark:text-rose-200 dark:ring-1 dark:ring-rose-300/15",
  },
  violet: {
    pattern: "from-violet-50 via-white to-fuchsia-50",
    darkPattern: "dark:from-violet-950/55 dark:via-neutral-950 dark:to-fuchsia-950/40",
    logoGradient: "from-violet-500 to-fuchsia-500",
    textColor: "text-violet-600",
    darkTextColor: "dark:text-violet-300",
    borderColor: "border-violet-100",
    badgeColor: "bg-violet-100 text-violet-600",
    darkBadgeColor: "dark:bg-violet-400/10 dark:text-violet-200 dark:ring-1 dark:ring-violet-300/15",
  },
};

export const subsidiaries: SubsidiaryItem[] = [
  {
    name: "پرسیا ساینس",
    slug: "persia-science",
    department: "commerce",
    monogram: "PS",
    logo: "",
    website: "",
    tagline: "تحقیق و توسعه تجهیزات پزشکی",
    description:
      "واردات و توزیع تجهیزات پیشرفته پزشکی از برندهای معتبر اروپایی و آمریکایی.",
    sections: [
      {
        title: "تمرکز اصلی",
        body: "تمرکز این برند بر شناسایی، تامین و توسعه سبد تجهیزات پزشکی پیشرفته برای مراکز درمانی و شرکت‌های سلامت است.",
      },
      {
        title: "حوزه فعالیت",
        body: "واردات، توزیع و پشتیبانی از محصولات پزشکی تخصصی با همکاری تامین‌کنندگان معتبر بین‌المللی.",
      },
      {
        title: "ارزش برای بازار",
        body: "افزایش دسترسی بازار داخلی به تکنولوژی‌های نوین پزشکی و کمک به ارتقای کیفیت خدمات درمانی.",
      },
    ],
    tags: ["واردات", "تجهیزات پیشرفته", "توزیع پزشکی"],
    ...toneStyles.blue,
  },
  {
    name: "مدیا مد",
    slug: "media-med",
    department: "education",
    monogram: "MM",
    logo: "",
    website: "",
    tagline: "بازاریابی و ارتباطات پزشکی",
    description:
      "خدمات بازاریابی تخصصی، تولید محتوای علمی و استراتژی ارتباطات برای شرکت‌های پزشکی.",
    sections: [
      {
        title: "تمرکز اصلی",
        body: "توسعه ارتباطات برندهای پزشکی با جامعه تخصصی و مخاطبان هدف از مسیر بازاریابی علمی.",
      },
      {
        title: "خدمات کلیدی",
        body: "تولید محتوا، طراحی کمپین‌های تخصصی، مدیریت ارتباطات و اجرای برنامه‌های رسانه‌ای هدفمند.",
      },
      {
        title: "نتیجه همکاری",
        body: "افزایش دیده‌شدن برند، اعتماد حرفه‌ای بیشتر و بهبود عملکرد ارتباطی در بازار سلامت.",
      },
    ],
    tags: ["بازاریابی پزشکی", "محتوای علمی", "ارتباطات برند"],
    ...toneStyles.rose,
  },
  {
    name: "پرسیا ادوانس",
    slug: "persia-advance",
    department: "commerce",
    monogram: "PA",
    logo: "",
    website: "",
    tagline: "تکنولوژی و دیجیتال هلث",
    description:
      "توسعه راهکارهای دیجیتال بهداشت و پیاده‌سازی سیستم‌های هوشمند در مراکز درمانی.",
    sections: [
      {
        title: "تمرکز اصلی",
        body: "طراحی و پیاده‌سازی راهکارهای فناورانه برای بهبود فرایندهای درمانی و مدیریتی در حوزه سلامت.",
      },
      {
        title: "حوزه فعالیت",
        body: "داده‌محوری، سیستم‌های هوشمند، پلتفرم‌های سلامت دیجیتال و یکپارچه‌سازی فرایندهای عملیاتی.",
      },
      {
        title: "مزیت رقابتی",
        body: "کاهش خطاهای عملیاتی، بهبود سرعت تصمیم‌گیری و ایجاد زیرساخت دیجیتال قابل توسعه برای مراکز درمانی.",
      },
    ],
    tags: ["سلامت دیجیتال", "سیستم هوشمند", "فناوری پزشکی"],
    ...toneStyles.violet,
  },
];

export function mapApiDepartmentCategory(
  record: ApiDepartmentCategory
): DepartmentCategoryItem {
  return {
    title: record.title,
    slug: record.slug,
    description: record.description,
    order: record.order,
  };
}

export function mapApiDepartmentCategories(
  records: ApiDepartmentCategory[]
): DepartmentCategoryItem[] {
  return records.map((record) => mapApiDepartmentCategory(record));
}

function resolveDepartment(record: ApiSubsidiary, fallback?: SubsidiaryItem): Department {
  if (record.department_category?.slug) {
    return record.department_category.slug;
  }

  const rawDepartment = [record.style?.department, record.style?.category, record.style?.type]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (
    rawDepartment.includes("education") ||
    rawDepartment.includes("training") ||
    rawDepartment.includes("آموز") ||
    rawDepartment.includes("اموز")
  ) {
    return "education";
  }

  if (
    rawDepartment.includes("commerce") ||
    rawDepartment.includes("business") ||
    rawDepartment.includes("بازرگانی") ||
    rawDepartment.includes("تجاری")
  ) {
    return "commerce";
  }

  if (fallback) {
    return fallback.department;
  }

  const haystack = [record.slug, record.name, record.tagline].join(" ").toLowerCase();
  return haystack.includes("دوره") || haystack.includes("آموز") ? "education" : "commerce";
}

function resolveLogoUrl(logo: string | null) {
  if (!logo) {
    return "";
  }

  if (logo.startsWith("http://") || logo.startsWith("https://") || logo.startsWith("/")) {
    return logo;
  }

  return `/media/${logo}`;
}

function fallbackForSlug(slug: string) {
  return subsidiaries.find((item) => item.slug === slug) ?? subsidiaries[0];
}

export function mapApiSubsidiary(record: ApiSubsidiary): SubsidiaryItem {
  const tone = record.style?.tone as keyof typeof toneStyles | undefined;
  const styles = toneStyles[tone ?? "blue"];
  const fallback = fallbackForSlug(record.slug);

  return {
    ...fallback,
    ...styles,
    name: record.name,
    slug: record.slug,
    department: resolveDepartment(record, fallback),
    monogram: record.monogram,
    logo: resolveLogoUrl(record.logo),
    website: record.website ?? fallback.website,
    tagline: record.tagline || fallback.tagline,
    description: record.description || fallback.description,
    sections: fallback.sections,
    tags: fallback.tags,
  };
}

export function mapApiSubsidiaries(records: ApiSubsidiary[]): SubsidiaryItem[] {
  return records.map((record) => mapApiSubsidiary(record));
}

export function getSubsidiaries() {
  return subsidiaries;
}

export function getDepartmentCategories() {
  return departmentCategories;
}

export function getSubsidiaryBySlug(slug: string) {
  return subsidiaries.find((item) => item.slug === slug);
}
