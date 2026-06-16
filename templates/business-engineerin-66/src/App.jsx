import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          particlesJS('particles-js', {
              particles: {
                  number: { value: 60, density: { enable: true, value_area: 800 } },
                  color: { value: "#ffffff" },
                  shape: { type: "circle" },
                  opacity: { value: 0.5, random: false },
                  size: { value: 3, random: true },
                  line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                  move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
              },
              interactivity: {
                  detect_on: "window",
                  events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                  modes: { grab: { distance: 200, line_linked: { opacity: 0.8 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
              },
              retina_detect: true
          });
      });
    


  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Language Toggle Logic
  const langToggle = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');
  const langAltLabel = document.getElementById('langAltLabel');
  let currentLang = 'en';

  const i18n = {
    en: {
      "nav.solutions": "Features",
      "nav.product": "Dashboards",
      "nav.services": "MVP Plan",
      "nav.restaurants": "Engagement",
      "nav.getStarted": "Start Audit",
      "nav.contact": "Contact",

      "hero.pill": "FULL-STACK BUSINESS ENGINEERING",
      "hero.headline": "Stop Bleeding Cash.",
      "hero.headline2": "Find Hidden Revenue.",
      "hero.subheadline": "A ruthless, high-impact web app that identifies where your business loses money, wastes spend, or misses easy revenue. Built for busy owners who demand measurable ROI.",
      "hero.benefit": "ROI in Days, Not Months",
      "hero.ctaPrimary": "Start Your Audit",
      "hero.ctaSecondary": "View MVP Plan",

      "features.header": "Core App Features",
      "features.sub": "Direct, concise, and specific. We prioritize speed and ROI over perfection to deliver actionable insights immediately.",
      "features.link": "View methodology",
      "card1.title": "Data Extraction",
      "card1.desc": "Instant integration with CRM, accounting, and ad platforms for raw input.",
      "card2.title": "Ruthless Analysis",
      "card2.desc": "Automated cross-referencing of spend vs. conversion to flag wasted budget.",
      "card3.title": "Inefficiency Dashboards",
      "card3.desc": "High-contrast visualizations highlighting exactly where margin is lost.",
      "card4.title": "Gap Detection",
      "card4.desc": "Actionable alerts for missed upsells and easy revenue opportunities.",

      "logos.title": "Results delivered for",
      "logos.l1": "E-commerce Brands",
      "logos.l2": "SaaS Startups",
      "logos.l3": "Agencies",
      "logos.l4": "B2B Services",
      "logos.l5": "Retail Operators",
      "logos.l6": "Founders",
      "logos.l7": "Consultants",

      "pov.portrait": "Ruthless ROI — Engineering Team",
      "pov.pill": "Actionable Output",
      "pov.title": "The Truth Dashboard",
      "pov.desc": "A completely objective, no-BS output dashboard that tracks every dollar. Pinpoint exactly which campaigns are burning cash and which segments are under-monetized without unnecessary complexity.",
      "pov.link": "See sample dashboard",

      "details.pill": "Minimum Viable Product",
      "details.title": "Fast Deployment Plan",
      "details.subtitle": "We bypass feature bloat. Our MVP plan deploys core tracking infrastructure in days to stop financial bleeding immediately.",
      "details.c1Title": "Phase 1: Inputs",
      "details.c1Desc": "Rapidly connect your financial and marketing data sources.",
      "details.c1Mini": "API syncs",
      "details.c1MiniTag": "Days 1-3",
      "details.c1Line1": "CRM Data",
      "details.c1Line2": "Ad Spend",
      "details.c1Line3": "Accounting Logs",
      "details.c1Line4": "Stripe/Payments",

      "details.c2Title": "Phase 2: Analysis",
      "details.c2Desc": "Deploy automated scripts to cross-reference data and detect anomalies.",
      "details.c2Tag": "Algorithms • Scripts • Queries",

      "details.c3Title": "Phase 3: Output",
      "details.c3Desc": "Deliver the prioritized list of revenue gaps and waste.",
      "details.c3MiniTitle": "Action Plan",
      "details.c3MiniDesc": "Clear, concise actions",
      "details.c3Line1": "Spend cuts",
      "details.c3Line2": "Upsell prompts",
      "details.c3SubjectStrong": "Includes:",
      "details.c3Subject": "ROI metrics, alerts, dashboard",
      "details.c3FocusStrong": "Time:",
      "details.c3Focus": "Days 8-14",
      "details.cta1": "Deploy MVP",
      "details.cta2": "View Features",
      "details.cta3": "Read the Manifesto",

      "aud2.pill": "User Engagement",
      "aud2.title": "Maximum Engagement, Zero Complexity",
      "aud2.desc": "You are busy. You don't have time to learn a complex new SaaS tool. We deliver insights where you already are.",
      "aud2.c1Title": "Direct Push Alerts",
      "aud2.c1Desc": "Instant notifications for critical financial leaks.",
      "aud2.c1L1": "SMS for sudden spend spikes",
      "aud2.c1L2": "Email for weekly recaps",
      "aud2.c1L3": "Slack/Teams integration",
      "aud2.c1Cta": "See Notification Rules",

      "aud2.badge": "CORE",
      "aud2.c2Title": "Executive Summaries",
      "aud2.c2Desc": "High-impact, 1-page reports delivered every Friday.",
      "aud2.c2L1": "Money saved this week",
      "aud2.c2L2": "Wasted spend identified",
      "aud2.c2L3": "New revenue captured",
      "aud2.c2L4": "Top 3 priorities for Monday",
      "aud2.c2Cta": "Download Sample Report",

      "aud2.c3Title": "1-Click Actions",
      "aud2.c3Desc": "Approve changes without logging into a dashboard.",
      "aud2.c3L1": "Pause underperforming ads",
      "aud2.c3L2": "Approve budget reallocations",
      "aud2.c3L3": "Send upsell campaigns",
      "aud2.c3L4": "Cancel unused software",
      "aud2.c3Cta": "View Workflows",

      "close.pill": "Ready for results?",
      "close.title": "Find Your Lost Revenue Today",
      "close.desc": "Hire a ruthless but fair business engineering system. Identify inefficiencies, cut waste, and capture missed opportunities fast.",
      "close.cta": "Start Your Audit",
      "close.cta2": "View Timelines",
      "close.b1": "High-impact focus",
      "close.b2": "Measurable ROI",
      "close.b3": "Fast deployment",

      "footer.blurb": "We are a ruthless but fair full stack business engineering firm focused on identifying lost money and maximizing ROI.",
      "footer.col1Title": "Platform",
      "footer.col1L1": "Features",
      "footer.col1L2": "Dashboards",
      "footer.col1L3": "MVP Plan",
      "footer.col1L4": "Engagement",
      "footer.col2Title": "Capabilities",
      "footer.col2L1": "Data Extraction",
      "footer.col2L2": "Ruthless Analysis",
      "footer.col2L3": "Gap Detection",
      "footer.col2L4": "Start",
      "footer.col3Title": "Industries",
      "footer.col3L1": "E-commerce Brands",
      "footer.col3L2": "SaaS Startups",
      "footer.col3L3": "Agencies",
      "footer.col3L4": "Retail Operators",
      "footer.col4Title": "Contact",
      "footer.phone": "+1 (000) 000-0000",
      "footer.contactLink": "Get in touch",
      "footer.note": "Response times typically within 1–2 business days.",
      "footer.rights": "All rights reserved.",
      "footer.linkSolutions": "Features",
      "footer.linkServices": "MVP Plan",
      "footer.linkProduct": "Dashboards",
      "footer.linkStart": "Start"
    },
    es: {
      "nav.solutions": "Funciones",
      "nav.product": "Dashboards",
      "nav.services": "Plan MVP",
      "nav.restaurants": "Participación",
      "nav.getStarted": "Iniciar Auditoría",
      "nav.contact": "Contacto",

      "hero.pill": "INGENIERÍA DE NEGOCIOS FULL-STACK",
      "hero.headline": "Deja de Perder Dinero.",
      "hero.headline2": "Encuentra Ingresos Ocultos.",
      "hero.subheadline": "Una aplicación web implacable y de alto impacto que identifica dónde pierde dinero tu negocio, desperdicia gastos o pierde ingresos fáciles. Creado para dueños ocupados que exigen un ROI medible.",
      "hero.benefit": "ROI en días, no meses",
      "hero.ctaPrimary": "Inicia tu Auditoría",
      "hero.ctaSecondary": "Ver Plan MVP",

      "features.header": "Características Principales",
      "features.sub": "Directo, conciso y específico. Priorizamos la velocidad y el ROI sobre la perfección para ofrecer información procesable de inmediato.",
      "features.link": "Ver metodología",
      "card1.title": "Extracción de Datos",
      "card1.desc": "Integración instantánea con CRM, contabilidad y plataformas de anuncios para entrada en bruto.",
      "card2.title": "Análisis Implacable",
      "card2.desc": "Referencia cruzada automatizada de gasto vs. conversión para marcar presupuesto desperdiciado.",
      "card3.title": "Dashboards de Ineficiencia",
      "card3.desc": "Visualizaciones de alto contraste destacando exactamente dónde se pierde margen.",
      "card4.title": "Detección de Brechas",
      "card4.desc": "Alertas accionables de ventas adicionales perdidas y oportunidades fáciles de ingresos.",

      "logos.title": "Resultados entregados para",
      "logos.l1": "Marcas de E-commerce",
      "logos.l2": "Startups SaaS",
      "logos.l3": "Agencias",
      "logos.l4": "Servicios B2B",
      "logos.l5": "Operadores de Retail",
      "logos.l6": "Fundadores",
      "logos.l7": "Consultores",

      "pov.portrait": "Equipo de Ingeniería de ROI",
      "pov.pill": "Resultado Accionable",
      "pov.title": "El Dashboard de la Verdad",
      "pov.desc": "Un panel de resultados completamente objetivo y sin rodeos que rastrea cada dólar. Señala exactamente qué campañas están quemando efectivo y qué segmentos están submonetizados sin complejidad innecesaria.",
      "pov.link": "Ver dashboard de muestra",

      "details.pill": "Producto Mínimo Viable",
      "details.title": "Plan de Despliegue Rápido",
      "details.subtitle": "Evitamos el exceso de funciones. Nuestro plan MVP despliega infraestructura de seguimiento en días para detener el sangrado financiero de inmediato.",
      "details.c1Title": "Fase 1: Entradas",
      "details.c1Desc": "Conecta rápidamente tus fuentes de datos financieros y de marketing.",
      "details.c1Mini": "Sincronización de API",
      "details.c1MiniTag": "Días 1-3",
      "details.c1Line1": "Datos del CRM",
      "details.c1Line2": "Inversión en anuncios",
      "details.c1Line3": "Registros contables",
      "details.c1Line4": "Stripe/Pagos",

      "details.c2Title": "Fase 2: Análisis",
      "details.c2Desc": "Despliegue de scripts automatizados para cruzar datos y detectar anomalías.",
      "details.c2Tag": "Algoritmos • Scripts • Consultas",

      "details.c3Title": "Fase 3: Salida",
      "details.c3Desc": "Entrega de la lista priorizada de brechas de ingresos y desperdicios.",
      "details.c3MiniTitle": "Plan de Acción",
      "details.c3MiniDesc": "Acciones claras y concisas",
      "details.c3Line1": "Recortes de gasto",
      "details.c3Line2": "Avisos de upsell",
      "details.c3SubjectStrong": "Incluye:",
      "details.c3Subject": "métricas de ROI, alertas, panel",
      "details.c3FocusStrong": "Tiempo:",
      "details.c3Focus": "Días 8-14",
      "details.cta1": "Desplegar MVP",
      "details.cta2": "Ver Funciones",
      "details.cta3": "Leer el Manifiesto",

      "aud2.pill": "Participación del Usuario",
      "aud2.title": "Máxima Participación, Cero Complejidad",
      "aud2.desc": "Estás ocupado. No tienes tiempo para aprender a usar una nueva y compleja herramienta SaaS. Entregamos insights donde ya estás.",
      "aud2.c1Title": "Alertas Push Directas",
      "aud2.c1Desc": "Notificaciones instantáneas de fugas financieras críticas.",
      "aud2.c1L1": "SMS para picos de gasto repentinos",
      "aud2.c1L2": "Email para resúmenes semanales",
      "aud2.c1L3": "Integración con Slack/Teams",
      "aud2.c1Cta": "Ver Reglas de Notificación",

      "aud2.badge": "CORE",
      "aud2.c2Title": "Resúmenes Ejecutivos",
      "aud2.c2Desc": "Reportes de alto impacto de 1 página entregados cada viernes.",
      "aud2.c2L1": "Dinero ahorrado esta semana",
      "aud2.c2L2": "Gasto desperdiciado identificado",
      "aud2.c2L3": "Nuevos ingresos capturados",
      "aud2.c2L4": "Top 3 prioridades para el lunes",
      "aud2.c2Cta": "Descargar Reporte de Muestra",

      "aud2.c3Title": "Acciones en 1-Clic",
      "aud2.c3Desc": "Aprueba cambios sin iniciar sesión en un panel de control.",
      "aud2.c3L1": "Pausar anuncios de bajo rendimiento",
      "aud2.c3L2": "Aprobar reasignaciones de presupuesto",
      "aud2.c3L3": "Enviar campañas de upsell",
      "aud2.c3L4": "Cancelar software sin uso",
      "aud2.c3Cta": "Ver Flujos de Trabajo",

      "close.pill": "¿Listo para resultados?",
      "close.title": "Encuentra tus Ingresos Perdidos Hoy",
      "close.desc": "Contrata un sistema de ingeniería comercial implacable pero justo. Identifica ineficiencias, corta el desperdicio y captura oportunidades perdidas rápidamente.",
      "close.cta": "Inicia tu Auditoría",
      "close.cta2": "Ver Tiempos de Entrega",
      "close.b1": "Enfoque de alto impacto",
      "close.b2": "ROI Medible",
      "close.b3": "Despliegue rápido",

      "footer.blurb": "Somos una firma de ingeniería comercial full-stack implacable pero justa, enfocada en identificar dinero perdido y maximizar el ROI.",
      "footer.col1Title": "Plataforma",
      "footer.col1L1": "Funciones",
      "footer.col1L2": "Dashboards",
      "footer.col1L3": "Plan MVP",
      "footer.col1L4": "Participación",
      "footer.col2Title": "Capacidades",
      "footer.col2L1": "Extracción de Datos",
      "footer.col2L2": "Análisis Implacable",
      "footer.col2L3": "Detección de Brechas",
      "footer.col2L4": "Empezar",
      "footer.col3Title": "Industrias",
      "footer.col3L1": "Marcas de E-commerce",
      "footer.col3L2": "Startups SaaS",
      "footer.col3L3": "Agencias",
      "footer.col3L4": "Operadores de Retail",
      "footer.col4Title": "Contacto",
      "footer.phone": "+1 (000) 000-0000",
      "footer.contactLink": "Hablemos",
      "footer.note": "Tiempos de respuesta típicos de 1-2 días hábiles.",
      "footer.rights": "Todos los derechos reservados.",
      "footer.linkSolutions": "Funciones",
      "footer.linkServices": "Plan MVP",
      "footer.linkProduct": "Dashboards",
      "footer.linkStart": "Empezar"
    }
  };

  function updateLanguage(lang) {
    currentLang = lang;
    
    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        element.textContent = i18n[lang][key];
      }
    });

    // Update Toggle UI (Opacity/Font Weight)
    if (lang === 'en') {
      langLabel.className = "uppercase tracking-wide text-xs font-bold text-white font-geist";
      langAltLabel.className = "uppercase tracking-wide text-xs font-medium text-white/50 font-geist";
    } else {
      langLabel.className = "uppercase tracking-wide text-xs font-medium text-white/50 font-geist";
      langAltLabel.className = "uppercase tracking-wide text-xs font-bold text-white font-geist";
    }
  }

  langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'en' ? 'es' : 'en');
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[5] pointer-events-none mix-blend-screen opacity-100">
<div className="absolute inset-0 w-full h-full" id="particles-js">


