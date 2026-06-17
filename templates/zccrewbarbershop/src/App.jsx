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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
gold: {
400: '#E5C453',
500: '#D4AF37', /* Standard Gold */
600: '#B5942B',
}
},
backgroundImage: {
'metal-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)',
}
}
}
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
      
<div className="noise-bg"></div>

<nav className="fixed w-full z-40 top-0 border-b border-white/5 bg-neutral-950/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="group flex items-stretch h-12 select-none transform hover:scale-105 transition-transform duration-300" href="#">
<div className="flex flex-col justify-between items-center pr-3 border-r border-white/90 mr-3">
<span className="text-4xl font-serif leading-[0.8] text-white">Z</span>
<span className="text-[10px] font-serif lowercase text-white/80 font-bold">est.</span>
</div>
<div className="flex flex-col justify-between items-start pt-[2px]">
<span className="text-4xl font-serif leading-[0.8] text-white tracking-tighter">C CREW</span>
<span className="text-[10px] font-serif text-white/80 tracking-[0.2em] font-bold">MMXIV</span>
</div>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wide">
<a className="hover:text-gold-500 transition-colors duration-200" href="#services">Dienstleistungen</a>
<a className="hover:text-gold-500 transition-colors duration-200" href="#gallery">Galerie</a>
<a className="hover:text-gold-500 transition-colors duration-200" href="#contact">Standort</a>
<a className="bg-gold-500 text-black px-5 py-2 rounded-full font-medium hover:bg-white transition-colors duration-300 flex items-center gap-2" href="#">
<span>Termin buchen</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-white hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Barber Shop Interior" className="w-full h-full object-cover opacity-40 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wide text-neutral-400">
<span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                    Heute geöffnet bis 20:00
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter text-white leading-[0.9]">
                    Präzision <br/>
<span className="text-neutral-600">ist unser</span> <br/>
<span className="text-gold-500">Standard.</span>
</h1>
<p className="text-lg text-neutral-400 font-light max-w-md border-l border-gold-500/30 pl-6">
                    Erleben Sie erstklassiges Barbering im industriellen Stil in Singen. Präzise Schnitte, heiße Handtücher und eine Atmosphäre für den modernen Gentleman.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-gold-500 text-black px-8 py-4 rounded-md font-medium tracking-tight hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        Termin vereinbaren
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-md border border-white/20 hover:border-gold-500 hover:text-gold-500 text-white font-light tracking-tight transition-colors">
                        Leistungen ansehen
                    </button>
</div>
</div>

<div className="hidden md:block relative h-[600px] w-full border-l border-white/5 pl-12">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-md aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 ease-out group">
<img alt="Haircut Detail" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-950/80 backdrop-blur-sm border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
<div className="flex justify-between items-center text-sm">
<span className="text-white">Master Barber</span>
<iconify-icon className="text-gold-500" icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-4">Unsere Leistungen</h2>
<p className="text-neutral-500 max-w-sm">Detaillierte Pflegeleistungen, abgestimmt auf Ihren Stil und Ihre Gesichtsform.</p>
</div>
<div className="flex gap-2 items-center">
<iconify-icon className="text-gold-500" icon="solar:star-linear" width="20"></iconify-icon>
<span className="text-sm tracking-tight text-white">Top-bewertet in Singen</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white/5 group-hover:bg-gold-500/10 rounded-lg text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-gold-500 font-medium text-lg">€35</span>
</div>
<h3 className="text-xl text-white font-normal tracking-tight mb-2">Der Crew Cut</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400">Beratung, präziser Haarschnitt, Wäsche, Styling und Nackenrasur. Der Klassiker.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white/5 group-hover:bg-gold-500/10 rounded-lg text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:face-scan-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-gold-500 font-medium text-lg">€25</span>
</div>
<h3 className="text-xl text-white font-normal tracking-tight mb-2">Bartmodellierung</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400">Formen, Trimmen und Konturen mit dem Rasiermesser. Inklusive Bartöl.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white/5 group-hover:bg-gold-500/10 rounded-lg text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:water-drop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-gold-500 font-medium text-lg">€45</span>
</div>
<h3 className="text-xl text-white font-normal tracking-tight mb-2">Hot Towel Rasur</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400">Traditionelle Nassrasur mit heißen Kompressen, Pre-Shave-Ölen und Balsam.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-gold-500/30 transition-all duration-300 hover:bg-neutral-900/60">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-white/5 group-hover:bg-gold-500/10 rounded-lg text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-gold-500 font-medium text-lg">€55</span>
</div>
<h3 className="text-xl text-white font-normal tracking-tight mb-2">Das volle Z C Paket</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400">Haarschnitt &amp; Bartstyling Kombi. Das Komplettpaket für den modernen Mann.</p>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

