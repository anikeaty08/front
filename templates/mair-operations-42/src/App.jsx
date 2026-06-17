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
      

<aside className="w-20 lg:w-64 bg-zinc-950 flex-shrink-0 flex flex-col justify-between border-r border-zinc-800 transition-all duration-300">
<div>

<div className="h-20 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center bg-white text-zinc-950 rounded-lg font-bold text-xl italic tracking-tighter">
                        M
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
</div>
<span className="hidden lg:block text-white text-xl font-bold tracking-tight">AIR</span>
</div>
</div>

<nav className="mt-6 flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white group relative" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="hidden lg:block font-medium">Přehled</span>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full"></div>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="file-text"></i>
<span className="hidden lg:block font-medium">Objednávky</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="briefcase"></i>
<span className="hidden lg:block font-medium">Vedení</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="building-2"></i>
<span className="hidden lg:block font-medium">Objekty</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="wrench"></i>
<span className="hidden lg:block font-medium">Zařízení</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="users"></i>
<span className="hidden lg:block font-medium">Osoby</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="car"></i>
<span className="hidden lg:block font-medium">Vozidla</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar-days"></i>
<span className="hidden lg:block font-medium">Kalendář</span>
</a>
</nav>
</div>
<div className="p-3 mb-2">
<a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
<span className="hidden lg:block font-medium">Nastavení</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-zinc-50">

<header className="h-20 bg-white/80 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-8 z-10 sticky top-0">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Hlavní přehled</h1>
<p className="text-sm text-red-600 font-medium mt-0.5">Přehled</p>
</div>
<div className="flex items-center gap-6">
<button className="text-sm text-zinc-500 hover:text-zinc-900 font-medium hidden md:block">
                    Spravovat pracovní plochu <i className="inline w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</button>
<div className="h-6 w-px bg-zinc-200 hidden md:block"></div>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors relative">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="message-square"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white"></span>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell"></i>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-full transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="help-circle"></i>
</button>
</div>
<div className="text-right hidden sm:block">
<p className="text-xs text-zinc-500">Pondělí, <span className="text-zinc-900 font-medium">12.4.2021</span></p>
</div>
<div className="flex items-center gap-3 pl-2">
<img alt="User" className="w-9 h-9 rounded-full ring-2 ring-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="hidden lg:block">
<p className="text-sm font-semibold text-zinc-900 leading-none">Karel N.</p>
<p className="text-xs text-zinc-500 mt-1">Admin</p>
</div>
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-auto p-8">
<div className="flex flex-col xl:flex-row gap-8 max-w-[1920px] mx-auto">

