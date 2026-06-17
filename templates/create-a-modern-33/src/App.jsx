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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-xl">MAQIS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#fonctionnalites">Fonctionnalités</a>
<a className="hover:text-neutral-900 transition-colors" href="#comment-ca-marche">Comment ça marche</a>
<a className="hover:text-neutral-900 transition-colors" href="#tarifs">Tarifs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Connexion</a>
<a className="bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">Essayer gratuitement</a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden hero-pattern">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-orange-600"></span>
                    La solution n°1 en Côte d'Ivoire
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-neutral-900 leading-tight mb-6">
                    Prenez le contrôle de votre maquis. <span className="text-orange-600">Arrêtez les pertes.</span>
</h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed font-normal">
                    L'application simple pour suivre vos ventes de boissons, gérer vos stocks et surveiller votre recette à distance sur votre téléphone. Même quand vous n'êtes pas sur place.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium text-center hover:bg-orange-700 transition-colors flex items-center justify-center gap-2" href="#">
                        Commencer maintenant
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-white border border-neutral-200 text-neutral-700 px-6 py-3 rounded-full text-base font-medium text-center hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Voir la démo
                    </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-neutral-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-400 border-2 border-white"></div>
</div>
<p>Rejoint par +500 gérants</p>
</div>
</div>

<div className="relative mx-auto w-full max-w-[320px]">
<div className="absolute -inset-4 bg-orange-200/50 rounded-full blur-3xl -z-10"></div>
<div className="relative bg-white border-[8px] border-neutral-900 rounded-[2.5rem] h-[600px] w-full overflow-hidden shadow-2xl">

<div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 rounded-b-xl w-32 mx-auto z-20"></div>

