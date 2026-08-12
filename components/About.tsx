import { ABOUT_CONTENT } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] reveal overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] text-violet mb-4 sm:mb-6">
          {ABOUT_CONTENT.eyebrow}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          <div className="flex flex-col gap-4 sm:gap-5 reveal min-w-0">
            <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] tracking-[-0.02em] leading-[1.05] text-ink mb-1 sm:mb-2 break-words">
              {ABOUT_CONTENT.headline}
            </h2>
            {ABOUT_CONTENT.paragraphs.map((p, idx) => (
              <p key={idx} className="font-sans text-sm sm:text-base leading-relaxed text-ink/85 break-words">
                {p}
              </p>
            ))}
          </div>
          <div className="bg-ink text-paper rounded-2xl xs:rounded-2xl lg:rounded-[20px] p-5 xs:p-6 sm:p-8 lg:p-10 flex flex-col reveal max-w-full overflow-hidden">
            <h3 className="font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] text-paper mb-1 break-words">
              {ABOUT_CONTENT.cardRole}
            </h3>
            <div className="font-mono font-semibold text-xs sm:text-sm uppercase tracking-[0.06em] text-lime mb-5 sm:mb-7 break-words">
              {ABOUT_CONTENT.cardOrg}
            </div>
            <ul className="list-none flex flex-col gap-3.5 sm:gap-4">
              {ABOUT_CONTENT.bullets.map((bullet, idx) => (
                <li key={idx} className="font-sans text-sm sm:text-[15px] leading-relaxed text-paper/90 flex items-start gap-2.5 break-words">
                  <span className="text-coral font-bold shrink-0">—</span>
                  <span className="min-w-0">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
