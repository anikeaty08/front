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
      

<nav className="fixed w-full z-50 border-b border-slate-100 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-900 rounded-sm flex items-center justify-center">
<iconify-icon className="text-white text-2xl" icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<span className="block text-lg font-semibold tracking-tight text-slate-900 uppercase">Cabinet ELKHORASSANI</span>
<span className="block text-[10px] text-slate-500 uppercase tracking-[0.2em]">Avocat au Barreau de Casablanca</span>
</div>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium">
<a className="text-slate-900 hover:text-blue-600 transition" href="#accueil">Accueil</a>
<a className="text-slate-500 hover:text-slate-900 transition" href="#a-propos">À propos</a>
<a className="text-slate-500 hover:text-slate-900 transition" href="#services">Services</a>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-sm hover:bg-slate-800 transition" href="#contact">Consultation</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="accueil">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                        Fondé en 1979
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight">
                        Votre partenaire juridique <span className="text-blue-600">d'excellence</span> à Casablanca.
                    </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-xl font-light">
                        Fort de plus de 40 ans d'expérience, le Cabinet de Maître Ahmed ELKHORASSANI offre des conseils stratégiques et une défense rigoureuse pour les entreprises et les particuliers au Maroc.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-slate-900 text-white rounded-sm font-medium hover:bg-slate-800 transition text-center" href="#services">Nos Domaines d'Expertise</a>
<a className="px-8 py-4 border border-slate-200 text-slate-900 rounded-sm font-medium hover:bg-slate-50 transition flex items-center justify-center gap-2" href="tel:+212522445778">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                            +212 5 22 44 57 78
                        </a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden custom-shadow">
<img alt="Consultation juridique cabinet avocat Casablanca" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-50 hidden md:block">
<div className="flex items-center gap-4">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">40+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest leading-tight">Années<br/>d'expérience</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 translate-x-1/2 rounded-full blur-3xl opacity-50"></div>
</section>

<section className="py-12 bg-slate-900">
<div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between gap-8 text-white/80">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide uppercase">Confidentialité Totale</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:ranking-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide uppercase">Expertise Reconnue</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:case-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide uppercase">Accompagnement Sur Mesure</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide uppercase">Basé à Casablanca</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
<h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">Domaines de compétences</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Une expertise juridique multidisciplinaire</h3>
<p className="text-slate-500 font-light">Nous intervenons sur l'ensemble des problématiques juridiques liées au Code des Obligations et des Contrats ainsi qu'au Code de la Famille au Maroc.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 transition-all duration-300 group custom-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Droit Civil</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Gestion des rapports contractuels, obligations et contrats au sein de la vie civile marocaine pour protéger vos biens et vos droits.</p>
<a className="text-blue-600 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="/droit-civil/">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 transition-all duration-300 group custom-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Droit des Affaires</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Accompagnement des entreprises : droit des sociétés, assurances, banque, concurrence et recouvrement de créances.</p>
<a className="text-blue-600 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="/droit-des-affaires/">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-500 transition-all duration-300 group custom-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3">Droit de la Famille</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expertise en procédures de divorce, successions, garde d'enfants et protection des intérêts familiaux.</p>
<a className="text-blue-600 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all" href="/droit-de-la-famille/">En savoir plus <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-400 text-sm italic">Également experts en : Droit Immobilier, Droit Social, Droit Pénal des Affaires et Propriété Industrielle.</p>
</div>
</div>
</section>

<section className="py-24 bg-white" id="a-propos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<img alt="Bureau Maître Ahmed Elkhorassani Casablanca" className="rounded-2xl custom-shadow" src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 border-2 border-blue-600/10 rounded-2xl translate-x-4 translate-y-4 -z-10"></div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-xs font-bold text-blue-600 uppercase tracking-[0.3em]">Notre Cabinet</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Plus de quatre décennies au service de la justice</h3>
<p className="text-slate-500 leading-relaxed font-light">
                        Fondé en 1979 par <strong>Maître Ahmed ELKHORASSANI</strong>, notre cabinet est devenu une référence incontournable à Casablanca en droit des affaires et en droit immobilier. 
                    </p>
<p className="text-slate-500 leading-relaxed font-light">
                        Ancien professeur à l'école ESSAADIYINES au côté de son père, Maître Ahmed ELKHORASSANI allie une rigueur académique à une pratique judiciaire pragmatique. Notre philosophie : faire "un" avec le client pour transformer les défis juridiques en opportunités.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Conseils stratégiques personnalisés</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Représentation devant toutes les juridictions</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-blue-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Arbitrage et médiation commerciale</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div className="space-y-8">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Besoin d'un conseil juridique ?</h2>
<p className="text-slate-400 font-light">Nos locaux sont situés au cœur de Casablanca pour vous accueillir et étudier votre dossier.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-blue-400">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Adresse</h4>
<p className="text-slate-400 text-sm">27, Rue Mohammed Diouri (Face Lydec), Casablanca - 20 110, Maroc</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-blue-400">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Contact</h4>
<p className="text-slate-400 text-sm">Tél : +212 5 22 44 57 78</p>
<p className="text-slate-400 text-sm">GSM : +212 6 75 08 09 99</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-blue-400">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">E-mail</h4>
<p className="text-slate-400 text-sm">contact@avocat-casablanca.com</p>
<p className="text-slate-400 text-sm">ahmedavocat@gmail.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl">
<h3 className="text-slate-900 text-xl font-semibold mb-6">Demander un devis ou une consultation</h3>
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Nom complet" type="text"/>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="E-mail" type="email"/>
</div>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition">
<option>Droit Civil</option>
<option>Droit des Affaires</option>
<option>Droit de la Famille</option>
<option>Autre spécialité</option>
</select>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none transition" placeholder="Décrivez brièvement votre situation" rows="4"></textarea>
<button className="w-full py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-600/20" type="submit">Envoyer ma demande</button>
</form>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 blur-[120px] opacity-20 -z-10"></div>
</section>

<footer className="py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span className="text-lg font-bold text-slate-900">Cabinet ELKHORASSANI</span>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-widest italic">Avocat au Barreau de Casablanca depuis 1979</p>
</div>
<div className="flex gap-8 text-xs font-semibold text-slate-500 uppercase tracking-widest">
<a className="hover:text-blue-600" href="/mentions-legales/">Mentions Légales</a>
<a className="hover:text-blue-600" href="/plan-du-site/">Plan du site</a>
<a className="hover:text-blue-600" href="#">Confidentialité</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition" href="#">
<iconify-icon icon="ri:facebook-fill"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition" href="#">
<iconify-icon icon="ri:linkedin-fill"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em]">
                © 2024 Cabinet ELKHORASSANI. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
