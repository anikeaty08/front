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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tight">NovaPay</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#comment-ca-marche">Fonctionnement</a>
<a className="hover:text-white transition-colors" href="#retailers">Pour les commerçants</a>
<a className="hover:text-white transition-colors" href="#">Sécurité</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-indigo-400 transition-colors hidden sm:block" href="#">Connexion</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Télécharger l'app
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Maintenant disponible sur iOS et Android
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Le shopping,<br/>
<span className="gradient-text">sans la file d'attente.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl font-light leading-relaxed">
                    Une nouvelle façon d'acheter. Scannez vos articles, payez sur votre mobile et déverrouillez l'antivol à la borne de sortie. Simple, rapide, sécurisé.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-8 py-3.5 rounded-full bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                        Commencer maintenant
                        <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                        Voir la démo
                    </button>
</div>
</div>

<div className="relative mx-auto lg:ml-auto w-72 lg:w-80 perspective-[2000px] group">

<div className="relative bg-neutral-900 border border-white/10 rounded-[3rem] h-[600px] shadow-2xl shadow-indigo-500/10 overflow-hidden transform transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6">

<div className="absolute top-0 inset-x-0 h-6 bg-neutral-950 z-20 flex justify-center">
<div className="w-32 h-6 bg-black rounded-b-2xl"></div>
</div>

<div className="h-full w-full bg-neutral-900 flex flex-col pt-12 px-6 pb-8">

<div className="flex justify-between items-center mb-8">
<iconify-icon className="text-white" icon="lucide:menu" width="24"></iconify-icon>
<span className="text-white font-medium tracking-tight">Mon Panier</span>
<div className="relative">
<iconify-icon className="text-white" icon="lucide:shopping-bag" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full text-[10px] flex items-center justify-center text-white">3</span>
</div>
</div>

<div className="flex-1 space-y-4">

<div className="bg-white/5 p-3 rounded-2xl flex gap-3 items-center border border-white/5">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-xl">👟</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Running Shoes</div>
<div className="text-xs text-neutral-500">Taille 42 • Noir</div>
</div>
<div className="text-sm text-white font-medium">89€</div>
</div>

<div className="bg-white/5 p-3 rounded-2xl flex gap-3 items-center border border-white/5">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-xl">🧥</div>
<div className="flex-1">
<div className="text-sm text-white font-medium">Veste Tech</div>
<div className="text-xs text-neutral-500">Taille M • Gris</div>
</div>
<div className="text-sm text-white font-medium">120€</div>
</div>

<div className="mt-4 p-4 border border-dashed border-indigo-500/50 bg-indigo-500/10 rounded-2xl flex flex-col items-center justify-center text-center gap-2 h-32 relative overflow-hidden">
<div className="absolute top-0 w-full h-1 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,1)] animate-[scan_2s_ease-in-out_infinite]"></div>
<iconify-icon className="text-indigo-400" icon="lucide:qr-code" width="32"></iconify-icon>
<span className="text-xs text-indigo-200">Prêt à scanner</span>
</div>
</div>

<div className="mt-auto pt-6">
<div className="flex justify-between text-sm mb-4">
<span className="text-neutral-400">Total</span>
<span className="text-white font-semibold">209.00€</span>
</div>
<button className="w-full py-4 rounded-xl gradient-accent text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
<iconify-icon icon="lucide:fingerprint" width="20"></iconify-icon>
                                Payer avec Apple Pay
                            </button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 relative" id="comment-ca-marche">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Du rayon à la sortie en <span className="text-indigo-400">4 étapes</span></h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Notre technologie synchronise votre panier virtuel avec la sécurité physique du magasin.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent z-0"></div>

<div className="glass p-8 rounded-2xl border border-white/10 relative z-10 group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="text-indigo-400" icon="lucide:scan-line" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">01. Scan Entrée</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Scannez le QR code à l'entrée du magasin pour démarrer votre session de shopping sécurisée.</p>
</div>

