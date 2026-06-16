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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grain"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-100/40 blur-[100px]"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px]"></div>
</div>

<div className="fixed top-6 left-0 right-0 z-40 flex justify-center px-6">
<nav className="glass-panel rounded-full px-2 py-2 shadow-sm shadow-slate-200/50 flex items-center gap-1 max-w-fit transition-all hover:scale-[1.01] duration-300">
<a className="px-4 py-2 flex items-center gap-2 rounded-full hover:bg-slate-100/50 transition-colors" href="#">
<iconify-icon className="text-emerald-700 text-lg" icon="solar:water-sun-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-slate-900 hidden sm:block uppercase">GABON MARÉE</span>
</a>
<div className="h-4 w-px bg-slate-200 mx-2 hidden sm:block"></div>
<div className="flex items-center gap-1">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-white transition-all" href="#arrivages">Catalogue</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-white transition-all" href="#clients">Partenaires</a>
<a className="hidden md:block text-xs font-medium text-slate-500 hover:text-slate-900 px-4 py-2 rounded-full hover:bg-white transition-all" href="#avis">Avis</a>
</div>
<a className="ml-2 bg-emerald-950 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2 group" href="#contact">
<span>Commander</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>
</div>

<main className="pt-32 pb-16 md:pt-48 md:pb-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-[10px] uppercase tracking-widest font-semibold text-slate-500 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Arrivage Mayumba : Disponible
                    </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 leading-[0.95] lg:leading-[0.9]">
                        La fraîcheur <br/>
<span className="font-serif italic text-emerald-800 font-light pr-4 block mt-2">de nos côtes.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                        De l'océan Atlantique à votre table. Nous livrons les meilleurs produits de la mer aux particuliers et restaurateurs de Libreville.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white text-sm font-medium rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:-translate-y-1 duration-300" href="#arrivages">
                            Voir le catalogue
                            <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:shop-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-medium rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-3" href="#histoire">
<iconify-icon className="text-lg text-slate-400" icon="solar:play-circle-linear"></iconify-icon>
                            Notre démarche
                        </a>
</div>
</div>

<div className="flex-1 w-full relative perspective-1000">
<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] group">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white shadow-2xl shadow-emerald-900/10 lg:rotate-[-2deg] transition-all duration-700 hover:rotate-0 z-10">
<img alt="Pêcheur Gabonais Pirogue" className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1534043464124-383240e87903?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] uppercase tracking-widest opacity-80">Zone de pêche</p>
<p className="font-serif italic text-lg">Cap Estérias</p>
</div>
</div>
</div>
</div>

<div className="hidden md:block absolute -top-8 -right-8 w-56 bg-white p-5 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 z-20 animate-float" style={{animationDelay: '1s'}}>
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Qualité</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:verified-check-linear"></iconify-icon>
</div>
<p className="text-2xl font-serif text-slate-900 italic">Premium</p>
<p className="text-xs text-slate-400 mt-1">Sélectionné pièce par pièce à l'arrivée des pirogues.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-slate-200/60 bg-white overflow-hidden relative" id="clients">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium uppercase tracking-widest text-slate-400">Ils cuisinent nos produits</p>
</div>
<div className="flex w-full">
<div className="flex items-center gap-16 animate-scroll whitespace-nowrap min-w-full pl-16">

<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-xl font-serif font-medium text-slate-900">Radisson Blu</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<span className="text-xl font-bold tracking-tight text-slate-900">L'ODIKA</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<iconify-icon className="text-2xl" icon="solar:wineglass-triangle-linear"></iconify-icon>
<span className="text-xl font-medium text-slate-900">Le Confidentiel</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<span className="text-xl font-serif italic text-slate-900">Maman Dédé</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<span className="text-xl font-bold text-slate-900 tracking-tighter">MAYENA</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<iconify-icon className="text-2xl" icon="solar:fire-linear"></iconify-icon>
<span className="text-xl font-medium text-slate-900">La Braise</span>
</div>

