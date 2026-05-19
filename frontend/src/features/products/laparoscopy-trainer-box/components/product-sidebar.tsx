import Link from "next/link";
import { IconShieldCheck } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { laparoscopyProduct } from "@/features/products/laparoscopy-trainer-box/constants/content";

export function ProductSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
      <Card className="rounded-2xl border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-900/80">
        <CardContent className="p-6">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-200">
            <IconShieldCheck size={24} />
          </div>
          <h2 className="mb-3 text-lg font-black text-neutral-900">
            همراه با طراحی دوره
          </h2>
          <p className="text-sm leading-7 text-neutral-500">
            {laparoscopyProduct.purchaseSupport}
          </p>
          <Separator className="my-6" />
          <Button
            asChild
            size="lg"
            className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
          >
            <Link href="/contact">دریافت مشاوره خرید</Link>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
