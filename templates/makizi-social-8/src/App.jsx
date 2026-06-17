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
      

<header className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
<span className="text-emerald-400 text-sm font-semibold tracking-tight">MZ</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">Makizi</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
<a className="hover:text-emerald-300 transition-colors" href="#hero">Accueil</a>
<a className="hover:text-emerald-300 transition-colors" href="#features">Fonctionnalités</a>
<a className="hover:text-emerald-300 transition-colors" href="#pricing">Tarifs</a>
<a className="hover:text-emerald-300 transition-colors" href="#sellers">Pour les vendeurs</a>
<a className="hover:text-emerald-300 transition-colors" href="#download">Télécharger</a>
<a className="hover:text-emerald-300 transition-colors" href="#support">Support</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full border border-slate-700 text-xs font-medium text-slate-200 hover:border-slate-500 hover:text-white transition-all">
          Se connecter
        </button>
<button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500 text-xs font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 shadow-sm shadow-emerald-500/40 transition-all">
          Créer ma boutique
          <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-slate-900/80 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 pt-10 pb-16" id="hero">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-medium text-emerald-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Commerce social nouvelle génération
          </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Vendez. Achetez. Partout. <span className="text-emerald-400">En un clic.</span>
</h1>
<p className="text-sm sm:text-base text-slate-300 max-w-xl">
            La première plateforme de commerce social inspirée de TikTok. Crée ta boutique en 1 minute, vend en vidéo et encaisse directement via Wave, Orange Money, Free et plus.
          </p>

<div className="flex flex-wrap items-center gap-3 pt-1">
<button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-xs sm:text-sm font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/40 transition-all">
              Créer ma boutique
              <svg className="w-4 h-4" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-slate-700 bg-slate-900/60 text-xs sm:text-sm font-medium text-slate-100 hover:border-slate-500 hover:bg-slate-900 transition-all">
<svg className="w-4 h-4" data-lucide="smartphone" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Télécharger l’app
            </button>
</div>

<div className="pt-4 flex flex-col gap-3">
<div className="flex items-center gap-3 text-[11px] text-slate-400">
<div className="flex -space-x-2">
<img alt="Seller 1" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Seller 2" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Seller 3" className="h-7 w-7 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<div>
<span className="font-semibold text-slate-100">1 200+ vendeurs</span> déjà actifs sur Makizi.
              </div>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Paiements sécurisés &amp; vérifiés.
            </div>
</div>
</div>

<div className="relative">

<div className="absolute -top-10 -right-10 h-56 w-56 bg-emerald-500/20 blur-3xl rounded-full"></div>
<div className="relative flex flex-col items-center lg:items-end gap-6">

<div className="w-full max-w-sm rounded-3xl border border-slate-800 bg-slate-900/60 shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center">
<span className="text-[10px] font-semibold tracking-tight text-emerald-300">MZ</span>
</div>
                  Aperçu de l’app
                </div>
<button className="text-[10px] px-2 py-1 rounded-full bg-slate-800/80 text-slate-300 hover:bg-slate-700/90 transition">
                  Demo
                </button>
</div>
<div className="aspect-[9/18] bg-slate-950 relative flex items-center justify-center">
<img alt="Mockup vidéo Makizi" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="relative z-10 flex flex-col items-center gap-2 rounded-2xl bg-slate-950/70 border border-slate-700/80 px-4 py-3 text-center hover:border-emerald-400/60 hover:bg-slate-900/90 transition-all">
<svg className="w-6 h-6 text-emerald-400" data-lucide="play" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span className="text-[11px] text-slate-200 font-medium">Voir comment les vendeurs utilisent Makizi</span>
</button>
</div>
</div>

