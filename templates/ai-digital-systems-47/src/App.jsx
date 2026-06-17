import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



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
      "nav.solutions": "Solutions",
      "nav.product": "Product",
      "nav.services": "Services",
      "nav.restaurants": "Restaurants",
      "nav.getStarted": "Build Your Digital Platform",
      "nav.contact": "Contact",

      "hero.pill": "PSYCHO MAKER • Digital Systems Studio",
      "hero.headline": "Transform Your Business",
      "hero.headline2": "with Intelligent AI",
      "hero.subheadline": "We design and build intelligent digital platforms, automation systems and custom infrastructure that modernize, automate and scale your business.",
      "hero.benefit": "Fast deployment",
      "hero.ctaPrimary": "Build Your Digital Platform",
      "hero.ctaSecondary": "View Solutions",

      "features.header": "Our Expertise",
      "features.sub": "We don't just build websites; we build ecosystems. Our approach integrates rigorous strategy with immersive design.",
      "features.link": "View all services",
      "card1.title": "Strategy & Branding",
      "card1.desc": "Positioning, identity systems, and voice definition.",
      "card2.title": "Design",
      "card2.desc": "UI/UX design, motion graphics, and 3D visualization.",
      "card3.title": "Development",
      "card3.desc": "Scalable architecture, API integration, and performance.",
      "card4.title": "Production",
      "card4.desc": "Copywriting, photography, and video production.",

      "logos.title": "Trusted by teams at",
      "logos.l1": "Local brands",
      "logos.l2": "Restaurant groups",
      "logos.l3": "Startups",
      "logos.l4": "Modern companies",
      "logos.l5": "Operations teams",
      "logos.l6": "Founders",
      "logos.l7": "Growth teams",

      "pov.portrait": "PSYCHO MAKER Studio — Systems Team",
      "pov.pill": "Featured Core Product",
      "pov.title": "Complete Digital Platform",
      "pov.desc": "A full digital infrastructure including a professional website platform, internal management systems, automation workflows, AI integrations, operational dashboards, and scalable digital architecture—engineered to run your business.",
      "pov.link": "Explore what’s included",

      "details.pill": "Core Services",
      "details.title": "Digital Systems for Real Businesses",
      "details.subtitle": "We transform local businesses, startups, restaurants and companies through intelligent digital platforms and AI systems—built as infrastructure, not just design.",
      "details.c1Title": "Digital Presence",
      "details.c1Desc": "Professional websites and digital platforms designed to establish trust, capture demand, and grow your business online.",
      "details.c1Mini": "Platform signals",
      "details.c1MiniTag": "Online",
      "details.c1Line1": "Fast, responsive pages",
      "details.c1Line2": "Conversion-ready structure",
      "details.c1Line3": "SEO foundation",
      "details.c1Line4": "Analytics & tracking",

      "details.c2Title": "Automation & AI Systems",
      "details.c2Desc": "Smart automation, AI integrations and intelligent workflows that reduce manual work and increase consistency.",
      "details.c2Tag": "Automations • integrations • AI",

      "details.c3Title": "Custom Digital Platforms",
      "details.c3Desc": "Advanced internal systems, dashboards and custom-built platforms tailored to each business.",
      "details.c3MiniTitle": "Management system",
      "details.c3MiniDesc": "Dashboards • roles • workflows",
      "details.c3Line1": "Structured operations",
      "details.c3Line2": "Internal tooling",
      "details.c3SubjectStrong": "Includes:",
      "details.c3Subject": "website, systems, automations, AI, dashboards",
      "details.c3FocusStrong": "Built for:",
      "details.c3Focus": "local businesses, startups, restaurants, modern companies",
      "details.cta1": "Build Your Digital Platform",
      "details.cta2": "View Solutions",
      "details.cta3": "Restaurant systems",

      "aud2.pill": "Built for",
      "aud2.title": "Systems that fit your reality",
      "aud2.desc": "PSYCHO MAKER builds digital infrastructure for teams that need real operations, not just marketing pages.",
      "aud2.c1Title": "Local Businesses",
      "aud2.c1Desc": "Modernize your digital presence and streamline operations.",
      "aud2.c1L1": "Professional website platform",
      "aud2.c1L2": "Automation for admin tasks",
      "aud2.c1L3": "Operational clarity",
      "aud2.c1Cta": "Start",

      "aud2.badge": "CORE",
      "aud2.c2Title": "Restaurants",
      "aud2.c2Desc": "End-to-end systems that connect orders, reservations, menus and dashboards.",
      "aud2.c2L1": "Order management systems",
      "aud2.c2L2": "Reservation systems",
      "aud2.c2L3": "Digital menu platforms",
      "aud2.c2L4": "Internal dashboards",
      "aud2.c2Cta": "View restaurant systems",

      "aud2.c3Title": "Startups & Modern Companies",
      "aud2.c3Desc": "Custom platforms, dashboards, and AI systems for teams that scale.",
      "aud2.c3L1": "Custom internal systems",
      "aud2.c3L2": "AI integrations",
      "aud2.c3L3": "Operational dashboards",
      "aud2.c3L4": "Scalable architecture",
      "aud2.c3Cta": "Start",

      "close.pill": "Ready to build?",
      "close.title": "Build the Digital Infrastructure Your Business Deserves",
      "close.desc": "PSYCHO MAKER designs and delivers premium digital systems—platforms, automations, and AI—built to run in production and scale with your growth.",
      "close.cta": "Start Your Transformation",
      "close.cta2": "View Solutions",
      "close.b1": "Studio-built systems",
      "close.b2": "Automation + AI",
      "close.b3": "Production-ready",

      "footer.blurb": "PSYCHO MAKER is a futuristic Digital Systems Studio building intelligent platforms, automation, and AI infrastructure for modern businesses.",
      "footer.col1Title": "Studio",
      "footer.col1L1": "Solutions",
      "footer.col1L2": "Services",
      "footer.col1L3": "Product",
      "footer.col1L4": "Restaurants",
      "footer.col2Title": "Capabilities",
      "footer.col2L1": "Digital Presence",
      "footer.col2L2": "Automation & AI",
      "footer.col2L3": "Custom Platforms",
      "footer.col2L4": "Start",
      "footer.col3Title": "Industries",
      "footer.col3L1": "Local Businesses",
      "footer.col3L2": "Restaurants",
      "footer.col3L3": "Startups",
      "footer.col3L4": "Modern Companies",
      "footer.col4Title": "Contact",
      "footer.phone": "+1 (000) 000-0000",
      "footer.contactLink": "Get in touch",
      "footer.note": "Response times typically within 1–2 business days.",
      "footer.rights": "All rights reserved.",
      "footer.linkSolutions": "Solutions",
      "footer.linkServices": "Services",
      "footer.linkProduct": "Product",
      "footer.linkStart": "Start"
    },
    es: {
      "nav.solutions": "Soluciones",
      "nav.product": "Producto",
      "nav.services": "Servicios",
      "nav.restaurants": "Restaurantes",
      "nav.getStarted": "Construye tu Plataforma",
      "nav.contact": "Contacto",

      "hero.pill": "PSYCHO MAKER • Estudio de Sistemas Digitales",
      "hero.headline": "Transforma tu Negocio",
      "hero.headline2": "con IA Inteligente",
      "hero.subheadline": "Diseñamos y construimos plataformas digitales inteligentes, sistemas de automatización e infraestructura a medida que modernizan, automatizan y escalan tu negocio.",
      "hero.benefit": "Despliegue rápido",
      "hero.ctaPrimary": "Construye tu Plataforma",
      "hero.ctaSecondary": "Ver Soluciones",

      "features.header": "Nuestra Experiencia",
      "features.sub": "No solo construimos sitios web; construimos ecosistemas. Nuestro enfoque integra estrategia rigurosa con diseño inmersivo.",
      "features.link": "Ver todos los servicios",
      "card1.title": "Estrategia y Marca",
      "card1.desc": "Posicionamiento, sistemas de identidad y definición de voz.",
      "card2.title": "Diseño",
      "card2.desc": "Diseño UI/UX, motion graphics y visualización 3D.",
      "card3.title": "Desarrollo",
      "card3.desc": "Arquitectura escalable, integración de API y rendimiento.",
      "card4.title": "Producción",
      "card4.desc": "Redacción, fotografía y producción de video.",

      "logos.title": "Con la confianza de",
      "logos.l1": "Marcas locales",
      "logos.l2": "Grupos de restaurantes",
      "logos.l3": "Startups",
      "logos.l4": "Empresas modernas",
      "logos.l5": "Equipos de operaciones",
      "logos.l6": "Fundadores",
      "logos.l7": "Equipos de crecimiento",

      "pov.portrait": "PSYCHO MAKER Studio — Equipo de Sistemas",
      "pov.pill": "Producto Principal Destacado",
      "pov.title": "Plataforma Digital Completa",
      "pov.desc": "Una infraestructura digital completa que incluye una plataforma web profesional, sistemas de gestión interna, flujos de automatización, integraciones de IA, dashboards operativos y arquitectura escalable, diseñada para operar tu negocio.",
      "pov.link": "Explorar qué incluye",

      "details.pill": "Servicios Principales",
      "details.title": "Sistemas Digitales para Negocios Reales",
      "details.subtitle": "Transformamos negocios locales, startups, restaurantes y empresas a través de plataformas digitales inteligentes y sistemas de IA, construidos como infraestructura, no solo diseño.",
      "details.c1Title": "Presencia Digital",
      "details.c1Desc": "Sitios web profesionales y plataformas digitales diseñadas para generar confianza, capturar demanda y hacer crecer tu negocio en línea.",
      "details.c1Mini": "Señales de plataforma",
      "details.c1MiniTag": "En línea",
      "details.c1Line1": "Páginas rápidas y responsivas",
      "details.c1Line2": "Estructura lista para conversión",
      "details.c1Line3": "Base SEO",
      "details.c1Line4": "Analítica y seguimiento",

      "details.c2Title": "Automatización y Sistemas IA",
      "details.c2Desc": "Automatización inteligente, integraciones de IA y flujos de trabajo inteligentes que reducen el trabajo manual y aumentan la consistencia.",
      "details.c2Tag": "Automatizaciones • integraciones • IA",

      "details.c3Title": "Plataformas Digitales a Medida",
      "details.c3Desc": "Sistemas internos avanzados, dashboards y plataformas personalizadas adaptadas a cada negocio.",
      "details.c3MiniTitle": "Sistema de gestión",
      "details.c3MiniDesc": "Dashboards • roles • flujos",
      "details.c3Line1": "Operaciones estructuradas",
      "details.c3Line2": "Herramientas internas",
      "details.c3SubjectStrong": "Incluye:",
      "details.c3Subject": "web, sistemas, automatizaciones, IA, dashboards",
      "details.c3FocusStrong": "Para:",
      "details.c3Focus": "negocios locales, startups, restaurantes, empresas modernas",
      "details.cta1": "Construye tu Plataforma",
      "details.cta2": "Ver Soluciones",
      "details.cta3": "Sistemas para restaurantes",

      "aud2.pill": "Construido para",
      "aud2.title": "Sistemas que encajan con tu realidad",
      "aud2.desc": "PSYCHO MAKER construye infraestructura digital para equipos que necesitan operaciones reales, no solo páginas de marketing.",
      "aud2.c1Title": "Negocios Locales",
      "aud2.c1Desc": "Moderniza tu presencia digital y agiliza operaciones.",
      "aud2.c1L1": "Plataforma web profesional",
      "aud2.c1L2": "Automatización para tareas admin",
      "aud2.c1L3": "Claridad operativa",
      "aud2.c1Cta": "Empezar",

      "aud2.badge": "CORE",
      "aud2.c2Title": "Restaurantes",
      "aud2.c2Desc": "Sistemas de extremo a extremo que conectan pedidos, reservas, menús y dashboards.",
      "aud2.c2L1": "Sistemas de gestión de pedidos",
      "aud2.c2L2": "Sistemas de reservas",
      "aud2.c2L3": "Plataformas de menú digital",
      "aud2.c2L4": "Dashboards internos",
      "aud2.c2Cta": "Ver sistemas para restaurantes",

      "aud2.c3Title": "Startups y Empresas Modernas",
      "aud2.c3Desc": "Plataformas personalizadas, dashboards y sistemas de IA para equipos que escalan.",
      "aud2.c3L1": "Sistemas internos a medida",
      "aud2.c3L2": "Integraciones de IA",
      "aud2.c3L3": "Dashboards operativos",
      "aud2.c3L4": "Arquitectura escalable",
      "aud2.c3Cta": "Empezar",

      "close.pill": "¿Listo para construir?",
      "close.title": "Construye la Infraestructura Digital que tu Negocio Merece",
      "close.desc": "PSYCHO MAKER diseña y entrega sistemas digitales premium—plataformas, automatizaciones e IA—construidos para funcionar en producción y escalar con tu crecimiento.",
      "close.cta": "Comienza tu Transformación",
      "close.cta2": "Ver Soluciones",
      "close.b1": "Sistemas de estudio",
      "close.b2": "Automatización + IA",
      "close.b3": "Listo para producción",

      "footer.blurb": "PSYCHO MAKER es un Estudio de Sistemas Digitales futurista que construye plataformas inteligentes, automatización e infraestructura de IA para negocios modernos.",
      "footer.col1Title": "Estudio",
      "footer.col1L1": "Soluciones",
      "footer.col1L2": "Servicios",
      "footer.col1L3": "Producto",
      "footer.col1L4": "Restaurantes",
      "footer.col2Title": "Capacidades",
      "footer.col2L1": "Presencia Digital",
      "footer.col2L2": "Automatización e IA",
      "footer.col2L3": "Plataformas a Medida",
      "footer.col2L4": "Empezar",
      "footer.col3Title": "Industrias",
      "footer.col3L1": "Negocios Locales",
      "footer.col3L2": "Restaurantes",
      "footer.col3L3": "Startups",
      "footer.col3L4": "Empresas Modernas",
      "footer.col4Title": "Contacto",
      "footer.phone": "+1 (000) 000-0000",
      "footer.contactLink": "Hablemos",
      "footer.note": "Tiempos de respuesta típicos de 1-2 días hábiles.",
      "footer.rights": "Todos los derechos reservados.",
      "footer.linkSolutions": "Soluciones",
      "footer.linkServices": "Servicios",
      "footer.linkProduct": "Producto",
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
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

<img alt="" className="pointer-events-none w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92a4234b-15fa-4d5f-8821-48d3f9f7e2f1_3840w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>

<header className="z-20 border-white/5 border-b relative">
<div className="flex md:px-8 max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<div className="flex md:gap-6 ring-white/5 ring-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-4 gap-y-4 items-center">

<a aria-label="PSYCHO MAKER" className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7466370-2832-4fdd-84c2-0932bb0dd850_800w.png)] bg-cover rounded-full" href="#"></a>
<nav className="hidden md:flex gap-2 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#solutions">
<span data-i18n="nav.solutions">Solutions</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#showcase">
<span data-i18n="nav.product">Product</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#resources">
<span data-i18n="nav.services">Services</span>
</a>
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 hover:ring-white/20 text-sm font-medium text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-2 pr-3.5 pb-2 pl-3.5 backdrop-blur-sm" href="/#restaurants">
<span data-i18n="nav.restaurants">Restaurants</span>
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
<span data-i18n="nav.getStarted">Build Your Digital Platform</span>
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
<iconify-icon className="text-white/80" height="16" icon="solar:sparkles-linear" width="16"></iconify-icon>
<span data-i18n="hero.pill">PSYCHO MAKER • Digital Systems Studio</span>
</div>
<h1 className="leading-tight sm:text-5xl md:text-5xl lg:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] text-4xl tracking-tighter font-geist">
<span data-i18n="hero.headline">Transform Your Business</span>
<span className="block bg-clip-text text-transparent tracking-tighter font-geist bg-gradient-to-r from-white via-white to-white/70" data-i18n="hero.headline2">with Intelligent AI</span>
</h1>
</div>
<div className="hidden md:block md:col-span-1 lg:col-span-1 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2"></div>
</div>
<div className="md:col-span-4 lg:col-span-3 [animation:fadeSlideIn_1s_ease-out_0.3s_both] relative">
<p className="leading-relaxed md:text-lg text-base text-white/70 font-geist" data-i18n="hero.subheadline">
            We design and build intelligent digital platforms, automation systems and custom infrastructure that modernize, automate and scale your business.
          </p>
