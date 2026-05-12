import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "پرسیا مهر | هلدینگ تخصصی تجهیزات پزشکی",
  description:
    "مشاوره اجرایی، طراحی ساختار سازمانی و توسعه بازار برای شرکت‌های تجهیزات پزشکی",
  keywords:
    "مشاوره پزشکی، تجهیزات پزشکی، توسعه بازار، هلدینگ پزشکی، پرسیا مهر",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
