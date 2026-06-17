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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs font-bold">€</span>
<span className="text-zinc-100 font-medium tracking-tight text-sm">Écho Chèques</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-wide text-zinc-500">
<a className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1" href="#app">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
                    L'Application
                </a>
<a className="hover:text-zinc-200 transition-colors" href="#concept">Le Concept</a>
<a className="hover:text-zinc-200 transition-colors" href="#cse">Pour les CSE</a>
</div>
<a className="text-xs font-medium bg-zinc-100 text-black px-4 py-2 rounded-full hover:bg-white transition-colors" href="#order">
                Commander
            </a>
</div>
</nav>

<header className="relative pt-32 pb-16 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] font-medium text-emerald-400 uppercase tracking-widest mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Innovation Unique en France
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Le premier chèque cadeau<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">100% digital &amp; local.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Les Écho Chèques modernisent le commerce de proximité. 
                Soutenez Briançon avec la seule application de chèques cadeaux développée par une association de commerçants en France.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#app">
<iconify-icon icon="solar:smartphone-linear" width="18"></iconify-icon>
                    Découvrir l'Application
                </a>
<a className="w-full sm:w-auto px-8 py-3 glass-card text-zinc-200 rounded-full text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#cse">
                    Espace CSE &amp; Entreprises
                </a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-black/50 py-10 overflow-hidden relative group">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-6 text-center">
<p className="text-[10px] uppercase tracking-widest text-zinc-600 font-medium">Déjà plus de 150 enseignes acceptent les Écho Chèques</p>
</div>
<div className="flex w-max animate-scroll gap-16 px-6 items-center opacity-50 hover:opacity-100 transition-opacity duration-300">


<span className="text-xl font-bold text-white tracking-tighter">SPORT<span className="text-emerald-500">2000</span></span>
<span className="text-lg font-bold text-white tracking-widest font-serif italic">La Bolée</span>
<span className="text-xl font-bold text-white">INTER<span className="font-light text-zinc-400">SPORT</span></span>
<span className="text-lg font-semibold text-white tracking-tight flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span>SHERPA</span>
<span className="text-xl font-black text-white italic tracking-tighter">SKIPSET</span>
<span className="text-lg font-medium text-white font-mono">PHARMACIE<span className="text-emerald-500">+</span></span>
<span className="text-xl font-serif font-bold text-white tracking-wide">L'ALPIN</span>
<span className="text-xl font-bold text-white tracking-tighter">SPORT<span className="text-emerald-500">2000</span></span>

<span className="text-xl font-bold text-white tracking-tighter">SPORT<span className="text-emerald-500">2000</span></span>
<span className="text-lg font-bold text-white tracking-widest font-serif italic">La Bolée</span>
<span className="text-xl font-bold text-white">INTER<span className="font-light text-zinc-400">SPORT</span></span>
<span className="text-lg font-semibold text-white tracking-tight flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span>SHERPA</span>
<span className="text-xl font-black text-white italic tracking-tighter">SKIPSET</span>
<span className="text-lg font-medium text-white font-mono">PHARMACIE<span className="text-emerald-500">+</span></span>
<span className="text-xl font-serif font-bold text-white tracking-wide">L'ALPIN</span>
<span className="text-xl font-bold text-white tracking-tighter">SPORT<span className="text-emerald-500">2000</span></span>

<span className="text-xl font-bold text-white tracking-tighter">SPORT<span className="text-emerald-500">2000</span></span>
<span className="text-lg font-bold text-white tracking-widest font-serif italic">La Bolée</span>
<span className="text-xl font-bold text-white">INTER<span className="font-light text-zinc-400">SPORT</span></span>
<span className="text-lg font-semibold text-white tracking-tight flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span>SHERPA</span>
<span className="text-xl font-black text-white italic tracking-tighter">SKIPSET</span>
<span className="text-lg font-medium text-white font-mono">PHARMACIE<span className="text-emerald-500">+</span></span>
</div>
</section>

