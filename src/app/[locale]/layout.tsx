import { isLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  const useInter = isLocale(locale) && locale === "en";

  return (
    <div lang={locale} className={cn(useInter && "font-inter-locale")}>
      {children}
    </div>
  );
}
