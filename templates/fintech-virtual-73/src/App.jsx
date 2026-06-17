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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<span className="text-xl font-semibold tracking-tighter text-slate-900 uppercase">Wanttopay</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#cards">Карты</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Возможности</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq">База знаний</a>
</div>
<div className="flex items-center space-x-4">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#">Войти</a>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#">
                        Открыть Telegram
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 text-center lg:text-left">
<div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mb-6">
<iconify-icon className="text-blue-500" icon="solar:shield-check-linear"></iconify-icon>
<span>Работает в Telegram</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                        Зарубежные виртуальные карты для сервисов, покупок и поездок
                    </h1>
<p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Оплачивайте подписки, приложения, онлайн-покупки и расходы за границей через Wanttopay в Telegram.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-sm" href="#">
                            Выпустить карту
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm" href="#compare">
                            Сравнить карты
                        </a>
</div>
<div className="flex items-center justify-center lg:justify-start space-x-3 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-slate-50"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-slate-50"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-slate-50"></div>
</div>
<p><span className="font-medium text-slate-900">80 000+</span> пользователей уже используют Wanttopay для международных оплат</p>
</div>
</div>

<div className="lg:col-span-6 mt-16 lg:mt-0 relative">

<div className="relative mx-auto w-full max-w-md aspect-[4/3] lg:aspect-square">

<div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] transform rotate-[-6deg] bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-700 z-20">
<div className="flex justify-between items-center mb-12">
<span className="text-white font-semibold tracking-tighter text-lg">PRO</span>
<iconify-icon className="text-slate-400 text-xl" icon="solar:sim-cards-linear"></iconify-icon>
</div>
<div className="space-y-1">
<p className="text-slate-400 text-xs">Баланс</p>
<p className="text-white text-2xl font-medium tracking-tight">$1,450.00</p>
</div>
<div className="flex justify-between items-end mt-8">
<p className="text-slate-300 text-sm tracking-widest">**** **** **** 4281</p>
<div className="w-8 h-5 bg-white/20 rounded-sm"></div>
</div>
</div>
<div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[85%] transform rotate-[4deg] bg-blue-600 rounded-3xl p-6 shadow-xl border border-blue-500 z-10">
<div className="flex justify-between items-center mb-12">
<span className="text-white font-semibold tracking-tighter text-lg">EASY</span>
<iconify-icon className="text-blue-300 text-xl" icon="solar:sim-cards-linear"></iconify-icon>
</div>
<div className="space-y-1">
<p className="text-blue-200 text-xs">Баланс</p>
<p className="text-white text-2xl font-medium tracking-tight">$240.50</p>
</div>
<div className="flex justify-between items-end mt-8">
<p className="text-blue-100 text-sm tracking-widest">**** **** **** 9012</p>
<div className="w-8 h-5 bg-white/20 rounded-sm"></div>
</div>
</div>

