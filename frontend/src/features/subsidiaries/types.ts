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
  headerImage: string;
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

function resolveDepartment(record: ApiSubsidiary): Department {
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

  const haystack = [record.slug, record.name, record.tagline].join(" ").toLowerCase();
  return haystack.includes("دوره") || haystack.includes("آموز") ? "education" : "commerce";
}

function resolveMediaUrl(path: string | null) {
  if (!path) {
    return "";
  }

  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
    return path;
  }

  return `/media/${path}`;
}

export function mapApiSubsidiary(record: ApiSubsidiary): SubsidiaryItem {
  const tone = record.style?.tone as keyof typeof toneStyles | undefined;
  const styles = toneStyles[tone ?? "blue"];

  return {
    ...styles,
    name: record.name,
    slug: record.slug,
    department: resolveDepartment(record),
    monogram: record.monogram,
    logo: resolveMediaUrl(record.logo),
    headerImage: resolveMediaUrl(record.header_image),
    website: record.website ?? "",
    tagline: record.tagline,
    description: record.description,
    sections: [],
    tags: [],
  };
}

export function mapApiSubsidiaries(records: ApiSubsidiary[]): SubsidiaryItem[] {
  return records.map((record) => mapApiSubsidiary(record));
}

export function getSubsidiaries(): SubsidiaryItem[] {
  return [];
}

export function getDepartmentCategories(): DepartmentCategoryItem[] {
  return [];
}

export function getSubsidiaryBySlug(slug: string) {
  void slug;
  return undefined;
}
