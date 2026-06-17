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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-stone-950/80" style={{}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-white" href="#" style={{}}>
                DJ Bareyaxx
            </a>
<div className="hidden md:flex gap-8 text-lg font-normal text-stone-400 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white" href="#bio" style={{}}>Biographie</a>
<a className="transition-colors hover:text-white" href="#sets" style={{}}>Sets</a>
<a className="transition-colors hover:text-white" href="#services" style={{}}>Prestations</a><a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4 text-stone-400" style={{}}>
<a className="transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg></a>
<a className="transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-stone-950" style={{}}>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(124,45,18,0.25),transparent_70%)]"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl mix-blend-screen bg-orange-900/10"></div>
<div className="absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full blur-3xl mix-blend-screen bg-purple-900/10" style={{}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="space-y-2">
<h2 className="text-orange-500 font-medium tracking-widest text-sm uppercase" style={{}}>Axel Bareyan</h2>
<h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tighter text-white" style={{}}>
                        Plus qu'un mix,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-500 tracking-tighter from-orange-200" style={{}}>une expérience.</span>
</h1>
</div>
<div className="glass-panel p-8 rounded-2xl max-w-xl">
<p className="text-lg md:text-xl font-light leading-relaxed text-stone-300" style={{}}>
                        DJ depuis 7 ans, pourtant le même but à chaque prestation : <span className="font-normal text-white" style={{}}>vous faire danser</span> et vivre un vrai moment de plaisir, autant pour vous que pour moi.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all text-lg bg-stone-100 text-stone-950 hover:bg-white" href="#sets" style={{}}>
<svg className="lucide lucide-headphones w-5 h-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
                        Écouter un set
                    </a>
<a className="group flex items-center justify-center gap-2 border px-6 py-3 rounded-full font-medium hover:border-orange-500/50 transition-all text-lg border-stone-700 text-stone-300 hover:text-white" href="#contact" style={{}}>
                        Me contacter
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative order-1 lg:order-2 flex justify-center">
<div className="relative aspect-[3/4] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border group border-white/10" style={{}}>

<img alt="DJ Bareyaxx" className="w-full h-full object-cover opacity-90 transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80 from-stone-950" style={{}}></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-widest text-stone-300" style={{}}>Disponible pour booking</span>
</div>
<p className="font-medium text-xl text-white" style={{}}>Axel "Bareyaxx" Bareyan</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y relative bg-stone-900/50 border-white/5" id="sets" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white" style={{}}>L'univers sonore</h2>
<p className="text-xl font-light text-stone-400" style={{}}>
                    Avant de découvrir nos prestations, je vous invite à choisir un set pour écouter mon travail et vous immerger dans l'ambiance.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-1 rounded-2xl group cursor-pointer hover:border-orange-500/30 transition-colors">
<div className="rounded-xl p-6 h-full flex flex-col justify-between relative overflow-hidden bg-stone-900" style={{}}>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-music w-24 h-24 text-white" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-orange-400" style={{}}>Sunset Vibes</span>
<h3 className="text-2xl font-medium mt-2 tracking-tighter text-white" style={{}}>Deep House &amp; Chill</h3>
<p className="text-lg text-stone-500 mt-2 font-light" style={{}}>Idéal pour les cocktails et débuts de soirée.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="w-12 h-12 rounded-full hover:bg-orange-500 flex items-center justify-center transition-colors bg-orange-600 text-white" style={{}}>
<svg className="lucide lucide-play w-5 h-5 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<span className="text-sm text-stone-300" style={{}}>Écouter l'extrait (03:45)</span>
</div>
</div>
</div>

<div className="glass-panel p-1 rounded-2xl group cursor-pointer border-orange-500/20 hover:border-orange-500/50 transition-colors" style={{}}>
<div className="bg-gradient-to-br rounded-xl p-6 h-full flex flex-col justify-between relative overflow-hidden from-stone-900 to-stone-800" style={{}}>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-disc w-24 h-24 text-white" data-lucide="disc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="">
<span className="text-xs font-medium uppercase tracking-widest text-orange-400" style={{}}>Peak Time</span>
<h3 className="text-2xl font-medium mt-2 tracking-tighter text-white" style={{}}>Open Format &amp; Hits</h3>
<p className="text-lg text-stone-500 mt-2 font-light" style={{}}>Le cœur de la soirée, pour faire danser toutes les générations.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors bg-white hover:bg-stone-200 text-stone-950" style={{}}>
<svg className="lucide lucide-play w-5 h-5 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<span className="text-sm text-stone-300" style={{}}>Écouter l'extrait (05:20)</span>
</div>
</div>
</div>

<div className="glass-panel p-1 rounded-2xl group cursor-pointer hover:border-orange-500/30 transition-colors">
<div className="rounded-xl p-6 h-full flex flex-col justify-between relative overflow-hidden bg-stone-900" style={{}}>
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-zap w-24 h-24 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<span className="text-xs font-medium uppercase tracking-widest text-orange-400" style={{}}>Late Night</span>
<h3 className="text-2xl font-medium mt-2 tracking-tighter text-white" style={{}}>Tech House &amp; Club</h3>
<p className="text-lg text-stone-500 mt-2 font-light" style={{}}>Une énergie plus sombre et rythmée pour finir en beauté.</p>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="w-12 h-12 rounded-full flex items-center justify-center transition-colors border bg-stone-800 hover:bg-stone-700 text-white border-stone-700" style={{}}>
<svg className="lucide lucide-play w-5 h-5 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<span className="text-sm text-stone-300" style={{}}>Écouter l'extrait (04:10)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white" style={{}}>Mes Prestations</h2>
<p className="text-xl font-light max-w-md text-stone-400" style={{}}>Un accompagnement sur-mesure pour chaque type d'événement.</p>
</div>
<a className="transition-colors flex items-center gap-2 text-orange-400 hover:text-orange-300" href="#contact" style={{}}>
                Demander un devis <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group border-t pt-8 hover:border-orange-500/50 transition-colors border-white/10" style={{}}>
<div className="flex justify-between items-start mb-6">
<svg className="lucide lucide-party-popper w-8 h-8 text-stone-500 group-hover:text-orange-400 transition-colors" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
<span className="font-mono text-stone-600" style={{}}>01</span>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tighter text-white" style={{}}>Mariages &amp; Privé</h3>
<p className="text-lg font-light leading-relaxed mb-6 text-stone-400" style={{}}>
                    De la cérémonie laïque jusqu'au bout de la nuit. Coordination avec vos témoins, gestion des temps forts et programmation musicale adaptée à vos goûts.
                </p>
<ul className="space-y-3 text-stone-500 font-light" style={{}}>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sonorisation cérémonie</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cocktail &amp; Vin d'honneur</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Soirée dansante</li>
</ul>
</div>

<div className="group border-t pt-8 hover:border-orange-500/50 transition-colors border-white/10" style={{}}>
<div className="flex justify-between items-start mb-6">
<svg className="lucide lucide-building-2 w-8 h-8 text-stone-500 group-hover:text-orange-400 transition-colors" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="font-mono text-stone-600" style={{}}>02</span>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tighter text-white" style={{}}>Corporate &amp; Événementiel</h3>
<p className="text-lg font-light leading-relaxed mb-6 text-stone-400" style={{}}>
                    Soirées d'entreprise, lancements de produits ou séminaires. Une prestation professionnelle qui respecte l'image de votre marque tout en créant du lien.
                </p>
<ul className="space-y-3 text-stone-500 font-light" style={{}}>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Ambiance lounge / dynamique</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Micro HF pour discours</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Facturation professionnelle</li>
</ul>
</div>

<div className="group border-t pt-8 hover:border-orange-500/50 transition-colors border-white/10" style={{}}>
<div className="flex justify-between items-start mb-6">
<svg className="lucide lucide-speaker w-8 h-8 text-stone-500 group-hover:text-orange-400 transition-colors" data-lucide="speaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M12 6h.01"></path><circle cx="12" cy="14" r="4"></circle><path d="M12 14h.01"></path></svg>
<span className="font-mono text-stone-600" style={{}}>03</span>
</div>
<h3 className="text-2xl font-medium mb-4 tracking-tighter text-white" style={{}}>Club &amp; Bar</h3>
<p className="text-lg font-light leading-relaxed mb-6 text-stone-400" style={{}}>
                    Guest DJ ou résidence. Une culture musicale pointue capable de tenir une piste pendant des heures avec une technique irréprochable.
                </p>
<ul className="space-y-3 text-stone-500 font-light" style={{}}>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Set Open Format ou Spécialisé</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Adaptation au public</li>
<li className="flex items-center gap-3" style={{}}><svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Promotion réseaux sociaux</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y bg-stone-900 border-white/5" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white" style={{}}>Équipement Professionnel</h2>
<p className="text-xl font-light leading-relaxed text-stone-400" style={{}}>
                        La qualité sonore et visuelle est primordiale pour la réussite de votre événement. Je me déplace avec mon propre matériel haut de gamme, entretenu et renouvelé régulièrement.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-lg border flex items-center gap-4 bg-stone-950 border-white/5" style={{}}>
<div className="p-2 rounded-md bg-stone-900" style={{}}><svg className="lucide lucide-disc-3 w-6 h-6 text-orange-500" data-lucide="disc-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path><circle cx="12" cy="12" r="2"></circle><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path></svg></div>
<div>
<h4 className="font-medium text-white" style={{}}>Régie Pioneer</h4>
<span className="text-sm text-stone-500" style={{}}>Nexus 2 Standard Club</span>
</div>
</div>
<div className="p-4 rounded-lg border flex items-center gap-4 bg-stone-950 border-white/5" style={{}}>
<div className="p-2 rounded-md bg-stone-900" style={{}}><svg className="lucide lucide-speaker w-6 h-6 text-orange-500" data-lucide="speaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M12 6h.01"></path><circle cx="12" cy="14" r="4"></circle><path d="M12 14h.01"></path></svg></div>
<div>
<h4 className="font-medium text-white" style={{}}>Sonorisation</h4>
<span className="text-sm text-stone-500" style={{}}>Système Colonne Yamaha</span>
</div>
</div>
<div className="p-4 rounded-lg border flex items-center gap-4 bg-stone-950 border-white/5" style={{}}>
<div className="p-2 rounded-md bg-stone-900" style={{}}><svg className="lucide lucide-mic-2 w-6 h-6 text-orange-500" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg></div>
<div>
<h4 className="font-medium text-white" style={{}}>Micros HF</h4>
<span className="text-sm text-stone-500" style={{}}>Shure SM58 sans fil</span>
</div>
</div>
<div className="p-4 rounded-lg border flex items-center gap-4 bg-stone-950 border-white/5" style={{}}>
<div className="p-2 rounded-md bg-stone-900" style={{}}><svg className="lucide lucide-lightbulb w-6 h-6 text-orange-500" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg></div>
<div>
<h4 className="font-medium text-white" style={{}}>Lumières</h4>
<span className="text-sm text-stone-500" style={{}}>Lyres &amp; Pars LED DMX</span>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-stone-800" style={{}}>
<img alt="DJ Equipment" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-stone-900 via-stone-900/50 to-orange-900/20" style={{}}></div>
<div className="absolute bottom-8 left-8">
<p className="text-3xl font-semibold tracking-tighter text-white" style={{}}>Setup Clean &amp; Élégant</p>
<p className="mt-2 text-stone-400" style={{}}>Câblage invisible et booth design.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-stone-950" id="contact" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-3xl p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 blur-[100px] rounded-full pointer-events-none bg-orange-600/20" style={{}}></div>
<h2 className="relative text-4xl md:text-5xl font-semibold mb-6 tracking-tighter text-white" style={{}}>Prêt à enflammer la piste ?</h2>
<p className="relative text-xl font-light mb-10 max-w-2xl mx-auto text-stone-400" style={{}}>
                    Discutons de votre projet. Je réponds généralement sous 24h pour organiser un premier rendez-vous.
                </p>
<div className="relative flex flex-col md:flex-row justify-center gap-4 mb-16">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-colors text-lg bg-white text-stone-950 hover:bg-orange-50" href="mailto:contact@djbareyaxx.com" style={{}}>
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                        Envoyer un email
                    </a>
<a className="inline-flex items-center justify-center gap-2 border px-8 py-4 rounded-full font-medium hover:border-orange-500/50 transition-colors text-lg bg-stone-900 text-white border-stone-800" href="#" style={{}}>
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Réserver une date
                    </a>
</div>
<div className="relative border-t pt-12 flex flex-col md:flex-row justify-between items-center gap-6 border-white/10" style={{}}>
<div className="text-left">
<h3 className="font-semibold text-lg text-white" style={{}}>DJ Bareyaxx</h3>
<p className="text-stone-500 text-sm" style={{}}>Axel Bareyan</p>
</div>
<div className="flex gap-6">
<a className="text-stone-500 transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-500 transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-stone-500 transition-colors hover:text-white" href="#" style={{}}><svg className="lucide lucide-linkedin w-6 h-6" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
<p className="text-sm text-stone-600" style={{}}>
                        © 2024 Tous droits réservés.
                    </p>
</div>
</div>
</div>
</footer>


    </>
  );
}
