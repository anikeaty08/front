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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
        var y = document.getElementById('y'); if (y) y.textContent = new Date().getFullYear();

        // Mobile nav toggle
        const btn = document.getElementById('navToggle');
        const panel = document.getElementById('mobileNav');
        if (btn && panel) {
          btn.addEventListener('click', () => {
            const isOpen = !panel.classList.contains('hidden');
            panel.classList.toggle('hidden');
            btn.setAttribute('aria-expanded', String(!isOpen));
            btn.innerHTML = isOpen
              ? '<i data-lucide="menu" class="w-5 h-5"></i>'
              : '<i data-lucide="x" class="w-5 h-5"></i>';
            if (window.lucide) { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
          });
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !panel.classList.contains('hidden')) {
              panel.classList.add('hidden');
              btn.setAttribute('aria-expanded', 'false');
              btn.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
              if (window.lucide) { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
            }
          });
        }
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
      

<header className="relative z-30 bg-[#0A1E4A]">
<div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">

<a aria-label="Laurea Consulting Group" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors" href="/">
<div className="h-9 w-9 rounded-md bg-[#0A1E4A] text-[#C3A469] grid place-items-center ring-1 ring-white/10 shadow-sm">
<span className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>LCG</span>
</div>
<div className="hidden sm:block">
<span className="text-sm font-medium tracking-tight" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Laurea Consulting Group</span>
</div>
</a>

<nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="/">
<i className="w-4 h-4" data-lucide="home"></i>
            Inicio
          </a>

<div className="relative group">
<a className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="/services">
<i className="w-4 h-4" data-lucide="layers"></i>
              Servicios
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<div className="absolute left-0 top-full mt-3 w-[640px] rounded-lg border border-white/10 bg-[#0A1E4A]/95 backdrop-blur shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div>
<div className="text-xs uppercase tracking-wide text-white/60 mb-2" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Impuestos</div>
<div className="rounded-md border border-white/10 divide-y divide-white/10">
<div className="p-3">
<div className="text-[13px] font-medium text-white/90 mb-2" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Impuestos en EE. UU.</div>
<ul className="space-y-1">
<li>
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/business-income-tax">
                            Impuesto sobre la renta empresarial
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/individual-income-tax">
                            Impuesto sobre la renta individual
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/estate-trust-gifts">
                            Sucesiones, fideicomisos y donaciones
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/voluntary-disclosure">
                            Programa de divulgación voluntaria
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</li>
<li>
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/tax-consulting">
                            Consultoría fiscal
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</li>
</ul>
</div>
<div className="p-3">
<a className="flex items-center justify-between rounded px-2 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/international">
                        Impuestos internacionales
                        <i className="w-4 h-4" data-lucide="globe"></i>
</a>
</div>
</div>
</div>

<div>
<div className="text-xs uppercase tracking-wide text-white/60 mb-2" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Contabilidad</div>
<div className="rounded-md border border-white/10">
<a className="flex items-center justify-between rounded px-3 py-3 text-white/90 hover:text-white hover:bg-white/5" href="/services/accounting">
                      Visión general de contabilidad
                      <i className="w-4 h-4" data-lucide="calculator"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-3 text-[12px] text-white/60" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                Índice de servicios:
                <a className="underline decoration-white/30 hover:text-white" href="/services">/services</a>
</div>
</div>
</div>

<div className="relative group">
<a className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="/insights">
<i className="w-4 h-4" data-lucide="book-open"></i>
              Perspectivas
              <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
<div className="absolute left-0 top-full mt-3 w-[360px] rounded-lg border border-white/10 bg-[#0A1E4A]/95 backdrop-blur shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
<ul className="p-3">
<li>
<a className="flex items-center justify-between rounded px-3 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/insights">
                    Listado
                    <span className="text-[11px] text-white/60">/insights</span>
</a>
</li>
<li>
<a className="flex items-center justify-between rounded px-3 py-2 text-white/90 hover:text-white hover:bg-white/5" href="/insights/example-post">
                    Artículo
                    <span className="text-[11px] text-white/60">/insights/{slug}</span>
