import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft, IconBox } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  laparoscopyProduct,
  laparoscopySpecs,
} from "@/features/products/laparoscopy-trainer-box/constants/content";

export function LaparoscopyProductHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 text-white">
      <div className="absolute inset-0 opacity-45">
        <Image
          src="/hero-medical-equipment.png"
          alt="تجهیزات آموزشی پزشکی"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 via-neutral-950/88 to-neutral-950/58" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-6 pb-20 lg:grid-cols-[1fr_440px] lg:px-16">
        <div>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <IconArrowLeft size={15} className="rotate-180" />
            بازگشت به صفحه اصلی
          </Link>

          <Badge className="mb-5 rounded-full bg-primary-500/20 px-4 py-1.5 text-primary-100 ring-1 ring-primary-300/25">
            {laparoscopyProduct.badge}
          </Badge>
          <h1 className="mb-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            {laparoscopyProduct.title}
          </h1>
          <p className="max-w-3xl text-base leading-9 text-white/76 md:text-lg">
            {laparoscopyProduct.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-primary-500 px-6 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
            >
              <Link href="/contact">درخواست معرفی محصول</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/20 bg-white/10 px-6 font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <Link href="#specs">مشاهده مشخصات</Link>
            </Button>
          </div>
        </div>

        <Card className="self-end rounded-2xl border-white/10 bg-white/10 p-0 text-white shadow-2xl shadow-black/30 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30">
                <IconBox size={27} />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  {laparoscopyProduct.sideTitle}
                </div>
                <div className="mt-1 text-xs text-white/55">
                  {laparoscopyProduct.sideSubtitle}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {laparoscopySpecs.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/8 p-4"
                >
                  <div className="text-xs text-white/50">{item.label}</div>
                  <div className="mt-2 text-sm font-bold leading-6 text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
