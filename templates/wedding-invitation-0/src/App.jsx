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
      

<div className="relative flex flex-col min-h-screen overflow-hidden w-full shrink-0">

<header className="flex md:px-12 shrink-0 z-20 bg-[#FBEBE8] w-full border-[#FF2718]/30 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="md:text-3xl text-2xl font-thin tracking-tight font-instrument-serif">L&amp;L</div>
<nav className="hidden lg:flex items-center space-x-12 text-xl font-thin">
<a className="hover:opacity-60 transition-opacity" href="#">Cesta &amp; Ubytování</a>
<a className="hover:opacity-60 transition-opacity" href="#">Program</a>
<a className="hover:opacity-60 transition-opacity" href="#">Svatební dary</a>
<a className="border border-[#FF2718] rounded-full px-8 py-2 uppercase tracking-widest text-lg hover:bg-[#FF2718] hover:text-[#FBEBE8] transition-colors" href="#">
                    RSVP
                </a>
</nav>

<button className="lg:hidden p-2 text-[#FF2718] flex items-center justify-center hover:opacity-60 transition-opacity">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<main className="flex-1 flex min-h-[70vh] w-full relative items-center justify-center">

<div className="w-full relative flex items-center justify-center -translate-y-8 md:-translate-y-16">

<div className="hidden lg:flex absolute left-8 lg:left-12 xl:left-24 top-1/2 -translate-y-1/2 flex-col uppercase leading-loose z-10 text-2xl font-thin text-[#FF2718]/80 tracking-widest font-sans text-center items-center">
<span className="">Pozvánka na</span>
<span className="">naši svatbu</span>
</div>

<div className="flex flex-col z-10 font-serif text-center items-center justify-center gap-y-2">
<h1 className="md:text-9xl leading-none uppercase text-7xl tracking-tight font-thin">Lea</h1>
<span className="leading-none md:my-[-16px] md:text-6xl text-6xl font-extralight italic text-[#FF2718]/80 font-playfair tracking-tight mt-[-8px] mb-[-8px]">&amp;</span>
<h1 className="md:text-9xl leading-none uppercase text-7xl tracking-tight font-thin">Lukáš</h1>
</div>

<div className="hidden lg:flex absolute right-8 lg:right-12 xl:right-24 top-1/2 -translate-y-1/2 flex-col items-center text-center font-sans text-2xl uppercase tracking-widest leading-loose font-thin text-[#FF2718]/80 z-10">
<span>12. 7. 25</span>
<span>Praha, ČR</span>
</div>
</div>
</main>

<div className="absolute bottom-8 md:bottom-16 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
<svg className="text-[#FF2718]/90" height="160" viewbox="0 0 15000 160" width="15000">
<path d="M0,80 Q150,120 300,80 T600,80 T900,80 T1200,80 T1500,80 T1800,80 T2100,80 T2400,80 T2700,80 T3000,80 T3300,80 T3600,80 T3900,80 T4200,80 T4500,80 T4800,80 T5100,80 T5400,80 T5700,80 T6000,80 T6300,80 T6600,80 T6900,80 T7200,80 T7500,80 T7800,80 T8100,80 T8400,80 T8700,80 T9000,80 T9300,80 T9600,80 T9900,80 T10200,80 T10500,80 T10800,80 T11100,80 T11400,80 T11700,80 T12000,80 T12300,80 T12600,80 T12900,80 T13200,80 T13500,80 T13800,80 T14100,80 T14400,80 T14700,80 T15000,80" fill="transparent" id="wavePath"></path>
<text className="font-instrument-serif text-2xl md:text-3xl tracking-tight" fill="currentColor">
<textpath href="#wavePath" startoffset="0">
<animate attributename="startOffset" dur="250s" from="0" repeatcount="indefinite" to="-10000"></animate>
                        Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>     Budeme se brát     <tspan className="text-lg">❤</tspan>    
                    </textpath>
</text>
</svg>
</div>
</div>

<section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pt-24 md:pt-40 pb-16 md:pb-24">

<p className="text-3xl md:text-5xl lg:text-6xl leading-snug font-extralight tracking-tight max-w-[900px] mb-32 md:mb-48">
            Připojte se k nám při oslavě této nové kapitoly našeho společného života. Níže najdete kompletní harmonogram víkendu a všechny důležité detaily. Doufáme, že se uvidíme!
        </p>

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16">

