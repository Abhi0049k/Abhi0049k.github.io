import MentorshipCard from "./MentorshipCard";
import { MENTORSHIP_CONTENT, MENTORSHIP_DATA } from "@/lib/content";

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-14 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] reveal">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-[2px] bg-sun" />
          <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.08em] text-ink/60">
            {MENTORSHIP_CONTENT.eyebrow} · witness
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[clamp(1.875rem,3.5vw,2.75rem)] tracking-display leading-[1] text-ink break-words">
            {MENTORSHIP_CONTENT.headline}
          </h2>
          <p className="font-sans italic text-sm sm:text-[15px] text-ink/60 sm:max-w-[260px] sm:text-right shrink-0 pb-1">
            {MENTORSHIP_CONTENT.note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {MENTORSHIP_DATA.map((item) => (
            <MentorshipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}