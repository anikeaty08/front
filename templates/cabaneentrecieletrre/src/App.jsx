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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col items-center md:items-start group" href="#">
<span className="font-serif text-xl tracking-tight font-medium text-stone-900 group-hover:text-emerald-800 transition-colors">Entre Terre et Ciel</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-stone-500 font-medium hidden md:block">Cabanes en Savoie</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest text-stone-600">
<a className="hover:text-stone-900 transition-colors py-2" href="#cabanes">Nos Cabanes</a>
<a className="hover:text-stone-900 transition-colors py-2" href="#experience">L'Expérience</a>
<a className="hover:text-stone-900 transition-colors py-2" href="#tarifs">Infos &amp; Tarifs</a>
<a className="hover:text-stone-900 transition-colors py-2" href="#cadeau">Bon Cadeau</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-stone-900" href="#contact">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
<span>Contact</span>
</a>
<button className="bg-stone-900 text-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-900 transition-all rounded-full flex items-center gap-2 shadow-lg shadow-stone-200">
<span>Réserver</span>
<iconify-icon icon="lucide:calendar-check" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Cabane dans les arbres Savoie" className="w-full h-full object-cover object-center brightness-[0.85]" src="https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-semibold">Saint-Nicolas-la-Chapelle, Savoie</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light mb-6 tracking-tight leading-[1.1]">
                Dormez la tête <br/> <span className="italic font-normal text-emerald-100">dans les étoiles.</span>
</h1>
<p className="text-base md:text-lg text-white/90 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                Vivez une expérience unique dans nos cabanes perchées face au Mont-Blanc. 
                Luxe, calme et nature pour une déconnexion totale.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="px-8 py-3 bg-white text-stone-900 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-emerald-50 transition-colors min-w-[160px]" href="#cabanes">
                    Découvrir les cabanes
                </a>
<a className="px-8 py-3 border border-white text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 min-w-[160px] justify-center backdrop-blur-sm" href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                    Voir la vidéo
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<span className="text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-2 block">Le Concept</span>
<h2 className="text-4xl font-serif text-stone-900 mb-6 tracking-tight">Une parenthèse enchantée au cœur du Val d'Arly.</h2>
<div className="h-px w-20 bg-stone-300 mb-6"></div>
</div>
<div className="text-stone-600 leading-relaxed font-light space-y-4">
<p>
                        Bienvenue à <strong>Entre Terre et Ciel</strong>. Nichées dans une forêt préservée, nos cabanes de luxe vous accueillent été comme hiver pour un séjour inoubliable.
                    </p>
<p>
                        Que vous cherchiez un refuge romantique avec spa privatif ou une aventure familiale au sommet des arbres, chaque cabane a été conçue pour s'intégrer harmonieusement à la nature tout en offrant un confort exceptionnel. Réveillez-vous avec le chant des oiseaux et le petit-déjeuner hissé à la corde.
                    </p>
</div>
<ul className="grid grid-cols-2 gap-4 mt-4">
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-emerald-700" icon="lucide:mountain-snow"></iconify-icon>
                        Vue Mont-Blanc
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-emerald-700" icon="lucide:croissant"></iconify-icon>
                        Petit-déj inclus
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-emerald-700" icon="lucide:tree-pine"></iconify-icon>
                        Ouvert toute l'année
                    </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-emerald-700" icon="lucide:waves"></iconify-icon>
                        Spa &amp; Sauna
                    </li>
