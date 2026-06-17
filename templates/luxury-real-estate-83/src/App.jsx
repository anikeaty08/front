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



        const menuOverlay = document.getElementById('mobile-menu-overlay');
        const openBtn = document.getElementById('menu-open');
        const closeBtn = document.getElementById('menu-close');
        
        // Select all navigation links inside the mobile menu
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu(show) {
            if (show) {
                menuOverlay.classList.remove('hidden');
                menuOverlay.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menuOverlay.classList.add('hidden');
                menuOverlay.classList.remove('flex');
                document.body.style.overflow = ''; // Restore scrolling
            }
        }

        // Open
        openBtn.addEventListener('click', () => toggleMenu(true));

        // Close via Button
        closeBtn.addEventListener('click', () => toggleMenu(false));

        // Close via Link Click (Iterate over all links)
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => toggleMenu(false));
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
      

<div className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-xl hidden flex-col items-center justify-center transition-opacity duration-300" id="mobile-menu-overlay">
<button className="absolute top-6 right-6 text-slate-900 p-2 hover:bg-gray-100 rounded-full transition-colors" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<nav className="flex flex-col space-y-8 text-center">
<a className="mobile-link text-3xl font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors" href="#home">Startseite</a>
<a className="mobile-link text-3xl font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors" href="#listings">Immobilien</a>
<a className="mobile-link text-3xl font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors" href="#services">Service</a>
<a className="mobile-link text-3xl font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors" href="#about">Über Uns</a>
<a className="mobile-link text-3xl font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors" href="#contact">Kontakt</a>
</nav>
</div>

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-sm font-semibold tracking-[0.15em] text-slate-900 uppercase z-50" href="#">
                Prime Estates
            </a>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#home">Startseite</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#listings">Immobilien</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Service</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">Über Uns</a>
<a className="px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                    Kontakt
                </a>
</nav>

<button className="md:hidden text-slate-900 p-2 focus:outline-none hover:bg-slate-100 rounded-lg transition-colors" id="menu-open">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative w-full h-screen overflow-hidden" id="home">
<div className="absolute inset-0">
<img alt="Luxury Penthouse" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-32 md:pb-40">
<span className="text-white/90 text-xs font-semibold tracking-widest uppercase mb-4 block">Premium Living</span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-tight max-w-3xl drop-shadow-sm">
                Exklusives Wohnen <br className="hidden md:block"/> neu definiert.
            </h1>
<div className="mt-8">
<a className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-slate-900 transition-all duration-300" href="#listings">
                    Objekte ansehen
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="listings">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Aktuelle Highlights.</h2>
<p className="mt-4 text-slate-500 font-light text-lg max-w-xl">Entdecken Sie handverlesene Immobilien an den begehrtesten Standorten Deutschlands.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-slate-600 hover:border-slate-600 transition-colors" href="#">
                    Alle Angebote <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

<div className="group cursor-pointer flex flex-col mb-10 md:mb-0">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
<img alt="Villa Grunewald" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                            Zu Verkaufen
                        </div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Villa Grunewald</h3>
<p className="text-slate-500 text-sm font-light mt-1">Berlin, Deutschland</p>
</div>
<p className="text-lg font-medium text-slate-900">4.500.000 €</p>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-slate-500 text-sm">
<div className="flex gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 5</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 320m²</span>
</div>
<button className="text-slate-900 text-sm font-medium hover:underline">Exposé</button>
</div>
</div>

<div className="group cursor-pointer flex flex-col mb-10 md:mb-0">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
<img alt="Penthouse HafenCity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-900">
                            Neu
                        </div>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Penthouse HafenCity</h3>
<p className="text-slate-500 text-sm font-light mt-1">Hamburg, Deutschland</p>
</div>
<p className="text-lg font-medium text-slate-900">2.850.000 €</p>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-slate-500 text-sm">
<div className="flex gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 3</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 180m²</span>
</div>
<button className="text-slate-900 text-sm font-medium hover:underline">Exposé</button>
</div>
</div>

<div className="group cursor-pointer flex flex-col mb-10 md:mb-0">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
<img alt="Loft München" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=1984&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Designer Loft</h3>
<p className="text-slate-500 text-sm font-light mt-1">München, Deutschland</p>
</div>
<p className="text-lg font-medium text-slate-900">1.950.000 €</p>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-slate-500 text-sm">
<div className="flex gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:bed-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bath-linear"></iconify-icon> 2</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:ruler-linear"></iconify-icon> 145m²</span>
</div>
<button className="text-slate-900 text-sm font-medium hover:underline">Exposé</button>
</div>
</div>
</div>

<div className="mt-10 md:hidden flex justify-center">
<a className="inline-flex items-center gap-2 border border-slate-200 px-6 py-3 rounded-full text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors w-full justify-center" href="#">
                    Alle Angebote anzeigen
                </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Verkauf</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Wir positionieren Ihre Immobilie am Markt mit hochwertigen Exposés und erreichen gezielt solvente Käufer.
                    </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Vermietung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Vom Screening potenzieller Mieter bis zur Vertragsunterzeichnung übernehmen wir den gesamten Prozess.
                    </p>
</div>

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">Bewertung</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Fundierte Marktwertermittlung basierend auf aktuellen Daten und jahrelanger Branchenexpertise.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden bg-gray-100 shadow-xl shadow-slate-200/50">
<img alt="Immobilienmakler" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">Über Prime Estates</span>
<h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-tight mb-6">
                        Ihr Partner für <br/> Premium-Immobilien.
                    </h2>
<p className="text-slate-500 font-light text-lg leading-relaxed mb-8">
                        "Immobilien sind mehr als nur Wände und Dächer. Sie sind der Ort, an dem Leben stattfindet. Unsere Mission ist es, für Sie nicht nur ein Objekt, sondern ein Zuhause zu finden, das Ihren höchsten Ansprüchen gerecht wird."
                    </p>
<div className="flex items-center gap-4">
<div className="flex flex-col text-left">
<span className="text-slate-900 font-medium text-lg">Thomas Weber</span>
<span className="text-slate-500 text-sm font-light">Geschäftsführer &amp; Gründer</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 rounded-t-[3rem] relative" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Interesse geweckt?</h2>
<p className="text-slate-400 font-light text-lg mb-10">Lassen Sie uns über Ihre Zukunft sprechen. Wir melden uns umgehend.</p>
<form className="space-y-4 max-w-md mx-auto">
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-white transition-all text-sm" placeholder="Ihre E-Mail Adresse" type="email"/>
</div>
<button className="w-full bg-white text-slate-900 font-medium rounded-full py-3 hover:bg-slate-200 transition-colors text-sm" type="button">
                    Kontakt aufnehmen
                </button>
</form>
<div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Impressum</a>
<a className="hover:text-white transition-colors" href="#">Datenschutz</a>
<a className="hover:text-white transition-colors" href="#">AGB</a>
</div>
<p>© 2023 Prime Estates GmbH. Alle Rechte vorbehalten.</p>
</div>
</div>
</section>



    </>
  );
}
