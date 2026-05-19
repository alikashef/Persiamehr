import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <main className={cn("min-h-screen", className)}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