<div className="md:col-span-6 flex flex-col">
<h2 className="text-7xl md:text-8xl lg:text-9xl leading-[0.85] font-instrument-serif tracking-tight mb-16 md:mb-32">
                    Náš<br/>příběh
                </h2>
<div className="w-full overflow-hidden">
<img alt="Pár u vody" className="w-full h-auto aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000 ease-in-out" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-6 flex flex-col md:pt-8 lg:pt-12">

<div className="space-y-8 text-xl md:text-2xl font-extralight leading-relaxed max-w-[520px]">
<p>
                        Všechno začalo jedním nečekaným setkáním. Známe se už nějaký ten pátek, a i když nás život občas zavál na různá místa, nakonec jsme si k sobě cestu vždycky našli zpět. Každý společný krok a zážitek nás utvrdil v tom, že jednoduše patříme k sobě.
                    </p>
<p>
                        Těšíme se, až s vámi oslavíme tento pro nás tak výjimečný den. Bude to den plný radosti, smíchu, dobrého jídla, pití a především lásky. Děkujeme, že jste součástí našeho příběhu a že to s námi pořádně zapijete.
                    </p>
</div>

<div className="w-full md:w-[75%] lg:w-[65%] ml-auto mt-24 md:mt-[300px] lg:mt-[400px] overflow-hidden">
<img alt="Pár spolu" className="w-full h-auto aspect-[3/4] object-cover hover:scale-105 transition-transform duration-1000 ease-in-out" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-24 md:pb-40">

<hr className="border-t border-[#FF2718]/30 w-full mb-16 md:mb-32"/>

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 items-start">

<div className="md:col-span-6 flex flex-col md:sticky md:top-32">
<h2 className="text-7xl md:text-8xl lg:text-9xl leading-[0.85] font-instrument-serif tracking-tight">
                    Svatební<br/>víkend
                </h2>
</div>

<div className="md:col-span-6 flex flex-col md:pt-4">
<div className="flex flex-col space-y-16 md:space-y-24">

<div className="flex flex-col">
<h3 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl leading-none mb-8 tracking-tight">Pátek 11. července</h3>
<div className="flex flex-col space-y-8">
<div>
<p className="text-xl md:text-2xl font-normal mb-1 tracking-tight">Uvítací párty | 18:00 - 20:00</p>
<p className="text-lg md:text-xl font-extralight leading-snug">
                                    Restaurace, Centrum<br/>
                                    Dlouhá 123, Praha 1, 110 00
                                </p>
</div>
</div>
</div>

<div className="flex flex-col">
<h3 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl leading-none mb-8 tracking-tight">Sobota 12. července</h3>
<div className="flex flex-col space-y-8 md:space-y-12">
<div>
<p className="text-xl md:text-2xl font-normal mb-1 tracking-tight">Obřad | 14:00</p>
<p className="text-lg md:text-xl font-extralight leading-snug">
                                    Zámeček, Troja<br/>
                                    U Trojského zámku 1, Praha 7, 171 00
                                </p>
</div>
<div>
<p className="text-xl md:text-2xl font-normal mb-1 tracking-tight">Hostina | 16:00</p>
<p className="text-lg md:text-xl font-extralight leading-snug">
                                    Zámeček, Troja<br/>
                                    U Trojského zámku 1, Praha 7, 171 00
                                </p>
</div>
</div>
</div>

<div className="flex flex-col">
<h3 className="font-instrument-serif text-3xl md:text-4xl lg:text-5xl leading-none mb-8 tracking-tight">Neděle 13. července</h3>
<div className="flex flex-col space-y-8">
<div>
<p className="text-xl md:text-2xl font-normal mb-1 tracking-tight">Brunch | 11:30</p>
<p className="text-lg md:text-xl font-extralight leading-snug">
                                    Restaurace, Centrum<br/>
                                    Dlouhá 123, Praha 1, 110 00
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>

<hr className="border-t border-[#FF2718]/30 w-full mt-24 md:mt-40"/>
</section>

<section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-24 md:pb-40">

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 items-start">

<div className="md:col-span-6 flex flex-col md:sticky md:top-32">
<h2 className="text-7xl md:text-8xl lg:text-9xl leading-[0.85] font-instrument-serif tracking-tight">
                    Kde se<br/>ubytovat
                </h2>
</div>

