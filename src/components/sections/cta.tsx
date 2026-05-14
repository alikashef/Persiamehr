"use client";

import { useActionState } from "react";
import {
  IconSend,
  IconCheck,
  IconArrowLeft,
  IconBrandLinkedin,
  IconPhone,
  IconMail,
  IconLoader2,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import type { SiteSettings } from "@/lib/api";

const initialState: ContactFormState = { success: false };

type CTAProps = {
  settings?: Pick<SiteSettings, "phone" | "email" | "linkedin">;
};

export default function CTA({ settings }: CTAProps) {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const phone = settings?.phone || "۰۲۱-۸۸۰۰۱۲۳۴";
  const email = settings?.email || "info@persiamehr.com";
  const linkedin = settings?.linkedin || "#";

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle top-right orb */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgb(148 57 147 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Big CTA headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            شروع همکاری
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight mb-6">
            کسب‌وکار پزشکی شما را{" "}
            <span className="gradient-text">رشد می‌دهیم</span>
          </h2>
          <p className="text-lg text-neutral-500 leading-8">
            با تیم مشاوران ارشد پرشیامهر در تماس باشید. اولین جلسه مشاوره
            کاملاً رایگان است.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact form */}
          <Card className="rounded-2xl border-neutral-100 bg-white p-0 shadow-sm lg:col-span-3">
            <CardContent className="p-8">
            {state.success ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <IconCheck size={30} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  پیام شما دریافت شد
                </h3>
                <p className="text-neutral-500 text-sm leading-7 max-w-sm">
                  تیم پرشیامهر در اولین فرصت با شما تماس خواهد گرفت. معمولاً
                  ظرف ۲۴ ساعت کاری پاسخ می‌دهیم.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                      نام و نام‌خانوادگی
                    </Label>
                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="دکتر احمد رضایی"
                      className="h-12 rounded-xl border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                      شرکت / سازمان
                    </Label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="شرکت تجهیزات پزشکی..."
                      className="h-12 rounded-xl border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    ایمیل
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="example@company.com"
                    dir="ltr"
                    className="h-12 rounded-xl border-neutral-200 bg-neutral-50 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                  />
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    پیام شما
                  </Label>
                  <Textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="در چه زمینه‌ای به مشاوره نیاز دارید؟"
                    className="min-h-32 resize-none rounded-xl border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus-visible:border-primary-400 focus-visible:bg-white focus-visible:ring-primary-100"
                  />
                </div>

                {state.error && (
                  <p className="text-sm text-red-500">{state.error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={pending}
                  className="h-12 w-full rounded-xl bg-primary-500 py-4 font-semibold text-white shadow-lg shadow-primary-500/25 hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-primary-500/35 disabled:opacity-70"
                >
                  {pending ? (
                    <IconLoader2 size={17} className="animate-spin" />
                  ) : (
                    <IconSend size={17} />
                  )}
                  {pending ? "در حال ارسال..." : "ارسال پیام"}
                  {!pending && (
                    <IconArrowLeft
                      size={15}
                      className="rtl:rotate-180 group-hover:-translate-x-0.5 transition-transform"
                    />
                  )}
                </Button>
              </form>
            )}
            </CardContent>
          </Card>

          {/* Right: Contact info + feature list */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <Card className="rounded-2xl border-neutral-100 bg-neutral-50 p-0">
              <CardHeader className="p-6 pb-0">
              <CardTitle className="text-sm font-bold text-neutral-900">
                تماس مستقیم
              </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6 pt-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                  <IconPhone size={16} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">تلفن</div>
                  <div
                    className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors"
                    dir="ltr"
                  >
                    {phone}
                  </div>
                </div>
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                  <IconMail size={16} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">ایمیل</div>
                  <div
                    className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors"
                    dir="ltr"
                  >
                    {email}
                  </div>
                </div>
              </a>
              <a href={linkedin} className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0">
                  <IconBrandLinkedin size={16} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">LinkedIn</div>
                  <div className="text-sm font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors" dir="ltr">
                    Persia Mehr Holdings
                  </div>
                </div>
              </a>
              </CardContent>
            </Card>

            {/* Promise cards */}
            {[
              {
                title: "مشاوره اول رایگان",
                desc: "اولین جلسه مشاوره ۳۰ دقیقه‌ای بدون هزینه",
              },
              {
                title: "پاسخ در ۲۴ ساعت",
                desc: "تیم ما در اولین روز کاری با شما تماس می‌گیرد",
              },
              {
                title: "محرمانگی کامل",
                desc: "تمام اطلاعات کسب‌وکار شما محفوظ می‌ماند",
              },
            ].map((p) => (
              <Card
                key={p.title}
                className="rounded-xl border-neutral-100 bg-white p-0"
              >
                <CardContent className="flex items-start gap-3 p-4">
                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                  <IconCheck size={11} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-800">
                    {p.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{p.desc}</div>
                </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
