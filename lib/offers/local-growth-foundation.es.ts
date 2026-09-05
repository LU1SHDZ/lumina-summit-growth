import { PUBLIC_PRICING } from "@/lib/offers/growth-services";

export const localGrowthFoundationEs = {
  name: "Fundamentos de Crecimiento Local",
  summary: "Un proyecto enfocado para negocios locales de servicios que ya tienen presencia digital, pero necesitan reparar su base antes de invertir agresivamente en marketing.",
  pricing: { display: PUBLIC_PRICING["local-growth-foundation"].es, note: "El precio final refleja ubicaciones, tamaño del sitio, complejidad de servicios, contenido, problemas técnicos e integraciones." },
  fitSignals: [
    "Operas un negocio local o de servicios para el hogar ya establecido.",
    "Tu equipo hace un buen trabajo, pero la adquisición o el seguimiento de clientes es inconsistente.",
    "Quieres entender el sistema antes de comprar tácticas desconectadas.",
    "Puedes facilitar acceso a las personas, herramientas y evidencia necesarias para un diagnóstico útil.",
    "Valoras recomendaciones honestas, incluso cuando aconsejan no comprar algo innecesario.",
  ],
  poorFitSignals: [
    "Necesitas garantías de posiciones, ingresos o volumen de oportunidades.",
    "Buscas únicamente al proveedor más económico o una tarea aislada sin contexto estratégico.",
    "Tu equipo no puede participar en el descubrimiento ni compartir información de referencia.",
    "Esperas que la tecnología o la IA sustituyan el trabajo humano de servicio, ventas y responsabilidad.",
  ],
  evaluationAreas: [
    "Perfil de Empresa de Google y visibilidad local", "Experiencia del sitio web y recorrido de conversión", "Oportunidades de páginas de servicio y ubicación",
    "Captura, respuesta y seguimiento de oportunidades", "Reseñas y señales de reputación", "Medición, atribución y preparación del CRM",
    "Tecnología de marketing y oportunidades de automatización responsable",
  ],
  process: [
    { number: "01", title: "Calificar", description: "Revisamos tu mercado, sistema de crecimiento actual, limitaciones y preparación para un compromiso enfocado." },
    { number: "02", title: "Diagnosticar", description: "Examinamos evidencia de visibilidad, conversión, reputación, manejo de oportunidades, medición y tecnología." },
    { number: "03", title: "Priorizar", description: "Separamos las limitaciones urgentes de las distracciones de menor valor y definimos la secuencia que importa." },
    { number: "04", title: "Trazar la ruta", description: "Recibes un plan práctico con recomendaciones, evidencia, responsables y próximos pasos." },
  ],
  deliverables: [
    "Evaluación documentada de visibilidad local, conversión, seguimiento, reputación y medición", "Hallazgos respaldados por evidencia y limitaciones identificadas",
    "Recomendaciones priorizadas por impacto, confianza y esfuerzo", "Hoja de ruta práctica de 90 días con acciones inmediatas, de corto plazo y posteriores",
    "Recomendación clara sobre lo que Lumina debe apoyar y lo que tu equipo puede realizar internamente",
  ],
  afterSprint: [
    "Tu equipo implementa internamente la hoja de ruta.", "Lumina define una fase de implementación enfocada para las prioridades acordadas.",
    "Lumina apoya la medición y optimización continua cuando existe una necesidad justificada.",
  ],
} as const;

export const foundationFaqEs = [
  { question: "¿Es el Diagnóstico Inicial gratuito?", answer: "No. El Diagnóstico Inicial es una primera revisión enfocada con algunas observaciones útiles. Fundamentos de Crecimiento Local es un proyecto de implementación pagado con un alcance definido según las necesidades reales del negocio." },
  { question: "¿Garantizan posiciones, oportunidades o ingresos?", answer: "No. Lumina no ofrece garantías sobre resultados que no puede controlar honestamente. El trabajo busca mejorar los sistemas que influyen en adquisición y conversión, con supuestos y medición transparentes." },
  { question: "¿Recomendarán todos los servicios que ofrece Lumina?", answer: "No. Servir antes que servirse significa recomendar lo que respalda la evidencia, incluso decirle a un negocio que no necesita algo que podríamos vender." },
  { question: "¿Fundamentos incluye implementación?", answer: "Sí. El alcance acordado puede incluir trabajo del Perfil de Empresa de Google, mejoras de conversión web, SEO esencial en página, analítica y seguimiento de oportunidades, además de otras prioridades fundamentales. El trabajo fuera del alcance se cotiza por separado." },
  { question: "¿Cuánto dura y cuánto cuesta?", answer: "Los proyectos comienzan en $1,500. El precio y la duración final se confirman después de entender las ubicaciones, el tamaño del sitio, la complejidad de servicios, el contenido, los problemas técnicos, las integraciones y los accesos necesarios." },
  { question: "¿Lumina está limitada a una sola industria?", answer: "No. Lumina comienza con negocios locales y de servicios ambiciosos en varios sectores, mientras desarrolla un enfoque que puede expandirse de forma responsable." },
] as const;
