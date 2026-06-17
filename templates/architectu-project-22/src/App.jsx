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
      
<main className="max-w-[1600px] mx-auto border-x border-[#D4D4D0] bg-[#F3F3EF] min-h-screen relative shadow-2xl shadow-[#D4D4D0]/20">

<nav className="sticky top-0 z-50 bg-[#F3F3EF]/90 backdrop-blur-sm border-b border-[#D4D4D0]">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-6 md:p-8 flex items-center justify-between md:justify-start">
<a className="text-xl tracking-tighter font-semibold uppercase" href="#">ARCH.</a>
<button className="md:hidden text-[#666]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="hidden md:flex md:col-span-2 items-center justify-center gap-12 p-8">
<a className="text-sm font-medium hover:text-[#666] transition-colors" href="#projets">Projets</a>
<a className="text-sm font-medium hover:text-[#666] transition-colors" href="#clients">Clients</a>
<a className="text-sm font-medium hover:text-[#666] transition-colors" href="#agence">L'Agence</a>
</div>
<div className="hidden md:flex items-center justify-end p-8">
<a className="group flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity" href="#contact">
<span>Démarrer un projet</span>
<iconify-icon className="text-[#666] group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="border-b border-[#D4D4D0]">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="md:col-span-3 p-6 md:p-12 lg:p-24 flex flex-col justify-center min-h-[60vh] md:min-h-[80vh]">
<span className="text-xs font-medium tracking-widest text-[#666] uppercase mb-8">Architecture &amp; Design</span>
<h1 className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[0.95] mb-12">
                        We shape<br/>
                        timeless<br/>
                        spaces.
                    </h1>
<div className="max-w-xl">
<p className="text-lg md:text-xl text-[#666] font-normal leading-relaxed">
                            Nous façonnons des espaces durables et minimalistes. Une architecture sensible pour ceux qui recherchent l'harmonie.
                        </p>
</div>
</div>
<div className="hidden md:flex flex-col justify-between p-8 bg-[#F3F3EF]">
<div className="w-full aspect-square border border-[#D4D4D0] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
<iconify-icon className="text-[#D4D4D0]" height="48" icon="solar:asterisk-linear" width="48"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-[#999] uppercase tracking-widest">Scroll</span>
<iconify-icon className="text-[#1A1A1A]" height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</header>

<div className="border-b border-[#D4D4D0] grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-6 md:p-8 md:col-span-3 flex items-end">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Sélection de projets</h2>
</div>
<div className="p-6 md:p-8 flex items-end justify-between md:justify-end">
<span className="text-sm text-[#666]">2018 — 2024</span>
</div>
</div>

<section className="border-b border-[#D4D4D0]" id="projets">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<article className="md:col-span-2 group cursor-pointer border-b md:border-b-0 border-[#D4D4D0]">
<div className="aspect-[4/3] overflow-hidden w-full relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/5 transition-colors bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:p-8 flex cursor-pointer z-10 bg-[#F3F3EF] pt-6 pr-6 pb-6 pl-6 relative items-start justify-between" onclick="window.location.href='/projet'" role="button">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Villa Calcaire</h3>
<p className="text-sm text-[#666]">Résidentiel — Provence</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</article>
<article className="md:col-span-2 group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden w-full relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-8 flex justify-between items-start bg-[#F3F3EF]">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Siège Horizon</h3>
<p className="text-sm text-[#666]">Tertiaire — Paris</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" height="24" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</article>
</div>
</section>

<section className="border-b border-[#D4D4D0]" id="clients">
<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-12 md:p-16 flex flex-col items-start bg-white group hover:bg-[#fafafa] transition-colors">
<div className="w-12 h-12 border border-[#D4D4D0] rounded-full flex items-center justify-center mb-8 bg-[#F3F3EF]">
<iconify-icon className="text-[#1A1A1A]" height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Pour les Particuliers</h3>
<p className="text-[#666] leading-relaxed mb-8 max-w-sm">
                        Nous concevons des lieux de vie intimes et singuliers. De la rénovation d'appartement à la construction de villa, nous traduisons vos envies en espaces habités.
                    </p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#F3F3EF] pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Construction neuve
                        </li>
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#F3F3EF] pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Rénovation &amp; Extension
                        </li>
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#F3F3EF] pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Architecture d'intérieur
                        </li>
</ul>
<a className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity" href="#">Voir les projets résidentiels</a>
</div>
<div className="p-12 md:p-16 flex flex-col items-start bg-[#F3F3EF] group hover:bg-[#EAEAE5] transition-colors">
<div className="w-12 h-12 border border-[#D4D4D0] rounded-full flex items-center justify-center mb-8 bg-white">
<iconify-icon className="text-[#1A1A1A]" height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Pour les Professionnels</h3>
<p className="text-[#666] leading-relaxed mb-8 max-w-sm">
                        Nous créons des outils de travail performants et identitaires. Bureaux, commerces ou hôtellerie : l'architecture au service de votre image de marque.
                    </p>
<ul className="space-y-3 mb-8 w-full">
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#D4D4D0]/50 pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Bureaux &amp; Sièges sociaux
                        </li>
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#D4D4D0]/50 pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Retail &amp; Showrooms
                        </li>
<li className="flex items-center gap-3 text-sm font-medium border-b border-[#D4D4D0]/50 pb-2">
<iconify-icon className="text-[#999]" icon="solar:check-circle-linear"></iconify-icon> Hôtellerie &amp; Restauration
                        </li>
</ul>
<a className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-60 transition-opacity" href="#">Voir les projets tertiaires</a>
</div>
</div>
</section>

<section className="border-b border-[#D4D4D0]">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-6 md:p-8 md:col-span-4 bg-white md:bg-[#F3F3EF]">
<h2 className="text-2xl font-medium tracking-tight">Nos domaines d'expertise</h2>
</div>
<div className="p-8 md:p-12 hover:bg-white transition-colors duration-500 group">
<iconify-icon className="text-[#666] mb-6 group-hover:text-black transition-colors" height="28" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Conception</h3>
<p className="text-sm text-[#666] leading-relaxed">
                        Études de faisabilité, permis de construire et conception technique. Une approche contextuelle précise.
                    </p>
</div>
<div className="p-8 md:p-12 hover:bg-white transition-colors duration-500 group">
<iconify-icon className="text-[#666] mb-6 group-hover:text-black transition-colors" height="28" icon="solar:armchair-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Intérieur</h3>
<p className="text-sm text-[#666] leading-relaxed">
                        Design d'espace et mobilier sur mesure. Optimisation des volumes et lumière naturelle.
                    </p>
</div>
<div className="p-8 md:p-12 hover:bg-white transition-colors duration-500 group">
<iconify-icon className="text-[#666] mb-6 group-hover:text-black transition-colors" height="28" icon="solar:ruler-pen-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium mb-3">Réalisation</h3>
<p className="text-sm text-[#666] leading-relaxed">
                        Suivi de chantier rigoureux. Maîtrise des coûts, des délais et de la qualité d'exécution.
                    </p>
</div>
<div className="p-8 md:p-12 flex flex-col justify-between bg-[#1A1A1A] text-white">
<span className="text-xs uppercase tracking-widest text-[#666]">Projets réalisés</span>
<span className="text-6xl md:text-8xl font-medium tracking-tighter">48+</span>
</div>
</div>
</section>

<section className="border-b border-[#D4D4D0] bg-white">
<div className="p-6 md:p-8 border-b border-[#D4D4D0] bg-[#F3F3EF]">
<h2 className="text-2xl font-medium tracking-tight">Pourquoi choisir notre agence ?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-8 md:p-10 flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="mb-6 flex items-center gap-3">
<iconify-icon className="text-[#1A1A1A]" height="32" icon="solar:clock-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3">Respect des délais</h4>
<p className="text-sm text-[#666] leading-relaxed">
                        Nous planifions chaque étape avec rigueur. Notre gestion de projet proactive anticipe les aléas pour garantir une livraison à la date convenue.
                    </p>
</div>
<div className="p-8 md:p-10 flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="mb-6 flex items-center gap-3">
<iconify-icon className="text-[#1A1A1A]" height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3">Transparence budgétaire</h4>
<p className="text-sm text-[#666] leading-relaxed">
                        Aucun coût caché. Nous estimons les travaux au plus juste dès l'esquisse et pilotons l'économie du projet pour respecter votre enveloppe.
                    </p>
</div>
<div className="p-8 md:p-10 flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="mb-6 flex items-center gap-3">
<iconify-icon className="text-[#1A1A1A]" height="32" icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3">Éco-responsabilité</h4>
<p className="text-sm text-[#666] leading-relaxed">
                        Matériaux biosourcés, performance énergétique et durabilité. Nous construisons pour l'avenir en minimisant l'impact environnemental.
                    </p>
</div>
<div className="p-8 md:p-10 flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="mb-6 flex items-center gap-3">
<iconify-icon className="text-[#1A1A1A]" height="32" icon="solar:chat-round-dots-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3">Interlocuteur unique</h4>
<p className="text-sm text-[#666] leading-relaxed">
                        Simplifiez-vous la vie. Un architecte dédié suit votre dossier de A à Z, coordonne les entreprises et reste votre seul point de contact.
                    </p>
</div>
</div>
</section>

<section className="border-b border-[#D4D4D0]" id="agence">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="md:col-span-2 relative min-h-[500px] overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 flex flex-col">
<div className="p-8 md:p-16 flex-1 flex flex-col justify-center bg-[#F3F3EF]">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">
                            Une approche rationnelle au service de l'émotion.
                        </h2>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<span className="font-mono text-xs border border-[#D4D4D0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">1</span>
<div>
<h4 className="text-lg font-medium mb-1">Rigueur Technique</h4>
<p className="text-sm text-[#666] leading-relaxed">Nos plans sont précis. La créativité s'exprime dans le détail constructif parfaitement exécuté.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<span className="font-mono text-xs border border-[#D4D4D0] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">2</span>
<div>
<h4 className="text-lg font-medium mb-1">Écoute Active</h4>
<p className="text-sm text-[#666] leading-relaxed">Chaque projet débute par une analyse approfondie de vos usages pour créer un lieu qui vous ressemble.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#D4D4D0] bg-white" id="journal">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">

<div className="p-8 md:p-10 flex flex-col justify-between bg-[#F3F3EF]">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Journal</h2>
<p className="text-sm text-[#666]">L'actualité de l'agence, nos parutions presse et la vie de chantier.</p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#1A1A1A] hover:opacity-60 transition-opacity mt-8 md:mt-0" href="#">
                        Voir les archives
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<article className="p-8 md:p-10 group cursor-pointer flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="w-full aspect-[16/10] overflow-hidden mb-6 relative border border-[#D4D4D0]/30">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-0 left-0 bg-white border-r border-b border-[#D4D4D0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[#1A1A1A]">Chantier</span>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-[#999] mb-2 font-mono">12 Oct 2023</span>
<h3 className="text-lg font-medium leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">Livraison de la Villa S à Bordeaux, reportage photo.</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs font-medium text-[#666] group-hover:text-black transition-colors">
                            Lire l'article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</article>

<article className="p-8 md:p-10 group cursor-pointer flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="w-full aspect-[16/10] overflow-hidden mb-6 relative border border-[#D4D4D0]/30">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-0 left-0 bg-white border-r border-b border-[#D4D4D0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[#1A1A1A]">Presse</span>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-[#999] mb-2 font-mono">28 Sep 2023</span>
<h3 className="text-lg font-medium leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">Lauréat du concours Centre Culturel Lyon Confluence.</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs font-medium text-[#666] group-hover:text-black transition-colors">
                            Lire l'article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</article>

<article className="p-8 md:p-10 group cursor-pointer flex flex-col h-full hover:bg-[#FAFAFA] transition-colors">
<div className="w-full aspect-[16/10] overflow-hidden mb-6 relative border border-[#D4D4D0]/30">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-0 left-0 bg-white border-r border-b border-[#D4D4D0] px-3 py-1.5 text-[10px] font-medium uppercase tracking-widest text-[#1A1A1A]">Agence</span>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs text-[#999] mb-2 font-mono">15 Sep 2023</span>
<h3 className="text-lg font-medium leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">L'agence s'agrandit : bienvenue à nos nouveaux associés.</h3>
<div className="mt-auto pt-4 flex items-center gap-2 text-xs font-medium text-[#666] group-hover:text-black transition-colors">
                            Lire l'article <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</article>
</div>
</section>

<section id="contact">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="md:col-span-3 p-12 md:p-24 lg:p-32 bg-[#1A1A1A] text-[#F3F3EF] flex flex-col justify-center items-start">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">
                        Let's make<br/>things happen.
                    </h2>
<p className="text-xl text-[#999] mb-12 max-w-lg font-light">
                        Discutons de vos ambitions. De la première esquisse à la remise des clés.
                    </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#F3F3EF] text-[#1A1A1A] rounded-full text-lg font-medium hover:bg-white transition-colors" href="mailto:contact@agence.com">
                        Lancer le projet
                        <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex flex-col bg-[#F3F3EF]">
<div className="p-8 flex-1 border-b border-[#D4D4D0]">
<h3 className="text-sm font-medium uppercase tracking-widest text-[#999] mb-6">Contact</h3>
<p className="text-lg font-medium mb-1">hello@arch.com</p>
<p className="text-lg font-medium">+33 1 23 45 67 89</p>
</div>
<div className="p-8 flex-1 border-b border-[#D4D4D0]">
<h3 className="text-sm font-medium uppercase tracking-widest text-[#999] mb-6">Bureau</h3>
<p className="text-base text-[#666] leading-relaxed">
                            12 Rue des Architectes
                            75003 Paris, France
                        </p>
</div>
<div className="p-8 flex-1 flex flex-col justify-end">
<div className="flex gap-4">
<a className="w-10 h-10 border border-[#D4D4D0] rounded-full flex items-center justify-center hover:bg-white hover:border-[#1A1A1A] transition-all text-[#1A1A1A]" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-[#D4D4D0] rounded-full flex items-center justify-center hover:bg-white hover:border-[#1A1A1A] transition-all text-[#1A1A1A]" href="#">
<iconify-icon height="20" icon="solar:basketball-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#D4D4D0] bg-white">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#D4D4D0]">
<div className="p-6 md:p-8 md:col-span-3">
<p className="text-xs text-[#999]">© 2023 ARCH. Agence d'architecture. Tous droits réservés.</p>
</div>
<div className="p-6 md:p-8 flex justify-start md:justify-end gap-6">
<a className="text-xs text-[#999] hover:text-black" href="#">Mentions légales</a>
<a className="text-xs text-[#999] hover:text-black" href="#">Confidentialité</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
