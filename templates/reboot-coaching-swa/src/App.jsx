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
      

<nav className="fixed top-0 w-full z-50 bg-[#fcfaf8]/90 backdrop-blur-md border-b transition-all border-stone-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-2xl font-script pt-1 relative group tracking-wide text-orange-600" href="#" style={{}}>
                Reboot
            </a>
<a className="text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-sm ring-1 bg-stone-800 text-stone-50 hover:bg-stone-700 ring-stone-900/5" href="https://calendly.com/lelabpedagogique/rdvconseil" style={{}} target="_blank">
                Candidater (Places limitées)
            </a>
</div>
</nav>

<header className="md:pt-44 md:pb-32 overflow-hidden pt-32 pr-6 pb-24 pl-6 relative">

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-visible" preserveaspectratio="none">
<path className="opacity-30 md:opacity-40" d="M-100,200 C100,200 200,50 400,150 C600,250 800,100 1200,180" fill="none" stroke="#f97316" stroke-dasharray="8 4" strokeWidth="2"></path>
</svg>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-medium shadow-sm mb-6 bg-white border-orange-100 text-orange-700 shadow-orange-100/50" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Programme V1 sur candidature
            </div>

<div className="mb-8 relative block">
<div className="relative inline-block px-4">

<h1 className="text-8xl md:text-9xl font-script text-orange-500 relative z-10 leading-[0.8] drop-shadow-sm transform -rotate-2" style={{}}>
                        Reboot
                    </h1>

<svg className="absolute -bottom-2 md:-bottom-4 left-0 w-[120%] -ml-[10%] h-12 text-orange-500 pointer-events-none z-0" preserveaspectratio="none" viewbox="0 0 300 40">

<path className="opacity-90" d="M10,20 Q60,35 150,25 T290,20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</div>
</div>
<p className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-8 text-orange-700" style={{}}>
                Retrouver le fil pour choisir sa nouvelle voie
            </p>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-balance text-stone-800" style={{}}>
                Sortez du brouillard et reprenez les commandes.
            </h2>
<p className="text-lg md:text-2xl text-stone-500 font-light max-w-2xl mx-auto mb-12 leading-relaxed text-balance" style={{}}>
                Vous êtes épuisée, perdue, en perte de sens ? Suivez le fil rouge pour retrouver clarté et énergie professionnelle en 6 semaines.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="sm:w-auto transition-all hover:-translate-y-0.5 hover:bg-stone-700 shadow-stone-200/50 text-base font-medium text-stone-50 bg-stone-800 w-full rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl" href="https://calendly.com/lelabpedagogique/rdvconseil" target="_blank">
                    Réserver un appel découverte
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 border text-base font-medium rounded-xl transition-all hover:-translate-y-0.5 bg-white text-stone-600 border-stone-200 hover:bg-stone-50" href="#programme" style={{}}>
                    Découvrir le programme
                </a>
</div>
<p className="mt-8 text-xs font-medium text-stone-400" style={{}}>Spécialement conçu pour les enseignantes et salariées en transition.</p>
</div>
</header>

<section className="border-y bg-white border-stone-100 pt-24 pb-24 relative">
<div className="max-w-5xl mx-auto px-6 relative">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-stone-800" style={{}}>Le fil est rompu ? Vous vous reconnaissez :</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="group relative">
<div className="mb-5 p-3.5 border rounded-xl w-fit group-hover:bg-orange-100 transition-colors bg-orange-50/50 border-orange-100 text-orange-600">
<svg aria-hidden="true" className="lucide lucide-zap-off w-6 h-6" data-lucide="zap-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"></path><path d="M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"></path><path d="M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"></path><path d="m2 2 20 20"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-stone-800" style={{}}>Épuisement mental</h3>
<p className="text-base text-stone-500 leading-relaxed font-light" style={{}}>Vous tournez en rond, saturée par les pensées qui se répètent. Vous n'arrivez plus à réfléchir sereinement.</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 border rounded-xl w-fit group-hover:bg-orange-100 transition-colors bg-orange-50/50 border-orange-100 text-orange-600">
<svg aria-hidden="true" className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-stone-800" style={{}}>Perte de direction</h3>
<p className="text-base text-stone-500 leading-relaxed font-light" style={{}}>Vous ne savez plus ce que vous voulez vraiment. L'avenir vous semble flou, sans repères clairs.</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 border rounded-xl w-fit group-hover:bg-orange-100 transition-colors bg-orange-50/50 border-orange-100 text-orange-600">
<svg aria-hidden="true" className="lucide lucide-fingerprint w-6 h-6" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-stone-800" style={{}}>Crise identitaire</h3>
<p className="text-base text-stone-500 leading-relaxed font-light" style={{}}>Vous ne vous reconnaissez plus. Qui êtes-vous en dehors de votre métier actuel ?</p>
</div>

