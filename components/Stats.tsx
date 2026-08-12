import { STATS_DATA } from "@/lib/content";

export default function Stats() {
  return (
    <section className="w-full bg-ink text-paper py-10 sm:py-12 lg:py-16 border-y border-paper/10 reveal overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 md:gap-x-6 md:gap-y-8">
          {STATS_DATA.map((stat, idx) => {
            let colorStyles = "text-lime";
            if (stat.colorType === "coral") colorStyles = "text-coral";
            if (stat.colorType === "sun") colorStyles = "text-sun";
            if (stat.colorType === "violet") colorStyles = "text-accent-violet";

            return (
              <div key={idx} className="flex flex-col gap-2 min-w-0">
                <span className={`font-display font-bold text-3xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] leading-[1.05] tracking-[-0.02em] break-words ${colorStyles}`}>
                  {stat.num}
                </span>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-paper/75 break-words">
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
