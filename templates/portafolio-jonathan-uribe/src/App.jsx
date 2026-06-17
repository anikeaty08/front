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
      
<div className="min-h-screen flex flex-col">
<div className="flex-1 flex flex-col max-w-5xl mx-auto w-full lg:max-w-6xl px-4 sm:px-6 lg:px-10 py-6 sm:py-10 gap-10 sm:gap-14 lg:gap-20">

<header className="flex items-center justify-between gap-4">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">JU</span>
</div>
<div className="hidden sm:flex flex-col leading-snug">
<span className="text-sm font-medium tracking-tight text-neutral-100">Jonathan Uribe Mendoza</span>
<span className="text-sm text-neutral-400">Sr. Product Designer · Medellín, Colombia</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-neutral-50 transition-colors" href="#work">Trabajo</a>
<a className="hover:text-neutral-50 transition-colors" href="#about">Perfil</a>
<a className="hover:text-neutral-50 transition-colors" href="#contact">Contacto</a>
</nav>

<a className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/70 hover:bg-neutral-800/90 text-sm font-medium tracking-tight text-neutral-100 px-3.5 py-1.5 transition-colors" href="#contact">
<span>Abierto a oportunidades</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7H17V17"></path>
</svg>
</a>
</header>

<section className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

<div className="flex-1 flex flex-col gap-6">
<p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Portafolio · Jonathan Uribe Mendoza</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-50 leading-tight">
            Sr. Product Designer especializado en DesignOps, estrategia UX e IA aplicada al diseño digital.
          </h1>
<p className="text-base sm:text-lg text-neutral-300 max-w-xl">
            Diseñador de productos digitales con más de 8 años de experiencia en SaaS, fintech y eCommerce. Combino estrategia, investigación y diseño colaborativo para crear experiencias digitales escalables y centradas en el usuario. En los últimos años he integrado IA aplicada al diseño para optimizar procesos, documentación y validación dentro de equipos de producto multidisciplinarios.
          </p>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-2">
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">Rol</span>
<span className="text-base text-neutral-100">Sr. Product Designer · DesignOps</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">Ubicación</span>
<span className="text-base text-neutral-100">Medellín, Colombia · Remoto LATAM/Global</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">Experiencia</span>
<span className="text-base text-neutral-100">8+ años · SaaS, fintech, eCommerce</span>
</div>
</div>
</div>

<div className="w-full lg:max-w-sm">
<div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] overflow-hidden flex flex-col">
<div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative">
<div className="absolute inset-0 opacity-70">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.04),_transparent_60%)]"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300">Caso destacado</span>
<span className="text-xs text-neutral-400">2020–2024 · Siigo LATAM</span>
</div>
<div className="space-y-2">
<p className="text-sm text-neutral-300">
                    Co-creación y escalamiento del Design System LATAM y diseño de módulos clave de facturación, inventario y POS, integrando IA en flujos de documentación y DesignOps.
                  </p>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-50 text-neutral-950 text-xs font-medium tracking-tight px-3 py-1 hover:bg-neutral-200 transition-colors w-max">
                    Solicitar caso de estudio completo
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</button>
</div>
</div>
</div>
<div className="p-4 sm:p-5 border-t border-neutral-800 flex items-center justify-between gap-4">
<div className="flex flex-col">
<span className="text-sm text-neutral-200">Siigo LATAM · Ecosistema contable</span>
<span className="text-xs text-neutral-400">Sr. Product Design · DesignOps · UX Research</span>
</div>
<div className="flex items-center gap-2">

<svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.5A1.5 1.5 0 0 1 9.5 2H12v3H9.5A1.5 1.5 0 0 1 8 3.5Z"></path>
<path d="M12 2h2.5A1.5 1.5 0 0 1 16 3.5 1.5 1.5 0 0 1 14.5 5H12Z"></path>
<path d="M8 7.5A1.5 1.5 0 0 1 9.5 6H12v3H9.5A1.5 1.5 0 0 1 8 7.5Z"></path>
<path d="M8 11.5A1.5 1.5 0 0 1 9.5 10 1.5 1.5 0 0 1 11 11.5v2A1.5 1.5 0 0 1 9.5 15 1.5 1.5 0 0 1 8 13.5Z"></path>
<path d="M12 6h2.25A1.75 1.75 0 0 1 16 7.75 1.75 1.75 0 0 1 14.25 9.5H12Z"></path>
<path d="M12 10h2.5A1.5 1.5 0 0 1 16 11.5 1.5 1.5 0 0 1 14.5 13H12Z"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 sm:gap-8" id="work">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">Experiencia seleccionada</h2>
<p className="text-base text-neutral-300 mt-1 max-w-md">
              Proyectos en SaaS, fintech y plataformas digitales donde lideré o co-lideré diseño de producto, Design Systems y estrategias UX con soporte de IA aplicada.
            </p>
</div>
<a className="hidden sm:inline-flex text-sm text-neutral-300 hover:text-neutral-50 transition-colors" href="#contact">
            Solicitar portafolio detallado
          </a>
</div>
<div className="flex flex-col divide-y divide-neutral-900 rounded-3xl border border-neutral-900 bg-neutral-950/40 overflow-hidden">

<article className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6 lg:p-8">
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-3">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">2020–Actualidad · SaaS · LATAM</span>
<span className="inline-flex items-center rounded-full border border-neutral-800 px-2 py-0.5 text-[0.7rem] text-neutral-300">
                  Sr. Product Designer · Siigo LATAM
                </span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
                Siigo LATAM — Design System, POS y módulos de facturación para pymes
              </h3>
<p className="text-base text-neutral-300 max-w-lg">
                Parte del equipo central de diseño LATAM, co-creando y escalando el Design System para múltiples países, diseñando módulos de facturación, inventario y punto de venta (POS) y aplicando IA generativa en documentación y DesignOps para reducir tiempos de entrega y mejorar consistencia.
              </p>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="text-xs text-neutral-400">Design Systems</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">DesignOps &amp; métricas UX</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">IA aplicada al diseño</span>
</div>
</div>
<div className="w-full md:max-w-xs">
<div className="aspect-[4/3] rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden relative">
<div className="absolute inset-0 opacity-70">
<div className="h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(244,244,245,0.08),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(244,244,245,0.04),_transparent_60%)]"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-3 sm:p-4">
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-300">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
<span>Módulos Siigo POS &amp; facturación</span>
</div>
<div className="space-y-2">
<div className="flex gap-1.5">
<div className="h-1.5 flex-1 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-3/4 bg-neutral-100"></div>
</div>
</div>
<div className="flex gap-1.5">
<div className="h-1.5 flex-1 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-1/2 bg-emerald-400"></div>
</div>
<div className="h-1.5 flex-1 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-1/3 bg-neutral-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6 lg:p-8">
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-3">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">2022–2023 · eCommerce</span>
<span className="inline-flex items-center rounded-full border border-neutral-800 px-2 py-0.5 text-[0.7rem] text-neutral-300">
                  Product Designer Freelance · Holafly
                </span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
                Holafly — Customer Panel para compra y gestión de eSIMs
              </h3>
<p className="text-base text-neutral-300 max-w-lg">
                Foco en el Customer Panel (web y app), rediseñando journeys de compra, activación y soporte postventa de eSIMs. Conduje research y pruebas con usuarios internacionales, realicé benchmarking global y apliqué IA (ChatGPT + GA4) para definir hipótesis, contenido y A/B tests orientados a conversión.
              </p>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="text-xs text-neutral-400">UX Research &amp; testing</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">Journeys end-to-end</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">Optimización de conversión</span>