<div className="p-4 pt-10 h-full flex flex-col bg-neutral-50">
<div className="flex justify-between items-center mb-6">
<div>
<p className="text-xs text-neutral-500">Recette du jour</p>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">145 000 FCFA</h3>
</div>
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm border border-neutral-100 mb-4">
<h4 className="text-xs font-medium text-neutral-400 mb-3 uppercase tracking-wider">Ventes récentes</h4>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-700">
<iconify-icon icon="solar:bottle-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Beaufort 50cl</p>
<p className="text-xs text-neutral-500">x3 unités</p>
</div>
</div>
<p className="text-sm font-medium text-neutral-900">3 000 F</p>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-700">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Poulet braisé</p>
<p className="text-xs text-neutral-500">x1 unité</p>
</div>
</div>
<p className="text-sm font-medium text-neutral-900">5 000 F</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-red-50 rounded-xl p-3 border border-red-100">
<p className="text-xs text-red-600 font-medium mb-1">Pertes</p>
<p className="text-sm font-semibold text-red-700">2 Bouteilles</p>
</div>
<div className="bg-blue-50 rounded-xl p-3 border border-blue-100">
<p className="text-xs text-blue-600 font-medium mb-1">Stock bas</p>
<p className="text-sm font-semibold text-blue-700">Flag (2 casiers)</p>
</div>
</div>
<div className="mt-auto">
<button className="w-full bg-orange-600 text-white rounded-xl py-3 text-sm font-medium flex justify-center items-center gap-2 shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
                                Nouvelle Vente
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">La gestion sur cahier, c'est fini.</h2>
<p className="text-base text-neutral-500">En tant que propriétaire, vous faites face à des défis tous les jours. L'argent disparaît sans trace et le stock ne correspond jamais à la caisse.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
<div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:notebook-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Cahiers illisibles ou perdus</h3>
<p className="text-sm text-neutral-500">Les ratures, les oublis et les pages arrachées rendent impossible le calcul réel de vos bénéfices à la fin de la semaine.</p>
</div>
<div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
<div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Bouteilles disparues</h3>
<p className="text-sm text-neutral-500">Consommations non payées, bouteilles offertes sans votre accord ou casses cachées. Les pertes s'accumulent silencieusement.</p>
</div>
<div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
<div className="w-12 h-12 rounded-xl bg-neutral-200 text-neutral-700 flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Obligation d'être sur place</h3>
<p className="text-sm text-neutral-500">Vous devez être présent physiquement pour surveiller vos employés, limitant votre liberté et la gestion d'autres affaires.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="fonctionnalites">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Tout votre business, dans votre poche.</h2>
<p className="text-base text-neutral-500">MAQIS a été pensé spécifiquement pour la réalité des maquis et petits restaurants africains. Simple, rapide et efficace.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Gestion des stocks simplifiée</h3>
<p className="text-sm text-neutral-500 mb-6">Gérez vos entrées par casiers ou par unités. Recevez des alertes quand une boisson est presque épuisée pour ne jamais rater une vente.</p>
</div>
<div className="mt-auto bg-neutral-50 rounded-xl p-4 border border-neutral-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="solar:bottle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-neutral-700">Castel 65cl</span>
</div>
<span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-700 rounded-md">Stock bas (5 unités)</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Caisse enregistreuse rapide</h3>
<p className="text-sm text-neutral-500 mb-6">Une interface avec de gros boutons pour vos serveurs. Ils enregistrent les ventes en deux clics, évitant les erreurs de calcul.</p>
</div>
<div className="mt-auto grid grid-cols-3 gap-2">
<div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3 text-center">
<p className="text-xs text-neutral-600 font-medium">Bock 65cl</p>
</div>
<div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3 text-center">
<p className="text-xs text-neutral-600 font-medium">Flag</p>
</div>
<div className="bg-neutral-50 border border-neutral-100 rounded-lg p-3 text-center">
<p className="text-xs text-neutral-600 font-medium">Guinness</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Rapports envoyés sur WhatsApp</h3>
<p className="text-sm text-neutral-500 mb-6">Recevez votre bilan de la journée directement sur votre téléphone chaque soir. Recette, dépenses, et bénéfice net.</p>
</div>
<div className="mt-auto flex items-center gap-3 bg-green-50 border border-green-100 text-green-800 p-3 rounded-xl">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
<p className="text-sm font-medium">Bilan du jour envoyé à 23h00</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">Traçabilité des pertes et crédits</h3>
<p className="text-sm text-neutral-500 mb-6">Enregistrez les bouteilles cassées, les consommations offertes au staff ou les clients à crédit pour justifier chaque écart de stock.</p>
</div>
<div className="mt-auto space-y-2">
<div className="flex justify-between items-center text-sm border-b border-neutral-100 pb-2">
<span className="text-neutral-500">Casse (Serveur)</span>
<span className="font-medium text-neutral-900">1x Beaufort</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-500">Crédit (Client VIP)</span>
<span className="font-medium text-neutral-900">10 000 FCFA</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="comment-ca-marche">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Prêt à utiliser en 5 minutes</h2>
<p className="text-base text-neutral-500">Pas besoin d'être un expert en informatique. L'application est conçue pour être aussi simple à utiliser que WhatsApp.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-neutral-100 -z-10"></div>
<div className="relative bg-white pt-8">
<div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-medium mx-auto mb-6 ring-8 ring-white">1</div>
<h3 className="text-lg font-medium text-neutral-900 text-center mb-2">Créez votre carte</h3>
<p className="text-sm text-neutral-500 text-center">Ajoutez vos boissons, vos plats et fixez vos prix. C'est votre menu numérique.</p>
</div>
<div className="relative bg-white pt-8">
<div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-lg font-medium mx-auto mb-6 ring-8 ring-white">2</div>
<h3 className="text-lg font-medium text-neutral-900 text-center mb-2">Entrez votre stock</h3>
<p className="text-sm text-neutral-500 text-center">Renseignez le nombre de casiers et bouteilles que vous avez actuellement dans vos frigos.</p>
</div>
<div className="relative bg-white pt-8">
<div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-lg font-medium mx-auto mb-6 ring-8 ring-white shadow-lg shadow-orange-200">3</div>
<h3 className="text-lg font-medium text-neutral-900 text-center mb-2">Encaissez et surveillez</h3>
<p className="text-sm text-neutral-500 text-center">Laissez vos serveurs enregistrer les ventes. Surveillez la recette en direct depuis chez vous.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/50 border-y border-orange-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-orange-300 mb-6" icon="solar:quote-right-linear" width="48"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-8 leading-snug">
                "Avant MAQIS, je perdais l'équivalent de 3 casiers par semaine sans savoir comment. Aujourd'hui, je connais mon bénéfice au franc près tous les soirs, sans me déplacer."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">

