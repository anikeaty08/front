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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col group" href="#">
<span className="text-2xl md:text-3xl font-serif text-white tracking-tight group-hover:text-rose-500 transition-colors duration-300 uppercase">Vinárna Křižík</span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-400 transition-colors">Thámova 34 • Praha 8 Karlín</span>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#news">Akce</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#wine-food">Víno a pochutiny</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#snacks">Na objednávku</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#cellar">Sklep</a>
<a className="text-sm font-light text-neutral-300 hover:text-white transition-colors" href="#contact">Kontakt</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="flex flex-col items-end text-right group opacity-60 hover:opacity-100 transition-opacity" href="https://www.vinoteka-karlin.cz/" target="_blank">
<span className="text-xs font-serif text-white tracking-tight">Vinotéka Karlín</span>
<span className="text-[0.5rem] uppercase tracking-widest text-neutral-500">Šaldova 28</span>
</a>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex gap-3">
<a className="text-neutral-400 hover:text-rose-500 transition-colors" href="https://www.facebook.com/vinoteka.karlin/">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-rose-500 transition-colors" href="https://www.instagram.com/vinarna_krizik/">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Vinárna Křižík Interiér" className="w-full h-full object-cover opacity-50" src="https://www.vinarna-krizik.cz/wp-content/uploads/2024/08/TMA3382-kopie-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-neutral-950/30"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<div className="flex items-center justify-center gap-3 mb-6 text-rose-500/80">
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-light tracking-tight leading-[0.9] mb-8">
                Z našich provozoven <br/> <span className="italic text-rose-500/90">v Karlíně</span>
</h1>
<p className="text-lg md:text-xl text-neutral-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Nyní se nacházíte ve <span className="text-white font-medium">Vinárně Křižík</span>, Thámova ulice. Místo pro setkání, dobré víno a atmosféru.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-rose-900 text-white text-xs uppercase tracking-widest hover:bg-rose-800 transition-all border border-rose-800/50 shadow-[0_0_20px_rgba(225,29,72,0.1)]" href="#news">
                    Aktuálně
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-neutral-700 text-neutral-300 text-xs uppercase tracking-widest hover:border-white hover:text-white transition-all backdrop-blur-sm" href="#contact">
                    Rezervace
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5" id="news">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl text-white font-serif tracking-tight mb-16 text-center">Aktuálně u nás</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-rose-900/50 transition-colors">
<img alt="Sklep" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://www.vinarna-krizik.cz/wp-content/uploads/2025/01/IMG_0120-1024x768.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-rose-900/90 px-3 py-1 text-[10px] uppercase tracking-widest text-white">Akce</span>
</div>
<h3 className="text-2xl text-white font-serif mb-2 group-hover:text-rose-500 transition-colors">Sklep na vaše akce</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-2">Kapacita až 40 osob | Občerstvení zajistíme | Možnost objednání i různých programů.</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-rose-900/50 transition-colors">
<img alt="Silvestr" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://www.vinarna-krizik.cz/wp-content/uploads/2025/12/Plakat-18x24-v-3.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-neutral-800/90 px-3 py-1 text-[10px] uppercase tracking-widest text-white">Info</span>
</div>
<h3 className="text-2xl text-white font-serif mb-2 group-hover:text-rose-500 transition-colors">Silvestr v Křižíku</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-2">Volný program. Konzumace – záloha rezervace 400,- na osobu. Rezervace emailem nebo SMS.</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden mb-6 border border-white/5 group-hover:border-rose-900/50 transition-colors">
<img alt="Otevírací doba" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://www.vinarna-krizik.cz/wp-content/uploads/2024/12/IMG_0723-1024x768.jpeg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent"></div>
<span className="absolute bottom-4 left-4 bg-neutral-800/90 px-3 py-1 text-[10px] uppercase tracking-widest text-white">Info</span>
</div>
<h3 className="text-2xl text-white font-serif mb-2 group-hover:text-rose-500 transition-colors">Otevíračka na konci roku</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-2">24.12., 25.12., 1.1. zavřeno. 26.12. otevřeno 14:30-23:30. 31.12. otevřeno 11:00-19:00.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-neutral-900 overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 filter grayscale" src="https://www.vinarna-krizik.cz/wp-content/uploads/2024/08/TMA3265-kopie-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-start justify-center h-full">
<h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight mb-6">Rezervujte si svůj stůl</h2>
<p className="text-neutral-400 font-light mb-8 max-w-xl">
                Plánujete večer s přáteli nebo rodinnou oslavu? Rezervujte si místo telefonicky nebo nám napište.
            </p>