<div className="group relative">
<div className="mb-5 p-3.5 border rounded-xl w-fit group-hover:bg-orange-100 transition-colors bg-orange-50/50 border-orange-100 text-orange-600">
<svg aria-hidden="true" className="lucide lucide-pause-circle w-6 h-6" data-lucide="pause-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-stone-800" style={{}}>Paralysie</h3>
<p className="text-base text-stone-500 leading-relaxed font-light" style={{}}>Vous voulez changer mais vous avez peur de faire le mauvais choix. Alors vous ne bougez plus.</p>
</div>
</div>

<div className="mt-16 p-8 relative rounded-2xl border border-dashed text-center overflow-hidden border-orange-200 bg-orange-50/30">
<p className="text-base md:text-lg font-light relative z-10 text-stone-700" style={{}}>
                    Vous n'êtes pas seule. Plus de <span className="font-semibold text-orange-800" style={{}}>15 000 enseignantes</span> vivent cette même situation. Et il existe un chemin pour en sortir.
                </p>
</div>
</div>
</section>

<section className="py-28 px-6 max-w-5xl mx-auto relative">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl font-medium tracking-tight mb-5 text-stone-800" style={{}}>Votre Reset Professionnel en Douceur</h2>
<p className="text-stone-500 text-xl font-light" style={{}}>ReBoot n'est pas une formation métier. C'est un programme de transformation intérieure qui vous aide à renouer les fils de votre parcours.</p>
</div>
<div className="grid md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-6 z-0 pointer-events-none">
<svg height="100%" preserveaspectratio="none" width="100%">
<path d="M0,10 C100,25 200,-5 300,10 S500,25 800,10" fill="none" stroke="#fdba74" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>
</div>

<div className="p-8 border rounded-2xl shadow-sm transition-all duration-300 relative z-10 group bg-white border-stone-200 hover:border-orange-300">
<div className="w-12 h-12 border-2 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script mb-6 mx-auto md:mx-0 transition-colors shadow-sm bg-white border-orange-100 text-stone-400" style={{}}>1</div>
<h3 className="text-xl font-semibold mb-3 text-stone-800" style={{}}>Reset</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Sortir de la surcharge mentale, comprendre votre épuisement, retrouver de l'espace pour respirer.</p>
</div>

<div className="p-8 border rounded-2xl shadow-sm transition-all duration-300 relative z-10 group bg-white border-stone-200 hover:border-orange-300">
<div className="w-12 h-12 border-2 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script mb-6 mx-auto md:mx-0 transition-colors shadow-sm bg-white border-orange-100 text-stone-400" style={{}}>2</div>
<h3 className="text-xl font-semibold mb-3 text-stone-800" style={{}}>Redéfinition</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Identifier vos valeurs, moteurs et compétences transférables. Reconnecter avec votre essence.</p>
</div>

<div className="p-8 border rounded-2xl shadow-sm transition-all duration-300 relative z-10 group bg-white border-stone-200 hover:border-orange-300">
<div className="w-12 h-12 border-2 group-hover:border-orange-500 group-hover:text-orange-600 rounded-full flex items-center justify-center text-xl font-script mb-6 mx-auto md:mx-0 transition-colors shadow-sm bg-white border-orange-100 text-stone-400" style={{}}>3</div>
<h3 className="text-xl font-semibold mb-3 text-stone-800" style={{}}>Relance</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Générer des pistes professionnelles alignées et construire votre plan d'action pour la suite.</p>
</div>
</div>
</section>

<section className="py-28 bg-[#2c2825] relative overflow-hidden text-stone-300" id="programme">
<svg className="absolute right-0 top-0 h-full w-1/3 pointer-events-none opacity-5" preserveaspectratio="none" viewbox="0 0 100 800">
<path d="M50,0 Q100,200 0,400 T50,800" fill="none" stroke="white" strokeWidth="2"></path>
</svg>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
<div className="max-w-xl">
<h2 className="text-4xl font-medium tracking-tight mb-5 text-white" style={{}}>Suivez le guide : 6 Semaines</h2>
<p className="text-lg font-light text-stone-400" style={{}}>Un rythme doux adapté aux personnes épuisées. Chaque semaine, nous tirons une nouvelle ficelle pour dénouer la situation.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-x-16 gap-y-14">

