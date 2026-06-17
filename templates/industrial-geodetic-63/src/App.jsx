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
      

<nav className="absolute w-full z-50 top-0 py-6 px-4 md:px-8">
<div className="max-w-7xl mx-auto flex justify-between items-center text-white">
<div className="flex items-center gap-2">
<span className="text-3xl font-semibold tracking-tight">B2</span>
<div className="flex flex-col leading-none">
<span className="text-base font-medium">Rafał</span>
<span className="text-base font-medium">Brzostek</span>
</div>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
<a className="hover:text-amber-400 transition-colors" href="#start">Start</a>
<a className="hover:text-amber-400 transition-colors" href="#o-nas">O Nas</a>
<a className="hover:text-amber-400 transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-amber-400 transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-amber-400 transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="md:hidden">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 lg:h-screen lg:min-h-[600px] flex items-center overflow-hidden" id="start">
<div className="absolute inset-0 z-0">
<img alt="Geodeta na budowie" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/70"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    NOWOCZESNA GEODEZJA<br/>DLA TWOICH INWESTYCJI.
                </h1>
<p className="text-lg text-slate-200 mb-10 max-w-xl">
                    Kompleksowe usługi geodezyjne na najwyższym poziomie. Łączymy precyzję, doświadczenie i nowoczesne technologie dla sukcesu Twojego projektu.
                </p>
<a className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium text-base px-8 py-3.5 transition-colors" href="#kontakt">
                    Skontaktuj się z nami
                </a>
</div>
</div>

<div className="absolute -bottom-16 -right-16 w-64 h-64 bg-slate-900 z-10 rotate-45 transform origin-center hidden lg:block opacity-90"></div>
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500 z-10 rotate-45 transform origin-center hidden lg:block"></div>
</header>

<section className="py-24 bg-white relative" id="o-nas">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-900 hidden md:block"></div>
<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-500 hidden md:block"></div>
<img alt="Zespół geodetów" className="relative z-10 w-full h-[500px] object-cover shadow-lg" src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"/>
</div>

<div>
<span className="text-sm font-medium text-amber-600 uppercase tracking-wider mb-2 block">O Nas</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Pasja i Doświadczenie.
                    </h2>
<p className="text-lg text-slate-600 mb-6">
                        Firma B2 Rafał Brzostek to zespół ekspertów z wieloletnim stażem. Pomiary obejmują cały kraj, od małych działek po wielkie inwestycje. Szanujemy Twój czas, gwarantujemy jakość. Jesteśmy tu po to, by odpowiadać na Twoje pytania i doradzać.
                    </p>
<p className="text-lg text-slate-600 mb-10">
                        Zapewniamy wsparcie na każdym etapie procesu budowlanego, dbając o najwyższą jakość dokumentacji i pomiarów w terenie.
                    </p>
<div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
<div>
<i className="w-8 h-8 text-slate-800 mb-3" data-lucide="map" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-slate-900">Pomiary</h3>
<p className="text-sm text-slate-500 mt-1">Sytuacyjno-wysokościowe</p>
</div>
<div>
<i className="w-8 h-8 text-slate-800 mb-3" data-lucide="clipboard-check" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-slate-900">Inwentaryzacje</h3>
<p className="text-sm text-slate-500 mt-1">Powykonawcze obiektów</p>
</div>
<div>
<i className="w-8 h-8 text-slate-800 mb-3" data-lucide="split-square-horizontal" strokeWidth="1.5"></i>
<h3 className="text-base font-medium text-slate-900">Podziały</h3>
<p className="text-sm text-slate-500 mt-1">Rozgraniczenia działek</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="oferta">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center md:text-left">
                OFERTA
            </h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center transition-shadow hover:shadow-md">
<div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 text-slate-800">
<i className="w-8 h-8" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 leading-snug">Pomiary Sytuacyjno-<br/>Wysokościowe</h3>
</div>

<div className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center transition-shadow hover:shadow-md">
<div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 text-slate-800">
<i className="w-8 h-8" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 leading-snug">Mapy do celów<br/>Projektowych</h3>
</div>

<div className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center transition-shadow hover:shadow-md">
<div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 text-slate-800">
<i className="w-8 h-8" data-lucide="hard-hat" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 leading-snug">Obsługa<br/>Inwestycji<br/><span className="text-sm text-slate-500 font-normal">i Inwentaryzacje</span></h3>
</div>

