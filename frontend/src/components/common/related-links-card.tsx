import Link from "next/link";
import { elevatedCard } from "@/constants/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RelatedLink = {
  href: string;
  label: string;
  active?: boolean;
};

type RelatedLinksCardProps = {
  title: string;
  links: RelatedLink[];
};

export function RelatedLinksCard({ title, links }: RelatedLinksCardProps) {
  return (
    <Card className={elevatedCard}>
      <CardHeader className="p-6 pb-0">
        <CardTitle className="text-sm font-bold text-neutral-900 dark:text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 p-6 pt-4">
        {links.map((item) => (
          <Button
            key={item.href}
            asChild
            variant={item.active ? "default" : "ghost"}
            className="h-auto w-full justify-start rounded-xl px-4 py-3 text-right"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
