import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type DetailActionCardProps = {
  tags: string[];
  ctaHref: string;
  ctaLabel: string;
};

export function DetailActionCard({
  tags,
  ctaHref,
  ctaLabel,
}: DetailActionCardProps) {
  return (
    <Card className="rounded-2xl border-white/10 bg-white/8 p-0 text-white backdrop-blur">
      <CardContent className="p-6">
        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="h-7 rounded-lg bg-white/10 px-3 text-xs font-semibold text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/20 hover:bg-primary-600"
        >
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
