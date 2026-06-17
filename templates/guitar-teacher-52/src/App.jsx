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
      

<header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
<nav aria-label="Global" className="flex lg:px-8 max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center gap-2 text-orange-900" href="#">
<iconify-icon className="text-2xl" icon="solar:music-notes-linear"></iconify-icon>
<span className="font-semibold text-xl tracking-tight">BÉNÉDICTE</span>
</a>
</div>
<div className="hidden lg:flex lg:gap-x-8">
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-orange-600 transition-colors" href="#a-propos">À propos</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-orange-600 transition-colors" href="#methode">La méthode</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-orange-600 transition-colors" href="#cours">Cours &amp; Tarifs</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-orange-600 transition-colors" href="#avis">Avis</a>
</div>
<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<a className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all" href="#contact">
                    Réserver un cours
                </a>
</div>
</nav>
</header>
<main className="">

<section className="relative isolate pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-orange-50/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<div className="mb-8 flex justify-center">
<span className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-orange-700 ring-1 ring-orange-600/20 bg-orange-100/50 flex items-center gap-2 font-medium">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                            Dès 7 ans, ados et adultes
                        </span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-6xl mb-8">
                        Révélez votre talent musical dans la bonne humeur
                    </h1>
<p className="text-lg leading-8 text-stone-600 mb-10">
                        Apprenez la guitare à votre rythme avec Bénédicte. Une méthode ludique, conviviale et personnalisée pour jouer les morceaux que vous aimez, sans pression.
                    </p>
<div className="flex items-center justify-center gap-x-6">
<a className="rounded-full bg-orange-600 px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-orange-500 transition-all" href="#contact">
                            Commencer l'aventure
                        </a>
<a className="text-sm font-medium leading-6 text-stone-700 hover:text-orange-600 flex items-center gap-1" href="#methode">
                            Découvrir la méthode <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-white pt-24 pb-24" id="a-propos">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
<div className="lg:pr-8 lg:pt-4">
<h2 className="text-base font-medium leading-7 text-orange-600 mb-2">Faisons connaissance</h2>
<p className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl mb-6">33 ans de passion, 13 ans de transmission.</p>
<p className="text-base leading-8 text-stone-600 mb-6">
                            Bonjour ! Je suis Bénédicte. La musique a toujours été mon refuge et mon mode d'expression favori. Avec plus de 30 ans de pratique de la guitare, j'ai développé une approche qui met le plaisir de jouer au centre de l'apprentissage.
                        </p>
<p className="text-base leading-8 text-stone-600 mb-8">
                            Mon objectif ? Vous donner confiance. Que vous souhaitiez gratter vos premiers accords, perfectionner vos arpèges ou vous accompagner au chant, je m'adapte à votre univers musical avec patience, bienveillance et toujours avec le sourire.
                        </p>
<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-stone-600 lg:max-w-none">
<div className="relative pl-9">
<dt className="inline font-medium text-stone-900">
<iconify-icon className="absolute left-1 top-1 text-xl text-orange-600" icon="solar:heart-angle-linear"></iconify-icon>
                                    Pédagogie encourageante.
                                </dt>
<dd className="inline">On avance à votre rythme, en célébrant chaque petite victoire.</dd>
</div>
<div className="relative pl-9">
<dt className="inline font-medium text-stone-900">
<iconify-icon className="absolute left-1 top-1 text-xl text-orange-600" icon="solar:smile-circle-linear"></iconify-icon>
                                    Ambiance détendue.
                                </dt>
<dd className="inline">Un espace chaleureux où l'on a le droit de se tromper pour mieux apprendre.</dd>
</div>
</dl>
</div>
<div className="rounded-3xl bg-amber-100 p-8 lg:p-12 aspect-[4/5] flex items-center justify-center relative overflow-hidden">

<div className="bg-gradient-to-tr from-orange-200 to-amber-50 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative text-center">
<iconify-icon className="text-6xl text-orange-400 mb-4" icon="solar:gallery-wide-linear"></iconify-icon>
<p className="text-sm font-medium text-orange-800">[Photo de Bénédicte souriante avec sa guitare]</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-stone-50" id="methode">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-base font-medium leading-7 text-orange-600 mb-2">La méthode</h2>
<p className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Apprendre en s'amusant</p>
<p className="mt-6 text-base leading-8 text-stone-600">
                        Oubliez le solfège rébarbatif. Nous abordons la musique par la pratique immédiate, avec des outils conçus pour vous faciliter la vie.
                    </p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
<div className="flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-orange-100 transition-colors">
<dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-stone-900 mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
                                Tutos personnalisés
                            </dt>