</div>
</div>
<div className="w-full md:max-w-xs">
<div className="aspect-[4/3] rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 overflow-hidden relative">
<div className="absolute inset-0 opacity-80">
<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(244,244,245,0.06),_transparent_55%),radial-gradient(circle_at_center,_rgba(244,244,245,0.05),_transparent_60%)]"></div>
</div>
<div className="relative h-full flex flex-col justify-between p-3 sm:p-4">
<div className="flex items-center justify-between text-[0.7rem] text-neutral-300">
<span>Panel de cliente eSIM</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</div>
<div className="flex items-center justify-between gap-2">
<div className="flex gap-1.5">
<div className="h-1.5 w-6 rounded-full bg-neutral-200"></div>
<div className="h-1.5 w-4 rounded-full bg-neutral-500"></div>
<div className="h-1.5 w-8 rounded-full bg-neutral-600"></div>
</div>
<div className="h-6 w-10 rounded-full bg-neutral-900 border border-neutral-700 flex items-center px-0.5">
<div className="h-5 w-5 rounded-full bg-emerald-300"></div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6 lg:p-8">
<div className="flex-1 flex flex-col gap-3">
<div className="flex items-center gap-3">
<span className="text-xs uppercase tracking-[0.15em] text-neutral-500">2017–2023 · Agencia, banca &amp; mentoría</span>
<span className="inline-flex items-center rounded-full border border-neutral-800 px-2 py-0.5 text-[0.7rem] text-neutral-300">
                  Huge · TODO1/Bancolombia/Davivienda · Acámica
                </span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
                Campañas data-driven, banca digital y mentoría UX/UI en LATAM
              </h3>
<p className="text-base text-neutral-300 max-w-lg">
                Trabajé en campañas digitales para marcas globales (FIAT, Jeep, Dodge, Alfa Romeo), en banca digital para Bancolombia y Davivienda (SVP, SVE y app de personas) y como mentor UX/UI para más de 100 estudiantes en Latinoamérica, con foco en Design Systems, prototipado y portafolios profesionales.
              </p>
<div className="flex flex-wrap items-center gap-2 mt-1">
<span className="text-xs text-neutral-400">Visual &amp; UI Design</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">Banca digital</span>
<span className="text-xs text-neutral-500">·</span>
<span className="text-xs text-neutral-400">Mentoría UX/UI</span>
</div>
</div>
<div className="w-full md:max-w-xs">
<div className="aspect-[4/3] rounded-2xl border border-neutral-900 bg-neutral-950 overflow-hidden relative flex items-center justify-center">
<span className="text-lg tracking-[0.35em] uppercase text-neutral-200">EXPERIENCIA</span>
</div>
</div>
</article>
</div>
</section>

<section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 items-start" id="about">
<div className="flex flex-col gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">Perfil profesional</h2>
<p className="text-base text-neutral-300">
            Soy Jonathan, Sr. Product Designer con base en Medellín, Colombia. Tengo más de 8 años de experiencia diseñando productos digitales para SaaS, fintech, eCommerce y plataformas B2B en América Latina y mercados internacionales.
          </p>
<p className="text-base text-neutral-300">
            Combino estrategia de producto, investigación con usuarios reales y diseño colaborativo para traducir problemas complejos en experiencias claras, escalables y alineadas con el negocio. Me siento cómodo trabajando con equipos multidisciplinarios (PMs, desarrollo, data, stakeholders) en entornos ágiles y distribuidos.
          </p>
<p className="text-base text-neutral-300">
            En los últimos años he integrado IA aplicada al diseño (ChatGPT, Notion AI, Lovable, entre otras) para mejorar documentación, prototipado y análisis UX basado en datos, impulsando prácticas de DesignOps y métricas UX dentro de los equipos.
          </p>
