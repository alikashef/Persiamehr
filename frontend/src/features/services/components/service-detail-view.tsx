import { DetailActionCard } from "@/components/common/detail-action-card";
import { DetailHero } from "@/components/common/detail-hero";
import { DetailPageShell } from "@/components/common/detail-page-shell";
import { ContentSectionList } from "@/components/common/content-section-list";
import { RelatedLinksCard } from "@/components/common/related-links-card";
import { SummaryCard } from "@/components/common/summary-card";
import type { ServiceItem } from "@/features/services/types";
import { cn } from "@/lib/utils";

type ServiceDetailCopy = {
  back: string;
  cta: string;
  other: string;
};

type ServiceDetailViewProps = {
  service: ServiceItem;
  relatedServices: ServiceItem[];
  copy: ServiceDetailCopy;
  rootClassName?: string;
};

export function ServiceDetailView({
  service,
  relatedServices,
  copy,
  rootClassName,
}: ServiceDetailViewProps) {
  const Icon = service.icon;

  return (
    <main
      dir="rtl"
      className={cn("min-h-screen bg-neutral-50 dark:bg-neutral-950", rootClassName)}
    >
      <DetailHero
        backHref="/#services"
        backLabel={copy.back}
        icon={Icon}
        title={service.title}
        summary={service.summary}
        aside={<DetailActionCard tags={service.tags} ctaHref="/contact" ctaLabel={copy.cta} />}
      />

      <DetailPageShell
        sidebar={
          <RelatedLinksCard
            title={copy.other}
            links={relatedServices.map((item) => ({
              href: `/services/${item.slug}`,
              label: item.title,
              active: item.slug === service.slug,
            }))}
          />
        }
      >
        <SummaryCard>
          <p className="text-base leading-9 text-neutral-600 dark:text-neutral-300">
            {service.description}
          </p>
        </SummaryCard>
        <ContentSectionList sections={service.sections} />
      </DetailPageShell>
    </main>
  );
}
