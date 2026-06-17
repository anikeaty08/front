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



  // Mobile menu logic
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const icon = toggleBtn.querySelector('iconify-icon');

  function openMenu() {
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.setAttribute('aria-hidden', 'false');
    if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.setAttribute('aria-hidden', 'true');
    if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (!menu.classList.contains('opacity-0')) closeMenu();
    else openMenu();
  });



            (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", "southmedia", {origin:"https://app.cal.com"});

            Cal.ns.southmedia("inline", {
                elementOrSelector:"#my-cal-inline-southmedia",
                config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
                calLink: "baptnrg-29kget/southmedia",
            });

            Cal.ns.southmedia("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            


  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
  Cal("init", "southmedia", {origin:"https://app.cal.com"});

  Cal.ns.southmedia("ui", {"hideEventTypeDetails":false,"layout":"month_view"});

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
      

<div className="fixed bottom-4 left-4 right-4 z-[999] md:hidden">
<button className="flex items-center justify-center gap-2 w-full text-white py-4 rounded-full font-bold shadow-2xl cursor-pointer" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' data-cal-link="baptnrg-29kget/southmedia" data-cal-namespace="southmedia" style={{backgroundColor: '#4c5a3e'}}>
        Réserver un appel
        <iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</button>
</div>

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">

<div className="w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<rect fill="#4c5a3e" height="40" rx="10" width="40"></rect>
<path d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20V28H20C15.5817 28 12 24.4183 12 20Z" fill="white"></path>
<circle cx="24" cy="16" fill="#E3DDD7" r="2"></circle>
</svg>
</div>
<span className="font-bold text-lg tracking-tight text-gray-900">SouthMedia</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#4c5a3e] transition-colors" href="#methode">Notre méthode</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#4c5a3e] transition-colors" href="#offre">L'Offre</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#4c5a3e] transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<button className="hidden md:flex items-center gap-2 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:brightness-110 transition-all hover:pr-6 duration-300 group cursor-pointer" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' data-cal-link="baptnrg-29kget/southmedia" data-cal-namespace="southmedia" style={{backgroundColor: '#4c5a3e'}}>
        Réserver un appel
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#4c5a3e] transition-colors" href="#methode" onclick="closeMenu()">Notre méthode</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#4c5a3e] transition-colors" href="#offre" onclick="closeMenu()">L'Offre</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#4c5a3e] transition-colors" href="#contact" onclick="closeMenu()">Contact</a>
</div>


<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="flex flex-col items-center justify-center text-center gap-10">

<div className="flex flex-col items-center gap-6 max-w-4xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-wide text-gray-700 shadow-sm">
<span className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: '#4c5a3e'}}></span>
                        100€ de budget pub offert si on commence ensemble en novembre
                    </span>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    On transforme ton contenu et tes pubs <br className="hidden md:block"/>
<span className="relative inline-block">
<span className="font-serif italic font-medium relative z-10">en clients.</span>

<svg className="absolute w-[110%] h-auto -bottom-2 -left-1 text-[#4c5a3e] -z-0 opacity-90" fill="none" viewbox="0 0 186 19" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12.5C45.5 4.5 115.5 -2.5 183.5 16" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</span>
</h1>

<div className="animate-enter delay-300">
<p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
                        L'agence d'acquisition pour les entreprises locales. Nous créons la stratégie et le contenu pour remplir votre agenda.
                    </p>
<ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-2">
<li className="flex items-center gap-2 text-gray-800 font-medium">
<iconify-icon className="text-[#4c5a3e]" icon="solar:check-circle-bold"></iconify-icon>
                            Plus de demandes de rendez-vous
                        </li>
<li className="flex items-center gap-2 text-gray-800 font-medium">
<iconify-icon className="text-[#4c5a3e]" icon="solar:check-circle-bold"></iconify-icon>
                            Une visibilité locale dominante
                        </li>
<li className="flex items-center gap-2 text-gray-800 font-medium">
<iconify-icon className="text-[#4c5a3e]" icon="solar:check-circle-bold"></iconify-icon>
                            Système clé en main
                        </li>
</ul>
</div>
</div>

<div className="w-full max-w-4xl mx-auto animate-enter delay-300 relative z-20">
<div className="rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-black">


