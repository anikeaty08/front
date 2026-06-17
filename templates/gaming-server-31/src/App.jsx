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
      

<div className="absolute inset-0 -z-10 h-full w-full glow-bg pointer-events-none"></div>

<header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2" href="#">
<span className="text-lg font-medium tracking-tighter text-zinc-50">ATLANTIC</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-zinc-400 transition-colors hover:text-zinc-50" href="#">Главная</a>
<a className="text-zinc-400 transition-colors hover:text-zinc-50" href="#features">О сервере</a>
<a className="text-zinc-400 transition-colors hover:text-zinc-50" href="#">Форум</a>
<a className="text-zinc-400 transition-colors hover:text-zinc-50" href="#">Статистика</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-zinc-300 transition-colors hover:text-zinc-50 sm:block" href="#">Войти</a>
<a className="inline-flex h-8 items-center justify-center rounded-md bg-zinc-50 px-4 text-xs font-medium text-zinc-950 transition-colors hover:bg-zinc-200" href="#">
                    Регистрация
                </a>
</div>
</div>
</header>

<main className="flex-1">

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
<div className="mx-auto max-w-6xl px-6 text-center">
<div className="mb-8 flex justify-center">
<div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-xs text-zinc-400 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                        Открытие сервера состоится 25 Октября в 20:00 GMT+3
                    </div>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tighter text-zinc-50 sm:text-6xl md:text-7xl">
                    Возрождение легенды на <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-zinc-50">ATLANTIC x100</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-base md:text-lg tracking-tight text-zinc-400">
                    Идеальный баланс классических хроник High Five с продуманными рейтами. Стабильная экономика, защита от ботов и активное комьюнити.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-zinc-50 px-8 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200" href="#">
<iconify-icon className="text-lg" icon="solar:gamepad-linear"></iconify-icon>
                        Начать игру
                    </a>
<a className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-8 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-zinc-50" href="#">
<iconify-icon className="text-lg" icon="solar:download-linear"></iconify-icon>
                        Скачать файлы
                    </a>
</div>
</div>
</section>

<section className="border-y border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm">
<div className="mx-auto max-w-6xl px-6 py-6">
<div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-zinc-800/50 text-center">
<div className="flex flex-col items-center justify-center gap-1">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Хроники</span>
<span className="text-base font-medium text-zinc-200 tracking-tight">High Five 5</span>
</div>
<div className="flex flex-col items-center justify-center gap-1">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Рейты</span>
<span className="text-base font-medium text-zinc-200 tracking-tight">x100</span>
</div>
<div className="flex flex-col items-center justify-center gap-1">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Онлайн</span>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-base font-medium text-zinc-200 tracking-tight">4,281</span>
</div>
</div>
<div className="flex flex-col items-center justify-center gap-1">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Аптайм</span>
<span className="text-base font-medium text-zinc-200 tracking-tight">99.9%</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12 md:text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 sm:text-4xl">Особенности сервера</h2>
<p className="mt-4 text-base text-zinc-400">Всё, что нужно для комфортной игры, без изменения оригинальных механик.</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-colors hover:bg-zinc-900/50 hover:border-zinc-700">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon className="text-xl" icon="solar:sort-by-time-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-zinc-200 tracking-tight">Базовые рейты</h3>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex items-center justify-between border-b border-zinc-800/50 pb-2"><span>EXP / SP</span> <span className="text-zinc-300">x100</span></li>
<li className="flex items-center justify-between border-b border-zinc-800/50 pb-2"><span>Adena</span> <span className="text-zinc-300">x50</span></li>
<li className="flex items-center justify-between border-b border-zinc-800/50 pb-2"><span>Drop / Spoil</span> <span className="text-zinc-300">x15 / x15</span></li>
<li className="flex items-center justify-between pt-1"><span>Raid Boss</span> <span className="text-zinc-300">x5</span></li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-colors hover:bg-zinc-900/50 hover:border-zinc-700">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-zinc-200 tracking-tight">Игровой процесс</h3>
<p className="text-sm text-zinc-400 mb-4">Автоматический лут, расширенный инвентарь и удобный интерфейс.</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Баффер с профилями (2 часа)</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Саб-класс без квеста</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Оффлайн торговля</span>
</li>
</ul>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-colors hover:bg-zinc-900/50 hover:border-zinc-700 sm:col-span-2 lg:col-span-1">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-zinc-200 tracking-tight">Инфраструктура</h3>
<p className="text-sm text-zinc-400 mb-4">Мощное оборудование гарантирует игру без задержек и защиту от любых атак.</p>
<div className="rounded-lg border border-zinc-800/80 bg-zinc-950/50 p-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Защита от DDoS</span>
<span className="text-xs text-emerald-400">Активна</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full w-full"></div>
</div>
<div className="flex items-center justify-between mt-3">
<span className="text-xs text-zinc-500">Пинг (Европа)</span>
<span className="text-xs text-zinc-300">~15ms</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-800/50 py-24">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-zinc-50">Готовы покорить мир Адена?</h2>
<p className="mt-4 text-base text-zinc-400">Присоединяйтесь к тысячам игроков прямо сейчас. Регистрация займет меньше минуты.</p>
<div className="mt-8">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200" href="#">
                        Создать аккаунт
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-10">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-base font-medium tracking-tighter text-zinc-300">ATLANTIC</span>
<span className="text-xs text-zinc-600">© 2023. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-xs text-zinc-500">
<a className="transition-colors hover:text-zinc-300" href="#">Правила сервера</a>
<a className="transition-colors hover:text-zinc-300" href="#">Поддержка</a>
<a className="transition-colors hover:text-zinc-300" href="#">Пользовательское соглашение</a>
</div>
<div className="flex items-center gap-4">
<a className="text-zinc-500 transition-colors hover:text-zinc-300" href="#">
<span className="sr-only">Discord</span>
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
