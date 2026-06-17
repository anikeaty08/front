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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<div className="fixed inset-0 grid-pattern pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tight" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
<span className="font-semibold text-white">R</span>
</div>
                RPWEBY
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Služby</a>
<a className="hover:text-white transition-colors" href="#">Projekty</a>
<a className="hover:text-white transition-colors" href="#">O mně</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all items-center gap-2 group" href="#contact">
<span className="">Kontakt</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="lg:pt-48 lg:pb-32 z-10 pt-32 pb-20 relative">
<div className="max-w-7xl mr-auto ml-auto pt-1 pr-6 pl-6">
<div className="flex flex-col text-center max-w-4xl mr-auto mb-16 ml-auto items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Přijímám nové projekty pro Q4
                </div>

<h1 className="md:text-7xl bg-clip-text leading-[1.1] text-5xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white via-white to-slate-400 mb-6">
                    Vytvářím digitální zážitky, <br className="hidden md:block"/> které budují značky.
                </h1>

<p className="text-lg text-slate-400 max-w-2xl mb-10 font-light leading-relaxed">
                    RPWEBY se specializuje na vývoj výkonných webů a aplikací s důrazem na precizní design, rychlost a škálovatelnost. Pomáhám vizionářům přetvořit nápady v kód.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-950 rounded-full font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/5" href="#contact">
<iconify-icon height="20" icon="solar:rocket-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Zahájit spolupráci
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 glass-card text-white rounded-full font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="" height="20" icon="solar:folder-open-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Prohlédnout portfolio
                    </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon className="opacity-70" height="24" icon="logos:react" width="24"></iconify-icon>
<iconify-icon className="invert opacity-70" height="24" icon="logos:nextjs-icon" width="24"></iconify-icon>
<iconify-icon className="opacity-70" height="24" icon="logos:tailwindcss-icon" width="24"></iconify-icon>
<iconify-icon className="opacity-70" height="24" icon="logos:typescript-icon" width="24"></iconify-icon>
<iconify-icon className="opacity-70" height="24" icon="logos:figma" width="24"></iconify-icon>
</div>
</div>

<div className="relative max-w-5xl mx-auto mt-8 perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur-3xl opacity-20"></div>

<div className="relative rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden code-glow transform rotate-x-12 transition hover:rotate-0 duration-700 ease-out">

<div className="z-20 flex flex-col sm:p-12 text-center bg-slate-900 pt-12 pr-12 pb-12 pl-12 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex flex-col z-10 max-w-4xl mr-auto ml-auto pt-10 pb-10 relative top-10 items-center">

<div className="inline-flex gap-2 animate-fade-in text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="" icon="solar:star-fall-linear" width="14"></iconify-icon>
            První konzultace zdarma
        </div>

<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight leading-tight">
            Weby, které vydělávají
        </h2>

<p className="text-slate-400 text-lg mb-10 max-w-xl font-light leading-relaxed">
            Moderní design a technologie nejsou jen o vzhledu. Zvyšují konverze, rychlost a důvěryhodnost vaší značky.
        </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10 text-left">
<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Více prodejů</h3>
<p className="text-xs text-slate-400 leading-relaxed">Optimalizace pro maximální konverzní poměr.</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
<iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Rychlost</h3>
<p className="text-xs text-slate-400 leading-relaxed">Okamžité načítání bez čekání.</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-1">Design na míru</h3>
<p className="text-xs text-slate-400 leading-relaxed">Unikátní vzhled odlišující od konkurence.</p>
</div>
</div>

<a className="px-6 py-3 bg-white text-slate-950 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/5" href="#contact">
<span className="">Chci nezávaznou konzultaci</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
</div>

<div className="grid md:grid-cols-2 gap-0 min-h-[400px]">

<div className="md:text-sm leading-7 hidden md:block text-xs text-slate-400 font-mono bg-slate-950/50 border-white/5 border-r pt-6 pr-6 pb-6 pl-6">
<div className="flex">
<span className="text-slate-700 w-6 select-none">1</span>
<span className="text-purple-400 ml-2">export</span> <span className="text-indigo-400 ml-2">default</span> <span className="text-purple-400 ml-2">function</span> <span className="text-yellow-200 ml-2">RPWeby</span>() {
                            </div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">2</span>
<span className="text-purple-400 ml-6">return</span> (
                            </div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">3</span>
<span className="text-slate-500 ml-10">&lt;</span><span className="text-red-400">section</span> <span className="text-indigo-300">className</span>=<span className="text-green-400">"relative overflow-hidden"</span><span className="text-slate-500">&gt;</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">4</span>
<span className="text-slate-500 ml-14">&lt;</span><span className="text-red-400">h1</span> <span className="text-indigo-300">className</span>=<span className="text-green-400">"text-6xl font-bold"</span><span className="text-slate-500">&gt;</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">5</span>
<span className="text-white ml-18">Budujte lepší budoucnost</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">6</span>
<span className="text-slate-500 ml-14">&lt;/</span><span className="text-red-400">h1</span><span className="text-slate-500">&gt;</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">7</span>
<span className="text-slate-500 ml-14">&lt;</span><span className="text-yellow-200">Button</span> <span className="text-indigo-300">variant</span>=<span className="text-green-400">"primary"</span> /<span className="text-slate-500">&gt;</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">8</span>
<span className="text-slate-500 ml-10">&lt;/</span><span className="text-red-400">section</span><span className="text-slate-500">&gt;</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">9</span>
<span className="ml-6">)</span>
</div>
<div className="flex">
<span className="text-slate-700 w-6 select-none">10</span>
<span>}</span>
</div>
</div>

<div className="relative p-8 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-900">

<div className="w-full max-w-xs glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start mb-6">
<div className="">
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Celkový zisk</p>
<h3 className="text-2xl font-medium text-white tracking-tight">842.300 Kč</h3>
</div>
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<iconify-icon height="20" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between text-xs text-slate-400">
<span className="">Růst</span>
<span className="text-emerald-400 font-medium">+24%</span>
</div>

<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
</div>

<div className="mt-6 space-y-3">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-square-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300">SEO Optimalizace</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-slate-600 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
<iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-square-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-300">Responzivní design</span>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                        Zahajme váš další projekt
                    </h2>
<p className="text-lg font-light text-slate-400 mb-8" style={{}}>Máte nápad na webovou aplikaci nebo potřebujete modernizovat stávající web? Pomůžu Vám dosáhnout vašich cílů.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase font-medium mb-0.5">Napište nám</p>
<a className="hover:text-white transition-colors" href="mailto:info@rpweby.cz">info@rpweby.cz</a>
</div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500 uppercase font-medium mb-0.5">Zavolejte</p>
<a className="hover:text-white transition-colors" href="tel:+420123456789" style={{}}>+420 721 717 729</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5">
<p className="text-slate-500 text-sm mb-4">Sledujte mě na sociálních sítích</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass-card p-6 md:p-8 rounded-2xl shadow-2xl relative">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="name">Jméno</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="name" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="email" placeholder="jan@firma.cz" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="service">Typ služby</label>
<div className="relative">
<select className="focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none cursor-pointer text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="service">
<option className="bg-slate-900">Vývoj webové aplikace</option>
<option className="bg-slate-900">Webová stránka / Landing page</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide" htmlFor="message">Zpráva</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none" id="message" placeholder="Popište stručně váš projekt..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:paper-plane-linear" width="18"></iconify-icon>
                                Odeslat poptávku
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<div className="border-t border-white/5 bg-slate-950/50 py-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-500">
                © 2024 RPWEBY. Všechna práva vyhrazena.
            </p>
<div className="flex items-center gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

    </>
  );
}
