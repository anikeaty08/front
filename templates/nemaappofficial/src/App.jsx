import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-zinc-700/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-white/5 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-zinc-800/10 rounded-full blur-[80px]"></div>
<div className="absolute inset-0 bg-noise opacity-30 z-[1]"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl bg-black/40 border-white/5 backdrop-blur-xl">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
                nema.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#features">Funzionalità</a>
<a className="hover:text-white transition-colors duration-300" href="#privacy">Privacy</a>
</div>
<div className="flex items-center gap-4">
<a className="text-white text-xs bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-full transition-all backdrop-blur-md" href="#download">
                    Scarica l'app
                </a>
<button className="md:hidden text-zinc-300">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-40 pb-20 md:pt-48 md:pb-32 px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center mb-16 relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<span className="flex h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span>
<span className="text-xs font-medium text-zinc-300">Nuova versione 2.0 disponibile</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tight mb-8 leading-[1.05]">
                Riflessi di te.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed">
                Il diario che evolve con te. Trasforma il caos dei pensieri in chiarezza cristallina grazie all'intelligenza artificiale.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<i className="w-5 h-5 fill-current" data-lucide="apple"></i>
<span>App Store</span>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-panel text-white rounded-full font-medium transition-all hover:bg-white/10">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
<span>Google Play</span>
</button>
</div>
</div>

<div className="relative max-w-[320px] md:max-w-[360px] mx-auto perspective-1000 mt-12">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-white/10 blur-[90px] -z-10 rounded-full"></div>

<div className="relative rounded-[3rem] p-3 glass-panel border-white/20 shadow-2xl">
<div className="relative rounded-[2.5rem] bg-[#080808] overflow-hidden h-[700px] border border-white/5 shadow-inner">

<div className="absolute top-4 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-full z-20 flex items-center justify-end px-3 gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
</div>

<div className="h-full flex flex-col bg-gradient-to-b from-zinc-900/50 to-black text-zinc-200">
<header className="pt-16 px-6 pb-6 flex items-center justify-between">
<span className="text-lg font-medium text-white tracking-tight">Mercoledì 24</span>
<div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
</header>
<main className="flex-1 px-6 space-y-6 relative overflow-y-auto no-scrollbar mask-gradient pb-20">

<div className="glass-panel p-5 rounded-2xl bg-white/5">
<p className="text-xs font-medium text-zinc-400 mb-2 uppercase tracking-wide">Riflessione del giorno</p>
<p className="text-white text-lg leading-snug">"La calma non è assenza di tempesta, ma pace nel mezzo di essa."</p>
</div>
<div className="space-y-3">
<p className="text-xs text-zinc-500 font-medium ml-1">ENTRIES RECENTI</p>
<div className="glass-panel p-4 rounded-xl bg-white/5 border-l-4 border-l-white/80 flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="cloud"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">Un po' di ansia</h4>
<p className="text-xs text-zinc-500">10:42 AM • Lavoro</p>
</div>
</div>
<div className="glass-panel p-4 rounded-xl bg-white/5 border-l-4 border-l-zinc-600 flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-zinc-400" data-lucide="sun"></i>
</div>
<div>
<h4 className="text-white text-sm font-medium">Passeggiata</h4>
<p className="text-xs text-zinc-500">08:15 AM • Salute</p>
</div>
</div>
</div>
<div className="glass-panel p-1 rounded-xl flex items-center gap-2 mt-4 bg-white/5">
<div className="w-full h-10 px-3 flex items-center text-sm text-zinc-500 italic">Scrivi qualcosa...</div>
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-lg shadow-white/10">
<i className="w-5 h-5 text-black" data-lucide="arrow-up"></i>
</div>
</div>
</main>

