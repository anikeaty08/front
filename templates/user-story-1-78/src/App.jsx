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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Stack Sans Headline"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},
colors: {
taupe: '#7e6c6c',
grapefruit: '#f87575',
powder: '#ffa9a3',
icy: '#b9e6ff',
cornflower: '#5c95ff',
surface: '#ffffff',
},
backgroundImage: {
'keepar-gradient': 'linear-gradient(135deg, #7e6c6c 0%, #f87575 25%, #ffa9a3 50%, #b9e6ff 75%, #5c95ff 100%)',
'keepar-mesh': 'radial-gradient(at 0% 0%, hsla(219, 100%, 68%, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, hsla(0, 90%, 72%, 0.1) 0px, transparent 50%)',
},
letterSpacing: {
tight: '-0.03em',
tighter: '-0.05em',
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(126, 108, 108, 0.07)',
'glow': '0 0 40px -10px rgba(92, 149, 255, 0.3)',
}
}
}
}



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
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none h-screen"></div>
<div className="fixed top-0 left-0 w-full h-full bg-keepar-mesh -z-10 opacity-60"></div>
<div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-icy/20 rounded-full blur-[120px] -z-10 mix-blend-multiply"></div>
<div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-powder/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 glass-panel border-b border-icy/30 transition-all duration-300">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-9 h-9 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-cornflower to-grapefruit rounded-xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="absolute inset-0 border border-cornflower/20 rounded-xl"></div>
<iconify-icon className="text-cornflower relative z-10" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-taupe">Keepar.</span>
</div>
<div className="hidden md:flex items-center gap-10 text-base font-normal text-taupe/80">
<a className="hover:text-cornflower transition-colors" href="#produits">Produits</a>
<a className="hover:text-cornflower transition-colors" href="#how">Fonctionnement</a>
<a className="hover:text-cornflower transition-colors" href="#features">Fonctionnalités</a>
</div>
<div className="flex items-center gap-5">
<a className="text-sm font-medium text-taupe hover:text-cornflower transition-colors hidden sm:block" href="#">Connexion</a>
<a className="px-5 py-2.5 bg-taupe text-white text-sm font-medium rounded-lg shadow-lg shadow-taupe/20 hover:bg-taupe/90 transition-all hover:scale-[1.02] border border-transparent" href="#">
                    Ouvrir un compte
                </a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 px-6 md:px-12 z-10">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="reveal inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-icy/60 shadow-sm mb-10">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-grapefruit opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-grapefruit"></span>
</span>
<span className="text-xs font-medium text-taupe uppercase tracking-widest">Nouvelle version 2.0</span>
</div>
<h1 className="reveal delay-100 text-6xl md:text-8xl font-medium tracking-tighter text-taupe leading-[0.95] mb-8 max-w-5xl">
                L'assurance <br className="hidden md:block"/>
<span className="relative inline-block px-2">
<span className="z-10 text-gradient font-semibold relative">intelligente</span>
<span className="absolute bottom-2 left-0 w-full h-4 bg-icy/30 -z-0 skew-x-12 rounded-sm"></span>
</span>
                pour tous.
            </h1>
<p className="reveal delay-200 text-taupe/80 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                Keepar centralise vos besoins de protection. Comparez les offres de nos partenaires et souscrivez en temps réel via notre algorithme prédictif.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="group px-8 py-4 bg-cornflower text-white text-base font-medium rounded-xl shadow-glow hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3">
<span className="">Lancer le comparateur</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white border border-powder/50 text-taupe text-base font-medium rounded-xl hover:bg-powder/5 transition-all hover:border-powder">
                    Découvrir les produits
                </button>
</div>
</div>
</section>

