import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
},
extend: {
colors: {
emerald: {
400: '#34d399',
500: '#10b981',
600: '#059669',
},
blue: {
900: '#0f172a', // Deep blue base
950: '#020617', // Darker depth
},
gold: {
400: '#fbbf24',
500: '#f59e0b', // Gold accent
600: '#d97706',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'flow': 'flow 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
flow: {
'0%': { strokeDashoffset: '24' },
'100%': { strokeDashoffset: '0' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-blue-950 text-white text-xs md:text-sm py-2 px-4 border-b border-white/10 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
<div className="max-w-7xl mx-auto flex items-center justify-center gap-6 relative z-10 font-medium">
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:leaf-bold"></iconify-icon>
<span className="opacity-90">Impact Global Elinga :</span>
</span>
<span className="flex items-center gap-1">
<span className="font-bold text-emerald-400">14,250</span> tCO₂ évitées
            </span>
<span className="hidden md:inline w-1 h-1 bg-white/30 rounded-full"></span>
<span className="flex items-center gap-1">
<span className="font-bold text-gold-400">3,800</span> Hectares régénérés
            </span>
</div>
</div>

<nav className="sticky w-full z-50 top-0 left-0 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center text-white border border-blue-800 shadow-lg shadow-emerald-500/10">
<iconify-icon className="text-emerald-400" icon="solar:leaf-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="font-bold text-blue-950 text-xl tracking-tight">ELINGA<span className="text-gold-500">.</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-emerald-600 transition-colors" href="#dashboard">Technologie</a>
<a className="hover:text-emerald-600 transition-colors" href="#process">Notre méthode</a>
<a className="hover:text-emerald-600 transition-colors" href="#impact">Impact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-blue-950 bg-gold-400 rounded-full hover:bg-gold-500 transition-all shadow-lg shadow-gold-500/20 active:scale-95" href="#contact">
                    Investir
                </a>

<button className="md:hidden text-blue-950">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider mb-8">
<iconify-icon className="text-gold-500" icon="solar:star-shine-linear"></iconify-icon>
                    Intelligence Artificielle &amp; Finance
                </div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-blue-950 mb-6 leading-[1.1]">
                    Visualisez l'impact réel de vos <span className="text-emerald-500">capitaux</span>.
                </h1>
<p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                    Plus de transparence, moins de risques. Elinga utilise l'IA et l'imagerie satellite pour transformer la finance durable en résultats mesurables.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-950 text-white font-semibold rounded-full hover:bg-blue-900 transition-all shadow-xl shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-3" href="#contact">
                        Voir la démo
                        <iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 border border-slate-200 font-semibold rounded-full hover:border-emerald-500/50 hover:text-emerald-600 transition-all active:scale-95" href="#process">
                        Comment ça marche ?
                    </a>
</div>
</div>

<div className="relative group perspective-1000" id="dashboard">
<div className="relative z-10 bg-blue-950 rounded-2xl border border-blue-800 shadow-2xl overflow-hidden aspect-[4/3] transform transition-transform duration-700 hover:rotate-1 hover:scale-[1.02]">

<div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-blue-900/50 backdrop-blur">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-gold-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<div className="text-xs text-slate-400 font-mono">live_monitoring.elinga.ai</div>
</div>

<div className="absolute inset-0 top-12 bg-map-pattern opacity-30"></div>

<div className="relative h-full p-6">

<div className="absolute top-[30%] left-[45%] group/pin cursor-pointer">
<div className="relative flex items-center justify-center">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<div className="relative w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-lg shadow-emerald-500/50"></div>
</div>

<div className="absolute left-6 top-1/2 -translate-y-1/2 w-48 bg-blue-900/90 backdrop-blur-md border border-emerald-500/30 p-3 rounded-xl shadow-xl text-xs text-white opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none z-20 translate-x-2">
<p className="font-bold text-emerald-400 mb-1">Projet Reforest #A42</p>
<div className="flex justify-between items-center mb-1">
<span className="text-slate-300">Carbone</span>
<span className="font-mono text-white">+124t</span>
</div>
<div className="w-full bg-blue-950 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-full w-[92%]"></div>
</div>
</div>
</div>

<div className="absolute top-[60%] left-[70%] group/pin cursor-pointer">
<div className="relative w-3 h-3 bg-gold-500 border-2 border-white rounded-full shadow-lg"></div>
<div className="absolute right-5 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-900/90 rounded border border-gold-500/30 text-[10px] text-white whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity">Audit en cours</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between animate-float">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-white font-semibold text-sm">Portfolio Vert</p>
<p className="text-emerald-400 text-xs font-mono">+18.4% YoY</p>
</div>
</div>
<div className="text-right">
<p className="text-slate-400 text-xs">Score ESG</p>
<p className="text-2xl font-bold text-white tracking-tight">94<span className="text-sm text-slate-500 font-normal">/100</span></p>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 via-blue-600/20 to-gold-500/20 rounded-[2rem] blur-2xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-2 block">Technologie</span>
<h2 className="text-3xl lg:text-4xl font-bold text-blue-950 mb-4">Du satellite à la décision</h2>
<p className="text-lg text-slate-500">Notre moteur IA transforme des données brutes en intelligence financière exploitable.</p>
</div>

<div className="relative grid md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl text-blue-900" icon="solar:satellite-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-950 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">1</div>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Collecte</h3>
<p className="text-sm text-slate-500 leading-snug">Satellites, IoT &amp; Rapports RSE ingérés en temps réel.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-emerald-100 shadow-xl shadow-emerald-100/50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl text-emerald-500 animate-pulse-slow" icon="solar:cpu-bolt-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-950 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">2</div>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Analyse IA</h3>
<p className="text-sm text-slate-500 leading-snug">Traitement NLP et vision par ordinateur pour vérifier les faits.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl text-blue-900" icon="solar:chart-square-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-950 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">3</div>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Scoring</h3>
<p className="text-sm text-slate-500 leading-snug">Génération d'un score d'impact certifié et prédictif.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-900 to-blue-950 text-white shadow-xl shadow-blue-900/30 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-4xl text-gold-400" icon="solar:stars-linear"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-gold-500 rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">4</div>
</div>
<h3 className="text-lg font-bold text-blue-950 mb-2">Excellence</h3>
<p className="text-sm text-slate-500 leading-snug">Optimisation du portefeuille et reporting automatisé.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="impact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 mb-16">
<div>
<h2 className="text-3xl font-bold text-blue-950 mb-6">La performance par la preuve.</h2>
<p className="text-lg text-slate-600 mb-8">
                        Nous ne croyons pas aux promesses. Nous croyons aux données vérifiables. Chaque projet financé via Elinga est monitoré en continu.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Traçabilité complète des fonds</span>
</li>
<li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="font-medium text-slate-700">Détection anti-greenwashing</span>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="bg-blue-950 p-8 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:graph-new-up-linear" width="80"></iconify-icon>
</div>
<p className="text-gold-400 font-medium text-sm mb-2">Précision Modèle</p>
<p className="text-4xl lg:text-5xl font-bold">98%</p>
<p className="text-xs text-slate-400 mt-4">Vérifié par audit tiers</p>
</div>
<div className="bg-emerald-500 p-8 rounded-2xl text-white flex flex-col justify-between relative overflow-hidden group">
<div className="absolute -bottom-4 -right-4 p-4 opacity-20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:globe-linear" width="100"></iconify-icon>
</div>
<p className="text-emerald-100 font-medium text-sm mb-2">Données Analysées</p>
<p className="text-4xl lg:text-5xl font-bold">12M+</p>
<p className="text-xs text-emerald-100 mt-4">Points de données/jour</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-950 relative overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-gold-500"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

<div className="bg-slate-50 p-10 lg:p-16 lg:w-2/5 flex flex-col justify-between border-r border-slate-100">
<div>
<h2 className="text-3xl font-bold text-blue-950 mb-4">Parlons Impact</h2>
<p className="text-slate-500 mb-10">
                            Notre équipe est prête à vous accompagner. Contactez-nous directement pour une approche personnalisée.
                        </p>
</div>
<div className="space-y-8">

<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-gold-400 transition-colors">
<iconify-icon className="text-blue-900 text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email direct</p>
<a className="font-semibold text-lg text-blue-950 hover:text-gold-600 transition-colors break-all" href="mailto:bidzoem@gmail.com">bidzoem@gmail.com</a>
</div>
</div>

<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 transition-colors">
<iconify-icon className="text-blue-900 text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Téléphone</p>
<a className="font-semibold text-lg text-blue-950 hover:text-emerald-600 transition-colors" href="tel:077939828">077939828</a>
</div>
</div>
</div>
<div className="mt-12">
<p className="text-sm text-slate-400 italic">"L'excellence au service de la planète."</p>
</div>
</div>

<div className="p-10 lg:p-16 lg:w-3/5 bg-white">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-blue-950">Nom complet</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-blue-950">Email professionnel</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm" placeholder="nom@entreprise.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-blue-950">Votre objectif</label>
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-slate-600 text-sm">
<option>Je souhaite investir durablement</option>
<option>Je cherche à mesurer mon impact</option>
<option>Demande de partenariat</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-blue-950">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-sm resize-none" placeholder="Détaillez votre projet..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2" type="button">
                            Lancer la discussion
                            <iconify-icon icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-blue-950 text-slate-300 pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/5">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
<span className="font-bold text-white tracking-tight text-lg">ELINGA</span>
</a>
<p className="text-sm text-slate-400">Réinventer la finance pour un monde vivant.</p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
<p className="text-xs text-slate-500">© 2023 Elinga. Tous droits réservés.</p>
<div className="flex gap-6 text-2xl">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:linkedin"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