<div className="w-full max-w-sm rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3">
<div className="flex items-center justify-between mb-2">
<p className="text-[11px] font-medium text-slate-300">Ils encaisseront vos paiements :</p>
<span className="text-[10px] text-slate-500">Wave, OM, Free &amp; plus</span>
</div>
<div className="grid grid-cols-4 gap-3 items-center">
<div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-950 border border-slate-800/80">
<span className="text-[10px] font-semibold tracking-tight text-sky-300">WAVE</span>
</div>
<div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-950 border border-slate-800/80">
<span className="text-[10px] font-semibold tracking-tight text-orange-300">OM</span>
</div>
<div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-950 border border-slate-800/80">
<span className="text-[10px] font-semibold tracking-tight text-indigo-300">STRIPE</span>
</div>
<div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-950 border border-slate-800/80">
<span className="text-[10px] font-semibold tracking-tight text-emerald-300">FREE</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="why">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Pourquoi Makizi ?</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              3 raisons qui changent ta façon de vendre.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="group relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5 hover:border-emerald-400/60 hover:bg-slate-900/80 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/40">
<svg className="w-4 h-4 text-emerald-400" data-lucide="video" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/40">Vidéo-first</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
              Vendre en vidéo &amp; photo
            </h3>
<p className="text-[13px] text-slate-300 mb-4">
              Transforme chaque vidéo en boutique. Publie des vidéos courtes comme sur TikTok, ajoute le bouton acheter et encaisse directement.
            </p>
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>Swipe, like, acheter en un clic.</span>
<svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-300 transition-colors" data-lucide="chevron-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5 hover:border-emerald-400/60 hover:bg-slate-900/80 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/40">
<svg className="w-4 h-4 text-emerald-400" data-lucide="zap" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">-60s setup</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
              Boutique en 1 minute
            </h3>
<p className="text-[13px] text-slate-300 mb-4">
              Crée ton compte, choisis un nom, ajoute ton premier produit et commence à vendre. Sans site web, sans développeur, sans carte bancaire.
            </p>
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>Onboarding ultra guidé.</span>
<svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-300 transition-colors" data-lucide="chevron-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>

<div className="group relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5 hover:border-emerald-400/60 hover:bg-slate-900/80 transition-all">
<div className="flex items-center justify-between mb-4">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/40">
<svg className="w-4 h-4 text-emerald-400" data-lucide="boxes" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">Tout-en-un</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
              Gestion produits, commandes, clients
            </h3>
<p className="text-[13px] text-slate-300 mb-4">
              Suis toutes tes ventes, tes clients et tes stocks sur un dashboard unique. Notifications en temps réel pour chaque commande.
            </p>
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>On s’occupe de la complexité.</span>
<svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-300 transition-colors" data-lucide="chevron-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="how">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Comment ça marche ?</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Un parcours vendeur ultra simple.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Devenir vendeur
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid md:grid-cols-5 gap-4 md:gap-3 lg:gap-5">

<div className="flex md:flex-col items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
              1
            </div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Crée ton compte</h3>
<p className="text-[12px] text-slate-300">Inscris-toi avec ton numéro ou ton email. Aucun document complexe.</p>
</div>
</div>
<div className="flex md:flex-col items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
              2
            </div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Choisis une formule</h3>
<p className="text-[12px] text-slate-300">Commence avec Start (gratuit) ou passe directement à Pro ou Business.</p>
</div>
</div>
<div className="flex md:flex-col items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
              3
            </div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Ajoute tes vidéos / photos</h3>
<p className="text-[12px] text-slate-300">Filme ton produit, ajoute le prix, la description et publie.</p>
</div>
</div>
<div className="flex md:flex-col items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
              4
            </div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Gère tes commandes</h3>
<p className="text-[12px] text-slate-300">Tout est centralisé dans ton dashboard : commandes, messages, clients.</p>
</div>
</div>
<div className="flex md:flex-col items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="h-7 w-7 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold text-emerald-200">
              5
            </div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Encaisse en un clic</h3>
<p className="text-[12px] text-slate-300">Wave, Orange Money, Free, cartes bancaires… tout est déjà intégré.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="ui-showcase">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">

<div className="space-y-4">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Aperçus de l’application</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-2">
            Une interface moderne, rapide et intuitive.
          </h2>