<div className="flex gap-4">
<a className="inline-flex items-center gap-2 px-8 py-3 bg-rose-900 text-white text-xs uppercase tracking-widest hover:bg-rose-800 transition-all" href="mailto:info@vinarna-krizik.cz?subject=Objednávka">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Napsat Email
                </a>
<a className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="tel:+420739818959">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    Zavolat
                </a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5" id="wine-food">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-rose-500 text-xs uppercase tracking-widest mb-2 block">Menu</span>
<h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight">Víno a pochutiny</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-12">

<div>
<h3 className="text-xl text-white font-serif mb-6 border-b border-rose-900/30 pb-2 inline-block">Bílá vína <span className="text-neutral-500 text-sm font-light ml-2">(1 l s sebou)</span></h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Veltlínské zelené</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">112 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Chardonnay</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">116 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Rulandské šedé</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">108 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Ryzlink rýnský</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">122 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Tramín červený</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">108 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Irsai Oliver</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">106 Kč</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl text-white font-serif mb-6 border-b border-rose-900/30 pb-2 inline-block">Červená vína <span className="text-neutral-500 text-sm font-light ml-2">(1 l s sebou)</span></h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Dornfelder</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">122 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Modrý Portugal</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">112 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Merlot</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">110 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Primitivo (Itálie)</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">122 Kč</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl text-white font-serif mb-6 border-b border-rose-900/30 pb-2 inline-block">Růžová &amp; Ostatní</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Zweigeltrebe Rosé <span className="text-xs text-neutral-500">(1l s sebou)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">112 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Karafa 1l stáčeného <span className="text-xs text-neutral-500">(ve vinárně)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">290 Kč</span>
</div>
</div>
</div>
</div>

<div className="space-y-12">

<div>
<h3 className="text-xl text-white font-serif mb-6 border-b border-rose-900/30 pb-2 inline-block">Pochutiny</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Brambůrky <span className="text-xs text-neutral-500">(solené)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">59 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Tyčinka škvarková</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">12 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Mandle <span className="text-xs text-neutral-500">(solené/uzené)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">55 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Arašídy <span className="text-xs text-neutral-500">(loupané 70g)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">39 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Olivy <span className="text-xs text-neutral-500">(zelené/černé)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">69 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Olivy s mandlí</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">95 Kč</span>
</div>
</div>
</div>

<div>
<h3 className="text-xl text-white font-serif mb-6 border-b border-rose-900/30 pb-2 inline-block">Sýry &amp; Uzeniny</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Korbáčky / Parenica</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">58 / 62 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Gouda 48%</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">108 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Džiugas</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">165 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Fuet <span className="text-xs text-neutral-500">(Španělský salám)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">112 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Serrano <span className="text-xs text-neutral-500">(sušená šunka 80g)</span></span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">92 Kč</span>
</div>
<div className="flex justify-between items-baseline group hover:opacity-100 opacity-80 transition-opacity">
<span className="text-neutral-300 font-light">Francouzské terriny</span>
<div className="flex-grow mx-4 border-b border-white/10 border-dotted relative -top-1"></div>
<span className="text-rose-400 font-serif">145 Kč</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-b border-white/5 relative overflow-hidden" id="cellar">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rose-950/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<div className="space-y-2">
<span className="text-rose-500 text-xs uppercase tracking-widest font-medium">Soukromé akce</span>
<h2 className="text-4xl md:text-5xl text-white font-serif tracking-tight">Vinný Sklep</h2>
</div>
<div className="space-y-4 text-neutral-400 font-light leading-relaxed">
<p>
<strong className="text-white font-medium block mb-1">Kapacita:</strong>
                        Tabule pro 30–33 osob (ve tvaru „U“) nebo standardní uspořádání pro 33-40 osob.
                    </p>
