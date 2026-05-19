import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import SubsidiaryDepartmentTabs from "@/features/subsidiaries/components/subsidiary-department-tabs";
import { Button } from "@/components/ui/button";
import { apiClient } from "@/lib/api";
import { copy } from "@/constants/copy";
import {
  getDepartmentCategories,
  getSubsidiaries,
  mapApiDepartmentCategories,
  mapApiSubsidiaries,
} from "@/features/subsidiaries/types";

async function getDisplaySubsidiaries() {
  try {
    const [categories, subsidiaries] = await Promise.all([
      apiClient.getDepartmentCategories(),
      apiClient.getSubsidiaries(),
    ]);

    return {
      categories: mapApiDepartmentCategories(categories),
      subsidiaries: mapApiSubsidiaries(subsidiaries),
    };
  } catch {
    return {
      categories: getDepartmentCategories(),
      subsidiaries: getSubsidiaries(),
    };
  }
}

export default async function Subsidiaries() {
  const display = await getDisplaySubsidiaries();
  const t = copy.subsidiaries;

  return (
    <section id="subsidiaries" dir="rtl" className="bg-neutral-50 py-24 text-right dark:bg-neutral-950">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-neutral-900 md:text-4xl">
              {t.titlePrefix} <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
            <p className="text-base leading-7 text-neutral-500">{t.description}</p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="shrink-0 text-sm font-semibold text-primary-600 hover:text-primary-800"
          >
            <Link href="/contact">
              {t.all}
              <IconArrowLeft
                size={16}
                className="transition-transform group-hover/button:-translate-x-0.5"
              />
            </Link>
          </Button>
        </div>

        <SubsidiaryDepartmentTabs
          categories={display.categories}
          items={display.subsidiaries}
          text={{
            empty: "هنوز دسته‌بندی دپارتمانی فعالی ثبت نشده است.",
            viewBrand: t.viewBrand,
          }}
        />
      </div>
    </section>
  );
}
