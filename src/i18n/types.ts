export type Language = "en" | "es";

export interface LogEntry {
  who: "USER" | "KAI" | "SYSTEM" | "DEV" | "AI_AGENT";
  text: string;
  time?: string;
}

export interface TransformationStep {
  id: string;
  phase: string;
  title: string;
  desc: string;
  status: "ACTIVE" | "COMPLETED" | "RUNNING";
  metric: string;
  tech: string[];
}

export interface CaseStudy {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  sector: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: {
    pattern: string;
    modules: string[];
    stack: string[];
  };
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string };
  };
  githubUrl?: string;
  liveUrl?: string;
  img: string;
  highlights: string[];
  consoleLogs: readonly LogEntry[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface EngagementModel {
  code: string;
  name: string;
  tagline: string;
  timeline: string;
  idealFor: string;
  deliverables: string[];
  featured?: boolean;
}

export interface TranslationDictionary {
  meta: {
    home: { title: string; description: string };
    cases: { title: string; description: string };
    pricing: { title: string; description: string };
    integrations: { title: string; description: string };
    dashboard: { title: string; description: string };
  };
  nav: {
    brandSubtitle: string;
    services: string;
    architecture: string;
    cases: string;
    engagement: string;
    console: string;
    briefCta: string;
    uplink: string;
    card: string;
  };
  home: {
    statusTag: string;
    missionBrief: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroHeadlineHighlight: string;
    heroDescription: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    quickStats: {
      stat1: { label: string; val: string; sub: string };
      stat2: { label: string; val: string; sub: string };
      stat3: { label: string; val: string; sub: string };
      stat4: { label: string; val: string; sub: string };
    };
    manifestoTag: string;
    manifestoWords: string[];
    manifestoSub: string;

    // Services section
    servicesSectionTag: string;
    servicesSectionTitle: string;
    servicesSectionSubtitle: string;
    servicesCapabilitiesBadge: string;
    servicesList: ServiceItem[];
    servicesCta: {
      title: string;
      subtitle: string;
      btn: string;
    };

    // Flagship Spotlight: Oficia
    flagshipTag: string;
    flagshipTitle: string;
    flagshipSubtitle: string;
    flagshipProject: {
      name: string;
      category: string;
      summary: string;
      architectureTitle: string;
      architectureDesc: string;
      stackTitle: string;
      keyResults: { label: string; val: string }[];
      githubBtn: string;
      viewCaseBtn: string;
      specs: { label: string; value: string }[];
    };

    // Interactive Transformation Simulator
    transformationTag: string;
    transformationTitle: string;
    transformationSubtitle: string;
    transformationLifecycleLabel: string;
    transformationSteps: TransformationStep[];
    transformationTerminal: {
      title: string;
      status: string;
      runAuditBtn: string;
      runningMsg: string;
      completedMsg: string;
    };

    // Interactive Storytelling Experience
    storyTag: string;
    storyTitle: string;
    storySubtitle: string;
    storyControls: {
      auto: string;
      paused: string;
      prevAria: string;
      nextAria: string;
    };
    storyHud: {
      telemetry: string;
      phaseLabel: string;
      stage1: {
        state: string;
        bottleneck: string;
        manualTitle: string;
        manualDesc: string;
        disconnectTitle: string;
        disconnectDesc: string;
        avgTime: string;
      };
      stage2: {
        state: string;
        typeSafe: string;
        modules: string[];
        isolatedNote: string;
      };
      stage3: {
        state: string;
        async: string;
        clock1: string;
        clock2: string;
        clock3: string;
        note: string;
      };
      stage4: {
        state: string;
        velocity: string;
        uptimeLabel: string;
        ipLabel: string;
        note: string;
      };
    };
    storyChapters: {
      id: string;
      chapter: string;
      title: string;
      badge: string;
      state: string;
      description: string;
      metricValue: string;
      metricLabel: string;
      techPill: string;
    }[];

    // Why AI Native
    philosophyTag: string;
    philosophyTitle: string;
    philosophyCards: {
      title: string;
      badge: string;
      desc: string;
    }[];

    // Contact & Scoping
    contactTag: string;
    contactTitle: string;
    contactSubtitle: string;
    contactForm: {
      namePlaceholder: string;
      emailPlaceholder: string;
      companyPlaceholder: string;
      projectTypeLabel: string;
      projectTypes: string[];
      timelineLabel: string;
      timelines: string[];
      detailsPlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      submittedTitle: string;
      newInquiryBtn: string;
      successMsg: string;
      directEmailLabel: string;
      headquartersLabel: string;
      slaNote: string;
      remoteLocation: string;
    };

    footer: {
      endOfFile: string;
      contact: string;
      status: string;
      origin: string;
      allSystemsNominal: string;
      responseSubtitle: string;
      builtBy: string;
      brandOps: string;
      copyright: string;
    };
  };
  cases: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    flagshipBadge: string;
    keyMetric: string;
    architectureTitle: string;
    stackTitle: string;
    challengeTitle: string;
    solutionTitle: string;
    consoleTitle: string;
    githubLinkText: string;
    streamReplayBadge: string;
    telemetryStreaming: string;
    items: readonly CaseStudy[];
  };
  pricing: {
    tag: string;
    title: string;
    subtitle: string;
    statusReady: string;
    idealForLabel: string;
    deliverablesLabel: string;
    ctaBtn: string;
    customNote: string;
    guarantee: string;
    guaranteeTitle: string;
    ipTitle: string;
    models: EngagementModel[];
    comparison: {
      title: string;
      columns: [string, string, string];
      rows: { feature: string; traditional: string; kaiLabs: string }[];
    };
  };
  integrations: {
    tag: string;
    title: string;
    subtitlePre: string;
    subtitleHighlight: string;
    subtitlePost: string;
    agentCore: string;
    routingAll: string;
    inProductionBadge: string;
    pillarPrefix: string;
    lifecycleTag: string;
    lifecycleTitle: string;
    bottomPrompt: string;
    bottomCtaBtn: string;
    pillars: {
      ingest: { label: string; desc: string };
      reason: { label: string; desc: string };
      act: { label: string; desc: string };
    };
    stackLayers: {
      category: string;
      title: string;
      description: string;
      tech: string[];
    }[];
    processLifecycle: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  dashboard: {
    tag: string;
    title: string;
    subtitle: string;
    uplinkOk: string;
    stats: {
      velocity: { label: string; val: string; sub: string };
      automation: { label: string; val: string; sub: string };
      status: { label: string; val: string; sub: string };
    };
    liveFeedTitle: string;
    streaming: string;
    inboundLabel: string;
    responseLabel: string;
    awaiting: string;
    coreVersion: string;
    bufferStatus: string;
    pipelinesTitle: string;
    systemStatusLabel: string;
    systemStatusVal: string;
    toggles: {
      codeGen: string;
      agenticQa: string;
      processOrchestrator: string;
    };
    telemetryTitle: string;
    telemetryLoad: string;
    metrics: {
      architectureLabel: string;
      architectureVal: string;
      methodologyLabel: string;
      methodologyVal: string;
      codeQualityLabel: string;
      codeQualityVal: string;
      activePipelinesLabel: string;
    };
    eventPool: {
      ch: "PIPELINE" | "DEPLOY" | "AGENT" | "DATABASE";
      who: string;
      msg: string;
      reply: string;
    }[];
  };
  notFound: {
    title: string;
    subtitle: string;
    desc: string;
    goHome: string;
  };
  error: {
    title: string;
    desc: string;
    tryAgain: string;
    goHome: string;
  };
}
