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
          const section = document.querySelector('section[data-element-id="aura-emfwpwjua"]');
          if (!section) return;
          const toggleBtn = section.querySelector('#toggleWeeksPlan');
          const weeksTrack = section.querySelector('#weeksTrackPlan');
          if (!toggleBtn || !weeksTrack) return;

          let expanded = false; // começa oculto

          const iconUp = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevrons-up" class="lucide lucide-chevrons-up w-4 h-4"><path d="m7 18 5-5 5 5"></path><path d="m7 11 5-5 5 5"></path></svg>';
          const iconDown = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="chevrons-down" class="lucide lucide-chevrons-down w-4 h-4"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg>';

          function setWeeksVisibility(state) {
            const week3 = weeksTrack.children[2];
            const week4 = weeksTrack.children[3];
            if (week3 && week4) {
              week3.classList.toggle('hidden', !state);
              week4.classList.toggle('hidden', !state);
            }
            toggleBtn.innerHTML = state ? iconUp + ' Ocultar semanas 3 e 4' : iconDown + ' Mostrar semanas 3 e 4';
            if (window.lucide) { window.lucide.createIcons(); }
          }

          setWeeksVisibility(expanded);

          toggleBtn.addEventListener('click', function () {
            expanded = !expanded;
            setWeeksVisibility(expanded);
          });
        })();
      


    // Mobile menu
    (function () {
      const btn = document.getElementById('menuBtn');
      const nav = document.getElementById('mobileNav');
      if (!btn || !nav) return;
      btn.addEventListener('click', () => {
        nav.classList.toggle('hidden');
      });
    })();

    // Lucide icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    });

    // IntersectionObserver animations (respeita prefers-reduced-motion)
    (function () {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const nodes = document.querySelectorAll('[data-animate]');
      if (!nodes.length) return;

      if (prefersReduced) {
        nodes.forEach(n => {
          n.classList.remove('opacity-0', 'translate-y-4');
          n.classList.add('opacity-100', 'translate-y-0');
        });
        return;
      }

      nodes.forEach((n, i) => {
        // Estado inicial
        n.classList.remove('opacity-100', 'translate-y-0');
        n.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700', 'ease-out', 'will-change-transform');
        n.style.transitionDelay = (Math.min(i, 6) * 60) + 'ms';
      });

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.remove('opacity-0', 'translate-y-4');
            el.classList.add('opacity-100', 'translate-y-0');
            io.unobserve(el);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

      nodes.forEach(n => io.observe(n));
    })();

    // Chart.js: Virada (28 dias)
    (function () {
      const ctx = document.getElementById('viradaChart');
      if (!ctx || !window.Chart) return;

      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['S1', 'S2', 'S3', 'S4'],
          datasets: [
            {
              label: 'Baseline',
              data: [10, 11, 11, 12],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239,68,68,0.1)',
              tension: 0.35,
              pointRadius: 2,
              borderWidth: 2
            },
            {
              label: 'Com cadência',
              data: [10, 14, 18, 24],
              borderColor: '#0a0a0a',
              backgroundColor: 'rgba(10,10,10,0.12)',
              tension: 0.35,
              pointRadius: 2,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { stepSize: 5 } }
          },
          plugins: {
            legend: { display: false },
            tooltip: { intersect: false, mode: 'index' }
          }
        }
      });
    })();

    // Chart.js: Métricas
    (function () {
      const ctx = document.getElementById('metricasChart');
      if (!ctx || !window.Chart) return;

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['W1', 'W2', 'W3', 'W4'],
          datasets: [
            {
              label: 'Baseline',
              data: [30, 28, 27, 26],
              borderColor: '#ef4444',
              backgroundColor: 'rgba(239,68,68,0.08)',
              fill: true,
              tension: 0.35,
              pointRadius: 2,
              borderWidth: 2
            },
            {
              label: 'Com plano',
              data: [30, 36, 42, 51],
              borderColor: '#0a0a0a',
              backgroundColor: 'rgba(10,10,10,0.10)',
              fill: true,
              tension: 0.35,
              pointRadius: 2,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: { grid: { color: 'rgba(0,0,0,0.05)' } }
          },
          plugins: {
            legend: { display: false },
            tooltip: { intersect: false, mode: 'index' }
          }
        }
      });
    })();
  
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
      

