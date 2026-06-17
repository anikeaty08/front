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
      

<nav className="fixed transition-all duration-300 bg-white/80 w-full z-50 border-neutral-100 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<button className="md:hidden text-neutral-900 hover:opacity-60 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="serif text-2xl tracking-[0.2em] font-medium text-neutral-900 uppercase" href="#">
                KaffeBaren
            </a>

<div className="hidden md:flex items-center space-x-12">
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#menu">Menu</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#about">Historie</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#reviews">Anmeldelser</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors" href="#contact">Besøg</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-neutral-900 hover:opacity-60 transition-opacity">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover object-center brightness-[0.85] contrast-[1.1] grayscale-[30%]" loop="" muted="" playsinline="">
<source src="https://kaffebaren.eu/images/KaffeBaren2.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 animate-[fadeIn_1s_ease-out]">Silkeborg</p>
<h1 className="serif text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-tight mb-8 drop-shadow-lg reveal" style={{animationDelay: '0.2s'}}>
                Kaffe<br/> <span className="italic font-normal">Baren</span>
</h1>
<p className="max-w-lg mx-auto text-sm md:text-base font-light opacity-90 leading-relaxed mb-10 reveal" style={{animationDelay: '0.4s'}}>
                Velkommen til Kaffebaren, hvor kvalitetsbønner og personlig service mødes i hjertet af Silkeborg.
            </p>
<div className="reveal" style={{animationDelay: '0.6s'}}>
<a className="inline-block border border-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all duration-500" href="#menu">
                    Se Menu
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
<img alt="KaffeBaren Interiør" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://kaffebaren.eu/images/img-1.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 w-32 h-32 border border-neutral-200 hidden md:block"></div>
</div>
<div className="order-1 md:order-2 space-y-8">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">Vores Filosofi</span>
<h2 className="serif text-4xl md:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight tracking-tight">
                    Hvor kvalitet &amp; <br/> service <span className="italic">mødes</span>.
                </h2>
<div className="w-12 h-px bg-neutral-900"></div>
<p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
                    Vi tror på, at sand luksus findes i det enkle. Vores bønner er nøje udvalgt fra de bedste risterier og brygget med fokus på at bevare de delikate smagsnuancer i hver eneste kop.
                </p>
<p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
                    KaffeBaren er ikke bare en café; det er et frirum i hverdagen. En minimalistisk oase designet til dig, der sætter pris på nærvær, godt håndværk og en uovertruffen kaffeoplevelse.
                </p>
</div>
</div>
</section>

<section className="md:py-32 bg-neutral-50 pt-24 pb-24" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 space-y-4">
<span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Velkommen i Kaffebaren</span>
<h2 className="serif text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">Vores Menu</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">

<div className="space-y-16">

<div className="">
<div className="flex justify-between items-baseline border-b border-neutral-200 pb-4 mb-8">
<h3 className="serif text-2xl font-light text-neutral-900 tracking-tight">Varme Drikke</h3>
<span className="text-xs font-light italic text-neutral-400">Flødeskum er gratis</span>
</div>
<div className="space-y-6">

<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Caffé Latte</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Chai Latte</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Caramel Latte</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso &amp; karamel sirup</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Vanilla Latte</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso &amp; sirup</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Dirty Chai</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Cappuccino</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Flat White</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Cortado</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Varm Chokolade</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Espresso</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">16 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Sort Kaffe</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Single shot espresso. Også til to-go</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">21 DKK</span>
</div>
</div>
</div>

<div className="">
<div className="border-b border-neutral-200 pb-4 mb-8">
<h3 className="serif text-2xl font-light text-neutral-900 tracking-tight">Frappé</h3>
</div>
<div className="space-y-6">
<div className="flex justify-between items-baseline gap-4">
<div className="">
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Frappé</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso, karamel sauce og sirup</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">33 DKK</span>
</div>
</div>
</div>
</div>

<div className="space-y-16">

<div className="">
<div className="border-b border-neutral-200 pb-4 mb-8">
<h3 className="serif text-2xl font-light text-neutral-900 tracking-tight">Kolde Drikke</h3>
</div>
<div className="space-y-6">
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Iskaffe, Karamel</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Iskaffe, Vanille</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Iskaffe, Chokolade</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Iskaffe, Hasselnød</h4>
<p className="text-xs text-neutral-500 font-light mt-1">Double shot espresso</p>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Cola</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">25 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Fanta</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">25 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Lemonade</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">35 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Cocio</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Havre Drik</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">3 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Vand</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">15 DKK</span>
</div>
</div>
</div>

