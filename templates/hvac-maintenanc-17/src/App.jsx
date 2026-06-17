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
      

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center pointer-events-none">
<div className="pointer-events-auto backdrop-blur-md bg-[#0A0A0A]/50 px-4 py-2 rounded-full border border-[#2A2A2A]">
<span className="text-white font-semibold tracking-tighter text-lg">HVAC<span className="text-[#A0A0A0]">PRO</span></span>
</div>
</header>

<section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">

<div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 lg:p-20 group border-b lg:border-b-0 lg:border-r border-[#2A2A2A]">

<div className="absolute inset-0 bg-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]/20 to-transparent opacity-60"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col items-start max-w-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
<div className="w-16 h-16 rounded-2xl bg-[#3A86FF]/10 flex items-center justify-center mb-8 border border-[#3A86FF]/20">
<iconify-icon className="text-white" height="32" icon="lucide:wrench" width="32"></iconify-icon>
</div>
<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4 leading-tight">Entretien<br/>Préventif</h1>
<p className="text-lg text-[#A0A0A0] mb-8 font-light">Programmez vos visites annuelles pour garantir la longévité de vos équipements.</p>
<button className="bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white font-medium py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(58,134,255,0.3)] transition-all duration-300 transform hover:scale-[1.02]">
                    Souscrire un contrat
                </button>
</div>
</div>

<div className="w-full lg:w-1/2 relative flex items-center justify-center p-8 lg:p-20 group">

<div className="absolute inset-0 bg-[#0A0A0A]"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-[#E63946]/20 to-transparent opacity-60"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col items-start max-w-lg transition-transform duration-500 group-hover:translate-y-[-4px]">
<div className="w-16 h-16 rounded-2xl bg-[#E63946]/10 flex items-center justify-center mb-8 border border-[#E63946]/20 animate-pulse">
<iconify-icon className="text-white" height="32" icon="lucide:siren" width="32"></iconify-icon>
</div>
<h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4 leading-tight">Dépannage<br/>Urgence</h1>
<p className="text-lg text-[#A0A0A0] mb-8 font-light">Panne de chauffage ou climatisation ? Nos techniciens interviennent sous 2h.</p>
<button className="bg-[#E63946] hover:bg-[#E63946]/90 text-white font-medium py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(230,57,70,0.3)] transition-all duration-300 animate-[pulse_2s_infinite]">
                    Appeler maintenant
                </button>
</div>
</div>

<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#2A2A2A] hidden lg:block z-20"></div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A]">
<div className="max-w-4xl mx-auto">
<div className="bg-[#1A1A1A] rounded-3xl p-8 lg:p-12 border border-[#2A2A2A] text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">Entretien &amp; Dépannage : Nos Services Complets</h2>
<p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    Que vous souhaitiez anticiper les pannes avec un entretien régulier ou que vous ayez besoin d'une réparation immédiate, nos experts certifiés sont là pour vous.
                </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col items-center p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A]">
<iconify-icon className="text-[#3A86FF] mb-3 text-3xl" icon="lucide:clock"></iconify-icon>
<span className="text-white font-medium">Intervention &lt; 2h</span>
</div>
<div className="flex flex-col items-center p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A]">
<iconify-icon className="text-green-500 mb-3 text-3xl" icon="lucide:check-circle-2"></iconify-icon>
<span className="text-white font-medium">500+ Entretiens/an</span>
</div>
<div className="flex flex-col items-center p-4 rounded-xl bg-[#0A0A0A] border border-[#2A2A2A]">
<iconify-icon className="text-white mb-3 text-3xl" icon="lucide:wrench"></iconify-icon>
<span className="text-white font-medium">Techniciens Certifiés RGE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-[#1A1A1A] rounded-2xl p-8 lg:p-10 border-t border-r border-b border-[#2A2A2A] border-l-4 border-l-[#3A86FF] hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-[#3A86FF]/10 rounded-lg">
<iconify-icon className="text-[#3A86FF] text-2xl" icon="lucide:calendar-clock"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Entretien Préventif</h3>
<p className="text-[#A0A0A0] text-sm mt-1">Planifiez et protégez votre équipement</p>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#3A86FF] text-lg" icon="lucide:check"></iconify-icon>
                        Entretien Climatisation
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#3A86FF] text-lg" icon="lucide:check"></iconify-icon>
                        Entretien Pompe à Chaleur
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#3A86FF] text-lg" icon="lucide:check"></iconify-icon>
                        Entretien Chaudière
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#3A86FF] text-lg" icon="lucide:check"></iconify-icon>
                        Désembouage Circuits
                    </li>
</ul>
<div className="mb-8">
<p className="text-sm font-medium text-white mb-3">Nos formules:</p>
<div className="flex gap-3">
<button className="px-4 py-2 border border-[#3A86FF] text-[#3A86FF] rounded-md text-sm hover:bg-[#3A86FF]/10 transition-colors">Contrat annuel</button>
<button className="px-4 py-2 border border-[#3A86FF] text-[#3A86FF] rounded-md text-sm hover:bg-[#3A86FF]/10 transition-colors">Intervention unique</button>
</div>
</div>
<button className="w-full bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white font-medium py-4 rounded-lg shadow-lg shadow-[#3A86FF]/20 transition-all">
                    Prendre Rendez-vous
                </button>
</div>

<div className="bg-[#1A1A1A] rounded-2xl p-8 lg:p-10 border-t border-r border-b border-[#2A2A2A] border-l-4 border-l-[#E63946] hover:translate-y-[-4px] transition-transform duration-300">
<div className="flex items-center gap-4 mb-6">
<div className="p-3 bg-[#E63946]/10 rounded-lg">
<iconify-icon className="text-[#E63946] text-2xl" icon="lucide:zap"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Dépannage d'Urgence</h3>
<p className="text-[#A0A0A0] text-sm mt-1">Réagissez vite en cas de panne</p>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#E63946] text-lg" icon="lucide:alert-circle"></iconify-icon>
                        Dépannage PAC
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#E63946] text-lg" icon="lucide:alert-circle"></iconify-icon>
                        Dépannage Climatisation
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#E63946] text-lg" icon="lucide:alert-circle"></iconify-icon>
                        Dépannage Chaudière
                    </li>
<li className="flex items-center gap-3 text-[#E5E5E5]">
<iconify-icon className="text-[#E63946] text-lg" icon="lucide:alert-circle"></iconify-icon>
                        Diagnostic Panne
                    </li>
</ul>
<div className="mb-8">
<p className="text-sm font-medium text-white mb-3">Nos délais:</p>
<div className="flex gap-3">
<span className="px-3 py-1 bg-[#E63946]/20 text-[#E63946] rounded text-xs font-semibold border border-[#E63946]/30">URGENCE: 2H</span>
<span className="px-3 py-1 bg-[#2A2A2A] text-[#A0A0A0] rounded text-xs font-medium border border-[#333]">STANDARD: 24H</span>
</div>
</div>
<button className="w-full bg-[#E63946] hover:bg-[#E63946]/90 text-white font-medium py-4 rounded-lg shadow-lg shadow-[#E63946]/20 transition-all animate-[pulse_3s_infinite] mb-4">
                    Appeler Maintenant
                </button>
<div className="text-center">
<span className="text-white text-xl font-semibold tracking-wide">01 23 45 67 89</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Nos Formules d'Entretien</h2>
<p className="text-[#A0A0A0] text-lg">Choisissez la formule qui vous convient</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#3A86FF]/30 transition-colors">
<span className="inline-block px-3 py-1 bg-[#2A2A2A] text-xs font-medium text-white rounded-full mb-6">Basique</span>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">120€</span>
<span className="text-[#A0A0A0]">/an</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#E5E5E5]">
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> 1 visite annuelle</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Nettoyage complet</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Contrôle de sécurité</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Attestation légale</li>
</ul>
<button className="w-full py-3 rounded-lg border border-[#3A86FF] text-[#3A86FF] hover:bg-[#3A86FF] hover:text-white transition-all font-medium">Choisir</button>
</div>

<div className="bg-[#1A1A1A] border border-[#3A86FF]/50 rounded-2xl p-8 shadow-[0_0_30px_rgba(58,134,255,0.1)] relative transform md:-translate-y-4">
<span className="inline-block px-3 py-1 bg-[#3A86FF] text-xs font-medium text-white rounded-full mb-6">Populaire</span>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-semibold text-white">180€</span>
<span className="text-[#A0A0A0]">/an</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#E5E5E5]">
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> 1 visite annuelle</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Nettoyage + contrôle</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Priorité dépannage</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> -10% sur pièces</li>
<li className="flex gap-3"><iconify-icon className="text-[#3A86FF] text-base" icon="lucide:check"></iconify-icon> Attestation</li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#3A86FF] text-white hover:bg-[#3A86FF]/90 transition-all font-medium shadow-lg shadow-[#3A86FF]/25">Choisir</button>
</div>

<div className="bg-[#1A1A1A] border border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500/50 transition-colors">
<span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-500 text-xs font-medium border border-yellow-500/30 rounded-full mb-6">Premium</span>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">250€</span>
<span className="text-[#A0A0A0]">/an</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-[#E5E5E5]">
<li className="flex gap-3"><iconify-icon className="text-yellow-500 text-base" icon="lucide:check"></iconify-icon> 2 visites/an</li>
<li className="flex gap-3"><iconify-icon className="text-yellow-500 text-base" icon="lucide:check"></iconify-icon> Nettoyage + contrôle</li>
<li className="flex gap-3"><iconify-icon className="text-yellow-500 text-base" icon="lucide:check"></iconify-icon> Priorité absolue</li>
<li className="flex gap-3"><iconify-icon className="text-yellow-500 text-base" icon="lucide:check"></iconify-icon> -20% sur pièces</li>
<li className="flex gap-3"><iconify-icon className="text-yellow-500 text-base" icon="lucide:check"></iconify-icon> Pièces d'usure incluses</li>
</ul>
<button className="w-full py-3 rounded-lg border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-[#0A0A0A] transition-all font-medium">Choisir</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-[#2A2A2A] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[#1A1A1A]/30 -z-10"></div>
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-16 text-center">Dépannage Urgence : Notre Process</h2>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-[#3A86FF]/30 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#E63946] flex items-center justify-center mb-6 z-10 shadow-[0_0_15px_rgba(230,57,70,0.2)]">
<iconify-icon className="text-[#E63946] text-2xl" icon="lucide:phone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">1. Vous appelez</h3>
<p className="text-[#A0A0A0] text-sm mb-1">Réponse immédiate 7j/7</p>
<p className="text-xs text-[#555]">01 XX XX XX XX</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#3A86FF] flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-[#3A86FF] text-2xl" icon="lucide:search"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">2. Diagnostic</h3>
<p className="text-[#A0A0A0] text-sm mb-1">Arrivée sous 2h</p>
<p className="text-xs text-[#555]">Gratuit si intervention</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#3A86FF] flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-[#3A86FF] text-2xl" icon="lucide:wrench"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">3. Réparation</h3>
<p className="text-[#A0A0A0] text-sm mb-1">Sur place immédiat</p>
<p className="text-xs text-[#555]">Pièces en stock</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-green-500 flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-green-500 text-2xl" icon="lucide:check"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">4. Suivi</h3>
<p className="text-[#A0A0A0] text-sm mb-1">Appel J+2</p>
<p className="text-xs text-[#555]">Garantie 30 jours</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-16 text-center">Pourquoi l'Entretien Régulier est Indispensable</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

<div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#3A86FF]/30 transition-all">
<iconify-icon className="text-white text-3xl mb-4" icon="lucide:scale"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Obligation Légale</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">Le décret n° 2020-912 rend l'entretien obligatoire pour les chaudières et PAC.</p>
<span className="text-[#E63946] text-sm font-medium">Amende jusqu'à 1 500€</span>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2A2A2A] hover:border-green-500/30 transition-all">
<iconify-icon className="text-green-500 text-3xl mb-4" icon="lucide:coins"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Économies Réelles</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">Une installation entretenue consomme moins et dure plus longtemps.</p>
<span className="text-green-500 text-sm font-medium">Jusqu'à 2 000€ économisés sur 10 ans</span>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2A2A2A] hover:border-[#3A86FF]/30 transition-all">
<iconify-icon className="text-[#3A86FF] text-3xl mb-4" icon="lucide:shield-check"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Sécurité Renforcée</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">Évitez les fuites de gaz, les courts-circuits et les risques d'incendie.</p>
<ul className="flex gap-2">
<li className="bg-[#2A2A2A] p-1 rounded"><iconify-icon className="text-[#E63946]" icon="lucide:x"></iconify-icon></li>
<li className="bg-[#2A2A2A] p-1 rounded"><iconify-icon className="text-[#E63946]" icon="lucide:x"></iconify-icon></li>
</ul>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#2A2A2A] hover:border-yellow-500/30 transition-all">
<iconify-icon className="text-yellow-500 text-3xl mb-4" icon="lucide:zap"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-3">Performance Optimale</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">Maintenez un confort thermique constant quelle que soit la saison.</p>
<span className="text-[#3A86FF] text-sm font-medium">Rendement constant</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1A1A1A]/30">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Entretien vs Pas d'Entretien : La Différence</h2>
<div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[#2A2A2A]">

<div className="bg-[#0A0A0A]">
<div className="p-6 bg-green-900/10 border-b border-[#2A2A2A]">
<h3 className="text-xl font-semibold text-green-500 text-center">AVEC ENTRETIEN</h3>
</div>
<div className="divide-y divide-[#2A2A2A]">
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Durée de vie: 15-20 ans</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Rendement stable</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Peu de pannes</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Garantie valide</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Coût: 120-250€/an</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-green-500 flex-shrink-0" icon="lucide:check"></iconify-icon>
<span className="text-[#E5E5E5] text-sm">Conforme légalement</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border-l border-[#2A2A2A]">
<div className="p-6 bg-red-900/10 border-b border-[#2A2A2A]">
<h3 className="text-xl font-semibold text-[#E63946] text-center">SANS ENTRETIEN</h3>
</div>
<div className="divide-y divide-[#2A2A2A]">
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Durée de vie: 8-12 ans</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Perte 15-20% efficacité</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Pannes fréquentes</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Garantie annulée</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#1A1A1A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Coût pannes: 500-2000€</span>
</div>
<div className="p-4 flex items-center gap-3 bg-[#0A0A0A]">
<iconify-icon className="text-[#E63946] flex-shrink-0" icon="lucide:x"></iconify-icon>
<span className="text-[#A0A0A0] text-sm">Hors la loi (amende)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Questions Fréquentes</h2>
<div className="space-y-4">

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<h3 className="text-lg text-white font-medium pr-8">À quelle fréquence faire l'entretien ?</h3>
<iconify-icon className="text-[#3A86FF] text-xl transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed animate-[fadeIn_0.3s_ease-in-out]">
                    La loi impose un entretien annuel pour les chaudières gaz/fioul et les pompes à chaleur contenant plus de 2kg de fluide frigorigène.
                </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<h3 className="text-lg text-white font-medium pr-8">Que comprend un entretien ?</h3>
<iconify-icon className="text-[#3A86FF] text-xl transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed">
                    Le nettoyage complet, le contrôle des sécurités, l'analyse des fumées (gaz) ou le contrôle d'étanchéité (PAC), les réglages et l'attestation légale.
                </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<h3 className="text-lg text-white font-medium pr-8">Quel est le délai d'intervention en urgence ?</h3>
<iconify-icon className="text-[#3A86FF] text-xl transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed">
                    Pour nos clients sous contrat, nous garantissons une intervention sous 24h ouvrées. Pour l'option urgence premium, nous intervenons sous 2h, 7j/7.
                </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<h3 className="text-lg text-white font-medium pr-8">Combien coûte un dépannage ?</h3>
<iconify-icon className="text-[#3A86FF] text-xl transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed">
                    Le forfait diagnostic et déplacement est à partir de 90€. Si vous acceptez le devis de réparation, ce montant est déduit de la facture finale.
                </div>
</details>

<details className="group bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<h3 className="text-lg text-white font-medium pr-8">Puis-je annuler mon contrat d'entretien ?</h3>
<iconify-icon className="text-[#3A86FF] text-xl transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed">
                    Oui, nos contrats sont sans engagement de durée pluriannuelle. Vous pouvez résilier à tout moment avec un préavis de 30 jours avant la date anniversaire.
                </div>
</details>
</div>
</section>

<section className="flex flex-col lg:flex-row w-full min-h-[500px]">

<div className="w-full lg:w-1/2 bg-[#0A0A0A] border-t lg:border-r border-[#2A2A2A] p-12 lg:p-24 flex flex-col justify-center items-start relative overflow-hidden group">
<div className="absolute inset-0 bg-[#3A86FF]/5 group-hover:bg-[#3A86FF]/10 transition-colors duration-500"></div>
<iconify-icon className="text-[#3A86FF] text-5xl mb-6 relative z-10" icon="lucide:wrench"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 relative z-10">Planifier un Entretien</h2>
<p className="text-[#A0A0A0] mb-8 max-w-md relative z-10">Prenez soin de votre équipement dès aujourd'hui pour éviter les pannes demain.</p>
<ul className="space-y-3 mb-10 relative z-10">
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#3A86FF]"></div> Contrat dès 120€/an
                </li>
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#3A86FF]"></div> Devis gratuit
                </li>
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#3A86FF]"></div> Intervention rapide
                </li>
</ul>
<button className="relative z-10 bg-[#3A86FF] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-[#3A86FF]/40 transition-all hover:-translate-y-1">
                Prendre Rendez-vous
            </button>
</div>

<div className="w-full lg:w-1/2 bg-[#0A0A0A] border-t border-[#2A2A2A] p-12 lg:p-24 flex flex-col justify-center items-start relative overflow-hidden group">
<div className="absolute inset-0 bg-[#E63946]/5 group-hover:bg-[#E63946]/10 transition-colors duration-500"></div>
<iconify-icon className="text-[#E63946] text-5xl mb-6 relative z-10 animate-pulse" icon="lucide:siren"></iconify-icon>
<h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 relative z-10">Dépannage Urgent</h2>
<p className="text-[#A0A0A0] mb-8 max-w-md relative z-10">Panne ? On arrive sous 2h. Nos techniciens sont prêts à intervenir.</p>
<ul className="space-y-3 mb-10 relative z-10">
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#E63946]"></div> Disponible 24/7
                </li>
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#E63946]"></div> Diagnostic gratuit
                </li>
<li className="flex items-center gap-3 text-[#E5E5E5] text-sm">
<div className="w-2 h-2 rounded-full bg-[#E63946]"></div> Paiement facilité
                </li>
</ul>
<button className="relative z-10 bg-[#E63946] text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-[#E63946]/40 transition-all hover:-translate-y-1 flex items-center gap-3 animate-[pulse_3s_infinite]">
<iconify-icon icon="lucide:phone"></iconify-icon> 01 23 45 67 89
            </button>
</div>
</section>

<div className="bg-[#1A1A1A] py-6 px-6 border-t border-[#2A2A2A]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-[#A0A0A0] text-sm font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Techniciens RGE</span>
<span className="hidden md:block w-1 h-1 bg-[#2A2A2A] rounded-full"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#3A86FF]" icon="lucide:shield-check"></iconify-icon> Garantie intervention</span>
<span className="hidden md:block w-1 h-1 bg-[#2A2A2A] rounded-full"></span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="lucide:file-text"></iconify-icon> Attestation légale</span>
</div>
</div>

    </>
  );
}
