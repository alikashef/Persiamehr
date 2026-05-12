import Image from "next/image";
import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandTwitter,
  IconBrandYoutube,
  IconPhone,
  IconMail,
  IconMapPin,
  IconArrowLeft,
} from "@tabler/icons-react";
import { copy, getLocaleDirection, localizePath, type Locale } from "@/lib/i18n";
import { apiClient, type ApiService, type ApiSubsidiary, type SiteSettings } from "@/lib/api";
import { cn } from "@/lib/utils";

type FooterProps = {
  locale?: Locale;
};

export default async function Footer({ locale = "fa" }: FooterProps) {
  const [services, subsidiaries, settings] = await Promise.all([
    apiClient.getServices(locale).catch((): ApiService[] => []),
    apiClient.getSubsidiaries(locale).catch((): ApiSubsidiary[] => []),
    apiClient.getSettings().catch((): SiteSettings => ({
      address: "", phone: "", email: "", footer_about: "",
      instagram: "", telegram: "", linkedin: "", twitter: "", youtube: "", whatsapp: "",
    })),
  ]);

  const t = copy[locale].footer;
  const dir = getLocaleDirection(locale);

  const socialLinks = [
    { Icon: IconBrandLinkedin, label: "LinkedIn", href: settings.linkedin },
    { Icon: IconBrandInstagram, label: "Instagram", href: settings.instagram },
    { Icon: IconBrandTelegram, label: "Telegram", href: settings.telegram },
    { Icon: IconBrandWhatsapp, label: "WhatsApp", href: settings.whatsapp ? `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}` : "" },
    ...(settings.twitter ? [{ Icon: IconBrandTwitter, label: "Twitter", href: settings.twitter }] : []),
    ...(settings.youtube ? [{ Icon: IconBrandYoutube, label: "YouTube", href: settings.youtube }] : []),
  ].filter((s) => s.href);

  return (
    <footer
      dir={dir}
      className={cn("bg-neutral-900 text-neutral-300 pt-20 pb-8", locale === "en" && "text-right")}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
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
              {settings.footer_about || t.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">{t.services}</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={localizePath(`/services/${s.slug}`, locale)}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft size={13} className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180 ltr:rotate-180" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">{t.subsidiaries}</h4>
            <ul className="space-y-3">
              {subsidiaries.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={localizePath("/#subsidiaries", locale)}
                    className="text-sm text-neutral-400 hover:text-primary-300 flex items-center gap-2 group transition-colors duration-150"
                  >
                    <IconArrowLeft size={13} className="text-neutral-600 group-hover:text-primary-400 transition-colors rtl:rotate-180 ltr:rotate-180" />
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 tracking-wide">{t.contact}</h4>
            <ul className="space-y-4">
              {settings.address && (
                <li className="flex items-start gap-3">
                  <IconMapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-neutral-400 leading-6">{settings.address}</span>
                </li>
              )}
              {settings.phone && (
                <li className="flex items-center gap-3">
                  <IconPhone size={16} className="text-primary-400 shrink-0" />
                  <a href={`tel:${settings.phone}`} className="text-sm text-neutral-400 hover:text-primary-300 transition-colors" dir="ltr">
                    {settings.phone}
                  </a>
                </li>
              )}
              {settings.email && (
                <li className="flex items-center gap-3">
                  <IconMail size={16} className="text-primary-400 shrink-0" />
                  <a href={`mailto:${settings.email}`} className="text-sm text-neutral-400 hover:text-primary-300 transition-colors" dir="ltr">
                    {settings.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">{t.copyright}</p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="hover:text-neutral-300 transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