<p className="text-sm text-slate-300 max-w-md">
            De la page d’accueil type feed TikTok jusqu’au dashboard vendeur avancé, chaque écran est pensé pour convertir tes vues en ventes.
          </p>
<ul className="space-y-2 text-[13px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Page Accueil (feed produits en vidéo)
            </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Marché (marketplace intelligente)
            </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Fiche produit avec vidéo &amp; CTA instantanés
            </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Panier, paiement sécurisé, suivi des commandes
            </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Dashboard vendeur &amp; statistiques détaillées
            </li>
</ul>
<button className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="absolute -top-10 -left-6 h-40 w-40 bg-emerald-500/20 blur-3xl rounded-full"></div>
<div className="relative w-full max-w-md flex items-center justify-center">

<div className="absolute -right-8 -top-4 w-40 sm:w-44 rounded-3xl border border-slate-800 bg-slate-950/70 p-3 rotate-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
<p className="text-[11px] text-slate-300 mb-2 font-medium">Dashboard vendeur</p>
<img alt="Dashboard Makizi" className="rounded-2xl object-cover h-32 w-full" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -left-8 -bottom-4 w-40 sm:w-44 rounded-3xl border border-slate-800 bg-slate-950/70 p-3 -rotate-6 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
<p className="text-[11px] text-slate-300 mb-2 font-medium">Fiche produit vidéo</p>
<img alt="Product page Makizi" className="rounded-2xl object-cover h-32 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="relative w-52 sm:w-60 rounded-[2rem] border border-slate-700 bg-slate-950 shadow-[0_24px_70px_rgba(0,0,0,0.8)] overflow-hidden">
<div className="h-8 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-950/80">
<span className="text-[10px] text-slate-300">Feed produits</span>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-red-400/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
</div>
</div>
<div className="bg-slate-950">
<img alt="Feed Makizi" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Fonctionnalités</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Tout ce dont tu as besoin pour vendre à grande échelle.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg">🛒</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Côté Acheteur</h3>
</div>
<ul className="space-y-2 text-[13px] text-slate-300">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Marketplace intelligente
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="shield-check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Paiements sécurisés
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="stars" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Avis &amp; recommandations
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="video" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Vidéo-first shopping
              </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg">🛍️</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Côté Vendeur</h3>
</div>
<ul className="space-y-2 text-[13px] text-slate-300">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="zap" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Boutique instantanée
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="upload-cloud" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Upload vidéo / photo
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="layout-dashboard" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Dashboard complet
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="package" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Gestion des commandes
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="infinity" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Catalogue illimité
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="badge-percent" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Promotions &amp; coupons
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="truck" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Livraison gérée ou personnelle
              </li>
</ul>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<div className="flex items-center gap-2 mb-4">
<span className="text-lg">📊</span>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Côté Business</h3>
</div>
<ul className="space-y-2 text-[13px] text-slate-300">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Statistiques détaillées
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Segmentation client
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="activity" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Données en temps réel
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Tarifs</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Passe de 0 à Pro en quelques clics.
            </h2>
<p className="text-sm text-slate-300 mt-1">
              Commence gratuitement. Upgrade uniquement quand tes ventes décollent.
            </p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Start</h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">Pour débuter</span>
</div>
<p className="text-xs text-slate-300 mb-3">
              Teste Makizi sans risque. Idéal pour lancer ta première boutique.
            </p>
<div className="mb-4">
<span className="text-2xl font-semibold tracking-tight text-slate-50">0</span>
<span className="text-xs text-slate-400 ml-1">FCFA / mois</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-300 mb-5">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                10 produits max
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Paiements Wave &amp; OM
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Support par email
              </li>
</ul>
<button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
              Créer ma boutique
            </button>
</div>

<div className="flex flex-col rounded-2xl border border-emerald-500/60 bg-slate-950/80 p-5 shadow-[0_22px_60px_rgba(16,185,129,0.25)] relative overflow-hidden">
<div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-3 relative">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Pro</h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/60">Le plus populaire</span>
</div>
<p className="text-xs text-slate-300 mb-3 relative">
              Pour les vendeurs qui veulent vivre de leur boutique sociale.
            </p>
