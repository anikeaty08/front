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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});



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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold font-geist tracking-tighter text-lg">
                    O
                </div>
<span className="font-bold tracking-tight text-lg font-geist">Onmarx</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors font-geist" href="#about">Über uns</a>
<a className="hover:text-white transition-colors font-geist" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors font-geist" href="#pricing">Preise</a>
<a className="hover:text-white transition-colors font-geist" href="#testimonials">Kunden</a>
</div>
<div>
<button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-5 font-medium text-black transition-all duration-300 hover:bg-zinc-200">
<span className="text-xs tracking-tight font-bold font-geist">Kontakt aufnehmen</span>
</button>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col w-full pt-32 pb-20 relative items-center justify-start overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#020617] via-transparent to-transparent -z-10"></div>

<div className="flex flex-col [animation:animationIn_0.8s_ease-out_0.1s_both] text-center w-full max-w-5xl z-10 px-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-medium tracking-wide uppercase mb-8 font-geist shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                Webdesign Agentur Deutschland
            </div>
<h1 className="md:text-7xl text-5xl font-semibold tracking-tight font-geist text-white mb-6 leading-[1.1]">
                Digitale Exzellenz für <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400">Ihr Unternehmen.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light tracking-tight leading-relaxed mb-10 font-geist">
                Wir gestalten hochmoderne Websites, die Ästhetik mit deutscher Ingenieurskunst vereinen. Performance-optimiert, pixelgenau und verkaufsstark.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 items-center">
<button className="hover:brightness-110 transition-all flex text-sm font-medium text-white bg-blue-600 border border-blue-500 rounded-full h-11 px-6 shadow-[0_0_20px_rgba(37,99,235,0.3)] items-center gap-2">
<span className="tracking-tight font-geist">Projekt anfragen</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="group relative inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 font-medium text-zinc-300 transition-all hover:bg-zinc-800 hover:text-white ring-1 ring-white/10 hover:ring-white/20">
<span className="text-sm tracking-tight font-geist">Portfolio ansehen</span>
</button>
</div>

<div className="w-full relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-20 h-full w-full pointer-events-none"></div>
<div className="rounded-xl bg-[#09090b] border border-white/10 shadow-2xl overflow-hidden relative transform rotate-x-12 transition-transform duration-700 ease-out group-hover:rotate-0">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] text-zinc-500 font-mono flex items-center gap-2 bg-black/20 px-2 py-1 rounded border border-white/5">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon> onmarx-design.de
                        </div>
</div>

<div className="aspect-[16/9] bg-[#050507] relative flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

<div className="relative z-10 grid grid-cols-12 gap-4 w-3/4 h-3/4 opacity-90">

<div className="col-span-3 h-full rounded-lg bg-zinc-900/50 border border-white/5 p-4 flex flex-col gap-3">
<div className="h-8 w-8 rounded-full bg-blue-500/20 mb-4"></div>
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
</div>

<div className="col-span-9 h-full flex flex-col gap-4">
<div className="h-1/3 rounded-lg bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-white/5 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/10 blur-xl"></div>
<div className="relative z-10 flex flex-col items-center gap-2">
<div className="h-2 w-24 bg-white/20 rounded"></div>
<div className="h-6 w-48 bg-white/10 rounded"></div>
</div>
</div>
<div className="h-2/3 grid grid-cols-2 gap-4">
<div className="rounded-lg bg-zinc-900/50 border border-white/5"></div>
<div className="rounded-lg bg-zinc-900/50 border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center">
<p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-8 text-center">Technologien &amp; Partner</p>
<div className="flex flex-wrap justify-center gap-12 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">

<svg className="h-6 w-auto fill-white" height="26" viewbox="0 0 116 26"><path d="M18.2 25.5L9.1 0 0 25.5h18.2Zm16.7 0l6.6-18.7h-4.3l-2.6 8.5-3-8.5h-4.2l7.5 18.7Zm23.3-19.1h-7.7v19.1h12.5v-3.4H65.8V17h6.6v-3.4h-6.6V9.8h7.2V6.4Zm17.3 12.3c0-2.3 2.5-3.1 5.6-3.1 1.7 0 3.3.3 4.6.6l.3-3.2c-1.3-.3-2.7-.5-4.3-.5-4.8 0-9.6 2-9.6 6.8 0 6.6 8.7 6.4 8.7 9.8 0 1-.9 1.7-3.4 1.7-2.1 0-4.3-.6-6.1-1.2l-.6 3.4c1.9.8 4.4 1.2 6.8 1.2 6.3 0 10-3 10-8.6.1-5.7-8.9-6.4-8.9-10.2l-3.1 3.3Zm23.4-8.9h-11v15.7h11v-3.4h-7.2v-2.8h6.6V16h-6.6V9.8h7.2V6.4Zm17.1 15.7V0h-3.8v22.1h-8.2v3.4h12Z"></path></svg>

