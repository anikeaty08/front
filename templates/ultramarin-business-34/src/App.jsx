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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030014]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#030014]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full group-hover:bg-indigo-500/40 transition-all duration-500"></div>
<i className="relative z-10 w-5 h-5 text-indigo-400" data-lucide="butterfly"></i>
</div>
<span className="font-display font-bold text-lg tracking-tight text-white">MORPHO</span>
</div>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5" href="#problem">Le Plafond de Verre</a>
<a className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5" href="#solution">Le Système</a>
</div>
<button className="group relative px-5 py-2 bg-white text-black text-xs font-semibold rounded-full overflow-hidden transition-all hover:scale-105">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    Audit Flash (Offert)
                    <i className="w-3 h-3 fill-current" data-lucide="zap"></i>
</span>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48">
<div className="max-w-6xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[10px] font-semibold text-indigo-200 uppercase tracking-widest">Réservé CA &gt; 500k€</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                Briser l'isolement.<br/>
                Scaler l'<span className="text-indigo-400 text-glow">Outre-mer</span>.
            </h1>
<p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Votre marché est insulaire, pas votre ambition. Transformez les contraintes logistiques et humaines en levier de monopole.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-lg font-semibold text-sm transition-transform hover:-translate-y-1">
<span className="flex items-center justify-center gap-2">
                        Accéder au Protocole Morpho
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40"></div>
</button>
<button className="w-full sm:w-auto px-8 py-4 text-zinc-400 hover:text-white transition-colors text-sm font-medium border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-lg flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Voir la démo (1min)
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-4xl perspective-1000">
<div className="absolute inset-0 bg-indigo-500 blur-[100px] opacity-20 pointer-events-none"></div>
<div className="relative bg-[#0A0A0B] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000">
<div className="flex items-center gap-4 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-32 bg-white/5 rounded text-[10px] flex items-center px-2 text-zinc-500 font-mono">morpho_system_v2.exe</div>
</div>

<div className="p-8 grid grid-cols-3 gap-6">
<div className="col-span-2 space-y-4">
<div className="flex items-center justify-between">
<div className="h-8 w-32 bg-white/10 rounded animate-pulse"></div>
<div className="h-6 w-12 bg-green-500/20 text-green-400 text-xs flex items-center justify-center rounded border border-green-500/30">+24%</div>
</div>
<div className="h-32 w-full bg-gradient-to-r from-indigo-500/10 to-transparent rounded border border-indigo-500/20 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 right-0 h-full w-full" preserveaspectratio="none">
<path d="M0,100 C150,50 350,0 600,100 L600,130 L0,130 Z" fill="rgba(99, 102, 241, 0.2)"></path>
</svg>
</div>
</div>
<div className="col-span-1 space-y-3">
<div className="h-20 w-full bg-white/5 rounded border border-white/5 p-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 mb-2 flex items-center justify-center"><i className="w-4 h-4 text-indigo-400" data-lucide="package"></i></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
<div className="h-20 w-full bg-white/5 rounded border border-white/5 p-3">
<div className="w-8 h-8 rounded bg-purple-500/20 mb-2 flex items-center justify-center"><i className="w-4 h-4 text-purple-400" data-lucide="users"></i></div>
<div className="h-2 w-16 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-white">L'Effet Île : <span className="text-zinc-500">Diagnostic</span></h2>
<p className="text-zinc-400 max-w-xl">Pourquoi les méthodes classiques de métropole échouent-elles systématiquement dans nos territoires ?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-[#08080A] border border-white/10 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-white">
<i className="w-5 h-5" data-lucide="container"></i>
</div>
<h3 className="font-display text-2xl font-medium text-white mb-2">La Friction Logistique</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                                Cash flow étranglé par 45 jours de mer. Ruptures de stock imprévisibles. Votre BFR explose pendant que vos concurrents attendent le même conteneur.
                            </p>
</div>
<div className="mt-8 border-t border-white/5 pt-6 flex gap-8">
<div>
<span className="block text-2xl font-display text-white mb-1">45j+</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Délai moyen</span>
</div>
<div>
<span className="block text-2xl font-display text-red-400 mb-1">-30%</span>
<span className="text-xs text-zinc-500 uppercase tracking-wide">Marge effective</span>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px]"></div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#08080A] border border-white/10 hover:border-white/20 transition-all duration-500 p-8">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-white" data-lucide="arrow-up-right"></i>
</div>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="users-2"></i>
</div>
<h3 className="font-display text-lg font-medium text-white mb-2">Talents &amp; Mercenaires</h3>
<p className="text-zinc-400 text-xs leading-relaxed">
                        Le marché est petit. Tout le monde se connaît. Recruter un top manager sans alerter la concurrence est un art que vous ne maîtrisez pas.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-[#08080A] border border-white/10 hover:border-white/20 transition-all duration-500 p-8">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="network"></i>
</div>
<h3 className="font-display text-lg font-medium text-white mb-2">Plafond de Verre Insulaire</h3>
<p className="text-zinc-400 text-xs leading-relaxed">
                        Vous avez saturé le marché local. L'export vers les îles voisines ou la métropole semble être une montagne administrative insurmontable.
                    </p>
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050508]" id="solution">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight">
                        De l'Artisanat au <span className="text-indigo-400">Système Industriel</span>.
                    </h2>
