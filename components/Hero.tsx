import Link from "next/link";
import Pipeline from "./Pipeline";
import { HERO_CONTENT } from "@/lib/content";

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] text-violet inline-flex items-center gap-2.5 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-coral inline-block shrink-0" />
          {HERO_CONTENT.eyebrow}
        </div>
        <h1 className="font-display font-bold text-3xl xs:text-[32px] sm:text-5xl md:text-6xl lg:text-[clamp(38px,6.4vw,82px)] tracking-[-0.02em] leading-[1.05] text-ink max-w-[980px] mb-4 sm:mb-6 break-words [overflow-wrap:anywhere]">
          {HERO_CONTENT.headlinePrefix}
          <span className="text-violet">{HERO_CONTENT.headlineAccent}</span>
        </h1>
        <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-ink/80 max-w-[760px] mb-8 sm:mb-10 break-words">
          {HERO_CONTENT.subhead}
        </p>
        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-6">
          <Link
            href={HERO_CONTENT.primaryCta.href}
            className="w-full xs:w-auto bg-violet text-paper px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-display font-bold text-[15px] sm:text-base shadow-hard hover:-translate-y-0.5 hover:shadow-hard-lg transition-all inline-flex items-center justify-center text-center min-h-[44px]"
          >
            {HERO_CONTENT.primaryCta.label}
          </Link>
          <a
            href={HERO_CONTENT.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto bg-transparent text-ink border border-line px-5 py-3 sm:px-7 sm:py-3.5 rounded-full font-display font-bold text-[15px] sm:text-base hover:border-ink hover:bg-paper-dim transition-all inline-flex items-center justify-center text-center min-h-[44px]"
          >
            {HERO_CONTENT.secondaryCta.label}
          </a>
        </div>
        <Pipeline />
      </div>
    </section>
  );
}
