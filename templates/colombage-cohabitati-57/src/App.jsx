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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="absolute inset-0 bg-white/80 backdrop-blur-md border-b border-zinc-200/60"></div>
<div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold tracking-tighter text-lg">C</span>
</div>
<span className="font-semibold text-zinc-900 tracking-tight group-hover:opacity-80 transition-opacity">colombage</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Fonctionnement</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Hébergeurs</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Jeunes</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Tarifs</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Connexion</a>
<a className="group relative px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all focus:ring-4 focus:ring-zinc-200 overflow-hidden" href="#">
<span className="relative z-10">Inscription</span>
</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<iconify-icon className="text-indigo-600" icon="solar:star-linear"></iconify-icon>
                        Solution solidaire et économique
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                        Le logement <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">réinventé</span> par le lien.
                    </h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
                        Colombage connecte les séniors disposant d'une chambre libre avec des jeunes en recherche de logement. Une solution sécurisée, légale et humaine.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 group" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear"></iconify-icon>
                            Trouver un logement
                        </a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-zinc-200 text-zinc-700 font-medium rounded-xl hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
                            Proposer une chambre
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=11"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=5"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white grayscale hover:grayscale-0 transition-all" src="https://i.pravatar.cc/100?img=3"/>
</div>
<p>Plus de <span className="font-semibold text-zinc-900">2,500</span> membres actifs</p>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-zinc-900 text-sm">Nouveau Binôme</h3>
<p className="text-xs text-zinc-400">Il y a 2 minutes</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                                Confirmé
                            </span>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
<img className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1">
<p className="text-sm font-semibold text-zinc-900">Martine, 72 ans</p>
<p className="text-xs text-zinc-500">Offre une chambre à Lyon</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-green-600">+350€/mois</p>
<p className="text-[10px] text-zinc-400">Complément revenu</p>
</div>
</div>

<div className="flex justify-center -my-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:link-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4 p-3 rounded-xl bg-zinc-50 border border-zinc-100">
<img className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?img=3"/>
<div className="flex-1">
<p className="text-sm font-semibold text-zinc-900">Lucas, 22 ans</p>
<p className="text-xs text-zinc-500">Étudiant en Master</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-indigo-600">-60%</p>
<p className="text-[10px] text-zinc-400">vs marché locatif</p>
</div>
</div>
</div>

<div className="mt-6 pt-4 border-t border-zinc-100 flex gap-3">
<button className="flex-1 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium">Voir le profil</button>
<button className="flex-1 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-600 text-xs font-medium hover:bg-zinc-50">Contacter</button>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-green-100 rounded-lg text-green-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500">Dossiers</p>
<p className="text-sm font-semibold text-zinc-900">100% Vérifiés</p>
</div>
</div>
</div>

<div className="absolute -left-8 bottom-32 glass-panel p-4 rounded-xl shadow-lg">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-800">4.9/5 Excellence</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Ils parlent de nous</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<h3 className="text-xl font-bold tracking-tighter text-zinc-800">LE MONDE</h3>
<h3 className="text-xl font-bold tracking-tight text-zinc-800 italic font-serif">Le Figaro</h3>
<h3 className="text-xl font-bold tracking-tight text-zinc-800">France<span className="font-normal text-zinc-500">Info</span></h3>
<h3 className="text-xl font-bold tracking-tighter text-zinc-800">B<span className="text-indigo-600">F</span>M</h3>
<h3 className="text-xl font-semibold tracking-tight text-zinc-800">Ouest<span className="text-orange-500">France</span></h3>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Pourquoi choisir Colombage ?</h2>
<p className="text-zinc-500 text-lg">Nous avons simplifié la cohabitation pour la rendre accessible, sûre et bénéfique pour tous.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">Sécurité Garantie</h3>
<p className="text-zinc-500 leading-relaxed">
                        Chaque profil est vérifié manuellement. Identité, casier judiciaire, et motivations sont analysés pour assurer une cohabitation sereine.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:document-add-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">Cadre Juridique</h3>
<p className="text-zinc-500 leading-relaxed">
                        Nous fournissons le contrat de cohabitation intergénérationnelle solidaire (loi ELAN) pour protéger les deux parties.
                    </p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-3">Impact Économique</h3>
<p className="text-zinc-500 leading-relaxed">
                        Un complément de revenu pour les seniors, un loyer modéré pour les jeunes. Une réponse concrète à l'inflation.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative bg-zinc-900 rounded-2xl p-2 shadow-2xl">
