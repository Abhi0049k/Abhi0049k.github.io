import { CONTACT_CONTENT } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="pt-14 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 scroll-mt-16 sm:scroll-mt-[72px] reveal overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="bg-ink text-paper rounded-[4px] py-14 xs:py-16 sm:py-20 px-6 xs:px-8 sm:px-12 lg:px-16 text-center flex flex-col items-center justify-center max-w-full relative texture-dark overflow-hidden">
          <span className="absolute top-4 left-5 font-mono font-medium text-[11px] uppercase tracking-[0.08em] text-paper/40">
            ENDPOINT · contact
          </span>
          <span className="absolute top-4 right-5 w-2.5 h-2.5 rounded-[2px] bg-lime animate-pulse" />

          <h2 className="font-display font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-[clamp(2.5rem,7vw,4.5rem)] tracking-display leading-[0.98] text-paper mb-5 whitespace-pre-line break-words [overflow-wrap:anywhere]">
            {CONTACT_CONTENT.headline}
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-paper/75 max-w-[520px] mb-10 sm:mb-12 break-words">
            {CONTACT_CONTENT.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[280px] sm:max-w-none">
            <a
              href={CONTACT_CONTENT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-coral text-ink px-7 py-4 sm:px-8 sm:py-4 rounded-sm font-display font-bold text-base sm:text-lg shadow-hard-paper hover:-translate-y-0.5 hover:shadow-none hover:bg-lime transition-all inline-flex items-center justify-center text-center min-h-[48px]"
            >
              Message on LinkedIn ↗
            </a>
            <a
              href={CONTACT_CONTENT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent text-paper border border-paper/40 px-7 py-4 sm:px-8 sm:py-4 rounded-sm font-display font-bold text-base sm:text-lg hover:border-paper hover:bg-paper/10 transition-all inline-flex items-center justify-center text-center min-h-[48px]"
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}