<div className="absolute bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-30 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<iconify-icon className="text-lg" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">ChatGPT Plus</p>
<p className="text-sm font-medium text-slate-900">-$20.00</p>
</div>
</div>
<div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-30 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Пополнение</p>
<p className="text-sm font-medium text-slate-900">+$500.00</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-1.5">Быстрый выпуск</h3>
<p className="text-sm text-slate-500 leading-relaxed">Оформите карту за несколько шагов в Telegram.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-1.5">Пополнение в фиате и крипте</h3>
<p className="text-sm text-slate-500 leading-relaxed">Выберите удобный способ и используйте карту для нужных оплат.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-1.5">Карты под разные задачи</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для разовых покупок, подписок, поездок и активного использования.</p>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-4">
<iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium tracking-tight text-slate-900 mb-1.5">Оплата онлайн и за границей</h3>
<p className="text-sm text-slate-500 leading-relaxed">Сервисы, приложения, бронирования, travel и покупки в офлайне.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Оплачивайте то, чем пользуетесь каждый день</h2>
<p className="text-base text-slate-500">Wanttopay помогает оплачивать зарубежные сервисы, цифровые покупки, приложения и расходы в поездках привычным способом.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/50 hover:bg-slate-100/50 transition-colors">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-5">
<iconify-icon className="text-lg" icon="solar:clapperboard-play-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Подписки и сервисы</h3>
<p className="text-sm text-slate-500">ChatGPT, Claude, Cursor, Zoom, Figma, Midjourney и другие цифровые сервисы.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/50 hover:bg-slate-100/50 transition-colors">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-5">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Онлайн-покупки</h3>
<p className="text-sm text-slate-500">Покупки на иностранных сайтах, в приложениях и на цифровых платформах.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/50 hover:bg-slate-100/50 transition-colors">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-5">
<iconify-icon className="text-lg" icon="solar:plane-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Поездки и travel</h3>
<p className="text-sm text-slate-500">Бронирования, билеты, такси, покупки за границей и другие travel-сценарии.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/50 hover:bg-slate-100/50 transition-colors lg:col-span-2">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-5">
<iconify-icon className="text-lg" icon="solar:gamepad-charge-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">App Store, Google Play, игровые платформы</h3>
<p className="text-sm text-slate-500">Приложения, игры, подписки и цифровые покупки.</p>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100/50 hover:bg-slate-100/50 transition-colors">
<div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-700 mb-5">
<iconify-icon className="text-lg" icon="solar:gift-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-2">Подарочные карты</h3>
<p className="text-sm text-slate-500">Apple, PlayStation, Steam, Google Play, Nintendo и другие платформы.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Всё для оплат — в одном mini app</h2>
<p className="text-base text-slate-400 mb-10">Wanttopay работает внутри Telegram. Не нужно скачивать отдельное приложение и разбираться в сложной банковской системе.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="solar:card-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">Карты под разные задачи</h3>
<p className="text-sm text-slate-400">Можно использовать отдельные карты для подписок, покупок, поездок и других расходов.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">Удобное пополнение</h3>
<p className="text-sm text-slate-400">Пополняйте баланс в фиате или криптовалюте — как вам удобнее.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="solar:widget-3-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">Прозрачное управление</h3>
<p className="text-sm text-slate-400">Карты, баланс, история операций и поддержка — в одном месте.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-300 text-sm" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-white mb-1">Меньше риска для основной карты</h3>
<p className="text-sm text-slate-400">Не нужно привязывать основную банковскую карту ко всем сервисам подряд.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[320px] mx-auto lg:ml-auto">
<div className="aspect-[9/19] rounded-[2.5rem] border-[8px] border-slate-800 bg-slate-950 p-4 relative overflow-hidden flex flex-col">

<div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:arrow-left-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-tight">Wanttopay</span>
</div>
<iconify-icon className="text-slate-400 text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</div>

<div className="flex-1 flex flex-col gap-3">
<div className="bg-slate-800 rounded-2xl p-4">
<p className="text-xs text-slate-400 mb-1">Внутренний баланс</p>
<p className="text-xl font-semibold text-white tracking-tight">$1,450.00</p>
<div className="flex gap-2 mt-4">
<div className="flex-1 bg-blue-600 text-center py-2 rounded-xl text-xs text-white font-medium">Пополнить</div>
<div className="flex-1 bg-slate-700 text-center py-2 rounded-xl text-xs text-white font-medium">Вывести</div>
</div>
</div>
<p className="text-xs font-medium text-slate-400 mt-2 px-1">Мои карты</p>
<div className="bg-blue-600 rounded-xl p-4 h-24 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between text-white relative z-10">
<span className="text-xs font-medium">EASY</span>
<span className="text-xs">**** 9012</span>
</div>
</div>
<div className="bg-slate-800 rounded-xl p-4 h-24 flex items-center justify-center border border-slate-700 border-dashed">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-xs font-medium">Выпустить новую</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="cards">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Выберите карту под свой сценарий</h2>
<p className="text-base text-slate-500">В линейке Wanttopay есть карты для разовых оплат, подписок, поездок и более широкого использования.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="w-full aspect-[1.58/1] rounded-xl bg-slate-100 border border-slate-200 p-4 mb-6 flex flex-col justify-between relative overflow-hidden">
<div className="flex justify-between items-center relative z-10 text-slate-900">
<span className="font-semibold tracking-tight">PREPAID</span>
</div>
<div className="relative z-10">
<p className="text-slate-400 text-[10px] tracking-widest uppercase">Fixed value</p>
</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Prepaid</h3>
<p className="text-sm font-medium text-slate-500 mb-3">Для разовой оплаты</p>
<p className="text-sm text-slate-600 mb-6">Предоплаченная карта с фиксированным номиналом для конкретной покупки, подписки или сервиса.</p>
<div className="space-y-2 mb-8">
<p className="text-xs font-medium text-slate-900">Подходит для:</p>
<ul className="text-sm text-slate-500 space-y-1.5">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-linear"></iconify-icon>разовой онлайн-оплаты</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-linear"></iconify-icon>покупки конкретного сервиса</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-linear"></iconify-icon>фиксированного бюджета</li>
</ul>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors" href="#">
                        Оформить Prepaid
                    </a>
