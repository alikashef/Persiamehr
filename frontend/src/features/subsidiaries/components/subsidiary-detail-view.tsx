import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { DetailHero } from "@/components/common/detail-hero";
import { DetailPageShell } from "@/components/common/detail-page-shell";
import { ContentSectionList } from "@/components/common/content-section-list";
import { SummaryCard } from "@/components/common/summary-card";
import type { SubsidiaryItem } from "@/features/subsidiaries/types";
import { SubsidiaryWebsiteCard } from "@/features/subsidiaries/components/subsidiary-website-card";
import { cn } from "@/lib/utils";

type SubsidiaryDetailCopy = {
  back: string;
};

type SubsidiaryDetailViewProps = {
  item: SubsidiaryItem;
  copy: SubsidiaryDetailCopy;
  rootClassName?: string;
};

function normalizeWebsiteUrl(website: string) {
  if (!website) {
    return "";
  }

  return website.startsWith("http://") || website.startsWith("https://")
    ? website
    : `https://${website}`;
}

function getWebsiteLabel(websiteUrl: string) {
  if (!websiteUrl) {
    return "وب سایت اختصاصی";
  }

  try {
    return new URL(websiteUrl).hostname.replace(/^www\./, "");
  } catch {
    return websiteUrl.replace(/^https?:\/\//, "").replace(/^www\./, "");
  }
}

function SubsidiaryLogoMark({ item }: { item: SubsidiaryItem }) {
  return (
    <div
      className={`mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.logoGradient} text-base font-black tracking-wide text-white shadow-lg shadow-primary-500/30 ring-1 ring-white/35`}
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
  );
}

export function SubsidiaryDetailView({
  item,
  copy,
  rootClassName,
}: SubsidiaryDetailViewProps) {
  const websiteUrl = normalizeWebsiteUrl(item.website);
  const websiteLabel = getWebsiteLabel(websiteUrl);
  const headerImage = item.headerImage || "/hero-medical-equipment.png";

  return (
    <main dir="rtl" className={cn("min-h-screen bg-neutral-50 dark:bg-neutral-950", rootClassName)}>
      <DetailHero
        backHref="/#subsidiaries"
        backLabel={copy.back}
        title={item.name}
        summary={item.tagline}
        iconNode={<SubsidiaryLogoMark item={item} />}
        mediaClassName="before:absolute before:inset-0 before:z-[1] before:bg-black/60"
        mediaNode={
          <Image
            src={headerImage}
            alt=""
            fill
            sizes="100vw"
            unoptimized={Boolean(item.headerImage)}
            className="object-cover"
          />
        }
      />

      <DetailPageShell
        sidebar={
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScrollReveal>
              <SubsidiaryWebsiteCard
                name={item.name}
                websiteLabel={websiteLabel}
                websiteUrl={websiteUrl}
              />
            </ScrollReveal>
          </div>
        }
      >
        <SummaryCard
          title={
            <>
              <IconCheck size={20} className="text-primary-500" />
              توضیحات
            </>
          }
        >
          <p className="text-base leading-9 text-neutral-600 dark:text-neutral-300">
            {item.description}
          </p>
        </SummaryCard>
        
        
        <ContentSectionList sections={item.sections} />
      </DetailPageShell>
    </main>
  );
}
