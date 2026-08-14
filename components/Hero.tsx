import Link from "next/link";
import Pipeline from "./Pipeline";
import { HERO_CONTENT } from "@/lib/content";

export default function Hero() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 pb-8 sm:pb-12 overflow-hidden texture-light">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5 sm:mb-7">
          <span className="w-2 h-2 rounded-full bg-lime inline-block" />
          <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.06em] text-ink/70">
            {HERO_CONTENT.eyebrow}
          </span>
          <span className="font-mono font-medium text-xs sm:text-[13px] text-ink/35 hidden xs:inline">
            {"//"}
          </span>
          <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.06em] text-ink/35 hidden sm:inline">
            node · 001
          </span>
        </div>

        <h1 className="font-display font-bold text-[clamp(2.5rem,9vw,6rem)] tracking-display leading-[0.98] text-ink max-w-[1080px] mb-5 sm:mb-7 break-words [overflow-wrap:anywhere]">
          {HERO_CONTENT.headlinePrefix}
          <span className="text-coral">{HERO_CONTENT.headlineAccent}</span>
        </h1>

        <p className="font-sans text-base sm:text-lg lg:text-xl leading-relaxed text-ink/75 max-w-[760px] mb-8 sm:mb-10 break-words">
          {HERO_CONTENT.subhead}
        </p>

        <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-6">
          <Link
            href={HERO_CONTENT.primaryCta.href}
            className="w-full xs:w-auto bg-violet text-paper px-5 py-3 sm:px-7 sm:py-3.5 rounded-sm font-display font-bold text-[15px] sm:text-base shadow-hard hover:-translate-y-0.5 hover:shadow-hard-lg hover:bg-ink transition-all inline-flex items-center justify-center text-center min-h-[44px]"
          >
            {HERO_CONTENT.primaryCta.label}
          </Link>
          <a
            href={HERO_CONTENT.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full xs:w-auto bg-transparent text-ink border border-ink/20 px-5 py-3 sm:px-7 sm:py-3.5 rounded-sm font-display font-bold text-[15px] sm:text-base hover:border-ink hover:bg-paper transition-all inline-flex items-center justify-center text-center min-h-[44px]"
          >
            {HERO_CONTENT.secondaryCta.label}
          </a>
        </div>

        <Pipeline />
      </div>
    </section>
  );
}