import {
  IconCalendarStar,
  IconBuildingStore,
  IconWorld,
  IconTrophy,
  IconStethoscope,
  IconUsersGroup,
} from "@tabler/icons-react";

const stats = [
  {
    icon: IconCalendarStar,
    value: "۱۵+",
    label: "سال تجربه",
    sublabel: "از ۱۳۸۹ تا کنون",
    color: "from-violet-500 to-primary-500",
  },
  {
    icon: IconTrophy,
    value: "۲۰۰+",
    label: "رویداد برگزار شده",
    sublabel: "کنگره، سمینار، کارگاه",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: IconBuildingStore,
    value: "۸۰+",
    label: "شرکت همکار",
    sublabel: "داخلی و بین‌المللی",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: IconWorld,
    value: "۱۲",
    label: "کشور تحت پوشش",
    sublabel: "در سراسر جهان",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: IconStethoscope,
    value: "۵۰۰۰+",
    label: "پزشک آموزش‌دیده",
    sublabel: "در حوزه‌های تخصصی",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: IconUsersGroup,
    value: "۳۰,۰۰۰+",
    label: "شرکت‌کننده",
    sublabel: "در رویدادهای علمی",
    color: "from-primary-500 to-purple-600",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 bg-neutral-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(to right, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(148 57 147 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(148 57 147 / 0.10) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-primary-300 text-xs font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            پرسیا مهر در اعداد
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            ۱۵ سال حضور موثر در{" "}
            <span className="gradient-text">صنعت پزشکی ایران</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group relative bg-white/5 hover:bg-white/8 border border-white/8 hover:border-white/15 rounded-2xl p-5 text-center transition-all duration-200 cursor-default"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Icon size={20} className="text-white" />
                </div>

                {/* Value */}
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 font-mono">
                  {s.value}
                </div>

                {/* Label */}
                <div className="text-xs font-semibold text-neutral-300 mb-1">
                  {s.label}
                </div>

                {/* Sublabel */}
                <div className="text-[10px] text-neutral-500 leading-tight">
                  {s.sublabel}
                </div>

                {/* Hover glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