</a>
</li>
</ul>
</div>
</div>
<a className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="/about">
<i className="w-4 h-4" data-lucide="building-2"></i>
            Sobre Laurea
          </a>
<a className="text-white/90 hover:text-white transition-colors inline-flex items-center gap-2" href="/make-a-payment" title="Redirección (302) a portal externo o iFrame">
<i className="w-4 h-4" data-lucide="credit-card"></i>
            Realizar un Pago
            <i className="w-3.5 h-3.5 opacity-80" data-lucide="external-link"></i>
</a>
</nav>

<button aria-controls="mobileNav" aria-expanded="false" className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-white/90 hover:text-white ring-1 ring-white/10 hover:ring-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50" id="navToggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-gradient-to-b from-[#0A1E4A] via-[#0F3D68] to-[#117ACA]" id="mobileNav">
<div className="mx-auto max-w-7xl px-6 py-4 text-sm" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<a className="flex items-center gap-2 px-2 py-2 rounded text-white/90 hover:text-white hover:bg-white/5" href="/">
<i className="w-4 h-4" data-lucide="home"></i>
            Inicio
          </a>
<details className="group mt-1">
<summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 rounded text-white/90 hover:text-white hover:bg-white/5">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layers"></i>
                Servicios
              </span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="pl-4 mt-1 space-y-1">
<div className="text-[12px] uppercase tracking-wide text-white/60 mt-1 mb-1">Impuestos</div>
<div className="pl-2">
<div className="text-[12px] text-white/70 mb-1">Impuestos en EE. UU.</div>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/business-income-tax">Impuesto sobre la renta empresarial</a>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/individual-income-tax">Impuesto sobre la renta individual</a>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/estate-trust-gifts">Sucesiones, fideicomisos y donaciones</a>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/voluntary-disclosure">Programa de divulgación voluntaria</a>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/us/tax-consulting">Consultoría fiscal</a>
</div>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/taxes/international">Impuestos internacionales</a>
<div className="text-[12px] uppercase tracking-wide text-white/60 mt-3 mb-1">Contabilidad</div>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/services/accounting">Visión general de contabilidad</a>
<div className="mt-3 border-t border-white/10 pt-2">
<a className="inline-flex items-center gap-2 text-[12px] text-white/70 hover:text-white" href="/services">
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
                  /services
                </a>
</div>
</div>
</details>
<details className="group mt-1">
<summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 rounded text-white/90 hover:text-white hover:bg-white/5">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="book-open"></i>
                Perspectivas
              </span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="pl-4 mt-1 space-y-1">
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/insights">Listado</a>
<a className="block px-2 py-1 rounded text-white/90 hover:text-white hover:bg-white/5" href="/insights/example-post">Artículo (slug)</a>
</div>
</details>
<a className="mt-1 flex items-center gap-2 px-2 py-2 rounded text-white/90 hover:text-white hover:bg-white/5" href="/about">
<i className="w-4 h-4" data-lucide="building-2"></i>
            Sobre Laurea
          </a>
<a className="mt-1 flex items-center gap-2 px-2 py-2 rounded text-white/90 hover:text-white hover:bg-white/5" href="/make-a-payment" title="Redirección (302) a portal externo o iFrame">
<i className="w-4 h-4" data-lucide="credit-card"></i>
            Realizar un Pago
            <i className="w-3.5 h-3.5 opacity-80" data-lucide="external-link"></i>
</a>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="sobre">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-[#0A1E4A] via-[#0F3D68] to-[#117ACA]"></div>
<div className="absolute -right-24 -top-24 h-[40rem] w-[40rem] opacity-30 blur-3xl" style={{background: 'radial-gradient(65% 65% at 50% 50%, #C3A469 0%, rgba(195,164,105,0.25) 45%, rgba(195,164,105,0.08) 70%, transparent 100%)'}}></div>
<svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-30" fill="none" viewbox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="dotgrid" patternunits="userSpaceOnUse" width="24" x="0" y="0">
<circle cx="1" cy="1" fill="white" opacity="0.08" r="1"></circle>
</pattern>
</defs>
<rect fill="url(#dotgrid)" height="800" width="1440"></rect>
<g stroke="white" stroke-opacity="0.12" strokeWidth="1">
<path d="M120 120 C 280 60, 420 160, 600 120 S 920 160, 1120 120"></path>
<path d="M80 320 C 260 280, 440 380, 620 340 S 980 380, 1280 340"></path>
<path d="M140 540 C 380 500, 520 600, 760 560 S 1080 600, 1320 560"></path>
<path d="M300 200 L 460 300 L 640 220 L 820 320 L 980 240 L 1160 340"></path>
</g>
<g fill="white" fillOpacity="0.2">
<circle cx="300" cy="200" r="3"></circle><circle cx="460" cy="300" r="3"></circle><circle cx="640" cy="220" r="3"></circle>
<circle cx="820" cy="320" r="3"></circle><circle cx="980" cy="240" r="3"></circle><circle cx="1160" cy="340" r="3"></circle>
</g>
</svg>
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/10 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
<div className="grid md:grid-cols-2 items-center gap-10">
<div className="max-w-3xl">
<h1 className="text-white tracking-tight text-4xl sm:text-5xl leading-tight font-semibold" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
              Sobre Laurea
            </h1>
<p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
              Nuestro nombre —Laurea— evoca las coronas de laurel de la antigua Grecia y Roma, símbolos de logro, honor y distinción, que reflejan nuestro compromiso de ayudar a los clientes a triunfar en un escenario global.
            </p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-md bg-[#C3A469] px-5 py-3 text-sm font-medium text-[#0A1E4A] shadow-sm ring-1 ring-black/5 hover:bg-[#B79355] hover:shadow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50" href="#C1-sobre">
                Conózcanos
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="hidden md:block">
<div className="relative">
<div className="absolute -inset-8 -z-10 opacity-30 blur-2xl" style={{background: 'radial-gradient(60% 60% at 60% 40%, rgba(195,164,105,0.45) 0%, rgba(195,164,105,0.12) 45%, transparent 70%)'}}></div>
<div className="absolute top-8 left-8 -z-10 h:[280px] w-[82%] -rotate-3 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
<div className="relative rounded-2xl p-[1px] bg-gradient-to-tr from-white/25 via-white/10 to-transparent">
<div className="relative rounded-[14px] overflow-hidden ring-1 ring-white/15 shadow-2xl">
<img alt="Equipo asesor analizando estrategia financiera" className="h-[340px] w-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-3 py-1.5 border border-[#E6E8EE] shadow-sm">
<i className="w-4 h-4 text-[#0A1E4A]" data-lucide="laurel-wreath"></i>
<span className="text-[12px] font-medium text-[#0A1E4A]" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Excelencia</span>
</div>
<div className="absolute top-3 right-3 rounded-md bg-[#0A1E4A]/90 backdrop-blur px-2.5 py-1.5 border border-white/10 shadow-sm">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-[#C3A469]" data-lucide="star"></i>
<span className="text-[12px] font-medium text-white" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Confianza</span>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-4 rounded-lg bg-white/95 backdrop-blur border border-[#E6E8EE] shadow-md px-4 py-3 flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-5 h-5 text-[#C3A469]" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-sm font-medium text-[#0A1E4A]" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Rigor y cumplimiento</div>
<div className="text-[12px] text-[#0F3D68]/70" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>Enfoque centrado en el cliente</div>
</div>
</div>
</div>
</div>

</div>
</div>
<div className="relative border-t border-white/10"></div>
</section>

<section className="relative" id="C1-sobre">
<div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
            C1: Sobre Laurea
          </h2>
</div>
</div>
<div className="w-full bg-[#F3F3F3]">
<div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<article className="group relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm hover:shadow-md transition-shadow" id="sobre-esencia">
<div className="p-6 md:p-8">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-5 h-5 text-[#C3A469]" data-lucide="award"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                      Nuestra esencia
                    </h3>
</div>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Nuestro nombre —Laurea— evoca las coronas de laurel de la antigua Grecia y Roma, símbolos de logro, honor y distinción, que reflejan nuestro compromiso de ayudar a los clientes a triunfar en un escenario global. Esta dedicación se encarna en nuestra gente: su profundo conocimiento, décadas de experiencia y atención personalizada garantizan que cada cliente reciba soluciones adaptadas que fomenten lealtad y relaciones a largo plazo.
                </p>
<div className="mt-6 border-t border-[#E6E8EE] pt-4">
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#0F3D68]/70" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="feather"></i>
<span>Atención personalizada</span>
</li>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Excelencia y distinción</span>
</li>
</ul>
</div>
</div>
<div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-20" style={{background: 'radial-gradient(40% 40% at 50% 50%, #C3A469 0%, transparent 70%)'}}></div>
</article>

<article className="group relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm hover:shadow-md transition-shadow" id="sobre-alcance">
<div className="p-6 md:p-8">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-5 h-5 text-[#C3A469]" data-lucide="globe"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                      Alcance y experiencia internacional
                    </h3>
</div>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Sobre esta base de excelencia, Laurea ofrece servicios confiables de impuestos, contabilidad y planificación estratégica para clientes en Estados Unidos, América Latina, Europa y Canadá. Con amplia experiencia en asuntos internacionales, ayudamos a empresas e individuos a navegar la complejidad tributaria global, proteger su patrimonio y alcanzar un crecimiento sostenible. Nuestro enfoque centrado en el cliente, experiencia técnica y atención personalizada nos convierten en un socio en quien confiar año tras año.
                </p>
<div className="mt-6 border-t border-[#E6E8EE] pt-4">
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#0F3D68]/70" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map"></i>
<span>EE. UU., LATAM, Europa y Canadá</span>
</li>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Protección de patrimonio y cumplimiento</span>
</li>
</ul>
</div>
</div>
<div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-20" style={{background: 'radial-gradient(40% 40% at 50% 50%, #C3A469 0%, transparent 70%)'}}></div>
</article>

<article className="group relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm hover:shadow-md transition-shadow" id="sobre-alianzas">
<div className="p-6 md:p-8">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-5 h-5 text-[#C3A469]" data-lucide="link-2"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                      Alianzas estratégicas
                    </h3>
</div>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Hemos tejido alianzas estratégicas con firmas tanto pequeñas como grandes en Estados Unidos y a nivel internacional, garantizando que, cuando un cliente requiera soluciones en el extranjero o experiencia altamente especializada, contemos con los recursos para entregarlas. Multilingüe y culturalmente competente, nuestro equipo está preparado para atender a clientes en múltiples jurisdicciones con confianza, precisión y asesoría personalizada.
                </p>
<div className="mt-6 border-t border-[#E6E8EE] pt-4">
<ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#0F3D68]/70" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Red global de aliados</span>
</li>
<li className="inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="languages"></i>
<span>Equipo multilingüe y culturalmente competente</span>
</li>
</ul>
</div>
</div>
<div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 opacity-20" style={{background: 'radial-gradient(40% 40% at 50% 50%, #C3A469 0%, transparent 70%)'}}></div>
</article>
</div>
</div>
</div>
</section>

<section className="relative" id="international-tax">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="grid lg:grid-cols-3 gap-6 md:gap-8">

<div className="lg:col-span-2 space-y-6 md:space-y-8">

<article className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm">
<div className="p-6 md:p-8">
<div className="inline-flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-5 h-5 text-[#C3A469]" data-lucide="globe-2"></i>
</div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Impuestos internacionales: Introducción
                  </h2>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  {Nombre del Cliente} ofrece consultoría y planificación fiscal para individuos y empresas con lazos internacionales, especializándose en clientes de Latinoamérica, Europa y Canadá. Atienden a individuos de alto patrimonio, ciudadanos duales, extranjeros no residentes y entidades extranjeras (corporaciones, partnerships, trusts), combinando perspicacia cultural con experiencia técnica.
                </p>
</div>
</article>

<article className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm">
<div className="p-6 md:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Servicios principales
                  </h3>
</div>
<ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Cross-Border U.S. Tax Compliance
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Departure &amp; Pre-Move Planning
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Dual-Residency &amp; Expatriation Tax Advisory
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Estate &amp; Gift Tax Planning
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    FIRPTA &amp; U.S. Real Estate Structuring
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    IRS Voluntary Disclosure &amp; Amnesty Programs
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Tax Treaty Analysis &amp; International Credits
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    ITIN &amp; U.S. Tax ID Services
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    Forms W-8BEN &amp; W-8ECI Preparation
                  </li>
<li className="inline-flex items-center gap-2">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="check-circle"></i>
                    U.S. Business Structuring &amp; Advisory
                  </li>
</ul>
<div className="mt-6 border-t border-[#E6E8EE] pt-4">
<div className="text-xs text-[#0F3D68]/70">
                    Anclas por región:
                    <a className="ml-2 underline hover:text-[#117ACA]" href="#latin-america">#latin-america</a>
<span className="mx-2 text-[#E6E8EE]">|</span>
<a className="underline hover:text-[#117ACA]" href="#europe">#europe</a>
<span className="mx-2 text-[#E6E8EE]">|</span>
<a className="underline hover:text-[#117ACA]" href="#canada">#canada</a>
</div>
</div>
</div>
</article>

<article className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm" id="latin-america">
<div className="p-6 md:p-8">
<div className="inline-flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-4.5 h-4.5 text-[#C3A469]" data-lucide="flag"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Latinoamérica
                  </h3>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Breve descripción y contexto para clientes latinoamericanos.
                </p>
</div>
</article>

<article className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm" id="europe">
<div className="p-6 md:p-8">
<div className="inline-flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-4.5 h-4.5 text-[#C3A469]" data-lucide="landmark"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Europa
                  </h3>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Párrafo específico para clientes con intereses en Europa.
                </p>
</div>
</article>

<article className="relative rounded-xl bg-white/90 backdrop-blur-sm border border-[#E6E8EE] shadow-sm" id="canada">
<div className="p-6 md:p-8">
<div className="inline-flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#0A1E4A] grid place-items-center ring-1 ring-black/5">
<i className="w-4.5 h-4.5 text-[#C3A469]" data-lucide="mountain-snow"></i>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Canadá
                  </h3>
</div>
<p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F3D68]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                  Sección dedicada a clientes en Canadá.
                </p>
</div>
</article>
</div>

<aside className="lg:col-span-1">
<div className="lg:sticky lg:top-6">
<form action="#" className="rounded-xl bg-white/95 backdrop-blur border border-[#E6E8EE] shadow-sm p-6 md:p-7" method="post">
<div className="flex items-center justify-between">
<h4 className="text-lg sm:text-xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Consulta internacional
                  </h4>
<i className="w-5 h-5 text-[#117ACA] opacity-80" data-lucide="mail"></i>
</div>
<div className="mt-5 space-y-4" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
<div>
<label className="block text-[13px] text-[#0F3D68]/80 mb-1.5" htmlFor="full_name">Nombre completo</label>
<input className="w-full rounded-md border border-[#E6E8EE] bg-white px-3 py-2.5 text-sm text-[#0A1E4A] placeholder-[#0F3D68]/40 focus:outline-none focus:ring-2 focus:ring-[#117ACA]/30 focus:border-[#117ACA]" id="full_name" name="full_name" placeholder="Nombre y apellido" required="" type="text"/>
</div>
<div>
<label className="block text-[13px] text-[#0F3D68]/80 mb-1.5" htmlFor="email">Correo electrónico</label>
<input className="w-full rounded-md border border-[#E6E8EE] bg-white px-3 py-2.5 text-sm text-[#0A1E4A] placeholder-[#0F3D68]/40 focus:outline-none focus:ring-2 focus:ring-[#117ACA]/30 focus:border-[#117ACA]" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-[13px] text-[#0F3D68]/80 mb-1.5" htmlFor="interest">Interés/Servicio</label>
<div className="flex items-center gap-2 rounded-md border border-[#E6E8EE] bg-white px-3 py-2.5">
<i className="w-4.5 h-4.5 text-[#117ACA]" data-lucide="layers"></i>
<input className="w-full bg-transparent text-sm text-[#0A1E4A] focus:outline-none" id="interest" name="interest_display" readonly="" type="text" value="International Tax"/>
</div>
<input name="interest" type="hidden" value="International Tax"/>
</div>
<div>
<label className="block text-[13px] text-[#0F3D68]/80 mb-1.5" htmlFor="message">Mensaje</label>
<textarea className="w-full rounded-md border border-[#E6E8EE] bg-white px-3 py-2.5 text-sm text-[#0A1E4A] placeholder-[#0F3D68]/40 focus:outline-none focus:ring-2 focus:ring-[#117ACA]/30 focus:border-[#117ACA]" id="message" name="message" placeholder="Cuéntenos brevemente su situación..." rows="4"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-[11px] text-[#0F3D68]/60" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                    Respondemos en 1–2 días hábiles.
                  </p>
<button className="inline-flex items-center gap-2 rounded-md bg-[#0A1E4A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-black/5 hover:bg-[#0F3D68] transition-colors" type="submit">
                    Enviar
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</div>
</aside>
</div>
</div>
</section>

<section className="relative" id="contacto">
<div className="mx-auto max-w-7xl px-6">
<div className="my-14 overflow-hidden rounded-xl border border-[#E6E8EE]" id="get-in-touch">
<div className="relative isolate">
<div className="absolute inset-0 bg-[#C3A469]"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(10,30,74,0.15) 0 20%, transparent 20% 100%), radial-gradient(circle at 80% 70%, rgba(10,30,74,0.12) 0 25%, transparent 25% 100%)'}}></div>
<div className="relative px-6 py-10 md:px-10 md:py-12">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="max-w-2xl">
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold text-[#0A1E4A]" style={{fontFamily: '\'Merriweather\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                    Trabajemos juntos
                  </h3>
<p className="mt-2 text-sm sm:text-base text-[#0A1E4A]/90" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
                    ¿Tiene una consulta o necesita una propuesta? Nuestro equipo responderá a la brevedad.
                  </p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-[#0A1E4A] px-5 py-3 text-sm font-medium text-white ring-1 ring-black/5 hover:bg-[#0F3D68] hover:shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50" href="#get-in-touch">
                    Contáctenos
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/90 px-4 py-2.5 text-sm font-medium text-[#0A1E4A] ring-1 ring-[#0A1E4A]/15 hover:bg-white hover:ring-[#0A1E4A]/25 transition-colors" href="/make-a-payment">
<i className="w-4 h-4" data-lucide="credit-card"></i>
                    Realizar un Pago
                    <span className="ml-1 inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium text-[#0A1E4A] bg-[#0A1E4A]/10 ring-1 ring-[#0A1E4A]/15">TBD</span>
<i className="w-3.5 h-3.5 opacity-80" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#E6E8EE]">
<div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#0F3D68]/70" style={{fontFamily: '\'Inter\', ui-sans-serif, system-ui'}}>
          © <span id="y"></span> Laurea Consulting Group. Todos los derechos reservados.
        </p>
<div className="flex items-center gap-6 text-xs">
<a className="text-[#0F3D68]/80 hover:text-[#117ACA]" href="/">Inicio</a>
<a className="text-[#0F3D68]/80 hover:text-[#117ACA]" href="/services">Servicios</a>
<a className="text-[#0F3D68]/80 hover:text-[#117ACA]" href="/insights">Perspectivas</a>
<a className="text-[#0F3D68]/80 hover:text-[#117ACA]" href="/about">Sobre Laurea</a>
<a className="text-[#0F3D68]/80 hover:text-[#117ACA]" href="/make-a-payment">Realizar un Pago</a>
<span className="inline-block h-4 w-px bg-[#E6E8EE]/80"></span>
<a className="inline-flex items-center gap-1.5 text-[#0F3D68]/80 hover:text-[#117ACA]" href="#get-in-touch">
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
            Contáctenos
          </a>
</div>
</div>
</footer>




    </>
  );
}
