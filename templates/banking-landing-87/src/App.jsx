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
      

<nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-1 cursor-pointer">
<span className="text-2xl font-semibold tracking-tighter text-[#002D72]">BPK</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mt-3"></span>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-[#002D72]" href="#">Oferta</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Bankowość elektroniczna</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Pomoc i kontakt</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Promocje</a>
</div>

<div className="flex items-center gap-6">
<button className="text-gray-400 hover:text-gray-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-[#002D72] hover:bg-[#001f4f] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
                        Zaloguj się
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#F5F7FA] to-white blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F7FA] border border-gray-100 mb-6">
<span className="w-2 h-2 rounded-full bg-[#002D72]"></span>
<span className="text-xs font-medium text-gray-600">Nowość: Konto bez opłat</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.15]">
                        Bankowość, która działa wygodnie każdego dnia
                    </h1>
<p className="text-lg text-gray-500 mt-6 max-w-lg leading-relaxed">
                        Zarządzaj finansami szybko, bezpiecznie i wygodnie — online oraz w wielokrotnie nagradzanej aplikacji mobilnej.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10">
<button className="bg-[#002D72] hover:bg-[#001f4f] text-white px-7 py-3.5 rounded-xl text-base font-medium transition-all shadow-md shadow-blue-900/10 flex items-center justify-center gap-2">
                            Otwórz konto
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50 px-7 py-3.5 rounded-xl text-base font-medium transition-all text-center">
                            Sprawdź ofertę
                        </button>
</div>
</div>

<div className="lg:col-span-6 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white transform translate-x-4 translate-y-4 rounded-3xl -z-10"></div>
<div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#002D72]">
<iconify-icon className="text-xl" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Oblicz ratę pożyczki</h2>
</div>
<div className="space-y-8">

<div>
<div className="flex justify-between items-end mb-3">
<label className="text-sm font-medium text-gray-500">Kwota</label>
<div className="text-xl font-semibold tracking-tight text-gray-900">20 000 zł</div>
</div>

