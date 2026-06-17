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



        // Simple Scroll Reveal Script
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3">
<a className="text-sm tracking-[0.2em] font-medium text-white uppercase hover:opacity-70 transition-opacity" href="#">
                Atelier Pure
            </a>
<div className="hidden md:flex space-x-8 text-xs font-medium tracking-wide text-neutral-300">
<a className="hover:text-white transition-colors" href="#prices">PREISE</a>
<a className="hover:text-white transition-colors" href="#team">TEAM</a>
<a className="hover:text-white transition-colors" href="#lookbook">LOOKBOOK</a>
</div>
<button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-200 transition-colors">
<span>Termin</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-end justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Model Portrait" className="w-full h-full object-cover grayscale object-top opacity-80" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 pb-24 md:pb-32 reveal active">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 border border-white/20 bg-black/20 backdrop-blur-md rounded-full px-3 py-1 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-neutral-300">Modern Luxury Hair</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.95] mb-8">
                    Dein Stil.<br/>
<span className="text-neutral-400">Deine Persönlichkeit.</span>
</h1>
<p className="text-neutral-300 text-lg md:text-xl font-light max-w-lg mb-10 leading-relaxed">
                    Wir definieren Schönheit neu durch Präzision, Textur und eine Atmosphäre absoluter Ruhe. Willkommen im Atelier Pure.
                </p>
<div className="flex flex-col md:flex-row gap-4">
<button className="group bg-white text-black rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                        Termin buchen
                        <iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="group backdrop-blur-md border border-white/20 bg-white/5 text-white rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-all hover:bg-white/10 flex items-center justify-center gap-3">
                        Services entdecken
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-neutral-950" id="prices">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Preise &amp; Leistungen</h2>
<p className="text-neutral-400 font-light text-sm md:text-base">Transparenz und Exzellenz in jedem Detail.</p>
</div>

<div className="bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 reveal">

<div className="group flex items-center justify-between p-5 border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white">Schnitt &amp; Styling</h3>
<p className="text-xs text-neutral-500 font-light">Inkl. Kopfmassage &amp; Pflege</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-300 font-medium">ab 85€</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-5 border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white">Coloration</h3>
<p className="text-xs text-neutral-500 font-light">Ansatz, Glossing &amp; Full Colour</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-300 font-medium">ab 90€</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-5 border-b border-neutral-800 hover:bg-neutral-800 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white">Balayage &amp; Highlights</h3>
<p className="text-xs text-neutral-500 font-light">Handpainted Details</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-300 font-medium">ab 180€</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group flex items-center justify-between p-5 hover:bg-neutral-800 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white">Treatments</h3>
<p className="text-xs text-neutral-500 font-light">Olaplex &amp; Keratin</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-300 font-medium">ab 45€</span>
<iconify-icon className="text-neutral-600" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<p className="mt-6 text-center text-xs text-neutral-600 font-light">
                Preise können je nach Haarlänge und Aufwand variieren.
            </p>
</div>
</section>

<section className="py-24 px-4 md:px-6 bg-black" id="lookbook">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white">Editorial<br/><span className="text-neutral-500">Lookbook</span></h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-white hover:text-neutral-300 transition-colors mt-4 md:mt-0" href="#">
                    Alle Styles ansehen
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 1" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">Blunt Cut</span>
</div>
</div>

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 2" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">Texture</span>
</div>
</div>

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 3" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white text-sm font-medium tracking-wider uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">Waves</span>
</div>
</div>

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 4" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 5" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="group break-inside-avoid relative overflow-hidden rounded-xl reveal">
<img alt="Look 6" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="team">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<span className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase mb-4 block">Die Experten</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Unser Team</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="group reveal">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-neutral-800">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Elena Weber</h3>
<p className="text-sm text-neutral-400 font-light mb-4">Master Stylist &amp; Color</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white cursor-pointer hover:text-neutral-300" icon="solar:instagram-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group reveal" style={{transitionDelay: '100ms'}}>
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-neutral-800">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">David Koch</h3>
<p className="text-sm text-neutral-400 font-light mb-4">Creative Director</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white cursor-pointer hover:text-neutral-300" icon="solar:instagram-linear" width="18"></iconify-icon>
</div>
</div>

<div className="group reveal" style={{transitionDelay: '200ms'}}>
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-neutral-800">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium text-white mb-1">Sophie Lang</h3>
<p className="text-sm text-neutral-400 font-light mb-4">Balayage Specialist</p>
<div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white cursor-pointer hover:text-neutral-300" icon="solar:instagram-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center reveal">Stimmen unserer Kunden</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 reveal">
<div className="flex items-center gap-1 mb-4 text-white">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">
                        "Endlich habe ich einen Salon gefunden, der genau versteht, was ich möchte. Das Balayage ist perfekt und sieht super natürlich aus. Das Ambiente ist reiner Luxus."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium">JK</div>
<span className="text-sm font-medium text-white">Julia K.</span>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-1 mb-4 text-white">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">
                        "David ist ein Künstler. Der Haarschnitt sitzt perfekt, auch ohne aufwendiges Styling zuhause. Absolut empfehlenswert für alle, die Wert auf Qualität legen."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium">MM</div>
<span className="text-sm font-medium text-white">Markus M.</span>
</div>
</div>

<div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:-translate-y-1 transition-transform duration-300 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-1 mb-4 text-white">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-neutral-300 font-light text-sm leading-relaxed mb-6">
                        "Eine Oase der Ruhe mitten in der Stadt. Die Beratung war ehrlich und professionell. Ich habe mich vom ersten Moment an wohlgefühlt."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-medium">SL</div>
<span className="text-sm font-medium text-white">Sarah L.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<h3 className="text-lg font-medium tracking-widest uppercase mb-6 text-white">Atelier Pure</h3>
<p className="text-xs text-neutral-500 font-light leading-relaxed">
                        High-End Hairdressing<br/>
                        für den modernen Ästheten.
                    </p>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Standort
                    </h4>
<p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                        Kurfürstendamm 194<br/>
                        10707 Berlin<br/>
                        Deutschland
                    </p>
<a className="text-xs text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors" href="#">Route planen</a>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon> Öffnungszeiten
                    </h4>
<ul className="text-xs text-neutral-400 font-light space-y-2">
<li className="flex justify-between max-w-[150px]"><span>Mo - Fr</span> <span className="text-white">10:00 - 20:00</span></li>
<li className="flex justify-between max-w-[150px]"><span>Samstag</span> <span className="text-white">09:00 - 18:00</span></li>
<li className="flex justify-between max-w-[150px]"><span>Sonntag</span> <span className="text-neutral-600">Geschlossen</span></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon> Kontakt
                    </h4>
<p className="text-xs text-neutral-400 font-light mb-2">
<a className="hover:text-white transition-colors" href="tel:+493012345678">+49 (0) 30 1234 5678</a>
</p>
<p className="text-xs text-neutral-400 font-light mb-6">
<a className="hover:text-white transition-colors" href="mailto:hello@atelierpure.de">hello@atelierpure.de</a>
</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="w-full h-48 bg-neutral-900 rounded-2xl overflow-hidden mb-8 relative grayscale opacity-50 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium text-white border border-white/20">Karte anzeigen</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-[10px] text-neutral-600 uppercase tracking-wider">
<p>© 2023 Atelier Pure. Alle Rechte vorbehalten.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Impressum</a>
<a className="hover:text-neutral-400" href="#">Datenschutz</a>
<a className="hover:text-neutral-400" href="#">AGB</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