</ul>
</div>
<div className="relative group">
<div className="grid grid-cols-2 gap-4">
<img alt="Intérieur cabane bois" className="w-full h-80 object-cover rounded-2xl md:translate-y-12 shadow-xl shadow-stone-200" src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Forêt Savoie" className="w-full h-80 object-cover rounded-2xl shadow-xl shadow-stone-200" src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-full shadow-lg hidden md:block animate-spin-slow">
<svg height="100" viewbox="0 0 100 100" width="100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circle"></path>
<text fontSize="11" letter-spacing="2">
<textpath className="uppercase font-medium text-stone-400" href="#circle">Entre Terre et Ciel • Savoie •</textpath>
</text>
</svg>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-emerald-700" icon="lucide:leaf" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="cabanes">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-4xl font-serif text-stone-900 mb-4 tracking-tight">Nos Refuges Perchés</h2>
<p className="text-stone-500 font-light">Trois univers uniques pour vivre la montagne autrement. Choisissez votre nid pour la nuit.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-stone-200/60">
<div className="relative h-72 overflow-hidden">
<img alt="Cabane Mont-Blanc" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1621257912423-f222df255d4c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-stone-800">
                            Familiale
                        </div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-stone-900 group-hover:text-emerald-800 transition-colors">Le Mont-Blanc</h3>
<div className="flex gap-1 text-emerald-700">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
<span className="text-xs font-semibold">2-4 pers.</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                            Une cabane spacieuse offrant la plus belle vue sur le toit de l'Europe. Idéale pour les familles avec sa mezzanine ludique et sa grande terrasse panoramique.
                        </p>
<div className="mt-auto border-t border-stone-100 pt-6 flex justify-between items-center">
<span className="text-xs text-stone-400">À partir de <span className="text-stone-900 font-bold text-lg">220€</span></span>
<a className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                Voir détails <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-stone-200/60 relative">
<div className="absolute top-0 right-0 bg-emerald-700 text-white text-[9px] uppercase font-bold px-3 py-1 z-20 rounded-bl-lg tracking-widest">
                        Coup de cœur
                    </div>
<div className="relative h-72 overflow-hidden">
<img alt="Cabane Spa" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1536483236024-44a5695029e0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-stone-800">
                            Spa &amp; Duo
                        </div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-stone-900 group-hover:text-emerald-800 transition-colors">Nid d'Amour</h3>
<div className="flex gap-1 text-emerald-700">
<iconify-icon icon="lucide:heart" width="16"></iconify-icon>
<span className="text-xs font-semibold">2 pers.</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                            Le refuge romantique par excellence. Profitez de votre jacuzzi privatif sur la terrasse, suspendu entre les arbres, pour une soirée sous les étoiles inoubliable.
                        </p>
<div className="mt-auto border-t border-stone-100 pt-6 flex justify-between items-center">
<span className="text-xs text-stone-400">À partir de <span className="text-stone-900 font-bold text-lg">250€</span></span>
<a className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                Voir détails <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-stone-200/60">
<div className="relative h-72 overflow-hidden">
<img alt="Cabane Ruisseau" className="w-full h-full object-cover img-zoom" src="https://images.unsplash.com/photo-1542718610-a1d656d9886d?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-stone-800">
                            Authentique
                        </div>
</div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-serif text-stone-900 group-hover:text-emerald-800 transition-colors">Le Ruisseau</h3>
<div className="flex gap-1 text-emerald-700">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
<span className="text-xs font-semibold">2-5 pers.</span>
</div>
</div>
<p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
                            Bercée par le murmure de l'eau, cette cabane est la plus immersive. Accessible par un pont de singe, elle ravit les aventuriers en quête de calme absolu.
                        </p>
<div className="mt-auto border-t border-stone-100 pt-6 flex justify-between items-center">
<span className="text-xs text-stone-400">À partir de <span className="text-stone-900 font-bold text-lg">190€</span></span>
<a className="text-[10px] uppercase font-bold tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                                Voir détails <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="experience">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4 sticky top-24">
<h2 className="text-4xl font-serif text-stone-900 mb-6 tracking-tight">Services &amp;<br/>Gastronomie</h2>
<p className="text-stone-500 font-light mb-8 leading-relaxed">
                    Nous avons pensé à tout pour que vous n'ayez qu'à profiter. Des produits du terroir savoyard livrés directement au pied de votre arbre.
                </p>
<button className="bg-emerald-900 text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-800 transition-colors rounded-lg w-full md:w-auto">
                    Réserver les extras
                </button>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