<section className="relative px-4 pb-16 z-10">
<div className="max-w-5xl mx-auto">
<div className="reveal delay-300 relative rounded-2xl border border-white bg-white/60 shadow-[0_20px_60px_-15px_rgba(126,108,108,0.1)] backdrop-blur-xl overflow-hidden p-2">
<div className="bg-white rounded-xl border border-icy/30 overflow-hidden h-full min-h-[400px]">
<div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white/80">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-icy/20 text-cornflower flex items-center justify-center">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-taupe tracking-tight">Tableau de bord</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
<iconify-icon className="text-taupe" icon="solar:bell-linear" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-powder to-grapefruit border-2 border-white shadow-sm"></div>
</div>
</div>
<div className="flex flex-col md:flex-row h-full">
<div className="hidden md:block w-64 border-r border-gray-50 bg-gray-50/30 p-4">
<div className="space-y-1">
<div className="px-3 py-2 bg-cornflower/10 text-cornflower rounded-lg text-xs font-medium flex items-center gap-3">
<iconify-icon icon="solar:files-linear" width="16"></iconify-icon>
                                    Comparatifs
                                </div>
<div className="px-3 py-2 text-taupe/60 hover:bg-gray-50 rounded-lg text-xs font-normal flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
                                    Portefeuille
                                </div>
</div>
<div className="mt-8 px-3">
<p className="text-[10px] font-medium text-taupe/40 uppercase tracking-wider mb-2">Actifs</p>
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-grapefruit"></div>
<span className="text-xs text-taupe">Auto (Tesla)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cornflower"></div>
<span className="text-xs text-taupe">Habitation</span>
</div>
</div>
</div>
<div className="flex-1 p-6 md:p-8 bg-white">
<div className="flex justify-between items-start mb-6">
<div className="">
<h2 className="text-xl font-medium text-taupe tracking-tight mb-1">Résultats pour Tesla Model 3</h2>
<p className="text-xs text-taupe/60 font-normal">3 offres correspondent à votre profil</p>
</div>
<button className="p-2 text-taupe/40 hover:text-cornflower transition-colors">
<iconify-icon icon="solar:filter-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-3">
<div className="group relative p-4 rounded-xl border border-cornflower/30 bg-gradient-to-r from-white to-icy/10 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="absolute top-0 right-0 px-3 py-1 bg-cornflower text-white text-[9px] font-medium uppercase rounded-bl-lg rounded-tr-lg">Keepar Choice</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center text-cornflower">
<iconify-icon className="" icon="solar:shield-star-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-base font-medium text-taupe">Formule Intégrale</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-icy/30 text-cornflower px-1.5 py-0.5 rounded border border-icy/50 font-normal">Tous risques</span>
<span className="text-[10px] text-taupe/50">Franchise 250€</span>
</div>
</div>
</div>
<div className="text-right pr-2">
<span className="block text-xl font-semibold text-taupe tracking-tight">42€<span className="text-xs font-normal text-taupe/60">/mois</span></span>
</div>
</div>
<div className="absolute left-[-12px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
<div className="w-6 h-6 bg-cornflower rounded-full flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white hover:border-powder/50 hover:bg-powder/5 transition-all cursor-pointer group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-taupe/60 group-hover:text-grapefruit transition-colors">
<iconify-icon className="" icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-base font-medium text-taupe">Formule Éco</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-gray-100 text-taupe/60 px-1.5 py-0.5 rounded border border-gray-200 font-normal">Tiers simple</span>
</div>
</div>
</div>
<div className="text-right pr-2">
<span className="block text-xl font-medium text-taupe/80 tracking-tight">29€<span className="text-xs font-normal text-taupe/60">/mois</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-icy/30 bg-white/30">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-taupe/40 uppercase tracking-widest mb-8">Ils nous font confiance</p>
<div className="marquee-container overflow-hidden relative">
<div className="flex items-center justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-2xl text-taupe"><iconify-icon className="text-cornflower" icon="solar:shield-bold"></iconify-icon> AXA</div>
<div className="flex items-center gap-2 font-semibold text-2xl text-taupe"><iconify-icon className="text-grapefruit" icon="solar:umbrella-bold"></iconify-icon> Allianz</div>
<div className="flex items-center gap-2 font-semibold text-2xl text-taupe"><iconify-icon className="text-powder" icon="solar:home-bold"></iconify-icon> Generali</div>
<div className="flex items-center gap-2 font-semibold text-2xl text-taupe"><iconify-icon className="text-cornflower" icon="solar:heart-bold"></iconify-icon> SwissLife</div>
<div className="flex items-center gap-2 font-semibold text-2xl text-taupe"><iconify-icon className="text-icy" icon="solar:car-bold"></iconify-icon> Direct</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12" id="produits">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-taupe tracking-tighter mb-4">Un univers de <br/><span className="text-cornflower">protection complète</span>.</h2>
<p className="text-taupe/70 text-xl font-light max-w-xl">Que ce soit pour votre mobilité ou votre foyer, nous avons négocié les meilleurs contrats.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative p-8 rounded-3xl bg-cornflower/5 border border-cornflower/20 overflow-hidden group hover:bg-cornflower/10 transition-colors">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white text-cornflower shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="" icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-taupe mb-2">Assurance Auto</h3>
<p className="text-taupe/60 text-lg font-light max-w-sm">Profitez de tarifs négociés sur plus de 40 assureurs. Du tiers simple au tous risques, trouvez la formule adaptée à votre conduite.</p>
</div>
<div className="absolute right-[-20px] bottom-[-20px] opacity-10 md:opacity-100 transform translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500">
<iconify-icon className="text-cornflower/20" icon="solar:car-linear" width="200"></iconify-icon>
</div>
</div>

