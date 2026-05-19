import Image from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { apiClient } from "@/lib/api";
import { copy } from "@/constants/copy";
import { getServices, mapApiServices } from "@/features/services/types";
import { mapApiSubsidiaries } from "@/features/subsidiaries/types";

async function getDisplaySettings() {
  const fallback = copy.footer;

  try {
    const settings = await apiClient.getSettings();

    return {
      description: settings.footer_about || fallback.description,
      address: settings.address || fallback.address,
      phone: settings.phone || "۰۲۱-۸۸۰۰۱۲۳۴",
      email: settings.email || "info@persiamehr.com",
      instagram: settings.instagram || "#",
      telegram: settings.telegram || "#",
      linkedin: settings.linkedin || "#",
      whatsapp: settings.whatsapp
        ? `https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`
        : "#",
    };
  } catch {
    return {
      description: fallback.description,
      address: fallback.address,
      phone: "۰۲۱-۸۸۰۰۱۲۳۴",
      email: "info@persiamehr.com",
      instagram: "#",
      telegram: "#",
      linkedin: "#",
      whatsapp: "#",
    };
  }
}

async function getDisplayServices() {
  try {
    return mapApiServices(await apiClient.getServices());
  } catch {
    return getServices();
  }
}

async function getDisplaySubsidiaries() {
  try {
    return mapApiSubsidiaries(await apiClient.getSubsidiaries());
  } catch {
    return [];
  }
}

export default async function Footer() {
  const [services, settings, subsidiaries] = await Promise.all([
    getDisplayServices(),
    getDisplaySettings(),
    getDisplaySubsidiaries(),
  ]);
  const t = copy.footer;

  return (
    <footer dir="rtl" className="bg-neutral-900 pb-8 pt-20 text-neutral-300">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="پرشیامهر">
              <Image
                src="/logo.svg"
                alt="لوگوی پرشیامهر"
                width={457}
                height={160}
                className="mb-6 h-14 w-auto object-contain"
              />
            </Link>
            <p className="mb-8 text-sm leading-7 text-neutral-400">
              {settings.description}
            </p>
            <div className="flex gap-3">
              {[
                { Icon: IconBrandLinkedin, label: "LinkedIn", href: settings.linkedin },
                { Icon: IconBrandInstagram, label: "Instagram", href: settings.instagram },
                { Icon: IconBrandTelegram, label: "Telegram", href: settings.telegram },
                { Icon: IconBrandWhatsapp, label: "WhatsApp", href: settings.whatsapp },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-all duration-200 hover:bg-primary-500 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wide text-white">
              {t.services}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-150 hover:text-primary-300"
                  >
                    <IconArrowLeft
                      size={13}
                      className="rotate-180 text-neutral-600 transition-colors group-hover:text-primary-400"
                    />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wide text-white">
              {t.subsidiaries}
            </h4>
            <ul className="space-y-3">
              {subsidiaries.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/subsidiaries/${item.slug}`}
                    className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-150 hover:text-primary-300"
                  >
                    <IconArrowLeft
                      size={13}
                      className="rotate-180 text-neutral-600 transition-colors group-hover:text-primary-400"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wide text-white">
              {t.contact}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconMapPin size={16} className="mt-0.5 shrink-0 text-primary-400" />
                <span className="text-sm leading-6 text-neutral-400">
                  {settings.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={16} className="shrink-0 text-primary-400" />
                <a
                  href={`tel:${settings.phone}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-primary-300"
                  dir="ltr"
                >
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={16} className="shrink-0 text-primary-400" />
                <a
                  href={`mailto:${settings.email}`}
                  className="text-sm text-neutral-400 transition-colors hover:text-primary-300"
                  dir="ltr"
                >
                  {settings.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">{t.copyright}</p>
          <div className="flex items-center gap-6 text-xs text-neutral-500">
            <a href="#" className="transition-colors hover:text-neutral-300">
              {t.privacy}
            </a>
            <a href="#" className="transition-colors hover:text-neutral-300">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
