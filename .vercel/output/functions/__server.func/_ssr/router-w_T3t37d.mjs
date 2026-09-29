import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useRouterState, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/motion.mjs";
import { A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const en = {
  meta: {
    home: {
      title: "KAI LABS // AI-Native Software Engineering Consultancy",
      description: "We build bespoke software platforms and automate business operations with autonomous AI engines and background worker systems."
    },
    cases: {
      title: "KAI LABS // Projects & Case Studies",
      description: "Production systems engineered by KAI LABS: Oficia Platform marketplace and high-concurrency automation engines."
    },
    pricing: {
      title: "KAI LABS // Engagement Models",
      description: "High-velocity engineering models: Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods."
    },
    integrations: {
      title: "KAI LABS // Architecture & Stack",
      description: "The AI-native architecture blueprint: Modular monoliths, pg-boss background worker clocks, and strict type safety."
    },
    dashboard: {
      title: "KAI LABS // Telemetry Console",
      description: "Real-time engineering telemetry of AI-native software pipelines and worker performance metrics."
    }
  },
  nav: {
    brandSubtitle: "AI-NATIVE STUDIO",
    services: "SERVICES",
    architecture: "ARCHITECTURE",
    cases: "PROJECTS",
    engagement: "MODELS",
    console: "CONSOLE",
    briefCta: "START PROJECT",
    uplink: "SYSTEMS // ONLINE",
    card: "// POD_01"
  },
  home: {
    statusTag: "> STATUS: ACTIVE // Q4 AVAILABILITY",
    missionBrief: "/// AI-NATIVE SOFTWARE ENGINEERING & AUTOMATION",
    heroHeadline1: "WE BUILD",
    heroHeadline2: "AI-NATIVE",
    heroHeadlineHighlight: "ENTERPRISES",
    heroDescription: "We engineer bespoke platforms and automate core business workflows using event engines and autonomous workers. 3.8x delivery speed with zero technical debt.",
    heroCtaPrimary: "Start Project",
    heroCtaSecondary: "View Case: Oficia",
    quickStats: {
      stat1: {
        label: "VELOCITY",
        val: "3.8X",
        sub: "Faster vs traditional"
      },
      stat2: {
        label: "AUTOMATION",
        val: "85%+",
        sub: "Manual tasks automated"
      },
      stat3: {
        label: "ARCHITECTURE",
        val: "MODULAR",
        sub: "Zero technical debt"
      },
      stat4: {
        label: "FLAGSHIP",
        val: "OFICIA",
        sub: "Marketplace in production"
      }
    },
    manifestoTag: "/// 01 — THESIS",
    manifestoWords: "We don't build legacy software — we turn enterprises into autonomous AI-native engines.".split(
      " "
    ),
    manifestoSub: "We combine architectural rigor with AI-native workflows to ship mission-critical software at unprecedented speed.",
    servicesSectionTag: "/// 02 — CAPABILITIES",
    servicesSectionTitle: "Engineering Services",
    servicesSectionSubtitle: "From architecture to production: scalable platforms, process automation, and dedicated pods.",
    servicesCapabilitiesBadge: "ENGINEERING CAPABILITIES",
    servicesList: [
      {
        id: "ai-products",
        number: "01",
        title: "AI-Native Software Engineering",
        shortDesc: "High-performance web and transactional platforms.",
        description: "Clean modular monoliths, end-to-end strict typing, and architectures built for high concurrency.",
        deliverables: [
          "Next.js & React Web Platforms",
          "Modular Monolith Architecture",
          "PostgreSQL & Drizzle ORM Type-Safe",
          "Automated Testing & CI/CD"
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind", "Docker"]
      },
      {
        id: "process-automation",
        number: "02",
        title: "Process Automation & Workers",
        shortDesc: "Replacing manual tasks with autonomous background engines.",
        description: "Async queues and worker clocks that handle expirations, settlements, and alerts without human lag.",
        deliverables: [
          "Background Workers (pg-boss / queues)",
          "WhatsApp, Slack & Webhook Pipelines",
          "Automated Reconciliation & Billing",
          "Real-Time Telemetry & Handoff"
        ],
        technologies: ["pg-boss", "Redis", "WhatsApp API", "Stripe", "Webhooks", "Node.js"]
      },
      {
        id: "ai-systems",
        number: "03",
        title: "AI Systems & Agents",
        shortDesc: "Enterprise LLM integration and deterministic workflows.",
        description: "Agents for unstructured document extraction, domain RAG, and automated decisions with strict guardrails.",
        deliverables: [
          "Domain RAG for Your Business",
          "Document & DM Extraction Agents",
          "Intelligent Request Routing",
          "Enterprise Safety & Zero Hallucination"
        ],
        technologies: ["OpenAI", "Anthropic", "LangChain", "pgvector", "FastAPI", "Python"]
      },
      {
        id: "dedicated-pods",
        number: "04",
        title: "Dedicated AI Engineering Pods",
        shortDesc: "Senior engineering squads embedded in your roadmap.",
        description: "High-velocity development cells shipping weekly with direct communication and 100% client-owned code.",
        deliverables: [
          "2 to 4 Senior Engineers Squad",
          "Weekly Sprints & Continuous Demos",
          "Direct Slack/Discord Collaboration",
          "Full Code Ownership (100% IP)"
        ],
        technologies: ["Git", "GitHub Actions", "Docker", "AWS / Vercel", "Agile"]
      }
    ],
    servicesCta: {
      title: "Ready to initiate your platform development?",
      subtitle: "Schedule a technical discovery call to review architecture and project scope.",
      btn: "START TECHNICAL SCOPING ▶"
    },
    flagshipTag: "/// 03 — FLAGSHIP SPOTLIGHT",
    flagshipTitle: "Oficia Platform",
    flagshipSubtitle: "A production transactional services marketplace designed and built by KAI LABS.",
    flagshipProject: {
      name: "OFICIA PLATFORM",
      category: "Transactional Marketplace // El Salvador (USD)",
      summary: "Full marketplace platform built as an 8-domain modular monolith with pg-boss background workers and Wompi payments.",
      architectureTitle: "Modular Monolith (8 Domain Modules)",
      architectureDesc: "Strict boundaries across Identity, Catalog, Availability, Bookings, Payments, Reputation, Messaging, and Notifications.",
      stackTitle: "Production Tech Stack",
      keyResults: [
        { label: "DOMAINS", val: "8 MODULES" },
        { label: "WORKERS", val: "4 CLOCKS" },
        { label: "DISPATCH", val: "100% AUTO" },
        { label: "TYPE SAFETY", val: "STRICT TS" }
      ],
      githubBtn: "View on GitHub",
      viewCaseBtn: "Read Full Case",
      specs: [
        { label: "Framework", value: "Next.js 15 (App Router, Server Actions)" },
        { label: "Database", value: "PostgreSQL 16 + Drizzle ORM" },
        { label: "Workers", value: "pg-boss (4 Event & Cron Clocks)" },
        { label: "Authentication", value: "Better Auth with Domain RBAC" },
        { label: "Payments", value: "Wompi Gateway (Factory Mock & Live)" },
        { label: "Messaging", value: "WhatsApp API & Resend" }
      ]
    },
    transformationTag: "/// 04 — PROCESS",
    transformationTitle: "Transformation Roadmap",
    transformationSubtitle: "A structured 4-phase roadmap to modernize operations and deploy autonomous systems.",
    transformationLifecycleLabel: "Consultancy Transformation Lifecycle",
    transformationSteps: [
      {
        id: "audit",
        phase: "PHASE 01",
        title: "Operational Audit",
        desc: "Mapping bottlenecks and designing the highest ROI automation roadmap.",
        status: "COMPLETED",
        metric: "100% Bottlenecks Mapped",
        tech: ["Process Mining", "Technical Review"]
      },
      {
        id: "design",
        phase: "PHASE 02",
        title: "Modular Architecture",
        desc: "Designing clean data schemas, API contracts, and domain boundaries.",
        status: "COMPLETED",
        metric: "8 Isolated Domains",
        tech: ["Drizzle ORM", "Event Storming"]
      },
      {
        id: "build",
        phase: "PHASE 03",
        title: "Accelerated Build",
        desc: "Sprint delivery with AI-assisted tooling and end-to-end type safety.",
        status: "ACTIVE",
        metric: "3.8x Velocity",
        tech: ["Next.js", "TypeScript", "pg-boss"]
      },
      {
        id: "orchestrate",
        phase: "PHASE 04",
        title: "Deploy & Telemetry",
        desc: "Production release with autonomous workers and real-time monitoring.",
        status: "RUNNING",
        metric: "99.9% Uptime",
        tech: ["Docker", "PostgreSQL", "Wompi"]
      }
    ],
    transformationTerminal: {
      title: "// SYSTEM_AUDIT_RUNNER.sh",
      status: "READY",
      runAuditBtn: "RUN_SYSTEM_AUDIT",
      runningMsg: "Compiling architecture review and automation pipeline...",
      completedMsg: "Audit completed: Platform ready for AI-native deployment."
    },
    storyTag: "/// 05 — INTERACTIVE EVOLUTION",
    storyTitle: "The AI-Native Evolution",
    storySubtitle: "An interactive journey through the 4 stages of technological maturity.",
    storyControls: {
      auto: "AUTO (6s)",
      paused: "PAUSED",
      prevAria: "Previous chapter",
      nextAria: "Next chapter"
    },
    storyHud: {
      telemetry: "HUD TELEMETRY",
      phaseLabel: "PHASE 0{current} OF 04",
      stage1: {
        state: "STATE: FRAGMENTATION",
        bottleneck: "BOTTLENECK",
        manualTitle: "MANUAL PROCESSES",
        manualDesc: "Slow validations via email and WhatsApp.",
        disconnectTitle: "DISCONNECTION",
        disconnectDesc: "Isolated spreadsheets without synchronization.",
        avgTime: "Average cycle time: 24 to 48 hours"
      },
      stage2: {
        state: "STATE: MODULAR MONOLITH",
        typeSafe: "TYPE-SAFE",
        modules: [
          "identity",
          "catalog",
          "availability",
          "bookings",
          "payments",
          "reputation",
          "messaging",
          "notifications"
        ],
        isolatedNote: "100% isolated domain contracts in Drizzle ORM"
      },
      stage3: {
        state: "STATE: ACTIVE WORKERS",
        async: "ASYNCHRONOUS",
        clock1: "Clock 01: Caducity (24h)",
        clock2: "Clock 02: WhatsApp Alert (20h)",
        clock3: "Clock 03: Weekly Settlement Batch",
        note: "pg-boss running background jobs with zero latency"
      },
      stage4: {
        state: "STATE: AI-NATIVE ENTERPRISE",
        velocity: "3.8X VELOCITY",
        uptimeLabel: "OPERATIONAL UPTIME",
        ipLabel: "CLIENT OWNERSHIP",
        note: "FULLY AUTONOMOUS AND SCALABLE PLATFORM"
      }
    },
    storyChapters: [
      {
        id: "legacy",
        chapter: "CHAPTER 01",
        title: "The Fragmented State",
        badge: "LEGACY // HIGH FRICTION",
        state: "Manual Operation",
        description: "Disconnected spreadsheets, manual appointment validation, and 24h+ response delays on critical requests.",
        metricValue: "24h+",
        metricLabel: "Operational Latency",
        techPill: "Spreadsheets · Manual Workflows"
      },
      {
        id: "modular",
        chapter: "CHAPTER 02",
        title: "Modular Decoupling",
        badge: "ARCHITECTURE // TYPE-SAFE",
        state: "Modular Monolith",
        description: "Isolating business logic into 8 independent domains with strict end-to-end typing in Next.js and Drizzle ORM.",
        metricValue: "8 Domains",
        metricLabel: "Isolated Boundaries",
        techPill: "TypeScript · Drizzle ORM · PostgreSQL"
      },
      {
        id: "automation",
        chapter: "CHAPTER 03",
        title: "Async Worker Engines",
        badge: "ENGINES // ASYNCHRONOUS",
        state: "Autonomous Workers",
        description: "pg-boss clocks running request expiration, automated WhatsApp warnings, and weekly provider payouts.",
        metricValue: "100%",
        metricLabel: "Background Automated",
        techPill: "pg-boss · Redis · WhatsApp Webhooks"
      },
      {
        id: "native",
        chapter: "CHAPTER 04",
        title: "The AI-Native Enterprise",
        badge: "FINAL STATE // 3.8X VELOCITY",
        state: "Intelligent Platform",
        description: "Autonomous systems running 24/7 with real-time observability, 99.9% uptime, and zero technical debt.",
        metricValue: "3.8X",
        metricLabel: "Delivery Velocity",
        techPill: "Next.js 15 · Event Clocks · Wompi Gateway"
      }
    ],
    philosophyTag: "/// 06 — STANDARDS",
    philosophyTitle: "Engineering Standards",
    philosophyCards: [
      {
        title: "Modular Architecture",
        badge: "ZERO DEBT",
        desc: "Clean monoliths with strict domain boundaries. Maintainable code without bloat."
      },
      {
        title: "Autonomous Workers",
        badge: "BACKGROUND ENGINES",
        desc: "Background jobs handle expirations, settlements, and notifications automatically."
      },
      {
        title: "Direct Access",
        badge: "NO MIDDLEMEN",
        desc: "Communicate directly with senior engineers building your platform."
      }
    ],
    contactTag: "/// 06 — CONTACT",
    contactTitle: "Let's Build Your Platform",
    contactSubtitle: "Tell us about your initiative. We'll reply with a technical architecture brief within 24 hours.",
    contactForm: {
      namePlaceholder: "Your name and role",
      emailPlaceholder: "Work email",
      companyPlaceholder: "Company or organization",
      projectTypeLabel: "Project type",
      projectTypes: [
        "Bespoke Web Platform",
        "Process Automation",
        "AI Agent Integration",
        "Dedicated Engineering Pod"
      ],
      timelineLabel: "Target timeline",
      timelines: ["< 1 month", "1 - 3 months", "3 - 6 months", "Exploratory"],
      detailsPlaceholder: "Briefly outline your project scope or technical needs...",
      submitBtn: "SUBMIT INQUIRY ▶",
      submittingBtn: "TRANSMITTING...",
      submittedTitle: "INQUIRY TRANSMITTED",
      newInquiryBtn: "New Inquiry",
      successMsg: "Inquiry received. Our engineering leads will reach out within 24 hours.",
      directEmailLabel: "Direct Contact",
      headquartersLabel: "Operations",
      slaNote: "Technical response in < 24h.",
      remoteLocation: "Remote Pods · Americas & Europe"
    },
    footer: {
      endOfFile: "/// END OF FILE",
      contact: "CONTACT",
      status: "STATUS",
      origin: "ORIGIN",
      allSystemsNominal: "ALL SYSTEMS NOMINAL",
      responseSubtitle: "AI-Native Software Engineering Consultancy",
      builtBy: "ENGINEERING & OPS",
      brandOps: "KAI LABS STUDIO",
      copyright: "© {year} KAI LABS. ALL RIGHTS RESERVED."
    }
  },
  cases: {
    tag: "/// VERIFIED PROJECTS",
    title: "Case Studies",
    subtitle: "> Production platforms and automation engines engineered by KAI LABS.",
    filterAll: "ALL",
    flagshipBadge: "FLAGSHIP",
    keyMetric: "KEY METRICS",
    architectureTitle: "ARCHITECTURE",
    stackTitle: "STACK",
    challengeTitle: "CHALLENGE",
    solutionTitle: "SOLUTION",
    consoleTitle: "// SYSTEM TELEMETRY",
    githubLinkText: "View on GitHub",
    streamReplayBadge: "LIVE REPLAY",
    telemetryStreaming: "STREAMING TELEMETRY...",
    items: [
      {
        id: "oficia-platform",
        badge: "TRANSACTIONAL MARKETPLACE",
        title: "Oficia Platform",
        subtitle: "High-Concurrency Service Booking Engine",
        sector: "MARKETPLACE & FINTECH · USD",
        summary: "8-domain modular monolith with pg-boss async workers for weekly payouts, appointment caducity, and WhatsApp notifications.",
        challenge: "Building a marketplace with complex domain rules: minor safety (ADR 0004), 24h request expiration, weekly payout batching, and Wompi payments.",
        solution: "Modular monolith on Next.js 15, Drizzle ORM, and PostgreSQL 16 with 4 pg-boss worker clocks and abstract payment factory.",
        architecture: {
          pattern: "Domain Modular Monolith with Async Workers",
          modules: [
            "identity (RBAC + Better Auth)",
            "catalog (Dynamic Services)",
            "availability (Schedule Engine)",
            "bookings (State Machine)",
            "payments (Wompi + Payouts)",
            "reputation (Verified Reviews)",
            "messaging (In-App Chat)",
            "notifications (WhatsApp / Resend)"
          ],
          stack: [
            "Next.js 15 (App Router)",
            "PostgreSQL 16 + Drizzle ORM",
            "pg-boss (Async Workers)",
            "Better Auth (RBAC)",
            "Wompi Gateway (Factory)",
            "Tailwind CSS v4"
          ]
        },
        metrics: {
          primary: { value: "100%", label: "AUTOMATED PAYOUTS" },
          secondary: { value: "8 Modules", label: "ISOLATED DOMAINS" }
        },
        githubUrl: "https://github.com/kailabs-workspace/oficia-platform",
        liveUrl: "https://github.com/kailabs-workspace/oficia-platform",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
        highlights: [
          "8 Isolated domain modules with strict type contracts",
          "4 pg-boss worker clocks (expiry, WhatsApp alerts, autocompletion, payouts)",
          "100% strict type safety from SQL to React",
          "Wompi payment gateway with local mock engine"
        ],
        consoleLogs: [
          { who: "DEV", text: "Drizzle schema initialized: 19 relational tables verified." },
          { who: "SYSTEM", text: "pg-boss worker online: 4 background clock queues active." },
          { who: "AI_AGENT", text: "Booking #4082 created: time slot held for 15 min." },
          { who: "SYSTEM", text: "Wompi payment captured. WhatsApp notification dispatched." },
          { who: "KAI", text: "Weekly settlement payout batch generated automatically." }
        ]
      }
    ]
  },
  pricing: {
    tag: "/// ENGAGEMENT MODELS",
    title: "How We Collaborate",
    subtitle: "> Transparent, high-velocity engineering models tailored to your roadmap.",
    statusReady: "AVAILABLE",
    idealForLabel: "IDEAL FOR",
    deliverablesLabel: "KEY DELIVERABLES",
    ctaBtn: "BOOK CONSULTATION ▶",
    customNote: "100% client-owned code, zero proprietary lock-in, and direct access to senior engineers.",
    guarantee: "SENIOR ENGINEERS DIRECT · CLEAN CODE · 100% IP OWNERSHIP",
    guaranteeTitle: "// CODE GUARANTEE",
    ipTitle: "// INTELLECTUAL PROPERTY",
    models: [
      {
        code: "MODEL_01",
        name: "TRANSFORMATION SPRINT",
        tagline: "Bottleneck modernization",
        timeline: "2 to 4 Weeks",
        idealFor: "Companies looking to validate automations with a rapid production prototype.",
        deliverables: [
          "Process & Stack Audit",
          "Working Production Prototype",
          "System Blueprint & DB Schema",
          "ROI Model & Roadmap"
        ]
      },
      {
        code: "MODEL_02",
        name: "END-TO-END BUILD",
        tagline: "New platform launches",
        timeline: "6 to 12 Weeks",
        featured: true,
        idealFor: "Startups and enterprises building a complete transactional digital platform.",
        deliverables: [
          "Next.js & TypeScript Modular Monolith",
          "PostgreSQL + Drizzle Database",
          "Autonomous Background Workers",
          "Payment, Auth & Notification Integration",
          "100% IP Ownership & Cloud Deployment"
        ]
      },
      {
        code: "MODEL_03",
        name: "DEDICATED AI POD",
        tagline: "Continuous roadmap acceleration",
        timeline: "Quarterly Retainer",
        idealFor: "Teams needing a senior squad to accelerate delivery velocity by 3x–5x.",
        deliverables: [
          "2 to 4 Senior Engineers Squad",
          "Weekly Sprints & Continuous CI/CD",
          "Direct Slack/Discord Access",
          "Code Reviews & Automated Testing"
        ]
      }
    ],
    comparison: {
      title: "KAI LABS vs Traditional Consultancies",
      columns: ["Dimension", "Traditional Consultancies", "KAI LABS AI-Native Studio"],
      rows: [
        {
          feature: "Delivery Velocity",
          traditional: "Slow, sequential sprints with junior devs",
          kaiLabs: "3.8x faster with senior leads and AI-native workflows"
        },
        {
          feature: "Architecture",
          traditional: "Over-engineered microservices or legacy code",
          kaiLabs: "Clean modular monoliths with strict typing"
        },
        {
          feature: "Automation",
          traditional: "Manual glue code and offshore staffing",
          kaiLabs: "Autonomous background worker engines and event pipelines"
        },
        {
          feature: "Communication",
          traditional: "Layers of non-technical account managers",
          kaiLabs: "Direct engineering collaboration with the builders"
        },
        {
          feature: "Code Ownership",
          traditional: "Vendor lock-in or licensing fees",
          kaiLabs: "100% client IP, standard open-source stack"
        }
      ]
    }
  },
  integrations: {
    tag: "/// ARCHITECTURE & STACK",
    title: "Architecture Blueprint",
    subtitlePre: "We design ",
    subtitleHighlight: "robust software systems",
    subtitlePost: " with modular monoliths, autonomous workers, and strict type safety.",
    agentCore: "KAI LABS ARCHITECTURE",
    routingAll: "8 ISOLATED DOMAINS",
    inProductionBadge: "IN PRODUCTION",
    pillarPrefix: "PILLAR 0",
    lifecycleTag: "/// METHODOLOGY",
    lifecycleTitle: "Transformation Lifecycle",
    bottomPrompt: "Ready to modernize your architecture to AI-Native?",
    bottomCtaBtn: "START TECHNICAL DISCOVERY",
    pillars: {
      ingest: {
        label: "01 INGEST & EVENTS",
        desc: "Webhooks · Multi-Channel APIs · Input Queues"
      },
      reason: {
        label: "02 DOMAIN SERVICES",
        desc: "Isolated Services · Deterministic Business Logic"
      },
      act: {
        label: "03 AUTONOMOUS WORKERS",
        desc: "pg-boss Clocks · Payout Batches · Alerts"
      }
    },
    stackLayers: [
      {
        category: "APPLICATION & FRONTEND",
        title: "Modern Full-Stack Interfaces",
        description: "Fast server-rendered web applications with strict TypeScript typing and accessible components.",
        tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "shadcn/ui", "TanStack Router"]
      },
      {
        category: "DATA & PERSISTENCE",
        title: "Type-Safe Relational Databases",
        description: "PostgreSQL with declarative Drizzle ORM migrations, ensuring transactional consistency.",
        tech: ["PostgreSQL 16", "Drizzle ORM", "pgvector", "Drizzle Kit"]
      },
      {
        category: "WORKERS & AUTOMATION",
        title: "Autonomous Event Engines",
        description: "Transactional queues managing expirations, settlements, and notifications with idempotent retries.",
        tech: ["pg-boss", "Redis Queues", "Cron Schedulers", "Dead-Letter Queues"]
      },
      {
        category: "PAYMENTS & SECURITY",
        title: "Security & Transactional Billing",
        description: "RBAC authentication, verified webhooks, and payment gateways with local and international support.",
        tech: ["Better Auth (RBAC)", "Wompi Gateway", "Stripe", "HMAC Webhooks"]
      }
    ],
    processLifecycle: [
      {
        step: "01",
        title: "Domain Isolation",
        desc: "Independent modules with strictly-typed contracts."
      },
      {
        step: "02",
        title: "Background Workers",
        desc: "Async tasks handled by pg-boss clocks off the main thread."
      },
      {
        step: "03",
        title: "Multi-Channel Triggers",
        desc: "Instant alerts via WhatsApp, transactional email, and console."
      },
      {
        step: "04",
        title: "Continuous Observability",
        desc: "Real-time monitoring ensuring 99.9% operational reliability."
      }
    ]
  },
  dashboard: {
    tag: "/// ENGINEERING TELEMETRY",
    title: "Engineering Console",
    subtitle: "> Real-time telemetry of pipelines, workers, and system health.",
    uplinkOk: "ALL SYSTEMS NOMINAL // ● GRID ONLINE",
    systemStatusLabel: "SYSTEM HEALTH",
    systemStatusVal: "100% OPERATIONAL",
    stats: {
      velocity: {
        label: "VELOCITY",
        val: "3.8X",
        sub: "Vs traditional consultancies"
      },
      automation: {
        label: "AUTOMATION",
        val: "94.2%",
        sub: "Autonomous operations"
      },
      status: {
        label: "ARCHITECTURE",
        val: "MODULAR",
        sub: "8 Domain modules"
      }
    },
    liveFeedTitle: "// LIVE_EVENT_STREAM.log",
    streaming: "STREAM ACTIVE",
    inboundLabel: "> EVENT:",
    responseLabel: "> DISPATCH:",
    awaiting: "Awaiting system events...",
    coreVersion: "Engine: KAI_STUDIO_v2.4",
    bufferStatus: "Cluster: Healthy",
    pipelinesTitle: "// Autonomous Accelerators",
    toggles: {
      codeGen: "AI-Native Scaffolding",
      agenticQa: "Domain QA Verification",
      processOrchestrator: "pg-boss Workers"
    },
    telemetryTitle: "// System Metrics",
    telemetryLoad: "Cluster Load",
    metrics: {
      architectureLabel: "> architecture :",
      architectureVal: "MODULAR MONOLITH",
      methodologyLabel: "> methodology :",
      methodologyVal: "AGILE AI-NATIVE",
      codeQualityLabel: "> type safety :",
      codeQualityVal: "100% STRICT TS",
      activePipelinesLabel: "> accelerators :"
    },
    eventPool: [
      {
        ch: "PIPELINE",
        who: "oficia-core",
        msg: "Generating weekly payout batch for 42 professionals...",
        reply: "Completed in 312ms. Settlement batch generated."
      },
      {
        ch: "AGENT",
        who: "booking-clock",
        msg: "Checking expiration window for unconfirmed booking #9102...",
        reply: "Expired idempotently. Time slot returned to availability grid."
      },
      {
        ch: "DEPLOY",
        who: "ci-pipeline",
        msg: "Running strict typecheck and integration tests across 8 modules...",
        reply: "Passed: 0 errors, 19 tables verified in Drizzle."
      },
      {
        ch: "DATABASE",
        who: "pg-boss-worker",
        msg: "WhatsApp notification job dequeued...",
        reply: "Appointment reminder dispatched to customer (+503 7••• ••••)."
      },
      {
        ch: "PIPELINE",
        who: "auth-gateway",
        msg: "Domain RBAC check for /admin/settlements...",
        reply: "Access authorized for Admin role."
      }
    ]
  },
  notFound: {
    title: "404",
    subtitle: "Route Not Found",
    desc: "The requested resource does not exist in KAI LABS.",
    goHome: "Return Home"
  },
  error: {
    title: "System Exception",
    desc: "An exception occurred during execution. Please try again.",
    tryAgain: "Retry",
    goHome: "Return Home"
  }
};
const es = {
  meta: {
    home: {
      title: "KAI LABS // Consultora de Ingeniería de Software AI-Native",
      description: "Convertimos empresas en organizaciones AI-native. Diseñamos plataformas transaccionales a medida y automatizamos procesos con agentes y workers autónomos."
    },
    cases: {
      title: "KAI LABS // Proyectos & Casos de Estudio",
      description: "Sistemas en producción construidos por KAI LABS: Marketplace Oficia y motores de automatización de alta concurrencia."
    },
    pricing: {
      title: "KAI LABS // Modelos de Trabajo",
      description: "Modelos de ingeniería de alta velocidad: Sprints de Transformación, Desarrollo Punta a Punta y Pods Dedicados."
    },
    integrations: {
      title: "KAI LABS // Arquitectura & Stack",
      description: "Plano de arquitectura AI-native: Monolitos modulares, workers autónomos en segundo plano y tipado estricto."
    },
    dashboard: {
      title: "KAI LABS // Consola de Telemetría",
      description: "Telemetría en tiempo real de pipelines de entrega de software AI-native y métricas de rendimiento."
    }
  },
  nav: {
    brandSubtitle: "ESTUDIO AI-NATIVE",
    services: "SERVICIOS",
    architecture: "ARQUITECTURA",
    cases: "PROYECTOS",
    engagement: "MODELOS",
    console: "CONSOLA",
    briefCta: "INICIAR PROYECTO",
    uplink: "SISTEMAS // ONLINE",
    card: "// POD_01"
  },
  home: {
    statusTag: "> ESTADO: ACTIVO // DISPONIBILIDAD Q4",
    missionBrief: "/// INGENIERÍA DE SOFTWARE & AUTOMATIZACIÓN AI-NATIVE",
    heroHeadline1: "CONVERTIMOS",
    heroHeadline2: "EMPRESAS EN",
    heroHeadlineHighlight: "AI-NATIVE",
    heroDescription: "Diseñamos plataformas a medida y automatizamos procesos críticos de negocio mediante motores de eventos y workers autónomos. Velocidad de entrega 3.8x sin deuda técnica.",
    heroCtaPrimary: "Iniciar Proyecto",
    heroCtaSecondary: "Ver Caso: Oficia",
    quickStats: {
      stat1: {
        label: "VELOCIDAD",
        val: "3.8X",
        sub: "Más rápido vs tradicional"
      },
      stat2: {
        label: "AUTOMATIZACIÓN",
        val: "85%+",
        sub: "De procesos manuales"
      },
      stat3: {
        label: "ARQUITECTURA",
        val: "MODULAR",
        sub: "Cero deuda técnica"
      },
      stat4: {
        label: "INSIGNIA",
        val: "OFICIA",
        sub: "Marketplace en producción"
      }
    },
    manifestoTag: "/// 01 — TESIS",
    manifestoWords: "No construimos software heredado — convertimos empresas en motores autónomos AI-native.".split(
      " "
    ),
    manifestoSub: "Combinamos rigor arquitectónico con flujos nativos de IA para construir productos críticos a una velocidad sin precedentes.",
    servicesSectionTag: "/// 02 — CAPACIDADES",
    servicesSectionTitle: "Servicios de Ingeniería",
    servicesSectionSubtitle: "De la arquitectura a producción: plataformas escalables, automatización de procesos y pods de desarrollo.",
    servicesCapabilitiesBadge: "CAPACIDADES DE INGENIERÍA",
    servicesList: [
      {
        id: "ai-products",
        number: "01",
        title: "Ingeniería de Software AI-Native",
        shortDesc: "Plataformas web y transaccionales de alto rendimiento.",
        description: "Monolitos modulares limpios, tipado estricto extremo a extremo y arquitecturas preparadas para alta concurrencia.",
        deliverables: [
          "Plataformas Web en Next.js & React",
          "Arquitectura de Monolito Modular",
          "PostgreSQL & Drizzle ORM Type-Safe",
          "Pruebas Automatizadas & CI/CD"
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind", "Docker"]
      },
      {
        id: "process-automation",
        number: "02",
        title: "Automatización de Procesos & Workers",
        shortDesc: "Reemplazo de tareas manuales con motores de eventos autónomos.",
        description: "Colas asíncronas y relojes en segundo plano que ejecutan caducidades, liquidaciones y alertas sin intervención humana.",
        deliverables: [
          "Workers en Fondo (pg-boss / colas)",
          "Pipelines en WhatsApp, Slack & Webhooks",
          "Conciliación & Cobros Automatizados",
          "Alertas en Tiempo Real & Handoff"
        ],
        technologies: ["pg-boss", "Redis", "WhatsApp API", "Stripe", "Webhooks", "Node.js"]
      },
      {
        id: "ai-systems",
        number: "03",
        title: "Sistemas de IA & Agentes",
        shortDesc: "Integración empresarial de LLMs y flujos deterministas.",
        description: "Agentes para extracción de datos no estructurados, RAG a medida y toma de decisiones con guardrails estrictos.",
        deliverables: [
          "RAG Especializado para tu Negocio",
          "Agentes de Extracción Documental",
          "Enrutamiento Inteligente de Solicitudes",
          "Guardrails de Seguridad & Cero Alucinación"
        ],
        technologies: ["OpenAI", "Anthropic", "LangChain", "pgvector", "FastAPI", "Python"]
      },
      {
        id: "dedicated-pods",
        number: "04",
        title: "Pods Dedicados de Ingeniería",
        shortDesc: "Squads senior integrados directamente a tu roadmap.",
        description: "Células de desarrollo de alto impacto que entregan software cada semana con comunicación directa y código 100% de tu propiedad.",
        deliverables: [
          "Squad de 2 a 4 Ingenieros Senior",
          "Entregas Semanales & Demos Continuas",
          "Comunicación Directa en Slack/Discord",
          "Propiedad Total del Código (100% IP)"
        ],
        technologies: ["Git", "GitHub Actions", "Docker", "AWS / Vercel", "Agile"]
      }
    ],
    servicesCta: {
      title: "¿Listo para iniciar tu desarrollo?",
      subtitle: "Agenda un discovery técnico para analizar la arquitectura y alcance de tu plataforma.",
      btn: "INICIAR SCOPING TÉCNICO ▶"
    },
    flagshipTag: "/// 03 — PROYECTO INSIGNIA",
    flagshipTitle: "Oficia Platform",
    flagshipSubtitle: "Marketplace transaccional de servicios profesionales diseñado y desarrollado por KAI LABS.",
    flagshipProject: {
      name: "PLATAFORMA OFICIA",
      category: "Marketplace Transaccional // El Salvador (USD)",
      summary: "Plataforma completa construida como un monolito modular de 8 dominios con workers asíncronos en pg-boss y pasarela de pago Wompi.",
      architectureTitle: "Monolito Modular (8 Módulos de Dominio)",
      architectureDesc: "Fronteras estrictas entre Identidad, Catálogo, Disponibilidad, Reservas, Pagos, Reputación, Mensajería y Notificaciones.",
      stackTitle: "Stack en Producción",
      keyResults: [
        { label: "DOMAINS", val: "8 MODULES" },
        { label: "WORKERS", val: "4 CLOCKS" },
        { label: "DISPATCH", val: "100% AUTO" },
        { label: "TYPE SAFETY", val: "STRICT TS" }
      ],
      githubBtn: "Ver en GitHub",
      viewCaseBtn: "Ver Caso Completo",
      specs: [
        { label: "Framework", value: "Next.js 15 (App Router, Server Actions)" },
        { label: "Base de Datos", value: "PostgreSQL 16 + Drizzle ORM" },
        { label: "Workers", value: "pg-boss (4 Relojes de Eventos)" },
        { label: "Autenticación", value: "Better Auth con RBAC de Dominio" },
        { label: "Pagos", value: "Wompi Gateway (Factory Mock & Live)" },
        { label: "Mensajería", value: "WhatsApp API & Resend" }
      ]
    },
    transformationTag: "/// 04 — PROCESO",
    transformationTitle: "Roadmap de Transformación",
    transformationSubtitle: "Proceso estructurado de 4 fases para modernizar operaciones y desplegar sistemas autónomos.",
    transformationLifecycleLabel: "Ciclo de Transformación de Consultoría",
    transformationSteps: [
      {
        id: "audit",
        phase: "FASE 01",
        title: "Auditoría Operativa",
        desc: "Mapeo de cuellos de botella y diseño del plan de automatización con mayor ROI.",
        status: "COMPLETED",
        metric: "100% Procesos Mapeados",
        tech: ["Process Mining", "Revisión Técnica"]
      },
      {
        id: "design",
        phase: "FASE 02",
        title: "Arquitectura Modular",
        desc: "Diseño de esquemas de datos, contratos de API y delimitación de módulos.",
        status: "COMPLETED",
        metric: "8 Dominios Aislados",
        tech: ["Drizzle ORM", "Event Storming"]
      },
      {
        id: "build",
        phase: "FASE 03",
        title: "Desarrollo Acelerado",
        desc: "Construcción por sprints con herramientas asistidas por IA y tipado estricto.",
        status: "ACTIVE",
        metric: "Velocidad 3.8x",
        tech: ["Next.js", "TypeScript", "pg-boss"]
      },
      {
        id: "orchestrate",
        phase: "FASE 04",
        title: "Despliegue & Telemetría",
        desc: "Puesta en producción con workers autónomos y monitoreo en tiempo real.",
        status: "RUNNING",
        metric: "99.9% Uptime",
        tech: ["Docker", "PostgreSQL", "Wompi"]
      }
    ],
    transformationTerminal: {
      title: "// AUDITORIA_SISTEMA.sh",
      status: "LISTO",
      runAuditBtn: "EJECUTAR_AUDITORIA",
      runningMsg: "Analizando arquitectura y pipeline de automatización...",
      completedMsg: "Auditoría completada: Plataforma lista para despliegue AI-native."
    },
    storyTag: "/// 05 — EVOLUCIÓN INTERACTIVA",
    storyTitle: "La Transformación a AI-Native",
    storySubtitle: "Una experiencia interactiva a través de los 4 estados de madurez tecnológica.",
    storyControls: {
      auto: "AUTO (6s)",
      paused: "PAUSADO",
      prevAria: "Capítulo anterior",
      nextAria: "Siguiente capítulo"
    },
    storyHud: {
      telemetry: "TELEMETRÍA HUD",
      phaseLabel: "FASE 0{current} DE 04",
      stage1: {
        state: "ESTADO: FRAGMENTACIÓN",
        bottleneck: "CUELLO DE BOTELLA",
        manualTitle: "PROCESOS MANUALES",
        manualDesc: "Validaciones lentas por correo y WhatsApp.",
        disconnectTitle: "DESCONEXIÓN",
        disconnectDesc: "Hojas de cálculo aisladas sin sincronización.",
        avgTime: "Tiempo promedio por ciclo: 24 a 48 horas"
      },
      stage2: {
        state: "ESTADO: MONOLITO MODULAR",
        typeSafe: "TYPE-SAFE",
        modules: [
          "identidad",
          "catalogo",
          "disponibilidad",
          "reservas",
          "pagos",
          "reputacion",
          "mensajeria",
          "notificaciones"
        ],
        isolatedNote: "Contratos de dominio 100% aislados en Drizzle ORM"
      },
      stage3: {
        state: "ESTADO: WORKERS ACTIVOS",
        async: "ASÍNCRONO",
        clock1: "Reloj 01: Caducidad (24h)",
        clock2: "Reloj 02: Alerta WhatsApp (20h)",
        clock3: "Reloj 03: Lote Liquidación Semanal",
        note: "pg-boss ejecutando tareas en background sin latencia"
      },
      stage4: {
        state: "ESTADO: EMPRESA AI-NATIVE",
        velocity: "VELOCIDAD 3.8X",
        uptimeLabel: "UPTIME OPERATIVO",
        ipLabel: "PROPIEDAD CLIENTE",
        note: "SISTEMA COMPLETAMENTE AUTÓNOMO Y ESCALABLE"
      }
    },
    storyChapters: [
      {
        id: "legacy",
        chapter: "CAPÍTULO 01",
        title: "El Estado Fragmentado",
        badge: "LEGACY // ALTA FRICCIÓN",
        state: "Operación Manual",
        description: "Hojas de cálculo desconectadas, validación manual de citas y retrasos de más de 24 horas en responder solicitudes.",
        metricValue: "24h+",
        metricLabel: "Latencia Operativa",
        techPill: "Hojas de Cálculo · Procesos Manuales"
      },
      {
        id: "modular",
        chapter: "CAPÍTULO 02",
        title: "Desacoplamiento Modular",
        badge: "ARQUITECTURA // TYPE-SAFE",
        state: "Monolito Modular",
        description: "Aislamiento de la lógica de negocio en 8 dominios independientes con tipado estricto en Next.js y Drizzle ORM.",
        metricValue: "8 Dominios",
        metricLabel: "Fronteras Aisladas",
        techPill: "TypeScript · Drizzle ORM · PostgreSQL"
      },
      {
        id: "automation",
        chapter: "CAPÍTULO 03",
        title: "Workers & Eventos de Fondo",
        badge: "MOTORES // ASÍNCRONOS",
        state: "Workers Autónomos",
        description: "Relojes en pg-boss que manejan caducidades, alertas de WhatsApp y generación automática de lotes de liquidación.",
        metricValue: "100%",
        metricLabel: "Tareas en Segundo Plano",
        techPill: "pg-boss · Redis · WhatsApp Webhooks"
      },
      {
        id: "native",
        chapter: "CAPÍTULO 04",
        title: "La Empresa AI-Native",
        badge: "ESTADO FINAL // VELOCIDAD 3.8X",
        state: "Plataforma Inteligente",
        description: "Sistemas autónomos que operan 24/7 con observabilidad en tiempo real, 99.9% uptime y cero deuda técnica.",
        metricValue: "3.8X",
        metricLabel: "Velocidad de Entrega",
        techPill: "Next.js 15 · Event Clocks · Wompi Gateway"
      }
    ],
    philosophyTag: "/// 06 — PRINCIPIOS",
    philosophyTitle: "Estándares de Ingeniería",
    philosophyCards: [
      {
        title: "Arquitectura Modular",
        badge: "CERO DEUDA",
        desc: "Monolitos limpios con límites de dominio claros. Código mantenible sin complejidades innecesarias."
      },
      {
        title: "Workers Autónomos",
        badge: "BACKGROUND ENGINES",
        desc: "Tareas en segundo plano que gestionan caducidades, liquidaciones y alertas automáticamente."
      },
      {
        title: "Comunicación Directa",
        badge: "SIN INTERMEDIARIOS",
        desc: "Hablas directamente con los ingenieros senior que diseñan y construyen tu producto."
      }
    ],
    contactTag: "/// 06 — CONTACTO",
    contactTitle: "Iniciemos tu Proyecto",
    contactSubtitle: "Cuéntanos sobre tu iniciativa. Te responderemos con una propuesta técnica en menos de 24 horas.",
    contactForm: {
      namePlaceholder: "Nombre y cargo",
      emailPlaceholder: "Correo corporativo",
      companyPlaceholder: "Empresa u organización",
      projectTypeLabel: "Tipo de proyecto",
      projectTypes: [
        "Plataforma Web a Medida",
        "Automatización de Procesos",
        "Integración de Agentes IA",
        "Pod Dedicado de Ingeniería"
      ],
      timelineLabel: "Tiempo estimado",
      timelines: ["< 1 mes", "1 - 3 meses", "3 - 6 meses", "Exploratorio"],
      detailsPlaceholder: "Describe brevemente el alcance o necesidades técnicas...",
      submitBtn: "ENVIAR SOLICITUD ▶",
      submittingBtn: "ENVIANDO...",
      submittedTitle: "SOLICITUD ENVIADA",
      newInquiryBtn: "Nueva Solicitud",
      successMsg: "Solicitud recibida. Te contactaremos en menos de 24 horas.",
      directEmailLabel: "Contacto Directo",
      headquartersLabel: "Operaciones",
      slaNote: "Respuesta técnica en < 24h.",
      remoteLocation: "Pods Remotos · Américas & Europa"
    },
    footer: {
      endOfFile: "/// FIN DE ARCHIVO",
      contact: "CONTACTO",
      status: "ESTADO",
      origin: "ORIGIN",
      allSystemsNominal: "SISTEMAS OPERACIONALES",
      responseSubtitle: "Consultora de Ingeniería AI-Native",
      builtBy: "INGENIERÍA & OPERACIONES",
      brandOps: "KAI LABS STUDIO",
      copyright: "© {year} KAI LABS. TODOS LOS DERECHOS RESERVADOS."
    }
  },
  cases: {
    tag: "/// PROYECTOS ENTREGADOS",
    title: "Casos de Estudio",
    subtitle: "> Plataformas y motores de automatización en producción desarrollados por KAI LABS.",
    filterAll: "TODOS",
    flagshipBadge: "INSIGNIA",
    keyMetric: "MÉTRICAS CLAVE",
    architectureTitle: "ARQUITECTURA",
    stackTitle: "STACK",
    challengeTitle: "DESAFÍO",
    solutionTitle: "SOLUCIÓN",
    consoleTitle: "// TELEMETRÍA DEL SISTEMA",
    githubLinkText: "Ver en GitHub",
    streamReplayBadge: "REPLAY EN VIVO",
    telemetryStreaming: "TELEMETRÍA EN STREAM...",
    items: [
      {
        id: "oficia-platform",
        badge: "MARKETPLACE TRANSACCIONAL",
        title: "Oficia Platform",
        subtitle: "Motor Transaccional de Reserva de Servicios",
        sector: "MARKETPLACE & FINTECH · USD",
        summary: "Monolito modular de 8 dominios con workers asíncronos para liquidaciones semanales, caducidad de citas y notificaciones por WhatsApp.",
        challenge: "Lanzar un marketplace con lógica compleja: políticas de menores (ADR 0004), caducidad de citas a las 24h, dispersión semanal de pagos y pasarela Wompi.",
        solution: "Monolito modular en Next.js 15, Drizzle ORM y PostgreSQL 16 con 4 relojes de workers en pg-boss y fábrica abstracta de pagos.",
        architecture: {
          pattern: "Monolito Modular con Workers Asíncronos",
          modules: [
            "identidad (RBAC + Better Auth)",
            "catalogo (Servicios Dinámicos)",
            "disponibilidad (Gestión de Horarios)",
            "reservas (Máquina de Estados)",
            "pagos (Wompi + Liquidaciones)",
            "reputacion (Reseñas Verificadas)",
            "mensajeria (Chat por Solicitud)",
            "notificaciones (WhatsApp / Resend)"
          ],
          stack: [
            "Next.js 15 (App Router)",
            "PostgreSQL 16 + Drizzle ORM",
            "pg-boss (Workers en Fondo)",
            "Better Auth (RBAC)",
            "Wompi Gateway (Factory)",
            "Tailwind CSS v4"
          ]
        },
        metrics: {
          primary: { value: "100%", label: "LIQUIDACIONES AUTOMATIZADAS" },
          secondary: { value: "8 Módulos", label: "DOMINIOS AISLADOS" }
        },
        githubUrl: "https://github.com/kailabs-workspace/oficia-platform",
        liveUrl: "https://github.com/kailabs-workspace/oficia-platform",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
        highlights: [
          "8 Módulos de dominio aislados con contratos de tipo estricto",
          "4 Relojes pg-boss (caducidad, alertas WhatsApp, autocompletado, lotes)",
          "Type Safety 100% estricto de SQL a React",
          "Pasarela Wompi con modo simulación local"
        ],
        consoleLogs: [
          { who: "DEV", text: "Esquema Drizzle inicializado: 19 tablas verificadas." },
          { who: "SYSTEM", text: "Worker pg-boss activo: 4 relojes en segundo plano." },
          { who: "AI_AGENT", text: "Solicitud #4082 creada: franja horaria retenida por 15 min." },
          { who: "SYSTEM", text: "Pago Wompi confirmado. Notificación WhatsApp enviada." },
          { who: "KAI", text: "Lote de liquidación semanal generado automáticamente." }
        ]
      }
    ]
  },
  pricing: {
    tag: "/// MODELOS DE TRABAJO",
    title: "Cómo Colaboramos",
    subtitle: "> Modelos ágiles y flexibles adaptados a tu roadmap y objetivos de transformación.",
    statusReady: "DISPONIBLE",
    idealForLabel: "IDEAL PARA",
    deliverablesLabel: "ENTREGABLES CLAVE",
    ctaBtn: "AGENDAR CONSULTA ▶",
    customNote: "100% propiedad intelectual del cliente, cero licencias propietarias y comunicación directa con ingenieros senior.",
    guarantee: "INGENIEROS SENIOR DIRECTOS · CÓDIGO LIMPIO · TRANSFERENCIA TOTAL DE IP",
    guaranteeTitle: "// GARANTÍA DE CÓDIGO",
    ipTitle: "// PROPIEDAD INTELECTUAL",
    models: [
      {
        code: "MODELO_01",
        name: "SPRINT DE TRANSFORMACIÓN",
        tagline: "Modernización de cuellos de botella",
        timeline: "2 a 4 Semanas",
        idealFor: "Empresas que buscan validar automatizaciones con un prototipo funcional rápido.",
        deliverables: [
          "Auditoría de Procesos & Stack",
          "Prototipo Funcional en Producción",
          "Plano Arquitectónico & Esquema BD",
          "Cálculo de ROI & Roadmap"
        ]
      },
      {
        code: "MODELO_02",
        name: "DESARROLLO PUNTA A PUNTA",
        tagline: "Lanzamiento de nuevas plataformas",
        timeline: "6 a 12 Semanas",
        featured: true,
        idealFor: "Startups y empresas que necesitan construir una plataforma transaccional completa.",
        deliverables: [
          "Monolito Modular en Next.js / TypeScript",
          "Bases de Datos PostgreSQL + Drizzle",
          "Workers Autónomos en Segundo Plano",
          "Integración de Pagos, Auth & Notificaciones",
          "Propiedad 100% de IP & Despliegue en tu Nube"
        ]
      },
      {
        code: "MODELO_03",
        name: "POD DEDICADO DE INGENIERÍA",
        tagline: "Aceleración continua de roadmap",
        timeline: "Retainer Trimestral",
        idealFor: "Equipos que necesitan un squad autónomo senior para multiplicar su velocidad.",
        deliverables: [
          "Squad de 2 a 4 Ingenieros Senior",
          "Sprints Semanales & CI/CD Continuo",
          "Comunicación Directa en Slack/Discord",
          "Revisión de Código & Testing Automatizado"
        ]
      }
    ],
    comparison: {
      title: "KAI LABS vs Consultoras Tradicionales",
      columns: ["Aspecto", "Consultoras Tradicionales", "KAI LABS AI-Native Studio"],
      rows: [
        {
          feature: "Velocidad de Entrega",
          traditional: "Sprints lentos con desarrolladores junior",
          kaiLabs: "3.8x más rápido con arquitectos senior y flujos AI-native"
        },
        {
          feature: "Arquitectura",
          traditional: "Microservicios inflados o código legado",
          kaiLabs: "Monolitos modulares limpios con tipado estricto"
        },
        {
          feature: "Automatización",
          traditional: "Procesos manuales y offshore",
          kaiLabs: "Workers autónomos en segundo plano y agentes de eventos"
        },
        {
          feature: "Comunicación",
          traditional: "Múltiples intermediarios no técnicos",
          kaiLabs: "Trato directo con los ingenieros que construyen el sistema"
        },
        {
          feature: "Propiedad de Código",
          traditional: "Vendor lock-in o licencias adicionales",
          kaiLabs: "100% propiedad del cliente, stack open source"
        }
      ]
    }
  },
  integrations: {
    tag: "/// ARQUITECTURA & STACK",
    title: "Plano Arquitectónico",
    subtitlePre: "Diseñamos ",
    subtitleHighlight: "sistemas de software robustos",
    subtitlePost: " con monolitos modulares, workers autónomos y tipado estricto.",
    agentCore: "ARQUITECTURA KAI LABS",
    routingAll: "8 DOMINIOS AISLADOS",
    inProductionBadge: "EN PRODUCCIÓN",
    pillarPrefix: "PILAR 0",
    lifecycleTag: "/// METODOLOGÍA",
    lifecycleTitle: "Ciclo de Vida de Transformación",
    bottomPrompt: "¿Listo para modernizar tu arquitectura a AI-Native?",
    bottomCtaBtn: "INICIAR CONSULTA TÉCNICA",
    pillars: {
      ingest: {
        label: "01 INGESTA & EVENTOS",
        desc: "Webhooks · APIs Multicanal · Colas de Entrada"
      },
      reason: {
        label: "02 SERVICIOS DE DOMINIO",
        desc: "Servicios Aislados · Lógica Determinista"
      },
      act: {
        label: "03 WORKERS AUTÓNOMOS",
        desc: "Relojes pg-boss · Lotes de Liquidación · Alertas"
      }
    },
    stackLayers: [
      {
        category: "APLICACIÓN & FRONTEND",
        title: "Interfaces Modernas Full-Stack",
        description: "Aplicaciones web renderizadas en servidor con tipado TypeScript estricto y componentes accesibles.",
        tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "shadcn/ui", "TanStack Router"]
      },
      {
        category: "DATOS & PERSISTENCIA",
        title: "Bases de Datos Relacionales Type-Safe",
        description: "PostgreSQL con migraciones declarativas en Drizzle ORM, asegurando consistencia transaccional.",
        tech: ["PostgreSQL 16", "Drizzle ORM", "pgvector", "Drizzle Kit"]
      },
      {
        category: "WORKERS & AUTOMATIZACIÓN",
        title: "Motores de Eventos Autónomos",
        description: "Colas transaccionales que gestionan caducidades, liquidaciones y alertas con reintentos idempotentes.",
        tech: ["pg-boss", "Colas Redis", "Cron Schedulers", "Dead-Letter Queues"]
      },
      {
        category: "PAGOS & SEGURIDAD",
        title: "Seguridad & Cobros Transaccionales",
        description: "Autenticación RBAC, webhooks verificados y pasarelas de pago con soporte local e internacional.",
        tech: ["Better Auth (RBAC)", "Wompi Gateway", "Stripe", "Webhooks HMAC"]
      }
    ],
    processLifecycle: [
      {
        step: "01",
        title: "Aislamiento de Dominio",
        desc: "Módulos independientes con contratos de tipado estricto."
      },
      {
        step: "02",
        title: "Workers en Segundo Plano",
        desc: "Tareas asíncronas ejecutadas por relojes pg-boss fuera del hilo principal."
      },
      {
        step: "03",
        title: "Disparadores Multicanal",
        desc: "Alertas inmediatas por WhatsApp, correo transaccional y consola."
      },
      {
        step: "04",
        title: "Observabilidad Continua",
        desc: "Monitoreo en tiempo real con 99.9% de confiabilidad operativa."
      }
    ]
  },
  dashboard: {
    tag: "/// TELEMETRÍA DE INGENIERÍA",
    title: "Consola de Desarrollo",
    subtitle: "> Monitoreo en tiempo real de pipelines, workers y estado del sistema.",
    uplinkOk: "SISTEMAS OPERATIVOS // ● GRID ONLINE",
    systemStatusLabel: "ESTADO DEL SISTEMA",
    systemStatusVal: "100% OPERATIVO",
    stats: {
      velocity: {
        label: "VELOCIDAD",
        val: "3.8X",
        sub: "Vs consultoría tradicional"
      },
      automation: {
        label: "AUTOMATIZACIÓN",
        val: "94.2%",
        sub: "Operaciones autónomas"
      },
      status: {
        label: "ARQUITECTURA",
        val: "MODULAR",
        sub: "8 Módulos de dominio"
      }
    },
    liveFeedTitle: "// STREAM_EVENTOS_VIVO.log",
    streaming: "STREAM ACTIVO",
    inboundLabel: "> EVENTO:",
    responseLabel: "> DESPACHO:",
    awaiting: "Esperando eventos del sistema...",
    coreVersion: "Motor: KAI_STUDIO_v2.4",
    bufferStatus: "Clúster: Óptimo",
    pipelinesTitle: "// Aceleradores Autónomos",
    toggles: {
      codeGen: "Scaffolding AI-Native",
      agenticQa: "Verificación de Dominio QA",
      processOrchestrator: "Workers pg-boss"
    },
    telemetryTitle: "// Métricas del Sistema",
    telemetryLoad: "Carga del Clúster",
    metrics: {
      architectureLabel: "> arquitectura :",
      architectureVal: "MONOLITO MODULAR",
      methodologyLabel: "> metodología :",
      methodologyVal: "AGILE AI-NATIVE",
      codeQualityLabel: "> type safety :",
      codeQualityVal: "100% STRICT TS",
      activePipelinesLabel: "> aceleradores :"
    },
    eventPool: [
      {
        ch: "PIPELINE",
        who: "oficia-core",
        msg: "Generando lote de liquidación semanal para 42 profesionales...",
        reply: "Completado en 312ms. Lote de liquidación generado."
      },
      {
        ch: "AGENT",
        who: "reloj-reservas",
        msg: "Comprobando ventana de caducidad de reserva #9102...",
        reply: "Caducada de forma idempotente. Franja horaria liberada."
      },
      {
        ch: "DEPLOY",
        who: "ci-pipeline",
        msg: "Ejecutando typecheck y pruebas en 8 módulos...",
        reply: "Aprobado: 0 errores, 19 tablas verificadas en Drizzle."
      },
      {
        ch: "DATABASE",
        who: "pg-boss-worker",
        msg: "Tarea de notificación WhatsApp tomada de la cola...",
        reply: "Recordatorio enviado al cliente (+503 7••• ••••)."
      },
      {
        ch: "PIPELINE",
        who: "auth-gateway",
        msg: "Verificación de RBAC para /admin/liquidaciones...",
        reply: "Acceso autorizado para rol Admin."
      }
    ]
  },
  notFound: {
    title: "404",
    subtitle: "Ruta no encontrada",
    desc: "El recurso solicitado no existe en KAI LABS.",
    goHome: "Volver al Inicio"
  },
  error: {
    title: "Error del Sistema",
    desc: "Ocurrió una excepción durante la ejecución. Por favor reintenta.",
    tryAgain: "Reintentar",
    goHome: "Volver al Inicio"
  }
};
const TRANSLATIONS = {
  en,
  es
};
const STORAGE_KEY = "kai_lang_pref";
const I18nContext = reactExports.createContext(null);
function getInitialLanguage() {
  if (typeof window === "undefined") {
    return "en";
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") {
      return saved;
    }
    const browserLang = navigator.language?.toLowerCase() || "";
    if (browserLang.startsWith("es")) {
      return "es";
    }
  } catch {
  }
  return "en";
}
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("en");
  reactExports.useEffect(() => {
    const initial = getInitialLanguage();
    setLangState(initial);
    document.documentElement.lang = initial;
  }, []);
  const setLang = (newLang) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch {
      }
      document.documentElement.lang = newLang;
    }
  };
  const toggleLang = () => {
    setLang(lang === "en" ? "es" : "en");
  };
  const value = {
    lang,
    setLang,
    toggleLang,
    t: TRANSLATIONS[lang]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(I18nContext.Provider, { value, children });
}
function useI18n() {
  const context = reactExports.useContext(I18nContext);
  if (!context) {
    return {
      lang: "en",
      setLang: () => {
      },
      toggleLang: () => {
      },
      t: en
    };
  }
  return context;
}
const ThemeContext = reactExports.createContext(void 0);
const THEME_STORAGE_KEY = "kai_theme_mode";
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
      if (document.documentElement.classList.contains("light")) return "light";
    } catch {
    }
  }
  return "dark";
};
function ThemeProvider({ children }) {
  const [theme, setThemeState] = reactExports.useState(getInitialTheme);
  reactExports.useEffect(() => {
    const current = getInitialTheme();
    setThemeState(current);
    applyTheme(current);
  }, []);
  const applyTheme = (nextTheme) => {
    const root = document.documentElement;
    if (nextTheme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
      root.style.colorScheme = "light";
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
  };
  const setTheme = (nextTheme) => {
    setThemeState(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme }, children });
}
function useTheme() {
  const context = reactExports.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
function PerpendicularTransition({ pathname, children }) {
  const [prevPath, setPrevPath] = reactExports.useState(pathname);
  const [transitionId, setTransitionId] = reactExports.useState(null);
  const isFirstMount = reactExports.useRef(true);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    if (!isFirstMount.current) {
      setTransitionId(Date.now());
    }
  }
  reactExports.useEffect(() => {
    isFirstMount.current = false;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full min-h-screen", children }, `view-${pathname}`),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: transitionId && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "fixed inset-0 z-[9999] pointer-events-none overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { translateX: "0%" },
              animate: { translateX: "100%" },
              transition: {
                duration: 0.42,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.02
              },
              className: `absolute inset-0 backdrop-blur-xs ${isDark ? "bg-lime/10 border-l-2 border-lime/40" : "bg-[#E8E4D6]/70 border-l-2 border-[#0A0A0A]/30"}`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { translateX: "0%" },
              animate: { translateX: "100%" },
              transition: {
                duration: 0.38,
                ease: [0.76, 0, 0.24, 1]
              },
              onAnimationComplete: () => {
                setTransitionId(null);
              },
              className: `absolute inset-0 ${isDark ? "bg-[#0A0A0A] border-l-2 border-lime shadow-[-10px_0_30px_rgba(212,245,66,0.35)]" : "bg-[#F4F1E8] border-l-2 border-[#0A0A0A] shadow-[-10px_0_30px_rgba(10,10,10,0.18)]"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `absolute inset-0 ${isDark ? "opacity-25 bg-[radial-gradient(#D4F542_1px,transparent_1px)]" : "opacity-20 bg-[radial-gradient(#0A0A0A_1px,transparent_1px)]"} [background-size:16px_16px]`
                }
              )
            }
          )
        ]
      },
      `shutter-overlay-${transitionId}`
    ) })
  ] });
}
const appCss = "/assets/styles-CbvbtVgr.css";
function NotFoundComponent() {
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-ink text-foreground px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center border border-bone/20 bg-ink/90 p-8 corner-ticks", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-6xl font-bold font-display text-lime", children: t.notFound.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-lg font-mono font-semibold uppercase text-foreground", children: t.notFound.subtitle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-mono text-muted-foreground", children: t.notFound.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center bg-lime text-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-widest hover:bg-lime/90 transition-colors",
        children: t.notFound.goHome
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  const { t } = useI18n();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-ink text-foreground px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center border border-signal/40 bg-ink/90 p-8 corner-ticks", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-mono uppercase text-signal font-bold", children: t.error.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-mono text-muted-foreground", children: t.error.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center bg-lime text-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider hover:bg-lime/90 transition-colors cursor-pointer",
          children: t.error.tryAgain
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center border border-bone/30 px-4 py-2 font-mono text-xs uppercase text-foreground hover:border-lime hover:text-lime transition-colors",
          children: t.error.goHome
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        name: "description",
        content: "We build bespoke software platforms, automate core business processes, and deploy autonomous AI engines for forward-thinking enterprises."
      },
      { name: "author", content: "KAI LABS" },
      { property: "og:title", content: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        property: "og:description",
        content: "We build bespoke software platforms, automate core business processes, and deploy autonomous AI engines."
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/isotipo.svg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "KAI LABS — AI-Native Engineering Consultancy" },
      {
        name: "twitter:description",
        content: "We transform enterprises into AI-native organizations by building transactional platforms and autonomous background worker engines."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `(function(){
  try {
    var saved = localStorage.getItem('kai_theme_mode');
    var theme = (saved === 'light' || saved === 'dark') ? saved : 'dark';
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    root.style.colorScheme = theme;
  } catch(e) {}
})();`
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { className: "bg-background text-foreground antialiased selection:bg-lime selection:text-ink", children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(I18nProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(PerpendicularTransition, { pathname, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }) }) });
}
const $$splitComponentImporter$5 = () => import("./index-BCjtFc8C.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — AI-Native Software Engineering Consultancy"
    }, {
      name: "description",
      content: "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers."
    }, {
      property: "og:title",
      content: "KAI LABS — AI-Native Software Engineering Consultancy"
    }, {
      property: "og:description",
      content: "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — AI-Native Software Engineering Consultancy"
    }, {
      name: "twitter:description",
      content: "We build bespoke software platforms and automate business workflows with autonomous AI engines and background workers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cases-Cfaa10gJ.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — Projects & Case Studies"
    }, {
      name: "description",
      content: "Production platforms and automation engines engineered by KAI LABS: Oficia Platform, logistics engines, and real-time underwriting systems."
    }, {
      property: "og:title",
      content: "KAI LABS — Projects & Case Studies"
    }, {
      property: "og:description",
      content: "Production platforms and automation engines engineered by KAI LABS: Oficia Platform, logistics engines, and real-time underwriting systems."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — Projects & Case Studies"
    }, {
      name: "twitter:description",
      content: "Production platforms and automation engines engineered by KAI LABS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./dashboard-DpnIlqxE.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — Engineering Console"
    }, {
      name: "description",
      content: "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues."
    }, {
      property: "og:title",
      content: "KAI LABS — Engineering Console"
    }, {
      property: "og:description",
      content: "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — Engineering Console"
    }, {
      name: "twitter:description",
      content: "Live engineering telemetry: autonomous pipelines, agentic code generation events, and background worker queues."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./integrations-NYsShlb7.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — Architecture & Stack"
    }, {
      name: "description",
      content: "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines."
    }, {
      property: "og:title",
      content: "KAI LABS — Architecture & Stack"
    }, {
      property: "og:description",
      content: "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — Architecture & Stack"
    }, {
      name: "twitter:description",
      content: "The AI-native architecture blueprint: Modular Monoliths, pg-boss background worker clocks, Drizzle ORM, and autonomous AI pipelines."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./pricing-4_7XZIgz.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — Engagement Models"
    }, {
      name: "description",
      content: "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods."
    }, {
      property: "og:title",
      content: "KAI LABS — Engagement Models"
    }, {
      property: "og:description",
      content: "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — Engagement Models"
    }, {
      name: "twitter:description",
      content: "High-velocity engineering models: AI Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./services-BNMBC6we.mjs");
const Route = createFileRoute()({
  head: () => ({
    meta: [{
      title: "KAI LABS — AI-Native Services & Flagship Platform"
    }, {
      name: "description",
      content: "End-to-end bespoke software platforms, transactional background worker engines, and our flagship project Oficia Platform."
    }, {
      property: "og:title",
      content: "KAI LABS — AI-Native Services & Flagship Platform"
    }, {
      property: "og:description",
      content: "Bespoke software platforms, autonomous background engines, and the Oficia flagship platform."
    }, {
      property: "og:image",
      content: "/isotipo.svg"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "KAI LABS — AI-Native Services & Flagship Platform"
    }, {
      name: "twitter:description",
      content: "Bespoke software platforms and autonomous background engines by KAI LABS."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const CasesRoute = Route$4.update({
  id: "/cases",
  path: "/cases",
  getParentRoute: () => Route$6
});
const DashboardRoute = Route$3.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$6
});
const IntegrationsRoute = Route$2.update({
  id: "/integrations",
  path: "/integrations",
  getParentRoute: () => Route$6
});
const PricingRoute = Route$1.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  CasesRoute,
  DashboardRoute,
  IntegrationsRoute,
  PricingRoute,
  ServicesRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useI18n as a,
  router as r,
  useTheme as u
};