<div className="md:col-span-6 flex flex-col md:pt-4">
<div className="flex flex-col space-y-12">
<p className="text-xl md:text-2xl font-extralight leading-relaxed max-w-[480px]">
                        Připravili jsme pro vás několik tipů na ubytování v okolí místa naší svatby – v Praze. Doporučujeme ubytovat se tam, kde plánujete strávit nejvíce času.
                    </p>
<div>
<a className="inline-block border border-[#FF2718] rounded-full px-10 py-4 uppercase tracking-widest text-lg font-thin hover:bg-[#FF2718] hover:text-[#FBEBE8] transition-colors" href="#">
                            Najít hotel
                        </a>
</div>
</div>
</div>
</div>

<hr className="border-t border-[#FF2718]/30 w-full mt-24 md:mt-40"/>
</section>

<section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-12 md:pb-20">

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 items-start">

<div className="md:col-span-6 flex flex-col md:sticky md:top-32">
<h2 className="text-7xl md:text-8xl lg:text-9xl leading-[0.85] font-instrument-serif tracking-tight">
                    Co<br/>podniknout
                </h2>
</div>

<div className="md:col-span-6 flex flex-col md:pt-4">
<div className="flex flex-col space-y-12">
<p className="text-xl md:text-2xl font-extralight leading-relaxed max-w-[480px]">
                        Pro rodinu a přátele z dálky chceme, abyste si město užili jako místní. Tady jsou naše oblíbená místa, kde se dobře najíte, napijete a co stojí za to prozkoumat v okolí.
                    </p>
<div>
<a className="inline-block border border-[#FF2718] rounded-full px-10 py-4 uppercase tracking-widest text-lg font-thin hover:bg-[#FF2718] hover:text-[#FBEBE8] transition-colors" href="#">
                            Prozkoumat město
                        </a>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden pointer-events-none select-none z-0 mt-20 md:mt-32 mb-20 md:mb-32">
<svg className="text-[#FF2718]" height="200" viewbox="0 0 15000 200" width="15000">
<path d="M0,100 Q150,150 300,100 T600,100 T900,100 T1200,100 T1500,100 T1800,100 T2100,100 T2400,100 T2700,100 T3000,100 T3300,100 T3600,100 T3900,100 T4200,100 T4500,100 T4800,100 T5100,100 T5400,100 T5700,100 T6000,100 T6300,100 T6600,100 T6900,100 T7200,100 T7500,100 T7800,100 T8100,100 T8400,100 T8700,100 T9000,100 T9300,100 T9600,100 T9900,100 T10200,100 T10500,100 T10800,100 T11100,100 T11400,100 T11700,100 T12000,100 T12300,100 T12600,100 T12900,100 T13200,100 T13500,100 T13800,100 T14100,100 T14400,100 T14700,100 T15000,100" fill="transparent" id="wavePath2"></path>
<text className="font-instrument-serif text-5xl md:text-6xl tracking-tight" fill="currentColor">
<textpath href="#wavePath2" startoffset="0">
<animate attributename="startOffset" dur="200s" from="0" repeatcount="indefinite" to="-10000"></animate>
                    RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟     RSVP ☟    
                </textpath>
</text>
</svg>
</div>

<section className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-24 md:pb-40">

<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-16 items-start">

<div className="md:col-span-6 flex flex-col md:sticky md:top-32">
<h2 className="text-7xl md:text-8xl lg:text-9xl leading-[0.85] font-instrument-serif tracking-tight">
                    Potvrzení<br/>účasti
                </h2>
</div>

<div className="md:col-span-6 flex flex-col md:pt-4">
<div className="flex flex-col space-y-12">
<p className="text-xl md:text-2xl font-extralight leading-relaxed max-w-[480px]">
                        Prosíme, potvrďte svou účast. Dejte nám vědět, zda s vámi můžeme počítat, a pomozte nám tak s přípravami našeho velkého dne.
                    </p>
<div>
<a className="inline-block border border-[#FF2718] rounded-full px-10 py-4 uppercase tracking-widest text-lg font-thin hover:bg-[#FF2718] hover:text-[#FBEBE8] transition-colors" href="#">
                            Potvrdit účast
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 pb-12 flex flex-col justify-center items-center gap-8 relative z-10">
<div className="md:text-4xl text-3xl text-[#FF2718] tracking-tight font-instrument-serif text-center">Moc se na vás těšíme!</div>
</footer>


    </>
  );
}