<div className="border-white/10 border-t mt-6 pt-6">
<div className="flex gap-4 text-sm text-white/50 gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-50" height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="font-geist" data-i18n="hero.benefit">Fast deployment</span>
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
<span data-i18n="hero.ctaPrimary">Build Your Digital Platform</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 ring-1 ring-white/20 transition hover:bg-neutral-100 whitespace-nowrap [animation:fadeSlideIn_1s_ease-out_0.5s_both] text-sm font-medium text-neutral-900 font-geist bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4" href="/#solutions">
<span data-i18n="hero.ctaSecondary">View Solutions</span>
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
</main>
</div>

<section className="relative z-10 py-32 px-6 lg:px-12">
<div className="max-w-7xl mr-auto ml-auto">

<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white max-w-4xl leading-[0.95]" data-i18n="features.header">
        Our Expertise
      </h2>
<div className="max-w-md flex flex-col gap-6 lg:pt-2">
<p className="text-lg text-neutral-400 font-light leading-relaxed" data-i18n="features.sub">
          We don't just build websites; we build ecosystems. Our approach integrates rigorous strategy with immersive design.
        </p>
<a className="group inline-flex items-center text-white font-medium hover:text-neutral-300 transition-colors" href="#">
<span data-i18n="features.link">View all services</span>
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
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-indigo-200 transition-colors" data-i18n="card1.title">Strategy &amp; Branding</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card1.desc">Positioning, identity systems, and voice definition.</p>
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
<div className="absolute top-[40%] right-[20%] text-[10px] font-mono text-emerald-500/60 opacity-0 group-hover:opacity-00">
                120fps
             </div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-10">