</div>

<div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md shadow-blue-50 relative flex flex-col h-full">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 text-[10px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-blue-200">
                        Популярная
                    </div>
<div className="w-full aspect-[1.58/1] rounded-xl bg-blue-600 p-4 mb-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
<div className="flex justify-between items-center relative z-10 text-white">
<span className="font-semibold tracking-tight">EASY</span>
</div>
<div className="relative z-10">
<p className="text-blue-200 text-[10px] tracking-widest uppercase">Reloadable</p>
</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Easy</h3>
<p className="text-sm font-medium text-blue-600 mb-3">Для подписок и сервисов</p>
<p className="text-sm text-slate-600 mb-6">Карта с пополняемым балансом для регулярных списаний и повседневных онлайн-платежей.</p>
<div className="space-y-2 mb-8">
<p className="text-xs font-medium text-slate-900">Подходит для:</p>
<ul className="text-sm text-slate-500 space-y-1.5">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-300" icon="solar:check-circle-linear"></iconify-icon>подписок</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-300" icon="solar:check-circle-linear"></iconify-icon>AI-сервисов</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-300" icon="solar:check-circle-linear"></iconify-icon>рабочих инструментов</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-300" icon="solar:check-circle-linear"></iconify-icon>регулярных оплат</li>
</ul>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm" href="#">
                        Оформить Easy
                    </a>
</div>

<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="w-full aspect-[1.58/1] rounded-xl bg-teal-800 p-4 mb-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
<div className="flex justify-between items-center relative z-10 text-white">
<span className="font-semibold tracking-tight">SMART</span>
<iconify-icon className="text-teal-400" icon="solar:wifi-router-linear"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-teal-200 text-[10px] tracking-widest uppercase">Apple Pay</p>
</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Smart</h3>
<p className="text-sm font-medium text-teal-700 mb-3">Для поездок и оплаты за границей</p>
<p className="text-sm text-slate-600 mb-6">Карта для travel-сценариев, бронирований и офлайн-оплаты через Apple Pay / Google Pay.</p>
<div className="space-y-2 mb-8">
<p className="text-xs font-medium text-slate-900">Подходит для:</p>
<ul className="text-sm text-slate-500 space-y-1.5">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-300" icon="solar:check-circle-linear"></iconify-icon>поездок</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-300" icon="solar:check-circle-linear"></iconify-icon>travel-сервисов</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-300" icon="solar:check-circle-linear"></iconify-icon>офлайн-оплаты</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-300" icon="solar:check-circle-linear"></iconify-icon>онлайн и офлайн</li>
</ul>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors" href="#">
                        Оформить Smart
                    </a>
</div>

<div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="w-full aspect-[1.58/1] rounded-xl bg-slate-900 p-4 mb-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-slate-800/50"></div>
<div className="flex justify-between items-center relative z-10 text-white">
<span className="font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">PRO</span>
</div>
<div className="relative z-10">
<p className="text-slate-400 text-[10px] tracking-widest uppercase">Premium limits</p>
</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Pro</h3>
<p className="text-sm font-medium text-slate-700 mb-3">Для максимума возможностей</p>
<p className="text-sm text-slate-600 mb-6">Самая функциональная карта в линейке Wanttopay для активного использования и широкого набора сценариев.</p>
<div className="space-y-2 mb-8">
<p className="text-xs font-medium text-slate-900">Подходит для:</p>
<ul className="text-sm text-slate-500 space-y-1.5">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>активных пользователей</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>высоких лимитов</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>travel и онлайн-оплат</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>широкого набора задач</li>
</ul>
</div>
</div>
<a className="block w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors" href="#">
                        Оформить Pro
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-200/60" id="compare">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Сравните карты Wanttopay</h2>
<p className="text-sm text-slate-500">Выберите вариант, который подходит именно вам: для одной покупки, подписок, поездок или более активного использования.</p>
</div>
<div className="w-full overflow-x-auto no-scrollbar pb-6">
<table className="w-full text-left min-w-[800px] border-collapse">
<thead>
<tr className="border-b border-slate-200">
<th className="py-4 px-4 font-medium text-sm text-slate-900 w-1/5">Параметр</th>
<th className="py-4 px-4 font-medium text-sm text-slate-900 w-1/5 bg-slate-50 rounded-tl-xl">Prepaid</th>
<th className="py-4 px-4 font-medium text-sm text-blue-600 w-1/5 bg-blue-50/50 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 text-[9px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border border-blue-200 whitespace-nowrap">Choice</div>
                                Easy
                            </th>
