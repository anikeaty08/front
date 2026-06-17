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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="bg-blue-900 text-white text-xs py-2">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-blue-200" data-lucide="phone"></i>
<span className="font-medium tracking-wide">+33 1 48 49 98 00</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-blue-200" data-lucide="clock"></i>
<span>24 / 7</span>
</div>
<div className="h-3 w-px bg-blue-700"></div>
<div className="flex gap-3">
<a className="hover:text-blue-200 transition-colors" href="#"><i className="w-3 h-3" data-lucide="facebook"></i></a>
<a className="hover:text-blue-200 transition-colors" href="#"><i className="w-3 h-3" data-lucide="twitter"></i></a>
<a className="hover:text-blue-200 transition-colors" href="#"><i className="w-3 h-3" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

<a className="flex items-center gap-1 group" href="#">
<span className="text-3xl font-semibold tracking-tighter text-blue-900 group-hover:opacity-90 transition-opacity">NEXT</span>
<span className="text-3xl font-semibold tracking-tighter text-orange-500 group-hover:opacity-90 transition-opacity">2i</span>
</a>

<nav className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium text-slate-700">
<a className="hover:text-blue-600 transition-colors" href="#">Accueil</a>
<a className="hover:text-blue-600 transition-colors" href="#">Nos Services +</a>
<a className="hover:text-blue-600 transition-colors" href="#">Blog</a>
<a className="hover:text-blue-600 transition-colors" href="#">A propos</a>
<a className="hover:text-blue-600 transition-colors" href="#">Candidatures</a>
<a className="hover:text-blue-600 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<img alt="EN" className="w-5 h-3 opacity-60 hover:opacity-100 cursor-pointer" src="https://flagcdn.com/w20/us.png"/>
<img alt="FR" className="w-5 h-3 cursor-pointer" src="https://flagcdn.com/w20/fr.png"/>
</div>
<button className="text-slate-400 hover:text-blue-600 transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2.5 px-5 rounded transition-colors shadow-sm" href="#">
                    Portail de support
                </a>
</div>
</div>
</header>

<main className="max-w-5xl mx-auto px-4 py-12 lg:py-16">

<div className="mb-8 pl-4 border-l-2 border-slate-100">
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    27/05/2025
                </li>
<li className="flex items-center gap-2 text-slate-700 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    Nawel BERRICHE
                </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<i className="w-3 h-3 text-blue-500" data-lucide="mail"></i>
</li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    0
                </li>
</ul>
</div>

<div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
<div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-slate-300">
<i className="w-8 h-8" data-lucide="building-2"></i>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Publié il y a 8 mois</span>
</div>
<ul className="space-y-1 text-lg text-slate-700">
<li><span className="text-slate-400 mr-2">•</span>Type d'emploi : Temps plein, CDI.</li>
<li><span className="text-slate-400 mr-2">•</span>Statut : Cadre</li>
<li><span className="text-slate-400 mr-2">•</span>Lieu du poste : En présentiel (Villepinte 93).</li>
</ul>
</div>
</div>

<div className="space-y-8">
<h1 className="text-3xl font-semibold italic text-slate-900 tracking-tight">Poste à pourvoir : ASAP</h1>
<p className="text-lg leading-relaxed">
                En tant qu'<span className="font-medium text-slate-900">Ingénieur(e) commercial(e) BtoB Mid Market</span> chez <span className="font-medium text-slate-900">NEXT2i</span>, vous serez responsable du développement des ventes et de la gestion des comptes clients dans ce segment clé.
            </p>

<div>
<h2 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Vous aurez pour principales missions :</h2>
<ul className="space-y-3 text-lg leading-relaxed list-disc pl-5 marker:text-slate-400">
<li>Promouvoir nos différentes offres incluant l'infogérance, le cloud, la cybersécurité et l'intégration</li>
<li>Conseil, prospection téléphonique, visites auprès des clients, réalisation et suivi des offres commerciales</li>
<li>Prospecter et développer votre portefeuille dans une recherche permanente de fidélisation des clients et d'accroissement de nos parts de marché</li>
<li>Elaborer des solutions sur mesure pour certains clients et assurerez le suivi commercial des prestations.</li>
</ul>
</div>

<div>
<h2 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Profil recherché :</h2>
<ul className="space-y-3 text-lg leading-relaxed list-disc pl-5 marker:text-slate-400">
<li>Vous êtes autonome et vous avez une forte appétence commerciale</li>
<li>Convaincu que les réussites commerciales se concrétisent chez les clients, vous recherchez avant tout le contact avec ces derniers pour en développer le volume d'activité</li>
<li>Une bonne maitrise de l'anglais est indispensable</li>
<li>Excellent négociateur, vous savez par ailleurs écouter et user de vos qualités relationnelles pour atteindre vos objectifs</li>
<li>Vous maîtrisez parfaitement toutes les phases de la vente et vous êtes attiré(e) par les technologies informatiques.</li>
</ul>
</div>

<div>
<h2 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Nous rejoindre c'est :</h2>
<ul className="space-y-3 text-lg leading-relaxed list-disc pl-5 marker:text-slate-400">
<li>Faire partie d'une entreprise dynamique à taille humaine, participer à des projets concrets et intégrer une équipe conviviale</li>
<li>Un environnement de travail idéal et bienveillant au Regus coworking</li>
<li>Des locaux modernes, à deux pas de la gare et très bien desservis</li>
</ul>
</div>

<div>
<h2 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Programmation :</h2>
<ul className="space-y-3 text-lg leading-relaxed list-disc pl-5 marker:text-slate-400">
<li>Du Lundi au Vendredi</li>
<li>Travail en journée</li>
</ul>
</div>