<div className="flex flex-col gap-2 max-w-[70%]">
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-emerald-200 transition-colors" data-i18n="card2.title">Design</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card2.desc">UI/UX design, motion graphics, and 3D visualization.</p>
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
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-rose-200 transition-colors" data-i18n="card3.title">Development</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card3.desc">Scalable architecture, API integration, and performance.</p>
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
<h3 className="text-xl font-medium text-white tracking-tight leading-none group-hover:text-blue-200 transition-colors" data-i18n="card4.title">Production</h3>
<p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed" data-i18n="card4.desc">Copywriting, photography, and video production.</p>
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
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide" data-i18n="logos.title">Trusted by teams at</p>
</div>
<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0" style={{visibility: 'hidden'}}></div>
<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">
<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l1">Local brands</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-i18n="logos.l2">Restaurant groups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-i18n="logos.l3">Startups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-i18n="logos.l4">Modern companies</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-i18n="logos.l5">Operations teams</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l6">Founders</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-i18n="logos.l7">Growth teams</span>
</div>
</div>
<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l1">Local brands</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage" data-i18n="logos.l2">Restaurant groups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather" data-i18n="logos.l3">Startups</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif" data-i18n="logos.l4">Modern companies</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair" data-i18n="logos.l5">Operations teams</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter" data-i18n="logos.l6">Founders</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter" data-i18n="logos.l7">Growth teams</span>
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
<img alt="Team portrait" className="w-48 h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20253914-1507-436f-a56d-f7abbc5d0c73_800w.webp"/>
</div>
<p className="text-[11px] text-slate-400 font-geist mt-2" data-i18n="pov.portrait">PSYCHO MAKER Studio — Systems Team</p>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-7">
<div className="aspect-[16/11] md:aspect-[5/4] overflow-hidden rounded-3xl relative">
<img alt="Generative systems visual" className="[animation:parallaxElement_linear_both] [animation-timeline:view()] [animation-range:entry_0%_entry_100%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bad1237-d4b7-4abc-a4ff-4bb6e105b47d_1600w.png"/>
</div>
</div>
<div className="lg:col-span-5">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.05s_both] w-fit">
<span data-i18n="pov.pill">Featured Core Product</span>
</div>
<h2 className="animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both] sm:text-5xl md:text-6xl md:font-normal md:tracking-tighter text-4xl font-semibold tracking-tight font-geist mt-4">
<span data-i18n="pov.title">Complete Digital Platform</span>
</h2>
<p className="md:mt-5 md:text-lg leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both] text-base text-white/70 font-geist mt-5" data-i18n="pov.desc">
          A full digital infrastructure including a professional website platform, internal management systems, automation workflows, AI integrations, operational dashboards, and scalable digital architecture—engineered to run your business.
        </p>