<section className="py-24 px-6 relative border-b border-white/5 bg-[#050505] overflow-hidden" id="app">

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-l from-emerald-500/10 to-transparent blur-[120px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
<iconify-icon icon="solar:medal-ribbon-star-linear"></iconify-icon>
                    Une première nationale
                </div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                    La seule app développée<br/>par des commerçants.
                </h2>
<p className="text-zinc-400 text-base leading-relaxed mb-8">
                    Alors que d'autres villes dépendent de solutions externes coûteuses, <strong>Les Enseignes de Briançon</strong> ont innové. Nous sommes la seule association en France à avoir créé notre propre écosystème digital.
                </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 flex-shrink-0">
<iconify-icon icon="solar:qr-code-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Paiement au centime près</h4>
<p className="text-xs text-zinc-500 mt-1">Fini le rendu de monnaie impossible. Payez exactement le montant de vos achats via QR Code.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Géolocalisation des boutiques</h4>
<p className="text-xs text-zinc-500 mt-1">Trouvez instantanément les commerces acceptant les Écho Chèques autour de vous.</p>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-black transition-colors group">
<iconify-icon icon="solar:plain-bold" width="24"></iconify-icon>
<div className="text-left leading-none">
<div className="text-[10px] uppercase font-bold tracking-wider opacity-60">Télécharger sur</div>
<div className="font-bold text-sm">App Store</div>
</div>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-white transition-colors">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
<div className="text-left leading-none">
<div className="text-[10px] uppercase font-bold tracking-wider opacity-60">DISPONIBLE SUR</div>
<div className="font-bold text-sm">Google Play</div>
</div>
</button>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center perspective-1000">
<div className="relative w-[300px] h-[600px] bg-[#0a0a0a] rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl animate-float overflow-hidden z-10">

<div className="absolute top-0 left-0 right-0 h-full w-full bg-zinc-950 flex flex-col">

<div className="w-full h-8 bg-black/50 flex justify-center pt-2">
<div className="w-24 h-5 bg-black rounded-full"></div>
</div>

<div className="px-6 pt-8 pb-4">
<div className="flex justify-between items-center mb-6">
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">EC</div>
</div>
<div className="text-zinc-400 text-xs mb-1">Solde disponible</div>
<div className="text-4xl font-medium text-white tracking-tight">150,00 €</div>
</div>

<div className="px-6 flex gap-3 mb-8">
<div className="flex-1 bg-emerald-500 text-black py-3 rounded-2xl flex flex-col items-center justify-center gap-1">
<iconify-icon icon="solar:qr-code-bold" width="20"></iconify-icon>
<span className="text-[10px] font-bold">Payer</span>
</div>
<div className="flex-1 bg-zinc-900 border border-white/10 text-white py-3 rounded-2xl flex flex-col items-center justify-center gap-1">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
<span className="text-[10px]">Historique</span>
</div>
</div>

<div className="flex-1 bg-zinc-900/50 rounded-t-3xl p-6 border-t border-white/5">
<div className="flex justify-between items-end mb-4">
<h3 className="text-white text-sm font-medium">Récemment</h3>
<span className="text-emerald-500 text-[10px]">Tout voir</span>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:t-shirt-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium">Sport 2000</div>
<div className="text-zinc-500 text-[10px]">Aujourd'hui</div>
</div>
</div>
<div className="text-white text-xs font-medium">- 45,00 €</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:chef-hat-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium">La Bolée</div>
<div className="text-zinc-500 text-[10px]">Hier</div>
</div>
</div>
<div className="text-white text-xs font-medium">- 22,50 €</div>
</div>
</div>
</div>

<div className="h-16 border-t border-white/5 bg-black flex justify-around items-center px-4 text-zinc-500">
<iconify-icon className="text-emerald-500" icon="solar:home-2-bold"></iconify-icon>
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<iconify-icon icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10 scale-90"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030303]" id="concept">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Pourquoi choisir Écho Chèques ?</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Une solution locale qui rivalise avec les géants nationaux.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">100% dans la poche</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Que ce soit via l'application ou en format papier, l'argent dépensé reste à 100% dans la vallée de Serre Chevalier.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Liberté totale</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Sport, beauté, restaurants... Utilisable dans plus de 150 commerces. L'application vous guide vers la boutique la plus proche.
                    </p>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Simplicité digitale</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Suivez votre solde en temps réel. En cas de perte de téléphone, vos chèques sont sécurisés sur votre compte cloud.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]" id="cse">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-zinc-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
