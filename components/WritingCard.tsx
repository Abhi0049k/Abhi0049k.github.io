import { BlogPost } from "@/lib/content";

interface WritingCardProps {
  post: BlogPost;
  index: string;
  colorType: "violet" | "coral" | "green" | "amber";
}

const MARKERS: Record<string, string> = {
  violet: "bg-violet text-paper",
  coral: "bg-coral text-paper",
  green: "bg-accent-green text-paper",
  amber: "bg-accent-amber text-paper",
};

export default function WritingCard({ post, index, colorType }: WritingCardProps) {
  const marker = MARKERS[colorType] || MARKERS.violet;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between h-full border border-ink/15 bg-paper rounded-[4px] p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-hard hover:bg-ink hover:border-ink block min-w-0"
    >
      <span className="absolute top-0 right-0 w-0 h-0 border-t-[18px] border-l-[18px] border-t-transparent border-l-ink/10 group-hover:border-l-coral transition-colors" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <span
            className={`font-mono font-semibold text-sm px-1.5 py-0.5 rounded-[2px] ${marker}`}
          >
            {index}
          </span>
          <span className="w-6 h-[2px] bg-ink/15 group-hover:bg-lime transition-colors" />
        </div>
        <h3 className="font-display font-bold text-lg xs:text-xl tracking-display leading-snug text-ink group-hover:text-paper mb-3 transition-colors break-words [overflow-wrap:anywhere]">
          {post.title}
        </h3>
        <span className="font-mono font-medium text-[11px] text-ink/50 group-hover:text-paper/60 uppercase tracking-[0.06em] block">
          {post.pubDate}
        </span>
      </div>

      <div className="mt-6 pt-4 border-t border-ink/10 group-hover:border-paper/15 transition-colors">
        <span className="inline-flex items-center gap-2 font-mono font-semibold text-xs uppercase tracking-[0.06em] text-ink/70 group-hover:text-lime transition-colors">
          Read on Medium
          <span className="text-coral group-hover:text-lime transition-colors">
            <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">↗</span>
          </span>
        </span>
      </div>
    </a>
  );
}