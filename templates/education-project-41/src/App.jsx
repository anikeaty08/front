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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden flex justify-center">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200/40 blur-[120px]"></div>
<div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-200/30 blur-[100px]"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-amber-100/40 blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm tracking-tight shadow-sm">
            PV
          </div>
<span className="font-medium text-slate-900 tracking-tight">
            Projektové vzdelávanie
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-indigo-600 transition-colors" href="projekty.html">
            Projekty
          </a>
<a className="hover:text-indigo-600 transition-colors" href="ochrana-udajov.html">
            Ochrana údajov
          </a>
<a className="hover:text-indigo-600 transition-colors" href="mailto:petra.hurajova@gmail.com">
            Kontakt
          </a>
</div>
<div className="flex items-center gap-4">
<a className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-all shadow-sm hover:shadow-md" href="projekty.html">
            Preskúmať projekty
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-24 px-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-8">
<iconify-icon className="text-sm" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span>Nové metodiky učenia</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter leading-[1.1] mb-4">
          Projektové vzdelávanie v praxi
        </h1>
<h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 tracking-tight mb-8 max-w-3xl text-center">
          Metodiky, ktoré spájajú učenie, zážitok a reálny život
        </h2>
<p className="text-lg md:text-xl text-slate-700 max-w-2xl mb-6 leading-relaxed font-medium">
          Objavte praktické projekty a metodiky, ktoré rozvíjajú podnikavosť,
          spoluprácu a kreativitu žiakov. Vhodné pre školy, organizácie aj
          komunitné aktivity.
        </p>
<p className="text-base text-slate-500 max-w-3xl mb-10 leading-relaxed">
          Táto platforma prináša zbierku overených metodík projektového a
          zážitkového učenia. Každý projekt je navrhnutý tak, aby bol jednoducho
          aplikovateľný v praxi a zároveň rozvíjal kľúčové zručnosti žiakov.
          Obsah sa bude postupne rozširovať o ďalšie projekty z rôznych oblastí
          – príroda, podnikavosť, komunita či tvorivé aktivity.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-base font-medium rounded-full shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group" href="projekty.html">
            Preskúmať projekty
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA] z-10 rounded-3xl pointer-events-none"></div>
<div className="bg-white border border-slate-200/60 p-2 md:p-4 rounded-[2rem] shadow-xl shadow-slate-200/50">
<div className="bg-slate-50 rounded-2xl border border-slate-100 h-[300px] md:h-[500px] overflow-hidden relative flex flex-col">

<div className="h-12 border-b border-slate-200/60 flex items-center px-4 gap-2 bg-white">
<div className="w-3 h-3 rounded-full bg-rose-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400"></div>
</div>

<div className="flex-1 p-6 flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/3 flex flex-col gap-4">
<div className="h-8 bg-slate-200/50 rounded-lg w-1/2"></div>
<div className="h-32 bg-white border border-slate-200/60 rounded-xl shadow-sm p-4 flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="h-4 bg-slate-200/70 rounded w-3/4 mb-2"></div>
<div className="h-3 bg-slate-100 rounded w-1/2"></div>
</div>
</div>
<div className="h-32 bg-white border border-slate-200/60 rounded-xl shadow-sm p-4 flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-xl" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="h-4 bg-slate-200/70 rounded w-2/3 mb-2"></div>
<div className="h-3 bg-slate-100 rounded w-full"></div>
</div>
</div>
</div>
<div className="w-full md:w-2/3 bg-white border border-slate-200/60 rounded-xl shadow-sm p-6 flex flex-col gap-4">
<div className="h-8 bg-slate-200/50 rounded-lg w-1/3 mb-4"></div>
<div className="flex-1 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400 font-medium text-sm">
                  Priestor pre prácu študentov
                </div>
</div>
</div>
</div>
</div>
</div>
</main>



<footer className="py-12 px-6 border-t border-slate-200/60 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-8">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm tracking-tight shadow-sm">
                PV
              </div>
<span className="font-medium text-slate-900 tracking-tight">
                Projektové vzdelávanie
              </span>
</div>
<a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium" href="mailto:petra.hurajova@gmail.com">
              Kontakt: petra.hurajova@gmail.com
            </a>
</div>
<div className="flex flex-col md:items-end gap-4">
<a className="text-sm text-slate-500 font-medium hover:text-indigo-600 transition-colors" href="ochrana-udajov.html">
              Ochrana osobných údajov
            </a>
<p className="text-xs text-slate-400 text-left md:text-right leading-relaxed max-w-xs">
              Všetky materiály sú chránené autorským právom. Použitie je možné
              na vzdelávacie účely.
            </p>
</div>
</div>
</div>
</footer>

    </>
  );
}
