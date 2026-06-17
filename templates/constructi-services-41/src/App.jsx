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



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
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
      

<nav className="fixed w-full z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
<span className="font-medium tracking-tighter text-sm">AW</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm group-hover:text-slate-700 transition-colors">
            AWA-PERSONAL
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#oferta">
            Oferta
          </a>
<a className="hover:text-slate-900 transition-colors" href="#dlaczego-my">
            Dlaczego my
          </a>
<a className="hover:text-slate-900 transition-colors" href="#realizacje">
            Realizacje
          </a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">
            Kontakt
          </a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-md shadow-orange-600/20" href="#kontakt">
          Darmowa wycena
        </a>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-52 lg:pb-40 overflow-hidden">

<div className="absolute inset-0 z-0 select-none">

<img alt="Plac budowy biurowca z żurawiem" className="w-full h-full object-cover opacity-60 mix-blend-overlay filter contrast-110 saturate-110" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/60 to-slate-50"></div>
<div className="bg-gradient-to-r from-slate-50/90 via-transparent to-slate-50/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-orange-200 shadow-md shadow-orange-900/5 mb-8">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-medium text-slate-600">
            Solidny partner od 2017 roku
          </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-8">
          Budujemy
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            spokój
          </span>
          ,
          <br/>
          nie tylko domy.
        </h1>
<p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-slate-700 font-medium">
          Kompleksowa realizacja inwestycji: od fundamentów po klucz. Jedna,
          sprawdzona ekipa, jeden punkt kontaktu, pełna odpowiedzialność.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 text-sm font-semibold text-white transition-all duration-200 bg-orange-600 rounded-lg hover:bg-orange-700 focus:ring-4 focus:ring-orange-200 shadow-lg shadow-orange-600/30 hover:-translate-y-0.5" href="#kontakt">
            Rozpocznij współpracę
            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center px-8 text-sm font-semibold text-slate-700 transition-colors bg-white/90 backdrop-blur-sm border border-slate-300 rounded-lg hover:bg-white hover:text-slate-900 hover:border-slate-400 focus:ring-4 focus:ring-slate-100 shadow-sm" href="#realizacje">
            Zobacz realizacje
          </a>
</div>

<div className="mt-20 pt-8 border-t border-slate-200/60 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-80 mix-blend-multiply">
<div className="flex items-center gap-2 text-slate-600 group hover:text-slate-900 transition-colors">
<i className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium">Własne ekipy</span>
</div>
<div className="flex items-center gap-2 text-slate-600 group hover:text-slate-900 transition-colors">
<i className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Gwarancja jakości</span>
</div>
<div className="flex items-center gap-2 text-slate-600 group hover:text-slate-900 transition-colors">
<i className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" data-lucide="clock"></i>
<span className="text-sm font-medium">Terminowość</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-slate-200" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Kompleksowa oferta
          </h2>
<p className="text-lg text-slate-500">
            Jesteśmy generalnym wykonawcą. Oznacza to, że przejmujemy pełną
            odpowiedzialność za proces budowlany, eliminując chaos związany z
            wieloma podwykonawcami.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 bg-white">
<div className="w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Budowa domów
            </h3>
<p className="text-base text-slate-500 leading-relaxed">
              Realizacja domów jednorodzinnych od stanu zerowego po dach.
              Solidne fundamenty i mury.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Remonty</h3>
<p className="text-base text-slate-500 leading-relaxed">
              Generalne remonty i modernizacje istniejących budynków.
              Przywracamy blask nieruchomościom.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="key"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Pod klucz</h3>
<p className="text-base text-slate-500 leading-relaxed">
              Wykończenia wnętrz na najwyższym poziomie. Odbierasz gotowy do
              zamieszkania dom.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-md transition-all duration-300">
<div className="w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Instalacje</h3>
<p className="text-base text-slate-500 leading-relaxed">
              Kompletne prace elektryczne i hydrauliczne. Nowoczesne i
              bezpieczne rozwiązania.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="dlaczego-my">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2 block">
            Wartości AWA-PERSONAL
          </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
            Jeden partner.
            <br/>
            Zero rozproszenia odpowiedzialności.
          </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
            W branży budowlanej najwięcej problemów wynika z braku komunikacji
            między ekipami. My to wyeliminowaliśmy. Zatrudniając nas, zyskujesz
            pewność, że hydraulik wie, co robił elektryk, a tynkarz nie zniszczy
            pracy murarza.
          </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-600/20">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<span className="text-base text-slate-500">
                  Nie szukamy ludzi "z łapanki". Pracujemy ze sprawdzonymi
                  specjalistami.
                </span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
<i className="w-5 h-5" data-lucide="file-plus-2"></i>
</div>
<div>
<span className="text-base text-slate-500">
                  Od projektu, przez stan surowy, po instalacje i wykończenie.
                </span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div>
<span className="text-base text-slate-500">
                  Działamy na rynku nieprzerwanie od 2017 roku.
                </span>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="grid grid-cols-2 gap-5">