<dd className="flex flex-auto flex-col text-sm leading-7 text-stone-600">
<p className="flex-auto">Des vidéos enregistrées sur mesure pour vous permettre de réviser les morceaux et exercices tranquillement à la maison, à votre rythme.</p>
</dd>
</div>
<div className="flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-orange-100 transition-colors">
<dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-stone-900 mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
                                Supports visuels clairs
                            </dt>
<dd className="flex flex-auto flex-col text-sm leading-7 text-stone-600">
<p className="flex-auto">Tablatures simplifiées, grilles d'accords et schémas rythmiques ludiques. Tout est pensé pour une lecture intuitive dès le premier cours.</p>
</dd>
</div>
<div className="flex flex-col bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:border-orange-100 transition-colors">
<dt className="flex items-center gap-x-3 text-base font-medium leading-7 text-stone-900 mb-4">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
                                Pour toutes et tous
                            </dt>
<dd className="flex flex-auto flex-col text-sm leading-7 text-stone-600">
<p className="flex-auto">Une pédagogie malléable qui s'adapte à l'énergie des enfants (dès 7 ans), aux envies des adolescents et aux objectifs des adultes.</p>
</dd>
</div>
</dl>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-white" id="cours">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl sm:text-center mb-16">
<h2 className="text-base font-medium leading-7 text-orange-600 mb-2">Cours &amp; Tarifs</h2>
<p className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Choisissez votre rythme</p>
<p className="mt-6 text-base leading-8 text-stone-600">
                        Que ce soit pour de la <strong>guitare acoustique, classique, de la rythmique, des arpèges, du picking ou pour vous accompagner au chant</strong>, il y a une formule pour vous. <br/><span className="text-sm font-medium text-stone-500">Paiement CESU accepté pour déduction fiscale.</span>
</p>
</div>
<div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">

<div className="rounded-3xl p-8 ring-1 ring-stone-200 xl:p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between gap-x-4">
<h3 className="text-lg font-medium leading-8 text-stone-900">Cours à l'unité</h3>
</div>
<p className="mt-4 text-sm leading-6 text-stone-600">Parfait pour une première approche ou des conseils ponctuels.</p>
<p className="mt-6 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tight text-stone-900">28€</span>
<span className="text-sm font-medium leading-6 text-stone-500">/ cours</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-stone-600" role="list">
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    1 heure de cours personnalisé
                                </li>
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Supports fournis
                                </li>
</ul>
</div>
<a className="mt-8 block rounded-full px-3 py-2.5 text-center text-sm font-medium leading-6 text-stone-600 ring-1 ring-inset ring-stone-200 hover:ring-stone-300 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 transition-all" href="#contact">S'inscrire</a>
</div>

<div className="rounded-3xl p-8 ring-2 ring-orange-500 bg-orange-50/30 xl:p-10 flex flex-col justify-between relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-medium text-white shadow-sm">
                            Le plus populaire
                        </div>
<div>
<div className="flex items-center justify-between gap-x-4">
<h3 className="text-lg font-medium leading-8 text-stone-900">Pack 5 cours</h3>
</div>
<p className="mt-4 text-sm leading-6 text-stone-600">Idéal pour se lancer sérieusement et voir de réels progrès.</p>
<p className="mt-6 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tight text-stone-900">130€</span>
<span className="text-lg font-medium text-stone-400 line-through">140€</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-stone-600" role="list">
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    5 heures de cours
                                </li>
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Tutos vidéos personnalisés
                                </li>
</ul>
</div>
<a className="mt-8 block rounded-full bg-orange-600 px-3 py-2.5 text-center text-sm font-medium leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all" href="#contact">S'inscrire</a>
</div>

<div className="rounded-3xl p-8 ring-1 ring-stone-200 xl:p-10 flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between gap-x-4">
<h3 className="text-lg font-medium leading-8 text-stone-900">Pack 10 cours</h3>
</div>
<p className="mt-4 text-sm leading-6 text-stone-600">L'engagement idéal pour maîtriser de nouveaux morceaux et techniques.</p>
<p className="mt-6 flex items-baseline gap-x-2">
<span className="text-4xl font-semibold tracking-tight text-stone-900">260€</span>
<span className="text-lg font-medium text-stone-400 line-through">280€</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-stone-600" role="list">
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    10 heures de cours
                                </li>
<li className="flex gap-x-3">
<iconify-icon className="h-6 w-5 flex-none text-orange-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Tutos &amp; partitions complets
                                </li>
</ul>
</div>
<a className="mt-8 block rounded-full px-3 py-2.5 text-center text-sm font-medium leading-6 text-stone-600 ring-1 ring-inset ring-stone-200 hover:ring-stone-300 hover:bg-stone-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-600 transition-all" href="#contact">S'inscrire</a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-stone-900 relative overflow-hidden" id="avis">

