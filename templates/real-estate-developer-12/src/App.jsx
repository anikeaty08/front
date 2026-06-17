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



        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Logic
            const menuToggle = document.getElementById('menu-toggle');
            const mobileMenu = document.getElementById('mobile-menu');
            const iconMenu = document.getElementById('icon-menu');
            const iconClose = document.getElementById('icon-close');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    iconMenu.classList.add('hidden');
                    iconClose.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    iconMenu.classList.remove('hidden');
                    iconClose.classList.add('hidden');
                    document.body.style.overflow = ''; // Restore scrolling
                }
            }

            menuToggle.addEventListener('click', toggleMenu);

            // Close menu when clicking a link
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (isMenuOpen) toggleMenu();
                });
            });
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
      

<nav className="fixed z-50 transition-all duration-300 bg-white/90 w-full border-slate-100 border-b top-0 backdrop-blur-md" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group z-50 relative" href="#start">
<div className="flex items-center text-slate-900">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="uppercase text-sm font-medium text-stone-900 tracking-widest">Victoria</span>
<span className="text-stone-400 text-xs">|</span>
<span className="uppercase text-xs text-stone-500 tracking-widest">Property &amp; Investments</span>
</div>
</div>
<div className="flex flex-col justify-center">
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#start">Hero</a>
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#o-nas">O nas</a>
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#uslugi">Usługi</a>
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#realizacje">Realizacje</a>
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#proces">Proces</a>
<a className="nav-link relative text-sm text-slate-500 hover:text-slate-900 transition-colors py-1" href="#kontakt">Kontakt</a>
</div>

<button className="lg:hidden text-slate-900 p-2 z-50 relative focus:outline-none" id="menu-toggle">
<span className="sr-only">Otwórz menu</span>
<svg className="w-[24px] h-[24px]" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="hidden" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full lg:hidden flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#start">Start</a>
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#o-nas">O nas</a>
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#uslugi">Usługi</a>
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#realizacje">Realizacje</a>
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#proces">Proces</a>
<a className="mobile-link text-2xl font-light text-slate-900 hover:text-slate-600 transition-colors" href="#kontakt">Kontakt</a>
<div className="absolute bottom-12 text-center">
<p className="text-xs text-slate-400 tracking-widest uppercase">Victoria Property</p>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 pt-32 pr-6 pb-24 pl-6" id="start">
<div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden isolate shadow-2xl text-left">
<img alt="Nowoczesna architektura apartamentowa" className="absolute inset-0 -z-20 h-full w-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="-z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1f5e7e-a245-4ca0-8ee0-ce3740e52dab_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="md:px-16 md:py-28 flex flex-col max-w-3xl pt-20 pr-8 pb-20 pl-8 relative gap-y-8 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white backdrop-blur-md shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></span>
                    Deweloper &amp; Inwestor
                </div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight drop-shadow-sm">
                    Dostarczamy wyjątkową przestrzeń w lokalizacjach o wysokim potencjale.
                </h1>
<p className="leading-relaxed md:text-xl text-lg font-normal text-slate-50 max-w-2xl">
                    Łączymy wiedzę techniczną z zakresu budownictwa z praktyką inwestycyjną. Optymalizujemy procesy, budujemy wartość i zarządzamy projektami.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3.5 bg-white text-slate-900 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl" href="#realizacje">
                        Poznaj nasze realizacje
                        <svg aria-hidden="true" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-6 py-3.5 bg-white/5 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm shadow-sm" href="#proces">
                        Model współpracy
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 px-6" id="o-nas">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<svg className="mb-4 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Projekty nadmorskie</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specjalizacja w inwestycjach w pasie nadmorskim o wysokim potencjale wzrostu wartości.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<svg className="mb-4 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Condohotele i Resorty</h3>
<p className="text-sm text-slate-500 leading-relaxed">Tworzymy obiekty wakacyjno-inwestycyjne typu premium, nastawione na zysk.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<svg className="mb-4 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Współpraca kapitałowa</h3>
<p className="text-sm text-slate-500 leading-relaxed">Model inwestycyjny oparty na spółkach celowych, oferujący bezpieczeństwo i udział w zysku.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<svg className="mb-4 text-slate-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Kompleksowe doradztwo dla właścicieli gruntów: od analizy chłonności po model finansowy.</p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
<p className="text-sm text-slate-400">Współpracujemy z czołowymi biurami projektowymi, operatorami hotelowymi i generalnymi wykonawcami.</p>
<div className="flex items-center gap-6 opacity-40 grayscale">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"></path></svg>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16"></path></svg>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="uslugi">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Doradztwo i Usługi<br/>Zmieniamy pomysły w rentowne inwestycje.</h2>
<p className="text-slate-500 text-lg leading-relaxed">
                    Specjalizujemy się w rynku nadmorskim. Prowadzimy projekt od surowej działki, przez koncepcję condohotelu lub resortu, aż po sprzedaż.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Analiza Gruntu</h3>
<p className="text-sm text-slate-500">Badanie MPZP, WZ, analiza chłonności i potencjału lokalizacji pod kątem turystycznym.</p>
</div>
<div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Koncepcja Produktu</h3>
<p className="text-sm text-slate-500">Określenie typu inwestycji, układów funkcjonalnych i profilu klienta docelowego.</p>
</div>
<div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="font-medium text-slate-900 mb-2">Model Finansowy</h3>
<p className="text-sm text-slate-500">Budżet, harmonogram, prognoza przychodów, IRR i analiza opłacalności.</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-100 pt-24 pb-24" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-3">Portfolio Realizacji</h2>
<p className="text-slate-500 max-w-xl">Wybrane projekty i inwestycje w toku. Tworzymy architekturę wpisaną w krajobraz.</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:opacity-70 transition-opacity" href="#kontakt">
                    Zapytaj o szczegóły <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