<a className="group inline-flex items-center gap-2 mt-6 text-sm font-medium font-geist text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60 animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.35s_both]" href="/#resources">
<span data-i18n="pov.link">Explore what’s included</span>
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
<span data-i18n="details.pill">Core Services</span>
</div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
<span data-i18n="details.title">Digital Systems for Real Businesses</span>
</h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]" data-i18n="details.subtitle">
        We transform local businesses, startups, restaurants and companies through intelligent digital platforms and AI systems—built as infrastructure, not just design.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 gap-x-6 gap-y-6">
<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c1Title">Digital Presence</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="details.c1Desc">
          Professional websites and digital platforms designed to establish trust, capture demand, and grow your business online.
        </p>
<div className="mt-5 rounded-2xl bg-black/30 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-xs text-slate-300 font-geist">
<iconify-icon className="opacity-80" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
<span data-i18n="details.c1Mini">Platform signals</span>
</div>
<div className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-orange-300"></div>
<span className="text-[10px] text-slate-200 font-geist" data-i18n="details.c1MiniTag">Online</span>
</div>
</div>
<div className="mt-3 space-y-2">
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line1">Fast, responsive pages</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line2">Conversion-ready structure</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line3">SEO foundation</div>
<div className="text-[11px] text-slate-300/90 font-geist" data-i18n="details.c1Line4">Analytics &amp; tracking</div>
</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/15 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="absolute inset-0">
<img alt="Seamless connection" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/459579f4-e2d0-4218-a12d-f974a4b89651_800w.jpg"/>
<div className="bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative p-5 md:p-6">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c2Title">Automation &amp; AI Systems</h3>
<p className="mt-2 text-sm text-slate-200/80 font-geist" data-i18n="details.c2Desc">
            Smart automation, AI integrations and intelligent workflows that reduce manual work and increase consistency.
          </p>
