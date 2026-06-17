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
      

<div className="absolute top-0 left-0 w-full h-[900px] pointer-events-none -z-20 overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e2dbea0-c0a9-413f-a57b-af279633c0df_3840w.jpg" style={{filter: 'grayscale(1) invert(1)', opacity: '0.35'}}/>

<div className="absolute top-[-10%] left-[15%] w-[800px] h-[800px] rounded-full bg-gradient-to-br from-orange-300/40 via-orange-100/20 to-transparent blur-[100px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white"></div>
</div>

<nav className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto w-full relative z-20 bg-transparent">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-sm" icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl font-normal tracking-tighter">amasoulting</span>
</div>
<div className="hidden lg:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-slate-900 transition-colors text-base text-slate-500 font-normal" href="#leistungen">Leistungen</a>
<a className="hover:text-slate-900 transition-colors text-base text-slate-500 font-normal" href="#">Partner</a>
<a className="hover:text-slate-900 transition-colors text-base text-slate-500 font-normal" href="#">Über uns</a>
<a className="hover:text-slate-900 transition-colors text-base text-slate-500 font-normal" href="#">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hover:bg-slate-800 hover:text-white transition-colors text-base font-normal text-slate-700 bg-white/80 backdrop-blur border border-slate-200 shadow-sm rounded-full pt-2 pr-5 pb-2 pl-5" href="#">
                Analyse starten
            </a>
</div>
</nav>

<main className="z-10 overflow-hidden w-full pt-20 pb-24 relative">
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative">

<div className="z-20 max-w-3xl relative mx-auto flex flex-col items-center text-center">

<a className="inline-flex items-center gap-3 hover:bg-white/90 transition-colors group bg-white/60 backdrop-blur-sm border-slate-200/80 border rounded-full mb-8 pt-1 pr-4 pb-1 pl-1 shadow-sm" href="#">
<span className="text-sm font-normal text-white bg-slate-950 rounded-full px-2.5 py-0.5">Partner</span>
<span className="group-hover:text-slate-900 transition-colors text-sm font-normal text-stone-600">Wir sind offizieller Partner von Amazon</span>
</a>

<h1 className="md:text-6xl leading-[1.1] text-4xl font-normal text-slate-900 tracking-tight mb-6">
                    Die Full Service Agentur<br className="hidden sm:block"/> für den Marktplatz Amazon
                </h1>
<p className="leading-relaxed text-lg text-slate-600 max-w-xl mb-10">
                    With passion towards your goal! Wir fokussieren uns auf Umsatzsteigerung, Erhöhung der Profitabilität und maximale Sichtbarkeit für Deine Marke.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">

<a className="group shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300 overflow-hidden hover:bg-orange-600 font-normal text-white bg-orange-500 rounded-full px-8 py-3.5 relative shadow-lg inline-flex items-center justify-center text-base" href="#leistungen" style={{boxShadow: '0 18px 40px -15px rgba(234,88,12,0.85), inset 0 2px 4px rgba(255,247,237,0.9)', borderRadius: '9999px', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 146, 60, 0.4), rgba(234, 88, 12, 0.5))', '--border-radius-before': '9999px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full rounded-full"></div>
<span className="flex items-center gap-2 relative z-10">
                            Kostenlose Potenzialanalyse 
                            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-xl" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
<a className="flex items-center justify-center gap-2 hover:bg-white transition-colors text-base font-normal text-slate-600 bg-white/50 backdrop-blur-sm border-slate-200 border shadow-sm rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#leistungen">Unsere Leistungen</a>
</div>
</div>

<div className="mt-20 sm:mt-32 relative w-full flex items-center justify-center h-[400px] sm:h-[600px] lg:h-[700px]">

<div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-white rounded-full blur-[80px] sm:blur-[120px] z-0 opacity-80 pointer-events-none"></div>

<div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-orange-500/60"></div>
<div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] rounded-full border border-dashed border-orange-500/50"></div>
<div className="absolute w-[560px] h-[560px] sm:w-[690px] sm:h-[690px] rounded-full border border-dashed border-orange-500/40"></div>
<div className="absolute w-[700px] h-[700px] sm:w-[860px] sm:h-[860px] rounded-full border border-dashed border-orange-500/30 hidden sm:block"></div>
<div className="absolute w-[1030px] h-[1030px] rounded-full border border-dashed border-orange-500/20 hidden lg:block"></div>

<div className="absolute z-20 w-28 h-28 sm:w-36 sm:h-36 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100/80">
<iconify-icon className="text-6xl sm:text-7xl text-slate-900" icon="mdi:amazon"></iconify-icon>
</div>


<div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] z-10">

<div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-200/50 flex items-center gap-2 whitespace-nowrap z-20">
<span className="text-sm font-medium text-emerald-600">+120%</span>
<span className="text-xs font-normal text-slate-500">Sichtbarkeit</span>
</div>
</div>

<div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] z-10">