<header className="sticky z-50 top-0">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pt-1 pr-6 pl-6">
<div className="flex supports-[backdrop-filter]:bg-neutral-900/60 md:px-4 bg-gradient-to-t from-[#ffffff]/75 to-[#ffffff]/75 ring-slate-50 ring-1 rounded-full mt-4 mb-6 pt-2.5 pr-3 pb-2.5 pl-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur items-center justify-between" style={{}}>

<a className="flex items-center gap-3" href="#">
<div className="flex ring-1 ring-black/10 bg-black/5 w-9 h-9 rounded-full items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight font-geist" style={{}}>ST</span>
</div>
<span className="md:text-base text-sm font-medium text-neutral-800 tracking-tight font-geist" style={{}}>Sérgio Tavares</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700" style={{}}>
<a className="transition-colors hover:text-black font-geist" href="#falhas" style={{}}>Falhas</a>
<a className="transition-colors hover:text-black font-geist" href="#solucoes" style={{}}>Soluções</a>
<a className="transition-colors hover:text-black font-geist" href="#decisoes" style={{}}>Decisões</a>
<a className="transition-colors hover:text-black font-geist" href="#plano" style={{}}>Plano 28d</a>
<a className="transition-colors hover:text-black font-geist" href="#criterios" style={{}}>Critérios</a>
<a className="transition-colors hover:text-black font-geist" href="#metricas" style={{}}>Métricas</a>
<a className="transition-colors hover:text-black font-geist" href="#contacto" style={{}}>Contacto</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:translate-y-[-1px] active:translate-y-0 transition-transform bg-black text-neutral-100 font-geist" href="#contacto" style={{}}>
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Começar
          </a>
<button aria-label="Alternar navegação" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl ring-1 transition-colors ring-black/10 hover:bg-black/5" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-neutral-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden mb-4" id="mobileNav">
<div className="rounded-2xl backdrop-blur ring-1 shadow-sm p-2 bg-neutral-100/80 ring-black/10" style={{}}>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#falhas" style={{}}>
            Falhas <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#solucoes" style={{}}>
            Soluções <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#decisoes" style={{}}>
            Decisões <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#plano" style={{}}>
            Plano 28d <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#criterios" style={{}}>
            Critérios <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#metricas" style={{}}>
            Métricas <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#contacto" style={{}}>
            Contacto <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative">
<div className="lg:px-8 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
<div className="">
<h1 className="sm:text-5xl lg:text-[56px] leading-[1.04] transform-gpu text-4xl font-medium tracking-tight font-space-grotesk opacity-100 translate-y-0" data-animate="" style={{}}>A verdade crua para fundadores que querem crescer — sem desculpas</h1>
<p className="text-base sm:text-lg text-neutral-600 mt-5 transform-gpu opacity-100 translate-y-0 font-geist" data-animate="" style={{}}>
              Se doer, é porque acertou. Plano claro para tração em 28 dias.
            </p>
<div className="mt-8 flex items-center gap-4 transform-gpu opacity-100 translate-y-0" data-animate="" style={{}}>
<a className="inline-flex items-center gap-2 text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-full px-5 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-geist" href="#contacto" style={{}}>
                → Quero o diagnóstico e o plano
              </a>
<div className="hidden sm:flex text-sm text-neutral-500 font-geist items-center" data-animate="" style={{}}>
<span className="inline-flex h-2 w-2 rounded-full bg-blue-500 mr-2" style={{}}></span>
                Respostas diretas. Zero almofadas.
              </div>
