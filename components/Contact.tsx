import { CONTACT_CONTENT } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 scroll-mt-16 sm:scroll-mt-[72px] reveal overflow-hidden">
      <div className="w-full max-w-maxw mx-auto px-4 xs:px-[18px] sm:px-6 lg:px-8">
        <div className="bg-violet text-paper rounded-2xl sm:rounded-3xl lg:rounded-[28px] py-10 xs:py-12 sm:py-14 lg:py-18 px-4 xs:px-6 sm:px-10 text-center flex flex-col items-center justify-center max-w-full">
          <h2 className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl lg:text-[clamp(30px,4vw,46px)] tracking-[-0.02em] leading-[1.05] text-paper mb-4 whitespace-pre-line break-words [overflow-wrap:anywhere]">
            {CONTACT_CONTENT.headline}
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-paper/85 max-w-[520px] mb-8 sm:mb-10 break-words">
            {CONTACT_CONTENT.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-[280px] sm:max-w-none">
            <a
              href={CONTACT_CONTENT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-paper text-ink px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full font-display font-bold text-[15px] sm:text-base shadow-hard hover:-translate-y-0.5 hover:shadow-hard-lg transition-all inline-flex items-center justify-center text-center min-h-[44px]"
            >
              Message on LinkedIn ↗
            </a>
            <a
              href={CONTACT_CONTENT.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-transparent text-paper border border-paper/40 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full font-display font-bold text-[15px] sm:text-base hover:border-paper hover:bg-paper/10 transition-all inline-flex items-center justify-center text-center min-h-[44px]"
            >
              View GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
