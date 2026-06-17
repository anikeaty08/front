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
                


      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");

              // Counter Animation (smoother + slower)
              if (entry.target.hasAttribute("data-sys-counter")) {
                const target = parseInt(entry.target.getAttribute("data-sys-counter"));
                const suffix = entry.target.getAttribute("data-sys-suffix") || "";
                const duration = 2800;
                const start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const ease = 1 - Math.pow(1 - progress, 5);

                  entry.target.innerText = Math.floor(start + (target - start) * ease) + suffix;

                  if (progress < 1) requestAnimationFrame(animate);
                  else entry.target.innerText = target + suffix;
                };
                requestAnimationFrame(animate);
              }

              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "0px 0px -80px 0px" });

        document.querySelectorAll(".sys-reveal, .sys-flicker-anim, [data-sys-counter], .sys-bar-fill").forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] bg-grid"></div>

<header className="relative z-40 h-16 border-b border-zinc-800 bg-[#050505] flex items-stretch sticky top-0">

<div className="md:w-64 flex bg-[#050505] w-full border-zinc-800 border-r pr-6 pl-6 items-center justify-between">
<span className="uppercase text-xl font-bold text-white tracking-widest opacity-90">Propromote</span>
<div className="w-2 h-2 bg-orange-600 rounded-none"></div>
</div>

<nav className="hidden md:flex flex-1 items-stretch">
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<span className="text-orange-600 mr-2">01.</span>
          Strona główna
        </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="https://propromote-blog.aura.build">
<span className="text-zinc-600 mr-2">02.</span>
          Blog
        </a>
<a className="flex items-center px-8 border-r border-zinc-800 text-xs font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<span className="text-zinc-600 mr-2">03.</span>
          Kontakt
        </a>
</nav>

<div className="flex items-stretch">
</div>
</header>

<main className="relative z-10 flex-1 flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-16 border-r border-zinc-800 bg-[#050505] shrink-0">
<div className="flex-1 flex flex-col pt-32 pb-12 gap-x-12 gap-y-12 items-center justify-start">
<div className="whitespace-nowrap text-[10px] uppercase text-zinc-600 tracking-widest font-mono -rotate-90">
            Status Systemu: Aktywny
          </div>
<div className="w-px h-24 bg-zinc-800"></div>
<div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            Strefa Pro-14
          </div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-b border-zinc-800">

