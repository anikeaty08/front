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
      

<nav className="fixed w-full z-50 glass-header">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 gold-gradient flex items-center justify-center rounded-sm shadow-lg">
<svg className="text-white text-2xl w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="building-4-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.753 2.197a2 2 0 0 0-1.662.182l-4.12 2.472A2 2 0 0 0 4 6.566V20H3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2h-1V6.72a2 2 0 0 0-1.367-1.896zM18 20V6.72l-7-2.332V20zM9 4.766l-3 1.8V20h3z" fill="#ffffff"></path></g></svg>
</div>
<div className="">
<h1 className="text-lg font-semibold tracking-tight leading-none text-slate-900 uppercase">Cabinet ELKHORASSANI</h1>
<p className="text-xs text-slate-500 mt-1 font-medium tracking-widest uppercase italic">Avocats au Barreau de Casablanca</p>
</div>
</div>
<div className="hidden lg:flex items-center gap-10">
<a className="nav-link text-sm font-medium text-slate-600 hover:text-slate-900" href="#accueil">Accueil</a>
<a className="nav-link text-sm font-medium text-slate-600 hover:text-slate-900" href="#expertise">Expertise</a>
<a className="nav-link text-sm font-medium text-slate-600 hover:text-slate-900" href="#propos">Le Cabinet</a>
<a className="px-6 py-2.5 navy-gradient text-white rounded text-sm font-medium hover:opacity-90 transition shadow-lg" href="#contact">Prendre RDV</a>
</div>
<button className="lg:hidden text-slate-900">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center" id="accueil">
<div className="absolute inset-0 z-0">
<img alt="Law Office Casablanca" className="opacity-50 w-full h-full object-cover" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&amp;w=3840"/>
<div className="bg-gradient-to-b from-white via-transparent to-slate-50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-8">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Fondé en 1979 • Casablanca
                </div>
<h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Votre Partenaire Juridique de <span className="text-transparent bg-clip-text gold-gradient">Confiance</span> au Maroc.
                </h2>
<p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-10">
                    Sous la direction de <span className="font-semibold">Maître Ahmed ELKHORASSANI</span>, notre cabinet allie tradition d'excellence et modernité pour défendre vos intérêts devant toutes les juridictions marocaines.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-4 navy-gradient text-white rounded-sm font-medium shadow-xl hover:-translate-y-1 transition duration-300 flex items-center gap-3" href="#expertise">
                        Nos Domaines d'Intervention
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-4 border border-slate-200 bg-white text-slate-900 rounded-sm font-medium hover:bg-slate-50 transition duration-300 flex items-center gap-3 shadow-sm" href="tel:+212522445778">
<iconify-icon className="text-xl text-amber-600" icon="solar:phone-calling-linear"></iconify-icon>
                        +212 5 22 44 57 78
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl font-bold text-slate-900 tracking-tight">45+</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Années d'Expérience</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-slate-900 tracking-tight">1979</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Année de Fondation</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-slate-900 tracking-tight">100%</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Engagement Client</p>
</div>
<div className="text-center">
<p className="text-3xl font-bold text-slate-900 tracking-tight">Casablanca</p>
<p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Siège Principal</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h3 className="text-xs font-bold text-amber-600 uppercase tracking-[0.2em] mb-4">Domaines de Compétences</h3>
<h2 className="text-4xl font-bold text-slate-900 tracking-tight">Une expertise multidisciplinaire ancrée dans le <span className="text-slate-500 italic font-medium">droit marocain</span>.</h2>
</div>
<p className="text-slate-500 max-w-sm text-sm">Nous accompagnons entreprises et particuliers dans la gestion de leurs litiges civils, familiaux et commerciaux avec rigueur et discrétion.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white p-10 rounded-xl border border-slate-200 hover:border-amber-200 transition-all duration-300 custom-shadow hover:-translate-y-2">
<div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 group-hover:text-amber-600" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Droit de la Famille</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                        Spécialiste du Code de la Famille (Moudawana) : divorces, garde d'enfants, pensions alimentaires et successions complexes au Maroc.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Divorce &amp; Médiation
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Droits des Mineurs
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Partage Successoral
                        </li>
</ul>
</div>

<div className="group bg-white p-10 rounded-xl border border-slate-200 hover:border-amber-200 transition-all duration-300 custom-shadow hover:-translate-y-2">
<div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 group-hover:text-amber-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Droit des Assurances</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                        Expertise pointue dans le règlement des sinistres, l'indemnisation des préjudices corporels et la gestion des litiges contractuels avec les assureurs.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Accidents de la route
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Responsabilité Civile
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Audits de contrats
                        </li>
</ul>
</div>

<div className="group bg-white p-10 rounded-xl border border-slate-200 hover:border-amber-200 transition-all duration-300 custom-shadow hover:-translate-y-2">
<div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-3xl text-slate-900 group-hover:text-amber-600" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Droit Civil &amp; Immobilier</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                        Maîtrise du Code des Obligations et des Contrats (D.O.C). Protection de la propriété, baux commerciaux et recouvrement de créances.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Litiges Immobiliers
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Exécution Forcée
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Contrats Civils
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
<img alt="Justice Marocaine" className="rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition duration-700" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&amp;w=2070"/>
<div className="absolute -bottom-6 -right-6 p-8 bg-slate-950 text-white rounded-xl z-20 shadow-xl hidden md:block">
<p className="text-xs uppercase tracking-widest text-amber-500 mb-2 font-bold">Représentation</p>
<p className="text-sm font-light italic leading-relaxed">Plaidoiries devant tous les tribunaux de première instance, d'appel et cours de cassation du Royaume.</p>
</div>
</div>
<div className="">
<h3 className="text-xs font-bold text-amber-600 uppercase tracking-[0.2em] mb-4 text-left">Contentieux &amp; Procédures</h3>
<h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-8">Une force de frappe au cœur du <span className="italic font-light">système judiciaire</span>.</h2>
<p className="text-slate-600 leading-relaxed mb-8">
                        Le Cabinet ELKHORASSANI est reconnu pour son expertise stratégique en phase contentieuse. Notre connaissance approfondie de la jurisprudence marocaine nous permet d'élaborer des dossiers de défense inattaquables.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-12 h-12 navy-gradient rounded flex items-center justify-center text-white shrink-0">