<div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-grapefruit/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-grapefruit/10 text-grapefruit flex items-center justify-center mb-6">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-taupe mb-2">Habitation</h3>
<p className="text-taupe/60 text-lg font-light">Protégez votre foyer contre le vol, les dégâts des eaux et plus encore.</p>
</div>

<div className="p-8 rounded-3xl bg-white border border-gray-100 hover:border-powder/50 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-powder/20 text-grapefruit flex items-center justify-center mb-6">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-taupe mb-2">Santé &amp; Mutuelle</h3>
<p className="text-taupe/60 text-lg font-light">Des remboursements rapides et une couverture optimale pour toute la famille.</p>
</div>

<div className="md:col-span-2 relative p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-xl font-semibold text-taupe mb-2">Assurances Spécialisées</h3>
<p className="text-taupe/60 text-lg font-light mb-6">Trottinettes électriques, animaux de compagnie, emprunteur... Nous couvrons aussi les besoins spécifiques.</p>
<a className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cornflower hover:text-cornflower/80" href="#">
                                Voir tout le catalogue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex gap-4 opacity-50">
<div className="flex flex-col gap-4">
<div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-taupe">Animaux</div>
<div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-taupe">Scolaire</div>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-taupe">NVEI</div>
<div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-xs font-medium text-taupe">Juridique</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white/60 backdrop-blur-sm border-icy/30 border-t pt-24 pb-24 relative">
<div className="container lg:px-12 z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-10">
<h2 className="lg:text-5xl text-taupe leading-[1.05] text-4xl font-medium tracking-tight max-w-3xl">
        Une technologie pensée pour <span className="text-cornflower">simplifier</span> votre protection au quotidien
      </h2>
<a className="group flex items-center gap-2 text-base font-medium text-taupe border-b border-taupe/30 pb-1 hover:border-cornflower hover:text-cornflower transition-all mt-2" href="#">
        Comparer les offres
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl flex flex-col justify-between h-[520px] shadow-[0_8px_32px_0_rgba(126,108,108,0.07)] border border-icy/30 hover:border-cornflower/50 transition-colors">
<div className="">
<h3 className="text-lg font-semibold text-taupe mb-6 leading-tight tracking-tight">
            Des tarifs transparents. Une protection sur mesure.
          </h3>
<p className="text-taupe/70 leading-relaxed text-base font-light">
            “Keepar a analysé mes besoins en temps réel et m'a proposé le contrat parfait. J'ai économisé sur mon assurance auto sans réduire mes garanties.”
          </p>
