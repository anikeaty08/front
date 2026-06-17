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
      

<header className="h-20 border-b border-gray-200 flex items-center w-full shrink-0 bg-white z-10">

<div className="w-[280px] border-r border-gray-200 h-full flex items-center justify-center shrink-0">
<span className="text-3xl font-medium tracking-tight uppercase text-gray-900">Albedo</span>
</div>

<div className="flex-1 flex justify-center items-center px-8 relative">

<div className="border border-gray-300 rounded-xl px-12 py-3 flex gap-16 text-base font-medium bg-white">
<span className="text-gray-800">Эпоха 180</span>
<span className="text-gray-500">17Ч 15 мин</span>
</div>

<div className="absolute right-8 flex items-center gap-6">
<button className="border border-gray-300 rounded-xl px-8 py-3 text-base font-medium hover:bg-gray-50 transition-colors">
                    GPU
                </button>
<div className="bg-[#0b0f19] text-white rounded-xl px-6 py-3 flex items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-gray-300" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-base font-medium">2</span>
</div>
<i className="w-5 h-5 text-gray-300" data-lucide="bell" strokeWidth="1.5"></i>
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-current" data-lucide="hexagon" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-[280px] border-r border-gray-200 flex flex-col shrink-0 bg-white overflow-y-auto">

<div className="flex flex-col items-center py-8 border-b border-gray-100">
<div className="relative w-full px-6 flex justify-center mb-4">
<div className="w-full h-24 bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl overflow-hidden opacity-80 absolute top-0 left-0 right-0 mx-4"></div>
<div className="w-20 h-20 bg-gray-100 rounded-full border-4 border-white z-10 mt-6 flex items-center justify-center shadow-sm">
<span className="text-sm font-medium text-gray-600">Immatra</span>
</div>
</div>
</div>

<nav className="flex flex-col gap-4 p-6">
<a className="flex items-center justify-center gap-3 px-4 py-3 rounded-lg bg-[#f0f6ff] text-blue-500 font-medium text-base transition-colors" href="#">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
                    Счета
                </a>
<a className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ff9b9b] border border-gray-800 text-gray-900 font-medium text-base shadow-sm" href="#">
                    Майнинг
                </a>
<div className="w-full h-[1px] bg-gray-200 my-2"></div>
<a className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ff9b9b] border border-gray-800 text-gray-900 font-medium text-base shadow-sm" href="#">
                    Гонка
                </a>
<a className="flex items-center justify-center px-4 py-3 rounded-lg bg-[#ff9b9b] border border-gray-800 text-gray-900 font-medium text-base shadow-sm" href="#">
                    Обучения
                </a>
</nav>
</aside>

<main className="flex-1 bg-[#fafafa] overflow-y-auto p-10">
<div className="max-w-5xl mx-auto flex flex-col gap-8">

<div className="flex justify-center gap-6">
<button className="w-64 py-3 rounded-xl bg-[#ff9b9b] border border-gray-800 text-gray-900 font-medium text-base shadow-sm">
                        Майнинг
                    </button>
<button className="w-64 py-3 rounded-xl bg-white border border-gray-800 text-gray-900 font-medium text-base hover:bg-gray-50 transition-colors">
                        Друзья
                    </button>
</div>

<div className="w-full border border-gray-300 bg-white rounded-xl py-4 px-6 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex-1 text-center text-base font-medium text-gray-900">Инструкция</div>
<i className="w-8 h-8 text-blue-500" data-lucide="chevron-down" strokeWidth="2"></i>
</div>

<div className="flex items-center justify-between gap-2">

<div className="flex-1 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-between h-[220px]">
<h3 className="text-base font-medium text-gray-800 mt-2">Ожидает майнинг</h3>
<div className="text-[40px] font-semibold tracking-tight text-gray-900">0 $</div>
<button className="w-full py-3 mt-4 bg-[#84f55b] border border-gray-800 rounded-lg text-gray-900 font-medium text-base shadow-sm hover:bg-[#7ceb55] transition-colors">
                            Начать майнинг
                        </button>
