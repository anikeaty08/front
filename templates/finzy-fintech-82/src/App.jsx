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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    
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
      

<div className="fixed top-0 w-full h-screen -z-10" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '100%', height: '100vh'}}></div>

</div>

<nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-white flex items-center gap-2" href="/">

<svg className="w-8 h-8" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="#111111" r="50"></circle>
<rect fill="none" height="6" stroke="white" strokeWidth="3" width="36" x="32" y="32"></rect>
<path d="M32 46 H68 V52 H38 V68 H32 Z" fill="none" stroke="white" strokeWidth="3"></path>
</svg>
                FINZY
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors" href="/">Главная</a>
<a className="text-sm font-normal text-white border-b border-white pb-1" href="/card">Виртуальная карта</a>
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors" href="/wallet">Кошелек</a>
<a className="text-sm font-normal text-neutral-500 hover:text-white transition-colors" href="/swap">Обмен и торговля</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-neutral-500 hover:text-white transition-colors" href="/help">Центр помощи</a>
<button className="bg-white text-black px-4 py-2 rounded-full text-sm font-normal hover:bg-neutral-200 transition-colors">
                    Открыть Finzy
                </button>
</div>
</div>
</nav>
<main className="">

<section className="lg:pt-48 lg:pb-32 flex flex-col lg:flex-row lg:gap-12 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">
<div className="absolute w-[400px] h-[400px] bg-emerald-500/10 blur-[80px] rounded-full -z-10 pointer-events-none top-10 left-10"></div>

<div className="flex-1 w-full z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-normal text-neutral-300 mb-6">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Виртуальная карта
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                    Платите там, где <br/>
<span className="text-neutral-500">раньше было нельзя</span>
</h1>
<p className="text-lg lg:text-xl text-neutral-400 max-w-lg mb-10 leading-relaxed font-normal">
                    Виртуальная карта, с которой проходят платежи за зарубежные сервисы, подписки, покупки и бронирования путешествий. 
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-base font-normal hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Получить карту
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-6">
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium tracking-tight text-white">98%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Успешных оплат</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-medium tracking-tight text-white">0$</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">За выпуск карты</span>
</div>
</div>
</div>

<div className="flex-1 w-full relative z-10 flex justify-center lg:justify-end mt-16 lg:mt-0">

<div className="absolute -left-6 top-20 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-2xl p-4 rounded-2xl flex items-center gap-4 z-30 animate-[float_5s_ease-in-out_infinite]">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Оплата прошла</div>
<div className="text-xs text-neutral-400">Netflix • $15.49</div>
</div>
</div>

<div className="relative w-[380px] aspect-[1.58] bg-neutral-900 rounded-[24px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-8 flex flex-col justify-between transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-20 group overflow-hidden">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
<div className="flex justify-between items-start z-10">
<div className="w-12 h-9 rounded bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/10 shadow-inner flex items-center justify-center">
<iconify-icon className="text-white/50" icon="solar:sim-card-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:card-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-widest text-neutral-500">FINZY</span>
</div>
</div>
<div className="z-10">
<div className="text-2xl tracking-widest font-mono text-white mb-4 drop-shadow-md">4281 9021 5532 8249</div>
<div className="flex justify-between items-end">
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Valid Thru</span>
<span className="text-base font-mono text-neutral-300">12/26</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">CVC</span>
<span className="text-base font-mono text-neutral-300">***</span>
</div>
</div>
<div className="text-lg font-medium tracking-tight text-white italic">VISA</div>
</div>
</div>
</div>

<div className="absolute right-4 top-8 w-[380px] aspect-[1.58] bg-neutral-950 rounded-[24px] border border-white/5 transform rotate-6 z-10"></div>
</div>
</section>

<section className="py-24 bg-[#030303] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Где работает карта Finzy</h2>
<p className="text-base text-neutral-400 font-normal">Мы создали продукт, который решает конкретные задачи. Карта принимается по всему миру.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Подписки</h3>
<p className="text-sm text-neutral-500 mb-8 flex-1">Оплачивайте ChatGPT Plus, Netflix, Spotify, Adobe и любые другие рабочие или развлекательные сервисы.</p>
<div className="flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">OpenAI</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Netflix</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">+1000 других</span>
</div>
</div>

<div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Онлайн-покупки</h3>
<p className="text-sm text-neutral-500 mb-8 flex-1">Покупайте товары на Amazon, eBay, AliExpress, оплачивайте хостинги и домены за рубежом.</p>
<div className="flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Amazon</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">eBay</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Hetzner</span>
</div>
</div>

<div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:plane-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Путешествия</h3>
<p className="text-sm text-neutral-500 mb-8 flex-1">Бронируйте отели на Booking, оплачивайте авиабилеты и аренду авто без риска отмены платежа.</p>
<div className="flex gap-2">
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Booking</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Airbnb</span>
<span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-400">Авиа</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 w-full">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6">Почему платежи<br/>реально проходят</h2>
<p className="text-base text-neutral-400 mb-8 max-w-md">Мы не просто выпускаем карту, мы настроили внутреннюю логику так, чтобы минимизировать отказы на стороне сервисов.</p>
<div className="flex flex-col gap-6">
<div className="flex gap-4 items-start">
<div className="mt-1">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Стабильные BIN-номера</h4>
<p className="text-sm text-neutral-500">Используем надежные номера банков-эмитентов, которые не блокируются популярными площадками.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1">
<iconify-icon className="text-emerald-500" icon="solar:smartphone-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Поддержка 3D Secure</h4>
<p className="text-sm text-neutral-500">Коды подтверждения приходят прямо в Telegram или Web App. Вы всегда пройдете проверку безопасности.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1">
<iconify-icon className="text-emerald-500" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-white mb-1">Умная конвертация</h4>
<p className="text-sm text-neutral-500">Баланс списывается в нужной валюте автоматически. Вам не нужно вручную менять крипту на фиат перед оплатой.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full flex justify-center lg:justify-end">
<div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 w-full max-w-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-8">
<span className="text-sm text-neutral-400">Статус транзакций</span>
<iconify-icon className="text-neutral-500" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-3">

