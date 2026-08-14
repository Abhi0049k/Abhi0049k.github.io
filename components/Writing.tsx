import WritingCard from "./WritingCard";
import { FEATURED_POSTS } from "@/lib/content";

const colorCycle: Array<"violet" | "coral" | "green" | "amber"> = [
  "coral",
  "violet",
  "amber",
];

export default function Writing() {
  return (
    <section id="writing" className="py-14 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] reveal">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-[2px] bg-violet" />
          <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.08em] text-ink/60">
            Medium · log
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(1.875rem,3.5vw,2.75rem)] tracking-display leading-[1] text-ink break-words">
            Notes I&apos;ve written along the way.
          </h2>
          <a
            href="https://medium.com/@mangalam0015k"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-medium text-xs uppercase tracking-[0.06em] text-ink/70 hover:text-ink transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <span className="w-2 h-2 rounded-full bg-coral" />
            Read all on Medium <span className="text-coral">↗</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {FEATURED_POSTS.map((post, idx) => {
            const formattedIndex = (idx + 1).toString().padStart(2, "0");
            const colorType = colorCycle[idx % colorCycle.length];

            return (
              <WritingCard
                key={post.url}
                post={post}
                index={formattedIndex}
                colorType={colorType}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}