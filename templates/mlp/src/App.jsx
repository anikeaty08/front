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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
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
      

<div className="fixed inset-0 w-full h-screen -z-50 pointer-events-none overflow-hidden bg-[#0B0D11]">

<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0D11]/50 to-[#0B0D11]"></div>
</div>
<main className="relative z-10 w-full">

<header className="w-full max-w-6xl px-6 mx-auto pt-12 pb-10 flex items-center justify-between animate-in">
<div className="flex items-center gap-4">
<img alt="MPL Logo" className="h-10 w-auto rounded-sm object-contain opacity-90 hover:opacity-100 transition-opacity" height="40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0eea73af-8ce8-46b1-bb82-e70f5ed0d701_320w.png" width="120"/>
</div>
</header>

<section className="animate-in delay-100 w-full max-w-6xl mx-auto pt-12 px-6 relative mb-24">
<div className="flex flex-col text-left max-w-5xl items-start relative z-20">
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-semibold text-white leading-[1.05] mb-8 tracking-tighter">
                    Evaluación técnica y financiera de proyectos sostenibles, con <span className="text-emerald-500/90">rigor</span> y <span className="text-emerald-500/90">trazabilidad</span>.
                </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-300 max-w-3xl mb-12">
                    Apoyamos a entidades financiadoras a priorizar proyectos con criterios comparables, evidencia y trazabilidad. Entregamos ranking, justificación por criterio y recomendaciones por propuesta.
                </p>
</div>

<div className="mt-4 w-full animate-in delay-200 relative z-20">
<div className="relative w-full h-64 md:h-96 overflow-hidden rounded-sm border border-white/10 group bg-[#0B0D11]">
<img alt="Evaluación de datos" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 ease-out" height="600" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8041b0ac-ef0f-487f-bf1c-d95a6a8efba9_3840w.png" width="1200"/>
<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0D11] to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="w-full max-w-6xl border-white/5 border-t mx-auto pt-24 px-6 pb-20 relative z-20">
<div className="flex flex-col md:flex-row gap-16 items-start">

<div className="md:w-1/3 relative md:sticky md:top-24">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">Qué hacemos</h2>
<p className="text-slate-400 text-base leading-relaxed mb-8 font-light">
                        Convertimos documentos extensos en resultados comparables. Diseñamos metodologías que garantizan imparcialidad y facilitan la toma de decisiones.
                    </p>
<div className="w-full h-48 rounded-sm overflow-hidden border border-white/10 relative mt-6 grayscale hover:grayscale-0 transition-all duration-500 group">
<img alt="Ambiente corporativo" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc5a567d-3482-4e62-95bd-161a22775b52_800w.png?w=800&amp;q=80"/>
</div>
</div>

<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 pt-2">
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="pen-tool"></i>
<h3 className="text-lg text-white font-medium">Metodología y Herramientas</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Diseño de matrices de criterios y formularios de evaluación a medida del financiador.
                        </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="clipboard-check"></i>
<h3 className="text-lg text-white font-medium">Evaluación Técnica</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Análisis de teoría de cambio, marco lógico, indicadores y pertinencia territorial.
                        </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="bar-chart-3"></i>
<h3 className="text-lg text-white font-medium">Evaluación Financiera</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Revisión de consistencia presupuestaria, análisis de costos unitarios y riesgos.
                        </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="building-2"></i>
<h3 className="text-lg text-white font-medium">Capacidad Institucional</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Gobernanza, estructura de socios y sostenibilidad de las organizaciones postulantes.
                        </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="list-start"></i>
<h3 className="text-lg text-white font-medium">Sistematización</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Ranking consolidado, fortalezas y debilidades comparadas para el comité.
                        </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-emerald-500 w-5 h-5" data-lucide="file-text"></i>
<h3 className="text-lg text-white font-medium">Reporte de Decisión</h3>
</div>
<p className="text-sm text-slate-400 leading-relaxed pl-8 border-l border-white/10 group-hover:border-emerald-500/50 transition-colors">
                            Informe narrativo y recomendaciones específicas orientadas al fortalecimiento.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl z-20 border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="">