<div className="mb-4 relative">
<span className="text-2xl font-semibold tracking-tight text-slate-50">4 900</span>
<span className="text-xs text-slate-400 ml-1">FCFA / mois</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-300 mb-5 relative">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Catalogue illimité
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Coupons &amp; promotions avancées
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Statistiques détaillées
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Support prioritaire
              </li>
</ul>
<button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-xs font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 transition-all">
              Créer ma boutique
              <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Business</h3>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">Marques &amp; réseaux</span>
</div>
<p className="text-xs text-slate-300 mb-3">
              Pensé pour les équipes, les marques établies et les réseaux de boutiques.
            </p>
<div className="mb-4">
<span className="text-2xl font-semibold tracking-tight text-slate-50">14 900</span>
<span className="text-xs text-slate-400 ml-1">FCFA / mois</span>
</div>
<ul className="space-y-1.5 text-[12px] text-slate-300 mb-5">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Multi-boutiques &amp; équipes
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                API catalogue &amp; intégrations
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Gestion avancée des rôles
              </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
                Accompagnement dédié
              </li>
</ul>
<button className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
              Créer ma boutique
            </button>
</div>
</div>

<div className="mt-6 flex justify-end">
<a className="inline-flex items-center gap-1.5 text-[12px] text-slate-400 hover:text-emerald-300 transition-colors" href="#pricing-page">
            Voir le comparatif détaillé des plans
            <svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</a>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="social-proof">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Ils vendent déjà avec Makizi</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              La preuve par les chiffres et les résultats.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<p className="text-xs text-slate-400 mb-1">Vendeurs actifs</p>
<p className="text-xl font-semibold tracking-tight text-slate-50 mb-1">1 200+</p>
<p className="text-[12px] text-slate-400">Des créateurs, boutiques physiques et marques locales.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<p className="text-xs text-slate-400 mb-1">Commandes passées</p>
<p className="text-xl font-semibold tracking-tight text-slate-50 mb-1">35 000+</p>
<p className="text-[12px] text-slate-400">Des transactions sécurisées, suivies de bout en bout.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<p className="text-xs text-slate-400 mb-1">Note moyenne vendeurs</p>
<p className="text-xl font-semibold tracking-tight text-slate-50 mb-1 flex items-center gap-1">
                4.8
                <span className="text-amber-400 text-sm">★★★★★</span>
</p>
<p className="text-[12px] text-slate-400">Basé sur les avis vérifiés des boutiques Makizi.</p>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col">
<div className="flex items-center gap-3 mb-3">
<img alt="ASN Cosmetics" className="h-10 w-10 rounded-full object-cover border border-slate-800" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50">ASN Cosmetics</p>
<p className="text-[11px] text-slate-400">Boutique beauté &amp; cosmétique</p>
</div>
</div>
<p className="text-[12px] text-slate-300 mb-3">
              « Avec Makizi, nos vidéos produits sont devenues notre meilleur vendeur. En 3 mois, nous avons multiplié par 3 nos commandes sans changer notre équipe. »
            </p>
<p className="text-[11px] text-slate-400 mb-4">Résultat : +220 % de ventes, +1 500 clients fidélisés.</p>
<button className="mt-auto inline-flex items-center gap-2 text-[12px] text-emerald-300 hover:text-emerald-200 transition-colors">
              Voir l’étude de cas
              <svg className="w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="business">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Pour les entreprises</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
            Construisez votre propre expérience de commerce social.
          </h2>
<p className="text-sm text-slate-300 mb-4">
            Makizi s’adapte aussi aux marques, retailers et plateformes qui veulent lancer leur marketplace en marque blanche ou connecter leur catalogue existant.
          </p>
