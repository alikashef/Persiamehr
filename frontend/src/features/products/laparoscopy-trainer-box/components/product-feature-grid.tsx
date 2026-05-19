import { Card, CardContent } from "@/components/ui/card";
import { laparoscopyFeatures } from "@/features/products/laparoscopy-trainer-box/constants/content";

export function LaparoscopyFeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {laparoscopyFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <Card
            key={feature.title}
            className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80"
          >
            <CardContent className="p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-200">
                <Icon size={23} />
              </div>
              <h2 className="mb-3 text-base font-black text-neutral-900">
                {feature.title}
              </h2>
              <p className="text-sm leading-7 text-neutral-500">{feature.body}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