<div className="pl-8 relative border-l-2 border-orange-500/30">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-orange-500"></span>
<h4 className="text-xl font-script mb-1 text-orange-400" style={{}}>Semaine 1</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Sortir de la surcharge</h3>
<p className="text-base font-light text-stone-400" style={{}}>Comprendre votre épuisement, identifier où va votre énergie, retrouver de l'air pour respirer.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1" style={{}}>Semaine 2</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Clarifier vos besoins</h3>
<p className="text-base font-light text-stone-400" style={{}}>Identifier vos besoins fondamentaux et vos non-négociables pour ne plus vous tromper.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1" style={{}}>Semaine 3</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Retrouver vos moteurs</h3>
<p className="text-base font-light text-stone-400" style={{}}>Reconnecter avec ce qui vous fait vibrer, vos aspirations profondes et vos zones d'énergie.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1" style={{}}>Semaine 4</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Valoriser vos compétences</h3>
<p className="text-base font-light text-stone-400" style={{}}>Cartographier vos compétences transférables et découvrir votre vraie valeur professionnelle.</p>
</div>

<div className="pl-8 relative border-l-2 border-stone-700">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-stone-600"></span>
<h4 className="text-xl font-script text-stone-500 mb-1" style={{}}>Semaine 5</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Identifier vos pistes</h3>
<p className="text-base font-light text-stone-400" style={{}}>Découvrir 3 à 5 options professionnelles réalistes et alignées avec votre profil.</p>
</div>

<div className="pl-8 relative border-l-2 border-orange-500/30">
<span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#2c2825] border-2 border-orange-500"></span>
<h4 className="text-xl font-script mb-1 text-orange-400" style={{}}>Semaine 6</h4>
<h3 className="text-xl font-medium mb-3 text-white" style={{}}>Construire votre plan</h3>
<p className="text-base font-light text-stone-400" style={{}}>Définir vos prochaines étapes et prendre votre première décision souveraine.</p>
</div>
</div>
</div>
</section>

<section className="py-28 max-w-5xl mx-auto px-6 bg-grid">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-stone-800" style={{}}>Votre boîte à outils pour réparer le lien</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-headphones w-7 h-7 text-orange-500 mb-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>6 audios guidés</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Des méditations et guidages doux de 5-10 minutes, adaptés aux cerveaux fatigués.</p>
</div>
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-book-open w-7 h-7 text-orange-500 mb-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>Carnet introspectif</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Questions puissantes, exercices guidés et journaling structuré pour remettre de l'ordre.</p>
</div>
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-layout-dashboard w-7 h-7 text-orange-500 mb-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>Espace Notion</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Tableau de bord, cartographies, synthèses et plan d'action entièrement personnalisés.</p>
</div>
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-briefcase w-7 h-7 text-orange-500 mb-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>Plateforme Compétences</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Découvrez vos compétences transférables et les métiers compatibles avec des offres réelles.</p>
</div>
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-user-check w-7 h-7 text-orange-500 mb-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>Tests de personnalité</h3>
<p className="text-base text-stone-500 font-light" style={{}}>OCEAN Five, échelle d'estime de soi et tests motivationnels pour mieux vous comprendre.</p>
</div>
<div className="p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 border-stone-200 bg-white hover:shadow-orange-100/50 hover:border-orange-200">
<svg aria-hidden="true" className="lucide lucide-trophy w-7 h-7 text-orange-500 mb-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<h3 className="font-semibold mb-3 text-lg text-stone-800" style={{}}>Quêtes hebdomadaires</h3>
<p className="text-base text-stone-500 font-light" style={{}}>Mini-actions douces qui soutiennent votre progression sans vous épuiser.</p>
</div>
</div>
</section>

<section className="py-24 border-y bg-stone-50 border-stone-100">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-medium mb-14 text-center tracking-tight text-stone-800" style={{}}>À la fin de <span className="font-script text-orange-600" style={{}}>Reboot</span>, vous avez :</h2>
<div className="grid gap-5">
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-orange-100">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 text-orange-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg font-light text-stone-600" style={{}}>Une clarté totale sur vos besoins, limites et moteurs professionnels</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-orange-100">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 text-orange-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg font-light text-stone-600" style={{}}>Une compréhension apaisée de ce qui vous a épuisée</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-orange-100">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 text-orange-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg font-light text-stone-600" style={{}}>Une vision nette de ce que vous ne voulez plus</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-orange-100">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 text-orange-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg font-light text-stone-600" style={{}}>3 à 5 pistes professionnelles alignées et réalistes à explorer</p>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-orange-100">
<svg aria-hidden="true" className="lucide lucide-check w-3.5 h-3.5 text-orange-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-lg font-light text-stone-600" style={{}}>Une direction solide et un plan d'action pour les 30-90 prochains jours</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-xl font-medium italic text-stone-800" style={{}}>"C'est un diagnostic reconversion clé en main qui vous évite des mois d'errance."</p>
</div>
</div>
</section>

