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



        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Simple Fade In on Scroll Observer
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-[fadeIn_0.8s_ease-out_forwards]');
                    entry.target.style.opacity = '1';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > div').forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#2c241b]/95 backdrop-blur-md border-b border-[#D4AF37]/30">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-[#D4AF37] text-3xl" icon="solar:lotus-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xl font-serif text-white tracking-wider font-semibold">AYUTTHAYA</span>
<span className="text-[10px] text-[#D4AF37] uppercase tracking-[0.3em] ml-0.5">Massage &amp; Spa</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-gray-300 font-medium">
<a className="hover:text-[#D4AF37] transition-colors" href="#about">Über Uns</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#services">Leistungen</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#locations">Standorte</a>
<a className="bg-[#D4AF37] text-[#2c241b] px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-colors" href="#booking">
                    Termin vereinbaren
                </a>
</div>

<button className="md:hidden text-[#D4AF37] text-2xl focus:outline-none" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#2c241b] z-40 transform translate-x-full flex flex-col pt-24 px-8 gap-8 h-screen md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 text-white text-3xl" id="close-menu">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="text-2xl font-serif text-white border-b border-white/10 pb-4" href="#about">Über Uns</a>
<a className="text-2xl font-serif text-white border-b border-white/10 pb-4" href="#services">Leistungen</a>
<a className="text-2xl font-serif text-white border-b border-white/10 pb-4" href="#locations">Standorte</a>
<a className="text-2xl font-serif text-[#D4AF37] font-bold" href="#booking">Termin buchen</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Thai Spa Atmosphere" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-[#2c241b]/80 via-[#2c241b]/50 to-[#2c241b]/90"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
<div className="flex items-center justify-center gap-4 mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="h-[1px] w-12 bg-[#D4AF37]"></div>
<span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">Sawadee Ka</span>
<div className="h-[1px] w-12 bg-[#D4AF37]"></div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
                Traditionelle <br/>
<span className="text-gold-gradient italic">Thai-Massage</span>
</h1>
<p className="text-gray-200 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
                Erleben Sie 2500 Jahre alte Heilkunst für Körper und Geist. <br className="hidden md:block"/>
                Authentisch in Hamburg, Norderstedt und Wedel.
            </p>
<div className="opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
<a className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-white text-[#2c241b] px-10 py-4 rounded-sm transition-all duration-300 group" href="#booking">
<span className="uppercase tracking-widest font-bold text-sm">Termin vereinbaren</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-20 md:py-32 bg-[#f9f7f2]" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37] rounded-sm z-0"></div>
<img alt="Relaxing Massage" className="relative z-10 w-full h-[500px] object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div>
<h2 className="text-[#701d25] text-4xl md:text-5xl mb-6">Zeit für Ruhe &amp; <span className="italic text-[#D4AF37]">Balance</span></h2>
<p className="text-gray-600 mb-6 leading-loose font-light">
                    In der Hektik des Alltags vergessen wir oft das Wichtigste: uns selbst. Bei Ayutthaya Massage bieten wir Ihnen einen Rückzugsort der Stille und Erholung.
                </p>
<p className="text-gray-600 mb-8 leading-loose font-light">
                    Unsere erfahrenen Therapeutinnen praktizieren die authentische Nuad Phaen Boran – die traditionelle Thai-Massage. Durch sanfte Dehnungen und rhythmischen Druck entlang der Energielinien lösen wir Blockaden und aktivieren Ihre Selbstheilungskräfte.
                </p>
<div className="flex gap-8">
<div className="flex flex-col">
<iconify-icon className="text-[#D4AF37] text-3xl mb-2" icon="solar:cup-hot-linear"></iconify-icon>
<span className="text-sm uppercase tracking-wider font-bold text-[#2c241b]">Teezeremonie</span>
</div>
<div className="flex flex-col">
<iconify-icon className="text-[#D4AF37] text-3xl mb-2" icon="solar:leaf-linear"></iconify-icon>
<span className="text-sm uppercase tracking-wider font-bold text-[#2c241b]">Natürliche Öle</span>
</div>
<div className="flex flex-col">
<iconify-icon className="text-[#D4AF37] text-3xl mb-2" icon="solar:medal-ribbon-linear"></iconify-icon>
<span className="text-sm uppercase tracking-wider font-bold text-[#2c241b]">Zertifiziert</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Unser Angebot</span>
<h2 className="text-[#2c241b] text-4xl md:text-5xl mt-3">Leistungen &amp; Preise</h2>
<div className="w-24 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-8">
<h3 className="text-2xl text-[#701d25] mb-6 italic border-b border-gray-100 pb-2">Klassische Massagen</h3>

<div className="flex justify-between items-baseline group">
<div className="flex-1">
<h4 className="text-lg font-bold text-[#2c241b] group-hover:text-[#D4AF37] transition-colors">Traditionelle Thai-Massage</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Ganzkörpermassage mit Dehnelementen</p>
</div>
<div className="text-right pl-4">
<div className="text-sm"><span className="font-bold text-[#2c241b]">49€</span> <span className="text-gray-400 text-xs">/ 60 Min</span></div>
<div className="text-sm"><span className="font-bold text-[#2c241b]">74€</span> <span className="text-gray-400 text-xs">/ 90 Min</span></div>
<div className="text-sm"><span className="font-bold text-[#2c241b]">94€</span> <span className="text-gray-400 text-xs">/ 120 Min</span></div>
</div>
</div>

<div className="flex justify-between items-baseline group">
<div className="flex-1">
<h4 className="text-lg font-bold text-[#2c241b] group-hover:text-[#D4AF37] transition-colors">Aromaöl-Massage</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Sanfte Entspannung mit ätherischen Ölen</p>
</div>
<div className="text-right pl-4">
<div className="text-sm"><span className="font-bold text-[#2c241b]">55€</span> <span className="text-gray-400 text-xs">/ 60 Min</span></div>
<div className="text-sm"><span className="font-bold text-[#2c241b]">79€</span> <span className="text-gray-400 text-xs">/ 90 Min</span></div>
</div>
</div>

<div className="flex justify-between items-baseline group">
<div className="flex-1">
<h4 className="text-lg font-bold text-[#2c241b] group-hover:text-[#D4AF37] transition-colors">Rücken-Nacken-Massage</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Gezielt gegen Verspannungen</p>
</div>
<div className="text-right pl-4">
<div className="text-sm"><span className="font-bold text-[#2c241b]">32€</span> <span className="text-gray-400 text-xs">/ 30 Min</span></div>
</div>
</div>

<div className="flex justify-between items-baseline group">
<div className="flex-1">
<h4 className="text-lg font-bold text-[#2c241b] group-hover:text-[#D4AF37] transition-colors">Fußreflexzonen-Massage</h4>
<p className="text-sm text-gray-500 mt-1 font-light">Vitalisierung über die Füße</p>
</div>
<div className="text-right pl-4">
<div className="text-sm"><span className="font-bold text-[#2c241b]">32€</span> <span className="text-gray-400 text-xs">/ 30 Min</span></div>
</div>
</div>
</div>

<div className="relative bg-[#2c241b] text-white p-8 md:p-10 rounded-sm overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:star-linear" width="150"></iconify-icon>
</div>
<h3 className="text-2xl text-[#D4AF37] mb-8 italic">Exklusive Pakete</h3>
<div className="space-y-6 relative z-10">

<div className="border border-white/10 p-4 rounded-sm hover:border-[#D4AF37] transition-colors bg-white/5">
<div className="flex justify-between items-center mb-1">
<span className="uppercase tracking-widest text-sm font-bold">MEDI Paket</span>
<span className="text-[#D4AF37] font-serif text-xl">59€</span>
</div>
<p className="text-xs text-gray-400 mb-2">Kombination aus Thai- &amp; Ölmassage</p>
<span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-sm">60 Minuten</span>
</div>

<div className="border border-[#D4AF37] p-4 rounded-sm bg-[#D4AF37]/10 relative">
<span className="absolute -top-3 right-4 bg-[#D4AF37] text-[#2c241b] text-[10px] uppercase font-bold px-2 py-0.5">Empfehlung</span>
<div className="flex justify-between items-center mb-1">
<span className="uppercase tracking-widest text-sm font-bold text-[#D4AF37]">MAXI Paket</span>
<span className="text-white font-serif text-xl">85€</span>
</div>
<p className="text-xs text-gray-400 mb-2">Ausführliche Entspannung für den ganzen Körper</p>
<span className="text-xs bg-[#D4AF37] text-[#2c241b] px-2 py-1 rounded-sm font-bold">90 Minuten</span>
</div>

<div className="border border-white/10 p-4 rounded-sm hover:border-[#D4AF37] transition-colors bg-white/5">
<div className="flex justify-between items-center mb-1">
<span className="uppercase tracking-widest text-sm font-bold">SUPER Paket</span>
<span className="text-[#D4AF37] font-serif text-xl">105€</span>
</div>
<p className="text-xs text-gray-400 mb-2">Das ultimative Wellness-Erlebnis</p>
<span className="text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-sm">120 Minuten</span>
</div>
</div>
<p className="text-[10px] text-gray-500 mt-6 text-center italic">
                        * Preise inkl. gesetzl. MwSt. | Kartenzahlung möglich
                    </p>
</div>
</div>
<div className="text-center mt-12">
<p className="text-sm text-[#701d25] bg-red-50 inline-block px-4 py-2 rounded-sm border border-red-100">
<iconify-icon className="align-middle mr-1" icon="solar:info-circle-linear"></iconify-icon>
                    Bitte sagen Sie Termine mindestens 24 Stunden vorher ab.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#f9f7f2] border-t border-[#e5e7eb]" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Besuchen Sie uns</span>
<h2 className="text-[#2c241b] text-4xl mt-3">Unsere Standorte</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm border-b-4 border-[#D4AF37] hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#f9f7f2] p-3 rounded-full text-[#D4AF37]">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold uppercase tracking-wide">Hamburg</h3>
</div>
<address className="not-italic text-gray-600 font-light text-sm mb-6 leading-relaxed">
                        Geschwister-Scholl-Straße 8<br/>
                        20251 Hamburg
                    </address>
<div className="text-sm text-gray-500 space-y-2 border-t border-gray-100 pt-4">
<div className="flex justify-between">
<span>Mo-Fr:</span>
<span className="font-medium text-[#2c241b]">10:00 - 21:00</span>
</div>
<div className="flex justify-between">
<span>Sa-So:</span>
<span className="font-medium text-[#2c241b]">11:00 - 20:00</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm border-b-4 border-[#701d25] hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#f9f7f2] p-3 rounded-full text-[#701d25]">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold uppercase tracking-wide">Norderstedt</h3>
</div>
<address className="not-italic text-gray-600 font-light text-sm mb-6 leading-relaxed">
                        Ohechaussee 7<br/>
                        22848 Norderstedt
                    </address>
<div className="text-sm text-gray-500 space-y-2 border-t border-gray-100 pt-4">
<div className="flex justify-between">
<span>Mo-Fr:</span>
<span className="font-medium text-[#2c241b]">10:00 - 21:00</span>
</div>
<div className="flex justify-between">
<span>Sa-So:</span>
<span className="font-medium text-[#2c241b]">11:00 - 20:00</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm border-b-4 border-[#2c241b] hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#f9f7f2] p-3 rounded-full text-[#2c241b]">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold uppercase tracking-wide">Wedel</h3>
</div>
<address className="not-italic text-gray-600 font-light text-sm mb-6 leading-relaxed">
                        Bahnhofstr. 27<br/>
                        22880 Wedel
                    </address>
<div className="text-sm text-gray-500 space-y-2 border-t border-gray-100 pt-4">
<div className="flex justify-between">
<span>Mo-Fr:</span>
<span className="font-medium text-[#2c241b]">10:00 - 21:00</span>
</div>
<div className="flex justify-between">
<span>Sa-So:</span>
<span className="font-medium text-[#2c241b]">11:00 - 20:00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2c241b] text-white relative overflow-hidden" id="booking">

<div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] opacity-5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Kontakt</span>
<h2 className="text-4xl md:text-5xl mt-3 text-white">Termin anfragen</h2>
<p className="text-gray-400 mt-4 font-light">
                    Senden Sie uns Ihren Wunschtermin. Wir bestätigen diesen zeitnah.
                </p>
</div>
<form className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10 shadow-2xl backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37]">Vor- und Nachname</label>
<input className="form-input bg-transparent text-white pb-2 w-full placeholder-gray-600" placeholder="Max Mustermann" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37]">Telefonnummer</label>
<input className="form-input bg-transparent text-white pb-2 w-full placeholder-gray-600" placeholder="0171 12345678" type="tel"/>
</div>

<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37]">E-Mail Adresse</label>
<input className="form-input bg-transparent text-white pb-2 w-full placeholder-gray-600" placeholder="kontakt@beispiel.de" type="email"/>
</div>

<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2">Filiale wählen <span className="text-red-400">*</span></label>
<div className="grid grid-cols-3 gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="location" type="radio" value="hamburg"/>
<div className="border border-white/20 rounded-sm p-3 text-center hover:bg-white/5 peer-checked:bg-[#D4AF37] peer-checked:text-[#2c241b] peer-checked:border-[#D4AF37] transition-all">
<span className="text-sm font-bold">Hamburg</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="location" type="radio" value="norderstedt"/>
<div className="border border-white/20 rounded-sm p-3 text-center hover:bg-white/5 peer-checked:bg-[#701d25] peer-checked:border-[#701d25] transition-all">
<span className="text-sm font-bold">Norderstedt</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="location" type="radio" value="wedel"/>
<div className="border border-white/20 rounded-sm p-3 text-center hover:bg-white/5 peer-checked:bg-white peer-checked:text-[#2c241b] peer-checked:border-white transition-all">
<span className="text-sm font-bold">Wedel</span>
</div>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37]">Behandlung</label>
<select className="form-input bg-transparent text-white pb-2 w-full [&amp;&gt;option]:text-black">
<option>Traditionelle Thai-Massage</option>
<option>Aromaöl-Massage</option>
<option>MEDI Paket</option>
<option>MAXI Paket</option>
<option>SUPER Paket</option>
<option>Andere (Bitte angeben)</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-[#D4AF37]">Wunschtermin</label>
<input className="form-input bg-transparent text-white pb-2 w-full [color-scheme:dark]" type="datetime-local"/>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<button className="bg-[#D4AF37] text-[#2c241b] px-12 py-4 rounded-sm uppercase tracking-widest font-bold hover:bg-white transition-colors w-full md:w-auto shadow-[0_0_20px_rgba(212,175,55,0.3)]" type="button">
                        Absenden
                    </button>
<p className="text-[10px] text-gray-400 text-center max-w-md">
                        Ihre Terminanfrage wird erst nach unserer Bestätigung (per E-Mail oder Telefon) verbindlich.
                    </p>
</div>
</form>
</div>
</section>

<footer className="bg-[#1a1510] text-gray-400 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#D4AF37] text-2xl" icon="solar:lotus-linear"></iconify-icon>
<span className="text-lg font-serif text-white tracking-wider">AYUTTHAYA</span>
</div>
<p className="text-xs leading-relaxed mb-6">
                        Traditionelle thailändische Massagekunst in Hamburg und Umgebung. Ein Ort der Ruhe für Ihre Gesundheit.
                    </p>
</div>

<div>
<h4 className="text-white font-serif mb-6">Menu</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#about">Über Uns</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#services">Leistungen</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#locations">Standorte</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#booking">Termin</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif mb-6">Rechtliches</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">AGB</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif mb-6">Kontakt</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#D4AF37] mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<span>Hamburg: 040 123456<br/>Norderstedt: 040 234567<br/>Wedel: 04103 345678</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D4AF37]" icon="solar:letter-linear"></iconify-icon>
<span>info@ayutthaya-massage.de</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center text-xs uppercase tracking-widest text-gray-600">
                © 2024 Ayutthaya Massage. Alle Rechte vorbehalten.
            </div>
</div>
</footer>


<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
