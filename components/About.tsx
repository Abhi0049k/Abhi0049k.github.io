import { ABOUT_CONTENT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="pt-14 sm:pt-24 lg:pt-28 pb-6 sm:pb-12 scroll-mt-16 sm:scroll-mt-[72px] reveal overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="w-2 h-2 rounded-[2px] bg-coral" />
              <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.08em] text-ink/60">
                {ABOUT_CONTENT.eyebrow} · node_007
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[clamp(2.25rem,4.5vw,3.5rem)] tracking-display leading-[0.98] text-ink break-words">
              {ABOUT_CONTENT.headline}
            </h2>
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-[15px] sm:text-base leading-relaxed text-ink/80 max-w-[560px] break-words">
                {p}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="bg-ink text-paper rounded-[4px] p-6 sm:p-8 border-l-4 border-lime shadow-hard-paper max-w-full overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold text-xl sm:text-2xl tracking-display text-paper break-words">
                  {ABOUT_CONTENT.cardRole}
                </h3>
                <span className="w-2 h-2 rounded-full bg-lime shrink-0" title="active" />
              </div>
              <div className="font-mono font-medium text-xs sm:text-sm uppercase tracking-[0.08em] text-lime mb-6 break-words">
                {ABOUT_CONTENT.cardOrg}
              </div>
              <ul className="list-none flex flex-col gap-4">
                {ABOUT_CONTENT.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono font-semibold text-[11px] text-coral pt-0.5 shrink-0 select-none">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm sm:text-[15px] leading-relaxed text-paper/90 min-w-0 break-words">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}