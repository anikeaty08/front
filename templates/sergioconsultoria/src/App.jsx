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



      // Mobile nav toggle
      (function () {
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (!btn || !nav) return;
        btn.setAttribute('aria-label', 'Alternar navegação');
        btn.addEventListener('click', () => {
          nav.classList.toggle('hidden');
          const isOpen = !nav.classList.contains('hidden');
          btn.setAttribute('aria-expanded', String(isOpen));
          btn.classList.toggle('bg-black/5', isOpen);
        });
      })();

      // Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons();
        }
      });

      // Reveal on scroll with stagger, GPU transforms and light blur
      (function () {
        const animated = Array.from(document.querySelectorAll('[data-animate]'));
        if (!animated.length) return;

        animated.forEach((el, i) => {
          el.classList.add('opacity-0', 'translate-y-4', 'blur-[2px]', 'transform-gpu', 'will-change-transform');
          el.style.transitionProperty = 'opacity, transform, filter';
          el.style.transitionDuration = '600ms';
          el.style.transitionTimingFunction = 'cubic-bezier(.22,.61,.36,1)';
          el.style.transitionDelay = Math.min((i % 8) * 80, 320) + 'ms';
        });

        const io = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              el.classList.remove('opacity-0', 'translate-y-4', 'blur-[2px]');
              el.classList.add('opacity-100', 'translate-y-0');
              // cleanup to avoid re-animating
              io.unobserve(el);
              setTimeout(() => el.classList.remove('will-change-transform'), 700);
            }
          });
        }, { root: null, threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

        animated.forEach(el => io.observe(el));
      })();

      // Simple form UX (prevent empty submits)
      (function () {
        const form = document.querySelector('#contacto form');
        if (!form) return;
        form.addEventListener('submit', (e) => {
          const required = Array.from(form.querySelectorAll('[required]'));
          const invalid = required.some(inp => !inp.value || (inp.type === 'email' && !/^\S+@\S+\.\S+$/.test(inp.value)));
          if (invalid) {
            e.preventDefault();
            alert('Preenche nome e email válidos antes de enviar.');
          }
        });
      })();

      // Year
      (function(){ const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear(); })();
    
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute left-1/2 top-[-10%] h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.08),_transparent_60%)]"></div>
<div className="absolute right-[-10%] bottom-[-20%] h-[35rem] w-[55rem] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),_transparent_60%)]"></div>
</div>

<header className="sticky z-50 top-0">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex supports-[backdrop-filter]:bg-neutral-900/60 md:px-4 bg-gradient-to-t from-[#ffffff]/75 to-[#ffffff]/75 ring-slate-100 ring-1 rounded-full mt-4 mb-6 pt-2.5 pr-3 pb-2.5 pl-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="flex ring-1 ring-black/10 bg-black/5 w-9 h-9 rounded-full items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight font-geist" style={{}}>ST</span>
</div>
<span className="md:text-base text-sm font-medium text-neutral-800 tracking-tight font-geist" style={{}}>Sérgio Tavares</span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
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
<svg className="lucide lucide-menu h-5 w-5 text-neutral-800" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden mb-4" id="mobileNav">
<div className="rounded-2xl backdrop-blur ring-1 shadow-sm p-2 bg-neutral-100/80 ring-black/10">
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#falhas" style={{}}>
              Falhas <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#solucoes" style={{}}>
              Soluções <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#decisoes" style={{}}>
              Decisões <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#plano" style={{}}>
              Plano 28d <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#criterios" style={{}}>
              Critérios <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#metricas" style={{}}>
              Métricas <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-black/5 text-neutral-800 font-geist" href="#contacto" style={{}}>
              Contacto <svg className="lucide lucide-chevron-right h-4 w-4 text-neutral-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
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
<h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.04] font-medium tracking-tight transform-gpu opacity-100 translate-y-0 font-space-grotesk" data-animate="" style={{}}>
                A verdade crua para fundadores que querem crescer — sem desculpas.
              </h1>
<p className="text-base sm:text-lg text-neutral-600 mt-5 transform-gpu opacity-100 translate-y-0 font-geist" data-animate="" style={{}}>
                Se doer, é porque acertou. Plano claro para tração em 28 dias.
              </p>
<div className="mt-8 flex items-center gap-4 transform-gpu opacity-100 translate-y-0" data-animate="" style={{}}>
<a className="inline-flex items-center gap-2 text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-full px-5 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.08)] font-geist" href="#contacto" style={{}}>
                  → Quero o diagnóstico e o plano
                </a>
