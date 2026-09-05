import type { Locale } from "@/lib/i18n";

export type GrowthOfferId =
  | "growth-snapshot"
  | "growth-blueprint"
  | "local-growth-foundation"
  | "growth-website-system"
  | "local-growth"
  | "growth-partner";

export const PUBLIC_PRICING = {
  "growth-snapshot": { en: "Free", es: "Gratis" },
  "growth-blueprint": { en: "$350 one-time", es: "$350 pago único" },
  "local-growth-foundation": { en: "Starting at $1,500", es: "Desde $1,500" },
  "growth-website-system": {
    en: "Founding-client projects starting at $2,250",
    es: "Proyectos para clientes fundadores desde $2,250",
  },
  "local-growth": { en: "Starting at $750/month", es: "Desde $750/mes" },
  "growth-partner": { en: "Starting at $1,250/month", es: "Desde $1,250/mes" },
} as const;

export type GrowthOffer = {
  id: GrowthOfferId;
  number: string;
  category: string;
  name: string;
  price: string;
  badge?: string;
  description: string;
  includes: readonly string[];
  note: string;
  cta: { label: string; href: "/free-audit" | "/start-here" | "/contact" };
};

type ServicesContent = {
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  journey: readonly { number: string; label: string }[];
  philosophy: { eyebrow: string; title: string; body: string; principle: string };
  sections: readonly {
    id: "clarity" | "foundation" | "growth";
    eyebrow: string;
    title: string;
    description: string;
    offers: readonly GrowthOffer[];
  }[];
  foundingProgram: { eyebrow: string; title: string; body: string };
  faq: { eyebrow: string; title: string; items: readonly { question: string; answer: string }[] };
  finalCta: { eyebrow: string; title: string; body: string; label: string };
};