<div className="glass p-8 rounded-2xl border border-white/10 relative z-10 group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="text-indigo-400" icon="lucide:barcode" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">02. Scan Articles</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Scannez les codes-barres des articles physiques. Ils s'ajoutent instantanément à votre panier mobile.</p>
</div>

<div className="glass p-8 rounded-2xl border border-white/10 relative z-10 group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="text-indigo-400" icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">03. Paiement Mobile</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Validez votre panier et payez via Apple Pay, Google Pay ou CB directement sur votre téléphone.</p>
</div>

<div className="glass p-8 rounded-2xl border border-white/10 relative z-10 group hover:border-indigo-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<iconify-icon className="text-green-400" icon="lucide:unlock" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">04. Déverrouillage</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Approchez votre téléphone de la borne de sortie. La borne désactive l'antivol. Vous êtes libre.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full"></div>
<div className="relative bg-neutral-950 border border-white/10 rounded-2xl p-8 shadow-2xl">

<div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
<span className="text-xs uppercase tracking-widest text-neutral-500">Borne de sortie #204</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-green-500">En ligne</span>
</div>
</div>

<div className="flex flex-col items-center justify-center py-12 gap-6">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
<div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
<iconify-icon className="text-white" icon="lucide:nfc" width="40"></iconify-icon>
</div>
<div className="text-center">
<h4 className="text-white font-medium text-lg">Approchez votre téléphone</h4>
<p className="text-neutral-500 text-sm mt-1">NFC / Bluetooth détecté</p>
</div>

<div className="mt-4 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg flex items-center gap-3">
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-green-400 text-sm">Paiement vérifié. Antivols désactivés.</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white">Sécurité invisible.Liberté totale.</h2>
<p className="text-neutral-400 leading-relaxed">
                        Plus besoin de passer en caisse pour faire enlever les antivols. Notre borne intelligente communique avec votre application Flow pour vérifier la transaction et désactiver magnétiquement les tags de sécurité en une fraction de seconde.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="lucide:shield-check" width="18"></iconify-icon>
<div>
<span className="text-neutral-500 text-xs">Algorithmes de détection de comportement suspect en temps réel.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="lucide:history" width="18"></iconify-icon>
<div>
<span className="text-neutral-500 text-xs">Retrouvez tous vos tickets de caisse dématérialisés dans l'app.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="retailers">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white">Pourquoi adopter Flow ?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-[80px] group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10">
<iconify-icon className="text-white mb-4" icon="lucide:users" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Réduisez les files d'attente de 90%</h3>
<p className="text-neutral-400 text-sm max-w-md">Libérez de l'espace au sol en supprimant les lignes de caisse. Vos vendeurs peuvent enfin se concentrer sur le conseil client plutôt que l'encaissement.</p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
<iconify-icon className="text-white mb-4" icon="lucide:bar-chart-3" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Analytics en temps réel</h3>
<p className="text-neutral-400 text-sm">Suivez le parcours client dans les rayons via les scans.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
<iconify-icon className="text-white mb-4" icon="lucide:leaf" width="32"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-2">Zéro papier</h3>
<p className="text-neutral-400 text-sm">Tickets de caisse 100% numériques envoyés par email.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-indigo-900/50 to-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">Prêt à transformer votre magasin ?</h3>
<p className="text-indigo-200 text-sm">Intégration facile avec vos systèmes de gestion de stock existants.</p>
</div>
<button className="whitespace-nowrap px-6 py-3 bg-white text-neutral-900 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Contacter l'équipe commerciale
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded gradient-accent flex items-center justify-center text-white">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">Flow</span>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Flow Payments SAS.<br/>
                        Paris, France.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Produit</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Fonctionnalités</a></li>
<li><a className="hover:text-white transition-colors" href="#">Intégrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Entreprise</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carrières</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2023 Flow Payments. Tous droits réservés.</p>
<div className="flex gap-4 text-neutral-500">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:twitter" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:linkedin" width="16"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" icon="lucide:instagram" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>
<style>
        /* Animation Keyframes inside CSS for custom Tailwind-like utility */
        @keyframes scan {
            0%, 100% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            50% { transform: translateY(128px); }
        }
    </style>

    </>
  );
}