<div className="hidden sm:flex text-sm text-neutral-500 items-center font-geist" style={{}}>
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                  Respostas diretas. Zero almofadas.
                </div>
</div>
</div>
<div className="relative transform-gpu opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/10 bg-neutral-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
<div className="relative h-[420px] sm:h-[520px]">
<img alt="Tua foto" className="absolute w-full h-full object-cover top-0 right-0 bottom-0 left-0" src="https://goweb2024.goweblab.com/wp-content/uploads/2025/04/premio_5.png?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 flex gap-2">
<span className="px-3 py-1.5 text-xs text-white bg-black/60 ring-1 ring-white/10 rounded-full backdrop-blur font-geist" style={{}}>
                      Diagnóstico em 48h
                    </span>
<span className="px-3 py-1.5 text-xs text-white bg-black/60 ring-1 ring-white/10 rounded-full backdrop-blur font-geist" style={{}}>
                      Plano 28 dias
                    </span>
</div>
<div className="absolute left-4 right-4 bottom-4">
<div className="max-w-md bg-black/70 text-white rounded-2xl ring-1 ring-white/15 backdrop-blur p-4 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
<p className="text-sm leading-snug font-geist" style={{}}>
                        “Traz-me segmento, dor, canal atual, preço e métricas. Eu desmonto a tua estratégia ponto a ponto e reconstruo com prioridades claras. Sem almofadas.”
                      </p>
</div>
</div>
</div>
</div>
<div aria-hidden="true" className="absolute -z-10 inset-0 blur-3xl opacity-40 pointer-events-none">
<div className="w-72 h-72 bg-neutral-200 rounded-full absolute -top-8 -left-8"></div>
<div className="w-72 h-72 bg-neutral-100 rounded-full absolute -bottom-8 -right-8"></div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>
</div>
</main>

