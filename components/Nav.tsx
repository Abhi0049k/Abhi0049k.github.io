import Link from "next/link";
import { NAV_LINKS } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 h-16 sm:h-[72px] bg-paper/85 backdrop-blur-md border-b border-line flex items-center pt-[env(safe-area-inset-top,0px)]">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        <Link
          href="#"
          className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-ink shrink-0"
        >
          Mangalam<span className="text-violet">.</span>
        </Link>
        <div className="flex items-center gap-6 sm:gap-8 shrink-0">
          <nav className="hidden sm:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono font-semibold text-[13px] uppercase tracking-[0.06em] text-ink hover:text-violet transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] bg-ink text-paper px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full hover:bg-violet hover:text-paper transition-colors inline-flex items-center justify-center min-h-[44px] whitespace-nowrap"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
