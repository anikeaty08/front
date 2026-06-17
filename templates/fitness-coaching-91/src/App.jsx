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
      
<div className="bg-noise"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid-advanced opacity-60"></div>
<div className="absolute top-[-30%] left-[20%] w-[800px] h-[800px] bg-white/[0.03] blur-[150px] rounded-full mix-blend-screen animate-float"></div>
<div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/[0.04] blur-[160px] rounded-full mix-blend-screen animate-float-delayed"></div>
</div>

<nav className="fixed top-8 inset-x-0 mx-auto max-w-4xl z-50 px-6 transition-all duration-300">
<div className="glass-panel rounded-full h-12 flex items-center justify-between px-2 pl-4">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-[4px] bg-white flex items-center justify-center">
<span className="text-black font-semibold tracking-tighter text-xs">TR</span>
</div>
<span className="font-medium tracking-widest text-xs text-white">TRAK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#ecosystem">Écosystème</a>
<a className="hover:text-white transition-colors" href="#features">Moteurs</a>
<a className="hover:text-white transition-colors" href="#app">App Client</a>
</div>
<div className="flex items-center">
<a className="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#pricing">
                    ONE <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="relative z-10 pt-48">

<section className="max-w-7xl mx-auto px-6 pb-40 flex flex-col items-center text-center relative">
<a className="group inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-12 hover:bg-white/[0.04] transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]" href="#pricing">
<div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border border-emerald-500/30 animate-[pulse-ring_2s_infinite]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
</div>
<span className="text-xs font-medium text-neutral-300">Offre ONE : 30 places restantes</span>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter max-w-5xl leading-[1.02] mb-8 text-gradient-hero">
                N'achète pas un outil.<br/>Rejoins un écosystème.
            </h1>
<p className="text-base md:text-xl text-neutral-400 max-w-2xl mb-12 font-normal leading-relaxed">
                Link-in-bio, CRM, builder et la seule app client connectée via NLU. L'architecture absolue pour scaler ton coaching.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto relative z-20">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium text-sm hover:scale-[1.02] transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2" href="#pricing">
                    Découvrir l'offre ONE <iconify-icon icon="solar:star-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 bg-black/50 rounded-full font-medium text-sm text-white hover:bg-white/5 transition-colors backdrop-blur-md flex items-center justify-center gap-2" href="#ecosystem">
                    Explorer la plateforme
                </a>
</div>

<div className="mt-32 w-full max-w-5xl relative h-[550px] flex justify-center perspective-[2000px]">

<div className="absolute z-20 w-full max-w-[850px] h-[500px] glass-premium rounded-[2rem] flex flex-col overflow-hidden animate-float">

<div className="h-14 border-b border-white/5 flex items-center px-6 gap-4 bg-white/[0.01]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-white/10 border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10 border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10 border border-white/10"></div>
</div>
<div className="ml-auto flex items-center gap-3">
<div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-neutral-400 flex items-center gap-2">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon> Vue Globale
                            </div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border border-white/10"></div>
</div>
</div>

<div className="flex-1 flex p-6 gap-6 relative">

<div className="w-56 flex flex-col gap-2">
<div className="h-9 rounded-lg bg-white/10 border border-white/10 flex items-center px-3 gap-3">
<iconify-icon className="text-white text-sm" icon="solar:widget-linear"></iconify-icon>
<div className="w-20 h-2 bg-white/40 rounded"></div>
</div>
<div className="h-9 rounded-lg hover:bg-white/5 flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="w-24 h-2 bg-neutral-600 rounded"></div>
</div>
<div className="h-9 rounded-lg hover:bg-white/5 flex items-center px-3 gap-3 transition-colors">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:wallet-money-linear"></iconify-icon>
<div className="w-16 h-2 bg-neutral-600 rounded"></div>
</div>

<div className="mt-auto p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear"></iconify-icon>
<div className="text-xs font-medium text-neutral-400">Croissance</div>
</div>
<div className="text-2xl font-medium text-white mb-2">€4,290</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="w-[65%] h-full bg-emerald-400 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col gap-6">

