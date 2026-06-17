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
      
<div className="grain"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-10 md:px-16">
<div className="max-w-[1920px] mx-auto flex justify-between items-center">
<div className="group cursor-pointer">
<div className="flex flex-col">
<span className="text-3xl font-display tracking-[0.2em] leading-none">CROSSFIT</span>
<span className="text-3xl font-display tracking-[0.2em] leading-none text-[#DDB151]">NÎMES</span>
</div>
</div>
<div className="hidden lg:flex items-center space-x-16">
<a className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] hover:text-[#DDB151] transition-all duration-300" href="#">La Box</a>
<a className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] hover:text-[#DDB151] transition-all duration-300" href="#">Programmes</a>
<a className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] hover:text-[#DDB151] transition-all duration-300" href="#">Planning</a>
<a className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] hover:text-[#DDB151] transition-all duration-300" href="#">Membres</a>
</div>
<div className="flex items-center">
<button className="group flex items-center space-x-6">
<div className="hidden md:flex flex-col items-end">
<span className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] mb-1">Explorer</span>
<span className="w-12 h-px bg-white/20 group-hover:bg-[#DDB151] transition-all duration-500"></span>
</div>
<div className="flex flex-col space-y-1.5 py-2">
<span className="w-8 h-px bg-white group-hover:scale-x-110 origin-right transition-all"></span>
<span className="w-5 h-px bg-white group-hover:w-8 origin-right transition-all"></span>
</div>
</button>
</div>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Gym Interior" className="w-full h-full object-cover scale-105 opacity-50 grayscale hover:scale-110 transition-transform duration-[3s]" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 mt-20">
<div className="overflow-hidden mb-4">
<span className="block text-[0.65rem] font-bold uppercase tracking-[0.8em] text-[#DDB151] transform translate-y-full animate-[translate-y_1s_ease_forwards]">Le summum de la discipline</span>
</div>
<h1 className="flex flex-col items-center">
<span className="text-[clamp(4.5rem,18vw,15rem)] font-display leading-[0.75] tracking-tighter italic text-outline">DOMINEZ</span>
<span className="text-[clamp(4.5rem,18vw,15rem)] font-display leading-[0.75] tracking-tighter">VOTRE ART.</span>
</h1>
<div className="mt-16 max-w-xl mx-auto opacity-0 animate-[fadeIn_1.5s_ease_forwards_0.5s]">
<p className="text-[0.7rem] md:text-xs font-light text-white/40 uppercase tracking-[0.5em] leading-relaxed mb-12">
                    Plus de 2000m² d'infrastructure dédiée à la performance brute.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative px-14 py-5 overflow-hidden border border-white/10 backdrop-blur-sm" href="#">
<div className="absolute inset-0 bg-[#DDB151] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="relative z-10 text-[0.65rem] font-semibold uppercase tracking-[0.4em] group-hover:text-black transition-colors">Rejoindre l'élite</span>
</a>
<button className="group flex items-center space-x-3 text-white/50 hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-[0.65rem] font-semibold uppercase tracking-[0.4em]">Le film</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
<span className="text-[0.55rem] uppercase tracking-[0.5em] text-white/20">Scroll</span>
<div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
</div>
</section>

