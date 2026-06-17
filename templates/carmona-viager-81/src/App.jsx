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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 cursor-pointer">
<span className="text-xl tracking-widest font-semibold text-slate-900 uppercase">Carmona</span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#c96a00] transition-colors" href="#avantages">Avantages</a>
<a className="hover:text-[#c96a00] transition-colors" href="#services">Expertise</a>
<a className="hover:text-[#c96a00] transition-colors" href="#avis">Témoignages</a>
<a className="hover:text-[#c96a00] transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all bg-[#c96a00] rounded-full hover:bg-[#a85900] shadow-sm hover:shadow-md ring-offset-2 focus:ring-2 ring-[#c96a00]" href="#contact">
                        Étude Gratuite
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-900 focus:outline-none">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Real Estate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#c96a00]"></span>
<span className="text-xs font-medium tracking-wide uppercase">Expertise Immobilière</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Viager gagnant<br/><span className="text-[#c96a00]">gagnant.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Sécurisez votre avenir avec Carmona. Nous transformons le patrimoine immobilier en sérénité financière grâce à une approche éthique et transparente du viager.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#c96a00] text-white text-sm font-medium rounded-full hover:bg-[#a85900] transition-all shadow-lg shadow-[#c96a00]/20 flex items-center justify-center gap-2" href="#contact">
                    Estimer mon bien
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/20 transition-all flex items-center justify-center" href="#services">
                    Nos solutions
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="avantages">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#c96a00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="w-12 h-12 rounded-xl bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Sécurité Totale</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Nous garantissons le paiement des rentes via des clauses résolutoires strictes et un suivi juridique rigoureux de chaque dossier.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#c96a00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="w-12 h-12 rounded-xl bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:wallet-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Optimisation Fiscale</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Bénéficiez d'abattements fiscaux avantageux sur les rentes viagères selon votre âge, maximisant ainsi votre pouvoir d'achat.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#c96a00]/20 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="w-12 h-12 rounded-xl bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Accompagnement Humain</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Chez Carmona, le viager est avant tout une histoire humaine. Nous créons un lien de confiance durable entre vendeurs et acquéreurs.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c96a00]/10 rounded-full blur-2xl"></div>
<img alt="Meeting" className="relative rounded-2xl shadow-2xl shadow-slate-200 z-10 w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1600&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-slate-100 z-20 max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-2">
<div className="text-[#c96a00]">
<iconify-icon height="32" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold text-slate-900">98%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Clients Satisfaits</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h4 className="text-[#c96a00] font-medium tracking-widest text-xs uppercase mb-4">À propos de Carmona</h4>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                        L'excellence et la confiance au cœur de votre patrimoine.
                    </h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        Depuis plus de 15 ans, Carmona redéfinit les standards du viager en France. Nous comprenons que chaque projet immobilier est unique et porte une charge émotionnelle forte.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Notre mission est de démocratiser le viager comme un outil moderne de gestion de patrimoine, en assurant une équité parfaite entre le vendeur (crédirentier) et l'acheteur (débirentier). Une approche transparente, premium et résolument humaine.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#c96a00]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Expertise juridique pointue</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#c96a00]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Réseau d'investisseurs qualifiés</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<iconify-icon className="text-[#c96a00]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Éthique et confidentialité</span>
</li>
</ul>
<a className="text-[#c96a00] font-medium text-sm inline-flex items-center gap-2 hover:gap-3 transition-all" href="#contact">
                        Rencontrer nos conseillers
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4 tracking-tight">Nos Solutions sur Mesure</h2>
<p className="text-slate-500 text-sm md:text-base">Découvrez les différentes formes de viager adaptées à vos besoins patrimoniaux et financiers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Viager Occupé" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-4">
<iconify-icon height="20" icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Viager Occupé</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Vendez votre bien tout en continuant d'y habiter à vie. Vous percevez un capital immédiat (bouquet) et une rente mensuelle garantie.
                        </p>
<a className="text-xs font-medium text-slate-900 uppercase tracking-wide flex items-center gap-2 group-hover:text-[#c96a00] transition-colors" href="#">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Viager Libre" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185009-dddeb820c7b7?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-4">
<iconify-icon height="20" icon="solar:key-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Viager Libre</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Le bien est vendu libre de toute occupation. L'acquéreur peut y habiter ou le louer immédiatement. Idéal pour une rentabilité rapide.
                        </p>
<a className="text-xs font-medium text-slate-900 uppercase tracking-wide flex items-center gap-2 group-hover:text-[#c96a00] transition-colors" href="#">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="h-56 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Vente à Terme" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="w-10 h-10 rounded-full bg-[#c96a00]/10 flex items-center justify-center text-[#c96a00] mb-4">
<iconify-icon height="20" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Vente à Terme</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Percevez un paiement comptant puis des mensualités sur une durée fixée à l'avance (10, 15 ou 20 ans). Une alternative sécurisée au viager classique.
                        </p>
<a className="text-xs font-medium text-slate-900 uppercase tracking-wide flex items-center gap-2 group-hover:text-[#c96a00] transition-colors" href="#">
                            En savoir plus
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="avis">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">Ils nous font confiance</h2>
<p className="text-slate-500">Retours d'expérience de nos crédirentiers et débirentiers.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:border-[#c96a00] hover:text-[#c96a00] transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:border-[#c96a00] hover:text-[#c96a00] transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-[#c96a00] mb-4 space-x-1">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        "Grâce à Carmona, j'ai pu rester chez moi tout en aidant mes petits-enfants. L'équipe a été d'une patience et d'une pédagogie remarquables."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-semibold">JD</div>
<div>
<p className="text-sm font-semibold text-slate-900">Jacques Durand</p>
<p className="text-xs text-slate-400">Viager Occupé à Nice</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-[#c96a00] mb-4 space-x-1">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        "Un investissement éthique et sécurisé. La transparence sur les calculs du bouquet et de la rente m'a tout de suite convaincu."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-semibold">SM</div>
<div>
<p className="text-sm font-semibold text-slate-900">Sophie Martin</p>
<p className="text-xs text-slate-400">Investisseur</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-[#c96a00] mb-4 space-x-1">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
                        "Service premium. De l'estimation à la signature chez le notaire, tout a été géré avec un professionnalisme rare."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs font-semibold">PL</div>
<div>
<p className="text-sm font-semibold text-slate-900">Pierre Lefebvre</p>
<p className="text-xs text-slate-400">Vente à Terme</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6 md:px-12">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">Questions Fréquentes</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-slate-200/50 open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-800">
                        Qu'est-ce que le bouquet et la rente ?
                        <span className="text-slate-400 group-open:text-[#c96a00] transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        Le bouquet est le capital versé comptant le jour de la signature chez le notaire. La rente est la somme mensuelle versée au vendeur à vie (ou pour une durée déterminée). La répartition entre les deux est modulable selon vos besoins.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-slate-200/50 open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-800">
                        Qui paie les charges et les travaux ?
                        <span className="text-slate-400 group-open:text-[#c96a00] transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        En viager occupé, le vendeur conserve généralement les charges courantes et la taxe d'habitation. L'acquéreur prend en charge la taxe foncière et les gros travaux (structure, toiture). Tout est contractuellement défini.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-slate-200/50 open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-800">
                        La rente est-elle imposable ?
                        <span className="text-slate-400 group-open:text-[#c96a00] transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        La rente viagère bénéficie d'un abattement fiscal très avantageux déterminé selon l'âge du vendeur au moment du premier versement (jusqu'à 70% d'abattement après 69 ans).
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-slate-200/50 open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-800">
                        Que se passe-t-il si l'acheteur ne paie plus ?
                        <span className="text-slate-400 group-open:text-[#c96a00] transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        Carmona inclut systématiquement une "clause résolutoire" dans l'acte de vente. En cas de non-paiement, la vente est annulée, le vendeur récupère la pleine propriété de son bien et conserve toutes les rentes déjà versées à titre d'indemnité.
                    </div>
</details>

<details className="group bg-slate-50 rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-slate-200/50 open:ring-1 open:ring-slate-100 transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer font-medium text-slate-800">
                        Peut-on vendre en viager à tout âge ?
                        <span className="text-slate-400 group-open:text-[#c96a00] transition-transform group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-4 leading-relaxed pl-1">
                        Légalement oui, mais économiquement, le viager devient intéressant pour le vendeur généralement à partir de 65-70 ans. Pour les plus jeunes, la vente à terme peut être une meilleure option.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Actualités &amp; Conseils</h2>
<a className="text-sm font-medium text-[#c96a00] hover:text-[#a85900] hidden md:block" href="#">Voir tous les articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl mb-4">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&amp;q=80"/>
</div>
<div className="text-xs font-medium text-[#c96a00] mb-2 uppercase tracking-wide">Guide Fiscal</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#c96a00] transition-colors">Réforme des retraites : le viager comme solution ?</h3>
<p className="text-sm text-slate-500 line-clamp-2">Comment compléter sa retraite efficacement grâce à son patrimoine immobilier dans le contexte économique actuel.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl mb-4">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1648475237029-7f853809ca14?w=800&amp;q=80"/>
</div>
<div className="text-xs font-medium text-[#c96a00] mb-2 uppercase tracking-wide">Investissement</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#c96a00] transition-colors">Viager Libre vs Viager Occupé : le match</h3>
<p className="text-sm text-slate-500 line-clamp-2">Comparatif détaillé pour comprendre quel type de vente correspond le mieux à votre projet de vie.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-video overflow-hidden rounded-xl mb-4">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616137303871-05ce745f9cdb?w=800&amp;q=80"/>
</div>
<div className="text-xs font-medium text-[#c96a00] mb-2 uppercase tracking-wide">Juridique</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-[#c96a00] transition-colors">Protéger son conjoint grâce au viager</h3>
<p className="text-sm text-slate-500 line-clamp-2">Les mécanismes de réversion de rente pour assurer la sécurité financière de votre époux(se).</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Discutons de votre projet</h2>
<p className="text-slate-500 mb-8">Remplissez le formulaire ci-dessous pour une étude gratuite et confidentielle. Nos experts vous répondent sous 24h.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="prenom">Prénom</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#c96a00] focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" id="prenom" placeholder="Jean" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="nom">Nom</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#c96a00] focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" id="nom" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#c96a00] focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" id="email" placeholder="jean.dupont@exemple.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="sujet">Sujet</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#c96a00] focus:border-transparent outline-none transition-all text-sm text-slate-600 appearance-none" id="sujet">
<option>Estimation Viager Occupé</option>
<option>Estimation Viager Libre</option>
<option>Vente à terme</option>
<option>Investissement</option>
<option>Autre demande</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#c96a00] focus:border-transparent outline-none transition-all text-sm placeholder:text-slate-400" id="message" placeholder="Décrivez votre projet..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-[#c96a00] hover:bg-[#a85900] text-white font-medium rounded-lg shadow-lg shadow-[#c96a00]/20 transition-all flex items-center justify-center gap-2 mt-4" type="button">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                            Envoyer ma demande
                        </button>
</form>
</div>

<div className="h-[500px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative">
<iframe allowfullscreen="" className="map-filter" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3455981156743913!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg max-w-xs">
<div className="flex items-start gap-3">
<div className="text-[#c96a00] mt-1">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Siège Social</h4>
<p className="text-xs text-slate-500 mt-1">12 Avenue de l'Opéra75001 Paris, France</p>
<p className="text-xs text-[#c96a00] mt-2 font-medium">contact@carmona.com</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-semibold text-white tracking-widest uppercase mb-6 block">Carmona</span>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        L'expert du viager nouvelle génération. Nous valorisons votre patrimoine immobilier avec éthique, transparence et sécurité.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Viager Occupé</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Viager Libre</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Vente à Terme</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Entreprise</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#c96a00] transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Notre Équipe</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Légal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-[#c96a00] transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2023 Carmona Viager Patrimoine. Tous droits réservés.</p>
<div className="mt-4 md:mt-0">
<span className="flex items-center gap-1">
                        Conçu avec <iconify-icon className="text-[#c96a00]" icon="solar:heart-linear"></iconify-icon> pour votre avenir.
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