<div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.01] relative overflow-hidden flex flex-col p-5 group shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-start mb-4">
<div>
<div className="text-xs text-neutral-500 mb-1">Revenus Actifs</div>
<div className="text-xl font-medium text-white">€12,450.00</div>
</div>
<div className="px-2 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded text-xs">+14.2%</div>
</div>

<div className="flex-1 relative w-full flex items-end gap-1.5 opacity-80">

<div className="w-full bg-white/10 rounded-t-sm h-[20%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[35%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[30%] hover:bg-white/20 transition-colors"></div>
<div className="w-full bg-white/20 rounded-t-sm h-[50%] hover:bg-white/30 transition-colors"></div>
<div className="w-full bg-white/20 rounded-t-sm h-[45%] hover:bg-white/30 transition-colors"></div>
<div className="w-full bg-white/40 rounded-t-sm h-[65%] hover:bg-white/50 transition-colors"></div>
<div className="w-full bg-white/40 rounded-t-sm h-[60%] hover:bg-white/50 transition-colors"></div>

<div className="w-full bg-emerald-400/80 rounded-t-sm h-[85%] relative shadow-[0_0_20px_rgba(52,211,153,0.3)] group-hover:bg-emerald-400 transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">€2.1k</div>
</div>
<div className="w-full bg-white/10 rounded-t-sm h-[40%] hover:bg-white/20 transition-colors"></div>
</div>

<svg className="absolute inset-x-0 bottom-5 w-full h-[60%]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q10,75 20,60 T40,50 T60,35 T80,15 T100,50" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'}}></path>
</svg>
</div>

<div className="h-28 flex gap-4">
<div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between edge-top">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:user-check-linear"></iconify-icon>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
</div>
<div>
<div className="text-lg font-medium text-white">142</div>
<div className="text-xs text-neutral-500">Clients Actifs</div>
</div>
</div>
<div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex flex-col justify-between edge-top">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="solar:document-add-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-lg font-medium text-white">8</div>
<div className="text-xs text-neutral-500">Programmes créés</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute z-10 top-[10%] -left-[5%] w-56 h-auto glass-premium rounded-2xl p-5 animate-float-delayed transform -rotate-3 opacity-90 backdrop-blur-3xl border border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 p-[1px]">
<div className="w-full h-full bg-black rounded-full flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-xs font-medium text-white">Live Sync</div>
<div className="text-xs text-neutral-500">Séance terminée</div>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[100%] bg-emerald-400 rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500">
<span>Score SCE</span>
<span className="text-emerald-400">92/100</span>
</div>
</div>
</div>
<div className="absolute z-30 bottom-[15%] -right-[5%] w-64 glass-premium rounded-2xl p-1.5 animate-float transform rotate-2 backdrop-blur-3xl border border-white/10">
<div className="bg-black/40 rounded-xl p-4 border border-white/5">
<div className="flex justify-between items-center mb-3">
<div className="text-xs text-neutral-400 font-medium">Nouveau Paiement</div>
<iconify-icon className="text-neutral-500" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-xl font-medium text-white tracking-tight mb-1">+ €149.00</div>
<div className="text-xs text-neutral-500">Programme Hypertrophie</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black via-black/90 to-transparent z-40 pointer-events-none"></div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 relative z-50" id="ecosystem">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-gradient-hero">L'écosystème unifié.</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-xl leading-relaxed">Chaque outil dont tu as besoin, connecté nativement. Pas de Zapier, pas de friction. Une architecture conçue pour la performance.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[340px]">

<div className="md:col-span-8 glass-panel edge-top rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-white/10">

<div className="absolute -top-32 -left-32 w-64 h-64 bg-white/5 blur-[100px] rounded-full group-hover:bg-white/10 transition-colors duration-700"></div>
<div className="relative z-10 w-full md:w-1/2 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-xl text-white" icon="solar:link-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">trak.bio</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Ton terminal de vente pro. Profil, boutique, programmes. Tes prospects achètent sans jamais quitter la page d'atterrissage. Ultra-rapide.</p>
</div>

