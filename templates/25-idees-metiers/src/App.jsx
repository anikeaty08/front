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
      

<main className="pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Guide gratuit pour enseignants
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-8 leading-[1.1]">
                        Sortez enfin du <br/>
<span className="text-orange-500 relative inline-block">
                            labyrinthe
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>.
                    </h1>
<p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Financez ou lancez votre projet de reconversion sans repasser par la case études. Découvrez 25 pistes concrètes pour valoriser vos compétences.
                    </p>

<div className="max-w-md mx-auto lg:mx-0" id="telecharger">


<form action="VOTRE_URL_ACTION_GOHIGHLEVEL_ICI" className="flex flex-col gap-4" method="POST">
<div>
<label className="sr-only" htmlFor="email">Votre adresse email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-400" data-lucide="mail"></i>
</div>

<input className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-lg" id="email" name="email" placeholder="votre@email.com" required="" type="email"/>
</div>
</div>
<button className="group w-full flex items-center justify-center gap-2 py-4 px-8 border border-transparent rounded-xl shadow-lg shadow-orange-500/20 text-lg font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200" type="submit">
                                Recevoir le guide maintenant
                                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
<p className="mt-4 text-sm text-gray-400 text-center lg:text-left">
                            Déjà téléchargé par plus de 2,000 enseignants.
                        </p>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-orange-100/50 via-amber-50/50 to-blue-50/50 rounded-full blur-3xl -z-10"></div>

<div className="relative w-[340px] sm:w-[400px] aspect-[1/1.45] mx-auto bg-white rounded-r-2xl rounded-l-md shadow-2xl border-l-8 border-gray-100 transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 ease-out group cursor-default">

<div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/10 to-transparent z-10"></div>

<div className="h-full w-full p-8 flex flex-col relative overflow-hidden bg-white rounded-r-xl">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="maze" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M0 20h40 M20 0v40" fill="none" stroke="#000" strokeWidth="2"></path>
</pattern>
</defs>
<rect fill="url(#maze)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="text-center mb-6 z-20">
<span className="text-lg font-medium text-gray-800 tracking-tight">Guide Enseignant</span>
</div>

<div className="text-center mb-6 z-20 relative">
<h2 className="text-5xl font-black text-gray-900 tracking-tighter drop-shadow-sm leading-none mb-1 transform -rotate-2">
                                    25 IDÉES
                                </h2>
<h2 className="text-5xl font-black text-orange-500 tracking-tighter drop-shadow-sm leading-none transform rotate-1">
                                    DE MÉTIERS
                                </h2>
</div>

<div className="flex-grow flex items-center justify-center relative z-20">
<div className="relative w-48 h-48 border-4 border-gray-900 rounded-full flex items-center justify-center">
<div className="w-32 h-32 border-4 border-gray-900 rounded-full border-t-transparent -rotate-45"></div>
<div className="absolute w-20 h-20 border-4 border-gray-900 rounded-full border-b-transparent rotate-12"></div>

<div className="absolute -top-2 -right-4 bg-white rounded-full p-1 shadow-sm border border-gray-100">
<div className="text-amber-400 fill-amber-400">
<svg className="lucide lucide-bug" fill="currentColor" height="40" stroke="#1f2937" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m8 2 1.88 1.88"></path><path d="M14.12 3.88 16 2"></path><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path><path d="M12 20v-9"></path><path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path><path d="M6 13H2"></path><path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-6 text-center z-20">
<div className="bg-amber-200 inline-block px-2 transform -rotate-1 mb-2">
<p className="text-sm font-semibold text-gray-900">RECONVERSION</p>
</div>
<p className="text-sm font-medium text-gray-800 leading-tight">
                                    Sans repasser par la case études.
                                </p>
</div>

<svg className="absolute top-10 left-0 w-full h-full pointer-events-none z-10 opacity-60" overflow="visible">
<path d="M -20 20 Q 30 80 80 40 T 150 60" fill="none" stroke="#ef4444" strokeWidth="3"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h3 className="text-3xl font-semibold text-gray-900 tracking-tight mb-6">Pourquoi ce guide est différent</h3>
<p className="text-xl text-gray-500">Oubliez les conseils génériques. Voici une méthode éprouvée pour capitaliser sur votre expérience d'enseignant.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-orange-600 shadow-sm mb-6">
<i className="w-7 h-7" data-lucide="lightbulb"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3">25 Idées Concrètes</h4>
<p className="text-lg text-gray-500 leading-relaxed">
                        Des métiers accessibles directement avec vos compétences actuelles : pédagogie, gestion de projet, communication.
                    </p>
</div>

<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-orange-600 shadow-sm mb-6">
<i className="w-7 h-7" data-lucide="map"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3">Feuille de Route</h4>
<p className="text-lg text-gray-500 leading-relaxed">
                        Ne vous perdez plus dans le labyrinthe administratif. Suivez le fil rouge pour construire votre projet étape par étape.
                    </p>
</div>

<div className="flex flex-col items-start">
<div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center text-orange-600 shadow-sm mb-6">
<i className="w-7 h-7" data-lucide="coins"></i>
</div>
<h4 className="text-xl font-medium text-gray-900 mb-3">Sans Reprise d'Études</h4>
<p className="text-lg text-gray-500 leading-relaxed">
                        Économisez du temps et de l'argent. Apprenez à valoriser ce que vous savez déjà faire auprès des recruteurs ou clients.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-gray-900 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">

<div className="absolute inset-0 opacity-10">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<pattern height="60" id="maze-dark" patternunits="userSpaceOnUse" width="60" x="0" y="0">
<path d="M0 30h60 M30 0v60" fill="none" stroke="#fff" strokeWidth="2"></path>
</pattern>
<rect fill="url(#maze-dark)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-xl text-center lg:text-left">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Prêt à sortir du labyrinthe ?</h3>
<p className="text-lg text-gray-300">Rejoignez la newsletter et recevez votre ebook immédiatement.</p>
</div>
<div className="relative z-10 w-full lg:w-auto">
<a className="inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-medium rounded-xl hover:bg-gray-50 transition-colors" href="#telecharger">
                        Télécharger le PDF
                   </a>
</div>
</div>
<div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
<p>© 2024. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600 transition-colors" href="#">Mentions légales</a>
<a className="hover:text-gray-600 transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
