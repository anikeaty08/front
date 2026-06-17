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
colors: {
'bird-dark': '#0f0f0f', // Deepest Charcoal
'bird-panel': '#161616', // Slightly lighter for cards
'bird-gold': '#C5A059', // Brass/Saxophone Gold
'bird-gray': '#888888', // Editorial Gray
'bird-border': '#262626', // Subtle Borders
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed top-0 w-full z-50 bg-bird-dark/95 backdrop-blur-md border-b border-bird-border">
<div className="max-w-[1920px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter text-white hover:text-bird-gold transition-colors" href="#">
                BIRDLAND<span className="text-bird-gold">.</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium text-bird-gray">
<a className="hover:text-white transition-colors" href="#programm">Programm</a>
<a className="hover:text-white transition-colors" href="#tickets">Tickets &amp; Info</a>
<a className="hover:text-white transition-colors" href="#about">Über uns</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow pt-16">

<section className="border-b border-bird-border">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">

<div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-12 lg:p-20 lg:border-r border-bird-border relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bird-gold to-transparent opacity-50"></div>
<div className="mt-12 lg:mt-0">
<span className="inline-block py-1 px-3 border border-bird-gold/30 rounded-full text-xs text-bird-gold uppercase tracking-widest mb-6">Since 1985</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-8">
                            Willkommen <br/>
<span className="italic text-bird-gray">im</span> Birdland.
                        </h1>
<p className="text-lg md:text-xl text-stone-400 max-w-lg font-light leading-relaxed border-l border-bird-border pl-6">
                            Hamburgs authentischster Jazzclub. Hochkarätiger Jazz, frische Popmusik und exzellente Drinks in einer Atmosphäre wie in New York.
                        </p>
</div>
<div className="mt-12 lg:mt-0 flex items-center gap-6">
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-bird-dark font-medium uppercase tracking-wider hover:bg-bird-gold transition-all duration-300" href="#programm">
                            Zum Programm
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="hidden md:flex items-center gap-4 text-bird-gray text-xs uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon icon="solar:music-note-linear"></iconify-icon> Live Musik</span>
<span className="w-1 h-1 bg-bird-border rounded-full"></span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:wineglass-linear"></iconify-icon> Drinks</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative group overflow-hidden h-[50vh] lg:h-auto bg-bird-panel">
<img alt="Jazz Atmosphere" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 image-hover-zoom mix-blend-overlay" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-bird-dark via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8 border-t border-white/20 pt-4">
<p className="font-serif text-2xl italic text-white">"Einzigartiges Club-Feeling im historischen Keller."</p>
</div>
</div>
</div>
</section>

<section className="bg-bird-dark" id="programm">

<div className="border-b border-bird-border px-4 md:px-12 py-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tighter mb-2">Programm</h2>
<p className="text-stone-400 font-light">Highlights der Saison</p>
</div>
<a className="text-xs uppercase tracking-widest text-bird-gold border-b border-bird-gold pb-1 hover:text-white hover:border-white transition-colors" href="#">Alle Events ansehen</a>
</div>

<div className="grid grid-cols-1">

<article className="group relative border-b border-bird-border hover:bg-bird-panel transition-colors duration-300">
<div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[120px]">

<div className="md:col-span-2 px-4 md:px-12 py-4 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-bird-border/50 h-full">
<span className="text-bird-gold text-xs uppercase tracking-widest mb-1">Jeden Mittwoch</span>
<span className="font-serif text-2xl text-white">Vocal Session</span>
</div>

<div className="md:col-span-7 px-4 md:px-12 py-6">
<h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-bird-gold transition-colors mb-2">Birdland Vocal Session</h3>
<p className="text-stone-400 font-light text-sm max-w-xl">Offene Bühne für Vokalisten mit Profi-Band. Ein Muss für Entdecker neuer Stimmen.</p>
</div>

<div className="md:col-span-3 px-4 md:px-12 py-6 flex justify-end md:justify-center items-center h-full border-t md:border-t-0 md:border-l border-bird-border/50" href="https://www.instagram.com/umutbozyil/$0">
<span className="inline-flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" href="https://www.instagram.com/umutbozyil/$0">
                                Tickets <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="group relative border-b border-bird-border hover:bg-bird-panel transition-colors duration-300">
<div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[120px]">
<div className="md:col-span-2 px-4 md:px-12 py-4 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-bird-border/50 h-full">
<span className="text-bird-gold text-xs uppercase tracking-widest mb-1">Live Jazz</span>
<span className="font-serif text-2xl text-white">Bigband</span>
</div>
<div className="md:col-span-7 px-4 md:px-12 py-6">
<h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-bird-gold transition-colors mb-2">Birdland Bigband</h3>
<p className="text-stone-400 font-light text-sm max-w-xl">Regelmäßige Auftritte mit Werken von Thad Jones, Count Basie &amp; Duke Ellington.</p>
</div>
<div className="md:col-span-3 px-4 md:px-12 py-6 flex justify-end md:justify-center items-center h-full border-t md:border-t-0 md:border-l border-bird-border/50">
<span className="inline-flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                Tickets <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="group relative border-b border-bird-border hover:bg-bird-panel transition-colors duration-300">
<div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[120px]">
<div className="md:col-span-2 px-4 md:px-12 py-4 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-bird-border/50 h-full">
<span className="text-bird-gold text-xs uppercase tracking-widest mb-1">1. SO / MONAT</span>
<span className="font-serif text-2xl text-white">Poetry Slam</span>
</div>
<div className="md:col-span-7 px-4 md:px-12 py-6">
<h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-bird-gold transition-colors mb-2">Club Poetry Slam</h3>
<p className="text-stone-400 font-light text-sm max-w-xl">Dichterwettstreit in intimer Atmosphäre. Wortkunst trifft Jazzkeller.</p>
</div>
<div className="md:col-span-3 px-4 md:px-12 py-6 flex justify-end md:justify-center items-center h-full border-t md:border-t-0 md:border-l border-bird-border/50">
<span className="inline-flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                Tickets <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="group relative border-b border-bird-border hover:bg-bird-panel transition-colors duration-300">
<div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[120px]">
<div className="md:col-span-2 px-4 md:px-12 py-4 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-bird-border/50 h-full">
<span className="text-bird-gold text-xs uppercase tracking-widest mb-1">Highlight</span>
<span className="font-serif text-2xl text-white">Sat. Night</span>
</div>
<div className="md:col-span-7 px-4 md:px-12 py-6">
<h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-bird-gold transition-colors mb-2">Saturday Night Live Jazz</h3>
<p className="text-stone-400 font-light text-sm max-w-xl">Internationale und lokale Jazzgrößen live auf unserer Bühne.</p>
</div>
<div className="md:col-span-3 px-4 md:px-12 py-6 flex justify-end md:justify-center items-center h-full border-t md:border-t-0 md:border-l border-bird-border/50">
<span className="inline-flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                                Tickets <iconify-icon icon="solar:ticket-linear"></iconify-icon>
</span>
</div>
</div>
</article>

<article className="group relative border-b border-bird-border hover:bg-bird-panel transition-colors duration-300">
<div className="grid grid-cols-1 md:grid-cols-12 items-center min-h-[120px]">
<div className="md:col-span-2 px-4 md:px-12 py-4 flex md:flex-col justify-between md:justify-center border-b md:border-b-0 md:border-r border-bird-border/50 h-full">
<span className="text-bird-gold text-xs uppercase tracking-widest mb-1">Ab 22:00</span>
<span className="font-serif text-2xl text-white">Late Night</span>
</div>
<div className="md:col-span-7 px-4 md:px-12 py-6">
<h3 className="font-serif text-3xl md:text-4xl text-white group-hover:text-bird-gold transition-colors mb-2">Jam Sessions</h3>
<p className="text-stone-400 font-light text-sm max-w-xl">Oft nach den Konzerten ab 22:00 Uhr – Eintritt frei. Open End.</p>
</div>
<div className="md:col-span-3 px-4 md:px-12 py-6 flex justify-end md:justify-center items-center h-full border-t md:border-t-0 md:border-l border-bird-border/50">
<span className="inline-flex items-center gap-2 text-sm text-stone-500">
                                Eintritt Frei
                            </span>
</div>
</div>
</article>
</div>
</section>

<section className="bg-bird-dark border-b border-bird-border" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 md:p-16 lg:p-24 lg:border-r border-bird-border">
<h2 className="font-serif text-5xl md:text-6xl text-white tracking-tighter mb-8 leading-none">
                        40 Years of <br/> <span className="text-bird-gold">Birdland.</span>
</h2>
<div className="prose prose-invert prose-lg text-stone-400 font-light">
<p className="mb-6">
                            Nach über 28 Jahren und 4.700 Konzerten haben die Gründer Heidi und Dieter Reichert das Zepter übergeben. Heute führen wir die Tradition fort – modern, aber mit dem gleichen Spirit. Wir feiern '40 Years of Birdland'!
                        </p>
<blockquote className="border-l-2 border-bird-gold pl-6 my-8 italic font-serif text-2xl text-white leading-tight">
                            "Das BIRDLAND ist mehr als Jazz. Es ist ein Treffpunkt für Musikliebhaber, mit exzellenten Drinks und einer familiären Atmosphäre."
                        </blockquote>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 border-b border-r md:border-r-0 lg:border-r border-bird-border flex flex-col justify-end min-h-[300px] hover:bg-bird-panel transition-colors">
<iconify-icon className="text-bird-gold text-4xl mb-auto" icon="solar:user-hand-up-linear"></iconify-icon>
<h4 className="font-serif text-2xl text-white mb-1">Wolff Reichert</h4>
<p className="text-xs uppercase tracking-widest text-bird-gray mb-3">Booking / Management</p>
<p className="text-sm text-stone-400">Im Birdland aufgewachsen, kümmert sich um das Booking und die musikalische Leitung.</p>
</div>

<div className="p-8 border-b border-bird-border flex flex-col justify-end min-h-[300px] hover:bg-bird-panel transition-colors">
<iconify-icon className="text-bird-gold text-4xl mb-auto" icon="solar:wineglass-triangle-linear"></iconify-icon>
<h4 className="font-serif text-2xl text-white mb-1">Julius Horn</h4>
<p className="text-xs uppercase tracking-widest text-bird-gray mb-3">Bar &amp; Operations</p>
<p className="text-sm text-stone-400">Gastronom und Musiker, leitet das Bar-Team und bringt frischen Wind.</p>
</div>

<div className="p-8 border-b md:border-b-0 lg:border-r border-bird-border flex flex-col justify-end min-h-[300px] hover:bg-bird-panel transition-colors md:col-span-2 lg:col-span-2">
<iconify-icon className="text-bird-gold text-4xl mb-auto" icon="solar:megaphone-linear"></iconify-icon>
<h4 className="font-serif text-2xl text-white mb-1">Nicolle Reichert</h4>
<p className="text-xs uppercase tracking-widest text-bird-gray mb-3">PR &amp; Marketing</p>
<p className="text-sm text-stone-400 max-w-md">Verantwortlich für Presse, Marketing und Social Media. Führt die Familientradition weiter.</p>
</div>
</div>
</div>
</section>

<section className="bg-bird-panel py-20 px-4 md:px-8 border-b border-bird-border" id="tickets">
<div className="max-w-6xl mx-auto border border-bird-border bg-bird-dark">
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-bird-border">

<div className="md:col-span-4 p-10 flex flex-col">
<iconify-icon className="text-bird-gold text-5xl mb-6" icon="solar:ticket-sale-linear"></iconify-icon>
<h3 className="font-serif text-3xl text-white mb-4">Tickets</h3>
<p className="text-stone-400 mb-8 text-sm leading-relaxed">Tickets sind erhältlich über unseren Partner TixforGigs. Sichern Sie sich Ihren Platz im Keller.</p>
<a className="mt-auto inline-flex items-center text-sm uppercase tracking-widest text-white hover:text-bird-gold transition-colors" href="#">
                            Zu TixforGigs <iconify-icon className="ml-2" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="md:col-span-4 p-10 flex flex-col">
<iconify-icon className="text-bird-gold text-5xl mb-6" icon="solar:heart-angle-linear"></iconify-icon>
<h3 className="font-serif text-3xl text-white mb-4">ClubEuro</h3>
<p className="text-stone-400 text-sm leading-relaxed">Pro Ticket fließt 1,00 € (ClubEuro) an die Hamburger Clubstiftung zur Stärkung der Musikszene. Wir unterstützen Kultur.</p>
</div>

<div className="md:col-span-4 p-10 flex flex-col">
<iconify-icon className="text-bird-gold text-5xl mb-6" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="font-serif text-3xl text-white mb-4">Jugendschutz</h3>
<ul className="text-stone-400 text-sm space-y-3">
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 bg-bird-border rounded-full mt-1.5"></span>
<span><strong>Unter 16 Jahren:</strong> Nur in Begleitung eines Elternteils.</span>
</li>
<li className="flex items-start gap-2">
<span className="w-1.5 h-1.5 bg-bird-border rounded-full mt-1.5"></span>
<span><strong>Über 16 Jahre:</strong> Bis 24:00 Uhr erlaubt, danach nur mit Eltern.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="bg-bird-dark pt-20 pb-10 px-4 md:px-12" id="kontakt">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 pb-20 border-b border-bird-border">

<div className="lg:col-span-5">
<h3 className="font-serif text-4xl text-white mb-2">Birdland Newsletter</h3>
<p className="text-stone-400 mb-8">Erhalte Infos zu neuen Konzerten und News.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="bg-bird-panel border border-bird-border text-white px-6 py-4 w-full focus:outline-none focus:border-bird-gold transition-colors" placeholder="Ihre Email Adresse" type="email"/>
<button className="bg-white text-bird-dark px-8 py-4 uppercase tracking-widest text-xs font-medium hover:bg-bird-gold transition-colors" type="submit">Anmelden</button>
</form>
</div>

<div className="lg:col-span-3">
<h4 className="text-xs uppercase tracking-widest text-bird-gray mb-6">Location</h4>
<address className="not-italic text-stone-300 space-y-1">
<p className="text-xl font-serif text-white mb-2">Birdland Hamburg</p>
<p>Gärtnerstraße 122</p>
<p>20253 Hamburg</p>
</address>
</div>
<div className="lg:col-span-4">
<h4 className="text-xs uppercase tracking-widest text-bird-gray mb-6">Kontakt</h4>
<div className="space-y-4">
<div>
<p className="text-xs text-bird-gray mb-1">General</p>
<a className="text-white hover:text-bird-gold transition-colors" href="mailto:kontakt@birdlandhamburg.de">kontakt@birdlandhamburg.de</a>
</div>
<div>
<p className="text-xs text-bird-gray mb-1">Office / Rental</p>
<a className="text-white hover:text-bird-gold transition-colors" href="mailto:office@birdlandhamburg.de">office@birdlandhamburg.de</a>
</div>
</div>
</div>
</div>

<div className="max-w-[1920px] mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600 uppercase tracking-widest">
<p>© 2023 Birdland Hamburg. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-400" href="#">Impressum</a>
<a className="hover:text-stone-400" href="#">Datenschutz</a>
<a className="hover:text-stone-400" href="#">Facebook</a>
<a className="hover:text-stone-400" href="#">Instagram</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
