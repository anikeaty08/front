import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="pt-14 pb-4 px-6 flex items-center justify-between z-30 relative">
<a className="p-2 -ml-2 text-white/60 hover:text-white transition-colors" href="map.html">
<iconify-icon height="24" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</a>
<div className="flex flex-col items-center">
<h1 className="text-sm font-medium tracking-wide text-white/60 uppercase">Зарядка</h1>
<span className="text-xs text-red-500 font-medium tracking-widest mt-0.5 animate-pulse uppercase">Активно</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white/80">
<iconify-icon height="22" icon="solar:settings-linear" width="22"></iconify-icon>
</button>
</header>

<main className="flex-1 relative flex flex-col w-full h-full">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-[60%] z-0 pointer-events-none overflow-hidden mask-image-gradient">
<div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-transparent to-[#050507] z-10"></div>
<div className="energy-line d-1"></div>
<div className="energy-line d-2"></div>
<div className="energy-line d-3 bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] w-[3px]"></div>
<div className="energy-line d-4"></div>
<div className="energy-line d-5"></div>
</div>

<div className="flex-1 flex flex-col items-center justify-center z-10 relative pb-12">

<div className="relative w-80 h-80 flex items-center justify-center">

<div className="absolute inset-0 rounded-full bg-red-600/20 blur-[60px] opacity-40"></div>

<div className="absolute inset-0 rounded-full border-[16px] border-[#1a1a1e]"></div>

<svg className="absolute inset-0 w-full h-full animate-spin-slow" viewbox="0 0 100 100">
<defs>
<lineargradient id="redGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#EF4444" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#EF4444"></stop>
<stop offset="100%" stop-color="#B91C1C"></stop>
</lineargradient>
</defs>
<circle cx="50" cy="50" fill="none" r="42" stroke="url(#redGradient)" strokeLinecap="round" strokeWidth="8"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
<div className="flex items-start">
<span className="text-7xl font-bold tracking-tighter text-white tabular-nums leading-none">72</span>
<span className="text-2xl font-medium text-red-500 mt-1">%</span>
</div>
<div className="flex flex-col items-center mt-2 gap-1">
<span className="text-sm font-medium text-white/50 tracking-wide">32.5 кВт·ч</span>
<div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 flex items-center gap-1.5">
<iconify-icon className="text-red-500 text-xs" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-semibold text-red-400">120 кВт</span>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-col items-center gap-3">
<h2 className="text-xl font-semibold text-white tracking-tight">Red Charge – Ала-Тоо</h2>
<p className="text-sm text-white/40">Автомобиль подключен</p>
</div>
</div>

<div className="px-6 mb-6 z-20">
<div className="bg-[#131316] rounded-2xl p-4 border border-white/5 flex items-center justify-between shadow-xl">
<div className="flex flex-col">
<span className="text-xs text-white/40 mb-1">Стоимость</span>
<span className="text-lg font-semibold text-white tracking-tight">1200 сом</span>
</div>
<button className="px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:scale-105 active:scale-95 transition-all">
                    Завершить
                </button>
</div>
</div>
</main>

<nav className="glass-nav pb-8 pt-2 px-6 z-50 fixed bottom-0 left-0 right-0 w-full">
<div className="flex justify-between items-end relative">

<a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors w-14 group" href="map.html">
<iconify-icon className="group-hover:text-red-500 transition-colors" height="26" icon="solar:map-point-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Карта</span>
</a>

<a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors w-14" href="favorites.html">
<iconify-icon height="26" icon="solar:heart-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Избранное</span>
</a>

<div className="w-16 h-12"></div>

<div className="absolute left-1/2 -translate-x-1/2 -top-10">
<button className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center shadow-[0_8px_20px_rgba(220,38,38,0.4)] border-4 border-[#050507] transform transition-transform hover:scale-105 active:scale-95">
<iconify-icon className="animate-pulse" height="32" icon="solar:bolt-linear" width="32"></iconify-icon>
</button>
</div>

<a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors w-14" href="wallet.html">
<iconify-icon height="26" icon="solar:wallet-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Кошелек</span>
</a>

<a className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition-colors w-14" href="menu.html">
<iconify-icon height="26" icon="solar:hamburger-menu-linear" width="26"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Меню</span>
</a>
</div>
</nav>

    </>
  );
}