<section className="py-16 md:py-24 border-t border-black/5" id="falhas">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-end justify-between gap-6">
<div className="transition-all duration-700 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>Onde provavelmente estás a falhar</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Sem te conhecer. Se doer, acertou.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black font-geist" href="#decisoes" style={{}}>
            Corrigir agora
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-gauge h-4 w-4 text-sky-700" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
              Movimento ≠ tração
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Tarefas e posts não são pipeline, MRR ou margem.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-pill h-4 w-4 text-sky-700" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
              Dor fraca, produto largo
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Serves todos → resolves profundamente ninguém.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-badge-help h-4 w-4 text-sky-700" data-lucide="badge-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
              Validação falsa
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Feedback de amigos/mentores em vez de dinheiro real.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-percent h-4 w-4 text-sky-700" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
              Vaidade &gt; norte
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Segues likes; ignoras retenção e conversão.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-tag h-4 w-4 text-sky-700" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              Preço por medo
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Subpreças e destróis unit economics.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 transform-gpu opacity-100 translate-y-0 opacity-0 translate-y-4 blur-[2px] will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-megaphone h-4 w-4 text-sky-700" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
              Sem distribuição
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>“Se eu construir, eles virão.” Não virão.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-skull h-4 w-4 text-sky-700" data-lucide="skull" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></svg>
              Projetos-zombie
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Sem critérios de morte claros.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-focus h-4 w-4 text-sky-700" data-lucide="focus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
              Foco frouxo
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Dizes sim a tudo; prioridades vazias.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-hourglass h-4 w-4 text-sky-700" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg>
              Decisão lenta
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Adias escolhas duras; polimento do irrelevante.</p>
</div>
<div className="rounded-lg ring-1 p-4 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-quote h-4 w-4 text-sky-700" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
              Narrativa fraca
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Não explicas quem serves, que dor resolves e porquê agora.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="solucoes">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform font-space-grotesk" data-animate="" style={{}}>O que estás a subestimar</h2>
<p className="mt-2 text-sm text-neutral-600 transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform font-geist" data-animate="" style={{}}>4 alavancas que movem a agulha.</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg ring-1 p-5 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-target h-4 w-4 text-sky-700" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              Segmentação microscópica
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Escolhe 1 micro-mercado com dor mensurável e orçamento.</p>
</div>
<div className="rounded-lg ring-1 p-5 hover:ring-sky-500/30 transition-all duration-500 hover:-translate-y-0.5 ring-black/10 bg-black/5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-diamond h-4 w-4 text-sky-700" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
              Preço como posicionamento
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Preço alto + prova de valor → clientes sérios e margem.</p>
</div>
<div className="rounded-lg ring-1 p-5 ring-black/10 bg-black/5 transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-timer h-4 w-4 text-sky-700" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
              Velocidade + cadência
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Ciclo semanal de mensagem → canal → oferta.</p>
</div>
<div className="rounded-lg ring-1 p-5 ring-black/10 bg-black/5 transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-share-2 h-4 w-4 text-sky-700" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
              Canal &gt; feature
            </div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Domina 1 canal antes de somar features.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="decisoes">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform font-space-grotesk" data-animate="" style={{}}>Decisões inadiáveis (esta semana)</h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black font-geist" href="#contacto" style={{}}>
            Agendar 15 min
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-lg ring-1 p-5 ring-black/10 bg-black/5 transition-all duration-500 hover:-translate-y-0.5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<ul className="space-y-3 text-sm text-neutral-800">
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-check-circle-2 h-4 w-4 mt-0.5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>Escolhe... 1 nicho, 1 dor, 1 persona pagante. Mata o resto.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-diamond h-4 w-4 mt-0.5 text-emerald-600" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>Define preço âncora e pacote com margem saudável. Não vendas horas, vende resultado.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-share-2 h-4 w-4 mt-0.5 text-emerald-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>Escolhe 1 canal principal (ex.: outbound, parcerias, conteúdo) para dominar por 4 semanas.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-target h-4 w-4 mt-0.5 text-emerald-600" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>Clarifica promessa: problema, solução, resultado mensurável, prazo, prova.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-calendar-check h-4 w-4 mt-0.5 text-emerald-600" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>Marca 20 conversas com clientes-alvo (descoberta sem pitch) nos próximos 10 dias.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-flask-conical h-4 w-4 mt-0.5 text-emerald-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>Define oferta de piloto pago (14–30 dias) com resultados claros e upsell direto.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-file-warning h-4 w-4 mt-0.5 text-emerald-600" data-lucide="file-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>Estabelece critérios de morte e metas semanais (ver abaixo). Sem ambiguidade.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-timer h-4 w-4 mt-0.5 text-emerald-600" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>Bloqueia 2 blocos diários de 90min só para distribuição. Sem apps abertas.</li>
</ul>
</div>
<div className="rounded-lg ring-1 p-5 ring-black/10 bg-black/5 transition-all duration-500 hover:-translate-y-0.5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h3 className="text-sm font-medium text-neutral-800 font-geist" style={{}}>Acordos operacionais</h3>
<ul className="mt-3 space-y-3 text-sm text-neutral-800">
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-git-commit h-4 w-4 mt-0.5 text-sky-700" data-lucide="git-commit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><line x1="3" x2="9" y1="12" y2="12"></line><line x1="15" x2="21" y1="12" y2="12"></line></svg>Reunião semanal de 30m: rever métricas norte, decidir próximos 3 focos.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-pencil-ruler h-4 w-4 mt-0.5 text-sky-700" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>Mensagens e landing testadas todas as semanas (mín. 3 variações).</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-credit-card h-4 w-4 mt-0.5 text-sky-700" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>Pagamento antecipado para piloto. Sem “net 60”.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-users h-4 w-4 mt-0.5 text-sky-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Responsáveis claros por objetivo e decisão. Sem comités.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-presentation h-4 w-4 mt-0.5 text-sky-700" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>Demo Friday: mostrar progresso, não slides. Decisão rápida sobre o próximo foco.</li>
<li className="flex gap-3 font-geist" style={{}}><svg className="lucide lucide-book-open-check h-4 w-4 mt-0.5 text-sky-700" data-lucide="book-open-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21V7"></path><path d="m16 12 2 2 4-4"></path><path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"></path></svg>Registo de decisões (1 página): contexto, opções, escolha, data, owner.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="plano">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-end justify-between gap-6">
<div className="transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>Plano de 28 dias para tração</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>4 semanas. Foco, cadência e decisões com dentes.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black font-geist" href="#criterios" style={{}}>
            Critérios de morte
            <svg className="lucide lucide-skull h-4 w-4" data-lucide="skull" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-lg ring-1 p-5 ring-black/10 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/80 text-white text-[11px] font-geist" style={{}}>1</span>
              Direção e prova de dor
            </div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Escolhe 1 nicho e define ICP.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Agenda 10–15 entrevistas de descoberta.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Escreve promessa clara + página simples.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Define preço âncora e pacote piloto.</li>
</ul>
</div>

<div className="rounded-lg ring-1 p-5 ring-black/10 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/80 text-white text-[11px] font-geist" style={{}}>2</span>
              Mensagem e canal
            </div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> 3 variações de headline/CTA testadas.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Escolhe 1 canal: outbound, parcerias ou conteúdo.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> 100 toques úteis (emails/DMs) para ICP.</li>