</div>
</div>
<div className="relative h-screen overflow-hidden">

<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[25%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[50%] w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[75%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[87.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[20%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[60%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-[80%] h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>

<img alt="" className="pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>

<header className="z-20 border-white/5 border-b relative">
<div className="flex md:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<div className="flex md:gap-6 ring-white/5 ring-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-4 gap-y-4 items-center">

<a aria-label="PSYCHO MAKER" className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<nav className="hidden md:flex gap-2 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#solutions">
<span data-i18n="nav.solutions">Features</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#showcase">
<span data-i18n="nav.product">Dashboards</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#resources">
<span data-i18n="nav.services">MVP Plan</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#restaurants">
<span data-i18n="nav.restaurants">Engagement</span>
</a>
</nav>
</div>
<div className="flex ring-white/5 ring-1 rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-2 gap-y-2 items-center">

<button className="hidden sm:inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm cursor-pointer" id="langToggle" type="button">
<span className="uppercase tracking-wide text-xs font-bold text-white font-geist" id="langLabel">EN</span>
<span className="text-white/40">/</span>
<span className="uppercase tracking-wide text-xs font-medium text-white/50 font-geist" id="langAltLabel">ES</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#start">
<span data-i18n="nav.getStarted">Start Audit</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/15 hover:ring-white/25 ring-white/15 ring-1 [animation:fadeSlideIn_1s_ease-out_0.3s_both] text-sm font-medium text-white/90 font-geist bg-white/10 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="#contact">
<span data-i18n="nav.contact">Contact</span>
</a>
</div>
</div>
</header>

<main className="z-20 flex h-[calc(100vh-80px)] relative items-end">
<section className="md:px-8 md:pb-16 lg:pb-20 w-full max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="mb-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 lg:gap-10 gap-x-8 gap-y-8 items-center">
<div className="md:col-span-5 lg:col-span-5 relative">
<div className="inline-flex text-xs font-medium text-white/80 font-geist bg-white/5 ring-white/10 ring-1 rounded-full mb-5 pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<iconify-icon className="text-white/80" height="16" icon="solar:target-linear" width="16"></iconify-icon>
<span data-i18n="hero.pill">FULL-STACK BUSINESS ENGINEERING</span>
</div>
<h1 className="leading-tight sm:text-5xl md:text-5xl lg:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-4xl tracking-tighter font-geist">
<span data-i18n="hero.headline">Stop Bleeding Cash.</span>
<span className="block bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-white via-white to-white/70" data-i18n="hero.headline2">Find Hidden Revenue.</span>
</h1>
</div>
<div className="hidden md:block md:col-span-1 lg:col-span-1 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2"></div>
</div>
<div className="md:col-span-4 lg:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.3s_both] relative">
<p className="leading-relaxed md:text-lg text-base text-white/70 font-geist" data-i18n="hero.subheadline">
            A ruthless, high-impact web app that identifies where your business loses money, wastes spend, or misses easy revenue. Built for busy owners who demand measurable ROI.
          </p>
<div className="border-white/10 border-t mt-6 pt-6">
<div className="flex gap-4 text-sm text-white/50 gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-50" height="16" icon="solar:wad-of-money-linear" width="16"></iconify-icon>
<span className="font-geist" data-i18n="hero.benefit">ROI in Days, Not Months</span>
</div>
</div>
</div>
</div>
<div className="hidden lg:block lg:col-span-1 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2"></div>
</div>
<div className="md:col-span-12 lg:col-span-2 relative">
<div className="flex flex-row lg:flex-col gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center gap-2 transition hover:bg-white/15 hover:ring-white/25 whitespace-nowrap text-sm font-medium text-white/90 font-geist bg-white/10 ring-white/15 ring-1 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-sm [animation:fadeSlideIn_1s_ease-out_0.3s_both]" href="/#start">
<span data-i18n="hero.ctaPrimary">Start Your Audit</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 ring-1 ring-white/20 transition hover:bg-neutral-100 whitespace-nowrap [animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-neutral-900 font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4" href="/#solutions">
<span data-i18n="hero.ctaSecondary">View MVP Plan</span>
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>
</div>

<section className="relative z-10 py-32 px-6 lg:px-12" id="solutions">
<div className="max-w-7xl mr-auto ml-auto">

<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white max-w-4xl leading-[0.95]" data-i18n="features.header">
        Core App Features
      </h2>
<div className="max-w-md flex flex-col gap-6 lg:pt-2">
<p className="text-lg text-neutral-400 font-light leading-relaxed" data-i18n="features.sub">
          Direct, concise, and specific. We prioritize speed and ROI over perfection to deliver actionable insights immediately.
        </p>
<a className="group inline-flex items-center text-white font-medium hover:text-neutral-300 transition-colors" href="#">
<span data-i18n="features.link">View methodology</span>
<svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">
<div className="absolute inset-0 flex items-center justify-center opacity-80 perspective-[1000px]">
<div className="relative w-32 h-32 transform transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-y-[-10px]">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl transform -translate-x-4 -translate-y-2 -rotate-[15deg] backdrop-blur-[2px] transition-transform duration-500 ease-out group-hover:-translate-x-8 group-hover:-rotate-[20deg]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent border border-white/15 rounded-2xl transform translate-x-0 translate-y-0 -rotate-[5deg] backdrop-blur-[4px] transition-transform duration-500 delay-75 ease-out group-hover:rotate-0"></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent border border-white/20 rounded-2xl transform translate-x-4 translate-y-2 rotate-[5deg] backdrop-blur-[6px] shadow-2xl transition-transform duration-500 delay-150 ease-out group-hover:translate-x-8 group-hover:rotate-[15deg] flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-indigo-500/20 blur-xl"></div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-indigo-200 transition-colors" data-i18n="card1.title">Data Extraction</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card1.desc">Instant integration with CRM, accounting, and ad platforms for raw input.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">
<div className="absolute inset-0 overflow-hidden flex items-center justify-center">
<div className="relative w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500">
<div className="absolute top-1/4 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transform -rotate-12 translate-x-[-10%] group-hover:translate-x-[10%] transition-transform duration-[2s] ease-in-out"></div>
<div className="absolute top-1/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12 translate-x-[-20%] group-hover:translate-x-[5%] transition-transform duration-[2.5s] ease-in-out delay-75"></div>
<div className="absolute top-1/2 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform -rotate-12 translate-x-[-15%] group-hover:translate-x-[15%] transition-transform duration-[1.8s] ease-in-out delay-100"></div>
<div className="absolute top-2/3 left-[-20%] w-[140%] h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transform -rotate-12 translate-x-[-5%] group-hover:translate-x-[20%] transition-transform duration-[2.2s] ease-in-out delay-150"></div>
<div className="absolute top-1/2 left-1/2 w-40 h-40 bg-emerald-500/10 rounded-full blur-[60px] transform -translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-500/20 transition-colors duration-500"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-emerald-200 transition-colors" data-i18n="card2.title">Ruthless Analysis</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card2.desc">Automated cross-referencing of spend vs. conversion to flag wasted budget.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">
<div className="absolute inset-0 flex items-center justify-center perspective-[800px] overflow-hidden">
<div className="relative transform rotate-x-[60deg] rotate-z-[45deg] scale-75 group-hover:scale-90 transition-transform duration-700 ease-out">
<div className="w-48 h-48 border border-white/10 bg-white/5 grid grid-cols-4 grid-rows-4 rounded-lg shadow-2xl">
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5 bg-rose-500/10 transition-colors duration-300 group-hover:bg-rose-500/20"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-r border-b border-white/5"></div><div className="border-b border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div></div>
</div>
<div className="absolute -top-10 left-10 w-16 h-16 bg-[#1A1A1A] border border-white/20 rounded-xl shadow-2xl transform translate-z-20 group-hover:translate-z-40 transition-transform duration-500 ease-out flex items-center justify-center">
<svg className="text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
</div>
<div className="absolute top-1/2 left-1/2 w-0.5 h-20 bg-gradient-to-b from-rose-500/50 to-transparent transform -translate-x-1/2 -translate-y-1/2 group-hover:h-32 transition-all duration-700 ease-out origin-top"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-rose-200 transition-colors" data-i18n="card3.title">Inefficiency Dashboards</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card3.desc">High-contrast visualizations highlighting exactly where margin is lost.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="group relative h-96 rounded-[2rem] bg-[#0A0A0A] overflow-hidden border border-white/5 transition-colors duration-500 hover:bg-[#111] hover:border-white/10">
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-40 h-40 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-white/5 scale-100 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-4 rounded-full border border-white/5 scale-100 group-hover:scale-110 transition-transform duration-700 delay-75 ease-out"></div>
<div className="absolute inset-8 rounded-full border border-white/10 scale-100 group-hover:scale-105 transition-transform duration-700 delay-150 ease-out border-dashed opacity-50"></div>
<div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:animate-[spin_4s_linear_infinite] opacity-30">
<div className="absolute top-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-0.5 h-2 bg-white -translate-x-1/2"></div>
<div className="absolute left-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
<div className="absolute right-0 top-1/2 w-2 h-0.5 bg-white -translate-y-1/2"></div>
</div>
<div className="w-16 h-16 rounded-full bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-blue-200 transition-colors" data-i18n="card4.title">Gap Detection</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card4.desc">Actionable alerts for missed upsells and easy revenue opportunities.</p>
</div>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div></div></section>

<section className="z-10 fade-in fade-in-delay-4 sm:pb-12 sm:pt-12 pt-8 pb-8 relative animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.5s_both]" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide" data-i18n="logos.title">Results delivered for</p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l1">E-commerce Brands</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-i18n="logos.l2">SaaS Startups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-i18n="logos.l3">Agencies</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-i18n="logos.l4">B2B Services</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-i18n="logos.l5">Retail Operators</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l6">Founders</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-i18n="logos.l7">Consultants</span>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l1">E-commerce Brands</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-i18n="logos.l2">SaaS Startups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-i18n="logos.l3">Agencies</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-i18n="logos.l4">B2B Services</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-i18n="logos.l5">Retail Operators</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l6">Founders</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-i18n="logos.l7">Consultants</span>
</div>
</div>
</div>
</div>
</div>
<style>
    @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
    .ticker-track { animation: ticker 40s linear infinite; width: calc(200% + 16px); }
    .ticker-track:hover { animation-play-state: paused; }
  </style>
</section>

<section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d521c037-f8b6-43a7-ae68-c6c1d0215733_3840w.webp)] bg-cover pt-16 pb-16 relative z-20" id="showcase">
<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="hidden lg:block absolute right-8 top-10 z-10">
<div className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm">
<img alt="Team portrait" className="w-48 h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-[11px] text-slate-400 font-geist mt-2" data-i18n="pov.portrait">Ruthless ROI — Engineering Team</p>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-7">
<div className="aspect-[16/11] md:aspect-[5/4] overflow-hidden rounded-3xl relative">
<img alt="Generative systems visual" className="[animation:parallaxElement_linear_both] [animation-timeline:view()] [animation-range:entry_0%_entry_100%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] w-fit">
<span data-i18n="pov.pill">Actionable Output</span>
</div>
<h2 className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both] sm:text-5xl md:text-6xl md:font-normal md:tracking-tighter text-4xl font-semibold tracking-tight font-geist mt-4">
<span data-i18n="pov.title">The Truth Dashboard</span>
</h2>
<p className="md:mt-5 md:text-lg leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] text-base text-white/70 font-geist mt-5" data-i18n="pov.desc">
          A completely objective, no-BS output dashboard that tracks every dollar. Pinpoint exactly which campaigns are burning cash and which segments are under-monetized without unnecessary complexity.
        </p>
<a className="group inline-flex items-center gap-2 mt-6 text-sm font-medium font-geist text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both]" href="/#resources">
<span data-i18n="pov.link">See sample dashboard</span>
<iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/72c90007-7638-4902-8dda-5a6c20e92741_3840w.jpg)] bg-cover pt-16 pb-16 relative z-20" id="resources">
<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
<div className="max-w-3xl">
<div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<span data-i18n="details.pill">Minimum Viable Product</span>
</div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
<span data-i18n="details.title">Fast Deployment Plan</span>
</h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]" data-i18n="details.subtitle">
        We bypass feature bloat. Our MVP plan deploys core tracking infrastructure in days to stop financial bleeding immediately.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 gap-x-6 gap-y-6">
