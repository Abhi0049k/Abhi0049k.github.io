"use client";

import { useEffect, useState } from "react";
import { PIPELINE_NODES } from "@/lib/content";

const NODE_COLORS: Record<string, string> = {
  violet: "bg-violet border-violet text-paper",
  coral: "bg-coral border-coral text-ink",
  sun: "bg-paper text-ink border-sun",
  lime: "bg-lime text-ink border-lime",
};

const LABEL_COLORS: Record<string, string> = {
  violet: "text-violet",
  coral: "text-ink/80",
  sun: "text-ink/80",
  lime: "text-ink/80",
};

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
      <div className="relative w-full">
        {/* Desktop rail track */}
        <div className="hidden sm:block absolute top-[22px] left-0 right-0 h-[3px] bg-ink/15 z-0" />
        <div
          className="hidden sm:block absolute top-[22px] left-0 h-[3px] bg-violet z-10"
          style={{
            width: lineActive ? "100%" : "0%",
            transition: "width 1400ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />

        <div className="relative z-20 flex flex-col sm:grid sm:grid-cols-4 gap-5 sm:gap-6">
          {PIPELINE_NODES.map((node) => {
            const isDotActive = activeDots[node.id];
            const isLast = node.id === PIPELINE_NODES[PIPELINE_NODES.length - 1].id;
            const dotStyles = NODE_COLORS[node.colorType] || "";
            const labelStyles = LABEL_COLORS[node.colorType] || "text-ink";

            return (
              <div key={node.id} className="flex flex-row sm:flex-col items-start gap-4 sm:gap-0 group">
                <div
                  className={`w-11 h-11 sm:w-[44px] sm:h-[44px] rounded-[3px] flex items-center justify-center font-mono font-semibold text-sm mb-0 sm:mb-5 shrink-0 border-2 shadow-hard transition-all duration-400 ${dotStyles} ${
                    isActiveOrFinal(isDotActive, isLast)
                      ? "opacity-100 scale-100"
                      : "opacity-100 scale-100 sm:opacity-40 sm:scale-90"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                >
                  {node.num}
                </div>
                <div className="flex flex-col gap-1.5 min-w-0">
                  <span className={`font-mono font-semibold text-xs sm:text-[13px] uppercase tracking-[0.06em] ${labelStyles}`}>
                    {node.label}
                  </span>
                  <p className="font-sans text-xs sm:text-sm leading-relaxed text-ink/70 break-words">
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

function isActiveOrFinal(isDotActive: boolean, isLast: boolean) {
  return isDotActive || isLast;
}