<iconify-icon icon="solar:briefcase-linear"></iconify-icon>
                    Pour les professionnels
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight mb-6">
                    CSE &amp; Chefs d'entreprise,<br/>offrez du pouvoir d'achat.
                </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center text-emerald-400 mt-0.5">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Gestion simplifiée</h4>
<p className="text-zinc-500 text-sm mt-1">Créditez les comptes de vos salariés à distance via notre portail pro. Plus de distribution physique fastidieuse.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center text-emerald-400 mt-0.5">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Exonération URSSAF</h4>
<p className="text-zinc-500 text-sm mt-1">Jusqu'à 193€ par an et par événement (plafond 2024). Conformité ACOSS garantie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex-shrink-0 flex items-center justify-center text-emerald-400 mt-0.5">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-200 font-medium text-sm">Image Moderne</h4>
<p className="text-zinc-500 text-sm mt-1">Offrez une expérience utilisateur fluide et moderne à vos équipes tout en soutenant le local.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-zinc-100 border-b border-zinc-700 hover:border-zinc-100 pb-1 transition-colors text-sm" href="#">
                        Découvrir le portail CSE
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:w-1/2 w-full">
<div className="relative bg-zinc-900 border border-white/5 rounded-3xl p-8 overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-emerald-500/5 blur-[60px] rounded-full"></div>
<div className="relative z-10 grid gap-4">
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-zinc-500 text-sm">Format</span>
<span className="text-emerald-400 font-mono font-medium">App Mobile ou Papier</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-4">
<span className="text-zinc-500 text-sm">Frais de gestion</span>
<span className="text-zinc-300 font-mono text-sm">0 %</span>
</div>
<div className="flex items-center justify-between">
<span className="text-zinc-500 text-sm">Validité</span>
<span className="text-zinc-300 text-sm">1 An (renouvelable)</span>
</div>
</div>
<div className="mt-8 bg-black/40 rounded-xl p-4 border border-white/5">
<p className="text-xs text-zinc-500 italic">"L'application a changé la vie de notre CSE. Distribution instantanée et utilisation simple pour tous nos salariés."</p>
<div className="mt-3 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-700"></div>
<span className="text-xs text-zinc-400">Responsable RH, Briançon</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#030303]" id="order">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Passez au local digital.</h2>
<p className="text-zinc-400 text-lg mb-10 font-light">
                Rejoignez la dynamique. Téléchargez l'application ou commandez vos chèques dès aujourd'hui.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:bg-zinc-900 transition-colors flex flex-col items-center">
<iconify-icon className="text-zinc-300 mb-4" icon="solar:user-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Particuliers</h3>
<p className="text-zinc-500 text-xs mb-6 max-w-xs">Téléchargez l'app et créditez votre compte ou offrez une carte cadeau.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium">
                        Voir les points de vente
                    </button>
</div>
<div className="bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 border border-emerald-500/20 p-8 rounded-2xl flex flex-col items-center relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
<iconify-icon className="text-emerald-400 mb-4" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Entreprises &amp; CSE</h3>
<p className="text-zinc-500 text-xs mb-6 max-w-xs">Commandes groupées, rechargement à distance et exonérations.</p>
<button className="w-full py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 transition-all text-sm font-medium shadow-lg shadow-emerald-900/20">
                        Contactez-nous
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202] pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-zinc-100 font-semibold tracking-tight text-lg block mb-2">Les Enseignes</span>
<p className="text-zinc-600 text-sm max-w-xs">Association des commerçants de Briançon.<br/>Pionniers du chèque cadeau digital en France.</p>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Support App</a>
</div>
</div>
<div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-700 uppercase tracking-widest">© 2024 Les Enseignes de Briançon</p>
<div className="flex gap-4 opacity-50">
<iconify-icon icon="solar:plain-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:play-linear" width="16"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
