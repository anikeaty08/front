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
      

<header className="border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">WET</a>
<nav className="hidden md:flex gap-10 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#katalog">Katalog</a>
<a className="hover:text-slate-900 transition-colors" href="#">Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Unternehmen</a>
</nav>
<a className="bg-[#FFB400] text-slate-900 px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-[#e5a200] transition-colors" href="#kontakt">
                Beratung anfordern
            </a>
</div>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-1/2 flex flex-col items-start">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                    WET Thermplate: <br/>Technik für Profi-Imker.
                </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg">
                    Robuste Maschinen, einfache Bedienung, Made in Germany. Finden Sie hier direkt das passende Produkt für Ihren Betrieb.
                </p>
<a className="bg-[#FFB400] text-slate-900 px-8 py-4 rounded-lg text-base font-medium hover:bg-[#e5a200] transition-colors inline-flex items-center gap-3" href="#katalog">
                    Zum Maschinen-Katalog
                    <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="lg:w-1/2 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50"></div>
<img alt="Glänzende Edelstahlmaschine" className="w-full h-full object-cover relative z-10" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
</section>

<section className="bg-slate-50 py-24 lg:py-32 border-t border-slate-100" id="katalog">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 lg:mb-20 max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-5">Produktkategorien</h2>
<p className="text-lg text-slate-600">Prozessoptimierte Anlagenkomponenten für jeden Schritt der professionellen Honigverarbeitung.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">

<a className="group block bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 col-span-1 md:col-span-1 lg:col-span-2" href="#">
<div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-10 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Entdeckeln</h3>
<p className="text-base text-slate-600">Messer-Systeme &amp; Maschinen</p>
</a>

<a className="group block bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 col-span-1 md:col-span-1 lg:col-span-2" href="#">
<div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-10 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Schleudern</h3>
<p className="text-base text-slate-600">S-Serie &amp; Radialschleudern</p>
</a>

<a className="group block bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-2" href="#">
<div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-10 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:funnel-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Wachstrennung</h3>
<p className="text-base text-slate-600">Zentrifugen &amp; Schmelzer</p>
</a>

<a className="group block bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 col-span-1 md:col-span-1 lg:col-span-3" href="#">
<div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-10 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Pumpen &amp; Rühren</h3>
<p className="text-base text-slate-600">Honiglogistik</p>
</a>

<a className="group block bg-white p-10 lg:p-12 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all duration-300 col-span-1 md:col-span-1 lg:col-span-3" href="#">
<div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-10 text-slate-700 group-hover:bg-slate-100 group-hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Großanlagen</h3>
<p className="text-base text-slate-600">Vollautomatisierte Linien</p>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-white py-24 lg:py-32" id="kontakt">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-8 text-white">
                Wir beraten Sie persönlich.
            </h2>
<p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
                Haben Sie Fragen zu unseren Maschinen oder benötigen Sie eine maßgeschneiderte Lösung für Ihren Betrieb? Rufen Sie uns direkt an.
            </p>
<div className="mb-24">
<a className="block text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tighter text-[#FFB400] hover:text-[#e5a200] transition-colors" href="tel:+49123456789">
                    +49 (0) 123 456 789
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left max-w-5xl mx-auto border-t border-slate-800 pt-16">
<div>
<div className="text-xl font-semibold tracking-tighter text-white mb-6">WET</div>
<p className="text-sm text-slate-400 leading-relaxed">
                        Thermplate GmbH<br/>
                        Industriestraße 42<br/>
                        70173 Stuttgart<br/>
                        Deutschland
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-slate-200 mb-6">Kontakt</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="mailto:info@wet-thermplate.de">info@wet-thermplate.de</a></li>
<li>Mo - Fr: 08:00 - 17:00 Uhr</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-200 mb-6">Rechtliches</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
</div>
</footer>

    </>
  );
}
