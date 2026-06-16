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
      

<nav className="fixed w-full z-50 backdrop-blur-xl border-b bg-white/90 border-gray-100">
<div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tight" href="#">PerformHA</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#666666]">
<a className="hover:text-[#111111] transition-colors" href="#">Accueil</a>
<a className="hover:text-[#111111] transition-colors" href="#">Produits &amp; Services</a>
<a className="hover:text-[#111111] transition-colors" href="#">Partenaires</a>
<a className="hover:text-[#111111] transition-colors" href="#">À propos</a>
<a className="hover:text-[#111111] transition-colors" href="#">FAQ</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#666666] hover:text-[#111111] transition-colors" href="#">Se connecter</a>
<a className="bg-[#111111] text-xs font-medium px-5 py-3 rounded-full hover:bg-[#DB5227] transition-all duration-300 shadow-lg text-white shadow-black/5" href="#">
                    Demander un devis
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-gray-50/80 to-white pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#DB5227]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="space-y-8 animate-fade-in">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[#DB5227] text-xs font-semibold tracking-wide uppercase bg-orange-50 border-orange-100">
                    Tarifs Réseau Exclusifs
                </span>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.05] text-[#111111]">
                    La Centrale d'Achats des <span className="text-[#888888]">Réseaux Automobiles.</span>
</h1>
<p className="text-lg lg:text-xl text-[#666666] max-w-lg leading-relaxed font-normal">
                    Optimisez vos frais généraux de près de 30% grâce à des tarifs pré-négociés auprès de plus de 100 fournisseurs référencés.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="bg-[#111111] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#DB5227] transition-colors duration-300 shadow-xl text-white shadow-black/5" href="#">
                        Nos Partenaires
                    </a>
<a className="border text-[#111111] px-8 py-4 rounded-full text-sm font-medium transition-colors bg-white border-gray-200 hover:bg-gray-50" href="#">
                        Catalogue Général
                    </a>
</div>
</div>

<div className="relative h-[500px] lg:h-[650px] w-full animate-fade-in delay-200 perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto z-10 rounded-2xl shadow-2xl overflow-hidden border shadow-gray-200 border-gray-100 bg-white">
<img alt="Plateforme d'achat centralisée PerformHA" className="opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="flex bg-gradient-to-t to-transparent from-black/50 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="text-white">
<p className="text-sm font-medium opacity-90">Plateforme Unifiée</p>
<p className="text-xl font-semibold tracking-tight">PerformHA Central</p>
</div>
</div>
</div>


<div className="absolute top-10 right-0 lg:-right-4 w-48 p-3 rounded-xl shadow-lg border animate-fade-in delay-300 z-20 hover:-translate-y-1 transition-transform duration-500 bg-white border-gray-100">
<div className="h-24 rounded-lg overflow-hidden mb-3 relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-gray-900">Outillage &amp; Équipement</span>
<iconify-icon className="text-[#DB5227] text-lg" icon="solar:wrench-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-20 left-0 lg:-left-8 w-44 p-3 rounded-xl shadow-lg border animate-fade-in delay-300 z-20 hover:-translate-y-1 transition-transform duration-500 bg-white border-gray-100">
<div className="h-24 rounded-lg overflow-hidden mb-3">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-gray-900">Pièces &amp; Stockage</span>
<iconify-icon className="text-[#DB5227] text-lg" icon="solar:box-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-1/3 left-0 lg:-left-12 w-40 p-3 rounded-xl shadow-lg border animate-fade-in delay-300 z-0 scale-90 blur-[1px] bg-white border-gray-100">
<div className="h-20 rounded-lg overflow-hidden mb-2">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] font-semibold text-gray-900">Bureautique</span>
<iconify-icon className="text-base text-gray-400" icon="solar:laptop-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 bg-white border-gray-100">
<div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="group p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-transparent bg-gray-50 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white border-gray-100">
<iconify-icon className="text-2xl text-[#111111]" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-[#111111]">Réduisez vos coûts immédiatement</h3>
<p className="leading-relaxed text-sm text-[#666666] mb-8">
                    Tarifs négociés au niveau national avec plus de 500 partenaires référencés pour optimiser vos marges dès le premier jour.
                </p>
<a className="inline-flex items-center text-xs font-semibold text-[#111111] group-hover:text-[#DB5227] transition-colors uppercase tracking-wide" href="#">
                    Découvrir les partenaires <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-transparent bg-gray-50 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white border-gray-100">
<iconify-icon className="text-2xl text-[#111111]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-[#111111]">Partenaires validés uniquement</h3>
<p className="leading-relaxed text-sm text-[#666666] mb-8">
                    Chaque partenaire est sélectionné, testé et déployé auprès des agents et concessions pour garantir qualité et fiabilité.
                </p>
<a className="inline-flex items-center text-xs font-semibold text-[#111111] group-hover:text-[#DB5227] transition-colors uppercase tracking-wide" href="#">
                    Voir les solutions <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-transparent bg-gray-50 hover:bg-white hover:shadow-gray-200/40 hover:border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8 border shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white border-gray-100">
<iconify-icon className="text-2xl text-[#111111]" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-[#111111]">Un accompagnement dédié</h3>
<p className="leading-relaxed text-sm text-[#666666] mb-8">
                    PerformHA vous accompagne avant, pendant et après la mise en place des solutions pour assurer votre satisfaction.
                </p>
<a className="inline-flex items-center text-xs font-semibold text-[#111111] group-hover:text-[#DB5227] transition-colors uppercase tracking-wide" href="#">
                    En savoir plus <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
<img alt="Architecture Bureau Corporate" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/20"></div>
</div>
<div className="pl-0 lg:pl-10">
<span className="text-[#DB5227] text-xs font-semibold tracking-wide uppercase mb-6 block">Notre promesse, votre satisfaction</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-12 text-[#111111]">
                    PerformHA en <br/>chiffres clés.
                </h2>
<div className="grid grid-cols-2 gap-x-12 gap-y-16">
<div>
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+25</div>
<div className="text-[#666666] text-sm font-medium">Années d'expérience</div>
</div>
<div className="">
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+10K</div>
<div className="text-[#666666] text-sm font-medium">Clients satisfaits</div>
</div>
<div className="">
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+30%</div>
<div className="text-[#666666] text-sm font-medium">Économies sur achats</div>
</div>
<div>
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+100</div>
<div className="text-[#666666] text-sm font-medium">Partenaires Actifs</div>
</div>
<div className="">
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+500</div>
<div className="text-[#666666] text-sm font-medium">Garages</div>
</div>
<div>
<div className="text-4xl lg:text-5xl font-semibold text-[#111111] mb-2 tracking-tight">+12k</div>
<div className="text-[#666666] text-sm font-medium">Concessions</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-[1440px] mx-auto px-6 text-center">
<p className="text-xs font-semibold text-[#666666] uppercase tracking-wider mb-10">Ils font confiance à notre expertise dans le secteur automobile</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#111111]"><div className="w-6 h-6 bg-[#111111] rounded-full"></div>Boltshift</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#111111]"><div className="w-6 h-6 border-2 border-[#111111] rounded"></div>Lightbox</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#111111]"><div className="w-6 h-6 bg-[#111111] transform rotate-45"></div>FeatherDev</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#111111]"><div className="w-6 h-6 border-2 border-[#111111] rounded-full"></div>Spherule</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#111111]"><div className="w-6 h-6 bg-[#111111] rounded-lg"></div>GlobalBank</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-16 text-[#111111]">Témoignages Clients</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-10 rounded-2xl border shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white border-gray-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] font-bold text-xs bg-gray-100">GR</div>
<span className="text-xs font-bold tracking-wider uppercase text-[#666666]">Groupe Rossel</span>
</div>
<p className="text-lg text-[#111111] font-medium leading-relaxed mb-8">
                        "L'adhésion à PerformHA a transformé notre structure de coûts. La simplicité d'accès aux contrats cadres est un atout majeur pour nos 15 sites."
                    </p>
<div className="text-sm">
<span className="block text-[#111111] font-semibold">Philippe Rodriguez</span>
<span className="text-[#666666]">Directeur Général, Garage P</span>
</div>
</div>

<div className="p-10 rounded-2xl border shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white border-gray-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] font-bold text-xs bg-gray-100">TA</div>
<span className="text-xs font-bold tracking-wider uppercase text-[#666666]">TechAuto SAS</span>
</div>
<p className="text-lg text-[#111111] font-medium leading-relaxed mb-8">
                        "Les économies générées dès le premier trimestre ont couvert nos frais d'adhésion pour les cinq prochaines années. Un retour sur investissement immédiat."
                    </p>
<div className="text-sm">
<span className="block text-[#111111] font-semibold">Sarah Connor</span>
<span className="text-[#666666]">Directrice Financière</span>
</div>
</div>

<div className="p-10 rounded-2xl border shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white border-gray-100">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[#111111] font-bold text-xs bg-gray-100">AF</div>
<span className="text-xs font-bold tracking-wider uppercase text-[#666666]">AutoFix Réseau</span>
</div>
<p className="text-lg text-[#111111] font-medium leading-relaxed mb-8">
                        "Un support incroyable de l'équipe. La transition a été transparente et les résultats sur nos marges nettes ont été visibles dès la première facture."
                    </p>
<div className="text-sm">
<span className="block text-[#111111] font-semibold">Jean Dupont</span>
<span className="text-[#666666]">Gérant, AutoFix</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="rounded-[2.5rem] p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-20 border relative overflow-hidden bg-gray-50 border-gray-100">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br to-transparent rounded-full -translate-y-1/2 translate-x-1/3 from-gray-100"></div>
<div className="max-w-xl relative z-10">
<span className="text-[#DB5227] font-semibold text-xs tracking-wide uppercase mb-6 block">Accès catalogues</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8 text-[#111111]">
                        Le référentiel PerformHA, <br/> à portée de main.
                    </h2>
<p className="text-[#666666] text-lg mb-12 leading-relaxed font-light">
                        Retrouvez l'ensemble des solutions et partenaires référencés PerformHA, conçus pour accompagner votre activité au quotidien.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center bg-[#111111] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#333333] transition-colors shadow-lg text-white shadow-black/5" href="#">
                            Catalogue Digital <iconify-icon className="ml-2 text-lg" icon="solar:download-linear"></iconify-icon>
</a>
<a className="inline-flex items-center border text-[#111111] px-8 py-4 rounded-full text-sm font-medium transition-colors bg-white border-gray-200 hover:bg-gray-50" href="#">
                            Catalogue PDF <iconify-icon className="ml-2 text-lg" icon="solar:file-text-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative w-72 h-96 lg:w-[400px] lg:h-[520px] rounded-2xl shadow-2xl flex items-center justify-center transform lg:rotate-6 lg:hover:rotate-0 transition-transform duration-700 ease-out border z-10 group cursor-pointer bg-white shadow-gray-200 border-gray-100">
<div className="absolute inset-0 bg-gradient-to-br rounded-2xl from-white to-gray-50"></div>
<div className="text-center relative z-10">
<div className="w-24 h-24 bg-[#111111] rounded-full mx-auto mb-8 flex items-center justify-center group-hover:bg-[#DB5227] transition-colors duration-500 shadow-xl text-white">
<iconify-icon className="text-4xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#111111] block mb-2">Édition 2024</span>
<span className="text-sm text-[#666666]">Guide des Partenaires</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-[#111111]">Nos Partenaires Principaux</h2>
<p className="text-[#666666] text-lg font-light">Les solutions les plus plébiscitées par les réseaux automobiles.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 relative group bg-white border-gray-100 hover:shadow-gray-100/50 hover:border-gray-200">
<div className="absolute top-4 right-4 text-[#DB5227] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-orange-50">-25%</div>
<div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 text-[#111111] bg-gray-50">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3 text-[#111111]">Boltshift</h3>
<p className="text-[#666666] text-sm mb-8 leading-relaxed h-10">La référence réseau pour la sécurisation des batteries d'atelier.</p>
<a className="inline-block w-full py-3 text-[#111111] text-xs font-semibold uppercase tracking-wide rounded-lg group-hover:bg-[#DB5227] group-hover:text-white transition-all bg-gray-50" href="#">Voir la Solution</a>
</div>

<div className="border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 relative group bg-white border-gray-100 hover:shadow-gray-100/50 hover:border-gray-200">
<div className="absolute top-4 right-4 text-[#DB5227] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-orange-50">-30%</div>
<div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 text-[#111111] bg-gray-50">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3 text-[#111111]">Lightbox</h3>
<p className="text-[#666666] text-sm mb-8 leading-relaxed h-10">Solutions de packaging premium pour la distribution de pièces.</p>
<a className="inline-block w-full py-3 text-[#111111] text-xs font-semibold uppercase tracking-wide rounded-lg group-hover:bg-[#DB5227] group-hover:text-white transition-all bg-gray-50" href="#">Voir la Solution</a>
</div>

<div className="border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 relative group bg-white border-gray-100 hover:shadow-gray-100/50 hover:border-gray-200">
<div className="absolute top-4 right-4 text-[#DB5227] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-orange-50">-35%</div>
<div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 text-[#111111] bg-gray-50">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3 text-[#111111]">FeatherDev</h3>
<p className="text-[#666666] text-sm mb-8 leading-relaxed h-10">Logiciels légers pour la gestion de garage et facturation.</p>
<a className="inline-block w-full py-3 text-[#111111] text-xs font-semibold uppercase tracking-wide rounded-lg group-hover:bg-[#DB5227] group-hover:text-white transition-all bg-gray-50" href="#">Voir la Solution</a>
</div>

<div className="border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 relative group bg-white border-gray-100 hover:shadow-gray-100/50 hover:border-gray-200">
<div className="absolute top-4 right-4 text-[#DB5227] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide bg-orange-50">-20%</div>
<div className="w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300 text-[#111111] bg-gray-50">
<iconify-icon className="text-2xl" icon="solar:globe-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-lg mb-3 text-[#111111]">Spherule</h3>
<p className="text-[#666666] text-sm mb-8 leading-relaxed h-10">Logistique globale et transport pour pièces lourdes.</p>
<a className="inline-block w-full py-3 text-[#111111] text-xs font-semibold uppercase tracking-wide rounded-lg group-hover:bg-[#DB5227] group-hover:text-white transition-all bg-gray-50" href="#">Voir la Solution</a>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-[#111111] px-8 py-4 rounded-full hover:bg-opacity-90 transition-all shadow-lg text-white shadow-black/10" href="#">
                    Voir tous les partenaires <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="bg-[#DB5227] rounded-[2rem] p-12 lg:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-2xl shadow-orange-900/20">

<div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl bg-white"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl bg-black"></div>
<span className="relative z-10 inline-block px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase mb-8 backdrop-blur-sm border-white/30 text-white">
                    Offre Limitée
                </span>
<h2 className="relative z-10 text-4xl lg:text-7xl font-bold tracking-tighter mb-8 max-w-4xl leading-tight text-white">
                    Performance Days 2024.
                </h2>
<p className="relative z-10 text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed font-light text-white/90">
                    Conditions exclusives pour toute nouvelle adhésion avant la fin du mois. Améliorez votre pouvoir d'achat dès aujourd'hui.
                </p>
<a className="relative z-10 text-[#DB5227] px-12 py-5 rounded-full text-sm font-bold uppercase tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-105 duration-300 bg-white hover:bg-gray-50 shadow-black/10" href="#">
                    Découvrir l'offre
                </a>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-white">
<div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
<div className="hidden lg:flex h-[500px] border rounded-3xl items-center justify-center relative overflow-hidden group bg-gray-50 border-gray-100">
<div className="absolute inset-0 bg-gradient-to-tr opacity-50 from-gray-100 to-white"></div>
<iconify-icon className="text-9xl group-hover:text-[#DB5227] group-hover:scale-110 transition-all duration-500 text-gray-200" icon="solar:document-add-linear"></iconify-icon>
</div>
<div className="">
<span className="text-[#DB5227] text-xs font-semibold tracking-wide uppercase mb-4 block">Rejoindre PerformHA</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8 text-[#111111]">Bulletin d'Adhésion</h2>
<p className="text-[#666666] text-lg mb-12 leading-relaxed font-light">
                    Notre adhésion 100% réseau vous garantit une indépendance totale. Notre modèle économique et nos statuts assurent que nous agissons exclusivement dans votre intérêt.
                </p>
<div className="space-y-4">
<a className="flex items-center justify-center w-full bg-[#111111] text-center py-4 rounded-xl text-sm font-semibold hover:bg-[#333333] transition-all text-white" href="#">
                        Accéder au formulaire <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]">
<div className="max-w-[1440px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-[#111111]">Dernières Actualités PerformHA</h2>
<p className="text-[#666666] max-w-xl mx-auto font-light">Informations, partenariats et temps forts du réseau PerformHA.</p>
<a className="inline-block mt-8 px-6 py-2 border text-[#111111] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#DB5227] hover:border-[#DB5227] transition-all bg-white border-gray-200 hover:text-white" href="#">
                    Toutes les actualités
                </a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="h-64 rounded-2xl mb-6 overflow-hidden border relative bg-gray-200 border-gray-100">
<div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 bg-black/10"></div>
<img alt="News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-[#DB5227] uppercase tracking-widest">Partenariat</span>
<h3 className="text-xl font-semibold leading-tight group-hover:text-[#DB5227] transition-colors text-[#111111]">Alliance Stratégique Bosch 2024</h3>
<p className="text-[#666666] text-sm leading-relaxed line-clamp-2">PerformHA annonce une collaboration majeure pour sécuriser les chaînes d'approvisionnement électroniques.</p>
<span className="inline-flex items-center text-xs font-bold uppercase tracking-wider pt-2 text-[#111111]">Lire l'article <iconify-icon className="ml-1 text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-64 rounded-2xl mb-6 overflow-hidden border relative bg-gray-200 border-gray-100">
<div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 bg-black/10"></div>
<img alt="News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-[#DB5227] uppercase tracking-widest">Tech</span>
<h3 className="text-xl font-semibold leading-tight group-hover:text-[#DB5227] transition-colors text-[#111111]">Lancement Plateforme Digitale</h3>
<p className="text-[#666666] text-sm leading-relaxed line-clamp-2">Découvrez les nouveaux outils mis à disposition de tous les adhérents dès le mois prochain.</p>
<span className="inline-flex items-center text-xs font-bold uppercase tracking-wider pt-2 text-[#111111]">Lire l'article <iconify-icon className="ml-1 text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-64 rounded-2xl mb-6 overflow-hidden border relative bg-gray-200 border-gray-100">
<div className="absolute inset-0 group-hover:bg-transparent transition-colors z-10 bg-black/10"></div>
<img alt="News" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2232&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-bold text-[#DB5227] uppercase tracking-widest">Réseau</span>
<h3 className="text-xl font-semibold leading-tight group-hover:text-[#DB5227] transition-colors text-[#111111]">Convention Annuelle : Bilan</h3>
<p className="text-[#666666] text-sm leading-relaxed line-clamp-2">Retour sur les moments forts de notre grand rassemblement annuel à Lyon.</p>
<span className="inline-flex items-center text-xs font-bold uppercase tracking-wider pt-2 text-[#111111]">Lire l'article <iconify-icon className="ml-1 text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 border-gray-100 bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-center tracking-tight mb-4 text-[#111111]">Les Groupements</h2>
<p className="text-center text-[#666666] mb-16 font-light">PerformHA s'appuie sur des groupements automobiles engagés.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="border rounded-2xl p-10 flex flex-col items-center text-center transition-colors duration-300 bg-white border-gray-100 hover:border-gray-300">
<div className="flex w-20 h-20 rounded-2xl mb-8 items-center justify-center text-[#111111] bg-gray-50">
<iconify-icon className="text-4xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-8 px-4 text-[#111111]">Groupement des Concessionnaires Automobiles Peugeot</h3>
<a className="mt-auto text-[#111111] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-[#DB5227] transition-all bg-gray-50 hover:text-white" href="#">Visiter le site</a>
</div>

<div className="border rounded-2xl p-10 flex flex-col items-center text-center transition-colors duration-300 bg-white border-gray-100 hover:border-gray-300">
<div className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-[#111111] bg-gray-50">
<iconify-icon className="text-4xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-8 px-4 text-[#111111]">Groupement des Agents Automobiles Peugeot</h3>
<a className="mt-auto text-[#111111] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-[#DB5227] transition-all bg-gray-50 hover:text-white" href="#">Visiter le site</a>
</div>

<div className="border rounded-2xl p-10 flex flex-col items-center text-center transition-colors duration-300 bg-white border-gray-100 hover:border-gray-300">
<div className="w-20 h-20 rounded-2xl mb-8 flex items-center justify-center text-[#111111] bg-gray-50">
<iconify-icon className="text-4xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="font-semibold text-base mb-8 px-4 text-[#111111]">Groupement des Concessionnaires Citroën &amp; DS</h3>
<a className="mt-auto text-[#111111] text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-[#DB5227] transition-all bg-gray-50 hover:text-white" href="#">Visiter le site</a>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] pt-24 pb-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter mb-10 text-[#111111] leading-tight">
                Vous souhaitez bénéficier de conditions négociées adaptées à votre activité ?
            </h2>
<a className="inline-block hover:bg-[#B9421E] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#DB5227]/20 text-sm font-bold uppercase tracking-wide bg-[#DB5227] rounded-full px-12 py-5 text-white" href="#">
                Contactez PerformHA
            </a>
</div>
</section>

<footer className="pt-24 pb-12 border-t bg-white border-gray-100">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
<div className="">
<h4 className="font-bold text-xl mb-8 tracking-tight text-[#111111]">PerformHA</h4>
<address className="not-italic text-[#666666] text-sm leading-relaxed mb-6 font-light">
                        10 Av. de la Grande Armée<br/>
                        75017 Paris<br/>
                        01 56 05 40 10<br/>
<a className="hover:text-[#DB5227] transition-colors font-medium" href="mailto:contact@performha.fr">contact@performha.fr</a>
</address>
<div className="text-[#666666] text-sm font-light">
<strong className="text-[#111111] font-medium">Ouverture :</strong><br/>
                        Lun - Ven | 9h/12h - 14h/18h
                    </div>
</div>
<div className="">
<h5 className="font-bold text-sm mb-6 text-[#111111] uppercase tracking-wider">Menu</h5>
<ul className="space-y-4 text-sm text-[#666666]">
<li className=""><a className="hover:text-[#DB5227] transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-[#DB5227] transition-colors" href="#">Produits &amp; Services</a></li>
<li><a className="hover:text-[#DB5227] transition-colors" href="#">Partenaires</a></li>
<li><a className="hover:text-[#DB5227] transition-colors" href="#">Actualités</a></li>
</ul>
</div>
<div className="">
<h5 className="font-bold text-sm mb-6 text-[#111111] uppercase tracking-wider">Légal</h5>
<ul className="space-y-4 text-sm text-[#666666]">
<li className=""><a className="hover:text-[#DB5227] transition-colors" href="#">FAQ</a></li>
<li className=""><a className="hover:text-[#DB5227] transition-colors" href="#">Politique de Confidentialité</a></li>
<li><a className="hover:text-[#DB5227] transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-[#DB5227] transition-colors" href="#">Cookies</a></li>
</ul>
</div>
<div className="">
<h5 className="font-bold text-sm mb-6 text-[#111111] uppercase tracking-wider">Newsletter</h5>
<p className="text-[#666666] text-sm mb-6 font-light">Abonnez-vous pour recevoir nos dernières offres.</p>
<form className="flex gap-2">
<input className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:border-[#111111] transition-colors bg-gray-50 border-gray-200" placeholder="Email" type="email"/>
<button className="bg-[#111111] px-6 py-3 rounded-lg text-sm font-bold hover:bg-[#DB5227] transition-colors text-white">OK</button>
</form>
<div className="flex gap-4 mt-8">
<a className="text-[#666666] hover:text-[#111111] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:monitor-camera-linear"></iconify-icon></a> 
<a className="text-[#666666] hover:text-[#111111] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon></a> 
<a className="text-[#666666] hover:text-[#111111] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a> 
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col lg:flex-row justify-between items-center gap-4 border-gray-100">
<p className="text-xs text-[#666666]">© 2024 PerformHA. Tous droits réservés.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-[#666666] font-medium">Systèmes Opérationnels</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
