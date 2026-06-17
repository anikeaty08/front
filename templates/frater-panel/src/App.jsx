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
      

<aside className="w-64 bg-white border-r border-stone-200 flex-shrink-0 flex flex-col h-full hidden md:flex">

<div className="h-16 flex items-center gap-3 px-6 border-b border-stone-100">
<div className="text-amber-800">
<svg className="opacity-90" fill="currentColor" height="24" viewbox="0 0 24 24" width="24">
<path d="M14 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-3 6c0-1.1.9-2 2-2s2 .9 2 2v2c0 1.1-.9 2-2 2h-1l-1 5h-2l1-7H9v5H7v-5c0-1.1.9-2 2-2h1V8zm7 0h1.5l1.5 12h-2l-1-7h-1v7h-2V9c0-1.1.9-2 2-2z"></path>
</svg>
</div>
<span className="font-serif text-xl text-amber-900 tracking-wide font-medium">FRATER <span className="text-stone-400 font-sans text-xs tracking-normal font-normal ml-1">CMS</span></span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-semibold text-stone-400 uppercase tracking-wider">Główne</div>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 group transition-colors" href="#">
<i className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition-colors" data-lucide="layout-dashboard"></i>
<span className="font-medium">Pulpit</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-amber-50 text-amber-900 rounded-lg group transition-colors" href="#">
<i className="w-5 h-5 text-amber-700" data-lucide="plane"></i>
<span className="font-medium">Oferty / Wycieczki</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 group transition-colors" href="#">
<i className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition-colors" data-lucide="calendar-days"></i>
<span className="font-medium">Rezerwacje</span>
<span className="ml-auto bg-stone-100 text-stone-600 py-0.5 px-2 rounded-full text-xs">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 group transition-colors" href="#">
<i className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition-colors" data-lucide="users"></i>
<span className="font-medium">Klienci</span>
</a>
<div className="px-3 mt-8 mb-2 text-xs font-semibold text-stone-400 uppercase tracking-wider">Treść &amp; SEO</div>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 group transition-colors" href="#">
<i className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition-colors" data-lucide="file-text"></i>
<span className="font-medium">Blog</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-stone-600 rounded-lg hover:bg-stone-50 hover:text-stone-900 group transition-colors" href="#">
<i className="w-5 h-5 text-stone-400 group-hover:text-amber-700 transition-colors" data-lucide="bar-chart-2"></i>
<span className="font-medium">Raporty SEO</span>
</a>
</nav>

<div className="border-t border-stone-100 p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 text-xs font-medium">AD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-stone-900">Admin</span>
<span className="text-xs text-stone-500">admin@frater.pl</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-sm border-b border-stone-200 flex items-center justify-between px-8 sticky top-0 z-20">
<div className="flex items-center gap-4 text-stone-400">
<i className="w-5 h-5 md:hidden text-stone-600 cursor-pointer" data-lucide="menu"></i>
<div className="flex items-center gap-2 text-sm">
<span className="hover:text-stone-800 cursor-pointer transition-colors">CMS</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="font-medium text-stone-900">Oferty</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-amber-500/20 focus:outline-none w-64 transition-all" placeholder="Szukaj rezerwacji..." type="text"/>
</div>
<button className="relative p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-6xl mx-auto">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-serif font-medium text-stone-900 tracking-tight">Zarządzanie Ofertami</h1>
<p className="text-stone-500 mt-1 text-sm">Zarządzaj wycieczkami, edytuj ceny i dostępność.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-stone-200 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="filter"></i> Filtry
                        </button>
<button className="px-4 py-2 bg-amber-900 text-white rounded-lg text-sm font-medium hover:bg-amber-800 transition-colors shadow-sm shadow-amber-900/10 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Dodaj nową
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Aktywne Oferty</p>
<h3 className="text-2xl font-semibold text-stone-900 mt-1">24</h3>
<span className="text-xs text-green-600 flex items-center gap-1 mt-1 font-medium bg-green-50 px-1.5 py-0.5 rounded w-fit">
<i className="w-3 h-3" data-lucide="trending-up"></i> +2 w tym mies.
                            </span>
</div>
<div className="p-2 bg-stone-50 rounded-lg text-stone-400">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Zgłoszenia</p>
<h3 className="text-2xl font-semibold text-stone-900 mt-1">156</h3>
<span className="text-xs text-stone-500 mt-1">Oczekujące na potwierdzenie</span>
</div>
<div className="p-2 bg-stone-50 rounded-lg text-stone-400">
<i className="w-5 h-5" data-lucide="inbox"></i>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide">Śr. Wartość Koszyka</p>
<h3 className="text-2xl font-semibold text-stone-900 mt-1">3 240 zł</h3>
<span className="text-xs text-amber-600 flex items-center gap-1 mt-1 font-medium">
                                Sezon wysoki
                            </span>
