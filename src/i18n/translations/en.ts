import type { TranslationDictionary } from "../types";

export const en: TranslationDictionary = {
  meta: {
    home: {
      title: "KAI LABS // AI-Native Software Engineering Consultancy",
      description:
        "We build bespoke software platforms and automate business operations with autonomous AI engines and background worker systems.",
    },
    cases: {
      title: "KAI LABS // Projects & Case Studies",
      description:
        "Production systems engineered by KAI LABS: Oficia Platform marketplace and high-concurrency automation engines.",
    },
    pricing: {
      title: "KAI LABS // Engagement Models",
      description:
        "High-velocity engineering models: Transformation Sprints, End-to-End Product Builds, and Dedicated AI Pods.",
    },
    integrations: {
      title: "KAI LABS // Architecture & Stack",
      description:
        "The AI-native architecture blueprint: Modular monoliths, pg-boss background worker clocks, and strict type safety.",
    },
    dashboard: {
      title: "KAI LABS // Telemetry Console",
      description:
        "Real-time engineering telemetry of AI-native software pipelines and worker performance metrics.",
    },
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
    card: "// POD_01",
  },
  home: {
    statusTag: "> STATUS: ACTIVE // Q4 AVAILABILITY",
    missionBrief: "/// AI-NATIVE SOFTWARE ENGINEERING & AUTOMATION",
    heroHeadline1: "WE BUILD",
    heroHeadline2: "AI-NATIVE",
    heroHeadlineHighlight: "ENTERPRISES",
    heroDescription:
      "We engineer bespoke platforms and automate core business workflows using event engines and autonomous workers. 3.8x delivery speed with zero technical debt.",
    heroCtaPrimary: "Start Project",
    heroCtaSecondary: "View Case: Oficia",
    quickStats: {
      stat1: {
        label: "VELOCITY",
        val: "3.8X",
        sub: "Faster vs traditional",
      },
      stat2: {
        label: "AUTOMATION",
        val: "85%+",
        sub: "Manual tasks automated",
      },
      stat3: {
        label: "ARCHITECTURE",
        val: "MODULAR",
        sub: "Zero technical debt",
      },
      stat4: {
        label: "FLAGSHIP",
        val: "OFICIA",
        sub: "Marketplace in production",
      },
    },
    manifestoTag: "/// 01 — THESIS",
    manifestoWords:
      "We don't build legacy software — we turn enterprises into autonomous AI-native engines.".split(
        " ",
      ),
    manifestoSub:
      "We combine architectural rigor with AI-native workflows to ship mission-critical software at unprecedented speed.",

    servicesSectionTag: "/// 02 — CAPABILITIES",
    servicesSectionTitle: "Engineering Services",
    servicesSectionSubtitle:
      "From architecture to production: scalable platforms, process automation, and dedicated pods.",
    servicesCapabilitiesBadge: "ENGINEERING CAPABILITIES",
    servicesList: [
      {
        id: "ai-products",
        number: "01",
        title: "AI-Native Software Engineering",
        shortDesc: "High-performance web and transactional platforms.",
        description:
          "Clean modular monoliths, end-to-end strict typing, and architectures built for high concurrency.",
        deliverables: [
          "Next.js & React Web Platforms",
          "Modular Monolith Architecture",
          "PostgreSQL & Drizzle ORM Type-Safe",
          "Automated Testing & CI/CD",
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind", "Docker"],
      },
      {
        id: "process-automation",
        number: "02",
        title: "Process Automation & Workers",
        shortDesc: "Replacing manual tasks with autonomous background engines.",
        description:
          "Async queues and worker clocks that handle expirations, settlements, and alerts without human lag.",
        deliverables: [
          "Background Workers (pg-boss / queues)",
          "WhatsApp, Slack & Webhook Pipelines",
          "Automated Reconciliation & Billing",
          "Real-Time Telemetry & Handoff",
        ],
        technologies: ["pg-boss", "Redis", "WhatsApp API", "Stripe", "Webhooks", "Node.js"],
      },
      {
        id: "ai-systems",
        number: "03",
        title: "AI Systems & Agents",
        shortDesc: "Enterprise LLM integration and deterministic workflows.",
        description:
          "Agents for unstructured document extraction, domain RAG, and automated decisions with strict guardrails.",
        deliverables: [
          "Domain RAG for Your Business",
          "Document & DM Extraction Agents",
          "Intelligent Request Routing",
          "Enterprise Safety & Zero Hallucination",
        ],
        technologies: ["OpenAI", "Anthropic", "LangChain", "pgvector", "FastAPI", "Python"],
      },
      {
        id: "dedicated-pods",
        number: "04",
        title: "Dedicated AI Engineering Pods",
        shortDesc: "Senior engineering squads embedded in your roadmap.",
        description:
          "High-velocity development cells shipping weekly with direct communication and 100% client-owned code.",
        deliverables: [
          "2 to 4 Senior Engineers Squad",
          "Weekly Sprints & Continuous Demos",
          "Direct Slack/Discord Collaboration",
          "Full Code Ownership (100% IP)",
        ],
        technologies: ["Git", "GitHub Actions", "Docker", "AWS / Vercel", "Agile"],
      },
    ],
    servicesCta: {
      title: "Ready to initiate your platform development?",
      subtitle: "Schedule a technical discovery call to review architecture and project scope.",
      btn: "START TECHNICAL SCOPING ▶",
    },

    flagshipTag: "/// 03 — FLAGSHIP SPOTLIGHT",
    flagshipTitle: "Oficia Platform",
    flagshipSubtitle:
      "A production transactional services marketplace designed and built by KAI LABS.",
    flagshipProject: {
      name: "OFICIA PLATFORM",
      category: "Transactional Marketplace // El Salvador (USD)",
      summary:
        "Full marketplace platform built as an 8-domain modular monolith with pg-boss background workers and Wompi payments.",
      architectureTitle: "Modular Monolith (8 Domain Modules)",
      architectureDesc:
        "Strict boundaries across Identity, Catalog, Availability, Bookings, Payments, Reputation, Messaging, and Notifications.",
      stackTitle: "Production Tech Stack",
      keyResults: [
        { label: "DOMAINS", val: "8 MODULES" },
        { label: "WORKERS", val: "4 CLOCKS" },
        { label: "DISPATCH", val: "100% AUTO" },
        { label: "TYPE SAFETY", val: "STRICT TS" },
      ],
      githubBtn: "View on GitHub",
      viewCaseBtn: "Read Full Case",
      specs: [
        { label: "Framework", value: "Next.js 15 (App Router, Server Actions)" },
        { label: "Database", value: "PostgreSQL 16 + Drizzle ORM" },
        { label: "Workers", value: "pg-boss (4 Event & Cron Clocks)" },
        { label: "Authentication", value: "Better Auth with Domain RBAC" },
        { label: "Payments", value: "Wompi Gateway (Factory Mock & Live)" },
        { label: "Messaging", value: "WhatsApp API & Resend" },
      ],
    },

    transformationTag: "/// 04 — PROCESS",
    transformationTitle: "Transformation Roadmap",
    transformationSubtitle:
      "A structured 4-phase roadmap to modernize operations and deploy autonomous systems.",
    transformationLifecycleLabel: "Consultancy Transformation Lifecycle",
    transformationSteps: [
      {
        id: "audit",
        phase: "PHASE 01",
        title: "Operational Audit",
        desc: "Mapping bottlenecks and designing the highest ROI automation roadmap.",
        status: "COMPLETED",
        metric: "100% Bottlenecks Mapped",
        tech: ["Process Mining", "Technical Review"],
      },
      {
        id: "design",
        phase: "PHASE 02",
        title: "Modular Architecture",
        desc: "Designing clean data schemas, API contracts, and domain boundaries.",
        status: "COMPLETED",
        metric: "8 Isolated Domains",
        tech: ["Drizzle ORM", "Event Storming"],
      },
      {
        id: "build",
        phase: "PHASE 03",
        title: "Accelerated Build",
        desc: "Sprint delivery with AI-assisted tooling and end-to-end type safety.",
        status: "ACTIVE",
        metric: "3.8x Velocity",
        tech: ["Next.js", "TypeScript", "pg-boss"],
      },
      {
        id: "orchestrate",
        phase: "PHASE 04",
        title: "Deploy & Telemetry",
        desc: "Production release with autonomous workers and real-time monitoring.",
        status: "RUNNING",
        metric: "99.9% Uptime",
        tech: ["Docker", "PostgreSQL", "Wompi"],
      },
    ],
    transformationTerminal: {
      title: "// SYSTEM_AUDIT_RUNNER.sh",
      status: "READY",
      runAuditBtn: "RUN_SYSTEM_AUDIT",
      runningMsg: "Compiling architecture review and automation pipeline...",
      completedMsg: "Audit completed: Platform ready for AI-native deployment.",
    },

    storyTag: "/// 05 — INTERACTIVE EVOLUTION",
    storyTitle: "The AI-Native Evolution",
    storySubtitle: "An interactive journey through the 4 stages of technological maturity.",
    storyControls: {
      auto: "AUTO (6s)",
      paused: "PAUSED",
      prevAria: "Previous chapter",
      nextAria: "Next chapter",
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
        avgTime: "Average cycle time: 24 to 48 hours",
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
          "notifications",
        ],
        isolatedNote: "100% isolated domain contracts in Drizzle ORM",
      },
      stage3: {
        state: "STATE: ACTIVE WORKERS",
        async: "ASYNCHRONOUS",
        clock1: "Clock 01: Caducity (24h)",
        clock2: "Clock 02: WhatsApp Alert (20h)",
        clock3: "Clock 03: Weekly Settlement Batch",
        note: "pg-boss running background jobs with zero latency",
      },
      stage4: {
        state: "STATE: AI-NATIVE ENTERPRISE",
        velocity: "3.8X VELOCITY",
        uptimeLabel: "OPERATIONAL UPTIME",
        ipLabel: "CLIENT OWNERSHIP",
        note: "FULLY AUTONOMOUS AND SCALABLE PLATFORM",
      },
    },
    storyChapters: [
      {
        id: "legacy",
        chapter: "CHAPTER 01",
        title: "The Fragmented State",
        badge: "LEGACY // HIGH FRICTION",
        state: "Manual Operation",
        description:
          "Disconnected spreadsheets, manual appointment validation, and 24h+ response delays on critical requests.",
        metricValue: "24h+",
        metricLabel: "Operational Latency",
        techPill: "Spreadsheets · Manual Workflows",
      },
      {
        id: "modular",
        chapter: "CHAPTER 02",
        title: "Modular Decoupling",
        badge: "ARCHITECTURE // TYPE-SAFE",
        state: "Modular Monolith",
        description:
          "Isolating business logic into 8 independent domains with strict end-to-end typing in Next.js and Drizzle ORM.",
        metricValue: "8 Domains",
        metricLabel: "Isolated Boundaries",
        techPill: "TypeScript · Drizzle ORM · PostgreSQL",
      },
      {
        id: "automation",
        chapter: "CHAPTER 03",
        title: "Async Worker Engines",
        badge: "ENGINES // ASYNCHRONOUS",
        state: "Autonomous Workers",
        description:
          "pg-boss clocks running request expiration, automated WhatsApp warnings, and weekly provider payouts.",
        metricValue: "100%",
        metricLabel: "Background Automated",
        techPill: "pg-boss · Redis · WhatsApp Webhooks",
      },
      {
        id: "native",
        chapter: "CHAPTER 04",
        title: "The AI-Native Enterprise",
        badge: "FINAL STATE // 3.8X VELOCITY",
        state: "Intelligent Platform",
        description:
          "Autonomous systems running 24/7 with real-time observability, 99.9% uptime, and zero technical debt.",
        metricValue: "3.8X",
        metricLabel: "Delivery Velocity",
        techPill: "Next.js 15 · Event Clocks · Wompi Gateway",
      },
    ],

    philosophyTag: "/// 06 — STANDARDS",
    philosophyTitle: "Engineering Standards",
    philosophyCards: [
      {
        title: "Modular Architecture",
        badge: "ZERO DEBT",
        desc: "Clean monoliths with strict domain boundaries. Maintainable code without bloat.",
      },
      {
        title: "Autonomous Workers",
        badge: "BACKGROUND ENGINES",
        desc: "Background jobs handle expirations, settlements, and notifications automatically.",
      },
      {
        title: "Direct Access",
        badge: "NO MIDDLEMEN",
        desc: "Communicate directly with senior engineers building your platform.",
      },
    ],

    contactTag: "/// 06 — CONTACT",
    contactTitle: "Let's Build Your Platform",
    contactSubtitle:
      "Tell us about your initiative. We'll reply with a technical architecture brief within 24 hours.",
    contactForm: {
      namePlaceholder: "Your name and role",
      emailPlaceholder: "Work email",
      companyPlaceholder: "Company or organization",
      projectTypeLabel: "Project type",
      projectTypes: [
        "Bespoke Web Platform",
        "Process Automation",
        "AI Agent Integration",
        "Dedicated Engineering Pod",
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
      remoteLocation: "Remote Pods · Americas & Europe",
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
      copyright: "© {year} KAI LABS. ALL RIGHTS RESERVED.",
    },
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
        summary:
          "8-domain modular monolith with pg-boss async workers for weekly payouts, appointment caducity, and WhatsApp notifications.",
        challenge:
          "Building a marketplace with complex domain rules: minor safety (ADR 0004), 24h request expiration, weekly payout batching, and Wompi payments.",
        solution:
          "Modular monolith on Next.js 15, Drizzle ORM, and PostgreSQL 16 with 4 pg-boss worker clocks and abstract payment factory.",
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
            "notifications (WhatsApp / Resend)",
          ],
          stack: [
            "Next.js 15 (App Router)",
            "PostgreSQL 16 + Drizzle ORM",
            "pg-boss (Async Workers)",
            "Better Auth (RBAC)",
            "Wompi Gateway (Factory)",
            "Tailwind CSS v4",
          ],
        },
        metrics: {
          primary: { value: "100%", label: "AUTOMATED PAYOUTS" },
          secondary: { value: "8 Modules", label: "ISOLATED DOMAINS" },
        },
        githubUrl: "https://github.com/kailabs-workspace/oficia-platform",
        liveUrl: "https://github.com/kailabs-workspace/oficia-platform",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
        highlights: [
          "8 Isolated domain modules with strict type contracts",
          "4 pg-boss worker clocks (expiry, WhatsApp alerts, autocompletion, payouts)",
          "100% strict type safety from SQL to React",
          "Wompi payment gateway with local mock engine",
        ],
        consoleLogs: [
          { who: "DEV", text: "Drizzle schema initialized: 19 relational tables verified." },
          { who: "SYSTEM", text: "pg-boss worker online: 4 background clock queues active." },
          { who: "AI_AGENT", text: "Booking #4082 created: time slot held for 15 min." },
          { who: "SYSTEM", text: "Wompi payment captured. WhatsApp notification dispatched." },
          { who: "KAI", text: "Weekly settlement payout batch generated automatically." },
        ],
      },
    ],
  },

  pricing: {
    tag: "/// ENGAGEMENT MODELS",
    title: "How We Collaborate",
    subtitle: "> Transparent, high-velocity engineering models tailored to your roadmap.",
    statusReady: "AVAILABLE",
    idealForLabel: "IDEAL FOR",
    deliverablesLabel: "KEY DELIVERABLES",
    ctaBtn: "BOOK CONSULTATION ▶",
    customNote:
      "100% client-owned code, zero proprietary lock-in, and direct access to senior engineers.",
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
          "ROI Model & Roadmap",
        ],
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
          "100% IP Ownership & Cloud Deployment",
        ],
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
          "Code Reviews & Automated Testing",
        ],
      },
    ],
    comparison: {
      title: "KAI LABS vs Traditional Consultancies",
      columns: ["Dimension", "Traditional Consultancies", "KAI LABS AI-Native Studio"],
      rows: [
        {
          feature: "Delivery Velocity",
          traditional: "Slow, sequential sprints with junior devs",
          kaiLabs: "3.8x faster with senior leads and AI-native workflows",
        },
        {
          feature: "Architecture",
          traditional: "Over-engineered microservices or legacy code",
          kaiLabs: "Clean modular monoliths with strict typing",
        },
        {
          feature: "Automation",
          traditional: "Manual glue code and offshore staffing",
          kaiLabs: "Autonomous background worker engines and event pipelines",
        },
        {
          feature: "Communication",
          traditional: "Layers of non-technical account managers",
          kaiLabs: "Direct engineering collaboration with the builders",
        },
        {
          feature: "Code Ownership",
          traditional: "Vendor lock-in or licensing fees",
          kaiLabs: "100% client IP, standard open-source stack",
        },
      ],
    },
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
        desc: "Webhooks · Multi-Channel APIs · Input Queues",
      },
      reason: {
        label: "02 DOMAIN SERVICES",
        desc: "Isolated Services · Deterministic Business Logic",
      },
      act: {
        label: "03 AUTONOMOUS WORKERS",
        desc: "pg-boss Clocks · Payout Batches · Alerts",
      },
    },
    stackLayers: [
      {
        category: "APPLICATION & FRONTEND",
        title: "Modern Full-Stack Interfaces",
        description:
          "Fast server-rendered web applications with strict TypeScript typing and accessible components.",
        tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "shadcn/ui", "TanStack Router"],
      },
      {
        category: "DATA & PERSISTENCE",
        title: "Type-Safe Relational Databases",
        description:
          "PostgreSQL with declarative Drizzle ORM migrations, ensuring transactional consistency.",
        tech: ["PostgreSQL 16", "Drizzle ORM", "pgvector", "Drizzle Kit"],
      },
      {
        category: "WORKERS & AUTOMATION",
        title: "Autonomous Event Engines",
        description:
          "Transactional queues managing expirations, settlements, and notifications with idempotent retries.",
        tech: ["pg-boss", "Redis Queues", "Cron Schedulers", "Dead-Letter Queues"],
      },
      {
        category: "PAYMENTS & SECURITY",
        title: "Security & Transactional Billing",
        description:
          "RBAC authentication, verified webhooks, and payment gateways with local and international support.",
        tech: ["Better Auth (RBAC)", "Wompi Gateway", "Stripe", "HMAC Webhooks"],
      },
    ],
    processLifecycle: [
      {
        step: "01",
        title: "Domain Isolation",
        desc: "Independent modules with strictly-typed contracts.",
      },
      {
        step: "02",
        title: "Background Workers",
        desc: "Async tasks handled by pg-boss clocks off the main thread.",
      },
      {
        step: "03",
        title: "Multi-Channel Triggers",
        desc: "Instant alerts via WhatsApp, transactional email, and console.",
      },
      {
        step: "04",
        title: "Continuous Observability",
        desc: "Real-time monitoring ensuring 99.9% operational reliability.",
      },
    ],
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
        sub: "Vs traditional consultancies",
      },
      automation: {
        label: "AUTOMATION",
        val: "94.2%",
        sub: "Autonomous operations",
      },
      status: {
        label: "ARCHITECTURE",
        val: "MODULAR",
        sub: "8 Domain modules",
      },
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
      processOrchestrator: "pg-boss Workers",
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
      activePipelinesLabel: "> accelerators :",
    },
    eventPool: [
      {
        ch: "PIPELINE",
        who: "oficia-core",
        msg: "Generating weekly payout batch for 42 professionals...",
        reply: "Completed in 312ms. Settlement batch generated.",
      },
      {
        ch: "AGENT",
        who: "booking-clock",
        msg: "Checking expiration window for unconfirmed booking #9102...",
        reply: "Expired idempotently. Time slot returned to availability grid.",
      },
      {
        ch: "DEPLOY",
        who: "ci-pipeline",
        msg: "Running strict typecheck and integration tests across 8 modules...",
        reply: "Passed: 0 errors, 19 tables verified in Drizzle.",
      },
      {
        ch: "DATABASE",
        who: "pg-boss-worker",
        msg: "WhatsApp notification job dequeued...",
        reply: "Appointment reminder dispatched to customer (+503 7••• ••••).",
      },
      {
        ch: "PIPELINE",
        who: "auth-gateway",
        msg: "Domain RBAC check for /admin/settlements...",
        reply: "Access authorized for Admin role.",
      },
    ],
  },

  notFound: {
    title: "404",
    subtitle: "Route Not Found",
    desc: "The requested resource does not exist in KAI LABS.",
    goHome: "Return Home",
  },
  error: {
    title: "System Exception",
    desc: "An exception occurred during execution. Please try again.",
    tryAgain: "Retry",
    goHome: "Return Home",
  },
};