<div className="">
<div className="border-b border-neutral-200 pb-4 mb-8">
<h3 className="serif text-2xl font-light text-neutral-900 tracking-tight">Kage &amp; Snacks</h3>
</div>
<div className="space-y-6">
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Blåbær Muffin</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Choko Muffin</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Cookies</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">20 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Croissant</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">15 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div>
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Hindbærsnitte</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">15 DKK</span>
</div>
<div className="flex justify-between items-baseline gap-4">
<div className="">
<h4 className="text-sm md:text-base text-neutral-900 font-normal">Flødebolle</h4>
</div>
<span className="text-sm text-neutral-900 font-light whitespace-nowrap">15 DKK</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center text-xs text-neutral-400 font-light italic">
                Information om allergener kan fås ved henvendelse til personalet.
            </div>
</div>
</section>

<section className="bg-white border-neutral-100 border-t pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="serif text-3xl md:text-4xl font-light text-center mb-16 tracking-tight">Fra vores gæster</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif leading-relaxed text-xl italic text-neutral-800 mb-6">"En virkelig lækker (billig) kop kaffe, og så god-glad-imødekommende service! Ham skal man bakke op om i Silkeborg :)"</p>
<div className="uppercase text-xs text-neutral-400 tracking-widest">Freja J.</div>
</div>

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon className="" icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon className="" icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif leading-relaxed text-xl italic text-neutral-800 mb-6">"Hyggelig kaffebar på gågaden med fair priser, høj kvalitet og god stemning."</p>
<div className="uppercase text-xs text-neutral-400 tracking-widest">Hans M.</div>
</div>

<div className="p-8 border border-neutral-100 hover:border-neutral-300 transition-colors duration-500 bg-neutral-50/50">
<div className="flex gap-1 text-neutral-900 mb-6">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="serif leading-relaxed text-xl italic text-neutral-800 mb-6">"Altid kvalitets kaffe, til de bedste priser i dk, og altid serveret med et smil og nærvær❤️‍🔥❤️‍🔥"</p>
<div className="uppercase text-xs text-neutral-400 tracking-widest">Mathilde g.</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-white bg-neutral-900 pt-24 pb-24" id="contact">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 gap-x-20 gap-y-20">

<div className="space-y-12">
<div className="">
<h2 className="serif md:text-5xl text-4xl font-light tracking-tight mb-6">Besøg KaffeBaren</h2>
<p className="text-neutral-400 font-light max-w-sm leading-relaxed">
                            Træd væk fra hverdagens travlhed og nyd en stille stund med os.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<p className="serif text-lg text-white">Lokation</p>
<p className="text-neutral-400 font-light text-sm mt-1">Vestergade 23,<br/>8600 Silkeborg</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<p className="serif text-lg text-white">Åbningstider</p>
<p className="text-neutral-400 font-light text-sm mt-1">Mandag – Fredag: 07:00 – 17:00<br/>Lørdag: 08:00 – 14:30</p>
</div>
</div>
</div>
</div>
<div className="space-y-4 pt-8">
<p className="serif text-lg text-white">Kontakt</p>
<p className="text-neutral-400 font-light text-sm">+45 26 67 00 83<br/>CVR-nr: 34283168</p>
</div>
</div>

<div className="">
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 md:gap-0 text-xs font-light text-neutral-600 border-neutral-800 border-t mt-24 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p>© 2025 Lavet af KaffeBaren. Billeder af: <a className="hover:text-white transition-colors" href="http://bellaphoto.dk" rel="nofollow" target="_blank">BellaPhoto</a></p>
<div className="flex items-center space-x-6">
<a className="hover:text-white transition-colors" href="https://www.instagram.com/kaffebaren8600/" target="_blank">Instagram</a>
<a className="hover:opacity-80 transition-opacity" href="https://www.findsmiley.dk/1250688" target="_blank">
<img alt="Find Smiley rapport" className="h-8 w-auto" src="https://kaffebaren.eu/images/glad.jpg"/>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