<div className="bg-white border border-slate-200 p-8 flex flex-col items-center text-center transition-shadow hover:shadow-md">
<div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mb-6 text-slate-800">
<i className="w-8 h-8" data-lucide="grid-3x3" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 leading-snug">Podziały<br/>Działek</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="realizacje">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                    REALIZACJE
                </h2>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center bg-amber-500 text-slate-900 hover:bg-amber-600 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden mb-4 bg-slate-100 h-64">
<img alt="Realizacja 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<p className="text-base text-slate-600 line-clamp-3">
                        Pomiary geodezyjne na terenie budowy kompleksu biurowego. Wytyczenie osi konstrukcyjnych oraz inwentaryzacja sieci podziemnych.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden mb-4 bg-slate-100 h-64">
<img alt="Realizacja 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-base text-slate-600 line-clamp-3">
                        Opracowanie mapy do celów projektowych pod budowę osiedla mieszkaniowego. Założenie osnowy realizacyjnej na obszarze 15 hektarów.
                    </p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden mb-4 bg-slate-100 h-64">
<img alt="Realizacja 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<p className="text-base text-slate-600 line-clamp-3">
                        Podział nieruchomości rolnej na działki budowlane. Kompleksowa obsługa prawna i geodezyjna procesu podziałowego w trudnym terenie.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-12 -right-12 w-32 h-32 bg-slate-900 z-0 rotate-45 transform origin-center hidden lg:block"></div>
<div className="absolute bottom-24 right-8 w-16 h-16 bg-amber-500 z-0 rotate-45 transform origin-center hidden lg:block"></div>
</section>

<section className="bg-slate-50 border-slate-200 border-t pt-24 pb-24" id="kontakt">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">
                KONTAKT
            </h2>
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<form className="space-y-6">
<div className="">
<input className="w-full bg-white border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors" placeholder="Imię i nazwisko" type="text"/>
</div>
<div className="">
<input className="w-full bg-white border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors" placeholder="Email" type="email"/>
</div>
<div className="">
<textarea className="w-full bg-white border border-slate-300 px-4 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-colors resize-none" placeholder="Wiadomość" rows="5"></textarea>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-base px-10 py-3.5 transition-colors" type="button">
                            Wyślij
                        </button>
</form>
</div>

<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1 space-y-8">
<div className="">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">B2 Rafał Brzostek</h3>
<p className="text-lg text-slate-600">Usługi Geodezyjne</p>
</div>
<div className="space-y-4">
<p className="text-base text-slate-600 flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="">ul. Przykładowa 12/34<br/>00-000 Warszawa</span>
</p>
<p className="text-base text-slate-600 flex items-center gap-3">
<i className="w-5 h-5 text-slate-400 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<span className="">biuro@b2geodezja.pl</span>
</p>
</div>
<div className="">
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Obserwuj nas</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="flex-1 flex flex-col justify-between">

<div className="bg-slate-200 h-48 w-full relative border border-slate-300 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-slate-400" data-lucide="map" strokeWidth="1.5"></i>
<span className="absolute bottom-2 right-2 text-xs text-slate-500">Mapa dojazdu</span>
</div>

<div className="bg-slate-900 text-white p-6 text-center">
<p className="text-sm font-medium uppercase tracking-wider text-slate-300 mb-1">Zadzwoń do nas</p>
<p className="text-2xl font-semibold tracking-tight">600 001 008</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-16 pb-8 text-slate-300 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
<div className="flex items-center gap-2 text-white">
<span className="text-3xl font-semibold tracking-tight">B2</span>
<div className="flex flex-col leading-none">
<span className="text-base font-medium">Rafał</span>
<span className="text-base font-medium">Brzostek</span>
</div>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium tracking-wide uppercase text-slate-400">
<a className="hover:text-white transition-colors" href="#start">Start</a>
<a className="hover:text-white transition-colors" href="#o-nas">O Nas</a>
<a className="hover:text-white transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-white transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
<div className="text-center border-t border-slate-800 pt-8 text-xs text-slate-500">
<p>© 2023 B2 Rafał Brzostek. Wszelkie prawa zastrzeżone.</p>
</div>
</div>
</footer>




    </>
  );
}
