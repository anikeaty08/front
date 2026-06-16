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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-[#1D1D1F]">
<iconify-icon className="text-2xl text-[#007AFF]" icon="solar:server-square-linear"></iconify-icon>
<span className="tracking-tighter font-semibold text-lg uppercase">Clara</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-[#007AFF] transition-colors" href="#logiciel">Logiciel</a>
<a className="hover:text-[#007AFF] transition-colors" href="#materiel">Matériel</a>
<a className="hover:text-[#007AFF] transition-colors" href="#services">Services</a>
<a className="hover:text-[#007AFF] transition-colors" href="#usages">Cas d'usage</a>
</div>
<div>
<a className="hidden md:inline-flex items-center justify-center bg-[#007AFF] text-white text-sm font-medium rounded-full px-5 py-2 hover:bg-blue-600 transition-colors shadow-sm" href="#contact">
                    Contactez-nous
                </a>
<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#007AFF] text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#007AFF]"></span>
</span>
                    Nouveau système autonome
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                    La logistique du dernier mètre, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-blue-400">version No-Code.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-xl">
                    Casiers connectés autonomes, évolutifs et élégants. Installez, branchez, gérez. Aucune intégration technique requise.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#007AFF] text-white text-base font-medium rounded-full px-8 py-3 hover:bg-blue-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" href="#contact">
                        Demander une étude gratuite
                    </a>
<a className="inline-flex items-center justify-center bg-white text-[#1D1D1F] border border-gray-200 text-base font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-all" href="#logiciel">
                        Découvrir la technologie
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-auto lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl opacity-50"></div>

<div className="relative w-64 md:w-80 bg-[#FBFBFD] rounded-[2rem] locker-shadow border border-gray-100 p-2 flex flex-col gap-2 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">

<div className="w-full h-48 bg-white rounded-2xl border border-gray-100/80 shadow-sm overflow-hidden flex flex-col relative">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#007AFF]/20 to-transparent"></div>
<div className="flex-1 p-4 flex flex-col items-center justify-center gap-3">
<div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner">
<iconify-icon className="text-3xl text-[#1D1D1F]" icon="solar:qr-code-linear"></iconify-icon>
</div>
<div className="w-24 h-1.5 bg-gray-100 rounded-full"></div>
<div className="w-16 h-1 bg-gray-100 rounded-full"></div>
</div>
<div className="h-12 border-t border-gray-50 bg-gray-50/50 flex items-center justify-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">En ligne</span>
</div>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="h-32 bg-white rounded-xl border border-gray-100/80 shadow-sm relative overflow-hidden group">
<div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-gray-200 rounded-full group-hover:bg-[#007AFF]/30 transition-colors"></div>
</div>
<div className="h-32 bg-white rounded-xl border border-gray-100/80 shadow-sm relative overflow-hidden group">
<div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-gray-200 rounded-full group-hover:bg-[#007AFF]/30 transition-colors"></div>
</div>
<div className="h-48 bg-white rounded-xl border border-gray-100/80 shadow-sm relative col-span-2 overflow-hidden group">
<div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gray-200 rounded-full group-hover:bg-[#007AFF]/30 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="logiciel">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">L'intelligence au service de l'usage.</h2>
<p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">Une conception logicielle repensée pour éliminer toute friction, du gestionnaire à l'utilisateur final.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-2 bg-[#F5F5F7] rounded-[2rem] p-8 relative overflow-hidden group">
<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-[#007AFF]">
<iconify-icon className="text-2xl" icon="solar:display-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Interface Intuitive</h3>
<p className="text-gray-500 text-sm">Inscription et dépôt en moins d'une minute. Un écran tactile ultra-réactif pensé pour tous.</p>
</div>

<div className="absolute right-[-10%] bottom-[-20%] w-[60%] h-[120%] bg-white rounded-l-3xl shadow-xl border border-gray-100 p-6 transform group-hover:-translate-x-4 transition-transform duration-500">
<div className="w-full h-8 bg-gray-50 rounded-lg mb-4 flex items-center px-4">
<div className="w-16 h-2 bg-gray-200 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="w-full h-12 bg-[#007AFF]/10 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-[#007AFF]/20"></div>
<div className="w-24 h-2 bg-[#007AFF]/40 rounded-full"></div>
</div>
<div className="w-full h-12 bg-gray-50 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-gray-200"></div>
<div className="w-32 h-2 bg-gray-200 rounded-full"></div>
</div>
<div className="w-full h-12 bg-gray-50 rounded-xl flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded bg-gray-200"></div>
<div className="w-20 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-[2rem] p-8 relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 text-[#1D1D1F]">
<iconify-icon className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Hardware Industriel</h3>
<p className="text-gray-500 text-sm">Propulsé par une architecture Raspberry Pi 4. Fiabilité absolue 24/7 en environnement exigeant.</p>
</div>

<div className="bg-white border border-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] rounded-[2rem] p-8 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-[#F5F5F7] flex items-center justify-center mb-6 text-[#1D1D1F]">
<iconify-icon className="text-2xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Flux d'alertes</h3>
<p className="text-gray-500 text-sm">Notifications SMS &amp; Email automatisées en temps réel.</p>
</div>

<div className="w-full h-10 bg-blue-50 rounded-lg flex items-center px-4 gap-2 mt-4 border border-blue-100/50">
<div className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></div>
<div className="w-1/2 h-1.5 bg-[#007AFF]/30 rounded-full"></div>
</div>
</div>

<div className="md:col-span-2 bg-[#1D1D1F] rounded-[2rem] p-8 relative overflow-hidden text-white group">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-transparent opacity-50"></div>
<div className="relative z-10 max-w-sm">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-2xl text-white" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Sécurité &amp; Traçabilité</h3>
<p className="text-gray-400 text-sm">Authentification forte par QR Code, logs d'accès cryptés et preuve de livraison photographique intégrée.</p>
</div>
<div className="absolute right-6 bottom-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
<iconify-icon className="text-[120px]" icon="solar:scanner-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F7]" id="materiel">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Une architecture modulaire.</h2>
<p className="text-lg text-gray-500 font-light max-w-xl">Commencez avec l'unité centrale, ajoutez de la capacité à l'infini selon vos besoins. Un design unique qui s'intègre partout.</p>
</div>
<div className="flex items-center gap-2 text-sm text-[#007AFF] font-medium">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
                    Modularité illimitée
                </div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
<div className="flex-1">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Main Parcel</h3>
<p className="text-gray-500 text-sm mt-1">L'unité centrale intelligente</p>
</div>
<div className="text-right">
<div className="text-xl font-semibold tracking-tight">2 500 €</div>
<div className="text-xs text-gray-400">+ 8 000 € / an</div>
</div>
</div>
<ul className="space-y-4 mb-12 text-sm text-gray-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#007AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Écran tactile industriel 10"
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#007AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Cerveau de calcul intégré (RPi4)
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#007AFF] text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Finition premium acier thermolaqué
                            </li>
</ul>
</div>

<div className="mt-auto h-48 w-full bg-gray-50 rounded-2xl border border-gray-100 relative flex flex-col p-2 gap-2">
<div className="w-full h-12 bg-white rounded-xl shadow-sm border border-gray-100/50 flex items-center justify-center">
<div className="w-8 h-1 bg-[#007AFF]/20 rounded-full"></div>
</div>
<div className="flex-1 grid grid-cols-2 gap-2">
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden">
<div className="flex-1">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Extension Parcel</h3>
<p className="text-gray-500 text-sm mt-1">Ajoutez de la capacité</p>
</div>
<div className="text-right">
<div className="text-xl font-semibold tracking-tight">1 000 €</div>
<div className="text-xs text-gray-400">+ 3 000 € / an</div>
</div>
</div>
<ul className="space-y-4 mb-12 text-sm text-gray-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Se connecte directement au Main
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Configurations de casiers sur-mesure
                            </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Même qualité de finition
                            </li>
</ul>
</div>

<div className="mt-auto h-48 w-full bg-gray-50 rounded-2xl border border-gray-100 relative flex flex-col p-2 gap-2">
<div className="flex-1 grid grid-cols-2 gap-2">
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
<div className="bg-white rounded-xl shadow-sm border border-gray-100/50"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="services">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16">Une maintenance de classe mondiale.</h2>
<div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 text-[#1D1D1F]">
<iconify-icon className="text-3xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Intervention J+1</h4>
<p className="text-gray-500 text-sm font-light">Partenariat exclusif avec RICOH pour une remise en service en un jour ouvré partout en France.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 text-[#1D1D1F]">
<iconify-icon className="text-3xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Garantie 2 ans</h4>
<p className="text-gray-500 text-sm font-light">Matériel et logiciel couverts intégralement pour une tranquillité d'esprit totale.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-[#F5F5F7] flex items-center justify-center mb-6 text-[#1D1D1F]">
<iconify-icon className="text-3xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">Support Parisien</h4>
<p className="text-gray-500 text-sm font-light">Équipe technique experte basée au 39 rue de la Gare de Reuilly, Paris.</p>
</div>
</div>

<div className="mt-20 pt-10 border-t border-gray-100 flex flex-col items-center">
<p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">Maintenu par notre partenaire</p>
<div className="text-2xl font-semibold tracking-tighter text-gray-300">RICOH</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F7]" id="usages">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">Pensé pour chaque acteur.</h2>
<div className="grid md:grid-cols-2 gap-8 lg:gap-16">

<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007AFF] flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Gestionnaires d'espaces</h3>
</div>
<p className="text-gray-500 mb-8 font-light leading-relaxed">Valorisez vos espaces, fluidifiez la logistique interne et offrez un service premium à vos locataires sans charge opérationnelle supplémentaire.</p>
<ul className="space-y-5 text-sm">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Installation Plug &amp; Play, aucune intégration SI requise.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Dashboard analytique pour suivre les taux d'occupation.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Argument de rétention majeur pour vos locataires.</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-gray-50 text-[#1D1D1F] flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">Utilisateurs finaux</h3>
</div>
<p className="text-gray-500 mb-8 font-light leading-relaxed">Recevez, envoyez et échangez des colis ou du matériel à toute heure, en toute sécurité, via une expérience fluide et sans contact.</p>
<ul className="space-y-5 text-sm">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Accessibilité 24/7, plus de contraintes d'horaires.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Retrait express via QR code unique reçu par SMS.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-[#F5F5F7] flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-[#1D1D1F]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-gray-700">Confidentialité et sécurité totale des dépôts.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-gray-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 text-[#1D1D1F] mb-6">
<iconify-icon className="text-2xl text-[#007AFF]" icon="solar:server-square-linear"></iconify-icon>
<span className="tracking-tighter font-semibold text-xl uppercase">Clara</span>
</div>
<p className="text-gray-500 text-sm font-light max-w-sm mb-6">
                        La logistique du dernier mètre, repensée pour l'élégance et la simplicité absolue. Conçu pour les espaces modernes.
                    </p>
<a className="inline-flex items-center gap-2 text-[#1D1D1F] hover:text-[#007AFF] transition-colors text-sm font-medium" href="mailto:contact@claralockers.com">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                        contact@claralockers.com
                    </a>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight">Produit</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#logiciel">Software</a></li>
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#materiel">Hardware</a></li>
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#materiel">Tarifs</a></li>
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#services">Maintenance</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight">Légal</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-[#1D1D1F] transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400 font-light">
                    © 2023 Clara Lockers. Tous droits réservés.
                </p>
<div className="flex items-center gap-2 text-xs text-gray-500 bg-[#F5F5F7] px-3 py-1.5 rounded-full border border-gray-200">
<iconify-icon className="text-[#007AFF]" icon="solar:verified-check-linear"></iconify-icon>
                    Équipe technique en Ile-de-France
                </div>
</div>
</div>
</footer>

    </>
  );
}
