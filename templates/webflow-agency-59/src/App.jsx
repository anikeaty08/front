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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white">Krelo<span className="text-orange-500 font-normal">Agency</span></span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-xs font-medium text-orange-400 hover:text-white transition-colors" href="#services">Expertise</a>
<a className="text-xs font-medium text-orange-400 hover:text-white transition-colors" href="#projets">Réalisations</a>
<a className="text-xs font-medium text-orange-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium text-orange-400 hover:text-white transition-colors" href="#tarifs">Tarifs</a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-6 text-xs font-semibold text-black transition-all hover:bg-orange-200 hover:scale-105" href="#">
                    Réserver un appel
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center text-center">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-6 mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-10 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
<span className="text-xs font-medium text-orange-300">Disponible pour de nouveaux projets</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
                L'agence Webflow des <br className="hidden md:block"/>
<span className="text-gradient">Startups &amp; SaaS.</span>
</h1>
<p className="text-lg text-orange-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Nous concevons des sites web ultra-performants qui transforment vos visiteurs en clients. Design unique, développement pixel-perfect et stratégie de conversion.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white text-black font-semibold text-sm hover:bg-orange-200 transition-all flex items-center justify-center gap-2">
                    Lancer mon projet
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                    Voir le portfolio
                </button>
</div>
</div>

<div className="mt-24 pt-12 border-t border-white/5 w-full max-w-6xl mx-auto px-6">
<p className="text-xs text-orange-600 mb-8 uppercase tracking-widest font-semibold">Ils font confiance à Krelo Agency</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> ORBITAL</span>
<span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:leaf-linear"></iconify-icon> MINT</span>
<span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:layers-linear"></iconify-icon> STACK</span>
<span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:crown-linear"></iconify-icon> NOBLE</span>
<span className="text-xl font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> FLASH</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Notre expertise</h2>
<p className="text-orange-500 max-w-md">Une approche 360° pour dominer votre marché digital.</p>
</div>
<a className="text-sm font-medium text-white underline underline-offset-4 decoration-orange-700 hover:decoration-white transition-all" href="#">Découvrir tous les services</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:pallete-2-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[280px]">
<div>
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:figma-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
<p className="text-orange-400 leading-relaxed max-w-lg">
                                Des interfaces épurées et centrées sur l'utilisateur. Nous créons des systèmes de design scalables qui renforcent votre image de marque et facilitent la navigation.
                            </p>
</div>
<div className="mt-8 flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-orange-400">Figma</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-orange-400">Prototyping</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] text-orange-400">Design System</span>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Développement Webflow</h3>
<p className="text-sm text-orange-400 leading-relaxed mb-8">
                        Intégration pixel-perfect, animations fluides et CMS optimisé. Votre site est rapide, sécurisé et facile à gérer.
                    </p>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
</div>

<div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">SEO &amp; Performance</h3>
<p className="text-sm text-orange-400 leading-relaxed">
                        Optimisation technique pour les moteurs de recherche. Structure sémantique, temps de chargement éclair et Core Web Vitals.
                    </p>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Copywriting &amp; Conversion</h3>
<p className="text-orange-400 leading-relaxed">
                            Les mots comptent. Nous rédigeons des textes persuasifs qui parlent à votre audience cible et déclenchent l'action. Landing pages, séquences email et scripts de vente.
                        </p>
</div>
<div className="w-full md:w-1/3 aspect-video rounded-lg bg-orange-900 border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-green-500/20"></div>
<div className="text-center z-10">
<p className="text-3xl font-bold text-white">+145%</p>
<p className="text-[10px] text-orange-400 uppercase tracking-widest mt-1">De conversion</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-900/30 border-y border-white/5" id="projets">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center">Dernières réalisations</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-orange-800 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-orange-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">

<div className="w-3/4 h-3/4 bg-orange-900 rounded-lg border border-white/5 shadow-2xl flex flex-col overflow-hidden">
<div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
</div>
<div className="flex-1 bg-gradient-to-br from-orange-800 to-black p-6">
<div className="w-1/2 h-4 bg-white/10 rounded mb-4"></div>
<div className="w-full h-24 bg-white/5 rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Voir le case study</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-white mb-1">FinTech Core</h3>
<p className="text-sm text-orange-500">Refonte complète &amp; Design System</p>
</div>
<div className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-orange-400 uppercase tracking-wide">Fintech</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-2xl bg-orange-800 border border-white/10 overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-orange-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">

<div className="w-3/4 h-3/4 bg-orange-900 rounded-lg border border-white/5 shadow-2xl flex flex-col overflow-hidden">
<div className="h-8 border-b border-white/5 bg-white/5 flex items-center px-4 gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
</div>
<div className="flex-1 bg-gradient-to-bl from-amber-900/20 to-black p-6 flex flex-col items-center justify-center">
<div className="w-16 h-16 rounded-full bg-amber-500/20 mb-4"></div>
<div className="w-2/3 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="px-6 py-3 bg-white text-black rounded-full font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Voir le case study</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-white mb-1">Saas Flow</h3>
<p className="text-sm text-orange-500">Landing Page High-Converting</p>
</div>
<div className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-orange-400 uppercase tracking-wide">SaaS B2B</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="mb-10 inline-flex text-amber-400">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-white leading-tight mb-10">
                "Krelo a transformé notre présence en ligne. Le design est époustouflant, mais c'est surtout l'impact sur nos conversions qui nous a bluffés. Le meilleur investissement de l'année."
            </h3>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-lg mb-2">A</div>
<p className="font-semibold text-white">Alexandre Dupont</p>
<p className="text-sm text-orange-500">CEO @ InnovateTech</p>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
</section>

<section className="py-32 relative">
<div className="max-w-5xl mx-auto px-6">
<div className="rounded-[2.5rem] bg-gradient-to-b from-orange-900 to-black border border-white/10 p-12 md:p-24 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-amber-500/20 blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">Prêt à passer au niveau supérieur ?</h2>
<p className="text-lg text-orange-400 mb-10 max-w-xl mx-auto">
                        Ne laissez plus votre site web être un frein à votre croissance. Discutons de vos objectifs et voyons comment nous pouvons vous aider.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold text-sm hover:bg-orange-200 transition-all transform hover:-translate-y-1" href="#">
                            Réserver un appel découverte
                        </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors" href="#">
                            hello@krelo-agency.com
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-bold" width="14"></iconify-icon>
</div>
<span className="text-base font-bold text-white">Krelo Agency</span>
</a>
<p className="text-xs text-orange-500 leading-relaxed max-w-xs">
                        Agence digitale spécialisée dans la création d'expériences web haut de gamme pour les entreprises ambitieuses.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Services</h4>
<ul className="space-y-3">
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">Webflow Development</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">UI/UX Design</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">SEO &amp; Audit</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">Branding</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Agence</h4>
<ul className="space-y-3">
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">Réalisations</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="text-xs text-orange-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-6">Suivez-nous</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="mdi:linkedin" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="mdi:twitter" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="mdi:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-orange-600">© 2024 Krelo Agency. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-[10px] text-orange-600 hover:text-orange-400 transition-colors" href="#">Mentions légales</a>
<a className="text-[10px] text-orange-600 hover:text-orange-400 transition-colors" href="#">Confidentialité</a>
<a className="text-[10px] text-orange-600 hover:text-orange-400 transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