<div className="absolute right-[-5%] bottom-[-10%] w-[55%] h-[110%] bg-[#0a0a0a] border border-white/10 rounded-tl-3xl shadow-[-20px_-20px_60px_rgba(0,0,0,0.5)] transform rotate-[-4deg] group-hover:rotate-[-2deg] transition-transform duration-700 flex flex-col overflow-hidden edge-top">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-24 h-1.5 bg-white/10 rounded-full mx-auto"></div>
</div>
<div className="p-5 flex-1 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 self-center mb-2"></div>
<div className="w-32 h-2 bg-white/20 rounded-full self-center"></div>
<div className="w-20 h-1.5 bg-white/10 rounded-full self-center mb-4"></div>
<div className="w-full h-12 rounded-xl border border-white/10 bg-white/[0.03] flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-white/10"></div>
<div className="flex-1 h-1.5 bg-white/10 rounded-full"></div>
</div>
<div className="w-full h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center text-xs font-medium text-emerald-400">
                                S'abonner
                            </div>
</div>
</div>
</div>

<div className="md:col-span-4 glass-panel edge-top rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-white/10 flex flex-col">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:card-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">CRM &amp; Stripe</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Gère tes clients et abonnements avec une fluidité absolue.</p>
</div>
<div className="mt-auto relative h-32 w-full flex items-end justify-between gap-1 opacity-50 group-hover:opacity-100 transition-opacity duration-700">

<div className="w-full bg-white/20 rounded-t h-[20%]"></div>
<div className="w-full bg-white/30 rounded-t h-[40%]"></div>
<div className="w-full bg-white/40 rounded-t h-[30%]"></div>
<div className="w-full bg-emerald-400 rounded-t h-[70%] relative shadow-[0_0_15px_rgba(52,211,153,0.4)]">
<div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div className="w-full bg-white/20 rounded-t h-[50%]"></div>
</div>
</div>

<div className="md:col-span-4 glass-panel edge-top rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-white/10 flex flex-col">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl border border-emerald-500/20 bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-emerald-400" icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">56 Muscles</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Cartographie 3D et score de séance généré par 4 moteurs NLU.</p>
</div>

<div className="mt-auto relative w-32 h-32 self-center flex items-center justify-center">
<div className="absolute inset-0 border border-white/10 rounded-full"></div>
<div className="absolute inset-4 border border-white/5 rounded-full"></div>
<div className="absolute inset-8 border border-white/20 rounded-full"></div>

<div className="absolute inset-0 rounded-full overflow-hidden scan-animation"></div>

<div className="absolute top-4 right-8 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
<div className="absolute bottom-6 left-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
</div>
</div>

<div className="md:col-span-8 glass-panel edge-top rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-white/10">
<div className="flex flex-col md:flex-row h-full gap-8 relative z-10">
<div className="flex-1 flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-white" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Programme Builder</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-sm">Construis des séances complexes. Livre-les directement dans l'app mobile de ton client instantanément. L'ère du PDF est révolue.</p>
</div>

<div className="w-full md:w-[280px] h-full border border-white/10 rounded-2xl bg-[#080808] p-4 flex flex-col gap-3 shadow-inner relative edge-top">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-medium text-white">Séance Pull</div>
<div className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-neutral-300">Live</div>
</div>

<div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex gap-3 items-center group/item hover:bg-white/[0.05] transition-colors cursor-move">
<iconify-icon className="text-neutral-600 text-xs" icon="solar:hamburger-menu-linear"></iconify-icon>
<div className="w-8 h-8 rounded bg-white/5 border border-white/5"></div>
<div className="flex-1">
<div className="w-20 h-1.5 bg-white/30 rounded-full mb-2"></div>
<div className="flex gap-2">
<div className="w-8 h-1 bg-white/10 rounded-full"></div>
<div className="w-8 h-1 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-xl p-3 flex gap-3 items-center group/item hover:bg-white/[0.05] transition-colors cursor-move relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-400"></div>
<iconify-icon className="text-neutral-600 text-xs" icon="solar:hamburger-menu-linear"></iconify-icon>
<div className="w-8 h-8 rounded bg-white/5 border border-white/5"></div>
<div className="flex-1">
<div className="w-24 h-1.5 bg-white/30 rounded-full mb-2"></div>
<div className="flex gap-2">
<div className="w-8 h-1 bg-white/10 rounded-full"></div>
<div className="w-12 h-1 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-auto h-8 border border-dashed border-white/20 rounded-lg flex items-center justify-center text-xs text-neutral-500 hover:border-white/40 hover:text-white transition-colors cursor-pointer">
<iconify-icon className="mr-1" icon="solar:add-circle-linear"></iconify-icon> Ajouter
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-y border-white/[0.02] bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-gradient-hero">L'esthétique de la conversion.</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">Des templates trak.bio pensés par des créateurs, pour des créateurs. Un design minimaliste qui élève la valeur perçue de ton offre.</p>
</div>
<div className="relative w-full z-10">