<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c1Title">Phase 1: Inputs</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="details.c1Desc">
          Rapidly connect your financial and marketing data sources.
        </p>
<div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300 font-geist">
<iconify-icon className="opacity-80" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
<span data-i18n="details.c1Mini">API syncs</span>
</div>
<div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist" data-i18n="details.c1MiniTag">Days 1-3</span>
</div>
</div>
<div className="mt-3 space-y-2">
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line1">CRM Data</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line2">Ad Spend</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line3">Accounting Logs</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line4">Stripe/Payments</div>
</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="absolute inset-0">
<img alt="Seamless connection" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative p-5 md:p-6">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c2Title">Phase 2: Analysis</h3>
<p className="mt-2 text-sm text-slate-200/80 font-geist" data-i18n="details.c2Desc">
            Deploy automated scripts to cross-reference data and detect anomalies.
          </p>
</div>
<div className="relative p-5 md:p-6 pt-0">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/80 ring-1 ring-white/15 font-geist">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
<span data-i18n="details.c2Tag">Algorithms • Scripts • Queries</span>
</div>
</div>
</div>
<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c3Title">Phase 3: Output</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="details.c3Desc">
          Deliver the prioritized list of revenue gaps and waste.
        </p>
<div className="mt-5 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),rgba(2,6,23,0.6))] ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-200" height="16" icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-normal text-slate-200 font-geist" data-i18n="details.c3MiniTitle">Action Plan</p>
<p className="text-[11px] text-slate-400 font-geist" data-i18n="details.c3MiniDesc">Clear, concise actions</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300 font-geist">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-80" height="14" icon="solar:widget-2-linear" width="14"></iconify-icon>
<span data-i18n="details.c3Line1">Spend cuts</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span data-i18n="details.c3Line2">Upsell prompts</span>
</div>
</div>
<div className="mt-4 space-y-2">
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300" data-i18n="details.c3SubjectStrong">Includes:</span> <span data-i18n="details.c3Subject">ROI metrics, alerts, dashboard</span></p>
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300" data-i18n="details.c3FocusStrong">Time:</span> <span data-i18n="details.c3Focus">Days 8-14</span></p>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-10 gap-x-3 gap-y-3" id="contact">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition" href="/#start">
<span data-i18n="details.cta1">Deploy MVP</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition" href="/#solutions">
<span data-i18n="details.cta2">View Features</span>
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</a>
<a className="group inline-flex items-center gap-2 text-sm font-medium font-geist text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="/#restaurants">
<span data-i18n="details.cta3">Read the Manifesto</span>
<iconify-icon className="transition-transform duration-200 group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="overflow-hidden lg:py-24 pt-16 pb-16 relative z-20">
<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
</div>
<div className="z-10 md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto">
<div className="inline-flex text-[11px] ring-1 ring-white/10 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] font-medium text-white/70 font-geist bg-white/5 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<iconify-icon height="14" icon="solar:layers-minimalistic-linear" width="14"></iconify-icon>
<span data-i18n="aud2.pill">User Engagement</span>
</div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
<span data-i18n="aud2.title">Maximum Engagement, Zero Complexity</span>
</h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]" data-i18n="aud2.desc">
        You are busy. You don't have time to learn a complex new SaaS tool. We deliver insights where you already are.
      </p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c1Title">Direct Push Alerts</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="aud2.c1Desc">Instant notifications for critical financial leaks.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L1">SMS for sudden spend spikes</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L2">Email for weekly recaps</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L3">Slack/Teams integration</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full" href="/#start">
