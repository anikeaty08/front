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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
<div className="max-w-7xl mx-auto">
<div className="glass-panel border border-zinc-200/50 rounded-full px-5 py-3 flex items-center justify-between shadow-sm">
<a className="text-sm font-semibold tracking-tight uppercase flex items-center gap-2 text-zinc-900" href="#">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                    A LA CHAUME
                </a>
<div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 items-center">
<a className="hover:text-emerald-700 transition-colors" href="#lieu">Le Lieu</a>
<a className="hover:text-emerald-700 transition-colors" href="#carte">La Carte</a>
<a className="hover:text-emerald-700 transition-colors font-semibold text-emerald-600" href="#reservation">Réserver</a>
<a className="hover:text-emerald-700 transition-colors" href="#bieres">Bières</a>
<a className="hover:text-emerald-700 transition-colors" href="#concerts">Concerts</a>
<a className="hover:text-emerald-700 transition-colors" href="#privatisation">Privatisation</a>
</div>
<a className="group flex items-center gap-2 hover:bg-zinc-800 transition-colors text-xs font-medium text-white bg-zinc-900 rounded-full py-2 px-4" href="tel:0164248157">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                    01 64 24 81 57
                </a>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="A La Chaume Terrace" className="w-full h-full object-cover brightness-[0.7]" src="https://images.unsplash.com/photo-1572569769566-562a0a2df366?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/30"></div>
</div>
<div className="relative z-10 text-center px-4 mt-12">
<h1 className="text-5xl md:text-8xl font-semibold text-white tracking-tight mb-6">A La Chaume</h1>
<p className="text-lg md:text-xl text-zinc-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Cuisine traditionnelle, bar à bières et musique live au cœur de la forêt de Fontainebleau.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-500 transition-colors" href="#reservation">Réserver une table</a>
<a className="px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors" href="#carte">Découvrir la carte</a>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white" id="lieu">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4 block">Notre Histoire</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Un refuge authentique en lisière de forêt.</h2>
<div className="space-y-4 text-zinc-600 leading-relaxed font-light">
<p>Situé à <span className="text-zinc-900 font-medium">Noisy-sur-École</span>, A La Chaume est bien plus qu'un simple restaurant. C'est un lieu de vie où la nature rencontre la convivialité.</p>
<p>Nous disposons de <span className="text-zinc-900 font-medium">deux salles intérieures</span>. Le rez-de-chaussée, chaleureux et animé, et notre salle à l'étage, idéale pour les soirées concerts ou vos événements privés.</p>
<p>Dès l'arrivée des beaux jours, nos <span className="text-zinc-900 font-medium">deux terrasses</span> vous accueillent pour un déjeuner au soleil ou un apéritif en fin de journée, bercés par le calme de la forêt de Fontainebleau.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Interieur" className="rounded-2xl h-64 w-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Terrasse" className="rounded-2xl h-64 w-full object-cover mt-8 shadow-sm" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200" id="carte">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<iconify-icon className="text-emerald-600 mb-4" icon="solar:chef-hat-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">La Carte du Restaurant</h2>
<p className="text-zinc-500 mt-2 font-light">Produits frais, recettes généreuses et saveurs de saison.</p>
</div>
<div className="space-y-16">

<div>
<h3 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-2 mb-6 flex items-center justify-between">
                        Les Entrées
                        <span className="text-xs font-normal text-zinc-400 italic">Pour bien commencer</span>
</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="flex justify-between items-start">
<div>
<p className="font-medium text-zinc-900">Salade de Chèvre Chaud</p>
<p className="text-sm text-zinc-500 font-light">Miel de pays, noix et croûtons dorés</p>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<p className="font-medium text-zinc-900">Terrine Maison</p>
<p className="text-sm text-zinc-500 font-light">Pickles et pain de campagne grillé</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-2 mb-6 flex items-center justify-between">
                        Plats Traditionnels
                        <span className="text-xs font-normal text-zinc-400 italic">Cuisinés avec passion</span>
