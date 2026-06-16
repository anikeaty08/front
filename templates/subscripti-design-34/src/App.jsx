import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with desired stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Case studies carousel controls
        const track = document.getElementById('csTrack');
        const prev = document.getElementById('csPrev');
        const next = document.getElementById('csNext');
        const prevM = document.getElementById('csPrevMobile');
        const nextM = document.getElementById('csNextMobile');
        const scrollByAmount = 420;

        function goLeft() {
          if (track) track.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
        }
        function goRight() {
          if (track) track.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
        }
        [prev, prevM].forEach(btn => btn && btn.addEventListener('click', goLeft));
        [next, nextM].forEach(btn => btn && btn.addEventListener('click', goRight));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-indigo-300/20 via-violet-300/10 to-sky-300/10 blur-3xl"></div>
<div className="absolute -bottom-32 -right-24 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-sky-300/15 via-indigo-300/10 to-fuchsia-300/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 ring-1 ring-slate-200 grid place-items-center text-white text-sm font-medium tracking-tight" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular'}}>
            L
          </div>
<span className="text-slate-900 text-base tracking-tight font-semibold">Livv Studio</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">Servicios</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#process">Proceso</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Precios</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contacto</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex px-4 py-2 rounded-md text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors" href="#contact">View Our Work</a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 hover:brightness-110 active:brightness-95 shadow-sm shadow-indigo-200/50 ring-1 ring-slate-200 transition-[filter,box-shadow]" href="#book">
<i data-lucide="calendar"></i>
            Book a Free Call
          </a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Tech Molded with Authentic Design = Conquering Results
          </h1>
<p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
            Apps, dashboards y campañas. Sin humo, solo resultados medibles.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 hover:brightness-110 active:brightness-95 shadow ring-1 ring-slate-200" href="#book">
<i data-lucide="phone-call"></i>
              Book a Free Call
            </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50" href="#work">
<i data-lucide="play-circle"></i>
              View Our Work
            </a>
</div>

<div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
<div className="rounded-md ring-1 ring-slate-200 p-3 bg-white">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-indigo-600" data-lucide="bot"></i>
                AI-first
              </div>
</div>
<div className="rounded-md ring-1 ring-slate-200 p-3 bg-white">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-violet-600" data-lucide="timer"></i>
                48h Prototypes
              </div>
</div>
<div className="rounded-md ring-1 ring-slate-200 p-3 bg-white">
<div className="flex items-center gap-2 text-sm text-slate-600">
<i className="text-sky-600" data-lucide="check-circle-2"></i>
                KPIs-Driven
              </div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-gradient-to-br from-indigo-50 via-violet-50 to-sky-50">
<div className="absolute inset-0 opacity-60">
<video autoplay="" className="h-full w-full object-cover" loop="" muted="" playsinline="" preload="metadata">
<source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>
</div>
<div className="relative h-[320px] sm:h-[420px] lg:h-[520px] grid place-items-center">
<div className="size-[240px] sm:size-[300px] lg:size-[360px] rounded-full bg-gradient-to-tr from-indigo-200/60 via-fuchsia-200/50 to-sky-200/60 blur-2xl"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="size-52 sm:size-64 lg:size-72 rounded-xl ring-1 ring-slate-200 backdrop-blur-md bg-white/70 grid place-items-center">
<i className="text-indigo-600" data-lucide="cpu"></i>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-xl bg-indigo-200/60 blur-xl"></div>
<div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-sky-200/60 blur-xl"></div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Filosofía</h2>
<p className="mt-4 text-slate-600 max-w-xl">
            Fusión de tecnología + diseño auténtico → resultados reales. Integramos AI, prototipado veloz y estética precisa para impactar en métricas, no solo en apariencia.
          </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg ring-1 ring-slate-200 p-4 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="text-indigo-600" data-lucide="brain-circuit"></i>
