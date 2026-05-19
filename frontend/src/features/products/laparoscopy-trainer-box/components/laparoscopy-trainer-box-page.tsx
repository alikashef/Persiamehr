import { PageLayout } from "@/components/layout/page-layout";
import { LaparoscopyFeatureGrid } from "@/features/products/laparoscopy-trainer-box/components/product-feature-grid";
import { LaparoscopyProductHero } from "@/features/products/laparoscopy-trainer-box/components/product-hero";
import { ProductSidebar } from "@/features/products/laparoscopy-trainer-box/components/product-sidebar";
import { ProductSpecsCard } from "@/features/products/laparoscopy-trainer-box/components/product-specs-card";
import { TrainingModulesCard } from "@/features/products/laparoscopy-trainer-box/components/training-modules-card";
import { laparoscopyProduct } from "@/features/products/laparoscopy-trainer-box/constants/content";

export const metadata = laparoscopyProduct.metadata;

export default function LaparoscopyTrainerBoxPage() {
  return (
    <PageLayout className="bg-neutral-50 dark:bg-neutral-950">
      <LaparoscopyProductHero />

      <section className="py-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-6 lg:grid-cols-[1fr_380px] lg:px-16">
          <div className="space-y-8">
            <LaparoscopyFeatureGrid />
            <TrainingModulesCard />
            <ProductSpecsCard />
          </div>

          <ProductSidebar />
        </div>
      </section>
    </PageLayout>
  );
}
