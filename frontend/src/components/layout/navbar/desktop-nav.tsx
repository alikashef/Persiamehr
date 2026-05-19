import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import type {
  NavLink,
  ProductLink,
  SubsidiaryGroup,
} from "./types";

type DesktopNavProps = {
  departmentsLabel: string;
  dir: "ltr" | "rtl";
  dropdownLinkClass: string;
  getSubsidiaryLabel: (item: SubsidiaryGroup["items"][number]) => string;
  subsidiaryGroups: SubsidiaryGroup[];
  navLinks: NavLink[];
  productLinks: ProductLink[];
  productsEyebrow: string;
  productsLabel: string;
  secondaryNavLinks: NavLink[];
  topLevelNavLinkClass: string;
  topLevelNavTriggerClass: string;
};

export function DesktopNav({
  departmentsLabel,
  dir,
  dropdownLinkClass,
  getSubsidiaryLabel,
  subsidiaryGroups,
  navLinks,
  productLinks,
  productsEyebrow,
  productsLabel,
  secondaryNavLinks,
  topLevelNavLinkClass,
  topLevelNavTriggerClass,
}: DesktopNavProps) {
  const gridColumns =
    subsidiaryGroups.length <= 1
      ? "grid-cols-1"
      : subsidiaryGroups.length === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  return (
    <NavigationMenu
      viewport={false}
      dir="rtl"
      className="hidden max-w-none flex-1 justify-center lg:flex"
    >
      <NavigationMenuList
        className="w-auto flex-row gap-1.5 rounded-2xl border border-white/0 px-1"
        dir="rtl"
      >
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link href={link.href} className={topLevelNavLinkClass}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <NavigationMenuTrigger className={topLevelNavTriggerClass}>
            {departmentsLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="min-w-[44rem] max-w-[52rem] p-3 rtl:right-0 rtl:left-auto ltr:left-0"
            dir={dir}
          >
            <div className="w-full border-b border-neutral-100 px-3 py-2 dark:border-white/10">
              <div className="text-xs font-bold text-primary-500">
                {departmentsLabel}
              </div>
            </div>
            <div className={cn("grid w-full gap-3 pt-2", gridColumns)}>
              {subsidiaryGroups.map((group) => (
                <div key={group.slug} className="space-y-1.5">
                  <div className="px-2.5 text-xs font-bold text-neutral-500 dark:text-neutral-300">
                    {group.title}
                  </div>
                  <ul className="grid max-h-80 gap-0.5 overflow-y-auto pr-1">
                    {group.items.map((item, index) => (
                      <li key={`${group.slug}-${item.slug}-${index}`}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/subsidiaries/${item.slug}`}
                            className={cn(dropdownLinkClass, "px-2.5 py-2")}
                          >
                            <span className="block w-full text-sm font-bold text-neutral-800 dark:text-neutral-100">
                              {getSubsidiaryLabel(item)}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={topLevelNavTriggerClass}>
            {productsLabel}
          </NavigationMenuTrigger>
          <NavigationMenuContent
            className="p-2 rtl:right-0 rtl:left-auto ltr:left-0"
            dir={dir}
          >
            <div className="w-96 border-b border-neutral-100 px-3 py-2 dark:border-white/10">
              <div className="text-xs font-bold text-primary-500">
                {productsEyebrow}
              </div>
            </div>
            <ul className="grid w-96 gap-1 pt-2">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(dropdownLinkClass, "flex-col items-stretch")}
                    >
                      <span className="block w-full text-sm font-bold text-neutral-800 dark:text-neutral-100">
                        {item.label}
                      </span>
                      <span className="mt-1 block w-full text-xs leading-6 text-neutral-500 dark:text-neutral-400">
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
              <Link href={link.href} className={topLevelNavLinkClass}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