</div>
<div className="mt-8 border-t border-gray-100 pt-6">
<div className="flex items-center justify-between mb-4 text-cornflower">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold text-taupe leading-none mb-1">Sophie Martin</div>
<div className="text-xs text-taupe/60 font-medium">Assurée depuis 2023</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden h-[520px] group bg-taupe shadow-lg">
<img alt="Sérénité" className="transition-transform duration-1000 group-hover:scale-110 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>
<div className="flex flex-col z-10 text-white pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-base font-medium tracking-wide">Keepar Protect©</span>
</div>
<span className="text-[10px] font-mono opacity-80 uppercase tracking-widest ml-auto">Est '21</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl flex flex-col items-center justify-between h-[520px] shadow-[0_8px_32px_0_rgba(126,108,108,0.07)] border border-icy/30 hover:border-cornflower/50 transition-colors relative overflow-hidden group">

<div className="absolute inset-0 pointer-events-none opacity-[0.05]">
<svg className="w-full h-full stroke-taupe fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle className="" cx="50" cy="50" r="20"></circle>
<circle className="" cx="50" cy="50" r="35"></circle>
<circle className="" cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="text-center relative z-10 mt-4">
<span className="text-base text-taupe/60 font-medium block mb-2">Moyenne annuelle</span>
<span className="text-lg font-semibold text-taupe tracking-tight">Économies Réalisées</span>
</div>

<div className="relative w-56 h-56 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-icy/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>
<path className="text-cornflower" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="88, 100" strokeWidth="2.5"></path>
</svg>
<div className="flex flex-col absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="text-5xl font-medium text-taupe tracking-tighter mb-2">340€</div>
<div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-1 rounded-full">+12% vs 2023</div>
</div>
</div>
<button className="w-full bg-taupe text-white text-base font-medium py-3.5 rounded-lg hover:bg-cornflower hover:shadow-lg hover:shadow-cornflower/20 transition-all duration-300 transform group-hover:-translate-y-1">
          Voir mon estimation
        </button>
</div>

<div className="flex flex-col overflow-hidden group bg-center text-white bg-taupe h-[520px] bg-[url(https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80)] bg-cover rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl justify-between">
<div className="absolute inset-0 bg-taupe/80 group-hover:bg-taupe/70 transition-colors duration-500"></div>

<div className="absolute top-0 right-0 w-64 h-64 bg-cornflower/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cornflower/40 transition-colors duration-500"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-xl font-medium tracking-tight">Support Expert</span>
<i className="w-6 h-6 opacity-80" data-lucide="life-buoy"></i>
</div>
<div className="relative z-10">
<p className="leading-relaxed text-xl text-white max-w-[260px] font-light">
            Une question sur votre contrat ? Nos experts certifiés vous répondent en moins de 2 minutes.
          </p>
</div>
<div className="space-y-1.5 text-base text-white/70 relative z-10">
<div className="hover:text-white cursor-pointer transition-colors flex group/link text-lg text-white gap-x-2 gap-y-2 items-center">
<span className="w-1 h-1 rounded-full bg-cornflower opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
            hello@keepar.fr
          </div>
<div className="hover:text-white cursor-pointer transition-colors flex gap-2 group/link text-lg text-white gap-x-2 gap-y-2 items-center">
<span className="w-1 h-1 rounded-full bg-cornflower opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
            01 23 45 67 89
          </div>
<div className="hover:text-white cursor-pointer transition-colors flex group/link text-lg text-white pt-4 gap-x-2 gap-y-2 items-center">
<span className="w-1 h-1 rounded-full bg-cornflower opacity-0 group-hover/link:opacity-100 transition-opacity"></span>
            www.keepar.fr
          </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
