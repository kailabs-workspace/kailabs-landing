import { useI18n } from "@/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-bone/20 mt-12 bg-ink/80">
      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8">
        <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-muted-foreground uppercase">
          {t.home.footer.endOfFile}
        </span>
        <div className="mt-3 grid sm:grid-cols-3 gap-6 font-mono text-[11px]">
          <div>
            <div className="text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5">
              {t.home.footer.contact}
            </div>
            <a
              href="mailto:contact@kailabs.io"
              className="block uppercase text-foreground hover:text-lime transition-colors"
            >
              contact@kailabs.io
            </a>
            <a
              href="https://github.com/kailabs-workspace"
              target="_blank"
              rel="noreferrer"
              className="block uppercase text-foreground hover:text-lime transition-colors mt-0.5"
            >
              github.com/kailabs-workspace
            </a>
          </div>
          <div>
            <div className="text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5">
              {t.home.footer.status}
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-lime led-active" />
              <span>{t.home.footer.allSystemsNominal}</span>
            </div>
            <div className="text-muted-foreground mt-0.5 text-[10px]">
              {t.home.footer.responseSubtitle}
            </div>
          </div>
          <div>
            <div className="text-muted-foreground text-[9px] uppercase tracking-widest mb-1.5">
              {t.home.footer.origin}
            </div>
            <div className="uppercase">
              {t.home.footer.builtBy}
              <br />
              {t.home.footer.brandOps}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-bone/20 pt-3 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          <span>{t.home.footer.copyright.replace("{year}", String(currentYear))}</span>
          <span className="text-lime">
            // KAI LABS STUDIO_<span className="blink">▮</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