<div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none"></div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-[50vw] pb-12 no-scrollbar mask-h-fade" style={{scrollPaddingLeft: '50vw'}}>

<div className="snap-center shrink-0 w-[280px] h-[580px] glass-premium rounded-[2.5rem] p-2 flex flex-col relative transform transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] border border-white/10">
<div className="w-full h-full bg-black rounded-[2rem] border border-white/5 flex flex-col relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10">
<div className="w-32 h-4 bg-[#020202] rounded-b-xl border-b border-x border-white/5"></div>
</div>
<div className="h-40 bg-gradient-to-br from-neutral-900 to-black relative">
<div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full bg-[#0a0a0a] border-4 border-black flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-neutral-800"></div>
</div>
</div>
<div className="pt-14 px-6 pb-6 flex flex-col h-full bg-[#0a0a0a]">
<div className="w-32 h-3 bg-white/20 rounded-full mb-2"></div>
<div className="w-48 h-2 bg-white/10 rounded-full mb-8"></div>
<div className="space-y-3">
<div className="h-14 w-full border border-white/10 rounded-2xl flex items-center px-4 gap-3 bg-white/[0.02] hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-white/10"></div>
<div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
</div>
<div className="h-14 w-full border border-white/10 rounded-2xl flex items-center px-4 gap-3 bg-white/[0.02] hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-white/10"></div>
<div className="flex-1 h-1.5 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="mt-auto h-12 w-full bg-white text-black text-xs font-medium rounded-2xl flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer">S'abonner</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] h-[580px] glass-premium rounded-[2.5rem] p-2 flex flex-col relative opacity-50 hover:opacity-100 transition-all hover:scale-[1.02] border border-white/5">
<div className="w-full h-full bg-[#050505] rounded-[2rem] border border-white/5 flex flex-col relative overflow-hidden items-center pt-16 px-6">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-10">
<div className="w-32 h-4 bg-[#050505] rounded-b-xl border-b border-x border-white/5"></div>
</div>
<div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 p-1">
<div className="w-full h-full rounded-full bg-emerald-500/20"></div>
</div>
<div className="w-32 h-3 bg-white/20 rounded-full mb-2"></div>
<div className="w-24 h-2 bg-white/10 rounded-full mb-10 text-center"></div>
<div className="w-full h-12 rounded-full border border-white/10 bg-white/5 mb-3 flex items-center justify-center">
<div className="w-20 h-1.5 bg-white/20 rounded-full"></div>
</div>
<div className="w-full h-12 rounded-full border border-white/10 bg-white/5 mb-3 flex items-center justify-center">
<div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32 relative" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4 text-gradient-hero">Le moteur de ton business.</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">Oublie les outils génériques. TRAK intègre des algorithmes d'analyse d'effort et un builder pensé pour la surcharge progressive.</p>
</div>

<div className="relative w-full">

<input checked="" className="hidden" id="tab1" name="tabs" type="radio"/>
<input className="hidden" id="tab2" name="tabs" type="radio"/>
<input className="hidden" id="tab3" name="tabs" type="radio"/>

<div className="flex justify-center mb-12 relative z-20">
<div className="tabs-nav inline-flex p-1 bg-[#0a0a0a] border border-white/10 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
<label className="cursor-pointer px-6 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white border border-transparent transition-all duration-300" htmlFor="tab1">
                            Builder Avancé
                        </label>
<label className="cursor-pointer px-6 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white border border-transparent transition-all duration-300" htmlFor="tab2">
                            Analytics SRM
                        </label>
<label className="cursor-pointer px-6 py-2.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white border border-transparent transition-all duration-300" htmlFor="tab3">
                            Score SCE
                        </label>
</div>
</div>

<div className="tabs-content relative min-h-[500px] glass-panel edge-top rounded-[2rem] p-8 md:p-16 overflow-hidden border border-white/10">

<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="content-1 hidden grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full relative z-10">
<div>
<div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-8 bg-white/5 shadow-sm">
<iconify-icon className="text-white" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-white">Crée en 5 minutes.<br/>Livre instantanément.</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                                Base d'exercices propriétaire avec +40 attributs. Définis séries, reps, tempo et RPE cible. Le programme se synchronise en temps réel dans l'app de ton client. 
                            </p>
<ul className="space-y-4 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Base de données bio-mécanique</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Templates réutilisables en 1 clic</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Ajustements live sans rechargement</li>
</ul>
</div>
<div className="relative h-[340px] border border-white/10 rounded-2xl bg-[#050505] overflow-hidden flex flex-col shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] edge-top">

<div className="h-10 bg-white/[0.02] border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="p-6 flex-1 flex flex-col gap-4 relative overflow-hidden">

<div className="w-full h-10 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 gap-3 mb-2">
<iconify-icon className="text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<div className="w-1/3 h-2 bg-white/20 rounded-full"></div>
</div>

<div className="space-y-3 relative z-10">
<div className="p-3 border border-white/10 bg-white/[0.02] rounded-xl flex items-center justify-between hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-white/10"></div><div className="w-24 h-2 bg-white/30 rounded-full"></div></div>
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-white">Ajouter</div>
</div>
<div className="p-3 border border-emerald-500/30 bg-emerald-500/10 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3"><div className="w-10 h-10 rounded-lg bg-emerald-500/20"></div><div className="w-32 h-2 bg-emerald-100/80 rounded-full"></div></div>
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#050505] to-transparent z-20"></div>
</div>
</div>
</div>

<div className="content-2 hidden grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full relative z-10">
<div>
<div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-8 bg-white/5 shadow-sm">
<iconify-icon className="text-white" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-white">Ne devine plus.<br/>Mesure l'invisible.</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                                Le SRM cartographie 56 muscles en temps réel. Vois quels muscles sont optimaux, fatigués ou négligés avant même de planifier la semaine.
                            </p>
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl edge-top">
<div className="text-3xl font-medium text-white tracking-tight mb-1">56</div>
<div className="text-xs text-neutral-500">Muscles suivis</div>
</div>
<div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl edge-top">
<div className="text-3xl font-medium text-white tracking-tight mb-1">4</div>
<div className="text-xs text-neutral-500">Moteurs d'analyse</div>
</div>
</div>
</div>
<div className="relative h-[340px] border border-white/10 rounded-2xl bg-[#050505] flex items-center justify-center overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] edge-top">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_70%)]"></div>
<div className="relative w-56 h-56 flex items-center justify-center">
<div className="absolute w-full h-full border border-white/10 rounded-full"></div>
<div className="absolute w-[70%] h-[70%] border border-white/10 rounded-full"></div>
<div className="absolute w-[40%] h-[40%] border border-white/20 rounded-full bg-white/[0.02]"></div>
<div className="absolute inset-0 rounded-full overflow-hidden scan-animation"></div>

