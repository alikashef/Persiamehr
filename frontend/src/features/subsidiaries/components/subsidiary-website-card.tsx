import { IconExternalLink, IconWorldWww } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type SubsidiaryWebsiteCardProps = {
  name: string;
  websiteLabel: string;
  websiteUrl: string;
};

export function SubsidiaryWebsiteCard({
  name,
  websiteLabel,
  websiteUrl,
}: SubsidiaryWebsiteCardProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-neutral-100 bg-white p-0 shadow-sm dark:border-white/10 dark:bg-neutral-900/80">
      <CardContent className="p-5">
        <div className="mb-4 h-1 w-12 rounded-full bg-primary-500" />

        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-bold text-primary-600 dark:text-primary-300">
              ورود به دنیای دیگر
            </p>
            <CardTitle className="text-lg font-black text-neutral-900 dark:text-white">
              {name}
            </CardTitle>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 dark:bg-white/10 dark:text-primary-300 dark:ring-white/10">
            <IconWorldWww size={21} />
          </div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          مسیر مستقیم برای دیدن فضای اختصاصی، خدمات و ارتباطات این برند.
        </p>

        <div className="mb-4 rounded-xl bg-neutral-50 px-3 py-2 text-xs font-semibold text-neutral-500 ring-1 ring-neutral-100 dark:bg-white/5 dark:text-neutral-300 dark:ring-white/10">
          <span dir="ltr">{websiteLabel}</span>
        </div>

        {websiteUrl ? (
          <Button
            asChild
            className="h-10 w-full rounded-xl bg-primary-500 font-bold text-white hover:bg-primary-600"
          >
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              مشاهده وب سایت
              <IconExternalLink size={15} />
            </a>
          </Button>
        ) : (
          <Button disabled variant="secondary" className="h-10 w-full rounded-xl font-bold">
            وب سایت به زودی
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
