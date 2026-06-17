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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-[10px] font-bold text-white tracking-widest">TT</div>
<span className="text-sm font-medium tracking-tight text-white/90">TOOLTALK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">Über uns</a>
<a className="hover:text-white transition-colors" href="#latest">Letzte Finds</a>
<a className="hover:text-white transition-colors" href="#upcoming">Nächstes Event</a>
</div>
<button className="text-xs font-medium bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full border border-white/5 transition-all">
                Tool einreichen
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="z-10 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Internes Format
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
<span className="text-gradient">Upgrade deinen<br/>Workflow.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-md leading-relaxed">
                    Tooltalk ist unser interner Space, um neue Software-Juwelen zu entdecken. Wir teilen, diskutieren und implementieren die besten Tools, die das Web zu bieten hat.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition-all overflow-hidden">
<span>Nächster Talk beitreten</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-neutral-300 hover:text-white border border-white/10 hover:border-white/20 transition-all bg-white/5">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
                        Archiv ansehen
                    </button>
</div>
<div className="pt-8 flex items-center gap-4 text-neutral-500 text-xs">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px]">JD</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-700 flex items-center justify-center text-[10px]">MK</div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-600 flex items-center justify-center text-[10px]">+12</div>
</div>
<span>Kollegen sind schon dabei</span>
</div>
</div>

<div className="relative h-[600px] w-full perspective-container flex items-center justify-center lg:justify-end pointer-events-none lg:pointer-events-auto">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-[100px] rounded-full opacity-50"></div>

<div className="relative w-72 h-96" style={{transform: 'rotateX(10deg) rotateY(-10deg) rotateZ(0deg)', animation: 'float-slow 8s ease-in-out infinite'}}>

<div className="absolute top-0 left-0 w-full h-full glass-panel rounded-2xl p-6 transform translate-z-[-50px] translate-x-12 translate-y-12 opacity-40 border-neutral-700/50"></div>

<div className="absolute top-0 left-0 w-full h-full glass-panel rounded-2xl p-6 transform translate-z-[-25px] translate-x-6 translate-y-6 opacity-70 border-neutral-600/50 flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:figma" width="20"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-20 bg-white/20 rounded"></div>
<div className="h-2 w-full bg-white/10 rounded"></div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl shadow-indigo-500/10 flex flex-col justify-between transform transition-transform hover:translate-z-[10px]">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<iconify-icon className="text-white" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">NEU</span>
</div>
<div className="space-y-4">
<h3 className="text-xl font-medium text-white">Raycast</h3>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Ein erweiterbarer Launcher für MacOS. Skripte, Zwischenablage, Fensterverwaltung und mehr in einem Tool.
                            </p>
<div className="pt-4 flex items-center justify-between border-t border-white/5">
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="14"></iconify-icon>
<span className="text-xs text-neutral-300">4.9/5</span>
</div>
<span className="text-[10px] text-neutral-500 uppercase tracking-wider">Productivity</span>
</div>
</div>
</div>

<div className="absolute -right-12 top-20 glass-panel p-3 rounded-lg animate-[float-reverse_6s_ease-in-out_infinite]">
<iconify-icon className="text-blue-300" icon="lucide:code-2" width="20"></iconify-icon>
</div>
<div className="absolute -left-8 bottom-32 glass-panel p-3 rounded-lg animate-[float-slow_7s_ease-in-out_infinite_reverse]">
<iconify-icon className="text-purple-300" icon="lucide:cpu" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Warum wir das machen</h2>
<p className="text-neutral-400 max-w-2xl font-light">
                    Technologie bewegt sich schnell. Tooltalk ist unser Bremsklotz, um kurz innezuhalten, zu bewerten und die Werkzeuge zu schärfen, mit denen wir jeden Tag arbeiten.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