<li className="flex &lt;li class= font-geist" flex="" gap-2"="" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Calendário + script de qualificação prontos (CTA claro).</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Cadência de follow‑up 3× definida num CRM leve.</li>
</ul>
</div>

<div className="rounded-lg ring-1 p-5 ring-black/10 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/80 text-white text-[11px] font-geist" style={{}}>3</span>
              Piloto pago e distribuição
            </div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> 150–200 toques úteis no canal escolhido.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> 8–12 reuniões marcadas, 5 demos executadas.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Fechar 2 pilotos pagos (pagamento antecipado).</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Onboarding leve + baseline de métricas do cliente.</li>
</ul>
</div>

<div className="rounded-lg ring-1 p-5 ring-black/10 bg-white/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:ring-sky-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/80 text-white text-[11px] font-geist" style={{}}>4</span>
              Escalar o que funciona
            </div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Retrospectiva: o que fecha, o que mata, o que duplica.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> 2 estudos de caso curtos (antes/depois, 1 gráfico).</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Ajuste de preço/packaging com base no valor entregue.</li>
<li className="flex gap-2 font-geist" style={{}}><span className="text-neutral-400 font-geist" style={{}}>•</span> Playbook v1: mensagem, canal, script, objeções.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="criterios">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex items-end justify-between gap-6">
<div className="transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>Critérios de morte (sem romantismos)</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Se estes limites falharem, muda o plano ou mata a iniciativa.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-black font-geist" href="#metricas" style={{}}>
            Ver métricas norte
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 transition-all hover:-translate-y-0.5 hover:ring-red-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path></svg>
              Semana 2, dia 14
            </div>
<p className="mt-2 text-sm text-neutral-700 font-geist" style={{}}>Menos de 5 reuniões marcadas com ICP → muda canal ou proposta.</p>
</div>
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 transition-all hover:-translate-y-0.5 hover:ring-red-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Semana 3, dia 21
            </div>
<p className="mt-2 text-sm text-neutral-700 font-geist" style={{}}>0 pilotos pagos → repricing imediato ou “kill/shelf”.</p>
</div>
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 transition-all hover:-translate-y-0.5 hover:ring-red-500/30 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center gap-2 text-sm text-neutral-800 font-geist" style={{}}>
<svg className="h-4 w-4 text-red-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="m12.5 17-.5-1-.5 1h1z"></path><path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"></path><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="12" r="1"></circle></svg>
              Semana 4, dia 28
            </div>
<p className="mt-2 text-sm text-neutral-700 font-geist" style={{}}>Retenção/adesão do piloto abaixo do acordado → sem upsell.</p>
</div>
</div>
<div className="mt-6 rounded-xl ring-1 ring-black/10 bg-amber-50 text-amber-900 p-4 flex gap-3 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<svg className="h-5 w-5 mt-0.5 text-amber-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
<p className="text-sm font-geist" style={{}}>Sem exceções. Se um critério dispara, a decisão é automática e documentada.</p>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="metricas">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="transition-all duration-700 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>Métricas norte</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>As únicas que importam nas próximas 4 semanas.</p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-lg ring-1 ring-black/10 bg-white/60 backdrop-blur p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-700 font-geist" style={{}}>Leads qualificados/semana</span>
<span className="text-xs px-2 py-1 rounded-md bg-black/5 text-neutral-600 font-geist" style={{}}>Meta: 25</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>18</div>
<div className="mt-3 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[72%]"></div>
</div>
</div>

<div className="rounded-lg ring-1 ring-black/10 bg-white/60 backdrop-blur p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-700 font-geist" style={{}}>Reuniões marcadas</span>
<span className="text-xs px-2 py-1 rounded-md bg-black/5 text-neutral-600 font-geist" style={{}}>Meta: 10</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>7</div>
<div className="mt-3 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[70%]"></div>
</div>
</div>

<div className="rounded-lg ring-1 ring-black/10 bg-white/60 backdrop-blur p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-700 font-geist" style={{}}>Pilotos pagos</span>
<span className="text-xs px-2 py-1 rounded-md bg-black/5 text-neutral-600 font-geist" style={{}}>Meta: 2</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>1</div>
<div className="mt-3 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[50%]"></div>
</div>
</div>