<p>
                        Sklep možno využít i pro menší skupiny. Exkluzivní rezervace celého salonku vyžaduje minimální konzumaci nápojů 6000 Kč.
                    </p>
<p>
                        Občerstvení připravujeme na objednávku (minimálně 48 hod. předem).
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-rose-400 hover:text-rose-300 transition-colors uppercase text-xs tracking-widest mt-4" href="mailto:info@vinarna-krizik.cz?subject=Objednávka%20salonku">
                    Objednat salonek 
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="relative order-1 md:order-2">
<div className="aspect-[3/4] bg-neutral-800 overflow-hidden relative group border border-white/5">
<img alt="Vinný sklep" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://www.vinarna-krizik.cz/wp-content/uploads/2024/08/Snimek-obrazovky-2024-08-09-v-12.11.30-676x1024.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-rose-900/20 -z-10 hidden md:block"></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-b border-white/5" id="snacks">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="w-full md:w-1/3">
<div className="sticky top-28">
<img alt="Občerstvení" className="w-full aspect-[4/3] object-cover mb-6 border border-white/5" src="https://www.vinarna-krizik.cz/wp-content/uploads/2024/08/TMA3460-kopie.jpg"/>
<h2 className="text-3xl text-white font-serif mb-4">Občerstvení na objednávku</h2>
<p className="text-neutral-400 font-light text-sm mb-6">
                            Nutné objednat minimálně 48 hodin předem. V neděli a svátky může být nabídka omezena.
                        </p>
<a className="inline-block px-6 py-2 border border-rose-900 text-rose-500 text-xs uppercase tracking-widest hover:bg-rose-900 hover:text-white transition-all" href="mailto:info@vinarna-krizik.cz">
                            Objednat emailem
                        </a>
</div>
</div>
<div className="w-full md:w-2/3 grid gap-8">

<div className="group border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-white font-serif group-hover:text-rose-500 transition-colors">Prkénko mix</h4>
<span className="text-rose-400 font-serif">395 Kč</span>
</div>
<p className="text-sm text-neutral-500 font-light">Archivní sýr, parenica, korbáčky, salám Fuet, sušená šunka. Pro cca 4-5 osob, 0,6 kg.</p>
</div>

<div className="group border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-white font-serif group-hover:text-rose-500 transition-colors">Obložené mísy</h4>
<span className="text-rose-400 font-serif">od 625 Kč</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-sm text-neutral-400 font-light">
<span>Mísa mix 1,1 kg (sýry, salámy, Serrano)</span>
<span>899 Kč</span>
</div>
<div className="flex justify-between text-sm text-neutral-400 font-light">
<span>Mísa sýrová s olivami 1 kg</span>
<span>625 Kč</span>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-white font-serif group-hover:text-rose-500 transition-colors">Řízečky (2-3 kg)</h4>
<span className="text-rose-400 font-serif">od 1350 Kč</span>
</div>
<p className="text-sm text-neutral-500 font-light mb-2">Kuřecí, vepřové nebo mix.</p>
<div className="space-y-1">
<div className="flex justify-between text-sm text-neutral-400 font-light">
<span>2 kg (cca 9-11 osob)</span>
<span>1350 Kč</span>
</div>
<div className="flex justify-between text-sm text-neutral-400 font-light">
<span>3 kg (cca 12-16 osob)</span>
<span>1890 Kč</span>
</div>
</div>
</div>