<th className="py-4 px-4 font-medium text-sm text-slate-900 w-1/5 bg-slate-50">Smart</th>
<th className="py-4 px-4 font-medium text-sm text-slate-900 w-1/5 bg-slate-50 rounded-tr-xl">Pro</th>
</tr>
</thead>
<tbody className="text-sm text-slate-600">
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Лучший сценарий</td>
<td className="py-4 px-4 bg-slate-50/50">Разовая оплата</td>
<td className="py-4 px-4 bg-blue-50/30">Подписки и сервисы</td>
<td className="py-4 px-4 bg-slate-50/50">Онлайн + поездки</td>
<td className="py-4 px-4 bg-slate-50/50">Максимум сценариев</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Формат</td>
<td className="py-4 px-4 bg-slate-50/50">Предоплаченная</td>
<td className="py-4 px-4 bg-blue-50/30">Пополняемая</td>
<td className="py-4 px-4 bg-slate-50/50">Пополняемая</td>
<td className="py-4 px-4 bg-slate-50/50">Пополняемая</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Баланс</td>
<td className="py-4 px-4 bg-slate-50/50">Фиксированный</td>
<td className="py-4 px-4 bg-blue-50/30">Пополняемый</td>
<td className="py-4 px-4 bg-slate-50/50">Пополняемый</td>
<td className="py-4 px-4 bg-slate-50/50">Пополняемый</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Подписки и сервисы</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
<td className="py-4 px-4 bg-blue-50/30 font-medium text-slate-900">Да</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Онлайн-покупки</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
<td className="py-4 px-4 bg-blue-50/30 font-medium text-slate-900">Да</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
<td className="py-4 px-4 bg-slate-50/50">Да</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Travel и бронирования</td>
<td className="py-4 px-4 bg-slate-50/50 text-slate-400">Ограниченно</td>
<td className="py-4 px-4 bg-blue-50/30 text-slate-500">Ограниченно</td>
<td className="py-4 px-4 bg-slate-50/50 font-medium text-slate-900">Да</td>
<td className="py-4 px-4 bg-slate-50/50 font-medium text-slate-900">Да</td>
</tr>
<tr className="border-b border-slate-100">
<td className="py-4 px-4 text-slate-500">Офлайн-оплата</td>
<td className="py-4 px-4 bg-slate-50/50 text-slate-300">—</td>
<td className="py-4 px-4 bg-blue-50/30 text-slate-300">—</td>
<td className="py-4 px-4 bg-slate-50/50 font-medium text-slate-900">Да</td>
<td className="py-4 px-4 bg-slate-50/50 font-medium text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-4 text-slate-500">Apple Pay / Google Pay</td>
<td className="py-4 px-4 bg-slate-50/50 rounded-bl-xl text-slate-300">—</td>
<td className="py-4 px-4 bg-blue-50/30 text-slate-300">—</td>
<td className="py-4 px-4 bg-slate-50/50 font-medium text-slate-900">Да</td>
<td className="py-4 px-4 bg-slate-50/50 rounded-br-xl font-medium text-slate-900">Да</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
<span>Сравнить подробнее</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Подарочные карты для популярных платформ</h2>
<p className="text-base text-slate-500">Если вам нужен быстрый способ оплатить конкретную платформу, выбирайте gift cards.</p>
</div>
<a className="shrink-0 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm" href="#">
                    Выбрать gift card
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 mb-3 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:apple-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Apple</h3>
<p className="text-[10px] text-slate-500 leading-tight">App Store, ID, подписки</p>
</div>
<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 mb-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:gamepad-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">PlayStation</h3>
<p className="text-[10px] text-slate-500 leading-tight">Игры и подписки</p>
</div>
<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white mb-3 group-hover:bg-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:monitor-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Steam</h3>
<p className="text-[10px] text-slate-500 leading-tight">Пополнение баланса</p>
</div>
<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-3 group-hover:bg-green-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Google Play</h3>
<p className="text-[10px] text-slate-500 leading-tight">Приложения, игры</p>
</div>
<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600 mb-3 group-hover:bg-red-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:gamepad-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Nintendo</h3>
<p className="text-[10px] text-slate-500 leading-tight">eShop контент</p>
</div>
<div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-col items-center text-center hover:border-slate-300 transition-colors group cursor-pointer shadow-sm">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 mb-3 group-hover:bg-slate-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:infinity-linear"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-slate-900 mb-1">Другие</h3>
<p className="text-[10px] text-slate-500 leading-tight">Roblox, Razer Gold и др.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Не знаете, какую карту выбрать?</h2>
<p className="text-sm text-slate-600 mb-8">Ориентируйтесь на то, как вы хотите использовать карту.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
<span className="text-sm text-slate-600">Для одной конкретной оплаты</span>
<span className="text-sm font-medium text-slate-900">Prepaid</span>
</div>
<div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
<span className="text-sm text-slate-600">Для постоянных подписок и сервисов</span>
<span className="text-sm font-medium text-blue-600">Easy</span>
</div>
<div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
<span className="text-sm text-slate-600">Для поездок и офлайн-оплаты</span>
<span className="text-sm font-medium text-slate-900">Smart</span>
</div>
<div className="flex items-center justify-between border-b border-slate-200/60 pb-4">
<span className="text-sm text-slate-600">Для более активного использования</span>
<span className="text-sm font-medium text-slate-900">Pro</span>
</div>
<div className="flex items-center justify-between pb-2">
<span className="text-sm text-slate-600">Для конкретной платформы</span>
<span className="text-sm font-medium text-slate-900">Gift Card</span>
</div>
</div>
<div className="bg-blue-50/50 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-blue-100/50">
<div>
<p className="text-sm font-medium text-slate-900">Нужна помощь с выбором?</p>
<p className="text-xs text-slate-500 mt-1">Сравните карты или напишите в поддержку — поможем подобрать подходящий вариант.</p>
</div>
<a className="shrink-0 text-xs font-medium text-blue-600 hover:text-blue-700 bg-white px-3 py-2 rounded-lg shadow-sm border border-slate-100" href="#">
                    Написать в поддержку
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 lg:sticky lg:top-24">Оформите карту за несколько шагов</h2>
<a className="mt-8 hidden lg:inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors lg:sticky lg:top-48" href="#">
                        Открыть Wanttopay
                    </a>
