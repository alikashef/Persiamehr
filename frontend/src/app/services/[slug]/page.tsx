import { notFound } from "next/navigation";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ServiceDetailView } from "@/features/services/components/service-detail-view";
import {
  getDisplayService,
  getDisplayServices,
  getServiceStaticParams,
} from "@/features/services/services/service-queries";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceDetailCopy = {
  back: "بازگشت به خدمات",
  cta: "درخواست مشاوره",
  other: "سایر خدمات",
};

export function generateStaticParams() {
  return getServiceStaticParams();
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getDisplayService(slug);

  if (!service) {
    return { title: "خدمت پیدا نشد | پرشیامهر" };
  }

  return {
    title: `${service.title} | پرشیامهر`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getDisplayService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <ServiceDetailView
        service={service}
        relatedServices={await getDisplayServices()}
        copy={serviceDetailCopy}
      />
      <Footer />
    </>
  );
}
