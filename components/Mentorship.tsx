import MentorshipCard from "./MentorshipCard";
import { MENTORSHIP_CONTENT, MENTORSHIP_DATA } from "@/lib/content";

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-12 sm:py-20 lg:py-24 scroll-mt-16 sm:scroll-mt-[72px] reveal">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="max-w-[680px] mb-8 sm:mb-12">
          <div className="font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] text-violet mb-2 sm:mb-3">
            {MENTORSHIP_CONTENT.eyebrow}
          </div>
          <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] tracking-[-0.02em] leading-[1.05] text-ink break-words mb-2 sm:mb-3">
            {MENTORSHIP_CONTENT.headline}
          </h2>
          <p className="font-sans italic text-xs xs:text-sm sm:text-[15px] text-ink/60">
            {MENTORSHIP_CONTENT.note}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MENTORSHIP_DATA.map((item) => (
            <MentorshipCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