<span className="text-sm font-medium text-slate-900">AI Nativa</span>
</div>
<p className="mt-2 text-xs text-slate-600">Automatizamos tareas y elevamos UX con inteligencia aplicada.</p>
</div>
<div className="rounded-lg ring-1 ring-slate-200 p-4 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="text-violet-600" data-lucide="zap"></i>
<span className="text-sm font-medium text-slate-900">Velocidad</span>
</div>
<p className="mt-2 text-xs text-slate-600">Prototipos funcionales en 48 horas para validar rápido.</p>
</div>
<div className="rounded-lg ring-1 ring-slate-200 p-4 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<i className="text-sky-600" data-lucide="line-chart"></i>
<span className="text-sm font-medium text-slate-900">Métricas</span>
</div>
<p className="mt-2 text-xs text-slate-600">Todo se mide. Optimizamos con datos, no con opiniones.</p>
</div>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-slate-200 p-6 bg-white overflow-hidden">
<div className="absolute -top-16 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-200/50 to-violet-200/50 blur-3xl"></div>
<div className="absolute -bottom-16 -right-20 h-64 w-64 rounded-full bg-gradient-to-tr from-sky-200/50 to-indigo-200/50 blur-3xl"></div>
<div className="relative grid gap-4 sm:grid-cols-2">
<div className="rounded-lg p-4 ring-1 ring-slate-200 bg-slate-50">
<div className="flex items-center gap-3">
<i data-lucide="workflow"></i>
<span className="text-sm font-medium text-slate-900">Arquitecturas limpias</span>
</div>
<p className="mt-2 text-xs text-slate-600">Sistemas modulares para escalar sin fricción.</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-slate-200 bg-slate-50">
<div className="flex items-center gap-3">
<i data-lucide="grid-3x3"></i>
<span className="text-sm font-medium text-slate-900">Design Systems</span>
</div>
<p className="mt-2 text-xs text-slate-600">Componentes consistentes y accesibles.</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-slate-200 bg-slate-50">
<div className="flex items-center gap-3">
<i data-lucide="sparkles"></i>
<span className="text-sm font-medium text-slate-900">3D &amp; Motion</span>
</div>
<p className="mt-2 text-xs text-slate-600">Microinteracciones fluidas y visuales inmersivos.</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-slate-200 bg-slate-50">
<div className="flex items-center gap-3">
<i data-lucide="shield-check"></i>
<span className="text-sm font-medium text-slate-900">Confiable</span>
</div>
<p className="mt-2 text-xs text-slate-600">Seguridad y performance by default.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200" id="services">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Servicios</h2>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="group rounded-2xl p-6 ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md grid place-items-center ring-1 ring-slate-200 bg-slate-50">
<i className="text-indigo-600" data-lucide="bot"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Tech Solutions &amp; Rapid Prototyping</h3>
</div>
<p className="mt-3 text-sm text-slate-600">AI aplicada, no-code/low-code y MVPs listos para testear en días, no meses.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>MVP en 1-2 semanas</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Integraciones y automatizaciones</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Data &amp; APIs</li>
</ul>
</div>
<div className="group rounded-2xl p-6 ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md grid place-items-center ring-1 ring-slate-200 bg-slate-50">
<i className="text-violet-600" data-lucide="palette"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Diseño UI/UX y 3D</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Interfaces precisas, motion sutil y piezas 3D que elevan tu producto.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Wireframes → High-fidelity</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Design Systems y tokens</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Visuales 3D y microinteracciones</li>
</ul>
</div>
<div className="group rounded-2xl p-6 ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md grid place-items-center ring-1 ring-slate-200 bg-slate-50">
<i className="text-sky-600" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Lanzamiento de campañas con creadores</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Growth con creadores y anuncios medibles orientados a adquisición.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Estrategia + Creatividades</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Trackeo y reporting en tiempo real</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Iteraciones rápidas</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200" id="process">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Proceso</h2>
<div className="mt-10">
<div className="relative overflow-x-auto">
<div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent"></div>
<div className="min-w-[780px] grid grid-cols-4 gap-6">

<div className="relative">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-300 grid place-items-center text-slate-900">1</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Discovery &amp; Strategy</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Kickoff, objetivos, KPIs y roadmap de impacto.</p>
</div>

<div className="relative">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-300 grid place-items-center text-slate-900">2</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Prototipo 48h</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Prototipo navegable para validar rápido con usuarios.</p>
</div>

<div className="relative">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-300 grid place-items-center text-slate-900">3</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Desarrollo</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Implementación ágil, integraciones y QA continuo.</p>
</div>

<div className="relative">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 ring-1 ring-slate-300 grid place-items-center text-slate-900">4</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Testing &amp; Optimization</h3>
</div>
<p className="mt-3 text-sm text-slate-600">Experimentación A/B y mejoras guiadas por datos.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200" id="work">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Case Studies</h2>
<p className="mt-2 text-slate-600 text-sm">Métricas a la vista. Historias reales de impacto.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="csPrev">
<i data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="csNext">
<i data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative mt-8">
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2" id="csTrack">