</div>
</div>
<div className="relative transform-gpu opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/10 bg-neutral-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)]" style={{}}>
<div className="relative sm:h-[520px] h-[420px]">
<img alt="Tua foto" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://goweb2024.goweblab.com/wp-content/uploads/2025/09/sergio_pitch.png?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 flex gap-2">
<span className="px-3 py-1.5 text-xs text-white bg-black/60 ring-1 ring-white/10 rounded-full backdrop-blur font-geist" style={{}}>
                    Diagnóstico em 48h
                  </span>
<span className="px-3 py-1.5 text-xs text-white bg-black/60 ring-1 ring-white/10 rounded-full backdrop-blur font-geist" style={{}}>
                    Plano 28 dias
                  </span>
</div>
<div className="absolute left-4 right-4 bottom-4">
<div className="sm:p-5 text-white bg-black/50 max-w-md ring-white/15 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm" data-animate="">
<p className="text-sm leading-snug font-geist" style={{}}>
                      “Traz-me segmento, dor, canal atual, preço e métricas. Eu desmonto a tua estratégia ponto a ponto e reconstruo com prioridades claras. Sem almofadas.”
                    </p>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="absolute -z-10 inset-0 blur-3xl opacity-40 pointer-events-none">
<div className="w-72 h-72 bg-neutral-200 rounded-full absolute -top-8 -left-8" style={{}}></div>
<div className="w-72 h-72 bg-neutral-100 rounded-full absolute -bottom-8 -right-8" style={{}}></div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" data-animate="fade" style={{}}></div>
</div>

