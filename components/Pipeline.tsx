"use client";

import { useEffect, useState } from "react";
import { PIPELINE_NODES } from "@/lib/content";

export default function Pipeline() {
  const [lineActive, setLineActive] = useState(false);
  const [activeDots, setActiveDots] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const lineTimer = setTimeout(() => {
      setLineActive(true);
    }, 300);

    const dotTimers: NodeJS.Timeout[] = [];
    PIPELINE_NODES.forEach((node) => {
      const timer = setTimeout(() => {
        setActiveDots((prev) => ({ ...prev, [node.id]: true }));
      }, 300 + node.delayMs);
      dotTimers.push(timer);
    });

    return () => {
      clearTimeout(lineTimer);
      dotTimers.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="mt-12 sm:mt-16 relative w-full overflow-hidden">
      {/* Desktop Track */}
      <div className="relative w-full">
        <div className="hidden sm:block absolute top-[20px] left-0 right-0 h-[2px] bg-line z-0" />
        <div
          className="hidden sm:block absolute top-[20px] left-0 h-[2px] bg-violet z-10 transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: lineActive ? "100%" : "0%" }}
        />

        <div className="relative z-20 flex flex-col sm:grid sm:grid-cols-4 gap-6">
          {PIPELINE_NODES.map((node) => {
            const isDotActive = activeDots[node.id];

            let dotStyles = "";
            let labelStyles = "";

            if (node.colorType === "violet") {
              dotStyles = "bg-violet text-paper border-2 border-violet";
              labelStyles = "text-violet";
            } else if (node.colorType === "coral") {
              dotStyles = "bg-coral text-paper border-2 border-coral";
              labelStyles = "text-coral";
            } else if (node.colorType === "sun") {
              dotStyles = "bg-paper text-ink border-2 border-sun";
              labelStyles = "text-ink";
            } else if (node.colorType === "lime") {
              dotStyles = "bg-paper text-ink border-2 border-lime";
              labelStyles = "text-ink";
            }

            return (
              <div
                key={node.id}
                className="flex flex-row sm:flex-col items-start gap-4 sm:gap-0"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm mb-0 sm:mb-4 shrink-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${dotStyles} ${
                    isDotActive
                      ? "opacity-100 scale-100"
                      : "opacity-100 scale-100 sm:opacity-0 sm:scale-40"
                  }`}
                >
                  {node.num}
                </div>
                <div className="flex flex-col gap-1.5 min-w-0">
                  <span className={`font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] ${labelStyles}`}>
                    {node.label}
                  </span>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-ink/75 break-words">
                    {node.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
