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
sans: ['Inter', 'sans-serif'],
},
}
}
}



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
      

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-zinc-950/80 border-white/5">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase flex items-center gap-2 text-white" href="#">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
                DRY CLEAN
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#about">À propos</a>
<a className="transition-colors hover:text-white" href="#reviews">Avis</a>
<a className="transition-colors hover:text-white" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-zinc-950 hover:bg-zinc-200" href="#contact">
                    Réserver
                </a>
<button className="md:hidden text-2xl text-white">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center justify-center pt-16 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Car Detailing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 backdrop-blur-sm bg-white/5 border-white/10 text-zinc-300">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Disponible pour réservation
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight mb-6 text-white">
                L'art de sublimer <br className="hidden md:block"/> votre véhicule.
            </h1>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-10 font-normal text-zinc-400">
                Services de nettoyage et detailing automobile haut de gamme. Nous redonnons à votre voiture son éclat d'origine avec des produits respectueux de l'environnement et une précision d'orfèvre.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200" href="#contact">
                    Prendre rendez-vous
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full border text-sm font-medium transition-colors backdrop-blur-sm flex items-center justify-center bg-white/5 border-white/10 text-white hover:bg-white/10" href="#services">
                    Découvrir nos offres
                </a>
</div>
</div>
</section>

<section className="py-24 border-t relative border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-white">Pourquoi choisir Dry Clean ?</h2>
<p className="text-sm md:text-base max-w-xl mx-auto">L'excellence dans chaque détail, pour une satisfaction garantie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors border-white/5">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Produits Écologiques</h3>
<p className="text-sm">Nous utilisons des solutions de nettoyage biodégradables de première qualité, protégeant votre véhicule et l'environnement.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors border-white/5">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Expertise Détaillée</h3>
<p className="text-sm">Nos techniciens sont formés aux techniques de detailing les plus avancées pour un résultat sans aucun compromis.</p>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border hover:bg-white/[0.04] transition-colors border-white/5">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-zinc-900 border-white/10 text-white">
<iconify-icon className="text-2xl" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-white">Service à Domicile</h3>
<p className="text-sm">Nous nous déplaçons chez vous ou sur votre lieu de travail pour vous offrir une expérience sans contrainte.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-tr to-transparent rounded-3xl blur-xl z-0 from-white/5"></div>
<img alt="Notre équipe au travail" className="relative z-10 w-full h-auto rounded-2xl border object-cover aspect-[4/3] grayscale-[30%] hover:grayscale-0 transition-all duration-700 border-white/10" src="https://images.unsplash.com/photo-1552930294-6b595f4c2974?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-6 text-white">La passion de la perfection automobile.</h2>
<p className="text-sm md:text-base mb-6">
                        Fondée avec la vision de redéfinir les standards de l'entretien automobile, Dry Clean n'est pas qu'une simple station de lavage. Nous sommes des artisans du détail.
                    </p>
<p className="text-sm md:text-base mb-8">
                        Chaque véhicule qui nous est confié bénéficie d'une attention particulière. Du lavage extérieur à la main jusqu'à la protection céramique de pointe, notre mission est de restaurer, protéger et maintenir la valeur et la beauté de votre voiture.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
