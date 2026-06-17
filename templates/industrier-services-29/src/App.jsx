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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="text-4xl tracking-tight font-medium text-[#00FFF8] uppercase leading-none group-hover:opacity-90 transition-opacity">iClean</span>
<span className="text-xs tracking-widest text-zinc-400 uppercase leading-tight mt-1 font-medium">Industriereinigung</span>
</a>
<div className="hidden lg:flex items-center space-x-8 text-base font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Home</a>
<a className="hover:text-zinc-50 transition-colors" href="#leistungen">Leistungen</a>
<a className="hover:text-zinc-50 transition-colors" href="#reinigung">Reinigung</a>
<a className="hover:text-zinc-50 transition-colors" href="#referenzen">Referenzen</a>
<a className="hover:text-zinc-50 transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-zinc-50 transition-colors" href="#kontakt">Kontakt</a>
<div className="flex items-center space-x-5 pl-6 border-l border-zinc-800">
<a className="text-zinc-400 hover:text-[#00FFF8] transition-colors flex items-center gap-2 group" href="#">
<span className="group-hover:text-zinc-50 transition-colors">News</span>
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-[#00FFF8] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>

<button className="lg:hidden text-zinc-400 hover:text-zinc-50">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative pt-48 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#00FFF8] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00FFF8]/20 to-transparent"></div>
<span className="px-4 py-2 rounded-full border border-[#00FFF8]/30 bg-[#00FFF8]/5 text-[#00FFF8] text-sm font-medium tracking-wide uppercase mb-8 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
            Passion Creates Progress
        </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight max-w-5xl leading-[1.1] text-zinc-50">
            Industriereinigung in Gotha &amp; <span className="text-[#00FFF8]">Thüringen</span>
</h1>
<p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Willkommen bei iClean Industriereinigung – Ihrem Experten für professionelle Reinigungsdienstleistungen in Gotha und Umgebung. Wir bieten maßgeschneiderte Lösungen für Industrie, Gewerbe und Büros, um sicherzustellen, dass Ihre Produktionsstätten und Arbeitsbereiche stets in einwandfreiem Zustand sind.
        </p>
<div className="mt-12 flex flex-col sm:flex-row gap-5">
<a className="px-8 py-4 bg-[#00FFF8] text-zinc-950 font-medium rounded-full hover:bg-[#00FFF8]/90 transition-all flex items-center justify-center gap-2 text-lg" href="#kontakt">
                Angebot anfordern
                <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="px-8 py-4 bg-zinc-900/50 text-zinc-50 border border-zinc-800 font-medium rounded-full hover:bg-zinc-800 transition-all backdrop-blur-sm flex items-center justify-center text-lg" href="#leistungen">
                Unsere Leistungen
            </a>
</div>
</section>

<section className="py-32 px-6 relative border-t border-zinc-900/50 bg-zinc-950" id="leistungen">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-50">Unsere Expertise</h2>
<p className="mt-6 text-lg text-zinc-400 max-w-2xl">Ein umfassendes Spektrum an Reinigungs- und Aufbereitungsdiensten, abgestimmt auf höchste industrielle Standards.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="factory" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Industriereinigung</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Spezialisiert auf die Reinigung von Produktionsanlagen, Maschinen und Hallen.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Filter &amp; Lackierkabinen</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Sicherstellung eines reibungslosen Betriebs Ihrer Anlagen durch professionellen Filterwechsel und Reinigung.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="route" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Fahrbahn &amp; Boden</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Klare Fahrbahnmarkierungen und professionelle Bodenreinigung für mehr Sicherheit im Betrieb.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Unterhaltsreinigung</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Regelmäßige und gründliche Reinigung für Büros und Gewerbeflächen für ein optimales Arbeitsumfeld.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="maximize" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Fensterreinigung</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Streifenfreie Sauberkeit für einen klaren Durchblick in allen industriellen und gewerblichen Anlagen.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Auto- &amp; Polsterpflege</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Professionelle Pflege und Aufbereitung für Fahrzeuge und Polstermöbel Ihres Unternehmens.</p>
</div>
<div className="group p-8 md:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-[#00FFF8]/40 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col md:col-span-2 lg:col-span-1">
<div className="w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[#00FFF8] mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,248,0.1)]">
<i className="w-7 h-7" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-100 mb-4">Fahrzeugfolierung</h3>
<p className="text-lg text-zinc-400 leading-relaxed">Individuelle Gestaltung und nachhaltiger Schutz für Ihre Firmenfahrzeuge.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-900/50 bg-zinc-950 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
<div className="lg:w-1/2 w-full order-2 lg:order-1 relative">
<div className="aspect-square rounded-[3rem] bg-zinc-900/50 border border-zinc-800/60 relative overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,248,0.08)_0,transparent_60%)] group-hover:opacity-70 transition-opacity duration-700"></div>
<div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full h-full opacity-20">

<div className="bg-zinc-800 rounded-2xl"></div>
<div className="bg-zinc-800 rounded-2xl"></div>
<div className="bg-zinc-800 rounded-2xl"></div>
<div className="bg-zinc-800 rounded-2xl"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-32 h-32 text-zinc-800 group-hover:text-zinc-700 transition-colors duration-500" data-lucide="shield-check" strokeWidth="1"></i>
</div>
</div>
</div>
<div className="lg:w-1/2 order-1 lg:order-2">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 mb-8">Warum iClean?</h2>
<p className="text-xl text-zinc-400 leading-relaxed mb-12">Unser Ziel ist es, langfristige Partnerschaften durch hervorragenden Service aufzubauen. Wir passen uns Ihren spezifischen Anforderungen an.</p>
<div className="space-y-10">
<div className="flex gap-6 group">
<div className="mt-1 w-8 h-8 rounded-full bg-[#00FFF8]/10 border border-[#00FFF8]/20 flex items-center justify-center flex-shrink-0 text-[#00FFF8] group-hover:bg-[#00FFF8]/20 transition-colors">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-zinc-100">Erfahrung &amp; Kompetenz</h4>
<p className="mt-3 text-lg text-zinc-400 leading-relaxed">Unser erfahrenes Team versteht die spezifischen Anforderungen der Industrie und bietet effiziente Lösungen.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="mt-1 w-8 h-8 rounded-full bg-[#00FFF8]/10 border border-[#00FFF8]/20 flex items-center justify-center flex-shrink-0 text-[#00FFF8] group-hover:bg-[#00FFF8]/20 transition-colors">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-zinc-100">Zuverlässigkeit</h4>
<p className="mt-3 text-lg text-zinc-400 leading-relaxed">Wir garantieren eine pünktliche und äußerst gründliche Ausführung aller vereinbarten Reinigungsarbeiten.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="mt-1 w-8 h-8 rounded-full bg-[#00FFF8]/10 border border-[#00FFF8]/20 flex items-center justify-center flex-shrink-0 text-[#00FFF8] group-hover:bg-[#00FFF8]/20 transition-colors">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-2xl font-medium tracking-tight text-zinc-100">Flexibilität</h4>
<p className="mt-3 text-lg text-zinc-400 leading-relaxed">Individuelle Reinigungskonzepte, die terminlich und inhaltlich exakt auf Ihre betrieblichen Bedürfnisse abgestimmt sind.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-zinc-900 bg-zinc-950 overflow-hidden" id="kontakt">
<div className="absolute inset-0 bg-[#00FFF8]/[0.02]"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00FFF8]/20 to-transparent"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 mb-8">Überzeugt von unserer Qualität?</h2>
<p className="text-xl text-zinc-400 leading-relaxed mb-12 max-w-3xl mx-auto">
                Sie suchen einen zuverlässigen Partner für professionelle Reinigungsdienstleistungen in Gotha und Thüringen? Kontaktieren Sie uns für ein unverbindliches Angebot.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-50 text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-all text-lg" href="mailto:info@iclean.de">
                    Kontakt aufnehmen
                    <i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-zinc-900 border border-zinc-800 text-zinc-50 font-medium rounded-full hover:bg-zinc-800 transition-all text-lg" href="tel:+49000000000">
<i className="w-5 h-5 text-zinc-400" data-lucide="phone" strokeWidth="1.5"></i>
                    Anrufen
                </a>
</div>
</div>
</section>

<footer className="py-16 px-6 bg-zinc-950 border-t border-zinc-900/50 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="text-2xl tracking-tight font-medium text-zinc-50 uppercase leading-none">iClean</span>
<span className="text-base text-zinc-500 mt-2">© 2024 Industriereinigung. Alle Rechte vorbehalten.</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-base font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Impressum</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Cookie-Einstellungen</a>
</div>
</div>
</footer>


    </>
  );
}