<div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.8)] z-10 animate-pulse"></div>
<div className="absolute bottom-[25%] left-[20%] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"></div>
<div className="absolute bottom-[40%] right-[15%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10"></div>

<div className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm z-20">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="content-3 hidden grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full relative z-10">
<div>
<div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-8 bg-white/5 shadow-sm">
<iconify-icon className="text-white" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-4 text-white">Prouve tes résultats.<br/>Score SCE.</h3>
<p className="text-neutral-400 text-sm mb-8 leading-relaxed">
                                Le Score de Capacité Exploitée (SCE) quantifie l'efficacité de la séance sur 100. Basé sur le volume utile et la proximité à l'échec. La preuve mathématique de ton expertise.
                            </p>
<div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/[0.03] rounded-full text-xs font-medium text-white">
<iconify-icon className="text-emerald-400" icon="solar:bolt-linear"></iconify-icon> Conversion NLU (Neural Load Units)
                            </div>
</div>
<div className="relative h-[340px] border border-white/10 rounded-2xl bg-[#050505] flex items-center justify-center p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] edge-top">
<div className="w-full max-w-[240px] text-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none"></div>
<div className="text-xs text-neutral-500 mb-4 relative z-10">Score Global SCE</div>
<div className="text-7xl font-medium tracking-tighter text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] relative z-10">
                                    88<span className="text-3xl text-neutral-600">/100</span>