<div>
<div className="text-3xl font-semibold tracking-tight mb-1 text-white">5+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Années d'expérience</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight mb-1 text-white">2k+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Véhicules traités</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Nos Services</h2>
<p className="text-sm md:text-base">Des forfaits adaptés à vos besoins, de l'entretien régulier à la restauration complète.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group flex flex-col rounded-2xl bg-white/[0.02] border overflow-hidden transition-all duration-300 border-white/5 hover:border-white/20">
<div className="h-48 overflow-hidden relative">
<img alt="Lavage Extérieur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&amp;w=2834&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white">Essentiel Extérieur</h3>
<span className="text-sm font-medium px-2 py-1 rounded-md text-white bg-white/10">Dès 49€</span>
</div>
<p className="text-sm mb-6 flex-grow">Lavage à la main avec technique des deux seaux, décontamination jantes, séchage microfibre et pose de cire rapide.</p>
<ul className="text-xs space-y-2 mb-6 text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Lavage carrosserie</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Nettoyage jantes</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Brillant pneus</li>
</ul>
<a className="w-full py-2 rounded-lg border text-center text-sm transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black" href="#contact">Réserver</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl bg-white/[0.02] border overflow-hidden transition-all duration-300 border-white/5 hover:border-white/20">
<div className="h-48 overflow-hidden relative">
<img alt="Nettoyage Intérieur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1625690180114-5530b1304127?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white">Profondeur Intérieur</h3>
<span className="text-sm font-medium px-2 py-1 rounded-md text-white bg-white/10">Dès 89€</span>
</div>
<p className="text-sm mb-6 flex-grow">Aspiration minutieuse, shampoing des tissus ou soin des cuirs, nettoyage des plastiques et vitres intérieures.</p>
<ul className="text-xs space-y-2 mb-6 text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Aspiration complète</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Dressing plastiques</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Parfum habitacle</li>
</ul>
<a className="w-full py-2 rounded-lg border text-center text-sm transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black" href="#contact">Réserver</a>
</div>
</div>

<div className="group flex flex-col rounded-2xl bg-white/[0.02] border overflow-hidden transition-all duration-300 relative border-white/5 hover:border-white/20">

<div className="absolute top-4 right-4 z-10 text-xs font-medium px-2 py-1 rounded-md shadow-lg bg-white text-black">Premium</div>
<div className="h-48 overflow-hidden relative">
<img alt="Traitement Céramique" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623564493114-f35400f4a98b?w=800&amp;q=80"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium tracking-tight text-white">Detailing &amp; Céramique</h3>
<span className="text-sm font-medium px-2 py-1 rounded-md text-white bg-white/10">Sur devis</span>
</div>
<p className="text-sm mb-6 flex-grow">Restauration carrosserie (polissage), correction des micro-rayures et pose d'une protection céramique longue durée.</p>
<ul className="text-xs space-y-2 mb-6 text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Polissage machine</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Protection 12 à 36 mois</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Effet hydrophobe</li>
</ul>
<a className="w-full py-2 rounded-lg text-center text-sm transition-colors font-medium bg-white text-black hover:bg-zinc-200" href="#contact">Demander un devis</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t overflow-hidden border-white/5 bg-zinc-900/10" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 text-white">Ils nous font confiance</h2>
<p className="text-sm md:text-base">Découvrez ce que nos clients disent de nos services.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-zinc-300">"Incroyable ! Ma voiture de 5 ans a l'air de sortir du concessionnaire. L'équipe est pro, ponctuelle et le souci du détail est hallucinant. Je recommande les yeux fermés."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 text-white">MB</div>
<div>
<div className="text-sm font-medium text-white">Marc B.</div>
<div className="text-xs text-zinc-500">Service Premium</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-zinc-300">"Le nettoyage intérieur a sauvé mes sièges après les vacances avec les enfants. Les taches ont disparu et l'odeur de propre est très agréable, pas chimique du tout."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 text-white">SL</div>
<div>
<div className="text-sm font-medium text-white">Sophie L.</div>
<div className="text-xs text-zinc-500">Profondeur Intérieur</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 mb-4 text-white">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm mb-6 leading-relaxed text-zinc-300">"J'ai fait appel à Dry Clean pour préparer mon véhicule avant la revente. Le résultat était parfait, j'ai pu la vendre au-dessus de mon prix espéré. Merci !"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 text-white">JD</div>
<div>
<div className="text-sm font-medium text-white">Julien D.</div>
<div className="text-xs text-zinc-500">Essentiel Extérieur</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-12 text-center text-white">Questions Fréquentes</h2>
<div className="space-y-4">
<details className="group rounded-xl border bg-white/[0.01] [&amp;_summary::-webkit-details-marker]:hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="text-sm md:text-base tracking-tight">Combien de temps dure une prestation ?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                        Le temps varie selon la prestation choisie. Un lavage extérieur simple prend environ 1 heure, un nettoyage complet intérieur/extérieur environ 2 à 3 heures, et un detailing avec pose de céramique peut nécessiter l'immobilisation du véhicule sur 1 à 2 jours.
                    </div>