<div className="lg:col-span-7 md:p-16 flex flex-col bg-center bg-[#050505] border-zinc-800 border-r pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-none justify-between" style={{maskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(280deg, transparent, black 45%, black 100%, transparent)'}}>
<div className="absolute inset-0 -z-10 pointer-events-none" data-container-bg="true">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div>
</div>

<div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-zinc-700"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-zinc-700"></div>
<div className="uppercase text-xs text-orange-600 tracking-widest font-mono mb-8">// Zacznij współprace</div>
<div className="space-y-6">
<h1 className="uppercase leading-none md:text-8xl text-6xl font-medium text-white tracking-tight sys-reveal sys-rise">
                Zdominuj
                <span className="text-zinc-600">Rynek</span>
</h1>
<p className="max-w-md text-sm text-zinc-500 font-mono leading-relaxed border-l-2 border-orange-600 pl-4 sys-reveal sys-rise sys-delay-100">
                Projektujemy nowoczesne strony internetowe i wdrażamy skuteczne strategie SEO. Zoptymalizowane pod kątem najwyższych pozycji w Google i maksymalizacji konwersji.
              </p>
</div>
</div>

<div className="lg:col-span-5 relative bg-zinc-900 overflow-hidden group">

<div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-black/50 backdrop-blur-sm border border-zinc-700 p-2 text-[10px] font-mono text-white sys-flicker-anim">
                  SEO_AUDYT [LIVE]
                </div>
<iconify-icon className="text-white opacity-50" icon="solar:maximize-linear" width="20"></iconify-icon>
</div>

<div className="self-end bg-[#050505] border border-zinc-700 p-4 w-64 shadow-2xl sys-reveal sys-slide-r sys-delay-300">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
<span className="text-[10px] text-white uppercase tracking-widest">
                    Propromote Analytics
                  </span>
<div className="w-1.5 h-1.5 bg-green-500 rounded-none animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>RUCH_ORG</span>
<span className="text-white">+84%</span>
</div>
<div className="w-full bg-zinc-800 h-0.5">
<div className="w-[84%] h-full bg-orange-600"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>KONWERSJA</span>
<span className="text-white">6.4%</span>
</div>
</div>
</div>
</div>

<img className="absolute inset-0 w-full h-full object-cover contrast-100 brightness-50 [transform:scaleX(-1)_scaleY(1)] group-hover:brightness-100 group-hover:[transform:scaleX(-1.05)_scaleY(1.05)] transition-[filter,transform] duration-1000 ease-linear" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1600" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#050505]">

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 h-80 flex flex-col justify-between hover:bg-zinc-900/50 transition-colors sys-reveal sys-rise sys-delay-100">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-1">
                FIG. 01
              </span>
<iconify-icon className="text-white group-hover:text-orange-600 transition-colors" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-2">
                Strategia SEO
              </h3>
<p className="leading-relaxed text-xs text-zinc-500 font-mono">
                Zwiększamy widoczność Twojej strony w organicznych wynikach wyszukiwania dzięki sprawdzonym i bezpiecznym metodom optymalizacji.
              </p>
</div>
<div className="w-full h-px bg-zinc-800 group-hover:bg-orange-600 transition-colors origin-left duration-500"></div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-0 h-80 overflow-hidden sys-reveal sys-rise sys-delay-200">
<div className="text-[10px] uppercase text-white font-mono bg-black z-20 border-white/20 border pt-1 pr-2 pb-1 pl-2 absolute top-4 left-4">
              Optymalizacja
            </div>
<img className="w-full h-full object-cover contrast-100 brightness-50 group-hover:brightness-100 transition-all duration-500" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 border-[0.5px] border-white/10 m-4 pointer-events-none"></div>
<div className="absolute bottom-4 right-4 z-20">
<iconify-icon className="text-white animate-spin-slow" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 p-8 h-80 flex flex-col justify-between bg-zinc-900/20 sys-reveal sys-rise sys-delay-300">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-zinc-600" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<div className="mt-4">
<h3 className="text-2xl font-light text-white uppercase tracking-tight leading-8">
                Nowoczesny Web Design
              </h3>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-4 leading-relaxed">
                Projektujemy unikalne, szybkie i responsywne strony www dla Twojego biznesu.
              </p>
</div>
<div className="font-mono text-[10px] space-y-2 text-zinc-500 border-t border-zinc-800 pt-4">
<div className="flex justify-between">
<span className="">RESPONSYWNOŚĆ</span>
<span className="text-green-500">[OK]</span>
</div>
<div className="flex justify-between">
<span className="">UX/UI_DESIGN</span>
<span className="text-white">PREMIUM</span>
</div>
<div className="flex justify-between">
<span className="">SZYBKOŚĆ</span>
<span className="text-white">MAX</span>
</div>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 h-80 bg-zinc-950 flex flex-col sys-reveal sys-rise sys-delay-400">
<div className="p-4 border-b border-zinc-800 flex justify-between items-start">
<div className="flex flex-col">
<span className="text-[10px] font-mono text-orange-600 uppercase tracking-wider">
                  Wskaźnik Konwersji
                </span>
<span className="text-[8px] font-mono text-zinc-600 uppercase mt-0.5 tracking-tight">
                  Analityka i Optymalizacja
                </span>
</div>
<span className="text-[10px] font-mono text-white">98.4%</span>
</div>
<div className="flex-1 relative p-4 grid grid-cols-8 grid-rows-6 gap-1">

<div className="bg-zinc-800 col-span-1 row-span-1 opacity-20"></div>
<div className="bg-zinc-800 col-span-1 row-span-1 opacity-40"></div>
<div className="bg-orange-600 col-span-1 row-span-1 opacity-80"></div>
<div className="bg-zinc-800 col-span-1 row-span-1 opacity-20"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="h-32 flex items-end gap-1">
<div className="w-1/6 bg-zinc-800 h-[40%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[60%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[30%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[80%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-zinc-800 h-[50%] hover:bg-orange-600 transition-colors"></div>
<div className="w-1/6 bg-white h-[90%]"></div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:p-12 md:flex-row md:items-end bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-zinc-800 border-t pt-8 pr-8 pb-8 pl-8 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<div className="text-[10px] font-mono text-orange-600 mb-6 uppercase tracking-widest">
              // Nasze Usługi
            </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight mb-4 leading-none sys-reveal sys-rise">
              Kluczowe
              <span className="text-zinc-600">Rozwiązania</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-lg sys-reveal sys-rise sys-delay-100">
              Kompleksowe podejście do marketing i technologii, które przynosi wymierne korzyści dla Twojej firmy w internecie.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-[#050505] border-t border-zinc-800 border-b">

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-100">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  POZYCJONOWANIE
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Audyty i Pozycjonowanie SEO
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Zdobądź szczyt wyników wyszukiwania Google. Optymalizacja on-page, off-page i zaawansowane techniczne SEO.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-end justify-between">
<div>
<div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                  Ruch Organiczny
                </div>
<div className="text-xl text-white font-light tracking-tight">
                  +150%
                </div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b lg:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-200">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  WEB_DESIGN
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:smart-home-angle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Tworzenie Stron WWW
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Projektowanie i wdrażanie szybkich stron internetowych opartych o najnowsze standardy i technologie webowe.
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-end justify-between">
<div className="">
<div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                  Wydajność (Lighthouse)
                </div>
<div className="text-xl text-white font-light tracking-tight">
                  99/100
                </div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative border-r border-b md:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-300">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  E_COMMERCE
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Sklepy Internetowe
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Budujemy zoptymalizowane pod kątem sprzedaży sklepy online, zapewniające doskonałe doświadczenia zakupowe (UX).
              </p>
</div>
<div className="mt-8 pt-4 border-t border-zinc-800/50 flex items-end justify-between">
<div>
<div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                  Wzrost Konwersji
                </div>
<div className="text-xl text-white font-light tracking-tight">
                  +85%
                </div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group relative border-b md:border-b-0 border-zinc-800 p-8 min-h-[320px] flex flex-col justify-between hover:bg-zinc-900/30 transition-colors sys-reveal sys-rise sys-delay-400">
<div className="">
<div className="flex justify-between items-start mb-6">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider border border-zinc-800 px-2 py-1">
                  ANALYTICS
                </span>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 transition-colors" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white uppercase tracking-tight mb-3">
                Analityka i Optymalizacja CRO
              </h3>
<p className="text-xs text-zinc-500 font-mono leading-relaxed">
                Analiza zachowań użytkowników i optymalizacja współczynnika konwersji, aby maksymalizować zwrot z inwestycji.
              </p>
</div>
<div className="flex border-zinc-800/50 border-t mt-8 pt-4 items-end justify-between">
<div>
<div className="text-[9px] font-mono text-zinc-600 uppercase mb-1">
                  ROI Kampanii
                </div>
<div className="text-xl text-white font-light tracking-tight">
                  +300%
                </div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-orange-600 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col border-t border-b border-zinc-800 bg-[#050505] relative overflow-hidden">

<div className="flex flex-col md:px-12 md:flex-row md:items-end z-10 bg-gradient-to-r from-white/10 via-white/0 to-white/10 border-zinc-800 border-b pt-10 pr-8 pb-10 pl-8 relative gap-x-6 gap-y-6 justify-between">
<div className="">
<div className="text-[10px] font-mono text-orange-600 mb-4 uppercase tracking-widest">
                // Jak Działamy
              </div>
<h2 className="text-3xl md:text-4xl font-medium text-white uppercase tracking-tight leading-none">
                Proces
                <span className="text-zinc-600">Realizacji</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed max-w-xl mt-4">
                Przejrzysty proces od pierwszej koncepcji, przez projektowanie, aż po optymalizację i pozycjonowanie Twojej nowej strony.
              </p>
</div>
<div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Etap Aktywny</span>
<div className="w-px h-4 bg-zinc-800 mx-2"></div>
<span>v2024</span>
</div>
</div>

</div>
<div className="flex flex-col border-b border-zinc-800 bg-[#050505] relative">


<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] bg-[#050505]">

<div className="lg:col-span-8 border-r border-zinc-800 flex flex-col">

<div className="flex-1 p-8 md:p-12 relative overflow-hidden group border-b border-zinc-800 bg-zinc-900/5 hover:bg-zinc-900/10 transition-colors sys-reveal sys-rise">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/20 bg-green-500/5 text-[10px] font-mono text-green-500 uppercase tracking-wider mb-8">
<iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon>
                      Środowisko Produkcyjne Aktywne
                    </div>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter uppercase leading-[0.9]">
                      Dominacja
                      <span className="block text-zinc-700">W Google</span>
</h3>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
<p className="text-xs text-zinc-500 font-mono leading-relaxed border-l border-zinc-800 pl-4">
                      Dostarczamy strony ładujące się w ułamku sekundy, w pełni zoptymalizowane dla wyszukiwarek i dające doskonałe wrażenia użytkownikom mobilnym.
                    </p>
<div className="flex gap-8">
<div className="">
<div className="text-[9px] text-zinc-600 font-mono uppercase mb-1">
                          Widoczność SLA
                        </div>
<div className="text-xl text-white font-light tracking-tight">
                          99.99%
                        </div>
</div>
<div className="">
<div className="text-[9px] text-zinc-600 font-mono uppercase mb-1">
                          Czas Ładowania (LCP)
                        </div>
<div className="text-xl text-white font-light tracking-tight">
                          &lt;1.2s
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="h-auto md:h-64 grid grid-cols-1 md:grid-cols-2">

<div className="border-r border-zinc-800 p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors">
<div className="flex justify-between items-start">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Standardy_Jakości
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:file-check-linear" width="18"></iconify-icon>
</div>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between text-[10px] font-mono border-b border-zinc-800 pb-2">
<span className="text-zinc-300">Core Web Vitals</span>
<span className="text-green-500">[ZALICZONE]</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono border-b border-zinc-800 pb-2">
<span className="text-zinc-300">Optymalizacja Mobile</span>
<span className="text-green-500">[AKTYWNA]</span>
</div>
<div className="flex items-center justify-between text-[10px] font-mono pb-1">
<span className="text-zinc-300">Dostępność (A11y)</span>
<span className="text-green-500">[ZGODNE]</span>
</div>
</div>
</div>

<div className="p-8 flex flex-col justify-between hover:bg-zinc-900/20 transition-colors relative overflow-hidden group">
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Czystość_Kodu
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<div className="z-10 mt-4">
<div className="text-3xl font-light text-white mb-2 tracking-tight">
                      HTML5 / CSS3
                    </div>
<div className="text-[10px] text-zinc-500 font-mono leading-relaxed">
                      Semantyczny i nowoczesny kod wspierający indeksację przez roboty wyszukiwarek.
                    </div>
</div>
<iconify-icon className="absolute -bottom-4 -right-4 text-zinc-800/50 -rotate-12 group-hover:text-zinc-800 transition-colors duration-500" icon="solar:shield-bold" width="100"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col bg-zinc-950/30">



</div>
</div>
</div>
<section className="overflow-hidden bg-[#050505] bg-[url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80&amp;w=3840)] bg-cover bg-center border-zinc-800 border-b pt-24 pr-4 pb-24 pl-4 relative">

<div className="bg-black/90 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">

<div className="mb-16 max-w-2xl mx-auto">
<div className="text-[10px] uppercase text-orange-600 tracking-widest font-mono mb-4">
                // Formularz_Kontaktowy
              </div>
<h2 className="text-4xl md:text-5xl font-medium text-white uppercase tracking-tight leading-none mb-6">
                Skontaktuj
                <span className="text-zinc-600">Się Z Nami</span>
</h2>
<p className="text-sm text-zinc-500 font-mono leading-relaxed">
                Masz pytania lub chcesz rozpocząć współpracę? Wypełnij poniższy formularz, a my odezwiemy się tak szybko, jak to możliwe.
              </p>
</div>

<div className="w-full max-w-3xl mx-auto bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 relative sys-reveal sys-rise sys-delay-100 backdrop-blur-sm">
<form className="flex flex-col gap-6 text-left">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600/50 to-transparent"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Imię i nazwisko</label>
<input className="bg-[#050505]/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-600 font-mono transition-colors" required="" type="text"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Email</label>
<input className="bg-[#050505]/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-600 font-mono transition-colors" required="" type="email"/>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Wiadomość</label>
<textarea className="bg-[#050505]/50 border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-600 font-mono transition-colors resize-none" required="" rows="5"></textarea>
</div>

<button className="mt-4 py-4 px-8 bg-orange-600 text-white hover:bg-orange-500 text-[10px] uppercase tracking-widest font-mono font-semibold transition-all shadow-lg shadow-orange-900/20 hover:scale-[1.02] flex items-center justify-center gap-3" type="submit">
                  Wyślij Wiadomość
                  <iconify-icon icon="solar:plain-2-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
<footer className="border-t border-zinc-800 bg-[#050505] text-zinc-500 font-mono relative z-20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.15]"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[320px] relative z-10">

<div className="lg:col-span-3 border-r border-zinc-800 p-8 flex flex-col justify-between bg-zinc-900/5 backdrop-blur-sm">
<div>

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:command-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-widest uppercase">
                    Propromote
                    <span className="text-zinc-600">_Agencja</span>
</span>
</div>

<div className="border border-zinc-800 bg-[#050505] p-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-[9px] uppercase tracking-widest text-zinc-500">
                      System_Status
                    </span>
<iconify-icon className="text-zinc-600" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-white font-medium tracking-wide">
                      AKTYWNY
                    </span>
</div>
<div className="text-[9px] text-zinc-600 font-mono">
                    Uptime: 99.998%
                  </div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center text-[10px] border-b border-zinc-800 pb-2">
<span className="uppercase tracking-wider">Wersja</span>
<span className="text-zinc-300">v4.2.0-stable</span>
</div>
<div className="flex justify-between items-center text-[10px] border-b border-zinc-800 pb-2">
<span className="uppercase tracking-wider">Kompilacja</span>
<span className="text-zinc-300">#8824-XC</span>
</div>
<div className="flex justify-between items-center text-[10px] pb-1">
<span className="uppercase tracking-wider">Środowisko</span>
<span className="text-orange-600">PRODUKCJA</span>
</div>
</div>
</div>

<div className="lg:col-span-6 border-r border-zinc-800 grid grid-cols-1 md:grid-cols-3">

<div className="border-r border-zinc-800 p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-orange-600 uppercase tracking-widest mb-6 font-semibold">
                  // Agencja
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      O Nas
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Nasze Projekty
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Referencje
                    </a>
</li>
</ul>
</div>

<div className="border-r border-zinc-800 p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Usługi
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Tworzenie Stron
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Pozycjonowanie SEO
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Audyty SEO / UX
                    </a>
</li>
</ul>
</div>

<div className="p-8 flex flex-col relative group hover:bg-zinc-900/10 transition-colors">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Zasoby
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="https://propromote-blog.aura.build">
<span className="w-1 h-px bg-zinc-700"></span>
                      Blog
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Słownik SEO
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
<span className="w-1 h-px bg-zinc-700"></span>
                      Darmowy Audyt
                    </a>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-3 p-8 flex flex-col justify-between bg-zinc-900/5">
<div>
<div className="text-[9px] text-zinc-500 uppercase tracking-widest mb-6 font-semibold">
                  // Firma
                </div>
<ul className="space-y-3 text-[11px] font-medium tracking-wide mb-8">
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      Kontakt
                    </a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      Kariera
                      <span className="text-[9px] ml-1 text-orange-600 bg-orange-600/10 px-1 py-0.5 rounded-sm">
                        REKRUTACJA
                      </span>
</a>
</li>
<li>
<a className="block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300" href="#">
                      Polityka Prywatności
                    </a>
</li>
</ul>
</div>
<div className="bg-[#050505] border border-zinc-800 p-4 relative group hover:border-zinc-700 transition-colors">
<div className="text-[9px] uppercase tracking-wider text-zinc-500 mb-2">
                  Zapisz_Na_Newsletter
                </div>
<div className="flex gap-2">
<input className="bg-zinc-900/50 border border-zinc-800 text-[10px] px-2 py-1.5 w-full focus:outline-none focus:border-orange-600 text-white placeholder-zinc-700 font-mono uppercase" placeholder="ADRES_EMAIL" type="text"/>
<button className="bg-zinc-800 hover:bg-orange-600 text-white px-2 py-1.5 transition-colors border border-zinc-700 hover:border-orange-600">
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-zinc-800 bg-[#080808] px-8 py-3 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-wider text-zinc-600 relative z-20">
<div className="flex items-center gap-8">
<span className="hover:text-zinc-400 transition-colors cursor-default">
                © 2024 Propromote.
              </span>
<span className="hidden md:inline w-px h-3 bg-zinc-800"></span>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
                  Prywatność
                </a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
<div className="flex items-center gap-6 mt-2 md:mt-0 font-mono">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span>14:32:01 UTC</span>
</div>
<div className="hidden md:block w-px h-3 bg-zinc-800"></div>
<div className="flex items-center gap-2 text-green-900">
<iconify-icon icon="solar:shield-check-linear" width="12"></iconify-icon>
<span className="text-green-600">Bezpieczne_Połączenie</span>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
