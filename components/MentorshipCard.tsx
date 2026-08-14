import { MentorshipItem } from "@/lib/content";

interface MentorshipCardProps {
  item: MentorshipItem;
}

const AVATARS: Record<string, string> = {
  violet: "bg-violet text-paper",
  coral: "bg-coral text-paper",
  green: "bg-accent-green text-paper",
  amber: "bg-accent-amber text-paper",
};

export default function MentorshipCard({ item }: MentorshipCardProps) {
  const avatar = AVATARS[item.colorType] || AVATARS.violet;

  return (
    <a
      href={item.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between h-full border border-ink/15 bg-paper rounded-[4px] p-6 sm:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-hard hover:bg-ink hover:border-ink block min-w-0"
    >
      <div>
        <div className="flex items-center gap-4 mb-6 min-w-0">
          <div
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-[4px] font-display font-bold text-base sm:text-lg flex items-center justify-center shrink-0 ${avatar}`}
          >
            {item.initials}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="font-display font-bold text-lg sm:text-xl tracking-display text-ink group-hover:text-paper transition-colors break-words">
              {item.name}
            </h3>
            <span className="font-mono font-medium text-[11px] sm:text-xs text-ink/60 group-hover:text-paper/70 mt-0.5 break-words">
              {item.subtitle}
            </span>
          </div>
          <span className="ml-auto w-2 h-2 rounded-full bg-lime opacity-90 shrink-0" title="verified" />
        </div>

        <div className="my-5">
          <p className="font-sans text-xs xs:text-sm sm:text-[15px] leading-relaxed text-ink/85 group-hover:text-paper/90 bg-paper-dim/70 group-hover:bg-paper/5 p-4 sm:p-5 border-l-2 border-lime break-words whitespace-pre-line [overflow-wrap:anywhere]">
            &ldquo;{item.desc}&rdquo;
          </p>
        </div>

        <div className="font-mono font-medium text-[11px] sm:text-xs text-ink/50 group-hover:text-paper/65 flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-6 border-t border-ink/10 group-hover:border-paper/15 pt-4">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-ink/70 group-hover:text-paper/70">👍</span>
            <span>{item.reactions} reactions</span>
          </span>
          <span className="text-ink/25 group-hover:text-paper/25 hidden xs:inline">•</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-ink/70 group-hover:text-paper/70">💬</span>
            <span>{item.comments} comments</span>
          </span>
        </div>
      </div>

      <div className="mt-auto">
        <span className="inline-flex items-center gap-2 font-mono font-semibold text-xs uppercase tracking-[0.06em] text-ink/70 group-hover:text-lime transition-colors">
          View post on LinkedIn
          <span className="text-coral group-hover:text-lime transition-colors">
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">↗</span>
          </span>
        </span>
      </div>
    </a>
  );
}