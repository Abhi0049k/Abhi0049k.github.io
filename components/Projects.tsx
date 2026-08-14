import ProjectRow from "./ProjectRow";
import { PROJECTS_DATA } from "@/lib/content";

export default function Projects() {
  return (
    <section id="work" className="pt-14 sm:pt-24 lg:pt-28 pb-4 sm:pb-8 scroll-mt-16 sm:scroll-mt-[72px] reveal">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-[2px] bg-coral" />
              <span className="font-mono font-medium text-xs sm:text-[13px] uppercase tracking-[0.08em] text-ink/60">
                Work · index
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-[clamp(2.25rem,5vw,4rem)] tracking-display leading-[0.98] text-ink break-words">
              Things I&apos;ve built to replace the manual version.
            </h2>
          </div>
          <p className="font-sans italic text-sm sm:text-[15px] text-ink/60 md:max-w-[240px] md:text-right shrink-0 pb-1">
            Each one started as a repetitive task someone was doing by hand.
          </p>
        </div>

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}