</div>
<div className="space-y-4 relative z-10">
<div>
<div className="flex justify-between text-xs mb-1.5"><span className="text-neutral-400">Stimulus Utile</span><span className="text-white">94%</span></div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="w-[94%] h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5"><span className="text-neutral-400">Couverture</span><span className="text-white">82%</span></div>
<div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="w-[82%] h-full bg-white/80 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-black border-y border-white/[0.02]" id="app">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0,transparent_60%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
<div className="order-2 lg:order-1 relative flex justify-center perspective-[2000px]">

<div className="w-[300px] h-[620px] rounded-[3rem] bg-[#020202] relative z-20 flex flex-col overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 iphone-frame">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-full z-40 flex items-center justify-between px-2">
<div className="w-2 h-2 rounded-full bg-white/10 ml-1"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(52,211,153,0.8)] mr-1"></div>
</div>

<div className="p-6 pt-16 bg-gradient-to-b from-neutral-900 to-[#020202] h-[45%] flex flex-col justify-end relative">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3)_0,transparent_50%)]"></div>
<div className="relative z-10">
<div className="inline-flex px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">Série 2/4</div>
<div className="text-3xl font-medium tracking-tight mb-2 text-white">Squat Bulgare</div>
<div className="text-xs text-neutral-400">Objectif: 8-10 reps @ RPE 8</div>
</div>
</div>
<div className="flex-1 p-6 flex flex-col gap-5 bg-[#020202]">
<div className="grid grid-cols-2 gap-4">
<div className="border border-white/10 bg-white/[0.03] p-5 rounded-[1.5rem] text-center flex flex-col items-center justify-center edge-top cursor-pointer hover:bg-white/[0.05] transition-colors">
<div className="text-4xl font-medium text-white mb-1">60</div>
<div className="text-xs text-neutral-500">KG</div>
</div>
<div className="border border-white/10 bg-white/[0.03] p-5 rounded-[1.5rem] text-center flex flex-col items-center justify-center edge-top cursor-pointer hover:bg-white/[0.05] transition-colors">
<div className="text-4xl font-medium text-white mb-1">10</div>
<div className="text-xs text-neutral-500">REPS</div>
</div>
</div>

<div className="mt-2">
<div className="flex justify-between text-xs text-neutral-500 mb-2 px-1">
<span>Facile</span>
<span>Échec</span>
</div>
<div className="border border-white/10 bg-white/[0.02] rounded-full h-12 flex items-center px-1.5 relative shadow-inner">
<div className="w-[80%] h-9 bg-white/10 rounded-full flex items-center justify-end px-4 text-xs font-medium text-white shadow-sm border border-white/5">
                                        RPE 8
                                    </div>
</div>
</div>
<div className="w-full py-4 bg-white text-black text-center rounded-[1.25rem] font-medium text-sm mt-auto shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-transform cursor-pointer">
                                Valider la série
                            </div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/30 rounded-full"></div>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[440px] glass-premium rounded-3xl border border-white/10 p-6 flex flex-col z-10 transform translate-x-10 rotate-[6deg] opacity-70 backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,1)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
