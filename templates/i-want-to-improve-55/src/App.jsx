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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<header className="border-b border-slate-100 py-4 px-6 md:px-8 lg:px-12 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">

<div className="flex items-center gap-2">
<svg className="w-8 h-8 text-slate-900" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
<div className="font-semibold text-xl tracking-tight leading-none flex flex-col">
                nester
                <span className="text-sm font-medium text-slate-500">mind.</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
<a className="flex items-center gap-1 hover:text-slate-900 transition-colors" href="#">
                Lösungen <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</a>
<a className="flex items-center gap-1 hover:text-slate-900 transition-colors" href="#">
                KI <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">Team</a>
<a className="hover:text-slate-900 transition-colors" href="#">Academy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Kontakt</a>
</nav>

<button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-sm">
            Demo buchen <i className="w-4 h-4 fill-white/20" data-lucide="zap"></i>
</button>
</header>

<main className="flex-grow flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden relative">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

<div className="flex flex-col gap-8 max-w-xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900">
<span className="text-violet-600">AI-first CRM</span><br/>
                    für moderne<br/>
                    Immobilienun-<br/>
                    ternehmen.
                </h1>
<p className="text-lg text-slate-600 leading-relaxed">
                    Verabschiede dich von komplizierter Software. nestermind ist das AI-first CRM, das Admin-Aufgaben automatisiert und deinem Team mehr Zeit für Pipeline-Aufbau und Abschlüsse gibt.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-violet-600/20">
                        Jetzt starten <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center gap-2 transition-all shadow-sm">
                        Vertrieb kontaktieren <i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</button>
</div>

<div className="flex items-center gap-4 mt-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=e2e8f0"/></div>
<div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&amp;backgroundColor=cbd5e1"/></div>
<div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center overflow-hidden"><img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Max&amp;backgroundColor=94a3b8"/></div>
</div>
<span className="text-base text-slate-500 font-medium">Die Wahl von 250+ Immobilienprofis</span>
</div>
</div>

<div className="relative group cursor-pointer w-full max-w-lg mx-auto lg:mx-0">

<div className="absolute -inset-1 bg-gradient-to-r from-violet-300 to-blue-200 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

<div className="relative bg-gradient-to-b from-violet-50/80 to-white/90 backdrop-blur-sm border-2 border-dashed border-violet-200 rounded-[2rem] p-10 sm:p-14 text-center transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-50/90 flex flex-col items-center justify-center min-h-[520px]">

<div className="absolute -top-4 bg-white border border-violet-100 text-violet-600 text-sm font-medium px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 tracking-tight">
<i className="w-4 h-4" data-lucide="sparkles"></i> AI Workspace
                    </div>

<div className="relative w-24 h-24 mb-8">
<div className="absolute inset-0 bg-violet-100 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 opacity-50"></div>
<div className="relative w-full h-full bg-white border border-violet-100 shadow-sm rounded-full flex items-center justify-center text-violet-600 transition-transform duration-300 group-hover:-translate-y-2">
<i className="w-10 h-10" data-lucide="cloud-upload"></i>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">
                        Verwandle ein Listing<br/>in AI-Magie.
                    </h2>
<p className="text-lg text-slate-600 mb-10 max-w-sm mx-auto">
                        Ziehe dein Exposé hierher oder klicke, um ein Dokument hochzuladen. Wir erledigen den Rest.
                    </p>

<div className="bg-violet-600 text-white px-8 py-3.5 rounded-full text-base font-medium flex items-center gap-2.5 shadow-md shadow-violet-600/20 transition-all group-hover:bg-violet-700 group-hover:shadow-lg group-hover:shadow-violet-600/30 group-active:scale-95">
<i className="w-5 h-5" data-lucide="folder-up"></i>
                        Datei auswählen
                    </div>

<div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium uppercase tracking-wider">
<span>PDF</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>DOCX</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Max 50MB</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
