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
  const headerImage = item.headerImage || "/hero-medical-equipment.png";
  const maxDescriptionLength = 120;
  const limitedDescription =
    item.description.length > maxDescriptionLength
      ? `${item.description.slice(0, maxDescriptionLength).trim()}...`
      : item.description;

  return (
    <Card
      className={`card-hover subsidiary-card group/subsidiary-card flex overflow-hidden rounded-2xl bg-white p-0 ${item.borderColor} dark:border-white/10 dark:bg-neutral-900/80 dark:shadow-[0_22px_55px_rgb(0,0,0,0.32)]`}
    >
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative overflow-hidden bg-neutral-900 p-5">
          <Image
            src={headerImage}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 20vw"
            unoptimized={Boolean(item.headerImage)}
            className="subsidiary-card-image object-cover transition-all duration-500 group-hover/subsidiary-card:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/15" />
          <div className="relative flex min-h-24 items-end justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.logoGradient} text-base font-black tracking-wide text-white shadow-lg shadow-black/20 ring-1 ring-white/35 dark:shadow-black/35 dark:ring-white/15`}
              >
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={56}
                    height={56}
                    unoptimized
                    className="h-full w-full bg-white object-contain p-1.5"
                  />
                ) : (
                  item.monogram
                )}
              </div>
              <CardTitle className="text-lg font-black text-white drop-shadow-lg transition-colors group-hover/subsidiary-card:text-primary-100">
                {item.name}
              </CardTitle>
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
