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
      
    lucide.createIcons();

    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const h = a.getAttribute('href');
        if (h && h.length > 1) {
          e.preventDefault();
          document.querySelector(h)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    new Chart(document.getElementById('askSweepChart'), {
      type: 'doughnut',
      data: {
        labels: ['Ejecución ASK', 'Ejecución sweep', 'Otros'],
        datasets: [{
          data: [60, 65, 35],
          backgroundColor: ['#DBB778', '#F0CF95', 'rgba(237,237,237,0.2)'],
          borderWidth: 0,
        }],
      },
      options: { cutout: '70%', plugins: { legend: { display: false } } }
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
      

<header className="fixed inset-x-0 top-0 z-40 border-b border-[#EDEDED]/10 bg-[#2E3133]/90 backdrop-blur">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
<a className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-[#DBB778] transition hover:scale-105" href="#">
<i className="h-6 w-6" data-lucide="zap"></i>
        OptionFlow
      </a>
<a className="rounded-full bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] px-5 py-2 text-sm font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/30 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/50" href="#precios">Comenzar prueba</a>
</nav>
</header>

<section className="relative flex min-h-screen items-center justify-center pt-32 pb-24">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(219,183,120,0.07),transparent_60%)]"></div>
<div className="mx-auto max-w-3xl px-6 text-center">
<span className="mb-6 inline-block rounded-full border border-[#DBB778]/30 bg-[#DBB778]/10 px-4 py-2 text-xs font-semibold text-[#DBB778]">📊 El único análisis de ejecución de ballenas</span>
<h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl text-[#EDEDED]">Sigue al <span className="text-[#DBB778]">dinero inteligente</span> en tiempo real</h1>
<p className="mx-auto mb-10 max-w-xl text-lg text-[#EDEDED]/80">Descubre exactamente <span className="font-semibold text-[#DBB778]">cómo y dónde</span> ejecutan las ballenas. ASK+SWEEP = máxima agresividad institucional.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="rounded-full bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] px-7 py-3 text-base font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/40 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/60" href="#precios">⭐ Obtener acceso VIP</a>
<a className="rounded-full border-2 border-[#DBB778]/70 px-7 py-3 text-base font-semibold text-[#DBB778] transition hover:bg-[#DBB778]/10 hover:-translate-y-0.5" href="#caracteristicas">Ver demo en vivo</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24" id="caracteristicas">
<h2 className="mb-4 text-center text-4xl font-semibold tracking-tight md:text-5xl text-[#EDEDED]">¿Por qué OptionFlow?</h2>
<p className="mx-auto mb-20 max-w-2xl text-center text-[#EDEDED]/80">La única aplicación que te muestra NO SOLO qué movimientos de ballenas ocurrieron, sino <span className="font-semibold text-[#DBB778]">EXACTAMENTE</span> cómo se ejecutaron.</p>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*]:rounded-2xl [&>*]:border [&>*]:border-[#EDEDED]/10 [&>*]:bg-[#2E3133]/60">
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="crosshair"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Lugar de ejecución</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">ASK = máxima agresividad. MID = neutral. BID = menos agresivo. Identifica dinero inteligente al instante.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">60 % en ASK = Alcista</span>
</div>
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="zap"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Tipo de ejecución</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">SWEEP = actividad institucional agresiva. SINGLE = un solo exchange. Los sweeps revelan urgencia.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">65 % sweeps = Institucional</span>
</div>
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="flame"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Matriz de agresividad</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">ASK+SWEEP = el dinero inteligente en acción. La combinación perfecta para detectar movimientos críticos.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">45 % ASK+SWEEP = Crítico</span>
</div>
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="bar-chart-3"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Cronología en vivo</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">Visualiza el flujo de ballenas minuto a minuto. Actualizaciones cada 30 s con análisis visual.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">Actualizaciones en vivo</span>
</div>
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="dollar-sign"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Alertas Premium</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">Solo movimientos de más de 1 M $. Con interpretación contextual: “Máxima agresividad”, “Cobertura institucional”.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">Umbral 1 M $+</span>
</div>
<div className="group relative p-8 transition hover:border-[#DBB778]">
<i className="mb-6 h-10 w-10 text-[#DBB778] transition group-hover:scale-110" data-lucide="gem"></i>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-[#DBB778]">Sin competencia</h3>
<p className="mb-5 text-sm text-[#EDEDED]/70">FlowAlgo no lo ofrece. Unusual Whales tampoco. Solo OptionFlow muestra la ejecución completa.</p>
<span className="inline-block rounded-full bg-[#DBB778]/10 px-3 py-1 text-xs font-medium text-[#DBB778]">Exclusivo del mercado</span>
</div>
</div>

<div className="mt-24 rounded-2xl border border-[#EDEDED]/10 bg-[#2E3133]/60 px-8 py-12 text-center">
<div className="grid gap-10 md:grid-cols-4 [&>*]:transition [&>*]:hover:scale-[1.06]">
<div>
<div className="text-4xl font-bold tracking-tight text-[#DBB778] md:text-5xl">$89.4 M</div>
<p className="mt-1 text-sm text-[#EDEDED]/70">Flujo de ballenas hoy</p>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-[#DBB778] md:text-5xl">147</div>
<p className="mt-1 text-sm text-[#EDEDED]/70">Operaciones de ballenas</p>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-[#DBB778] md:text-5xl">60 %</div>
<p className="mt-1 text-sm text-[#EDEDED]/70">Ejecución en ASK</p>
</div>
<div>
<div className="text-4xl font-bold tracking-tight text-[#DBB778] md:text-5xl">65 %</div>
<p className="mt-1 text-sm text-[#EDEDED]/70">Ejecución sweep</p>
</div>
</div>
<div className="mx-auto mt-12 max-w-xl">
<canvas height="120" id="askSweepChart"></canvas>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24" id="precios">
<h2 className="mb-4 text-center text-4xl font-semibold tracking-tight md:text-5xl text-[#EDEDED]">Precios simples</h2>
<p className="mx-auto mb-20 max-w-2xl text-center text-[#EDEDED]/80">Bloomberg Terminal: 25 K $/año. OptionFlow: 99,2 % más económico con un análisis superior.</p>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [&>*]:rounded-2xl [&>*]:border [&>*]:border-[#EDEDED]/10 [&>*]:bg-[#2E3133]/60">
<div className="flex flex-col p-10">
<h3 className="text-lg font-semibold tracking-tight text-[#EDEDED]">Inicial</h3>
<p className="mt-1 text-sm text-[#EDEDED]/70">Para traders individuales</p>
<div className="mt-6 flex items-baseline gap-1 font-jetbrains text-4xl font-bold tracking-tight text-[#DBB778]">$99</div>
<span className="mb-6 text-xs text-[#EDEDED]/70">por mes</span>
<ul className="space-y-2 text-sm text-[#EDEDED]/70">
<li className="pl-5">Alertas de ballenas en tiempo real</li>
<li className="pl-5">Análisis de ejecución básico</li>
<li className="pl-5">Panel móvil</li>
<li className="pl-5">Soporte por correo</li>
</ul>
<a className="mt-8 w-full rounded-lg bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] py-3 text-center text-sm font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/30 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/50" href="#">Comenzar prueba</a>
</div>
<div className="relative flex flex-col p-10 ring-1 ring-[#DBB778]/60 sm:scale-105">
<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] px-4 py-1 text-[10px] font-bold text-[#2E3133]">⭐ MÁS POPULAR</span>
<h3 className="text-lg font-semibold tracking-tight text-[#EDEDED]">Pro</h3>
<p className="mt-1 text-sm text-[#EDEDED]/70">Para traders serios</p>
<div className="mt-6 flex items-baseline gap-1 font-jetbrains text-4xl font-bold tracking-tight text-[#DBB778]">$199</div>
<span className="mb-6 text-xs text-[#EDEDED]/70">por mes</span>
<ul className="space-y-2 text-sm text-[#EDEDED]/70">
<li className="pl-5">Todo en Inicial +</li>
<li className="pl-5">Matriz de agresividad completa</li>
<li className="pl-5">Análisis de cronología de ejecución</li>
<li className="pl-5">Notificaciones push</li>
<li className="pl-5">Soporte prioritario</li>
<li className="pl-5">Exportar datos</li>
</ul>
<a className="mt-8 w-full rounded-lg bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] py-3 text-center text-sm font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/30 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/50" href="#">⭐ Obtener Pro</a>
</div>
<div className="flex flex-col p-10">
<h3 className="text-lg font-semibold tracking-tight text-[#EDEDED]">Institucional</h3>
<p className="mt-1 text-sm text-[#EDEDED]/70">Para hedge funds</p>
<div className="mt-6 flex items-baseline gap-1 font-jetbrains text-4xl font-bold tracking-tight text-[#DBB778]">$999</div>
<span className="mb-6 text-xs text-[#EDEDED]/70">por mes</span>
<ul className="space-y-2 text-sm text-[#EDEDED]/70">
<li className="pl-5">Todo en Pro +</li>
<li className="pl-5">Acceso por API</li>
<li className="pl-5">Alertas personalizadas</li>
<li className="pl-5">Panel para equipos</li>
<li className="pl-5">Opción white-label</li>
<li className="pl-5">Soporte dedicado</li>
</ul>
<a className="mt-8 w-full rounded-lg bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] py-3 text-center text-sm font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/30 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/50" href="#">Contactar ventas</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
<div className="rounded-2xl border border-[#DBB778]/20 bg-gradient-to-br from-[#DBB778]/5 to-[#F0CF95]/10 px-10 py-16 text-center">
<h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl text-[#EDEDED]">¿Listo para seguir al dinero inteligente?</h2>
<p className="mx-auto mb-10 max-w-xl text-[#EDEDED]/80">Únete a traders que ya utilizan OptionFlow para identificar movimientos de ballenas antes que el mercado.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="rounded-full bg-gradient-to-tr from-[#DBB778] to-[#F0CF95] px-8 py-3 text-sm font-semibold text-[#2E3133] shadow-lg shadow-[#DBB778]/40 transition hover:-translate-y-0.5 hover:shadow-[#DBB778]/60" href="#precios">⭐ Prueba de 7 días</a>
<a className="rounded-full border-2 border-[#DBB778]/70 px-8 py-3 text-sm font-semibold text-[#DBB778] transition hover:bg-[#DBB778]/10 hover:-translate-y-0.5" href="#">📱 Ver demo en vivo</a>
</div>
</div>
</section>

<footer className="border-t border-[#EDEDED]/10 py-10">
<p className="text-center text-xs text-[#EDEDED]/50">© 2025 OptionFlow. El único análisis de ejecución de ballenas que necesitas.</p>
</footer>



    </>
  );
}