</div>
<div className="relative p-5 md:p-6 pt-0">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-white/80 ring-1 ring-white/15 font-geist">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
<span data-i18n="details.c2Tag">Automations • integrations • AI</span>
</div>
</div>
</div>
<div className="md:p-6 overflow-hidden animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both] bg-slate-900/50 ring-white/10 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl md:text-2xl font-normal tracking-tighter font-geist" data-i18n="details.c3Title">Custom Digital Platforms</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="details.c3Desc">
          Advanced internal systems, dashboards and custom-built platforms tailored to each business.
        </p>
<div className="mt-5 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.06),rgba(2,6,23,0.6))] ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<iconify-icon className="text-slate-200" height="16" icon="solar:server-square-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm font-normal text-slate-200 font-geist" data-i18n="details.c3MiniTitle">Management system</p>
<p className="text-[11px] text-slate-400 font-geist" data-i18n="details.c3MiniDesc">Dashboards • roles • workflows</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-300 font-geist">
<div className="flex items-center gap-2">
<iconify-icon className="opacity-80" height="14" icon="solar:widget-2-linear" width="14"></iconify-icon>
<span data-i18n="details.c3Line1">Structured operations</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span data-i18n="details.c3Line2">Internal tooling</span>
</div>
</div>
<div className="mt-4 space-y-2">
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300" data-i18n="details.c3SubjectStrong">Includes:</span> <span data-i18n="details.c3Subject">website, systems, automations, AI, dashboards</span></p>
<p className="text-[11px] text-slate-400 font-geist"><span className="text-slate-300" data-i18n="details.c3FocusStrong">Built for:</span> <span data-i18n="details.c3Focus">local businesses, startups, restaurants, modern companies</span></p>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.4s_both] mt-10 gap-x-3 gap-y-3" id="contact">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition" href="/#start">
<span data-i18n="details.cta1">Build Your Digital Platform</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition" href="/#solutions">
<span data-i18n="details.cta2">View Solutions</span>
<iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon>
</a>
<a className="group inline-flex items-center gap-2 text-sm font-medium font-geist text-white/90 underline decoration-white/30 underline-offset-4 hover:decoration-white/60" href="/#restaurants">
<span data-i18n="details.cta3">Restaurant systems</span>
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
<span data-i18n="aud2.pill">Built for</span>
</div>
<h2 className="mt-4 sm:text-5xl md:text-6xl text-4xl font-normal tracking-tighter font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.15s_both]">
<span data-i18n="aud2.title">Systems that fit your reality</span>
</h2>
<p className="md:mt-4 mt-3 md:text-lg text-base text-white/70 leading-relaxed font-geist animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.25s_both]" data-i18n="aud2.desc">
        PSYCHO MAKER builds digital infrastructure for teams that need real operations, not just marketing pages.
      </p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c1Title">Local Businesses</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="aud2.c1Desc">Modernize your digital presence and streamline operations.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L1">Professional website platform</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L2">Automation for admin tasks</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c1L3">Operational clarity</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full" href="/#start">
