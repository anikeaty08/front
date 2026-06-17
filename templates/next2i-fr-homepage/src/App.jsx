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
      

<nav className="fixed w-full z-50 top-0 bg-slate-900/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="text-2xl font-semibold tracking-tighter text-white">
                    NEXT<span className="text-slate-400">2i</span>
</div>
<div className="h-1 w-1 bg-yellow-400 rounded-full"></div>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">Nos Expertises <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<a className="hover:text-white transition-colors" href="#">Entreprise</a>
<a className="hover:text-white transition-colors" href="#">Jobs</a>
<a className="hover:text-white transition-colors" href="#">Blogs</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]" href="#">
                Portail Support
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative bg-[#0B1120] pt-32 pb-48 overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none">
<svg className="absolute right-0 top-0 h-full w-2/3 text-indigo-500" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M50 0 L100 50 L50 100 M20 0 L70 50 L20 100" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</svg>
</div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Infrastructure &amp; Sécurité Managée
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-8">
                    Votre IT ne devrait <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">jamais être un frein.</span>
</h1>
<p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                    21 ans qu'on fait tourner l'IT de PME et ETI pendant qu'elles se concentrent sur leur croissance. Performance, sécurité et disponibilité sans compromis.
                </p>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-yellow-400" data-lucide="check"></i>
                        Infrastructure qui tient la charge
                    </li>
<li className="flex items-center gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-yellow-400" data-lucide="shield-check"></i>
                        Sécurité proactive qui protège
                    </li>
<li className="flex items-center gap-3 text-slate-300 text-lg">
<i className="w-5 h-5 text-yellow-400" data-lucide="headphones"></i>
                        Support qui répond en moins de 15min
                    </li>
</ul>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-2xl shadow-2xl border border-white/5 flex flex-col lg:flex-row overflow-hidden group">

<div className="bg-slate-800 p-8 lg:w-1/3 flex items-center justify-between relative overflow-hidden cursor-pointer hover:bg-slate-750 transition-colors">
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white tracking-tight">Audit gratuit <br/> de votre IT</h3>
</div>
<div className="flex space-x-[-10px] relative z-10">
<div className="w-8 h-12 bg-yellow-400 skew-x-12"></div>
<div className="w-8 h-12 bg-white skew-x-12"></div>
<div className="w-8 h-12 bg-indigo-600 skew-x-12 flex items-center justify-center">
<i className="w-6 h-6 text-white -skew-x-12" data-lucide="chevron-right"></i>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="flex-1 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 bg-[#0f1526]">
<div className="p-6 text-center hover:bg-white/5 transition-colors">
<div className="text-3xl font-semibold text-indigo-400 mb-1">+21</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Ans d'expérience</div>
</div>
<div className="p-6 text-center hover:bg-white/5 transition-colors">
<div className="text-3xl font-semibold text-indigo-400 mb-1">+50</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Collaborateurs</div>
</div>
<div className="p-6 text-center hover:bg-white/5 transition-colors">
<div className="text-3xl font-semibold text-indigo-400 mb-1">+60</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Clients Actifs</div>
</div>
<div className="p-6 text-center hover:bg-white/5 transition-colors">
<div className="text-3xl font-semibold text-yellow-400 mb-1">24/7</div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Support</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Pain Points</span>
<h2 className="text-4xl font-semibold text-slate-900 mt-3 mb-6 tracking-tight leading-tight">Si votre IT vous empêche de dormir, <span className="text-slate-500">vous n'êtes pas seul.</span></h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Chaque heure d'interruption = chiffre d'affaires perdu, clients mécontents, équipes bloquées. Pourtant votre infra actuelle n'est pas redondante, pas surveillée, et personne ne sait vraiment qui appeler quand ça plante.
                    </p>
<a className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center gap-2 border-b border-indigo-200 pb-1 hover:border-indigo-600 transition-all" href="#">
                        Découvrir notre approche <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-white rounded-3xl -skew-y-3 transform scale-105"></div>
<div className="relative space-y-4">

<div className="bg-indigo-600 p-6 rounded-r-2xl rounded-bl-2xl shadow-lg transform -translate-x-4 border-l-4 border-yellow-400 relative">
<div className="absolute -top-3 -right-3 bg-white text-indigo-600 p-2 rounded-full shadow-md">
<i className="w-5 h-5" data-lucide="trending-down"></i>
</div>
<p className="text-white font-medium text-lg">"Notre DSI est débordé et on embauche pas"</p>
</div>

<div className="bg-yellow-400 p-6 rounded-r-2xl rounded-bl-2xl shadow-lg transform translate-x-4 relative">
<p className="text-slate-900 font-semibold text-lg">"La cybersécurité, on ne sait pas par où commencer"</p>
</div>

<div className="bg-slate-800 p-6 rounded-r-2xl rounded-bl-2xl shadow-lg transform -translate-x-2 border-l-4 border-indigo-500">
<p className="text-white font-medium text-lg">"On ne peut pas se permettre une panne"</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-xl">
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm">Solutions</span>
<h2 className="text-4xl font-semibold text-slate-900 mt-2 tracking-tight">On reprend votre IT en main. Complètement.</h2>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><i className="w-5 h-5 text-slate-600" data-lucide="chevron-left"></i></button>
<button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors"><i className="w-5 h-5 text-slate-600" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

<div className="group relative bg-[#0f172a] rounded-2xl p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-400" data-lucide="server"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Infogérance</h3>
<p className="text-indigo-200 mb-8 text-lg">Votre IT, notre responsabilité. On gère 24/7, maintenance proactive.</p>
<div className="absolute bottom-6 right-6 p-2 bg-indigo-600 rounded-full group-hover:bg-yellow-400 transition-colors">
<i className="w-5 h-5 text-white group-hover:text-slate-900" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative bg-[#0f172a] rounded-2xl p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-400" data-lucide="shield"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Cybersécurité</h3>
<p className="text-indigo-200 mb-8 text-lg">Dormez tranquille. SOC, détection d'intrusion, audits de vulnérabilité, NIS2.</p>
<div className="absolute bottom-6 right-6 p-2 bg-indigo-600 rounded-full group-hover:bg-yellow-400 transition-colors">
<i className="w-5 h-5 text-white group-hover:text-slate-900" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group relative bg-[#0f172a] rounded-2xl p-8 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-indigo-400" data-lucide="cloud"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Cloud &amp; Infra</h3>
<p className="text-indigo-200 mb-8 text-lg">Une infra qui scale. Infrastructure Cloud évolutive, 30% moins chère.</p>
<div className="absolute bottom-6 right-6 p-2 bg-indigo-600 rounded-full group-hover:bg-yellow-400 transition-colors">
<i className="w-5 h-5 text-white group-hover:text-slate-900" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-100 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Des chiffres qui parlent mieux que des promesses.</h2>
<a className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all font-medium text-sm" href="#">
                    Savoir plus <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="group cursor-default">
<div className="text-6xl font-semibold text-indigo-600 mb-4 tracking-tighter">70%</div>
<div className="h-1 w-full bg-slate-200 relative overflow-hidden mb-4">
<div className="absolute inset-y-0 left-0 bg-indigo-600 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
<p className="text-slate-600 text-sm">Des grandes entreprises ont engagé une transformation numérique.</p>
</div>
<div className="group cursor-default">
<div className="text-6xl font-semibold text-indigo-600 mb-4 tracking-tighter">85%</div>
<div className="h-1 w-full bg-slate-200 relative overflow-hidden mb-4">
<div className="absolute inset-y-0 left-0 bg-indigo-600 w-0 group-hover:w-full transition-all duration-700 ease-out delay-100"></div>
</div>
<p className="text-slate-600 text-sm">Des collaborateurs ont besoin d'une meilleure appropriation des outils.</p>
</div>
<div className="group cursor-default">
<div className="text-6xl font-semibold text-indigo-600 mb-4 tracking-tighter">+650</div>
<div className="h-1 w-full bg-slate-200 relative overflow-hidden mb-4">
<div className="absolute inset-y-0 left-0 bg-indigo-600 w-0 group-hover:w-full transition-all duration-700 ease-out delay-200"></div>
</div>
<p className="text-slate-600 text-sm">Risques de cyberattaques liées au travail hybride.</p>
</div>
<div className="group cursor-default">
<div className="text-6xl font-semibold text-indigo-600 mb-4 tracking-tighter">24/7</div>
<div className="h-1 w-full bg-slate-200 relative overflow-hidden mb-4">
<div className="absolute inset-y-0 left-0 bg-indigo-600 w-0 group-hover:w-full transition-all duration-700 ease-out delay-300"></div>
</div>
<p className="text-slate-600 text-sm">Disponibilité de nos techniciens experts en France.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-5 gap-16">

<div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
                        NEXT2i en 3 mots : <br/>
<span className="text-indigo-600">Expertise. Réactivité. Responsabilité.</span>
</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Avec 20 ans d'expérience, on a vu à peu près tous les scénarios catastrophes qu'une PME peut rencontrer. Serveur qui meurt la veille d'une présentation client. Ransomware à J-2 de la clôture.
                    </p>
<button className="bg-black text-white px-6 py-3 rounded-full hover:bg-slate-800 transition-all font-medium text-sm inline-flex items-center gap-2 group">
                        Demander un audit gratuit
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#1a237e] text-white p-8 rounded-2xl md:col-span-2">
<h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
<i className="w-5 h-5 text-yellow-400" data-lucide="zap"></i> On réduit votre risque opérationnel
                        </h3>
<p className="text-indigo-200 text-sm mt-4">Redondance, sauvegardes, plan de reprise. Le truc ennuyeux mais vital que personne ne fait bien.</p>
</div>

<div className="bg-yellow-400 text-slate-900 p-8 rounded-2xl flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
<h3 className="text-xl font-semibold">On parle budget, pas features</h3>
<p className="text-slate-800 text-sm mt-4">Bureau 24h/7, intervention en 2h/4h selon la criticité.</p>
</div>

<div className="bg-[#0f172a] text-white p-8 rounded-2xl flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
<h3 className="text-xl font-semibold">Votre domaine d'activité, on le comprend</h3>
<p className="text-slate-400 text-sm mt-4">Manufacturing, services, retail... on adapte l'IT à votre métier.</p>
</div>

<div className="bg-[#1a237e] text-white p-8 rounded-2xl md:col-span-2">
<h3 className="text-xl font-semibold mb-2">On parle budget, pas features</h3>
<p className="text-indigo-200 text-sm mt-4">Coûts prévisibles, ROI mesurable, pas de surprise en fin de mois.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h3 className="text-slate-500 font-medium mb-10">Nos Editeurs &amp; Partenaires</h3>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold flex items-center gap-2"><i className="w-6 h-6" data-lucide="server"></i> Linux</span>
<span className="text-xl font-bold font-serif italic">DELL</span>
<span className="text-xl font-semibold flex items-center gap-1"><div className="grid grid-cols-2 gap-0.5 w-4 h-4"><div className="bg-slate-800 w-full h-full"></div><div className="bg-slate-800 w-full h-full"></div><div className="bg-slate-800 w-full h-full"></div><div className="bg-slate-800 w-full h-full"></div></div> Microsoft</span>
<span className="text-xl font-bold tracking-wider">VEEAM</span>
<span className="text-xl font-bold rounded-full border-2 border-slate-800 w-10 h-10 flex items-center justify-center">hp</span>
<span className="text-xl font-bold italic">MikroTik</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="p-8 flex flex-col justify-between">
<div>
<i className="w-10 h-10 text-slate-900 mb-4" data-lucide="arrow-down-right"></i>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight leading-tight">Nos domaines <br/> d'intervention</h2>
</div>
</div>

<div className="bg-black text-white p-8 rounded-xl flex flex-col justify-between group hover:shadow-2xl transition-all">
<div>
<span className="text-slate-500 text-sm font-mono mb-2 block">02.</span>
<h3 className="text-2xl font-medium">Hébergement</h3>
<p className="text-slate-400 mt-4 text-sm leading-relaxed">IaaS, BaaS, DaaS, SaaS : Hébergement hautement sécurisé, bureaux virtuels, récupération de données.</p>
</div>
<div className="flex justify-end">
<i className="w-8 h-8 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="cloud"></i>
</div>
</div>

<div className="bg-white text-slate-900 p-8 rounded-xl flex flex-col justify-between border border-slate-200 group hover:border-indigo-500 transition-all">
<div>
<span className="text-slate-400 text-sm font-mono mb-2 block">04.</span>
<h3 className="text-2xl font-medium">Déploiement</h3>
<p className="text-slate-600 mt-4 text-sm leading-relaxed">Déploiement de réseau, installation de matériel informatique et logiciels, migrations VMWare.</p>
</div>
<div className="flex justify-end">
<i className="w-8 h-8 text-yellow-500" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-xl flex flex-col justify-end relative overflow-hidden group">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-30 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10">
<span className="text-indigo-300 text-sm font-mono mb-2 block">01.</span>
<h3 className="text-2xl font-medium mb-2">Optimisation</h3>
<p className="text-indigo-100 text-sm opacity-80">Optimisation de votre système informatique, virtualisation, helpdesk.</p>
</div>
</div>

<div className="lg:col-span-2 bg-[#1a237e] text-white p-8 rounded-xl relative overflow-hidden flex items-end">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-transparent z-10"></div>

<div className="absolute right-0 top-0 h-full w-2/3 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center mix-blend-luminosity opacity-50"></div>
<div className="relative z-20 max-w-md">
<span className="text-yellow-400 text-sm font-mono mb-2 block">03.</span>
<h3 className="text-3xl font-medium mb-3">Sécurité</h3>
<p className="text-indigo-100 text-sm leading-relaxed">SOC, VOC, MDR : Protection de données et de l'infrastructure informatique, tests d'intrusion et de vulnérabilité, mise en conformité NIS2, ISO 27001.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Prêt à reprendre le contrôle de votre IT ?</h2>
<p className="text-lg text-slate-600 mb-8 max-w-md">On commence par un audit gratuit de votre infrastructure. Zéro bullshit, zéro engagement. Juste un état des lieux honnête et des recommandations actionnables.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-200 bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]" href="#">
                    Parler à un expert
                </a>
</div>

<div className="relative flex justify-center items-center">
<div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-slate-100 to-white border border-slate-100 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-slate-200 opacity-50"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border border-slate-200 opacity-50"></div>

<div className="absolute top-1/3 left-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-indigo-600 rounded-full"></div>
<div className="absolute top-1/4 right-1/3 w-2 h-2 bg-slate-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">Lisez nos derniers articles de blog</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<img alt="AWS" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">AWS faces backlash due to a new feature</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">Les scénarios catastrophes qu'une PME peut rencontrer. Serveur qui meurt la veille d'une présentation client.</p>
<span className="text-yellow-600 font-medium text-sm flex items-center gap-1"><i className="w-4 h-4" data-lucide="arrow-right"></i> Voir Plus</span>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<img alt="Cybersecurity" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Crowdstrike services has been compromised</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">Ransomware à J-2 de la clôture annuelle. Migration cloud qui tourne au cauchemar.</p>
<span className="text-yellow-600 font-medium text-sm flex items-center gap-1"><i className="w-4 h-4" data-lucide="arrow-right"></i> Voir Plus</span>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<img alt="Email Security" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">Gmail Hack targets multiple businesses</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-3">Les scénarios catastrophes qu'une PME peut rencontrer. Serveur qui meurt la veille d'une présentation client.</p>
<span className="text-yellow-600 font-medium text-sm flex items-center gap-1"><i className="w-4 h-4" data-lucide="arrow-right"></i> Voir Plus</span>
</article>
</div>
</div>
</section>

<footer className="bg-[#0B1120] text-slate-400 pt-24 pb-12 border-t border-indigo-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="text-3xl font-semibold tracking-tighter text-white">
                            NEXT<span className="text-slate-500">2i</span>
</div>
</div>
<div className="relative max-w-xs mb-4">
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-3 px-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-600" placeholder="Subscribe to our newsletter" type="email"/>
<button className="absolute right-1 top-1 bottom-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-3 rounded-md transition-colors">
<i className="w-4 h-4" data-lucide="chevrons-right"></i>
</button>
</div>
<p className="text-xs text-slate-600">By entering your email you have agreed to our terms of service</p>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-6">Menu</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services +</a></li>
<li><a className="hover:text-white transition-colors" href="#">A propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Jobs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-6">Adress</h4>
<address className="text-sm not-italic leading-relaxed">
                        68 Boulevard <br/> de Port-Royal, <br/> 75005 Paris, France
                    </address>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-6">Contact</h4>
<p className="text-sm mb-1">+33 1 48 49 98 00</p>
<p className="text-sm">+33 1 48 49 70 71</p>
<div className="mt-8 flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>

<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs">
<div className="mb-4 md:mb-0">
                    © 2026 All Rights Reserved . NEXT2i
                </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Mentions Legales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
<p className="mt-8 text-xs text-slate-700 leading-relaxed max-w-3xl">
                NEXT2i est une entreprise de services en ingénierie informatique basée à Paris qui vous accompagne dans vos projets. Depuis 2004, NEXT2i s'est spécialisé dans les domaines du conseil en système d'information, de l'infogérance et du Cloud Computing.
            </p>
</div>
</footer>


    </>
  );
}
