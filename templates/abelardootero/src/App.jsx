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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md border-zinc-200 bg-white/80">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-sm flex items-center justify-center bg-zinc-900">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">PERFORMANCE.PRO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500">
<a className="transition-colors hover:text-zinc-900" href="#about">Perfil</a>
<a className="transition-colors hover:text-zinc-900" href="#services">Servicios</a>
<a className="transition-colors hover:text-zinc-900" href="#methodology">Metodología</a>
<a className="transition-colors hover:text-zinc-900" href="#contact">Contacto</a>
</div>
<a className="hidden md:block text-xs font-medium px-4 py-2 rounded transition-colors bg-zinc-900 text-white hover:bg-zinc-700" href="#contact">
                Contactar
            </a>
</div>
</nav>

<main className="md:pt-48 md:pb-32 z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 border-zinc-200 bg-zinc-50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600">Open for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1] text-zinc-900">
                Crecimiento digital basado <br className="hidden md:block"/>
                en <span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-500 from-zinc-900">datos y resultados.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl font-light mb-10 leading-relaxed text-zinc-500">
                Especialista en Performance &amp; Growth. Transformo inversión publicitaria en rentabilidad de negocio mediante Paid Media, Analítica Avanzada y estrategias de CRO. Actualmente impulsando resultados en <span className="font-medium border-b text-zinc-900 border-zinc-300">emood.es</span>.
            </p>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4">
<a className="px-6 py-3 rounded text-sm font-medium transition-all flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm" href="#contact">
                    Analicemos tu proyecto
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="px-6 py-3 rounded text-sm font-medium border transition-all text-zinc-600 hover:text-zinc-900 border-zinc-200 hover:bg-zinc-50" href="#services">
                    Ver especialidades
                </a>
</div>
</div>
</main>

<div className="border-y bg-zinc-50 border-zinc-200">
<div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-3xl font-medium mb-1 tracking-tight text-zinc-900">+3.5 ROAS</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Media en E-commerce</div>
</div>
<div>
<div className="text-3xl font-medium mb-1 tracking-tight text-zinc-900">Data-Driven</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Decisiones objetivas</div>
</div>
<div>
<div className="text-3xl font-medium mb-1 tracking-tight text-zinc-900">Full Stack</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Ads, Analytics &amp; CRO</div>
</div>
<div>
<div className="text-3xl font-medium mb-1 tracking-tight text-zinc-900">Consultoría</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Estrategia Negocio</div>
</div>
</div>
</div>

<section className="py-24 px-6 border-b border-zinc-200" id="about">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-2 text-zinc-900">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-height="20" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    Sobre mí
                </h2>
<div className="space-y-4 leading-relaxed text-sm md:text-base text-zinc-600">
<p>
                        Más allá de las herramientas, entiendo el negocio. Mi perfil combina la técnica operativa de las plataformas publicitarias con una visión estratégica orientada a la cuenta de resultados (P&amp;L).
                    </p>
<p>
                        Actualmente me desempeño como especialista en , una consultora digital donde gestiono proyectos a medida con un foco obsesivo en el performance. No busco métricas de vanidad; busco leads cualificados, ventas incrementales y optimización del Customer Lifetime Value.
                    </p>
<p>
                        Mi metodología se aleja de la intuición creativa para centrarse en lo empírico: testear, medir, aprender y escalar. Si los datos no respaldan una acción, la estrategia se corrige.
                    </p>
</div>
</div>
<div className="bg-white border border-zinc-200 shadow-sm p-6 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-[0.05]">
<svg aria-hidden="true" className="iconify iconify--lucide text-black" data-height="64" data-icon="lucide:bar-chart-2" data-width="64" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-zinc-900">Stack Tecnológico</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-600">Meta Ads Manager</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-yellow-600 iconify--lucide" data-icon="lucide:search" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<span className="text-sm text-zinc-600">Google Ads</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-orange-600 iconify--lucide" data-icon="lucide:bar-chart-4" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-8-4V9m5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-600">GA4 &amp; Looker</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify rounded-full p-0.5 iconify--lucide text-white bg-black" data-icon="lucide:video" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
<span className="text-sm text-zinc-600">TikTok Ads</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:shopping-cart" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
<span className="text-sm text-zinc-600">Shopify / CMS</span>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-purple-600 iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span className="text-sm text-zinc-600">Klaviyo / ActiveC</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-zinc-900">Qué hago</h2>
<p className="text-zinc-500 text-sm">Servicios orientados a maximizar el retorno de inversión.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="col-span-1 md:col-span-2 bg-white border border-zinc-200 shadow-sm p-8 rounded-xl transition-all group hover:border-zinc-300 hover:shadow-md">
<div className="w-10 h-10 rounded border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-zinc-50 border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-zinc-900">Paid Media &amp; Performance</h3>
<p className="text-sm leading-relaxed max-w-md text-zinc-500">
                        Gestión y optimización integral de campañas en Meta, Google y TikTok. Estructuración de cuentas, segmentación avanzada de audiencias y gestión de presupuestos para reducir el CAC y aumentar el ROAS.
                    </p>
</div>

<div className="col-span-1 bg-white border border-zinc-200 shadow-sm p-8 rounded-xl transition-all group hover:border-zinc-300 hover:shadow-md">
<div className="w-10 h-10 rounded border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-zinc-50 border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:pie-chart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-zinc-900">Analítica &amp; Reporting</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Auditoría de datos, implementación de GA4 y creación de dashboards en Looker Studio para visualización de KPIs reales.
                    </p>
