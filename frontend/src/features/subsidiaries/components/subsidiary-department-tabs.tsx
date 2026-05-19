"use client";

import { useMemo, useState } from "react";
import SubsidiaryCard from "@/features/subsidiaries/components/subsidiary-card";
import type {
  Department,
  DepartmentCategoryItem,
  SubsidiaryItem,
} from "@/features/subsidiaries/types";

type TabsText = {
  viewBrand: string;
  empty: string;
};

type Props = {
  categories: DepartmentCategoryItem[];
  items: SubsidiaryItem[];
  text: TabsText;
};

export default function SubsidiaryDepartmentTabs({ categories, items, text }: Props) {
  const firstCategory = categories[0]?.slug ?? "";
  const [active, setActive] = useState<Department>(firstCategory);
  const [prev, setPrev] = useState<Department>(firstCategory);

  const activeCategory = categories.find((category) => category.slug === active) ?? categories[0];
  const activeIndex = Math.max(
    categories.findIndex((category) => category.slug === active),
    0
  );
  const previousIndex = Math.max(
    categories.findIndex((category) => category.slug === prev),
    0
  );

  const visibleItems = useMemo(
    () => items.filter((item) => item.department === activeCategory?.slug),
    [activeCategory?.slug, items]
  );
  const slideClass =
    activeIndex > previousIndex
      ? "animate-in slide-in-from-left-3 fade-in-0 duration-300"
      : activeIndex < previousIndex
        ? "animate-in slide-in-from-right-3 fade-in-0 duration-300"
        : "animate-in fade-in-0 duration-300";

  function activate(next: Department) {
    if (next === active) {
      return;
    }
    setPrev(active);
    setActive(next);
  }

  if (categories.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-200 bg-white/70 p-8 text-sm text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
        {text.empty}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="mb-8 flex w-full justify-center">
        <div className="relative w-full max-w-3xl rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-white/10 sm:w-fit">
          <div
            className="absolute top-1.5 h-[44px] rounded-xl bg-primary-500 shadow-sm transition-all duration-300 ease-out"
            style={{
              right: `calc(${activeIndex} * ((100% - 12px) / ${categories.length}) + 6px)`,
              width: `calc((100% - 12px) / ${categories.length})`,
            }}
            aria-hidden="true"
          />
          <div
            className="relative grid gap-1"
            style={{ gridTemplateColumns: `repeat(${categories.length}, minmax(0, 1fr))` }}
          >
            {categories.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => activate(category.slug)}
                className={`h-11 rounded-xl px-5 text-center text-sm font-bold transition-colors duration-300 ${
                  active === category.slug
                    ? "text-white"
                    : "text-neutral-600 hover:bg-primary-50 hover:text-primary-700 dark:text-neutral-300 dark:hover:bg-primary-400/10 dark:hover:text-primary-200"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {visibleItems.length > 0 ? (
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${slideClass}`}>
          {visibleItems.map((sub) => (
            <SubsidiaryCard key={sub.slug} item={sub} viewBrandLabel={text.viewBrand} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-neutral-200 bg-white/70 p-8 text-sm text-neutral-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-neutral-400">
          {activeCategory
            ? `هنوز زیرمجموعه فعالی برای ${activeCategory.title} ثبت نشده است.`
            : text.empty}
        </div>
      )}
    </div>
  );
}