<div className="flex-1 flex flex-col gap-8 min-w-0">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="col-span-1 md:col-span-4 lg:col-span-2 bg-gradient-to-br from-zinc-800 to-zinc-950 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/30 transition-all duration-700"></div>
<div className="relative z-10 flex items-center gap-5 h-full">
<img alt="Profile" className="w-16 h-16 rounded-full border-2 border-white/20 shadow-xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h2 className="text-xl font-semibold tracking-tight">Vítejte zpátky,</h2>
<p className="text-zinc-400 mt-1">Dnes je pondělí, 12.4.2021</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm flex flex-col justify-center items-center text-center gap-2 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="file-plus"></i>
</div>
<span className="text-3xl font-semibold tracking-tight text-zinc-900">11</span>
<span className="text-sm font-medium text-zinc-500 leading-tight">Nových<br/>objednávek</span>
</div>
<div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm flex flex-col justify-center items-center text-center gap-2 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="message-circle"></i>
</div>
<span className="text-3xl font-semibold tracking-tight text-zinc-900">18</span>
<span className="text-sm font-medium text-zinc-500 leading-tight">Nepřečtených<br/>požadavků</span>
</div>
<div className="bg-white rounded-2xl p-6 border border-zinc-200/60 shadow-sm flex flex-col justify-center items-center text-center gap-2 hover:border-zinc-300 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-1">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="bell-ring"></i>
</div>
<span className="text-3xl font-semibold tracking-tight text-zinc-900">15</span>
<span className="text-sm font-medium text-zinc-500 leading-tight">Upozornění</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2 rounded-lg">
<i className="w-5 h-5 text-indigo-600 stroke-[1.5]" data-lucide="text-quote"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight">Objednávky</h3>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Zobrazit vše <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-2">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Datum</th>
<th className="px-4 py-3 font-medium">Zákazník</th>
<th className="px-4 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Společnost s.r.o.</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">POTVRZENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Společnost s.r.o.</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">POTVRZENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Společnost s.r.o.</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">ZRUŠENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Společnost s.r.o.</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">HOTOVO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900 group-hover:text-indigo-600 transition-colors">Společnost s.r.o.</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">POTVRZENO</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2 rounded-lg">
<i className="w-5 h-5 text-indigo-600 stroke-[1.5]" data-lucide="calendar"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight">Termíny</h3>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Zobrazit vše <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-2">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Datum</th>
<th className="px-4 py-3 font-medium">Událost</th>
<th className="px-4 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900">Revize plynového kotle</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">POTVRZENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900">Konference Praha</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">POTVRZENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900">Osobní setkání Novák</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">ZRUŠENO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900">Kontrola požární ochrany</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">HOTOVO</span>
</td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors group border-t border-zinc-50">
<td className="px-4 py-3 text-zinc-500 font-normal">12.4.2021</td>
<td className="px-4 py-3 font-medium text-zinc-900">BOZP školení - Tuček</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">HOTOVO</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2 rounded-lg">
<i className="w-5 h-5 text-indigo-600 stroke-[1.5]" data-lucide="user-square"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight">Osoby</h3>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Zobrazit vše <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-2">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Jméno</th>
<th className="px-4 py-3 font-medium">Provozovna</th>
<th className="px-4 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-zinc-100" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span className="font-medium text-zinc-900">Jméno Příjmení</span>
</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">DOVOLENÁ</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-zinc-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span className="font-medium text-zinc-900">Jméno Příjmení</span>
</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">DOVOLENÁ</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-zinc-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span className="font-medium text-zinc-900">Jméno Příjmení</span>
</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Hradec Králové</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">NEMOC</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-zinc-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span className="font-medium text-zinc-900">Jméno Příjmení</span>
</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">PŘÍTOMEN</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-4 py-3 flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full bg-zinc-100" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<span className="font-medium text-zinc-900">Jméno Příjmení</span>
</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">PŘÍTOMEN</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col">
<div className="px-6 py-5 border-b border-zinc-100 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-indigo-50 p-2 rounded-lg">
<i className="w-5 h-5 text-indigo-600 stroke-[1.5]" data-lucide="server"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 tracking-tight">Zařízení</h3>
</div>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-900 flex items-center gap-1 transition-colors" href="#">
                                    Zobrazit vše <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="p-2">
