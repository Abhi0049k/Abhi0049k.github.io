import { STATS_DATA } from "@/lib/content";

export default function Stats() {
  return (
    <section className="w-full bg-ink text-paper py-14 sm:py-20 lg:py-24 border-y border-paper/10 reveal overflow-hidden texture-dark">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="hidden sm:flex items-center gap-3 mb-10 lg:mb-12">
          <span className="font-mono font-medium text-xs tracking-[0.08em] uppercase text-paper/40">
            SYSTEM
          </span>
          <span className="h-px flex-1 bg-paper/15" />
          <span className="font-mono font-medium text-xs tracking-[0.08em] uppercase text-paper/40">
            OPS · STABLE
          </span>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 md:gap-y-14">
          {STATS_DATA.map((stat, idx) => {
            const flagship = idx === 0;
            const colorStyles = getMarker(stat.colorType);

            return (
              <div key={idx} className="flex flex-col gap-3 min-w-0 relative">
                <span
                  className={`w-2.5 h-2.5 rounded-[2px] ${colorStyles} ${flagship ? "" : "opacity-70"}`}
                />
                <span
                  className={`font-display font-bold text-5xl sm:text-6xl lg:text-[clamp(3rem,5.5vw,4.5rem)] leading-[0.95] tracking-display break-words ${
                    flagship ? "text-lime" : "text-paper"
                  }`}
                >
                  {stat.num}
                </span>
                <p className="font-sans text-[13px] sm:text-sm leading-relaxed text-paper/65 break-words">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getMarker(type: string) {
  switch (type) {
    case "coral":
      return "bg-coral";
    case "sun":
      return "bg-sun";
    case "violet":
      return "bg-accent-violet";
    default:
      return "bg-lime";
  }
}