</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-6">
<div>
<p className="font-medium text-zinc-900">Entrecôte (env. 300g)</p>
<p className="text-sm text-zinc-500 font-light">Frites maison, salade et sauce poivre</p>
</div>
<div>
<p className="font-medium text-zinc-900">Pavé de Saumon à l'Unilatérale</p>
<p className="text-sm text-zinc-500 font-light">Légumes rôtis et crème de citron</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="font-medium text-zinc-900">Salade Landaise Royale</p>
<p className="text-sm text-zinc-500 font-light">Gésiers, magrets fumés, foie gras</p>
</div>
<div>
<p className="font-medium text-zinc-900">Burger de la Chaume</p>
<p className="text-sm text-zinc-500 font-light">Bœuf français, comté affiné, oignons confits</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-2 mb-6 flex items-center justify-between">
                        Desserts &amp; Douceurs
                        <span className="text-xs font-normal text-zinc-400 italic">Faits maison</span>
</h3>
<div className="grid md:grid-cols-2 gap-8">
<div className="flex justify-between items-start">
<div>
<p className="font-medium text-zinc-900">Crêpe Maison</p>
<p className="text-sm text-zinc-500 font-light">Sucre, chocolat ou caramel beurre salé</p>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<p className="font-medium text-zinc-900">Mousse au Chocolat Intense</p>
<p className="text-sm text-zinc-500 font-light">Éclats de noisettes torréfiées</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="reservation">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-100 shadow-sm">
<div className="mb-8">
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-2 block">Disponibilités</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Réserver une table</h2>
<p className="text-zinc-500 mt-2 font-light">Confirmation immédiate par mail ou SMS.</p>
</div>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Date</label>
<input className="form-input" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Service</label>
<select className="form-input bg-white appearance-none">
<option>Déjeuner (12h00 - 14h30)</option>
<option>Dîner (19h00 - 22h30)</option>
</select>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Nombre de convives</label>
<select className="form-input bg-white appearance-none">
<option>1 personne</option>
<option>2 personnes</option>
<option>3 personnes</option>
<option>4 personnes</option>
<option>5 personnes</option>
<option>6 personnes</option>
<option>Groupe (+6)</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Téléphone</label>
<input className="form-input" placeholder="06 .. .. .. .." type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Nom de la réservation</label>
<input className="form-input" placeholder="Votre nom" type="text"/>
</div>
<button className="w-full py-4 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/10 mt-4" type="submit">
                            Confirmer la réservation
                        </button>
</form>
</div>
<div className="space-y-10">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4 italic">"Une cuisine qui a du sens, dans un cadre qui a du cœur."</h3>
<p className="text-zinc-600 font-light leading-relaxed">
                            Que ce soit pour un déjeuner d'affaires rapide ou un dîner prolongé entre amis, nous vous assurons un accueil chaleureux et une table préparée avec soin.
                        </p>
</div>
<div className="grid gap-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-emerald-600" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<p className="text-sm font-semibold">Horaires d'ouverture</p>
<p className="text-xs text-zinc-500 font-light">Mardi au Samedi : 12h-14h30 / 19h-22h30. Dimanche : 12h-15h.</p>
</div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-emerald-600" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<p className="text-sm font-semibold">Localisation</p>
<p className="text-xs text-zinc-500 font-light">3 Rue du Télégraphe, 77123 Noisy-sur-École. Parking gratuit à proximité.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 text-white overflow-hidden relative" id="bieres">
<div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-950/20 blur-3xl rounded-full translate-x-1/2"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 block">Le Bar à Bières</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Plus de 50 références à la carte.</h2>
<p className="text-zinc-400 font-light leading-relaxed text-lg mb-8">
                        Une sélection pointue de bières artisanales, de micro-brasseries locales et de classiques incontournables. Blondes rafraîchissantes, IPA houblonnées, ambrées complexes ou brunes corsées : explorez notre cave unique dans la région.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400 mb-2" icon="solar:bottle-linear" width="24"></iconify-icon>