<div className="rounded-lg ring-1 ring-black/10 bg-white/60 backdrop-blur p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-700 font-geist" style={{}}>Tempo até 1º € (dias)</span>
<span className="text-xs px-2 py-1 rounded-md bg-black/5 text-neutral-600 font-geist" style={{}}>Meta: ≤ 21</span>
</div>
<div className="mt-3 text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>19</div>
<div className="mt-3 h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[90%]"></div>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h3 className="text-sm font-medium text-neutral-800 font-geist" style={{}}>Conversões-chave</h3>
<ul className="mt-3 text-sm text-neutral-700 space-y-2">
<li className="flex items-center justify-between"><span className="font-geist" style={{}}>Visitas → Lead</span><span className="font-medium font-geist" style={{}}>3.2%</span></li>
<li className="flex items-center justify-between"><span className="font-geist" style={{}}>Lead → Reunião</span><span className="font-medium font-geist" style={{}}>28%</span></li>
<li className="flex items-center justify-between"><span className="font-geist" style={{}}>Reunião → Piloto</span><span className="font-medium font-geist" style={{}}>15%</span></li>
</ul>
</div>
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h3 className="text-sm font-medium text-neutral-800 font-geist" style={{}}>Saúde do funil</h3>
<p className="mt-2 text-sm text-neutral-700 font-geist" style={{}}>Top do funil estável, meio fraco. Focar em mensagem e objeções antes de adicionar canais.</p>
</div>
<div className="rounded-lg ring-1 ring-black/10 bg-black/5 p-5 opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h3 className="text-sm font-medium text-neutral-800 font-geist" style={{}}>Próximas 3 ações</h3>
<ul className="mt-2 text-sm text-neutral-700 space-y-2">
<li className="flex items-center gap-2 font-geist" style={{}}><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-800"></span> Testar 2 headlines novas focadas em dor específica.</li>
<li className="flex items-center gap-2 font-geist" style={{}}><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-800"></span> Sequência de follow‑up 5 passos (com prova).</li>
<li className="flex items-center gap-2 font-geist" style={{}}><span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-800"></span> Oferta de piloto com garantia condicional.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-black/5" id="contacto">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
<div className="opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" style={{}}>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight font-space-grotesk" style={{}}>Queres o diagnóstico cru + plano de 28 dias?</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Envia o contexto. Eu respondo em 48h com próximos passos concretos.</p>
<div className="mt-6 space-y-3 text-sm text-neutral-700">
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="h-4 w-4 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Sem bullshit, só o que mexe ponteiros.
              </div>
<div className="flex items-center gap-2 font-geist" style={{}}>
<svg className="h-4 w-4 text-neutral-800" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4"></path><path d="M21 9a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4"></path></svg>
                Confidencialidade total.
              </div>
</div>
</div>
<form action="#" className="rounded-2xl ring-1 ring-black/10 bg-white/60 backdrop-blur p-6 shadow-sm opacity-0 translate-y-4 blur-[2px] transform-gpu will-change-transform" data-animate="" method="post" style={{}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 font-geist" htmlFor="nome" style={{}}>Nome</label>
<input className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-400" id="nome" name="nome" placeholder="O teu nome" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 font-geist" htmlFor="email" style={{}}>Email</label>
<input className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-400" id="email" name="email" placeholder="tu@empresa.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 font-geist" htmlFor="empresa" style={{}}>Empresa / Projeto</label>
<input className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-400" id="empresa" name="empresa" placeholder="Nome da empresa ou projeto" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 font-geist" htmlFor="contexto" style={{}}>Contexto atual</label>
<textarea className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-400" id="contexto" name="contexto" placeholder="Segmento, dor, canal atual, preço e métricas." rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 font-geist" htmlFor="objetivo" style={{}}>Objetivo em 28 dias</label>
<input className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-400" id="objetivo" name="objetivo" placeholder="Ex.: 2 pilotos pagos, 10 reuniões qualificadas" type="text"/>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xs text-neutral-500 font-geist" style={{}}>Resposta em até 48h úteis.</p>
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition font-geist" style={{}} type="submit">
                Enviar pedido
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="pb-10 pt-8 border-t border-black/5">
<div className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-geist" style={{}}>© <span className="font-geist" id="year" style={{}}>2025</span> Sérgio Tavares. Todos os direitos reservados.</p>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<a className="hover:text-black transition font-geist" href="#plano" style={{}}>Plano</a>
<span className="text-neutral-300 font-geist" style={{}}>•</span>
<a className="hover:text-black transition font-geist" href="#criterios" style={{}}>Critérios</a>
<span className="text-neutral-300 font-geist" style={{}}>•</span>
<a className="hover:text-black transition font-geist" href="#contacto" style={{}}>Contacto</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
