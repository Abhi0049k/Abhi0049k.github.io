import { ProjectItem } from "@/lib/content";

interface ProjectRowProps {
  project: ProjectItem;
  index: number;
}

const MARKERS: Record<string, string> = {
  violet: "bg-violet",
  coral: "bg-coral",
  green: "bg-accent-green",
  amber: "bg-accent-amber",
};

export default function ProjectRow({ project, index }: ProjectRowProps) {
  const marker = MARKERS[project.colorType] || "bg-violet";
  const num = index.toString().padStart(2, "0");

  return (
    <div
      aria-label={project.title}
      className="group relative border-t border-ink/10 py-8 sm:py-10 grid grid-cols-1 md:grid-cols-[76px_1fr_260px] gap-4 sm:gap-6 md:gap-8 items-start last:border-b reveal"
    >
      <span className="hidden md:block absolute left-0 top-0 bottom-0 w-[3px] bg-ink/10 group-hover:bg-coral transition-colors" />

      <span className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-display leading-none text-ink/15 group-hover:text-lime transition-colors select-none">
        {num}
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-2.5">
          <span className={`w-2 h-2 rounded-[2px] ${marker} group-hover:bg-lime transition-colors`} />
          <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-display leading-tight text-ink break-words [overflow-wrap:anywhere]">
            {project.title}
          </h3>
        </div>
        <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-ink/75 break-words">
          {project.desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 sm:gap-2 content-start justify-start md:justify-end">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="font-mono font-medium text-[11px] uppercase tracking-[0.05em] text-ink/60 border border-ink/15 rounded-[3px] px-2 sm:px-2.5 py-1 bg-paper group-hover:border-paper/25 group-hover:text-paper/80 whitespace-nowrap max-w-full truncate"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}