<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
<span className="text-xl font-serif font-medium text-slate-900">Radisson Blu</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<span className="text-xl font-bold tracking-tight text-slate-900">L'ODIKA</span>
</div>
<div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
<iconify-icon className="text-2xl" icon="solar:wineglass-triangle-linear"></iconify-icon>
<span className="text-xl font-medium text-slate-900">Le Confidentiel</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="arrivages">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Trésors du <span className="font-serif italic text-emerald-700">Komudalo</span></h2>
<p className="text-slate-500 font-light max-w-md">Une sélection authentique de nos eaux tropicales. Fraîcheur garantie du filet à l'assiette.</p>
</div>

<div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl">
<button className="px-4 py-2 bg-white text-slate-900 shadow-sm rounded-lg text-xs font-semibold transition-all">Tout</button>
<button className="px-4 py-2 text-slate-500 hover:text-slate-900 text-xs font-medium transition-all">Crustacés</button>
<button className="px-4 py-2 text-slate-500 hover:text-slate-900 text-xs font-medium transition-all">Poissons</button>
<button className="px-4 py-2 text-slate-500 hover:text-slate-900 text-xs font-medium transition-all">Fumé</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[340px]">

<div className="md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Langouste" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559742811-822873691df8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase rounded-full border border-white/10">
                            Best-Seller
                        </span>
</div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end mb-2">
<h3 className="text-3xl font-serif italic text-white">Langouste Royale</h3>
<span className="text-emerald-400 font-medium text-lg">25.000 F <span className="text-xs font-light text-white/70">/ kg</span></span>
</div>
<p className="text-slate-300 text-sm font-light line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                La reine des crustacés gabonais. Chair ferme et délicate, parfaite pour les grillades braisées. Pêchée la nuit précédente.
                            </p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
<button className="flex-1 bg-white text-slate-900 py-3 rounded-xl text-xs font-semibold tracking-wide uppercase hover:bg-emerald-50 transition-colors">
                                    Commander
                                </button>
<button className="w-12 h-10 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 flex flex-col group relative overflow-hidden">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-50">
<img alt="Gambas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="mt-auto">
<h3 className="text-lg font-medium text-slate-900 mb-1">Gambas Tigrées</h3>
<p className="text-xs text-slate-500 mb-4 font-light">Calibre géant, pêche locale</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-slate-900">18.000 F <span className="text-xs font-normal text-slate-400">/ kg</span></span>
<button className="w-9 h-9 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-200 hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 flex flex-col group relative overflow-hidden">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-50">
<img alt="Capitaine" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-auto">
<h3 className="text-lg font-medium text-slate-900 mb-1">Capitaine Frais</h3>
<p className="text-xs text-slate-500 mb-4 font-light">Entier, vidé et écaillé</p>
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-slate-900">7.500 F <span className="text-xs font-normal text-slate-400">/ kg</span></span>
<button className="w-9 h-9 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center border border-slate-200 hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 bg-emerald-950 rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden group">

<div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
<iconify-icon className="absolute -right-8 -top-8 text-9xl text-emerald-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<iconify-icon className="text-emerald-400 mb-6" icon="solar:chef-hat-heart-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-medium mb-2 tracking-tight">Espace Pro</h3>
<p className="text-emerald-100/70 text-sm font-light leading-relaxed">
                            Restaurateurs ? Accédez à nos tarifs de gros et livraisons prioritaires.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors mt-8" href="#contact">
                        Demander un accès
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="md:col-span-2 lg:col-span-1 bg-orange-50 rounded-[2rem] p-6 border border-orange-100 flex flex-col justify-between group relative overflow-hidden">
<div className="relative z-10">
<span className="px-2 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase rounded mb-3 inline-block">Promo</span>
<h3 className="text-xl font-medium text-slate-900">Mérou Rouge</h3>
<p className="text-sm text-slate-500 mt-1">Idéal bouillon</p>
</div>
<div className="absolute bottom-[-15%] right-[-15%] w-48 h-48 transition-transform duration-500 group-hover:scale-110">
<img className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white" src="https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-16 relative z-10">
<span className="text-xl font-semibold text-slate-900">8.000 F <span className="text-xs font-normal text-slate-500">/ kg</span></span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-sm font-medium text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-all bg-white shadow-sm hover:shadow-md">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                    Télécharger la grille tarifaire PDF
                </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="avis">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-500 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Ils nous font confiance</h2>
