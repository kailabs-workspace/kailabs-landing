import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { I18nProvider, useI18n } from "../i18n";
import { ThemeProvider } from "../theme";
import { PerpendicularTransition } from "../components/PerpendicularTransition";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-foreground px-4">
      <div className="max-w-md text-center border border-bone/20 bg-ink/90 p-8 corner-ticks">
        <h1 className="text-6xl font-bold font-display text-lime">{t.notFound.title}</h1>
        <h2 className="mt-3 text-lg font-mono font-semibold uppercase text-foreground">
          {t.notFound.subtitle}
        </h2>
        <p className="mt-2 text-xs font-mono text-muted-foreground">{t.notFound.desc}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-lime text-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-lime/90 transition-colors"
          >
            {t.notFound.goHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const { t } = useI18n();

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-foreground px-4">
      <div className="max-w-md text-center border border-signal/40 bg-ink/90 p-8 corner-ticks">
        <h1 className="text-xl font-mono uppercase text-signal font-bold">{t.error.title}</h1>
        <p className="mt-2 text-xs font-mono text-muted-foreground">{t.error.desc}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center bg-lime text-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-lime/90 transition-colors cursor-pointer"
          >
            {t.error.tryAgain}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-bone/30 px-4 py-2 font-mono text-xs uppercase text-foreground hover:border-lime hover:text-lime transition-colors"
          >
            {t.error.goHome}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        name: "description",
        content:
          "We build bespoke software platforms, automate core business processes, and deploy autonomous AI engines for forward-thinking enterprises.",
      },
      { name: "author", content: "KAI LABS" },
      { property: "og:title", content: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        property: "og:description",
        content:
          "We build bespoke software platforms, automate core business processes, and deploy autonomous AI engines.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/isotipo.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        name: "twitter:description",
        content:
          "We transform enterprises into AI-native organizations by building transactional platforms and autonomous background worker engines.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var saved = localStorage.getItem('kai_theme_mode');
    var theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch(e) {}
})();`,
          }}
        />
        <HeadContent />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-lime selection:text-ink">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <I18nProvider>
          <PerpendicularTransition pathname={pathname}>
            <Outlet />
          </PerpendicularTransition>
        </I18nProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