<div className="">
<h2 className="text-3xl md:text-5xl font-medium text-taupe tracking-tighter mb-6">La technologie au service de <span className="text-cornflower">votre tranquillité</span>.</h2>
<p className="text-taupe/70 text-xl font-light mb-8">Ne perdez plus de temps au téléphone ou en agence. Tout se passe ici, maintenant.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-cornflower/10 text-cornflower flex items-center justify-center shrink-0">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-taupe">Instantané</h4>
<p className="text-base text-taupe/60 mt-1 font-light">Devis et souscription en temps réel, 24/7.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-grapefruit/10 text-grapefruit flex items-center justify-center shrink-0">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-taupe">Économique</h4>
<p className="text-base text-taupe/60 mt-1 font-light">340€ d'économies moyennes par an.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-powder/20 text-grapefruit flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chat-round-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-taupe">Transparent</h4>
<p className="text-base text-taupe/60 mt-1 font-light">Zéro frais cachés, langage clair.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4">
<div className="bg-white rounded-xl shadow-[0_0_50px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-6">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-bold text-taupe">Comparaison</span>
<span className="px-2 py-1 rounded bg-green-50 text-green-600 text-[10px] font-bold uppercase">En direct</span>
</div>
<div className="space-y-3">
<div className="h-2 bg-gray-100 rounded w-full overflow-hidden">
<div className="h-full bg-cornflower w-[80%] rounded"></div>
</div>
<div className="h-2 bg-gray-100 rounded w-full overflow-hidden">
<div className="h-full bg-grapefruit w-[65%] rounded"></div>
</div>
<div className="h-2 bg-gray-100 rounded w-full overflow-hidden">
<div className="h-full bg-powder w-[45%] rounded"></div>
</div>
</div>
<div className="mt-6 flex justify-between items-center">
<div className="text-xs text-taupe/50">Analyse de 45 contrats...</div>
<div className="w-5 h-5 border-2 border-cornflower border-t-transparent rounded-full animate-spin"></div>
</div>
</div>

<div className="absolute -top-12 -right-12 p-4 bg-white rounded-xl shadow-lg border border-gray-50 animate-bounce duration-[3000ms]">
<iconify-icon className="text-cornflower text-3xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div className="absolute -bottom-8 -left-8 p-4 bg-white rounded-xl shadow-lg border border-gray-50 animate-bounce duration-[4000ms]">
<span className="font-bold text-taupe text-lg">-35%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-taupe text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 z-10">
<div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/10">Application Mobile</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Tout votre portefeuille dans votre poche.</h2>
<p className="text-white/70 text-xl font-light mb-8">Gérez vos contrats, déclarez un sinistre ou téléchargez une attestation en quelques secondes depuis l'application Keepar.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-white text-taupe rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:apple-linear" width="20"></iconify-icon>
                        App Store
                    </button>
<button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-white/20 transition-colors">
<iconify-icon icon="solar:android-linear" width="20"></iconify-icon>
                        Google Play
                    </button>
</div>
</div>
<div className="md:w-1/2 flex justify-center relative">

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden z-10 rotate-[-6deg] hover:rotate-0 transition-all duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
<div className="h-full w-full bg-gray-50 overflow-hidden relative">

<div className="h-32 bg-taupe p-6 text-white pt-12">
<div className="text-sm opacity-80">Bonjour Thomas,</div>
<div className="text-xl font-bold">Vos Assurances</div>
</div>

<div className="p-4 space-y-3 -mt-6">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cornflower/10 text-cornflower flex items-center justify-center"><iconify-icon icon="solar:car-linear"></iconify-icon></div>
<div>
<div className="font-bold text-taupe text-sm">Tesla Model 3</div>
<div className="text-[10px] text-gray-400">Prochaine échéance: 12 Oct</div>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-grapefruit/10 text-grapefruit flex items-center justify-center"><iconify-icon icon="solar:home-linear"></iconify-icon></div>
<div>
<div className="font-bold text-taupe text-sm">Appartement Lyon</div>
<div className="text-[10px] text-gray-400">Assuré tous risques</div>
</div>
</div>
</div>
<div className="mt-4 p-4 rounded-xl bg-icy/20 border border-icy/30">
<div className="flex items-center gap-2 mb-2 text-cornflower font-bold text-xs uppercase">
<iconify-icon icon="solar:bell-linear"></iconify-icon> Notification
                                </div>
<p className="text-xs text-taupe/80">Votre nouveau devis auto est prêt. Vous pouvez économiser 120€/an.</p>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cornflower/30 rounded-full blur-[80px]"></div>
</div>
</div>
</section>