<style>
                        wistia-player[media-id='wzung4xcdo']:not(:defined) { 
                            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/wzung4xcdo/swatch'); 
                            display: block; 
                            filter: blur(5px); 
                            padding-top:56.25%; 
                        }
                    </style>
<wistia-player aspect="1.7777777777777777" media-id="wzung4xcdo"></wistia-player>
</div>
</div>

<div className="animate-enter delay-400 flex flex-col items-center gap-4 mt-2">
<button className="text-white text-lg px-10 py-5 rounded-full font-bold hover:brightness-110 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl shadow-[#4c5a3e]/20 cursor-pointer w-full sm:w-auto" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' data-cal-link="baptnrg-29kget/southmedia" data-cal-namespace="southmedia" style={{backgroundColor: '#4c5a3e'}}>
                    Réserver un appel
                    <iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon>
</button>
<span className="text-xs text-gray-500 font-medium">
<iconify-icon className="align-middle mr-1" icon="solar:info-circle-linear"></iconify-icon>
                    Appel gratuit — 15 min — sans engagement
                </span>
</div>
</div>

<div className="mt-20 animate-enter delay-500 flex flex-col items-center text-center">
<p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-6">Nous accompagnons les entreprises locales</p>
<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-50 font-bold text-gray-400 text-sm md:text-base">
<span className="flex items-center gap-2"><iconify-icon icon="solar:shop-linear"></iconify-icon> RESTAURANTS</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:home-linear"></iconify-icon> AGENCES IMMO</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:scissors-linear"></iconify-icon> SALONS</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:dumbbell-large-linear"></iconify-icon> SALLES DE SPORT</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> COMMERCES</span>
</div>
</div>
</main>

<section className="w-full max-w-4xl mx-auto px-6 md:px-12 py-16">
<div className="bg-gray-100 rounded-[2rem] p-8 md:p-12 animate-enter">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            La réalité : vous postez, vous payez... <br/><span className="text-gray-500">mais les clients ne viennent pas.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#4c5a3e] text-2xl mt-1 flex-shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-gray-700 text-sm leading-relaxed"><strong>Compte Instagram fantôme :</strong> Vous passez des heures à créer des posts que seules 50 personnes voient.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#4c5a3e] text-2xl mt-1 flex-shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-gray-700 text-sm leading-relaxed"><strong>Pubs coûteuses :</strong> Vous boostez des publications sans stratégie et perdez de l'argent.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#4c5a3e] text-2xl mt-1 flex-shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-gray-700 text-sm leading-relaxed"><strong>Manque de temps :</strong> Vous avez un business à faire tourner, pas le temps d'être influenceur.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#4c5a3e] text-2xl mt-1 flex-shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<p className="text-gray-700 text-sm leading-relaxed"><strong>Invisibilité locale :</strong> Vos concurrents sont partout sur TikTok et Reels, vous prenez du retard.</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10" id="methode">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Le Système 
            <span className="font-playfair italic font-medium">SouthMedia.</span>
</h2>
<p className="max-w-md text-gray-600 text-sm md:text-base">
            Une approche complète qui mixe stratégie, création de contenu authentique (UGC) et diffusion publicitaire pour générer du revenu.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300">
