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
      

<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-orange-600" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-slate-900">LMD BATIMENT 31</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-orange-600 sm:flex" href="tel:0614783074">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    06 14 78 30 74
                </a>
<a className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" href="#contact">
                    Devis gratuit
                </a>
</div>
</div>
</header>
<main className="">

<section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
<div className="[mask-image:linear-gradient(to_bottom,white,transparent)] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative mx-auto max-w-4xl text-center">
<div className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-400">
<iconify-icon className="mr-1" icon="solar:map-point-linear"></iconify-icon>
                    Intervention en Haute-Garonne (31)
                </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">Couvreur professionnel à <span className="text-orange-500">Bouloc et Toulouse</span> – LMD BATIMENT 31</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                    Rénovation, entretien et réparation de toiture en Haute-Garonne. Artisan de confiance pour une intervention rapide et un devis gratuit.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center transition-colors hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:w-auto text-base font-medium text-white bg-orange-600 w-full rounded-md pt-3.5 pr-6 pb-3.5 pl-6 shadow-sm" href="#contact">
                        Demander un devis gratuit
                    </a>
<a className="inline-flex items-center justify-center gap-2 ring-inset transition-colors hover:bg-white/20 sm:w-auto text-base font-medium text-white bg-white/10 w-full ring-white/20 ring-1 rounded-md pt-3.5 pr-6 pb-3.5 pl-6" href="tel:0614783074">
<iconify-icon className="" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Appeler le 06 14 78 30 74
                    </a>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50 py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around">
<div className="flex items-center gap-3">
<div className="flex text-orange-500">
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">4.8/5 (21+ avis vérifiés)</span>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<iconify-icon className="text-xl text-orange-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Artisan Couvreur Local
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<iconify-icon className="text-xl text-orange-600" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        + de 20 clients satisfaits
                    </div>
</div>
</div>
</section>

<section className="sm:py-24 pt-20 pb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                            Votre expert toiture de confiance en Haute-Garonne
                        </h2>
<div className="mt-6 space-y-6 text-base leading-relaxed text-slate-600">
<p className="">
                                Dirigée par <strong>Mike Limbergere</strong>, LMD BATIMENT 31 est une entreprise locale spécialisée dans les travaux de couverture, basée à Bouloc. Nous intervenons sur l'ensemble de la Haute-Garonne pour préserver et embellir votre patrimoine.
                            </p>
<p className="">
                                Notre réputation s'est construite sur des valeurs simples : un <strong>conseil honnête</strong>, une <strong>tarification juste</strong> et un <strong className="">travail de qualité supérieure</strong>. Nos clients apprécient particulièrement notre approche transparente ; nous vous recommanderons toujours la solution la plus rentable et durable, sans jamais pousser à des réparations inutiles.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-4 lg:grid-cols-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Conseils honnêtes</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Prix justes</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Qualité artisanale</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Action rapide</span>
</div>
</div>
</div>
<div className="relative rounded-2xl bg-slate-100 p-8 sm:p-12">
<div className="absolute inset-0 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100"></div>
<div className="relative flex flex-col items-center text-center">
<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
<iconify-icon className="text-2xl text-slate-900" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Besoin d'une intervention rapide ?</h3>
<p className="mt-2 text-sm text-slate-600">Nous sommes disponibles 6j/7 pour sécuriser votre toiture.</p>
<a className="inline-flex items-center justify-center gap-2 transition-colors hover:bg-slate-800 text-sm font-medium text-white bg-slate-900 w-full rounded-md mt-6 pt-2.5 pr-4 pb-2.5 pl-4" href="tel:0614783074">
                                Contactez Mike au 06 14 78 30 74
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-slate-50 pt-20 pb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Nos services de couverture</h2>
<p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">De l'entretien régulier à la rénovation complète, nous
      maîtrisons toutes les techniques pour protéger votre habitation.</p>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="inline-flex text-orange-600 bg-orange-50 w-10 h-10 ring-orange-500/20 ring-1 rounded-lg mb-4 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] items-center justify-center">
<iconify-icon className="text-xl" icon="solar:droplets-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl" height="20" icon="solar:paint-roller-outline" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Nettoyage &amp; Démoussage</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Spécialiste en nettoyage de toiture à Bouloc.
        Élimination des mousses, lichens et traitements hydrofuges pour prolonger la durée de vie de vos tuiles.</p>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-500/20">
<iconify-icon className="text-xl" height="20" icon="solar:home-angle-linear" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Rénovation &amp; Réparation</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Réparation de toiture sur Toulouse et sa région.
        Remplacement de tuiles cassées, réparation de faîtage et rénovation complète de toiture (31).</p>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-500/20">
<iconify-icon className="text-xl" height="20" icon="solar:water-sun-linear" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Pose de Gouttières</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Installation experte de gouttières en aluminium.
        Création sur mesure, intégration parfaite à votre façade et pose de systèmes pare-feuilles.</p>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-500/20">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Inspection &amp; Entretien</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Bilan de santé de votre toit, recherche de fuites,
        vérification de l'étanchéité et maintenance préventive avant l'hiver.</p>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-500/20">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Planches de Rive</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Habillage et protection de vos planches de rive pour
        une finition esthétique impeccable et une protection durable contre les intempéries.</p>
</div>

<div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600 ring-1 ring-orange-500/20">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Étanchéité Toiture</h3>
<p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">Traitement imperméabilisant et réparation des points
        singuliers (cheminées, fenêtres de toit) pour garantir une isolation parfaite.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-20 sm:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