</div>
<div className="p-2 bg-stone-50 rounded-lg text-stone-400">
<i className="w-5 h-5" data-lucide="credit-card"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
<h3 className="font-medium text-stone-900">Lista Wycieczek</h3>
<div className="flex gap-2">
<button className="p-1 text-stone-400 hover:text-stone-800"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500">
<tr>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Oferta</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Cena</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Dostępność</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider text-right">Akcja</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">

<tr className="hover:bg-stone-50/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-stone-900">Rzym i Watykan</div>
<div className="text-xs text-stone-500">Włochy • 7 dni</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Opublikowane
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-stone-700">2 490 zł</td>
<td className="px-6 py-4 text-stone-500">
<div className="w-full bg-stone-100 rounded-full h-1.5 w-24 mb-1">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
</div>
<span className="text-xs">4 miejsca</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-amber-800 transition-colors"><i className="w-4 h-4" data-lucide="edit-3"></i></button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555992828-ca4dbe41d294?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-stone-900">Santiago de Compostela</div>
<div className="text-xs text-stone-500">Hiszpania • 10 dni</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                                Opublikowane
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-stone-700">3 100 zł</td>
<td className="px-6 py-4 text-stone-500">
<div className="w-full bg-stone-100 rounded-full h-1.5 w-24 mb-1">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<span className="text-xs">12 miejsc</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-amber-800 transition-colors"><i className="w-4 h-4" data-lucide="edit-3"></i></button>
</td>
</tr>

<tr className="hover:bg-stone-50/50 transition-colors group cursor-pointer bg-amber-50/30">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-stone-200 overflow-hidden flex-shrink-0 grayscale opacity-70">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-stone-900">Ziemia Święta 2025</div>
<div className="text-xs text-stone-500">Izrael • 8 dni</div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600 border border-stone-200">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                                                Szkic
                                            </span>
</td>
<td className="px-6 py-4 font-medium text-stone-700">4 200 zł</td>
<td className="px-6 py-4 text-stone-500">
<span className="text-xs text-stone-400 italic">Nie rozpoczęto</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-amber-800 transition-colors"><i className="w-4 h-4" data-lucide="edit-3"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-stone-100 bg-stone-50/30 flex justify-center">
<button className="text-xs text-stone-500 hover:text-stone-900 font-medium transition-colors">Załaduj więcej...</button>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-stone-200 shadow-sm p-6">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-amber-100 rounded text-amber-800">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<h3 className="font-medium text-stone-900">Szybka Edycja (AI)</h3>
</div>
<p className="text-xs text-stone-500 mb-4">
                                Edytujesz: <span className="font-medium text-stone-700">Ziemia Święta 2025</span>. Użyj asystenta, aby wygenerować opis.
                            </p>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5">Tytuł SEO</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all" type="text" value="Pielgrzymka do Ziemi Świętej - Program 2025"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1.5 flex justify-between">
                                        Opis (Meta)
                                        <span className="text-[10px] text-green-600 bg-green-50 px-1 rounded">Optymalny</span>
</label>
<textarea className="w-full bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none transition-all resize-none text-stone-600" rows="3">Odkryj duchowe bogactwo Jerozolimy i Betlejem. 8-dniowa pielgrzymka z przewodnikiem i pełnym wyżywieniem. Zarezerwuj termin na wiosnę 2025.</textarea>
</div>
<div className="pt-2 flex gap-2">
<button className="flex-1 bg-stone-900 text-white py-2 rounded-lg text-xs font-medium hover:bg-stone-800 transition-colors">Zapisz zmiany</button>
<button className="px-3 py-2 bg-stone-100 text-stone-600 rounded-lg hover:bg-stone-200 transition-colors">
<i className="w-4 h-4" data-lucide="wand-2"></i>
</button>
</div>
</div>
</div>

<div className="bg-stone-900 rounded-xl border border-stone-800 shadow-sm p-6 text-stone-300 relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-stone-800 rounded-full blur-2xl opacity-50"></div>
<h3 className="font-medium text-white mb-4 relative z-10">Status Systemu</h3>
<div className="space-y-3 relative z-10 text-xs">
<div className="flex justify-between items-center">
<span>Serwer API</span>
<span className="flex items-center gap-1.5 text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online</span>
</div>
<div className="flex justify-between items-center">
<span>Baza Danych</span>
<span className="flex items-center gap-1.5 text-green-400"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 24ms</span>
</div>
<div className="flex justify-between items-center">
<span>Synchronizacja</span>
<span className="text-stone-500">2 min temu</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
