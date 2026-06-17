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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2" href="#">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>POPOTE<span className="text-amber-500">4L</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 transition-colors" href="#accueil">Accueil</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#prestations">Nos prestations</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#galerie">Galerie</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#apropos">À propos</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-colors shadow-sm shadow-amber-500/20" href="#devis">
                    Demander un devis
                </a>
<button className="md:hidden text-slate-600 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="accueil">
<div className="absolute inset-0 z-0">
<img alt="Événement culinaire convivial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium tracking-wide border border-amber-500/20 mb-6 backdrop-blur-sm">
                    Traiteur événementiel
                </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
                    Popote en 4L – Traiteur original et convivial
                </h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-normal">
                    Des événements gourmands, authentiques et inoubliables. Une cuisine créative qui rassemble autour de la table.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-slate-900 bg-white rounded-full hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#devis">
                        Demander un devis
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors flex items-center justify-center" href="#prestations">
                        Découvrir la carte
                    </a>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Cuisine maison</h3>
<p className="text-sm text-slate-500">Élaborée avec des produits frais et de saison.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Convivialité</h3>
<p className="text-sm text-slate-500">Un concept original pour rassembler vos invités.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:confetti-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Tous événements</h3>
<p className="text-sm text-slate-500">Mariages, entreprises, anniversaires, festivals.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tuning-square-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Service flexible</h3>
<p className="text-sm text-slate-500">Des prestations personnalisées selon vos besoins.</p>
</div>

<div className="flex flex-col items-center text-center group lg:col-span-1 md:col-span-3 lg:col-start-auto md:col-start-2">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Expérience unique</h3>
<p className="text-sm text-slate-500">Une signature visuelle et gustative marquante.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="apropos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200">
<img alt="L'équipe Popote en 4L" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-amber-500 text-xl" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-slate-900">Notre passion</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Faire de chaque repas un moment de partage authentique et joyeux.</p>
</div>
</div>
<div>
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase mb-3 block">L'esprit Popote</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                            Plus qu'un traiteur, un créateur de souvenirs.
                        </h2>
<div className="space-y-4 text-slate-600 text-base">
<p>
                                Chez Popote en 4L, nous croyons que la meilleure cuisine est celle qui se partage. Nés de l'envie de casser les codes du traiteur traditionnel, nous proposons un concept chaleureux, inspiré de l'esprit guinguette et de la street-food de qualité.
                            </p>
<p>
                                Notre célèbre 4L aménagée n'est pas qu'un décor : c'est le cœur battant de votre événement, autour duquel les sourires s'échangent et les assiettes se remplissent de mets colorés, préparés avec amour et générosité.
                            </p>