<div className="flex items-center gap-2 text-white font-bold text-xl"><iconify-icon icon="logos:react" width="24"></iconify-icon> React</div>

<div className="flex items-center gap-2 text-white font-bold text-xl"><iconify-icon icon="cib:next-js" width="24"></iconify-icon> Next.js</div>

<div className="flex items-center gap-2 text-white font-bold text-xl"><iconify-icon icon="logos:tailwindcss-icon" width="24"></iconify-icon> Tailwind</div>

<div className="flex items-center gap-2 text-white font-bold text-xl"><iconify-icon icon="logos:shopify" width="24"></iconify-icon> Shopify</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight font-geist mb-6">Wir sind Onmarx Design.</h2>
<p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                Wir sind keine gewöhnliche Agentur. Wir sind Architekten des digitalen Raums. Unser Ansatz verbindet strategisches Denken mit kompromisslosem Design.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<iconify-icon icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 font-geist">Präzision</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Jedes Pixel hat seinen Platz. Wir arbeiten mit der Genauigkeit deutscher Ingenieurskunst für makellose Interfaces.
                </p>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 font-geist">Technologie</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Wir nutzen modernste Stacks (React, Next.js), um Websites zu bauen, die schneller laden als die der Konkurrenz.
                </p>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3 font-geist">Wachstum</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Design ist mehr als Kunst. Es ist ein Werkzeug für Umsatz. Unsere Seiten konvertieren Besucher in Kunden.
                </p>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" id="portfolio">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Ausgewählte Projekte</p>
<h2 className="text-4xl font-semibold text-white tracking-tight">Unsere Arbeiten</h2>
</div>
<a className="text-sm text-zinc-400 hover:text-white flex items-center gap-2 transition-colors" href="#">
                Alle Projekte ansehen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-on-scroll">


