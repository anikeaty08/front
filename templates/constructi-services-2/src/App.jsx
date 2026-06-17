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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-semibold tracking-tighter text-[#1A1A1A]" href="#">
                CS<span className="font-normal text-gray-400">CONSTRUCTION</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors" href="#about">O nas</a>
<a className="hover:text-black transition-colors" href="#offer">Oferta</a>
<a className="hover:text-black transition-colors" href="#portfolio">Realizacje</a>
<a className="hover:text-black transition-colors" href="#process">Proces</a>
</div>
<a className="hidden md:flex items-center justify-center px-5 py-2.5 bg-[#1A1A1A] text-white text-xs font-semibold rounded hover:bg-[#FDBA30] hover:text-black transition-all duration-300" href="#contact">
                Skontaktuj się
            </a>
<button className="md:hidden text-[#1A1A1A]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8">
<span className="w-2 h-2 rounded-full bg-[#FDBA30]"></span>
                    Generalne Wykonawstwo
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-[#1A1A1A] leading-[1.1] mb-6">
                    Kompleksowa realizacja <br className="hidden lg:block"/> hal przemysłowych
                </h1>
<p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl">
                    Jesteśmy partnerem, który przejmuje odpowiedzialność za każdy etap inwestycji. Od koncepcji i formalności, po klucze do gotowego obiektu – budujemy zaufanie na solidnych fundamentach.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#FDBA30] text-[#1A1A1A] text-sm font-semibold rounded hover:bg-[#eeb134] transition-colors shadow-sm" href="#contact">
                        Rozpocznij inwestycję
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-gray-200 text-[#1A1A1A] text-sm font-semibold rounded hover:bg-gray-50 transition-colors" href="#portfolio">
                        Zobacz realizacje
                    </a>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 opacity-10 translate-x-1/3 -translate-y-1/4">
<svg fill="none" height="800" viewbox="0 0 800 800" width="800" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="400" fill="#1A1A1A" r="400"></circle>
</svg>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100" id="offer">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-4">Dlaczego warto z nami budować?</h2>
<p className="text-gray-500 max-w-xl">Nasze kluczowe wartości, które przekładają się na sukces Twojej inwestycji.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:bg-[#FDBA30] transition-colors">
<iconify-icon icon="solar:stopwatch-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Najszybsza formuła budowy</h3>
<p className="text-sm text-gray-500 leading-relaxed">Optymalizacja procesów skracająca czas inwestycji, pozwalająca szybciej uruchomić działalność.</p>
</div>

<div className="p-8 bg-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:bg-[#FDBA30] transition-colors">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Architektoniczna forma</h3>
<p className="text-sm text-gray-500 leading-relaxed">Dbamy o estetykę i nowoczesny wygląd obiektów, tworząc wizytówkę Twojej firmy.</p>
</div>

<div className="p-8 bg-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:bg-[#FDBA30] transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Bezpieczeństwo</h3>
<p className="text-sm text-gray-500 leading-relaxed">Realizacje uwzględniające wszystkie rygorystyczne standardy, normy i wymogi prawne.</p>
</div>

<div className="p-8 bg-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:bg-[#FDBA30] transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Wsparcie ekspertów</h3>
<p className="text-sm text-gray-500 leading-relaxed">Bezpośredni kontakt i pełna opieka dedykowanego Kierownika Inżynierów.</p>
</div>

<div className="p-8 bg-white rounded border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 group">
<div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6 text-[#1A1A1A] group-hover:bg-[#FDBA30] transition-colors">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Komfort inwestora</h3>
<p className="text-sm text-gray-500 leading-relaxed">Jeden wykonawca to dla Ciebie mniej zmartwień, mniej formalności i pełna odpowiedzialność.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-5/12 relative">
<div className="aspect-[3/4] rounded bg-gray-100 overflow-hidden relative border border-gray-200">

<div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
<iconify-icon icon="solar:user-linear" width="80"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
<p className="font-semibold text-lg">Jan Inżynierski</p>
<p className="text-sm text-gray-300">Kierownik Inżynierów</p>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FDBA30] -z-10 rounded-full opacity-20 blur-xl"></div>
</div>

<div className="w-full lg:w-7/12">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-[#FDBA30]"></span>
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Zespół i Ekspertyza</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8">
                        Osobiste podejście <br/> do Twojego biznesu
                    </h2>
<blockquote className="text-xl text-gray-600 leading-relaxed italic border-l-2 border-[#FDBA30] pl-6 mb-10">
                        "Niezależnie od tego, czy masz już gotowy projekt, czy dopiero o nim myślisz, musimy dokładnie sprawdzić Twoje potrzeby, aby stworzyć rozwiązanie idealne."
                    </blockquote>
<p className="text-gray-500 mb-8 leading-relaxed text-sm">
                        Każda inwestycja to unikalna historia. Nie stosujemy szablonowych rozwiązań tam, gdzie wymagana jest precyzja. Nasz zespół inżynierów analizuje każde zapytanie indywidualnie, biorąc pod uwagę specyfikę Twojej branży, logistykę oraz plany rozwoju.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white text-sm font-semibold rounded hover:bg-[#FDBA30] hover:text-black transition-all duration-300" href="#contact">
                            Skontaktuj się z ekspertem
                        </a>
<div className="flex items-center gap-3 text-sm text-gray-600">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#FDBA30]">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 uppercase">Zadzwoń teraz</p>
<p className="font-semibold text-[#1A1A1A]">+48 000 000 000</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#1A1A1A] text-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-end justify-between mb-12 gap-6 border-b border-gray-800 pb-8">
<div>
<span className="text-[#FDBA30] font-medium text-sm tracking-wide uppercase">Case Study</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">GLO-Zawiercie</h2>
</div>
<div className="text-right">
<p className="text-sm text-gray-400">Rok realizacji</p>
<p className="font-medium text-lg">2023</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="relative rounded overflow-hidden bg-gray-800 aspect-[16/9] lg:aspect-auto shadow-2xl">

<div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:gallery-wide-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-white/80">
                        Wizualizacja obiektu
                    </div>
</div>

<div className="flex flex-col justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4 mb-10">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Obiekt</p>
<p className="text-xl font-medium">Hala magazynowa</p>
</div>
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Powierzchnia</p>
<p className="text-xl font-medium text-[#FDBA30]">2 350 m<sup>2</sup></p>
</div>
<div className="sm:col-span-2">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Zakres prac</p>
<p className="text-base text-gray-300 leading-relaxed">
                                Generalne wykonawstwo w formule "zaprojektuj i wybuduj". Pełny projekt hali, realizacja budowlana oraz zagospodarowanie terenu.
                            </p>
</div>
</div>
<div className="pt-8 border-t border-gray-800">
<h4 className="text-sm font-semibold mb-4 text-white">Kluczowe wyzwania:</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-400">
<iconify-icon className="text-[#FDBA30] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Optymalizacja konstrukcji stalowej pod specyficzne wymogi inwestora.
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<iconify-icon className="text-[#FDBA30] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Krótki termin realizacji formalności administracyjnych.
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6 text-[#1A1A1A]">Przebieg inwestycji <span className="text-[#FDBA30]">krok po kroku</span></h2>
<p className="text-gray-500 leading-relaxed">Jasne zasady i transparentność na każdym etapie. Zobacz, jak przeprowadzimy Cię przez proces budowlany.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">01</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Analiza</h3>
<p className="text-gray-500 text-sm leading-relaxed">Zbieranie informacji, weryfikacja potrzeb oraz dokładne sprawdzenie potencjału i warunków działki.</p>
</div>

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">02</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Koncepcja</h3>
<p className="text-gray-500 text-sm leading-relaxed">Przygotowanie wstępnego zarysu inwestycji, układu funkcjonalnego oraz szacunkowego budżetu.</p>
</div>

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">03</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Projekt</h3>
<p className="text-gray-500 text-sm leading-relaxed">Opracowanie planów hali, instalacji branżowych, dróg dojazdowych oraz terenów zielonych.</p>
</div>

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">04</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Formalności</h3>
<p className="text-gray-500 text-sm leading-relaxed">Załatwienie pozwolenia na budowę oraz wszelkich niezbędnych zgód administracyjnych w Twoim imieniu.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">05</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Budowa</h3>
<p className="text-gray-500 text-sm leading-relaxed">Realizacja prac budowlanych z dokładnym raportowaniem postępów bezpośrednio do klienta.</p>
</div>

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">06</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Odbiory</h3>
<p className="text-gray-500 text-sm leading-relaxed">Organizacja kontroli Straży Pożarnej, Sanepidu oraz Inspekcji Budowlanej w celu dopuszczenia obiektu.</p>
</div>

<div className="p-6 bg-gray-50 rounded border border-gray-100 group hover:border-[#FDBA30] transition-colors relative">
<span className="absolute top-6 right-6 text-4xl font-bold text-gray-200 group-hover:text-[#FDBA30]/20 transition-colors">07</span>
<h3 className="text-lg font-semibold mb-3 tracking-tight mt-4">Finalizacja</h3>
<p className="text-gray-500 text-sm leading-relaxed">Uzyskanie pozwolenia na użytkowanie i przekazanie Ci pełnej dokumentacji powykonawczej.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center bg-[#1A1A1A] rounded text-white p-8 md:p-16">
<div className="md:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Gwarancja i Relacje</h2>
<p className="text-gray-400 leading-relaxed mb-8">
                        Zakończenie budowy to nie koniec naszej współpracy. Stawiamy na długofalowe relacje i bezpieczeństwo Twojego biznesu.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 text-[#FDBA30]">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">Opieka po-wykonawcza</h4>
<p className="text-sm text-gray-400 mt-1">Pełne wsparcie techniczne w ramach udzielonej gwarancji oraz serwis gwarancyjny.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 text-[#FDBA30]">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-white">Otwarta komunikacja</h4>
<p className="text-sm text-gray-400 mt-1">Możliwość zadania dowolnego pytania bezpośrednio jednemu z naszych inżynierów w każdym momencie.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 flex justify-center md:justify-end">
<div className="relative w-full max-w-sm aspect-square bg-white/5 rounded-full flex items-center justify-center border border-white/10">
<iconify-icon className="text-[#FDBA30]" icon="solar:hand-shake-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-[#FDBA30] font-medium text-sm tracking-wide uppercase">FAQ</span>
<h2 className="text-3xl font-semibold tracking-tight text-[#1A1A1A] mb-8 mt-2">Najczęstsze pytania</h2>
<div className="space-y-4">
<details className="group bg-gray-50 rounded border border-gray-100">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-sm font-semibold text-[#1A1A1A]">Czy pomagacie w wyborze działki?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed">
                                Tak, oferujemy analizę chłonności działki i warunków zabudowy jeszcze przed jej zakupem, aby upewnić się, że inwestycja jest możliwa.
                            </div>
</details>
<details className="group bg-gray-50 rounded border border-gray-100">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-sm font-semibold text-[#1A1A1A]">Ile trwa proces uzyskania pozwolenia na budowę?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed">
                                Czas ten jest zależny od urzędu i specyfiki lokalizacji, ale standardowo procedury zajmują od 2 do 4 miesięcy. Zajmujemy się tym w Twoim imieniu.
                            </div>
</details>
<details className="group bg-gray-50 rounded border border-gray-100">
<summary className="flex justify-between items-center cursor-pointer list-none p-5">
<span className="text-sm font-semibold text-[#1A1A1A]">Co oznacza formuła "zaprojektuj i wybuduj"?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>
</summary>
<div className="text-gray-500 text-sm px-5 pb-5 leading-relaxed">
                                Oznacza to, że bierzemy odpowiedzialność za całość procesu: od projektu architektonicznego po oddanie gotowego budynku, co minimalizuje ryzyko błędów i konfliktów.
                            </div>
</details>
</div>

<div className="mt-12 pt-12 border-t border-gray-100">
<h3 className="text-xl font-semibold mb-6">Bezpośredni kontakt</h3>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded hover:bg-gray-50 transition-colors group" href="tel:+48000000000">
<div className="w-10 h-10 bg-[#FDBA30]/10 text-[#FDBA30] rounded flex items-center justify-center group-hover:bg-[#FDBA30] group-hover:text-black transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-[#1A1A1A]">+48 000 000 000</span>
</a>
<a className="flex items-center gap-4 p-4 rounded hover:bg-gray-50 transition-colors group" href="mailto:adresemail@csconstruction.com">
<div className="w-10 h-10 bg-[#FDBA30]/10 text-[#FDBA30] rounded flex items-center justify-center group-hover:bg-[#FDBA30] group-hover:text-black transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium text-[#1A1A1A]">adresemail@csconstruction.com</span>
</a>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg border border-gray-200 shadow-xl shadow-gray-200/50">
<h3 className="text-2xl font-semibold mb-2">Formularz kontaktowy</h3>
<p className="text-gray-500 text-sm mb-8">Napisz do nas. Odpowiadamy zazwyczaj w ciągu 24 godzin.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Temat rozmowy</label>
<select className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FDBA30]/20 focus:border-[#FDBA30] transition-all">
<option>Wycena inwestycji</option>
<option>Konsultacja techniczna</option>
<option>Współpraca</option>
<option>Inne</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Numer telefonu</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FDBA30]/20 focus:border-[#FDBA30] transition-all" placeholder="+48 ..." type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">E-mail</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FDBA30]/20 focus:border-[#FDBA30] transition-all" placeholder="twoj@email.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Wiadomość</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FDBA30]/20 focus:border-[#FDBA30] transition-all" placeholder="Opisz krótko, jak możemy Ci pomóc..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 accent-[#1A1A1A]" id="privacy" type="checkbox"/>
<label className="text-xs text-gray-500 leading-relaxed" htmlFor="privacy">
                                Wyrażam zgodę na przetwarzanie danych osobowych. <a className="underline hover:text-black" href="#">Polityka Prywatności</a>.
                            </label>
</div>
<button className="w-full bg-[#1A1A1A] text-white font-semibold text-sm py-4 rounded-md hover:bg-black hover:shadow-lg transition-all transform hover:-translate-y-0.5" type="submit">
                            Wyślij wiadomość
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-semibold tracking-tighter text-[#1A1A1A]">
                CS<span className="font-normal text-gray-400">CONSTRUCTION</span>
</div>
<div className="text-xs text-gray-500">
                © 2026 CS Construction. Wszelkie prawa zastrzeżone.
            </div>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-[#ff0000] transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
