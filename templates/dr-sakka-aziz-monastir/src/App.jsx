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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 border bg-blue-950 text-blue-400 border-blue-900">
<iconify-icon icon="solar:stethoscope-bold" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight leading-none text-gray-100">Dr. Mohsen Aziz Sakka</span>
<span className="text-xs text-gray-500 font-medium">Médecin Généraliste</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="transition-colors hover:text-blue-400" href="#expertises">Expertises</a>
<a className="transition-colors hover:text-blue-400" href="#cabinet">Le Cabinet</a>
<a className="transition-colors hover:text-blue-400" href="#contact">Contact &amp; Accès</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:shadow-lg active:scale-95 border bg-gray-100 text-black hover:bg-gray-200 border-gray-200" href="tel:+21673900552">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>Appeler</span>
</a>
<a className="flex md:hidden items-center justify-center w-10 h-10 rounded-full border bg-blue-950 text-blue-400 hover:bg-blue-900 border-blue-900" href="https://wa.me/21629848686" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 pattern-bg overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="flex-1 text-center lg:text-left pt-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 shadow-sm bg-black border-blue-900 text-blue-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-600"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Ouvert aux consultations
                    </div>
<h1 className="text-4xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] mb-6 text-gray-100">
                        Médecine de famille &amp; <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-pink-500 from-blue-400">Suivi Global</span> à Monastir
                    </h1>
<p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                        Votre santé mérite une écoute attentive. Le cabinet du Dr Mohsen Aziz Sakka vous accompagne pour vos soins généraux, le suivi de maladies chroniques et les urgences.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:-translate-y-0.5 bg-blue-400 text-black hover:bg-blue-300 shadow-blue-800" href="tel:+21650940585">
                            Prendre Rendez-vous
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border px-8 py-3.5 rounded-full text-sm font-medium transition-all bg-black border-gray-800 text-gray-300 hover:bg-gray-950 hover:border-gray-700" href="https://maps.app.goo.gl/HK2epifsv3qVwjRi8" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
                            Voir sur la carte
                        </a>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-gray-800/60">
<p className="text-base font-arabic text-blue-200" dir="rtl">
                            الدكتور محسن عزيز السقا أخصائي طب العائلة و طب عام بالمنستير
                        </p>
</div>
</div>

<div className="flex-1 lg:max-w-full flex lg:justify-end w-full max-w-md relative perspective-1000 justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr rounded-full blur-3xl -z-10 from-blue-900/60 via-purple-950/50 to-pink-950/40"></div>

<div className="relative group animate-float">

<div className="absolute -inset-1 bg-gradient-to-b to-transparent rounded-[2.5rem] opacity-50 blur-[2px] from-blue-700"></div>

<div className="relative backdrop-blur-sm p-3 rounded-[2.5rem] shadow-2xl border bg-black/60 shadow-blue-100/10 border-black/60">

<div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] w-full max-w-sm bg-gray-900">

<img alt="Dr Mohsen Aziz Sakka" className="object-cover w-full h-full transform transition duration-700 group-hover:scale-105 saturate-[0.95] group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/134f1b46-89a7-4e47-93db-b2879464a1c7_800w.png"/>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t to-transparent from-blue-50/40"></div>

<div className="absolute bottom-6 left-6 right-6">
<div className="backdrop-blur-md border p-4 rounded-2xl shadow-lg flex items-center gap-4 bg-black/95 border-black/40">
<div className="w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 bg-blue-950 border-blue-900 text-blue-400">
<iconify-icon icon="solar:shield-check-bold" width="22"></iconify-icon>
</div>
<div>
<p className="text-[10px] font-bold uppercase tracking-widest mb-0.5 text-blue-400">Conventionné</p>
<p className="text-sm font-semibold text-gray-100">CNAM &amp; Assurances</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 p-3.5 rounded-2xl shadow-xl border flex items-center justify-center text-purple-500 animate-bounce delay-700 bg-black border-gray-900">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-black border-gray-900" id="expertises">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-gray-100">Soins &amp; Expertises Médicales</h2>
<p className="text-gray-500 text-lg">Une approche complète pour le bien-être de toute la famille.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">Consultation Générale</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Diagnostic et traitement des pathologies courantes. Bilan de santé complet et médecine de famille.</p>
</div>

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">Maladies Chroniques</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Suivi rigoureux du diabète, de l'hypertension artérielle (HTA) et de la dyslipidémie.</p>
</div>

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">ECG &amp; Holter</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Électrocardiogramme et Holter tensionnel au cabinet pour le dépistage des troubles cardiaques.</p>
</div>

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:wheelchair-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">Gériatrie</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Prise en charge spécialisée pour les personnes âgées, maintien de l'autonomie et suivi gérontologique.</p>
</div>

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:syringe-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">Vaccination</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Vaccination pour enfants et adultes. Délivrance de certificats médicaux (aptitude, sport, etc.).</p>
</div>