<ul className="space-y-2 text-[13px] text-slate-300">
<li className="flex items-start gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300 mt-[3px]" data-lucide="code-2" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span><span className="font-medium text-slate-100">API catalogue</span> pour synchroniser produits, stocks et prix en temps réel.</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300 mt-[3px]" data-lucide="layout-template" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span><span className="font-medium text-slate-100">Marketplace en marque blanche</span> pour lancer votre propre Makizi sous votre logo.</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300 mt-[3px]" data-lucide="briefcase" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span><span className="font-medium text-slate-100">Services Melokaan</span> : branding, vidéo, marketing de performance sur-mesure.</span>
</li>
</ul>
<div className="mt-4 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-xs font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 transition-all">
              Parler à l’équipe Makizi
              <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
              Télécharger la plaquette
              <svg className="w-3.5 h-3.5" data-lucide="download" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-4">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-slate-300 font-medium">Solution B2B Makizi</p>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">API, SSO, support dédié</span>
</div>
<div className="grid sm:grid-cols-3 gap-4 text-[12px] text-slate-300">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-[11px] text-slate-400 mb-1">Retailers</p>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">+40 %</p>
<p className="text-[11px] text-slate-400">de conversion sur les fiches produits vidéo.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-[11px] text-slate-400 mb-1">Marketplaces</p>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">-25 %</p>
<p className="text-[11px] text-slate-400">de coûts d’intégration grâce à l’API unifiée.</p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-[11px] text-slate-400 mb-1">Marques</p>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">+2.3x</p>
<p className="text-[11px] text-slate-400">de ROAS moyen sur les campagnes vidéo.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">FAQ</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Les questions que les vendeurs se posent.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid lg:grid-cols-4 gap-6">

<div className="lg:col-span-1 space-y-2 text-[12px] text-slate-300">
<p className="text-xs font-medium text-slate-400 mb-2">Thèmes</p>
<button className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-left">
<span>Sécurité</span>
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="lock" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
<span>Paiements</span>
<svg className="w-3.5 h-3.5 text-slate-400" data-lucide="wallet-cards" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
<span>Livraison</span>
<svg className="w-3.5 h-3.5 text-slate-400" data-lucide="truck" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
<span>Commissions</span>
<svg className="w-3.5 h-3.5 text-slate-400" data-lucide="percent" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<button className="w-full flex justify-between items-center px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-600 transition-colors">
<span>Fonctionnement</span>
<svg className="w-3.5 h-3.5 text-slate-400" data-lucide="help-circle" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="lg:col-span-3 space-y-3">

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Comment Makizi sécurise les paiements ?</p>
<p className="text-[12px] text-slate-300">
                    Nous utilisons des partenaires de paiement agréés (Wave, Orange Money, Free, Stripe) et ne conservons pas les données bancaires sensibles.
                    Chaque transaction est chiffrée et vérifiée.
                  </p>
</div>
<svg className="w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Makizi prend-il une commission sur les ventes ?</p>
<p className="text-[12px] text-slate-300">
                    Le plan Start est gratuit avec une légère commission par vente. Les plans Pro et Business réduisent cette commission et ajoutent des fonctionnalités premium.
                  </p>
</div>
<svg className="w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Qui gère la livraison ?</p>
<p className="text-[12px] text-slate-300">
                    Tu peux gérer la livraison toi-même ou connecter les partenaires logistiques recommandés par Makizi dans certaines zones.
                  </p>
</div>
<svg className="w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Combien de temps pour être opérationnel ?</p>
<p className="text-[12px] text-slate-300">
                    En moins de 10 minutes, tu peux créer ton compte, ajouter ton premier produit et recevoir ta première commande.
                  </p>
</div>
<svg className="w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="sellers">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Pour les vendeurs</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
            Transforme ton audience en boutique en ligne.
          </h2>
<p className="text-sm text-slate-300 mb-4">
            Tu as déjà des followers sur TikTok, Instagram ou WhatsApp ? Makizi te permet de les convertir en clients, sans changer ta façon de créer du contenu.
          </p>
<ul className="space-y-2 text-[13px] text-slate-300 mb-4">
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="megaphone" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Boutiques optimisées pour les réseaux sociaux
            </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="link" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Un lien unique pour toutes tes vidéos
            </li>
