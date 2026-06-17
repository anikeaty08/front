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



              !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


                (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", "30min", {origin:"https://app.cal.com"});

                Cal.ns["30min"]("inline", {
                  elementOrSelector:"#my-cal-inline-30min",
                  config: {"layout":"month_view", "theme": "dark"}, 
                  calLink: "tamyme/30min",
                });

                Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view", "theme":"dark"});
              


      lucide.createIcons();
    
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
      

<div className="relative w-full max-w-full overflow-x-hidden flex flex-col min-h-screen">

<div className="fixed inset-0 bg-neutral-950 -z-20"></div>

<div className="aura-background-component top-0 w-full -z-10 absolute hue-rotate-90 saturate-50 brightness-150 h-[800px] pointer-events-none mix-blend-screen opacity-60">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div>

<main className="flex-grow sm:pt-32 sm:pb-24 flex flex-col sm:px-6 w-full pt-16 pr-4 pb-20 pl-4 relative items-center justify-center">

<div className="absolute top-0 inset-x-0 h-[800px] w-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[600px] bg-rose-600/10 blur-[120px] rounded-full opacity-50 mix-blend-screen max-w-full"></div>
<div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-40"></div>
</div>

<div className="z-10 text-center w-full max-w-4xl mx-auto relative">

<h1 className="sm:text-5xl md:text-7xl leading-[1.1] break-words text-4xl font-medium text-white tracking-tight mb-6 pr-2 pl-2 drop-shadow-2xl">
              Ne Perdez Plus Jamais Un Client
              à Cause d'un
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-orange-400">
                Appel Manqué
              </span>
</h1>

<p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light px-4">
              Votre réceptionniste IA répond 24/7. Sans embauche. Sans formation. Sans pause.
            </p>

<div className="flex flex-col sm:flex-row gap-6 items-center justify-center px-4">
<a className="relative group cursor-pointer w-full sm:w-auto block" href="#calendar-section">
<div className="absolute -inset-1 bg-gradient-to-r from-rose-600 via-orange-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
<div className="group flex overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] z-10 text-base sm:text-lg font-medium tracking-tight text-white bg-black h-14 ring-white/20 ring-1 rounded-full px-8 sm:px-10 relative shadow-xl gap-x-2 items-center justify-center w-full sm:w-auto">
<div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="transition-all duration-300 group-hover:border-white/70 border-white/50 border rounded-full absolute inset-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.3)]"></div>
<span className="flex items-center gap-2 leading-none z-10 relative whitespace-nowrap drop-shadow-md">
                    Demander une démo gratuite
                    <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>
</div>

<div className="flex flex-wrap gap-4 sm:gap-8 text-sm font-medium text-neutral-400 mt-16 sm:mt-24 items-center justify-center px-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="whitespace-nowrap">Installation 7-10j</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="whitespace-nowrap">Sans engagement</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="whitespace-nowrap">Réponse sous 48h</span>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-20 relative z-20 px-0 sm:px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-rose-600/10 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
<div className="relative w-full aspect-[9/16] sm:aspect-[16/9] min-h-[500px] rounded-2xl sm:rounded-3xl border border-white/10 bg-[#050505] backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center overflow-hidden ring-1 ring-white/5">

<div className="absolute top-6 left-0 right-0 flex justify-center z-10 pointer-events-none">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-widest">Agent Actif</span>
</div>
</div>

<div className="z-30 flex flex-col w-full h-full pt-4 pr-4 pb-4 pl-4 items-center justify-center relative">




<elevenlabs-convai agent-id="YOUR_AGENT_ID" className="z-20 relative"></elevenlabs-convai>

<div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none">
<div className="relative flex items-center justify-center">

<div className="absolute w-64 h-64 bg-rose-500/10 blur-[80px] rounded-full animate-pulse"></div>

<div className="w-32 h-32 rounded-full bg-gradient-to-b from-rose-500 to-orange-600 blur-[2px] opacity-20 animate-breathe absolute"></div>
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-rose-400 to-orange-500 blur-md opacity-80 animate-breathe relative shadow-[0_0_50px_rgba(244,63,94,0.4)]"></div>

<div className="absolute w-full h-full rounded-full border border-white/10 opacity-30 animate-[spin_10s_linear_infinite]"></div>
</div>
<p className="mt-8 text-sm text-neutral-500 font-medium tracking-wide animate-pulse">Initialisation de l'interface...</p>
</div>
</div>
<div className="absolute bottom-4 text-center z-10 pointer-events-none opacity-40">
<p className="text-[10px] sm:text-xs text-neutral-500 font-mono tracking-wide">Powered by ElevenLabs Agents</p>
</div>
</div>
</div>

<section className="z-10 w-full max-w-5xl mx-auto relative mt-32 px-4 sm:px-6" id="calendar-section">
<div className="text-center mb-10 relative">
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-4">
                Réservez votre Démo
              </h2>
<p className="text-neutral-400">Choisissez un créneau pour échanger avec notre équipe.</p>
</div>

<div className="w-full rounded-2xl border border-white/10 bg-[#0A0A0A] backdrop-blur-sm shadow-2xl overflow-hidden h-[700px] relative">
<div className="cal-inline-container" id="my-cal-inline-30min" style={{width: '100%', height: '100%', overflow: 'scroll'}}>
<style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style></div>

</div>
</section>

<section className="z-10 w-full max-w-4xl mx-auto relative mt-32 px-4 sm:px-6">
<div className="text-center mb-12 relative">
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white mb-6">
                Questions Fréquentes
              </h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/40 transition-all duration-300">
<summary className="flex cursor-pointer list-none p-5 sm:p-6 items-center justify-between gap-4">
<span className="text-sm sm:text-base font-medium text-white group-hover:text-rose-200 transition-colors text-left">
                    L'IA peut-elle vraiment comprendre tous mes clients ?
                  </span>
<span className="transition group-open:rotate-45 shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                  Oui. Notre technologie utilise le traitement du langage naturel avancé et s'adapte au vocabulaire de votre secteur. Elle comprend les accents, les formulations variées et gère même les clients mécontents.
                </div>
</details>

<details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/40 transition-all duration-300">
<summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none gap-4">
<span className="text-sm sm:text-base font-medium text-white group-hover:text-rose-200 transition-colors text-left">
                    Que se passe-t-il si l'IA ne comprend pas ?
                  </span>
<span className="transition group-open:rotate-45 shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                  L'IA peut transférer l'appel vers vous instantanément ou proposer de prendre un message détaillé. Vous gardez toujours le contrôle.
                </div>
</details>

<details className="group rounded-2xl border border-white/10 bg-[#0A0A0A] open:bg-neutral-900/40 transition-all duration-300">
<summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none gap-4">
<span className="text-sm sm:text-base font-medium text-white group-hover:text-rose-200 transition-colors text-left">
                    Combien de temps prend l'installation ?
                  </span>
<span className="transition group-open:rotate-45 shrink-0">
<svg className="lucide lucide-plus w-5 h-5 text-neutral-400 group-hover:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-neutral-400 leading-relaxed font-light">
                  Configuration complète en 7 à 10 jours maximum, selon la complexité de votre flux d'appels.
                </div>
</details>
</div>
</section>
</main>

<footer className="overflow-hidden bg-[#0A0A0A] border-white/10 border-t pt-20 pb-10 relative w-full mt-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row gap-x-4 gap-y-4 items-center justify-between text-center md:text-left">
<p className="text-xs font-light text-neutral-500">© 2025 Tamyme. All rights reserved.</p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</div>
<span className="text-[10px] text-neutral-400 font-medium uppercase tracking-wide">
                    Systems Operational
                  </span>
</div>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
