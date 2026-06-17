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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      

<header className="relative w-full min-h-screen flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Meeting" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
</div>

<nav className="relative z-10 container mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#caff00] rounded flex items-center justify-center text-black">
<i data-lucide="layers"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">Lexfor</span>
</div>
<div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
<a className="text-base font-medium text-white hover:text-[#caff00] transition-colors" href="#">Accueil</a>
<a className="text-base font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1" href="#">Pages <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-gray-300 hover:text-white transition-colors" href="#">Formations</a>
<a className="text-base font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1" href="#">Blog <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-gray-300 hover:text-white transition-colors" href="#">Cas pratiques</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-base font-medium hover:text-[#caff00] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="phone"></i>
                    (208) 555-0112
                </a>
<button className="bg-[#caff00] text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-[#b0df00] transition-colors">
                    Découvrir nos formations
                </button>
</div>
</nav>

<div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center max-w-4xl pb-32">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-8">
                L’Excellence par<br/>la Formation.
            </h1>
<p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Formations spécialisées pour dirigeants, entrepreneurs et pôles administratifs. Pilotez votre activité avec expertise.
            </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-[#caff00] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b0df00] transition-colors">
                    Découvrir nos formations
                </button>
<button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                    Voir la vidéo
                </button>
</div>
</div>
</header>

<div className="bg-[#caff00] text-black w-full relative z-20 -mt-16 rounded-t-[3rem]">
<div className="container mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-black/10">
<div className="text-center">
<h3 className="text-5xl font-semibold tracking-tight mb-2">100%</h3>
<p className="text-base font-medium opacity-80 uppercase tracking-widest">Satisfaction Client</p>
</div>
<div className="text-center">
<h3 className="text-5xl font-semibold tracking-tight mb-2">100%</h3>
<p className="text-base font-medium opacity-80 uppercase tracking-widest">Satisfaction Formateurs</p>
</div>
<div className="text-center">
<h3 className="text-5xl font-semibold tracking-tight mb-2">100%</h3>
<p className="text-base font-medium opacity-80 uppercase tracking-widest">Taux de Recommandation</p>
</div>
<div className="text-center">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">QUALIOPI</h3>
<p className="text-base font-medium opacity-80 uppercase tracking-widest">Certifié Actions de Formation</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-black">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3">
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">Nos Domaines d'Expertise</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                        Proposer des <span className="text-[#caff00]">Formations</span><br/>Pour Soutenir<br/>Votre Croissance
                    </h2>
<p className="text-lg text-gray-400 mb-10">
                        Des parcours pédagogiques adaptés aux professionnels, garantissant des bases solides et une croissance pérenne.
                    </p>
<button className="bg-zinc-900 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors">
                        Toutes nos formations
                    </button>
</div>

<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 hover:border-[#caff00]/50 transition-colors group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-semibold tracking-tight">Gestion Administrative</h3>
<i className="w-8 h-8 text-[#caff00] opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="calculator"></i>
</div>
<p className="text-lg text-gray-400 mb-8">Optimisation des enjeux et processus internes.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">
                            En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 hover:border-[#caff00]/50 transition-colors group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-semibold tracking-tight">Cession d’Entreprise</h3>
<i className="w-8 h-8 text-[#caff00] opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="trending-up"></i>
</div>
<p className="text-lg text-gray-400 mb-8">Stratégies d'optimisation fiscale et alternatives à l’IS.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">
                            En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 hover:border-[#caff00]/50 transition-colors group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-semibold tracking-tight">Transmission du Patrimoine</h3>
<i className="w-8 h-8 text-[#caff00] opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="pie-chart"></i>
</div>
<p className="text-lg text-gray-400 mb-8">Sécuriser l'avenir des familles recomposées.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">
                            En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-zinc-950 border border-white/5 rounded-2xl p-8 hover:border-[#caff00]/50 transition-colors group">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-semibold tracking-tight">Réforme Facture Électronique</h3>
<i className="w-8 h-8 text-[#caff00] opacity-80 group-hover:opacity-100 transition-opacity" data-lucide="users"></i>
</div>
<p className="text-lg text-gray-400 mb-8">Accompagnement sur les nouvelles modalités obligatoires.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">
                            En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">À Propos</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">
                        Nous Formons Pour<br/>Développer Une Culture<br/>D'Excellence
                    </h2>
<p className="text-lg text-gray-400 mb-10">
                        Notre approche se concentre sur la transformation de vos compétences, instillant rigueur et innovation à chaque niveau pour naviguer efficacement dans un marché complexe.
                    </p>
<div className="bg-zinc-900 border border-white/5 rounded-2xl p-6 flex items-center gap-6 mb-10">
<div className="w-16 h-16 bg-[#caff00]/10 rounded-full flex items-center justify-center shrink-0 text-[#caff00]">
<i className="w-8 h-8" data-lucide="award"></i>
</div>
<div>
<h4 className="text-3xl font-semibold tracking-tight mb-1">1M+</h4>
<p className="text-base text-gray-400">Heures de formation<br/>dispensées avec succès</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-6">
<button className="bg-[#caff00] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b0df00] transition-colors">
                            Découvrir nos formations
                        </button>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
<i className="w-5 h-5 text-[#caff00]" data-lucide="phone-call"></i>
</div>
<div>
<p className="text-sm text-gray-400">Contactez-nous</p>
<p className="text-lg font-medium">+1 (800) 123 4567</p>
</div>
</div>
</div>
</div>

<div className="relative">
<img alt="Consulting Team" className="rounded-3xl w-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#caff00] rounded-full blur-[100px] opacity-20"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<img alt="Meeting" className="rounded-3xl w-full" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -top-12 -left-12 w-32 h-32 rounded-full border-[20px] border-zinc-800 hidden md:block"></div>
</div>

<div className="order-1 lg:order-2">
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">Nos Atouts</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12 leading-tight">
                        Forger de <span className="text-[#caff00]">nouvelles compétences</span><br/>sur le marché
                    </h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-14 h-14 bg-[#caff00]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
<i className="w-6 h-6 text-[#caff00]" data-lucide="target"></i>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Pédagogie et Intégration Stratégique</h3>
<p className="text-lg text-gray-400">Nous allions l'expertise académique à vos opérations centrales pour débloquer de nouvelles efficiences.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-14 h-14 bg-[#caff00]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
<i className="w-6 h-6 text-[#caff00]" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Garantir la fiabilité des processus</h3>
<p className="text-lg text-gray-400">Mise en œuvre de méthodologies robustes pour garantir la cohérence et la qualité de chaque intervention.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-14 h-14 bg-[#caff00]/10 rounded-full flex items-center justify-center shrink-0 mt-1">
<i className="w-6 h-6 text-[#caff00]" data-lucide="bar-chart"></i>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Analyse de données experte</h3>
<p className="text-lg text-gray-400">Transformer l'information brute en connaissances actionnables qui orientent les décisions stratégiques.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">Cas Pratiques</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Explorez Nos Cas Pratiques<br/>Détaillés</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x scrollbar-hide">
<div className="min-w-[80vw] md:min-w-[400px] snap-center relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Case Study 1" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-[#caff00] text-sm font-medium mb-2 block">Finance</span>
<h3 className="text-2xl font-semibold tracking-tight">Analyse du Marché Global</h3>
</div>
</div>
<div className="min-w-[80vw] md:min-w-[400px] snap-center relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Case Study 2" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-[#caff00] text-sm font-medium mb-2 block">Stratégie</span>
<h3 className="text-2xl font-semibold tracking-tight">Restructuration d'Entreprise</h3>
</div>
</div>
<div className="min-w-[80vw] md:min-w-[400px] snap-center relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Case Study 3" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-[#caff00] text-sm font-medium mb-2 block">Technologie</span>
<h3 className="text-2xl font-semibold tracking-tight">Transformation Numérique</h3>
</div>
</div>
<div className="min-w-[80vw] md:min-w-[400px] snap-center relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Case Study 4" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
<span className="text-[#caff00] text-sm font-medium mb-2 block">Ressources Humaines</span>
<h3 className="text-2xl font-semibold tracking-tight">Acquisition de Talents</h3>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-zinc-900">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
<div className="container mx-auto px-6 relative z-10 flex justify-end">
<div className="bg-[#caff00] text-black p-12 rounded-3xl max-w-lg mt-12 md:mt-24 shadow-2xl">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Piloter des Décisions Stratégiques Plus Intelligentes</h2>
<p className="text-lg font-medium opacity-80 mb-8">Nous fournissons des outils intuitifs et des conseils d'experts pour vous aider à naviguer dans des environnements complexes avec certitude et clarté.</p>
<button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors">
                    Découvrir nos formations
                </button>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">Méthodologie</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                    Comment Lexfor <span className="text-[#caff00]">Opère</span><br/>Sur Le Marché
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

<div className="bg-zinc-950 border border-white/5 rounded-3xl p-10 text-center relative pt-16 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-[#caff00] rounded-2xl flex items-center justify-center text-black absolute -top-8 left-1/2 -translate-x-1/2 rotate-3 hover:rotate-0 transition-transform">
<i className="w-8 h-8" data-lucide="message-square"></i>
</div>
<div className="w-8 h-8 bg-zinc-800 rounded-full text-xs flex items-center justify-center absolute top-4 right-4 text-gray-400">01</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Évaluation Initiale</h3>
<p className="text-lg text-gray-400">Rencontre préliminaire pour comprendre vos défis uniques et définir des objectifs pédagogiques précis.</p>
</div>

<div className="bg-zinc-950 border border-white/5 rounded-3xl p-10 text-center relative pt-16 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-[#caff00] rounded-2xl flex items-center justify-center text-black absolute -top-8 left-1/2 -translate-x-1/2 -rotate-3 hover:rotate-0 transition-transform">
<i className="w-8 h-8" data-lucide="settings"></i>
</div>
<div className="w-8 h-8 bg-zinc-800 rounded-full text-xs flex items-center justify-center absolute top-4 right-4 text-gray-400">02</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Analyse des Besoins</h3>
<p className="text-lg text-gray-400">Analyse approfondie pour cibler les axes d'amélioration et les domaines prêts pour l'optimisation.</p>
</div>

<div className="bg-zinc-950 border border-white/5 rounded-3xl p-10 text-center relative pt-16 hover:border-white/10 transition-colors">
<div className="w-16 h-16 bg-[#caff00] rounded-2xl flex items-center justify-center text-black absolute -top-8 left-1/2 -translate-x-1/2 rotate-3 hover:rotate-0 transition-transform">
<i className="w-8 h-8" data-lucide="rocket"></i>
</div>
<div className="w-8 h-8 bg-zinc-800 rounded-full text-xs flex items-center justify-center absolute top-4 right-4 text-gray-400">03</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Déploiement</h3>
<p className="text-lg text-gray-400">Déploiement de solutions de formation concrètes pour générer un impact immédiat et un succès à long terme.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<img alt="Happy Client" className="rounded-3xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="relative">
<i className="w-32 h-32 text-[#caff00] opacity-10 absolute -top-10 right-0" data-lucide="quote"></i>
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block relative z-10">Témoignage</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10 relative z-10">
                        Ce Que Disent Nos Participants
                    </h2>
<div className="bg-black border border-white/5 p-10 rounded-3xl relative z-10">
<p className="text-xl leading-relaxed text-gray-300 mb-8 italic font-light">
                            "Lexfor a entièrement transformé notre approche. Leurs enseignements n'étaient pas seulement théoriques, mais hautement pratiques et immédiatement applicables. De véritables partenaires."
                        </p>
<div className="flex items-center gap-4">
<img alt="Client Avatar" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="text-lg font-semibold tracking-tight">Eric Heydon</h4>
<p className="text-sm text-gray-500">Directeur Général, TechFlow</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
<div>
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-4 block">Notre Blog</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Actualités &amp; Articles<br/>Par Lexfor</h2>
</div>
<button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/5 transition-colors">
                    Voir tous les articles
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors">
<div className="overflow-hidden">
<img alt="Blog Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
<span className="flex items-center gap-1 text-[#caff00]"><i className="w-4 h-4" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar"></i> Oct 12, 2025</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 hover:text-[#caff00] transition-colors cursor-pointer">PLF 2026 : Analyse des nouvelles mesures fiscales.</h3>
<p className="text-base text-gray-400 mb-6 line-clamp-2">Décryptage des évolutions réglementaires et de leur impact direct sur la stratégie fiscale des entreprises.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors">
<div className="overflow-hidden">
<img alt="Blog Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
<span className="flex items-center gap-1 text-[#caff00]"><i className="w-4 h-4" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar"></i> Oct 15, 2025</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 hover:text-[#caff00] transition-colors cursor-pointer">RSE et formation : Quel lien pour votre entreprise ?</h3>
<p className="text-base text-gray-400 mb-6 line-clamp-2">L'importance de la responsabilité sociétale dans le développement des compétences et la valorisation de la marque employeur.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden group hover:border-white/10 transition-colors">
<div className="overflow-hidden">
<img alt="Blog Image" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
<span className="flex items-center gap-1 text-[#caff00]"><i className="w-4 h-4" data-lucide="user"></i> Admin</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar"></i> Oct 18, 2025</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 hover:text-[#caff00] transition-colors cursor-pointer">Règlement ANC n°2022-06 : Changements comptables 2025.</h3>
<p className="text-base text-gray-400 mb-6 line-clamp-2">Analyse détaillée des nouvelles normes comptables et préparation aux transitions requises d'ici 2025.</p>
<a className="text-base font-medium flex items-center gap-2 group-hover:text-[#caff00] transition-colors" href="#">En savoir plus <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="container mx-auto px-6">
<div className="bg-zinc-950 border border-[#caff00]/30 rounded-[3rem] p-10 md:p-16 shadow-[0_0_50px_rgba(202,255,0,0.05)]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-[#caff00] text-base font-medium tracking-wider uppercase mb-2 block">Contact</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Planifier un échange</h2>
<p className="text-lg text-gray-400 mb-10">Prenez contact pour découvrir comment nous pouvons accompagner votre structure avec efficacité.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#caff00] shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm text-gray-400 mb-1">Numéro de Téléphone</p>
<p className="text-lg font-medium">+1 800 123 4567</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#caff00] shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-sm text-gray-400 mb-1">Siège Social</p>
<p className="text-lg font-medium">63 Avenue des Vosges,<br/>67000 Strasbourg</p>
</div>
</div>
</div>
</div>

<div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Prénom</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#caff00] transition-colors placeholder:text-gray-700" placeholder="Jean" type="text"/>
</div>
<div>
<label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Nom</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#caff00] transition-colors placeholder:text-gray-700" placeholder="Dupont" type="text"/>
</div>
</div>
<div>
<label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Email Professionnel</label>
<input className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#caff00] transition-colors placeholder:text-gray-700" placeholder="jean@entreprise.com" type="email"/>
</div>
<div>
<label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Votre Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white focus:outline-none focus:border-[#caff00] transition-colors placeholder:text-gray-700 resize-none" placeholder="Parlez-nous de votre projet..." rows="3"></textarea>
</div>
<button className="bg-[#caff00] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#b0df00] transition-colors mt-4 inline-block" type="button">
                                Envoyer le message
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-8 border-t border-white/10">
<div className="container mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-[#caff00] rounded flex items-center justify-center text-black">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">Lexfor</span>
</div>
<p className="text-base text-gray-400 mb-8 max-w-sm">
                        Institut de formation d'excellence proposant des cursus spécialisés pour dirigeants et entrepreneurs.
                        <br/><br/>
                        NDA 446 708 695 67 | SIREN 990 575 938.
                    </p>
<div className="flex gap-2">
<input className="bg-zinc-900 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-[#caff00] flex-grow max-w-[250px]" placeholder="Adresse Email" type="email"/>
<button className="bg-[#caff00] text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#b0df00] transition-colors">
                            S'inscrire
                        </button>
</div>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Liens Utiles</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-[#caff00] transition-colors" href="#">À Propos</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Nos Formations</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Cas Pratiques</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Tarification</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Notre Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Nos Domaines</h4>
<ul className="space-y-4 text-base text-gray-400">
<li><a className="hover:text-[#caff00] transition-colors" href="#">Gestion Administrative</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Cession d'Entreprise</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Transmission du Patrimoine</a></li>
<li><a className="hover:text-[#caff00] transition-colors" href="#">Réforme Facture Électronique</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight mb-6">Coordonnées</h4>
<ul className="space-y-6 text-base text-gray-400">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#caff00] shrink-0 mt-1" data-lucide="map-pin"></i>
<span>63 Avenue des Vosges<br/>67000 Strasbourg</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#caff00] shrink-0" data-lucide="phone"></i>
<span>+1 800 123 4567</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#caff00] shrink-0" data-lucide="mail"></i>
<span>contact@lexfor.fr</span>
</li>
</ul>
</div>
</div>

<div className="text-center mb-16 px-4">
<h2 className="text-5xl md:text-7xl lg:text-9xl font-semibold tracking-tight leading-none">
                    Discutons De Votre <span className="bg-[#caff00] text-black px-6 md:px-10 py-2 md:py-4 rounded-full inline-block transform -rotate-2">Projet</span> Ensemble
                </h2>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
<p>Lexfor © 2026. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