<section className="py-20 border-b border-icy/30 bg-white/40 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl md:text-5xl font-semibold text-taupe tracking-tighter mb-2">15k+</div>
<div className="text-xs font-medium text-taupe/50 uppercase tracking-widest">Utilisateurs actifs</div>
</div>
<div className="">
<div className="text-4xl md:text-5xl font-semibold text-taupe tracking-tighter mb-2">3min</div>
<div className="text-xs font-medium text-taupe/50 uppercase tracking-widest">Temps moyen</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-taupe tracking-tighter mb-2">40+</div>
<div className="text-xs font-medium text-taupe/50 uppercase tracking-widest">Partenaires</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-taupe tracking-tighter mb-2">4.9/5</div>
<div className="text-xs font-medium text-taupe/50 uppercase tracking-widest">Satisfaction</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12" id="temoignages">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-medium text-taupe tracking-tighter mb-6">Ils ont changé <br/>d'assurance.</h2>
<p className="text-taupe/70 text-lg font-light mb-8">Découvrez comment Keepar aide des milliers de français à reprendre le contrôle de leur budget.</p>
<a className="text-cornflower font-semibold flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Lire tous les avis <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
<div className="flex gap-1 text-grapefruit mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-taupe text-base font-light leading-relaxed mb-6">"J'ai économisé 450€ sur mon assurance auto en quelques clics. L'interface est incroyable, rien à voir avec les comparateurs classiques."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-icy/40 border border-icy"></div>
<div className="">
<div className="text-sm font-semibold text-taupe">Thomas D.</div>
<div className="text-xs text-taupe/50">Paris, France</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm sm:mt-8">
<div className="flex gap-1 text-grapefruit mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-taupe text-base font-light leading-relaxed mb-6">"Le service client est ultra réactif via le chat. J'avais une question sur une franchise et j'ai eu ma réponse en 2 minutes."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-powder/40 border border-powder"></div>
<div>
<div className="text-sm font-semibold text-taupe">Sarah M.</div>
<div className="text-xs text-taupe/50">Lyon, France</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-icy/20">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-taupe text-center tracking-tighter mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer" open="">
<summary className="flex items-center justify-between p-5 font-semibold text-taupe hover:bg-gray-50 transition-colors">
                        Est-ce vraiment gratuit ?
                        <span className="transform group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-base font-light text-taupe/70 leading-relaxed border-t border-gray-100 pt-4">
                        Oui, Keepar est 100% gratuit pour vous. Nous sommes rémunérés par les assureurs en tant qu'apporteur d'affaires, sans aucun surcoût sur votre contrat. Les prix affichés sont les mêmes, voire moins chers que ceux en direct.
                    </div>
</details>
<details className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-5 font-semibold text-taupe hover:bg-gray-50 transition-colors">
                        Comment se passe la résiliation ?
                        <span className="transform group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-base font-light text-taupe/70 leading-relaxed border-t border-gray-100 pt-4">
                        Grâce à la loi Hamon, nous nous occupons de tout. Une fois votre nouveau contrat signé, nous envoyons la lettre de résiliation à votre ancien assureur. Vous n'avez aucune démarche administrative à faire.
                    </div>
</details>
<details className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-5 font-semibold text-taupe hover:bg-gray-50 transition-colors">
                        Mes données sont-elles sécurisées ?
                        <span className="transform group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-base font-light text-taupe/70 leading-relaxed border-t border-gray-100 pt-4">
                        Absolument. Keepar utilise un chiffrement bancaire (SSL 256 bits) et nous sommes conformes à la RGPD. Vos données ne servent qu'à obtenir vos devis et ne sont jamais vendues à des tiers publicitaires.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="max-w-6xl mx-auto relative rounded-[2.5rem] bg-taupe overflow-hidden px-6 py-20 md:px-20 md:py-24 text-center shadow-2xl shadow-taupe/20">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-grapefruit/20 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"></div>
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-cornflower/20 rounded-full blur-[120px] mix-blend-overlay pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-center">