<article className="min-w-[290px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-2xl ring-1 ring-slate-200 overflow-hidden bg-white">
<div className="relative h-40">
<img alt="Dashboard migration" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1546900703-cf06143d1239?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-sm text-emerald-600">
<i data-lucide="trending-up"></i>
                  45% más eficiencia
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">Dashboard Migration</h3>
<p className="mt-1 text-sm text-slate-600">Migración a un stack moderno con permisos y vistas optimizadas.</p>
<div className="mt-4 h-2 rounded-full bg-slate-200">
<div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600" style={{width: '45%'}}></div>
</div>
</div>
</article>

<article className="min-w-[290px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-2xl ring-1 ring-slate-200 overflow-hidden bg-white">
<div className="relative h-40">
<img alt="Growth campaign" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-sm text-indigo-600">
<i data-lucide="sparkle"></i>
                  200% user acquisition
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">Growth Campaign</h3>
<p className="mt-1 text-sm text-slate-600">Estrategia con creadores + paid media y contenido modular.</p>
<div className="mt-4 h-2 rounded-full bg-slate-200">
<div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600" style={{width: '100%'}}></div>
</div>
</div>
</article>

<article className="min-w-[290px] sm:min-w-[360px] lg:min-w-[420px] snap-start rounded-2xl ring-1 ring-slate-200 overflow-hidden bg-white">
<div className="relative h-40">
<img alt="UX optimization" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-sm text-violet-600">
<i data-lucide="mouse-pointer-click"></i>
                  3x conversion
                </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">UX Optimization</h3>
<p className="mt-1 text-sm text-slate-600">Rediseño de journeys críticos, performance y accesibilidad AA.</p>
<div className="mt-4 h-2 rounded-full bg-slate-200">
<div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-sky-600" style={{width: '100%'}}></div>
</div>
</div>
</article>
</div>

<div className="mt-6 md:hidden flex items-center justify-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="csPrevMobile">
<i data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="csNextMobile">
<i data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">¿Por qué Livv?</h2>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">
<div className="flex items-start gap-3">
<i className="text-sky-600 mt-0.5" data-lucide="target"></i>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Resultados tangibles</h3>
<p className="mt-1 text-sm text-slate-600">KPIs definidos, reporting claro y foco en outcomes.</p>
</div>
</div>
</div>
<div className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">
<div className="flex items-start gap-3">
<i className="text-indigo-600 mt-0.5" data-lucide="blend"></i>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Blend tech + diseño</h3>
<p className="mt-1 text-sm text-slate-600">Ingeniería y estética que funcionan juntas.</p>
</div>
</div>
</div>
<div className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">
<div className="flex items-start gap-3">
<i className="text-violet-600 mt-0.5" data-lucide="transparency-grid"></i>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Procesos transparentes</h3>
<p className="mt-1 text-sm text-slate-600">Acceso a tableros, tiempos y avances en vivo.</p>
</div>
</div>
</div>
<div className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white">
<div className="flex items-start gap-3">
<i className="text-emerald-600 mt-0.5" data-lucide="user-round-check"></i>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Atención personalizada</h3>
<p className="mt-1 text-sm text-slate-600">Cupo limitado para priorizar calidad y velocidad.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Pricing</h2>
<p className="mt-2 text-slate-600 text-sm">Claridad y transparencia. Elegí el modelo que mejor se ajusta a tus objetivos.</p>
</div>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Hourly Tracking</h3>
<i className="text-sky-600" data-lucide="clock"></i>
</div>
<p className="mt-2 text-sm text-slate-600">Ideal para tareas puntuales y soporte continuo.</p>
<div className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">$65–$120<span className="text-base text-slate-500 font-normal">/hora</span></div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Timesheets detallados</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Sin mínima de horas</li>
<li className="flex items-center gap-2"><i className="text-sky-600" data-lucide="check"></i>Cancelación flexible</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50" href="#contact">Empezar</a>
</div>

<div className="relative rounded-2xl ring-1 ring-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-inner flex flex-col">
<div className="absolute -top-3 right-6 px-2 py-1 rounded-md text-xs font-medium bg-gradient-to-r from-indigo-500 to-violet-500 text-white ring-1 ring-slate-200/60">Recomendado</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Fixed Monthly</h3>
<i className="text-indigo-600" data-lucide="infinity"></i>
</div>
<p className="mt-2 text-sm text-slate-600">Equipo dedicado con roadmap y entregas semanales.</p>
<div className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">$4.9k–$12k<span className="text-base text-slate-500 font-normal">/mes</span></div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="text-indigo-600" data-lucide="check"></i>Sprint planning + standups</li>
<li className="flex items-center gap-2"><i className="text-indigo-600" data-lucide="check"></i>Capacidad garantizada</li>
<li className="flex items-center gap-2"><i className="text-indigo-600" data-lucide="check"></i>Reportes y métricas</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 hover:brightness-110 ring-1 ring-slate-200" href="#contact">Reservar</a>
</div>

