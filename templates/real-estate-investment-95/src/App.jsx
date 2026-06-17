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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
800: '#292524',
900: '#1c1917',
},
navy: {
800: '#1e293b',
900: '#0f172a',
}
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
      

<nav className="fixed w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="tracking-widest uppercase text-sm font-medium text-stone-900">Victoria</span>
<span className="text-stone-400 text-xs">|</span>
<span className="tracking-widest uppercase text-xs text-stone-500">Property &amp; Investments</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-stone-600 font-medium">
<a className="hover:text-stone-900 transition-colors" href="#properties">Nieruchomości</a>
<a className="hover:text-stone-900 transition-colors" href="#consulting">Consulting</a>
<a className="hover:text-stone-900 transition-colors" href="#investment">Inwestycje</a>
</div>
<a className="hidden md:inline-flex text-xs font-medium uppercase tracking-wider border border-stone-300 px-5 py-2.5 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300" href="#contact">
                Kontakt
            </a>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in">
<h1 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-[1.15] mb-8">
                    Tworzymy wartościowe nieruchomości nad morzem – do życia, wypoczynku i długofalowej wartości.
                </h1>
<p className="text-lg text-stone-500 leading-relaxed font-light mb-10 max-w-xl">
                    Projektujemy i realizujemy kameralne inwestycje nadmorskie oraz wspieramy klientów w podejmowaniu bezpiecznych decyzji – niezależnie od tego, czy kupujesz nieruchomość, planujesz projekt, czy myślisz o inwestowaniu.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-sm" href="#properties">
                        Zobacz nieruchomości
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors" href="#consulting">
                        Consulting i strategia
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-stone-200 text-stone-700 text-sm font-medium rounded-lg hover:bg-stone-50 transition-colors" href="#investment">
                        Oferta inwestycyjna
                    </a>
</div>
</div>
<div className="relative h-[500px] w-full bg-stone-200 rounded-2xl overflow-hidden fade-in delay-200">

<img alt="Spokój i architektura" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent"></div>
</div>
</div>
</header>

<section className="py-24 px-6 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 border border-stone-100 transition-all duration-300">
<div className="w-10 h-10 mb-6 text-stone-900 bg-white rounded-lg flex items-center justify-center border border-stone-200 group-hover:border-stone-300">
<span className="iconify" data-icon="lucide:home" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Kupuję nieruchomość</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        Szukam apartamentu nad morzem – dla siebie, rodziny lub z opcją wynajmu.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:translate-x-1 transition-transform" href="#properties">
                        Zobacz dostępne nieruchomości
                        <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 border border-stone-100 transition-all duration-300">
<div className="w-10 h-10 mb-6 text-stone-900 bg-white rounded-lg flex items-center justify-center border border-stone-200 group-hover:border-stone-300">
<span className="iconify" data-icon="lucide:map" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Mam grunt lub pomysł</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        Chcę sprawdzić potencjał i uniknąć kosztownych błędów przed rozpoczęciem projektu.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:translate-x-1 transition-transform" href="#consulting">
                        Consulting deweloperski
                        <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 border border-stone-100 transition-all duration-300">
<div className="w-10 h-10 mb-6 text-stone-900 bg-white rounded-lg flex items-center justify-center border border-stone-200 group-hover:border-stone-300">
<span className="iconify" data-icon="lucide:trending-up" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-3">Jestem inwestorem</h3>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                        Szukam projektów z realnym aktywem i jasnymi zasadami współpracy.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-900 group-hover:translate-x-1 transition-transform" href="#investment">
                        Oferta inwestycyjna
                        <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="properties">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<span className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-4 block">Oferta</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-6">Nieruchomości nad morzem</h2>
<p className="text-stone-500 text-lg leading-relaxed font-light">
                    Oferujemy starannie zaprojektowane nieruchomości nad morzem – w lokalizacjach, które łączą jakość wypoczynku z długofalową wartością. Każdy projekt prowadzimy kompleksowo – od koncepcji po realizację – dbając o architekturę, standard i spójność całości.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-stone-200 rounded-xl overflow-hidden mb-6 relative">
<img alt="Apartamenty Dune" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-900 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> W sprzedaży
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-1">Dune Residences</h3>
<p className="text-stone-500 text-sm">Jurata, Półwysep Helski</p>
</div>
<span className="text-sm font-medium text-stone-900 border-b border-stone-200 group-hover:border-stone-900 transition-colors pb-0.5">Zobacz apartamenty</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-stone-200 rounded-xl overflow-hidden mb-6 relative">
<img alt="Porto Moderno" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-900 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> W budowie
                        </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-1">Porto Moderno</h3>