<div className="">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">Pourquoi choisir LMD BATIMENT 31 ?</h2>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700"><strong>Intervention rapide</strong> en cas d'urgence ou de fuite.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700"><strong>Devis gratuit</strong> et transparent, sans mauvaise surprise.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700"><strong>Travail soigné</strong> respectant les normes de l'artisanat français.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Utilisation de <strong>produits de qualité</strong> professionnelle.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700"><strong>Artisan local de confiance</strong> basé à Bouloc.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-xl text-orange-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Plus de <strong>20 avis clients positifs</strong> (Note 4.8/5).</span>
</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
<div className="mb-6 flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200">
<iconify-icon className="text-xl text-slate-700" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Zone d'intervention</h2>
</div>
<p className="text-sm text-slate-600">Nous nous déplaçons rapidement dans le nord toulousain et sur toute la Haute-Garonne (31).</p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">Bouloc</span>
<span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">Toulouse</span>
<span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">Fronton</span>
<span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">Villemur-sur-Tarn</span>
<span className="inline-flex items-center rounded-md bg-white px-2.5 py-1 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200">Castelnau-d’Estrétefonds</span>
<span className="inline-flex items-center rounded-md bg-slate-900 px-2.5 py-1 text-sm font-medium text-white shadow-sm">Toute la Haute-Garonne</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 sm:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">L'avis de nos clients</h2>
<p className="mt-4 text-base text-slate-600">Découvrez ce que nos clients disent de notre travail en Haute-Garonne.</p>
</div>
<div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-700">"Entreprise très réactive et professionnelle. Intervention rapide après une tempête et travail impeccable. Je recommande fortement pour toute réparation de toiture."</p>
<div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">J</div>
<span className="text-sm font-medium text-slate-900">Jean P.</span>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex gap-1 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-700">"Artisan sérieux et minutieux. Nettoyage de toiture et pose de gouttières parfaitement réalisés à Bouloc. Le résultat est au-delà de mes attentes."</p>
<div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">M</div>
<span className="text-sm font-medium text-slate-900">Marie L.</span>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
<div className="flex gap-1 text-orange-500">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="mt-4 flex-1 text-sm italic leading-relaxed text-slate-700">"Très bons conseils et travail soigné. Devis rapide et délais respectés. M. Limbergere a su trouver la solution la plus économique pour ma rénovation."</p>
<div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-medium text-slate-600">C</div>
<span className="text-sm font-medium text-slate-900">Claude D.</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-600 px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Besoin d’un couvreur fiable en Haute-Garonne ?</h2>
<p className="mt-4 text-orange-100">N'attendez pas que les dégâts s'aggravent. Contactez-nous dès aujourd'hui.</p>
<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto" href="tel:0614783074">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Appeler maintenant
                    </a>
<a className="inline-flex w-full items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto" href="#contact">
                        Demander un devis gratuit
                    </a>
</div>
</div>
</section>

<section className="sm:py-24 bg-white pt-20 pb-20" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-16 lg:grid-cols-2">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contactez-nous</h2>
<p className="mt-4 text-base text-slate-600">Pour toute demande de renseignement ou pour obtenir un devis gratuit, remplissez le formulaire ou contactez-nous directement.</p>
<div className="mt-10 space-y-8">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
<iconify-icon className="text-xl text-slate-700" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Téléphone</h3>
<p className="mt-1 text-sm text-slate-600"><a className="hover:text-orange-600 hover:underline" href="tel:0614783074">06 14 78 30 74</a></p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
<iconify-icon className="text-xl text-slate-700" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Adresse</h3>
<p className="mt-1 text-sm text-slate-600">4 Chemin de Traouquet<br/>31620 Bouloc, France</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50">
<iconify-icon className="text-xl text-slate-700" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Horaires d'ouverture</h3>
<p className="mt-1 text-sm text-slate-600">Lundi - Samedi : 08:00 – 20:00<br/>Dimanche : Fermé</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
<form action="#" className="space-y-6" method="POST">
<div className="grid gap-6 sm:grid-cols-2">
<div className="">
<label className="block text-sm font-medium text-slate-900" htmlFor="name">Nom complet</label>
<div className="mt-2">
<input autocomplete="name" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 px-3" id="name" name="name" placeholder="Jean Dupont" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-900" htmlFor="phone">Téléphone</label>
<div className="mt-2">
<input autocomplete="tel" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 px-3" id="phone" name="phone" placeholder="06 00 00 00 00" type="tel"/>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900" htmlFor="email">Email</label>
<div className="mt-2">
<input autocomplete="email" className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 px-3" id="email" name="email" placeholder="jean@exemple.fr" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-slate-900" htmlFor="message">Votre besoin</label>
<div className="mt-2">
<textarea className="block w-full rounded-md border-0 py-2.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 px-3" id="message" name="message" placeholder="Décrivez les travaux souhaités (ex: nettoyage toiture, fuite, devis gouttières...)" rows="4"></textarea>
</div>
</div>
<button className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" type="submit">
                                Envoyer la demande
                            </button>
<p className="text-center text-xs text-slate-500">Nous vous recontacterons dans les plus brefs délais.</p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-slate-50 py-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-slate-900">LMD BATIMENT 31</span>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-600">
<span className="">4 Chemin de Traouquet, 31620 Bouloc</span>
<a className="hover:text-slate-900" href="tel:0614783074">06 14 78 30 74</a>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row text-xs text-slate-500">
<p className="">© 2026 LMD BATIMENT 31 - Par Graphics Corner. Tous droits réservés.</p>
<p>Artisan Couvreur Haute-Garonne (31) - Toulouse, Bouloc, Fronton.</p>
</div>
</div>
</footer>

    </>
  );
}
