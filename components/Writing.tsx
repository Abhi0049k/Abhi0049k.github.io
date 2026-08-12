import WritingCard from "./WritingCard";
import { FEATURED_POSTS } from "@/lib/content";

const colorCycle: Array<"violet" | "coral" | "green" | "amber"> = [
  "violet",
  "coral",
  "amber",
];

export default function Writing() {
  return (
    <section id="writing" className="py-12 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] reveal">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-8 sm:mb-12">
          <div className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] text-violet mb-2 sm:mb-3">
            Writing
          </div>
          <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] tracking-[-0.02em] leading-[1.05] text-ink break-words mb-2 sm:mb-3">
            Notes I&apos;ve written along the way.
          </h2>
          <p className="font-sans italic text-xs xs:text-sm sm:text-[15px] text-ink/60">
            Posted on Medium — click through to read the full piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div className="pt-8 flex justify-start md:justify-end reveal">
          <a
            href="https://medium.com/@mangalam0015k"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono font-semibold text-xs uppercase tracking-[0.06em] text-violet hover:text-ink transition-colors inline-flex items-center gap-1"
          >
            Check out more blogs on Medium ↗
          </a>
        </div>
      </div>
    </section>
  );
}
