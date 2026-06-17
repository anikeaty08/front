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



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                entry.target.classList.add('is-visible');
              }, i * 100);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('main h1, main h2, main h3, main p, main button, main a.btn, main .group, main .grid > div, footer h1, footer a, footer p, footer span').forEach(el => {
          if (!el.closest('.animate-marquee') && !el.closest('script') && !el.closest('style')) {
            el.classList.add('reveal-on-scroll');
            observer.observe(el);
          }
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
      

<header className="border-dashed sticky bg-[#000000] w-full z-50 top-0 backdrop-blur-md">
<div className="grid grid-cols-12 h-16 sm:h-20">

<div className="col-span-4 hidden md:flex items-center">
<a className="flex items-center justify-center hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide h-full border-white/10 border-r pr-8 pl-8 font-geist" href="#solucoes">
            SOLUÇÕES
          </a>
<a className="h-full px-8 flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 font-geist" href="#beneficios">
            BENEFÍCIOS
          </a>
<a className="h-full px-8 flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 font-geist" href="#sobre">
            SOBRE
          </a>
</div>

<div className="col-span-2 md:hidden flex items-center pl-6 border-r border-dashed border-white/10">
<svg className="lucide lucide-menu w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="col-span-8 md:col-span-4 flex relative items-center justify-center">
<div className="flex items-center gap-2">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="text-[#4ade80] w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 11 3-3 3 3"></path>
<path d="M9 11v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5"></path>
<circle cx="12" cy="14" fill="currentColor" r="1.5" stroke="none"></circle>
</svg>
</div>
<span className="font-geist font-semibold text-white tracking-tight text-lg">LOCUS</span>
</div>
</div>

<div className="col-span-2 md:col-span-4 flex items-center justify-end">
<a className="h-full px-8 hidden md:flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 border-l font-geist" href="#">
            LOGIN
          </a>
<a className="h-full w-full md:w-auto px-8 flex items-center justify-center text-xs font-medium tracking-wide text-white hover:text-[#4ade80] transition-colors gap-2 font-geist" href="#contato">
            CONTATO
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<main className="flex-grow flex flex-col">

<div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-white/10 border-b overflow-hidden">

<div className="relative flex flex-col lg:px-20 lg:py-24 pt-16 pr-6 pb-16 pl-6 justify-center border-dashed border-white/10 border-r bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-900/10 via-[#05080A] to-[#05080A] reveal-on-scroll">
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="flex h-2 w-2 rounded-full bg-[#4ade80]"></span>
<p className="text-[#4ade80] font-mono text-xs tracking-widest uppercase font-geist text-white/70 reveal-on-scroll">
                Plataforma Web Locus v1.0
              </p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 font-geist font-light tracking-tighter reveal-on-scroll">
              Gestão inteligente
              <br/>
              de alojamentos
              <br/>
<span className="font-geist font-light tracking-tighter text-white/70">
                corporativos.
              </span>
</h1>
<p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-12 font-light font-geist text-white/80 reveal-on-scroll">
              Um "relógio de ponto" para hospedagem. Validação de presença via geolocalização web para sua empresa pagar apenas pelo uso real.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 border border-dashed border-white/10 max-w-lg rounded-sm overflow-hidden">
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-[#4ade80]/5 transition-all duration-300 border-b sm:border-b-0 sm:border-r border-dashed border-white/10 reveal-on-scroll">
<span className="text-[#4ade80] font-medium tracking-wide text-xs uppercase font-geist">
                  Agendar Demo
                </span>
</button>
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-white/5 transition-all duration-300 reveal-on-scroll">
<span className="text-white font-medium tracking-wide text-xs uppercase font-geist">
                  Como Funciona
                </span>
<svg className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>


<div className="group/hero-visual overflow-hidden reveal-on-scroll bg-[#05080A] z-10 relative flex items-center justify-center min-h-[500px] lg:min-h-auto transition-colors duration-700 hover:bg-[#4ade80]/[0.02]">

<div className="absolute inset-0 bg-gradient-to-br from-[#4ade80]/5 via-[#05080A] to-[#05080A] opacity-40 group-hover/hero-visual:opacity-100 group-hover/hero-visual:from-[#4ade80]/20 transition-all duration-700"></div>

<div className="scene-3d w-full h-full flex items-center justify-center relative">

<div className="map-plane w-80 h-80 sm:w-96 sm:h-96 bg-[#0E1216]/90 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover/hero-visual:border-[#4ade80]/40 group-hover/hero-visual:shadow-[0_0_100px_rgba(74,222,128,0.15)]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] group-hover/hero-visual:bg-[linear-gradient(rgba(74,222,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.1)_1px,transparent_1px)] transition-all duration-500"></div>

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 transform -translate-y-10 group-hover/hero-visual:bg-[#4ade80]/20 transition-colors duration-500"></div>
<div className="absolute top-0 left-1/2 h-full w-[2px] bg-white/5 transform translate-x-4 group-hover/hero-visual:bg-[#4ade80]/20 transition-colors duration-500"></div>
<div className="absolute top-1/4 right-0 w-2/3 h-[2px] bg-white/5 transform rotate-45 group-hover/hero-visual:bg-[#4ade80]/20 transition-colors duration-500"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">

<div className="absolute w-32 h-32 rounded-full border border-[#4ade80]/20 bg-[#4ade80]/5 pulse-circle group-hover/hero-visual:bg-[#4ade80]/10 transition-colors duration-500"></div>
<div className="absolute w-32 h-32 rounded-full border border-[#4ade80]/10 group-hover/hero-visual:border-[#4ade80]/30 transition-colors duration-500"></div>

<div className="relative z-20 transform -translate-y-4">
<svg className="drop-shadow-[0_10px_10px_rgba(74,222,128,0.3)]" fill="#4ade80" height="32" stroke="#05080A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" fill="#05080A" r="3"></circle></svg>
</div>

<div className="absolute z-30 bip-badge">
<div className="bg-white text-black px-3 py-1 rounded text-[10px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1 whitespace-nowrap">
<span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full"></span>
                        Bip Confirmado
                     </div>
<div className="w-2 h-2 bg-white rotate-45 absolute bottom-[-4px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10 user-dot">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] border-2 border-[#05080A]"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] text-white/50 font-mono whitespace-nowrap">Colaborador</div>
</div>
</div>

<div className="absolute bottom-20 right-20 bg-[#0E1216] border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md hidden sm:block animate-bounce group-hover/hero-visual:border-[#4ade80]/30 transition-colors duration-500" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-[#4ade80]"></div>
<span className="text-[10px] text-white font-medium uppercase group-hover/hero-visual:text-[#4ade80] transition-colors duration-500">Endereço Ativo</span>
</div>
<div className="text-[10px] text-white/50 font-mono">Lat: -23.5505<br/>Lng: -46.6333</div>
</div>
</div>
</div>
</div>

<div className="border-dashed bg-[#05080A] border-white/10 border-b group/footer">
<div className="max-w-screen-2xl mr-auto ml-auto">
<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-12 md:col-span-2 py-8 px-6 md:px-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex items-center bg-[#05080A] relative z-20 reveal-on-scroll">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase font-geist">
                CLIENTES PARCEIROS
              </span>
</div>

<div className="col-span-12 md:col-span-10 relative overflow-hidden h-20 flex items-center reveal-on-scroll" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee">

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter font-geist">
                    CONSTRUTORA ALFA
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    GRUPO ENGENHARIA
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    LOGÍSTICA BRASIL
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    INFRA CORP
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold tracking-tighter text-lg font-geist">
                    PETROSERV
                  </span>
</div>

<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-lg font-semibold text-white tracking-tighter font-geist">
                    CONSTRUTORA ALFA
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    GRUPO ENGENHARIA
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    LOGÍSTICA BRASIL
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-medium tracking-tighter text-lg font-geist">
                    INFRA CORP
                  </span>
</div>
<div className="w-56 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-40 hover:opacity-100 transition-opacity">
<span className="text-white font-semibold tracking-tighter text-lg font-geist">
                    PETROSERV
                  </span>
</div>
</div>
</div>
</div>
</div>
<style>
          @keyframes marquee-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          .animate-marquee {
              display: flex;
              width: fit-content;
              animation: marquee-scroll 40s linear infinite;
          }
          .group\/footer:hover .animate-marquee {
              animation-play-state: paused;
          }
        </style>
</div>

<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24" id="solucoes">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#4ade80] tracking-widest font-geist">
                    01. Soluções
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Controle total da
                  <span className="">hospedagem.</span>
</h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll">
                  Da entrada do colaborador à saída, garantimos transparência e economia no alojamento da sua equipe.
                </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto hover:bg-slate-200 transition-colors font-medium text-black font-geist text-center bg-white w-full rounded-none pt-3 pr-6 pb-3 pl-6" href="#contato">
                  Falar com Consultor
                </a>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
</div>
<section className="border-dashed z-10 bg-[#05080A] border-white/10 border-b relative">
<div className="grid grid-cols-1 md:grid-cols-12 border-dashed border-white/10 border-b">
<div className="col-span-12 md:col-span-4 md:p-12 md:border-b-0 md:border-r border-dashed flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 justify-center reveal-on-scroll">
<div className="flex items-center gap-2 mb-4">
<svg className="w-4 h-4 text-[#4ade80]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<span className="text-[#4ade80] font-mono text-xs tracking-widest uppercase font-geist">
                    Filosofia Core
                  </span>
</div>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tighter mb-4 font-geist reveal-on-scroll">
                  Pague pelo uso real.
                </h2>
<p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll">
                  Elimine custos com diárias não utilizadas. Nosso sistema valida a presença física através do Bip para confirmar a hospedagem.
                </p>
</div>
<div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 reveal-on-scroll">

<div className="p-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden reveal-on-scroll">
<div className="mb-6 relative h-24 w-full bg-slate-900/50 rounded border border-white/5 flex flex-col p-3 overflow-hidden">

<svg className="w-full h-full text-slate-600" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M10 20 H90" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="0.5"></path>
<circle cx="20" cy="20" fill="#4ade80" r="2"></circle>
<circle cx="50" cy="20" fill="#4ade80" r="2"></circle>
<circle cx="80" cy="20" fill="#4ade80" r="2"></circle>
<path d="M20 20 Q 35 5 50 20 T 80 20" fill="none" opacity="0.5" stroke="#4ade80" strokeWidth="1"></path>
</svg>

<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#4ade80]/10 blur-[40px] rounded-full group-hover:bg-[#4ade80]/20 transition-colors"></div>
</div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                    Geolocalização Ativa
                  </h3>
<p className="text-xs leading-relaxed font-geist reveal-on-scroll">
                    O Bip é realizado via navegador do colaborador, validando se ele está no endereço cadastrado pelo administrador.
                  </p>
</div>

<div className="p-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden reveal-on-scroll">
<div className="mb-6 relative h-24 w-full flex items-center justify-center">

<div className="relative w-full h-full flex items-center justify-center">
<div className="w-8 h-8 rounded bg-[#0E1216] border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(74,222,128,0.1)]">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v6"></path><path d="M12 18h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h4"></path><path d="m8 15 4 4 4-4"></path></svg>
</div>
<div className="absolute top-4 right-10 w-2 h-2 bg-[#4ade80] rounded-full animate-pulse"></div>
</div>
</div>
<h3 className="text-white font-medium mb-2 flex items-center gap-2 font-geist reveal-on-scroll">
                    Controle de Presença
                  </h3>
<p className="text-xs leading-relaxed font-geist text-white/70 reveal-on-scroll">
                    Confirmação automática de estadia baseada nos Bips, eliminando processos manuais e erros de contagem.
                  </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-dashed divide-white/10 border-dashed border-white/10 border-b">

<div className="flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors pt-6 pr-6 pb-6 pl-6 gap-x-3 gap-y-3 reveal-on-scroll">
<svg className="w-5 h-5 text-slate-400 group-hover:text-[#4ade80] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Gestão de Pessoal
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll">
                    Controle individualizado.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="w-5 h-5 text-slate-400 group-hover:text-[#4ade80] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Qualidade
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll">
                    Avaliação das instalações.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="w-5 h-5 text-slate-400 group-hover:text-[#4ade80] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Tempo Real
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll">
                    Dashboards ao vivo.
                  </p>
</div>
</div>

<div className="p-6 flex flex-col gap-3 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<svg className="w-5 h-5 text-slate-400 group-hover:text-[#4ade80] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<div className="">
<h4 className="text-white text-sm font-medium font-geist">
                    Redução de Custos
                  </h4>
<p className="text-[10px] text-slate-500 mt-1 font-geist reveal-on-scroll">
                    Economia comprovada.
                  </p>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24" id="beneficios">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#4ade80] tracking-widest font-geist">
                    02. Diferenciais
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Precisão em
                  <span className="">cada Bip.</span>
</h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll">
                  Tecnologia que transforma alojamentos em ativos gerenciáveis, não apenas custos.
                </p>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
</div>
<section className="border-dashed z-10 bg-[#05080A] border-white/10 border-b relative">

<div className="grid grid-cols-1 md:grid-cols-12 border-b border-dashed border-white/10">

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-white/10 relative h-[360px] overflow-hidden group border-dashed reveal-on-scroll">

<div className="absolute inset-0 flex items-center justify-center -translate-y-16 opacity-80">

<div className="absolute w-[280px] h-[280px] rounded-full border border-white/5"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-white/5"></div>
<div className="absolute w-[120px] h-[120px] rounded-full border border-white/5"></div>

<div className="absolute w-[280px] h-[280px] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg_240deg,rgba(74,222,128,0.2)_360deg)] animate-[spin_4s_linear_infinite]"></div>

<div className="absolute top-10 left-10 flex items-center gap-2 z-10">
<div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_10px_#4ade80]"></div>
<span className="text-[10px] text-[#4ade80] uppercase tracking-widest font-geist font-medium">
                      Monitoramento Web
                    </span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-[#05080A] via-[#05080A]/80 to-transparent pt-20">
<h3 className="text-white font-medium text-lg mb-2 font-geist reveal-on-scroll">
                    CONTROLE DE ENDEREÇOS
                  </h3>
<p className="text-xs leading-relaxed font-geist pr-4 text-white/70 reveal-on-scroll">
                    O administrador cadastra os endereços dos alojamentos. O sistema valida se o Bip foi feito no local correto.
                  </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 border-b md:border-b-0 md:border-r border-dashed border-white/10 p-8 flex flex-col h-[360px] reveal-on-scroll">
<div className="mb-6">
<h3 className="text-white font-medium text-lg mb-2 font-geist reveal-on-scroll">
                    ALERTAS
                  </h3>
<p className="text-xs leading-relaxed font-geist text-white/70 reveal-on-scroll">
                    Fique atualizado com notificações instantâneas sobre Bips, lotação e problemas.
                  </p>
</div>
<div className="flex-1 space-y-4">

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center text-[#4ade80]">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] font-semibold text-[#4ade80] uppercase tracking-wide font-geist">
                          Bip Confirmado
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono">
                        AGORA
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#4ade80] shadow-[0_0_10px_#4ade80]"></div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors">
<svg className="lucide lucide-alert-triangle" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<span className="text-[10px] font-semibold text-slate-500 group-hover:text-white uppercase tracking-wide font-geist transition-colors">
                          Capacidade Máxima
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono">
                        2H ATRÁS
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-white/20 transition-colors">
<svg className="lucide lucide-map-pin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-[10px] font-semibold text-slate-500 group-hover:text-white uppercase tracking-wide font-geist transition-colors">
                          Presença Confirmada
                        </span>
</div>
<span className="text-[10px] text-slate-600 font-mono">
                        1D ATRÁS
                      </span>
</div>
<div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/4 bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 h-[360px] relative bg-[#05080A] reveal-on-scroll">

<div className="absolute inset-0 grid grid-cols-4 grid-rows-4 divide-x divide-y divide-white/5 border-b border-white/5">
<div className="bg-white/[0.01] reveal-on-scroll"></div>
<div className="bg-white/[0.01] reveal-on-scroll"></div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-home" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
</div>
</div>

<div className="bg-white/[0.01] reveal-on-scroll"></div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<div className="flex items-center justify-center relative reveal-on-scroll">

<div className="absolute inset-0 bg-[#4ade80]/20 blur-[30px]"></div>
<div className="relative z-10 text-[#4ade80]">
<svg className="lucide lucide-layout-dashboard" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded bg-[#15191E] flex items-center justify-center text-[8px] font-bold text-slate-600 tracking-wider">
                      Locus
                    </div>
</div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-file-spreadsheet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-600">
<svg className="lucide lucide-dollar-sign" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
</div>

<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
</div>
<div className="bg-white/[0.01] reveal-on-scroll"></div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
</div>
<div className="flex items-center justify-center bg-white/[0.01] reveal-on-scroll">
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<div className="col-span-12 md:col-span-8 md:border-b-0 md:border-r border-dashed overflow-hidden border-white/10 border-b pt-16 pr-8 pb-8 pl-8 relative reveal-on-scroll">

<div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-end gap-[1px] opacity-100 pointer-events-none pr-8">
<div className="w-24 h-[20%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10"></div>
<div className="w-24 h-[40%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10"></div>
<div className="w-24 h-[60%] bg-white/[0.02] border-t border-l border-r border-dashed border-white/10"></div>
<div className="w-24 h-[80%] bg-[#4ade80]/5 border-t border-l border-r border-dashed border-[#4ade80]/30 relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[#4ade80]">
<svg fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
</div>
</div>
<div className="relative z-10 mt-12">
<div className="text-[64px] leading-none font-light text-[#4ade80] tracking-tighter font-geist mb-2">
                    25%
                  </div>
<h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                    Redução de Custos
                  </h3>
<p className="text-sm leading-relaxed font-geist max-w-md text-white/70 reveal-on-scroll">
                    Nossos clientes experimentam uma redução média de 25% nos custos de alojamento nos primeiros 6 meses de uso do Locus.
                  </p>
</div>
</div>

<div className="col-span-12 md:col-span-4 p-8 flex flex-col justify-end pt-16 h-full min-h-[300px] reveal-on-scroll">
<div className="mt-auto">
<h3 className="text-white font-medium text-lg mb-2 uppercase tracking-wide font-geist reveal-on-scroll">
                    Alcance Nacional
                  </h3>
<p className="text-sm leading-relaxed font-geist text-white/70 reveal-on-scroll">
                    Presente em grandes obras e centros corporativos em todo o Brasil. Gestão centralizada, independente da localização.
                  </p>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24" id="sobre">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#4ade80] tracking-widest font-geist">
                    03. Relatórios
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Gestão baseada em
                  <span className="">dados.</span>
</h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll">
                   Informações detalhadas sobre a utilização dos alojamentos e comportamento das equipes.
                </p>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 font-geist items-stretch">

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-[#4ade80] mb-6">
<svg className="lucide lucide-trending-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
<span className="text-xs font-semibold tracking-wide uppercase">
                    Otimização
                  </span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Redução de Despesas</h3>
<p className="text-sm leading-relaxed text-white/70 min-h-[100px] reveal-on-scroll">
                  Com o controle de Bip, identifique diárias pagas sem utilização real e ajuste seus custos.
                </p>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-[#4ade80] mb-6">
<svg className="lucide lucide-shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-semibold tracking-wide uppercase">
                    Compliance
                  </span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Auditoria de Presença</h3>
<p className="text-sm leading-relaxed text-white/70 min-h-[100px] reveal-on-scroll">
                   Garantia de que o colaborador está hospedado no local correto definido pela empresa.
                </p>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#05080A] reveal-on-scroll">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent"></div>
</div>
<div className="relative flex-1 flex flex-col p-10">
<div className="flex items-center gap-2 text-[#4ade80] mb-6">
<svg className="lucide lucide-globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-xs font-semibold tracking-wide uppercase">
                    Tecnologia
                  </span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Web &amp; GPS</h3>
<p className="text-sm leading-relaxed text-white/70 min-h-[100px] reveal-on-scroll">
                  Uso da geolocalização do navegador para validar acessos sem necessidade de instalação de apps.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#05080A] border-white/10 border-b pt-24 pb-24" id="contato">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 relative">
<div aria-hidden="true" className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 z-10 relative">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="uppercase text-xs font-semibold text-[#4ade80] tracking-widest font-geist">
                    04. Contato
                  </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tighter mb-4 font-geist leading-[1.1] reveal-on-scroll">
                  Pronto para otimizar
                  <span className="">seus custos?</span>
</h2>
<p className="text-lg font-geist max-w-md text-white/70 reveal-on-scroll">
                   Fale com nossa equipe e agende uma demonstração gratuita.
                </p>
</div>
</div>
<div className="mt-12 h-[1px] w-full bg-gradient-to-r from-slate-800 via-slate-700 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="flex flex-col group hover:bg-white/[0.04] transition-colors duration-300 h-full border-white/10 border rounded-none p-10 relative reveal-on-scroll">
<div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-8">
<span className="inline-block px-3 py-1 text-xs font-medium text-slate-300 border border-white/10 rounded bg-white/5 group-hover:text-[#4ade80] group-hover:border-[#4ade80] group-hover:bg-[#4ade80]/10 transition-colors duration-300 font-geist">
                  Corporativo
                </span>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight font-geist">
                  Empresas
                </span>
</div>
<p className="text-white/70 text-sm mb-8 font-geist font-light reveal-on-scroll">
                Para construtoras e grandes empresas que precisam gerir alojamentos de colaboradores.
              </p>
<button className="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#4ade80] group-hover:text-black group-hover:border-[#4ade80] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">
                Falar com Vendas
              </button>
<div className="mt-auto">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-white/70 text-sm font-light font-geist">Relatórios de Presença</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-white/70 text-sm font-light font-geist">Histórico de Ocupação</span>
</li>
</ul>
</div>
</div>

<div className="flex flex-col group hover:bg-white/[0.04] transition-colors duration-300 h-full border-white/10 border rounded-none p-10 relative reveal-on-scroll">
<div className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="mb-8">
<span className="inline-block px-3 py-1 text-xs font-medium text-slate-300 border border-white/10 rounded bg-white/5 group-hover:text-[#4ade80] group-hover:border-[#4ade80] group-hover:bg-[#4ade80]/10 transition-colors duration-300 font-geist">
                  Gestão
                </span>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight font-geist">
                  Administradores
                </span>
</div>
<p className="text-white/70 text-sm mb-8 font-geist font-light reveal-on-scroll">
                Cadastre os endereços dos alojamentos permitidos e gerencie o raio de validação do Bip.
              </p>
<button className="w-full py-4 mb-10 rounded-lg border border-white/10 bg-transparent text-white group-hover:bg-[#4ade80] group-hover:text-black group-hover:border-[#4ade80] transition-all duration-300 text-sm font-medium font-geist reveal-on-scroll">
                Cadastrar Endereços
              </button>
<div className="mt-auto">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-white/70 text-sm font-light font-geist">Gestão de Locais</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-white/70 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="text-white/70 text-sm font-light font-geist">Definição de Raio (GPS)</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-dashed bg-[#05080A] border-white/10 border-t pt-20 pb-10">
<div className="max-w-6xl mx-auto w-full flex flex-col font-geist">

<div className="relative bg-[#4ade80] text-black w-full overflow-hidden border-x border-t border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none">
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="border-r border-dashed border-black/10 h-full"></div>
<div className="h-full"></div>
</div>
<div className="relative z-10 px-6 py-16 md:px-12 md:py-20 flex flex-col justify-between min-h-[400px]">

<a className="group flex items-start justify-between w-full mb-24 md:mb-32 reveal-on-scroll" href="mailto:contato@locus.app">
<span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none font-semibold tracking-tighter break-all reveal-on-scroll">
                CONTATO@LOCUS.APP
              </span>
<div className="pt-2 md:pt-6">
<svg className="w-10 h-10 md:w-20 md:h-20 transform group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</a>

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 md:text-base leading-relaxed z-20 text-sm font-medium relative gap-x-12 gap-y-12">

<div className="flex flex-col gap-x-4 gap-y-4">
<p className="font-semibold reveal-on-scroll">+55 (11) 9999-9999</p>
<p className="max-w-[200px] text-black/80 reveal-on-scroll">
                  Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                </p>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Produto
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Funcionalidades
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Para Empresas
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Para Alojamentos
                  </a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Legal
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Termos de Uso
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Privacidade
                  </a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="block text-black/50 font-semibold tracking-tight reveal-on-scroll">
                  Social
                </span>
<div className="flex flex-col gap-2">
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    LinkedIn
                  </a>
<a className="hover:text-black/60 transition-colors reveal-on-scroll" href="#">
                    Instagram
                  </a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[#05080A] text-white w-full overflow-hidden border-x border-b border-dashed border-white/10">

<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none opacity-20">
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="border-r border-dashed border-white/20 h-full"></div>
<div className="h-full"></div>
</div>

<div className="relative z-10 w-full flex justify-center items-end leading-none select-none pt-12">
<h1 className="text-[24vw] md:text-[20rem] font-semibold tracking-tighter text-center leading-[0.75] mb-[-0.08em] mix-blend-screen text-white reveal-on-scroll">
              LOCUS
            </h1>
</div>
</div>
</div>
</footer>



    </>
  );
}
