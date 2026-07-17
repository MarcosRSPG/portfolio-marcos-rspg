export const personalInfo = {
  name: "Marcos Rodríguez Sáenz",
  location: "Lardero, La Rioja, España",
  email: "marcosrs.softwaredeveloper@gmail.com",
  phone: "+34 652 719 741",
  github: "https://github.com/MarcosRSPG",
  linkedin: "https://www.linkedin.com/in/marcos-rodriguez-saenz",
  portfolio: "https://portfolio-marcos-rspg.vercel.app",
  availability: "Disponibilidad de mañanas",
};

export const aboutMe = `Técnico Superior en Desarrollo de Aplicaciones Multiplataforma 
y Desarrollo de Aplicaciones Web, con especialización en Inteligencia 
Artificial y Big Data. Cuento con un nivel intermedio-avanzado de inglés 
(B2) que me permite colaborar en proyectos internacionales. 
Experiencia real en mantenimiento informático, redes y soporte técnico, 
combinada con desarrollo full stack. Profesional en constante crecimiento, 
siempre buscando aprender más y mejorar mis skills. Mi enfoque me permite 
abordar desafíos complejos y desarrollar soluciones innovadoras, 
adaptándome rápidamente a nuevas tecnologías y metodologías.`;

export const education = [
  {
    institution: "IES Comercio",
    location: "La Rioja, España",
    degree: "Desarrollo de Aplicaciones Web (DAW)",
    period: "2025 - 2026",
    status: undefined,
    achievements: [
      "Desarrollo de aplicaciones web con HTML5, CSS, JavaScript y PHP",
      "Creación y consumo de APIs REST y servicios web",
      "Desarrollo backend con servidores Apache y frameworks como FastApi",
      "Gestión de bases de datos y entorno servidor",
    ],
  },
  {
    institution: "IES Comercio",
    location: "La Rioja, España",
    degree: "Especialización en IA y Big Data",
    period: "2024 - 2025",
    achievements: [
      "Implementación de sistemas de IA con Sklearn, TensorFlow y Keras",
      "Procesamiento de datos a gran escala con Spark y Python",
      "Integración de soluciones Big Data en entornos AWS",
      "Análisis predictivo y modelos de machine learning",
    ],
  },
  {
    institution: "IES Comercio",
    location: "La Rioja, España",
    degree: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
    period: "2022 - 2024",
    achievements: [
      "Desarrollo de aplicaciones de escritorio con C#, Java y Visual Basic",
      "Diseño y gestión de bases de datos SQL (PostgreSQL, MySQL, MongoDB)",
      "Diseño de interfaces gráficas multiplataforma",
    ],
  },
  {
    institution: "IES Cosme García",
    location: "La Rioja, España",
    degree: "Bachillerato - Ciencias Puras",
    period: "2020 - 2022",
    achievements: [],
  },
];

export interface SkillCategory {
  label: string;
  icon: string;
  description: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    label: "Lenguajes de Programación",
    icon: "💻",
    description: "Programación backend y multiplataforma",
    items: ["C#", "Java", "Python", "JavaScript", "PHP", "SQL", "Visual Basic"],
  },
  {
    label: "Desarrollo Web",
    icon: "🌐",
    description: "Frontend y backend web",
    items: [
      "HTML5 / CSS",
      "JavaScript / TypeScript",
      "PHP",
      "Angular",
      "Creación de APIs REST",
      "FastApi",
    ],
  },
  {
    label: "Bases de Datos",
    icon: "🗄️",
    description: "Diseño, consulta y gestión",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Neo4J",
      "SQL avanzado",
      "Entity Framework",
    ],
  },
  {
    label: "Big Data e IA",
    icon: "🧠",
    description: "Análisis de datos y machine learning",
    items: [
      "Spark",
      "Kafka",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "AWS S3",
      "Modelos predictivos",
    ],
  },
  {
    label: "Redes e Infraestructura",
    icon: "🔗",
    description: "Soporte técnico y administración de sistemas",
    items: [
      "Servidores",
      "Soporte técnico",
      "Mantenimiento de equipos",
      "Diagnóstico de problemas",
    ],
  },
  {
    label: "Cloud y DevOps",
    icon: "☁️",
    description: "Despliegue y contenedores",
    items: ["AWS", "Docker", "Npm"],
  },
  {
    label: "Herramientas",
    icon: "🧰",
    description: "Entornos de desarrollo y control de versiones",
    items: ["Git", "GitHub", "VSCode", "Visual Studio"],
  },
  {
    label: "Inteligencia Artificial",
    icon: "🤖",
    description: "Herramientas de IA utilizadas como asistentes de desarrollo",
    items: ["ChatGPT", "GitHub Copilot", "Claude Code", "Engram", "Spec-Driven Development (SDD)"],
  },
];

