"use client";

import { useState } from "react";
import {
  IconSend,
  IconCheck,
  IconArrowLeft,
  IconBrandLinkedin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            با تیم مشاوران ارشد پرسیا مهر در تماس باشید. اولین جلسه مشاوره
            کاملاً رایگان است.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Contact form */}
          <div className="lg:col-span-3 bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                  <IconCheck size={30} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  پیام شما دریافت شد
                </h3>
                <p className="text-neutral-500 text-sm leading-7 max-w-sm">
                  تیم پرسیا مهر در اولین فرصت با شما تماس خواهد گرفت. معمولاً
                  ظرف ۲۴ ساعت کاری پاسخ می‌دهیم.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      نام و نام‌خانوادگی
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="دکتر احمد رضایی"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      شرکت / سازمان
                    </label>
                    <input
                      type="text"
                      placeholder="شرکت تجهیزات پزشکی..."
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="example@company.com"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">
                    پیام شما
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="در چه زمینه‌ای به مشاوره نیاز دارید؟"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <IconSend size={17} />
                  ارسال پیام
                  <IconArrowLeft
                    size={15}
                    className="rtl:rotate-180 group-hover:-translate-x-0.5 transition-transform"
                  />
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact info + feature list */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct contact */}
            <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-neutral-900">
                تماس مستقیم
              </h3>
              <a
                href="tel:+982188001234"
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
                    ۰۲۱-۸۸۰۰۱۲۳۴
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@persiamehr.com"
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
                    info@persiamehr.com
                  </div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 group">
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
            </div>

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
              <div
                key={p.title}
                className="flex items-start gap-3 bg-white border border-neutral-100 rounded-xl p-4"
              >
                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                  <IconCheck size={11} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-800">
                    {p.title}
                  </div>
                  <div className="text-xs text-neutral-500 mt-0.5">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
