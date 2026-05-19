import { IconRulerMeasure, IconTools } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  laparoscopyKitItems,
  laparoscopyProduct,
} from "@/features/products/laparoscopy-trainer-box/constants/content";

export function ProductSpecsCard() {
  return (
    <Card
      id="specs"
      className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80"
    >
      <CardHeader className="p-7 pb-0">
        <CardTitle className="flex items-center gap-2 text-xl font-black text-neutral-900">
          <IconRulerMeasure size={22} className="text-primary-500" />
          مشخصات و اقلام آموزشی
        </CardTitle>
      </CardHeader>
      <CardContent className="p-7">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-bold text-neutral-900">
              مناسب برای
            </h3>
            <p className="text-sm leading-8 text-neutral-500">
              {laparoscopyProduct.suitability}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold text-neutral-900">
              اجزای پیشنهادی پکیج
            </h3>
            <div className="space-y-3">
              {laparoscopyKitItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <IconTools size={15} className="text-primary-500" />
                  <span className="text-sm leading-7 text-neutral-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