</div>

<svg className="shrink-0 text-[#00aaff] fill-current" fill="none" height="40" viewbox="0 0 24 40" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L24 20L0 40V0Z"></path>
</svg>

<div className="flex-1 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-between h-[220px] relative">
<h3 className="text-base font-medium text-gray-800 mt-2">Получено</h3>
<div className="text-[40px] font-semibold tracking-tight text-gray-900">0 G</div>
<div className="flex gap-4 w-full justify-center mt-2 relative z-10">

<div className="bg-[#112420] border border-gray-800 rounded-lg px-4 py-2 flex flex-col relative overflow-hidden">
<div className="flex items-center gap-1 text-[#4ade80] mb-1">
<i className="w-3 h-3" data-lucide="lock-open" strokeWidth="2"></i>
<span className="text-xs font-medium">Available</span>
</div>
<span className="text-lg font-semibold tracking-tight text-[#4ade80]">900,56</span>
<span className="text-[10px] text-gray-500 absolute bottom-2 right-2">GNK</span>
</div>

<div className="bg-[#2c1216] border border-gray-800 rounded-lg px-4 py-2 flex flex-col relative overflow-hidden">
<div className="flex items-center gap-1 text-[#fb7185] mb-1">
<i className="w-3 h-3" data-lucide="lock" strokeWidth="2"></i>
<span className="text-xs font-medium">Vesting</span>
</div>
<span className="text-lg font-semibold tracking-tight text-[#fb7185]">10,86K</span>
<span className="text-[10px] text-gray-500 absolute bottom-2 right-2">GNK</span>
</div>
</div>

<div className="w-[80%] h-2 bg-gray-200 rounded-full mt-4 overflow-hidden border border-gray-300">
<div className="w-[15%] h-full bg-[#00aaff]"></div>
</div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-6 overflow-hidden">
<svg className="w-full h-full text-[#00aaff] fill-current" preserveaspectratio="none" viewbox="0 0 100 20">
<polygon points="0,0 100,0 50,20"></polygon>
</svg>
</div>
</div>

<svg className="shrink-0 text-[#00aaff] fill-current" fill="none" height="40" viewbox="0 0 24 40" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L24 20L0 40V0Z"></path>
</svg>

<div className="flex-1 bg-white border border-gray-300 rounded-xl p-6 flex flex-col items-center justify-start h-[220px]">
<h3 className="text-base font-medium text-gray-800 mt-2 mb-6">Доступно</h3>
<div className="text-[40px] font-semibold tracking-tight text-gray-900">0 G</div>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between items-center mb-6 px-2">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Контракт</h2>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">История</h2>
</div>
<div className="flex items-center gap-2">

<svg className="shrink-0 text-[#00aaff] fill-current cursor-pointer hover:opacity-80" fill="none" height="80" viewbox="0 0 24 80" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M24 0L0 40L24 80V0Z"></path>
</svg>

<div className="flex-1 flex gap-3 overflow-x-auto py-2 px-1 hide-scrollbar items-end">

<div className="w-24 h-28 bg-[#a6f788] rounded-xl border border-[#4ade80] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500G</div>
<div className="w-24 h-28 bg-[#a6f788] rounded-xl border border-[#4ade80] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>
<div className="w-24 h-28 bg-[#a6f788] rounded-xl border border-[#4ade80] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>
<div className="w-24 h-28 bg-[#a6f788] rounded-xl border border-[#4ade80] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>