<div className="text-xs text-neutral-400 font-medium">Live Sync Coach</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="h-14 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl flex items-center px-4 gap-4 edge-top">
<iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<div>
<div className="h-1.5 w-16 bg-emerald-100/80 rounded-full mb-1.5"></div>
<div className="h-1 w-10 bg-emerald-100/40 rounded-full"></div>
</div>
</div>
<div className="h-14 border border-white/5 bg-white/[0.02] rounded-2xl flex items-center px-4 gap-4 opacity-60">
<div className="w-5 h-5 rounded-full border border-white/20"></div>
<div>
<div className="h-1.5 w-20 bg-white/30 rounded-full mb-1.5"></div>
<div className="h-1 w-12 bg-white/10 rounded-full"></div>
</div>
</div>
<div className="h-24 border border-white/5 bg-white/[0.01] rounded-2xl mt-auto flex flex-col justify-center px-5 gap-3 opacity-40">
<div className="h-1.5 w-full bg-white/20 rounded-full"></div>
<div className="h-1.5 w-[70%] bg-white/20 rounded-full"></div>
<div className="h-1.5 w-[40%] bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-gradient-hero">La boucle est bouclée.<br/>L'App Client.</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10 leading-relaxed max-w-lg">
                        L'app n'est pas une option, c'est ce qui te rend irremplaçable. Saisie ultra-rapide en moins de 2 secondes. Ton client s'entraîne, les données remontent, ton tableau de bord s'illumine instantanément.
                    </p>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors shadow-sm">
<iconify-icon className="text-white text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1 text-white">Live Tracking</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Vois la séance de ton élève en direct : exercice en cours, historique de charge, temps de repos effectif.</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors shadow-sm">
<iconify-icon className="text-white text-xl" icon="solar:widget-add-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium mb-1 text-white">Expérience Unifiée</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Achats sur le web via trak.bio, programmes délivrés instantanément dans l'app mobile native.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="pricing">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0,transparent_60%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<div className="inline-block px-4 py-1.5 bg-white text-black text-xs font-semibold tracking-widest uppercase rounded-full mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]">Limité à 30 places</div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-4 text-gradient-hero">Offre Fondateurs : ONE</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Un prix bloqué à vie, des crédits de commission offerts et un accès direct aux fondateurs pour façonner l'outil de demain.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">

<div className="glass-panel edge-top rounded-[2.5rem] p-8 md:p-10 flex flex-col relative overflow-hidden group hover:bg-white/[0.02] transition-colors duration-500 border border-white/5 hover:border-white/10">
<div className="mb-10">
<div className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-4">Pour les audiences</div>
<h3 className="text-2xl font-medium tracking-tight text-white">CREATOR ONE</h3>
<div className="mt-4 flex items-baseline gap-3">
<span className="text-5xl font-medium tracking-tighter text-white">499€</span>
<span className="text-sm text-neutral-600 line-through">1190€</span>
</div>
<p className="text-xs text-neutral-500 mt-3 font-medium">Paiement unique, à vie. (2x ou 3x dispo)</p>
</div>
<div className="flex-1">
<ul className="space-y-4 text-sm text-neutral-400 mb-10">
<li className="flex items-center gap-3"><iconify-icon className="text-white shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon> Accès à vie au plan CREATOR</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span className="text-white font-medium">1 000€</span> de crédits commission</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon> Badge ONE permanent sur trak.bio</li>
</ul>
</div>
<a className="w-full py-4 border border-white/10 bg-white/5 text-white rounded-2xl font-medium text-sm text-center hover:bg-white/10 transition-colors shadow-sm" href="#">
                            Réserver CREATOR
                        </a>
</div>

<div className="card-glowing-border rounded-[2.5rem] p-[1px] md:scale-105 z-10 shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]">
<div className="bg-[#050505] rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full relative overflow-hidden edge-top">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium tracking-widest text-emerald-400 uppercase">Suivi individuel</div>
<div className="px-2.5 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded">Recommandé</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white">COACH ONE</h3>
<div className="mt-4 flex items-baseline gap-3">
<span className="text-6xl font-medium tracking-tighter text-white">499€</span>
<span className="text-base text-neutral-500 line-through">1190€</span>
</div>
<p className="text-xs text-neutral-400 mt-3 font-medium">Paiement unique, à vie. (2x ou 3x dispo)</p>
</div>
<div className="relative z-10 flex-1">
<ul className="space-y-4 text-sm text-neutral-300 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-white shrink-0 mt-0.5 text-xl" icon="solar:check-circle-bold"></iconify-icon> Accès à vie plan COACH (App incluse)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white shrink-0 mt-0.5 text-xl" icon="solar:check-circle-bold"></iconify-icon> <span className="text-white font-medium">2 000€</span> de crédits (0% frais TRAK)</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white shrink-0 mt-0.5 text-xl" icon="solar:check-circle-bold"></iconify-icon> Vote prioritaire sur la roadmap</li>
<li className="flex items-start gap-3"><iconify-icon className="text-white shrink-0 mt-0.5 text-xl" icon="solar:check-circle-bold"></iconify-icon> Migration VIP de tes données</li>
</ul>
</div>
<a className="relative z-10 w-full py-4 bg-white text-black rounded-2xl font-medium text-sm text-center hover:scale-[1.02] transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#">
                                Réserver COACH ONE
                            </a>