<table className="w-full text-left">
<thead>
<tr className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Zařízení</th>
<th className="px-4 py-3 font-medium">Provozovna</th>
<th className="px-4 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 font-medium text-zinc-900">Apple Macbook 16'</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">REVIZE</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 font-medium text-zinc-900">Hasící přístroj pěnový</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">REVIZE</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 font-medium text-zinc-900">Plynový kotel</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">PORUCHA</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors border-b border-zinc-50">
<td className="px-4 py-3 font-medium text-zinc-900">Tiskárna Cannon CX</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Hradec Králové</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">V PROVOZU</span></td>
</tr>
<tr className="hover:bg-zinc-50/50 transition-colors">
<td className="px-4 py-3 font-medium text-zinc-900">Plynový kotel</td>
<td className="px-4 py-3 text-zinc-500 font-normal">Praha 1</td>
<td className="px-4 py-3 text-right"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">V PROVOZU</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<aside className="w-full xl:w-96 flex flex-col gap-6">

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">Duben 2021</h3>
<div className="flex gap-2">
<button className="p-1 hover:bg-zinc-100 rounded text-zinc-400"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="p-1 hover:bg-zinc-100 rounded text-zinc-400"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-sm mb-2">
<div className="text-zinc-400 font-medium text-xs uppercase">Po</div>
<div className="text-zinc-400 font-medium text-xs uppercase">Út</div>
<div className="text-zinc-400 font-medium text-xs uppercase">St</div>
<div className="text-zinc-400 font-medium text-xs uppercase">Čt</div>
<div className="text-zinc-400 font-medium text-xs uppercase">Pá</div>
<div className="text-zinc-400 font-medium text-xs uppercase">So</div>
<div className="text-zinc-400 font-medium text-xs uppercase">Ne</div>
</div>
<div className="grid grid-cols-7 gap-y-1 gap-x-1 text-center text-base">

<div className="py-2 text-zinc-300">29</div>
<div className="py-2 text-zinc-300">30</div>
<div className="py-2 text-zinc-300">31</div>

<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">1</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">2</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">3</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">4</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">5</div>
<div className="py-2 font-medium text-zinc-700 bg-zinc-100 rounded-lg cursor-pointer">6</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">7</div>
<div className="py-2 font-medium text-zinc-700 bg-zinc-100 rounded-lg cursor-pointer">8</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">9</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">10</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">11</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">12</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">13</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">14</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">15</div>
<div className="py-2 font-semibold text-white bg-red-500 shadow-md shadow-red-200 rounded-lg cursor-pointer">16</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">17</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">18</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">19</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">20</div>
<div className="py-2 font-medium text-zinc-700 bg-zinc-100 rounded-lg cursor-pointer">21</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">22</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">23</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">24</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">25</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">26</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">27</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">28</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">29</div>
<div className="py-2 font-medium text-zinc-700 hover:bg-zinc-50 rounded-lg cursor-pointer">30</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
<div className="bg-red-50 text-red-600 p-3 rounded-lg flex-shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Plynový kotel</h4>
<p className="text-sm font-medium text-red-600 mt-1 mb-1">Nahlášena porucha</p>
<p className="text-sm text-zinc-500">Hradec Králové</p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-amber-200 shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
<div className="bg-amber-50 text-amber-600 p-3 rounded-lg flex-shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="wrench"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Revize elektrozařízení</h4>
<p className="text-sm font-medium text-amber-600 mt-1 mb-1">12:30 - 14:00</p>
<p className="text-sm text-zinc-500 line-clamp-1">Lorem ipsum dolor sit consectetur...</p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
<div className="bg-amber-50 text-amber-600 p-3 rounded-lg flex-shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="user"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Marek Šimůnek dovolená</h4>
<p className="text-sm font-medium text-amber-600 mt-1 mb-1">Celodenní</p>
<p className="text-sm text-zinc-500 line-clamp-1">Lorem ipsum dolor sit consectetur...</p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
<div className="bg-emerald-50 text-emerald-600 p-3 rounded-lg flex-shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Zakázka Hradec Králové</h4>
<p className="text-sm font-medium text-emerald-600 mt-1 mb-1">Hotovo</p>
<p className="text-sm text-zinc-500 line-clamp-1">Lorem ipsum dolor sit consectetur...</p>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200/60 shadow-sm flex gap-4 items-start group hover:shadow-md transition-shadow">
<div className="bg-amber-50 text-amber-600 p-3 rounded-lg flex-shrink-0">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="wrench"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Revize zařízení: MacBook 16'</h4>
<p className="text-sm font-medium text-amber-600 mt-1 mb-1">12:30 - 14:00</p>
<p className="text-sm text-zinc-500 line-clamp-1">Lorem ipsum dolor sit consectetur...</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>


    </>
  );
}
