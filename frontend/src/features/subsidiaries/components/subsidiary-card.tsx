"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import type { SubsidiaryItem } from "@/features/subsidiaries/types";

type Props = {
  item: SubsidiaryItem;
  viewBrandLabel: string;
};

export default function SubsidiaryCard({ item, viewBrandLabel }: Props) {
  const maxDescriptionLength = 120;
  const limitedDescription =
    item.description.length > maxDescriptionLength
      ? `${item.description.slice(0, maxDescriptionLength).trim()}...`
      : item.description;

  return (
    <Card
      className={`card-hover group flex overflow-hidden rounded-2xl bg-white p-0 ${item.borderColor} dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-[0_22px_55px_rgb(0,0,0,0.32)]`}
    >
      <CardContent className="flex h-full flex-col p-0">
        <div className={`relative overflow-hidden bg-gradient-to-br ${item.pattern} ${item.darkPattern} p-6`}>
          <div className="absolute left-5 top-5 h-16 w-16 rounded-full border border-white/80 bg-white/40 blur-sm dark:border-white/10 dark:bg-white/5" />
          <div className="absolute -right-12 -top-12 hidden h-32 w-32 rounded-full bg-white/45 blur-2xl dark:block dark:bg-white/5" />
          <div className="relative flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.logoGradient} text-lg font-black tracking-wide text-white shadow-lg shadow-black/10 ring-1 ring-white/35 dark:shadow-black/35 dark:ring-white/15`}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={64}
                    height={64}
                    unoptimized
                    className="h-full w-full bg-white object-contain p-1.5"
                  />
                ) : (
                  item.monogram
                )}
              </div>
              <div>
                <CardTitle className="text-xl font-black text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-300">
                  {item.name}
                </CardTitle>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7 pt-6 dark:bg-gradient-to-b dark:from-white/[0.03] dark:to-transparent">
          <h3 className="mb-5 text-center text-lg font-semibold tracking-wide text-black dark:text-white">
            {item.tagline}
          </h3>
          <p className="flex-grow text-justify text-sm leading-7 text-gray-500 dark:text-neutral-400">
            {limitedDescription}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-5 dark:border-white/10">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className={`h-8 px-0 text-xs font-semibold ${item.textColor} ${item.darkTextColor} hover:bg-transparent hover:opacity-80`}
            >
              <Link href={`/subsidiaries/${item.slug}`}>
                {viewBrandLabel}
                <IconArrowRight size={12} className="rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
