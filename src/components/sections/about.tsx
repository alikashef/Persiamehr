import {
  IconTarget,
  IconTelescope,
  IconCircleCheck,
  IconShieldCheck,
  IconCertificate,
  IconNetwork,
} from "@tabler/icons-react";

const values = [
  {
    icon: IconShieldCheck,
    label: "اعتماد و شفافیت",
    desc: "ارائه مشاوره‌های مبتنی بر داده و شواهد علمی",
  },
  {
    icon: IconCertificate,
    label: "استانداردهای بین‌المللی",
    desc: "انطباق با ISO 13485 و مقررات CE و FDA",
  },
  {
    icon: IconNetwork,
    label: "شبکه گسترده",
    desc: "ارتباط با بیش از ۱۵۰ شرکت داخلی و خارجی",
  },
];

const milestones = [
  { year: "۱۳۸۹", label: "تأسیس هلدینگ پرسیا مهر" },
  { year: "۱۳۹۲", label: "اولین کنگره بین‌المللی لاپاروسکوپی" },
  { year: "۱۳۹۶", label: "راه‌اندازی مرکز شبیه‌سازی جراحی" },
  { year: "۱۳۹۹", label: "گسترش به ۱۰ کشور" },
  { year: "۱۴۰۱", label: "تأسیس بخش جراحی رباتیک" },
  { year: "۱۴۰۳", label: "اجرای ۲۰۰‌امین رویداد" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            درباره پرسیا مهر
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
            پیشرو در{" "}
            <span className="gradient-text">توسعه اکوسیستم</span>{" "}
            پزشکی ایران
          </h2>
          <p className="text-base text-neutral-500 leading-8">
            از سال ۱۳۸۹، پرسیا مهر با تیمی از متخصصان صنعت پزشکی و مشاوران
            ارشد، در حال شکل‌دادن آینده صنعت تجهیزات پزشکی ایران است.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Mission / Vision */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                  <IconTarget size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg mb-2">
                    ماموریت ما
                  </h3>
                  <p className="text-sm text-neutral-600 leading-7">
                    توسعه پایدار بازار تجهیزات پزشکی از طریق مشاوره اجرایی
                    حرفه‌ای، بهینه‌سازی ساختار سازمانی و تقویت شبکه‌های علمی
                    و تجاری در سطح ملی و بین‌المللی.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-neutral-900 rounded-2xl p-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary-500 flex items-center justify-center shrink-0">
                  <IconTelescope size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    چشم‌انداز ما
                  </h3>
                  <p className="text-sm text-neutral-300 leading-7">
                    رهبری در رشد اکوسیستم پزشکی منطقه خاورمیانه با ایجاد یک
                    شبکه یکپارچه از شرکت‌های تجهیزات پزشکی، مراکز آموزشی و
                    بیمارستان‌های پیشرو.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.label}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-50 group-hover:bg-primary-50 border border-neutral-100 group-hover:border-primary-100 flex items-center justify-center shrink-0 transition-all">
                      <Icon
                        size={17}
                        className="text-neutral-400 group-hover:text-primary-500 transition-colors"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-800">
                        {v.label}
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5">
                        {v.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-lg font-bold text-neutral-900 mb-8">
              مسیر رشد پرسیا مهر
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-0 bottom-0 right-[22px] w-px bg-neutral-100" />

              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex items-center gap-5 group">
                    {/* Dot */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-xs font-bold font-mono transition-all duration-200 ${
                          i === milestones.length - 1
                            ? "bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/30"
                            : "bg-white border-neutral-200 text-neutral-500 group-hover:border-primary-300 group-hover:text-primary-500"
                        }`}
                      >
                        {i === milestones.length - 1 ? (
                          <IconCircleCheck size={18} />
                        ) : (
                          <span className="text-[10px]">{m.year.slice(-2)}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-primary-500 font-semibold mb-0.5">
                        {m.year}
                      </div>
                      <div className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors">
                        {m.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