</details>
<details className="group rounded-xl border bg-white/[0.01] [&amp;_summary::-webkit-details-marker]:hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="text-sm md:text-base tracking-tight">Utilisez-vous de l'eau pour le nettoyage à domicile ?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                        Nous proposons deux options : un nettoyage traditionnel si vous disposez d'un point d'eau, ou un nettoyage à la vapeur / sans eau utilisant des produits spécifiques encapsulant la saleté, idéal pour les interventions en parking sous-terrain ou sans accès à l'eau.
                    </div>
</details>
<details className="group rounded-xl border bg-white/[0.01] [&amp;_summary::-webkit-details-marker]:hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="text-sm md:text-base tracking-tight">Qu'est-ce qu'un traitement céramique ?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                        C'est une protection liquide polymère qui se lie chimiquement à la peinture de votre voiture, créant une couche protectrice résistante aux UV, aux produits chimiques et aux micro-rayures. Elle offre également une brillance extrême et facilite grandement les futurs lavages.
                    </div>
</details>
<details className="group rounded-xl border bg-white/[0.01] [&amp;_summary::-webkit-details-marker]:hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="text-sm md:text-base tracking-tight">Retirez-vous les poils d'animaux ?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                        Oui, nous disposons d'équipements spécifiques (brosses rotatives, aspirateurs puissants) pour retirer les poils d'animaux incrustés dans les moquettes et les sièges. Un supplément peut s'appliquer selon la quantité.
                    </div>
</details>
<details className="group rounded-xl border bg-white/[0.01] [&amp;_summary::-webkit-details-marker]:hidden border-white/5">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span className="text-sm md:text-base tracking-tight">Comment puis-je payer ?</span>
<span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-zinc-400">
                        Nous acceptons les paiements par carte bancaire (terminal mobile), espèces ou virement bancaire. Une facture vous sera systématiquement envoyée par email à la fin de la prestation.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2 text-white">Derniers articles</h2>
<p className="text-sm md:text-base">Conseils et astuces pour l'entretien de votre auto.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm transition-colors font-medium text-white hover:text-zinc-300" href="#">
                    Voir tout <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 border border-white/5">
<img alt="Entretien cuir" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2 font-medium">
<time datetime="2023-10-15">15 Oct 2023</time>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Conseils</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-zinc-300 transition-colors text-white">Comment bien entretenir ses sièges en cuir ?</h3>
<p className="text-sm line-clamp-2">Découvrez les gestes essentiels pour éviter que votre cuir ne craquelle et pour qu'il garde sa souplesse d'origine au fil des années.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 border border-white/5">
<img alt="Cire vs Céramique" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1662800231402-6a99e06dfa78?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2 font-medium">
<time datetime="2023-09-28">28 Sep 2023</time>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Protection</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-zinc-300 transition-colors text-white">Cire naturelle ou traitement céramique : que choisir ?</h3>
<p className="text-sm line-clamp-2">Comparatif détaillé entre ces deux types de protection pour vous aider à faire le meilleur choix pour votre véhicule selon vos besoins et votre budget.</p>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-4 border border-white/5">
<img alt="Erreurs lavage" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1556505238-a6ad7894bdab?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2 font-medium">
<time datetime="2023-09-10">10 Sep 2023</time>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Guide</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-zinc-300 transition-colors text-white">Les 5 erreurs fatales lors du lavage aux rouleaux.</h3>
<p className="text-sm line-clamp-2">Pourquoi les stations de lavage automatiques créent des micro-rayures sur votre vernis et comment laver votre voiture en toute sécurité.</p>
</article>
</div>
<a className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm font-medium border py-3 rounded-lg w-full text-white border-white/10" href="#">
                Voir tous les articles
            </a>