<section className="lg:px-8 max-w-7xl rounded-3xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative" id="falhas">
<div className="max-w-3xl transition duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<h2 className="sm:text-5xl bg-clip-text text-4xl font-medium text-transparent tracking-tighter font-space-grotesk bg-gradient-to-r from-[#000000] to-[#ff0000] py-1">Onde provavelmente estás a falhar (sem te conhecer)</h2>
<p className="mt-3 text-neutral-600 font-geist" style={{}}>Lê à frente. Vira cada card para ver o que dói.</p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2 text-neutral-900" style={{}}>
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-move text-neutral-700" data-lucide="move" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="m15 19-3 3-3-3"></path><path d="m19 9 3 3-3 3"></path><path d="M2 12h20"></path><path d="m5 9-3 3 3 3"></path><path d="m9 5 3-3 3 3"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Tração vs movimento</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Confundes movimento com tração.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Tarefas, sprints e posts ≠ pipeline, MRR, margem.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2 text-neutral-900" style={{}}>
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Segmentação fraca</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Queres vender a todos.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Segmento difuso = mensagem fraca = CAC alto.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-badge-dollar-sign" data-lucide="badge-dollar-sign" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Preço sem tese</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Preço sem tese.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Preço comunica posição; barato dilui valor.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-messages-square" data-lucide="messages-square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Roadmap por opinião</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Roadmap guiado por opiniões.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Entrevistas sem compromisso ≠ prova de procura.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-sparkle" data-lucide="sparkle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Métricas de vaidade</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Métricas de vaidade.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Views e likes não pagam salários.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-timer" data-lucide="timer" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Sem cadência</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Sem cadência de iteração.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Sem ciclos semanais, aprendes devagar.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-share-2" data-lucide="share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Canal indefinido</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Canal indefinido.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Produto ótimo + distribuição fraca = 0.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-hand" data-lucide="hand" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Onboarding friccionado</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Onboarding friccionado.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Tempo ao valor &gt; feature nova.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-megaphone" data-lucide="megaphone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Oferta fraca</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Sem oferta irresistível.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Mensagens genéricas não movem orçamento.</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl ring-1 ring-neutral-200 bg-gradient-to-br from-white to-neutral-50 hover:to-blue-50 p-4 sm:p-5 hover:ring-neutral-300 transition [perspective:1000px] duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="relative h-36 sm:h-40 w-full [transform-style:preserve-3d] transition duration-500 group-hover:[transform:rotateY(180deg)]">
<div className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>

<svg className="lucide lucide-workflow w-5 h-5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<span className="text-sm font-medium font-geist" style={{}}>Pipeline imprevisível</span>
</div>
<p className="text-lg font-medium tracking-tight font-geist" style={{}}>Falta pipeline previsível.</p>
</div>
<div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl bg-gradient-to-br from-neutral-50 to-white ring-1 ring-neutral-200 p-4 flex items-center" style={{}}>
<p className="text-sm text-neutral-800 font-geist" style={{}}>Sem leads qualificadas, receitas aleatórias.</p>
</div>
</div>
</div>
</div>
</section>
<section className="lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="virada">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5 transition duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk" style={{}}>O que estás a subestimar</h3>
<p className="mt-3 text-neutral-600 font-geist" style={{}}>Alavancas ignoradas que mudam o teu próximo trimestre.</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3 rounded-xl ring-1 ring-neutral-200 p-4 bg-white hover:bg-neutral-50 transition" data-animate="" style={{}}>
<svg className="lucide lucide-focus text-neutral-900 mt-0.5" data-lucide="focus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
<div>
<p className="font-medium tracking-tight font-geist" style={{}}>Segmentação microscópica</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>1 ICP, 1 dor, 1 canal. O resto é ruído.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl ring-1 ring-neutral-200 p-4 bg-white hover:bg-neutral-50 transition" data-animate="" style={{}}>
<svg className="lucide lucide-tags text-neutral-900 mt-0.5" data-lucide="tags" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z"></path><path d="M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></svg>
<div className="">
<p className="font-medium tracking-tight font-geist" style={{}}>Preço como posicionamento</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Preço certo reduz CAC e filtra clientes errados.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl ring-1 ring-neutral-200 p-4 bg-white hover:bg-neutral-50 transition" data-animate="" style={{}}>
<svg className="lucide lucide-zap text-neutral-900 mt-0.5" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div className="">
<p className="font-medium tracking-tight font-geist" style={{}}>Velocidade + cadência</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>1 ciclo/semana. Decidir &gt; perfeição.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-xl ring-1 ring-neutral-200 p-4 bg-white hover:bg-neutral-50 transition" data-animate="" style={{}}>
<svg className="lucide lucide-share text-neutral-900 mt-0.5" data-lucide="share" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<div className="">
<p className="font-medium tracking-tight font-geist" style={{}}>Canal &gt; feature</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Distribuição previsível antes de escalar produto.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 transition duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="sm:p-6 ring-neutral-200 ring-1 bg-white rounded-2xl pt-4 pr-4 pb-4 pl-4 relative top-16">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-600 font-geist" style={{}}>Tração projetada (28 dias)</p>
<div className="inline-flex gap-2 text-xs text-neutral-600 font-geist items-center" style={{}}>
<span className="bg-rose-500 w-2 h-2 rounded-full" style={{}}></span> Baseline
                <span className="h-2 w-2 rounded-full bg-neutral-900" style={{}}></span> Com cadência
              </div>
</div>
<div className="mt-3 rounded-xl ring-1 ring-neutral-200 bg-neutral-50 p-3" style={{}}>
<div className="relative">
<div className="">
<div className=""><canvas className="w-full h-60" height="214" id="viradaChart" style={{display: 'block', boxSizing: 'border-box', height: '195px', width: '492px'}} width="541"></canvas></div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-500 font-geist" style={{}}>Exemplo ilustrativo. O objetivo é melhorar conversão e cadência, não só “views”.</p>
</div>
</div>
</div>
</section>

<section className="lg:px-8 max-w-7xl rounded-3xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6" id="plano">
<div className="max-w-3xl transition duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<span className="inline-flex items-center gap-1.5 text-xs text-neutral-700 ring-1 ring-neutral-300 rounded-full px-2.5 py-1 bg-white/70 backdrop-blur font-geist" style={{}}>
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Em destaque: Plano de 28 dias
        </span>
<h3 className="text-5xl sm:text-6xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-900 to-blue-700 mt-3 font-space-grotesk" style={{}}>Plano de 28 dias para tração</h3>
<p className="mt-3 text-neutral-600 font-geist" style={{}}>4 semanas. Cada uma com um resultado binário.</p>
</div>
<div className="mt-8 relative transition duration-700 ease-out will-change-transform opacity-100 translate-y-0" data-animate="">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2" id="weeksTrackPlan">

<div className="w-full rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition transform-gpu hover:-translate-y-0.5 block opacity-100 translate-y-0 duration-500 ease-out will-change-transform" data-animate="" style={{}}>
<div className="flex gap-3 items-center">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-alert-circle" data-lucide="alert-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<div className="">
<p className="font-medium tracking-tight font-geist" style={{}}>Semana 1</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Dor &amp; prova de procura</p>
</div>
</div>
<div className="mt-4 text-sm text-neutral-700 space-y-2 font-geist" style={{}}>
<p className="font-geist" style={{}}>ICP único e 10 entrevistas com compromisso (pagas ou carta de intenção).</p>
<p className="font-geist" style={{}}>Evidência: respostas com orçamento e deadline.</p>
</div>
</div>

<div className="w-full rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition transform-gpu hover:-translate-y-0.5 block opacity-100 translate-y-0 duration-500 ease-out will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-package" data-lucide="package" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<p className="font-medium tracking-tight font-geist" style={{}}>Semana 2</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Entrega manual &amp; pipeline</p>
</div>
</div>
<div className="mt-4 text-sm text-neutral-700 space-y-2 font-geist" style={{}}>
<p className="font-geist" style={{}}>Oferta beta manual para reduzir time-to-value.</p>
<p className="font-geist" style={{}}>Pipeline com etapas e qualificação objetiva.</p>
</div>
</div>

<div className="w-full rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition transform-gpu hover:-translate-y-0.5 hidden" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-sliders-horizontal" data-lucide="sliders-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</div>
<div>
<p className="font-medium tracking-tight font-geist" style={{}}>Semana 3</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Ajuste fino &amp; preço</p>
</div>
</div>
<div className="mt-4 text-sm text-neutral-700 space-y-2 font-geist" style={{}}>
<p className="font-geist" style={{}}>Experimentação de mensagem/oferta e teste de âncoras de preço.</p>
<p className="font-geist" style={{}}>Meta: lead→pagante ≥ 15% no ICP.</p>
</div>
</div>

<div className="w-full rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition transform-gpu hover:-translate-y-0.5 hidden" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-split" data-lucide="split" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>
</div>
<div>
<p className="font-medium tracking-tight font-geist" style={{}}>Semana 4</p>
<p className="text-sm text-neutral-600 font-geist" style={{}}>Canal &amp; cadência</p>
</div>
</div>
<div className="mt-4 text-sm text-neutral-700 space-y-2 font-geist" style={{}}>
<p className="font-geist" style={{}}>Escolha de 1 canal primário com metas semanais (volume, taxa de resposta, SQLs).</p>
<p className="font-geist" style={{}}>Playbook de cadência: inputs, rituais, KPIs e responsáveis.</p>
</div>
</div>
</div>

<div className="mt-4 flex items-center gap-3" data-animate="">
<button aria-controls="weeksTrackPlan" aria-expanded="false" className="inline-flex gap-2 hover:ring-neutral-400 transition text-sm font-geist bg-white ring-neutral-300 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4 items-center" data-state="collapsed" id="toggleWeeksPlan" onclick="(function(btn){try{var track=document.getElementById('weeksTrackPlan');if(!track)return;var w3=track.children[2],w4=track.children[3];var expanded=btn.getAttribute('data-state')==='expanded';if(w3&amp;&amp;w4){w3.classList.toggle('hidden',expanded);w4.classList.toggle('hidden',expanded);}btn.setAttribute('data-state',expanded?'collapsed':'expanded');btn.setAttribute('aria-expanded',(!expanded).toString());var iconUp='&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; data-lucide=&quot;chevrons-up&quot; class=&quot;lucide lucide-chevrons-up w-4 h-4&quot;&gt;&lt;path d=&quot;m7 18 5-5 5 5&quot;&gt;&lt;/path&gt;&lt;path d=&quot;m7 11 5-5 5 5&quot;&gt;&lt;/path&gt;&lt;/svg&gt;';var iconDown='&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;2&quot; strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; data-lucide=&quot;chevrons-down&quot; class=&quot;lucide lucide-chevrons-down w-4 h-4&quot;&gt;&lt;path d=&quot;m7 6 5 5 5-5&quot;&gt;&lt;/path&gt;&lt;path d=&quot;m7 13 5 5 5-5&quot;&gt;&lt;/path&gt;&lt;/svg&gt;';btn.innerHTML=(!expanded?iconUp+' Ocultar semanas 3 e 4':iconDown+' Mostrar semanas 3 e 4');if(window.lucide&amp;&amp;window.lucide.createIcons){window.lucide.createIcons();}}catch(e){}})(this)" style={{}} type="button"><svg className="lucide lucide-chevrons-down w-4 h-4" data-lucide="chevrons-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg> Mostrar semanas 3 e 4</button>
<span className="text-xs text-neutral-500 font-geist" style={{}}>Revela os passos finais do plano.</span>
</div>
</div>

</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="solucoes">
<div className="max-w-3xl opacity-100 translate-y-0" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk" style={{}}>Soluções que põem a máquina a rodar</h3>
<p className="mt-3 text-neutral-600 font-geist" style={{}}>Não é consultoria teórica. É execução orientada a receita.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="font-medium tracking-tight font-geist" style={{}}>Mensagem &amp; oferta</p>
</div>
<p className="mt-3 text-sm text-neutral-700 font-geist" style={{}}>Proposta clara, objeções mapeadas, âncoras de preço e garantias. Resultado: conversão sobe.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-boxes w-5 h-5" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a...2 2 0 0 0-2.06 0l-3 1.8A2 2 0 0 0 7.97 4.42Z"></path></svg>
</div>
<p className="font-medium tracking-tight font-geist" style={{}}>Produto → entrega</p>
</div>
<p className="mt-3 text-sm text-neutral-700 font-geist" style={{}}>Empacotamento, onboarding e entrega manual inteligente. Resultado: tempo-ao-valor cai, churn inicial desce.</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-radar w-5 h-5" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.2 6.2A10 10 0 1 0 12 2"></path><path d="M13.4 6.4a4 4 0 1 0-1.4 7.6"></path><path d="M2 12h2"></path><path d="m20 6-3 3"></path><path d="M6 20l3-3"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<p className="font-medium tracking-tight font-geist">Canal previsível</p>
</div>
<p className="mt-3 text-sm text-neutral-700 font-geist">Sequências, listas, abordagens e ofertas por ICP. Resultado: pipeline deixa de ser lotaria.</p>
</div>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-sm hover:translate-y-[-1px] active:translate-y-0 transition bg-neutral-900 text-white font-geist" href="#contacto">
          Montar isto no teu contexto
          <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<span className="text-xs text-neutral-500 font-geist">Chamada de 20 min para alinhar escopo. Sem venda forçada.</span>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="decisoes">
<div className="max-w-3xl" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk">Como tomo decisões no teu caso</h3>
<p className="mt-3 text-neutral-600 font-geist">Princípios operacionais para cortar ruído e avançar rápido.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition" data-animate="">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center">
<svg className="w-5 h-5 text-neutral-900" data-lucide="scissors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" x2="8.12" y1="4" y2="15.88"></line><line x1="14.47" x2="20" y1="14.48" y2="20"></line><line x1="8.12" x2="12" y1="8.12" y2="12"></line></svg>
</div>
<div>
<p className="font-medium tracking-tight font-geist">Corte de escopo</p>
<p className="text-sm text-neutral-700 font-geist">Menos features, mais valor entregue no caminho crítico.</p>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition" data-animate="">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center">
<svg className="w-5 h-5 text-neutral-900" data-lucide="tally-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4v16"></path><path d="M8 4v16"></path><path d="M12 4v16"></path><path d="M16 4v16"></path><path d="M20 4v16"></path></svg>
</div>
<div>
<p className="font-medium tracking-tight font-geist">Dados mínimos suficientes</p>
<p className="text-sm text-neutral-700 font-geist">Decisões com 70% de certeza em 48h. O resto valida-se em campo.</p>
</div>
</div>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 hover:ring-neutral-300 transition" data-animate="">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-100 flex items-center justify-center">
<svg className="w-5 h-5 text-neutral-900" data-lucide="repeat-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a10 10 0 1 1 10 10H7"></path><path d="M9 17l-2 2l2 2"></path><path d="M11 10h1v4"></path></svg>
</div>
<div>
<p className="font-medium tracking-tight font-geist">Ritmo semanal</p>
<p className="text-sm text-neutral-700 font-geist">Objetivos semanais claros, retro e próximos passos com donos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="criterios">
<div className="max-w-3xl" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk">Para quem isto faz sentido</h3>
<p className="mt-3 text-neutral-600 font-geist">Definição clara evita tempo perdido dos dois lados.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5" data-animate="">
<p className="font-medium tracking-tight font-geist">Perfil ideal</p>
<ul className="mt-3 space-y-2">
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-green-600" data-lucide="check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              B2B com ciclos de venda curtos a médios, ticket &gt; 1k€.
            </li>
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-green-600" data-lucide="check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Fundador(a) hands-on com capacidade de executar ajustes rápidos.
            </li>
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-green-600" data-lucide="check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Abertura para testar preço, mensagem e canal sem drama.
            </li>
</ul>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5" data-animate="">
<p className="font-medium tracking-tight font-geist">Não é para ti se</p>
<ul className="mt-3 space-y-2">
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-rose-600" data-lucide="x" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              Queres “manual de instruções” sem mexer no produto ou canal.
            </li>
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-rose-600" data-lucide="x" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              Procuras “branding” sem foco em receita nos próximos 90 dias.
            </li>
<li className="text-sm text-neutral-700 flex items-start gap-2 font-geist">
<svg className="w-4 h-4 mt-0.5 text-rose-600" data-lucide="x" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              Não aceitas feedback direto com prazos curtos.
            </li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="metricas">
<div className="max-w-3xl" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk">Métricas que importam</h3>
<p className="mt-3 text-neutral-600 font-geist">Pipeline, conversões e tempo-ao-valor. O resto é ruído.</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
<div className="lg:col-span-5 grid grid-cols-3 gap-3">
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-4" data-animate="">
<p className="text-xs text-neutral-500 font-geist">Leads qualificadas/sem</p>
<p className="text-2xl font-medium tracking-tight font-space-grotesk">18</p>
<p className="text-xs text-emerald-600 font-geist">+38% vs última</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-4" data-animate="">
<p className="text-xs text-neutral-500 font-geist">Lead → Pagante</p>
<p className="text-2xl font-medium tracking-tight font-space-grotesk">16%</p>
<p className="text-xs text-emerald-600 font-geist">+4 pp</p>
</div>
<div className="rounded-2xl ring-1 ring-neutral-200 bg-white p-4" data-animate="">
<p className="text-xs text-neutral-500 font-geist">TTV (dias)</p>
<p className="text-2xl font-medium tracking-tight font-space-grotesk">5</p>
<p className="text-xs text-emerald-600 font-geist">-3 dias</p>
</div>
<div className="col-span-3 rounded-2xl ring-1 ring-neutral-200 bg-white p-4" data-animate="">
<p className="text-xs text-neutral-500 font-geist">Observação</p>
<p className="text-sm text-neutral-700 font-geist">Quando o ICP é único e a oferta é clara, a variância do funil cai e a cadência de aprendizagem sobe.</p>
</div>
</div>
<div className="lg:col-span-7 rounded-2xl ring-1 ring-neutral-200 bg-white p-4" data-animate="">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-600 font-geist">Funil semanal</p>
<div className="inline-flex gap-3 items-center text-xs text-neutral-600 font-geist">
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Baseline</span>
<span className="inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-neutral-900"></span> Com plano</span>
</div>
</div>
<div className="mt-3">
<canvas aria-label="Gráfico de funil semanal" className="w-full h-60" id="metricasChart" role="img"></canvas>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-16" id="contacto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5" data-animate="">
<h3 className="text-4xl sm:text-5xl font-medium tracking-tighter font-space-grotesk">Começa com um diagnóstico</h3>
<p className="mt-3 text-neutral-600 font-geist">48h para te dizer onde estás a perder tração e que sequência executar nas próximas 4 semanas.</p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
              Checklist de ICP, oferta, canal e preço
            </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
              Plano de 28 dias com metas semanais
            </li>
<li className="flex items-center gap-2 text-sm text-neutral-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
              Calls curtas para remover bloqueios
            </li>
</ul>
<div className="mt-6 inline-flex items-center gap-2 text-xs text-neutral-500 font-geist">
<svg className="w-3.5 h-3.5" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
            Dados tratados com confidencialidade.
          </div>
</div>
<div className="lg:col-span-7">
<form aria-label="Formulário de contacto/diagnóstico" className="rounded-2xl ring-1 ring-neutral-200 bg-white p-5 space-y-4" data-animate="" onsubmit="event.preventDefault(); this.reset(); alert('Obrigado! Vou responder em breve.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="nome">Nome</label>
<input className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="nome" name="nome" placeholder="O teu nome" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="email" name="email" placeholder="tu@empresa.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="empresa">Empresa</label>
<input className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="empresa" name="empresa" placeholder="Nome da empresa" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="site">Site</label>
<input className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="site" name="site" placeholder="https://" type="url"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="mrr">MRR atual</label>
<select className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="mrr" name="mrr">
<option selected="" value="">Seleciona...</option>
<option>&lt; 5k€</option>
<option>5k€ – 20k€</option>
<option>20k€ – 50k€</option>
<option>&gt; 50k€</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="prazo">Prazo</label>
<select className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="prazo" name="prazo">
<option>Preciso esta semana</option>
<option selected="">Dentro de 30 dias</option>
<option>A explorar</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist" htmlFor="mensagem">Contexto (segmento, dor, canal atual)</label>
<textarea className="mt-1 w-full rounded-xl border border-neutral-200 focus:border-neutral-400 focus:ring-0 px-3 py-2.5 text-sm" id="mensagem" name="mensagem" placeholder="Ex.: SMB SaaS, churn alto no mês 1, canal principal outbound sem resposta." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-500 font-geist">Ao enviar, aceitas contacto por email. Sem spam.</div>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-sm hover:translate-y-[-1px] active:translate-y-0 transition bg-neutral-900 text-white font-geist" type="submit">
                Receber diagnóstico
                <svg className="w-4 h-4" data-lucide="send" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4Z"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex ring-1 ring-black/10 bg-black/5 w-9 h-9 rounded-full items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight font-geist">ST</span>
</div>
<div>
<p className="text-sm font-medium font-geist">Sérgio Tavares</p>
<p className="text-xs text-neutral-500 font-geist">Crescimento sem desculpas</p>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-600">
<a className="hover:text-neutral-900 font-geist" href="#falhas">Falhas</a>
<a className="hover:text-neutral-900 font-geist" href="#solucoes">Soluções</a>
<a className="hover:text-neutral-900 font-geist" href="#decisoes">Decisões</a>
<a className="hover:text-neutral-900 font-geist" href="#plano">Plano</a>
<a className="inline-flex items-center gap-2 hover:text-neutral-900 font-geist" href="#contacto">
          Linkedin
          <svg className="w-4 h-4 translate-y-[1px]" data-lucide="linkedin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-xs text-neutral-500 font-geist">© <span id="year"></span> Todos os direitos reservados.</p>
</div>
</footer>



    </>
  );
}