<div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4 text-stone-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:coffee" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-stone-900">Petit-déjeuner Inclus</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        Chaque matin, découvrez votre panier garni de viennoiseries fraîches, confitures locales et jus de fruits, à hisser à la corde depuis votre terrasse.
                    </p>
</div>

<div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
<div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4 text-stone-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:utensils" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-stone-900">Paniers Dîner</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        Savourez la Savoie sans bouger : Tartiflette, fondue, diots, charcuterie artisanale et vins de région. Option végétarienne disponible.
                    </p>
</div>

<div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
<div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4 text-stone-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:sparkles" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-stone-900">Espace Bien-être</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        Profitez de notre sauna finlandais panoramique ou réservez un massage relaxant aux huiles essentielles de pin.
                    </p>
</div>

<div className="p-6 border border-stone-200 rounded-xl hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group">
<div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center mb-4 text-stone-700 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
<iconify-icon icon="lucide:glass-water" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-2 text-stone-900">Apéritif Savoyard</h4>
<p className="text-sm text-stone-500 leading-relaxed">
                        Champagne ou vin de Savoie, accompagnés de fromages de la ferme voisine pour célébrer votre arrivée.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-stone-900 text-white overflow-hidden" id="cadeau">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent z-10"></div>
<div className="absolute right-0 top-0 h-full w-1/2 hidden md:block z-0">
<img className="h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
<div className="max-w-xl">
<span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-3 block">Idée Cadeau</span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Offrez une nuit <br/> <span className="italic text-stone-400">inoubliable.</span></h2>
<p className="text-stone-300 font-light mb-8 text-lg leading-relaxed">
                    Anniversaire, mariage ou simple attention... Le bon cadeau "Entre Terre et Ciel" est la promesse d'un souvenir magique. Valable 18 mois sur toutes nos cabanes.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-stone-900 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                        Commander un bon cadeau
                    </button>
