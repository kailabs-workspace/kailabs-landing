import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
const LINKS = [
  { to: "/", label: "BRIEF" },
  { to: "/dashboard", label: "DASHBOARD" },
  { to: "/integrations", label: "INTEGRATIONS" },
  { to: "/pricing", label: "PRICING" },
  { to: "/cases", label: "CASE FILES" }
];
function SiteNav() {
  const [hoveredIdx, setHoveredIdx] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative z-20 border-b border-bone/20 bg-ink/90 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-6 py-4 font-mono text-[11px] tracking-widest uppercase", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center gap-3 group transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/isotipo.svg",
              alt: "KAI Logo",
              className: "h-7 w-7 border border-ink/20 transition-transform duration-300 group-hover:rotate-6 select-none"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/naming-transp.svg",
              alt: "KAI wordmark",
              className: "h-5 w-auto invert opacity-90 group-hover:opacity-100 transition-opacity duration-200 select-none"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8", children: LINKS.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: l.to,
        onMouseEnter: () => setHoveredIdx(i),
        onMouseLeave: () => setHoveredIdx(null),
        className: "relative text-muted-foreground hover:text-lime transition-all duration-200 py-1 flex items-center gap-1.5 active-link [&.active]:text-lime [&.active]:font-bold",
        activeOptions: { exact: true },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-lime font-bold transition-all duration-300 ease-out inline-block select-none",
              style: {
                width: hoveredIdx === i ? "16px" : "0px",
                opacity: hoveredIdx === i ? 1 : 0,
                transform: hoveredIdx === i ? "translateX(0px)" : "translateX(-5px)"
              },
              children: ">"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label })
        ]
      },
      l.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 font-mono text-[10px] text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "CONN_UPLINK_ON" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-bold", children: [
        "// CARD 8555_",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" })
      ] })
    ] })
  ] }) });
}
export {
  SiteNav as S
};