<div className="space-y-5">
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-56 flex flex-col justify-end group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="bg-slate-900 p-6 rounded-xl shadow-lg h-36 flex flex-col justify-end text-white group hover:-translate-y-1 transition-transform duration-300">
<div className="h-2 w-20 bg-slate-700 rounded mb-2"></div>
<div className="h-2 w-10 bg-slate-700 rounded"></div>
</div>
</div>
<div className="space-y-5 pt-10">
<div className="bg-orange-500 p-6 rounded-xl shadow-md shadow-orange-500/20 h-36 flex flex-col justify-end text-white/90 group hover:-translate-y-1 transition-transform duration-300">
<i className="mb-3 w-6 h-6" data-lucide="blocks"></i>
<div className="h-2 w-16 bg-white/20 rounded"></div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-56 flex flex-col justify-end group hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 bg-slate-50 rounded-lg mb-3 flex items-center justify-center text-slate-400">
<i className="w-5 h-5" data-lucide="hard-hat"></i>
</div>
<div className="h-2 w-20 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="realizacje">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">
              Wybrane realizacje
            </h2>
<p className="text-lg text-slate-500">Jakość, która broni się sama.</p>
</div>
<div className="flex gap-2">
<button className="px-5 py-2.5 text-xs font-medium bg-slate-900 text-white rounded-lg shadow-md shadow-slate-900/10">
              Wszystkie
            </button>
<button className="px-5 py-2.5 text-xs font-medium bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors">
              Budowy
            </button>
<button className="px-5 py-2.5 text-xs font-medium bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors">
              Wykończenia
            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700 ease-out">
<i className="w-12 h-12 stroke-1" data-lucide="image"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Stan surowy
              </span>
<h3 className="text-white font-medium text-lg">
                Dom jednorodzinny, Kraków
              </h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700 ease-out">
<i className="w-12 h-12 stroke-1" data-lucide="image"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Pod klucz
              </span>
<h3 className="text-white font-medium text-lg">
                Apartament Modern, Warszawa
              </h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3] cursor-pointer">
<div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-700 ease-out">
<i className="w-12 h-12 stroke-1" data-lucide="image"></i>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<span className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Remont generalny
              </span>
<h3 className="text-white font-medium text-lg">
                Kamienica, rewitalizacja
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-slate-300 relative overflow-hidden" id="kontakt">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">
              Porozmawiajmy o Twojej inwestycji
            </h2>
<p className="mb-10 text-slate-400 text-lg">
              Wypełnij formularz lub zadzwoń. Przygotujemy wstępną wycenę i
              doradzimy najlepsze rozwiązania techniczne.
            </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<span className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    Telefon
                  </span>
<a className="text-white text-lg hover:text-orange-400 transition-colors" href="#">
                    +48 000 000 000
                  </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<span className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    Email
                  </span>
<a className="text-white text-lg hover:text-orange-400 transition-colors" href="#">
                    kontakt@awa-personal.pl
                  </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<span className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">
                    Siedziba
                  </span>
<span className="text-white text-lg">
                    ul. Przykładowa 12/3
                    <br/>
                    00-000 Warszawa
                  </span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl shadow-black/20">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="name">
                    Imię i nazwisko
                  </label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:ring-slate-900 outline-none border transition-colors placeholder:text-slate-400" id="name" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="phone">
                    Telefon
                  </label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:ring-slate-900 outline-none border transition-colors placeholder:text-slate-400" id="phone" placeholder="+48 ..." type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:ring-slate-900 outline-none border transition-colors placeholder:text-slate-400" id="email" placeholder="jan@przyklad.pl" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="type">
                  Rodzaj usługi
                </label>
<div className="relative">
<select className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:ring-slate-900 outline-none border transition-colors appearance-none" id="type">
<option>Budowa domu</option>
<option>Generalny remont</option>
<option>Wykończenie pod klucz</option>
<option>Instalacje</option>
<option>Inne</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700" htmlFor="message">
                  Wiadomość
                </label>
<textarea className="w-full rounded-lg border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:ring-slate-900 outline-none border transition-colors resize-none placeholder:text-slate-400" id="message" placeholder="Opisz krótko zakres prac..." rows="4"></textarea>
</div>
<div className="pt-2">
<div className="flex items-center justify-center w-full">
<label className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-200 border-dashed rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors group" htmlFor="dropzone-file">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<i className="w-6 h-6 text-slate-400 mb-2 group-hover:text-slate-600 transition-colors" data-lucide="upload-cloud"></i>
<p className="text-xs text-slate-500">
<span className="font-semibold text-slate-700">
                          Kliknij by dodać projekt
                        </span>
                        lub upuść tutaj
                      </p>
</div>
<input className="hidden" id="dropzone-file" type="file"/>
</label>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 transition-all focus:ring-4 focus:ring-orange-100 shadow-lg shadow-orange-600/20 hover:-translate-y-0.5" type="submit">
                Wyślij zapytanie
                <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-xs">AW</span>
</div>
<span className="font-semibold text-white tracking-tight text-sm group-hover:text-slate-200 transition-colors">
                AWA-PERSONAL
              </span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Spółka z o.o. założona w 2017 roku. Twój rzetelny partner w
              budownictwie i remontach. Działamy kompleksowo, terminowo i
              odpowiedzialnie.
            </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">
              Oferta
            </h4>
<ul className="space-y-3 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Budowa domów
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Remonty mieszkań
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Wykończenia pod klucz
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">
              Firma
            </h4>
<ul className="space-y-3 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">O nas</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Realizacje
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Kariera
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">
              FAQ
            </h4>
<ul className="space-y-3 text-xs text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Jak wyceniacie projekt?
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Terminy realizacji
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Gwarancja na usługi
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
            © 2023 AWA-PERSONAL Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