<img alt="Bayport" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36f3724a-67ab-4195-b430-eae8ec29d17a_800w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-[10px] uppercase font-semibold text-slate-900 tracking-wider bg-white/90 rounded pt-1 pr-2 pb-1 pl-2 backdrop-blur">Darłówko</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Bayport</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Hotel z zapleczem SPA i lokalami usługowymi w pierwszej linii brzegowej.</p>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
<div><p className="text-xs text-slate-400 mb-1">Powierzchnia</p><p className="text-sm font-medium text-slate-900">~3600 m²</p></div>
<div><p className="text-xs text-slate-400 mb-1">Typ</p><p className="text-sm font-medium text-slate-900">Hotel &amp; SPA</p></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
<img alt="Baysuites" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b70ef8ba-273b-4833-9e17-1e9037077e7f_800w.png"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded">Ustronie Morskie</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Baysuites</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Obiekt hotelowo-apartamentowy z gastronomią, zaledwie 90 m od morza.</p>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
<div><p className="text-xs text-slate-400 mb-1">Powierzchnia</p><p className="text-sm font-medium text-slate-900">~1700 m²</p></div>
<div><p className="text-xs text-slate-400 mb-1">Dystans</p><p className="text-sm font-medium text-slate-900">90 m od morza</p></div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
<img alt="Nad Doliną" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b662b40-5358-402d-8a8d-31389ca8b03d_800w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-white/90 backdrop-blur text-slate-900 text-[10px] uppercase font-semibold tracking-wider px-2 py-1 rounded">Kołobrzeg / Okolice</span>
</div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Nad Doliną</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Osiedle domów w zabudowie dwulokalowej z nowoczesną infrastrukturą.</p>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
<div><p className="text-xs text-slate-400 mb-1">Jednostki</p><p className="text-sm font-medium text-slate-900">28 lokali</p></div>
<div><p className="text-xs text-slate-400 mb-1">Typ</p><p className="text-sm font-medium text-slate-900">Osiedle</p></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="proces">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Pasywny dochód dzięki projektom nad morzem.</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Inwestuj w sprawdzone projekty realizowane przez spółki celowe. Oferujemy przejrzysty model pożyczkowy zabezpieczony na nieruchomości.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
</div>
<div>
<h4 className="text-white font-medium">Atrakcyjne odsetki</h4>
<p className="text-sm text-slate-400 mt-1">Rentowność od 13% w skali roku.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-white font-medium">Pełne zabezpieczenie</h4>
<p className="text-sm text-slate-400 mt-1">Hipoteka na nieruchomości lub umowa pożyczki.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
<h3 className="text-xl font-medium mb-6">Proces Inwestycyjny</h3>
<div className="space-y-6 relative before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-20px)] before:w-[1px] before:bg-slate-600">
<div className="relative pl-10">
<span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-700 border border-slate-500 text-xs flex items-center justify-center font-bold">1</span>
<h4 className="text-white text-sm font-medium">Analiza i Umowa</h4>
<p className="text-xs text-slate-400 mt-1">Weryfikacja projektu i podpisanie dokumentów.</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-700 border border-slate-500 text-xs flex items-center justify-center font-bold">2</span>
<h4 className="text-white text-sm font-medium">Wprowadzenie kapitału</h4>
<p className="text-xs text-slate-400 mt-1">Transfer środków do spółki celowej.</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-700 border border-slate-500 text-xs flex items-center justify-center font-bold">3</span>
<h4 className="text-white text-sm font-medium">Realizacja</h4>
<p className="text-xs text-slate-400 mt-1">Budowa, nadzór i komercjalizacja inwestycji.</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-1 w-8 h-8 rounded-full bg-emerald-900 border border-emerald-500 text-emerald-400 text-xs flex items-center justify-center font-bold">4</span>
<h4 className="text-emerald-400 text-sm font-medium">Wypłata zysków</h4>
<p className="text-xs text-slate-400 mt-1">Zwrot kapitału, odsetek i premia z zysku.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="kontakt">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Kontakt</h2>
<p className="text-slate-500">Napisz lub zadzwoń, jeśli chcesz porozmawiać o projekcie, współpracy inwestycyjnej lub konsultingu.</p>
</div>
<div className="space-y-8">
<div className="flex flex-col sm:flex-row justify-center gap-8 text-center text-sm text-slate-600">
<div>
<p className="font-medium text-slate-900 mb-1">Adres</p>
<p>ul. Szpitalna 78-100 Kołobrzeg</p>
</div>
<div>
<p className="font-medium text-slate-900 mb-1">Kontakt</p>
<p><a className="hover:text-slate-900 transition-colors" href="mailto:biuro@victoriaproperty.pl">biuro@victoriaproperty.pl</a></p>
<p><a className="hover:text-slate-900 transition-colors" href="tel:+48503575844">+48 503 575 844</a></p>
</div>
</div>
<form className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="name">Imię</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm" id="name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="phone">Telefon</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm" id="phone" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm" id="email" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Wiadomość</label>
<textarea className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 text-sm" id="message" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors mt-2" type="button">
                        Wyślij wiadomość
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-8 bg-white border-t border-slate-100 text-center">
<p className="text-xs text-slate-400">© 2024 Victoria Property &amp; Investments.</p>
</footer>



    </>
  );
}
