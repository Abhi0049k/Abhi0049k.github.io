import { STACK_ITEMS } from "@/lib/content";

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-paper-dim py-12 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] border-y border-line reveal overflow-hidden"
    >
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-8 sm:mb-12">
          <div className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] text-violet mb-2 sm:mb-3">
            Toolkit
          </div>
          <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] tracking-[-0.02em] leading-[1.05] text-ink break-words mb-2 sm:mb-3">
            What&apos;s actually running under the hood.
          </h2>
          <p className="font-sans italic text-xs xs:text-sm sm:text-[15px] text-ink/60">
            Picked per project, not per trend.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 reveal">
          {STACK_ITEMS.map((item, idx) => {
            let colorStyles =
              "text-violet border-violet/30 hover:bg-violet hover:text-paper hover:border-violet";
            if (idx % 3 === 1) {
              colorStyles =
                "text-coral border-coral/30 hover:bg-coral hover:text-paper hover:border-coral";
            }
            if (idx % 3 === 2) {
              colorStyles =
                "text-accent-amber border-accent-amber/30 hover:bg-accent-amber hover:text-paper hover:border-accent-amber";
            }

            return (
              <span
                key={item}
                className={`font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-paper border-[1.5px] transition-all hover:-translate-y-0.5 max-w-full break-words ${colorStyles}`}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
