import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { useTheme } from "@/theme";

export function Manifesto() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const words = t.home.manifestoWords;
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.22;
      const p = (start - rect.top) / (start - end);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <p
      ref={ref}
      className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[0.95] text-center"
    >
      {words.map((w, i) => {
        const tr = (i + 1) / words.length;
        const lit = progress >= tr;
        const lw = w.toLowerCase();
        const isAccent =
          lw.includes("agent") ||
          lw.includes("agente") ||
          lw.includes("ai-native") ||
          lw.includes("native") ||
          lw.includes("nativo") ||
          lw.includes("autonomous") ||
          lw.includes("autónom") ||
          lw.includes("systems") ||
          lw.includes("sistemas");

        let wordColor = "";
        if (lit) {
          if (isAccent) {
            wordColor = isDark ? "#D4F542" : "#0A0A0A";
          } else {
            wordColor = isDark ? "#F4F1E8" : "#0A0A0A";
          }
        } else {
          wordColor = isDark ? "rgba(244, 241, 232, 0.14)" : "rgba(10, 10, 10, 0.16)";
        }

        return (
          <span
            key={`${w}-${i}`}
            className={`inline-block transition-all duration-500 ease-out ${
              lit && isAccent && !isDark ? "underline decoration-lime decoration-4" : ""
            }`}
            style={{
              color: wordColor,
              transform: lit ? "translateY(0px) scale(1)" : "translateY(15px) scale(0.96)",
              filter: lit ? "blur(0px)" : "blur(3px)",
              marginRight: "0.2em",
            }}
          >
            {w}
          </span>
        );
      })}
    </p>
  );
}
