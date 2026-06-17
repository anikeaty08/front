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



        // ── HAMBURGER MENU ────────────────────────────────────────────
        let menuOpen = false;
        function toggleMenu() {
            menuOpen = !menuOpen;
            const menu = document.getElementById('mobile-menu');
            const h1 = document.getElementById('ham-1');
            const h2 = document.getElementById('ham-2');
            const h3 = document.getElementById('ham-3');
            if (menuOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                h1.style.transform = 'translateY(8px) rotate(45deg)';
                h2.style.opacity = '0';
                h3.style.transform = 'translateY(-8px) rotate(-45deg)';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                h1.style.transform = '';
                h2.style.opacity = '1';
                h3.style.transform = '';
            }
        }

        // ── LANGUAGE SWITCHER ─────────────────────────────────────────
        let currentLang = 'pl';

        function setLang(lang) {
            currentLang = lang;
            document.documentElement.lang = lang;

            document.querySelectorAll('[data-pl][data-en]').forEach(el => {
                const text = el.getAttribute('data-' + lang);
                if (text !== null) el.textContent = text;
            });

            // Form placeholders
            const ph = {
                pl: { name: 'Imię i Nazwisko', company: 'Nazwa firmy', phone: 'Numer telefonu', msg: 'Opisz krótko swój projekt lub event...' },
                en: { name: 'Full Name', company: 'Company name', phone: 'Phone number', msg: 'Briefly describe your project or event...' }
            }[lang];
            const fn = document.getElementById('f-name');
            const fc = document.getElementById('f-company');
            const fp = document.getElementById('f-phone');
            const fm = document.getElementById('f-msg');
            if (fn) fn.placeholder = ph.name;
            if (fc) fc.placeholder = ph.company;
            if (fp) fp.placeholder = ph.phone;
            if (fm) fm.placeholder = ph.msg;

            // Update both desktop and mobile switcher buttons
            const active = 'lang-btn text-xs font-semibold uppercase tracking-wider active';
            const inactive = 'lang-btn text-xs font-semibold uppercase tracking-wider inactive';
            ['btn-pl','btn-pl-mob'].forEach(id => { const el = document.getElementById(id); if(el) el.className = lang === 'pl' ? active : inactive; });
            ['btn-en','btn-en-mob'].forEach(id => { const el = document.getElementById(id); if(el) el.className = lang === 'en' ? active : inactive; });

            try { localStorage.setItem('lang', lang); } catch(e) {}
        }

        // ── REVEAL ANIMATION ──────────────────────────────────────────
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
                else entry.target.classList.remove('reveal-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-hidden').forEach(el => observer.observe(el));

        // ── FAQ TOGGLE ────────────────────────────────────────────────
        function toggleFaq(btn) {
            const answer = btn.nextElementSibling;
            const icon = btn.querySelector('.faq-icon');
            const isOpen = !answer.classList.contains('hidden');
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
            document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');
            if (!isOpen) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // ── RESTORE SAVED LANGUAGE ────────────────────────────────────
        try { const saved = localStorage.getItem('lang'); if (saved && saved !== 'pl') setLang(saved); } catch(e) {}
    
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
      
<nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 md:px-10 backdrop-blur-md bg-[#09090b]/70 border-b border-white/5">
<div className="max-w-7xl mx-auto flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
<iconify-icon className="text-[#09090b] text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">TRUCK<span className="text-zinc-500">SPACE</span></span>
</a>

<div className="hidden md:flex items-center gap-5">
<a className="hover:text-white transition-colors text-xs font-normal text-zinc-400 whitespace-nowrap" data-en="Why Truck?" data-pl="Dlaczego Truck?" href="#rozwiazania">Dlaczego Truck?</a>
<a className="hover:text-white transition-colors text-xs font-normal text-zinc-400 whitespace-nowrap" data-en="Brand Solutions" data-pl="Rozwiązania dla marki" href="#galeria">Rozwiązania dla marki</a>
<a className="hover:text-white transition-colors text-xs font-normal text-zinc-400 whitespace-nowrap" data-en="Process" data-pl="Proces" href="#proces">Proces</a>
<a className="hover:text-white transition-colors text-xs font-normal text-zinc-400 whitespace-nowrap" href="tel:+48668295575">+48 668 295 575</a>
<a className="hover:border-white/30 hover:text-white transition-all text-xs font-medium text-zinc-300 border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-1 whitespace-nowrap" href="#video">
<iconify-icon className="text-sm" icon="solar:play-circle-linear"></iconify-icon>
<span data-en="Watch in action" data-pl="Zobacz w akcji">Zobacz w akcji</span>
</a>
<a className="hover:border-white/30 hover:text-white transition-all text-xs font-medium text-zinc-300 border border-white/10 rounded-full px-3 py-1.5 whitespace-nowrap" data-en="FAQ" data-pl="Najczęstsze pytania" href="#faq">Najczęstsze pytania</a>

<div className="flex items-center gap-1 border border-white/10 rounded-full px-2.5 py-1.5">
<button className="lang-btn active text-xs font-semibold uppercase tracking-wider" id="btn-pl" onclick="setLang('pl')">PL</button>
<span className="text-zinc-700 text-xs">/</span>
<button className="lang-btn inactive text-xs font-semibold uppercase tracking-wider" id="btn-en" onclick="setLang('en')">EN</button>
</div>
</div>

<div className="flex items-center gap-2">

<div className="flex md:hidden items-center gap-1 border border-white/10 rounded-full px-2.5 py-1.5">
<button className="lang-btn active text-xs font-semibold uppercase tracking-wider" id="btn-pl-mob" onclick="setLang('pl')">PL</button>
<span className="text-zinc-700 text-xs">/</span>
<button className="lang-btn inactive text-xs font-semibold uppercase tracking-wider" id="btn-en-mob" onclick="setLang('en')">EN</button>
</div>

<a className="hover:bg-zinc-200 transition-all text-sm font-medium text-zinc-950 bg-white rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow-lg" data-en="Get a Quote" data-pl="Wycena Trasy" href="#kontakt">Wycena Trasy</a>

<button aria-label="Menu" className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 gap-1.5" id="hamburger-btn" onclick="toggleMenu()">
<span className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center" id="ham-1"></span>
<span className="block w-5 h-0.5 bg-white transition-all duration-300" id="ham-2"></span>
<span className="block w-5 h-0.5 bg-white transition-all duration-300 origin-center" id="ham-3"></span>
</button>
</div>
</div>

<div className="md:hidden hidden flex-col gap-1 pt-4 pb-2 border-t border-white/5 mt-4" id="mobile-menu">
<a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" data-en="Why Truck?" data-pl="Dlaczego Truck?" href="#rozwiazania" onclick="toggleMenu()">Dlaczego Truck?</a>
<a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" data-en="Brand Solutions" data-pl="Rozwiązania dla marki" href="#galeria" onclick="toggleMenu()">Rozwiązania dla marki</a>
<a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" data-en="Process" data-pl="Proces" href="#proces" onclick="toggleMenu()">Proces</a>
<a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="tel:+48668295575">+48 668 295 575</a>
<a className="flex items-center gap-2 px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" href="#video" onclick="toggleMenu()">
<iconify-icon className="text-base" icon="solar:play-circle-linear"></iconify-icon>
<span data-en="Watch in action" data-pl="Zobacz w akcji">Zobacz w akcji</span>
</a>
<a className="block px-4 py-3 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl transition-all" data-en="FAQ" data-pl="Najczęstsze pytania" href="#faq" onclick="toggleMenu()">Najczęstsze pytania</a>
<div className="px-4 pt-2 pb-2">
<a className="block w-full text-center bg-white text-black text-sm font-semibold py-3 rounded-xl hover:bg-zinc-200 transition-all" data-en="Get a Quote" data-pl="Wycena Trasy" href="#kontakt" onclick="toggleMenu()">Wycena Trasy</a>
</div>
</div>
</nav>
<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
<div className="absolute inset-0 z-0">
<img alt="Event Truck Hero" className="w-full h-full object-cover opacity-50 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dae56d2a-89aa-4b37-89f9-d1e634dd4006_3840w.png"/>
<div className="bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
<div className="reveal-hidden inline-flex gap-2 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="uppercase text-xs font-medium text-zinc-300 tracking-widest">Mobilny Premium Showroom</span>
</div>
<h1 className="reveal-hidden text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                Twój Brand.<br/>
<span className="text-zinc-500">W Samym Sercu Wydarzeń.</span>
</h1>
<p className="reveal-hidden md:text-xl text-lg text-zinc-400 max-w-3xl mr-auto ml-auto">Kreujemy przestrzeń, która zamienia zwykłą obecność w spektakularne show, budując głęboką i trwałą rozpoznawalność. 
Ty dbasz o relacje z gośćmi, my dostarczamy oprawę, o której będzie głośno.</p>
<div className="reveal-hidden pt-6">
<a className="inline-flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all group text-base font-medium text-zinc-950 bg-white rounded-full pt-4 pr-8 pb-4 pl-8" href="#galeria">Przenieś Swój Brand na Wyższy Poziom</a>
</div>
</div>
</header>

<section className="border-b border-t border-white/5 bg-zinc-900/30 py-10 px-6 md:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="reveal-hidden">
<div className="text-4xl font-semibold text-white mb-1">30 000 km</div>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Tras w sezonie</p>
</div>
<div className="reveal-hidden">
<div className="text-4xl font-semibold text-white mb-1">100 000+</div>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Kontaktów z marką</p>
</div>
<div className="reveal-hidden">
<div className="text-4xl font-semibold text-white mb-1">200 m²</div>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Powierzchni brandingowej</p>
</div>
</div>
</section>
<section className="glow-bg md:px-12 md:pt-3 pt-14 md:pt-32 pr-12 pb-1 pl-12 relative" id="rozwiazania">
<div className="max-w-7xl mx-auto">
<div className="mb-10 md:mb-20 reveal-hidden">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-6"></h2>
<p className="text-lg text-zinc-400 max-w-4xl"></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 group overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 reveal-hidden">
<div className="aspect-video overflow-hidden">
<img alt="Branding" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2559d28d-2d01-4bc3-ba24-9d3c073a43e5_3840w.png"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-white mb-3">Więcej niż Ciężarówka.</h3>
<p className="text-lg text-zinc-400">Jako marka zyskujesz niezależność i efekt skali. Zamiast budować stoisko od zera na każdym evencie, otrzymujesz gotowy, spektakularny pop-up store/showroom. który rano może stać pod biurowcem w Warszawie, a wieczorem być główną atrakcją letniego festiwalu. </p>
</div>
</div>
<div className="rounded-3xl bg-zinc-900/40 border border-white/5 p-8 reveal-hidden">
<div className="h-48 mb-6 overflow-hidden rounded-2xl">
<img alt="VIP Deck" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4ad7b0-34ce-44c6-b5d2-eb5984b845cf_800w.jpg"/>
</div>
<iconify-icon className="text-4xl text-white mb-6" height="36" icon="solar:crown-minimalistic-linear" style={{color: 'rgb(255, 255, 255)'}} width="36"></iconify-icon>
<h3 className="text-2xl font-medium text-white mb-3">Strefy VIP i Tarasy</h3>
<p className="text-lg text-zinc-400">Dwupoziomowe rozwiązania pozwalają na jednoczesną obsługę masową i spotkania biznesowe.</p>
</div>
</div>
</div>
</section>
<section className="bg-zinc-950 pt-3 pb-1" id="galeria">

<div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
<div className="mb-8 md:mb-16 reveal-hidden">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
</div>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">Wykorzystaj Okazję na Spektakularny Wzrost Zasięgu i Rozpoznawalności.</h2>
<p className="text-lg text-zinc-400 max-w-3xl"></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Launch produktu" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7befa2ab-43c5-4f28-907d-d8872f6047ef_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-xl text-white" height="20" icon="solar:rocket-2-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
<h3 className="text-lg font-semibold text-white">01 — Najbardziej widoczne stoisko na evencie</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Twoja marka nie stoi w tłumie — ona go przyciąga. Dwupoziomowy truck z wielkoformatowym brandingiem to najmocniejszy punkt każdego wydarzenia. Zanim konkurencja rozstawi stoisko, Ty już budujesz zasięg.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Guerrilla marketing" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a6408e8-a827-405c-b370-4852fa25670d_1600w.png"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:map-point-wave-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">02 — Premiera produktu, która zostaje w pamięci</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Kick-off zasługuje na scenę godną jego wartości. Stawiasz truck dokładnie tam, gdzie jest Twoja grupa docelowa — i zamieniasz launch w spektakl, który żyje w social mediach długo po wydarzeniu.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Niszowa grupa docelowa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd272e2d-93e6-46b2-b12f-62b56845cab7_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:target-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">03 — Bezpośrednie doświadczenie klienta z produktem</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Żadna reklama nie zastąpi kontaktu face2face. Dowozimy Twój produkt lub usługę dokładnie tam, gdzie przebywa Twój klient — i pozwalamy mu dotknąć, poczuć, doświadczyć. Konwersja zaczyna się od obecności.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Dane first-party" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfb54b9f-1a74-4672-8426-19a07707f695_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:database-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">04 — Mobilny showroom Twojej marki</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Pokaż nową kolekcję lub linię produktów w przestrzeni, którą sam projektujesz. Uczestnicy wydarzeń wchodzą do Twojego świata — testują, dotykają, angażują się. To nie stoisko targowe, to doświadczenie marki na własnych zasadach.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Przewaga na evencie" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/224258ca-c374-4a09-bc5c-850a07c0810c_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:cup-first-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">05 — Sampling bez granic, w zgodzie z prawem</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Chcesz, żeby Twój produkt trafił prosto w ręce konsumentów — ale regulacje prawne lub logistyka to utrudniają? Tworzymy kontrolowane strefy degustacji i samplingów, w których Twój produkt dociera do właściwych ludzi, we właściwym miejscu i czasie.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Spójność brand experience" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b30fe6b-3b4b-476c-a5e0-a39fd7b6f86c_1600w.png"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">06 — Twoja marka zawsze blisko klienta</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Latem jedzie na festiwal — jesteśmy tam. Wyjeżdża nad morze lub w góry — jesteśmy tam. Twoja marka przestaje być reklamą w telefonie i staje się częścią jego wakacji. To zasięg, który buduje lojalność, nie tylko kliknięcia.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Content machine" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab4ad7b0-34ce-44c6-b5d2-eb5984b845cf_800w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:camera-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">07 —  Własne studio produkcyjne dla Twojego contentu</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Zyskujesz gotową scenografię do tworzenia materiałów premium. VIP deck i dopracowane wnętrza to idealne miejsce na sesje, wywiady z influencerami czy live-streamy, które zasilą Twoje kanały na wiele tygodni.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Mobilny showroom B2B" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de051da3-0953-4b89-b538-04fbaa2b2dc8_1600w.png"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">08 — Roadshow przez całą Europę</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Polska za mała? Ruszamy dalej. Operujemy w całej Unii Europejskiej — od Warszawy po Berlin, Pragę i Wiedeń. Jeden truck, jeden brief, dziesiątki rynków. Twój brand jedzie tam, gdzie są Twoi klienci.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="ESG i employer branding" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b81c4720-6d50-4337-aca2-0d0a9a6e981b_1600w.jpg"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">09 — Leady z pierwszej ręki, nie z algorytmu</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Budujesz bazę subskrybentów? Przestań polegać wyłącznie na płatnych kampaniach. Truck to fizyczny landing page z natychmiastową konwersją — zapisy, konkursy, rejestracje. Dane zbierane twarzą w twarz mają jakość, której żaden formularz online nie pobije.</p>
</div>
</div>
</div>
</div>

<div className="reveal-hidden group rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden hover:border-white/15 transition-all duration-300">
<div className="h-56 img-zoom rounded-none">
<img alt="Testowanie nowych rynków" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f5b3581-d995-47c9-b76e-0103489d6eae_1600w.jpg?w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-start gap-4">
<span className="uppercase shrink-0 text-xs font-semibold text-zinc-600 tracking-widest mt-1"></span>
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white text-xl" icon="solar:graph-new-up-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-white">10 — Mobilny koncert. Twój event, Twoi fani.</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-400">Stwórz własne wydarzenie muzyczne pod szyldem swojej marki. Truck jako scena, strefa VIP na dachu, pełne nagłośnienie i oświetlenie — wszystko gotowe. Ty zapraszasz artystów, my dostarczamy miejsce, które zapamiętają.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:pt-3 md:pl-12 md:pr-12 md:pb-3 bg-zinc-950 border-white/5 border-t pt-3 pr-12 pb-3 pl-12" id="video">
<div className="max-w-5xl mx-auto">
<div className="reveal-hidden text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
<iconify-icon className="text-white text-base" icon="solar:play-circle-linear"></iconify-icon>
<span className="uppercase text-xs font-medium text-zinc-300 tracking-widest">Zobacz w akcji</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">TRUCKSPACE na żywo.</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Obejrzyj jak mobilny showroom zamienia zwykłe wydarzenie w niezapomniane doświadczenie marki.</p>
</div>
<div className="reveal-hidden rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/40 shadow-2xl">
<div className="relative w-full" style={{paddingBottom: '56.25%'}}>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/51aw9Crt6R0" title="TRUCKSPACE — mobilny showroom eventowy">
</iframe>
</div>
</div>
</div>
</section>

<section className="md:px-12 md:pt-3 md:pb-3 border-white/5 border-t pt-10 pr-6 pb-10 pl-6">
<div className="max-w-7xl mx-auto">
<div className="mb-8 md:mb-16 reveal-hidden">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Dla kogo?</h2>
<p className="text-lg text-zinc-400 max-w-2xl">TRUCKSPACE sprawdza się wszędzie tam, gdzie liczy się pierwsze wrażenie i fizyczny kontakt z marką.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 gap-x-4 gap-y-4">
<div className="reveal-hidden group hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300 text-center bg-zinc-900/40 border-white/5 border rounded-2xl px-6 py-6">
<div className="mb-3 flex justify-center">
<iconify-icon className="group-hover:text-white transition-colors text-4xl text-zinc-400" height="36" icon="solar:posts-carousel-horizontal-outline" style={{color: 'rgb(255, 255, 255)'}} width="36"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">Automotive</p>
</div>
<div className="reveal-hidden group rounded-2xl bg-zinc-900/40 border border-white/5 p-6 text-center hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300">
<div className="mb-3 flex justify-center">
<iconify-icon className="text-4xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:cpu-bolt-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">Gaming RTV AGD</p>
</div>
<div className="reveal-hidden group rounded-2xl bg-zinc-900/40 border border-white/5 p-6 text-center hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300">
<div className="mb-3 flex justify-center">
<iconify-icon className="text-4xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:bag-4-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">Fashion</p>
</div>
<div className="reveal-hidden group rounded-2xl bg-zinc-900/40 border border-white/5 p-6 text-center hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300">
<div className="mb-3 flex justify-center">
<iconify-icon className="text-4xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:star-shine-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">Beauty</p>
</div>
<div className="reveal-hidden group rounded-2xl bg-zinc-900/40 border border-white/5 p-6 text-center hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300">
<div className="mb-3 flex justify-center">
<iconify-icon className="text-4xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:bottle-bold"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">Alkohol Premium</p>
</div>
<div className="reveal-hidden group hover:border-white/20 hover:bg-zinc-800/40 transition-all duration-300 text-center bg-zinc-900/40 border-white/5 border rounded-2xl px-6 py-6">
<div className="mb-3 flex justify-center">
<iconify-icon className="group-hover:text-white transition-colors text-4xl text-zinc-400" height="36" icon="solar:cup-hot-bold" style={{color: 'rgb(255, 255, 255)'}} width="36"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-300">FMCG</p>
</div></div>
</div>
</section>
<section className="md:px-12 md:pt-3 md:pb-3 bg-[#09090b] border-white/5 border-t pt-10 pr-6 pb-10 pl-6" id="proces-wspolpracy">
<div className="max-w-7xl mr-auto ml-auto">
<div className="reveal-hidden mb-10 md:mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
</div>
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-6">Twój Event w 4 Krokach.</h2>
<p className="text-lg text-zinc-400 max-w-3xl">Zdejmujemy z Ciebie ciężar logistyki, zostawiając czystą esencję brandingu i relacji z Twoim klientem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="reveal-hidden group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/15 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-[0.2em] mb-3">Krok 01</div>
<h3 className="text-xl font-medium text-white mb-4">Strategia i Scenariusz</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Definiujemy cele kampanii i mechanikę interakcji. Opracowujemy plan, który zamieni obecność w realne wyniki wizerunkowe.</p>
</div>
<div className="reveal-hidden group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/15 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-[0.2em] mb-3">Krok 02</div>
<h3 className="text-xl font-medium text-white mb-4">Personalizacja Wnętrza</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Konfigurujemy moduły, oświetlenie i multimedia. Tworzymy immersyjne wnętrze w pełni oddające unikalne DNA Twojego brandu.</p>
</div>
<div className="reveal-hidden group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/15 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:palette-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-[0.2em] mb-3">Krok 03</div>
<h3 className="text-xl font-medium text-white mb-4">Branding Zewnętrzny</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Tworzymy wielkoformatową kreację na naczepie. Twój truck staje się ikoną stylu, której nie da się pominąć w przestrzeni eventowej.</p>
</div>
<div className="reveal-hidden group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/15 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-all duration-500">
<iconify-icon className="text-2xl" icon="solar:map-arrow-square-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-zinc-600 uppercase tracking-[0.2em] mb-3">Krok 04</div>
<h3 className="text-xl font-medium text-white mb-4">Wyznaczenie Trasy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Planujemy logistykę i zdobywamy pozwolenia. Ty wskazujesz punkty na mapie, my dostarczamy tam Twój brand w standardzie premium.</p>
</div>
</div>
</div>
</section>


<section className="md:px-12 border-white/5 border-t pt-14 md:pt-32 pr-6 pb-14 md:pb-32 pl-6" id="proces">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/3 reveal-hidden">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Model "Prosto, pod klucz". Ty zlecasz, my jedziemy.</h2>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-300"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Kierowca i technik pokładowy</li>
<li className="flex items-center gap-3 text-zinc-300"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Roadmap najlepszych lokalizacji</li>
<li className="flex items-center gap-3 text-zinc-300"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Logistyka pozwoleń</li>
<li className="flex items-center gap-3 text-zinc-300"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Obsługa strefy przez hostessy i hostmenów</li>
<li className="flex items-center gap-3 text-zinc-300"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Produkcja gadżetów reklamowych</li>
</ul>
</div>
<div className="md:w-2/3 rounded-3xl overflow-hidden reveal-hidden shadow-2xl h-[400px]">
<img alt="Logistyka" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8c12f4-d146-4701-b8b3-714505af8c9c_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</section>
<section className="md:pt-3 md:pl-12 md:pr-12 md:pb-3 bg-[#09090b] border-white/5 border-t pt-3 pr-12 pb-3 pl-12" id="kontakt">
<div className="max-w-4xl mx-auto text-center reveal-hidden">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">Zmień sposób podróży Twojej marki.</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onsubmit="event.preventDefault();">
<input className="bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-white transition-all" placeholder="Imię i Nazwisko" type="text"/>
<input className="bg-zinc-900 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-white transition-all" placeholder="E-mail służbowy" type="email"/>
<button className="md:col-span-2 bg-white text-black font-semibold py-5 rounded-xl hover:bg-zinc-200 transition-all text-lg shadow-xl">Wyślij zapytanie</button>
</form>
</div>
</section>
<section className="md:px-12 border-white/5 border-t pt-14 md:pt-32 pr-6 pb-14 md:pb-32 pl-6" id="faq">
<p className="text-lg text-zinc-400">Odpowiadamy, zanim zadzwonisz.</p>
<div className="space-y-4" id="faq-container">
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Ile miejsc możecie odwiedzić w ciągu miesiąca?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        Bez limitu. Zestaw jest w 100% mobilny — rozstawienie zajmuje 1 godzinę, składanie tyle samo. Praktycznie każdego dnia możemy stać w innym mieście, na innym evencie, przed inną grupą docelową. Twój brand nie stoi w miejscu — jedzie tam, gdzie są Twoi klienci.
                    </div>
</div>
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Czy wnętrze trucka można dowolnie konfigurować?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        Tak — i to bez żadnych ograniczeń. Grafiki, telewizory, wyspy produktowe, interaktywne instalacje — wszystko montujemy według Twojego briefu. Do pełnej dyspozycji masz też taras dachowy oraz scenę. Wnętrze staje się dokładnie taką przestrzenią, jakiej wymaga Twoja marka.
                    </div>
</div>
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Czy można obrandować cały zestaw — ciągnik i naczepę?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        Tak, oklejamy w 100% — zarówno naczepę, jak i ciągnik, w dowolnej grafice. Do wyboru masz dwa warianty ciągnika: klasyczny amerykański roadtourer dla marek stawiających na rozmach, oraz wersję europejską dla tych, którzy cenią elegancję. Łączna powierzchnia brandingowa robi wrażenie — i właśnie o to chodzi.
                    </div>
</div>
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Czy organizujecie wszystkie pozwolenia potrzebne do przeprowadzenia eventu?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        Wszystkie formalności są po naszej stronie. Posiadamy własną bazę kontaktów do organizatorów i właścicieli miejsc eventowych w całej Polsce. Ty skupiasz się na marce i gościach — my załatwiamy resztę, zanim jeszcze przyjedziesz na miejsce.
                    </div>
</div>
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Czy możecie zaplanować roadshow na podstawie naszej grupy docelowej?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        To jedna z naszych specjalności. Na podstawie Twoich wytycznych rekomendujemy miejsca, terminy, mechanikę działań, scenariusz i scenografię eventu. Dostajesz gotowy plan dotarcia do konkretnych ludzi, w konkretnych miejscach, w konkretnym czasie.
                    </div>
</div>
<div className="faq-item reveal-hidden rounded-2xl border border-white/5 bg-zinc-900/40 overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between px-8 py-6 text-left group" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white">Czy możecie zorganizować cały event — nie tylko truck?</span>
<iconify-icon className="text-zinc-400 text-xl transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-answer px-8 pb-6 text-zinc-400 hidden">
                        Od wynajmu samego trucka po event zorganizowany od A do Z — wybór należy do Ciebie. Ty przekazujesz nam KPI, materiały graficzne i wytyczne. My przejmujemy resztę: grafiki, multimedia, hostessy i hostmenów, gadżety, pozwolenia, animacje i obsługę na miejscu. Jeden kontakt. Zero chaosu.
                    </div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 text-center">
<p className="text-sm text-zinc-600 uppercase tracking-widest">© 2026 TRUCKSPACE | Premium Event Logistics</p>
</footer>


    </>
  );
}
