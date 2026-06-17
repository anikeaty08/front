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
      

<div className="fixed inset-0 z-[-1] grid-bg opacity-20 pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 glass">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-white z-50" href="#">
                AUTOMATIA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-normal">
<a className="hover:text-white transition-colors duration-300" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Méthode</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Tarifs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-gray-200 transition-all duration-300" href="#contact">
                    Audit Gratuit
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white pt-1">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-gray-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Nouvelle ère de productivité
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Automatisez l'ordinaire,<br/>
<span className="text-gradient-primary">libérez l'extraordinaire.</span>
</h1>
<p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Nous concevons des écosystèmes IA sur mesure qui éliminent les tâches répétitives et propulsent votre croissance.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group">
                Réserver un appel
                <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                Voir les cas clients
            </button>
</div>

<div className="mt-20 relative rounded-xl border border-white/10 bg-[#0A0A0A] p-2 max-w-4xl mx-auto shadow-2xl shadow-indigo-500/10 overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative rounded-lg bg-[#050505] overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col">

<div className="h-8 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-48 hidden md:flex flex-col gap-3 border-r border-white/5 pr-6">
<div className="h-2 w-20 bg-white/10 rounded mb-4"></div>
<div className="h-8 w-full bg-indigo-500/10 border border-indigo-500/20 rounded-md flex items-center px-3 gap-2">
<div className="w-3 h-3 rounded-full bg-indigo-400"></div>
<div className="h-1.5 w-12 bg-indigo-200/20 rounded"></div>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-2 transition-colors">
<div className="w-3 h-3 rounded-full border border-white/20"></div>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
<div className="h-8 w-full hover:bg-white/5 rounded-md flex items-center px-3 gap-2 transition-colors">
<div className="w-3 h-3 rounded-full border border-white/20"></div>
<div className="h-1.5 w-14 bg-white/10 rounded"></div>
</div>
</div>

<div className="flex-1">
<div className="flex justify-between items-end mb-8">
<div className="space-y-2">
<div className="h-2 w-24 bg-white/10 rounded"></div>
<div className="h-6 w-48 bg-white/20 rounded"></div>
</div>
<div className="h-8 w-24 bg-white/5 rounded border border-white/10"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4 relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent"></div>
</div>
<div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4"></div>
<div className="h-24 rounded-lg bg-white/5 border border-white/5 p-4"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">Ils automatisent leur futur avec nous</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter text-white">STRIPE</span>
<span className="text-xl font-bold tracking-tight text-white italic">Acme Corp</span>
<span className="text-xl font-medium tracking-widest text-white">NEXUS</span>
<span className="text-xl font-semibold tracking-tight text-white">Vertex</span>
<span className="text-xl font-light tracking-widest text-white">QUANTA</span>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6" id="solutions">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Solutions Intelligentes</h2>
<p className="text-gray-400 font-light max-w-xl">Une suite complète d'outils pour transformer vos opérations manuelles en processus autonomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-2xl p-8 bg-neutral-900/50 border border-white/10 hover:border-indigo-500/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-4">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Agents Conversationnels IA</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed max-w-sm">
                            Support client 24/7. Nos chatbots comprennent le contexte, gèrent les objections et qualifient vos leads automatiquement.
                        </p>
</div>

<div className="w-full h-32 bg-[#050505] rounded-lg border border-white/5 p-4 flex flex-col gap-3">
<div className="self-start bg-white/10 rounded-lg rounded-tl-none px-3 py-2 text-xs text-gray-300 max-w-[80%]">Bonjour, comment puis-je vous aider aujourd'hui ?</div>
<div className="self-end bg-indigo-600/20 text-indigo-200 rounded-lg rounded-tr-none px-3 py-2 text-xs max-w-[80%] border border-indigo-500/20">Je voudrais planifier une démo.</div>
<div className="self-start bg-white/10 rounded-lg rounded-tl-none px-3 py-2 text-xs text-gray-300 max-w-[80%]">Bien sûr, voici les créneaux disponibles...</div>
</div>
</div>
</div>