<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">One-Off Projects</h3>
<i className="text-violet-600" data-lucide="package-check"></i>
</div>
<p className="mt-2 text-sm text-slate-600">Proyectos con alcance definido, precio cerrado.</p>
<div className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">$6k–$80k<span className="text-base text-slate-500 font-normal">/proyecto</span></div>
<ul className="mt-5 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="text-violet-600" data-lucide="check"></i>Alcance y cronograma claros</li>
<li className="flex items-center gap-2"><i className="text-violet-600" data-lucide="check"></i>Hitos y entregables</li>
<li className="flex items-center gap-2"><i className="text-violet-600" data-lucide="check"></i>Garantía de calidad</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50" href="#contact">Cotizar</a>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200" id="book">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Ready to Conquer Results?</h2>
<p className="mt-3 text-slate-600">Reservá tu consulta gratuita. Respondemos en menos de 24h.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 hover:brightness-110 ring-1 ring-slate-200" href="#contact">
<i data-lucide="calendar-check-2"></i>
                Book Your Free Consultation
              </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50" href="#work">
<i data-lucide="folder-kanban"></i>
                Ver casos de éxito
              </a>
</div>

<div className="mt-8 flex items-center gap-4">
<a aria-label="X" className="size-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" href="#">
<i data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="size-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" href="#">
<i data-lucide="linkedin"></i>
</a>
<a aria-label="Dribbble" className="size-9 grid place-items-center rounded-md ring-1 ring-slate-200 hover:bg-slate-50" href="#">
<i data-lucide="dribbble"></i>
</a>
</div>
</div>

<div className="rounded-2xl ring-1 ring-slate-200 p-6 bg-white" id="contact">
<form className="grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-700">Nombre</label>
<input className="mt-1 w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 rounded-md px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="text-sm text-slate-700">Email</label>
<input className="mt-1 w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 rounded-md px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="tu@correo.com" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-slate-700">¿Qué querés lograr?</label>
<select className="mt-1 w-full bg-slate-50 text-slate-900 rounded-md px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">
<option>Prototipo rápido</option>
<option>App / Dashboard</option>
<option>Mejorar conversión</option>
<option>Campaña con creadores</option>
</select>
</div>
<div>
<label className="text-sm text-slate-700">Mensaje</label>
<textarea className="mt-1 w-full bg-slate-50 text-slate-900 placeholder:text-slate-400 rounded-md px-3 py-2 ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" placeholder="Contanos sobre tu proyecto" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Promesa: respuesta en 24h.</p>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 hover:brightness-110 ring-1 ring-slate-200" type="submit">
<i data-lucide="send"></i>
                  Enviar
                </button>
</div>
</form>

<div className="mt-8 divide-y divide-slate-200">
<details className="group py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-3">
<i data-lucide="help-circle"></i>
<span className="text-sm font-medium text-slate-900">¿Cómo es el onboarding?</span>
</div>
<i className="transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Kickoff de 45’ para alinear objetivos, acceso a herramientas y backlog priorizado por impacto.</p>
</details>
<details className="group py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-3">
<i data-lucide="shield"></i>
<span className="text-sm font-medium text-slate-900">¿Propiedad intelectual?</span>
</div>
<i className="transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Todo lo producido es tuyo. Firmamos NDA y acuerdos de cesión si lo necesitás.</p>
</details>
<details className="group py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<div className="flex items-center gap-3">
<i data-lucide="globe-2"></i>
<span className="text-sm font-medium text-slate-900">¿Trabajan remoto internacional?</span>
</div>
<i className="transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Sí, en múltiples zonas horarias con herramientas colaborativas y reporting semanal.</p>
</details>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-slate-900 ring-1 ring-slate-200 grid place-items-center text-white text-xs font-medium" style={{fontFamily: '\'JetBrains Mono\', ui-monospace'}}>L</div>
<span className="text-sm text-slate-600">© <span id="year"></span> Livv Studio. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-slate-500 hover:text-slate-900" href="#services">Servicios</a>
<a className="text-slate-500 hover:text-slate-900" href="#process">Proceso</a>
<a className="text-slate-500 hover:text-slate-900" href="#pricing">Precios</a>
<a className="text-slate-500 hover:text-slate-900" href="#work">Work</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