<iconify-icon className="text-2xl" icon="solar:gavel-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h5 className="font-bold text-slate-900 mb-1">Stratégie Judiciaire</h5>
<p className="text-xs text-slate-500">Analyse rigoureuse des risques et définition d'une stratégie de défense sur mesure.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
<div className="w-12 h-12 navy-gradient rounded flex items-center justify-center text-white shrink-0">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h5 className="font-bold text-slate-900 mb-1">Voies de Recours</h5>
<p className="text-xs text-slate-500">Accompagnement rigoureux en appel et en cassation pour sécuriser vos droits.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-32 pb-32" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-12">
<div className="lg:col-span-5 navy-gradient flex flex-col text-white pt-12 pr-12 pb-12 pl-12 justify-between">
<div className="">
<h2 className="text-3xl font-bold tracking-tight mb-6 text-white">Contactez le Cabinet</h2>
<p className="text-slate-300 text-sm leading-relaxed mb-12 font-light">Le Cabinet ELKHORASSANI reçoit sur rendez-vous à son bureau de Casablanca. Posez vos questions ou sollicitez un devis juridique personnalisé.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-amber-500" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<p className="text-sm font-semibold">Bureau Casablanca</p>
<p className="text-xs text-slate-400 mt-1">27, Rue Mohammed Diouri (Face Lydec)<br/>Casablanca - 20 110, Maroc</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-amber-500" icon="solar:phone-calling-linear"></iconify-icon>
<div className="">
<p className="text-sm font-semibold">Urgences &amp; Fixe</p>
<p className="text-xs text-slate-400 mt-1">+212 5 22 44 57 78</p>
<p className="text-xs text-slate-400 mt-1">+212 6 75 08 09 99 (GSM)</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-amber-500" icon="solar:letter-linear"></iconify-icon>
<div className="">
<p className="text-sm font-semibold">Email Officiel</p>
<p className="text-xs text-slate-400 mt-1">contact@avocat-casablanca.com</p>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 p-12 bg-white">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="">
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Prénom &amp; Nom</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="Ex: Jean Dupont" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Téléphone</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="+212 ..." type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Sujet du Dossier</label>
<select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none">
<option>Droit de la Famille / Divorce</option>
<option>Assurances &amp; Indemnisation</option>
<option>Litige Civil ou Immobilier</option>
<option>Droit des Affaires &amp; Sociétés</option>
<option>Autre expertise</option>
</select>
</div>
<div className="">
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Votre Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all" placeholder="Décrivez brièvement votre situation..." rows="5"></textarea>
</div>
<button className="w-full py-4 navy-gradient text-white rounded font-bold shadow-xl hover:opacity-95 transition flex items-center justify-center gap-3">
<iconify-icon className="text-xl" icon="solar:paper-plane-linear" strokeWidth="1.5"></iconify-icon>
                            Envoyer la Demande
                        </button>
<p className="text-center text-[10px] text-slate-400 mt-4 leading-relaxed">
                            En envoyant ce formulaire, vous acceptez que vos données soient traitées par le Cabinet ELKHORASSANI dans le cadre de votre demande. Conformément à la loi 09-08, vous disposez d'un droit d'accès et de rectification.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-amber-500 text-3xl" icon="solar:scale-linear"></iconify-icon>
<span className="text-lg font-bold tracking-tight uppercase">ELKHORASSANI</span>
</div>
<p className="text-slate-400 text-xs leading-relaxed font-light">
                        Expertise juridique marocaine de référence depuis 1979. Fondé par Maître Ahmed ELKHORASSANI, le cabinet est dédié à l'excellence et à la défense des droits devant toutes les instances du Royaume.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-amber-500 pl-4">Expertises</h4>
<ul className="space-y-4 text-xs text-slate-400 font-light">
<li className=""><a className="hover:text-amber-500 transition" href="#">Droit de la Famille (Moudawana)</a></li>
<li className=""><a className="hover:text-amber-500 transition" href="#">Droit des Assurances</a></li>
<li className=""><a className="hover:text-amber-500 transition" href="#">Droit des Affaires &amp; Sociétés</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-amber-500 pl-4">Navigation</h4>
<ul className="space-y-4 text-xs text-slate-400 font-light">
<li className=""><a className="hover:text-amber-500 transition" href="#accueil">Accueil</a></li>
<li className=""><a className="hover:text-amber-500 transition" href="#expertise">Expertises</a></li>
<li className=""><a className="hover:text-amber-500 transition" href="#propos">Le Cabinet</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-8 border-l-2 border-amber-500 pl-4">Localisation</h4>
<div className="rounded-lg overflow-hidden h-32 opacity-60 hover:opacity-100 transition duration-500 border border-slate-800">

<img alt="Map Casablanca" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2070"/>
</div>
</div>
</div>
<div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-500 uppercase tracking-widest">© 2024 Cabinet ELKHORASSANI - Tous droits réservés.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    Design Excellence • Casablanca, Maroc
                </p>
</div>
</div>
</footer>

    </>
  );
}
