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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Lucide Icons
      lucide.createIcons();

      // Scroll Animation Observer
      (function () {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("animate");
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

          document.querySelectorAll(".animate-on-scroll").forEach((el) => {
              observer.observe(el);
          });
      })();

      // Quote Reveal Logic
      (function () {
          const section = document.querySelector('.quoteRevealSection');
          const target = section ? section.querySelector('.quoteReveal') : null;
          const words = section ? section.querySelectorAll('.quote-word') : [];

          if (!section || !target || words.length === 0) return;

          // Initialize all words as dimmed
          words.forEach(word => {
              word.style.color = 'rgb(64 64 64)'; // neutral-700
          });

          function updateWordReveal() {
              const rect = target.getBoundingClientRect();
              const vh = window.innerHeight || document.documentElement.clientHeight;
              const elementCenter = rect.top + rect.height / 2;
              const viewportCenter = vh / 2;

              // Logic: Reveal words as element passes center of screen
              const distanceFromCenter = elementCenter - viewportCenter;
              // Normalize roughly between -300 and 300
              const range = 400;
              let progress = 1 - ((distanceFromCenter + range/2) / range);
              progress = Math.max(0, Math.min(1, progress));

              // Invert logic slightly for better scroll feel: reveal as it enters, unreveal if scrolling back up
              // Actually, let's keep it simple: reveal based on scroll position relative to element top
              const scrollProgress = Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.5)));

              const wordsToReveal = Math.floor(scrollProgress * words.length);

              words.forEach((word, index) => {
              if (index < wordsToReveal) {
                  word.style.color = 'rgb(255 255 255)';
              } else {
                  word.style.color = 'rgb(64 64 64)';
              }
              });
          }

          window.addEventListener('scroll', updateWordReveal, { passive: true });
          window.addEventListener('resize', updateWordReveal);
          updateWordReveal();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-50 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div>
</div>


<nav className="fixed z-50 bg-[#050505]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="bg-center text-sm font-semibold text-white tracking-tight w-[160px] h-[45px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7e4549-14c2-47c7-a6de-470e91e4b159_800w.png)] bg-cover"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#courses">
            Služby
          </a>
<a className="hover:text-white transition-colors" href="#integrations">
            Architektura
          </a>
<a className="hover:text-white transition-colors" href="#community">
            Operátoři
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Retainer
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">
            Klientská zóna
          </a>
<button className="relative border-gradient bg-transparent hover:bg-white/10 transition-colors text-xs font-semibold text-white rounded-full px-4 py-1.5">
            Zahájit audit
          </button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">

