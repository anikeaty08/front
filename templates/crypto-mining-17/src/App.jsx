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
      

<aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col shrink-0 z-20">

<div className="h-32 bg-gray-100 relative mb-14 border-b border-gray-200/50 overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM0YjU1NjMiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-[84px] h-[84px] rounded-full bg-white p-1 shadow-sm border border-gray-100">
<div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<i className="w-8 h-8" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
<div className="text-center mb-6">
<h2 className="text-lg font-medium tracking-tight">Immatra</h2>
</div>

<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center px-3 py-2.5 text-base font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="wallet" strokeWidth="1.5"></i> Счета
            </a>
<a className="flex items-center px-3 py-2.5 text-base font-medium rounded-lg bg-blue-50 text-blue-600" href="#">
<i className="w-5 h-5 mr-3 text-blue-500" data-lucide="cpu" strokeWidth="1.5"></i> Майнинг
            </a>
<a className="flex items-center px-3 py-2.5 text-base font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="flag" strokeWidth="1.5"></i> Гонка
            </a>
<a className="flex items-center px-3 py-2.5 text-base font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<i className="w-5 h-5 mr-3 text-gray-400" data-lucide="graduation-cap" strokeWidth="1.5"></i> Обучение
            </a>
</nav>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0">
<img alt="avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<span className="text-sm font-medium text-gray-600">Пред. правления</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
<div className="flex-1"></div>
<div className="flex items-center gap-4">
<div className="flex items-center rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden h-9">
<div className="px-4 py-1.5 text-sm font-medium text-gray-700 border-r border-gray-200">Эпоха 180</div>
<div className="px-4 py-1.5 text-sm font-medium text-gray-700">17ч 15 мин</div>
</div>
</div>
<div className="flex-1 flex justify-end items-center gap-3">
<button className="px-4 h-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    GPU
                </button>
<div className="flex items-center gap-1">
<button className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="inbox" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="credit-card" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-[1200px] mx-auto space-y-6">

<div className="flex gap-4">
<button className="flex-1 py-3 text-base font-medium rounded-xl bg-blue-600 text-white shadow-sm hover:bg-blue-700 transition-colors">
                        Майнинг
                    </button>
<button className="flex-1 py-3 text-base font-medium rounded-xl border border-gray-200 bg-white text-blue-600 shadow-sm hover:bg-gray-50 transition-colors">
                        Друзья
                    </button>
</div>

<button className="w-full py-4 px-6 flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl shadow-sm text-base text-gray-700 hover:bg-gray-50 transition-colors group">
                    Инструкция
                    <i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm relative">
<i className="absolute top-6 right-6 w-5 h-5 text-gray-400" data-lucide="hexagon" strokeWidth="1.5"></i>
<div className="text-sm font-medium text-gray-500 mb-2 text-center">Ожидает майнинг</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-center">3600 $</div>
<div className="text-xs text-gray-500 mb-8 text-center">Вы участвуете в 198 эпохе</div>
<button className="mt-auto w-full py-2.5 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            Добавить
                        </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm">
<div className="text-sm font-medium text-gray-500 mb-2 text-center">Получено</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">1000 G</div>
<div className="mt-auto space-y-2">
<div className="flex justify-between items-end">
<div>
<div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
<i className="w-3 h-3" data-lucide="unlock" strokeWidth="1.5"></i>
                                        Доступно
                                    </div>
<div className="text-base font-semibold text-gray-900">240</div>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1 text-gray-500 text-xs mb-1">
<i className="w-3 h-3" data-lucide="lock" strokeWidth="1.5"></i>
                                        Vesting
                                    </div>
<div className="text-base font-semibold text-gray-900">10 000</div>
</div>
</div>

<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden flex">
<div className="h-full bg-green-500" style={{width: '25%'}}></div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col shadow-sm">
<div className="text-sm font-medium text-gray-500 mb-2 text-center">Доступно</div>
<div className="text-3xl font-semibold tracking-tight text-gray-900 mb-4 text-center">0 G</div>
<div className="text-xs text-gray-500 mb-8 text-center">Выведено 0 G</div>
<button className="mt-auto w-full py-2.5 bg-blue-600 text-white text-base font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            Вывести
                        </button>
</div>
</div>

<div className="flex justify-between items-end pt-4 pb-2">
<h3 className="text-base font-medium text-gray-900">Контракт</h3>
<div className="flex flex-col items-center gap-1">

