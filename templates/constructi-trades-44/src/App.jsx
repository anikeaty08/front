import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with stroke-width 1.5
      document.addEventListener('DOMContentLoaded', function() {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Toggle extra sub-services inside each card
        document.querySelectorAll('[data-role="toggle-extras"]').forEach(function(btn) {
          btn.addEventListener('click', function() {
            const card = btn.closest('[data-card]');
            const extras = card.querySelectorAll('.extra');
            const expanded = btn.getAttribute('aria-expanded') === 'true';

            extras.forEach(function(item) {
              if (expanded) {
                item.classList.add('hidden');
                item.classList.remove('flex');
              } else {
                item.classList.remove('hidden');
                item.classList.add('flex');
              }
            });

            btn.setAttribute('aria-expanded', (!expanded).toString());
            const label = btn.querySelector('[data-label]');
            const icon = btn.querySelector('svg');
            if (label) label.textContent = expanded ? 'Afficher plus' : 'Afficher moins';
            if (icon) icon.classList.toggle('rotate-180', !expanded);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight">A</div>
<div className="text-slate-900 text-base sm:text-lg font-semibold tracking-tight">ABA GROUPE</div>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Accueil</a>
<a className="hover:text-slate-900 transition-colors" href="#">Réalisations</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-1.5 text-sm font-medium hover:bg-slate-800 hover:shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" href="#devis">
<i className="h-4 w-4" data-lucide="file-edit"></i>
              Demandez un devis
            </a>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
<div className="max-w-3xl">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Nos Métiers</h1>
<p className="mt-4 text-slate-600 leading-relaxed">
            ABA Groupe coordonne l’ensemble des corps de métier du bâtiment avec une approche collaborative et exigeante.
            Nos équipes travaillent de concert pour garantir des chantiers fluides, des délais maîtrisés et une qualité irréprochable, du gros œuvre aux finitions.
          </p>
</div>
</div>
</section>

<main className="pb-28">
<section aria-labelledby="metiers-heading">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="border-t border-slate-200"></div>
<h2 className="sr-only" id="metiers-heading">Liste des métiers</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">


<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="grid"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Carreleur</h3>
<p className="text-sm text-slate-500">Pose soignée et durable pour toutes surfaces</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Sol</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Mur</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Dallage</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="flame"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Chauffagiste</h3>
<p className="text-sm text-slate-500">Confort thermique et performance énergétique</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Poêle</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Insert</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Chaudière</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="snowflake"></i> PAC/Clim</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="wrench"></i> Installation</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="life-buoy"></i> Réparation</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="refresh-ccw"></i> Maintenance/Entretien</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="hammer"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Charpentier</h3>
<p className="text-sm text-slate-500">Structures robustes et sur-mesure</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="factory"></i> Atelier de construction</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="layers"></i> Traditionnelle</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="home"></i> Fermette</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="panel-left"></i> Bardage</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="expand"></i> Extension</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="trees"></i> Terrasse</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="home"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Couvreur</h3>
<p className="text-sm text-slate-500">Étanchéité et protection durable</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Tuile</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Ardoise</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="check"></i> Bac acier</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="chef-hat"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Cuisiniste</h3>
<p className="text-sm text-slate-500">Agencements sur-mesure, fonctionnels et esthétiques</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="utensils"></i> Cuisine</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="wardrobe"></i> Dressing</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="shower-head"></i> Salle de bain</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="beaker"></i> Fabrication plateaux epoxy</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="zap"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Électricien</h3>
<p className="text-sm text-slate-500">Sécurité, conformité et dépannage rapide</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="plug"></i> Neuf</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="cable"></i> Rénovation</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="life-buoy"></i> Dépannage</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="blocks"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Maçon</h3>
<p className="text-sm text-slate-500">Solidité et précision du gros œuvre</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="building-2"></i> Construction</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="redo-2"></i> Rénovation</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="square-pen"></i> Modification</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="ruler"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Menuisier</h3>
<p className="text-sm text-slate-500">Fabrication et pose intérieure/extérieure</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="factory"></i> Atelier de fabrication</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="door-open"></i> Intérieur/Extérieur</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="satellite-dish"></i> Domotique</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="gate"></i> Portail</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="panel-right"></i> Porte de garage</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="blinds"></i> Volet</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="car"></i> Carport</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="square-gantt"></i> Véranda</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="sun"></i> Pergola</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="leaf"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Paysagiste</h3>
<p className="text-sm text-slate-500">Conception et aménagements extérieurs</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="trees"></i> Création/Modification de jardin</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="fence"></i> Clôture</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="paintbrush"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Peintre</h3>
<p className="text-sm text-slate-500">Finitions soignées et durables</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="home"></i> Intérieur/Extérieur</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="square"></i> Sol</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="square"></i> Mur</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="pipe"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Plombier</h3>
<p className="text-sm text-slate-500">Installations fiables et interventions rapides</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="wrench"></i> Création</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="wrench"></i> Réparation</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="shower-head"></i> Sanitaire</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="refresh-ccw"></i> Maintenance/Entretien</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="key"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Serrurier</h3>
<p className="text-sm text-slate-500">Sécurisation et interventions d’urgence</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="badge-check"></i> Contrôle d’accès</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="door-open"></i> Ouverture de porte</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="shield"></i> Mise en sécurité</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="panels-top-left"></i> Vitrerie/Miroiterie</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="lock"></i> Serrure/Sécurité</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="shovel"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Terrassier</h3>
<p className="text-sm text-slate-500">Préparation des sols et réseaux</p>
</div>
</div>
<div className="mt-4 space-y-2">

<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="pickaxe"></i> Fouilles</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="network"></i> Réseau</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="land-plot"></i> Aménagement terrain</div>

<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="droplets"></i> Micro station</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="scissors"></i> Décapage</div>
<div className="extra hidden lg:group-hover:flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="truck"></i> Transport</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<button aria-expanded="false" className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900 rounded-md px-2 py-1.5 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition" data-role="toggle-extras" type="button">
<i className="h-4 w-4 transition-transform" data-lucide="chevron-down"></i>
<span data-label="">Afficher plus</span>
</button>
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>

<article className="group relative rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition p-5 flex flex-col" data-card="">
<div className="flex items-start gap-4">
<div className="shrink-0 h-10 w-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="square"></i>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Vitrier</h3>
<p className="text-sm text-slate-500">Vitrages, miroiterie et sécurisation</p>
</div>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="panels-top-left"></i> Vitrerie/Miroiterie</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><i className="h-4 w-4 text-slate-500" data-lucide="shield"></i> Mise en sécurité</div>
</div>
<div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
<a className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 hover:text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 rounded" href="#">
                  En savoir plus
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</article>













</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10">

</div>
</div>
</section>
</main>

<div className="fixed inset-x-0 bottom-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
<div className="pointer-events-none flex justify-center">
<a className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 text-sm sm:text-base font-medium shadow-sm hover:bg-slate-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 transition ring-1 ring-slate-700/30" href="#" id="devis">
<i className="h-5 w-5" data-lucide="file-edit"></i>
            Demandez un devis
          </a>
</div>
</div>
<div className="h-4"></div>
</div>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex items-center justify-between">
<span>© ABA Groupe</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Mentions légales</a>
<a className="hover:text-slate-700" href="#">Politique de confidentialité</a>
</div>
</div>
</footer>


    </>
  );
}
