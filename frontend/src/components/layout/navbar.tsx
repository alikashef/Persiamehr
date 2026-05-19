"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2 } from "@tabler/icons-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { apiClient } from "@/lib/api";
import { copy } from "@/constants/copy";
import { cn } from "@/lib/utils";
import {
  getDepartmentCategories,
  getSubsidiaries,
  mapApiDepartmentCategories,
  mapApiSubsidiaries,
  type DepartmentCategoryItem,
  type SubsidiaryItem,
} from "@/features/subsidiaries/types";
import { ConsultationDialog } from "@/components/layout/navbar/consultation-dialog";
import { DesktopNav } from "@/components/layout/navbar/desktop-nav";
import { NavbarBrand } from "@/components/layout/navbar/navbar-brand";
import type { ConsultationFormState, SubsidiaryGroup } from "@/components/layout/navbar/types";

const emptyConsultationForm: ConsultationFormState = {
  name: "",
  mobile: "",
  subject: "",
  message: "",
};

const productLinks = [
  {
    label: "ترینر باکس لاپاروسکوپی",
    description: "ابزار آموزشی برای تمرین مهارت‌های لاپاروسکوپی",
    href: "/products/laparoscopy-trainer-box",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [consultSubmitting, setConsultSubmitting] = useState(false);
  const [consultError, setConsultError] = useState("");
  const [consultForm, setConsultForm] = useState(emptyConsultationForm);
  const [subsidiaries, setSubsidiaries] = useState<SubsidiaryItem[]>(() =>
    getSubsidiaries()
  );
  const [departmentCategories, setDepartmentCategories] = useState<
    DepartmentCategoryItem[]
  >(() => getDepartmentCategories());

  const pathname = usePathname();
  const isHome = pathname === "/";
  const solidNav = scrolled || !isHome;
  const t = copy;

  const navLinks = [{ label: t.nav.home, href: "/" }];
  const secondaryNavLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
  ];
  const subsidiaryGroups: SubsidiaryGroup[] = departmentCategories.map((category) => ({
    ...category,
    items: subsidiaries.filter((item) => item.department === category.slug),
  }));

  const topLevelNavLinkClass = cn(
    "relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
    solidNav
      ? "text-neutral-700 hover:!bg-primary-50 hover:!text-primary-600 dark:text-neutral-200 dark:hover:!bg-white/10 dark:hover:!text-white"
      : "text-white/90 hover:!bg-white/10 hover:!text-white"
  );
  const topLevelNavTriggerClass = cn(
    "h-9 rounded-lg px-4 text-sm font-medium",
    solidNav
      ? "text-neutral-700 hover:!bg-primary-50 hover:!text-primary-600 data-[state=open]:!bg-primary-50 data-[state=open]:!text-primary-600 aria-expanded:!bg-primary-50 aria-expanded:!text-primary-600 dark:text-neutral-200 dark:hover:!bg-white/10 dark:hover:!text-white dark:data-[state=open]:!bg-white/10 dark:data-[state=open]:!text-white dark:aria-expanded:!bg-white/10 dark:aria-expanded:!text-white"
      : "bg-transparent text-white/90 hover:!bg-white/10 hover:!text-white data-[state=open]:!bg-white/10 data-[state=open]:!text-white aria-expanded:!bg-white/10 aria-expanded:!text-white"
  );
  const dropdownLinkClass =
    "flex w-full rounded-xl px-4 py-3 transition-colors hover:!bg-primary-50 dark:hover:!bg-white/10";
  const mobileNavLinkClass =
    "block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-all duration-150 hover:bg-primary-50 hover:text-primary-600 dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let mounted = true;

    Promise.all([apiClient.getDepartmentCategories(), apiClient.getSubsidiaries()])
      .then(([categories, records]) => {
        if (mounted) {
          setDepartmentCategories(mapApiDepartmentCategories(categories));
          setSubsidiaries(mapApiSubsidiaries(records));
        }
      })
      .catch(() => {
        if (mounted) {
          setDepartmentCategories(getDepartmentCategories());
          setSubsidiaries(getSubsidiaries());
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleConsultSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setConsultSubmitting(true);
    setConsultError("");

    try {
      await apiClient.sendServiceRequest({
        full_name: consultForm.name,
        phone: consultForm.mobile,
        email: "",
        service_type: consultForm.subject,
        description: consultForm.message || consultForm.subject,
      });
      setConsultSubmitted(true);
    } catch {
      setConsultError(t.consultation.error);
    } finally {
      setConsultSubmitting(false);
    }
  };

  const openConsultModal = () => {
    setMenuOpen(false);
    setConsultSubmitted(false);
    setConsultError("");
    setConsultOpen(true);
  };

  return (
    <>
      <header
        dir="rtl"
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          solidNav
            ? "border-b border-neutral-100 bg-white/95 shadow-[0_1px_20px_rgb(0,0,0,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-neutral-950/90"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <div className="flex h-20 items-center justify-between">
            <NavbarBrand href="/" />

            <DesktopNav
              departmentsLabel="دپارتمان‌ها"
              dir="rtl"
              dropdownLinkClass={dropdownLinkClass}
              getSubsidiaryLabel={(item) => item.name}
              navLinks={navLinks}
              productLinks={productLinks}
              productsEyebrow={t.nav.productsEyebrow}
              productsLabel={t.nav.products}
              secondaryNavLinks={secondaryNavLinks}
              subsidiaryGroups={subsidiaryGroups}
              topLevelNavLinkClass={topLevelNavLinkClass}
              topLevelNavTriggerClass={topLevelNavTriggerClass}
            />

            <div className="hidden items-center gap-2 lg:flex">
              <AnimatedThemeToggler
                className={cn(
                  solidNav
                    ? "border border-neutral-100 bg-neutral-50/70 text-neutral-600 hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-neutral-200 dark:hover:bg-white/10"
                    : "border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15 hover:text-white"
                )}
              />
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

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className={cn(
                    "rounded-xl lg:hidden",
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
                    <NavbarBrand href="/" />
                  </SheetClose>
                </SheetHeader>

                <nav className="flex-1 space-y-1 overflow-y-auto px-5 py-5">
                  {[...navLinks, ...secondaryNavLinks].map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link href={link.href} className={mobileNavLinkClass}>
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-3">
                    <div className="px-4 pb-2 text-xs font-bold text-neutral-400">
                      دپارتمان‌ها
                    </div>
                    {subsidiaryGroups.map((group) => (
                      <div key={group.slug} className="pb-2">
                        <div className="px-4 py-2 text-xs font-bold text-neutral-500 dark:text-neutral-400">
                          {group.title}
                        </div>
                        {group.items.map((item) => (
                          <SheetClose asChild key={item.slug}>
                            <Link
                              href={`/subsidiaries/${item.slug}`}
                              className={mobileNavLinkClass}
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <div className="px-4 pb-2 text-xs font-bold text-neutral-400">
                      {t.nav.products}
                    </div>
                    {productLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={link.href} className={mobileNavLinkClass}>
                          <span className="block">{link.label}</span>
                          <span className="mt-1 block text-xs font-medium leading-5 text-neutral-400 dark:text-neutral-500">
                            {link.description}
                          </span>
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

      <ConsultationDialog
        error={consultError}
        form={consultForm}
        onFormChange={setConsultForm}
        onOpenChange={setConsultOpen}
        onSubmit={handleConsultSubmit}
        open={consultOpen}
        submitted={consultSubmitted}
        submitting={consultSubmitting}
        t={t}
      />
    </>
  );
}
