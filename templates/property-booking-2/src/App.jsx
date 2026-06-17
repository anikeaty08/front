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
      

<header className="h-16 border-b border-slate-200 bg-white px-4 lg:px-8 flex items-center justify-between shrink-0 z-30">
<div className="flex items-center gap-4">
<div className="flex items-center">
<span className="text-2xl font-black tracking-tighter text-slate-800">Book</span>
<span className="text-2xl font-black tracking-tighter text-[#E8446D] border-b-2 border-[#E8446D] leading-none">i</span>
<span className="text-2xl font-black tracking-tighter text-slate-800">ngHost</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 px-3 py-1.5 rounded-lg transition-all border border-transparent hover:border-slate-100">
<iconify-icon className="text-slate-400" icon="solar:home-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-600">Travessa Da Água-...</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 cursor-pointer">
<span className="text-sm font-medium text-slate-700">Andre Stecki</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-2 cursor-pointer">
<iconify-icon className="text-slate-400" icon="solar:global-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">PL</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<button className="bg-[#4DBCA8] hover:bg-[#3ea18f] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-[#4DBCA8]/20">
                DODAJ APARTAMENT
            </button>
</div>
<button className="lg:hidden p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 bg-white overflow-y-auto custom-scrollbar">
<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
                    Przegląd
                </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon>
                    Informacje
                </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#f0faf8] text-[#4DBCA8] font-semibold text-sm" href="#">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
                    Kalendarz
                </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
                    Rezerwacje
                </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
                    Wyniki
                </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:card-2-linear" width="20"></iconify-icon>
                    Rozliczenia
                </a>
<div className="pt-4 mt-4 border-t border-slate-100">
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                        Ustawienia
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-slate-50 transition-colors font-medium text-sm" href="#">
<iconify-icon icon="solar:question-square-linear" width="20"></iconify-icon>
                        Pomoc
                    </a>
</div>
</nav>
</aside>

<main className="flex-1 overflow-y-auto bg-[#fafafa] custom-scrollbar pb-24">
<div className="max-w-7xl mx-auto p-4 lg:p-10">

<div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-8">

<div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Październik 2023</h1>
<p className="text-sm text-slate-400 mt-0.5">Zarządzaj dostępnością i cenami</p>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-slate-50 p-1 rounded-xl border border-slate-100">
<button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider">Dzisiaj</button>
<button className="p-2 hover:bg-white hover:shadow-sm rounded-lg transition-all">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
                                Filtry
                            </button>
</div>
</div>

<div className="px-6 py-3 bg-slate-50/50 border-b border-slate-100 flex flex-wrap gap-6">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="w-3 h-3 rounded-full bg-white border border-slate-200"></span> Dostępne
                        </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="w-3 h-3 rounded-full bg-[#E8446D]"></span> Zająte
                        </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="w-3 h-3 rounded-full bg-[#4DBCA8]"></span> Wybrane
                        </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-500">
<span className="w-3 h-3 rounded-full bg-slate-200"></span> Zablokowane
                        </div>
</div>

<div className="calendar-grid bg-slate-200 gap-px">

<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pon</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wt</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Śr</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Czw</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pt</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sob</div>
<div className="bg-white py-3 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Niedz</div>

<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">25</span>
</div>
<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">26</span>
</div>
<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">27</span>
</div>
<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">28</span>
</div>
<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">29</span>
</div>
<div className="bg-slate-50/50 min-h-[100px] p-2 opacity-30">
<span className="text-sm font-medium">30</span>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">1</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-[#4DBCA8]">240 zł</div>
</div>

<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">2</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">240 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">3</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">240 zł</div>
</div>

<div className="bg-[#fef2f2] min-h-[100px] p-3 relative overflow-hidden border-l-4 border-[#E8446D]">
<span className="text-sm font-semibold text-[#E8446D]">4</span>
<div className="mt-1">
<span className="block text-[10px] font-bold text-[#E8446D] leading-none">JAN KOWALSKI</span>
<span className="block text-[10px] font-medium text-[#E8446D]/70">Airbnb</span>
</div>
</div>
<div className="bg-[#fef2f2] min-h-[100px] p-3 relative border-r-4 border-[#E8446D]">
<span className="text-sm font-semibold text-[#E8446D]">5</span>
<div className="mt-1">
<span className="block text-[10px] font-medium text-[#E8446D]/70">Wymeldowanie</span>
</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">6</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">290 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">7</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">350 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">8</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">350 zł</div>
</div>

<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">9</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">240 zł</div>
</div>
<div className="bg-[#4DBCA8] min-h-[100px] p-3 relative text-white shadow-inner">
<span className="text-sm font-semibold">10</span>
<iconify-icon className="absolute top-3 right-3" icon="solar:check-circle-linear" width="16"></iconify-icon>
<div className="absolute bottom-3 right-3 text-[10px] font-bold">WYBRANE</div>
</div>
<div className="bg-[#4DBCA8] min-h-[100px] p-3 relative text-white shadow-inner border-l border-white/20">
<span className="text-sm font-semibold">11</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold">240 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">12</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">240 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">13</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">320 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">14</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">410 zł</div>
</div>
<div className="bg-white min-h-[100px] p-3 group hover:bg-slate-50 cursor-pointer transition-colors relative">
<span className="text-sm font-semibold text-slate-900">15</span>
<div className="absolute bottom-3 right-3 text-[10px] font-bold text-slate-400">410 zł</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Ostatnia aktywność</h2>
<div className="space-y-8 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-slate-100">
<div className="flex gap-4 relative">
<div className="w-10 h-10 rounded-full bg-[#4DBCA8] flex items-center justify-center text-white shrink-0 z-10 border-2 border-white shadow-sm">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="text-sm font-semibold text-slate-900">Wypłata wysłana</h4>
<span className="text-xs text-slate-400">2 min temu</span>
</div>
<p className="text-sm text-slate-500 mt-1">2,450.00 zł zostało przesłane na Twoje konto</p>
</div>
</div>
<div className="flex gap-4 relative">
<div className="w-10 h-10 rounded-full bg-[#E8446D] flex items-center justify-center text-white shrink-0 z-10 border-2 border-white shadow-sm">
<iconify-icon icon="solar:user-block-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="text-sm font-semibold text-slate-900">Anulowano rezerwację</h4>
<span className="text-xs text-slate-400">2 godziny temu</span>
</div>
<p className="text-sm text-slate-500 mt-1">Rezerwacja na 24-26 Października została anulowana przez gościa</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div className="bg-[#4DBCA8] rounded-2xl p-6 lg:p-8 text-white relative overflow-hidden shadow-lg shadow-[#4DBCA8]/20">
<div className="relative z-10">
<h2 className="text-xl font-semibold tracking-tight mb-4">Twój Opiekun</h2>
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shadow-inner">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&amp;h=120&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-bold">Anna Nowak</p>
<p className="text-[10px] text-white/70 uppercase tracking-widest">Key Account Manager</p>
</div>
</div>
<button className="w-full py-3 px-4 border border-white/40 hover:bg-white/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                                    Zadaj pytanie
                                </button>
</div>
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-[#E8446D] text-white py-3.5 px-6 z-50 flex items-center justify-center shadow-2xl">
<div className="flex items-center gap-2 text-center">
<iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
<p className="text-xs font-semibold uppercase tracking-wider">Uwaga: Konto dla tego obiektu wymaga weryfikacji dokumentów tożsamości.</p>
</div>
</div>
</div>

    </>
  );
}
