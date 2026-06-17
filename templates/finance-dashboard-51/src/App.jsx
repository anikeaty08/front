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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5
          }
        });

        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.animate-up').forEach((el) => {
          observer.observe(el);
        });
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
      
<main className="flex flex-row items-center h-full w-max relative">
<div className="absolute left-[50vw] right-[50vw] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none"></div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col items-center text-center gap-8 animate-up">
<div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 animate-float">
<i className="w-10 h-10 text-white/60" data-lucide="lightbulb"></i>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight text-white">
            Os 4 níveis do Vibe Coding
          </h1>
<p className="text-2xl text-white/50 max-w-3xl font-light leading-relaxed">
            Um mapa visual de como evoluir sua abordagem ao usar Inteligência Artificial para construir produtos reais.
          </p>
</div>
</section>

<div className="w-[30vw] md:w-[50vw] flex items-center justify-center shrink-0 relative z-10 animate-up">
<div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-pulse-ring">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col">
<div className="w-full flex flex-col gap-4 mb-14">
<span className="text-base font-medium tracking-widest uppercase text-white/40 animate-up">
              Nível 1
            </span>
<h2 className="text-5xl font-medium tracking-tight text-white animate-up" style={{transitionDelay: '100ms'}}>
              O Solicitante
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-center">
<div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-5 shadow-2xl animate-up" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4 text-white/40 mb-2">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-base font-normal">Você</span>
</div>
<div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white/80 font-mono text-base leading-relaxed">
                &gt; Build a finance dashboard with charts and a table for transactions. Make it look modern.
              </div>
</div>
<div className="relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden animate-up" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-center mb-10 border-b border-white/5 pb-5">
<div className="w-32 h-4 bg-white/10 rounded-full"></div>
<div className="w-8 h-8 rounded-full bg-white/10"></div>
</div>
<div className="absolute top-6 right-6 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium backdrop-blur-md z-10 animate-up" style={{transitionDelay: '500ms'}}>
<i className="w-4 h-4" data-lucide="triangle-alert"></i>
                Data undefined
              </div>
<div className="grid grid-cols-2 gap-5 mb-8">
<div className="h-28 rounded-2xl bg-white/5 border border-red-500/10 relative overflow-hidden flex flex-col justify-end p-5">
<div className="w-16 h-3 bg-white/20 rounded-full mb-3"></div>
<div className="w-24 h-6 bg-white/10 rounded-md"></div>
<i className="w-6 h-6 absolute top-5 right-5 text-red-500/40" data-lucide="bug"></i>
</div>
<div className="h-28 rounded-2xl bg-white/5 border border-white/5 p-5 flex flex-col justify-end">
<div className="w-16 h-3 bg-white/20 rounded-full mb-3"></div>
<div className="w-20 h-6 bg-white/10 rounded-md"></div>
</div>
</div>
<div className="h-36 rounded-2xl bg-white/5 border border-white/5 flex items-end gap-3 p-5">
<div className="w-full bg-white/10 rounded-t-md h-[40%]"></div>
<div className="w-full bg-white/10 rounded-t-md h-[70%]"></div>
<div className="w-full bg-red-500/20 rounded-t-md h-[20%] border-t border-red-500/30"></div>
<div className="w-full bg-white/10 rounded-t-md h-[90%]"></div>
<div className="w-full bg-white/10 rounded-t-md h-[50%]"></div>
</div>
</div>
</div>
</div>
</section>

<div className="w-[30vw] md:w-[50vw] flex items-center justify-center shrink-0 relative z-10 animate-up">
<div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-pulse-ring">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col">
<div className="w-full flex flex-col gap-4 mb-14">
<span className="text-base font-medium tracking-widest uppercase text-white/40 animate-up">
              Nível 2
            </span>