<p className="text-slate-400 font-light">La satisfaction de nos clients est notre meilleure publicité.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-dark p-8 rounded-3xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex gap-1 text-orange-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic leading-relaxed mb-8 flex-grow">
                        "En tant que chef, la régularité est clé. Gabon Marée me livre des capitaines d'une fraîcheur irréprochable chaque mardi et vendredi. Un vrai partenaire."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white text-sm font-medium">Chef Marc O.</p>
<p className="text-slate-500 text-xs">Restaurant Le Phare</p>
</div>
</div>
</div>

<div className="glass-dark p-8 rounded-3xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 bg-white/5">
<div className="flex gap-1 text-orange-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic leading-relaxed mb-8 flex-grow">
                        "Les langoustes pour l'anniversaire de mon mari étaient incroyables. Livrées à l'heure à Akanda, bien emballées. Je recommande à 100%."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 text-sm font-medium">
                            SJ
                        </div>
<div>
<p className="text-white text-sm font-medium">Sarah Johnson</p>
<p className="text-slate-500 text-xs">Particulier, Akanda</p>
</div>
</div>
</div>

<div className="glass-dark p-8 rounded-3xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
<div className="flex gap-1 text-orange-400 mb-6 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light italic leading-relaxed mb-8 flex-grow">
                        "Enfin un service sérieux. Les prix sont corrects pour la qualité proposée. Le mérou rouge est excellent pour le bouillon."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-white text-sm font-medium">Paul M.</p>
<p className="text-slate-500 text-xs">Particulier, LBV</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="glass-panel p-1 rounded-[2.5rem] shadow-2xl shadow-emerald-900/10">
<div className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 border border-slate-50 overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -mr-20 -mt-20 z-0"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Passez commande</h2>
<p className="text-slate-500 font-light">Envoyez-nous votre liste, nous vous confirmons le stock et le prix dans l'heure.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-emerald-700 shrink-0">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">WhatsApp Direct</p>
<p className="text-xs text-slate-500">Réponse immédiate 8h-18h</p>
<a className="text-xs text-emerald-600 font-medium hover:underline mt-1 block" href="#">+241 074 00 00 00</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 shrink-0">
<iconify-icon icon="solar:scooter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Livraison</p>
<p className="text-xs text-slate-500">2000 FCFA sur Libreville</p>
<p className="text-xs text-slate-500">Gratuit &gt; 50.000 FCFA</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Nom</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900/10 transition-all outline-none text-sm placeholder:text-slate-300" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Téléphone</label>
<input className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900/10 transition-all outline-none text-sm placeholder:text-slate-300" placeholder="074..." type="tel"/>
</div>
<div className="space-y-1 md:col-span-2">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Quartier</label>
<select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900/10 transition-all outline-none text-sm text-slate-600">
<option>Centre-ville</option>
<option>Louis / Quaben</option>
<option>Akanda / Angondjé</option>
<option>Owendo</option>
<option>Autre</option>
</select>
</div>
<div className="md:col-span-2 space-y-1">
<label className="text-[10px] uppercase tracking-widest font-bold text-slate-400 ml-1">Commande</label>
<textarea className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900/10 transition-all outline-none text-sm placeholder:text-slate-300 resize-none" placeholder="Ex: 2kg de Gambas et 1 capitaine..." rows="3"></textarea>
</div>
<div className="md:col-span-2 pt-2 flex justify-end">
<button className="w-full md:w-auto bg-emerald-900 text-white px-8 py-4 rounded-xl font-medium text-sm hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 group">
                                        Confirmer la commande
                                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-emerald-700 text-xl" icon="solar:water-sun-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900 uppercase">GABON MARÉE</span>
</a>
<p className="text-slate-400 font-light max-w-sm mb-6 leading-relaxed text-sm">
                        La référence des produits de la mer au Gabon. Nous connectons la pêche artisanale locale aux meilleures tables du pays dans le respect de l'environnement.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="logos:facebook" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="logos:instagram-icon" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Produits</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-emerald-700 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-slate-300"></span> Crustacés</a></li>
<li><a className="hover:text-emerald-700 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-slate-300"></span> Poissons nobles</a></li>
<li><a className="hover:text-emerald-700 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-slate-300"></span> Fumaisons</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest text-slate-900 mb-6">Légal</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-emerald-700 transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-light">
<p>© 2024 Gabon Marée. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>Système opérationnel</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