<p className="text-xs uppercase font-medium text-zinc-500">Bouteilles</p>
<p className="text-xl font-semibold">50+ Choix</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10">
<iconify-icon className="text-emerald-400 mb-2" icon="solar:cup-linear" width="24"></iconify-icon>
<p className="text-xs uppercase font-medium text-zinc-500">À la pression</p>
<p className="text-xl font-semibold">Tournants</p>
</div>
</div>
</div>
<div className="md:w-1/2">
<img alt="Bieres selection" className="rounded-3xl shadow-2xl brightness-90" src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="concerts">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Concerts &amp; Ambiance Live</h2>
<p className="text-zinc-500 font-light max-w-2xl mx-auto">La musique fait partie de notre ADN. Chaque mois, l'étage de la Chaume s'anime pour des soirées inoubliables.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
<iconify-icon className="text-emerald-600 mb-4" icon="solar:music-note-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Jazz &amp; Blues</h4>
<p className="text-sm text-zinc-500 font-light">Pour des soirées feutrées et authentiques.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
<iconify-icon className="text-emerald-600 mb-4" icon="solar:playback-speed-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Rock &amp; Folk</h4>
<p className="text-sm text-zinc-500 font-light">Une énergie communicative pour vibrer ensemble.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
<iconify-icon className="text-emerald-600 mb-4" icon="solar:calendar-date-linear" width="28"></iconify-icon>
<h4 className="font-semibold mb-2">Programmation</h4>
<p className="text-sm text-zinc-500 font-light">Suivez-nous sur les réseaux pour les dates.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-50/50" id="privatisation">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-4 block">Événements Privés</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Privatisez la Chaume pour vos moments spéciaux.</h2>
<p className="text-zinc-600 font-light leading-relaxed mb-8">
                        Anniversaires, repas d'entreprise, séminaires ou fêtes de famille. Notre salle à l'étage est entièrement privatisable pour vos groupes (jusqu'à 40 personnes). Nous adaptons nos menus et notre service à vos besoins.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Capacité Modulable</h4>
<p className="text-xs text-zinc-500 font-light">De 10 à 40 personnes en salle privative.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm">
<iconify-icon icon="solar:clapperboard-edit-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Sur Mesure</h4>
<p className="text-xs text-zinc-500 font-light">Menus personnalisés et options boissons sur devis.</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-emerald-900/5">
<h3 className="text-xl font-semibold text-zinc-900 mb-6">Demande de devis</h3>
<form action="#" className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Nom complet</label>
<input className="form-input" placeholder="Ex: Jean Dupont" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Email</label>
<input className="form-input" placeholder="jean@exemple.fr" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Type d'événement</label>
<select className="form-input bg-white appearance-none">
<option>Anniversaire</option>
<option>Entreprise / Séminaire</option>
<option>Repas de famille</option>
<option>Autre</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Nombre d'invités</label>
<input className="form-input" placeholder="Ex: 25" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Date souhaitée</label>
<input className="form-input" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Message ou précisions</label>
<textarea className="form-input resize-none" placeholder="Décrivez votre projet..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors mt-2" type="submit">
                            Envoyer ma demande
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="space-y-6 md:w-1/3">
<div className="text-sm font-semibold tracking-tight uppercase flex items-center gap-2 text-white">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    A LA CHAUME
                </div>
<p className="text-sm font-light leading-relaxed">
                    3 Rue du Télégraphe, 77123 Noisy-sur-École.
                    <br/>Le goût du terroir, le plaisir de la musique.
                </p>
</div>
<div className="grid grid-cols-2 gap-12 md:w-1/2">
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-widest">Navigation</h4>
<ul className="text-sm space-y-2 font-light">
<li><a className="hover:text-emerald-400 transition-colors" href="#lieu">Le Lieu</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#carte">La Carte</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#reservation">Réserver</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#bieres">Bières</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#concerts">Concerts</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-widest">Suivez-nous</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between text-xs font-light">
<p>© 2024 A La Chaume. Tous droits réservés.</p>
<p>L'abus d'alcool est dangereux pour la santé, à consommer avec modération.</p>
</div>
</footer>

    </>
  );
}