<li className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="messages-square" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Messages &amp; commandes centralisés
            </li>
</ul>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-xs font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 transition-all mb-3">
            Je crée ma boutique maintenant
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
<p className="text-[11px] text-slate-400">Aucun engagement. Tu peux arrêter ou changer de plan à tout moment.</p>
</div>

<div className="space-y-4">
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex gap-4 items-center">
<div className="relative flex-shrink-0">
<img alt="Demo Makizi" className="h-28 w-40 rounded-xl object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute inset-0 flex items-center justify-center">
<span className="h-8 w-8 rounded-full bg-slate-950/80 border border-slate-700 flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="play" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</span>
</button>
</div>
<div className="space-y-1">
<p className="text-sm font-semibold tracking-tight text-slate-50">Voir la démo complète</p>
<p className="text-[12px] text-slate-300">Une vidéo pour comprendre comment passer de 0 à tes 100 premières commandes.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
<div className="flex items-center justify-between mb-3">
<p className="text-xs text-slate-300 font-medium">Success stories</p>
<button className="text-[11px] text-emerald-300 hover:text-emerald-200 flex items-center gap-1">
                Tout voir
                <svg className="w-3 h-3" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<img alt="Seller" className="h-9 w-9 rounded-full object-cover border border-slate-800" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-[13px] font-medium text-slate-50">Boutique streetwear Dakar</p>
<p className="text-[11px] text-slate-400">+180 commandes / mois depuis Makizi</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="Seller" className="h-9 w-9 rounded-full object-cover border border-slate-800" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<p className="text-[13px] font-medium text-slate-50">Créatrice bijoux Abidjan</p>
<p className="text-[11px] text-slate-400">x3 sur le panier moyen en 2 mois</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="features-page">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Détails</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              À l’intérieur de Makizi.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Créer ma boutique
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="grid lg:grid-cols-2 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col sm:flex-row gap-4">
<div className="flex-1">
<p className="text-xs font-medium text-emerald-300 mb-1">Vidéo &amp; feed</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Un feed inspiré de TikTok, optimisé pour l’achat.</h3>
<p className="text-[12px] text-slate-300 mb-2">
                Scroll infini, vidéos plein écran, boutons d’achat contextuels, stats de vues et conversions pour chaque contenu.
              </p>
<ul className="space-y-1 text-[11px] text-slate-300">
<li>• Bouton “Acheter maintenant” sur chaque vidéo</li>
<li>• Tracking des vues jusqu’à la commande</li>
<li>• Recommandations basées sur le comportement</li>
</ul>
</div>
<div className="flex-1">
<img alt="Vidéo feed" className="rounded-xl border border-slate-800 object-cover h-36 w-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col sm:flex-row gap-4">
<div className="flex-1">
<p className="text-xs font-medium text-emerald-300 mb-1">Marché</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Un marketplace qui met en avant tes produits.</h3>
<p className="text-[12px] text-slate-300 mb-2">
                Catégories, filtres, recommandations personnalisées et recherche ultra rapide.
              </p>
<ul className="space-y-1 text-[11px] text-slate-300">
<li>• Classement par popularité, conversion et qualité</li>
<li>• Mises en avant sponsorisées pour les pros</li>
<li>• Fiches produits optimisées mobile-first</li>
</ul>
</div>
<div className="flex-1">
<img alt="Marché" className="rounded-xl border border-slate-800 object-cover h-36 w-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col sm:flex-row gap-4">
<div className="flex-1">
<p className="text-xs font-medium text-emerald-300 mb-1">Panier &amp; paiement</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Un tunnel de conversion ultra court.</h3>
<p className="text-[12px] text-slate-300 mb-2">
                Du clic sur la vidéo à la confirmation de commande en quelques secondes.
              </p>
