import { STACK_ITEMS } from "@/lib/content";

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-paper-dim py-14 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] border-y border-ink/10 reveal overflow-hidden texture-light"
    >
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-[640px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-[2px] bg-lime" />
              <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.08em] text-ink/60">
                Toolkit · runtime
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(1.875rem,3.5vw,2.75rem)] tracking-display leading-[1] text-ink break-words">
              What&apos;s actually running under the hood.
            </h2>
          </div>
          <p className="font-sans italic text-sm sm:text-[15px] text-ink/60 md:max-w-[220px] md:text-right shrink-0 pb-1">
            Picked per project, not per trend.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 reveal">
          {STACK_ITEMS.map((item, idx) => {
            const color = idx % 3;
            let styles =
              "text-violet border-violet/40 hover:bg-violet hover:text-paper hover:border-violet";
            if (color === 1) {
              styles =
                "text-coral border-coral/40 hover:bg-coral hover:text-paper hover:border-coral";
            }
            if (color === 2) {
              styles =
                "text-ink border-ink/30 hover:bg-ink hover:text-lime hover:border-ink";
            }

            return (
              <span
                key={item}
                className={`font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.04em] px-3.5 py-2 sm:px-4 sm:py-2 rounded-[3px] bg-paper border transition-all hover:-translate-y-0.5 max-w-full break-words ${styles}`}
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