<p className="text-stone-500 text-sm">Gdańsk, Jelitkowo</p>
</div>
<span className="text-sm font-medium text-stone-900 border-b border-stone-200 group-hover:border-stone-900 transition-colors pb-0.5">Zobacz apartamenty</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-100/50" id="consulting">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<span className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-4 block">Consulting</span>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6 leading-tight">
                    Gdy chcesz podejmować dobre decyzje, zanim powstanie projekt
                </h2>
<p className="text-stone-600 leading-relaxed mb-8">
                    Pracujemy z osobami, które posiadają grunt, kapitał lub pomysł na projekt nieruchomościowy i potrzebują doświadczonego partnera decyzyjnego.
                    Naszą rolą jest uporządkowanie założeń, ocena potencjału i przygotowanie projektu do dalszych etapów – bez chaosu i kosztownych pomyłek.
                </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="16"></span>
<p className="text-sm text-stone-600">Analiza potencjału działki lub pomysłu</p>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="16"></span>
<p className="text-sm text-stone-600">Wybór właściwego produktu</p>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="16"></span>
<p className="text-sm text-stone-600">Wstępna ocena opłacalności</p>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-stone-400 mt-1" data-icon="lucide:check" data-width="16"></span>
<p className="text-sm text-stone-600">Strategia realizacji i finansowania</p>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 mb-8">
<p className="text-sm text-stone-500 italic">
                        "Consulting nie zobowiązuje do dalszej współpracy. Jeśli uznamy, że projekt nie ma sensu – mówimy to wprost."
                    </p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors" href="#contact">
                    Porozmawiaj o projekcie
                </a>
</div>

<div className="lg:col-span-7 grid gap-6 content-center">

<div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:border-stone-300 transition-colors">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">DECISION</h3>
<span className="iconify text-stone-300" data-icon="lucide:scale" data-width="24"></span>
</div>
<p className="text-sm text-stone-500 mb-6">Dla osób, które chcą wiedzieć, czy dany grunt lub pomysł ma sens.</p>
<div className="pt-6 border-t border-stone-100">
<p className="text-xs uppercase tracking-wide text-stone-400 mb-1">Efekt</p>
<p className="text-stone-800 font-medium">Jasna decyzja, bez wchodzenia w koszty projektu.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:border-stone-300 transition-colors">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">STRATEGY</h3>
<span className="iconify text-stone-300" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<p className="text-sm text-stone-500 mb-6">Dla tych, którzy chcą przygotować projekt do realizacji.</p>
<div className="pt-6 border-t border-stone-100">
<p className="text-xs uppercase tracking-wide text-stone-400 mb-1">Efekt</p>
<p className="text-stone-800 font-medium">Klarowna strategia i uporządkowane założenia.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm hover:border-stone-300 transition-colors">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold tracking-tight text-stone-900">EXECUTION</h3>
<span className="iconify text-stone-300" data-icon="lucide:hard-hat" data-width="24"></span>
</div>
<p className="text-sm text-stone-500 mb-6">Dla osób, które chcą, aby projekt był prowadzony i nadzorowany.</p>
<div className="pt-6 border-t border-stone-100">
<p className="text-xs uppercase tracking-wide text-stone-400 mb-1">Efekt</p>
<p className="text-stone-800 font-medium">Jedna odpowiedzialna strona i spokojna realizacja.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-navy-900 text-stone-200" id="investment">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-4 block">Dla Inwestorów</span>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">
                    Inwestycje oparte o realne aktywa
                </h2>
<p className="text-stone-400 text-lg leading-relaxed font-light mb-8">
                    Dla świadomych inwestorów oferujemy udział w wybranych projektach opartych o grunty i nieruchomości w trakcie realizacji.
                    Pracujemy selektywnie i transparentnie, koncentrując się na długofalowej wartości, a nie szybkich obietnicach.
                </p>
<div className="space-y-6 mb-12">
<div className="flex items-center gap-4 border-l border-stone-700 pl-4">
<span className="text-sm font-medium text-white">Projekty JV / Equity</span>
</div>
<div className="flex items-center gap-4 border-l border-stone-700 pl-4">
<span className="text-sm font-medium text-white">Inwestycje zabezpieczone nieruchomością</span>
</div>
<div className="flex items-center gap-4 border-l border-stone-700 pl-4">
<span className="text-sm font-medium text-white">Współpraca z właścicielami gruntów</span>
</div>
</div>
<div className="p-4 bg-navy-800/50 rounded-lg border border-stone-800 mb-8 max-w-md">
<div className="flex gap-3">
<span className="iconify text-stone-500 mt-0.5" data-icon="lucide:info" data-width="16"></span>
<p className="text-xs text-stone-400 leading-relaxed">
                            Nie każda inwestycja jest realizowana. Współpracujemy tylko tam, gdzie projekt ma realne podstawy.
                        </p>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-navy-900 text-sm font-medium rounded-lg hover:bg-stone-100 transition-colors" href="#contact">
                    Umów rozmowę strategiczną
                </a>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<div className="h-64 bg-stone-800 rounded-lg overflow-hidden opacity-80">