</div>
<div className="lg:col-span-3 space-y-10 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100 hidden sm:block"></div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 shrink-0 relative z-10 shadow-sm">1</div>
<div className="pt-2">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1.5">Откройте Wanttopay в Telegram</h3>
<p className="text-sm text-slate-500">Вход в сервис — через mini app.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 shrink-0 relative z-10 shadow-sm">2</div>
<div className="pt-2">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1.5">Пройдите верификацию</h3>
<p className="text-sm text-slate-500">Подтвердите личность, чтобы получить доступ к выпуску карт.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 shrink-0 relative z-10 shadow-sm">3</div>
<div className="pt-2">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1.5">Выберите карту</h3>
<p className="text-sm text-slate-500">Под разовую оплату, подписки, поездки или более широкий сценарий.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-900 shrink-0 relative z-10 shadow-sm">4</div>
<div className="pt-2">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1.5">Пополните баланс</h3>
<p className="text-sm text-slate-500">Используйте удобный способ пополнения в фиате или криптовалюте.</p>
</div>
</div>

<div className="relative flex gap-6">
<div className="w-10 h-10 rounded-full bg-blue-600 border border-blue-600 flex items-center justify-center text-sm font-medium text-white shrink-0 relative z-10 shadow-sm">5</div>
<div className="pt-2">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-1.5">Оплачивайте нужные сервисы и покупки</h3>
<p className="text-sm text-slate-500">После выпуска и пополнения карта готова к использованию.</p>
</div>
</div>
<a className="inline-flex lg:hidden mt-4 items-center justify-center px-6 py-3 w-full text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#">
                        Открыть Wanttopay
                    </a>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Верификация — часть безопасного доступа к картам</h2>
