import type React from "react";
import { elevatedCard } from "@/constants/layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type SummaryCardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
};

export function SummaryCard({ children, title }: SummaryCardProps) {
  return (
    <Card className={elevatedCard}>
      <CardContent className="p-7">
        {title ? (
          <CardTitle className="flex items-center gap-2 pb-3 text-xl font-bold text-neutral-900 dark:text-white">
            {title}
          </CardTitle>
        ) : null}
        {children}
      </CardContent>
    </Card>
  );
}
