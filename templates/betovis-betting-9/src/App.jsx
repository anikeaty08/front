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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</span>
                        BETOVIS
                    </a>
<div className="hidden md:flex items-center space-x-1">
<a className="px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">Spor</a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            Canlı
                        </a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors" href="#">Casino</a>
<a className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors" href="#">Slotlar</a>
</div>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-white/5 rounded-full px-3 py-1.5 border border-white/5">
<iconify-icon className="text-neutral-500 mr-2" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-xs text-white w-24 placeholder-neutral-600 focus:w-40 transition-all duration-300" placeholder="Oyun ara..." type="text"/>
</div>
<button className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2">Giriş Yap</button>
<button className="bg-yellow-500 hover:bg-yellow-400 text-black text-sm font-medium px-4 py-2 rounded-lg shadow-[0_0_15px_-3px_rgba(234,179,8,0.3)] transition-all">
                        Kayıt Ol
                    </button>
</div>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative rounded-2xl overflow-hidden group h-[340px] border border-white/5">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent z-10"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&amp;w=2835&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative z-20 h-full flex flex-col justify-center p-8 sm:p-12 items-start">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-medium mb-4">
<iconify-icon icon="solar:fire-linear"></iconify-icon> Haftanın Bonusu
                    </span>
<h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-4 max-w-lg">
                        %100 Hoşgeldin <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">Casino Bonusu</span>
</h1>
<p className="text-neutral-400 text-sm mb-8 max-w-md leading-relaxed">
                        Betovis ayrıcalıklarıyla casino dünyasına adım atın. İlk yatırımınıza özel avantajları kaçırmayın.
                    </p>
<button className="group flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                        Hemen Oyna
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-yellow-500/5 blur-[80px] rounded-full"></div>
<div className="flex items-center justify-between mb-6 z-10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-red-400 uppercase tracking-widest">Canlı</span>
</div>
<iconify-icon className="text-neutral-500 text-xl" icon="solar:football-linear"></iconify-icon>
</div>
<div className="space-y-6 z-10">
<div className="flex justify-between items-center text-center">
<div>
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center mb-2 mx-auto text-lg">🦁</div>
<span className="text-sm font-medium text-white block">GS</span>
</div>
<div className="px-3 py-1 bg-neutral-900 rounded border border-white/10">
<span className="text-xl font-medium text-yellow-500 tracking-tight">2 - 1</span>
<span className="text-xs text-neutral-500 block mt-1">78:12</span>
</div>
<div>
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center mb-2 mx-auto text-lg">🦅</div>
<span className="text-sm font-medium text-white block">BJK</span>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<button className="flex flex-col items-center justify-center py-2 rounded bg-white/5 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 border border-white/5 transition-all group">
<span className="text-xs text-neutral-400 group-hover:text-black/70">1</span>
<span className="text-sm font-medium">1.45</span>
</button>
<button className="flex flex-col items-center justify-center py-2 rounded bg-white/5 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 border border-white/5 transition-all group">
<span className="text-xs text-neutral-400 group-hover:text-black/70">X</span>
<span className="text-sm font-medium">3.20</span>
</button>
<button className="flex flex-col items-center justify-center py-2 rounded bg-white/5 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 border border-white/5 transition-all group">
<span className="text-xs text-neutral-400 group-hover:text-black/70">2</span>
<span className="text-sm font-medium">2.80</span>
</button>
</div>
</div>
</div>
</section>

<section className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 min-w-max">
<iconify-icon className="text-xl" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-sm font-medium">Popüler</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 transition-all min-w-max">
<iconify-icon className="text-xl" icon="solar:football-linear"></iconify-icon>
<span className="text-sm font-medium">Futbol</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 transition-all min-w-max">
<iconify-icon className="text-xl" icon="solar:basketball-linear"></iconify-icon>
<span className="text-sm font-medium">Basketbol</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 transition-all min-w-max">
<iconify-icon className="text-xl" icon="solar:tennis-ball-linear"></iconify-icon>
<span className="text-sm font-medium">Tenis</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 transition-all min-w-max">
<iconify-icon className="text-xl" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-sm font-medium">E-Spor</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/50 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/5 transition-all min-w-max">
<iconify-icon className="text-xl" icon="solar:rocket-2-linear"></iconify-icon>
<span className="text-sm font-medium">Aviator</span>
</button>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:play-circle-linear"></iconify-icon>
                    Canlı Maçlar
                </h2>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Oran Değişimleri</span>