<h2 className="text-5xl font-medium tracking-tight text-white animate-up" style={{transitionDelay: '100ms'}}>
              O Planejador
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-center">
<div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-8 animate-up" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-4 border-b border-white/10 pb-6">
<i className="w-8 h-8 text-white/60" data-lucide="file-text"></i>
<h3 className="text-xl font-normal text-white">
                  Product Requirements
                </h3>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 animate-up" style={{transitionDelay: '300ms'}}>
<div className="w-6 h-6 rounded md border border-white/20 flex items-center justify-center bg-white/10">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-base text-white/80">User Authentication (JWT)</span>
</div>
<div className="flex items-center gap-4 animate-up" style={{transitionDelay: '400ms'}}>
<div className="w-6 h-6 rounded md border border-white/20 flex items-center justify-center bg-white/10">
<i className="w-4 h-4 text-white" data-lucide="check"></i>
</div>
<span className="text-base text-white/80">Dashboard View</span>
</div>
<div className="flex items-center gap-4 animate-up" style={{transitionDelay: '500ms'}}>
<div className="w-6 h-6 rounded md border border-white/20"></div>
<span className="text-base text-white/40">Export to CSV</span>
</div>
<div className="flex items-center gap-4 animate-up" style={{transitionDelay: '600ms'}}>
<div className="w-6 h-6 rounded md border border-white/20"></div>
<span className="text-base text-white/40">Dark Mode Support</span>
</div>
</div>
</div>
<div className="p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col gap-10 relative overflow-hidden animate-up" style={{transitionDelay: '300ms'}}>
<div className="absolute left-[56px] top-12 bottom-12 w-px bg-white/10"></div>
<div className="flex gap-8 relative z-10 animate-up" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-white/20 flex items-center justify-center shrink-0 text-base font-medium text-white shadow-xl">
                  1
                </div>
<div className="flex flex-col pt-3">
<h4 className="text-lg font-normal text-white">Database Schema</h4>
<div className="w-40 h-2 bg-white/10 rounded-full mt-4"></div>
<div className="w-28 h-2 bg-white/10 rounded-full mt-3"></div>
</div>
</div>
<div className="flex gap-8 relative z-10 animate-up" style={{transitionDelay: '500ms'}}>
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shrink-0 text-base font-medium shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  2
                </div>
<div className="flex flex-col pt-3">
<h4 className="text-lg font-normal text-white">API Routes</h4>
<div className="w-48 h-2 bg-white/20 rounded-full mt-4"></div>
<div className="w-24 h-2 bg-white/20 rounded-full mt-3"></div>
</div>
</div>
<div className="flex gap-8 relative z-10 animate-up" style={{transitionDelay: '600ms'}}>
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border-2 border-white/10 flex items-center justify-center shrink-0 text-base font-medium text-white/40">
                  3
                </div>
<div className="flex flex-col pt-3">
<h4 className="text-lg font-normal text-white/40">Frontend UI</h4>
<div className="w-32 h-2 bg-white/5 rounded-full mt-4"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-[30vw] md:w-[50vw] flex items-center justify-center shrink-0 relative z-10 animate-up">
<div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-pulse-ring">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col">
<div className="w-full flex flex-col gap-4 mb-14">
<span className="text-base font-medium tracking-widest uppercase text-white/40 animate-up">
              Nível 3
            </span>
<h2 className="text-5xl font-medium tracking-tight text-white animate-up" style={{transitionDelay: '100ms'}}>
              O Interrogador
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full items-center">
<div className="flex flex-col gap-8">
<div className="flex gap-5 items-start w-[95%] md:w-[90%] animate-up" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-white/60" data-lucide="cpu"></i>
</div>
<div className="p-6 rounded-3xl rounded-tl-sm bg-white/5 border border-white/10 flex flex-col gap-4">
<p className="text-base text-white/90 leading-relaxed">
                    Antes de escrevermos o código, vamos definir o core do produto. Responda:
                  </p>
<ul className="flex flex-col gap-3 mt-2">
<li className="text-base text-white/60 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-white/40"></div>
                      Quem é o usuário principal?
                    </li>
<li className="text-base text-white/60 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-white/40"></div>
                      Qual a dor número 1 dele?
                    </li>