<section className="py-28 max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-medium mb-16 tracking-tight text-stone-800" style={{}}>Elles ont renoué avec leur ambition</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl border shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform bg-white border-stone-100">
<div>
<div className="flex gap-1 mb-5 text-orange-400">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base leading-relaxed font-light mb-8 text-stone-600" style={{}}>"Je savais qu'il fallait changer quelque chose, mais j'avais besoin d'être guidée. J'étais un peu paumée… Je sais ce que je veux, ce que je ne veux pas. J'ai pris confiance en moi. Franchement, merci !!!"</p>
</div>
<div className="flex items-center gap-4 border-t pt-4 border-stone-50">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-orange-50 text-orange-600" style={{}}>C</div>
<div>
<p className="text-sm font-semibold text-stone-800" style={{}}>Clémentine</p>
<p className="text-xs text-stone-400" style={{}}>Professeur des écoles</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl border shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform bg-white border-stone-100">
<div>
<div className="flex gap-1 mb-5 text-orange-400">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base leading-relaxed font-light mb-8 text-stone-600" style={{}}>"J'ai enfin compris d'où venait mon blocage. Et j'ai maintenant les outils pour ne pas retomber dedans : je n'ai plus le même état d'esprit. Je n'aurais pas sauté le pas sans ce soutien."</p>
</div>
<div className="flex items-center gap-4 border-t pt-4 border-stone-50">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-orange-50 text-orange-600" style={{}}>E</div>
<div>
<p className="text-sm font-semibold text-stone-800" style={{}}>Emilie</p>
<p className="text-xs text-stone-400" style={{}}>Professeur d'allemand</p>
</div>
</div>
</div>
<div className="p-8 rounded-3xl border shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform bg-white border-stone-100">
<div>
<div className="flex gap-1 mb-5 text-orange-400">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-base leading-relaxed font-light mb-8 text-stone-600" style={{}}>"Ce programme est une mine d'outils précieux. J'ai pu tester et mettre en place mon projet de création d'une association."</p>
</div>
<div className="flex items-center gap-4 border-t pt-4 border-stone-50">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-orange-50 text-orange-600" style={{}}>L</div>
<div>
<p className="text-sm font-semibold text-stone-800" style={{}}>Laurence</p>
<p className="text-xs text-stone-400" style={{}}>Professeur des écoles</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 border-y bg-grid bg-white border-stone-100">
<div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/3 relative">
<div className="absolute -inset-4 border rounded-full opacity-60 animate-pulse border-orange-200"></div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-lg rotate-2 bg-stone-100">
<div className="absolute inset-0 flex items-center justify-center text-stone-300 bg-stone-100">
<svg aria-hidden="true" className="lucide lucide-image w-14 h-14 opacity-60" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>
</div>
<div className="w-full md:w-2/3">
<h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-orange-600" style={{}}>Votre guide</h3>
<h2 className="text-3xl font-medium mb-8 tracking-tight text-stone-800" style={{}}>Marie Décole</h2>
<div className="space-y-6 leading-relaxed text-lg font-light text-stone-600">
<p style={{}}>Ancienne enseignante, j'ai moi-même traversé les phases de doute, d'épuisement et de perte de sens qui précèdent souvent une reconversion. Je sais ce que c'est de se sentir prisonnière d'un système.</p>
<p style={{}}>Aujourd'hui, je forme et accompagne plus de 15 000 enseignantes via <span className="font-medium text-stone-800" style={{}}>Le Lab Pédagogique</span>. Ma mission : offrir des outils exigeants et profondément humains pour permettre aux femmes épuisées de reconstruire une trajectoire alignée.</p>
<p style={{}}><span className="font-script text-2xl text-orange-600" style={{}}>Reboot</span>, c'est tout ce que j'aurais aimé avoir quand j'étais dans votre situation. Un fil d'Ariane pour sortir du labyrinthe.</p>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 relative" id="candidature">
<div className="max-w-md mx-auto rounded-3xl shadow-2xl border overflow-hidden relative z-10 transform hover:scale-[1.01] transition-transform duration-500 bg-white shadow-stone-300/40 border-stone-100">
<div className="p-10 text-center border-b bg-[#fdfbf9] relative border-stone-100">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r to-orange-500 from-orange-300"></div>
<h3 className="text-lg font-normal text-stone-500 mb-3" style={{}}>Offre de lancement</h3>
<div className="relative inline-block mb-3">
<h2 className="text-6xl font-script relative z-10 transform -rotate-2 text-orange-600" style={{}}>Reboot</h2>
<svg className="absolute -bottom-2 left-0 w-full h-4 opacity-60 text-orange-600" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</div>
<p className="text-sm mb-8 text-stone-400" style={{}}>Programme complet de transformation en 6 semaines</p>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-5xl font-bold text-stone-800" style={{}}>197€</span>
</div>
<a className="block w-full py-4 px-5 rounded-xl font-medium transition-colors shadow-lg bg-stone-800 hover:bg-stone-700 text-white shadow-stone-200" href="https://calendly.com/lelabpedagogique/rdvconseil" style={{}} target="_blank">
                    Candidater pour une place
                </a>