<span data-i18n="aud2.c1Cta">See Notification Rules</span>
</a>
</div>
<div className="relative rounded-3xl overflow-hidden ring-2 ring-blue-400/50 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="absolute top-4 right-4">
<span className="inline-flex items-center gap-1 rounded-full bg-blue-400/20 ring-1 ring-blue-400/40 px-2.5 py-1 text-[10px] font-medium text-blue-200 font-geist" data-i18n="aud2.badge">
            CORE
          </span>
</div>
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c2Title">Executive Summaries</h3>
<p className="mt-2 text-sm text-slate-200/80 font-geist" data-i18n="aud2.c2Desc">High-impact, 1-page reports delivered every Friday.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L1">Money saved this week</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L2">Wasted spend identified</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L3">New revenue captured</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L4">Top 3 priorities for Monday</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition w-full" href="/#restaurants">
<span data-i18n="aud2.c2Cta">Download Sample Report</span>
</a>
</div>
<div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both]">
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c3Title">1-Click Actions</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="aud2.c3Desc">Approve changes without logging into a dashboard.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L1">Pause underperforming ads</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L2">Approve budget reallocations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L3">Send upsell campaigns</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L4">Cancel unused software</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full" href="/#start">
<span data-i18n="aud2.c3Cta">View Workflows</span>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32b67867-f241-44ab-a57c-c87e60b99c25_3840w.webp)] bg-cover pt-16 pb-16 relative z-20" id="start">
<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
</div>
<div className="z-10 md:px-8 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 ring-1 ring-white/10 backdrop-blur-md">
<div className="absolute inset-0 opacity-30">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
</div>
<div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist mb-6">
<iconify-icon height="16" icon="solar:rocket-linear" width="16"></iconify-icon>
<span data-i18n="close.pill">Ready for results?</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter font-geist" data-i18n="close.title">
            Find Your Lost Revenue Today
          </h2>