<div className="p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 group bg-gray-950/50 border-gray-900 hover:border-blue-800 hover:bg-black hover:shadow-blue-100/5">
<div className="w-12 h-12 rounded-2xl shadow-sm border flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-100 bg-black border-gray-900 text-gray-400">
<iconify-icon icon="solar:home-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight text-gray-100">Visites à Domicile</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Consultations à domicile possibles en cas d'urgence ou pour les patients à mobilité réduite.</p>
</div>
</div>
<div className="mt-12 p-1 rounded-2xl bg-gradient-to-r max-w-3xl mx-auto from-purple-950 to-blue-950">
<div className="rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left backdrop-blur-sm border bg-black/80 border-black/50">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-purple-900 text-purple-400">
<iconify-icon icon="solar:info-circle-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-gray-400">
<strong className="text-gray-100">Conventions :</strong> Le cabinet est conventionné avec la CNAM, la Mutuelle SONEDE, La Carte We Cover et CTAMA.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0F19] relative overflow-hidden text-black" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Contactez-nous</h2>
<p className="mb-10 max-w-md font-normal text-lg text-gray-600">
                        Pour prendre rendez-vous ou pour toute urgence, n'hésitez pas à nous contacter par téléphone ou via WhatsApp.
                    </p>
<div className="space-y-8">

<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all bg-black/5 border-black/10 text-blue-600">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1.5 text-base text-black">Adresse du Cabinet</h4>
<p className="text-sm leading-relaxed text-gray-600">
                                    Av Habib Bourguiba, Immeuble Carré Médical,<br/>
                                    Près de la Banque Centrale et Amm Salem,<br/>
                                    5000 Monastir, Tunisie.
                                </p>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all bg-black/5 border-black/10 text-blue-600">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1.5 text-base text-black">Téléphones</h4>
<div className="flex flex-col gap-1.5 text-sm text-gray-600">
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="tel:+21673900552">
<span className="w-16">Fixe</span>
<span className="font-medium text-gray-700">+216 73 900 552</span>
</a>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="tel:+21650940585">
<span className="w-16">Mobile 1</span>
<span className="font-medium text-gray-700">+216 50 940 585</span>
</a>
<a className="transition-colors flex items-center gap-2 hover:text-blue-600" href="tel:+21629848686">
<span className="w-16">Mobile 2</span>
<span className="font-medium text-gray-700">+216 29 848 686</span>
</a>
</div>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all bg-black/5 border-black/10 text-blue-600">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1.5 text-base text-black">E-mail</h4>
<a className="text-sm transition-colors text-gray-600 hover:text-blue-600" href="mailto:smohsenaziz@gmail.com">smohsenaziz@gmail.com</a>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="flex items-center gap-2.5 px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-[#25d366]/20 hover:-translate-y-0.5 text-black" href="https://wa.me/21629848686" target="_blank">
<iconify-icon icon="ic:baseline-whatsapp" width="20"></iconify-icon>
                            WhatsApp
                        </a>
<a className="flex items-center gap-2.5 px-6 py-3 bg-[#1877F2] hover:bg-[#1565c0] rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-[#1877f2]/20 hover:-translate-y-0.5 text-black" href="https://www.facebook.com/Dr.Sakka" target="_blank">
<iconify-icon icon="ic:baseline-facebook" width="20"></iconify-icon>
                            Facebook
                        </a>
</div>
</div>

<div className="h-full min-h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border relative group bg-gray-200 border-gray-300">
<div className="w-full h-full flex items-center justify-center relative bg-gray-200">
<img alt="Map background" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-gray-100"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8 text-center">
<div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center backdrop-blur-sm mb-6 animate-pulse">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
</div>
<h3 className="text-xl font-semibold mb-2">Immeuble Carré Médical</h3>
<p className="text-sm mb-8 max-w-xs mx-auto text-gray-700">Monastir, Tunisie</p>
<a className="px-8 py-3.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-xl hover:shadow-2xl bg-black text-gray-100" href="https://maps.app.goo.gl/HK2epifsv3qVwjRi8" target="_blank">
                                Ouvrir Google Maps
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#05080f] py-12 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-500" icon="solar:health-linear" width="22"></iconify-icon>
<span className="font-semibold tracking-tight text-gray-700">Dr. Sakka</span>
</div>
<p className="text-xs text-center md:text-right font-medium text-gray-400">
                © 2024 Dr Mohsen Aziz Sakka. Tous droits réservés.<br/>
                Médecin Généraliste à Monastir.
            </p>
</div>
</footer>

    </>
  );
}
