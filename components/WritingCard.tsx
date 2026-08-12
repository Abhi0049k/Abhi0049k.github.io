import { BlogPost } from "@/lib/content";

interface WritingCardProps {
  post: BlogPost;
  index: string;
  colorType: "violet" | "coral" | "green" | "amber";
}

export default function WritingCard({ post, index, colorType }: WritingCardProps) {
  let accentColorClass = "text-violet";
  if (colorType === "coral") accentColorClass = "text-coral";
  if (colorType === "green") accentColorClass = "text-accent-green";
  if (colorType === "amber") accentColorClass = "text-accent-amber";

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-line rounded-2xl p-5 xs:p-6 sm:p-8 bg-paper hover:bg-paper-dim hover:-translate-y-1 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between h-full group reveal block min-w-0"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className={`font-mono font-bold text-sm ${accentColorClass}`}>
            {index}
          </span>
          <span className="w-8 h-1 rounded-full bg-line group-hover:bg-violet transition-colors" />
        </div>
        <h3 className="font-display font-bold text-lg xs:text-xl sm:text-2xl tracking-[-0.02em] leading-snug text-ink mb-3 group-hover:text-violet transition-colors break-words [overflow-wrap:anywhere]">
          {post.title}
        </h3>
        <span className="font-mono font-medium text-xs text-ink/50 uppercase tracking-[0.04em] block">
          {post.pubDate}
        </span>
      </div>

      <div className="mt-6 sm:mt-8 pt-4">
        <span className="inline-flex items-center justify-center gap-2 px-4 xs:px-5 py-2.5 rounded-full border border-line bg-paper text-ink font-mono font-semibold text-xs uppercase tracking-[0.06em] group-hover:bg-violet group-hover:text-paper group-hover:border-violet transition-all w-full text-center min-h-[44px]">
          Read on Medium ↗
        </span>
      </div>
    </a>
  );
}