<span data-i18n="aud2.c1Cta">Start</span>
</a>
</div>
<div className="relative rounded-3xl overflow-hidden ring-2 ring-blue-400/50 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.28s_both]">
<div className="absolute top-4 right-4">
<span className="inline-flex items-center gap-1 rounded-full bg-blue-400/20 ring-1 ring-blue-400/40 px-2.5 py-1 text-[10px] font-medium text-blue-200 font-geist" data-i18n="aud2.badge">
            CORE
          </span>
</div>
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c2Title">Restaurants</h3>
<p className="mt-2 text-sm text-slate-200/80 font-geist" data-i18n="aud2.c2Desc">End-to-end systems that connect orders, reservations, menus and dashboards.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L1">Order management systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L2">Reservation systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L3">Digital menu platforms</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c2L4">Internal dashboards</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-4 py-2.5 text-sm font-medium font-geist hover:bg-neutral-100 transition w-full" href="/#restaurants">
<span data-i18n="aud2.c2Cta">View restaurant systems</span>
</a>
</div>
<div className="rounded-3xl bg-slate-900/50 ring-1 ring-white/10 backdrop-blur-md p-6 md:p-8 flex flex-col animate-on-scroll [animation:fadeSlideIn_1s_ease-out_0.36s_both]">
<div className="flex-1">
<h3 className="text-xl font-normal tracking-tight font-geist" data-i18n="aud2.c3Title">Startups &amp; Modern Companies</h3>
<p className="mt-2 text-sm text-slate-400 font-geist" data-i18n="aud2.c3Desc">Custom platforms, dashboards, and AI systems for teams that scale.</p>
<ul className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L1">Custom internal systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L2">AI integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L3">Operational dashboards</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-geist">
<iconify-icon className="text-blue-300 shrink-0 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-i18n="aud2.c3L4">Scalable architecture</span>
</li>
</ul>
</div>
<a className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-4 py-2.5 text-sm font-medium font-geist hover:bg-white/15 transition w-full" href="/#start">
<span data-i18n="aud2.c3Cta">Start</span>
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
<span data-i18n="close.pill">Ready to build?</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tighter font-geist" data-i18n="close.title">
            Build the Digital Infrastructure Your Business Deserves
          </h2>