<label className="flex items-center cursor-pointer relative" htmlFor="odds-toggle">
<input className="sr-only toggle-checkbox" id="odds-toggle" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-800 border border-white/10 rounded-full toggle-label transition-colors"></div>
<div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1 transition-all transform toggle-checkbox:checked:translate-x-full"></div>
</label>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 bg-white/[0.02] text-xs font-medium text-neutral-500">
<div className="col-span-5 md:col-span-4 pl-2">MAÇ &amp; ZAMAN</div>
<div className="col-span-2 hidden md:block text-center">SKOR</div>
<div className="col-span-7 md:col-span-6 grid grid-cols-3 gap-2 text-center">
<span>1</span>
<span>X</span>
<span>2</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-10 min-w-[2.5rem]">
<span className="text-xs text-yellow-500 font-medium animate-pulse">42'</span>
<iconify-icon className="text-neutral-600 mt-1" icon="solar:football-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm text-white font-medium">Manchester City</span>
<span className="text-sm text-neutral-400">Liverpool</span>
</div>
</div>
<div className="col-span-2 hidden md:flex flex-col items-center justify-center">
<span className="text-sm font-medium text-yellow-500">1 - 0</span>
</div>
<div className="col-span-7 md:col-span-6 grid grid-cols-3 gap-2">
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10 relative overflow-hidden">
                            1.85
                            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-green-500"></div>
</button>
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-400 font-medium transition-colors border border-transparent hover:border-white/10">3.40</button>
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10 relative overflow-hidden">
                            4.10
                            <div className="absolute bottom-0 left-0 h-0.5 w-full bg-red-500"></div>
</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-10 min-w-[2.5rem]">
<span className="text-xs text-yellow-500 font-medium">12'</span>
<iconify-icon className="text-neutral-600 mt-1" icon="solar:basketball-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm text-white font-medium">Lakers</span>
<span className="text-sm text-neutral-400">Bulls</span>
</div>
</div>
<div className="col-span-2 hidden md:flex flex-col items-center justify-center">
<span className="text-sm font-medium text-yellow-500">24 - 22</span>
</div>
<div className="col-span-7 md:col-span-6 grid grid-cols-3 gap-2">
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10">1.60</button>
<button className="py-2 rounded bg-neutral-800/50 text-xs text-neutral-600 font-medium cursor-not-allowed border border-transparent">-</button>
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10">2.90</button>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 hover:bg-white/[0.02] transition-colors items-center group">
<div className="col-span-5 md:col-span-4 flex items-center gap-4">
<div className="flex flex-col items-center justify-center w-10 min-w-[2.5rem]">
<span className="text-xs text-yellow-500 font-medium">Devre</span>
<iconify-icon className="text-neutral-600 mt-1" icon="solar:football-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm text-white font-medium">Fenerbahçe</span>
<span className="text-sm text-neutral-400">Trabzonspor</span>
</div>
</div>
<div className="col-span-2 hidden md:flex flex-col items-center justify-center">
<span className="text-sm font-medium text-yellow-500">0 - 0</span>
</div>
<div className="col-span-7 md:col-span-6 grid grid-cols-3 gap-2">
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10">2.10</button>
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10">3.00</button>
<button className="py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors border border-transparent hover:border-white/10">2.80</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-purple-500" icon="solar:gamepad-linear"></iconify-icon>
                    Popüler Slotlar
                </h2>
