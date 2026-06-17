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



function setLanguage(lang) {
// Update active state in selector
document.querySelectorAll('.lang-btn').forEach(btn => {
if(btn.dataset.target === lang) {
btn.classList.add('bg-neutral-100', 'text-neutral-900');
btn.classList.remove('text-neutral-400', 'hover:text-neutral-600');
} else {
btn.classList.remove('bg-neutral-100', 'text-neutral-900');
btn.classList.add('text-neutral-400', 'hover:text-neutral-600');
}
});
// Toggle visibility of content
document.querySelectorAll('[data-lang]').forEach(el => {
if (el.dataset.lang === lang) {
el.classList.remove('hidden');
} else {
el.classList.add('hidden');
}
});
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-200 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl md:text-2xl tracking-tighter font-semibold flex items-center gap-3" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
                INTERFACE STUDIO IFS
            </a>
<div className="flex items-center gap-8">

<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#about">
<span data-lang="es">La Asociación</span>
<span className="hidden" data-lang="en">The Association</span>
<span className="hidden" data-lang="fr">L'Association</span>
<span className="hidden" data-lang="da">Foreningen</span>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#focus">
<span data-lang="es">Enfoque</span>
<span className="hidden" data-lang="en">Approach</span>
<span className="hidden" data-lang="fr">Approche</span>
<span className="hidden" data-lang="da">Tilgang</span>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#manifesto">
<span data-lang="es">Manifiesto</span>
<span className="hidden" data-lang="en">Manifesto</span>
<span className="hidden" data-lang="fr">Manifeste</span>
<span className="hidden" data-lang="da">Manifest</span>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">
<span data-lang="es">Contacto</span>
<span className="hidden" data-lang="en">Contact</span>
<span className="hidden" data-lang="fr">Contact</span>
<span className="hidden" data-lang="da">Kontakt</span>
</a>
</div>

<div className="flex items-center gap-1 p-1 border border-neutral-200 rounded-full bg-white/50">
<button className="lang-btn flex items-center justify-center w-8 h-8 rounded-full transition-all bg-neutral-100 text-neutral-900" data-target="es" onclick="setLanguage('es')">
<iconify-icon icon="circle-flags:es" width="16"></iconify-icon>
</button>
<button className="lang-btn flex items-center justify-center w-8 h-8 rounded-full transition-all text-neutral-400 hover:text-neutral-600" data-target="en" onclick="setLanguage('en')">
<iconify-icon icon="circle-flags:uk" width="16"></iconify-icon>
</button>
<button className="lang-btn flex items-center justify-center w-8 h-8 rounded-full transition-all text-neutral-400 hover:text-neutral-600" data-target="fr" onclick="setLanguage('fr')">
<iconify-icon icon="circle-flags:fr" width="16"></iconify-icon>
</button>
<button className="lang-btn flex items-center justify-center w-8 h-8 rounded-full transition-all text-neutral-400 hover:text-neutral-600" data-target="da" onclick="setLanguage('da')">
<iconify-icon icon="circle-flags:dk" width="16"></iconify-icon>
</button>
</div>
<button className="md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center border-b border-neutral-200 bg-neutral-50/50">
<div className="max-w-7xl mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-8">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-500 mb-8 uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
<span data-lang="es">León — Europa</span>
<span className="hidden" data-lang="en">León — Europe</span>
<span className="hidden" data-lang="fr">León — Europe</span>
<span className="hidden" data-lang="da">León — Europa</span>
</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tighter leading-[0.95] mb-8 text-neutral-900">
<span data-lang="es">Arte contemporáneo<br/><span className="text-neutral-400">construyendo relatos.</span></span>
<span className="hidden" data-lang="en">Contemporary art<br/><span className="text-neutral-400">building narratives.</span></span>
<span className="hidden" data-lang="fr">Art contemporain<br/><span className="text-neutral-400">construisant des récits.</span></span>
<span className="hidden" data-lang="da">Samtidskunst<br/><span className="text-neutral-400">bygger fortællinger.</span></span>
</h1>
</div>
<div className="lg:col-span-4 flex flex-col justify-end pb-2">
<p className="text-lg md:text-xl font-light leading-relaxed text-neutral-600 max-w-md">
<span data-lang="es">Comisariado crítico, mediación cultural y creación de sentidos colectivos desde el noroeste español hacia el mundo.</span>
<span className="hidden" data-lang="en">Critical curating, cultural mediation and creation of collective meanings from northwest Spain to the world.</span>
<span className="hidden" data-lang="fr">Commissariat critique, médiation culturelle et création de sens collectifs du nord-ouest de l'Espagne vers le monde.</span>
<span className="hidden" data-lang="da">Kritisk kuratering, kulturformidling og skabelse af kollektive betydninger fra det nordvestlige Spanien til verden.</span>
</p>
</div>
</div>
<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-neutral-50 p-6 flex flex-col gap-4 group hover:bg-white transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight" data-lang="es">Comisariado</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="en">Curating</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="fr">Commissariat</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="da">Kuratering</span>
</div>
<div className="bg-neutral-50 p-6 flex flex-col gap-4 group hover:bg-white transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight" data-lang="es">Investigación</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="en">Research</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="fr">Recherche</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="da">Forskning</span>
</div>
<div className="bg-neutral-50 p-6 flex flex-col gap-4 group hover:bg-white transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight" data-lang="es">Mediación</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="en">Mediation</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="fr">Médiation</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="da">Formidling</span>
</div>
<div className="bg-neutral-50 p-6 flex flex-col gap-4 group hover:bg-white transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:global-linear" width="24"></iconify-icon>
<span className="text-sm font-medium tracking-tight" data-lang="es">Red Global</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="en">Global Network</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="fr">Réseau Global</span>
<span className="text-sm font-medium tracking-tight hidden" data-lang="da">Globalt Netværk</span>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white border-b border-neutral-200" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-2xl font-display font-medium tracking-tight mb-4">
<span data-lang="es">Identidad</span>
<span className="hidden" data-lang="en">Identity</span>
<span className="hidden" data-lang="fr">Identité</span>
<span className="hidden" data-lang="da">Identitet</span>
</h2>
<div className="h-px w-12 bg-neutral-900 mb-6"></div>
<p className="text-sm text-neutral-500 uppercase tracking-widest font-medium">
<span data-lang="es">Quiénes somos</span>
<span className="hidden" data-lang="en">Who we are</span>
<span className="hidden" data-lang="fr">Qui sommes-nous</span>
<span className="hidden" data-lang="da">Hvem vi er</span>
</p>
</div>
<div className="md:col-span-8 space-y-8">
<p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800">
<span data-lang="es"><span className="font-medium">Interface Studio IFS</span> es una asociación cultural independiente con sede en León (España), dedicada al comisariado de exposiciones artísticas contemporáneas.</span>
<span className="hidden" data-lang="en"><span className="font-medium">Interface Studio IFS</span> is an independent cultural association based in León (Spain), dedicated to the curation of contemporary art exhibitions.</span>
<span className="hidden" data-lang="fr"><span className="font-medium">Interface Studio IFS</span> est une association culturelle indépendante basée à León (Espagne), dédiée au commissariat d'expositions d'art contemporain.</span>
<span className="hidden" data-lang="da"><span className="font-medium">Interface Studio IFS</span> er en uafhængig kulturforening baseret i León (Spanien), dedikeret til kuratering af udstillinger med samtidskunst.</span>
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-600 font-light leading-relaxed text-base">
<div>
<p data-lang="es">Nuestro trabajo se centra en el desarrollo de proyectos curatoriales que vinculan investigación conceptual, selección de obras, redacción de textos críticos, coordinación de montaje y estrategias de difusión cultural.</p>
<p className="hidden" data-lang="en">Our work focuses on developing curatorial projects that link conceptual research, artwork selection, critical writing, installation coordination, and cultural dissemination strategies.</p>
<p className="hidden" data-lang="fr">Notre travail se concentre sur le développement de projets curatoriaux reliant recherche conceptuelle, sélection d'œuvres, rédaction de textes critiques, coordination de l'installation et stratégies de diffusion culturelle.</p>
<p className="hidden" data-lang="da">Vores arbejde fokuserer på udvikling af kuratoriske projekter, der forbinder konceptuel forskning, udvælgelse af værker, skrivning af kritiske tekster, koordinering af installation og strategier for kulturformidling.</p>
</div>
<div>
<p data-lang="es">Desde León —territorio de historia, memoria y transformación— operamos con vocación local e internacional.</p>
<p className="hidden" data-lang="en">From León —a territory of history, memory, and transformation— we operate with both local and international vocation.</p>
<p className="hidden" data-lang="fr">Depuis León —territoire d'histoire, de mémoire et de transformation— nous opérons avec une vocation à la fois locale et internationale.</p>
<p className="hidden" data-lang="da">Fra León — et territorium af historie, erindring og transformation — opererer vi med både lokalt og internationalt kald.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200" id="focus">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 order-last md:order-first">
<div className="bg-white border border-neutral-200 p-8 h-full flex flex-col justify-between">
<iconify-icon className="text-neutral-300" icon="solar:dialog-2-linear" width="48"></iconify-icon>
<div className="mt-12">
<h3 className="font-display font-medium text-lg mb-2">
<span data-lang="es">Colaboración</span>
<span className="hidden" data-lang="en">Collaboration</span>
<span className="hidden" data-lang="fr">Collaboration</span>
<span className="hidden" data-lang="da">Samarbejde</span>
</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
<span data-lang="es">Instituciones públicas, museos, centros de arte, colectivos independientes y artistas.</span>
<span className="hidden" data-lang="en">Public institutions, museums, art centres, independent collectives, and artists.</span>
<span className="hidden" data-lang="fr">Institutions publiques, musées, centres d'art, collectifs indépendants et artistes.</span>
<span className="hidden" data-lang="da">Offentlige institutioner, museer, kunsthaller, uafhængige kollektiver og kunstnere.</span>
</p>
</div>
</div>
</div>
<div className="md:col-span-8">
<h2 className="text-2xl font-display font-medium tracking-tight mb-4">Praxis</h2>
<div className="h-px w-12 bg-neutral-900 mb-6"></div>
<p className="text-sm text-neutral-500 uppercase tracking-widest font-medium mb-8">
<span data-lang="es">Qué hacemos</span>
<span className="hidden" data-lang="en">What we do</span>
<span className="hidden" data-lang="fr">Ce que nous faisons</span>
<span className="hidden" data-lang="da">Hvad vi gør</span>
</p>
<p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-800 mb-12">
<span data-lang="es">Nuestro enfoque curatorial entiende la exposición como un espacio de pensamiento crítico, mediación cultural y creación de sentidos colectivos.</span>
<span className="hidden" data-lang="en">Our curatorial approach understands the exhibition as a space for critical thinking, cultural mediation, and the creation of collective meanings.</span>
<span className="hidden" data-lang="fr">Notre approche curatoriale conçoit l'exposition comme un espace de pensée critique, de médiation culturelle et de création de sens collectifs.</span>
<span className="hidden" data-lang="da">Vores kuratoriske tilgang forstår udstillingen som et rum for kritisk tænkning, kulturformidling og skabelse af kollektive betydninger.</span>
</p>

<div className="border-t border-neutral-200">
<div className="group py-6 border-b border-neutral-200 flex items-start justify-between cursor-default hover:bg-white transition-colors px-2">
<span className="text-neutral-400 text-xs font-mono pt-1">01</span>
<span className="text-lg font-medium text-neutral-800 w-3/4 group-hover:translate-x-2 transition-transform">
<span data-lang="es">Conceptualización y desarrollo de exposiciones</span>
<span className="hidden" data-lang="en">Exhibition conceptualisation and development</span>
<span className="hidden" data-lang="fr">Conceptualisation et développement d'expositions</span>
<span className="hidden" data-lang="da">Konceptualisering og udvikling af udstillinger</span>
</span>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="group py-6 border-b border-neutral-200 flex items-start justify-between cursor-default hover:bg-white transition-colors px-2">
<span className="text-neutral-400 text-xs font-mono pt-1">02</span>
<span className="text-lg font-medium text-neutral-800 w-3/4 group-hover:translate-x-2 transition-transform">
<span data-lang="es">Redacción de textos curatoriales y catálogos</span>
<span className="hidden" data-lang="en">Curatorial writing and catalogue production</span>
<span className="hidden" data-lang="fr">Rédaction de textes curatoriaux et de catalogues</span>
<span className="hidden" data-lang="da">Kuratorisk skrivning og katalogproduktion</span>
</span>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="group py-6 border-b border-neutral-200 flex items-start justify-between cursor-default hover:bg-white transition-colors px-2">
<span className="text-neutral-400 text-xs font-mono pt-1">03</span>
<span className="text-lg font-medium text-neutral-800 w-3/4 group-hover:translate-x-2 transition-transform">
<span data-lang="es">Coordinación de montaje y producción</span>
<span className="hidden" data-lang="en">Installation and production coordination</span>
<span className="hidden" data-lang="fr">Coordination de l'installation et de la production</span>
<span className="hidden" data-lang="da">Koordinering af montering og produktion</span>
</span>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="group py-6 border-b border-neutral-200 flex items-start justify-between cursor-default hover:bg-white transition-colors px-2">
<span className="text-neutral-400 text-xs font-mono pt-1">04</span>
<span className="text-lg font-medium text-neutral-800 w-3/4 group-hover:translate-x-2 transition-transform">
<span data-lang="es">Programación pública y mediación cultural</span>
<span className="hidden" data-lang="en">Public programming and cultural mediation</span>
<span className="hidden" data-lang="fr">Programmation publique et médiation culturelle</span>
<span className="hidden" data-lang="da">Offentlig programmering og kulturformidling</span>
</span>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white border-b border-neutral-800 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<div className="w-full h-full border-l border-neutral-700 transform skew-x-12 origin-top"></div>
<div className="absolute top-0 right-20 w-px h-full bg-neutral-700"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-display font-medium tracking-tighter mb-8">
<span data-lang="es">Raíz local, <br/><span className="text-neutral-500">red internacional.</span></span>
<span className="hidden" data-lang="en">Local roots, <br/><span className="text-neutral-500">international network.</span></span>
<span className="hidden" data-lang="fr">Racine locale, <br/><span className="text-neutral-500">réseau international.</span></span>
<span className="hidden" data-lang="da">Lokale rødder, <br/><span className="text-neutral-500">internationalt netværk.</span></span>
</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-8 text-lg">
<span data-lang="es">Interface Studio IFS surge desde León y su provincia, territorio con una identidad cultural única y rica en tradiciones e innovación. A la vez, nuestras experiencias personales y profesionales en Francia, Dinamarca, Irlanda, Austria y Alemania nos han dotado de una mirada internacional.</span>
<span className="hidden" data-lang="en">Interface Studio IFS emerges from León and its province, a territory with a unique cultural identity rich in both tradition and innovation. Simultaneously, our personal and professional experiences in France, Denmark, Ireland, Austria, and Germany have provided us with an international perspective.</span>
<span className="hidden" data-lang="fr">Interface Studio IFS émerge de León et de sa province, un territoire à l'identité culturelle unique, riche en traditions et en innovation. Parallèlement, nos expériences personnelles et professionnelles en France, au Danemark, en Irlande, en Autriche et en Allemagne nous ont dotés d'une perspective internationale.</span>
<span className="hidden" data-lang="da">Interface Studio IFS opstår fra León og dens provins, et territorium med en unik kulturel identitet rig på både tradition og innovation. Samtidig har vores personlige og professionelle erfaringer i Frankrig, Danmark, Irland, Østrig og Tyskland givet os et internationalt perspektiv.</span>
</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border border-neutral-700 rounded-full text-xs uppercase tracking-widest text-neutral-300">León</span>
<span className="px-4 py-2 border border-neutral-700 rounded-full text-xs uppercase tracking-widest text-neutral-300">Paris</span>
<span className="px-4 py-2 border border-neutral-700 rounded-full text-xs uppercase tracking-widest text-neutral-300">Copenhagen</span>
<span className="px-4 py-2 border border-neutral-700 rounded-full text-xs uppercase tracking-widest text-neutral-300">Vienna</span>
</div>
</div>
<div className="border border-neutral-800 p-10 bg-neutral-900/50 backdrop-blur-sm">
<iconify-icon className="text-neutral-600 mb-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-light leading-tight text-white mb-6">
<span data-lang="es">"Creemos en el poder del arte como lenguaje común y en el comisariado como herramienta para el diálogo cultural y la conexión entre territorios."</span>
<span className="hidden" data-lang="en">"We believe in the power of art as a common language and in curating as a tool for cultural dialogue and connection between territories."</span>
<span className="hidden" data-lang="fr">"Nous croyons au pouvoir de l'art comme langage commun et au commissariat comme outil de dialogue culturel et de connexion entre les territoires."</span>
<span className="hidden" data-lang="da">"Vi tror på kunstens kraft som et fælles sprog og på kuratering som et værktøj til kulturel dialog og forbindelse mellem territorier."</span>
</blockquote>
<cite className="not-italic text-sm text-neutral-500 tracking-wide">— Interface Studio IFS</cite>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="manifesto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
<h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-neutral-100 absolute -top-12 -left-6 -z-10 select-none">IS</h2>
<h2 className="text-2xl font-display font-medium tracking-tight mb-8">
<span data-lang="es">Manifiesto</span>
<span className="hidden" data-lang="en">Manifesto</span>
<span className="hidden" data-lang="fr">Manifeste</span>
<span className="hidden" data-lang="da">Manifest</span>
</h2>
<p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
<span data-lang="es">El tiempo de la interferencia</span>
<span className="hidden" data-lang="en">The time of interference</span>
<span className="hidden" data-lang="fr">Le temps de l'interférence</span>
<span className="hidden" data-lang="da">Interferensens tid</span>
</p>
<div className="text-lg leading-relaxed text-neutral-900 border-l-2 border-neutral-900 pl-6 py-2">
<span data-lang="es">“No se trata de ver más, sino de ver de otro modo. Interferir en la percepción es interferir en el tiempo.”</span>
<span className="hidden" data-lang="en">“It is not about seeing more, but seeing differently. To interfere with perception is to interfere with time.”</span>
<span className="hidden" data-lang="fr">“Il ne s'agit pas de voir plus, mais de voir autrement. Interférer dans la perception, c'est interférer dans le temps.”</span>
<span className="hidden" data-lang="da">“Det handler ikke om at se mere, men om at se anderledes. At gribe ind i perceptionen er at gribe ind i tiden.”</span>
</div>
</div>
<div className="lg:col-span-8">
<div className="prose prose-neutral prose-lg max-w-none font-light text-neutral-600">
<p className="lead text-xl text-neutral-900 font-normal">
<span data-lang="es">Comisariado crítico desde León, con alma europea y mirada global.</span>
<span className="hidden" data-lang="en">Critical curating from León, with a European soul and global outlook.</span>
<span className="hidden" data-lang="fr">Commissariat critique depuis León, avec une âme européenne et un regard global.</span>
<span className="hidden" data-lang="da">Kritisk kuratering fra León, med en europæisk sjæl og et globalt blik.</span>
</p>
<div data-lang="es">
<p>Interface Studio IFS nace en León como una plataforma independiente dedicada al comisariado de exposiciones artísticas contemporáneas. Nos mueve una convicción: el arte es una herramienta crítica, una forma de pensamiento, una posibilidad para imaginar otros mundos.</p>
<p>Desde esta ciudad del noroeste español —tejida entre la historia y la transformación, entre el pulso rural y el latido urbano— proyectamos una práctica curatorial que articula lo local con lo global, lo situado con lo internacional.</p>
<p>León y su provincia son territorio fértil: cruce de caminos, memoria de resistencias, laboratorio de nuevas sensibilidades. Aquí arraigamos nuestra práctica. Pero Interface Studio es también fruto de una genealogía de viajes, estancias e intercambios en otros contextos europeos.</p>
<p>Queremos ser un punto de contacto entre escenas artísticas diversas, un puente entre geografías, un espacio de traducción entre imaginarios. Creemos en la posibilidad de tender redes entre León y Berlín, entre Castilla y Copenhague, entre el Bierzo y Viena. Desde el margen, hacia el centro. Desde la periferia, hacia un mundo más interconectado, justo y plural.</p>
<p>El comisariado que defendemos no se limita a ordenar objetos en un espacio: es una forma de pensamiento, de mediación y de intervención en la esfera pública. Construimos discursos expositivos que incomoden, interpelen, inviten a pensar.</p>
</div>
<div className="hidden" data-lang="en">
<p>Interface Studio IFS was born in León as an independent platform dedicated to curating contemporary art exhibitions. We are driven by a conviction: art is a critical tool, a form of thought, a possibility to imagine other worlds.</p>
<p>From this city in northwest Spain—woven between history and transformation, between the rural pulse and the urban beat—we project a curatorial practice that articulates the local with the global, the situated with the international.</p>
<p>León and its province are fertile territory: a crossroads, a memory of resistance, a laboratory for new sensibilities. We root our practice here. But Interface Studio is also the fruit of a genealogy of travels, residencies, and exchanges in other European contexts.</p>
<p>We aim to be a point of contact between diverse artistic scenes, a bridge between geographies, a space for translation between imaginaries. We believe in the possibility of building networks between León and Berlin, between Castile and Copenhagen, between El Bierzo and Vienna. From the margin towards the centre. From the periphery towards a more interconnected, just, and plural world.</p>
<p>The curating we defend is not limited to arranging objects in a space: it is a form of thought, mediation, and intervention in the public sphere. We construct exhibition discourses that discomfort, question, and invite thought.</p>
</div>
<div className="hidden" data-lang="fr">
<p>Interface Studio IFS est né à León en tant que plateforme indépendante dédiée au commissariat d'expositions d'art contemporain. Nous sommes animés par une conviction : l'art est un outil critique, une forme de pensée, une possibilité d'imaginer d'autres mondes.</p>
<p>Depuis cette ville du nord-ouest de l'Espagne —tissée entre histoire et transformation, entre impulsion rurale et battement urbain— nous projetons une pratique curatoriale qui articule le local avec le global, le situé avec l'international.</p>
<p>León et sa province sont un territoire fertile : carrefour de chemins, mémoire de résistances, laboratoire de nouvelles sensibilités. Nous enracinons notre pratique ici. Mais Interface Studio est aussi le fruit d'une généalogie de voyages, de séjours et d'échanges dans d'autres contextes européens.</p>
<p>Nous voulons être un point de contact entre diverses scènes artistiques, un pont entre géographies, un espace de traduction entre imaginaires. Nous croyons en la possibilité de tisser des réseaux entre León et Berlin, entre la Castille et Copenhague, entre le Bierzo et Vienne. De la marge vers le centre. De la périphérie vers un monde plus interconnecté, juste et pluriel.</p>
<p>Le commissariat que nous défendons ne se limite pas à ordonner des objets dans un espace : c'est une forme de pensée, de médiation et d'intervention dans la sphère publique. Nous construisons des discours d'exposition qui dérangent, interpellent et invitent à réfléchir.</p>
</div>
<div className="hidden" data-lang="da">
<p>Interface Studio IFS blev født i León som en uafhængig platform dedikeret til kuratering af samtidskunstudstillinger. Vi er drevet af en overbevisning: kunst er et kritisk værktøj, en tankeform, en mulighed for at forestille sig andre verdener.</p>
<p>Fra denne by i det nordvestlige Spanien — vævet mellem historie og transformation, mellem den landlige puls og det urbane hjerteslag — projicerer vi en kuratorisk praksis, der forbinder det lokale med det globale, det situerede med det internationale.</p>
<p>León og dens provins er frugtbart territorium: en skillevej, en erindring om modstand, et laboratorium for nye sensibiliteter. Her slår vi rødder for vores praksis. Men Interface Studio er også frugten af en genealogi af rejser, ophold og udvekslinger i andre europæiske sammenhænge.</p>
<p>Vi ønsker at være et kontaktpunkt mellem forskellige kunstscener, en bro mellem geografier, et rum for oversættelse mellem forestillingsverdener. Vi tror på muligheden for at bygge netværk mellem León og Berlin, mellem Castilien og København, mellem Bierzo og Wien. Fra margen mod centrum. Fra periferien mod en mere sammenkoblet, retfærdig og mangfoldig verden.</p>
<p>Den kuratering, vi forsvarer, begrænser sig ikke til at arrangere objekter i et rum: det er en form for tænkning, formidling og intervention i den offentlige sfære. Vi konstruerer udstillingsdiskurser, der forstyrrer, stiller spørgsmål og inviterer til eftertanke.</p>
</div>
<p className="font-medium text-neutral-900 pt-4">
<span data-lang="es">Interface Studio IFS es una invitación. A mirar distinto. A pensar desde aquí hacia allá. A escuchar lo que está por emerger entre León, Europa y el mundo.</span>
<span className="hidden" data-lang="en">Interface Studio IFS is an invitation. To look differently. To think from here to there. To listen to what is about to emerge between León, Europe, and the world.</span>
<span className="hidden" data-lang="fr">Interface Studio IFS est une invitation. À regarder différemment. À penser d'ici vers là-bas. À écouter ce qui est sur le point d'émerger entre León, l'Europe et le monde.</span>
<span className="hidden" data-lang="da">Interface Studio IFS er en invitation. Til at se anderledes. Til at tænke herfra og derud. Til at lytte til det, der er ved at opstå mellem León, Europa og verden.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200 py-24 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 lg:col-span-2">
<a className="text-2xl md:text-3xl tracking-tighter font-semibold flex items-center gap-3 mb-6" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
                        INTERFACE STUDIO IFS
                    </a>
<p className="text-neutral-500 font-light max-w-sm">
<span data-lang="es">Plataforma independiente dedicada al comisariado de exposiciones artísticas contemporáneas.</span>
<span className="hidden" data-lang="en">Independent platform dedicated to the curation of contemporary art exhibitions.</span>
<span className="hidden" data-lang="fr">Plateforme indépendante dédiée au commissariat d'expositions d'art contemporain.</span>
<span className="hidden" data-lang="da">Uafhængig platform dedikeret til kuratering af samtidskunstudstillinger.</span>
</p>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">
<span data-lang="es">Sede</span>
<span className="hidden" data-lang="en">HQ</span>
<span className="hidden" data-lang="fr">Siège</span>
<span className="hidden" data-lang="da">Hovedkvarter</span>
</h4>
<p className="text-neutral-500 font-light">León, España</p>
<p className="text-neutral-500 font-light mt-2">
<span data-lang="es">Vocación Europea</span>
<span className="hidden" data-lang="en">European Vocation</span>
<span className="hidden" data-lang="fr">Vocation Européenne</span>
<span className="hidden" data-lang="da">Europæisk Kald</span>
</p>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">
<span data-lang="es">Contacto</span>
<span className="hidden" data-lang="en">Contact</span>
<span className="hidden" data-lang="fr">Contact</span>
<span className="hidden" data-lang="da">Kontakt</span>
</h4>
<a className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors" href="mailto:info@interfacestudio.art">
<span className="font-light border-b border-transparent group-hover:border-neutral-900">
<span data-lang="es">Contáctenos</span>
<span className="hidden" data-lang="en">Contact us</span>
<span className="hidden" data-lang="fr">Contactez-nous</span>
<span className="hidden" data-lang="da">Kontakt os</span>
</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">
<span data-lang="es">© 2023 Interface Studio IFS. Todos los derechos reservados.</span>
<span className="hidden" data-lang="en">© 2023 Interface Studio IFS. All rights reserved.</span>
<span className="hidden" data-lang="fr">© 2023 Interface Studio IFS. Tous droits réservés.</span>
<span className="hidden" data-lang="da">© 2023 Interface Studio IFS. Alle rettigheder forbeholdes.</span>
</p>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:face-scan-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