<p className="mt-5 text-xs text-stone-400" style={{}}>Paiement uniquement si candidature acceptée</p>
</div>
<div className="p-10 bg-white">
<ul className="space-y-5">
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>6 audios guidés (5-10 min)</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Carnet introspectif structuré</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Espace Notion complet</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Plateforme compétences &amp; métiers</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Tests inclus (OCEAN Five, etc.)</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Plan d'action 30-90 jours</span>
</li>
<li className="flex items-start gap-4 text-base font-light text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-orange-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Accès à vie aux ressources</span>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-dashed text-center border-stone-200">
<p className="text-sm leading-relaxed font-light italic text-stone-400" style={{}}>
                        "Combien vous coûte chaque mois passé dans le brouillard ?"
                    </p>
</div>
</div>
</div>
</section>

<section className="py-28 border-y bg-white border-stone-100">
<div className="max-w-5xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-20">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-8 ring-1 bg-orange-50 text-orange-600 ring-orange-100">
<svg aria-hidden="true" className="lucide lucide-key w-7 h-7" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<h2 className="text-4xl font-medium tracking-tight mb-8 text-stone-800" style={{}}>Pourquoi maintenant ?</h2>
<p className="text-xl leading-relaxed font-light text-stone-600" style={{}}>
                    Chaque mois passé dans le doute, c'est de l'énergie perdue, du stress accumulé et une estime qui s'effrite. <span className="font-script text-2xl text-orange-600" style={{}}>Reboot</span> vous offre une pause consciente pour vous retrouver et décider, sans bouleverser votre vie.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-10 lg:gap-14">
<div className="p-10 rounded-3xl border shadow-sm bg-stone-50 border-stone-100">
<h3 className="text-2xl font-medium mb-8 flex items-center gap-4 text-stone-800" style={{}}>
<svg aria-hidden="true" className="lucide lucide-map-pin w-6 h-6 text-orange-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Pour qui ?
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-6 h-6 mt-0.5 shrink-0 text-stone-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Enseignantes, formatrices ou professionnelles en perte de sens.</span>
</li>
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-6 h-6 mt-0.5 shrink-0 text-stone-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Celles qui veulent avancer sans se brûler.</span>
</li>
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check w-6 h-6 mt-0.5 shrink-0 text-stone-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span style={{}}>Celles qui en ont marre de procrastiner ou de se disperser.</span>
</li>
</ul>
</div>
<div className="p-10 rounded-3xl border shadow-sm bg-stone-50 border-stone-100">
<h3 className="text-2xl font-medium mb-8 flex items-center gap-4 text-stone-800" style={{}}>
<svg aria-hidden="true" className="lucide lucide-flag w-6 h-6 text-orange-500" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
                        À la fin, vous avez :
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 shrink-0 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-normal text-stone-800" style={{}}>Une clarté intérieure retrouvée.</span>
</li>
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 shrink-0 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-normal text-stone-800" style={{}}>Un plan d'action simple.</span>
</li>
<li className="flex items-start gap-4 font-light text-lg text-stone-600">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-6 h-6 mt-0.5 shrink-0 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-normal text-stone-800" style={{}}>La confiance en vos forces.</span>
</li>
</ul>
</div>
</div>