<div className="w-12 h-12 text-white rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: '#4c5a3e'}}>
<iconify-icon icon="solar:map-point-search-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Stratégie qui convertit</h3>
<p className="text-gray-600 leading-relaxed text-sm">On ne poste pas au hasard. On définit votre cible locale, votre offre irrésistible et les angles qui vont toucher votre audience.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300">
<div className="w-12 h-12 text-white rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: '#4c5a3e'}}>
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Contenu UGC &amp; Reels</h3>
<p className="text-gray-600 leading-relaxed text-sm">Fini les visuels Canva ennuyeux. On produit des vidéos réelles, dynamiques et authentiques qui captent l'attention en 3 secondes.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-gray-900/5 transition-all duration-300">
<div className="w-12 h-12 text-white rounded-2xl flex items-center justify-center mb-6" style={{backgroundColor: '#4c5a3e'}}>
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">Diffusion &amp; Pubs</h3>
<p className="text-gray-600 leading-relaxed text-sm">On transforme vos meilleures vidéos en publicités ciblées sur votre zone de chalandise pour amener les clients chez vous.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 pt-10" id="offre">
<div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden animate-enter delay-200">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4c5a3e]/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
<div>
<span className="inline-block bg-white text-black px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">Offre Signature</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                    Pack : 1 Mois de contenu <br/>
<span className="font-playfair italic text-gray-400">en 2 jours.</span>
</h2>
<p className="text-gray-400 text-lg mb-8 max-w-md">
                    Une production intensive pour alimenter vos réseaux pendant 30 jours, sans que vous n'ayez rien à faire. Rapide. Carré. Rentable.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4c5a3e] mt-1 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-300 font-medium">Création de Reels / TikToks (Script + Tournage + Montage)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4c5a3e] mt-1 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-300 font-medium">Stories engageantes &amp; Posts visuels</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4c5a3e] mt-1 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-300 font-medium">Planification complète sur 30 jours</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#4c5a3e] mt-1 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-gray-300 font-medium">Option : Lancement Pubs Locales</span>
</li>
</ul>
<button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center gap-2 cursor-pointer" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}' data-cal-link="baptnrg-29kget/southmedia" data-cal-namespace="southmedia">
                    Réserver un appel pour en parler
                    <iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</button>
</div>

<div className="relative">
<div className="aspect-square bg-white/10 rounded-[2rem] border border-white/10 p-6 flex flex-col justify-between">

<div className="bg-white rounded-xl p-4 shadow-xl mb-4">
<div className="flex items-center justify-between mb-4 border-b pb-2">
<span className="font-bold text-black text-sm">Calendrier Éditorial</span>
<iconify-icon className="text-black" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="grid grid-cols-7 gap-1">

