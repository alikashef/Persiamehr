import Image from "next/image";
import Link from "next/link";

type NavbarBrandProps = {
  href: string;
  className?: string;
};

export function NavbarBrand({ href, className = "h-12" }: NavbarBrandProps) {
  return (
    <Link href={href} className="group flex items-center" aria-label="پرشیامهر">
      <Image
        src="/logo.svg"
        alt="لوگوی پرشیامهر"
        width={457}
        height={160}
        priority
        className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </Link>
  );
}
