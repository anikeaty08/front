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
colors: {
signal: '#FFAA00',
asphalt: '#111111',
charcoal: '#222222',
steel: '#e5e7eb',
concrete: '#f3f4f6',
white: '#ffffff',
border: 'rgba(255, 255, 255, 0.1)',
},
fontFamily: {
display: ['Oswald', 'sans-serif'],
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
widest: '0.1em',
},
backgroundImage: {
'stripe-pattern': 'repeating-linear-gradient(45deg, #111, #111 10px, #222 10px, #222 20px)',
},
animation: {
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



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
      

<div className="metal-bg"></div>

<nav className="fixed top-0 w-full z-40 border-b bg-asphalt/90 backdrop-blur-md transition-all duration-300 border-white/10" style={{}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="flex-shrink-0 flex w-auto h-12 relative items-center justify-center">
<div className="inline-block">
<img alt="Logo" className="-translate-x-16 -translate-x-12 h-auto max-w-xs translate-y-1 scale-50" src="https://www.signalisationmr.ca/attachments/Logo/MR2017_Web.png"/>
</div>
</div>
<div className="flex flex-col">
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
<a className="text-signal transition-colors" href="#accueil">Accueil</a>
<a className="transition-colors hover:text-white" href="#services" style={{}}>Services</a>
<a className="transition-colors hover:text-white" href="#realisations" style={{}}>Réalisations</a>
<a className="transition-colors hover:text-white" href="#lequipe" style={{}}>L'équipe</a>
<a className="bg-signal text-asphalt px-5 py-2 font-bold uppercase tracking-wider text-xs transition-all duration-300 hover:bg-black/40" href="#contact" style={{}}>
                    Contactez-nous
                </a>
</div>

<button className="md:hidden p-2 text-white" style={{}}>
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-asphalt" id="accueil">

<div className="absolute inset-0 z-0">

<img alt="Signalisation background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-r from-asphalt via-asphalt/90 to-asphalt/60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="opacity-5 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 md:pt-0 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 border mb-8 backdrop-blur-sm bg-black/40 border-white/10" style={{}}>
<span className="w-2 h-2 bg-signal animate-pulse"></span>
<span className="text-xs font-bold tracking-widest uppercase text-white/80" style={{}}>Expertise depuis 20 ans</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-medium tracking-tight font-display mb-8 drop-shadow-lg text-white" style={{}}>L'EXPERT EN <br/> <span className="text-signal">SIGNALISATION</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light max-w-xl mb-10 drop-shadow-md text-white/80" style={{}}>
                    Signalisation routière, industrielle et ferroviaire. Nous respectons toutes les normes en vigueur pour assurer votre sécurité et optimiser votre visibilité.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-signal text-asphalt px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,170,0,0.3)] hover:bg-black/40" href="#contact" style={{}}>
                        Besoin de vous afficher ?
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="backdrop-blur-sm border px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:text-asphalt bg-black/30 text-white border-white/20 hover:bg-black/40" href="#services" style={{}}>
                        Nos Services
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t bg-charcoal/80 backdrop-blur-md z-20 border-white/10" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="flex flex-wrap gap-8 md:gap-16 items-center text-xs tracking-widest uppercase font-bold text-white/50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-signal" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Normes MTQ</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-printer w-4 h-4 text-signal" data-lucide="printer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
<span className="">Impression Numérique</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield w-4 h-4 text-signal" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span>Certifié ISO</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-asphalt border-b py-0 overflow-hidden relative z-20 border-white/10" style={{}}>
<div className="relative w-full flex overflow-x-hidden group">
<div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused] py-8">

<div className="flex items-center gap-4 mx-2">
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Panneau" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Routier</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Usine" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Industriel</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Chantier" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Chantier</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Marquage" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Marquage</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Impression" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Grand Format</div>
</div>
</div>

