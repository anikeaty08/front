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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-red-600 transition-colors duration-300">
<span className="iconify" data-height="18" data-icon="lucide:zap" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="font-bold text-lg tracking-tighter text-slate-900 leading-none">
                        PSE<br/><span className="text-slate-500 font-medium text-sm">INNOWACJE</span>
</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">O nas</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Obszary Działania</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Projekty</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Kariera</a>
<a className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-red-600 transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(220,38,38,0.3)]" href="#">
                        Kontakt
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
<div className="absolute inset-0 grid-mask pointer-events-none"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-red-500"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Innowacje dla KSE</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Projektujemy przyszłość<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">Polskiej Energetyki.</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                Jako spółka celowa PSE S.A. wdrażamy nowoczesne technologie, które wspierają transformację energetyczną i gwarantują bezpieczeństwo Krajowego Systemu Elektroenergetycznego.
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3.5 rounded-full bg-white text-slate-900 font-medium text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group">
                    Nasze Projekty
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-8 py-3.5 rounded-full bg-slate-800/50 border border-slate-700 text-white font-medium text-sm hover:bg-slate-800 transition-all backdrop-blur-sm">
                    Dowiedz się więcej
                </button>
</div>

<div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-slate-800/60 pt-10">
<div className="flex flex-col items-center">
<dt className="order-2 mt-2 text-xs font-medium leading-6 text-slate-500 uppercase tracking-widest">Lat Doświadczenia</dt>
<dd className="order-1 text-3xl font-semibold tracking-tight text-white">10+</dd>
</div>
<div className="flex flex-col items-center">
<dt className="order-2 mt-2 text-xs font-medium leading-6 text-slate-500 uppercase tracking-widest">Projektów B+R</dt>
<dd className="order-1 text-3xl font-semibold tracking-tight text-white">45+</dd>
</div>
<div className="flex flex-col items-center">
<dt className="order-2 mt-2 text-xs font-medium leading-6 text-slate-500 uppercase tracking-widest">Partnerów Naukowych</dt>
<dd className="order-1 text-3xl font-semibold tracking-tight text-white">20+</dd>
</div>
<div className="flex flex-col items-center">
<dt className="order-2 mt-2 text-xs font-medium leading-6 text-slate-500 uppercase tracking-widest">Patenty</dt>
<dd className="order-1 text-3xl font-semibold tracking-tight text-white">12</dd>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-base font-semibold text-red-600 tracking-wide uppercase mb-2">Nasza Misja</h2>
<p className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Wspieramy modernizację infrastruktury krytycznej przez inteligentne rozwiązania.
                    </p>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                        Działamy na styku nauki i biznesu. Identyfikujemy potencjał nowych technologii, testujemy je w warunkach pilotażowych i przygotowujemy do wdrożenia w skali systemowej. Naszym celem jest stabilna, efektywna i zielona energetyka.
                    </p>
<div className="space-y-4">
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-900">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
</div>
<div className="ml-4">
<h4 className="text-sm font-semibold text-slate-900">Cyfryzacja Procesów</h4>
<p className="text-sm text-slate-500 mt-1">Automatyzacja zarządzania siecią przesyłową.</p>
</div>
</div>
<div className="flex items-start">
<div className="flex-shrink-0 mt-1">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-900">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
</div>
<div className="ml-4">
<h4 className="text-sm font-semibold text-slate-900">Integracja OZE</h4>
<p className="text-sm text-slate-500 mt-1">Narzędzia wspierające morską energetykę wiatrową.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-slate-100 rounded-2xl blur-lg opacity-70"></div>
<div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
<div className="flex justify-between items-center mb-6">
<h3 className="font-semibold text-slate-900">Status Wdrożeń</h3>
<span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Aktywne</span>
</div>

<div className="space-y-6">
<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span>Smart Grid</span>
<span>85%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span>Cyberbezpieczeństwo</span>
<span>92%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span>Drony i Robotyka</span>
<span>60%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Kluczowe Obszary B+R</h2>
<p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light">
                    Koncentrujemy się na technologiach, które redefiniują sposób zarządzania energią.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:activity" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Monitoring DLR</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Dynamiczna obciążalność linii przesyłowych. Zwiększanie przepustowości istniejącej infrastruktury w czasie rzeczywistym.
                    </p>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Sztuczna Inteligencja</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Zaawansowana analityka danych i algorytmy uczenia maszynowego do predykcji awarii i optymalizacji pracy sieci.
                    </p>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:wind" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Offshore Wind</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Rozwiązania techniczne dla przyłączenia i integracji morskich farm wiatrowych z Krajowym Systemem Elektroenergetycznym.
                    </p>