<div className="group border-b border-white/5 pb-6">
<div className="flex justify-between items-baseline mb-2">
<h4 className="text-lg text-white font-serif group-hover:text-rose-500 transition-colors">Kanapky / Jednohubky</h4>
<span className="text-rose-400 font-serif">850 Kč</span>
</div>
<p className="text-sm text-neutral-500 font-light">Mix 30 ks (šunková, hermelínová, salámová...)</p>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-base text-white font-serif">Zeleninové hranolky</h4>
<span className="text-rose-400 font-serif text-sm">495 Kč</span>
</div>
<p className="text-xs text-neutral-500 font-light">S dipem, 1kg</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-base text-white font-serif">Škvarková pomazánka</h4>
<span className="text-rose-400 font-serif text-sm">95 Kč</span>
</div>
<p className="text-xs text-neutral-500 font-light">Domácí, 0,15 kg</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-base text-white font-serif">Pečivo</h4>
<span className="text-rose-400 font-serif text-sm">85 Kč</span>
</div>
<p className="text-xs text-neutral-500 font-light">Pro cca 6 osob</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-2 border-t border-white/5" id="contact">

<div className="p-12 lg:p-24 bg-neutral-900/20 flex flex-col justify-center">
<div className="max-w-md mx-auto w-full space-y-12">
<div>
<h2 className="text-4xl text-white font-serif mb-8 tracking-tight">Kontakt</h2>
<div className="space-y-1 text-lg font-light text-white">
<p>Vinárna Křižík</p>
<p>Thámova 34, Praha 8 Karlín</p>
</div>
</div>
<div>
<h3 className="text-sm text-rose-500 uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                        Otevírací doba
                    </h3>
<ul className="space-y-2 text-neutral-400 font-light text-sm">
<li className="flex justify-between border-b border-white/5 pb-2"><span>Po – Pá</span> <span>12:00 – 23:30</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>So – Ne</span> <span>14:30 – 23:30</span></li>
<li className="flex justify-between border-b border-white/5 pb-2"><span>Svátky</span> <span>14:30 – 23:30</span></li>
</ul>
</div>
<div>
<h3 className="text-sm text-rose-500 uppercase tracking-widest font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        Spojení
                    </h3>
<div className="space-y-4">
<a className="block text-2xl text-white font-serif hover:text-rose-500 transition-colors" href="tel:+420739818959">
                            +420 739 818 959
                        </a>
<a className="block text-neutral-400 hover:text-white transition-colors" href="mailto:info@vinarna-krizik.cz">
                            info@vinarna-krizik.cz
                        </a>
</div>
<p className="mt-6 text-xs text-neutral-500 italic">
                        *Ujistěte se, že voláte do správné provozovny (Vinárna Křižík, Thámova).
                    </p>
</div>
<div className="pt-6 border-t border-white/5">
<p className="text-xs text-neutral-500 leading-relaxed">
                        Rezervace telefonicky přijímáme v pracovní době. Emailové rezervace jsou platné až po zpětném potvrzení.
                        <br/><br/>
<span className="text-rose-500">Pobyt se psy není povolen (neplatí pro nákup s sebou).</span>
</p>
</div>
</div>
</div>

<div className="h-[500px] lg:h-auto bg-neutral-900 relative">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://frame.mapy.cz/s/negapomupu" style={{border: '0', filter: 'grayscale(1) contrast(1.2) brightness(0.8)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border-l border-white/5"></div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="flex flex-col gap-4">
<a className="text-2xl font-serif text-white tracking-tight uppercase" href="#">Vinárna Křižík</a>
<div className="text-xs text-neutral-500 space-y-1">
<p>Thámova 21/34, Praha 8</p>
<p>Provozovatel: Toddy CZ s.r.o.</p>
<p>Sídlo: Šaldova 406/28, 186 00 Praha 8</p>
<p>IČ: 24740900 | DIČ: CZ24740900</p>
</div>
</div>
<div className="flex gap-8">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-neutral-400 hover:text-white hover:bg-rose-900 hover:border-rose-900 transition-all" href="https://www.facebook.com/vinoteka.karlin/">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full text-neutral-400 hover:text-white hover:bg-rose-900 hover:border-rose-900 transition-all" href="https://www.instagram.com/vinarna_krizik/">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Vinárna Křižík. Všechna práva vyhrazena.</p>
<p>MS v Praze, oddíl C, vložka 170440</p>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 md:hidden z-40">
<a className="w-12 h-12 bg-rose-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-900/40 border border-rose-800" href="tel:+420739818959">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</a>
</div>

    </>
  );
}