<p className="mt-6 text-lg text-slate-300 leading-relaxed font-geist" data-i18n="close.desc">
            Hire a ruthless but fair business engineering system. Identify inefficiencies, cut waste, and capture missed opportunities fast.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-6 py-3 text-base font-medium font-geist hover:bg-neutral-100 transition" href="#contact">
<span data-i18n="close.cta">Start Your Audit</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-6 py-3 text-base font-medium font-geist hover:bg-white/15 transition" href="/#solutions">
<span data-i18n="close.cta2">View Timelines</span>
<iconify-icon height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400 font-geist">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b1">High-impact focus</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b2">Measurable ROI</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b3">Fast deployment</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="overflow-hidden bg-slate-950 border-white/5 border-t relative z-20">
<div className="pointer-events-none z-0 absolute inset-0">
<div className="absolute inset-y-0 left-[12.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[37.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-white/8 via-white/5 to-transparent"></div>
<div className="absolute inset-y-0 left-[62.5%] w-px bg-gradient-to-b from-white/5 via-white/5 to-transparent"></div>
</div>
<div className="z-10 md:px-8 lg:py-20 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
<div className="col-span-2">
<a aria-label="PSYCHO MAKER" className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<p className="mt-4 text-sm text-slate-400 leading-relaxed font-geist max-w-xs" data-i18n="footer.blurb">
          We are a ruthless but fair full stack business engineering firm focused on identifying lost money and maximizing ROI.
        </p>