<div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-200/50 flex items-center gap-2 whitespace-nowrap z-20 hidden sm:flex">
<span className="text-sm font-medium text-orange-600">+45%</span>
<span className="text-xs font-normal text-slate-500">Umsatzwachstum</span>
</div>
</div>

<div className="absolute w-[560px] h-[560px] sm:w-[690px] sm:h-[690px] z-10">

<div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-200/50 flex items-center gap-2 whitespace-nowrap z-20">
<span className="text-sm font-medium text-slate-700">+23%</span>
<span className="text-xs font-normal text-slate-500 hidden sm:block">5-Sterne Bewertungen</span>
<span className="text-xs font-normal text-slate-500 sm:hidden">5-Sterne</span>
</div>
</div>

<div className="absolute w-[700px] h-[700px] sm:w-[860px] sm:h-[860px] z-10 hidden sm:block">

<div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-slate-200/50 flex items-center gap-2 whitespace-nowrap z-20">
<span className="text-sm font-medium text-blue-600">-15%</span>
<span className="text-xs font-normal text-slate-500">ACoS</span>
</div>
</div>
</div>
</div>
</main>

<section className="bg-white pt-20 pb-24 border-t border-slate-100 relative z-10" id="leistungen">
<div className="max-w-[1400px] mx-auto px-6">

<div className="mb-12 max-w-xl">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-900 mb-4 leading-tight">
                    Maßgeschneiderte Leistungen
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    Wir bieten Dir die passenden Tools und Strategien für nachhaltiges Wachstum auf Amazon.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group block bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors" href="#">
<div className="h-40 bg-slate-100 border-b border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-200/50 mix-blend-multiply"></div>
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-orange-400/50 transition-all duration-500" icon="lucide:layout-grid" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-6 bg-white h-full">
<p className="text-sm font-normal tracking-wide text-orange-500 uppercase mb-2">Account-Management</p>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-2">Operative Steuerung</h3>
<p className="text-base text-slate-500 leading-relaxed mb-5">
                            Entdecke unser Full-Service-Paket für Deinen Account. Wir übernehmen die operative Steuerung und Optimierung.
                        </p>
<div className="inline-flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-normal group-hover:bg-slate-100 transition-colors">
                            Mehr erfahren
                        </div>
</div>
</a>

<a className="group block bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors" href="#">
<div className="h-40 bg-slate-100 border-b border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-200/50 mix-blend-multiply"></div>
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-orange-400/50 transition-all duration-500" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-6 bg-white h-full">
<p className="text-sm font-normal tracking-wide text-orange-500 uppercase mb-2">Content &amp; SEO</p>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-2">Sichtbarkeit erhöhen</h3>
<p className="text-base text-slate-500 leading-relaxed mb-5">
                            Keywordoptimierte Ausarbeitung von Listings sowie erweiterte Inhalte für eine starke Markenpräsenz.
                        </p>
<div className="inline-flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-normal group-hover:bg-slate-100 transition-colors">
                            Mehr erfahren
                        </div>
</div>
</a>

<a className="group block bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors" href="#">
<div className="h-40 bg-slate-100 border-b border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-200/50 mix-blend-multiply"></div>
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-orange-400/50 transition-all duration-500" icon="lucide:megaphone" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-6 bg-white h-full">
<p className="text-sm font-normal tracking-wide text-orange-500 uppercase mb-2">Advertising</p>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-2">PPC Kampagnen</h3>
<p className="text-base text-slate-500 leading-relaxed mb-5">
                            Professionelle Verwaltung und datengetriebene Steuerung aller Werbeaktivitäten für maximalen ROAS.
                        </p>
<div className="inline-flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-normal group-hover:bg-slate-100 transition-colors">
                            Mehr erfahren
                        </div>
</div>
</a>

<a className="group block bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors" href="#">
<div className="h-40 bg-slate-100 border-b border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-200/50 mix-blend-multiply"></div>
<iconify-icon className="text-5xl text-slate-300 group-hover:scale-110 group-hover:text-orange-400/50 transition-all duration-500" icon="lucide:lightbulb" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-6 bg-white h-full">
<p className="text-sm font-normal tracking-wide text-orange-500 uppercase mb-2">Consulting</p>
<h3 className="text-xl font-normal tracking-tight text-slate-900 mb-2">Strategische Beratung</h3>
<p className="text-base text-slate-500 leading-relaxed mb-5">
                            Strategische Beratung und Vorbereitung auf tägliche Herausforderungen auf dem komplexen Amazon Marktplatz.
                        </p>
<div className="inline-flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-normal group-hover:bg-slate-100 transition-colors">
                            Mehr erfahren
                        </div>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-8 relative z-10">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="lucide:shopping-bag" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-normal tracking-tighter text-slate-900">amasoulting</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Impressum</a>
<a className="hover:text-slate-900 transition-colors" href="#">Datenschutz</a>
</div>
</div>
</footer>

    </>
  );
}