<div className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 flex justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
<div className="h-[40rem] w-[80rem] flex-none bg-gradient-to-r from-orange-600/20 to-amber-600/20 opacity-40"></div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-xl text-center mb-16">
<h2 className="text-base font-medium leading-7 text-orange-400 mb-2">Témoignages</h2>
<p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ce que disent mes élèves</p>
</div>
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
<div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-6 text-stone-300 mb-6">"Bénédicte est une prof en or ! Ma fille de 9 ans adore ses cours. Elle a su trouver les mots et les chansons qui la motivent. Je recommande les yeux fermés."</p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-400 font-medium">S</div>
<div>
<p className="text-sm font-medium text-white">Sophie M.</p>
<p className="text-xs text-stone-400">Maman de Léa</p>
</div>
</div>
</div>
<div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-6 text-stone-300 mb-6">"J'ai commencé la guitare à 45 ans. J'avais peur d'être ridicule, mais Bénédicte m'a tout de suite mis à l'aise. Ses tutos vidéos sont géniaux pour réviser la semaine."</p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-400 font-medium">J</div>
<div>
<p className="text-sm font-medium text-white">Julien T.</p>
<p className="text-xs text-stone-400">Élève adulte</p>
</div>
</div>
</div>
<div className="bg-stone-800/50 backdrop-blur-sm p-8 rounded-3xl border border-stone-700">
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-6 text-stone-300 mb-6">"Super prof ! On apprend la rythmique sur des morceaux qu'on aime. Elle est très patiente et super souriante. Le picking n'a presque plus de secret pour moi."</p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-stone-700 flex items-center justify-center text-stone-400 font-medium">M</div>
<div>
<p className="text-sm font-medium text-white">Maxime D.</p>
<p className="text-xs text-stone-400">Élève ado</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-orange-50/50" id="contact">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-base font-medium leading-7 text-orange-600 mb-2">Contact &amp; Réservation</h2>
<p className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Prêt(e) à gratter vos premières cordes ?</p>
<p className="mt-6 text-base leading-8 text-stone-600">
                        Remplissez ce formulaire pour réserver un cours ou simplement me poser vos questions. Je vous répondrai très vite !
                    </p>
</div>
<div className="sm:p-10 bg-white max-w-xl border-stone-200 border rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="prenom">Prénom</label>
<div className="mt-2">
<input autocomplete="given-name" className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="prenom" name="prenom" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="nom">Nom</label>
<div className="mt-2">
<input autocomplete="family-name" className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="nom" name="nom" type="text"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="email">Adresse e-mail</label>
<div className="mt-2">
<input autocomplete="email" className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="email" name="email" type="email"/>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="telephone">Téléphone</label>
<div className="mt-2">
<input autocomplete="tel" className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="telephone" name="telephone" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="niveau">Niveau actuel</label>
<div className="mt-2">
<select className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="niveau" name="niveau">
<option>Je débute totalement</option>
<option>J'ai quelques bases</option>
<option>Niveau intermédiaire</option>
<option>Niveau avancé</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="dispo">Disponibilités</label>
<div className="mt-2">
<select className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="dispo" name="dispo">
<option>En semaine (journée)</option>
<option>En semaine (soirée)</option>
<option>Mercredi (pour enfants)</option>
<option>Week-end</option>
</select>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium leading-6 text-stone-900" htmlFor="message">Votre message ou style de musique préféré</label>
<div className="mt-2">
<textarea className="block w-full rounded-xl border-0 py-3 px-4 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-200 bg-stone-50 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 transition-all outline-none" id="message" name="message" rows="4"></textarea>
</div>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 transition-all sm:w-auto text-sm font-medium text-white text-center bg-orange-600 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm" type="button">
                                Envoyer ma demande
                            </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200 py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-orange-900">
<iconify-icon className="text-xl" icon="solar:music-notes-linear"></iconify-icon>
<span className="font-semibold tracking-tight text-lg">BÉNÉDICTE</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 text-sm text-stone-500 text-center">
<span>📍 Toulouse (Secteur Barrière de Paris)</span>
<span className="hidden md:inline">•</span>
<span>Paiement CESU accepté</span>
</div>
<div className="flex gap-4">
<a aria-label="Facebook" className="text-stone-400 hover:text-orange-600 transition-colors" href="#">
<iconify-icon className="text-2xl" height="24" icon="solar:alt-arrow-up-outline" style={{color: 'rgb(234, 88, 12)'}} title="Page Facebook" width="24"></iconify-icon>
<span className="sr-only">Facebook</span>
</a>
<a aria-label="Superprof" className="text-stone-400 hover:text-orange-600 transition-colors" href="#">
<span className="sr-only">Superprof</span>
</a>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8 text-center text-xs text-stone-400">
            © 2024 Bénédicte Guitare. Tous droits réservés.
        </div>
</footer>

    </>
  );
}