<div className="relative h-2 w-full bg-gray-100 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[40%] bg-[#002D72] rounded-full"></div>
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-white border-2 border-[#002D72] rounded-full shadow-sm hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>1 000 zł</span>
<span>200 000 zł</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<label className="text-sm font-medium text-gray-500">Liczba rat</label>
<div className="text-xl font-semibold tracking-tight text-gray-900">24</div>
</div>

<div className="relative h-2 w-full bg-gray-100 rounded-full cursor-pointer">
<div className="absolute top-0 left-0 h-full w-[25%] bg-[#002D72] rounded-full"></div>
<div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 h-5 w-5 bg-white border-2 border-[#002D72] rounded-full shadow-sm hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-gray-400">
<span>3</span>
<span>120</span>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-100">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-medium text-gray-500">Rata miesięczna</span>
<span className="text-3xl font-semibold tracking-tight text-[#002D72]">934 zł</span>
</div>
<button className="w-full bg-[#D71920] hover:bg-[#b8151b] text-white px-6 py-4 rounded-xl text-base font-medium transition-all shadow-md shadow-red-900/10">
                                Złóż wniosek
                            </button>
<p className="text-xs text-gray-400 text-center mt-4">Rzeczywista Roczna Stopa Oprocentowania (RRSO) wynosi 11,4%.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all cursor-pointer flex flex-col h-full relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#002D72] text-[#002D72] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Konto osobiste</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow">Codzienne bankowanie bez zbędnych formalności i ukrytych opłat.</p>
<div className="flex items-center text-sm font-medium text-[#002D72] group-hover:translate-x-1 transition-transform">
                        Sprawdź szczegóły
                        <iconify-icon className="ml-1 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all cursor-pointer flex flex-col h-full relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#002D72] text-[#002D72] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
<iconify-icon className="text-2xl" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Pożyczka online</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow">Dodatkowe środki na Twoim koncie z decyzją nawet tego samego dnia.</p>
<div className="flex items-center text-sm font-medium text-[#002D72] group-hover:translate-x-1 transition-transform">
                        Sprawdź szczegóły
                        <iconify-icon className="ml-1 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all cursor-pointer flex flex-col h-full relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#002D72] text-[#002D72] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
<iconify-icon className="text-2xl" icon="solar:safe-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Oszczędności</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow">Bezpieczne rozwiązania i atrakcyjne oprocentowanie dla Twoich pieniędzy.</p>
<div className="flex items-center text-sm font-medium text-[#002D72] group-hover:translate-x-1 transition-transform">
                        Sprawdź szczegóły
                        <iconify-icon className="ml-1 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all cursor-pointer flex flex-col h-full relative overflow-hidden bg-gradient-to-b from-white to-[#F5F7FA]/50">
<div className="w-12 h-12 rounded-xl bg-[#F5F7FA] group-hover:bg-[#002D72] text-[#002D72] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-6">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Aplikacja mobilna IKO</h3>
<p className="text-sm text-gray-500 mb-6 flex-grow">Twój bank zawsze pod ręką. BLIK, przelewy na telefon i wiele więcej.</p>
<div className="flex items-center text-sm font-medium text-[#002D72] group-hover:translate-x-1 transition-transform">
                        Pobierz aplikację
                        <iconify-icon className="ml-1 text-lg" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F7FA] border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative mx-auto lg:mx-0 w-[300px] h-[600px]">

<div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl shadow-gray-300/50 p-2">

<div className="bg-white w-full h-full rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-2xl w-32 mx-auto z-20"></div>

<div className="bg-[#002D72] pt-14 pb-8 px-6 text-white relative z-10 rounded-b-3xl">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<iconify-icon className="text-xl opacity-80" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-xs font-medium text-white/70 mb-1 tracking-wide uppercase">Dostępne środki</div>
<div className="text-3xl font-semibold tracking-tight">12 450,00 <span className="text-xl font-medium text-white/70">PLN</span></div>
</div>

<div className="flex-grow bg-gray-50 px-5 pt-6 space-y-4">
<div className="flex justify-between gap-3">
<div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
<div className="w-10 h-10 rounded-full bg-[#F5F7FA] text-[#002D72] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:card-send-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600">Przelew</span>
</div>
<div className="flex-1 bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-2">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold text-xs tracking-wider">
                                            BLIK
                                        </div>
<span className="text-xs font-medium text-gray-600">BLIK</span>
</div>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-semibold text-gray-900">Historia</span>
<span className="text-xs font-medium text-[#002D72]">Więcej</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#F5F7FA] text-gray-500 flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gray-900">Zakupy spożywcze</div>
<div className="text-[10px] text-gray-400">Dziś, 14:30</div>
</div>
</div>
<div className="text-sm font-medium text-gray-900">-124,50 PLN</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:arrow-left-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-gray-900">Wynagrodzenie</div>
<div className="text-[10px] text-gray-400">Wczoraj</div>
</div>
</div>
<div className="text-sm font-medium text-green-600">+6 400,00 PLN</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#002D72]/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
</div>

<div>
<div className="text-xs font-semibold tracking-widest text-[#002D72] uppercase mb-4">Bankowość mobilna</div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        Aplikacja mobilna IKO
                    </h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                        Płać telefonem, przelewaj środki na numer telefonu, zarządzaj kartami i w pełni kontroluj swoje finanse — wszystko w jednej, przejrzystej i bezpiecznej aplikacji.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#002D72]/10 text-[#002D72] flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Płatności zbliżeniowe BLIK i kartą w telefonie</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#002D72]/10 text-[#002D72] flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Darmowe przelewy natychmiastowe P2P</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-[#002D72]/10 text-[#002D72] flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Szybki dostęp do lokat i kont oszczędnościowych</span>
</li>
</ul>
<button className="bg-[#002D72] hover:bg-[#001f4f] text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all shadow-md shadow-blue-900/10 inline-flex items-center gap-2">
                        Pobierz aplikację
                        <iconify-icon className="text-lg" icon="solar:download-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Aktualności</h2>
<a className="hidden sm:flex items-center text-sm font-medium text-[#002D72] hover:text-[#001f4f] transition-colors" href="#">
                    Wszystkie wiadomości
                    <iconify-icon className="ml-1 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-5 overflow-hidden relative border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-6xl text-gray-300" icon="solar:document-text-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-gray-400 mb-2">12 Października 2023</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 leading-snug group-hover:text-[#002D72] transition-colors">Nowa oferta dla klientów indywidualnych</h3>
<p className="text-sm text-gray-500 line-clamp-2">Wprowadzamy zmiany w tabeli opłat i prowizji, które przyniosą korzyści dla aktywnych klientów.</p>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-5 overflow-hidden relative border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-6xl text-gray-300" icon="solar:shield-check-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-gray-400 mb-2">08 Października 2023</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 leading-snug group-hover:text-[#002D72] transition-colors">Bezpieczne bankowanie online</h3>
<p className="text-sm text-gray-500 line-clamp-2">Zaktualizowaliśmy procedury logowania. Sprawdź, jak chronić swoje dane w sieci i unikać oszustw.</p>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-5 overflow-hidden relative border border-gray-100">
<div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-6xl text-gray-300" icon="solar:graph-up-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-gray-400 mb-2">01 Października 2023</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2 leading-snug group-hover:text-[#002D72] transition-colors">Promocja na konto oszczędnościowe</h3>
<p className="text-sm text-gray-500 line-clamp-2">Zyskaj do 7% w skali roku przez pierwsze 3 miesiące. Sprawdź warunki nowej promocji oszczędnościowej.</p>
</div>
</div>
<a className="mt-8 sm:hidden flex items-center justify-center w-full py-3 text-sm font-medium text-[#002D72] bg-[#F5F7FA] rounded-xl" href="#">
                Wszystkie wiadomości
            </a>
</div>
</section>

<footer className="bg-[#002D72] pt-20 pb-10 border-t border-[#001f4f]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">

<div>
<h4 className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-6">Kontakt</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Infolinia</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Zastrzeganie kart</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Formularz kontaktowy</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Zgłoszenie szkody</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-6">O banku</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Oddziały i bankomaty</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Relacje inwestorskie</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Kariera</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Biuro prasowe</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-6">Bezpieczeństwo</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Zasady bezpieczeństwa</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Ostrzeżenia</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Polityka prywatności</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Zgłoś oszustwo</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-6">Regulacje</h4>
<ul className="space-y-4 text-sm">
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Taryfa opłat i prowizji</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">Regulaminy</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">PSD2</a></li>
<li><a className="text-white/80 hover:text-white transition-colors" href="#">RODO</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-1">
<span className="text-xl font-semibold tracking-tighter text-white">BPK</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#D71920] mt-2"></span>
</div>
<p className="text-xs text-white/40">
                    © 2023 Wszelkie prawa zastrzeżone. Bankowość Nowoczesna S.A.
                </p>
<div className="flex gap-4 text-white/40">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
