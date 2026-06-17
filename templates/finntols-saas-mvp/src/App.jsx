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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0B0C0E]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<svg className="shrink-0 transition-transform duration-300 group-hover:scale-105" fill="none" height="32" viewbox="0 0 34 34" width="32" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="0" y="0"></rect>
<path d="M8 4V12M4 8H12" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="18" y="0"></rect>
<path d="M22 8H30" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="0" y="18"></rect>
<path d="M5 21L11 27M11 21L5 27" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<path d="M22 23H30M22 29H30" stroke="#5E6AD2" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<span className="text-white font-medium tracking-[0.15em] text-lg uppercase">Fintools</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#features">Platforma</a>
<a className="hover:text-white transition-colors" href="#finscore">Finscore™</a>
<a className="hover:text-white transition-colors" href="#pricing">Cennik</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Logowanie</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Wersja Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl hero-glow pointer-events-none"></div>
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
                Nowa funkcja: Finscore™ 2.0 dla firm
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Cyfrowe narzędzia dla<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300">branży pośrednictwa finansowego.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Inteligentny scoring firmowy, automatyczne wnioski i rekomendacje bankowe.
                Zastąp intuicję twardymi danymi finansowymi.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded-full bg-[#5E6AD2] hover:bg-[#4e5ac0] text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(94,106,210,0.3)] flex items-center gap-2">
                    Sprawdź firmę
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white text-sm font-medium transition-all bg-zinc-900/50 backdrop-blur-sm flex items-center gap-2">
                    Zobacz demo
                    <span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
</button>
</div>

<div className="relative max-w-4xl mx-auto mt-8 perspective-[2000px] group">
<div className="relative rounded-xl border border-white/10 bg-[#121417] shadow-2xl overflow-hidden transform rotate-x-12 transition-transform duration-700 hover:rotate-x-0 origin-center">
<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
</div>

<div className="p-6 bg-gradient-to-b from-[#121417] to-[#0B0C0E] h-[400px] flex gap-6">

<div className="w-64 hidden sm:block border-r border-white/5 pr-6 space-y-4">
<div className="flex items-center gap-2 text-zinc-300 bg-white/5 p-2 rounded"><span className="iconify" data-icon="lucide:layout-dashboard"></span> Pulpit</div>
<div className="flex items-center gap-2 text-zinc-500 p-2"><span className="iconify" data-icon="lucide:building-2"></span> Firmy</div>
<div className="flex items-center gap-2 text-zinc-500 p-2"><span className="iconify" data-icon="lucide:briefcase"></span> Wnioski</div>
</div>

<div className="flex-1 space-y-6">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<div className="text-left">
<h3 className="text-white font-medium">Techlease Sp. z o.o.</h3>
<p className="text-xs text-zinc-500">NIP: 521-392-11 • Kredyt Obrotowy</p>
</div>
<div className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs border border-indigo-500/20 whitespace-nowrap">Wysoki potencjał</div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="col-span-1 bg-zinc-900/50 rounded-lg p-3 border border-white/5">
<div className="text-xs text-zinc-500 mb-1">Scoring Firmowy</div>
<div className="text-lg font-semibold text-white">88 pkt</div>
</div>
<div className="col-span-1 bg-zinc-900/50 rounded-lg p-3 border border-white/5">
<div className="text-xs text-zinc-500 mb-1">Limit w rachunku</div>
<div className="text-lg font-semibold text-white">1.2M PLN</div>
</div>
<div className="col-span-1 bg-zinc-900/50 rounded-lg p-3 border border-white/5">
<div className="text-xs text-zinc-500 mb-1">Status</div>
<div className="text-lg font-semibold text-emerald-400">Analiza Fin.</div>
</div>
</div>

<div className="space-y-2">
<div className="h-10 bg-white/5 rounded flex items-center px-3 justify-between">
<div className="flex items-center gap-2">
<div className="w-20 h-3 bg-zinc-700 rounded"></div>
<span className="text-[10px] text-zinc-500 border border-white/10 px-1 rounded">MŚP</span>
</div>
<div className="w-12 h-3 bg-green-500/50 rounded"></div>
</div>
<div className="h-10 bg-white/5 rounded flex items-center px-3 justify-between">
<div className="flex items-center gap-2">
<div className="w-24 h-3 bg-zinc-700 rounded"></div>
</div>
<div className="w-12 h-3 bg-green-500/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-[20%] opacity-40"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Wspieramy działy kredytowe w</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-lg text-white"><span className="iconify" data-icon="lucide:triangle"></span> NEXUS</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><span className="iconify" data-icon="lucide:hexagon"></span> CAPITAL</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><span className="iconify" data-icon="lucide:circle-dashed"></span> ORBIT</div>
<div className="flex items-center gap-2 font-semibold text-lg text-white"><span className="iconify" data-icon="lucide:box"></span> BLOK</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Ekosystem finansowania firm.</h2>
<p className="text-zinc-400 text-lg">Zastąp rozproszone arkusze, PDFy i kalkulatory jedną platformą B2B.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">

<div className="col-span-1 md:col-span-6 lg:col-span-7 row-span-2 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
<span className="iconify" data-icon="lucide:calculator" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Kalkulatory White-Label</h3>
</div>
<p className="text-sm text-zinc-400 mb-8 max-w-sm">Gotowe do osadzenia na Twojej stronie. Zintegrowane z WIBOR. Dostosuj kolory do swojej marki.</p>
<div className="bg-zinc-900 rounded-lg p-5 border border-white/5 shadow-inner">
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<span>Kwota inwestycji</span>
<span className="text-white">850 000 PLN</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full mb-6 overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4"></div>
</div>
<div className="flex justify-between text-xs text-zinc-400 mb-2">
<span>Okres amortyzacji</span>
<span className="text-white">60 msc</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-1/2"></div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-xs text-zinc-500">Rata leasingowa</span>
<span className="text-sm font-semibold text-white">16 245,00 PLN</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-5 row-span-2 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Finscore™</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Automatyczne dopasowania bankowe AI i rekomendacje.</p>

<div className="flex-1 bg-zinc-900/50 rounded-xl border border-white/5 p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="relative w-16 h-16 rounded-full conic-gradient-score flex items-center justify-center">
<div className="w-14 h-14 bg-[#121316] rounded-full flex items-center justify-center">
<span className="text-sm font-bold text-white">88</span>
</div>
</div>
<div className="text-right">
<div className="text-xs text-zinc-500">Dopasowanie</div>
<div className="text-sm font-medium text-emerald-400">Bardzo wysokie</div>
</div>
</div>
<div className="space-y-2 mt-auto">
<div className="flex justify-between items-center text-xs p-2 rounded bg-white/5 border border-emerald-500/20">
<span className="text-white font-medium flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>ING Bank</span>
<span className="text-emerald-400 font-mono">92%</span>
</div>
<div className="flex justify-between items-center text-xs p-2 rounded bg-white/5 border border-white/5">
<span className="text-zinc-300 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span>BNP Paribas</span>
<span className="text-emerald-400 font-mono">85%</span>
</div>
<div className="flex justify-between items-center text-xs p-2 rounded bg-white/5 border border-white/5 opacity-60">
<span className="text-zinc-500 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span>Santander</span>
<span className="text-red-400 font-mono">24%</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:file-bar-chart" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Analizator BIK</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Wgraj raport BIK lub KRD. System automatycznie wyliczy zdolność i ryzyko.</p>
<div className="bg-zinc-900 border border-white/5 rounded-lg p-3">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider">Score BIK</span>
<span className="text-[10px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">Bardzo dobry</span>
</div>
<div className="flex items-end justify-between gap-1 h-8">
<div className="w-full bg-zinc-800 rounded-sm h-[40%]"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[60%]"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[50%]"></div>
<div className="w-full bg-blue-500/40 rounded-sm h-[80%]"></div>
<div className="w-full bg-blue-500 rounded-sm h-[95%]"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
<span className="iconify" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">AI Autofill</h3>
</div>
<p className="text-sm text-zinc-400 mb-6">Jednym kliknięciem przenieś dane firmy (GUS/KRS) do wniosków bankowych.</p>
<div className="relative">
<div className="space-y-2 opacity-50">
<div className="h-7 w-full bg-zinc-800 rounded border border-white/5"></div>
<div className="h-7 w-2/3 bg-zinc-800 rounded border border-white/5"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-zinc-900/90 backdrop-blur-sm border border-purple-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl shadow-purple-500/10">
<span className="iconify text-purple-400 animate-pulse" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs text-white">Pobieranie z KRS...</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-4 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative">
<div className="p-8 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
<span className="iconify" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Finflow</h3>
</div>
<p className="text-sm text-zinc-400">Kreator kroków do zbierania leadów i danych do wniosków. Skróć czas procesowania wniosku o 40% dzięki gotowym szablonom.</p>
</div>
<div className="mt-6 flex items-center gap-2">
<div className="h-1.5 w-6 bg-orange-500 rounded-full"></div>
<div className="h-1.5 w-6 bg-zinc-700 rounded-full"></div>
<div className="h-1.5 w-6 bg-zinc-700 rounded-full"></div>
<div className="ml-auto text-xs text-zinc-500">Krok 1 z 3</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-12 rounded-2xl border border-white/10 bg-[#121316] overflow-hidden group hover:border-white/20 transition-colors relative flex flex-col md:flex-row items-center">
<div className="p-8 flex-1">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg bg-zinc-500/10 text-zinc-400">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Zespół &amp; Prowizje</h3>
</div>
<p className="text-sm text-zinc-400 max-w-lg">Zarządzaj całym biurem. Przypisuj leady B2B do agentów, śledź konwersję i prowizje w czasie rzeczywistym.</p>
</div>
<div className="w-full md:w-1/2 h-48 bg-zinc-900/50 border-t md:border-t-0 md:border-l border-white/5 relative overflow-hidden">

<div className="absolute bottom-0 left-0 right-0 h-32 px-4 flex items-end justify-between gap-2">
<div className="w-full bg-zinc-800 rounded-t h-[40%]"></div>
<div className="w-full bg-zinc-800 rounded-t h-[60%]"></div>
<div className="w-full bg-indigo-500 rounded-t h-[85%] relative shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-zinc-800 rounded-t h-[55%]"></div>
<div className="w-full bg-zinc-800 rounded-t h-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#0B0C0E]" id="finscore">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-300 mb-6">
<span className="iconify" data-icon="lucide:infinity" data-width="14"></span>
                    Continuous Learning
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Inteligentna pętla zwrotna.</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Finscore™ nie tylko ocenia. System uczy się na każdej decyzji bankowej, monitorując warunki przyznania lub powody odrzucenia.
                </p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-10 md:gap-4">

<div className="flex flex-col items-center text-center flex-1 relative group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all z-20">
<span className="iconify text-zinc-400 group-hover:text-indigo-400 transition-colors" data-icon="lucide:building-2" data-width="24"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Profil Firmy</h3>
<p className="text-[11px] text-zinc-500 max-w-[140px]">Analiza danych finansowych</p>
</div>

<div className="hidden md:block w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 flex-1 -mt-12"></div>

<div className="md:hidden absolute left-[28px] top-[56px] bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent -z-10 h-full"></div>

<div className="flex flex-col items-center text-center flex-1 relative group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-all z-20">
<span className="iconify text-zinc-400 group-hover:text-indigo-400 transition-colors" data-icon="lucide:send" data-width="24"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Wniosek</h3>
<p className="text-[11px] text-zinc-500 max-w-[140px]">Dystrybucja do banków</p>
</div>

<div className="hidden md:block w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 flex-1 -mt-12"></div>

<div className="flex flex-col items-center text-center flex-1 relative group">
<div className="w-14 h-14 rounded-full bg-[#15171B] border border-white/10 flex items-center justify-center mb-4 shadow-lg group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-all z-20">
<span className="iconify text-zinc-400 group-hover:text-emerald-400 transition-colors" data-icon="lucide:file-check-2" data-width="24"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Decyzja</h3>
<p className="text-[11px] text-zinc-500 max-w-[140px]">Rejestracja warunków</p>
</div>

<div className="hidden md:block w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 flex-1 -mt-12"></div>

<div className="flex flex-col items-center text-center flex-1 relative group">
<div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(99,102,241,0.3)] z-20">
<span className="iconify text-indigo-400" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<h3 className="text-white text-sm font-medium mb-1">Optymalizacja</h3>
<p className="text-[11px] text-zinc-500 max-w-[140px]">Uczenie modelu</p>
</div>
</div>

<div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-32 border-x border-b border-indigo-500/10 rounded-b-[40px] -z-10">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#0B0C0E] px-4 py-1 text-[10px] text-indigo-400 font-mono tracking-tight flex items-center gap-2 border border-indigo-500/10 rounded-full">
<span className="iconify" data-icon="lucide:arrow-left" data-width="12"></span>
                        DANE WRACAJĄ DO SYSTEMU
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0C0E] to-[#111316]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Zacznij cyfryzację już dziś.</h2>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Model Freemium. Płacisz tylko, gdy Twój biznes rośnie. Pełen dostęp do scoringu firmowego i Finscore w wersji podstawowej.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold tracking-tight hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Załóż darmowe konto
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center gap-2">
                    Skontaktuj się z działem sprzedaży
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#08090A] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4 group w-fit" href="#">

<svg className="shrink-0 transition-transform duration-300 group-hover:scale-105" fill="none" height="24" viewbox="0 0 34 34" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="0" y="0"></rect>
<path d="M8 4V12M4 8H12" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="18" y="0"></rect>
<path d="M22 8H30" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<rect className="fill-[#5E6AD2]" height="16" rx="3" width="16" x="0" y="18"></rect>
<path d="M5 21L11 27M11 21L5 27" stroke="white" strokeLinecap="round" strokeWidth="2"></path>
<path d="M22 23H30M22 29H30" stroke="#5E6AD2" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<span className="text-white font-semibold tracking-[0.15em] text-sm uppercase">Fintools</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                        Tworzymy standardy technologiczne dla branży pośrednictwa finansowego.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Produkt</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">FinCalc</a></li>
<li><a className="hover:text-zinc-300" href="#">FinCheck</a></li>
<li><a className="hover:text-zinc-300" href="#">FinAI Score</a></li>
<li><a className="hover:text-zinc-300" href="#">FinAI Scan</a></li>
<li><a className="hover:text-zinc-300" href="#">FinAI Fill</a></li>
<li><a className="hover:text-zinc-300" href="#">FinFlow</a></li>
<li><a className="hover:text-zinc-300" href="#">FinDeminimis</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Firma</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">O nas</a></li>
<li><a className="hover:text-zinc-300" href="#">Kariera</a></li>
<li><a className="hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Prawne</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Polityka prywatności</a></li>
<li><a className="hover:text-zinc-300" href="#">Regulamin</a></li>
<li><a className="hover:text-zinc-300" href="#">RODO</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">© 2023 Fintools SaaS. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