<img className="w-full h-full object-cover grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-64 bg-stone-800 rounded-lg overflow-hidden mt-12 opacity-60">
<img className="w-full h-full object-cover grayscale mix-blend-overlay" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-12">Wybrane realizacje i projekty</h2>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-stone-200">
<div className="h-48 bg-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">Hel</span>
<span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] rounded-full uppercase tracking-wide">Zrealizowano</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4">Apartamenty Nadmorskie</h3>
<p className="text-sm text-stone-500 mb-6">Generalne wykonawstwo i nadzór inwestorski. 12 apartamentów premium.</p>
<button className="text-xs font-medium text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors">
                            Dane dla inwestorów
                        </button>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-stone-200">
<div className="h-48 bg-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">Sopot</span>
<span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] rounded-full uppercase tracking-wide">W trakcie</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4">Villa Sopot Dolny</h3>
<p className="text-sm text-stone-500 mb-6">Inwestycja własna. Rewitalizacja zabytkowej willi z rozbudową.</p>
<button className="text-xs font-medium text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors">
                            Dane dla inwestorów
                        </button>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-stone-200">
<div className="h-48 bg-stone-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">Gdynia</span>
<span className="px-2 py-0.5 bg-stone-100 text-stone-600 text-[10px] rounded-full uppercase tracking-wide">Consulting</span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-4">Projekt Orłowo</h3>
<p className="text-sm text-stone-500 mb-6">Analiza chłonności i strategia produktu dla gruntu prywatnego.</p>
<button className="text-xs font-medium text-stone-900 border-b border-stone-200 hover:border-stone-900 pb-0.5 transition-colors">
                            Dane dla inwestorów
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<span className="iconify text-stone-900 mb-4" data-icon="lucide:layers" data-width="24"></span>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Kompleksowość</h4>
<p className="text-xs text-stone-500 leading-relaxed">Prowadzimy projekty od pomysłu do realizacji.</p>
</div>
<div>
<span className="iconify text-stone-900 mb-4" data-icon="lucide:anchor" data-width="24"></span>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Specjalizacja</h4>
<p className="text-xs text-stone-500 leading-relaxed">Specjalizujemy się wyłącznie w rynku nadmorskim.</p>
</div>
<div>
<span className="iconify text-stone-900 mb-4" data-icon="lucide:brick-wall" data-width="24"></span>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Praktyka</h4>
<p className="text-xs text-stone-500 leading-relaxed">Działamy na realnych inwestycjach, nie tylko teorii.</p>
</div>
<div>
<span className="iconify text-stone-900 mb-4" data-icon="lucide:shield-check" data-width="24"></span>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Bezpieczeństwo</h4>
<p className="text-xs text-stone-500 leading-relaxed">Stawiamy na jasne zasady i bezpieczeństwo decyzji.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 bg-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center text-stone-400">
<span className="iconify" data-icon="lucide:user" data-width="24"></span>
</div>
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-2">Adrian Andrzejczuk</h3>
<p className="text-sm text-stone-500 mb-6 uppercase tracking-widest text-[10px]">Założyciel</p>
<p className="text-stone-600 leading-relaxed font-light italic">
                "Odpowiadam za standard projektów, strategię oraz bezpieczeństwo procesów decyzyjnych."
            </p>
</div>
</section>

<section className="py-32 px-6 border-t border-stone-200 bg-white" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">
                Nie musisz wiedzieć, na jakim jesteś etapie.
            </h2>
<p className="text-lg text-stone-500 font-light mb-10">
                Wystarczy rozmowa – pomożemy wybrać właściwą ścieżkę.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-stone-900 text-white text-base font-medium rounded-lg hover:bg-stone-800 transition-colors w-full sm:w-auto" href="mailto:kontakt@victoriaproperty.pl">
                    Umów rozmowę
                </a>
<a className="px-8 py-4 bg-white border border-stone-200 text-stone-900 text-base font-medium rounded-lg hover:bg-stone-50 transition-colors w-full sm:w-auto" href="tel:+48000000000">
                    +48 000 000 000
                </a>
</div>
</div>
</section>

<footer className="bg-stone-50 py-12 px-6 border-t border-stone-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="tracking-widest uppercase text-sm font-medium text-stone-900">Victoria</span>
<span className="text-stone-400 text-xs">|</span>
<span className="tracking-widest uppercase text-xs text-stone-500">Property &amp; Investments</span>
</div>
<div className="text-[10px] text-stone-400 uppercase tracking-wider">
                © 2024 Victoria Property. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