<div className="relative mb-10 group">
<div className="absolute inset-0 bg-gradient-to-tr from-cornflower to-grapefruit blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 rounded-full"></div>
<div className="w-20 h-20 relative bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-inner rotate-6 group-hover:rotate-12 transition-transform duration-500">
<iconify-icon className="text-white drop-shadow-md" icon="solar:shield-check-bold-duotone" width="40"></iconify-icon>
</div>
</div>

<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6 max-w-3xl mx-auto leading-[1.05]">
                Prêt à mieux vous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cornflower to-grapefruit">protéger</span> ?
            </h2>
<p className="text-xl md:text-2xl text-white/70 mb-10 max-w-xl mx-auto font-normal leading-relaxed">
                Rejoignez la communauté Keepar et ne payez plus jamais trop cher pour vos assurances. Analyse gratuite en 2 minutes.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
<button className="group relative px-8 py-4 bg-white text-taupe text-base font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all w-full sm:w-auto overflow-hidden">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Commencer maintenant
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto">
                    Parler à un conseiller
                </button>
</div>

<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4">
<div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wider">
<iconify-icon className="text-green-400" icon="solar:check-circle-bold"></iconify-icon>
                    Sans engagement
                </div>
<div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wider">
<iconify-icon className="text-green-400" icon="solar:check-circle-bold"></iconify-icon>
                    100% Gratuit
                </div>
<div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-wider">
<iconify-icon className="text-cornflower" icon="solar:lock-keyhole-bold"></iconify-icon>
                    Données sécurisées
                </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-taupe">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div className="flex flex-col items-start gap-6">

<div className="flex items-center gap-3">
<div className="relative w-10 h-10 flex items-center justify-center bg-cornflower/10 rounded-xl text-cornflower">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-taupe">Keepar.</span>
</div>
<p className="text-taupe/70 leading-relaxed font-light text-base">
              L'outil simple de comparaison d'assurances, conçu pour optimiser votre budget et simplifier vos démarches.
            </p>
<div className="flex gap-6 text-sm font-medium text-cornflower">
<a className="hover:text-cornflower/80" href="#">Conditions</a>
<a className="hover:text-cornflower/80" href="#">Confidentialité</a>
</div>
</div>

<div className="flex flex-col items-start gap-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-cornflower" icon="solar:layers-minimalistic-bold-duotone" width="28"></iconify-icon>
<h3 className="font-semibold text-lg tracking-tight text-taupe">Keepar by SmartDev Africa Hub</h3>
</div>
<p className="text-taupe/70 leading-relaxed font-light text-sm">
              Keepar est développé par SmartDev Africa Hub, un pôle d'innovation digitale basé au Sénégal, engagé dans le développement d'outils numériques adaptés à la réalité africaine.
            </p>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-taupe hover:bg-gray-50 transition-colors" href="https://smartdevafrica.com" target="_blank">
              Découvrir SmartDev Africa Hub
              <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="flex flex-col items-start gap-6">
<h3 className="font-semibold text-lg tracking-tight text-taupe">Mentions Légales</h3>
<div className="text-sm font-light text-taupe/70 space-y-2">
<p><span className="font-medium text-taupe">Société :</span> SmartDev Africa Hub SARL</p>
<p><span className="font-medium text-taupe">RCCM :</span> SN DKR 2025 B 27047</p>
<p><span className="font-medium text-taupe">Contact :</span> +221 76 880 81 52</p>
<p><span className="font-medium text-taupe">NINEA :</span> 012319209</p>
<p><span className="font-medium text-taupe">Adresse :</span> 8228 IMM /D, SACRE COEUR 1, DAKAR, SENEGAL</p>
<p><span className="font-medium text-taupe">Email :</span> contact@smartdevafrica.com</p>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-taupe/60">
<p>© 2025 Keepar by SmartDev Africa Hub - Tous droits réservés</p>
<p className="flex items-center gap-1">
            Conçu avec <span className="text-grapefruit text-base">♥</span> au Sénégal pour l'Afrique
          </p>
</div>
</div>
</footer>


    </>
  );
}
