import { ProjectItem } from "@/lib/content";

interface ProjectRowProps {
  project: ProjectItem;
}

export default function ProjectRow({ project }: ProjectRowProps) {
  let titleColorClass = "text-violet";
  if (project.colorType === "coral") titleColorClass = "text-coral";
  if (project.colorType === "green") titleColorClass = "text-accent-green";
  if (project.colorType === "amber") titleColorClass = "text-accent-amber";

  return (
    <div className="border-t border-line last:border-b p-4 xs:p-5 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[48px_1fr_260px] gap-3 xs:gap-4 md:gap-6 items-start hover:bg-paper-dim transition-colors reveal">
      <span className="font-mono font-medium text-xs sm:text-sm text-ink/40 pt-0.5">
        {project.id}
      </span>
      <div className="flex flex-col gap-2 max-w-[720px] min-w-0">
        <h3 className={`font-display font-bold text-xl sm:text-2xl tracking-[-0.02em] leading-tight break-words [overflow-wrap:anywhere] ${titleColorClass}`}>
          {project.title}
        </h3>
        <p className="font-sans text-xs xs:text-sm sm:text-[15px] leading-relaxed text-ink/80 break-words">
          {project.desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 justify-start md:justify-end">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="font-mono font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.06em] text-ink px-2 sm:px-2.5 py-0.5 sm:py-1 border border-line rounded-full bg-paper whitespace-nowrap max-w-full truncate"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
