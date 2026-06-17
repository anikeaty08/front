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
colors: {
brand: {
teal: '#1A8F9D',
tealDark: '#146f7a',
green: '#27AE60',
gold: '#F39C12',
dark: '#2C3E50',
gray: '#7F8C8D',
bg: '#F4F3EE', // Warm neutral
surface: '#FFFFFF'
}
},
fontFamily: {
sans: ['Nunito', 'sans-serif'],
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 rtl:space-x-reverse" href="#">

<span className="self-center text-xl font-bold tracking-tight text-brand-teal">TrueRepute</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-brand-dark bg-white border border-gray-200 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 hidden sm:block transition-all" type="button">Connexion</button>
<button className="text-white bg-brand-teal hover:bg-brand-tealDark focus:ring-4 focus:outline-none focus:ring-brand-teal/30 font-medium rounded-lg text-sm px-5 py-2 text-center transition-all shadow-lg shadow-brand-teal/20" type="button">Essai Gratuit</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-brand-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#fonctionnalites">Fonctionnalités</a>
</li>
<li>
<a className="block py-2 px-3 text-brand-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#temoignages">Témoignages</a>
</li>
<li>
<a className="block py-2 px-3 text-brand-gray rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-teal md:p-0 transition-colors" href="#tarifs">Tarifs</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white to-transparent -z-10"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-semibold mb-6 border border-brand-teal/20">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
                    Spécial Agents Indépendants
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark mb-6 leading-[1.1]">
                    Votre réputation Google,<br/>
<span className="text-brand-teal">en pilote automatique.</span>
</h1>
<p className="text-lg md:text-xl text-brand-gray mb-8 font-light leading-relaxed">
                    TrueRepute transforme vos clients heureux en avis 5 étoiles visibles. Construisez votre marque personnelle, pas celle de votre réseau.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="text-white bg-brand-teal hover:bg-brand-tealDark font-semibold rounded-lg text-base px-8 py-3.5 shadow-xl shadow-brand-teal/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                        Obtenir mes 5 étoiles
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="text-brand-dark bg-white border border-gray-200 hover:bg-gray-50 font-medium rounded-lg text-base px-8 py-3.5 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                        Voir la démo
                    </button>
</div>
<div className="flex items-center gap-6 text-sm text-brand-gray">
<div className="flex items-center gap-1.5">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="16"></span>
<span>Sans carte bancaire</span>
</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-brand-green" data-icon="lucide:shield-check" data-width="16"></span>
<span>Conforme RGPD/CNIL</span>
</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-brand-green" data-icon="lucide:star" data-width="16"></span>
<span>Partenaire Google</span>
</div>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center">

<div className="absolute inset-0 border border-brand-teal/10 rounded-full scale-125 md:scale-100"></div>
<div className="absolute inset-0 border border-brand-teal/5 rounded-full scale-150 md:scale-110"></div>

<div className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="bg-[#4285F4] h-2 w-full"></div>
<div className="p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex gap-4">

<div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-md overflow-hidden relative">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"/>
</div>
<div>
<h3 className="text-lg font-bold text-brand-dark leading-tight">Jean Dupont</h3>
<p className="text-xs text-brand-gray mb-1">Agent Immobilier Indépendant</p>
<div className="flex items-center gap-1">
<span className="text-brand-gold font-bold text-sm">5.0</span>
<div className="flex text-brand-gold">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="12" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="12" style={{fill: 'currentColor'}}></span>
</div>
<span className="text-xs text-gray-400">(42 avis Google)</span>
</div>
</div>
</div>

<div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100">
<span className="iconify" data-icon="logos:google-icon" data-width="18"></span>
</div>
</div>

<div className="bg-brand-bg rounded-lg p-3 mb-4 border border-gray-100 relative">
<div className="absolute -top-2 left-4 text-gray-300">
<span className="iconify" data-icon="lucide:quote" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-sm text-brand-dark italic pt-1">
                                "Jean a vendu notre appartement en 2 semaines. Très pro et réactif. Je recommande !"
                            </p>
<p className="text-xs text-brand-gray mt-2 font-semibold">- Marie L., Paris 15</p>
</div>

<div className="w-full bg-brand-teal text-white text-sm font-semibold py-2.5 rounded text-center shadow-md shadow-brand-teal/20 cursor-pointer">
                            Laisser un avis
                        </div>
</div>
</div>

<div className="absolute top-10 -left-4 md:-left-12 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div>
<p className="text-xs text-brand-gray font-medium">Avis ce mois</p>
<p className="text-lg font-bold text-brand-dark leading-none">+12</p>
</div>
</div>

<div className="absolute bottom-10 -right-4 md:-right-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-sm font-bold text-brand-dark">Nouvel avis 5★ !</p>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-brand-gray mb-6">La solution de confiance pour les agents immobiliers à Paris, Lyon, Bordeaux...</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-gray-400">
<span className="iconify" data-icon="lucide:home" data-width="24"></span> Agence Directe
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-400">
<span className="iconify" data-icon="lucide:building-2" data-width="24"></span> ImmoPro
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-400">
<span className="iconify" data-icon="lucide:key" data-width="24"></span> Clés en Main
                </div>
<div className="flex items-center gap-2 font-bold text-xl text-gray-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span> Locale
                </div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-brand-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-4">Le bouche-à-oreille ne suffit plus.</h2>
<p className="text-lg text-brand-gray">72% des vendeurs consultent les avis Google avant d'appeler un agent. Si vous n'êtes pas visible, vous perdez des mandats.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-500 mb-6">
<span className="iconify" data-icon="lucide:search-x" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Invisible sur Google</h3>
<p className="text-brand-gray text-sm leading-relaxed">
                        Pendant que les grosses agences accumulent les avis, votre profil reste vide ou obsolète, malgré vos clients satisfaits.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 mb-6">
<span className="iconify" data-icon="lucide:hourglass" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Trop de temps perdu</h3>
<p className="text-brand-gray text-sm leading-relaxed">
                        Relancer manuellement chaque client, expliquer comment laisser un avis, vérifier s'il est publié... c'est 2h par semaine perdues.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 mb-6">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<h3 className="text-xl font-bold text-brand-dark mb-3">Marque diluée</h3>
<p className="text-brand-gray text-sm leading-relaxed">
                        Les plateformes classiques mettent leur logo en avant, pas le vôtre. Vous travaillez dur pour construire <em>votre</em> nom.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="fonctionnalites">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<span className="text-brand-teal font-semibold tracking-wider text-xs uppercase mb-2 block">Fonctionnement</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">Simple comme un SMS.</h2>
</div>

<div className="space-y-24">

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">

<div className="bg-brand-bg rounded-xl border border-gray-200 p-8 shadow-lg max-w-md mx-auto">
<div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-gray-100 mb-4">
<span className="iconify text-brand-dark" data-icon="logos:google-icon" data-width="24"></span>
<div className="flex-1">
<div className="h-2 w-24 bg-gray-200 rounded mb-1"></div>
<div className="h-2 w-16 bg-gray-100 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-brand-green">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
</div>
<div className="text-center">
<button className="bg-brand-dark text-white px-4 py-2 rounded text-sm w-full font-medium">Connecter mon compte Google</button>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg mb-6">1</div>
<h3 className="text-2xl font-bold text-brand-dark mb-4">Connectez votre profil</h3>
<p className="text-brand-gray text-lg">
                            Liez votre fiche Google Business Profile en un clic. Nous récupérons vos informations pour personnaliser l'expérience.
                        </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg mb-6">2</div>
<h3 className="text-2xl font-bold text-brand-dark mb-4">Votre marque avant tout</h3>
<p className="text-brand-gray text-lg">
                            TrueRepute s'efface. Vos demandes d'avis portent votre nom, votre photo et votre ton. Le client se sent valorisé, pas spammé.
                        </p>
</div>
<div className="relative">

<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg max-w-md mx-auto">
<div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
<span className="text-sm font-semibold text-brand-gray">Aperçu SMS</span>
<span className="w-2 h-2 rounded-full bg-brand-green"></span>
</div>
<div className="bg-brand-bg p-4 rounded-lg rounded-tl-none max-w-[85%] mb-2">
<p className="text-sm text-brand-dark">Bonjour Pierre, merci pour ta confiance pour la vente ! Peux-tu me laisser un avis rapide ? Ça m'aide beaucoup. <span className="text-brand-teal underline">lien.fr/avis</span></p>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
</div>
<span className="text-xs text-gray-400">Envoyé par Jean Dupont</span>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative">

<div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
<div className="bg-brand-bg p-6 rounded-xl border border-gray-100 text-center">
<span className="block text-3xl font-bold text-brand-teal mb-1">23</span>
<span className="text-xs text-brand-gray uppercase tracking-wide">Avis 5★</span>
</div>
<div className="bg-brand-bg p-6 rounded-xl border border-gray-100 text-center">
<span className="block text-3xl font-bold text-brand-teal mb-1">+40%</span>
<span className="text-xs text-brand-gray uppercase tracking-wide">Appels</span>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg mb-6">3</div>
<h3 className="text-2xl font-bold text-brand-dark mb-4">Récoltez et Dominez</h3>
<p className="text-brand-gray text-lg">
                            Les avis positifs s'accumulent directement sur Google. Votre classement local grimpe, le téléphone sonne plus souvent.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-bg">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold tracking-tight text-brand-dark">Pourquoi choisir TrueRepute ?</h2>
<p className="text-brand-gray mt-4">Conçu pour l'indépendant, pas pour la franchise.</p>
</div>
<div className="overflow-x-auto">
<div className="inline-block min-w-full align-middle">
<div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
<th className="py-5 px-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider" scope="col">Critères</th>
<th className="py-5 px-6 text-left text-xs font-bold text-brand-teal uppercase tracking-wider bg-brand-teal/5" scope="col">TrueRepute</th>
<th className="py-5 px-6 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider" scope="col">Solutions "Entreprise"</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr>
<td className="py-5 px-6 text-sm font-medium text-brand-dark">Prix mensuel</td>
<td className="py-5 px-6 text-sm font-bold text-brand-teal bg-brand-teal/5">15 € / mois</td>
<td className="py-5 px-6 text-sm text-gray-500">100 € - 300 € / mois</td>
</tr>
<tr>
<td className="py-5 px-6 text-sm font-medium text-brand-dark">Marque mise en avant</td>
<td className="py-5 px-6 text-sm text-brand-dark bg-brand-teal/5 flex items-center gap-2">
<span className="iconify text-brand-green" data-icon="lucide:check" data-width="16"></span>
                                        La vôtre (Agent)
                                    </td>
<td className="py-5 px-6 text-sm text-gray-500">La plateforme ou l'agence</td>
</tr>
<tr>
<td className="py-5 px-6 text-sm font-medium text-brand-dark">Simplicité</td>
<td className="py-5 px-6 text-sm text-brand-dark bg-brand-teal/5">Prêt en 2 minutes</td>
<td className="py-5 px-6 text-sm text-gray-500">Formation requise</td>
</tr>
<tr>
<td className="py-5 px-6 text-sm font-medium text-brand-dark">Engagement</td>
<td className="py-5 px-6 text-sm text-brand-dark bg-brand-teal/5">Sans engagement</td>
<td className="py-5 px-6 text-sm text-gray-500">Annuel souvent requis</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="temoignages">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center tracking-tight text-brand-dark mb-16">Ils ont boosté leur visibilité locale</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-brand-bg p-8 rounded-2xl relative">
<span className="absolute top-8 right-8 text-brand-teal/20">
<span className="iconify" data-icon="lucide:quote" data-width="40"></span>
</span>
<div className="flex items-center gap-1 text-brand-gold mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-brand-dark font-medium leading-relaxed mb-6">
                        "Je suis passée de 8 à 23 avis en seulement 4 mois. C'est le jour et la nuit pour ma crédibilité quand je rencontre de nouveaux vendeurs."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
</div>
<div>
<p className="text-sm font-bold text-brand-dark">Sarah M.</p>
<p className="text-xs text-brand-gray">Agent Indépendant, Paris 18</p>
</div>
</div>
</div>

<div className="bg-brand-bg p-8 rounded-2xl relative">
<span className="absolute top-8 right-8 text-brand-teal/20">
<span className="iconify" data-icon="lucide:quote" data-width="40"></span>
</span>
<div className="flex items-center gap-1 text-brand-gold mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-brand-dark font-medium leading-relaxed mb-6">
                        "Avant, je n'osais pas demander. Avec l'appli, j'envoie le SMS devant le client après la signature. Le taux de retour est incroyable."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
</div>
<div>
<p className="text-sm font-bold text-brand-dark">Luc B.</p>
<p className="text-xs text-brand-gray">Mandataire, Lyon</p>
</div>
</div>
</div>

<div className="bg-brand-bg p-8 rounded-2xl relative">
<span className="absolute top-8 right-8 text-brand-teal/20">
<span className="iconify" data-icon="lucide:quote" data-width="40"></span>
</span>
<div className="flex items-center gap-1 text-brand-gold mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-brand-dark font-medium leading-relaxed mb-6">
                        "Simple, efficace, pas cher. Exactement ce qu'il me fallait pour arrêter de me faire manger par les grosses agences du coin."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=128&amp;q=80"/>
</div>
<div>
<p className="text-sm font-bold text-brand-dark">Sophie T.</p>
<p className="text-xs text-brand-gray">Conseillère, Bordeaux</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-bg relative overflow-hidden" id="tarifs">
<div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
<div className="p-10 text-center border-b border-gray-100">
<h3 className="text-2xl font-bold text-brand-dark mb-2">Offre Unique</h3>
<p className="text-brand-gray mb-6 text-sm">Tout ce dont vous avez besoin pour briller.</p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold text-brand-dark tracking-tight">15€</span>
<span className="text-brand-gray font-medium">/ mois</span>
</div>
<div className="mt-8">
<button className="w-full text-white bg-brand-teal hover:bg-brand-tealDark font-semibold rounded-lg text-lg px-8 py-4 shadow-lg shadow-brand-teal/20 transition-all transform hover:-translate-y-0.5">
                            Commencer l'essai gratuit
                        </button>
<p className="text-xs text-brand-gray mt-3">14 jours offerts • Sans engagement • Annulation en 1 clic</p>
</div>
</div>
<div className="p-10 bg-gray-50/50">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-brand-dark">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="20"></span>
                            Connexion Google Business Profile
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-brand-dark">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="20"></span>
                            Demandes d'avis illimitées (Email/SMS)
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-brand-dark">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="20"></span>
                            Personnalisation à votre image
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-brand-dark">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="20"></span>
                            Support client prioritaire (France)
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-brand-dark">
<span className="iconify text-brand-green" data-icon="lucide:check-circle" data-width="20"></span>
                            Tableau de bord de suivi
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-center tracking-tight text-brand-dark mb-12">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group bg-brand-bg rounded-xl p-4 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-brand-dark">
                        Est-ce que ça marche avec mon agence actuelle ?
                        <span className="iconify transition-transform group-open:rotate-180 text-brand-teal" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<p className="mt-4 text-sm text-brand-gray leading-relaxed pl-1">
                        Oui. TrueRepute est conçu pour vous, l'agent. Vous connectez votre propre profil Google. Si vous changez d'agence demain, vos avis restent avec vous car ils sont sur Google, pas chez nous.
                    </p>
</details>
<details className="group bg-brand-bg rounded-xl p-4 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-brand-dark">
                        Puis-je filtrer les avis négatifs ?
                        <span className="iconify transition-transform group-open:rotate-180 text-brand-teal" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<p className="mt-4 text-sm text-brand-gray leading-relaxed pl-1">
                        Google interdit le "review gating" (bloquer les mauvais avis). Cependant, notre approche personnalisée et humaine maximise les chances que seuls vos clients les plus heureux prennent le temps de répondre.
                    </p>
</details>
<details className="group bg-brand-bg rounded-xl p-4 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-brand-dark">
                        Est-ce conforme au RGPD ?
                        <span className="iconify transition-transform group-open:rotate-180 text-brand-teal" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<p className="mt-4 text-sm text-brand-gray leading-relaxed pl-1">
                        Absolument. Nous sommes basés en France et respectons strictement les normes CNIL et RGPD. Vos données clients ne sont jamais revendues.
                    </p>
</details>
<details className="group bg-brand-bg rounded-xl p-4 cursor-pointer">
<summary className="flex items-center justify-between font-semibold text-brand-dark">
                        Y a-t-il une durée d'engagement ?
                        <span className="iconify transition-transform group-open:rotate-180 text-brand-teal" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<p className="mt-4 text-sm text-brand-gray leading-relaxed pl-1">
                        Aucune. Vous pouvez arrêter quand vous voulez en un clic depuis votre espace. Nous croyons que vous resterez pour les résultats, pas par obligation.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-tealDark text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Prêt à dominer votre marché local ?</h2>
<p className="text-xl text-brand-teal/20 text-gray-200 mb-10 font-light">
                Rejoignez les agents indépendants qui ne laissent plus leur réputation au hasard.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-brand-teal hover:bg-gray-50 font-bold rounded-lg text-lg px-10 py-4 shadow-xl transition-all">
                    Démarrer l'essai gratuit
                </button>
</div>
<p className="mt-6 text-sm text-white/60">Pas de carte requise • 14 jours gratuits</p>
</div>
</section>

<footer className="bg-brand-bg border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-bold tracking-tight text-brand-teal block mb-4">TrueRepute</span>
<p className="text-sm text-brand-gray">
                    L'outil de réputation dédié aux agents immobiliers indépendants en France.
                </p>
<div className="mt-4 flex gap-4">

<span className="iconify text-brand-gray hover:text-brand-teal cursor-pointer" data-icon="lucide:linkedin" data-width="20"></span>
<span className="iconify text-brand-gray hover:text-brand-teal cursor-pointer" data-icon="lucide:instagram" data-width="20"></span>
</div>
</div>
<div>
<h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Produit</h4>
<ul className="space-y-2 text-sm text-brand-gray">
<li><a className="hover:text-brand-teal" href="#">Fonctionnalités</a></li>
<li><a className="hover:text-brand-teal" href="#">Tarifs</a></li>
<li><a className="hover:text-brand-teal" href="#">Témoignages</a></li>
<li><a className="hover:text-brand-teal" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Légal</h4>
<ul className="space-y-2 text-sm text-brand-gray">
<li><a className="hover:text-brand-teal" href="#">Mentions Légales</a></li>
<li><a className="hover:text-brand-teal" href="#">Politique de Confidentialité</a></li>
<li><a className="hover:text-brand-teal" href="#">CGV</a></li>
<li><a className="hover:text-brand-teal" href="#">Données Personnelles</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wide">Contact</h4>
<ul className="space-y-2 text-sm text-brand-gray">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                        hello@truerepute.fr
                    </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                        Paris, France
                    </li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-xs text-brand-gray">
            © 2024 TrueRepute SAS. Tous droits réservés.
        </div>
</footer>

    </>
  );
}
