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
      

<div className="uppercase text-xs text-[#FDFBF7] tracking-widest font-mono text-center bg-[#2C2420] border-[#2C2420]/10 border-b pt-2 pb-2">Geöffnet Mo - Fr von 08:00 - 18:00 Uhr — Sa &amp; So Geschlossen</div>

<nav className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#2C2420]/10 transition-all duration-300">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<button className="md:hidden absolute left-6 top-6 text-[#2C2420]">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<a className="group flex flex-col items-center" href="#">
<h1 className="font-serif text-3xl md:text-4xl tracking-tighter text-[#E15A5A] group-hover:opacity-80 transition-opacity">
                    CAFE PITER
                </h1>
<span className="text-[10px] uppercase text-[#2C2420]/60 tracking-[0.2em] font-mono mt-1">Kaffee &amp; Speisen</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#2C2420]/80">
<a className="hover:text-[#E15A5A] transition-colors" href="#wochenkarte">Wochenkarte</a>
<a className="hover:text-[#E15A5A] transition-colors" href="#menu">Speisekarte</a>
<a className="hover:text-[#E15A5A] transition-colors" href="#about">Über Uns</a>
<a className="hover:text-[#E15A5A] transition-colors" href="#gallery">Galerie</a>
</div>
</div>
</nav>

