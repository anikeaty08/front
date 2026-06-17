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
      
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#1e2952] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-aurora"></div>
<div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-[#ff6b4a] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-aurora" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0f172a] rounded-full mix-blend-screen filter blur-[80px] opacity-40 animate-aurora" style={{animationDelay: '4s'}}></div>
</div>
<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050510]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff6b4a] shadow-[0_0_10px_#ff6b4a]"></div>
<span className="text-xl font-medium tracking-tight text-white font-serif">NIVO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#">LE PROGRAMME</a>
<a className="hover:text-white transition-colors duration-300" href="#">RÉSULTATS</a>
<a className="hover:text-white transition-colors duration-300" href="#">COMMUNAUTÉ</a>
</div>
<button className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white hover:bg-white/10 transition duration-300 backdrop-blur-sm">
                Connexion
            </button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24">
<section className="max-w-7xl mx-auto px-6 mb-24 pt-10 relative">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1 text-center md:text-left z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff6b4a] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff6b4a]"></span>
</span>
<span className="text-xs font-mono tracking-widest uppercase text-slate-400">Nouveau : Cohorte 21 Jours</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Debuggez votre <span className="italic text-slate-500">posture</span><br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">en 21 jours chrono.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed">
                        Étudiants, Devs, Freelances : vous passez votre vie assis. NIVO est le correctif système pour éliminer le mal de dos et retrouver votre focus.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="group relative px-8 py-4 rounded-full bg-[#ff6b4a] text-[#050510] text-lg font-medium hover:bg-[#ff856b] transition-all duration-300 shadow-[0_0_20px_-5px_#ff6b4a]">
<span>Lancer le programme</span>
<i className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 rounded-full border border-white/10 text-white text-lg hover:bg-white/5 transition duration-300 backdrop-blur-sm flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                            Voir la méthode
                        </button>
</div>
</div>
<div className="flex-1 relative w-full flex justify-center md:justify-end z-10 h-[500px] md:h-[700px] items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#ff6b4a] opacity-20 blur-[100px] rounded-full mix-blend-screen"></div>
<img alt="Human Spine Architecture" className="relative w-auto max-w-[120%] h-auto md:h-[110%] object-contain mix-blend-screen animate-float grayscale-[20%] contrast-125" src="image_38c8ce.jpg"/>
<div className="absolute top-[25%] right-[15%] bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded text-[10px] font-mono text-[#ff6b4a] animate-pulse">
                        ⚠ ALERT :: TECH NECK DETECTED
                    </div>
<div className="absolute bottom-[30%] left-[10%] bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded text-[10px] font-mono text-slate-300">
                        STATUS :: ALIGNMENT IN PROGRESS...
                    </div>
</div>
</div>
</section>
<section className="max-w-4xl mx-auto px-6 -mt-20 mb-40 relative z-30">
<div className="rounded-2xl bg-[#0a0a16]/80 backdrop-blur-xl border border-white/10 p-1 shadow-2xl overflow-hidden ring-1 ring-white/5 transform hover:scale-[1.01] transition duration-500">
<div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-slate-500 uppercase tracking-widest">Suivi_Programme_Jour_12.app</div>
</div>
<div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-around">
<div className="text-center">
<div className="text-sm text-slate-500 mb-2 font-mono uppercase tracking-wider">Douleurs Lombaires</div>
<div className="text-5xl font-mono text-white tracking-tighter">-80<span className="text-[#ff6b4a] text-lg">%</span></div>
<div className="text-xs text-[#ff6b4a] mt-2 flex items-center justify-center gap-1 font-mono bg-[#ff6b4a]/10 px-2 py-1 rounded">
<i className="w-3 h-3" data-lucide="trending-down"></i> Nette amélioration
                        </div>