<div className="relative shrink-0 flex flex-col items-center">
<div className="w-24 h-32 bg-[#ffffff] rounded-xl border-2 border-[#4ade80] flex items-center justify-center font-semibold text-base text-gray-900 shadow-md z-10">2500$</div>
<div className="w-10 h-4 -mt-1 z-0 text-[#4ade80] fill-current">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<polygon points="0,0 100,0 50,50"></polygon>
</svg>
</div>
</div>
<div className="w-24 h-28 bg-[#fbf4a3] rounded-xl border border-[#fde047] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>
<div className="w-24 h-28 bg-[#fbf4a3] rounded-xl border border-[#fde047] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>
<div className="w-24 h-28 bg-[#fbf4a3] rounded-xl border border-[#fde047] flex items-center justify-center font-semibold text-base text-gray-900 shrink-0 shadow-sm transition-transform hover:-translate-y-1">2500$</div>

<div className="w-24 h-28 bg-white rounded-xl border border-gray-300 flex flex-col overflow-hidden shrink-0 shadow-sm transition-transform hover:-translate-y-1 ml-auto">
<div className="flex-1 flex items-center justify-center text-xs font-medium text-gray-800">1700/2500$</div>
<div className="h-8 bg-[#fbf4a3] border-t border-gray-300 flex items-center justify-center text-sm font-medium text-gray-800">Open</div>
</div>
</div>

<svg className="shrink-0 text-[#00aaff] fill-current cursor-pointer hover:opacity-80" fill="none" height="80" viewbox="0 0 24 80" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L24 40L0 80V0Z"></path>
</svg>
</div>
</div>

<div className="w-full bg-[#ebfce3] border border-[#bbf7d0] rounded-xl py-4 px-6 flex items-center justify-between">
<div className="flex gap-8 items-center bg-white border border-gray-300 rounded-lg px-6 py-2">
<span className="text-base font-medium text-gray-800">Эпоха 180</span>
<span className="text-base font-medium text-gray-600">17Ч 15 мин</span>
<span className="text-base font-medium text-gray-800 pl-4 border-l border-gray-200">Price - ?</span>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">
                        250000 <span className="text-lg text-gray-600 font-normal">USDT</span>
</div>
</div>

<div className="w-full bg-white border border-[#ff4d4d] rounded-xl py-5 px-6 flex items-center justify-between shadow-sm">
<span className="text-base font-medium text-gray-900">Ваш адрес</span>
<span className="text-base font-medium text-gray-900">Не участвует</span>
</div>

<div className="w-full bg-[#181d2a] rounded-lg p-2 flex items-center mt-2 shadow-sm">
<div className="flex-1 flex items-center px-4 gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none text-base text-gray-200 w-full placeholder-gray-500" placeholder="Поиск транзакций" type="text"/>
</div>
<button className="bg-[#242b3d] text-gray-300 px-6 py-2 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-[#2d364d] transition-colors">
                        Найти
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="mt-4 flex flex-col gap-4">

<div className="flex items-center gap-4 py-2">
<div className="flex-1 h-[1px] bg-gray-300"></div>
<span className="text-sm font-medium text-gray-600">1 000 017</span>
<div className="flex-1 h-[1px] bg-gray-300"></div>
</div>

<div className="w-full bg-white border border-gray-300 rounded-xl py-5 px-6 flex items-center justify-between hover:border-gray-400 transition-colors cursor-default">
<span className="text-base font-medium text-gray-900">Пользователь</span>
<div className="text-xl font-medium tracking-tight text-gray-900">
                            2500 <span className="text-base text-gray-600 font-normal">USDT</span>
</div>
</div>
<div className="w-full bg-white border border-gray-300 rounded-xl py-5 px-6 flex items-center justify-between hover:border-gray-400 transition-colors cursor-default">
<span className="text-base font-medium text-gray-900">Пользователь</span>
<div className="text-xl font-medium tracking-tight text-gray-900">
                            2500 <span className="text-base text-gray-600 font-normal">USDT</span>
</div>
</div>
<div className="w-full bg-white border border-gray-300 rounded-xl py-5 px-6 flex items-center justify-between hover:border-gray-400 transition-colors cursor-default mb-8">
<span className="text-base font-medium text-gray-900">Пользователь</span>
<div className="text-xl font-medium tracking-tight text-gray-900">
                            2500 <span className="text-base text-gray-600 font-normal">USDT</span>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
