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
      langLabel: "IDIOMA",
    },
    // ── Sidebar ──
    sidebar: {
      authLevel: "[ AUTH_LEVEL_DEV_V5 ]",
      sysLoad: "CARGA_SYS",
      contactBtn: "CONTACTAR",
    },
    // ── Boot Sequence ──
    boot: {
      lines: [
        "WAYNE_TECH // PORTFOLIO_OS v5.0",
        "Inicializando sistema...",
        "Cargando framework táctico: NEXT.js_14",
        "Montando interfaz: REACT_18 // REACT_NATIVE",
        "Compilando diseño: TAILWIND_CSS",
        "Autenticando usuario: JEFFREY MENÉNDEZ",
        "Nivel de acceso: AUTH_LEVEL_DEV_V5",
        "Ubicación: GUA_SECTOR // 14.63°N 90.50°W",
        "Estado: MISIÓN_ACTIVA — Vastago Studio / Epicare",
        "Integridad: ████████████████████ 100%",
        "INICIO COMPLETO — BIENVENIDO, OPERADOR.",
      ],
      loading: "CARGANDO...",
      ready: "LISTO",
    },
    // ── Bio Panel ──
    bio: {
      processId: "ID: BIO_PROCESS_001",
      roleTitle: "DESARROLLADOR_DE_SOFTWARE",
      tagline:
        "FRONTEND Y ARQUITECTURA DE UI // AGENTIC WORKFLOWS Y SDD // DESARROLLO DE VIDEOJUEGOS",
      initLine1: "Inicializando interfaz neural...",
      initLine2: "Usuario autenticado. Cargando BIO_OS...",
      bioText:
        "Desarrollador de Software con más de 4 años de experiencia construyendo aplicaciones web y móviles modernas, escalables y orientadas al usuario. Especializado en React, Next.js, React Native y TypeScript, con énfasis en arquitectura de interfaces, sistemas de componentes reutilizables, accesibilidad y rendimiento. Experto en agentic workflows: diseño y creación de agentes, comandos personalizados, flujos de planificación y desarrollo asistido con Claude Code, aplicando Spec-Driven Development (SDD) para llevar especificaciones a implementación de forma consistente y verificable. Experiencia comprobada en entornos Agile/Scrum, integración de servicios backend mediante REST y GraphQL, y aseguramiento de calidad a través de flujos de CI/CD. Complemento mi perfil con desarrollo de videojuegos en Unity y C#.",
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
        clearanceValue: "AUTH_DEV_V5",
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
          name: "EPPIGO // EPICARE",
          role: "DEV_REACT_NATIVE",
          description:
            "Aplicación móvil para el sector asegurador construida con React Native y TypeScript. Arquitectura de componentes, gestión de estado e integración con APIs REST de extremo a extremo.",
        },
        {
          name: "JARVIS // SCALINGSOFT",
          role: "LEAD_FULLSTACK",
          description:
            "Plataforma de agentes de IA con interfaces dinámicas. Integración de React y NestJS para gestión inteligente de conversaciones y respuestas en tiempo real de modelos de lenguaje.",
        },
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
          name: "HOTEL_LOMA_REAL_RESORT",
          role: "DESARROLLADOR",
          description:
            "Sitio web para resort con diseño responsivo, galería de instalaciones y flujo de reservaciones orientado a conversión.",
        },
        {
          name: "HAUS_LABS_FOUNDATION",
          role: "CO-DEV",
          description:
            "Interfaz de alta gama para la marca de belleza de Lady Gaga. Experiencia premium con selección de productos personalizada.",
        },
        {
          name: "UNITY_GAME_LAB",
          role: "PROYECTO_PERSONAL",
          description:
            "Desarrollo de videojuegos en Unity con C#: scripting de gameplay, prototipado de mecánicas y diseño de sistemas de juego aplicando patrones de diseño y POO.",
        },
      ],
      comingSoon: "PRÓXIMAMENTE",
      inProgress: "EN CURSO",
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
          company: "Vastago Studio / Epicare Insurance",
          subtitle: "REACT NATIVE",
          role: "Desarrollador de Software — React Native",
          timeline: "Abril 2026 — Presente",
          active: true,
          objective:
            "Desarrollar la aplicación móvil Eppigo de extremo a extremo para el sector asegurador.",
          actions: [
            "Definición de arquitectura de componentes y gestión de estado con React Native y TypeScript",
            "Integración con servicios backend vía APIs REST: autenticación, manejo de errores y sincronización de datos",
            "Aplicación de agentic workflows y Spec-Driven Development con Claude Code para planificar y acelerar nuevas funcionalidades",
          ],
        },
        {
          company: "ScalingSoft",
          subtitle: "AGENTES IA // FREELANCE",
          role: "Desarrollador Fullstack (Freelance)",
          timeline: "Febrero 2026 — Abril 2026",
          active: false,
          objective:
            "Liderar el diseño y desarrollo de agentes de IA con arquitecturas escalables.",
          actions: [
            "Integración de React y NestJS para interfaces dinámicas y lógica de servidor",
            "Arquitecturas escalables de APIs y gestión de estados complejos para respuestas en tiempo real",
            "Optimización del flujo de datos entre frontend y servicios de IA, mejorando la latencia de interacción",
          ],
        },
        {
          company: "Cartful Solutions",
          subtitle: "MÓDULOS UI",
          role: "Desarrollador Frontend",
          timeline: "Julio 2024 — Noviembre 2025",
          active: false,
          objective:
            "Desarrollo de interfaces de usuario modulares y dinámicas para clientes enterprise.",
          actions: [
            "Interfaces modulares con React y JavaScript (ES6+)",
            "Coherencia visual multi-dispositivo mediante diseño responsivo con Sass y Tailwind CSS",
            "Arquitectura limpia y mantenible con componentes reutilizables y gestión eficiente del estado",
          ],
        },
        {
          company: "Maxicompra S.A.",
          subtitle: "E-COMMERCE",
          role: "Desarrollador Frontend",
          timeline: "Enero 2023 — Julio 2024",
          active: false,
          objective:
            "Implementación de funcionalidades críticas para plataforma e-commerce.",
          actions: [
            "Desarrollo con React, TypeScript y Redux",
            "Integración y personalización de Magento con PHP alineando negocio y experiencia de usuario",
            "Mejora de la velocidad de renderizado de vistas principales optimizando consultas y componentes",
          ],
        },
        {
          company: "Métodos e Ideas",
          subtitle: "CONTRATO TEMPORAL",
          role: "Desarrollador Frontend",
          timeline: "Julio 2022 — Diciembre 2022",
          active: false,
          objective:
            "Diseño de interfaces intuitivas y atractivas con enfoque en UX.",
          actions: [
            "Creación de interfaces de usuario con Figma",
            "Diseño de gráficos y elementos visuales con Photoshop e Illustrator",
            "Colaboración con equipos de desarrollo para asegurar coherencia diseño-funcionalidad",
          ],
        },
      ],
    },
    // ── Tech Strings ──
    tech: {
      sectionTitle: "TECNOLOGÍAS // STACK TÉCNICO",
      categories: [
        { title: "LENGUAJES", subtitle: "Core" },
        { title: "FRONTEND_Y_UI", subtitle: "Arquitectura de interfaces" },
        { title: "AGENTIC_WORKFLOWS", subtitle: "IA & SDD" },
        { title: "BACKEND_Y_APIS", subtitle: "Servidor" },
        { title: "VIDEOJUEGOS", subtitle: "Unity & C#" },
        { title: "BASES_DE_DATOS", subtitle: "Almacenamiento" },
        { title: "CI/CD_Y_VERSIONES", subtitle: "DevOps & Git" },
        { title: "METODOLOGÍAS", subtitle: "Procesos & Herramientas" },
      ],
    },
    // ── Academic Panel ──
    academic: {
      cellLabel: "FORMACIÓN_ACADÉMICA",
      degree: "Ingeniería en Ciencias y Sistemas",
      semester: "10.° Semestre // EN CURSO",
      university: "Universidad de San Carlos de Guatemala — CUNOC",
      certificatesTitle: "CERTIFICADOS",
      cert1: "Cisco Networking Academy — Fundamentos",
      cert2: "Cisco Networking Academy — Unhatched",
      assistantshipsTitle: "AUXILIATURAS_ACADÉMICAS",
      assistantships: [
        {
          role: "Auxiliar de cátedra — Lenguajes Formales y de Programación",
          place: "USAC — CUNOC",
          timeline: "Junio 2026 — Actualidad",
          active: true,
          description:
            "Imparto el laboratorio del curso y asesoro en diseño e implementación de compiladores: autómatas finitos, analizadores léxicos y sintácticos, y generación de reportes. Diseño, documento y evalúo prácticas y proyectos.",
        },
        {
          role: "Auxiliar de cátedra — Teoría de Sistemas 1",
          place: "USAC — CUNOC",
          timeline: "Enero 2026 — Junio 2026",
          active: false,
          description:
            "Apoyo docente en la impartición del curso, resolución de dudas y asesoría sobre contenidos teóricos y sus aplicaciones prácticas. Elaboración y evaluación de material académico.",
        },
      ],
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
      langLabel: "LANG",
    },
    sidebar: {
      authLevel: "[ AUTH_LEVEL_DEV_V5 ]",
      sysLoad: "SYS_LOAD",
      contactBtn: "CONTACT",
    },
    boot: {
      lines: [
        "WAYNE_TECH // PORTFOLIO_OS v5.0",
        "Initializing system kernel...",
        "Loading tactical framework: NEXT.js_14",
        "Mounting neural interface: REACT_18 // REACT_NATIVE",
        "Compiling design matrix: TAILWIND_CSS",
        "Authenticating user: JEFFREY MENÉNDEZ",
        "Access level: AUTH_LEVEL_DEV_V5",
        "Location lock: GUA_SECTOR // 14.63°N 90.50°W",
        "Status: ACTIVE_MISSION — Vastago Studio / Epicare",
        "Integrity: ████████████████████ 100%",
        "BOOTUP COMPLETE — WELCOME, OPERATOR.",
      ],
      loading: "LOADING...",
      ready: "READY",
    },
    bio: {
      processId: "ID: BIO_PROCESS_001",
      roleTitle: "SOFTWARE_DEVELOPER",
      tagline:
        "FRONTEND & UI ARCHITECTURE // AGENTIC WORKFLOWS & SDD // GAME DEVELOPMENT",
      initLine1: "Initializing neural interface...",
      initLine2: "User authenticated. Loading BIO_OS...",
      bioText:
        "Software Developer with 4+ years of experience building modern, scalable and user-focused web and mobile applications. Specialized in React, Next.js, React Native and TypeScript, with a strong focus on UI architecture, reusable component systems, accessibility and performance. Expert in agentic workflows: designing and building agents, custom commands and planning flows, and AI-assisted development with Claude Code, applying Spec-Driven Development (SDD) to turn specifications into consistent, verifiable implementations. Proven experience in Agile/Scrum environments, integrating backend services through REST and GraphQL, and ensuring software quality through CI/CD pipelines. I complement my profile with game development in Unity and C#.",
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
        clearanceValue: "AUTH_DEV_V5",
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
          name: "EPPIGO // EPICARE",
          role: "REACT_NATIVE_DEV",
          description:
            "Mobile application for the insurance sector built with React Native and TypeScript. Component architecture, state management and end-to-end REST API integration.",
        },
        {
          name: "JARVIS // SCALINGSOFT",
          role: "LEAD_FULLSTACK",
          description:
            "AI agents platform with dynamic interfaces. Integration of React and NestJS for intelligent conversation management and real-time language model responses.",
        },
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
          name: "HOTEL_LOMA_REAL_RESORT",
          role: "DEVELOPER",
          description:
            "Resort website with responsive design, facilities gallery and a conversion-focused reservation flow.",
        },
        {
          name: "HAUS_LABS_FOUNDATION",
          role: "CO-DEV",
          description:
            "High-end interface for Lady Gaga's beauty brand. Premium experience with personalized product selection.",
        },
        {
          name: "UNITY_GAME_LAB",
          role: "PERSONAL_PROJECT",
          description:
            "Game development in Unity with C#: gameplay scripting, mechanics prototyping and game systems design applying design patterns and OOP.",
        },
      ],
      comingSoon: "COMING SOON",
      inProgress: "ONGOING",
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
          company: "Vastago Studio / Epicare Insurance",
          subtitle: "REACT NATIVE",
          role: "Software Developer — React Native",
          timeline: "April 2026 — Present",
          active: true,
          objective:
            "Develop the Eppigo mobile application end-to-end for the insurance sector.",
          actions: [
            "Define component architecture and state management with React Native and TypeScript",
            "Integrate backend services through REST APIs: authentication, error handling and data synchronization",
            "Apply agentic workflows and Spec-Driven Development with Claude Code to plan and accelerate new features",
          ],
        },
        {
          company: "ScalingSoft",
          subtitle: "AI AGENTS // FREELANCE",
          role: "Fullstack Developer (Freelance)",
          timeline: "February 2026 — April 2026",
          active: false,
          objective:
            "Lead the design and development of AI agents with scalable architectures.",
          actions: [
            "Integration of React and NestJS for dynamic interfaces and server-side logic",
            "Scalable API architectures and complex state management for real-time responses",
            "Optimized data flow between frontend and AI services, improving interaction latency",
          ],
        },
        {
          company: "Cartful Solutions",
          subtitle: "UI MODULES",
          role: "Frontend Developer",
          timeline: "July 2024 — November 2025",
          active: false,
          objective:
            "Development of modular and dynamic user interfaces for enterprise clients.",
          actions: [
            "Modular interfaces with React and JavaScript (ES6+)",
            "Visual consistency across devices through responsive design with Sass and Tailwind CSS",
            "Clean, maintainable architecture with reusable components and efficient state management",
          ],
        },
        {
          company: "Maxicompra S.A.",
          subtitle: "E-COMMERCE",
          role: "Frontend Developer",
          timeline: "January 2023 — July 2024",
          active: false,
          objective:
            "Implementation of business-critical features for e-commerce platforms.",
          actions: [
            "Development with React, TypeScript, and Redux",
            "Integrated and customized Magento with PHP, aligning business logic with user experience",
            "Improved rendering speed of key views by optimizing queries and React components",
          ],
        },
        {
          company: "Métodos e Ideas",
          subtitle: "TEMPORARY CONTRACT",
          role: "Frontend Developer",
          timeline: "July 2022 — December 2022",
          active: false,
          objective:
            "Design of intuitive and engaging interfaces with a UX focus.",
          actions: [
            "Created user interfaces using Figma",
            "Designed graphics and visual assets with Photoshop and Illustrator",
            "Collaborated with development teams to ensure design-functionality consistency",
          ],
        },
      ],
    },
    tech: {
      sectionTitle: "TECHNOLOGIES // TECH STACK",
      categories: [
        { title: "LANGUAGES", subtitle: "Core" },
        { title: "FRONTEND_&_UI", subtitle: "Interface architecture" },
        { title: "AGENTIC_WORKFLOWS", subtitle: "AI & SDD" },
        { title: "BACKEND_&_APIS", subtitle: "Server" },
        { title: "GAME_DEV", subtitle: "Unity & C#" },
        { title: "DATABASES", subtitle: "Storage" },
        { title: "CI/CD_&_VERSIONING", subtitle: "DevOps & Git" },
        { title: "METHODOLOGIES", subtitle: "Process & Tools" },
      ],
    },
    academic: {
      cellLabel: "EDUCATION",
      degree: "B.Sc. Computer Science & Systems Engineering",
      semester: "10th Semester // IN PROGRESS",
      university: "University of San Carlos de Guatemala — CUNOC",
      certificatesTitle: "CERTIFICATES",
      cert1: "Cisco Networking Academy — IT Essentials",
      cert2: "Cisco Networking Academy — Unhatched",
      assistantshipsTitle: "TEACHING_ASSISTANTSHIPS",
      assistantships: [
        {
          role: "Teaching Assistant — Formal Languages and Programming",
          place: "USAC — CUNOC",
          timeline: "June 2026 — Present",
          active: true,
          description:
            "Teach the course lab and mentor students on compiler design and implementation: finite automata, lexical and syntactic analyzers, and report generation. Design, document and grade assignments and projects.",
        },
        {
          role: "Teaching Assistant — Systems Theory 1",
          place: "USAC — CUNOC",
          timeline: "January 2026 — June 2026",
          active: false,
          description:
            "Supported course delivery, answering student questions and mentoring on theoretical content and its practical applications. Prepared and graded academic material.",
        },
      ],
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
