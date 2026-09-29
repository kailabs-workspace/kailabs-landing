import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { D as DotMatrix, S as SiteNav, a as SiteFooter } from "./SiteFooter-DsBLkoY6.mjs";
import { S as Scene, P as PerspectiveCamera, W as WebGLRenderer, I as IcosahedronGeometry, M as MeshBasicMaterial, a as Mesh, O as OctahedronGeometry, B as BufferGeometry, b as BufferAttribute, c as PointsMaterial, A as AdditiveBlending, N as NormalBlending, d as Points, C as Clock$1, e as CanvasTexture, L as LinearFilter } from "../_libs/three.mjs";
import { a as useI18n, u as useTheme } from "./router-w_T3t37d.mjs";
import { u as useScroll, a as useSpring, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, S as Sparkles, C as CircleCheck, a as Send, M as Mail, B as Building2, b as Clock, P as Pause, c as Play, d as ChevronLeft, e as ChevronRight, L as Layers, Z as Zap, f as ShieldCheck, T as Terminal } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/seroval.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function createDotTexture(colorHex) {
  const canvas = document.createElement("canvas");
  canvas.width = 16;
  canvas.height = 16;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = colorHex;
    ctx.fillRect(2, 2, 12, 12);
  }
  const texture = new CanvasTexture(canvas);
  texture.generateMipmaps = false;
  texture.minFilter = LinearFilter;
  return texture;
}
function ThreeBackground({ className = "", interactive = true }) {
  const containerRef = reactExports.useRef(null);
  const { theme } = useTheme();
  const materialsRef = reactExports.useRef({});
  reactExports.useEffect(() => {
    const { coreMat, innerMat, particleMat, darkDotTexture, lightDotTexture } = materialsRef.current;
    if (!coreMat || !innerMat || !particleMat) return;
    const isDarkMode = document.documentElement.classList.contains("light") ? false : theme === "dark" || document.documentElement.classList.contains("dark");
    const meshColor = isDarkMode ? 13956418 : 657930;
    const meshOpacity = isDarkMode ? 0.18 : 0.24;
    const innerOpacity = isDarkMode ? 0.35 : 0.42;
    const particleColor = isDarkMode ? 13956418 : 2763304;
    coreMat.color.setHex(meshColor);
    coreMat.opacity = meshOpacity;
    innerMat.color.setHex(meshColor);
    innerMat.opacity = innerOpacity;
    particleMat.color.setHex(particleColor);
    particleMat.map = isDarkMode ? darkDotTexture || null : lightDotTexture || null;
    particleMat.needsUpdate = true;
  }, [theme]);
  reactExports.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const width = Math.max(
      container.clientWidth || 0,
      container.offsetWidth || 0,
      rect.width || 0,
      800
    );
    const height = Math.max(
      container.clientHeight || 0,
      container.offsetHeight || 0,
      rect.height || 0,
      420
    );
    const isDarkMode = document.documentElement.classList.contains("light") ? false : theme === "dark" || document.documentElement.classList.contains("dark");
    const meshColor = isDarkMode ? 13956418 : 657930;
    const meshOpacity = isDarkMode ? 0.18 : 0.24;
    const innerOpacity = isDarkMode ? 0.35 : 0.42;
    const particleColor = isDarkMode ? 13956418 : 2763304;
    const scene = new Scene();
    const camera = new PerspectiveCamera(60, width / height, 0.1, 1e3);
    camera.position.z = 28;
    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
      precision: "mediump",
      stencil: false,
      depth: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height);
    renderer.setClearColor(0, 0);
    container.appendChild(renderer.domElement);
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : 72;
    const coreGeometry = new IcosahedronGeometry(7, isMobile ? 1 : 2);
    const coreMaterial = new MeshBasicMaterial({
      color: meshColor,
      wireframe: true,
      transparent: true,
      opacity: meshOpacity
    });
    const coreMesh = new Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);
    const innerGeometry = new OctahedronGeometry(4.2, 0);
    const innerMaterial = new MeshBasicMaterial({
      color: meshColor,
      wireframe: true,
      transparent: true,
      opacity: innerOpacity
    });
    const innerMesh = new Mesh(innerGeometry, innerMaterial);
    scene.add(innerMesh);
    const particleGeo = new BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const scaleArray = new Float32Array(particleCount);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 10 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      scaleArray[i / 3] = Math.random() * 0.8 + 0.2;
    }
    particleGeo.setAttribute("position", new BufferAttribute(posArray, 3));
    const darkDotTexture = createDotTexture("#D4F542");
    const lightDotTexture = createDotTexture("#0A0A0A");
    const particleMat = new PointsMaterial({
      size: isMobile ? 0.35 : 0.45,
      map: isDarkMode ? darkDotTexture : lightDotTexture,
      transparent: true,
      opacity: isDarkMode ? 0.55 : 0.65,
      color: particleColor,
      blending: isDarkMode ? AdditiveBlending : NormalBlending,
      depthWrite: false
    });
    const particles = new Points(particleGeo, particleMat);
    scene.add(particles);
    materialsRef.current = {
      coreMat: coreMaterial,
      innerMat: innerMaterial,
      particleMat,
      darkDotTexture,
      lightDotTexture
    };
    renderer.render(scene, camera);
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (e) => {
      if (!interactive) return;
      let clientX = 0;
      let clientY = 0;
      if ("touches" in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ("clientX" in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      const rect2 = container.getBoundingClientRect();
      const x = clientX - rect2.left;
      const y = clientY - rect2.top;
      targetX = (x / (container.clientWidth || width) - 0.5) * 2;
      targetY = -(y / (container.clientHeight || height) - 0.5) * 2;
    };
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || container.offsetWidth || width;
      const newHeight = container.clientHeight || container.offsetHeight || height;
      if (newWidth <= 0 || newHeight <= 0) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener("resize", handleResize);
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);
    let animationFrameId;
    const clock = new Clock$1();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;
      const elapsedTime = clock.getElapsedTime();
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;
      const floatY = Math.sin(elapsedTime * 1.4) * 1.15;
      const floatTilt = Math.cos(elapsedTime * 1.1) * 0.04;
      const innerFloatY = Math.sin(elapsedTime * 1.4 + 0.5) * 0.95;
      coreMesh.position.y = floatY;
      coreMesh.rotation.x = elapsedTime * 0.12 + mouseY * 0.3 + floatTilt;
      coreMesh.rotation.y = elapsedTime * 0.18 + mouseX * 0.4;
      innerMesh.position.y = innerFloatY;
      innerMesh.rotation.x = -elapsedTime * 0.2 - mouseY * 0.2;
      innerMesh.rotation.y = -elapsedTime * 0.25 - mouseX * 0.3;
      particles.position.y = floatY * 0.35;
      particles.rotation.y = elapsedTime * 0.05 + mouseX * 0.15;
      particles.rotation.x = mouseY * 0.1;
      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 2.5;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("resize", handleResize);
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      darkDotTexture.dispose();
      lightDotTexture.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: containerRef,
      className: `absolute inset-0 pointer-events-none overflow-hidden ${className}`,
      "aria-hidden": "true"
    }
  );
}
function Manifesto() {
  const { t } = useI18n();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const words = t.home.manifestoWords;
  const ref = reactExports.useRef(null);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "p",
    {
      ref,
      className: "font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tighter leading-[0.95] text-center",
      children: words.map((w, i) => {
        const tr = (i + 1) / words.length;
        const lit = progress >= tr;
        const lw = w.toLowerCase();
        const isAccent = lw.includes("agent") || lw.includes("agente") || lw.includes("ai-native") || lw.includes("native") || lw.includes("nativo") || lw.includes("autonomous") || lw.includes("autónom") || lw.includes("systems") || lw.includes("sistemas");
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
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `inline-block transition-all duration-500 ease-out ${lit && isAccent && !isDark ? "underline decoration-lime decoration-4" : ""}`,
            style: {
              color: wordColor,
              transform: lit ? "translateY(0px) scale(1)" : "translateY(15px) scale(0.96)",
              filter: lit ? "blur(0px)" : "blur(3px)",
              marginRight: "0.2em"
            },
            children: w
          },
          `${w}-${i}`
        );
      })
    }
  );
}
function InteractiveTransformationDemo() {
  const { t, lang } = useI18n();
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const [isRunning, setIsRunning] = reactExports.useState(false);
  const [consoleOutput, setConsoleOutput] = reactExports.useState([
    lang === "es" ? "[SISTEMA] Motor de Transformación AI-Native inicializado." : "[SYSTEM] AI-Native Transformation Engine initialized.",
    lang === "es" ? "[LISTO] Selecciona una fase del roadmap o ejecuta el benchmark integral." : "[READY] Select a roadmap phase or execute the full architectural benchmark."
  ]);
  const steps = t.home.transformationSteps;
  const handleRunBenchmark = () => {
    setIsRunning(true);
    setConsoleOutput((prev) => [
      ...prev,
      lang === "es" ? "> INICIANDO AUDITORÍA INTEGRAL DE ARQUITECTURA & PROCESOS..." : "> INITIATING FULL ARCHITECTURE & PROCESS AUDIT..."
    ]);
    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        lang === "es" ? "✓ Mapeo de cuellos de botella: 18 tareas manuales aisladas en agendamiento y facturación." : "✓ Bottleneck discovery: 18 manual steps identified in scheduling and settlement.",
        lang === "es" ? "✓ Diseño de Monolito Modular: 8 módulos de dominio estructurados con Drizzle ORM." : "✓ Modular Monolith Blueprint: 8 domain modules structured with Drizzle ORM."
      ]);
    }, 600);
    setTimeout(() => {
      setConsoleOutput((prev) => [
        ...prev,
        lang === "es" ? "✓ Relojes pg-boss en segundo plano: 4 colas transaccionales configuradas." : "✓ pg-boss worker clocks: 4 transactional background queues active.",
        lang === "es" ? "✓ Pipeline CI/CD listo: Type safety 100% estricto validado en TypeScript." : "✓ CI/CD Pipeline ready: 100% strict TypeScript type safety validated.",
        lang === "es" ? "▶ ESTADO: PLATAFORMA LISTA PARA PRODUCCIÓN CON CERO DEUDA TÉCNICA." : "▶ STATUS: PLATFORM READY FOR PRODUCTION WITH ZERO TECHNICAL DEBT."
      ]);
      setIsRunning(false);
      setActiveStep(3);
    }, 1200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-bone/20 bg-ink/65 backdrop-blur-md p-4 sm:p-5 md:p-6 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[11px] text-lime uppercase tracking-widest flex items-center gap-1.5 mb-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.transformationLifecycleLabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: steps.map((s, idx) => {
        const isSelected = activeStep === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => setActiveStep(idx),
            className: `border p-3 transition-all duration-300 cursor-pointer ${isSelected ? "border-lime bg-lime/10 text-foreground" : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-lime/40 hover:bg-ink/70"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between font-mono text-[10.5px] mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: s.phase }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] uppercase border px-1 py-0.2 border-bone/20 text-muted-foreground", children: s.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base uppercase tracking-tight text-foreground", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground mt-0.5 leading-relaxed", children: s.desc }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 pt-1.5 border-t border-bone/10 flex flex-wrap items-center justify-between gap-1.5 font-mono text-[9.5px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lime font-semibold", children: [
                  "▶ ",
                  s.metric
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-muted-foreground", children: s.tech.map((tc) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-ink px-1.5 py-0.2 border border-bone/10", children: tc }, tc)) })
              ] })
            ]
          },
          s.id
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 flex flex-col justify-between bg-ink border border-bone/20 p-3.5 crt-screen min-h-[340px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-bone/20 pb-2 mb-3 font-mono text-[10px] uppercase tracking-widest", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-foreground font-bold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "w-3.5 h-3.5 text-lime" }),
            t.home.transformationTerminal.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime text-[9px] font-bold", children: t.home.transformationTerminal.status })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 font-mono text-[10.5px] leading-relaxed max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-lime/20 text-muted-foreground", children: [
          consoleOutput.map((line, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `animate-fade-in ${line.startsWith("▶") ? "text-lime font-bold" : line.startsWith("✓") ? "text-foreground" : line.startsWith(">") ? "text-lime/90 font-semibold" : "text-muted-foreground"}`,
              children: line
            },
            idx
          )),
          isRunning && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink", children: "▮" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px]", children: t.home.transformationTerminal.runningMsg })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-bone/15 pt-3 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: handleRunBenchmark,
          disabled: isRunning,
          className: "w-full bg-lime hover:bg-lime/90 text-ink font-mono text-[11px] font-bold py-2 uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer disabled:opacity-50 select-none tactile-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-3 h-3 fill-current" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.transformationTerminal.runAuditBtn })
          ]
        }
      ) })
    ] })
  ] }) });
}
function InteractiveStorytelling() {
  const { t } = useI18n();
  const [currentIdx, setCurrentIdx] = reactExports.useState(0);
  const [isPlaying, setIsPlaying] = reactExports.useState(true);
  const chapters = t.home.storyChapters;
  const activeChapter = chapters[currentIdx];
  reactExports.useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % chapters.length);
    }, 6e3);
    return () => clearInterval(interval);
  }, [isPlaying, chapters.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "border border-bone/20 bg-ink/75 backdrop-blur-md p-4 sm:p-5 md:p-7 corner-ticks relative shadow-2xl overflow-hidden",
      onMouseEnter: () => setIsPlaying(false),
      onMouseLeave: () => setIsPlaying(true),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-bone/20 pb-3.5 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-mono text-[9px] text-lime uppercase tracking-widest mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyTag })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl md:text-2xl uppercase text-foreground", children: t.home.storyTitle })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setIsPlaying(!isPlaying),
                className: "flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider border border-bone/20 bg-ink px-2.5 py-1 text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer",
                "aria-label": isPlaying ? t.home.storyControls.paused : t.home.storyControls.auto,
                children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "w-2.5 h-2.5 text-lime" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyControls.auto })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-2.5 h-2.5 text-lime" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyControls.paused })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCurrentIdx((prev) => prev === 0 ? chapters.length - 1 : prev - 1),
                  className: "w-6.5 h-6.5 border border-bone/20 bg-ink flex items-center justify-center text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer",
                  "aria-label": t.home.storyControls.prevAria,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-3.5 h-3.5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCurrentIdx((prev) => (prev + 1) % chapters.length),
                  className: "w-6.5 h-6.5 border border-bone/20 bg-ink flex items-center justify-center text-muted-foreground hover:text-lime hover:border-lime transition-colors cursor-pointer",
                  "aria-label": t.home.storyControls.nextAria,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" })
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1.5 mb-5", children: chapters.map((chap, idx) => {
          const isActive = currentIdx === idx;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setCurrentIdx(idx),
              className: `p-2 text-left border font-mono transition-all duration-300 cursor-pointer relative overflow-hidden ${isActive ? "border-lime bg-lime/10 text-foreground" : "border-bone/15 bg-ink/40 text-muted-foreground hover:border-bone/40 hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[9px] mb-0.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: isActive ? "text-lime font-bold" : "text-muted-foreground", children: [
                    "0",
                    idx + 1
                  ] }),
                  isActive && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate text-[10px]", children: chap.state }),
                isActive && isPlaying && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    className: "absolute bottom-0 left-0 h-0.5 bg-lime",
                    initial: { width: "0%" },
                    animate: { width: "100%" },
                    transition: { duration: 6, ease: "linear" }
                  },
                  `progress-${idx}`
                )
              ]
            },
            chap.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -12 },
            transition: { duration: 0.3, ease: "easeOut" },
            className: "grid lg:grid-cols-12 gap-5 items-stretch",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col justify-between space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[11px] text-lime font-bold tracking-widest", children: [
                      "// ",
                      activeChapter.chapter
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8.5px] px-1.5 py-0.2 bg-lime/10 border border-lime/30 text-lime uppercase", children: activeChapter.badge })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-xl md:text-2xl uppercase text-foreground mb-2.5", children: activeChapter.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] md:text-xs text-muted-foreground leading-relaxed", children: activeChapter.description })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 border-t border-bone/15 flex flex-wrap items-center justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl md:text-2xl text-lime font-bold", children: activeChapter.metricValue }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8.5px] text-muted-foreground uppercase tracking-widest", children: activeChapter.metricLabel })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] px-2.5 py-1 bg-graphite/40 border border-bone/20 text-bone", children: activeChapter.techPill })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 border border-bone/20 bg-ink p-3.5 flex flex-col justify-between crt-screen min-h-[220px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "crt-scanline" }),
                currentIdx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-signal font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage1.state }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage1.bottleneck })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 font-mono text-[10.5px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-signal/40 bg-signal/5 p-2 text-signal", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase mb-0.5", children: t.home.storyHud.stage1.manualTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: t.home.storyHud.stage1.manualDesc })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-signal/40 bg-signal/5 p-2 text-signal", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase mb-0.5", children: t.home.storyHud.stage1.disconnectTitle }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: t.home.storyHud.stage1.disconnectDesc })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground font-mono text-[9px] flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-signal" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage1.avgTime })
                  ] })
                ] }),
                currentIdx === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage2.state }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage2.typeSafe })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-1 font-mono text-[9px]", children: t.home.storyHud.stage2.modules.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "border border-lime/30 bg-lime/5 p-1 text-center text-foreground font-semibold truncate",
                      children: mod
                    },
                    mod
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground font-mono text-[9px] flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3 h-3 text-lime" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage2.isolatedNote })
                  ] })
                ] }),
                currentIdx === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.state }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.async })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 font-mono text-[10px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.clock1 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: "AUTO" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.clock2 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: "DISPATCH" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-lime/30 bg-lime/5 p-1.5 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.clock3 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime font-bold", children: "BATCH" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground font-mono text-[9px] flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3 h-3 text-lime" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage3.note })
                  ] })
                ] }),
                currentIdx === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-lime font-mono text-[9px] uppercase border-b border-bone/15 pb-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage4.state }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage4.velocity })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-1.5 font-mono text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-lime/40 bg-lime/10 p-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-xl font-bold text-lime", children: "99.9%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: t.home.storyHud.stage4.uptimeLabel })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-lime/40 bg-lime/10 p-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-display text-xl font-bold text-lime", children: "100%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] text-muted-foreground uppercase", children: t.home.storyHud.stage4.ipLabel })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-lime font-mono text-[9px] flex items-center gap-1 font-bold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.stage4.note })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-bone/15 pt-1.5 mt-3 flex items-center justify-between font-mono text-[8.5px] text-muted-foreground uppercase", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.storyHud.telemetry }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime", children: t.home.storyHud.phaseLabel.replace("{current}", String(currentIdx + 1)) })
                ] })
              ] })
            ]
          },
          activeChapter.id
        ) })
      ]
    }
  );
}
function Tag({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] md:text-[11px] tracking-widest text-muted-foreground uppercase", children });
}
function SectionHeader({
  index,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 md:mb-8 border-b border-bone/20 pb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { children: [
          "/// ",
          index
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl sm:text-2xl md:text-3xl mt-1 uppercase text-foreground", children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[9px] text-lime hidden md:inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-lime led-active" }),
        "KAI_SYSTEMS"
      ] })
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] md:text-xs text-muted-foreground mt-1.5 max-w-xl leading-relaxed", children: subtitle })
  ] });
}
function Index() {
  const {
    t
  } = useI18n();
  const {
    scrollYProgress
  } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  const [formState, setFormState] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    projectType: t.home.contactForm.projectTypes[0],
    timeline: t.home.contactForm.timelines[0],
    details: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-ink text-foreground overflow-x-hidden selection:bg-lime selection:text-ink", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed top-0 left-0 right-0 h-[2px] bg-lime z-50 origin-left", style: {
      scaleX
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DotMatrix, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 pt-8 pb-10 md:pt-12 md:pb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.home.statusTag }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 corner-ticks p-4 sm:p-6 md:p-8 border border-bone/10 bg-ink/60 backdrop-blur-md shadow-2xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ThreeBackground, { className: "opacity-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: {
              opacity: 0,
              y: -10
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.5
            }, className: "font-mono text-[11px] text-lime uppercase tracking-widest flex items-center gap-1.5 mb-3 md:mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 bg-lime led-active rounded-full" }),
              t.home.missionBrief
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
              opacity: 0,
              y: 20
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.6,
              delay: 0.1
            }, className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[0.88] uppercase tracking-tighter text-foreground", children: [
              t.home.heroHeadline1,
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              t.home.heroHeadline2,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lime glitch-hover inline-block cursor-default", children: t.home.heroHeadlineHighlight }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
              opacity: 0
            }, animate: {
              opacity: 1
            }, transition: {
              duration: 0.6,
              delay: 0.25
            }, className: "font-mono mt-4 max-w-xl text-xs sm:text-xs md:text-sm text-muted-foreground leading-relaxed", children: t.home.heroDescription }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 15
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.5,
              delay: 0.35
            }, className: "mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "terminal-hover inline-flex items-center gap-2 bg-lime px-4.5 py-2.5 sm:px-5 sm:py-3 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ink hover:bg-lime/90 transition-all tactile-shadow", children: [
                t.home.heroCtaPrimary,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "inline-flex items-center gap-1.5 border border-bone/30 bg-ink/60 px-4.5 py-2.5 sm:px-5 sm:py-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-foreground hover:border-lime hover:text-lime transition-all", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 text-lime" }),
                t.home.heroCtaSecondary
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
              opacity: 0,
              y: 20
            }, animate: {
              opacity: 1,
              y: 0
            }, transition: {
              duration: 0.6,
              delay: 0.45
            }, className: "mt-8 sm:mt-9 grid grid-cols-2 lg:grid-cols-4 gap-px bg-bone/20 border border-bone/20 overflow-hidden", children: [t.home.quickStats.stat1, t.home.quickStats.stat2, t.home.quickStats.stat3, t.home.quickStats.stat4].map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ink/90 p-2.5 sm:p-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8.5px] sm:text-[9.5px] text-muted-foreground uppercase tracking-widest", children: stat.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl sm:text-2xl text-lime mt-0.5 font-bold", children: stat.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[8.5px] sm:text-[9px] text-bone/60 mt-0.5", children: stat.sub })
            ] }, idx)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "story", className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "01", title: t.home.storyTitle, subtitle: t.home.storySubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveStorytelling, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "transformation", className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", title: t.home.transformationTitle, subtitle: t.home.transformationSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveTransformationDemo, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-3xl px-3 sm:px-5 py-10 md:py-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { children: t.home.manifestoTag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Manifesto, {}) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] md:text-xs text-muted-foreground max-w-lg mx-auto mt-4 leading-relaxed", children: t.home.manifestoSub })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "03", title: t.home.philosophyTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-3.5 md:gap-4.5", children: t.home.philosophyCards.map((card, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 12
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.3,
          delay: idx * 0.08
        }, className: "border border-bone/20 bg-ink/70 p-4 md:p-5 flex flex-col justify-between hover:border-lime/40 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[8.5px] sm:text-[9px] text-lime px-1.5 py-0.5 bg-lime/10 border border-lime/30 inline-block uppercase tracking-wider mb-2.5", children: card.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base sm:text-lg uppercase mb-1.5 text-foreground", children: card.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground leading-relaxed", children: card.desc })
        ] }) }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative z-10 mx-auto max-w-7xl px-3 sm:px-5 lg:px-6 py-8 md:py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "04", title: t.home.contactTitle, subtitle: t.home.contactSubtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_300px] gap-4.5 md:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/80 p-4 sm:p-5 md:p-6 corner-ticks relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-tl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tick-br" }),
            submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 text-center space-y-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 bg-lime/10 border-2 border-lime text-lime flex items-center justify-center mx-auto mb-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl uppercase text-foreground", children: t.home.contactForm.submittedTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-muted-foreground max-w-sm mx-auto", children: t.home.contactForm.successMsg }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmitted(false), className: "mt-3 border border-bone/30 px-4 py-1.5 font-mono text-[11px] uppercase hover:border-lime text-lime cursor-pointer", children: t.home.contactForm.newInquiryBtn })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-3 sm:space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formState.name, onChange: (e) => setFormState({
                  ...formState,
                  name: e.target.value
                }), placeholder: t.home.contactForm.namePlaceholder, className: "w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: formState.email, onChange: (e) => setFormState({
                  ...formState,
                  email: e.target.value
                }), placeholder: t.home.contactForm.emailPlaceholder, className: "w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formState.company, onChange: (e) => setFormState({
                  ...formState,
                  company: e.target.value
                }), placeholder: t.home.contactForm.companyPlaceholder, className: "w-full bg-ink border border-bone/25 px-3 py-2 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-[9px] uppercase text-muted-foreground mb-1", children: t.home.contactForm.projectTypeLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5", children: t.home.contactForm.projectTypes.map((type) => {
                  const active = formState.projectType === type;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormState({
                    ...formState,
                    projectType: type
                  }), className: `p-1.5 sm:p-2 text-left border font-mono text-[10.5px] transition-colors cursor-pointer ${active ? "border-lime bg-lime/10 text-lime font-bold" : "border-bone/20 bg-ink hover:border-bone/40 text-muted-foreground"}`, children: type }, type);
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block font-mono text-[9px] uppercase text-muted-foreground mb-1", children: t.home.contactForm.timelineLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-1.5", children: t.home.contactForm.timelines.map((tl) => {
                  const active = formState.timeline === tl;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormState({
                    ...formState,
                    timeline: tl
                  }), className: `p-1.5 text-center border font-mono text-[10.5px] transition-colors cursor-pointer ${active ? "border-lime bg-lime/10 text-lime font-bold" : "border-bone/20 bg-ink hover:border-bone/40 text-muted-foreground"}`, children: tl }, tl);
                }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 2.5, required: true, value: formState.details, onChange: (e) => setFormState({
                ...formState,
                details: e.target.value
              }), placeholder: t.home.contactForm.detailsPlaceholder, className: "w-full bg-ink border border-bone/25 p-2.5 font-mono text-[11px] text-foreground focus:border-lime focus:outline-none" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-lime text-ink py-2.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest hover:bg-lime/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50", children: isSubmitting ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.contactForm.submittingBtn }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-3.5 h-3.5" }),
                t.home.contactForm.submitBtn
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/60 p-3.5 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-lime font-mono text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.contactForm.directEmailLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:contact@kailabs.io", className: "font-mono text-xs text-foreground hover:text-lime block", children: "contact@kailabs.io" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] text-muted-foreground", children: t.home.contactForm.slaNote })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-bone/20 bg-ink/60 p-3.5 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-lime font-mono text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.home.contactForm.headquartersLabel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[11px] text-foreground uppercase", children: t.home.contactForm.remoteLocation }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 font-mono text-[9px] text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3 text-lime" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "UTC-5 / UTC-3 / UTC+1" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