<h2 className="flex items-center gap-2 text-3xl font-semibold text-white tracking-tighter mb-8">Qué reciben nuestros clientes</h2>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Matriz de criterios y ponderaciones acordadas.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="">Formularios por propuesta, evidencia, observaciones clave.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Ranking consolidado y análisis de riesgos.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Recomendaciones por propuesta, fortalezas, brechas, mejoras.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Informe ejecutivo listo para decisión.</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light leading-relaxed">
<i className="text-emerald-500 w-4 h-4 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Presentación breve para comité, preguntas, respuestas.</span>
</li>
</ul>
</div>

<div className="">
<h2 className="text-3xl font-semibold text-white mb-8 tracking-tighter">
                        Cómo trabajamos
                    </h2>
<div className="space-y-6">
<div className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 text-emerald-500 flex items-center justify-center text-xs font-medium bg-emerald-500/5 font-geist">1</span>
<p className="text-sm text-slate-400 font-light leading-relaxed pt-0.5">
                                Alineación de criterios, alcance, tiempos, confidencialidad.
                            </p>
</div>
<div className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 text-emerald-500 flex items-center justify-center text-xs font-medium bg-emerald-500/5 font-geist">2</span>
<p className="text-sm text-slate-400 font-light leading-relaxed pt-0.5">
                                Evaluación estandarizada, revisión cruzada, control de calidad.
                            </p>
</div>
<div className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 text-emerald-500 flex items-center justify-center text-xs font-medium bg-emerald-500/5 font-geist">3</span>
<p className="text-sm text-slate-400 font-light leading-relaxed pt-0.5">
                                Consolidación, ranking, informe, soporte a la decisión.
                            </p>
</div>
</div>
</div>

<div className="">
<h2 className="text-3xl font-semibold text-white mb-8 tracking-tighter">
                        Para quién trabajamos
                    </h2>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-5">
                        Colaboramos con instituciones que priorizan la técnica y la transparencia en la asignación de sus recursos.
                    </p>
<ul className="space-y-2 border-l border-white/10 pl-4">
<li className="text-sm text-slate-400 font-light">Entidades financiadoras y fondos concursables.</li>
<li className="text-sm text-slate-400 font-light">Secretarías técnicas y comités evaluadores.</li>
<li className="text-sm text-slate-400 font-light">Programas de cooperación y proyectos territoriales.</li>
<li className="text-sm text-slate-400 font-light">Gobiernos locales y consorcios multi actor.</li>
<li className="text-sm text-slate-400 font-light">Organizaciones que administran convocatorias.</li>
</ul>
</div>
</div>
</section>

<section className="w-full bg-[#0E1015] border-y border-white/5 relative z-20 py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">Equipo Consultor</h2>
<p className="text-slate-400 text-base font-light">
                        Un equipo multidisciplinario senior que garantiza una visión holística en cada evaluación.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">

<div className="group flex gap-6 items-start">
<div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#13161C] border border-white/10">
<img alt="Paulina" className="w-full h-full object-cover img-reveal" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15e5407f-9767-48ee-91be-9d689806bcae_800w.jpg"/>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-medium text-white">Paulina Lagla</h3>
<span className="text-[11px] text-emerald-500 uppercase tracking-widest mb-3 font-medium">Gerente General &amp; Financiera</span>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                Consultora senior en gestión, planificación y administración de proyectos complejos, con amplia experiencia en optimización de procesos, análisis financiero y toma de decisiones estratégicas. Ha liderado proyectos para instituciones públicas y privadas, incluyendo sistemas nacionales, cadenas de suministro, logística, inteligencia de datos y transformación digital. Su enfoque combina control financiero, eficiencia operativa y liderazgo de equipos multidisciplinarios, aportando solidez técnica y sostenibilidad a los servicios de consultoría.

                            </p>
</div>
</div>