<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:chat-round-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white">ChatGPT Plus</span>
<span className="text-xs text-neutral-500">Сегодня, 14:20</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm text-white">$20.00</span>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded mt-1">Одобрено</span>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:server-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white">DigitalOcean</span>
<span className="text-xs text-neutral-500">Вчера</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm text-white">$45.00</span>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded mt-1">Одобрено</span>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:ticket-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white">Airbnb</span>
<span className="text-xs text-neutral-500">12 Окт</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm text-white">$420.00</span>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded mt-1">Одобрено</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-y border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-4">Три шага к оплате</h2>
<p className="text-base text-neutral-400">Никаких сложных схем. Всё происходит в одном приложении.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
<div className="flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:wallet-money-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">1. Пополните счет</h3>
<p className="text-sm text-neutral-500 max-w-xs">Переведите USDT или другую криптовалюту на ваш кошелек Finzy.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:transfer-horizontal-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">2. Конвертация</h3>
<p className="text-sm text-neutral-500 max-w-xs">Система сама переведет активы в нужную валюту при оплате, или обменяйте их вручную.</p>
</div>
<div className="flex flex-col items-center text-center relative z-10 group">
<div className="w-24 h-24 rounded-2xl bg-white text-black flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-black" icon="solar:card-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">3. Оплачивайте</h3>
<p className="text-sm text-neutral-500 max-w-xs">Вводите данные карты на сайте сервиса и подтверждайте платеж.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col justify-between h-full hover:border-white/10 transition-colors">
<div className="mb-10">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-4">Прозрачные<br/>комиссии</h3>
<p className="text-base text-neutral-400 max-w-sm mb-8">Никаких скрытых платежей за обслуживание или внезапных списаний. Всё максимально честно.</p>
<div className="flex flex-col gap-4">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-sm text-neutral-400">Выпуск карты</span>
<span className="text-base font-medium text-white">Бесплатно</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-sm text-neutral-400">Абонентская плата</span>
<span className="text-base font-medium text-white">$0 / мес</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-sm text-neutral-400">Комиссия за транзакцию</span>
<span className="text-base font-medium text-white">от 1.5%</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col overflow-hidden relative hover:border-white/10 transition-colors">
<div className="relative z-10">
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-4">Полный контроль</h3>
<p className="text-base text-neutral-400 max-w-sm mb-10">Управляйте настройками безопасности, лимитами и историей в один клик.</p>
</div>

<div className="mt-auto bg-neutral-950/80 backdrop-blur-md rounded-2xl border border-white/5 p-6 shadow-2xl relative z-10">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white" icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Заморозить карту</span>
</div>

<div className="w-12 h-6 bg-neutral-800 rounded-full relative cursor-pointer border border-white/5">
<div className="w-4 h-4 bg-neutral-500 rounded-full absolute left-1 top-1 transition-all"></div>
</div>
</div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5">
<iconify-icon className="text-white" icon="solar:global-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">Онлайн платежи</span>
</div>

<div className="w-12 h-6 bg-emerald-500/20 rounded-full relative cursor-pointer border border-emerald-500/30">
<div className="w-4 h-4 bg-emerald-500 rounded-full absolute right-1 top-1 transition-all shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
<div className="flex flex-col gap-2 pt-6 border-t border-white/5">
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-500">Месячный лимит</span>
<span className="text-white">$5,000</span>
</div>

<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mt-1">
<div className="w-1/3 h-full bg-white rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 mt-1">Использовано $1,240.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2">Часть экосистемы Finzy</h2>
<p className="text-base text-neutral-400">Карта работает в связке с нашими инструментами.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<a className="group block bg-neutral-950 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900 hover:border-white/10 transition-all" href="/wallet">
<div className="flex justify-between items-start mb-16">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Криптокошелек</h3>
<p className="text-sm text-neutral-500">Храните активы в безопасности и пополняйте баланс для будущих оплат.</p>
</a>

<a className="group block bg-neutral-950 border border-white/5 rounded-2xl p-6 hover:bg-neutral-900 hover:border-white/10 transition-all" href="/swap">
<div className="flex justify-between items-start mb-16">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Обмен и торговля</h3>
<p className="text-sm text-neutral-500">Быстро меняйте крипту внутри приложения по актуальным курсам.</p>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex flex-col items-center justify-center text-center px-6 border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-[#030303] to-[#0a0a0a] z-0"></div>
<div className="absolute w-[400px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Готовы платить без границ?</h2>
<p className="text-base text-neutral-400 mb-10">Выпуск виртуальной карты займет пару минут.</p>
<div className="flex justify-center">
<button className="bg-white text-black px-8 py-4 rounded-full text-base font-normal hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Выпустить карту
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-10 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-base font-medium tracking-tight text-neutral-500">
<svg className="w-6 h-6 opacity-50" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="#111111" r="50"></circle>
<rect fill="none" height="6" stroke="currentColor" strokeWidth="3" width="36" x="32" y="32"></rect>
<path d="M32 46 H68 V52 H38 V68 H32 Z" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
                FINZY
            </div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Условия</a>
<a className="hover:text-white transition-colors" href="#">Конфиденциальность</a>
<a className="hover:text-white transition-colors" href="/help">Поддержка</a>
</div>
<div className="text-sm text-neutral-600">© 2023 Finzy. Все права защищены.</div>
</div>
</footer>

    </>
  );
}