<svg className="w-full h-full text-neutral-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div className="text-left">
<p className="text-base font-medium text-neutral-900">Kouassi A.</p>
<p className="text-sm text-neutral-500">Gérant de 2 maquis à Yopougon</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="tarifs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Un investissement vite rentabilisé</h2>
<p className="text-base text-neutral-500">Le prix de l'abonnement est souvent payé par l'argent que vous ne perdrez plus grâce à notre système.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm">
<h3 className="text-lg font-medium text-neutral-900 mb-2">Petit Maquis</h3>
<p className="text-sm text-neutral-500 mb-6">Pour un seul point de vente avec un gérant.</p>
<div className="mb-6">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">5 000 F</span>
<span className="text-sm text-neutral-500">/mois</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-600">
<li className="flex items-center gap-3"><iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon> 1 Point de vente</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon> Gestion des stocks de base</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon> Historique des ventes (30 jours)</li>
</ul>
<a className="block w-full py-3 px-4 bg-neutral-50 text-neutral-900 text-center text-sm font-medium rounded-xl border border-neutral-200 hover:bg-neutral-100 transition-colors" href="#">Choisir ce plan</a>
</div>

<div className="bg-neutral-900 rounded-3xl p-8 border border-neutral-800 shadow-xl relative scale-105 md:-mt-4 md:-mb-4 z-10">
<div className="absolute top-0 right-8 transform -translate-y-1/2">
<span className="bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Le plus choisi</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-400 mb-6">L'outil complet pour sécuriser vos revenus.</p>
<div className="mb-6">
<span className="text-3xl font-semibold tracking-tight text-white">10 000 F</span>
<span className="text-sm text-neutral-400">/mois</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> 1 Point de vente</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Stocks + Alertes rupture</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Gestion des pertes et crédits</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Rapports auto par WhatsApp</li>
<li className="flex items-center gap-3"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Accès serveur limité</li>
</ul>
<a className="block w-full py-3 px-4 bg-orange-600 text-white text-center text-sm font-medium rounded-xl hover:bg-orange-500 transition-colors" href="#">Commencer l'essai gratuit</a>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm">
<h3 className="text-lg font-medium text-neutral-900 mb-2">Réseau</h3>
<p className="text-sm text-neutral-500 mb-6">Pour les entrepreneurs avec plusieurs affaires.</p>
<div className="mb-6">
<span className="text-3xl font-semibold tracking-tight text-neutral-900">Sur devis</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-neutral-600">
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Multi-points de vente</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Transferts de stock</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Tableau de bord centralisé</li>
</ul>
<a className="block w-full py-3 px-4 bg-white text-neutral-900 text-center text-sm font-medium rounded-xl border border-neutral-200 hover:bg-neutral-50 transition-colors" href="#">Nous contacter</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-orange-600 rounded-full blur-[100px] opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Dormez sur vos deux oreilles.</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">Rejoignez des centaines de gérants qui ont arrêté de perdre de l'argent. Essayez MAQIS gratuitement pendant 14 jours, sans engagement.</p>
<a className="inline-flex bg-orange-600 text-white px-8 py-4 rounded-full text-base font-medium text-center hover:bg-orange-500 transition-colors items-center justify-center gap-2" href="#">
                Créer mon compte maintenant
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="text-sm text-neutral-500 mt-4">Aucune carte de crédit requise.</p>
</div>
</section>

<footer className="bg-white py-12 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-900 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:cup-hot-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-lg text-neutral-900">MAQIS</span>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Conditions d'utilisation</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Confidentialité</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Assistance WhatsApp</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Connexion Gérant</a>
</div>
<p className="text-sm text-neutral-400">© 2023 MAQIS. Tous droits réservés.</p>
</div>
</footer>

    </>
  );
}