<p className="text-sm text-slate-500 mb-4">KYC нужен для подтверждения личности, защиты аккаунта и корректной работы платёжной инфраструктуры. Проверка проходит через Sumsub и занимает всего несколько минут.</p>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon>Подтверждение личности</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon>Защита аккаунта и операций</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon>Надёжная инфраструктура</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-read-linear"></iconify-icon>Только необходимые данные</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Внутренний баланс для удобного управления средствами</h2>
<p className="text-sm text-slate-500 mb-4">Храните средства на внутреннем балансе и пополняйте карту тогда, когда она нужна для конкретной покупки, подписки или поездки.</p>
<p className="text-sm font-medium text-slate-900 mb-2">Так удобнее:</p>
<ul className="text-sm text-slate-600 space-y-2 mb-6">
<li className="flex items-start gap-2"><span className="block w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>распределять деньги между картами;</li>
<li className="flex items-start gap-2"><span className="block w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>не держать лишние суммы на карте;</li>
<li className="flex items-start gap-2"><span className="block w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>быстрее пополнять нужный инструмент.</li>
</ul>
</div>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                        Узнать больше о внутреннем балансе <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Почему выбирают Wanttopay</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">3+ лет</p>
<p className="text-sm font-medium text-slate-900 mb-1">на рынке</p>
<p className="text-sm text-slate-500">Сервис развивается как устойчивый продукт для цифровых платежей.</p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">1 000 000+</p>
<p className="text-sm font-medium text-slate-900 mb-1">пользователей</p>
<p className="text-sm text-slate-500">Wanttopay уже использовали для подписок, сервисов, поездок и других сценариев.</p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Mini app</p>
<p className="text-sm font-medium text-slate-900 mb-1">Функциональный сервис</p>
<p className="text-sm text-slate-500">Карты, баланс, пополнение, история, gift cards и поддержка — в одном месте.</p>
</div>
<div>
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-3">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">Понятный сценарий</p>
<p className="text-sm text-slate-500">Не одна карта на всё, а удобные инструменты под разные задачи.</p>
</div>
<div>
<div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-700 flex items-center justify-center mb-3">
<iconify-icon className="text-xl" icon="solar:headphones-round-sound-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">Поддержка по делу</p>
<p className="text-sm text-slate-500">Если возникают вопросы по оплате, команда помогает разобраться.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Отзывы пользователей Wanttopay</h2>
<a className="shrink-0 inline-flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span>Смотреть на Trustpilot</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">«С помощью Wanttopay получилось оплатить нужный сервис без лишней сложности. Поддержка быстро подсказала, как всё сделать правильно.»</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">«Нужна была карта для поездки и оплаты за границей. Удобно, что сервис подходит не только для подписок, но и для travel-сценариев.»</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">«Если что-то не получается с первого раза, команда объясняет спокойно и по делу.»</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex text-emerald-500 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">«Понравилось, что всё работает внутри Telegram и не нужно разбираться в отдельном приложении.»</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Инструкции по популярным сценариям</h2>
<a className="shrink-0 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    Открыть базу знаний →
                </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Как оплатить ChatGPT</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Как оплатить Google Play</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Как выбрать карту Wanttopay</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Что такое биллинг-адрес</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Как работает KYC</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-colors" href="#">
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Что делать, если платёж не проходит</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="bg-blue-600 rounded-[2rem] px-6 py-16 md:py-20 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Выберите карту Wanttopay под свой сценарий</h2>
<p className="text-blue-100 text-base mb-10">Подписки, сервисы, покупки, поездки и gift cards — в одном сервисе внутри Telegram.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-blue-900 bg-white rounded-full hover:bg-slate-50 transition-colors shadow-sm" href="#">
                        Выпустить карту
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-blue-700 border border-blue-500 rounded-full hover:bg-blue-800 transition-colors" href="#compare">
                        Сравнить карты
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 mt-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center">
<span className="text-lg font-semibold tracking-tighter text-slate-900 uppercase">Wanttopay</span>
</div>
<div className="flex space-x-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Условия</a>
<a className="hover:text-slate-900 transition-colors" href="#">Конфиденциальность</a>
<a className="hover:text-slate-900 transition-colors" href="#">Поддержка</a>
</div>
<p className="text-xs text-slate-400">© 2024 Wanttopay. Все права защищены.</p>
</div>
</footer>

    </>
  );
}