<p>
                                De la sélection des produits au service souriant, nous mettons notre créativité au service de votre convivialité.
                            </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors" href="#contact">
                                Rencontrons-nous
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="prestations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos Prestations</h2>
<p className="text-slate-500 text-base">Des formules sur-mesure pour s'adapter à l'ambiance et au format de vos réceptions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white flex flex-col cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Mariages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Mariages</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:rings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 flex-1">Un repas festif et original pour le plus beau jour de votre vie. Du vin d'honneur au brunch du lendemain.</p>
<span className="text-xs font-medium text-amber-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">Découvrir les menus <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white flex flex-col cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Événements d'entreprise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Entreprises</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 flex-1">Séminaires, afterworks, lancements de produits. Dynamisez vos équipes autour d'une pause gourmande.</p>
<span className="text-xs font-medium text-amber-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">Demander une plaquette <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white flex flex-col cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Anniversaires" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&amp;q=80"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Fêtes privées</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:gift-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 flex-1">Anniversaires, baptêmes, cousinades. Profitez de vos invités, on s'occupe de régaler tout le monde.</p>
<span className="text-xs font-medium text-amber-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">Voir les formules <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white flex flex-col cursor-pointer md:col-span-1 lg:col-start-2">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Animations culinaires" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Animations culinaires</h3>
<iconify-icon className="text-slate-400 text-xl" icon="solar:fire-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-500 mb-4 flex-1">Ateliers participatifs, brasero, découpe en direct. Un show gourmand pour animer votre réception.</p>
<span className="text-xs font-medium text-amber-500 group-hover:text-amber-600 transition-colors flex items-center gap-1">Nos animations <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all bg-white flex flex-col cursor-pointer md:col-span-2 lg:col-span-1">
<div className="aspect-[16/10] md:aspect-auto lg:aspect-[16/10] h-full overflow-hidden relative">
<img alt="Buffets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0" src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium tracking-tight text-white">Buffets &amp; Cocktails</h3>
<iconify-icon className="text-white/70 text-xl" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-200 mb-4">Pièces apéritives créatives, planches à partager, buffets thématiques et colorés.</p>
<span className="text-xs font-medium text-amber-400 flex items-center gap-1">Commander en ligne <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Ils ont partagé notre Popote</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="flex gap-1 mb-6 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            "Un immense merci à Popote en 4L pour notre mariage. Le concept a fait l'unanimité ! La nourriture était délicieuse, originale et l'équipe d'un professionnalisme redoutable tout en restant super chaleureuse."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">CM</div>
<div>
<p className="text-sm font-medium text-slate-900">Camille &amp; Maxime</p>
<p className="text-xs text-slate-500">Mariage estival</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="flex gap-1 mb-6 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            "Nous avons fait appel à eux pour l'inauguration de nos locaux. L'animation culinaire autour du brasero a créé une ambiance incroyable. C'était beau, c'était bon, parfait !"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">SJ</div>
<div>
<p className="text-sm font-medium text-slate-900">Sophie J.</p>
<p className="text-xs text-slate-500">Événement d'entreprise</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/20">
<div className="flex gap-1 mb-6 text-amber-500">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                            "Pour mes 40 ans, je voulais quelque chose de convivial, sans chichi mais de qualité. Contrat rempli à 200%. Les buffets étaient magnifiques et les produits super frais."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">TD</div>
<div>
<p className="text-sm font-medium text-slate-900">Thomas D.</p>
<p className="text-xs text-slate-500">Anniversaire privé</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="devis">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Organisons votre événement</h2>
<p className="text-sm text-slate-500 mb-8">Remplissez ce formulaire pour nous parler de votre projet, nous vous recontacterons avec un devis gourmand.</p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="nom">Nom / Prénom</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all placeholder:text-slate-400" id="nom" placeholder="Jean Dupont" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">Email</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all placeholder:text-slate-400" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="telephone">Téléphone</label>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all placeholder:text-slate-400" id="telephone" placeholder="06 12 34 56 78" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="type">Type d'événement</label>
<select className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-slate-700" id="type">
<option value="">Sélectionnez...</option>
<option value="mariage">Mariage</option>
<option value="entreprise">Événement d'entreprise</option>
<option value="prive">Fête privée / Anniversaire</option>
<option value="autre">Autre</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">Votre message (date, lieu, nombre d'invités...)</label>
<textarea className="w-full text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all placeholder:text-slate-400 resize-none" id="message" placeholder="Racontez-nous votre projet..." rows="4"></textarea>
</div>
<button className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm" type="button">
                                Envoyer la demande
                            </button>
</form>
</div>

<div className="flex flex-col h-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-100" id="contact">
<div className="p-8 pb-6 flex-none">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6">Nos coordonnées</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-amber-500 text-xl mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Le Laboratoire Popote</p>
<p className="text-sm text-slate-500">12 Rue de la Gastronomie, 75000 Paris<br/><span className="text-xs">(Déplacement dans toute la région)</span></p>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500 text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-slate-900">01 23 45 67 89</p>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-amber-500 text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-slate-900">miam@popoteen4l.fr</p>
</div>
</div>
</div>
<div className="flex-1 min-h-[250px] relative">

<iframe allowfullscreen="" className="absolute inset-0 grayscale contrast-125 opacity-80 mix-blend-multiply" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1683123456789!5m2!1sfr!2sfr" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

<div className="lg:pr-8">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>POPOTE<span className="text-amber-500">4L</span></span>
</a>
<p className="text-sm mb-6 leading-relaxed">
                    Traiteur événementiel original. La cuisine qui rassemble, le partage qui crée des souvenirs.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#accueil">Accueil</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#prestations">Nos prestations</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#galerie">Galerie événementielle</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#apropos">L'équipe &amp; Le concept</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Prestations</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#">Traiteur Mariage</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Événement d'Entreprise</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Animations Culinaire</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Boutique en ligne</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-wide">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        01 23 45 67 89
                    </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        miam@popoteen4l.fr
                    </li>
<li className="pt-2">
<a className="inline-block px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-medium hover:bg-slate-700 transition-colors" href="#devis">
                            Demander un devis
                        </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Popote en 4L. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</footer>

    </>
  );
}
