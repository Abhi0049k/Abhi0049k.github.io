import { FOOTER_CONTENT } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-6 sm:py-8 bg-paper overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-center sm:text-left">
        <div className="font-sans text-xs sm:text-sm text-ink/60 break-words">
          {FOOTER_CONTENT.copyright}
        </div>
        <div className="font-mono font-medium text-[11px] sm:text-xs uppercase tracking-[0.06em] text-ink/60 break-words">
          {FOOTER_CONTENT.tagline}
        </div>
      </div>
    </footer>
  );
}