<div className="flex items-center gap-4 mx-2">
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Panneau" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Routier</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Usine" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Industriel</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Chantier" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Chantier</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Marquage" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Marquage</div>
</div>
<div className="relative w-64 h-40 overflow-hidden rounded-sm border group/img border-white/10" style={{}}>
<img alt="Impression" className="w-full h-full object-cover opacity-60 grayscale group-hover/img:grayscale-0 group-hover/img:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-[10px] uppercase font-bold text-signal px-2 py-0.5 bg-black/80" style={{}}>Grand Format</div>
</div>
</div>
</div>

<div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-asphalt to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-asphalt to-transparent z-10 pointer-events-none"></div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative text-white" id="realisations">
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<span className="text-signal text-xs font-bold tracking-widest uppercase mb-4 block">Portfolio</span>
<h2 className="md:text-5xl uppercase text-4xl font-display">Nos Réalisations</h2>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 border flex items-center justify-center hover:bg-signal hover:text-asphalt hover:border-signal transition-colors border-white/20">
<svg className="lucide lucide-arrow-left" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 border flex items-center justify-center hover:bg-signal hover:text-asphalt hover:border-signal transition-colors border-white/20">
<svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative aspect-video bg-charcoal overflow-hidden cursor-pointer">
<img alt="Signalisation Chantier" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-asphalt to-transparent w-full">
<span className="text-signal text-xs font-bold tracking-widest uppercase mb-2 block">Routier</span>
<h3 className="font-display text-2xl text-white" style={{}}>Sécurisation Chantier Urbain</h3>
</div>
</div>

<div className="group relative aspect-video bg-charcoal overflow-hidden cursor-pointer">
<img alt="Signalisation Industrielle" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-asphalt to-transparent w-full">
<span className="text-signal text-xs font-bold tracking-widest uppercase mb-2 block">Industriel</span>
<h3 className="font-display text-2xl text-white" style={{}}>Marquage Usine Manufacture</h3>
</div>
</div>
</div>
</div>
</section><section className="border-b pt-24 pb-24 border-gray-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-signal text-xs font-bold tracking-widest uppercase mb-4 block">Pourquoi Nous ?</span>
<h2 className="font-display text-4xl text-asphalt uppercase mb-6">Qualité &amp; Technologie</h2>
<div className="space-y-6 text-asphalt/70 leading-relaxed">
<p className="">
                            Notre fierté c'est de vous offrir des produits de communication de qualité et à la fine pointe de la technologie, quelque soit vos besoins et vos attentes.
                        </p>
<p className="">
                            Nous désirons offrir à nos clients, particuliers et d'affaire, une expertise de pointe dans les domaines de la signalisation et de l'identification visuelle sous toutes les formes.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-10">
<div className="">
<div className="text-4xl font-display font-bold text-asphalt mb-1">20+</div>
<div className="text-xs uppercase tracking-widest text-asphalt/50">Années d'expérience</div>
</div>
<div className="">
<div className="text-4xl font-display font-bold text-asphalt mb-1">100%</div>
<div className="text-xs uppercase tracking-widest text-asphalt/50">Conforme Normes</div>
</div>
</div>
</div>
<div className="relative">

<div className="aspect-square bg-asphalt p-1 relative overflow-hidden">
<div className="absolute inset-0 bg-stripe-pattern opacity-10"></div>
<div className="h-full w-full bg-asphalt/50 border flex items-center justify-center p-10 text-center border-white/10" style={{}}>
<div className="border-4 border-signal p-8">
<h3 className="font-display text-3xl uppercase mb-2 text-white" style={{}}>Service Client</h3>
<p className="text-sm text-white/60" style={{}}>Une équipe dévouée pour vos projets d'affichage.</p>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-signal z-[-1]"></div>
</div>
</div>
</div>
</section><section className="pt-32 pb-32 relative" id="contact">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">