<p className="text-zinc-400 text-lg">
                        Morpho n'est pas une formation. C'est l'installation d'un OS (Operating System) pour votre entreprise. On remplace l'intuition par la data.
                    </p>
<div className="space-y-4">

<div className="group border-l-2 border-indigo-500 pl-6 py-2 cursor-pointer transition-all">
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-indigo-400 transition-colors">1. Standardisation Radicale</h3>
<p className="text-zinc-500 text-sm">Création de Playbooks pour chaque poste. Votre entreprise doit pouvoir tourner avec 50% d'effectif intérimaire si nécessaire.</p>
</div>

<div className="group border-l-2 border-white/10 pl-6 py-2 cursor-pointer hover:border-white/30 transition-all">
<h3 className="text-zinc-300 font-medium text-lg mb-1 group-hover:text-white transition-colors">2. Finance Prédictive</h3>
<p className="text-zinc-600 text-sm group-hover:text-zinc-500">Modélisation du BFR spécifique import/export. On ne regarde plus le compte en banque, on regarde le prévisionnel à 12 semaines.</p>
</div>

<div className="group border-l-2 border-white/10 pl-6 py-2 cursor-pointer hover:border-white/30 transition-all">
<h3 className="text-zinc-300 font-medium text-lg mb-1 group-hover:text-white transition-colors">3. Recrutement Magnétique</h3>
<p className="text-zinc-600 text-sm group-hover:text-zinc-500">Construction d'une marque employeur qui attire les expatriés de retour au pays et les talents locaux ambitieux.</p>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
<div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-red-500/50"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
<div className="h-3 w-3 rounded-full bg-green-500/50"></div>
</div>
<div className="text-[10px] text-zinc-500">DASHBOARD_Q3_2024</div>
</div>

<div className="flex items-end justify-between h-48 gap-2 mb-6 px-4">
<div className="w-full bg-zinc-800/50 rounded-t h-[40%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 px-2 py-1 rounded">Avant</div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t h-[50%]"></div>
<div className="w-full bg-zinc-800/50 rounded-t h-[45%]"></div>
<div className="w-full bg-indigo-500/30 border border-indigo-500/50 rounded-t h-[65%] relative group">
<div className="absolute inset-0 bg-indigo-400/20 blur-sm"></div>
</div>
<div className="w-full bg-indigo-500 rounded-t h-[85%] relative shadow-[0_0_20px_rgba(99,102,241,0.5)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-indigo-300 font-bold bg-zinc-900 border border-indigo-500/30 px-2 py-1 rounded whitespace-nowrap">Après Morpho</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-zinc-500 mb-1">Marge Nette</div>
<div className="text-xl font-display text-white">+18.5%</div>
</div>
<div className="bg-white/5 rounded-lg p-3">
<div className="text-xs text-zinc-500 mb-1">Temps Dirigeant</div>
<div className="text-xl font-display text-white">-12h/sem</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Le diagnostic est <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">gratuit</span>.
                <br/>L'inaction coûte cher.
            </h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                Rejoignez 150+ dirigeants ultramarins. Recevez immédiatement notre audit interne "15 points de friction" pour identifier ce qui freine votre scale.
            </p>
<form className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex bg-[#0A0A0B] rounded-lg p-1.5 border border-white/10 items-center">
<input className="flex-1 bg-transparent text-white px-4 py-3 focus:outline-none placeholder:text-zinc-600 text-sm font-medium" placeholder="email@entreprise.com" type="email"/>
<button className="bg-white hover:bg-zinc-200 text-black px-6 py-3 rounded-md font-semibold text-sm transition-colors whitespace-nowrap shadow-lg shadow-white/10" type="submit">
                        Recevoir l'audit
                    </button>
</div>
<p className="text-xs text-zinc-600 mt-4 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> Données sécurisées. Pas de spam.
                </p>
</form>
</div>
</section>
<footer className="border-t border-white/5 bg-[#020205] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-white" data-lucide="butterfly"></i>
<span className="font-display font-bold text-white tracking-widest text-xs">MORPHO SYSTEM</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Manifeste</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">Twitter/X</a>
<a className="text-xs text-zinc-600 hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>


    </>
  );
}