<div className="bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700">

<div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-700">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="text-zinc-100 font-medium">Recherche par critères</h4>
<div className="w-8 h-5 bg-indigo-600 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
</div>
</div>

<div className="space-y-6">
<div>
<label className="text-xs text-zinc-400 mb-2 block">Zone Géographique</label>
<div className="h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center px-3 text-sm text-zinc-300">
<iconify-icon className="mr-2" icon="solar:map-point-linear"></iconify-icon> Paris, France
                                        </div>
</div>
<div>
<label className="text-xs text-zinc-400 mb-2 block">Type de service attendu</label>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs border border-indigo-500/30">Présence le soir</span>
<span className="px-3 py-1 rounded-full bg-zinc-700 text-zinc-400 text-xs border border-zinc-600">Aide courses</span>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-xs text-zinc-400">Budget Max</label>
<span className="text-xs text-indigo-400">450€</span>
</div>
<div className="h-1 bg-zinc-700 rounded-full relative">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-500 rounded-full"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg cursor-pointer"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Comment ça marche ?</h2>
<div className="space-y-8">

<div className="flex gap-5 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-900 font-semibold flex items-center justify-center shadow-sm group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors">1</div>
<div className="w-px h-full bg-zinc-200 my-2 group-hover:bg-indigo-100"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Inscription gratuite</h3>
<p className="text-zinc-500">Créez votre profil en quelques minutes. Que vous soyez hébergeur ou jeune, indiquez vos préférences et vos disponibilités.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-900 font-semibold flex items-center justify-center shadow-sm group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors">2</div>
<div className="w-px h-full bg-zinc-200 my-2 group-hover:bg-indigo-100"></div>
</div>
<div className="pb-8">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Mise en relation intelligente</h3>
<p className="text-zinc-500">Notre algorithme vous propose des profils compatibles. Discutez via notre messagerie sécurisée.</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 text-zinc-900 font-semibold flex items-center justify-center shadow-sm group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors">3</div>
</div>
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Cohabitation &amp; Suivi</h3>
<p className="text-zinc-500">Signez le contrat numérique. L'équipe Colombage reste disponible pour accompagner votre binôme.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-semibold tracking-tight text-zinc-900 mb-16">Des histoires de vie partagées</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-indigo-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 mb-6">"Je me sentais un peu seule dans ma grande maison. L'arrivée de Thomas a ramené de la vie. C'est rassurant de savoir qu'il est là le soir."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm">J</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Jeanne, 84 ans</p>
<p className="text-xs text-zinc-400">Hébergeur à Bordeaux</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-indigo-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 mb-6">"Impossible de trouver un studio à Paris avec mon budget. Grâce à Colombage, j'ai une chambre de 15m² et une ambiance familiale géniale."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-sm">M</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Maxime, 23 ans</p>
<p className="text-xs text-zinc-400">Étudiant à Paris</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between md:hidden lg:flex">
<div>
<div className="flex text-indigo-500 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-600 mb-6">"L'équipe est très présente. Le matching a été parfait du premier coup. Les démarches administratives sont ultra simples."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-sm">S</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Sophie, 68 ans</p>
<p className="text-xs text-zinc-400">Hébergeur à Nantes</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="relative bg-zinc-900 rounded-3xl overflow-hidden px-6 py-16 md:px-16 text-center">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-800/40 via-zinc-900 to-zinc-900"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Prêt à commencer l'aventure ?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Rejoignez la première communauté de cohabitation intergénérationnelle de France. Inscription 100% gratuite.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-zinc-900 font-semibold rounded-xl hover:bg-zinc-100 transition-colors" href="#">
                            Je cherche un logement
                        </a>
<a className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-900/50" href="#">
                            J'ai une chambre libre
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-zinc-900 rounded text-white flex items-center justify-center text-xs font-bold">C</div>
<span className="font-semibold text-zinc-900">colombage</span>
</div>
<p className="text-zinc-500 text-sm max-w-xs mb-6">
                        La plateforme de référence pour la cohabitation intergénérationnelle solidaire. Créons du lien, partageons plus qu'un toit.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:bicycling-linear" width="20"></iconify-icon></a> 
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Plateforme</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Comment ça marche</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Tarifs</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Sécurité</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Témoignages</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Ressources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Kit Presse</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4 text-sm">Légal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">CGU</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2025 Colombage. Tous droits réservés.</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Systèmes opérationnels
                </div>
</div>
</div>
</footer>

    </>
  );
}