<iconify-icon icon="lucide:telescope" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Discovery</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Wir durchforsten Product Hunt, GitHub und Twitter, damit du es nicht musst. Nur die relevantesten Tools landen hier.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:text-emerald-300 transition-colors">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Effizienz</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Kleine Tools, großer Impact. Oft spart ein kleines Plugin Stunden an manueller Arbeit im Monat.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-6 text-rose-400 group-hover:text-rose-300 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Austausch</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Jeder im Team hat andere Quellen. Wir bringen Frontend, Backend und Design zusammen an einen Tisch.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="latest">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2">Letzte Highlights</h2>
<p className="text-neutral-500 text-sm font-light">Diese Tools wurden im letzten Meeting vorgestellt.</p>
</div>
<a className="text-xs font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-all" href="#">Alle 24 Tools ansehen</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="aspect-video bg-neutral-900/50 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors relative z-10" icon="lucide:terminal" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="font-medium text-white text-sm">Warp</h4>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Terminal</span>
</div>
<p className="text-xs text-neutral-500 font-light line-clamp-2">Das Terminal für das 21. Jahrhundert mit KI-Integration und Team-Features.</p>
</div>
</div>

<div className="group relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="aspect-video bg-neutral-900/50 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors relative z-10" icon="lucide:layout-template" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="font-medium text-white text-sm">Cron</h4>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Kalender</span>
</div>
<p className="text-xs text-neutral-500 font-light line-clamp-2">Der Kalender der nächsten Generation. Schnell, schön und keyboard-first.</p>
</div>
</div>

<div className="group relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="aspect-video bg-neutral-900/50 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors relative z-10" icon="lucide:database" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="font-medium text-white text-sm">Neon</h4>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Backend</span>
</div>
<p className="text-xs text-neutral-500 font-light line-clamp-2">Serverless Postgres. Branching für Datenbanken wie bei Git.</p>
</div>
</div>

<div className="group relative bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="aspect-video bg-neutral-900/50 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors relative z-10" icon="lucide:pen-tool" width="32"></iconify-icon>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<h4 className="font-medium text-white text-sm">Spline</h4>
<span className="text-[10px] text-neutral-500 border border-neutral-800 px-1.5 py-0.5 rounded">Design</span>
</div>
<p className="text-xs text-neutral-500 font-light line-clamp-2">3D Design im Browser. Einfach zu lernen, beeindruckende Ergebnisse.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6" id="upcoming">
<div className="max-w-4xl mx-auto">
<div className="relative rounded-2xl border border-white/10 bg-[#080808] p-1 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent shadow-[0_0_20px_2px_rgba(99,102,241,0.5)]"></div>
<div className="rounded-xl bg-neutral-900/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div className="space-y-4 text-center md:text-left">
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="lucide:calendar-clock" width="14"></iconify-icon>
                            Kommendes Event
                        </div>
<h2 className="text-3xl font-medium text-white tracking-tight">AI Coding Agents</h2>
<p className="text-neutral-400 font-light max-w-md">
                            Wie Tools wie AutoGPT und Github Copilot Workspace unseren Entwicklungszyklus verändern. Live Demo inklusive.
                        </p>
<div className="flex items-center justify-center md:justify-start gap-6 text-sm text-neutral-300 pt-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="lucide:clock" width="16"></iconify-icon>
                                Freitag, 14:00 Uhr
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="lucide:map-pin" width="16"></iconify-icon>
                                Konferenzraum A / Zoom
                            </div>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<button className="bg-white text-black hover:bg-neutral-200 px-8 py-3 rounded-full font-medium text-sm transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                            Ich bin dabei
                        </button>
<span className="text-[10px] text-neutral-500">Nur für Teammitglieder</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 mt-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<div className="w-4 h-4 bg-neutral-700 rounded-sm"></div>
<span className="text-xs font-medium tracking-tight text-neutral-400">TOOLTALK INTERNAL</span>
</div>
<div className="flex gap-6 text-xs text-neutral-600 font-medium">
<a className="hover:text-neutral-400 transition-colors" href="#">Slack Channel</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Notion Page</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Aufnahmen</a>
</div>
<p className="text-[10px] text-neutral-700">
                © 2023 Internes Engineering Team. Design System v1.2
            </p>
</div>
</footer>

    </>
  );
}