</div>

<div className="group relative p-8 bg-slate-900 rounded-2xl md:col-span-3 lg:col-span-2 overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-10">
<span className="iconify text-white" data-icon="lucide:database" data-width="200"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-6 backdrop-blur-sm">
<span className="iconify" data-icon="lucide:network" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Cyfrowy Bliźniak (Digital Twin)</h3>
<p className="text-sm text-slate-300 leading-relaxed max-w-md">
                            Tworzymy wirtualne kopie fragmentów sieci, aby symulować scenariusze krytyczne bez ryzyka dla rzeczywistej infrastruktury. Innowacja, która zmienia paradygmat planowania.
                        </p>
<a className="inline-flex items-center mt-6 text-sm font-medium text-white hover:text-red-400 transition-colors" href="#">
                            Zobacz studium przypadku <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="w-12 h-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:battery-charging" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Magazyny Energii</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Pilotażowe wdrożenia systemów magazynowania energii stabilizujących parametry sieci.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Ostatnie Projekty</h2>
<p className="mt-2 text-slate-500">Wybrane realizacje wdrożeniowe i badawcze.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-slate-900 hover:text-red-600 transition-colors mt-4 md:mt-0" href="#">
                    Wszystkie projekty <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-red-200 hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-slate-50 text-slate-400 font-mono text-xs border border-slate-100">
<span>2023</span>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors">System Lokalizacji Awarii</h4>
<p className="text-sm text-slate-500 mt-1">Algorytmy AI do szybkiej detekcji uszkodzeń linii napowietrznych.</p>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Wdrożony
                        </span>
<span className="iconify text-slate-300 group-hover:text-red-500 transition-colors" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-red-200 hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-slate-50 text-slate-400 font-mono text-xs border border-slate-100">
<span>2024</span>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors">Platforma Danych Pomiarowych</h4>
<p className="text-sm text-slate-500 mt-1">Centralizacja odczytów z liczników inteligentnych (AMI).</p>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            W toku
                        </span>
<span className="iconify text-slate-300 group-hover:text-red-500 transition-colors" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>

<div className="group flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-red-200 hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-6 w-full md:w-auto">
<div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-slate-50 text-slate-400 font-mono text-xs border border-slate-100">
<span>2024</span>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors">Drony inspekcyjne BVLOS</h4>
<p className="text-sm text-slate-500 mt-1">Automatyczne obloty infrastruktury krytycznej.</p>
</div>
</div>
<div className="flex items-center justify-between w-full md:w-auto mt-4 md:mt-0 gap-6">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            W toku
                        </span>
<span className="iconify text-slate-300 group-hover:text-red-500 transition-colors" data-icon="lucide:chevron-right" data-width="20"></span>
</div>
</div>
</div>
<div className="mt-6 md:hidden text-center">
<a className="text-sm font-medium text-slate-900 hover:text-red-600 transition-colors" href="#">
                    Zobacz wszystkie projekty →
                </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-red-900/20 to-transparent"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Masz innowacyjny pomysł?</h2>
<p className="text-slate-400 mb-8 max-w-xl mx-auto font-light">
                Poszukujemy partnerów technologicznych, startupów i jednostek naukowych do współpracy przy projektach transformujących polską energetykę.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors shadow-lg shadow-red-900/20" href="#">
                    Zgłoś propozycję współpracy
                </a>
<a className="px-6 py-3 rounded-lg bg-transparent border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-sm font-medium transition-colors" href="#">
                    Kariera w PSE Innowacje
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span>
</div>
<span className="font-bold text-base tracking-tight text-slate-900">
                            PSE Innowacje
                        </span>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
                        Spółka zależna PSE S.A. realizująca zadania badawczo-rozwojowe na rzecz Krajowego Systemu Elektroenergetycznego.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Firma</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600 transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Władze Spółki</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Kariera</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Zamówienia</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Projekty</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-red-600 transition-colors" href="#">Projekty Zakończone</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Projekty w Toku</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Współpraca</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Newsletter</h4>
<p className="text-xs text-slate-500 mb-4">Bądź na bieżąco z innowacjami.</p>
<form className="flex flex-col gap-2">
<input className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all placeholder:text-slate-400" placeholder="Twój email" type="email"/>
<button className="px-3 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" type="button">Zapisz się</button>
</form>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2024 PSE Innowacje sp. z o.o. Wszelkie prawa zastrzeżone.
                </p>
<div className="flex space-x-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Polityka Prywatności</a>
<a className="hover:text-slate-600" href="#">RODO</a>
<a className="hover:text-slate-600" href="#">Mapa Strony</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