export const aiPhilosophy = {
  title: "Uso IA, pero yo mando",
  statement:
    "Desarrollo software con ayuda de inteligencia artificial, pero siempre bajo supervisión directa. Defino la arquitectura, establezco los estándares y reviso cada cambio antes de aplicarlo. La IA me hace más rápido, no me reemplaza.",
  points: [
    "Arranco cada proyecto poniendo la base: arquitectura, patrones, estructura. La IA no decide eso por mí.",
    "Si algo no me convence, lo cambio. No aplico nada sin entenderlo y revisarlo primero.",
    "Uso SDD (Spec-Driven Development) para llevar control de cada cambio: qué se hace, por qué se hace, y cómo afecta al resto.",
    "La IA es como un compañero que escribe rápido, pero yo soy el que dice qué hay que escribir.",
    "Utilizo Engram para guardar decisiones, descubrimientos y contexto entre sesiones, asi nada se pierde y siempre retomo desde donde deje.",
    "Herramientas como Claude Code, Copilot o ChatGPT me ahorran tiempo, pero la dirección la pongo yo.",
  ],
};

export const softSkills = [
  "Inglés B2",
  "Capacidad de liderazgo",
  "Trabajo en equipo",
  "Interacción de cara al público",
  "Adaptabilidad",
  "Pensamiento crítico",
  "Buena resolución de problemas",
];

export const projects = [
  {
    title: "Proyecto con Spark y S3",
    github: "https://github.com/MarcosRSPG/ProyectoSpark.git",
    description: [
      "ETL: Implementación del sistema de extracción, transformación y carga.",
      "Creación de datos: Desarrollo de scripts para generar datos aleatorios.",
      "Análisis de datos: Scripts de análisis respondiendo preguntas clave sobre los datos.",
      "LocalStack: Simulación de S3 con LocalStack para desarrollo local.",
      "Docker: Proyecto desplegado completamente en contenedores Docker.",
    ],
  },
];

export const titles = [
  {
    name: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS",
    date: "Abr 2025",
    type: "Internacional",
    link: "https://www.credly.com/badges/4ab43a68-bd14-4b50-98be-43a429adea57/linked_in_profile",
  },
  {
    name: "Iniciación a los IA Workflows",
    issuer: "Big School",
    date: "Sep 2025",
    type: "Nacional",
    link: "https://drive.google.com/file/d/1ZFLZrc-PfnOrAYfH80SIiVx81pfb9u89/view",
  },
];

export const workExperience = [
  {
    company: "CYTSA",
    location: "San Adrián, Navarra",
    position: "Responsable informático",
    period: "2026",
    achievements: [
      "Mantenimiento y soporte técnico de equipos y dispositivos informáticos.",
      "Desarrollo full stack de aplicaciones y soluciones informáticas.",
      "Supervisión de cambios, mejoras y actualizaciones en los sistemas de la empresa.",
      "Gestión de firewalls, servidores y Active Directory.",
      "Administración de infraestructura de red y diagnóstico de problemas.",
    ],
  },
  {
    company: "CODE Sistemas",
    location: "Albelda, La Rioja",
    position: "Desarrollador de aplicaciones",
    period: "Mar 2024 - Jun 2024",
    achievements: [
      "Programación y puesta a punto de aplicaciones.",
      "Presentación del producto al cliente.",
      "Consultas y resolución de problemas técnicos.",
    ],
  },
];

// Legacy alias for backward compatibility
export const workexprience = workExperience;
