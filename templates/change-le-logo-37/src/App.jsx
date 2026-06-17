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



tailwind.config = {
theme: {
extend: {
colors: {
midnight: '#111111', // Titre / texte fort
charcoal: '#444444', // Texte courant
steel: '#777777',    // Texte secondaire
cloud: '#F9FAFB',    // Gris très clair (background)
cool: '#E5E7EB',     // Gris clair (bordures)
// Palette Brand
primary: '#E43D30',  // Rouge principal
coral: '#F15A3C',    // Corail
orange: '#F97316',   // Orange chaud
salmon: '#FF6B6B',   // Saumon / rose
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
backgroundImage: {
'gradient-brand': 'linear-gradient(90deg, #E43D30 0%, #F15A3C 50%, #F97316 100%)',
'gradient-brand-hover': 'linear-gradient(90deg, #E43D30 0%, #F15A3C 100%)',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(17, 17, 17, 0.05)',
'glow': '0 0 40px -10px rgba(228, 61, 48, 0.25)', // Glow rouge
'card': '0 10px 40px -10px rgba(0,0,0,0.05)',
}
}
}
}

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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white shadow-glow">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-icon-replaced="true" data-icon-set="lucide" data-lucide="sparkles" data-width="18" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<span className="text-midnight font-display font-bold text-lg tracking-tight group-hover:text-primary transition-colors">Upgrads.ai</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-steel hover:text-primary transition-colors" href="#produit">Produit</a>
<a className="text-sm font-medium text-steel hover:text-primary transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-steel hover:text-primary transition-colors" href="#tarifs">Tarifs</a>
<a className="text-sm font-medium text-steel hover:text-primary transition-colors" href="#ressources">Ressources</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-midnight hover:text-primary transition-colors" href="#">Connexion</a>
<button className="bg-gradient-brand hover:brightness-110 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-glow hover:shadow-[0_0_20px_rgba(241,90,60,0.4)]">
                    Essai Gratuit
                </button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pb-24 relative">

<div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
<div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-salmon/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-cool shadow-sm mb-8 animate-[fadeInUp_0.8s_ease-out_forwards]">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-xs font-semibold text-charcoal tracking-wide uppercase">  l'outil viral des e-commerçants</span>
</div>

<h1 className="md:text-7xl text-midnight leading-[1.1] text-5xl font-bold tracking-tighter max-w-4xl mb-6">Des créatives ads rentables <br/> <span className="text-gradient">générées en 2 clics.</span></h1>
<p className="text-lg md:text-xl text-steel font-normal max-w-2xl mb-10 leading-relaxed">
                Le standard entreprise pour la publicité générée par IA. Créez des visuels statiques et vidéos haute performance en quelques secondes, sans compromis sur votre image de marque.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mb-20">
<button className="bg-gradient-brand hover:brightness-110 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-glow hover:translate-y-[-2px] flex items-center justify-center gap-2 group">
                    Générer mes pubs
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-8 py-4 rounded-xl text-base font-medium text-midnight bg-white border border-cool hover:border-primary/30 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
<svg aria-hidden="true" className="iconify text-steel iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Voir la Démo
                </button>
</div>

<div className="w-full perspective-container mt-4">
<div className="hero-ui relative mx-auto max-w-6xl aspect-[16/9] bg-white rounded-2xl border border-cool overflow-hidden shadow-2xl">

<div className="h-12 border-b border-cool flex items-center px-6 gap-4 bg-white justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-cool"></div>
<div className="w-3 h-3 rounded-full bg-cool"></div>
<div className="w-3 h-3 rounded-full bg-cool"></div>
</div>
<div className="h-6 w-px bg-cool mx-2"></div>
<div className="flex gap-4 text-xs font-medium text-steel">
<span className="text-midnight">Espace de travail</span>
<span>Bibliothèque</span>
<span className="">Analyses</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">UP</div>
</div>
</div>

<div className="flex h-full bg-[#F9FAFB]">

<div className="w-64 border-r border-cool bg-white p-6 space-y-6 hidden md:block text-left">
<div className="space-y-3">
<div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Campagnes</div>
<div className="h-8 w-full bg-primary/5 text-primary rounded-lg flex items-center px-3 text-sm font-medium border border-primary/10">Lancement Été 2024</div>
<div className="h-8 w-full hover:bg-gray-50 rounded-lg flex items-center px-3 text-sm text-charcoal transition-colors">Retargeting Q3</div>
<div className="h-8 w-full hover:bg-gray-50 rounded-lg flex items-center px-3 text-sm text-charcoal transition-colors">Prospects Froids</div>
</div>
<div className="space-y-3">
<div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider">Formats</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded bg-gray-100 border border-cool"></div>
<div className="h-8 w-8 rounded bg-gray-100 border border-cool"></div>
<div className="h-8 w-8 rounded bg-gray-100 border border-cool"></div>
</div>
</div>
</div>

<div className="flex-1 p-10 relative overflow-hidden flex flex-col items-center justify-center">

<div className="relative z-10 bg-white p-8 rounded-2xl shadow-card border border-white/50 ring-1 ring-slate-200/50 backdrop-blur-xl max-w-lg w-full text-left">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-brand text-white flex items-center justify-center shadow-lg shadow-orange/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div>
<h3 className="text-sm font-bold text-midnight">Génération en cours...</h3>
<p className="text-xs text-steel">Modèle v2.4 • Haute Définition</p>
</div>
</div>
<span className="text-xs font-mono text-primary bg-primary/5 px-2 py-1 rounded">00:04.2s</span>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-brand w-[70%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs text-steel font-medium">
<span>Analyse de la charte graphique...</span>
<span>70%</span>
</div>
</div>
</div>

<div className="absolute right-12 top-20 w-48 h-64 bg-white rounded-xl shadow-2xl border border-cool p-2 rotate-6 hover:rotate-0 transition-transform duration-500 z-0">
<div className="w-full h-32 bg-gradient-to-br from-orange to-salmon rounded-lg mb-3"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded"></div>
<div className="absolute bottom-2 right-2 bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">CTR +12%</div>
</div>
<div className="absolute left-16 bottom-20 w-56 h-36 bg-white rounded-xl shadow-2xl border border-cool p-3 flex gap-3 -rotate-3 hover:rotate-0 transition-transform duration-500 z-0">
<div className="w-20 h-full bg-slate-100 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
</div>
<div className="flex-1 flex flex-col justify-center gap-2">
<div className="h-2 w-full bg-gray-100 rounded"></div>
<div className="h-2 w-2/3 bg-gray-100 rounded"></div>
<div className="mt-auto flex gap-2">
<div className="h-6 w-full bg-midnight rounded text-white text-[9px] flex items-center justify-center">Acheter</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(241,90,60,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(241,90,60,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12">
<p className="text-center text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest mb-10">Approuvé par les équipes marketing modernes</p>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-7 w-auto text-midnight" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H70 V25 H60 Z"></path></svg>
<svg className="h-7 w-auto text-midnight" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" width="20" x="35" y="5"></rect></svg>
<svg className="h-7 w-auto text-midnight" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M45,25 L45,5 M65,5 L80,5 M72.5,5 L72.5,25" stroke="currentColor" strokeWidth="3"></path></svg>
<svg className="h-7 w-auto text-midnight" fill="currentColor" viewbox="0 0 100 30"><rect height="20" rx="5" width="20" x="5" y="5"></rect> <circle cx="45" cy="15" r="10"></circle></svg>
<svg className="h-7 w-auto text-midnight" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 Q20,5 30,15 T50,15" fill="none" stroke="currentColor" strokeWidth="3"></path></svg>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="produit">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-3xl">
<h2 className="text-4xl font-bold text-midnight tracking-tight mb-6">Conçu pour la Performance. <br/>Taillé pour l'Échelle.</h2>
<p className="text-lg text-steel font-light leading-relaxed">La plupart des outils génèrent du bruit. Upgrads.ai est conçu spécifiquement pour le ROAS, entraîné sur des millions de points de données de créatifs performants.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-cloud p-8 rounded-2xl border border-cool hover-card group">
<div className="w-14 h-14 rounded-xl bg-white border border-cool shadow-sm flex items-center justify-center text-midnight mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wand-2" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64l-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72M14 7l3 3M5 6v4m14 4v4M10 2v2M7 8H3m18 8h-4M11 3H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold text-midnight mb-3">Itération Générative</h3>
<p className="text-steel text-sm leading-relaxed">Transformez un concept gagnant en 50 variations uniques instantanément. Testez les accroches, les styles visuels et les CTA sans passer par un designer.</p>
</div>

<div className="bg-cloud p-8 rounded-2xl border border-cool hover-card group">
<div className="w-14 h-14 rounded-xl bg-white border border-cool shadow-sm flex items-center justify-center text-midnight mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-xl font-bold text-midnight mb-3">Respect de la Marque</h3>
<p className="text-steel text-sm leading-relaxed">Importez votre charte graphique, polices et codes hex. Notre IA adhère strictement à vos directives pour des actifs 100% conformes.</p>
</div>

<div className="bg-cloud p-8 rounded-2xl border border-cool hover-card group">
<div className="w-14 h-14 rounded-xl bg-white border border-cool shadow-sm flex items-center justify-center text-midnight mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-3" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-bold text-midnight mb-3">Scoring Prédictif</h3>
<p className="text-steel text-sm leading-relaxed">Validez les créatifs avant de dépenser un euro. Notre modèle prédit le CTR et le taux de conversion en se basant sur les données historiques des plateformes.</p>
</div>
</div>

<div className="mt-40 space-y-40">

<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-white rounded-2xl border border-cool shadow-card p-3 aspect-[4/3] overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-orange/5 to-salmon/5"></div>
<div className="h-full w-full bg-white rounded-xl relative overflow-hidden border border-cool/50">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#E5E7EB 2px, transparent 2px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-auto bg-white shadow-xl rounded-xl border border-cool p-6 flex flex-col transform group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<div className="h-4 w-24 bg-gray-100 rounded"></div>
<div className="h-8 px-3 bg-green-50 text-green-600 border border-green-100 rounded-lg text-xs flex items-center justify-center font-bold gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Score: 94
                                            </div>
</div>
<div className="aspect-video bg-slate-50 rounded-lg mb-4 border border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-orange/10 to-salmon/10"></div>
</div>
<div className="h-12 bg-midnight text-white rounded-lg flex items-center justify-center text-sm font-medium hover:bg-primary transition-colors cursor-pointer shadow-lg shadow-midnight/10">Exporter vers Meta Ads</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-5 rounded-2xl shadow-card border border-cool flex items-center gap-4 animate-[fadeInUp_1s_ease-out_forwards]">
<div className="w-12 h-12 rounded-full bg-green-100/50 text-green-600 flex items-center justify-center border border-green-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div>
<div className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide">CTR Prédit</div>
<div className="font-bold text-2xl text-midnight">2.45%</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-midnight mb-6 tracking-tight">Décisions basées sur la data.<br/>Zéro approximation.</h3>
<p className="text-steel text-lg leading-relaxed mb-8">
                            Arrêtez de vous fier à l'intuition. Upgrads.ai analyse des millions d'attributs publicitaires pour construire des créatifs qui résonnent avec vos segments d'audience spécifiques.
                        </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-midnight font-medium">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check-circle-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Synchronisation des performances temps réel
                            </li>
<li className="flex items-center gap-3 text-midnight font-medium">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check-circle-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Analyse des créatifs concurrents
                            </li>
<li className="flex items-center gap-3 text-midnight font-medium">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check-circle-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Variations A/B testing automatisées
                            </li>
</ul>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-3xl md:text-4xl font-bold text-midnight mb-6 tracking-tight">Portée Mondiale,Pertinence Locale.</h3>
<p className="text-steel text-lg leading-relaxed mb-8">
                            Développez-vous sur de nouveaux marchés sans effort. Notre moteur traduit le texte et adapte culturellement les éléments visuels pour s'ajuster aux nuances locales dans plus de 30 langues.
                        </p>
<a className="text-primary hover:text-coral inline-flex items-center gap-2 group font-semibold" href="#" style={{}}>Explorer la Localisation<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
<div className="relative">

<div className="bg-gradient-to-br from-midnight to-[#2a2a2a] rounded-2xl border border-midnight shadow-2xl p-3 aspect-[4/3] overflow-hidden">
<div className="h-full w-full bg-midnight/50 rounded-xl relative flex items-center justify-center overflow-hidden">
<div className="absolute top-0 w-full h-full opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="grid grid-cols-2 gap-4 w-5/6 relative z-10">

<div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--flag" data-icon="flag:us-4x3" data-width="24" height="18" role="img" viewbox="0 0 640 480" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h640v480H0" fill="#bd3d44"></path><path d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640" stroke="#fff" strokeWidth="37"></path><path d="M0 0h364.8v258.5H0" fill="#192f5d"></path><marker id="IconifyId19b79253333e1f0bd0" markerheight="30" markerwidth="30"><path d="m14 0l9 27L0 10h28L5 27z" fill="#fff"></path></marker><path d="m0 0l16 11h61h61h61h61h60L47 37h61h61h60h61L16 63h61h61h61h61h60L47 89h61h61h60h61L16 115h61h61h61h61h60L47 141h61h61h60h61L16 166h61h61h61h61h60L47 192h61h61h60h61L16 218h61h61h61h61h60z" fill="none" marker-mid="url(#IconifyId19b79253333e1f0bd0)"></path></svg>
<span className="text-white font-medium text-sm">USA</span>
</div>
<div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
</div>

<div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--flag" data-icon="flag:jp-4x3" data-width="24" height="18" role="img" viewbox="0 0 640 480" width="24" xmlns="http://www.w3.org/2000/svg"><defs><clippath id="IconifyId19b79253333e1f0bd1"><path d="M-88 32h640v480H-88z" fillOpacity=".7"></path></clippath></defs><g clipPath="url(#IconifyId19b79253333e1f0bd1)" fill-rule="evenodd" strokeWidth="1pt" transform="translate(88 -32)"><path d="M-128 32h720v480h-720z" fill="#fff"></path><circle cx="523.1" cy="344.1" fill="#bc002d" r="194.9" transform="translate(-168.4 8.6)scale(.76554)"></circle></g></svg>
<span className="text-white font-medium text-sm">Japon</span>
</div>
<div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
</div>

<div className="bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--flag" data-icon="flag:fr-4x3" data-width="24" height="18" role="img" viewbox="0 0 640 480" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h640v480H0z" fill="#fff"></path><path d="M0 0h213.3v480H0z" fill="#000091"></path><path d="M426.7 0H640v480H426.7z" fill="#e1000f"></path></svg>
<span className="text-white font-medium text-sm">France</span>
</div>
<div className="h-2 w-full bg-white/20 rounded-full mb-2"></div>
<div className="h-2 w-2/3 bg-white/20 rounded-full"></div>
</div>

<div className="bg-primary/20 backdrop-blur-md p-5 rounded-xl border border-primary/30 flex items-center justify-center hover:bg-primary/30 transition-colors cursor-pointer group">
<div className="text-center">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mx-auto mb-2 group-hover:scale-110 transition-transform">+27</div>
<span className="text-xs text-white/70">Pays</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cloud border-t border-cool" id="tarifs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-midnight tracking-tight mb-4">Tarification Simple et Transparente</h2>
<p className="text-steel text-lg">Commencez à scaler votre production créative aujourd'hui.</p>

<div className="flex items-center justify-center gap-4 mt-10">
<span className="text-sm font-medium text-steel">Mensuel</span>
<button className="w-14 h-8 bg-midnight rounded-full relative transition-colors shadow-inner">
<span className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all"></span>
</button>
<span className="text-sm font-bold text-midnight">Annuel <span className="text-primary text-xs ml-1 bg-primary/10 px-2 py-0.5 rounded-full">-20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-white rounded-2xl p-8 border border-cool hover:border-primary/30 transition-all shadow-sm hover:shadow-lg">
<h3 className="text-lg font-bold text-midnight mb-2">Démarrage</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-midnight">49€</span>
<span className="text-steel text-sm">/mois</span>
</div>
<p className="text-sm text-steel mb-8 h-10">Idéal pour les fondateurs solo et petites équipes e-commerce.</p>
<button className="w-full py-3.5 rounded-xl border-2 border-cool bg-transparent text-midnight font-semibold hover:border-midnight transition-colors mb-8">Commencer</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            500 Crédits IA / mois
                        </li>
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Génération d'Images Statiques
                        </li>
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 Profil de Marque
                        </li>
</ul>
</div>

<div className="bg-midnight rounded-2xl p-8 border border-midnight relative shadow-2xl shadow-orange/20 transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">Le plus populaire</div>
<h3 className="text-lg font-bold text-white mb-2">Croissance</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-white">149€</span>
<span className="text-steel text-sm">/mois</span>
</div>
<p className="text-sm text-slate-300 mb-8 h-10">Pour les agences en croissance et marketeurs performance.</p>
<button className="w-full py-3.5 rounded-xl bg-gradient-brand hover:brightness-110 text-white font-bold transition-all mb-8 shadow-glow">Essai Gratuit</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-200">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Crédits IA Illimités
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Génération Vidéo &amp; Image
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            10 Profils de Marque
                        </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-cool hover:border-primary/30 transition-all shadow-sm hover:shadow-lg">
<h3 className="text-lg font-bold text-midnight mb-2">Entreprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold text-midnight">Sur mesure</span>
</div>
<p className="text-sm text-steel mb-8 h-10">Pour les grandes équipes nécessitant des intégrations custom.</p>
<button className="w-full py-3.5 rounded-xl border-2 border-cool bg-transparent text-midnight font-semibold hover:border-midnight transition-colors mb-8">Contacter les Ventes</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Accès API
                        </li>
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Modèles Personnalisés
                        </li>
<li className="flex items-center gap-3 text-sm text-charcoal">
<svg aria-hidden="true" className="iconify text-primary iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Account Manager Dédié
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white relative overflow-hidden" id="ressources">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange/5 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-midnight tracking-tight mb-6">Prêt à surpasser la concurrence ?</h2>
<p className="text-lg text-steel mb-10 max-w-2xl mx-auto leading-relaxed">Rejoignez plus de 10 000 marketeurs qui génèrent des créatifs publicitaires haute performance avec Upgrads.ai.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-gradient-brand hover:brightness-110 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-glow hover:-translate-y-1">
                    Commencer Gratuitement
                </button>
<button className="px-8 py-4 rounded-xl text-base font-semibold text-midnight bg-white border border-cool hover:bg-gray-50 transition-all">
                    Parler à un Expert
                </button>
</div>
<p className="mt-6 text-sm text-[#9CA3AF]">Aucune carte de crédit requise pour l'essai. Annulation à tout moment.</p>
</div>
</section>

<footer className="bg-midnight pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-gradient-brand flex items-center justify-center text-white shadow-[0_0_15px_rgba(228,61,48,0.5)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<span className="text-white font-display font-bold tracking-tight text-lg">Upgrads.ai</span>
</a>
<p className="text-steel text-sm leading-relaxed max-w-xs mb-8">
                        Le système d'exploitation pour les équipes de marketing à la performance modernes. Piloté par l'IA, soutenu par la data, et prêt pour l'entreprise.
                    </p>
<div className="flex gap-4">
<a className="text-steel hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-steel hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-steel hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Produit</h4>
<ul className="space-y-3">
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Fonctionnalités</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Intégrations</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Tarifs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Ressources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Communauté</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Entreprise</h4>
<ul className="space-y-3">
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Carrières</a></li>
<li><a className="text-sm text-steel hover:text-white transition-colors" href="#">Légal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-steel">© 2024 Upgrads AI Inc. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="text-xs text-steel hover:text-white transition-colors" href="#">Politique de Confidentialité</a>
<a className="text-xs text-steel hover:text-white transition-colors" href="#">Conditions d'Utilisation</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
