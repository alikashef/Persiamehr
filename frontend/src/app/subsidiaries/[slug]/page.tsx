import { notFound } from "next/navigation";
import { SubsidiaryDetailView } from "@/features/subsidiaries/components/subsidiary-detail-view";
import {
  getDisplaySubsidiary,
  getSubsidiaryStaticParams,
} from "@/features/subsidiaries/services/subsidiary-queries";

type SubsidiaryPageProps = {
  params: Promise<{ slug: string }>;
};

const subsidiaryCopy = {
  back: "بازگشت به دپارتمان ها",
};

export function generateStaticParams() {
  return getSubsidiaryStaticParams();
}

export async function generateMetadata({ params }: SubsidiaryPageProps) {
  const { slug } = await params;
  const item = await getDisplaySubsidiary(slug);

  if (!item) {
    return { title: "زیرمجموعه پیدا نشد | پرشیامهر" };
  }

  return {
    title: `${item.name} | پرشیامهر`,
    description: item.description,
  };
}

export default async function SubsidiaryDetailPage({
  params,
}: SubsidiaryPageProps) {
  const { slug } = await params;
  const item = await getDisplaySubsidiary(slug);

  if (!item) {
    notFound();
  }

  return <SubsidiaryDetailView item={item} copy={subsidiaryCopy} />;
}
