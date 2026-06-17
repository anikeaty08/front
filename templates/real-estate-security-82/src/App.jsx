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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-white/90 border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-deep rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-900/10">
<span className="font-serif font-bold text-xl">T</span>
</div>
<span className="text-xl font-serif font-bold text-emerald-deep tracking-tight">TerrainSûr<span className="text-gold-metallic">.</span></span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium hover:text-emerald-deep transition text-neutral-500 tracking-wider uppercase text-[11px]" href="#solutions">Solutions</a>
<a className="text-sm font-medium hover:text-emerald-deep transition text-neutral-500 tracking-wider uppercase text-[11px]" href="#demo">Technologie</a>
<a className="text-sm font-medium hover:text-emerald-deep transition text-neutral-500 tracking-wider uppercase text-[11px]" href="#club">Club Privé</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-full transition shadow-xl text-white bg-black hover:bg-neutral-800 shadow-neutral-200/50 transform hover:-translate-y-0.5" href="#download">
          Télécharger
        </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent to-transparent via-neutral-200"></div>
<div className="absolute -left-40 top-40 w-[600px] h-[600px] bg-[#004d40]/5 rounded-full blur-[100px]"></div>
<div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-[100px] bg-[#d4af37]/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">


<div className="max-w-2xl animate-in z-20 mx-auto lg:mx-0 text-center lg:text-left">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-8 bg-emerald-50 border-emerald-100/50 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#004d40] animate-pulse"></span>
<span className="text-xs font-bold text-[#004d40] tracking-widest uppercase">Technologie Anti-Fraude</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] font-serif font-bold text-[#002a22] mb-8">
            L'Immobilier,<br/>
<span className="italic font-light text-neutral-400">la certitude en plus.</span>
</h1>
<p className="text-lg text-neutral-500 mb-10 leading-relaxed max-w-lg font-light mx-auto lg:mx-0">
            La première application qui audite et sécurise vos achats de terrains en Côte d'Ivoire grâce à la certification <span className="font-semibold text-emerald-deep">Blockchain</span> et nos experts assermentés.
          </p>

<div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start lg:items-start">

<button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition group shadow-xl shadow-[#d4af37]/20 bg-gold-metallic text-white hover:bg-[#c5a028] transform hover:-translate-y-1">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24"><path d="M17.653 15.654c.293-.324.75-.496 1.156-.496h.023c-.456-1.558-1.57-2.671-3.128-3.127h-.024c.001-.406.173-.863.497-1.156.974-.881 1.056-2.434.11-3.38-.946-.946-2.5-.864-3.381.11-.293.324-.496.75-.496 1.156v.023c-1.558-.456-2.671-1.57-3.127-3.128v-.024c.406.001.863.173 1.156.497.881.974 2.434 1.056 3.38.11.946-.946.864-2.5-.11-3.381-.324-.293-.75-.496-1.156-.496h-.023c.456-1.558 1.57-2.671 3.128-3.127h.024c-.001.406-.173.863-.497 1.156-.974.881-1.056 2.434-.11 3.38.946.946 2.5.864 3.381-.11.293-.324.496-.75.496-1.156v-.023c1.558.456 2.671 1.57 3.127 3.128v.024c-.406-.001-.863-.173-1.156-.497-.881-.974-2.434-1.056-3.38-.11-.946.946-.864 2.5.11 3.381zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></svg>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider opacity-90 font-bold">Télécharger sur</div>
<div className="text-sm font-bold leading-none">App Store</div>
</div>
</button>

<button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition group shadow-xl text-emerald-950 bg-white border border-neutral-200 hover:bg-neutral-50">
<svg className="w-6 h-6 text-emerald-deep" fill="currentColor" viewbox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.3,12.5L17.38,15.69L15.13,13.44L17.38,11.19L20.3,14.38C20.53,14.14 20.53,13.73 20.3,13.5M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z"></path></svg>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider opacity-60 font-bold">Dispo sur</div>
<div className="text-sm font-bold leading-none">Google Play</div>
</div>
</button>
</div>

<div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400 font-medium">
<span className="font-serif italic text-neutral-500">Recommandé par</span>
<div className="hidden sm:block h-px w-12 bg-neutral-200"></div>
<div className="flex items-center gap-6">
<span className="text-neutral-900 font-bold tracking-tight">NOTAIRES<span className="font-light">ASSOCIÉS</span></span>
<span className="text-neutral-900 font-bold tracking-tight">Abidjan<span className="text-emerald-deep">.net</span></span>
</div>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center justify-center animate-in delay-200 perspective-[2000px]">

<div className="absolute -right-4 top-1/3 p-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] z-20 border animate-[bounce_4s_infinite] bg-white border-neutral-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100 text-emerald-700">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider">Statut</p>
<p className="text-base font-bold text-emerald-deep">ACD Vérifié</p>
</div>
</div>

<div className="relative z-10 w-[320px] h-[650px] rounded-[3.5rem] p-3 shadow-luxe bg-neutral-900 ring-4 ring-neutral-900/10 rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 rounded-b-2xl z-20 bg-black"></div>

<div className="absolute top-24 -left-[2px] w-[2px] h-10 bg-neutral-800 rounded-l-md"></div>
<div className="absolute top-40 -left-[2px] w-[2px] h-16 bg-neutral-800 rounded-l-md"></div>
<div className="absolute top-32 -right-[2px] w-[2px] h-20 bg-neutral-800 rounded-r-md"></div>
<div className="w-full h-full rounded-[3rem] overflow-hidden relative bg-white">

<div className="relative w-full h-full flex flex-col">

<div className="h-12 w-full bg-emerald-deep z-10"></div>

<div className="flex-1 bg-emerald-deep relative flex flex-col items-center pt-8 px-6 text-white overflow-hidden">

<div className="absolute top-0 inset-x-0 h-full w-full opacity-20">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/20 rounded-full"></div>
</div>

<div className="relative z-10 mb-8 mt-12">
<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-emerald-600 shadow-2xl shadow-emerald-900/50">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="absolute -bottom-2 -right-2 bg-gold-metallic text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">100% SÛR</div>
</div>
<h3 className="font-serif text-3xl mb-2 text-center relative z-10">Authentifié</h3>
<p className="text-emerald-100/80 text-center text-sm mb-12 relative z-10 px-4">Le titre foncier N°4582-B correspond aux données du cadastre.</p>

<div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 relative z-10">
<div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
<span className="text-xs text-emerald-100 uppercase tracking-wider">Propriétaire</span>
<span className="text-sm font-semibold">Kouassi Michel</span>
</div>
<div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
<span className="text-xs text-emerald-100 uppercase tracking-wider">Superficie</span>
<span className="text-sm font-semibold">600 m²</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-emerald-100 uppercase tracking-wider">Zone</span>
<span className="text-sm font-semibold">Riviera 3</span>
</div>
</div>

<div className="absolute bottom-8 w-full px-6">
<button className="w-full py-4 bg-white text-emerald-900 font-bold rounded-xl shadow-lg">Voir le rapport complet</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center mb-10">
<p className="font-serif text-xl italic text-neutral-600">"La technologie approuvée par les experts du foncier."</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-20 px-16 items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-2xl font-bold font-serif text-neutral-800">Ministère<span className="text-gold-metallic">Construction</span></span>
<span className="text-2xl font-bold tracking-tight text-neutral-400">NOTAIRES<span className="text-neutral-600">ASSOCIÉS</span></span>
<span className="text-2xl font-bold text-neutral-800">BLOCK<span className="text-emerald-800">CHAIN</span>CI</span>
<span className="text-2xl font-serif italic font-bold text-neutral-600">AbidjanLand</span>
<span className="text-2xl font-bold tracking-widest text-neutral-400">TECH<span className="font-light">AFRICA</span></span>

<span className="text-2xl font-bold font-serif text-neutral-800">Ministère<span className="text-gold-metallic">Construction</span></span>
<span className="text-2xl font-bold tracking-tight text-neutral-400">NOTAIRES<span className="text-neutral-600">ASSOCIÉS</span></span>
<span className="text-2xl font-bold text-neutral-800">BLOCK<span className="text-emerald-800">CHAIN</span>CI</span>
<span className="text-2xl font-serif italic font-bold text-neutral-600">AbidjanLand</span>
<span className="text-2xl font-bold tracking-widest text-neutral-400">TECH<span className="font-light">AFRICA</span></span>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r to-transparent z-10 from-white"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l to-transparent z-10 from-white"></div>
</div>
</section>

<section className="py-32 bg-[#F9FAFB]" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-serif font-bold text-[#002a22] mb-6">La fin de l'insécurité foncière</h2>
<p className="text-neutral-500 text-lg font-light leading-relaxed">Nous avons remplacé les intermédiaires douteux par de la technologie de pointe et des experts certifiés.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-10 rounded-[2rem] shadow-sm border hover:shadow-2xl transition duration-500 group bg-white border-neutral-100 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-50 transition-colors bg-neutral-50 text-neutral-900 group-hover:text-emerald-deep">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h.01"></path><path d="M17 7h.01"></path><path d="M7 17h.01"></path><path d="M17 17h.01"></path></svg>
</div>
<h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">Fini les faux papiers</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-medium">
            Chaque document est scanné et vérifié via la technologie <span className="font-bold text-emerald-deep">2D-Doc</span> et croisé avec la Blockchain du cadastre ivoirien.
          </p>
</div>

<div className="p-10 rounded-[2rem] shadow-sm border hover:shadow-2xl transition duration-500 group relative overflow-hidden bg-white border-neutral-100 hover:-translate-y-1">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold-metallic/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FFF9E5] transition-colors relative z-10 bg-neutral-50 text-neutral-900 group-hover:text-gold-metallic">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h20"></path><path d="M12 2v6"></path><path d="m12 8-5.32 10.63a1.5 1.5 0 0 0 2.64 1.37L12 14.5l2.68 5.5a1.5 1.5 0 0 0 2.64-1.37L12 8"></path><path d="m12 2-3 4.5"></path><path d="m12 2 3 4.5"></path></svg>
</div>
<h3 className="text-2xl font-serif font-bold mb-4 relative z-10 text-neutral-900">Vos yeux sur le terrain</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-medium relative z-10">
            Nos agents salariés se déplacent physiquement. Rapport par drone 4K, bornage GPS et enquête de voisinage en temps réel sur l'app.
          </p>
</div>

<div className="p-10 rounded-[2rem] shadow-sm border hover:shadow-2xl transition duration-500 group bg-white border-neutral-100 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-50 transition-colors bg-neutral-50 text-neutral-900 group-hover:text-emerald-deep">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-serif font-bold mb-4 text-neutral-900">Juridique Blindé</h3>
<p className="text-neutral-500 leading-relaxed text-sm font-medium">
            Vérification automatique de l'ACD (Arrêté de Concession Définitive) et du guide villageois. Nous bloquons la transaction à la moindre anomalie.
          </p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden bg-white" id="demo">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border rounded-full animate-[spin_40s_linear_infinite] border-neutral-100"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border rounded-full animate-[spin_30s_linear_infinite_reverse] border-neutral-100"></div>
<div className="relative rounded-[2rem] p-10 border bg-[#F9FAFB] border-neutral-100 shadow-xl">

<div className="aspect-[4/3] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover opacity-40 mix-blend-overlay"></div>

<div className="absolute top-0 left-0 w-full h-0.5 shadow-[0_0_30px_rgba(212,175,55,1)] animate-[scan_2s_ease-in-out_infinite] bg-gold-metallic"></div>
<div className="relative z-10 backdrop-blur-md p-6 rounded-2xl border text-center bg-black/40 border-white/10 shadow-2xl">
<div className="w-16 h-16 mx-auto rounded-xl mb-4 p-2 bg-white flex items-center justify-center">
<svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<p className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-1">Analyse en cours</p>
<p className="font-serif text-lg text-white">Document N° 882910</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002a22] mb-8">Scannez. Vérifiez. Achetez.</h2>
<p className="text-lg text-neutral-500 mb-10 font-light leading-relaxed">
            Notre technologie propriétaire transforme votre smartphone en outil d'audit. Prenez en photo les documents du vendeur, TerrainSûr vous donne le feu vert (ou rouge) en 30 secondes.
          </p>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-800 border border-emerald-100">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-neutral-800 font-medium">Connexion directe API Cadastre</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-800 border border-emerald-100">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-neutral-800 font-medium">Détection des faux tampons par IA</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-800 border border-emerald-100">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-neutral-800 font-medium">Historique des litiges du lot</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#002a22] relative overflow-hidden" id="club">

<div className="absolute inset-0 bg-gradient-to-br from-[#004d40] to-[#002a22]"></div>

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<span className="inline-block py-1.5 px-4 rounded-full bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/30 text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">Club Privé</span>
<h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white tracking-tight">
          Rejoignez le <span className="text-gold-metallic">Cercle TerrainSûr</span>
</h2>
<p className="text-xl max-w-2xl mx-auto mb-12 font-light text-emerald-100/80 leading-relaxed">
          Accédez aux opportunités "Off-Market" avant tout le monde et bénéficiez de 3 audits complets offerts par an.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="px-10 py-5 bg-gold-metallic font-bold rounded-2xl hover:bg-[#c5a028] transition shadow-2xl shadow-[#d4af37]/10 transform hover:-translate-y-1 text-emerald-950 text-lg">
            Devenir Membre
          </button>
<button className="px-10 py-5 bg-transparent border border-white/20 font-medium rounded-2xl transition text-white hover:bg-white/5 hover:border-white/40 text-lg">
            En savoir plus
          </button>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-white border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-emerald-deep rounded-lg flex items-center justify-center text-white">
<span className="font-serif font-bold">T</span>
</div>
<span className="font-serif font-bold text-emerald-deep text-lg">TerrainSûr<span className="text-gold-metallic">.</span></span>
</div>
<p className="text-sm text-neutral-400 font-medium leading-relaxed">
            Une société enregistrée en Côte d'Ivoire et en France. Sécurisons l'avenir, terrain après terrain.
          </p>
</div>
<div>
<h4 className="font-bold mb-6 text-neutral-900 font-serif">Légal</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium">
<li><a className="hover:text-gold-metallic transition" href="#">Mentions Légales</a></li>
<li><a className="hover:text-gold-metallic transition" href="#">CGU</a></li>
<li><a className="hover:text-gold-metallic transition" href="#">Politique de Confidentialité</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-neutral-900 font-serif">Entreprise</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-medium">
<li><a className="hover:text-gold-metallic transition" href="#">À propos</a></li>
<li><a className="hover:text-gold-metallic transition" href="#">Partenaires</a></li>
<li><a className="hover:text-gold-metallic transition" href="#">Carrières</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-neutral-900 font-serif">Contact</h4>
<a className="inline-flex items-center gap-2 text-sm font-bold px-5 py-3 rounded-xl transition text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Support WhatsApp
          </a>
</div>
</div>
<div className="border-t pt-10 flex flex-col md:flex-row justify-between items-center text-xs border-neutral-100 text-neutral-400 font-medium">
<p>© 2024 TerrainSûr. Tous droits réservés.</p>
<div className="flex gap-6 mt-6 md:mt-0">
<a className="hover:text-emerald-deep transition" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-emerald-deep transition" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>
<style>
    @keyframes scan {
      0% { top: 0%; opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
  </style>


    </>
  );
}