<button className="border border-white/30 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Comment ça marche ?
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white" id="tarifs">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-serif text-stone-900 mb-8">Questions Fréquentes</h3>
<div className="space-y-4">
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer open:bg-white open:shadow-md transition-all border border-transparent open:border-stone-100">
<summary className="flex justify-between items-center font-medium text-stone-800 text-sm">
                            Les cabanes sont-elles chauffées ?
                            <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-stone-500 text-sm mt-3 leading-relaxed pl-2 border-l-2 border-emerald-500">
                            Oui, toutes nos cabanes sont isolées et chauffées (poêle électrique ou chauffage d'appoint) pour vous accueillir confortablement même en plein hiver sous la neige.
                        </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer open:bg-white open:shadow-md transition-all border border-transparent open:border-stone-100">
<summary className="flex justify-between items-center font-medium text-stone-800 text-sm">
                            Comment se passe l'accès aux cabanes ?
                            <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-stone-500 text-sm mt-3 leading-relaxed pl-2 border-l-2 border-emerald-500">
                            L'accès se fait par une marche facile en forêt (5-10 min). Prévoyez des chaussures adaptées. Les bagages peuvent être pris en charge si nécessaire.
                        </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer open:bg-white open:shadow-md transition-all border border-transparent open:border-stone-100">
<summary className="flex justify-between items-center font-medium text-stone-800 text-sm">
                            Les enfants et animaux sont-ils acceptés ?
                            <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-stone-500 text-sm mt-3 leading-relaxed pl-2 border-l-2 border-emerald-500">
                            Les enfants sont les bienvenus dans les cabanes familiales (Mont-Blanc, Ruisseau) sécurisées. Pour des raisons de sécurité et d'hygiène, nos amis les animaux ne sont pas admis.
                        </p>
</details>
<details className="group bg-stone-50 p-4 rounded-lg cursor-pointer open:bg-white open:shadow-md transition-all border border-transparent open:border-stone-100">
<summary className="flex justify-between items-center font-medium text-stone-800 text-sm">
                            Y a-t-il l'eau courante et l'électricité ?
                            <iconify-icon className="text-stone-400 group-open:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</summary>
<p className="text-stone-500 text-sm mt-3 leading-relaxed pl-2 border-l-2 border-emerald-500">
                            Nos cabanes disposent de toilettes sèches et d'une réserve d'eau. L'électricité est disponible pour l'éclairage et recharger vos téléphones. Une salle de bain classique est accessible à l'accueil.
                        </p>
</details>
</div>
</div>

<div className="space-y-6">
<h3 className="text-2xl font-serif text-stone-900 mb-8">Informations Pratiques</h3>
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex items-start gap-4">
<div className="bg-white p-3 rounded-full shadow-sm text-emerald-700">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-sm text-stone-900 uppercase tracking-wide mb-1">Horaires</h4>
<p className="text-sm text-stone-500">Arrivée : 16h00 - 19h00</p>
<p className="text-sm text-stone-500">Départ : Jusqu'à 11h00</p>
</div>
</div>
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex items-start gap-4">
<div className="bg-white p-3 rounded-full shadow-sm text-emerald-700">
<iconify-icon icon="lucide:map" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-sm text-stone-900 uppercase tracking-wide mb-1">Accès</h4>
<p className="text-sm text-stone-500">Situé à Saint-Nicolas-la-Chapelle.</p>
<p className="text-sm text-stone-500">À 15 min de Megève, 2h de Lyon/Genève.</p>
<a className="text-xs font-bold text-emerald-700 mt-2 inline-block border-b border-emerald-700/30 hover:border-emerald-700" href="#">Voir sur Google Maps</a>
</div>
</div>
<div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex items-start gap-4">
<div className="bg-white p-3 rounded-full shadow-sm text-emerald-700">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-sm text-stone-900 uppercase tracking-wide mb-1">Garantie</h4>
<p className="text-sm text-stone-500">Annulation gratuite jusqu'à 30 jours avant.</p>
<p className="text-sm text-stone-500">Paiement sécurisé par CB / Chèques Vacances.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-20 px-6 md:px-12 border-t border-stone-800 text-sm font-light" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="font-serif text-white text-2xl tracking-tight block mb-6" href="#">Entre Terre et Ciel</a>
<p className="leading-relaxed mb-6">
                    Cabanes de charme en Savoie. Une expérience immersive au plus près de la nature.
                </p>
<div className="flex gap-4 text-white">
<a className="hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-emerald-400 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Navigation</h5>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#cabanes">Nos Cabanes</a></li>
<li><a className="hover:text-white transition-colors" href="#experience">Prestations</a></li>
<li><a className="hover:text-white transition-colors" href="#cadeau">Bons Cadeaux</a></li>
<li><a className="hover:text-white transition-colors" href="#">Livre d'or</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Contact</h5>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0" icon="lucide:map-pin"></iconify-icon>
<span>123 Route de Chaucisse,<br/>73590 Saint-Nicolas-la-Chapelle</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0" icon="lucide:phone"></iconify-icon>
<span>+33 (0)6 00 00 00 00</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-shrink-0" icon="lucide:mail"></iconify-icon>
<span>contact@cabanes-etc.fr</span>
</li>
</ul>
</div>
<div>
<h5 className="text-white text-[10px] font-bold uppercase tracking-widest mb-6">Newsletter</h5>
<p className="mb-4 text-xs">Recevez nos offres de dernière minute et l'actualité des saisons.</p>
<form className="flex gap-2">
<input className="bg-stone-800 border-none text-white text-xs px-4 py-2 rounded flex-1 focus:ring-1 focus:ring-emerald-500" placeholder="Votre email" type="email"/>
<button className="bg-emerald-800 text-white px-3 py-2 rounded hover:bg-emerald-700 transition-colors">OK</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest">
<span>© 2023 Cabanes Entre Terre et Ciel. Tous droits réservés.</span>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Mentions Légales</a>
<a className="hover:text-white" href="#">CGV</a>
<a className="hover:text-white" href="#">Plan du site</a>
</div>
</div>
</footer>

    </>
  );
}