<ul className="space-y-1 text-[11px] text-slate-300">
<li>• Paiement en 1 clic avec les wallets locaux</li>
<li>• Sauvegarde des préférences clients</li>
<li>• Suivi de commande en temps réel</li>
</ul>
</div>
<div className="flex-1">
<img alt="Panier" className="rounded-xl border border-slate-800 object-cover h-36 w-full" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 flex flex-col sm:flex-row gap-4">
<div className="flex-1">
<p className="text-xs font-medium text-emerald-300 mb-1">Dashboard</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">Une vision claire de ton business.</h3>
<p className="text-[12px] text-slate-300 mb-2">
                Ventes, paniers abandonnés, performances des vidéos, meilleurs clients… tout est accessible en temps réel.
              </p>
<ul className="space-y-1 text-[11px] text-slate-300">
<li>• Graphiques par jour, semaine, mois</li>
<li>• Segmentation par produit, canal, campagne</li>
<li>• Export des données pour ton comptable</li>
</ul>
</div>
<div className="flex-1">
<img alt="Dashboard" className="rounded-xl border border-slate-800 object-cover h-36 w-full" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="pricing-page">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Tarifs Makizi</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Compare les plans et choisis celui qui te fait gagner du temps.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-xs font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 transition-all">
            Passer à Pro
            <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
<table className="min-w-full text-left text-[12px] text-slate-300">
<thead className="border-b border-slate-800 bg-slate-950">
<tr>
<th className="px-4 py-3 text-xs font-medium text-slate-400">Fonctionnalité</th>
<th className="px-4 py-3 text-xs font-medium text-slate-200">Start</th>
<th className="px-4 py-3 text-xs font-medium text-emerald-300">Pro</th>
<th className="px-4 py-3 text-xs font-medium text-slate-200">Business</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-slate-900/70">
<td className="px-4 py-2">Produits max</td>
<td className="px-4 py-2">10</td>
<td className="px-4 py-2 text-emerald-200">Illimités</td>
<td className="px-4 py-2 text-emerald-200">Illimités</td>
</tr>
<tr className="border-b border-slate-900/70">
<td className="px-4 py-2">Statistiques détaillées</td>
<td className="px-4 py-2">Basique</td>
<td className="px-4 py-2 text-emerald-200">Avancé</td>
<td className="px-4 py-2 text-emerald-200">Complet + export</td>
</tr>
<tr className="border-b border-slate-900/70">
<td className="px-4 py-2">Coupons &amp; promotions</td>
<td className="px-4 py-2">Non</td>
<td className="px-4 py-2 text-emerald-200">Oui</td>
<td className="px-4 py-2 text-emerald-200">Oui</td>
</tr>
<tr className="border-b border-slate-900/70">
<td className="px-4 py-2">Multi-boutiques</td>
<td className="px-4 py-2">Non</td>
<td className="px-4 py-2">Non</td>
<td className="px-4 py-2 text-emerald-200">Oui</td>
</tr>
<tr className="border-b border-slate-900/70">
<td className="px-4 py-2">Support</td>
<td className="px-4 py-2">Email</td>
<td className="px-4 py-2 text-emerald-200">Chat prioritaire</td>
<td className="px-4 py-2 text-emerald-200">Manager dédié</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16 bg-slate-950" id="download">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Télécharger l’app</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
            Makizi toujours dans ta poche.
          </h2>
<p className="text-sm text-slate-300 mb-4">
            Gère ta boutique, tes commandes et tes paiements depuis ton smartphone. Disponible sur iOS et Android.
          </p>
<div className="flex flex-wrap items-center gap-3 mb-4">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
<svg className="w-4 h-4" data-lucide="apple" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              App Store
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
<svg className="w-4 h-4" data-lucide="smartphone" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
              Play Store
            </button>
</div>
<div className="flex items-center gap-4">
<div className="h-24 w-24 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
<span className="text-[11px] text-slate-400">QR Code</span>
</div>
<p className="text-[12px] text-slate-300">
              Scanne le QR code pour télécharger directement l’app sur ton téléphone ou partage-le à ton équipe.
            </p>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="absolute -bottom-10 -right-10 h-40 w-40 bg-emerald-500/20 blur-3xl rounded-full"></div>
