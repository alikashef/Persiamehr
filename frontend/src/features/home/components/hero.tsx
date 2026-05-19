"use client";

import { copy } from "@/constants/copy";

export default function Hero() {
  const t = copy.hero;

  return (
    <section
      id="hero"
      dir="rtl"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-neutral-950 lg:min-h-screen"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover object-[52%_center] sm:object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/tttt.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(10_10_12/0.46)_0%,rgb(10_10_12/0.72)_58%,rgb(10_10_12/0.92)_100%)] sm:bg-[radial-gradient(circle_at_center,rgb(10_10_12/0.34)_0%,rgb(10_10_12/0.66)_54%,rgb(10_10_12/0.9)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/55 to-transparent sm:h-64" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/35 via-white/10 to-transparent sm:h-32" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-24 pt-28 text-center sm:px-6 sm:pb-32 lg:px-16">
        <div className="fade-in-up mx-auto max-w-[60rem]">
          <div className="mb-6 inline-flex max-w-full items-center gap-2 border-b border-primary-300/60 pb-2 text-[11px] font-semibold leading-6 text-primary-100 sm:mb-8 sm:text-xs">
            <span className="h-px w-6 shrink-0 bg-primary-300 sm:w-8" />
            <span className="truncate">{t.eyebrow}</span>
          </div>

          <h1 className="mx-auto mb-5 w-xl  font-black text-white drop-shadow-[0_8px_24px_rgb(0,0,0,0.28)] sm:mb-7 sm:text-4xl sm:leading-[1.2] md:text-5xl lg:text-6xl lg:leading-[1.16]">
            {t.titlePrefix}{" "}
            <span className="text-primary-200">
              {t.titleHighlight}
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-sm font-medium leading-7 text-white/78 sm:text-base sm:leading-8">
            {t.subtitle}
          </p>

          <div className="mx-auto mt-9 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-4 border-t border-white/15 pt-5 sm:mt-12 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-5 sm:pt-7">
            {t.stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 text-xl font-black text-white sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-[11px] font-medium leading-5 text-white/60 sm:text-xs sm:leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-hint absolute bottom-4 left-1/2 z-10 hidden flex-col items-center gap-2 text-white/85 sm:flex lg:bottom-6">
        <span className="text-xs font-bold">{t.scroll}</span>
        <div className="flex h-11 w-7 items-start justify-center rounded-full border-2 border-white/75 bg-white/15 pt-2 shadow-xl shadow-black/25 backdrop-blur lg:h-12 lg:w-8">
          <div className="scroll-indicator-dot h-3 w-1.5 rounded-full bg-white" />
        </div>
      </div>
    </section>
  );
}