<div className="mt-16 bg-[#2c2825] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden group text-white">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-500 opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
<h3 className="text-3xl font-medium mb-10 relative z-10" style={{}}>Rejoindre <span className="font-script text-orange-400" style={{}}>Reboot</span> maintenant</h3>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 mb-12 text-base font-medium relative z-10 text-stone-300">
<div className="flex items-center gap-3 px-5 py-2.5 rounded-full border bg-white/5 border-white/10">
<svg aria-hidden="true" className="lucide lucide-tag w-5 h-5 text-orange-400" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span style={{}}>197 € <span className="line-through text-stone-500 ml-1" style={{}}>297 €</span></span>
</div>
<div className="flex items-center gap-3 px-5 py-2.5 rounded-full border bg-white/5 border-white/10">
<svg aria-hidden="true" className="lucide lucide-gift w-5 h-5 text-orange-400" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span style={{}}>Bonus offerts</span>
</div>
</div>
<a className="inline-block w-full sm:w-auto px-10 py-5 font-medium rounded-xl transition-all transform hover:scale-[1.01] shadow-2xl relative z-10 bg-white text-stone-900 hover:bg-orange-50" href="https://calendly.com/lelabpedagogique/rdvconseil" style={{}} target="_blank">
                    Oui, je veux retrouver clarté et confiance
                </a>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium mb-14 text-center tracking-tight text-stone-800" style={{}}>Vos questions, nos réponses</h2>
<div className="space-y-4">
<details className="group border rounded-xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-stone-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg transition-colors text-stone-800 hover:bg-stone-50" style={{}}>
                    Je suis trop fatiguée pour commencer quoi que ce soit...
                    <svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed font-light border-t pt-4 text-stone-600 border-stone-100" style={{}}>
                    Justement. Le programme est conçu spécifiquement pour les états d'épuisement. Les contenus sont courts (audios de 5-10min), apaisants et ne demandent pas d'effort cognitif intense. La première phase sert uniquement à "respirer".
                </div>
</details>
<details className="group border rounded-xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-stone-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg transition-colors text-stone-800 hover:bg-stone-50" style={{}}>
                    Et si je n'ai aucune compétence transférable ?
                    <svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed font-light border-t pt-4 text-stone-600 border-stone-100" style={{}}>
                    C'est une croyance limitante très courante chez les enseignantes. Nous utilisons une plateforme dédiée qui traduit vos expériences en compétences marché concrètes. Vous serez surprise de votre valeur réelle.
                </div>
</details>
<details className="group border rounded-xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-stone-200">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-lg transition-colors text-stone-800 hover:bg-stone-50" style={{}}>
                    Je n'ai pas le temps...
                    <svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 group-open:rotate-180 transition-transform text-stone-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-base leading-relaxed font-light border-t pt-4 text-stone-600 border-stone-100" style={{}}>
                    Le programme demande environ 1h à 1h30 par semaine, que vous pouvez découper en tranches de 15 minutes. C'est un temps investi pour gagner des mois (voire des années) de clarté.
                </div>
</details>
</div>
</section>

<footer className="py-16 border-t text-center relative overflow-hidden bg-stone-50 border-stone-200">
<svg className="absolute bottom-0 left-0 w-full h-12 opacity-10" preserveaspectratio="none">
<path d="M0,10 Q500,60 1000,10" fill="none" stroke="orange" strokeWidth="2"></path>
</svg>
<div className="max-w-xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-medium mb-5 tracking-tight text-stone-800" style={{}}>Vous méritez de retrouver votre direction</h2>
<p className="text-stone-500 mb-10 text-base font-light leading-relaxed" style={{}}>Chaque jour passé dans le brouillard vous coûte de l'énergie, de la confiance, de la joie de vivre. Il est temps de reprendre les commandes.</p>
<a className="inline-flex items-center justify-center px-8 py-3 border text-base font-medium rounded-full transition-colors mb-14 shadow-sm bg-white border-stone-200 text-stone-800 hover:bg-stone-100" href="https://calendly.com/lelabpedagogique/rdvconseil" style={{}} target="_blank">
                Candidater maintenant
            </a>
<div className="flex items-center justify-center gap-8 text-sm font-light text-stone-400">
<span className="font-script text-lg text-stone-500" style={{}}>Reboot</span>
<span style={{}}>© Le Lab Pédagogique</span>
<a className="hover:text-stone-600" href="#" style={{}}>Mentions légales</a>
</div>
</div>
</footer>


    </>
  );
}
