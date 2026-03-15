export type FocusArea = {
  title: string
  description: string
  highlights: string[]
}

export type SkillGroup = {
  category: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  stack: string[]
  year: string
  link: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  summary: string
}

export type EducationItem = {
  program: string
  institution: string
  period: string
  details: string
}

export type ContactChannel = {
  label: string
  value: string
  href: string
}

export type Metric = {
  label: string
  value: string
}

export type Service = {
  title: string
  description: string
  includes: string[]
}

export type Testimonial = {
  quote: string
  author: string
  role: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type PortfolioData = {
  hero: {
    name: string
    role: string
    summary: string
    location: string
    availability: string
    primaryAction: {
      label: string
      href: string
    }
    secondaryAction: {
      label: string
      href: string
    }
  }
  focusAreas: FocusArea[]
  skillGroups: SkillGroup[]
  metrics: Metric[]
  services: Service[]
  projects: Project[]
  experience: ExperienceItem[]
  education: EducationItem[]
  certifications: string[]
  testimonials: Testimonial[]
  faq: FaqItem[]
  contact: {
    message: string
    channels: ContactChannel[]
    footerNote: string
  }
}

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Diego Alonso Segura Gutierrez',
    role: 'Desarrollador Full Stack | Automatizacion | Soluciones Digitales',
    summary:
      'Creo productos web modernos, mantenibles y orientados a resultados. Este portafolio esta organizado por temas para que cualquier persona entienda rapidamente en que aporto valor.',
    location: 'Trujillo, Perú',
    availability: 'Disponible para proyectos y colaboraciones',
    primaryAction: {
      label: 'Ver proyectos',
      href: '#proyectos',
    },
    secondaryAction: {
      label: 'Contactarme',
      href: '#contacto',
    },
  },
  focusAreas: [
    {
      title: 'Desarrollo Web',
      description:
        'Diseno e implementacion de aplicaciones web modernas con enfoque en rendimiento y experiencia de usuario.',
      highlights: [
        'Arquitecturas frontend escalables',
        'APIs limpias y seguras',
        'Buenas practicas de accesibilidad',
      ],
    },
    {
      title: 'Automatizacion y Productividad',
      description:
        'Construccion de flujos automatizados para reducir tareas manuales y mejorar tiempos de entrega.',
      highlights: [
        'Integraciones entre servicios',
        'Scripts y pipelines de despliegue',
        'Estandarizacion de procesos',
      ],
    },
    {
      title: 'Analisis de Datos Aplicado',
      description:
        'Uso de datos para entender comportamientos, medir impacto y tomar decisiones tecnicas con evidencia.',
      highlights: [
        'Dashboards para seguimiento',
        'Metrica de conversion y uso',
        'Reportes accionables',
      ],
    },
    {
      title: 'Consultoria Tecnica',
      description:
        'Acompano equipos en la definicion de soluciones, priorizacion tecnica y mejora continua.',
      highlights: [
        'Discovery tecnico y roadmap',
        'Mentoria y documentacion',
        'Estrategias de evolucion gradual',
      ],
    },
  ],
  skillGroups: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Vite', 'HTML Semantico', 'CSS Moderno'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'APIs REST', 'Autenticacion JWT'],
    },
    {
      category: 'Base de Datos',
      items: ['PostgreSQL', 'MongoDB', 'Modelado de Datos', 'MySQL', 'SQL Server'],
    },
    {
      category: 'DevOps y Herramientas',
      items: ['Git', 'GitHub Actions', 'Testing', 'CI/CD', 'AWS'],
    },
  ],
  metrics: [
    {
      label: 'Proyectos entregados',
      value: '26+',
    },
    {
      label: 'Clientes o equipos apoyados',
      value: '14',
    },
    {
      label: 'Automatizaciones activas',
      value: '40+',
    },
    {
      label: 'Anios de experiencia',
      value: '4+',
    },
  ],
  services: [
    {
      title: 'Desarrollo de MVP',
      description:
        'Construccion de productos funcionales en corto tiempo para validar ideas con usuarios reales.',
      includes: [
        'Levantamiento de requerimientos',
        'UI funcional y responsive',
        'Backend inicial y despliegue',
      ],
    },
    {
      title: 'Modernizacion de sistemas',
      description:
        'Refactor y evolucion de sistemas existentes para mejorar mantenibilidad y velocidad de entrega.',
      includes: [
        'Analisis tecnico del sistema actual',
        'Plan de migracion incremental',
        'Mejora de performance y seguridad',
      ],
    },
    {
      title: 'Automatizacion de procesos',
      description:
        'Diseno de flujos para reducir trabajo manual y aumentar consistencia en operaciones.',
      includes: [
        'Integraciones entre APIs',
        'Alertas y monitoreo basico',
        'Documentacion y transferencia',
      ],
    },
  ],
  projects: [
    {
      name: 'Sistema de Gestion Comercial',
      description:
        'Plataforma para ventas, inventario y reportes en tiempo real con panel administrativo responsive.',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      year: '2025',
      link: 'https://github.com/tu-usuario/proyecto-comercial',
    },
    {
      name: 'Portal de Automatizaciones Internas',
      description:
        'Conjunto de herramientas para automatizar tareas operativas y seguimiento de procesos empresariales.',
      stack: ['TypeScript', 'Express', 'Docker'],
      year: '2024',
      link: 'https://github.com/tu-usuario/automatizaciones',
    },
    {
      name: 'Dashboard de Indicadores',
      description:
        'Visualizacion de KPIs para equipos de negocio con filtros dinamicos y reportes descargables.',
      stack: ['React', 'Charting', 'APIs REST'],
      year: '2024',
      link: 'https://github.com/tu-usuario/dashboard-kpi',
    },
  ],
  experience: [
    {
      role: 'Desarrollador Full Stack',
      company: 'Imagina Technologies',
      period: '2024 - Actualidad',
      summary:
        'Desarrollo de soluciones web para clientes en sectores de comercio y servicios, con enfoque en resultados y colaboracion cercana.',
    },
  ],
  education: [
    {
      program: 'Ingenieria Informatica',
      institution: 'Universidad Nacional de Trujillo',
      period: '2021 - 2026',
      details: 'Enfoque en desarrollo de software, bases de datos y arquitectura.',
    },
  ],
  certifications: [
    'Certificacion en Desarrollo Web',
    'Certificacion en Cloud Fundamentals',
    'Certificacion en Gestion Agil de Proyectos',
  ],
  testimonials: [],
  faq: [
    {
      question: 'Que tipo de proyectos tomas?',
      answer:
        'Trabajo en plataformas web, herramientas internas y productos digitales donde se necesite construir o mejorar sistemas con impacto de negocio.',
    },
    {
      question: 'Puedes trabajar por fases?',
      answer:
        'Si. Normalmente dividimos en discovery, ejecucion y optimizacion para que haya entregables concretos en cada etapa.',
    },
    {
      question: 'Incluyes documentacion y soporte?',
      answer:
        'Si, cada entrega incluye documentacion tecnica base y una etapa de acompanamiento para asegurar adopcion del equipo.',
    },
  ],
  contact: {
    message:
      'Si quieres desarrollar un producto digital, modernizar un sistema existente o acelerar entregas, conversemos.',
    channels: [
      {
        label: 'Email',
        value: 'diegoalonsosg@gmail.com',
        href: 'mailto:diegoalonsosg@gmail.com',
      },
      {
        label: 'LinkedIn',
        value: 'linkedin.com/in/diego-segura-gutierrez',
        href: 'https://www.linkedin.com/in/diego-segura-gutierrez-36858b224/',
      },
      {
        label: 'GitHub',
        value: 'github.com/SGDIEGO',
        href: 'https://github.com/SGDIEGO',
      },
    ],
    footerNote:
      'Estoy abierto a oportunidades de colaboracion, proyectos freelance o simplemente conectar con otros profesionales del sector. No dudes en contactarme para discutir como puedo aportar valor a tu iniciativa.',
  },
}
