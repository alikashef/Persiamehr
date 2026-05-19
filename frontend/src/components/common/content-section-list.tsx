import { IconCheck } from "@tabler/icons-react";
import { elevatedCard } from "@/constants/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ContentSection = {
  title: string;
  body: string;
};

type ContentSectionListProps = {
  sections: ContentSection[];
  textClassName?: string;
  titleClassName?: string;
};

export function ContentSectionList({
  sections,
  textClassName = "text-neutral-600 dark:text-neutral-300",
  titleClassName = "text-neutral-900 dark:text-white",
}: ContentSectionListProps) {
  return (
    <div className="grid gap-5">
      {sections.map((section) => (
        <Card key={section.title} className={elevatedCard}>
          <CardHeader className="p-7 pb-0">
            <CardTitle
              className={`flex items-center gap-2 text-xl font-bold ${titleClassName}`}
            >
              <IconCheck size={20} className="text-primary-500" />
              {section.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-7 pt-4">
            <p className={`text-sm leading-8 ${textClassName}`}>
              {section.body}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