</div>
<div className="flex flex-col gap-4 rounded-3xl border border-neutral-900 bg-neutral-950/40 p-4 sm:p-5 lg:p-6">
<h3 className="text-sm font-medium tracking-tight text-neutral-100">Competencias clave</h3>
<div className="grid grid-cols-2 gap-3 text-sm text-neutral-300">
<ul className="space-y-1.5">
<li>Design Systems</li>
<li>UX Research</li>
<li>UI &amp; Visual Design</li>
<li>Product Thinking</li>
<li>Métricas UX</li>
</ul>
<ul className="space-y-1.5">
<li>DesignOps</li>
<li>Design Thinking &amp; Lean UX</li>
<li>Human-Centered Design</li>
<li>Continuous Discovery</li>
<li>Mentoría UX/UI</li>
</ul>
</div>
<div className="h-px bg-neutral-900 my-2"></div>
<h3 className="text-sm font-medium tracking-tight text-neutral-100">IA aplicada al diseño</h3>
<p className="text-sm text-neutral-300">
            Prototipado inteligente, documentación asistida por IA, análisis UX apoyado en datos y mejora de flujos de trabajo para equipos de producto en Siigo y Holafly.
          </p>
<div className="h-px bg-neutral-900 my-2"></div>
<h3 className="text-sm font-medium tracking-tight text-neutral-100">Herramientas</h3>
<div className="flex flex-wrap gap-2 text-xs text-neutral-300">
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Figma</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">FigJam</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Notion AI</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">ChatGPT</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Lovable.dev</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Webflow</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Miro</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">GA4</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Maze</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Hotjar</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Jira</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Zeplin</span>
<span className="rounded-full border border-neutral-800 px-2.5 py-1">Linear</span>
</div>
<div className="h-px bg-neutral-900 my-2"></div>
<h3 className="text-sm font-medium tracking-tight text-neutral-100">Educación &amp; certificaciones</h3>
<div className="text-xs text-neutral-300 space-y-1.5">
<p>Diseño Gráfico Profesional – [Universidad]</p>
<p>Carrera UX/UI Avanzada – Acámica / Coderhouse</p>
<p>DesignOps (Crehana) · Estrategia UX (Crehana) · UX Content Design (Coderhouse) · Métricas y KPIs UX (Crehana)</p>
</div>
</div>
</section>

<section className="mt-4" id="contact">
<div className="rounded-3xl border border-neutral-900 bg-neutral-950/70 p-4 sm:p-6 lg:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
<div className="space-y-2">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
              Hablemos sobre tu producto o equipo.
            </h2>
<p className="text-base text-neutral-300 max-w-md">
              Estoy abierto a roles full-time y colaboraciones freelance con equipos de producto en LATAM y otros mercados. Cuéntame del contexto, objetivos y plazos, y coordinamos el siguiente paso.
            </p>
<div className="text-xs text-neutral-400 space-y-1">
<p><span className="text-neutral-300">Email:</span> juribeux@gmail.com</p>
<p><span className="text-neutral-300">WhatsApp:</span> +57 300 763 3811</p>
<p><span className="text-neutral-300">Ubicación:</span> Medellín, Colombia</p>
</div>
</div>
<div className="flex flex-col gap-3 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-1.5 rounded-full bg-neutral-50 text-neutral-950 text-sm font-medium tracking-tight px-4 py-2 hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="mailto:juribeux@gmail.com">
<span>Escríbeme por correo</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4Z"></path>
<path d="m4 6 8 7 8-7"></path>
</svg>
</a>
<div className="flex flex-wrap gap-3 text-xs text-neutral-400">
<a className="hover:text-neutral-100 transition-colors" href="https://www.linkedin.com/in/juribeux/">LinkedIn</a>
<a className="hover:text-neutral-100 transition-colors" href="mailto:juribeux@gmail.com">Email</a>
<a className="hover:text-neutral-100 transition-colors" href="https://wa.me/573007633811">WhatsApp</a>
</div>
</div>
</div>
<footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-5 text-xs text-neutral-500">
<span>© 2025 Jonathan Uribe Mendoza · Sr. Product Designer</span>
<span>CV y portafolio detallado disponibles bajo solicitud (ES/EN).</span>
</footer>
</section>
</div>
</div>

    </>
  );
}
