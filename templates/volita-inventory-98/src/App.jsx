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
      

<header className="h-14 bg-slate-900 text-white flex items-center justify-between px-4 shrink-0 z-20">
<div className="flex items-center gap-2">
<div className="bg-blue-600 text-white p-1 rounded-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
</div>
<span className="font-semibold text-lg tracking-tight">VOLITA</span>
</div>
<div className="flex items-center gap-4 text-sm font-medium text-slate-300">
<button className="flex items-center gap-2 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="sun"></i>
<span>Svetlý</span>
</button>
<div className="flex items-center gap-2">
<img alt="Slovakia" className="w-5 h-4 rounded-sm object-cover" src="https://flagcdn.com/sk.svg"/>
</div>
<div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-300">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-16 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-6 shrink-0 z-10 hidden sm:flex">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="inbox"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="package"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="file-text"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="layers"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="book-open"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="users"></i></button>
<button className="text-slate-400 hover:text-slate-900 transition-colors"><i className="w-6 h-6" data-lucide="layout-grid"></i></button>
</aside>

<main className="flex-1 overflow-auto p-4 lg:p-8">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-[1600px] mx-auto">

<div className="space-y-6">

<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5">
<div className="flex justify-between items-start mb-6">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Informácie</h2>
<button className="text-slate-400 hover:text-red-500 transition-colors">
<i className="w-5 h-5" data-lucide="trash-2"></i>
</button>
</div>
<div className="space-y-4">

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Názov:</label>
<div className="col-span-2 h-9"></div>
</div>

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Identifikátor:</label>
<div className="col-span-2 bg-slate-50 rounded px-3 py-2 text-base font-medium text-slate-900">
                                    00033
                                </div>
</div>

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Stav:</label>
<div className="col-span-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-semibold bg-yellow-500 text-white shadow-sm">
                                        Prebieha
                                    </span>
</div>
</div>

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Objednávateľ:</label>
<div className="col-span-2 bg-slate-50 rounded px-3 py-2 flex items-center gap-2 text-base font-medium text-slate-900">
<i className="w-4 h-4 text-slate-400" data-lucide="user"></i>
                                    Regionálny sklad
                                </div>
</div>

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Dodávateľ:</label>
<div className="col-span-2 flex items-center gap-2 px-3 py-2 text-base font-medium text-slate-900">
<i className="w-4 h-4 text-slate-400" data-lucide="user"></i>
                                    Centrálny Sklad
                                </div>
</div>

<div className="grid grid-cols-3 items-center gap-4">
<label className="text-base font-medium text-slate-500">Vytvoril:</label>
<div className="col-span-2 bg-slate-50 rounded px-3 py-2 flex items-center gap-2 text-base font-medium text-slate-900">
<i className="w-4 h-4 text-slate-400" data-lucide="user"></i>
                                    Regionálny sklad
                                </div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="p-5 border-b border-slate-100">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Položky objednávky</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-slate-50 text-slate-500 text-sm font-medium">
<tr>
<th className="px-5 py-3 font-medium">Názov</th>
<th className="px-5 py-3 font-medium">Množstvo</th>
<th className="px-5 py-3 font-medium">Poznámka</th>
</tr>
</thead>
<tbody className="text-base text-slate-900">
<tr>
<td className="px-5 py-4 align-top">
<div className="flex gap-3">
<i className="w-5 h-5 text-slate-400 mt-1" data-lucide="settings"></i>
<div className="flex flex-col leading-tight">
<span className="font-medium">65 -</span>
<span>Silikónové</span>
<span>Tesnenie</span>
<span>Hybrid</span>
<span>610/455</span>
</div>
</div>
</td>
<td className="px-5 py-4 align-top">
<div className="flex items-center gap-1">
<span>5000</span>
<span className="bg-yellow-400 text-white text-xs font-bold px-1.5 py-0.5 rounded ml-1">2000</span>
<span className="text-slate-500 ml-1">(m)</span>
</div>
</td>
<td className="px-5 py-4 align-top text-slate-400">-</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="xl:col-span-2">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full flex flex-col">
<div className="p-5 flex justify-between items-center border-b border-slate-100">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight">Presuny</h2>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-orange-500 border border-orange-200 rounded hover:bg-orange-50 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
                                Vytvoriť výdajku
                            </button>