<div className="group flex gap-6 items-start">
<div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#13161C] border border-white/10">
<img alt="Santiago" className="w-full h-full object-cover img-reveal" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/513ff19b-d1dd-491d-bc23-6eb705125808_800w.jpg"/>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-medium text-white">Santiago Santillán</h3>
<span className="text-[11px] text-emerald-500 uppercase tracking-widest mb-3 font-medium">Gerente Técnico</span>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                Máster en Cooperación Internacional, con experiencia en economía y gestión de proyectos. Se especializa en el diseño, monitoreo y evaluación de iniciativas de desarrollo, asegurando consistencia técnica y alineación con requerimientos de financiadores. Aporta en la formulación y revisión de propuestas, marcos lógicos, teoría de cambio e indicadores, con énfasis en impacto ambiental y social. Su trabajo se enfoca en mejorar la calidad técnica de los proyectos, su viabilidad y la coherencia entre objetivos, actividades, resultados y presupuesto.
                            </p>
</div>
</div>

<div className="group flex gap-6 items-start">
<div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#13161C] border border-white/10">
<img alt="Juan Diego" className="w-full h-full object-cover img-reveal" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98679e05-1a7f-48f4-bfa1-8b6bf0479e54_800w.png"/>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-medium text-white">Juan D. Villacís</h3>
<span className="text-[11px] text-emerald-500 uppercase tracking-widest mb-3 font-medium">Coordinador de Proyectos</span>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                Consultor con experiencia en estructuración y gestión de proyectos de cooperación, conservación y desarrollo sostenible, con enfoque territorial y articulación interinstitucional. Ha apoyado la implementación de Mesas de Cooperación Provinciales, priorización de agendas y construcción de carteras de proyectos, revisando coherencia con PDOT, capacidades de ejecutores, riesgos, supuestos y salvaguardas socioambientales. Ha coordinado pipelines de proyectos con organizaciones indígenas, fortaleciendo teoría de cambio, marco lógico, indicadores, cronogramas y presupuestos antes de presentación a donantes. Formación en Ingeniería Civil (USFQ) y Máster en Sustainable Energy Technology (TU Delft).
                            </p>
</div>
</div>

<div className="group flex gap-6 items-start">
<div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#13161C] border border-white/10">
<img alt="Renata" className="w-full h-full object-cover img-reveal" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fcb19f4d-c55a-4dc1-bfbe-47b985b20464_800w.jpg"/>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-medium text-white">Renata Díaz</h3>
<span className="text-[11px] text-emerald-500 uppercase tracking-widest mb-3 font-medium">Especialista en Monitoreo</span>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                Especialista en monitoreo, evaluación y gestión de proyectos de desarrollo sostenible, con experiencia en cooperación internacional, planificación territorial y gestión ambiental. Ha trabajado con gobiernos locales, universidades y organismos internacionales en levantamiento de líneas base, diseño de indicadores, seguimiento técnico y articulación interinstitucional. Aporta una visión analítica y territorial que fortalece la trazabilidad de resultados, la calidad técnica de los proyectos y la coherencia entre planificación, implementación y evaluación.
.
                            </p>
</div>
</div>

