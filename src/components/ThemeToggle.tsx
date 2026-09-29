import { useTheme } from "@/theme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="inline-flex items-center gap-1.5 border border-bone/30 bg-ink/70 light:bg-cream light:border-ink/25 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-foreground hover:border-lime hover:text-lime light:hover:border-ink light:hover:text-ink transition-all duration-200 cursor-pointer shadow-xs select-none"
      title={isDark ? "Cambiar a Tema Claro (CREAM)" : "Cambiar a Tema Oscuro (INK)"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <>
          <Moon className="w-3 h-3 text-lime" />
          <span className="font-bold text-[9px] text-foreground">DARK</span>
          <span className="h-1.5 w-1.5 rounded-full bg-lime led-active shrink-0 ml-0.5" />
        </>
      ) : (
        <>
          <Sun className="w-3 h-3 text-ink" />
          <span className="font-bold text-[9px] text-ink">LIGHT</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink shrink-0 ml-0.5" />
        </>
      )}
    </button>
  );
}