<header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden border-b border-[#2C2420]/10">
<div className="absolute inset-0 z-0">
<img alt="Cafe Interior" className="w-full h-full object-cover opacity-90 grayscale-[10%] sepia-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b7a7795-fca6-463f-a8e8-23497912e713_3840w.png"/>
<div className="absolute inset-0 bg-[#2C2420]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#FDFBF7]/30 bg-[#FDFBF7]/10 backdrop-blur-md text-[#FDFBF7] text-xs tracking-widest uppercase font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                Täglich wechselnder Mittagstisch
            </div>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFBF7] leading-[0.9] tracking-tight mb-8 drop-shadow-lg">
                Genieße den<br/><span className="italic font-light text-[#E6DCD3]">Moment.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative px-8 py-3 bg-[#E15A5A] text-[#FDFBF7] text-sm tracking-widest uppercase hover:bg-[#c94b4b] transition-all duration-300 shadow-lg" href="#wochenkarte">
<span className="relative z-10 flex items-center gap-2">
                        Zur Wochenkarte
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
</div>
</div>
</header>

<section className="bg-[#ECEAE4] border-[#2C2420]/10 border-b pt-24 pb-24 relative" id="wochenkarte">

<div className="hidden lg:block absolute top-10 right-12 z-20 float-card rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="bg-[#FDFBF7] p-6 w-72 shadow-[8px_8px_0px_0px_rgba(44,36,32,0.15)] border border-[#2C2420]/10 flex flex-col items-center text-center relative">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#E15A5A] shadow-sm z-10 border border-white/20"></div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#E15A5A] border-b border-[#E15A5A]/20 pb-1 mb-4 w-full">Tagesangebot: <span id="dynamic-day">Heute</span></span>
<h4 className="text-xl text-[#2C2420] font-serif mb-2 leading-tight tracking-tight" id="dynamic-title">Laden...</h4>
<p className="text-xs italic text-[#2C2420]/70 mb-4 leading-relaxed" id="dynamic-desc">...</p>
<div className="flex items-center gap-3">
<span className="font-mono text-lg text-[#2C2420] font-bold" id="dynamic-price">€ --,--</span>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 relative">
<div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="md:col-span-4 lg:col-span-3 bg-[#E4E1D8] p-8 border border-[#2C2420]/5 rounded-sm shadow-sm sticky top-24">
<div className="space-y-8">
<div>
<h3 className="font-medium text-[#2C2420] mb-2 text-sm uppercase tracking-wide">Montag – Freitag</h3>
<p className="text-[#2C2420]/70 text-sm font-mono">08:00 – 18:00 Uhr</p>
<div className="w-full h-px bg-[#2C2420]/10 mt-6"></div>
</div>
<div>
<h3 className="font-medium text-[#2C2420] mb-2 text-sm uppercase tracking-wide">Kontakt</h3>
<p className="text-[#2C2420]/70 text-sm font-mono mb-1">Telefon: 030 | 887 19230</p>
<p className="text-[#2C2420]/70 text-sm font-mono">Mobil: 0176-57792975</p>
<div className="w-full h-px bg-[#2C2420]/10 mt-6"></div>
</div>

<div className="relative w-full aspect-square bg-gray-200 border border-[#2C2420]/10 overflow-hidden group cursor-pointer">
<img alt="Map" className="w-full h-full object-cover filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#2C2420] shadow-sm flex items-center gap-2">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    In Maps öffnen
                                </div>
</div>
</div>
</div>
</div>

<div className="md:col-span-8 lg:col-span-9 flex flex-col items-center text-center pt-4">
<h2 className="font-serif text-3xl md:text-4xl text-[#2C2420] tracking-tight mb-2">Angebote der Woche</h2>
<p className="text-sm font-mono text-[#2C2420]/60 mb-12 uppercase tracking-widest">Aktuelle Woche</p>
<div className="space-y-12 w-full max-w-2xl">

<div className="relative">
<h3 className="text-lg font-medium text-[#2C2420] mb-3 uppercase tracking-widest bg-[#ECEAE4] inline-block px-4 relative z-10">Montag</h3>
<div className="absolute top-1/2 left-0 w-full h-px bg-[#2C2420]/10 -z-0"></div>
<div className="space-y-1 mt-2">
<p className="text-[#2C2420]/80">Tomatensuppe</p>
<p className="text-[#2C2420]/80">Hähnchenschnitzel auf Thymiansauce mit Bandnudeln</p>
<p className="text-[#2C2420]/80">Pasta mit Walnüssen, Rucola und Parmesan</p>
</div>
</div>

<div className="relative">
<h3 className="text-lg font-medium text-[#2C2420] mb-3 uppercase tracking-widest bg-[#ECEAE4] inline-block px-4 relative z-10">Dienstag</h3>
<div className="absolute top-1/2 left-0 w-full h-px bg-[#2C2420]/10 -z-0"></div>
<div className="space-y-1 mt-2">
<p className="text-[#2C2420]/80">Linsensuppe</p>
<p className="text-[#2C2420]/80">Hackfleischbällchen mit Paprikasauce und Nudeln</p>
<p className="text-[#2C2420]/80">Pasta mit Broccoli, getrocknete Tomaten, Chili, Knoblauch und Fetakäse</p>
</div>
</div>

<div className="relative">
<h3 className="text-lg font-medium text-[#2C2420] mb-3 uppercase tracking-widest bg-[#ECEAE4] inline-block px-4 relative z-10">Mittwoch</h3>
<div className="absolute top-1/2 left-0 w-full h-px bg-[#2C2420]/10 -z-0"></div>
<div className="space-y-1 mt-2">
<p className="text-[#2C2420]/80">Erbsensuppe</p>
<p className="text-[#2C2420]/80">Hähnchenbruststreifen in Curry-Pflaumensauce mit Reis</p>
<p className="text-[#2C2420]/80">Pasta mit Lauch und Fetakäse in Rahmsauce</p>
</div>
</div>

<div className="relative">
<h3 className="text-lg font-medium text-[#2C2420] mb-3 uppercase tracking-widest bg-[#ECEAE4] inline-block px-4 relative z-10">Donnerstag</h3>
<div className="absolute top-1/2 left-0 w-full h-px bg-[#2C2420]/10 -z-0"></div>
<div className="space-y-1 mt-2">
<p className="text-[#2C2420]/80">Kartoffelsuppe</p>
<p className="text-[#2C2420]/80">Fischfilet auf Dill-Sahnesauce mit Reis</p>
<p className="text-[#2C2420]/80">Pasta „Arrabiata“ mit Parmesan</p>
</div>
</div>

<div className="relative">
<h3 className="text-lg font-medium text-[#2C2420] mb-3 uppercase tracking-widest bg-[#ECEAE4] inline-block px-4 relative z-10">Freitag</h3>
<div className="absolute top-1/2 left-0 w-full h-px bg-[#2C2420]/10 -z-0"></div>
<div className="space-y-1 mt-2">
<p className="text-[#2C2420]/80 font-medium text-[#E15A5A]">Wir wünschen unseren Gästen ein schönes Wochenende.</p>
<p className="text-[#2C2420]/70 text-sm mt-2 italic">Änderungen vorbehalten!</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#FDFBF7] pt-24 pb-24 relative" id="menu">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#ECEAE4] border border-[#2C2420]/10 rotate-45 z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative" id="menu-content">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-4xl text-[#2C2420] tracking-tight font-serif">Unsere Speisekarte</h2>
<div className="w-24 h-px bg-[#2C2420]/20 mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" data-icon="lucide:coffee" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="text-2xl text-[#2C2420] font-serif">HEIßGETRÄNKE</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Espresso</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 2,50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Café Crema</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 3,00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Cappuccino</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 3,50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Latte Macchiato</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 4,00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Frischer Minztee</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 3,80</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" data-icon="lucide:croissant" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97a11 11 0 0 1 .132-6.487M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352a11 11 0 0 0-6.486.132"></path><path d="M18 5a4 3 0 0 1 4 3a2 2 0 0 1-2 2a10 10 0 0 0-5.139 1.42M5 18a3 4 0 0 0 3 4a2 2 0 0 0 2-2a10 10 0 0 1 1.42-5.14"></path><path d="M8.709 2.554a10 10 0 0 0-6.155 6.155a1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676"></path></g></svg>
<h3 className="text-2xl text-[#2C2420] font-serif">KLEINIGKEITEN</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Hausgemachter Kuchen</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">ab € 4,00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Belegtes Brötchen (Käse/Wurst)</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 3,50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium">Panini Mozzarella &amp; Tomate</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 5,50</span></div></div>
</div>
</div>
</div>
<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<svg aria-hidden="true" data-icon="lucide:utensils" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<h3 className="font-serif text-2xl text-[#2C2420]">KARTENKLASSIKER</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Großer gemischter Salat</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 8,50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Currywurst mit Pommes</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 9,50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Bauernomelett</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 10,00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg">Schnitzel "Wiener Art"</h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€ 13,50</span></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F2EB] border-[#2C2420]/10 border-b pt-24 pb-24" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[#E15A5A]"></div>
<span className="font-mono text-xs tracking-[0.2em] uppercase text-[#E15A5A]">Unsere Philosophie</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2420] mb-8 tracking-tight leading-tight">
                        "Ehrliches Essen,<br/>guter Kaffee &amp; <span className="italic text-[#E15A5A]">Gastfreundschaft.</span>"
                    </h2>
<div className="space-y-6 text-[#2C2420]/70 font-light leading-relaxed">
<p className="">Im Cafe Piter legen wir Wert auf die einfachen, aber guten Dinge im Leben. Ein frischer Kaffee am Morgen, ein hausgemachtes Mittagessen, das wie bei Muttern schmeckt, und eine Atmosphäre, in der man sich sofort willkommen fühlt.</p>
<p className="">
                            Unsere Zutaten beziehen wir bevorzugt aus der Region und bereiten unsere täglichen wechselnden Gerichte mit Liebe und Sorgfalt zu. Ob für eine kurze Mittagspause oder einen gemütlichen Nachmittag – wir freuen uns auf Ihren Besuch.
                        </p>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#E6DCD3] shadow-2xl rotate-1 transition-transform duration-500 hover:rotate-0">
</div></div></div></div></section>
    </>
  );
}