<div className="w-8 h-2 bg-blue-500 rounded-b-full"></div>
</div>
<button className="text-base font-medium text-gray-600 hover:text-gray-900">История</button>
</div>

<div className="relative flex items-center group">
<button className="absolute -left-6 z-10 w-8 h-16 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-50">
<i className="w-8 h-8" data-lucide="chevron-left" strokeWidth="1"></i>
</button>
<div className="flex gap-3 overflow-x-auto hide-scrollbar w-full py-1 snap-x">

<div className="shrink-0 w-36 h-24 bg-green-50 border border-green-200/50 rounded-lg p-3 flex flex-col snap-start relative overflow-hidden">
<div className="text-xs text-gray-500">150</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>
<div className="shrink-0 w-36 h-24 bg-green-50 border border-green-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">151</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>
<div className="shrink-0 w-36 h-24 bg-green-50 border border-green-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">152</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>
<div className="shrink-0 w-36 h-24 bg-green-50 border border-green-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">153</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>

<div className="shrink-0 w-36 h-24 bg-white border-2 border-green-500 rounded-lg p-3 flex flex-col snap-start relative shadow-sm">
<div className="text-xs text-gray-500">154</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 bg-green-500 rounded-b-sm"></div>
</div>

<div className="shrink-0 w-36 h-24 bg-amber-50/50 border border-amber-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">155</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">1500 $</div>
</div>
<div className="shrink-0 w-36 h-24 bg-amber-50/50 border border-amber-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">156</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>
<div className="shrink-0 w-36 h-24 bg-amber-50/50 border border-amber-200/50 rounded-lg p-3 flex flex-col snap-start relative">
<div className="text-xs text-gray-500">157</div>
<div className="mt-auto text-base font-medium text-center text-gray-900">2500 $</div>
</div>

<div className="shrink-0 w-36 h-24 bg-white border border-amber-200 rounded-lg flex flex-col snap-start relative overflow-hidden">
<div className="p-3 flex-1 flex flex-col">
<div className="text-xs text-gray-500">158</div>
<div className="mt-auto text-sm font-medium text-center text-gray-900">1700/2500 $</div>
</div>
<div className="h-6 bg-amber-50 flex items-center justify-center text-xs font-medium text-amber-600 border-t border-amber-200">
                                300$
                            </div>
</div>
</div>
<button className="absolute -right-6 z-10 w-8 h-16 flex items-center justify-center text-gray-400 hover:text-gray-600 bg-gray-50">
<i className="w-8 h-8" data-lucide="chevron-right" strokeWidth="1"></i>
</button>
</div>

<div className="space-y-4 pt-4">

<div className="bg-green-50 border border-green-200 rounded-xl px-6 py-4 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4 text-base font-medium text-gray-900">
<span>Эпоха 180</span>
<span className="text-green-300">|</span>
<span>17ч 15 мин</span>
<span className="text-green-300">|</span>
<span>Цена - ?</span>
</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">
                            20 000 $
                        </div>
</div>

<div className="bg-white border border-red-200 rounded-xl px-6 py-4 flex items-center justify-between shadow-sm">
<span className="text-base font-medium text-gray-900">Ваш адрес</span>
<span className="text-base text-gray-500">Не участвует</span>
</div>
</div>

<div className="flex pt-2">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-l-xl text-base placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Поиск" type="text"/>
</div>
<button className="px-8 py-3 bg-gray-50 border border-l-0 border-gray-200 rounded-r-xl text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                        Найти
                    </button>
</div>

<div className="flex items-center justify-center gap-4 py-2">
<div className="h-px bg-gray-200 flex-1 border-t border-dashed"></div>
<span className="text-sm font-medium text-gray-500">300 000</span>
<div className="h-px bg-gray-200 flex-1 border-t border-dashed"></div>
</div>

<div className="space-y-2 pb-12">
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
<span className="text-base font-medium text-gray-700">Пользователь</span>
<span className="text-base font-medium text-gray-900">200 $</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
<span className="text-base font-medium text-gray-700">Пользователь</span>
<span className="text-base font-medium text-gray-900">200 $</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
<span className="text-base font-medium text-gray-700">Пользователь</span>
<span className="text-base font-medium text-gray-900">200 $</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
<span className="text-base font-medium text-gray-700">Пользователь</span>
<span className="text-base font-medium text-gray-900">200 $</span>
</div>
<div className="bg-white border border-gray-200 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
<span className="text-base font-medium text-gray-700">Пользователь</span>
<span className="text-base font-medium text-gray-900">200 $</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
