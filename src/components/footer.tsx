import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowLeft,
} from "@tabler/icons-react";

const subsidiaryLinks = [
  { label: "پرسیا ساینس", href: "#" },
  { label: "مدیا مد", href: "#" },
  { label: "پرسیا ادوانس", href: "#" },
  { label: "کنگره پلاس", href: "#" },
  { label: "ایران لاپاروسکوپی", href: "#" },
];

const serviceLinks = [
  { label: "مشاوره اجرایی", href: "#services" },
  { label: "طراحی ساختار سازمانی", href: "#services" },
  { label: "توسعه بازار پزشکی", href: "#services" },
  { label: "برگزاری کنگره", href: "#events" },
  { label: "برنامه‌های آموزشی", href: "#events" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-white font-bold text-base">پم</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-none">
                  پرسیا مهر
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5 tracking-wide">
                  Persia Mehr Holdings
                </div>
              </div>
            </div>
            <p className="text-sm leading-7 text-neutral-400 mb-8">
              هلدینگ تخصصی در حوزه توسعه بازار تجهیزات پزشکی، مشاوره اجرایی
              و طراحی ساختار سازمانی.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: IconBrandLinkedin, label: "LinkedIn" },
                { Icon: IconBrandInstagram, label: "Instagram" },
                { Icon: IconBrandTelegram, label: "Telegram" },
                { Icon: IconBrandWhatsapp, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-primary-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
              خدمات
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft
                      size={13}
                      className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
              زیرمجموعه‌ها
            </h4>
            <ul className="space-y-3">
              {subsidiaryLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft
                      size={13}
                      className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180"
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
              تماس با ما
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconMapPin
                  size={16}
                  className="text-primary-400 mt-0.5 shrink-0"
                />
                <span className="text-sm text-neutral-400 leading-6">
                  تهران، خیابان ولیعصر، برج پزشکی ایران، طبقه ۱۲
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={16} className="text-primary-400 shrink-0" />
                <a
                  href="tel:+982188001234"
                  className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
                  dir="ltr"
                >
                  ۰۲۱-۸۸۰۰۱۲۳۴
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={16} className="text-primary-400 shrink-0" />
                <a
                  href="mailto:info@persiamehr.com"
                  className="text-sm text-neutral-400 hover:text-primary-300 transition-colors"
                  dir="ltr"
                >
                  info@persiamehr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © ۱۴۰۴ پرسیا مهر. تمامی حقوق محفوظ است.
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              حریم خصوصی
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              شرایط استفاده
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