<li className="text-base text-white/60 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-white/40"></div>
                      O que seria um MVP de sucesso?
                    </li>
</ul>
</div>
</div>
<div className="flex gap-5 items-start w-[95%] md:w-[90%] self-end flex-row-reverse animate-up" style={{transitionDelay: '350ms'}}>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-black" data-lucide="user"></i>
</div>
<div className="p-6 rounded-3xl rounded-tr-sm bg-white/10 border border-white/20">
<p className="text-base text-white/90 leading-relaxed">
                    São designers freelancers. Eles perdem muito tempo cobrando clientes e têm renda imprevisível.
                  </p>
</div>
</div>
</div>
<div className="p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shadow-2xl flex flex-col gap-8 relative overflow-hidden animate-up" style={{transitionDelay: '500ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="flex items-center gap-4 mb-2">
<i className="w-8 h-8 text-white" data-lucide="target"></i>
<h3 className="text-xl font-medium text-white tracking-tight">
                  Estratégia Refinada
                </h3>
</div>
<div className="flex flex-col gap-6">
<div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col gap-2">
<span className="text-sm font-medium text-white/40 uppercase tracking-wider">
                    Foco
                  </span>
<span className="text-base text-white">
                    Gestão de cobrança automatizada
                  </span>
</div>
<div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/5 flex flex-col gap-2">
<span className="text-sm font-medium text-white/40 uppercase tracking-wider">
                    Escopo Descartado
                  </span>
<span className="text-base text-white/50 line-through decoration-white/30">
                    Gráficos complexos, multi-moedas, gestão de tarefas
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-[30vw] md:w-[50vw] flex items-center justify-center shrink-0 relative z-10 animate-up">
<div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-pulse-ring">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col">
<div className="w-full flex flex-col gap-4 mb-14">
<span className="text-base font-medium tracking-widest uppercase text-white/40 animate-up">
              Nível 4
            </span>
<h2 className="text-5xl font-medium tracking-tight text-white animate-up" style={{transitionDelay: '100ms'}}>
              O Arquiteto + Problema Real
            </h2>
</div>
<div className="flex flex-col w-full gap-10">
<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 p-8 rounded-3xl bg-white/[0.02] border border-white/10 animate-up" style={{transitionDelay: '200ms'}}>
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                  Público
                </span>
<span className="text-xl text-white font-normal">Freelancers</span>
</div>
<div className="hidden md:block h-10 w-px bg-white/10"></div>
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-white/40 uppercase tracking-widest">
                  Problema Principal
                </span>
<span className="text-xl text-white font-normal">
                  Renda imprevisível e cobranças atrasadas
                </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full items-stretch">
<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col gap-5 opacity-50 hover:opacity-100 transition-opacity duration-300 animate-up" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-white/60" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-medium text-white">ERP Completo</h3>
<p className="text-base text-white/50 leading-relaxed">
                  Sistema robusto com gestão de clientes, projetos e fluxo de caixa.
                </p>
<div className="mt-auto pt-5 border-t border-white/5 text-sm text-red-400 font-medium">
                  Overkill (Complexo demais)
                </div>
</div>
<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] flex flex-col gap-5 opacity-50 hover:opacity-100 transition-opacity duration-300 animate-up" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-2">
<i className="w-6 h-6 text-white/60" data-lucide="table"></i>
</div>
<h3 className="text-lg font-medium text-white">Planilha Complexa</h3>
<p className="text-base text-white/50 leading-relaxed">
                  Template para rastrear pagamentos e enviar mensagens manualmente.
                </p>
<div className="mt-auto pt-5 border-t border-white/5 text-sm text-orange-400 font-medium">
                  Muito atrito manual
                </div>
</div>
<div className="p-8 rounded-3xl border border-white/10 bg-[#121212] flex flex-col gap-5 shadow-2xl relative overflow-hidden scale-[1.03] hover:scale-[1.08] transition-all duration-500 z-10 animate-up group" style={{transitionDelay: '500ms'}}>
<div className="absolute top-6 right-6 text-xs font-semibold uppercase tracking-widest bg-white text-black px-3 py-1.5 rounded-md">
                  Recomendado
                </div>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-2 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="link"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">
                  Link de Cobrança 1-Click
                </h3>
<p className="text-base text-white/60 leading-relaxed mb-2">
                  App minimalista que gera link de pagamento único com lembretes no WhatsApp.
                </p>
<div className="mt-auto pt-5 border-t border-white/10 text-sm text-green-400 font-medium flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
                  Resolve a dor diretamente
                </div>
</div>
</div>
</div>
</div>
</section>

<div className="w-[30vw] md:w-[50vw] flex items-center justify-center shrink-0 relative z-10 animate-up">
<div className="w-14 h-14 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] animate-pulse-ring">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>

<section className="w-screen h-screen overflow-y-auto snap-center shrink-0 relative z-10 flex flex-col">
<div className="w-full max-w-5xl px-6 md:px-8 mx-auto my-auto py-16 flex flex-col">
<div className="text-center flex flex-col items-center gap-8 w-full mb-16 animate-up">
<div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/60 tracking-widest uppercase">
              O Conceito
            </div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight">
              "Usuários não querem seu app.
              <br/>
              Querem resolver um problema."
            </h2>
<p className="text-xl text-white/40">Jobs to be Done</p>
</div>
<div className="flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-10 w-full animate-up" style={{transitionDelay: '200ms'}}>
<div className="flex-1 p-10 rounded-[2rem] border border-red-500/10 bg-gradient-to-b from-red-500/[0.02] to-transparent flex flex-col items-center text-center gap-8 group hover:border-red-500/20 transition-colors duration-500">
<div className="w-full h-48 rounded-2xl border border-white/5 bg-[#0a0a0a] p-5 flex flex-col gap-4 relative overflow-hidden shadow-inner opacity-70">
<div className="flex gap-3 w-full">
<div className="w-1/3 h-10 bg-white/5 rounded-md"></div>
<div className="w-2/3 h-10 bg-white/5 rounded-md"></div>
</div>
<div className="flex gap-3 w-full h-full">
<div className="w-1/2 h-full bg-white/5 rounded-md"></div>
<div className="w-1/2 h-full bg-white/5 rounded-md"></div>
</div>
<i className="absolute inset-0 m-auto w-16 h-16 text-red-500/20 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" data-lucide="x-circle"></i>
</div>
<div>
<h3 className="text-xl font-normal text-white/80">
                  Dashboard Complexo
                </h3>
<p className="text-base text-white/40 mt-2">
                  Foco em features e UI genérica
                </p>
</div>
</div>
<div className="flex items-center justify-center shrink-0 md:w-12 text-white/20 py-4 md:py-0">
<span className="text-3xl font-light italic">vs</span>
</div>
<div className="flex-1 p-10 rounded-[2rem] border border-green-500/20 bg-gradient-to-b from-green-500/[0.05] to-transparent flex flex-col items-center text-center gap-8 shadow-[0_0_40px_rgba(74,222,128,0.03)] relative group hover:shadow-[0_0_60px_rgba(74,222,128,0.08)] transition-all duration-500">
<div className="absolute -top-4 bg-[#0a0a0a] px-5 text-sm font-medium text-green-400 tracking-widest uppercase border border-green-500/20 rounded-full py-1.5">
                O Foco Certo
              </div>
<div className="w-full h-48 rounded-2xl border border-white/10 bg-[#0a0a0a] flex items-center justify-center p-6 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="w-full max-w-[260px] h-14 rounded-full bg-white text-black flex items-center justify-center gap-3 text-base font-medium shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500">
                  Gerar Link de Cobrança
                  <i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
</div>
<div>
<h3 className="text-xl font-normal text-white">Solução Direta</h3>
<p className="text-base text-white/60 mt-2">
                  Foco no atalho para o resultado real
                </p>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