<section className="py-48 px-6 md:px-16 bg-white text-black overflow-hidden">
<div className="max-w-[1600px] mx-auto">
<div className="grid lg:grid-cols-12 gap-24 items-center">
<div className="lg:col-span-6 space-y-16">
<div>
<span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[#DDB151] mb-10 block">Héritage &amp; Vision</span>
<h2 className="text-6xl md:text-9xl font-display leading-[0.85] tracking-tighter mb-12">
                            L'ESPRIT DE <br/><span className="italic text-gray-300">LA MEUTE.</span>
</h2>
<p className="text-xl font-light leading-relaxed text-black/80 max-w-xl">
                            Mike et Julien ont bâti bien plus qu'une box. Ils ont forgé un temple où chaque goutte de sueur est un investissement. Ici, on ne compte pas les répétitions, on fait en sorte que chaque répétition compte.
                        </p>
</div>
<div className="grid grid-cols-2 gap-16 pt-12 border-t border-black/5">
<div className="group cursor-default">
<span className="text-5xl font-display block mb-4 group-hover:text-[#DDB151] transition-colors">XCVIII</span>
<span className="text-[0.6rem] uppercase tracking-[0.3em] font-semibold text-black/40 italic">Machines de pointe</span>
</div>
<div className="group cursor-default">
<span className="text-5xl font-display block mb-4 group-hover:text-[#DDB151] transition-colors">MMXII</span>
<span className="text-[0.6rem] uppercase tracking-[0.3em] font-semibold text-black/40 italic">Année de fondation</span>
</div>
</div>
</div>
<div className="lg:col-span-6 relative group">
<div className="relative overflow-hidden aspect-[4/5]">
<img alt="Training Moment" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-10 -left-10 bg-black text-white p-12 hidden xl:block">
<iconify-icon className="text-4xl text-[#DDB151] mb-6" icon="solar:quote-bold-linear"></iconify-icon>
<p className="text-sm italic font-light max-w-[200px] leading-relaxed">"Le confort est l'ennemi de la croissance."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-48 bg-[#0A0A0A] relative overflow-hidden">
<div className="px-6 md:px-16 mb-24 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end">
<h2 className="text-7xl md:text-[10rem] font-display tracking-tighter leading-none italic text-outline opacity-30">CURRICULUM</h2>
<div className="max-w-xs text-right mt-12 md:mt-0">
<p className="text-[0.6rem] uppercase tracking-[0.4em] text-white/40 leading-loose">
                        Une programmation scientifique pour des résultats athlétiques.
                    </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/5 relative z-10">

<div className="group relative aspect-[3/4] border-x border-white/5 overflow-hidden flex flex-col justify-end p-12">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[0.6rem] font-bold text-[#DDB151] tracking-[0.5em] mb-4 block">01</span>
<h3 className="text-5xl font-display mb-6 tracking-tight">WOD FOUNDRY</h3>
<p className="text-xs text-white/50 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                        Le coeur battant du CrossFit. Intensité maximale, résultats garantis sous l'oeil expert de nos coachs.
                    </p>
</div>
</div>

<div className="group relative aspect-[3/4] border-x border-white/5 overflow-hidden flex flex-col justify-end p-12">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" src="https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[0.6rem] font-bold text-[#DDB151] tracking-[0.5em] mb-4 block">02</span>
<h3 className="text-5xl font-display mb-6 tracking-tight">BARBELL CLUB</h3>
<p className="text-xs text-white/50 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                        Haltérophilie pure. Snatch, Clean &amp; Jerk. La technique rencontre la puissance brute.
                    </p>
</div>
</div>

<div className="group relative aspect-[3/4] border-x border-white/5 overflow-hidden flex flex-col justify-end p-12">
<img className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000" src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-[0.6rem] font-bold text-[#DDB151] tracking-[0.5em] mb-4 block">03</span>
<h3 className="text-5xl font-display mb-6 tracking-tight">ENGINE BUILDER</h3>
<p className="text-xs text-white/50 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                        Capacité cardiovasculaire et endurance. Pour ceux qui veulent ne jamais s'arrêter.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-48 px-6 md:px-16 bg-white text-black">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-20">
<div className="md:w-1/2">
<span className="text-[0.6rem] font-bold uppercase tracking-[0.6em] text-[#DDB151] mb-10 block">Prêt pour le changement ?</span>
<h2 className="text-6xl md:text-8xl font-display leading-[0.85] tracking-tighter mb-12 uppercase italic">Investissez <br/>en vous-même.</h2>
<p className="text-sm font-light text-black/50 tracking-widest leading-loose max-w-md">
                        Pas de contrat caché. Pas de frais d'entrée. Juste une promesse d'excellence.
                    </p>
</div>
<div className="md:w-1/2 w-full space-y-px bg-black/5">
<div className="group bg-white py-14 px-10 flex justify-between items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
<div>
<h4 className="text-3xl font-display tracking-tight mb-2">INITIATION</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-black/40 group-hover:text-white/40">3 Séances d'introduction</p>
</div>
<div className="text-right">
<span className="text-4xl font-display block mb-1">45€</span>
<span className="text-[0.55rem] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Réserver →</span>
</div>
</div>
<div className="group bg-white py-14 px-10 flex justify-between items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
<div>
<h4 className="text-3xl font-display tracking-tight mb-2">FULL ACCESS</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-black/40 group-hover:text-white/40">Accès illimité illimité</p>
</div>
<div className="text-right">
<span className="text-4xl font-display block mb-1">85€<small className="text-xs">/mois</small></span>
<span className="text-[0.55rem] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Réserver →</span>
</div>
</div>
<div className="group bg-white py-14 px-10 flex justify-between items-center cursor-pointer hover:bg-black hover:text-white transition-all duration-500">
<div>
<h4 className="text-3xl font-display tracking-tight mb-2">PACK 10 WODS</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-black/40 group-hover:text-white/40">Valable 6 mois</p>
</div>
<div className="text-right">
<span className="text-4xl font-display block mb-1">120€</span>
<span className="text-[0.55rem] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Réserver →</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-48 pb-16 px-6 md:px-16 border-t border-white/5">
<div className="max-w-[1920px] mx-auto">
<div className="grid lg:grid-cols-12 gap-32 mb-40">
<div className="lg:col-span-7">
<h2 className="text-8xl md:text-[14rem] font-display tracking-tighter leading-[0.75] mb-20">
                        JOIN THE<br/><span className="text-[#DDB151] italic">LEGACY.</span>
</h2>
<div className="flex flex-wrap gap-12">
<a className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] border-b border-white/10 pb-4 hover:border-[#DDB151] transition-colors" href="#">Instagram</a>
<a className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] border-b border-white/10 pb-4 hover:border-[#DDB151] transition-colors" href="#">Facebook</a>
<a className="text-[0.65rem] font-semibold uppercase tracking-[0.5em] border-b border-white/10 pb-4 hover:border-[#DDB151] transition-colors" href="#">YouTube</a>
</div>
</div>
<div className="lg:col-span-5 grid md:grid-cols-2 gap-20">
<div className="space-y-12">
<div>
<p className="text-[0.55rem] font-bold uppercase tracking-[0.6em] text-white/20 mb-6 italic">Le Sanctuaire</p>
<p className="text-sm font-light leading-loose text-white/70">
                                240 Rue de l'Hostellerie<br/>
                                Zone Euro 2000, 30900 Nîmes
                            </p>
</div>
<div>
<p className="text-[0.55rem] font-bold uppercase tracking-[0.6em] text-white/20 mb-6 italic">Horaires</p>
<p className="text-sm font-light leading-loose text-white/70">
                                Lun — Ven: 07:00 – 21:00<br/>
                                Sam: 09:00 – 13:00
                            </p>
</div>
</div>
<div className="space-y-12">
<div>
<p className="text-[0.55rem] font-bold uppercase tracking-[0.6em] text-white/20 mb-6 italic">Contact Direct</p>
<p className="text-lg font-light mb-2">07 69 19 82 71</p>
<p className="text-sm text-[#DDB151] font-light">contact@crossfitnimes.fr</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8 opacity-20">
<p className="text-[0.55rem] uppercase tracking-[0.4em]">Propriété de CrossFit Nîmes © 2024</p>
<div className="flex space-x-12">
<a className="text-[0.55rem] uppercase tracking-[0.4em] hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="text-[0.55rem] uppercase tracking-[0.4em] hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
<style>
        @keyframes translate-y {
            to { transform: translateY(0); }
        }
        @keyframes fadeIn {
            to { opacity: 1; }
        }
    </style>

    </>
  );
}