<div className="-translate-x-1/2 blur-[100px] pointer-events-none -z-10 bg-green-900/20 w-[1000px] h-[400px] rounded-full absolute top-0 left-1/2" style={{}}></div>
<style className="">
        @keyframes fadeInSlide {
          0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        .animate-hero-element { opacity: 0; animation-fill-mode: forwards; }
        .animate-badge { animation: fadeInSlide 0.6s ease-out 0.2s forwards; }
        .animate-title-1 { animation: fadeInSlide 0.8s ease-out 0.4s forwards; }
        .animate-title-2 { animation: fadeInSlide 0.8s ease-out 0.6s forwards; }
        .animate-description { animation: fadeInSlide 0.8s ease-out 0.8s forwards; }
        .animate-install { animation: fadeInSlide 0.8s ease-out 1.0s forwards; }
        .animate-terminal { animation: fadeInSlide 0.8s ease-out 1.2s forwards; }
      </style>
<div className="sm:px-6 lg:px-8 flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex animate-hero-element animate-badge mb-6 items-center">
<div className="inline-flex gap-2 text-[11px] font-medium text-green-300 bg-green-500/10 border-green-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">Red Team Report: Nové vektory útoku pro rok 2026</div>
</div>

<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] animate-hero-element animate-title-1 text-5xl font-medium text-white tracking-tighter mb-6">Vaše data. Vaše pravidla. <span className="text-green-300"></span> <br className="hidden sm:block"/> <span className="text-[#ffffff]"><span className="text-green-300">Absolutní kontrola</span></span></h1>

<p className="sm:text-lg leading-relaxed animate-hero-element animate-description text-base text-neutral-400 max-w-2xl mt-4 mr-auto ml-auto">
Strategická kyberbezpečnost pro horní 1 % trhu. Stavíme neprůstřelné digitální ekosystémy pro leadery, kteří chápou, že informace jsou nejcennější měnou 21. století.</p>

<div className="flex flex-col sm:flex-row gap-6 mt-10 gap-x-6 gap-y-6 items-center justify-center animate-hero-element animate-install">
<button className="shiny-cta group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 rounded-full relative shadow-2xl">
<style className="">
              @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
              @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
              @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
              @property --gradient-shine { syntax: "<color>"; initial-value: #bbf7d0; inherits: false; }

              .shiny-cta {
                  --gradient-angle: 0deg;
                  --gradient-angle-offset: 0deg;
                  --gradient-percent: 20%;
                  --gradient-shine: #bbf7d0;
                  --gradient-border: #22c55e;
                  font-family: inherit;
                  color: #ffffff;
                  background: linear-gradient(#050505, #050505) padding-box,
                              conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                              transparent 0%,
                              var(--gradient-border) 5%,
                              var(--gradient-shine) 15%,
                              var(--gradient-border) 30%,
                              transparent 40%,
                              transparent 100%) border-box;
                  border: 1px solid transparent;
                  box-shadow: inset 0 0 0 1px rgba(34, 197, 94, 0.1), 0 0 20px -5px rgba(34, 197, 94, 0.3);
                  animation: border-spin 3s linear infinite;
              }

              @keyframes border-spin {
                  to { --gradient-angle: 360deg; }
              }

              .shiny-cta::after {
                  content: '';
                  position: absolute;
                  inset: 0;
                  background: radial-gradient(circle at 50% -20%, rgba(34, 197, 94, 0.4), transparent 60%);
                  opacity: 0.5;
                  pointer-events: none;
                  z-index: 0;
                  transition: opacity 0.3s ease;
              }

              .shiny-cta:hover::after {
                  opacity: 0.8;
              }
            </style>
<div className="z-10 flex gap-3 pt-1 pr-6 pb-1 pl-1 relative gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/10 group-hover:text-white transition-all duration-300 shadow-inner text-green-300 group-hover:bg-green-500 group-hover:border-green-400">
<svg className="transition-transform duration-300 group-hover:rotate-12" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.21 1.21 0 0 0 1.72 0L21.64 5.36a1.21 1.21 0 0 0 0-1.72Z"></path>
<path d="M19 14v4"></path>
<path d="M21 16h-4"></path>
</svg>
</div>
<span className="transition-colors group-hover:text-green-100 text-sm font-semibold text-white tracking-tight">Převzít kontrolu</span>
</div>
</button>
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#courses">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-neutral-400 bg-gradient-to-b from-neutral-900 to-black w-full h-full rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">Naše filozofie <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
</a>
</div>

<div className="animate-hero-element animate-terminal w-full max-w-5xl mt-20 mr-auto ml-auto relative">
<div className="overflow-hidden sm:p-8 text-left bg-[#0A0A0A]/95 rounded-2xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center relative z-10">

<div className="flex flex-col h-full justify-between">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase mb-4 border-green-500/20 bg-green-500/10 text-green-400">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-400"></span>
                    Platform
                  </div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-white tracking-tighter font-normal">
                    Architektura navržená pro
                    <span className="text-[#ffffff]">nulovou důvěru.</span>
</h2>

<div className="mt-10 relative pl-2">

<div className="absolute left-[11px] top-2 bottom-6 w-px bg-gradient-to-b to-transparent opacity-30 from-green-500 via-teal-500"></div>
<div className="flex flex-col gap-8">

<div className="flex gap-4 items-start relative group cursor-default">
<div className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 relative transition-colors border-green-500/30 bg-green-500/10 group-hover:border-green-400/50 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_5px_rgba(34,197,94,0.8)]"></div>
</div>
<div className="pt-0.5">
<span className="text-sm font-medium text-white transition-colors group-hover:text-green-300">
                            Zero Trust Design
                          </span>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-xs">
                            Návrh sítě, kde je každý podezřelý. I když útočník
                            prolomí server, zbytek sítě zůstává neviditelný.
                          </p>
</div>
</div>

<div className="flex gap-4 items-start relative group cursor-default">
<div className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 relative transition-colors border-teal-500/30 bg-teal-500/10 group-hover:border-teal-400/50">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
</div>
<div className="pt-0.5">
<span className="text-sm font-medium text-white transition-colors group-hover:text-teal-300">
                            Live sandboxes
                          </span>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-xs">
                            Zero-config environments for React, Python, and Rust
                            running directly in-browser.
                          </p>
</div>
</div>

<div className="flex gap-4 items-start relative group cursor-default">
<div className="flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center z-10 relative transition-colors border-lime-500/30 bg-lime-500/10 group-hover:border-lime-400/50">
<div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
</div>
<div className="pt-0.5">
<span className="text-sm font-medium text-white transition-colors group-hover:text-lime-300">
                            Incident Response
                          </span>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed max-w-xs">
                            Zásahová jednotka 24/7. Okamžitá mitigace, forenzní
                            analýza a vykopnutí útočníka ze systému.
                          </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-0 pt-4">
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all active:scale-95 text-sm font-medium text-black bg-white rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                    Protokoly ochrany
                  </a>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4 relative h-full">

<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group bg-neutral-900 animate-float-slow">
<img alt="Learning Interface" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold font-mono border rounded pt-0.5 pr-2 pb-0.5 pl-2 backdrop-blur-md text-green-200 bg-green-500/20 border-green-500/30">
                        NETWORK
                      </span>
<svg className="text-white/50 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
<p className="text-white text-sm font-medium mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Neural Networks
                    </p>
</div>
</div>

<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group bg-neutral-900 mt-8 animate-float-medium delay-500">
<img alt="Code Analysis" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono font-semibold border px-2 py-0.5 rounded backdrop-blur-md text-teal-200 bg-teal-500/20 border-teal-500/30">
                        ANALYSIS
                      </span>
<svg className="text-white/50 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
<p className="text-white text-sm font-medium mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      System Design
                    </p>
</div>
</div>

<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group bg-neutral-900 -mt-8 animate-float-slow delay-1000">
<img alt="Collaboration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono font-semibold border px-2 py-0.5 rounded backdrop-blur-md text-lime-200 bg-lime-500/20 border-lime-500/30">
                        COLLAB
                      </span>
<svg className="text-white/50 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
<p className="text-white text-sm font-medium mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Team Workflows
                    </p>
</div>
</div>

<div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 group bg-neutral-900 animate-float-fast delay-1500">
<img alt="Security Architecture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono font-semibold text-cyan-200 bg-cyan-500/20 border border-cyan-500/30 px-2 py-0.5 rounded backdrop-blur-md">
                        SECURITY
                      </span>
<svg className="text-white/50 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
<p className="text-white text-sm font-medium mt-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Zero Trust Architecture
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 hidden lg:block animate-hero-element" style={{animationDelay: '1.4s'}}>
<div className="w-48 p-4 rounded-xl bg-[#0A0A0A]/90 border border-white/10 shadow-xl backdrop-blur text-left">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500/20 text-green-400">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m17 5-5-3-5 3"></path>
<path d="m17 19-5 3-5 3"></path>
</svg>
</div>
<span className="text-xs text-white font-semibold">
                  Vektor útoku
                </span>
</div>
<p className="text-xs text-neutral-400">Analýza exfiltrace</p>
</div>
</div>
<div className="absolute -left-12 bottom-32 hidden lg:block animate-hero-element" style={{animationDelay: '1.6s'}}>
<div className="text-left bg-[#0A0A0A]/90 w-48 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-xl backdrop-blur">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500/20 text-teal-400">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<span className="text-xs text-white font-semibold">
                  Zero-Day Obrana
                </span>
</div>
<p className="text-xs text-neutral-400">Aktivní monitoring</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/50 border-white/5 border-t pt-24 pb-24" id="integrations">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-on-scroll text-center animate">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 uppercase tracking-tight font-medium bg-green-400/10 text-green-300 ring-green-300/20">
<svg className="mr-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path>
<path d="M9 8V2"></path>
<path d="M15 8V2"></path>
<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
</svg>
            Ecosystem
          </span>
<h2 className="sm:text-5xl text-4xl font-semibold text-white tracking-tight mt-6 mb-4">
            Zabezpečíme váš
            <span className="text-[#ffffff]">celý ekosystém.</span>
</h2>
<p className="text-base text-neutral-400 max-w-2xl mt-3 mr-auto ml-auto">
            Propojujeme kód, infrastrukturu a lidský faktor do jednoho
            neprostupného celku. Vaše firewally jsou jen iluze bezpečí, my je
            otestujeme realitou.
          </p>
</div>
<div className="animate-on-scroll max-w-4xl mt-16 mr-auto ml-auto relative">
<div className="flex items-center justify-center gap-6 sm:gap-10 opacity-70">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</span>
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
</span>
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<rect height="9" width="3" x="7" y="7"></rect>
<rect height="5" width="3" x="14" y="7"></rect>
</svg>
</span>
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
</span>
<span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</span>
</div>
<div className="h-64 mt-12 relative">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-[896px] h-[256px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '896px', height: '256px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 900 360">

<defs>
<filter height="200%" id="glow" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M450 300 C 450 200, 300 120, 150 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="0s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>
<path d="M450 300 C 450 210, 360 130, 270 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="0.2s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 150, 420 80, 390 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="0.4s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path d="M450 300 C 450 150, 480 80, 510 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '450', strokeDashoffset: '450', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="0.6s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="450;0;450"></animate>
</path>
<path className="" d="M450 300 C 450 210, 540 130, 630 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '520', strokeDashoffset: '520', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="0.8s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="520;0;520"></animate>
</path>
<path d="M450 300 C 450 200, 600 120, 750 30" fill="none" stroke="#22c55e" strokeLinecap="round" strokeWidth="1" style={{strokeDasharray: '600', strokeDashoffset: '600', opacity: '0.3'}}>
<animate attributename="stroke-dashoffset" begin="1s" calcmode="spline" dur="4s" keysplines="0.42 0 0.58 1; 0.42 0 0.58 1" repeatcount="indefinite" values="600;0;600"></animate>
</path>

<circle cx="150" cy="30" fill="#22c55e" filter="url(#glow)" r="3">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="750" cy="30" fill="#22c55e" filter="url(#glow)" r="3">
<animate attributename="opacity" begin="1s" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
</svg>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-900 ring-1 z-10 relative ring-green-300/40">
<div className="absolute inset-0 blur-xl rounded-full bg-green-400/10"></div>
<svg className="relative z-10 text-green-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="courses">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
          Sféry vlivu
        </h2>
<p className="text-neutral-400 max-w-xl mx-auto">
          Specializované moduly pro ochranu kritických aktiv a digitální
          suverenitu.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">

<div className="group border-gradient relative rounded-2xl bg-neutral-900/40 p-1 hover:bg-neutral-900/60 transition-colors">
<div className="relative h-48 rounded-xl overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_800w.jpg"/>
<div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-widest text-white">
              OFENZIVA
            </div>
</div>
<div className="px-2 pb-4">
<h3 className="text-xl font-semibold text-white mb-2">
              Red Team Operations
            </h3>
<p className="text-sm text-neutral-400 mb-4 line-clamp-2">
              Komplexní penetrační testování včetně fyzického vniknutí a
              klonování přístupových karet.
            </p>
<div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                4h 20m
              </span>
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
                12 Lessons
              </span>
</div>
</div>
</div>

<div className="group border-gradient relative rounded-2xl bg-neutral-900/40 p-1 hover:bg-neutral-900/60 transition-colors">
<div className="relative h-48 rounded-xl overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/935f6f80-259a-48b3-bf46-64c87caac384_800w.jpg"/>
<div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-widest text-white">
              DEFENZIVA
            </div>
</div>
<div className="px-2 pb-4">
<h3 className="text-xl font-semibold text-white mb-2">
              Zero Trust Architecture
            </h3>
<p className="text-sm text-neutral-400 mb-4 line-clamp-2">
              Implementace identity-first security a mikro-segmentace pro
              eliminaci laterálního pohybu v síti.
            </p>
<div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                6h 15m
              </span>
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
                18 Lessons
              </span>
</div>
</div>
</div>

<div className="group border-gradient relative rounded-2xl bg-neutral-900/40 p-1 hover:bg-neutral-900/60 transition-colors">
<div className="relative h-48 rounded-xl overflow-hidden mb-4">
<img alt="Course" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5efdef5c-e838-47d4-8b8c-b504146ec86e_800w.webp"/>
<div className="absolute top-3 left-3 bg-black/50 backdrop-blur text-[10px] font-bold px-2 py-1 rounded border border-white/10 uppercase tracking-widest text-white">
              FORENZIKA
            </div>
</div>
<div className="px-2 pb-4">
<h3 className="text-xl font-semibold text-white mb-2">
              Incident Forensics
            </h3>
<p className="text-sm text-neutral-400 mb-4 line-clamp-2">
              Hloubková analýza průniku, trasování exfiltrace dat a rekonstrukce
              časové osy útoku.
            </p>
<div className="flex items-center gap-3 text-xs text-neutral-500 font-medium">
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                5h 30m
              </span>
<span className="flex items-center gap-1">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
                14 Lessons
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/5 bg-neutral-900/30" id="community">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="mx-auto max-w-4xl text-center animate-on-scroll">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium font-geist border-green-500/30 bg-green-500/10 text-green-300">
            Elitní síť
          </span>
<h2 className="mt-6 text-4xl sm:text-5xl tracking-tight font-medium text-white font-geist">
            Důvěra top managementu
            <span className="text-[#ffffff]">českého byznysu.</span>
</h2>
<p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto font-geist">
            Naše nejlepší referenční projekty jsou ty, o kterých se nikdo nikdy
            nedozví. Diskrétnost je naším protokolem.
          </p>
<div className="mt-8">
<button className="inline-flex items-center gap-2 rounded-full text-white px-6 py-3 text-sm font-semibold transition-colors font-geist bg-green-600 hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              Konzultovat s týmem
            </button>
</div>
</div>
<div className="relative mt-16 animate-on-scroll">
<div className="mx-auto max-w-[100vw] overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex w-max gap-4" style={{animation: 'marquee-left 60s linear infinite', willChange: 'transform'}}>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 flex-shrink-0 pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 flex-shrink-0 pr-4">
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 relative group">
<img alt="Community member" className="w-full h-20 sm:h-28 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 pb-20 quoteRevealSection animate-on-scroll" style={{'--reveal': '100%'}}>
<div className="relative overflow-hidden p-8 sm:p-12 ring-white/10 ring-1 bg-neutral-900 rounded-[2.5rem]">
<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase border-green-500/20 bg-green-500/10 text-green-500" style={{}}>
<svg className="w-3 h-3" fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
            Operativní hlášení
          </span>
</div>
<div className="relative mt-10 quoteReveal">
<p className="sm:text-5xl lg:text-6xl leading-[1.1] text-3xl font-medium tracking-tight text-center max-w-5xl mr-auto ml-auto">
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              "NEXA
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              CORE
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              smazala
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              iluzi
            </span>
<span className="quote-word transition-colors duration-500 font-serif italic" style={{color: 'rgb(64, 64, 64)'}}>
              bezpečí.
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              Jejich
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              Kill
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              Chain
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              Report
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              nám
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              ukázal,
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              že
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              naše
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              firewally
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              byly
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              jen
            </span>
<span className="quote-word transition-colors duration-500 font-serif italic" style={{color: 'rgb(64, 64, 64)'}}>
              papírová
            </span>
<span className="quote-word transition-colors duration-500" style={{color: 'rgb(64, 64, 64)'}}>
              stěna."
            </span>
</p>
</div>
<div className="mt-12 flex gap-4 items-center justify-center">
<img alt="Author avatar" className="h-12 w-12 ring-2 ring-white/10 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09b944c-c71d-4c2c-9c16-e6e662b4a9d2_320w.webp"/>
<div className="text-left">
<span className="block text-white font-semibold text-sm">
              Elena "Proxy" Svobodová
            </span>
<span className="block text-neutral-500 text-xs">
              CEO &amp; Zero Trust Strategist
            </span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/5 blur-[100px] pointer-events-none rounded-full"></div>
</div>
</section>

<section className="sm:px-6 lg:px-8 md:py-20 animate-on-scroll w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="relative pt-20">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-neutral-300/80 bg-white/5 border-white/10">
<svg className="lucide lucide-rocket h-3.5 w-3.5 text-green-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
            Start Your Transformation
          </span>
</div>
<div className="text-center max-w-3xl mt-6 mr-auto ml-auto">
<h2 className="md:text-6xl text-4xl font-semibold text-white tracking-tight">
            Ready to Transform
          </h2>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mt-1">
            Your
            <span className="bg-clip-text italic font-serif bg-gradient-to-r from-white text-transparent via-green-300 to-teal-300">
              Future?
            </span>
</h2>
<p className="mt-4 text-base md:text-lg text-neutral-400">
            Join a global collective of designers, developers, and founders
            pushing the boundaries of what's possible.
          </p>

<div className="relative inline-block group mt-8">
<button className="z-10 overflow-hidden transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:border-green-500/50 text-white bg-[#0A0A0A] border-white/20 border rounded-xl pt-3 pr-8 pb-3 pl-8 relative hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] shadow-[0_0_20px_rgba(34,197,94,0.15)]">
<span className="relative z-10 inline-flex items-center gap-2 font-semibold">
                Get Started Now
                <svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0 via-green-400"></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-8 w-40 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(34, 197, 94, 0.6), rgba(34, 197, 94, 0.3) 35%, transparent 70%)', filter: 'blur(12px)'}}></span>
</div>

<div className="mt-8 flex items-center justify-center gap-6 text-neutral-400">
<a className="group hover:text-white transition-colors flex items-center gap-2" href="mailto:hello@vertex.com">
<svg className="lucide lucide-mail h-4 w-4 transition-colors text-green-400 group-hover:text-green-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              hello@vertex.com
            </a>
</div>

<div className="relative mt-16">
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6">
<span className="block mx-auto w-80 h-10 rounded-full blur-2xl opacity-70 bg-green-500/10"></span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>

<footer className="pt-10">
<div className="flex gap-4 flex-wrap items-center justify-between">

<a className="inline-flex items-center gap-2" href="#">
<span className="text-sm font-bold text-white tracking-tight">
              Vertex
            </span>
</a>

<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-github h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>

<nav className="flex flex-wrap gap-6 text-sm text-neutral-400 mt-6 font-medium">
<a className="hover:text-white transition-colors" href="#courses">
            Služby
          </a>
<a className="hover:text-white transition-colors" href="#integrations">
            Architektura
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Retainer
          </a>
<a className="hover:text-white transition-colors" href="#community">
            Operátoři
          </a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</nav>

<div className="mt-8 flex items-center justify-between text-xs text-neutral-500 flex-wrap gap-4">
<span>© 2025 NEXA CORE. Všechna práva vyhrazena.</span>
<span>Digitální suverenita z Karlína.</span>
</div>
</footer>
</section>


    </>
  );
}
