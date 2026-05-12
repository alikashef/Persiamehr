"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { IconCheck, IconLanguage, IconMenu2, IconSend } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import {
  copy,
  getLocaleDirection,
  getLocaleFromPathname,
  languageLabels,
  localizePath,
  stripLocale,
  type Locale,
} from "@/lib/i18n";
import { getServices } from "@/lib/services";

const languageFlags: Record<Locale, string> = {
  fa: "🇮🇷",
  en: "🇬🇧",
  ar: "🇸🇦",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultForm, setConsultForm] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dir = getLocaleDirection(locale);
  const t = copy[locale];
  const services = getServices(locale);
  const unlocalizedPath = stripLocale(pathname);
  const isHome = unlocalizedPath === "/";
  const solidNav = scrolled || !isHome;
  const navLinks = [{ label: t.nav.home, href: localizePath("/", locale) }];
  const secondaryNavLinks = [
    { label: t.nav.about, href: localizePath("/about", locale) },
    { label: t.nav.contact, href: localizePath("/contact", locale) },
  ];
  const educationProductLinks = [
    {
      label:
        locale === "en"
          ? "Laparoscopy Trainer Box"
          : locale === "ar"
            ? "صندوق تدريب تنظير البطن"
            : "ترینر باکس لاپاروسکوپی",
      description:
        locale === "en"
          ? "Training tool for laparoscopic skill practice"
          : locale === "ar"
            ? "أداة تعليمية لتدريب مهارات تنظير البطن"
            : "ابزار آموزشی برای تمرین مهارت‌های لاپاروسکوپی",
      href: localizePath("/products/laparoscopy-trainer-box", locale),
    },
  ];
  const languageLinks: Array<{ locale: Locale; href: string }> = [
    { locale: "fa", href: localizePath(unlocalizedPath, "fa") },
    { locale: "en", href: localizePath(unlocalizedPath, "en") },
    { locale: "ar", href: localizePath(unlocalizedPath, "ar") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleConsultSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConsultSubmitted(true);
  };

  const openConsultModal = () => {
    setMenuOpen(false);
    setConsultSubmitted(false);
    setConsultOpen(true);
  };

  return (
    <>
      <header
        dir={dir}
    
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          locale === "en" && "",
          solidNav
            ? "border-b border-neutral-100 bg-white/95 shadow-[0_1px_20px_rgb(0,0,0,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/90"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href={localizePath("/", locale)} className="group flex items-center" aria-label="پرشیامهر">
              <Image
                src="/logo.svg"
                alt="لوگوی پرشیامهر"
                width={457}
                height={160}
                priority
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop nav */}
            <NavigationMenu
              dir={locale === "en" ? "ltr" : "rtl"}
              className="hidden max-w-none flex-1 justify-center lg:flex"
            >
              <NavigationMenuList className="w-auto flex-row gap-1.5 rounded-2xl border border-white/0 px-1" dir={locale === "en" ? "ltr" : "rtl"}>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                          solidNav
                            ? "text-neutral-600 hover:bg-primary-50 hover:text-primary-500"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-9 rounded-lg px-4 text-sm font-medium",
                      solidNav
                        ? "text-neutral-600 hover:bg-primary-50 hover:text-primary-500 data-open:bg-primary-50 data-open:text-primary-500"
                        : "bg-transparent text-white/90 hover:bg-white/10 hover:text-white data-open:bg-white/10 data-open:text-white"
                    )}
                  >
                    {t.nav.services}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 " dir={dir}>
                    <div className="w-80 border-b border-neutral-100 px-3 py-2 ">
                      <div className="text-xs font-bold text-primary-500">
                        {t.nav.servicesEyebrow}
                      </div>
                    </div>
                    <ul className="grid w-80 gap-1 pt-2">
                      {services.map((item) => {
                        const Icon = item.icon;

                        return (
                          <li key={item.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={localizePath(`/services/${item.slug}`, locale)}
                                className="flex w-full gap-3 rounded-xl px-4 py-3  hover:bg-primary-50"
                              >
                                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                                  <Icon size={18} />
                                </span>
                                <span className="min-w-0">
                                  <span className="block w-full  text-sm font-bold text-neutral-800">
                                    {item.title}
                                  </span>
                                  <span className="mt-1 block w-full  text-xs leading-6 text-neutral-500">
                                    {item.summary}
                                  </span>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "h-9 rounded-lg px-4 text-sm font-medium",
                      solidNav
                        ? "text-neutral-600 hover:bg-primary-50 hover:text-primary-500 data-open:bg-primary-50 data-open:text-primary-500"
                        : "bg-transparent text-white/90 hover:bg-white/10 hover:text-white data-open:bg-white/10 data-open:text-white"
                    )}
                  >
                    {t.nav.products}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-2 " dir={dir}>
                    <div className="w-96 border-b border-neutral-100 px-3 py-2 ">
                      <div className="text-xs font-bold text-primary-500">
                        {t.nav.productsEyebrow}
                      </div>
                    </div>
                    <ul className="grid w-96 gap-1 pt-2">
                      {educationProductLinks.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex w-full flex-col items-stretch rounded-xl px-4 py-3  hover:bg-primary-50"
                            >
                              <span className="block w-full  text-sm font-bold text-neutral-800">
                                {item.label}
                              </span>
                              <span className="mt-1 block w-full  text-xs leading-6 text-neutral-500">
                                {item.description}
                              </span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {secondaryNavLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                          solidNav
                            ? "text-neutral-600 hover:bg-primary-50 hover:text-primary-500"
                            : "text-white/90 hover:bg-white/10 hover:text-white"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}

              </NavigationMenuList>
            </NavigationMenu>

            {/* Consultation */}
            <div className="hidden items-center gap-2 lg:flex">
              <AnimatedThemeToggler
                className={cn(
                  solidNav
                    ? "border border-neutral-100 bg-neutral-50/70 text-neutral-600 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
                    : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15 hover:text-white"
                )}
              />
              <DropdownMenu dir={dir}>
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-lg"
                    className={cn(
                      "grid size-10 place-items-center rounded-xl border p-0 leading-none",
                      solidNav
                        ? "border-neutral-100 bg-neutral-50/70 text-neutral-700 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-100 dark:hover:bg-white/10"
                        : "border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15 hover:text-white"
                    )}
                    aria-label={t.nav.language}
                    title={t.nav.language}
                  >
                    <IconLanguage size={20} aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 rounded-xl border-neutral-100 bg-white p-1.5  dark:border-white/10 dark:bg-neutral-950"
                >
                  <DropdownMenuLabel className="">
                    {t.nav.language}
                  </DropdownMenuLabel>
                  {languageLinks.map((item) => (
                    <DropdownMenuItem
                      key={item.locale}
                      asChild
                      className={cn(
                        "cursor-pointer justify-between rounded-lg px-3 py-2.5 font-semibold",
                        item.locale === locale
                          ? "bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-200"
                          : "text-neutral-700 dark:text-neutral-200"
                      )}
                    >
                      <Link
                        href={item.href}
                        dir="auto"
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span>{languageLabels[item.locale]}</span>
                        <span className="text-base" aria-hidden="true">
                          {languageFlags[item.locale]}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                type="button"
                size="lg"
                onClick={openConsultModal}
                className={cn(
                  "h-11 rounded-xl px-5 font-semibold shadow-lg",
                  solidNav
                    ? "bg-primary-500 text-white shadow-primary-500/25 hover:bg-primary-600"
                    : "border border-white/35 bg-white/10 text-white backdrop-blur hover:border-white/70 hover:bg-white/15"
                )}
              >
                {t.nav.consult}
              </Button>
            </div>

            {/* Mobile hamburger */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className={cn(
                  "lg:hidden rounded-xl",
                  solidNav
                    ? "text-neutral-600 hover:bg-neutral-100"
                    : "text-white hover:bg-white/10 hover:text-white"
                )}
                aria-label="باز کردن منو"
              >
                <IconMenu2 size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(86vw,360px)] border-l border-neutral-100 bg-white p-0 dark:border-white/10 dark:bg-neutral-950"
            >
              <SheetHeader className="flex h-20 flex-row items-center justify-between border-b border-neutral-100 px-5 py-0">
                <SheetTitle className="sr-only">منوی اصلی</SheetTitle>
                <SheetClose asChild>
                  <Link href={localizePath("/", locale)} className="flex items-center" aria-label="پرشیامهر">
                    <Image
                      src="/logo.svg"
                      alt="لوگوی پرشیامهر"
                      width={457}
                      height={160}
                      className="h-11 w-auto object-contain"
                    />
                  </Link>
                </SheetClose>
              </SheetHeader>

              <nav className="flex-1 space-y-1 overflow-y-auto px-5 py-5">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-500"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className="pt-3">
                  <div className="px-4 pb-2 text-xs font-bold text-neutral-400">
                    {t.nav.services}
                  </div>
                  {services.map((link) => (
                    <SheetClose asChild key={link.slug}>
                      <Link
                        href={localizePath(`/services/${link.slug}`, locale)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-500"
                      >
                        <span className="block">{link.title}</span>
                        <span className="mt-1 block text-xs font-medium leading-5 text-neutral-400">
                          {link.summary}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="pt-3">
                  <div className="px-4 pb-2 text-xs font-bold text-neutral-400">
                    {t.nav.products}
                  </div>
                  {educationProductLinks.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-500"
                      >
                        <span className="block">{link.label}</span>
                        <span className="mt-1 block text-xs font-medium leading-5 text-neutral-400">
                          {link.description}
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="pt-3">
                  <div className="px-4 pb-2 text-xs font-bold text-neutral-400">
                    {t.nav.language}
                  </div>
                  {languageLinks.map((link) => (
                    <SheetClose asChild key={link.locale}>
                      <Link
                        href={link.href}
                        dir={getLocaleDirection(link.locale)}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-500"
                      >
                        {languageLabels[link.locale]}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="pt-3">
                  {secondaryNavLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-500"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>

              <SheetFooter className="border-t border-neutral-100 p-5 dark:border-white/10">
                <div className="mb-3 flex items-center justify-between rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                  <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-100">
                    {t.nav.displayMode}
                  </span>
                  <AnimatedThemeToggler className="text-neutral-700 hover:bg-white dark:text-neutral-100 dark:hover:bg-white/10" />
                </div>
                <Button
                  type="button"
                  size="lg"
                  onClick={openConsultModal}
                  className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
                >
                  {t.nav.consult}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

      <Dialog open={consultOpen} onOpenChange={setConsultOpen}>
        <DialogContent className="max-w-xl rounded-2xl bg-white p-0 dark:bg-neutral-950">
          <div className="p-6 sm:p-7">
            <DialogHeader className="mb-6 ">
              <DialogTitle className="text-xl font-black text-neutral-900">
                {t.consultation.title}
              </DialogTitle>
              <DialogDescription className="leading-7 text-neutral-500">
                {t.consultation.description}
              </DialogDescription>
            </DialogHeader>

            {consultSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                  <IconCheck size={28} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900">
                  {t.consultation.successTitle}
                </h3>
                <p className="mx-auto max-w-sm text-sm leading-7 text-neutral-500">
                  {t.consultation.successBody}
                </p>
              </div>
            ) : (
              <form onSubmit={handleConsultSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                      {t.consultation.name}
                    </Label>
                    <Input
                      required
                      value={consultForm.name}
                      onChange={(event) =>
                        setConsultForm({ ...consultForm, name: event.target.value })
                      }
                      placeholder={t.consultation.namePlaceholder}
                      className="h-12 rounded-xl border-neutral-200 bg-neutral-50"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                      {t.consultation.phone}
                    </Label>
                    <Input
                      required
                      dir="ltr"
                      inputMode="tel"
                      value={consultForm.mobile}
                      onChange={(event) =>
                        setConsultForm({ ...consultForm, mobile: event.target.value })
                      }
                      placeholder="0912 345 6789"
                      className="h-12 rounded-xl border-neutral-200 bg-neutral-50 text-left"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    {t.consultation.subject}
                  </Label>
                  <Input
                    required
                    value={consultForm.subject}
                    onChange={(event) =>
                      setConsultForm({ ...consultForm, subject: event.target.value })
                    }
                    placeholder={t.consultation.subjectPlaceholder}
                    className="h-12 rounded-xl border-neutral-200 bg-neutral-50"
                  />
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold text-neutral-700">
                    {t.consultation.message}
                  </Label>
                  <Textarea
                    value={consultForm.message}
                    onChange={(event) =>
                      setConsultForm({ ...consultForm, message: event.target.value })
                    }
                    placeholder={t.consultation.messagePlaceholder}
                    className="min-h-28 resize-none rounded-xl border-neutral-200 bg-neutral-50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl bg-primary-500 font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600"
                >
                  <IconSend size={17} />
                  {t.consultation.submit}
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