const english: ServicesContent = {
  hero: {
    eyebrow: "Services and transparent starting points",
    title: "Build the foundation.",
    titleAccent: "Then grow from it.",
    description: "Lumina starts by understanding the problem, then recommends the smallest responsible engagement that can create meaningful progress. No oversized retainer before the foundation is clear.",
    primaryCta: "Request a free Growth Snapshot →",
    secondaryCta: "See the path",
  },
  journey: [
    { number: "01", label: "Snapshot" },
    { number: "02", label: "Blueprint" },
    { number: "03", label: "Build" },
    { number: "04", label: "Keep growing" },
  ],
  philosophy: {
    eyebrow: "A scope-first pricing philosophy",
    title: "Transparent starting prices. Honest final scopes.",
    body: "Every business is different. These starting prices provide useful context while final pricing reflects the actual scope, complexity, locations, integrations, content, and technical work required.",
    principle: "We would rather reduce or phase the scope than promise the same work at an unrealistic price.",
  },
  sections: [
    {
      id: "clarity",
      eyebrow: "Start with clarity",
      title: "Understand the constraint before buying the fix.",
      description: "Choose a focused first look or a deeper paid diagnostic. Neither option quietly turns into an implementation commitment.",
      offers: [
        {
          id: "growth-snapshot",
          number: "01",
          category: "Diagnostic / first look",
          name: "Growth Snapshot",
          price: PUBLIC_PRICING["growth-snapshot"].en,
          description: "A focused first look at where your digital presence may be losing opportunities.",
          includes: ["Website experience", "Google and local visibility", "Conversion friction", "Service presentation", "Obvious lead-generation gaps"],
          note: "You receive a few high-value observations. This is not a complete audit, full SEO strategy, implementation roadmap, or unlimited free consulting.",
          cta: { label: "Request a Free Growth Snapshot", href: "/free-audit" },
        },
        {
          id: "growth-blueprint",
          number: "02",
          category: "Paid diagnostic and roadmap",
          name: "Growth Blueprint",
          price: PUBLIC_PRICING["growth-blueprint"].en,
          description: "A deeper diagnostic for businesses that know something is underperforming but need clarity on what to fix first.",
          includes: ["Website structure and conversion", "Google Business Profile and local SEO", "Service-page coverage and positioning", "Lead capture and tracking gaps", "Relevant search visibility", "Prioritized action roadmap"],
          note: "The roadmap explains what is wrong, why it matters, what comes first, what can wait, and where Lumina may help. Implementation is quoted separately.",
          cta: { label: "Build My Growth Blueprint", href: "/contact" },
        },
      ],
    },
    {
      id: "foundation",
      eyebrow: "Build the foundation",
      title: "Repair what is limiting demand—or build the right system.",
      description: "Project work is scoped around the actual business, not a generic page count or a list of disconnected marketing tasks.",
      offers: [
        {
          id: "local-growth-foundation",
          number: "03",
          category: "Focused foundation project",
          name: "Local Growth Foundation",
          price: PUBLIC_PRICING["local-growth-foundation"].en,
          description: "For local service businesses with a digital presence that needs to be repaired before spending aggressively on marketing.",
          includes: ["Google Business Profile optimization", "Local keyword and competitor research", "Website conversion and core on-page SEO", "Analytics and lead tracking setup", "Review and service-page strategy", "90-day growth roadmap"],
          note: "Final scope reflects locations, website size, service complexity, content needs, technical problems, and integrations.",
          cta: { label: "Strengthen My Foundation", href: "/start-here" },
        },
        {
          id: "growth-website-system",
          number: "04",
          category: "Conversion-focused website project",
          name: "Growth Website System",
          price: PUBLIC_PRICING["growth-website-system"].en,
          badge: "Limited founding-client pricing",
          description: "More than a website: a digital foundation built around how customers find, understand, trust, and contact your business.",
          includes: ["Business and service strategy", "Information architecture and responsive design", "Conversion-focused pages and calls to action", "Foundational SEO and mobile optimization", "Analytics and business integrations where appropriate", "Deployment, quality assurance, and handoff"],
          note: "E-commerce, custom applications, complex integrations, very large page counts, custom photography, extensive copywriting, and advanced automation are quoted separately.",
          cta: { label: "Plan My Website", href: "/contact" },
        },
      ],
    },
    {
      id: "growth",
      eyebrow: "Keep growing",
      title: "Steward the system instead of forgetting it after launch.",
      description: "Ongoing work is reserved for businesses with a clear foundation, measurable priorities, and a justified need for continued execution.",
      offers: [
        {
          id: "local-growth",
          number: "05",
          category: "Ongoing stewardship",
          name: "Local Growth",
          price: PUBLIC_PRICING["local-growth"].en,
          badge: "Service actively being refined",
          description: "For businesses that want their digital foundation maintained, measured, and improved over time.",
          includes: ["Google Business Profile stewardship", "Local visibility and website health monitoring", "Analytics and lead-tracking review", "Defined SEO and website improvements", "Competitor and reputation guidance", "Monthly reporting and recommendations"],
          note: "This does not include unlimited development, unlimited content, paid-ad management, or guarantees of rankings or leads.",
          cta: { label: "Explore Ongoing Growth", href: "/contact" },
        },
        {
          id: "growth-partner",
          number: "06",
          category: "Active growth partnership",
          name: "Growth Partner",
          price: PUBLIC_PRICING["growth-partner"].en,
          description: "For established local businesses ready for more proactive execution, experimentation, and strategic attention.",
          includes: ["Everything appropriate from Local Growth", "More proactive SEO execution", "Defined content and service-page development", "Conversion optimization and growth experiments", "Deeper competitive analysis", "More frequent strategic work"],
          note: "Substantial development, advertising spend, major new systems, and work outside the agreed monthly scope are quoted separately.",
          cta: { label: "Talk About Growth Partnership", href: "/contact" },
        },
      ],
    },
  ],
  foundingProgram: {
    eyebrow: "Founding Client Program",
    title: "More founder involvement. Proof earned in the open.",
    body: "Lumina is selectively partnering with its first group of businesses while building its initial portfolio and case studies. Founding clients receive close founder involvement and current founding-client website pricing without inflated claims or manufactured urgency.",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Clear answers before a sales conversation.",
    items: [
      { question: "How much does Lumina cost?", answer: "Focused projects begin around $1,500, website systems currently begin at $2,250 during Lumina’s founding-client phase, and ongoing growth partnerships begin at $750 per month. Final pricing depends on scope and complexity." },
      { question: "Can you guarantee more customers?", answer: "No responsible marketing company can guarantee a specific number of customers. Market conditions, pricing, competition, sales execution, and other factors influence revenue. Lumina commits to the agreed work, transparent measurement, and decisions based on the best available evidence." },
      { question: "How long does SEO take?", answer: "Website changes, tracking, conversion improvements, and Google Business Profile work can often be implemented quickly. Search visibility generally takes longer and depends on competition, market, existing authority, and starting condition." },
      { question: "Why not build the website myself?", answer: "You can. Lumina is for businesses that would rather stay focused on operating while someone else takes responsibility for strategy, structure, conversion, search foundations, implementation, measurement, and quality control." },
      { question: "Do you use AI?", answer: "Yes. Lumina uses modern AI and automation tools where they improve research, development, analysis, and efficiency. Strategy, implementation decisions, quality control, and accountability remain human-managed." },
      { question: "Why not hire someone on Fiverr?", answer: "Freelance marketplaces can be appropriate for a specific task. Lumina is designed around the broader system: how customers find the business, what they see, how they convert, how results are measured, and what should improve next." },
      { question: "Do I own my website?", answer: "Once the project is paid in full, clients own the agreed project deliverables and business assets, subject to third-party software, hosting, licenses, fonts, platforms, and services governed by their own terms." },
      { question: "Are there additional monthly fees?", answer: "Project fees and ongoing services are separate. Domains, hosting, third-party software, advertising spend, and other external services are identified separately before the client agrees to them." },
      { question: "Can you make it cheaper?", answer: "Potentially. When a budget is lower than the proposed scope, Lumina prefers to reduce or phase the scope rather than promise the same amount of work for an unrealistic price." },
    ],
  },
  finalCta: {
    eyebrow: "A practical first step",
    title: "Start with a focused look—not a commitment.",
    body: "Share the essentials and the constraint you are feeling. Lumina will review the context personally and determine whether a Growth Snapshot can be useful.",
    label: "Request a Free Growth Snapshot →",
  },
};

