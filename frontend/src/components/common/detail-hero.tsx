import Link from "next/link";
import type React from "react";
import { IconArrowLeft } from "@tabler/icons-react";
import { pageContainer, detailGrid } from "@/constants/layout";
import type { IconComponent } from "@/types/icon";
import { cn } from "@/lib/utils";

type DetailHeroProps = {
  backHref: string;
  backLabel: string;
  title: string;
  summary: string;
  icon?: IconComponent;
  iconNode?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
  mediaClassName?: string;
};

export function DetailHero({
  backHref,
  backLabel,
  title,
  summary,
  icon: Icon,
  iconNode,
  aside,
  className,
  mediaClassName,
}: DetailHeroProps) {
  return (
    <section
      className={cn(
        "bg-neutral-950 pb-16 pt-32 text-white",
        mediaClassName,
        className
      )}
    >
      <div className={pageContainer}>
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          <IconArrowLeft size={15} className="rotate-180 rtl:rotate-0 ltr:rotate-180" />
          {backLabel}
        </Link>

        <div className={detailGrid}>
          <div>
            {iconNode ?? (
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                {Icon ? <Icon size={28} /> : null}
              </div>
            )}
            <h1 className="mb-6 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-base leading-9 text-white/75 md:text-lg">
              {summary}
            </p>
          </div>

          {aside}
        </div>
      </div>
    </section>
  );
}