<p className="mt-6 text-lg text-slate-300 leading-relaxed font-geist" data-i18n="close.desc">
            PSYCHO MAKER designs and delivers premium digital systems—platforms, automations, and AI—built to run in production and scale with your growth.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-900 ring-1 ring-white/20 px-6 py-3 text-base font-medium font-geist hover:bg-neutral-100 transition" href="#contact">
<span data-i18n="close.cta">Start Your Transformation</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white ring-1 ring-white/15 px-6 py-3 text-base font-medium font-geist hover:bg-white/15 transition" href="/#solutions">
<span data-i18n="close.cta2">View Solutions</span>
<iconify-icon height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-400 font-geist">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b1">Studio-built systems</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b2">Automation + AI</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-300" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span data-i18n="close.b3">Production-ready</span>
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
          PSYCHO MAKER is a futuristic Digital Systems Studio building intelligent platforms, automation, and AI infrastructure for modern businesses.
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
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col1Title">Studio</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L1" href="#solutions">Solutions</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L2" href="#resources">Services</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L3" href="#showcase">Product</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col1L4" href="#restaurants">Restaurants</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col2Title">Capabilities</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L1" href="#resources">Digital Presence</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L2" href="#resources">Automation &amp; AI</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L3" href="#resources">Custom Platforms</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col2L4" href="#start">Start</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col3Title">Industries</h3>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L1" href="#solutions">Local Businesses</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L2" href="#solutions">Restaurants</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L3" href="#solutions">Startups</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition font-geist" data-i18n="footer.col3L4" href="#solutions">Modern Companies</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-2 lg:col-span-1">
<h3 className="text-sm font-medium text-white font-geist" data-i18n="footer.col4Title">Contact</h3>
<ul className="mt-4 space-y-3">
<li>
<a className="text-sm text-slate-400 hover:text-white transition font-geist inline-flex items-center gap-2" href="mailto:hello@psychomaker.studio">
<span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="14" icon="solar:letter-linear" width="14"></iconify-icon>
</span>
<span>hello@psychomaker.studio</span>
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
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkSolutions" href="#solutions">Solutions</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkServices" href="#resources">Services</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkProduct" href="#showcase">Product</a>
<span className="text-slate-700">•</span>
<a className="text-xs text-slate-500 hover:text-white transition font-geist" data-i18n="footer.linkStart" href="#start">Start</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
