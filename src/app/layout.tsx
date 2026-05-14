import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const iranYekan = localFont({
  src: [
    {
      path: "../../public/fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANYekanXFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
  display: "swap",
  fallback: ["Tahoma", "Arial", "sans-serif"],
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "پرشیامهر | هلدینگ تخصصی تجهیزات پزشکی",
  description:
    "مشاوره اجرایی، طراحی ساختار سازمانی و توسعه بازار برای شرکت‌های تجهیزات پزشکی",
  keywords:
    "مشاوره پزشکی، تجهیزات پزشکی، توسعه بازار، هلدینگ پزشکی، پرشیامهر",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={cn("h-full font-sans", iranYekan.variable, inter.variable)}
    >
      <body className="min-h-full antialiased">
        {children}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const storedTheme = document.cookie
                  .split("; ")
                  .find((cookie) => cookie.startsWith("theme="))
                  ?.split("=")[1];
                const legacyTheme = localStorage.getItem("theme");
                if (!storedTheme && (legacyTheme === "dark" || legacyTheme === "light")) {
                  document.cookie = "theme=" + legacyTheme + "; path=/; max-age=31536000; samesite=lax";
                  localStorage.removeItem("theme");
                }
                const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const theme = storedTheme || legacyTheme;
                const shouldUseDark = theme ? theme === "dark" : systemPrefersDark;
                document.documentElement.classList.toggle("dark", shouldUseDark);
              } catch {}
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
