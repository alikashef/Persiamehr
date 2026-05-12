"use client";

import {
  IconArrowLeft,
  IconChartBar,
  IconBuildingHospital,
  IconAward,
  IconWorld,
  IconPlayerPlay,
} from "@tabler/icons-react";

const quickStats = [
  { label: "سال تجربه", value: "۱۵+" },
  { label: "رویداد برگزار شده", value: "۲۰۰+" },
  { label: "شرکت همکار", value: "۸۰+" },
  { label: "کشور تحت پوشش", value: "۱۲" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-animate absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(148 57 147 / 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="orb-animate-delayed absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(148 57 147 / 0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgb(148 57 147 / 0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Abstract decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-20 left-10 opacity-[0.06] text-primary-500"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="50" y1="200" x2="350" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="50" x2="200" y2="350" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        <svg
          className="absolute bottom-20 right-10 opacity-[0.04] text-primary-500"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
        >
          <rect x="30" y="30" width="240" height="240" rx="20" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="70" width="160" height="160" rx="12" stroke="currentColor" strokeWidth="0.5" />
          <rect x="110" y="110" width="80" height="80" rx="6" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="fade-in-up">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold tracking-wide mb-8">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
              هلدینگ تخصصی تجهیزات پزشکی ایران
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.15] mb-6 tracking-tight">
              رهبری هوشمند در{" "}
              <span className="gradient-text">
                اکوسیستم تجهیزات
              </span>{" "}
              پزشکی
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-neutral-500 leading-8 mb-10 max-w-xl">
              مشاوره اجرایی حرفه‌ای، طراحی ساختار سازمانی بهینه و توسعه پایدار
              بازار برای شرکت‌های تجهیزات پزشکی در سطح ملی و بین‌المللی.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-primary-500 text-white font-semibold text-base rounded-2xl hover:bg-primary-600 shadow-xl shadow-primary-500/30 hover:shadow-primary-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                مشاوره رایگان
                <IconArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform rtl:rotate-180"
                />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2.5 px-7 py-4 bg-white text-neutral-800 font-semibold text-base rounded-2xl border border-neutral-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <IconPlayerPlay size={16} className="text-primary-500" />
                مشاهده خدمات
              </a>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-neutral-100">
              {quickStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {s.value}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative hidden lg:flex items-center justify-center">
            {/* Main card */}
            <div className="relative w-full max-w-lg">
              {/* Floating card 1 */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 flex items-center gap-3 z-20 w-56">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <IconChartBar size={20} className="text-primary-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-800">
                    رشد بازار
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    ۳۸٪ در ۱۲ ماه
                  </div>
                </div>
              </div>

              {/* Floating card 2 */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 p-4 flex items-center gap-3 z-20 w-64">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <IconAward size={20} className="text-emerald-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-neutral-800">
                    گواهینامه بین‌المللی
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    ISO 13485 · CE Mark
                  </div>
                </div>
              </div>

              {/* Main visual block */}
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-8 pt-10 overflow-hidden shadow-2xl shadow-primary-500/30">
                {/* Inner grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10 text-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <IconBuildingHospital size={40} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    پرسیا مهر
                  </h3>
                  <p className="text-primary-200 text-sm leading-6">
                    هلدینگ تخصصی تجهیزات پزشکی
                  </p>
                </div>

                {/* Domain pills */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    "جراحی عمومی",
                    "جراحی چاقی",
                    "آندوسکوپی",
                    "جراحی رباتیک",
                    "زنان و زایمان",
                    "جراحی فتق",
                  ].map((d) => (
                    <div
                      key={d}
                      className="bg-white/10 backdrop-blur-sm text-white text-xs font-medium py-2.5 px-3 rounded-xl text-center border border-white/10 hover:bg-white/20 transition-colors"
                    >
                      {d}
                    </div>
                  ))}
                </div>

                {/* World coverage */}
                <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 border border-white/10">
                  <IconWorld size={22} className="text-primary-200 shrink-0" />
                  <div>
                    <div className="text-white text-xs font-semibold">
                      پوشش بین‌المللی
                    </div>
                    <div className="text-primary-200 text-xs mt-0.5">
                      ۱۲ کشور در سراسر جهان
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-neutral-500 font-medium">اسکرول کنید</span>
        <div className="w-5 h-8 rounded-full border border-neutral-300 flex items-start justify-center pt-1.5">
          <div
            className="w-1 h-2 bg-neutral-400 rounded-full"
            style={{ animation: "float-orb 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
