export type Locale = "es" | "en";

const translations = {
  es: {
    // ── Nav & Sidebar ──
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      experience: "Experiencia",
      technologies: "Tecnologías",
      education: "Educación",
      contact: "Contacto",
      dashboard: "Panel Principal",
    },
    // ── Header ──
    header: {
      systemStable: "[ SISTEMA_ESTABLE ]",
    },
    // ── Sidebar ──
    sidebar: {
      authLevel: "[ AUTH_LEVEL_MID_V4 ]",
      sysLoad: "CARGA_SYS",
      contactBtn: "CONTACTAR",
    },
    // ── Boot Sequence ──
    boot: {
      lines: [
        "WAYNE_TECH // PORTFOLIO_OS v4.0",
        "Inicializando sistema...",
        "Cargando framework táctico: NEXT.js_14",
        "Montando interfaz: REACT_18",
        "Compilando diseño: TAILWIND_CSS",
        "Autenticando usuario: JEFFREY MENÉNDEZ",
        "Nivel de acceso: AUTH_LEVEL_MID_V4",
        "Ubicación: GUA_SECTOR // 14.63°N 90.50°W",
        "Estado: MISIÓN_ACTIVA — ScalingSoft",
        "Integridad: ████████████████████ 100%",
        "INICIO COMPLETO — BIENVENIDO, OPERADOR.",
      ],
      loading: "CARGANDO...",
      ready: "LISTO",
    },
    // ── Bio Panel ──
    bio: {
      processId: "ID: BIO_PROCESS_001",
      roleTitle: "DESARROLLADOR_FRONTEND",
      initLine1: "Inicializando interfaz neural...",
      initLine2: "Usuario autenticado. Cargando BIO_OS...",
      bioText:
        "Desarrollador Frontend Mid-Level con +4 años de trayectoria creando aplicaciones web modernas y optimizadas. Especialista en React, Next.js y TypeScript, con un enfoque técnico centrado en la eficiencia del código y la experiencia de usuario. Experto en el desarrollo de interfaces responsivas con Tailwind CSS y la implementación de mejores prácticas de accesibilidad y rendimiento.",
      viewProjects: "VER_PROYECTOS",
      contactMe: "CONTACTAR",
      stats: {
        status: "ESTADO",
        statusValue: "[ MISIÓN_ACTIVA ]",
        experience: "EXPERIENCIA",
        experienceValue: "+4 AÑOS",
        location: "UBICACIÓN",
        locationValue: "GUA_SECTOR",
        clearance: "NIVEL",
        clearanceValue: "AUTH_MID_V4",
      },
    },
    // ── Telemetry Panel ──
    telemetry: {
      githubTitle: "GITHUB_TELEMETRÍA",
      yearCycle: "CICLO_AÑO_2026",
      less: "MENOS",
      more: "MÁS",
      coreTitle: "HABILIDADES_CORE",
    },
    // ── Project HUD ──
    projects: {
      sectionTitle: "PROYECTOS // EN PRODUCCIÓN",
      items: [
        {
          name: "MAXICOMPRA",
          role: "CO-DEV_FRONTEND",
          description:
            "Plataforma e-commerce con funcionalidades críticas. Desarrollo con React, TypeScript y Redux; personalización de Magento con PHP.",
        },
        {
          name: "SKECHERS_SHOE_FINDER",
          role: "CO-DEV_FRONTEND",
          description:
            "Herramienta interactiva de selección de calzado con experiencia de usuario dinámica y optimizada.",
        },
        {
          name: "UGG_STYLE_QUIZ",
          role: "DESARROLLADOR",
          description:
            "Quiz interactivo de estilo para UGG con lógica de experiencia de usuario y flujo de recomendaciones.",
        },
        {
          name: "HOTEL_MANSIÓN",
          role: "DESARROLLADOR",
          description:
            "Plataforma web para industria hotelera con diseño moderno y sistema de reservaciones.",
        },
        {
          name: "HAUS_LABS_FOUNDATION",
          role: "CO-DEV",
          description:
            "Interfaz de alta gama para la marca de belleza de Lady Gaga. Experiencia premium con selección de productos personalizada.",
        },
        {
          name: "JARVIS // SCALINGSOFT",
          role: "LEAD_FRONTEND",
          description:
            "Plataforma de agentes de IA con interfaces dinámicas. Integración de React y NestJS para gestión inteligente de conversaciones y flujos automatizados.",
        },
      ],
      comingSoon: "PRÓXIMAMENTE",
    },
    // ── Mission Log ──
    missions: {
      sectionTitle: "EXPERIENCIA // TRAYECTORIA",
      terminalLabel: "TERMINAL: HISTORIAL_PROFESIONAL",
      commandLine: "cat /var/log/misiones/*.log --sort=desc",
      endOfLog: "FIN_DE_LOG",
      missionsArchived: "misiones archivadas",
      statusOperational: "ESTADO: OPERATIVO",
      objectiveLabel: "OBJETIVO:",
      activeLabel: "ACTIVO",
      items: [
        {
          company: "ScalingSoft",
          subtitle: "AGENTES IA",
          timeline: "Febrero 2026 — Presente",
          active: true,
          objective:
            "Liderar el diseño y desarrollo de agentes de IA con arquitecturas escalables.",
          actions: [
            "Integración de React y NestJS para interfaces dinámicas y lógica de servidor",
            "Optimización de gestión de estados complejos y latencia en modelos de lenguaje",
          ],
        },
        {
          company: "Cartful Solutions",
          subtitle: "MÓDULOS UI",
          timeline: "Julio 2024 — Noviembre 2025",
          active: false,
          objective:
            "Desarrollo de interfaces de usuario modulares y dinámicas para clientes enterprise.",
          actions: [
            "Optimización de diseño responsivo con SASS/Tailwind CSS",
            "Gestión eficiente de estado en aplicaciones de gran escala",
          ],
        },
        {
          company: "Maxicompra S.A",
          subtitle: "E-COMMERCE",
          timeline: "Enero 2023 — Julio 2024",
          active: false,
          objective:
            "Implementación de funcionalidades críticas para plataforma e-commerce.",
          actions: [
            "Desarrollo con React, TypeScript y Redux",
            "Personalización de Magento con PHP para flujos de compra",
          ],
        },
        {
          company: "Rapipuerta S.A",
          subtitle: "CONTRATO",
          timeline: "Junio 2022 — Agosto 2023",
          active: false,
          objective:
            "Implementación de interfaces eficientes y dinámicas para sistema empresarial.",
          actions: [
            "Optimización de estilos con Tailwind CSS",
            "Integración de Magento para flujos de producto",
          ],
        },
        {
          company: "Métodos e Ideas",
          subtitle: "CONTRATO",
          timeline: "Julio 2022 — Diciembre 2022",
          active: false,
          objective:
            "Diseño de interfaces intuitivas y atractivas con enfoque en UX.",
          actions: [
            "Creación de elementos visuales con Photoshop e Illustrator",
            "Colaboración en coherencia diseño-funcionalidad",
          ],
        },
      ],
    },
    // ── Tech Strings ──
    tech: {
      sectionTitle: "TECNOLOGÍAS // STACK TÉCNICO",
      categories: [
        { title: "LENGUAJES", subtitle: "Core" },
        { title: "FRONTEND", subtitle: "Frameworks & UI" },
        { title: "BACKEND", subtitle: "Servidor" },
        { title: "BASES_DE_DATOS", subtitle: "Almacenamiento" },
        { title: "DESPLIEGUE", subtitle: "DevOps & CI/CD" },
        { title: "DISEÑO", subtitle: "Herramientas" },
        { title: "IA", subtitle: "Inteligencia" },
      ],
    },
    // ── Academic Panel ──
    academic: {
      cellLabel: "FORMACIÓN_ACADÉMICA",
      degree: "Ingeniería en Ciencias y Sistemas",
      semester: "9.° Semestre // EN CURSO",
      university: "Universidad de San Carlos de Guatemala — CUNOC",
      certificatesTitle: "CERTIFICADOS",
      cert1: "Cisco Networking Academy — Fundamentos",
      cert2: "Cisco Networking Academy — Unhatched",
      languagesLabel: "IDIOMAS",
      spanish: "Español (Nativo)",
      english: "Inglés (B2)",
    },
    // ── Comms Link ──
    comms: {
      cellLabel: "CANALES_DE_CONTACTO",
      initLine: "Estableciendo canales de comunicación seguros...",
      channels: {
        mail: "CORREO",
        linkedin: "LINKEDIN",
        github: "GITHUB",
        phone: "TELÉFONO",
      },
      statusLine: "TODOS LOS CANALES OPERATIVOS // LISTO PARA CONTACTO",
    },
    // ── Footer ──
    footer: {
      github: "[ GITHUB ]",
      linkedin: "[ LINKEDIN ]",
      mail: "[ CORREO ]",
    },
    // ── Breadcrumbs ──
    breadcrumb: {
      mainTerminal: "TERMINAL_PRINCIPAL",
    },
  },

  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      technologies: "Technologies",
      education: "Education",
      contact: "Contact",
      dashboard: "Dashboard",
    },
    header: {
      systemStable: "[ SYSTEM_STABLE ]",
    },
    sidebar: {
      authLevel: "[ AUTH_LEVEL_MID_V4 ]",
      sysLoad: "SYS_LOAD",
      contactBtn: "CONTACT",
    },
    boot: {
      lines: [
        "WAYNE_TECH // PORTFOLIO_OS v4.0",
        "Initializing system kernel...",
        "Loading tactical framework: NEXT.js_14",
        "Mounting neural interface: REACT_18",
        "Compiling design matrix: TAILWIND_CSS",
        "Authenticating user: JEFFREY MENÉNDEZ",
        "Access level: AUTH_LEVEL_MID_V4",
        "Location lock: GUA_SECTOR // 14.63°N 90.50°W",
        "Status: ACTIVE_MISSION — ScalingSoft",
        "Integrity: ████████████████████ 100%",
        "BOOTUP COMPLETE — WELCOME, OPERATOR.",
      ],
      loading: "LOADING...",
      ready: "READY",
    },
    bio: {
      processId: "ID: BIO_PROCESS_001",
      roleTitle: "FRONTEND_DEVELOPER",
      initLine1: "Initializing neural interface...",
      initLine2: "User authenticated. Loading BIO_OS...",
      bioText:
        "Mid-Level Frontend Developer with 4+ years of experience building modern, optimized web applications. Specialized in React, Next.js, and TypeScript, with a technical focus on code efficiency and user experience. Expert in responsive interface development with Tailwind CSS and implementation of accessibility and performance best practices.",
      viewProjects: "VIEW_PROJECTS",
      contactMe: "CONTACT_ME",
      stats: {
        status: "STATUS",
        statusValue: "[ ACTIVE_MISSION ]",
        experience: "EXPERIENCE",
        experienceValue: "+4 YEARS",
        location: "LOCATION",
        locationValue: "GUA_SECTOR",
        clearance: "CLEARANCE",
        clearanceValue: "AUTH_MID_V4",
      },
    },
    telemetry: {
      githubTitle: "GITHUB_TELEMETRY",
      yearCycle: "YEAR_CYCLE_2026",
      less: "LESS",
      more: "MORE",
      coreTitle: "CORE_SKILLS",
    },
    projects: {
      sectionTitle: "PROJECTS // IN PRODUCTION",
      items: [
        {
          name: "MAXICOMPRA",
          role: "CO-DEV_FRONTEND",
          description:
            "E-commerce platform with critical features. Built with React, TypeScript, and Redux; Magento customization with PHP.",
        },
        {
          name: "SKECHERS_SHOE_FINDER",
          role: "CO-DEV_FRONTEND",
          description:
            "Interactive shoe selection tool with dynamic and optimized user experience.",
        },
        {
          name: "UGG_STYLE_QUIZ",
          role: "DEVELOPER",
          description:
            "Interactive style quiz for UGG with user experience logic and recommendation flows.",
        },
        {
          name: "HOTEL_MANSIÓN",
          role: "DEVELOPER",
          description:
            "Hospitality web platform with modern design and reservation system.",
        },
        {
          name: "HAUS_LABS_FOUNDATION",
          role: "CO-DEV",
          description:
            "High-end interface for Lady Gaga's beauty brand. Premium experience with personalized product selection.",
        },
        {
          name: "JARVIS // SCALINGSOFT",
          role: "LEAD_FRONTEND",
          description:
            "AI agents platform with dynamic interfaces. Integration of React and NestJS for intelligent conversation management and automated flows.",
        },
      ],
      comingSoon: "COMING SOON",
    },
    missions: {
      sectionTitle: "EXPERIENCE // CAREER PATH",
      terminalLabel: "TERMINAL: CAREER_HISTORY_LOG",
      commandLine: "cat /var/log/missions/*.log --sort=desc",
      endOfLog: "END_OF_LOG",
      missionsArchived: "missions archived",
      statusOperational: "STATUS: OPERATIONAL",
      objectiveLabel: "OBJECTIVE:",
      activeLabel: "ACTIVE",
      items: [
        {
          company: "ScalingSoft",
          subtitle: "AI AGENTS",
          timeline: "February 2026 — Present",
          active: true,
          objective:
            "Lead the design and development of AI agents with scalable architectures.",
          actions: [
            "Integration of React and NestJS for dynamic interfaces and server logic",
            "Optimization of complex state management and latency in language models",
          ],
        },
        {
          company: "Cartful Solutions",
          subtitle: "UI MODULES",
          timeline: "July 2024 — November 2025",
          active: false,
          objective:
            "Development of modular and dynamic user interfaces for enterprise clients.",
          actions: [
            "Responsive design optimization with SASS/Tailwind CSS",
            "Efficient state management in large-scale applications",
          ],
        },
        {
          company: "Maxicompra S.A",
          subtitle: "E-COMMERCE",
          timeline: "January 2023 — July 2024",
          active: false,
          objective:
            "Implementation of critical features for e-commerce platform.",
          actions: [
            "Development with React, TypeScript, and Redux",
            "Magento customization with PHP for purchase flows",
          ],
        },
        {
          company: "Rapipuerta S.A",
          subtitle: "CONTRACT",
          timeline: "June 2022 — August 2023",
          active: false,
          objective:
            "Implementation of efficient and dynamic interfaces for enterprise system.",
          actions: [
            "Style optimization with Tailwind CSS",
            "Magento integration for product flows",
          ],
        },
        {
          company: "Métodos e Ideas",
          subtitle: "CONTRACT",
          timeline: "July 2022 — December 2022",
          active: false,
          objective:
            "Design of intuitive and attractive interfaces with UX focus.",
          actions: [
            "Visual element creation with Photoshop and Illustrator",
            "Collaboration on design-functionality coherence",
          ],
        },
      ],
    },
    tech: {
      sectionTitle: "TECHNOLOGIES // TECH STACK",
      categories: [
        { title: "LANGUAGES", subtitle: "Core" },
        { title: "FRONTEND", subtitle: "Frameworks & UI" },
        { title: "BACKEND", subtitle: "Server" },
        { title: "DATABASES", subtitle: "Storage" },
        { title: "DEPLOYMENT", subtitle: "DevOps & CI/CD" },
        { title: "DESIGN", subtitle: "Tools" },
        { title: "AI", subtitle: "Intelligence" },
      ],
    },
    academic: {
      cellLabel: "EDUCATION",
      degree: "Computer Science & Systems Engineering",
      semester: "9th Semester // IN PROGRESS",
      university: "University of San Carlos de Guatemala — CUNOC",
      certificatesTitle: "CERTIFICATES",
      cert1: "Cisco Networking Academy — Fundamentals",
      cert2: "Cisco Networking Academy — Unhatched",
      languagesLabel: "LANGUAGES",
      spanish: "Spanish (Native)",
      english: "English (B2)",
    },
    comms: {
      cellLabel: "CONTACT_CHANNELS",
      initLine: "Establishing secure communication channels...",
      channels: {
        mail: "EMAIL",
        linkedin: "LINKEDIN",
        github: "GITHUB",
        phone: "PHONE",
      },
      statusLine: "ALL CHANNELS OPERATIONAL // READY FOR CONTACT",
    },
    footer: {
      github: "[ GITHUB ]",
      linkedin: "[ LINKEDIN ]",
      mail: "[ EMAIL ]",
    },
    breadcrumb: {
      mainTerminal: "MAIN_TERMINAL",
    },
  },
};

type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Translations = DeepStringify<(typeof translations)["es"]>;

export default translations as Record<Locale, Translations>;