</div>
<div className="h-16 w-[1px] bg-white/10 hidden md:block"></div>
<div className="space-y-4 w-full md:w-auto">
<div className="flex items-center justify-between gap-12 text-sm text-slate-300 group cursor-pointer">
<span className="group-hover:text-white transition">J01 : Décompression Col.</span>
<i className="w-5 h-5 text-[#ff6b4a]" data-lucide="check-circle-2"></i>
</div>
<div className="flex items-center justify-between gap-12 text-sm text-slate-300 group cursor-pointer">
<span className="group-hover:text-white transition">J07 : Correction "Bossu"</span>
<i className="w-5 h-5 text-[#ff6b4a]" data-lucide="check-circle-2"></i>
</div>
<div className="flex items-center justify-between gap-12 text-sm text-slate-500 opacity-60">
<span>J12 : Routine Anti-Siège</span>
<div className="w-5 h-5 rounded-full border border-slate-600 border-dashed animate-spin-slow"></div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-6xl mx-auto px-6 mb-40">
<div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
<div>
<span className="text-[#ff6b4a] font-mono text-xs tracking-widest uppercase mb-2 block">Architecture du Programme</span>
<h2 className="font-serif text-4xl text-white tracking-tight">La Roadmap 21 Jours</h2>
</div>
<div className="hidden md:flex gap-2 items-center px-3 py-1 bg-white/5 rounded border border-white/10">
<div className="w-2 h-2 rounded-full bg-[#ff6b4a] animate-pulse"></div>
<span className="text-slate-500 font-mono text-[10px] uppercase">ACCESSIBLE À TOUS</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-7 group relative rounded-3xl bg-[#0a0a16] border border-white/10 overflow-hidden hover:border-[#ff6b4a]/50 transition duration-500">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="relative p-8 h-full flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
<i className="w-6 h-6 text-[#ff6b4a]" data-lucide="map"></i>
</div>
<span className="font-mono text-xs text-slate-500 border border-white/10 px-2 py-1 rounded">V2.0 :: PROTOCOLE</span>
</div>
<div className="mt-8">
<h3 className="text-2xl text-white font-medium mb-2">Les 3 Phases de Reconstruction</h3>
<p className="text-slate-400 font-light leading-relaxed mb-8 text-sm">
                                Un plan progressif conçu pour s'intégrer à votre emploi du temps chargé. 15 minutes par jour, pas de matériel complexe.
                            </p>
<div className="w-full flex items-end gap-1 h-24 pb-2 border-b border-white/5">
<div className="flex-1 flex flex-col justify-end gap-2 group-hover:translate-y-[-5px] transition duration-500">
<span className="text-[9px] text-slate-500 text-center font-mono">SEMAINE 1</span>
<div className="w-full bg-white/10 h-10 rounded-t-sm relative"><div className="absolute bottom-0 w-full h-1 bg-white/30"></div></div>
<span className="text-[10px] text-white text-center">SOULAGER</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group-hover:translate-y-[-10px] transition duration-700 delay-100">
<span className="text-[9px] text-slate-500 text-center font-mono">SEMAINE 2</span>
<div className="w-full bg-white/20 h-16 rounded-t-sm relative"><div className="absolute bottom-0 w-full h-1 bg-white/40"></div></div>
<span className="text-[10px] text-white text-center">ALIGNER</span>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group-hover:translate-y-[-15px] transition duration-1000 delay-200">
<span className="text-[9px] text-[#ff6b4a] text-center font-mono">SEMAINE 3</span>
<div className="w-full bg-gradient-to-t from-[#ff6b4a]/20 to-[#ff6b4a] h-24 rounded-t-sm relative shadow-[0_0_20px_-5px_#ff6b4a]"><div className="absolute bottom-0 w-full h-1 bg-white/50"></div></div>
<span className="text-[10px] text-white text-center font-bold">RENFORCER</span>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-5 flex flex-col gap-6">
<div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
<div className="absolute right-0 top-0 p-32 bg-[#ff6b4a] opacity-5 blur-[80px] rounded-full group-hover:opacity-10 transition duration-500"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg text-white font-medium">Focus &amp; Productivité</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" data-lucide="brain-circuit"></i>
</div>
<p className="text-sm text-slate-400 font-light mb-6">Arrêtez d'être distrait par votre mal de dos. Une meilleure posture = un cerveau mieux oxygéné.</p>
<div className="flex justify-between text-[10px] font-mono text-slate-500 mb-1">
<span>SESSION DE DEEP WORK</span>
<span className="text-[#ff6b4a]">+45 MIN</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="h-full bg-[#ff6b4a] w-[0%] group-hover:w-[85%] transition-all duration-1000 ease-out shadow-[0_0_10px_#ff6b4a]"></div>
</div>
</div>
</div>
<div className="flex-1 group relative p-6 rounded-3xl bg-[#0a0a16] border border-white/10 hover:border-white/30 transition duration-300 overflow-hidden">
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg text-white font-medium">Hacks de Bureau</h3>
<i className="w-5 h-5 text-slate-500 group-hover:text-[#ff6b4a] transition" data-lucide="laptop-2"></i>
</div>
<p className="text-sm text-slate-400 font-light mb-4">Des micro-exercices invisibles à faire pendant vos calls ou vos sessions de code.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:bg-white/10 transition">ASSIS</span>
<span className="px-2 py-1 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:bg-white/10 transition">DEBOUT</span>
<span className="px-2 py-1 rounded text-[10px] font-mono bg-[#ff6b4a]/10 border border-[#ff6b4a]/20 text-[#ff6b4a]">SANS MATÉRIEL</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 flex flex-col items-center mb-32">
<div className="text-center mb-20">
<h2 className="font-serif text-5xl text-white tracking-tight mb-4">Rejoindre la Bêta</h2>
<p className="text-xl text-slate-400 font-light">Accès immédiat au programme complet + Mises à jour.</p>
</div>
<div className="relative group cursor-pointer perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-b from-[#ff6b4a] to-purple-900 rounded-[24px] blur-2xl opacity-20 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative w-[340px] bg-[#050505] rounded-[24px] border border-white/10 p-2 flex flex-col shadow-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:rotate-1">
<div className="h-full w-full rounded-[20px] border border-white/5 bg-[#0a0a10] relative overflow-hidden flex flex-col">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 rounded-full bg-black border border-white/10"></div>
<div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
<div className="scanline hidden group-hover:block"></div>
<div className="p-8 border-b border-white/5 relative z-10 pt-12">
<div className="flex justify-between items-center mb-8">
<span className="font-serif text-2xl text-white tracking-tight italic">NIVO</span>
<div className="px-2 py-1 rounded border border-[#ff6b4a]/30 bg-[#ff6b4a]/10 text-[9px] font-mono text-[#ff6b4a] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff6b4a] animate-pulse"></span>
                                    ACCÈS À VIE
                                </div>
</div>
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-7 h-7 text-slate-400 group-hover:text-white transition" data-lucide="user-check"></i>
</div>
<div className="space-y-0.5">
<div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">Type de membre</div>
<div className="text-white font-mono text-sm tracking-wider text-[#ff6b4a]">FONDATEUR / TIER 1</div>
</div>
</div>
</div>
<div className="p-8 relative z-10 flex flex-col justify-center bg-gradient-to-b from-transparent to-black/40">
<div className="mb-8">
<span className="text-5xl font-medium text-white tracking-tighter">49€</span>
<span className="text-slate-500 text-sm line-through ml-2">99€</span>
</div>
<ul className="space-y-4 text-sm text-slate-300 font-light mb-2">
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#ff6b4a]/10 flex items-center justify-center"><i className="w-3 h-3 text-[#ff6b4a]" data-lucide="check"></i></div>
                                    Programme Vidéo 21 Jours
                                </li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#ff6b4a]/10 flex items-center justify-center"><i className="w-3 h-3 text-[#ff6b4a]" data-lucide="check"></i></div>
                                    Accès Communauté Discord
                                </li>
<li className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#ff6b4a]/10 flex items-center justify-center"><i className="w-3 h-3 text-[#ff6b4a]" data-lucide="check"></i></div>
                                    Guide PDF "Setup Ergonomique"
                                </li>
</ul>
</div>
<div className="p-4 bg-white/5 border-t border-white/5 relative z-10">
<button className="w-full py-3 rounded bg-white text-black font-medium text-sm hover:bg-[#ff6b4a] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                                Commencer maintenant
                            </button>
<div className="mt-4 flex justify-between items-end opacity-20 h-6 mx-2">
<div className="w-[2px] h-full bg-white"></div>
<div className="w-[4px] h-2/3 bg-white"></div>
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[3px] h-1/2 bg-white"></div>
<div className="w-[6px] h-full bg-white"></div>
<div className="w-[2px] h-3/4 bg-white"></div>
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[5px] h-2/3 bg-white"></div>
<div className="w-[2px] h-full bg-white"></div>
<div className="w-[2px] h-full bg-white"></div>
<div className="w-[4px] h-2/3 bg-white"></div>
<div className="w-[1px] h-full bg-white"></div>
<div className="w-[3px] h-1/2 bg-white"></div>
<div className="w-[6px] h-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-8 text-xs text-slate-600 font-mono tracking-widest flex items-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> PAIEMENT SÉCURISÉ • SATISFAIT OU REMBOURSÉ
            </p>
</section>
</main>
<footer className="border-t border-white/5 bg-[#020205] relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#ff6b4a]"></div>
<span className="font-serif text-lg text-white">NIVO © 2024</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-[#ff6b4a] transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-[#ff6b4a] transition-colors" href="#">CGV</a>
<a className="hover:text-[#ff6b4a] transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</footer>


    </>
  );
}