<div className="relative flex gap-4 items-end">
<div className="w-36 sm:w-40 rounded-[1.7rem] border border-slate-700 bg-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.8)] overflow-hidden translate-y-4">
<img alt="App Makizi 1" className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="w-40 sm:w-44 rounded-[1.9rem] border border-slate-700 bg-slate-950 shadow-[0_20px_70px_rgba(0,0,0,0.9)] overflow-hidden">
<img alt="App Makizi 2" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 py-12 sm:py-16" id="support">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300 mb-1">Support &amp; aide</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
              Un centre d’aide pensé pour les vendeurs.
            </h2>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-xs font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-200 transition-all">
            Contacter le support
            <svg className="w-3.5 h-3.5" data-lucide="message-circle" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<p className="text-xs font-medium text-slate-300 mb-2">Centre d’aide</p>
<p className="text-[12px] text-slate-300 mb-3">
              Articles, guides vidéo et tutoriels pour te guider pas à pas.
            </p>
<button className="inline-flex items-center gap-1.5 text-[12px] text-emerald-300 hover:text-emerald-200">
              Ouvrir le centre d’aide
              <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>

<div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
<p className="text-xs font-medium text-slate-300 mb-3">Formulaire de contact</p>
<form className="grid sm:grid-cols-2 gap-3 text-[12px] text-slate-200">
<div className="space-y-1">
<label className="block text-[11px] text-slate-400">Nom</label>
<input className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-[12px] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="Ton nom" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-[11px] text-slate-400">Email</label>
<input className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-[12px] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="ton@email.com" type="email"/>
</div>
<div className="space-y-1 sm:col-span-2">
<label className="block text-[11px] text-slate-400">Message</label>
<textarea className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-[12px] text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400" placeholder="Explique-nous ton besoin ou ton problème." rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex justify-between items-center pt-1">
<p className="text-[11px] text-slate-500">Temps de réponse moyen : moins de 24h.</p>
<button className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500 text-[11px] font-semibold tracking-tight text-slate-950 hover:bg-emerald-400 transition-all" type="submit">
                  Envoyer
                  <svg className="w-3.5 h-3.5" data-lucide="send" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="grid sm:grid-cols-4 gap-6 text-[12px] text-slate-300">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
<span className="text-emerald-400 text-[11px] font-semibold tracking-tight">MZ</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-50">Makizi</span>
</div>
<p className="text-[11px] text-slate-400">
            Commerce social inspiré de TikTok, pensé pour l’Afrique et les vendeurs modernes.
          </p>
</div>
<div>
<p className="text-[11px] font-medium text-slate-400 mb-2">Produit</p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300 transition-colors" href="#hero">Accueil</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#features-page">Fonctionnalités</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#pricing-page">Tarifs</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#sellers">Pour les vendeurs</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-medium text-slate-400 mb-2">Ressources</p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300 transition-colors" href="#">Blog &amp; guides</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#support">Centre d’aide</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<p className="text-[11px] font-medium text-slate-400 mb-2">Légal &amp; contact</p>
<ul className="space-y-1.5">
<li><a className="hover:text-emerald-300 transition-colors" href="#">Mentions légales</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-emerald-300 transition-colors" href="mailto:support@makizi.com">support@makizi.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-slate-900 pt-4 text-[11px] text-slate-500">
<p>© <span className="font-medium text-slate-300">Makizi</span> – Tous droits réservés.</p>
<div className="flex items-center gap-3">
<a className="hover:text-emerald-300 transition-colors flex items-center gap-1" href="#">
<svg className="w-3.5 h-3.5" data-lucide="instagram" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span>Instagram</span>
</a>
<a className="hover:text-emerald-300 transition-colors flex items-center gap-1" href="#">
<svg className="w-3.5 h-3.5" data-lucide="facebook" fill="none" stroke="currentColor" strokeWidth="1.5"></svg>
<span>Facebook</span>
</a>
<a className="hover:text-emerald-300 transition-colors flex items-center gap-1" href="#">
</a></div></div></div></footer>
    </>
  );
}