</div>
<div className="overflow-x-auto flex-1">
<table className="w-full text-left whitespace-nowrap">
<thead className="bg-sky-50/50 text-slate-500 text-sm font-medium border-b border-slate-100">
<tr>
<th className="px-5 py-3 font-medium">Typ</th>
<th className="px-5 py-3 font-medium">Odosielateľ</th>
<th className="px-5 py-3 font-medium">Príjemca</th>
<th className="px-5 py-3 font-medium">Dátum</th>
<th className="px-5 py-3 font-medium">Poznámka</th>
<th className="px-5 py-3 font-medium text-right">Položky</th>
</tr>
</thead>
<tbody className="text-base text-slate-900 divide-y divide-slate-50">

<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-teal-200 bg-teal-50 text-teal-600 text-xs font-semibold">
<i className="w-3 h-3" data-lucide="arrow-down-left"></i>
                                                Príjemka
                                            </span>
</td>
<td className="px-5 py-4 text-slate-600">Kurier</td>
<td className="px-5 py-4 text-slate-600">Regionálny sklad</td>
<td className="px-5 py-4 text-slate-500">18.12.2025 21:14</td>
<td className="px-5 py-4 text-slate-400">-</td>
<td className="px-5 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium text-sky-500 border border-sky-200 rounded bg-white hover:bg-sky-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                                                Položky
                                            </button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
                                                Výdajka
                                            </span>
</td>
<td className="px-5 py-4 text-slate-600">Kurier</td>
<td className="px-5 py-4 text-slate-600">Regionálny sklad</td>
<td className="px-5 py-4 text-slate-500">18.12.2025 21:14</td>
<td className="px-5 py-4 text-slate-400">-</td>
<td className="px-5 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium text-sky-500 border border-sky-200 rounded bg-white hover:bg-sky-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                                                Položky
                                            </button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-teal-200 bg-teal-50 text-teal-600 text-xs font-semibold">
<i className="w-3 h-3" data-lucide="arrow-down-left"></i>
                                                Príjemka
                                            </span>
</td>
<td className="px-5 py-4 text-slate-600">Centrálny Sklad</td>
<td className="px-5 py-4 text-slate-600">Kurier</td>
<td className="px-5 py-4 text-slate-500">18.12.2025 21:07</td>
<td className="px-5 py-4 text-slate-400">-</td>
<td className="px-5 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium text-sky-500 border border-sky-200 rounded bg-white hover:bg-sky-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                                                Položky
                                            </button>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-5 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-orange-200 bg-orange-50 text-orange-600 text-xs font-semibold">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
                                                Výdajka
                                            </span>
</td>
<td className="px-5 py-4 text-slate-600">Centrálny Sklad</td>
<td className="px-5 py-4 text-slate-600">Kurier</td>
<td className="px-5 py-4 text-slate-500">18.12.2025 21:03</td>
<td className="px-5 py-4 text-slate-400">-</td>
<td className="px-5 py-4 text-right">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium text-sky-500 border border-sky-200 rounded bg-white hover:bg-sky-50 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="box"></i>
                                                Položky
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<footer className="mt-8 text-sm text-slate-400 flex justify-between items-center pb-4 max-w-[1600px] mx-auto">
<p>Copyright ©2025 Volita. Všetky práva vyhradené.</p>
<div className="flex items-center gap-1">
<span>Coded with</span>
<i className="w-3 h-3 text-red-400 fill-current" data-lucide="heart"></i>
</div>
</footer>
</main>
</div>


    </>
  );
}