<div className="inline-flex justify-center items-center mb-6">
<svg className="" fill="none" height="60" viewbox="0 0 40 40" width="60">
<path className="" d="M20 4L36 32H4L20 4Z" fill="#FFAA00"></path>
<path d="M20 12V22" stroke="#111" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="20" cy="27" fill="#111" r="2"></circle>
</svg>
</div>
<h2 className="font-display text-4xl md:text-5xl tracking-tight uppercase mb-4 text-white" style={{}}>Besoin de vous afficher ?</h2>
<p className="text-white/50">Remplissez le formulaire ci-dessous pour une soumission rapide.</p>
</div>
<div className="bg-charcoal p-8 md:p-12 border shadow-2xl border-white/5">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-signal">Nom</label>
<input className="w-full bg-asphalt border p-4 focus:outline-none focus:border-signal transition-all placeholder-white/20 border-white/10 text-white" placeholder="Votre nom" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-signal">Téléphone</label>
<input className="w-full bg-asphalt border p-4 focus:outline-none focus:border-signal transition-all placeholder-white/20 border-white/10 text-white" placeholder="(555) 000-0000" style={{}} type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-signal">Courriel</label>
<input className="w-full bg-asphalt border p-4 focus:outline-none focus:border-signal transition-all placeholder-white/20 border-white/10 text-white" placeholder="courriel@entreprise.com" style={{}} type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-signal">Service Requis</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border text-xs uppercase font-bold peer-checked:bg-signal peer-checked:text-asphalt peer-checked:border-signal transition-all hover:bg-[#352c2c]/5 border-white/10 text-white/60" style={{}}>Signalisation</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border text-xs uppercase font-bold peer-checked:bg-signal peer-checked:text-asphalt peer-checked:border-signal transition-all hover:bg-[#352c2c]/5 border-white/10 text-white/60" style={{}}>Impression</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center py-3 border text-xs uppercase font-bold peer-checked:bg-signal peer-checked:text-asphalt peer-checked:border-signal transition-all hover:bg-[#352c2c]/5 border-white/10 text-white/60" style={{}}>Identité Visuelle</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-bold uppercase tracking-widest text-signal">Message</label>
<textarea className="w-full bg-asphalt border p-4 focus:outline-none focus:border-signal transition-all placeholder-white/20 border-white/10 text-white" placeholder="Détails de votre projet..." rows="4" style={{}}></textarea>
</div>
<button className="w-full bg-signal text-asphalt py-4 font-bold uppercase tracking-wider transition-all hover:bg-black/40" style={{}}>Envoyer la demande</button>
</form>
</div>
</div>
</section><section className="bg-[#5f5353]">
<div className="grid lg:grid-cols-2">


</div>
</section>





<footer className="border-t pt-20 pb-10 text-white border-white/10 bg-black/40" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-12 mb-16 gap-x-12 gap-y-12">
<div className="col-span-1 -translate-y-4 md:col-span-2 translate-x-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="inline-block">
<img alt="Logo" className="h-auto max-w-full -translate-x-6 -translate-y-16 scale-75" src="https://www.signalisationmr.ca/attachments/Logo/MR2017_Web.png"/>
</div>
</a>
<p className="leading-relaxed text-sm max-w-sm -translate-y-16 text-white/40">
                        Expert en signalisation routière, industrielle et ferroviaire. Impression numérique grand format et identification visuelle depuis plus de 20 ans.
                    </p>
</div>
<div className="">
<h4 className="text-signal text-xs font-bold uppercase tracking-widest mb-6">Navigation</h4>
<div className="flex flex-col gap-4 text-sm text-white/60" style={{}}>
<a className="hover:text-signal transition-colors" href="#accueil">Accueil</a>
<a className="hover:text-signal transition-colors" href="#services">Services</a>
<a className="hover:text-signal transition-colors" href="#realisations">Réalisations</a>
<a className="hover:text-signal transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="">
<h4 className="text-signal text-xs font-bold uppercase tracking-widest mb-6">Contact</h4>
<div className="flex flex-col gap-4 text-sm text-white/60" style={{}}>
<p className="">Montréal, Québec</p>
<p className="">(555) 123-4567</p>
<p className="">info@mrsignalisation.com</p>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-wider border-white/10 text-white/30" style={{}}>
<p>© 2024 Mr Signalisation. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-white" href="#" style={{}}>Confidentialité</a>
<a className="transition-colors hover:text-white" href="#" style={{}}>Termes</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