<a className="text-xs font-medium text-neutral-400 hover:text-white flex items-center gap-1" href="#">
                    Tümünü Gör <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Sweet Bonanza</span>
<span className="text-[10px] text-neutral-400 block">Pragmatic Play</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Gates of Olympus</span>
<span className="text-[10px] text-neutral-400 block">Pragmatic Play</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Wild West Gold</span>
<span className="text-[10px] text-neutral-400 block">Netent</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Big Bass Bonanza</span>
<span className="text-[10px] text-neutral-400 block">Reel Kingdom</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-pink-900 to-rose-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Sugar Rush</span>
<span className="text-[10px] text-neutral-400 block">Pragmatic Play</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-900 to-amber-900 group-hover:scale-110 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm z-10">
<div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
<span className="text-xs font-medium text-white">Book of Ra</span>
<span className="text-[10px] text-neutral-400 block">Novomatic</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#030303] py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Sporlar</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-yellow-500 transition-colors" href="#">Futbol Bahisleri</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Basketbol</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Tenis</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Sanal Sporlar</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Casino</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-yellow-500 transition-colors" href="#">Popüler Slotlar</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Canlı Casino</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Jackpotlar</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Masa Oyunları</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Yardım</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-yellow-500 transition-colors" href="#">Canlı Destek</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">SSS</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Para Yatırma</a></li>
<li><a className="hover:text-yellow-500 transition-colors" href="#">Para Çekme</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Uygulama</h4>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 bg-neutral-900 border border-white/10 rounded-lg p-3 hover:bg-neutral-800 transition-colors group">
<iconify-icon className="text-xl text-white" icon="solar:apple-linear"></iconify-icon>
<div className="text-left">
<span className="text-[10px] text-neutral-500 block">Download on the</span>
<span className="text-xs font-medium text-white group-hover:text-yellow-500 transition-colors">App Store</span>
</div>
</button>
<button className="flex items-center gap-3 bg-neutral-900 border border-white/10 rounded-lg p-3 hover:bg-neutral-800 transition-colors group">
<iconify-icon className="text-xl text-white" icon="solar:android-linear"></iconify-icon>
<div className="text-left">
<span className="text-[10px] text-neutral-500 block">Get it on</span>
<span className="text-xs font-medium text-white group-hover:text-yellow-500 transition-colors">Google Play</span>
</div>
</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-neutral-500">18+</span>
<p className="text-[10px] text-neutral-600">© 2023 Betovis. Tüm hakları saklıdır. Sorumlu oyun politikasını destekliyoruz.</p>
</div>
<div className="flex gap-4">
<iconify-icon className="grayscale opacity-50 hover:opacity-100 transition-opacity" icon="logos:visa" width="32"></iconify-icon>
<iconify-icon className="grayscale opacity-50 hover:opacity-100 transition-opacity" icon="logos:mastercard" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-50 hover:opacity-100 transition-opacity" icon="logos:bitcoin" width="24"></iconify-icon>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 w-full bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 z-50">
<div className="grid grid-cols-5 p-1">
<a className="flex flex-col items-center justify-center py-2 text-yellow-500" href="#">
<iconify-icon className="text-xl mb-1" icon="solar:home-linear"></iconify-icon>
<span className="text-[10px] font-medium">Anasayfa</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl mb-1" icon="solar:football-linear"></iconify-icon>
<span className="text-[10px] font-medium">Spor</span>
</a>
<a className="flex flex-col items-center justify-center py-2 relative" href="#">
<div className="absolute -top-6 bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center shadow-[0_0_15px_-3px_rgba(234,179,8,0.5)] border-4 border-[#050505]">
<iconify-icon className="text-2xl text-black" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-neutral-500 mt-6">Bahis Yap</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl mb-1" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-[10px] font-medium">Casino</span>
</a>
<a className="flex flex-col items-center justify-center py-2 text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl mb-1" icon="solar:user-linear"></iconify-icon>
<span className="text-[10px] font-medium">Hesabım</span>
</a>
</div>
</div>

    </>
  );
}