<div className="mt-6 flex items-center gap-3">
<a aria-label="Social 1" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<iconify-icon height="18" icon="solar:star-linear" width="18"></iconify-icon>
</a>
<a aria-label="Social 2" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<iconify-icon height="18" icon="solar:global-linear" width="18"></iconify-icon>
</a>
<a aria-label="Social 3" className="w-9 h-9 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col1Title">Platform</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L1" href="#solutions">Features</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L2" href="#resources">Dashboards</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L3" href="#showcase">MVP Plan</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L4" href="#restaurants">Engagement</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col2Title">Capabilities</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L1" href="#resources">Data Extraction</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L2" href="#resources">Ruthless Analysis</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L3" href="#resources">Gap Detection</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L4" href="#start">Start</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col3Title">Industries</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L1" href="#solutions">E-commerce Brands</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L2" href="#solutions">SaaS Startups</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L3" href="#solutions">Agencies</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L4" href="#solutions">Retail Operators</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-1">
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col4Title">Contact</h3>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-slate-400 hover:text-white transition font-geist inline-flex items-center gap-2" href="mailto:audit@psychomaker.studio">
<span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="14" icon="solar:letter-linear" width="14"></iconify-icon>
</span>
<span>audit@psychomaker.studio</span>
</a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-white transition font-geist inline-flex items-center gap-2" href="tel:+10000000000">
<span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="14" icon="solar:phone-linear" width="14"></iconify-icon>
</span>
<span data-i18n="footer.phone">+1 (000) 000-0000</span>
</a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-white transition font-geist inline-flex items-center gap-2" href="#contact">
<span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="14" icon="solar:chat-round-linear" width="14"></iconify-icon>
</span>
<span data-i18n="footer.contactLink">Get in touch</span>
</a>
</li>
</ul>
<div className="mt-6">
<p className="text-[11px] text-slate-500 font-geist" data-i18n="footer.note">
            Response times typically within 1–2 business days.
          </p>
</div>
</div>
</div>
<div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-geist">
<span>© </span><span id="year"></span><span> PSYCHO MAKER</span>
<span className="text-slate-600"> • </span>
<span data-i18n="footer.rights">All rights reserved.</span>
</p>
<div className="flex flex-wrap items-center gap-3">
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkSolutions" href="#solutions">Features</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkServices" href="#resources">MVP Plan</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkProduct" href="#showcase">Dashboards</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkStart" href="#start">Start</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
