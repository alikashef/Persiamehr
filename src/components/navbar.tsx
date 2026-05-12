"use client";

import { useState, useEffect } from "react";
import {
  IconMenu2,
  IconX,
  IconChevronDown,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "خدمات", href: "#services" },
  { label: "زیرمجموعه‌ها", href: "#subsidiaries" },
  { label: "حوزه‌های پزشکی", href: "#domains" },
  { label: "رویدادها", href: "#events" },
  { label: "درباره ما", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgb(0,0,0,0.06)] border-b border-neutral-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-xl bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-bold text-base leading-none">پم</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-primary-500 opacity-20 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-neutral-900 tracking-tight">
                پرسیا مهر
              </span>
              <span className="text-[11px] text-neutral-400 font-medium mt-0.5 tracking-wide">
                Persia Mehr Holdings
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-neutral-600 hover:text-primary-500 rounded-lg hover:bg-primary-50 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-1 right-4 left-4 h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-right rounded-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-primary-600 border border-primary-200 rounded-xl hover:border-primary-400 hover:bg-primary-50 transition-all duration-200"
            >
              تماس با ما
            </a>
            <a
              href="#services"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary-500 rounded-xl hover:bg-primary-600 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/35 transition-all duration-200"
            >
              خدمات ما
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="منو"
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-neutral-100",
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-neutral-700 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="#contact"
              className="block text-center px-5 py-3 text-sm font-semibold text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50"
            >
              تماس با ما
            </a>
            <a
              href="#services"
              className="block text-center px-5 py-3 text-sm font-semibold text-white bg-primary-500 rounded-xl hover:bg-primary-600"
            >
              خدمات ما
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