const spanish: ServicesContent = {
  hero: {
    eyebrow: "Servicios y puntos de partida transparentes",
    title: "Construye la base.",
    titleAccent: "Después crece desde ella.",
    description: "Lumina comienza entendiendo el problema y luego recomienda el compromiso responsable más pequeño que pueda crear un progreso significativo. Sin un contrato mensual excesivo antes de aclarar la base.",
    primaryCta: "Solicita un Diagnóstico Inicial gratuito →",
    secondaryCta: "Conoce el camino",
  },
  journey: [
    { number: "01", label: "Diagnóstico Inicial" },
    { number: "02", label: "Plan de Crecimiento" },
    { number: "03", label: "Construcción" },
    { number: "04", label: "Crecimiento continuo" },
  ],
  philosophy: {
    eyebrow: "Una filosofía de precio basada en el alcance",
    title: "Precios iniciales transparentes. Alcances finales honestos.",
    body: "Cada negocio es diferente. Estos precios iniciales ofrecen un contexto útil, mientras que el precio final refleja el alcance, la complejidad, las ubicaciones, las integraciones, el contenido y el trabajo técnico realmente necesarios.",
    principle: "Preferimos reducir o dividir el alcance antes que prometer el mismo trabajo a un precio poco realista.",
  },
  sections: [
    {
      id: "clarity",
      eyebrow: "Comienza con claridad",
      title: "Entiende la limitación antes de comprar la solución.",
      description: "Elige una primera revisión enfocada o un diagnóstico pagado más profundo. Ninguna opción se convierte silenciosamente en un compromiso de implementación.",
      offers: [
        {
          id: "growth-snapshot",
          number: "01",
          category: "Diagnóstico / primera revisión",
          name: "Diagnóstico Inicial",
          price: PUBLIC_PRICING["growth-snapshot"].es,
          description: "Una primera revisión enfocada para detectar dónde tu presencia digital puede estar perdiendo oportunidades.",
          includes: ["Experiencia del sitio web", "Google y visibilidad local", "Fricción de conversión", "Presentación de servicios", "Brechas evidentes de generación de oportunidades"],
          note: "Recibes algunas observaciones de alto valor. No es una auditoría completa, una estrategia SEO integral, una hoja de ruta de implementación ni consultoría gratuita ilimitada.",
          cta: { label: "Solicitar Diagnóstico Inicial Gratuito", href: "/free-audit" },
        },
        {
          id: "growth-blueprint",
          number: "02",
          category: "Diagnóstico pagado y hoja de ruta",
          name: "Plan de Crecimiento",
          price: PUBLIC_PRICING["growth-blueprint"].es,
          description: "Un diagnóstico más profundo para negocios que saben que algo no rinde bien, pero necesitan claridad sobre qué corregir primero.",
          includes: ["Estructura y conversión del sitio", "Perfil de Empresa de Google y SEO local", "Cobertura de servicios y posicionamiento", "Captura de oportunidades y brechas de medición", "Visibilidad relevante en búsqueda", "Hoja de ruta priorizada"],
          note: "La hoja de ruta explica qué está mal, por qué importa, qué va primero, qué puede esperar y dónde puede ayudar Lumina. La implementación se cotiza por separado.",
          cta: { label: "Crear Mi Plan de Crecimiento", href: "/contact" },
        },
      ],
    },
    {
      id: "foundation",
      eyebrow: "Construye la base",
      title: "Repara lo que limita la demanda o construye el sistema correcto.",
      description: "Los proyectos se definen alrededor del negocio real, no de un número genérico de páginas o una lista de tareas de marketing desconectadas.",
      offers: [
        {
          id: "local-growth-foundation",
          number: "03",
          category: "Proyecto de base enfocado",
          name: "Fundamentos de Crecimiento Local",
          price: PUBLIC_PRICING["local-growth-foundation"].es,
          description: "Para negocios locales de servicios cuya presencia digital necesita reparación antes de invertir agresivamente en marketing.",
          includes: ["Optimización del Perfil de Empresa de Google", "Investigación local de palabras clave y competencia", "Conversión web y SEO esencial en página", "Analítica y seguimiento de oportunidades", "Estrategia de reseñas y páginas de servicio", "Hoja de ruta de crecimiento de 90 días"],
          note: "El alcance final refleja ubicaciones, tamaño del sitio, complejidad de servicios, contenido, problemas técnicos e integraciones.",
          cta: { label: "Fortalecer Mi Base", href: "/start-here" },
        },
        {
          id: "growth-website-system",
          number: "04",
          category: "Proyecto de sitio enfocado en conversión",
          name: "Sistema Web de Crecimiento",
          price: PUBLIC_PRICING["growth-website-system"].es,
          badge: "Precio limitado para clientes fundadores",
          description: "Más que un sitio web: una base digital construida alrededor de cómo los clientes encuentran, entienden, confían y contactan tu negocio.",
          includes: ["Estrategia de negocio y servicios", "Arquitectura de información y diseño adaptable", "Páginas de conversión y llamados a la acción", "SEO fundamental y optimización móvil", "Analítica e integraciones apropiadas", "Publicación, control de calidad y entrega"],
          note: "Comercio electrónico, aplicaciones personalizadas, integraciones complejas, grandes cantidades de páginas, fotografía, redacción extensa y automatización avanzada se cotizan por separado.",
          cta: { label: "Planear Mi Sitio Web", href: "/contact" },
        },
      ],
    },
    {
      id: "growth",
      eyebrow: "Sigue creciendo",
      title: "Cuida el sistema en lugar de olvidarlo después del lanzamiento.",
      description: "El trabajo continuo se reserva para negocios con una base clara, prioridades medibles y una necesidad justificada de ejecución constante.",
      offers: [
        {
          id: "local-growth",
          number: "05",
          category: "Administración continua",
          name: "Crecimiento Local",
          price: PUBLIC_PRICING["local-growth"].es,
          badge: "Servicio en proceso de refinamiento",
          description: "Para negocios que quieren mantener, medir y mejorar su base digital con el tiempo.",
          includes: ["Administración del Perfil de Empresa de Google", "Visibilidad local y salud del sitio", "Revisión de analítica y oportunidades", "Mejoras definidas de SEO y sitio", "Orientación competitiva y de reputación", "Reportes y recomendaciones mensuales"],
          note: "No incluye desarrollo ilimitado, contenido ilimitado, gestión de anuncios pagados ni garantías de posiciones u oportunidades.",
          cta: { label: "Explorar Crecimiento Continuo", href: "/contact" },
        },
        {
          id: "growth-partner",
          number: "06",
          category: "Alianza activa de crecimiento",
          name: "Socio de Crecimiento",
          price: PUBLIC_PRICING["growth-partner"].es,
          description: "Para negocios locales establecidos listos para una ejecución, experimentación y atención estratégica más proactivas.",
          includes: ["Todo lo apropiado de Crecimiento Local", "Ejecución SEO más proactiva", "Contenido y páginas de servicio con alcance definido", "Optimización de conversión y experimentos", "Análisis competitivo más profundo", "Trabajo estratégico más frecuente"],
          note: "El desarrollo sustancial, la inversión publicitaria, sistemas nuevos y el trabajo fuera del alcance mensual acordado se cotizan por separado.",
          cta: { label: "Hablar Sobre la Alianza", href: "/contact" },
        },
      ],
    },
  ],
  foundingProgram: {
    eyebrow: "Programa de Clientes Fundadores",
    title: "Más participación del fundador. Prueba ganada abiertamente.",
    body: "Lumina está colaborando selectivamente con su primer grupo de negocios mientras construye su portafolio y sus primeros casos de estudio. Los clientes fundadores reciben atención cercana del fundador y el precio actual para sitios web, sin afirmaciones infladas ni urgencia fabricada.",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas claras antes de una conversación de ventas.",
    items: [
      { question: "¿Cuánto cuesta Lumina?", answer: "Los proyectos enfocados comienzan alrededor de $1,500, los sistemas web comienzan actualmente en $2,250 durante la etapa de clientes fundadores de Lumina y las alianzas continuas comienzan en $750 al mes. El precio final depende del alcance y la complejidad." },
      { question: "¿Pueden garantizar más clientes?", answer: "Ninguna compañía de marketing responsable puede garantizar una cantidad específica de clientes. El mercado, los precios, la competencia, la ejecución de ventas y otros factores influyen en los ingresos. Lumina se compromete con el trabajo acordado, la medición transparente y decisiones basadas en la mejor evidencia disponible." },
      { question: "¿Cuánto tarda el SEO?", answer: "Los cambios del sitio, la medición, las mejoras de conversión y el trabajo del Perfil de Empresa de Google suelen implementarse rápidamente. La visibilidad en búsqueda normalmente toma más tiempo y depende de la competencia, el mercado, la autoridad existente y el punto de partida." },
      { question: "¿Por qué no construir el sitio yo mismo?", answer: "Puedes hacerlo. Lumina es para negocios que prefieren concentrarse en operar mientras otra persona asume la estrategia, estructura, conversión, fundamentos de búsqueda, implementación, medición y control de calidad." },
      { question: "¿Utilizan inteligencia artificial?", answer: "Sí. Lumina utiliza IA y automatización modernas cuando mejoran la investigación, el desarrollo, el análisis y la eficiencia. La estrategia, las decisiones de implementación, el control de calidad y la responsabilidad siguen siendo gestionados por personas." },
      { question: "¿Por qué no contratar a alguien en Fiverr?", answer: "Los mercados de trabajadores independientes pueden ser apropiados para una tarea específica. Lumina trabaja con el sistema más amplio: cómo los clientes encuentran el negocio, qué ven, cómo convierten, cómo se miden los resultados y qué debe mejorar después." },
      { question: "¿Soy dueño de mi sitio web?", answer: "Cuando el proyecto se paga completamente, los clientes son dueños de los entregables y activos comerciales acordados, sujetos al software, alojamiento, licencias, fuentes, plataformas y servicios de terceros con sus propios términos." },
      { question: "¿Existen cargos mensuales adicionales?", answer: "Los proyectos y los servicios continuos se cobran por separado. Los dominios, el alojamiento, el software, la inversión publicitaria y otros servicios externos se identifican antes de que el cliente los acepte." },
      { question: "¿Pueden hacerlo más económico?", answer: "Posiblemente. Cuando el presupuesto es menor que el alcance propuesto, Lumina prefiere reducir o dividir el alcance en fases antes que prometer el mismo trabajo a un precio poco realista." },
    ],
  },
  finalCta: {
    eyebrow: "Un primer paso práctico",
    title: "Comienza con una revisión enfocada, no con un compromiso.",
    body: "Comparte lo esencial y la limitación que percibes. Lumina revisará el contexto personalmente y determinará si un Diagnóstico Inicial puede ser útil.",
    label: "Solicita un Diagnóstico Inicial Gratuito →",
  },
};

export const growthServicesContent: Record<Locale, ServicesContent> = { en: english, es: spanish };

export const activeGrowthOffers = english.sections.flatMap((section) => section.offers);
