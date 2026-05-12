import Image from "next/image";
import Link from "next/link";
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
import { copy, getLocaleDirection, localizePath, type Locale } from "@/lib/i18n";
import { getServices } from "@/lib/services";
import { cn } from "@/lib/utils";

const subsidiaryLinks: Record<Locale, Array<{ label: string; href: string }>> = {
  fa: [
    { label: "پرسیا ساینس", href: "/#subsidiaries" },
    { label: "مدیا مد", href: "/#subsidiaries" },
    { label: "پرسیا ادوانس", href: "/#subsidiaries" },
  ],
  en: [
    { label: "Persia Science", href: "/#subsidiaries" },
    { label: "Media Med", href: "/#subsidiaries" },
    { label: "Persia Advance", href: "/#subsidiaries" },
  ],
  ar: [
    { label: "پرسیا ساینس", href: "/#subsidiaries" },
    { label: "مديا مد", href: "/#subsidiaries" },
    { label: "پرسیا أدفانس", href: "/#subsidiaries" },
  ],
};

type FooterProps = {
  locale?: Locale;
};

export default function Footer({ locale = "fa" }: FooterProps) {
  const services = getServices(locale);
  const t = copy[locale].footer;
  const dir = getLocaleDirection(locale);

  return (
    <footer
      dir={dir}
      className={cn(
        "bg-neutral-900 text-neutral-300 pt-20 pb-8",
        locale === "en" && "text-right"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link href={localizePath("/", locale)} aria-label="پرشیامهر">
              <Image
                src="/logo.svg"
                alt="لوگوی پرشیامهر"
                width={457}
                height={160}
                className="mb-6 h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-7 text-neutral-400 mb-8">
              {t.description}
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
              {t.services}
            </h4>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={localizePath(`/services/${l.slug}`, locale)}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft
                      size={13}
                      className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180 ltr:rotate-180"
                    />
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
              {t.subsidiaries}
            </h4>
            <ul className="space-y-3">
              {subsidiaryLinks[locale].map((l) => (
                <li key={l.label}>
                  <Link
                    href={localizePath(l.href, locale)}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft
                      size={13}
                      className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180 ltr:rotate-180"
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">
              {t.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconMapPin
                  size={16}
                  className="text-primary-400 mt-0.5 shrink-0"
                />
                <span className="text-sm text-neutral-400 leading-6">
                  {t.address}
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
            {t.copyright}
          </p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