</div>

<div className="col-span-1 bg-white border border-zinc-200 shadow-sm p-8 rounded-xl transition-all group hover:border-zinc-300 hover:shadow-md">
<div className="w-10 h-10 rounded border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-zinc-50 border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-zinc-900">E-commerce Growth</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Estrategias de pricing, gestión de descuentos y optimización del funnel de ventas completo.
                    </p>
</div>

<div className="col-span-1 bg-white border border-zinc-200 shadow-sm p-8 rounded-xl transition-all group hover:border-zinc-300 hover:shadow-md">
<div className="w-10 h-10 rounded border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-zinc-50 border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:mouse-pointer-click" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-zinc-900">CRO &amp; Optimización</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Análisis de comportamiento usuario y experimentos A/B para mejorar la tasa de conversión en landings y fichas de producto.
                    </p>
</div>

<div className="col-span-1 bg-white border border-zinc-200 shadow-sm p-8 rounded-xl transition-all group hover:border-zinc-300 hover:shadow-md">
<div className="w-10 h-10 rounded border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-zinc-50 border-zinc-200">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:send" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-zinc-900">Retention Marketing</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Email marketing automatizado como soporte al funnel para recuperación de carritos y fidelización (LTV).
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-zinc-200 bg-zinc-50" id="methodology">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2 text-zinc-900">Cómo trabajo</h2>
<p className="text-zinc-500 text-sm">Framework de trabajo iterativo y escalable.</p>
</div>
<div className="text-right hidden md:block">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-300" data-icon="lucide:git-commit-horizontal" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M3 12h6m6 0h6"></path></g></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r z-0 from-zinc-200 via-zinc-300 to-zinc-200"></div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 font-medium text-sm shadow-sm bg-white border-zinc-200 text-zinc-900">01</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">Auditoría &amp; Estrategia</h3>
<p className="text-sm text-zinc-600">Análisis profundo del estado actual, configuración técnica de tracking y definición de objetivos realistas alineados con negocio.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 font-medium text-sm shadow-sm bg-white border-zinc-200 text-zinc-900">02</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">Ejecución &amp; Test</h3>
<p className="text-sm text-zinc-600">Lanzamiento de campañas y experimentos bajo metodología Test &amp; Learn. Validación rápida de hipótesis creativas y de audiencia.</p>
</div>

<div className="relative z-10">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 font-medium text-sm shadow-sm bg-white border-zinc-200 text-zinc-900">03</div>
<h3 className="text-base font-medium mb-2 text-zinc-900">Análisis &amp; Escala</h3>
<p className="text-sm text-zinc-600">Interpretación de métricas, optimización de presupuesto hacia lo que funciona y escala vertical/horizontal de resultados.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900">Experiencia Relevante</h2>
<div className="space-y-4">
<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border rounded-lg hover:bg-zinc-50 transition-colors border-zinc-200">
<div className="mb-4 md:mb-0">
<div className="text-lg font-medium text-zinc-900">Digital Performance Specialist</div>
<div className="text-zinc-500 text-sm mt-1">emood.es • Consultora Digital</div>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<span>Actualidad</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-6 border rounded-lg hover:bg-zinc-50 transition-colors border-zinc-200">
<div className="mb-4 md:mb-0">
<div className="text-lg font-medium text-zinc-900">Gestión E-commerce &amp; Paid Media</div>
<div className="text-zinc-500 text-sm mt-1">Sector Retail / Moda</div>
</div>
<div className="text-sm text-zinc-500">
                        Escalado de inversión mensual +200% manteniendo ROAS
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200 bg-white" id="contact">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-block p-3 rounded-full mb-6 bg-zinc-50 border border-zinc-100">
<svg aria-hidden="true" className="iconify iconify--lucide text-zinc-900" data-icon="lucide:mail-plus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m17 9v6m-3-3h6"></path></g></svg>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">Hablemos de crecimiento</h2>
<p className="mb-10 leading-relaxed text-zinc-500">
                Abierto a colaboraciones estratégicas, consultoría puntual o proyectos ambiciosos.<br/>
                Si buscas resultados tangibles y comunicación transparente, contacta conmigo.
            </p>
<form className="text-left border p-6 md:p-8 rounded-xl max-w-md mx-auto bg-white border-zinc-200 shadow-sm">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wide">Tu Email</label>
<input className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all bg-zinc-50 border-zinc-200 text-zinc-900" placeholder="ejemplo@empresa.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wide">Mensaje</label>
<textarea className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all bg-zinc-50 border-zinc-200 text-zinc-900" placeholder="Cuéntame brevemente sobre tu proyecto o necesidad..." rows="4"></textarea>
</div>
<button className="w-full font-medium text-sm py-3 rounded transition-colors flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-zinc-700" type="button">
                        Enviar mensaje
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
<div className="mt-12 flex justify-center gap-6">
<a className="text-zinc-400 transition-colors hover:text-zinc-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-zinc-400 transition-colors hover:text-zinc-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<footer className="py-8 border-t text-center px-6 border-zinc-200">
<p className="text-xs text-zinc-500">
            © 2023 Digital Performance. All rights reserved. <br className="md:hidden"/>Based in Spain.
        </p>
</footer>

    </>
  );
}