<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer col-span-1 md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute top-8 left-8 right-0 bottom-0 bg-[#0c0e14] rounded-tl-xl border-l border-t border-white/10 shadow-2xl p-4">
<div className="w-full h-full flex flex-col gap-4">
<div className="flex gap-4 border-b border-white/5 pb-4">
<div className="w-1/4 h-20 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="w-1/4 h-20 bg-zinc-800/50 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1/4 h-20 bg-zinc-800/50 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
</div>
<div className="w-1/2 h-8 bg-zinc-800 rounded"></div>
<div className="w-full h-32 bg-zinc-800/30 rounded"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
<h3 className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">FinTech Dashboard</h3>
<p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">Web App Development</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-blue-500/20 blur-2xl"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Modern Architecture</h3>
<p className="text-zinc-400 text-sm">Corporate Website</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-[60px] opacity-40"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Neon Energy</h3>
<p className="text-zinc-400 text-sm">Landing Page</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Kaffee Rösterei</h3>
<p className="text-zinc-400 text-sm">E-Commerce Shop</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer md:col-span-2">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>

<div className="absolute top-10 left-10 right-10 bottom-0 bg-[#111] rounded-t-xl border-x border-t border-white/10 p-4">
<div className="flex justify-between items-center mb-4">
<div className="w-24 h-4 bg-zinc-700 rounded"></div>
<div className="flex gap-2"><div className="w-20 h-4 bg-zinc-800 rounded"></div><div className="w-4 h-4 rounded-full bg-emerald-500"></div></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-zinc-800/50 rounded-lg"></div>
<div className="aspect-square bg-zinc-800/50 rounded-lg"></div>
<div className="aspect-square bg-zinc-800/50 rounded-lg"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<h3 className="text-white font-medium text-lg">EcoDashboard</h3>
<p className="text-zinc-400 text-sm">SaaS Platform</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-4 border border-white/5 rounded flex items-center justify-center">
<span className="text-zinc-700 text-4xl font-serif italic">Type.</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Editorial Mag</h3>
<p className="text-zinc-400 text-sm">Blog Design</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Burger House</h3>
<p className="text-zinc-400 text-sm">Gastro Website</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Law Firm KG</h3>
<p className="text-zinc-400 text-sm">Corporate Identity</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-zinc-900 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Audio Stream</h3>
<p className="text-zinc-400 text-sm">App Interface</p>
</div>
</div>
<div className="group relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden border border-white/10 cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white font-medium text-lg">Tech Conference</h3>
<p className="text-zinc-400 text-sm">Event Page</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Investition in Ihren Erfolg</h2>
<p className="text-zinc-400">Transparente Preise ohne versteckte Kosten.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-on-scroll">

<div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-zinc-500 mt-1">Für Einsteiger &amp; Visitenkarten</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">299€</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> One-Pager Design</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Mobile Responsive</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Basis SEO</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Kontaktformular</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all">Auswählen</button>
</div>

<div className="rounded-2xl border border-blue-500/50 bg-blue-500/5 p-8 flex flex-col relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Beliebt</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="text-sm text-zinc-500 mt-1">Für kleine Unternehmen</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">599€</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Bis zu 5 Unterseiten</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> CMS Integration</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Blog Funktion</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Google Maps &amp; Analytics</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Performance Optimierung</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">Jetzt starten</button>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Business</h3>
<p className="text-sm text-zinc-500 mt-1">Komplexe Anforderungen</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">1599€</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Individuelles UX/UI Design</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Bis zu 15 Unterseiten</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Custom Animationen</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Erweitertes SEO Setup</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Mehrsprachigkeit (DE/EN)</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all">Auswählen</button>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/30 p-8 flex flex-col hover:border-zinc-700 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">E-Commerce</h3>
<p className="text-sm text-zinc-500 mt-1">Online Shops</p>
</div>
<div className="mb-6">
<span className="text-4xl font-bold text-white tracking-tight">4999€</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Shopify / WooCommerce</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Unlimitierte Produkte</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Payment Integrationen</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Lagerverwaltung Anbindung</li>
<li className="flex items-center gap-2 text-sm text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Rechtstexte &amp; DSGVO</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all">Anfragen</button>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5" id="testimonials">
<div className="flex items-center gap-2 mb-12">
<span className="w-8 h-px bg-zinc-700"></span>
<span className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Kundenstimmen</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Onmarx hat unsere Vision perfekt verstanden. Die neue Website lädt unglaublich schnell und unsere Anfragen haben sich verdoppelt."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">MS</div>
<div>
<div className="text-white text-xs font-bold">Michael Schmidt</div>
<div className="text-zinc-500 text-[10px]">CEO, TechStart GmbH</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Professionell, zuverlässig und kreativ. Besonders das Portfolio-Design hat uns überzeugt. Klare Empfehlung für jeden, der Qualität sucht."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">LW</div>
<div>
<div className="text-white text-xs font-bold">Laura Weber</div>
<div className="text-zinc-500 text-[10px]">Marketing Leitung, Modehaus K.</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Der E-Commerce Shop läuft stabil und sieht fantastisch aus. Die Integration der Zahlungsanbieter verlief reibungslos."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">TB</div>
<div>
<div className="text-white text-xs font-bold">Thomas Bauer</div>
<div className="text-zinc-500 text-[10px]">Gründer, Bauer Coffee</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Das Redesign unserer Kanzlei-Webseite war ein voller Erfolg. Seriös, modern und auf mobilen Geräten perfekt bedienbar."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">SK</div>
<div>
<div className="text-white text-xs font-bold">Sabine Klein</div>
<div className="text-zinc-500 text-[10px]">Rechtsanwältin</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Endlich eine Agentur, die mitdenkt. Die Kommunikation war immer transparent und das Ergebnis übertraf unsere Erwartungen."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">DM</div>
<div>
<div className="text-white text-xs font-bold">Daniel Meyer</div>
<div className="text-zinc-500 text-[10px]">Head of Sales, ImmoWelt</div>
</div>
</div>
</div>

<div className="p-6 bg-zinc-900/20 border border-white/5 rounded-2xl hover:bg-zinc-900/40 transition-colors">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    "Wir haben das Business-Paket gebucht und es hat sich gelohnt. Die Animationen geben der Seite das gewisse Etwas."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold">JF</div>
<div>
<div className="text-white text-xs font-bold">Julia Fischer</div>
<div className="text-zinc-500 text-[10px]">Creative Director</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010409]">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center font-bold font-geist text-sm">O</div>
<span className="font-bold tracking-tight text-white">Onmarx</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Ihre Partneragentur für digitales Wachstum. Wir entwickeln Websites, die beeindrucken und verkaufen.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-semibold mb-4 text-sm">Navigation</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Über uns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Preise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 text-sm">Rechtliches</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600">
<p>© 2024 Onmarx Design. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<iconify-icon className="text-lg hover:text-white transition-colors cursor-pointer" icon="solar:brand-instagram-bold"></iconify-icon>
<iconify-icon className="text-lg hover:text-white transition-colors cursor-pointer" icon="solar:brand-linkedin-bold"></iconify-icon>
<iconify-icon className="text-lg hover:text-white transition-colors cursor-pointer" icon="solar:brand-twitter-bold"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
