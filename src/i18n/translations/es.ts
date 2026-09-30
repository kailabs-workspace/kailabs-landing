import type { TranslationDictionary } from "../types";

export const es: TranslationDictionary = {
  meta: {
    home: {
      title: "KAI LABS // Consultora de Ingeniería de Software AI-Native",
      description:
        "Convertimos empresas en organizaciones AI-native. Diseñamos plataformas transaccionales a medida y automatizamos procesos con agentes y workers autónomos.",
    },
    cases: {
      title: "KAI LABS // Proyectos & Casos de Estudio",
      description:
        "Sistemas en producción construidos por KAI LABS: Marketplace Oficia y motores de automatización de alta concurrencia.",
    },
    pricing: {
      title: "KAI LABS // Modelos de Trabajo",
      description:
        "Modelos de ingeniería de alta velocidad: Sprints de Transformación, Desarrollo Punta a Punta y Pods Dedicados.",
    },
    integrations: {
      title: "KAI LABS // Arquitectura & Stack",
      description:
        "Plano de arquitectura AI-native: Monolitos modulares, workers autónomos en segundo plano y tipado estricto.",
    },
    dashboard: {
      title: "KAI LABS // Consola de Telemetría",
      description:
        "Telemetría en tiempo real de pipelines de entrega de software AI-native y métricas de rendimiento.",
    },
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
    card: "// POD_01",
  },
  home: {
    statusTag: "> ESTADO: ACTIVO // DISPONIBILIDAD Q4",
    missionBrief: "/// INGENIERÍA DE SOFTWARE & AUTOMATIZACIÓN AI-NATIVE",
    heroHeadline1: "CONVERTIMOS",
    heroHeadline2: "EMPRESAS EN",
    heroHeadlineHighlight: "AI-NATIVE",
    heroDescription:
      "Diseñamos plataformas a medida y automatizamos procesos críticos de negocio mediante motores de eventos y workers autónomos. Velocidad de entrega 3.8x sin deuda técnica.",
    heroCtaPrimary: "Iniciar Proyecto",
    heroCtaSecondary: "Ver Caso: Oficia",
    quickStats: {
      stat1: {
        label: "VELOCIDAD",
        val: "3.8X",
        sub: "Más rápido vs tradicional",
      },
      stat2: {
        label: "AUTOMATIZACIÓN",
        val: "85%+",
        sub: "De procesos manuales",
      },
      stat3: {
        label: "ARQUITECTURA",
        val: "MODULAR",
        sub: "Cero deuda técnica",
      },
      stat4: {
        label: "INSIGNIA",
        val: "OFICIA",
        sub: "Marketplace en producción",
      },
    },
    manifestoTag: "/// 01 — TESIS",
    manifestoWords:
      "No construimos software heredado — convertimos empresas en motores autónomos AI-native.".split(
        " ",
      ),
    manifestoSub:
      "Combinamos rigor arquitectónico con flujos nativos de IA para construir productos críticos a una velocidad sin precedentes.",

    servicesSectionTag: "/// 02 — CAPACIDADES",
    servicesSectionTitle: "Servicios de Ingeniería",
    servicesSectionSubtitle:
      "De la arquitectura a producción: plataformas escalables, automatización de procesos y pods de desarrollo.",
    servicesCapabilitiesBadge: "CAPACIDADES DE INGENIERÍA",
    servicesList: [
      {
        id: "ai-products",
        number: "01",
        title: "Ingeniería de Software AI-Native",
        shortDesc: "Plataformas web y transaccionales de alto rendimiento.",
        description:
          "Monolitos modulares limpios, tipado estricto extremo a extremo y arquitecturas preparadas para alta concurrencia.",
        deliverables: [
          "Plataformas Web en Next.js & React",
          "Arquitectura de Monolito Modular",
          "PostgreSQL & Drizzle ORM Type-Safe",
          "Pruebas Automatizadas & CI/CD",
        ],
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Tailwind", "Docker"],
      },
      {
        id: "process-automation",
        number: "02",
        title: "Automatización de Procesos & Workers",
        shortDesc: "Reemplazo de tareas manuales con motores de eventos autónomos.",
        description:
          "Colas asíncronas y relojes en segundo plano que ejecutan caducidades, liquidaciones y alertas sin intervención humana.",
        deliverables: [
          "Workers en Fondo (pg-boss / colas)",
          "Pipelines en WhatsApp, Slack & Webhooks",
          "Conciliación & Cobros Automatizados",
          "Alertas en Tiempo Real & Handoff",
        ],
        technologies: ["pg-boss", "Redis", "WhatsApp API", "Stripe", "Webhooks", "Node.js"],
      },
      {
        id: "ai-systems",
        number: "03",
        title: "Sistemas de IA & Agentes",
        shortDesc: "Integración empresarial de LLMs y flujos deterministas.",
        description:
          "Agentes para extracción de datos no estructurados, RAG a medida y toma de decisiones con guardrails estrictos.",
        deliverables: [
          "RAG Especializado para tu Negocio",
          "Agentes de Extracción Documental",
          "Enrutamiento Inteligente de Solicitudes",
          "Guardrails de Seguridad & Cero Alucinación",
        ],
        technologies: ["OpenAI", "Anthropic", "LangChain", "pgvector", "FastAPI", "Python"],
      },
      {
        id: "dedicated-pods",
        number: "04",
        title: "Pods Dedicados de Ingeniería",
        shortDesc: "Squads senior integrados directamente a tu roadmap.",
        description:
          "Células de desarrollo de alto impacto que entregan software cada semana con comunicación directa y código 100% de tu propiedad.",
        deliverables: [
          "Squad de 2 a 4 Ingenieros Senior",
          "Entregas Semanales & Demos Continuas",
          "Comunicación Directa en Slack/Discord",
          "Propiedad Total del Código (100% IP)",
        ],
        technologies: ["Git", "GitHub Actions", "Docker", "AWS / Vercel", "Agile"],
      },
    ],
    servicesCta: {
      title: "¿Listo para iniciar tu desarrollo?",
      subtitle:
        "Agenda un discovery técnico para analizar la arquitectura y alcance de tu plataforma.",
      btn: "INICIAR SCOPING TÉCNICO ▶",
    },

    flagshipTag: "/// 03 — PROYECTO INSIGNIA",
    flagshipTitle: "Oficia Platform",
    flagshipSubtitle:
      "Marketplace transaccional de servicios profesionales diseñado y desarrollado por KAI LABS.",
    flagshipProject: {
      name: "PLATAFORMA OFICIA",
      category: "Marketplace Transaccional // El Salvador (USD)",
      summary:
        "Plataforma completa construida como un monolito modular de 8 dominios con workers asíncronos en pg-boss y pasarela de pago Wompi.",
      architectureTitle: "Monolito Modular (8 Módulos de Dominio)",
      architectureDesc:
        "Fronteras estrictas entre Identidad, Catálogo, Disponibilidad, Reservas, Pagos, Reputación, Mensajería y Notificaciones.",
      stackTitle: "Stack en Producción",
      keyResults: [
        { label: "DOMAINS", val: "8 MODULES" },
        { label: "WORKERS", val: "4 CLOCKS" },
        { label: "DISPATCH", val: "100% AUTO" },
        { label: "TYPE SAFETY", val: "STRICT TS" },
      ],
      githubBtn: "Ver en GitHub",
      viewCaseBtn: "Ver Caso Completo",
      specs: [
        { label: "Framework", value: "Next.js 15 (App Router, Server Actions)" },
        { label: "Base de Datos", value: "PostgreSQL 16 + Drizzle ORM" },
        { label: "Workers", value: "pg-boss (4 Relojes de Eventos)" },
        { label: "Autenticación", value: "Better Auth con RBAC de Dominio" },
        { label: "Pagos", value: "Wompi Gateway (Factory Mock & Live)" },
        { label: "Mensajería", value: "WhatsApp API & Resend" },
      ],
    },

    transformationTag: "/// 04 — PROCESO",
    transformationTitle: "Roadmap de Transformación",
    transformationSubtitle:
      "Proceso estructurado de 4 fases para modernizar operaciones y desplegar sistemas autónomos.",
    transformationLifecycleLabel: "Ciclo de Transformación de Consultoría",
    transformationSteps: [
      {
        id: "audit",
        phase: "FASE 01",
        title: "Auditoría Operativa",
        desc: "Mapeo de cuellos de botella y diseño del plan de automatización con mayor ROI.",
        status: "COMPLETED",
        metric: "100% Procesos Mapeados",
        tech: ["Process Mining", "Revisión Técnica"],
      },
      {
        id: "design",
        phase: "FASE 02",
        title: "Arquitectura Modular",
        desc: "Diseño de esquemas de datos, contratos de API y delimitación de módulos.",
        status: "COMPLETED",
        metric: "8 Dominios Aislados",
        tech: ["Drizzle ORM", "Event Storming"],
      },
      {
        id: "build",
        phase: "FASE 03",
        title: "Desarrollo Acelerado",
        desc: "Construcción por sprints con herramientas asistidas por IA y tipado estricto.",
        status: "ACTIVE",
        metric: "Velocidad 3.8x",
        tech: ["Next.js", "TypeScript", "pg-boss"],
      },
      {
        id: "orchestrate",
        phase: "FASE 04",
        title: "Despliegue & Telemetría",
        desc: "Puesta en producción con workers autónomos y monitoreo en tiempo real.",
        status: "RUNNING",
        metric: "99.9% Uptime",
        tech: ["Docker", "PostgreSQL", "Wompi"],
      },
    ],
    transformationTerminal: {
      title: "// AUDITORIA_SISTEMA.sh",
      status: "LISTO",
      runAuditBtn: "EJECUTAR_AUDITORIA",
      runningMsg: "Analizando arquitectura y pipeline de automatización...",
      completedMsg: "Auditoría completada: Plataforma lista para despliegue AI-native.",
    },

    storyTag: "/// 05 — EVOLUCIÓN INTERACTIVA",
    storyTitle: "La Transformación a AI-Native",
    storySubtitle: "Una experiencia interactiva a través de los 4 estados de madurez tecnológica.",
    storyControls: {
      auto: "AUTO (6s)",
      paused: "PAUSADO",
      prevAria: "Capítulo anterior",
      nextAria: "Siguiente capítulo",
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
        avgTime: "Tiempo promedio por ciclo: 24 a 48 horas",
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
          "notificaciones",
        ],
        isolatedNote: "Contratos de dominio 100% aislados en Drizzle ORM",
      },
      stage3: {
        state: "ESTADO: WORKERS ACTIVOS",
        async: "ASÍNCRONO",
        clock1: "Reloj 01: Caducidad (24h)",
        clock2: "Reloj 02: Alerta WhatsApp (20h)",
        clock3: "Reloj 03: Lote Liquidación Semanal",
        note: "pg-boss ejecutando tareas en background sin latencia",
      },
      stage4: {
        state: "ESTADO: EMPRESA AI-NATIVE",
        velocity: "VELOCIDAD 3.8X",
        uptimeLabel: "UPTIME OPERATIVO",
        ipLabel: "PROPIEDAD CLIENTE",
        note: "SISTEMA COMPLETAMENTE AUTÓNOMO Y ESCALABLE",
      },
    },
    storyChapters: [
      {
        id: "legacy",
        chapter: "CAPÍTULO 01",
        title: "El Estado Fragmentado",
        badge: "LEGACY // ALTA FRICCIÓN",
        state: "Operación Manual",
        description:
          "Hojas de cálculo desconectadas, validación manual de citas y retrasos de más de 24 horas en responder solicitudes.",
        metricValue: "24h+",
        metricLabel: "Latencia Operativa",
        techPill: "Hojas de Cálculo · Procesos Manuales",
      },
      {
        id: "modular",
        chapter: "CAPÍTULO 02",
        title: "Desacoplamiento Modular",
        badge: "ARQUITECTURA // TYPE-SAFE",
        state: "Monolito Modular",
        description:
          "Aislamiento de la lógica de negocio en 8 dominios independientes con tipado estricto en Next.js y Drizzle ORM.",
        metricValue: "8 Dominios",
        metricLabel: "Fronteras Aisladas",
        techPill: "TypeScript · Drizzle ORM · PostgreSQL",
      },
      {
        id: "automation",
        chapter: "CAPÍTULO 03",
        title: "Workers & Eventos de Fondo",
        badge: "MOTORES // ASÍNCRONOS",
        state: "Workers Autónomos",
        description:
          "Relojes en pg-boss que manejan caducidades, alertas de WhatsApp y generación automática de lotes de liquidación.",
        metricValue: "100%",
        metricLabel: "Tareas en Segundo Plano",
        techPill: "pg-boss · Redis · WhatsApp Webhooks",
      },
      {
        id: "native",
        chapter: "CAPÍTULO 04",
        title: "La Empresa AI-Native",
        badge: "ESTADO FINAL // VELOCIDAD 3.8X",
        state: "Plataforma Inteligente",
        description:
          "Sistemas autónomos que operan 24/7 con observabilidad en tiempo real, 99.9% uptime y cero deuda técnica.",
        metricValue: "3.8X",
        metricLabel: "Velocidad de Entrega",
        techPill: "Next.js 15 · Event Clocks · Wompi Gateway",
      },
    ],

    philosophyTag: "/// 06 — PRINCIPIOS",
    philosophyTitle: "Estándares de Ingeniería",
    philosophyCards: [
      {
        title: "Arquitectura Modular",
        badge: "CERO DEUDA",
        desc: "Monolitos limpios con límites de dominio claros. Código mantenible sin complejidades innecesarias.",
      },
      {
        title: "Workers Autónomos",
        badge: "BACKGROUND ENGINES",
        desc: "Tareas en segundo plano que gestionan caducidades, liquidaciones y alertas automáticamente.",
      },
      {
        title: "Comunicación Directa",
        badge: "SIN INTERMEDIARIOS",
        desc: "Hablas directamente con los ingenieros senior que diseñan y construyen tu producto.",
      },
    ],

    contactTag: "/// 06 — CONTACTO",
    contactTitle: "Iniciemos tu Proyecto",
    contactSubtitle:
      "Cuéntanos sobre tu iniciativa. Te responderemos con una propuesta técnica en menos de 24 horas.",
    contactForm: {
      namePlaceholder: "Nombre y cargo",
      emailPlaceholder: "Correo corporativo",
      companyPlaceholder: "Empresa u organización",
      projectTypeLabel: "Tipo de proyecto",
      projectTypes: [
        "Plataforma Web a Medida",
        "Automatización de Procesos",
        "Integración de Agentes IA",
        "Pod Dedicado de Ingeniería",
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
      remoteLocation: "Pods Remotos · Américas & Europa",
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
      copyright: "© {year} KAI LABS. TODOS LOS DERECHOS RESERVADOS.",
    },
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
        summary:
          "Monolito modular de 8 dominios con workers asíncronos para liquidaciones semanales, caducidad de citas y notificaciones por WhatsApp.",
        challenge:
          "Lanzar un marketplace con lógica compleja: políticas de menores (ADR 0004), caducidad de citas a las 24h, dispersión semanal de pagos y pasarela Wompi.",
        solution:
          "Monolito modular en Next.js 15, Drizzle ORM y PostgreSQL 16 con 4 relojes de workers en pg-boss y fábrica abstracta de pagos.",
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
            "notificaciones (WhatsApp / Resend)",
          ],
          stack: [
            "Next.js 15 (App Router)",
            "PostgreSQL 16 + Drizzle ORM",
            "pg-boss (Workers en Fondo)",
            "Better Auth (RBAC)",
            "Wompi Gateway (Factory)",
            "Tailwind CSS v4",
          ],
        },
        metrics: {
          primary: { value: "100%", label: "LIQUIDACIONES AUTOMATIZADAS" },
          secondary: { value: "8 Módulos", label: "DOMINIOS AISLADOS" },
        },
        githubUrl: "https://github.com/kailabs-workspace/oficia-platform",
        liveUrl: "https://github.com/kailabs-workspace/oficia-platform",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=70",
        highlights: [
          "8 Módulos de dominio aislados con contratos de tipo estricto",
          "4 Relojes pg-boss (caducidad, alertas WhatsApp, autocompletado, lotes)",
          "Type Safety 100% estricto de SQL a React",
          "Pasarela Wompi con modo simulación local",
        ],
        consoleLogs: [
          { who: "DEV", text: "Esquema Drizzle inicializado: 19 tablas verificadas." },
          { who: "SYSTEM", text: "Worker pg-boss activo: 4 relojes en segundo plano." },
          { who: "AI_AGENT", text: "Solicitud #4082 creada: franja horaria retenida por 15 min." },
          { who: "SYSTEM", text: "Pago Wompi confirmado. Notificación WhatsApp enviada." },
          { who: "KAI", text: "Lote de liquidación semanal generado automáticamente." },
        ],
      },
    ],
  },

  pricing: {
    tag: "/// MODELOS DE TRABAJO",
    title: "Cómo Colaboramos",
    subtitle: "> Modelos ágiles y flexibles adaptados a tu roadmap y objetivos de transformación.",
    statusReady: "DISPONIBLE",
    idealForLabel: "IDEAL PARA",
    deliverablesLabel: "ENTREGABLES CLAVE",
    ctaBtn: "AGENDAR CONSULTA ▶",
    customNote:
      "100% propiedad intelectual del cliente, cero licencias propietarias y comunicación directa con ingenieros senior.",
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
          "Cálculo de ROI & Roadmap",
        ],
      },
      {
        code: "MODELO_02",
        name: "DESARROLLO PUNTA A PUNTA",
        tagline: "Lanzamiento de nuevas plataformas",
        timeline: "6 a 12 Semanas",
        featured: true,
        idealFor:
          "Startups y empresas que necesitan construir una plataforma transaccional completa.",
        deliverables: [
          "Monolito Modular en Next.js / TypeScript",
          "Bases de Datos PostgreSQL + Drizzle",
          "Workers Autónomos en Segundo Plano",
          "Integración de Pagos, Auth & Notificaciones",
          "Propiedad 100% de IP & Despliegue en tu Nube",
        ],
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
          "Revisión de Código & Testing Automatizado",
        ],
      },
    ],
    comparison: {
      title: "KAI LABS vs Consultoras Tradicionales",
      columns: ["Aspecto", "Consultoras Tradicionales", "KAI LABS AI-Native Studio"],
      rows: [
        {
          feature: "Velocidad de Entrega",
          traditional: "Sprints lentos con desarrolladores junior",
          kaiLabs: "3.8x más rápido con arquitectos senior y flujos AI-native",
        },
        {
          feature: "Arquitectura",
          traditional: "Microservicios inflados o código legado",
          kaiLabs: "Monolitos modulares limpios con tipado estricto",
        },
        {
          feature: "Automatización",
          traditional: "Procesos manuales y offshore",
          kaiLabs: "Workers autónomos en segundo plano y agentes de eventos",
        },
        {
          feature: "Comunicación",
          traditional: "Múltiples intermediarios no técnicos",
          kaiLabs: "Trato directo con los ingenieros que construyen el sistema",
        },
        {
          feature: "Propiedad de Código",
          traditional: "Vendor lock-in o licencias adicionales",
          kaiLabs: "100% propiedad del cliente, stack open source",
        },
      ],
    },
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
        desc: "Webhooks · APIs Multicanal · Colas de Entrada",
      },
      reason: {
        label: "02 SERVICIOS DE DOMINIO",
        desc: "Servicios Aislados · Lógica Determinista",
      },
      act: {
        label: "03 WORKERS AUTÓNOMOS",
        desc: "Relojes pg-boss · Lotes de Liquidación · Alertas",
      },
    },
    stackLayers: [
      {
        category: "APLICACIÓN & FRONTEND",
        title: "Interfaces Modernas Full-Stack",
        description:
          "Aplicaciones web renderizadas en servidor con tipado TypeScript estricto y componentes accesibles.",
        tech: ["Next.js 15", "React 19", "Tailwind CSS v4", "shadcn/ui", "TanStack Router"],
      },
      {
        category: "DATOS & PERSISTENCIA",
        title: "Bases de Datos Relacionales Type-Safe",
        description:
          "PostgreSQL con migraciones declarativas en Drizzle ORM, asegurando consistencia transaccional.",
        tech: ["PostgreSQL 16", "Drizzle ORM", "pgvector", "Drizzle Kit"],
      },
      {
        category: "WORKERS & AUTOMATIZACIÓN",
        title: "Motores de Eventos Autónomos",
        description:
          "Colas transaccionales que gestionan caducidades, liquidaciones y alertas con reintentos idempotentes.",
        tech: ["pg-boss", "Colas Redis", "Cron Schedulers", "Dead-Letter Queues"],
      },
      {
        category: "PAGOS & SEGURIDAD",
        title: "Seguridad & Cobros Transaccionales",
        description:
          "Autenticación RBAC, webhooks verificados y pasarelas de pago con soporte local e internacional.",
        tech: ["Better Auth (RBAC)", "Wompi Gateway", "Stripe", "Webhooks HMAC"],
      },
    ],
    processLifecycle: [
      {
        step: "01",
        title: "Aislamiento de Dominio",
        desc: "Módulos independientes con contratos de tipado estricto.",
      },
      {
        step: "02",
        title: "Workers en Segundo Plano",
        desc: "Tareas asíncronas ejecutadas por relojes pg-boss fuera del hilo principal.",
      },
      {
        step: "03",
        title: "Disparadores Multicanal",
        desc: "Alertas inmediatas por WhatsApp, correo transaccional y consola.",
      },
      {
        step: "04",
        title: "Observabilidad Continua",
        desc: "Monitoreo en tiempo real con 99.9% de confiabilidad operativa.",
      },
    ],
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
        sub: "Vs consultoría tradicional",
      },
      automation: {
        label: "AUTOMATIZACIÓN",
        val: "94.2%",
        sub: "Operaciones autónomas",
      },
      status: {
        label: "ARQUITECTURA",
        val: "MODULAR",
        sub: "8 Módulos de dominio",
      },
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
      processOrchestrator: "Workers pg-boss",
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
      activePipelinesLabel: "> aceleradores :",
    },
    eventPool: [
      {
        ch: "PIPELINE",
        who: "oficia-core",
        msg: "Generando lote de liquidación semanal para 42 profesionales...",
        reply: "Completado en 312ms. Lote de liquidación generado.",
      },
      {
        ch: "AGENT",
        who: "reloj-reservas",
        msg: "Comprobando ventana de caducidad de reserva #9102...",
        reply: "Caducada de forma idempotente. Franja horaria liberada.",
      },
      {
        ch: "DEPLOY",
        who: "ci-pipeline",
        msg: "Ejecutando typecheck y pruebas en 8 módulos...",
        reply: "Aprobado: 0 errores, 19 tablas verificadas en Drizzle.",
      },
      {
        ch: "DATABASE",
        who: "pg-boss-worker",
        msg: "Tarea de notificación WhatsApp tomada de la cola...",
        reply: "Recordatorio enviado al cliente (+503 7••• ••••).",
      },
      {
        ch: "PIPELINE",
        who: "auth-gateway",
        msg: "Verificación de RBAC para /admin/liquidaciones...",
        reply: "Acceso autorizado para rol Admin.",
      },
    ],
  },

  notFound: {
    title: "404",
    subtitle: "Ruta no encontrada",
    desc: "El recurso solicitado no existe en KAI LABS.",
    goHome: "Volver al Inicio",
  },
  error: {
    title: "Error del Sistema",
    desc: "Ocurrió una excepción durante la ejecución. Por favor reintenta.",
    tryAgain: "Reintentar",
    goHome: "Volver al Inicio",
  },
};