<div className="relative z-10 mt-4 text-xs text-center text-neutral-500 uppercase tracking-widest">Certification requise</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 relative z-10 border-t border-white/[0.05] mt-10">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-center text-white">Questions fréquentes</h2>
<div className="space-y-3">
<details className="group glass-panel rounded-2xl overflow-hidden transition-all duration-300 border border-white/5">
<summary className="flex items-center justify-between p-6 text-sm font-medium outline-none cursor-pointer hover:bg-white/[0.02] text-white">
                        C'est quoi exactement l'offre TRAKERS ONE ?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mx-6 mt-2">
                        30 places exclusives pour les early-adopters. En échange de ta confiance, tu obtiens : un prix bloqué à vie (-58%), des bonus crédits commission (jusqu'à 2 000€), le badge ONE, et un accès direct aux fondateurs pour voter sur les futures features. Quand c'est plein, l'offre disparaît définitivement.
                    </div>
</details>
<details className="group glass-panel rounded-2xl overflow-hidden transition-all duration-300 border border-white/5">
<summary className="flex items-center justify-between p-6 text-sm font-medium outline-none cursor-pointer hover:bg-white/[0.02] text-white">
                        Différence entre CREATOR ONE et COACH ONE ?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mx-6 mt-2">
                        La question fondamentale : est-ce que tu suis tes clients individuellement ?<br/><br/>
<span className="text-white font-medium">• Tu vends à une audience</span> (templates, ebooks) → CREATOR ONE<br/>
<span className="text-white font-medium">• Tu coaches en 1-to-1</span> (programmes perso, app client, live tracking) → COACH ONE
                    </div>
</details>
<details className="group glass-panel rounded-2xl overflow-hidden transition-all duration-300 border border-white/5">
<summary className="flex items-center justify-between p-6 text-sm font-medium outline-none cursor-pointer hover:bg-white/[0.02] text-white">
                        En quoi vos données sont différentes ?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform duration-300 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm text-neutral-400 leading-relaxed border-t border-white/5 mx-6 mt-2">
                        TRAK convertit chaque série en NLU (Neural Load Units) via 4 algorithmes d'analyse. Nous générons un profil de stress en 3D (neural, structurel, métabolique) et cartographions la fatigue sur 56 muscles précis. C'est de l'analyse prédictive pure, pas juste un carnet d'entraînement digital.
                    </div>
</details>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-[4px] bg-white flex items-center justify-center shadow-sm">
<span className="text-black font-semibold tracking-tighter text-xs">TR</span>
</div>
<span className="font-medium tracking-widest text-sm text-white">TRAK</span>
</div>
<p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
                    L'architecture absolue pour les professionnels du fitness. Link-in-bio, coaching premium, data prédictive et paiements unifiés dans un design sans aucun compromis.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Plateforme</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">trak.bio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Programme Builder</a></li>
<li><a className="hover:text-white transition-colors" href="#">App iOS &amp; Android</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics SRM</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Légal &amp; Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Le Manifeste</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacter l'équipe</a></li>
<li><a className="hover:text-white transition-colors" href="#">Conditions Générales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<p className="text-xs text-neutral-600 uppercase tracking-widest font-medium">© 2024 TRAK BUSINESS. DESIGNED IN PARIS.</p>
<div className="flex gap-5">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