</div>
</section>

<section className="py-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Prêt à faire briller votre véhicule ?</h2>
<p className="text-sm md:text-base mb-8">Contactez-nous pour un devis personnalisé ou pour prendre rendez-vous. Nous vous répondrons dans les plus brefs délais.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300" htmlFor="name">Nom complet</label>
<input className="w-full bg-white/[0.02] border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-colors border-white/10 text-white" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300" htmlFor="phone">Téléphone</label>
<input className="w-full bg-white/[0.02] border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-colors border-white/10 text-white" id="phone" placeholder="06 12 34 56 78" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300" htmlFor="email">Email</label>
<input className="w-full bg-white/[0.02] border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-colors border-white/10 text-white" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300" htmlFor="service">Service souhaité</label>
<div className="relative">
<select className="w-full bg-white/[0.02] border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-colors appearance-none border-white/10 text-zinc-400" id="service">
<option>Lavage Extérieur</option>
<option>Nettoyage Intérieur</option>
<option>Detailing Complet</option>
<option>Traitement Céramique</option>
<option>Autre demande</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300" htmlFor="message">Message (Modèle, Année, État)</label>
<textarea className="w-full bg-white/[0.02] border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 focus:bg-white/[0.05] transition-colors resize-none border-white/10 text-white" id="message" placeholder="Décrivez vos besoins..." rows="4"></textarea>
</div>
<button className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors mt-2 bg-white text-zinc-950 hover:bg-zinc-200" type="submit">
                            Envoyer la demande
                        </button>
</form>
</div>

<div className="h-full min-h-[400px] flex flex-col">
<div className="flex-grow rounded-2xl overflow-hidden border relative mb-6 border-white/5 bg-zinc-900">

<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647867332214!5m2!1sfr!2sfr" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg) grayscale(100%) contrast(100%)'}} width="100%">
</iframe>
</div>
<div className="grid grid-cols-2 gap-6 text-sm">
<div>
<div className="font-medium mb-1 flex items-center gap-2 text-white">
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon> Atelier
                            </div>
<p className="text-zinc-400">123 Avenue des Champs,<br/>75000 Paris, France</p>
</div>
<div>
<div className="font-medium mb-1 flex items-center gap-2 text-white">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon> Horaires
                            </div>
<p className="text-zinc-400">Lun - Ven : 8h - 19h<br/>Samedi : 9h - 17h</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-lg font-medium tracking-tighter uppercase flex items-center gap-2 mb-4 text-white" href="#">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                        DRY CLEAN
                    </a>
<p className="text-xs text-zinc-500 max-w-xs">
                        L'art du détail automobile. Nous prenons soin de votre véhicule avec la plus grande exigence.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-white">Services</h4>
<ul className="space-y-2 text-xs">
<li><a className="transition-colors hover:text-white" href="#">Lavage Classique</a></li>
<li><a className="transition-colors hover:text-white" href="#">Detailing Intérieur</a></li>
<li><a className="transition-colors hover:text-white" href="#">Rénovation Optiques</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-white">Entreprise</h4>
<ul className="space-y-2 text-xs">
<li><a className="transition-colors hover:text-white" href="#about">À propos</a></li>
<li><a className="transition-colors hover:text-white" href="#reviews">Avis clients</a></li>
<li><a className="transition-colors hover:text-white" href="#">Galerie réalisations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-white">Légal</h4>
<ul className="space-y-2 text-xs">
<li><a className="transition-colors hover:text-white" href="#">Mentions légales</a></li>
<li><a className="transition-colors hover:text-white" href="#">Politique de confidentialité</a></li>
<li><a className="transition-colors hover:text-white" href="#">CGV</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs border-white/5 text-zinc-600">
<p>© 2023 Dry Clean. Tous droits réservés.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon className="text-lg" icon="solar:map-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
