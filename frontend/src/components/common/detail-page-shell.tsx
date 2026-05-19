import type React from "react";
import { detailGrid, pageContainer } from "@/constants/layout";
import { cn } from "@/lib/utils";

type DetailPageShellProps = {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
};

export function DetailPageShell({
  children,
  sidebar,
  className,
}: DetailPageShellProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className={cn(pageContainer, detailGrid)}>
        <div className="space-y-8">{children}</div>
        {sidebar ? <aside className="space-y-5">{sidebar}</aside> : null}
      </div>
    </section>
  );
}