<div className="group flex gap-6 items-start">
<div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-sm bg-[#13161C] border border-white/10">
<img alt="Ernesto" className="w-full h-full object-cover img-reveal" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d4e4e90-2ae6-473f-ae03-9d88e64f691a_800w.jpg"/>
</div>
<div className="flex flex-col">
<h3 className="text-lg font-medium text-white">Ernesto Martínez</h3>
<span className="text-[11px] text-emerald-500 uppercase tracking-widest mb-3 font-medium">Especialista Cambio Climático</span>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                                Biólogo y magíster en Cambio Climático y Negociación Ambiental, con amplia trayectoria en formulación, implementación y evaluación de proyectos ambientales y de adaptación al cambio climático. Ha trabajado con ministerios, cooperación internacional y organizaciones de la sociedad civil en gobernanza ambiental, políticas públicas, producción limpia, gestión del agua y monitoreo de proyectos. Aporta experiencia técnica sólida en diseño de propuestas, seguimiento, capacitación y articulación con donantes y actores institucionales.
.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">Trayectoria en Cifras</h2>
<p className="text-slate-400 text-base max-w-xl font-light">
                        Mitigamos riesgos en etapas tempranas con una sólida experiencia acumulada.
                    </p>
</div>
<div className="text-right hidden md:block">
<i className="text-emerald-600 w-8 h-8" data-lucide="trending-up"></i>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-[#13161C] p-8 rounded-sm border border-white/5 group hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<i className="text-slate-500 w-6 h-6 group-hover:text-emerald-500 transition-colors" data-lucide="store"></i>
</div>
<div className="text-4xl font-semibold text-white font-geist mb-2 tracking-tighter">+2300</div>
<div className="text-[11px] text-slate-500 uppercase tracking-widest">Establecimientos</div>
</div>
<div className="bg-[#13161C] p-8 rounded-sm border border-white/5 group hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 delay-75">
<div className="flex justify-between items-start mb-4">
<i className="text-slate-500 w-6 h-6 group-hover:text-emerald-500 transition-colors" data-lucide="calendar-days"></i>
</div>
<div className="text-4xl font-semibold text-white font-geist mb-2 tracking-tighter">25 Años</div>
<div className="text-[11px] text-slate-500 uppercase tracking-widest">Exp. Técnica</div>
</div>
<div className="bg-[#13161C] p-8 rounded-sm border border-white/5 group hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 delay-100">
<div className="flex justify-between items-start mb-4">
<i className="text-slate-500 w-6 h-6 group-hover:text-emerald-500 transition-colors" data-lucide="users"></i>
</div>
<div className="text-4xl font-semibold text-white font-geist mb-2 tracking-tighter">40+</div>
<div className="text-[11px] text-slate-500 uppercase tracking-widest">Actores Clave</div>
</div>
<div className="bg-[#13161C] p-8 rounded-sm border border-white/5 group hover:border-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 delay-150">
<div className="flex justify-between items-start mb-4">
<i className="text-slate-500 w-6 h-6 group-hover:text-emerald-500 transition-colors" data-lucide="shield-check"></i>
</div>
<div className="text-4xl font-semibold text-white font-geist mb-2 tracking-tighter">100%</div>
<div className="text-[11px] text-slate-500 uppercase tracking-widest">Trazabilidad</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="p-6 border border-white/5 rounded-sm bg-[#0B0D11]/50 flex items-start gap-4 hover:border-white/20 transition-colors">
<i className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="pen-square"></i>
<p className="text-sm text-slate-300 font-light">Formulación de proyectos, diseño metodológico e indicadores</p>
</div>
<div className="p-6 border border-white/5 rounded-sm bg-[#0B0D11]/50 flex items-start gap-4 hover:border-white/20 transition-colors">
<i className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="pie-chart"></i>
<p className="text-sm text-slate-300 font-light">Gerencia de proyectos (PMO), control y reportabilidad</p>
</div>
<div className="p-6 border border-white/5 rounded-sm bg-[#0B0D11]/50 flex items-start gap-4 hover:border-white/20 transition-colors">
<i className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="eye"></i>
<p className="text-sm text-slate-300 font-light">Monitoreo y evaluación (M&amp;E), líneas base</p>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 bg-[#0E1015] relative z-20">
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="flex flex-col gap-6 items-start max-w-sm">
<h2 className="text-3xl font-semibold text-white tracking-tighter">Contacto Directo</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Para coordinar una conversación técnica o solicitar servicios de evaluación para su organización.
                        </p>
<div className="flex flex-col gap-3 mt-2">
<a className="flex items-center gap-3 text-sm text-white hover:text-emerald-400 transition-colors group" href="mailto:paulina.lagla@consultoresmpl.com">
<i className="text-slate-500 w-4 h-4 group-hover:text-emerald-500" data-lucide="mail"></i>
                                paulina.lagla@consultoresmpl.com
                            </a>
<a className="flex items-center gap-3 text-sm text-white hover:text-emerald-400 transition-colors group" href="tel:+593991314900">
<i className="text-slate-500 w-4 h-4 group-hover:text-emerald-500" data-lucide="phone"></i>
                                +593 99 131 4900
                            </a>
</div>
</div>
<div className="flex items-end h-full">
<img alt="MPL Logo Footer" className="h-8 w-auto opacity-30 grayscale" height="32" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0eea73af-8ce8-46b1-bb82-e70f5ed0d701_320w.png" width="100"/>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 w-full flex justify-between items-center text-[11px] text-slate-600 uppercase tracking-widest">
<span>MPL Consultores © 2026</span>
<span>Quito, Ecuador</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