<section className="py-32 bg-neutral-950" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<span className="text-xs font-semibold tracking-widest text-gold-500 uppercase mb-2 block">Unsere Arbeit</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white">Industrielle Präzision</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-lg bg-neutral-900 border border-white/5 hover:border-gold-500/20 transition-colors">
<img alt="Cut 1" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&amp;w=2568&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-gold-500 font-medium tracking-tight">Fade &amp; Texture</p>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-lg bg-neutral-900 border border-white/5 hover:border-gold-500/20 transition-colors">
<img alt="Cut 2" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-lg bg-neutral-900 border border-white/5 hover:border-gold-500/20 transition-colors">
<img alt="Cut 3" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-lg bg-neutral-900 border border-white/5 hover:border-gold-500/20 transition-colors">
<img alt="Cut 4" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-gold-500 font-medium tracking-tight">Classic Scissor Cut</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-between">
<div>
<h2 className="text-4xl font-light tracking-tighter text-white mb-8">Besuchen Sie uns</h2>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="mt-1">
<div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold-500 flex items-center justify-center text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-gold-500 transition-colors">Standort</h4>
<p className="text-neutral-400 font-light leading-relaxed">
                                        Magistratstraße 4<br/>
                                        78224 Singen, Deutschland
                                    </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="mt-1">
<div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold-500 flex items-center justify-center text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-gold-500 transition-colors">Öffnungszeiten</h4>
<ul className="text-neutral-400 font-light space-y-1">
<li className="flex justify-between w-40"><span>Mo - Fr</span> <span className="text-white">09:00 - 20:00</span></li>
<li className="flex justify-between w-40"><span>Samstag</span> <span className="text-white">09:00 - 16:00</span></li>
<li className="flex justify-between w-40"><span>Sonntag</span> <span className="text-neutral-600">Geschlossen</span></li>
</ul>
</div>
</div>
<div className="flex gap-6 group">
<div className="mt-1">
<div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-gold-500 flex items-center justify-center text-white group-hover:text-gold-500 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1 group-hover:text-gold-500 transition-colors">Kontakt</h4>
<p className="text-neutral-400 font-light hover:text-white transition-colors cursor-pointer">+49 7731 123456</p>
<p className="text-neutral-400 font-light hover:text-white transition-colors cursor-pointer">info@zccrew.de</p>
</div>
</div>
</div>
</div>
<div className="mt-12">
<button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-md font-medium tracking-tight hover:bg-gold-500 hover:text-black transition-colors">
                            Route planen
                        </button>
</div>
</div>

<div className="h-[500px] w-full rounded-xl overflow-hidden border border-white/10 relative bg-neutral-800">
<iframe allowfullscreen="" className="map-filter w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21465.123456789!2d8.835!3d47.761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a83654321:0x123456789abcdef!2sSingen%2C%20Germany!5e0!3m2!1sen!2sde!4v1600000000000!5m2!1sen!2sde" style={{border: '0'}} width="100%"></iframe>

<div className="absolute bottom-6 left-6 bg-neutral-950 p-4 rounded-lg border border-gold-500/30 shadow-2xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center text-black">
<span className="font-bold tracking-tighter">ZC</span>
</div>
<div>
<p className="text-white text-sm font-medium">Z C CREW</p>
<p className="text-xs text-neutral-500">Barber Shop</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-serif font-medium tracking-tighter text-white">Z C CREW</span>
<span className="text-gold-500">/</span>
<span className="text-xs text-neutral-500 tracking-wide">SINGEN</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-gold-500 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-gold-500 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
<p className="text-xs text-neutral-600 font-light">
                © 2023 Z C Crew. Alle Rechte vorbehalten.
            </p>
</div>
</footer>

    </>
  );
}
