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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white reveal">
<div className="text-sm font-medium tracking-tighter uppercase cursor-pointer hover:opacity-70 transition-opacity">
            Atelier Pure
        </div>
<button className="group flex items-center gap-2">
<span className="text-xs font-medium tracking-wide uppercase hidden sm:block group-hover:tracking-widest transition-all duration-300">Menü</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-[95vh] px-4 pt-24 pb-4 flex flex-col justify-end">

<div className="absolute inset-0 mx-4 mt-4 mb-4 rounded-3xl overflow-hidden z-0 group">
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 z-10"></div>

<img alt="Model Portrait" className="w-full h-full object-cover object-top zoom-image grayscale opacity-90 contrast-110" src="https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 px-4 md:px-12 max-w-4xl mx-auto w-full text-center md:text-left mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 reveal reveal-delay-1">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-[10px] font-medium tracking-widest uppercase text-white/80">Jetzt geöffnet</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-6 reveal reveal-delay-2">
                Mehr als nur<br/>ein Schnitt.<br/><span className="text-neutral-400 font-light italic">Ihr Statement.</span>
</h1>
<p className="text-sm md:text-base font-light text-neutral-300 max-w-md md:ml-1 leading-relaxed reveal reveal-delay-3 tracking-wide">
                Willkommen im Atelier Pure. Wo Minimalismus auf Meisterhandwerk trifft. Wir kreieren Looks, die Ihre Persönlichkeit nicht verändern, sondern enthüllen.
            </p>
</div>
</header>

<section className="px-6 py-24 md:py-32 max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<iconify-icon className="text-white/60" height="32" icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight">
                    Perfektion liegt im <span className="text-neutral-500">Detail</span>.
                </h2>
<p className="text-sm md:text-base font-light text-neutral-400 leading-relaxed max-w-md">
                    Unser Ansatz ist redaktionell geprägt. Wir betrachten Haare als Textur, als Rahmen für das Gesicht. In einer Welt voller Lärm bieten wir Ihnen Stille und Fokus. Jeder Schnitt ist eine Skulptur, jede Farbe eine Nuance von Licht und Schatten.
                </p>
<div className="flex items-center gap-8 pt-4">
<div className="flex flex-col">
<span className="text-2xl font-light text-white">03</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Master Stylisten</span>
</div>
<div className="w-px h-12 bg-neutral-800"></div>
<div className="flex flex-col">
<span className="text-2xl font-light text-white">100%</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Premium Produkte</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative h-[500px] rounded-2xl overflow-hidden group">
<img alt="Interior" className="w-full h-full object-cover zoom-image grayscale contrast-125" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-xs font-medium tracking-tight bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-white/90 border border-white/10">
                    Innenansicht — Berlin Mitte
                </div>
</div>
</div>
</section>

<section className="px-4 py-12 max-w-xl mx-auto">
<div className="text-center mb-12">
<h3 className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-2">Preisliste</h3>
<p className="text-2xl font-medium text-white tracking-tight">Menü Auswahl</p>
</div>

<div className="glass rounded-2xl overflow-hidden divide-y divide-neutral-800">

<div className="ios-list-item p-4 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Waschen &amp; Schneiden</p>
<p className="text-[11px] text-neutral-500">Inkl. Kopfmassage &amp; Styling</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-light text-neutral-400">ab 65€</span>
<iconify-icon className="text-neutral-600 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="ios-list-item p-4 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Coloration</p>
<p className="text-[11px] text-neutral-500">Ansatz oder Komplett</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-light text-neutral-400">ab 85€</span>
<iconify-icon className="text-neutral-600 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="ios-list-item p-4 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Balayage &amp; Glossing</p>
<p className="text-[11px] text-neutral-500">Freihandtechnik</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-light text-neutral-400">ab 140€</span>
<iconify-icon className="text-neutral-600 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="ios-list-item p-4 flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:hair-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Styling &amp; Blowout</p>
<p className="text-[11px] text-neutral-500">Für besondere Anlässe</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-light text-neutral-400">ab 45€</span>
<iconify-icon className="text-neutral-600 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<p className="mt-4 text-[11px] text-center text-neutral-600 font-light">
            Alle Preise verstehen sich inkl. MwSt. und Beratung.
        </p>
</section>

<section className="py-12 px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto h-96 md:h-[600px]">
<div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group relative">
<img alt="Look 1" className="w-full h-full object-cover grayscale zoom-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
<img alt="Look 2" className="w-full h-full object-cover grayscale zoom-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative">
<img alt="Look 3" className="w-full h-full object-cover grayscale zoom-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group relative">
<img alt="Look 4" className="w-full h-full object-cover grayscale zoom-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="mt-24 border-t border-neutral-900 pt-16 px-6 text-center">
<div className="mb-12">
<h2 className="text-2xl font-light tracking-tighter text-white mb-2">ATELIER PURE</h2>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Est. 2024 — Berlin</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-light text-neutral-400 max-w-4xl mx-auto mb-16">
<div>
<h4 className="text-white font-normal mb-2">Besuchen Sie uns</h4>
<p>Torstraße 142</p>
<p>10119 Berlin</p>
</div>
<div>
<h4 className="text-white font-normal mb-2">Kontakt</h4>
<p>hello@atelierpure.de</p>
<p>+49 30 123 456 78</p>
</div>
<div>
<h4 className="text-white font-normal mb-2">Folgen</h4>
<div className="flex gap-4 justify-center">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">TikTok</a>
</div>
</div>
</div>
<div className="text-[10px] text-neutral-700 pb-24">
            © 2024 Atelier Pure. All rights reserved. Impressum. Datenschutz.
        </div>
</footer>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs px-4">
<button className="w-full h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-between px-2 pr-6 group hover:bg-white/15 transition-all active:scale-95">
<div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-wide mr-auto ml-4">Termin online buchen</span>
<iconify-icon className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

    </>
  );
}