<div className="absolute bottom-6 left-6 right-6 h-16 glass-panel rounded-2xl flex items-center justify-around z-30 bg-black/60 backdrop-blur-xl">
<i className="w-5 h-5 text-white" data-lucide="home"></i>
<div className="w-10 h-10 -mt-8 bg-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] border-4 border-[#080808]">
<i className="w-6 h-6 text-black" data-lucide="plus"></i>
</div>
<i className="w-5 h-5 text-zinc-500" data-lucide="bar-chart-2"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Trasparenza emotiva.</h2>
<p className="text-zinc-400 text-lg">Tecnologia che scompare per lasciare spazio a ciò che conta davvero.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<i className="w-6 h-6 text-white" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Analisi Profonda</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        L'IA decodifica i pattern dei tuoi pensieri, rivelando connessioni emotive che potresti non aver notato.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<i className="w-6 h-6 text-white" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Crittografia Blindata</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        I tuoi segreti rimangono tali. Architettura zero-knowledge dove neanche noi possiamo leggere i tuoi diari.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl relative group overflow-hidden transition-all duration-500 hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
<i className="w-6 h-6 text-white" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Fluid Design</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Un'interfaccia liquida e reattiva che si adatta al tuo stato d'animo, con transizioni morbide e colori calmanti.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Semplicità di cristallo.</h2>
<div className="space-y-6">
<div className="group flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
<div className="flex-none w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-medium text-sm shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform">1</div>
<div>
<h4 className="text-white font-medium mb-2 text-lg">Input Libero</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Dimentica la grammatica. Parla o scrivi come se ti sfogassi con un amico fidato.</p>
</div>
</div>
<div className="group flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
<div className="flex-none w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-medium text-sm shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform">2</div>
<div>
<h4 className="text-white font-medium mb-2 text-lg">Sintesi AI</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Nema analizza il tono, il sentimento e i temi ricorrenti in tempo reale.</p>
</div>
</div>
<div className="group flex gap-6 p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5">
<div className="flex-none w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center font-medium text-sm shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform">3</div>
<div>
<h4 className="text-white font-medium mb-2 text-lg">Chiarezza</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Ricevi un riassunto strutturato e consigli pratici per migliorare il tuo benessere.</p>
</div>
</div>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-500/10 to-white/5 blur-3xl -z-10"></div>
<div className="glass-panel rounded-3xl border border-white/10 p-10 aspect-square flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="space-y-4">
<div className="flex items-center gap-3 mb-6">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
<div className="w-3 h-3 rounded-full bg-zinc-600"></div>
<div className="w-3 h-3 rounded-full bg-zinc-500"></div>
</div>
<div className="space-y-3 opacity-60">
<div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
<div className="h-2 w-full bg-white/20 rounded-full"></div>
<div className="h-2 w-5/6 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl bg-zinc-800/50 border-white/10 mt-auto">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-white rounded-lg">
<i className="w-4 h-4 text-black" data-lucide="sparkles"></i>
</div>
<span className="text-zinc-300 text-sm font-medium">Insight generato</span>
</div>
<p className="text-white text-sm">"Sembra che la tua ansia sia legata alla performance. Prova a concentrarti sul processo, non sul risultato."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-4xl mx-auto px-6 text-center relative">
<i className="w-10 h-10 text-white/20 mx-auto mb-8" data-lucide="quote"></i>
<h3 className="text-2xl md:text-4xl font-medium text-white tracking-tight leading-relaxed mb-10 drop-shadow-lg">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 via-white to-zinc-500">"Un'esperienza visiva e mentale.</span> <br/>Non ho mai usato un'app così bella e utile allo stesso tempo."
            </h3>
<div className="glass-panel inline-flex items-center gap-4 p-2 pr-6 rounded-full bg-black/40">
<div className="w-10 h-10 bg-gradient-to-tr from-zinc-500 to-zinc-800 rounded-full flex items-center justify-center text-white font-medium shadow-lg">E</div>
<div className="text-left">
<p className="text-white text-sm font-medium">Elena S.</p>
<p className="text-zinc-500 text-xs">Designer</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden" id="download">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-5xl font-semibold text-white tracking-tight mb-8">Inizia a riflettere.</h2>
<p className="text-zinc-400 text-lg mb-12">Scarica nema. e unisciti a migliaia di persone che hanno trovato la loro chiarezza.</p>
<button className="group px-10 py-5 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] relative overflow-hidden">
<span className="relative z-10 flex items-center gap-2">Scarica ora <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i></span>
</button>
<div className="mt-10 flex justify-center gap-6 text-zinc-600">
<span className="flex items-center gap-2 text-xs uppercase tracking-widest"><i className="w-4 h-4" data-lucide="smartphone"></i> iOS &amp; Android</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 relative bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
<span className="text-sm font-bold text-white">n.</span>
</div>
<span className="text-zinc-500 text-sm">© 2024 nema labs.</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>


    </>
  );
}
