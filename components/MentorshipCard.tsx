import { MentorshipItem } from "@/lib/content";

interface MentorshipCardProps {
  item: MentorshipItem;
}

export default function MentorshipCard({ item }: MentorshipCardProps) {
  let avatarBgClass = "bg-violet text-paper";
  if (item.colorType === "coral") avatarBgClass = "bg-coral text-paper";
  if (item.colorType === "green") avatarBgClass = "bg-accent-green text-paper";
  if (item.colorType === "amber") avatarBgClass = "bg-accent-amber text-paper";

  return (
    <a
      href={item.linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-line rounded-2xl p-5 xs:p-6 sm:p-8 bg-paper hover:bg-paper-dim hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between h-full group reveal block min-w-0"
    >
      <div>
        {/* Header row */}
        <div className="flex items-center gap-3.5 sm:gap-4 mb-5 min-w-0">
          <div
            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full font-display font-bold text-sm sm:text-base flex items-center justify-center shrink-0 shadow-sm ${avatarBgClass}`}
          >
            {item.initials}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="font-display font-bold text-lg sm:text-xl tracking-[-0.02em] text-ink group-hover:text-violet transition-colors break-words">
              {item.name}
            </h3>
            <span className="font-mono font-medium text-[11px] sm:text-xs text-ink/60 mt-0.5 break-words">
              {item.subtitle}
            </span>
          </div>
        </div>

        {/* Post body area */}
        <div className="my-5">
          <p className="font-sans text-xs xs:text-sm sm:text-[15px] leading-relaxed text-ink/85 bg-paper-dim/60 p-4 sm:p-5 rounded-xl border border-line/40 whitespace-pre-line break-words [overflow-wrap:anywhere]">
            &ldquo;{item.desc}&rdquo;
          </p>
        </div>

        {/* Engagement row */}
        <div className="font-mono font-medium text-[11px] sm:text-xs text-ink/50 flex flex-wrap items-center gap-x-3 sm:gap-4 gap-y-1.5 mb-6 border-t border-line/60 pt-4">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-violet">👍</span>
            <span>{item.reactions} reactions</span>
          </span>
          <span className="text-line hidden xs:inline">•</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="text-coral">💬</span>
            <span>{item.comments} comments</span>
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <span className="inline-flex items-center justify-center gap-2 px-4 xs:px-5 py-2.5 rounded-full border border-line bg-paper text-ink font-mono font-semibold text-xs uppercase tracking-[0.06em] group-hover:bg-violet group-hover:text-paper group-hover:border-violet transition-all w-full text-center min-h-[44px]">
          View post on LinkedIn ↗
        </span>
      </div>
    </a>
  );
}