<div className="aspect-square bg-[#4c5a3e]/10 rounded-md flex items-center justify-center text-[8px] text-[#4c5a3e]">Video</div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-blue-100 rounded-md flex items-center justify-center text-[8px] text-blue-700">Post</div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-[#4c5a3e]/10 rounded-md flex items-center justify-center text-[8px] text-[#4c5a3e]">Reel</div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-purple-100 rounded-md flex items-center justify-center text-[8px] text-purple-700">Story</div>
</div>
<div className="grid grid-cols-7 gap-1 mt-1 opacity-50">
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-[#4c5a3e]/10 rounded-md"></div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-blue-100 rounded-md"></div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
<div className="aspect-square bg-[#4c5a3e]/10 rounded-md"></div>
<div className="aspect-square bg-gray-100 rounded-md"></div>
</div>
</div>

<div className="text-white p-4 rounded-xl flex items-center gap-3 shadow-lg" style={{backgroundColor: '#4c5a3e'}}>
<iconify-icon icon="solar:graph-up-bold" width="32"></iconify-icon>
<div>
<p className="font-bold text-sm">Résultat attendu</p>
<p className="text-xs opacity-90">+ de trafic, + de clients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Processus</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
            Comment ça marche ? <br/>
<span className="font-playfair italic font-medium">Simple et rapide.</span>
</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">

<svg className="hidden md:block absolute top-10 left-0 w-full h-24 text-gray-900/10 pointer-events-none z-0" preserveaspectratio="none">
<path d="M150,20 C300,80 500,-40 650,20 C800,80 1000,-40 1150,20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-6 border border-gray-100">
<span className="font-serif text-3xl font-bold text-gray-300">1</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Appel Stratégique</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">On définit vos objectifs, votre offre et on valide la direction artistique ensemble. 30 minutes max.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-[#4c5a3e]/20 mb-6" style={{backgroundColor: '#4c5a3e'}}>
<span className="font-serif text-3xl font-bold">2</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Production Éclair</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">On vient tourner ou on monte vos images. Scripts, hooks, montage dynamique : tout est prêt en 48h.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-6 border border-gray-100">
<span className="font-serif text-3xl font-bold text-gray-300">3</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">Déploiement</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">On planifie tout et on lance les pubs. Vous n'avez rien à toucher, vous recevez juste les notifs.</p>
</div>
</div>
<div className="text-center mt-12">
<p className="text-sm font-semibold text-gray-900 bg-white inline-block px-4 py-2 rounded-full border border-gray-200">
            ✨ Tu n’as rien à gérer : on s’occupe du système.
        </p>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-gray-900/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-3">
                ❌ Pas pour vous si...
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-gray-500 text-sm">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Vous cherchez une solution miracle sans effort</span>
</li>
<li className="flex items-start gap-4 text-gray-500 text-sm">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Vous refusez de suivre une stratégie moderne</span>
</li>
<li className="flex items-start gap-4 text-gray-500 text-sm">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Vous n'avez pas de budget pour investir</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden border border-gray-100">
<h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                ✅ Idéal pour...
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-gray-900 font-medium text-sm">
<iconify-icon className="mt-0.5 text-[#4c5a3e]" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Commerces &amp; Artisans locaux</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium text-sm">
<iconify-icon className="mt-0.5 text-[#4c5a3e]" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Restaurants &amp; Métiers de bouche</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium text-sm">
<iconify-icon className="mt-0.5 text-[#4c5a3e]" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Agences Immobilières</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium text-sm">
<iconify-icon className="mt-0.5 text-[#4c5a3e]" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Salles de sport &amp; Bien-être</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-16" id="faq">
<div className="mb-12 animate-enter text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Questions <span className="font-playfair italic font-medium">Fréquentes</span>
</h2>
</div>
<div className="flex flex-col gap-4 animate-enter delay-100">

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-black">
                Combien de temps avant de voir des résultats ?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed">
                Dès que les premières vidéos et publicités sont lancées. En général, on observe une hausse de la visibilité la première semaine et des premiers leads qualifiés dans le premier mois.
            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-black">
                Est-ce que je dois apparaître en vidéo ?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed">
                C'est mieux pour l'authenticité (Human to Human), mais pas obligatoire. On peut filmer vos produits, vos locaux, votre équipe, ou utiliser de la voix-off. On s'adapte.
            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-black">
                Vous vous déplacez partout en France ?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed">
                Oui, nous avons un réseau de créateurs. Si vous êtes loin, on peut aussi fonctionner avec l'envoi de vos rushs (vidéos brutes) que nous montons de manière professionnelle.
            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-black">
                Quels réseaux vous gérez ?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed">
                Principalement Instagram et Facebook pour le local, et TikTok selon votre cible. Ce sont les plateformes qui convertissent le mieux aujourd'hui.
            </div>
</details>

<details className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold text-gray-900 hover:text-black">
                Quel budget faut-il prévoir ?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed">
                Cela dépend de votre besoin (quantité de vidéos, pubs ou non). Nos packs sont pensés pour les TPE/PME. Le mieux est de réserver un appel pour avoir un devis précis.
            </div>
</details>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-12" id="contact">
<div className="bg-black rounded-[2.5rem] p-8 md:p-16 text-white grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-2xl">

<div className="flex flex-col items-start text-left">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon className="text-white" icon="solar:stars-minimalistic-bold" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6">
                Prêt à faire décoller <br/>
<span className="font-playfair italic font-medium text-gray-300">votre activité ?</span>
</h2>
<p className="text-gray-400 mb-8 max-w-sm text-lg">
                Sélectionnez un créneau ci-contre. On en profite pour discuter de vos objectifs et voir si on peut vous aider.
            </p>
<div className="flex items-center gap-4 text-sm text-gray-300">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-500 border border-black"></div>
<div className="w-8 h-8 rounded-full bg-gray-400 border border-black"></div>
<div className="w-8 h-8 rounded-full bg-gray-300 border border-black"></div>
</div>
<span>Déjà +50 entreprises accompagnées</span>
</div>
</div>

<div className="bg-white rounded-[2rem] w-full max-w-lg ml-auto text-gray-900 shadow-xl overflow-hidden h-[650px] md:h-[600px]">

<div id="my-cal-inline-southmedia" style={{width: '100%', height: '100%', overflow: 'scroll'}}></div>


</div>
</div>

<div className="mt-12 text-center flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
<span>© 2025 SouthMedia. Tous droits réservés.</span>
<div className="flex gap-6">
<a className="hover:text-black" href="#">Mentions Légales</a>
<a className="hover:text-black" href="#">CGV</a>
</div>
</div>
</footer>




    </>
  );
}