<div>
<h2 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Processus de recrutement :</h2>
<ol className="space-y-3 text-lg leading-relaxed list-decimal pl-5 marker:text-slate-500 marker:font-medium">
<li><span className="font-medium text-slate-900">Entretien téléphonique</span> de préqualification avec notre chargée de recrutement de manière à échanger sur vos motivations, votre parcours et vos attentes.</li>
<li><span className="font-medium text-slate-900">Entretien Visio</span> sur la plateforme Teams, en présence du CEO et RH.</li>
<li><span className="font-medium text-slate-900">Entretien physique</span> au sein de nos super locaux en présence du CEO.</li>
</ol>
</div>

<div className="bg-slate-100 border border-slate-200 rounded-md p-6 my-8">
<p className="font-mono text-sm leading-relaxed text-slate-700">
<strong>Note :</strong> Merci de nous fournir un CV lisible au format PDF.<br/>
                    Si vous avez des exigences supplémentaires pour appuyer votre candidature,<br/>
                    veuillez simplement ajouter une note avec votre CV pour nous en informer.
                </p>
</div>

<div className="mt-12">
<h2 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Caractéristiques de l'emploi</h2>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-lg">
<tr className="border-b border-slate-200">
<td className="py-4 px-6 bg-slate-50/50 w-1/3 font-medium text-slate-900">Catégorie emploi</td>
<td className="py-4 px-6 text-slate-600">NEXT2i</td>
</tr>
<tr>
<td className="py-4 px-6 bg-slate-50/50 font-medium text-slate-900">CDI</td>
<td className="py-4 px-6 text-slate-600">CADRE</td>
</tr>
</table>
</div>
</div>

<div className="mt-16">
<h2 className="text-xl font-semibold text-slate-900 mb-8 tracking-tight">Postuler pour cet emploi</h2>
<form className="space-y-6 max-w-2xl">

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-900">Name<span className="text-red-500">*</span></label>
<div className="relative">
<input className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" required="" type="text"/>
<div className="absolute right-3 top-3 text-slate-400">
<i className="w-4 h-4" data-lucide="contact"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-900">Email<span className="text-red-500">*</span></label>
<div className="relative">
<input className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" required="" type="email"/>
<div className="absolute right-3 top-3 text-slate-400">
<i className="w-4 h-4" data-lucide="at-sign"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-900">Phone</label>
<div className="relative flex">
<div className="flex items-center justify-center border border-r-0 border-slate-200 rounded-l-md px-3 bg-slate-50">
<img alt="FR" className="w-4 h-auto" src="https://flagcdn.com/w20/fr.png"/>
<i className="w-3 h-3 ml-1 text-slate-400" data-lucide="chevron-down"></i>
</div>
<input className="flex-1 border border-slate-200 rounded-r-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-slate-500" placeholder="06 12 34 56 78" type="tel"/>
<div className="absolute right-3 top-3 text-slate-400">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-slate-900">Joindre un CV<span className="text-red-500">*</span></label>
<div className="flex border border-slate-200 rounded-md overflow-hidden shadow-sm hover:border-slate-300 transition-colors cursor-pointer group">
<div className="flex-1 px-4 py-3 text-sm text-slate-500 bg-white">
                                Pas de fichier sélectionné
                            </div>
<div className="bg-slate-100 px-4 py-3 text-sm font-medium text-slate-600 border-l border-slate-200 group-hover:bg-slate-200 transition-colors">
                                Parcourir
                            </div>
<input className="hidden" type="file"/>
</div>
</div>

<div className="flex justify-end pt-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-8 rounded transition-colors shadow-sm focus:ring-4 focus:ring-blue-100" type="submit">
                            Envoyer
                        </button>
</div>
</form>
</div>
</div>
</main>

<footer className="bg-[#001f5f] text-white pt-16 pb-8">
<div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center space-y-8">

<a className="flex items-center gap-1" href="#">
<span className="text-5xl font-semibold tracking-tighter text-white">NEXT</span>
<span className="text-5xl font-semibold tracking-tighter text-white">2i</span>
</a>

<div className="space-y-2 max-w-2xl text-blue-100/80 text-sm leading-relaxed">
<p>NEXT2i est une entreprise de services en ingénierie informatique basée à Paris qui vous accompagne dans vos projets.</p>
<p>Depuis 2004, NEXT2i s'est spécialisé dans les domaines du conseil en système d'information, de l'infogérance et du Cloud Computing.</p>
</div>

<div className="flex gap-6 pt-4">
<a className="text-white hover:text-blue-300 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-white hover:text-blue-300 transition-colors" href="#">

<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
</a>
<a className="text-white hover:text-blue-300 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div className="border-t border-blue-800/50 mt-16 pt-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200/60 gap-4">
<div>
                    © 2025 All Rights Reserved. NEXT2i
                </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<span className="text-blue-800">•</span>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<span className="text-blue-800">•</span>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 z-40 bg-white shadow-md border border-slate-200 rounded overflow-hidden hidden lg:flex items-center pr-2">
<div className="bg-blue-600 p-2.5">
<i className="w-5 h-5 text-white animate-spin-slow" data-lucide="refresh-cw"></i>
</div>
<div className="flex flex-col px-2">
<span className="text-[10px] text-slate-500 leading-tight">protected by <strong>reCAPTCHA</strong></span>
<span className="text-[9px] text-slate-400 leading-tight">Privacy - Terms</span>
</div>
</div>


    </>
  );
}
