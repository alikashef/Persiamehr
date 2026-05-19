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
    <section
      id="subsidiaries"
      dir="rtl"
      className="bg-neutral-50 py-24 text-right dark:bg-neutral-950"
    >
      <div className="mx-auto  px-6 lg:px-16">
        <div className="mb-16 ">
          <div>
            <h2 className="mb-4 text-xl text-center font-bold leading-tight text-neutral-900 md:text-3xl">
              {t.titlePrefix}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
              
            </h2>
            <p className="text-base text-center leading-7 text-neutral-500">
              {t.description}
            </p>
          </div>
          <Button
            asChild
            variant="ghost"
            className="shrink-0 text-sm font-semibold text-primary-600 hover:text-primary-800"
          ></Button>
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