<div className="md:row-span-2 rounded-2xl p-8 bg-neutral-900/50 border border-white/10 hover:border-pink-500/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-300 mb-4">
<iconify-icon icon="solar:diagram-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Workflows Automatisés</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                        Connectez vos applications (CRM, Email, Notion). Déclenchez des actions complexes sans lever le petit doigt.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#111] border border-white/10 flex items-center justify-center text-white text-[10px]">Stripe</div>
<div className="h-[1px] flex-1 bg-white/10"></div>
<div className="w-8 h-8 rounded bg-[#111] border border-white/10 flex items-center justify-center text-white text-[10px]">Slack</div>
</div>
<div className="flex items-center gap-3 pl-4">
<div className="w-px h-4 bg-white/10 ml-4"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#111] border border-white/10 flex items-center justify-center text-white text-[10px]">Airtable</div>
<div className="h-[1px] flex-1 bg-white/10"></div>
<div className="w-8 h-8 rounded bg-[#111] border border-white/10 flex items-center justify-center text-white text-[10px]">Gmail</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-8 bg-neutral-900/50 border border-white/10 hover:border-cyan-500/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 mb-4">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Traitement de Documents</h3>
<p className="text-gray-400 font-light text-sm">
                        Extraction de données depuis factures et contrats via OCR intelligent.
                    </p>
</div>
</div>

<div className="rounded-2xl p-8 bg-neutral-900/50 border border-white/10 hover:border-emerald-500/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Outreach &amp; Leads</h3>
<p className="text-gray-400 font-light text-sm">
                        Scraping, enrichissement et envoi d'emails personnalisés à grande échelle.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="process">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center">Notre Méthodologie</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative pt-8 group">
<div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white text-xs font-medium mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">1</div>
<h3 className="text-lg font-medium text-white mb-2">Audit</h3>
<p className="text-sm text-gray-400 font-light">Analyse de vos processus actuels pour identifier les goulots d'étranglement.</p>
</div>

<div className="relative pt-8 group">
<div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white text-xs font-medium mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">2</div>
<h3 className="text-lg font-medium text-white mb-2">Stratégie</h3>
<p className="text-sm text-gray-400 font-light">Conception de l'architecture d'automatisation et choix des outils IA.</p>
</div>

<div className="relative pt-8 group">
<div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white text-xs font-medium mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">3</div>
<h3 className="text-lg font-medium text-white mb-2">Déploiement</h3>
<p className="text-sm text-gray-400 font-light">Construction et intégration des solutions avec tests rigoureux.</p>
</div>

<div className="relative pt-8 group">
<div className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-white text-xs font-medium mb-6 relative z-10 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">4</div>
<h3 className="text-lg font-medium text-white mb-2">Optimisation</h3>
<p className="text-sm text-gray-400 font-light">Suivi des performances et ajustements pour une efficacité maximale.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="pricing">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Investissement</h2>
<p className="text-gray-400 font-light mb-12">Chaque entreprise est unique. Nous proposons des forfaits adaptés à vos besoins.</p>
<div className="grid md:grid-cols-2 gap-6 text-left">

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col">
<div className="mb-4">
<h3 className="text-white font-medium">Starter</h3>
<p className="text-sm text-gray-500 mt-1">Idéal pour les TPE/PME</p>
</div>
<div className="text-3xl font-medium text-white mb-6">2 500€ <span className="text-sm text-gray-500 font-normal">/ projet</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Audit Complet
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 2 Automatisations majeures
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Support 30 jours
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors">Choisir Starter</button>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-indigo-900/10 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAIRE</div>
<div className="mb-4">
<h3 className="text-white font-medium">Écosystème</h3>
<p className="text-sm text-gray-400 mt-1">Transformation complète</p>
</div>
<div className="text-3xl font-medium text-white mb-6">Sur Mesure</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Architecture IA complète
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Chatbots Custom (RAG)
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Formation équipe &amp; Maintenance
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">Nous contacter</button>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Prêt à scaler ?</h2>
<p className="text-gray-400 mb-10 font-light">Ne laissez pas la technologie avancer sans vous. Discutons de votre projet d'automatisation.</p>
<form className="text-left space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
<div>
<label className="block text-xs font-medium text-gray-400 mb-2">Email Professionnel</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="nom@entreprise.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-2">Votre Projet</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors h-24 resize-none" placeholder="Décrivez brièvement vos besoins..."></textarea>
</div>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors flex justify-center items-center gap-2" type="button">
                    Envoyer
                    <iconify-icon icon="solar:plain-3-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<a className="text-lg font-medium tracking-tighter text-white" href="#">AUTOMATIA</a>
<p className="text-xs text-gray-500 mt-2 max-w-xs">Agence d'optimisation par l'Intelligence Artificielle. Basée à Paris.</p>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Navigation</h4>
<ul className="space-y-2 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#solutions">Solutions</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Méthode</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Légal</h4>
<ul className="space-y-2 text-xs text-gray-400">
<li><a className="hover:text-white transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-600">
<p>© 2024 Automatia. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
