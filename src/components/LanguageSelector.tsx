import { useI18n } from "@/i18n";
import { Globe } from "lucide-react";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();

  return (
    <div
      className={`inline-flex items-center gap-1.5 font-mono text-[11px] tracking-wider border border-bone/25 bg-ink/80 px-2 py-1 select-none backdrop-blur-sm ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
      <div className="flex items-center">
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-label="Switch to English"
          className={`px-1.5 py-0.5 transition-all duration-200 cursor-pointer ${
            lang === "en"
              ? "bg-lime text-ink font-bold shadow-[0_0_8px_rgba(212,245,66,0.5)]"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          EN
        </button>
        <span className="text-bone/30 px-0.5 font-light">/</span>
        <button
          type="button"
          onClick={() => setLang("es")}
          aria-label="Cambiar a Español"
          className={`px-1.5 py-0.5 transition-all duration-200 cursor-pointer ${
            lang === "es"
              ? "bg-lime text-ink font-bold shadow-[0_0_8px_rgba(212,245,66,0.5)]"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
}
