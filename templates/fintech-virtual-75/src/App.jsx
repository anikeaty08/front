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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-blue-600" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-slate-900">wanttopay</span>
</div>
<div className="hidden md:block">
<div className="flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#cards">Виртуальные карты</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#benefits">Преимущества</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#how-it-works">Как это работает</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" href="#">
                        Выпустить карту
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40 bg-white">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                        Виртуальные карты Wanttopay для зарубежных оплат
                    </h1>
<p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed">
                        Оплачивайте подписки, сервисы, цифровые покупки и расходы в путешествиях через мини-приложение в Telegram.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow" href="#">
                            Выпустить карту
                        </a>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3.5 text-lg font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300" href="#tariffs">
                            Посмотреть карты
                        </a>
</div>
<div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-medium text-blue-700">А</div>
<div className="h-8 w-8 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center text-xs font-medium text-emerald-700">М</div>
<div className="h-8 w-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-700">Е</div>
<div className="h-8 w-8 rounded-full bg-amber-100 border-2 border-white flex items-center justify-center text-xs font-medium text-amber-700">И</div>
</div>
<p className="text-sm font-medium text-slate-500">
<span className="text-slate-900 font-semibold">80 000+</span> пользователей уже используют Wanttopay для международных оплат
                        </p>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700">Выпуск карты через Telegram</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700">Пополнение в фиате и криптовалюте</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-xl text-blue-600" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-slate-700">Поддержка по вопросам оплаты и выпуска</span>
</li>
</ul>
</div>

<div className="relative lg:ml-auto w-full max-w-lg hidden sm:block">
<div className="relative w-full aspect-[4/3]">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-3xl transform rotate-3 scale-105 border border-slate-100/50"></div>

<div className="absolute top-10 right-10 w-64 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl transform rotate-12 transition-transform hover:rotate-6 duration-500 border border-blue-400/30 p-5 flex flex-col justify-between overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start text-white">
<iconify-icon className="text-2xl text-blue-100" icon="solar:card-send-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-blue-100 uppercase">Prepaid</span>
</div>
<div>
<div className="text-blue-100 text-sm tracking-[0.2em] mb-1">•••• •••• •••• 4289</div>
<div className="flex justify-between items-end">
<span className="text-white font-medium">Wanttopay</span>
<iconify-icon className="text-3xl text-white/80" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-24 left-4 w-72 h-44 bg-white rounded-2xl shadow-2xl transform -rotate-6 transition-transform hover:rotate-0 duration-500 border border-slate-200 p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
<iconify-icon className="text-base text-white ml-0.5" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold tracking-tight">Mini App</span>
</div>
<div className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded-md">Smart</div>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-4 bg-slate-200 rounded-sm"></div>
<div className="text-slate-400 text-sm tracking-[0.2em]">•••• 1034</div>
</div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">$240.00</div>
</div>
</div>

<div className="absolute -bottom-6 left-20 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center border border-slate-100">
<iconify-icon className="text-xl text-slate-600" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Airbnb</div>
<div className="text-xs text-slate-500">Travel</div>
</div>
<div className="ml-4 text-sm font-medium text-slate-900">-$120</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" id="usecases">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Один сервис — разные сценарии оплаты
                </h2>
<p className="text-lg text-slate-600">
                    С Wanttopay можно оплачивать зарубежные сервисы и подписки, цифровые продукты, бронирования в поездках, покупки в приложениях и подарочные карты популярных платформ.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Подписки и сервисы</h3>
<p className="text-lg text-slate-600">ChatGPT, Figma, Midjourney, Zoom, Claude, Manychat и другие цифровые сервисы</p>
</div>

<div className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:routing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Путешествия</h3>
<p className="text-lg text-slate-600">Booking, Airbnb, Uber, Trip.com и другие travel-сценарии</p>
</div>

<div className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Цифровые покупки</h3>
<p className="text-lg text-slate-600">Приложения, подписки, маркетплейсы, развлекательные и игровые платформы</p>
</div>

<div className="group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
<iconify-icon className="text-2xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Подарочные карты</h3>
<p className="text-lg text-slate-600">Apple, PlayStation и другие готовые варианты для покупки цифрового номинала</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="benefits">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Почему пользователи выбирают Wanttopay
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Всё работает через Telegram</h3>
<p className="text-lg text-slate-600">Не нужно скачивать отдельное приложение — выпуск, пополнение и управление картой доступны в мини-приложении.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Быстрый выпуск</h3>
<p className="text-lg text-slate-600">Оформление занимает всего несколько шагов. После верификации карту можно использовать для онлайн-оплат.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Пополнение в удобном формате</h3>
<p className="text-lg text-slate-600">Баланс карты можно пополнить фиатом или криптовалютой — в зависимости от доступного способа.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Поддержка международных оплат</h3>
<p className="text-lg text-slate-600">Wanttopay помогает оплачивать популярные зарубежные сервисы, подписки и онлайн-покупки.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Контроль операций</h3>
<p className="text-lg text-slate-600">Управляйте балансом, следите за расходами и проверяйте статус операций в одном интерфейсе.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Поддержка сервиса</h3>
<p className="text-lg text-slate-600">Если возникают вопросы по выпуску, пополнению или оплате, служба поддержки помогает разобраться по шагам.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 overflow-hidden border-y border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="mx-auto w-full max-w-[320px] relative">
<div className="relative rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
<div className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
<div className="bg-slate-100 px-4 pt-12 pb-3 border-b border-slate-200 flex items-center justify-between">
<div className="text-blue-500 font-medium text-sm">Cancel</div>
<div className="font-medium text-slate-900">Wanttopay App</div>
<div className="text-blue-500 font-medium text-sm"><iconify-icon className="text-xl" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="flex-1 bg-slate-50 p-5 flex flex-col gap-4">
<div className="w-full h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 flex flex-col justify-between text-white shadow-md">
<div className="flex justify-between">
<span className="text-xs opacity-80 uppercase tracking-wider">Virtual Card</span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight">$ 124.50</div>
<div className="text-xs opacity-80 mt-1 tracking-widest">•••• 4289</div>
</div>
</div>
<div className="grid grid-cols-4 gap-2">
<div className="flex flex-col items-center gap-1"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700"><iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon></div><span className="text-[10px] text-slate-500 font-medium">Top up</span></div>
<div className="flex flex-col items-center gap-1"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700"><iconify-icon className="text-xl" icon="solar:transfer-horizontal-linear" strokeWidth="1.5"></iconify-icon></div><span className="text-[10px] text-slate-500 font-medium">Transfer</span></div>
<div className="flex flex-col items-center gap-1"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700"><iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon></div><span className="text-[10px] text-slate-500 font-medium">History</span></div>
<div className="flex flex-col items-center gap-1"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700"><iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon></div><span className="text-[10px] text-slate-500 font-medium">Settings</span></div>
</div>
<div className="bg-white rounded-xl p-4 shadow-sm mt-2">
<div className="text-sm font-medium text-slate-900 mb-3">Recent Transactions</div>
<div className="space-y-3">
<div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><iconify-icon className="text-base text-slate-600" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon></div><div className="text-sm font-medium text-slate-700">Netflix</div></div><div className="text-sm font-medium text-slate-900">-$15.99</div></div>
<div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center"><iconify-icon className="text-base text-slate-600" icon="solar:music-note-linear" strokeWidth="1.5"></iconify-icon></div><div className="text-sm font-medium text-slate-700">Spotify</div></div><div className="text-sm font-medium text-slate-900">-$9.99</div></div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Чтобы оформить виртуальную карту, вам нужен только Telegram
                    </h2>
<p className="text-lg text-slate-600 mb-10">
                        Wanttopay работает как мини-приложение внутри Telegram. Вы заходите в сервис, проходите верификацию, выбираете карту, пополняете баланс и оплачиваете нужные сервисы — без установки отдельного банковского приложения.
                    </p>
<div className="space-y-5">
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900">Выпуск карты через Telegram</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900">Понятный интерфейс</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900">История операций и управление картой</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-600">
<iconify-icon className="text-xl" icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium text-slate-900">Поддержка в одном месте</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="tariffs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Выберите карту под свой сценарий
                </h2>
<p className="text-lg text-slate-600">
                    В линейке Wanttopay есть карты для разовых покупок, регулярных онлайн-оплат, поездок и более широкого международного использования.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

<div className="flex flex-col bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm relative">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Prepaid</h3>
<div className="mt-2 flex flex-col items-start gap-1">
<span className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">от 10$ до 200$</span>
</div>
</div>
<p className="text-base text-slate-600 mb-8 min-h-[100px]">
                        Предоплаченная карта с фиксированным номиналом для разовых онлайн-покупок и оплаты отдельных зарубежных сервисов.
                    </p>
<ul className="space-y-4 flex-1 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Фиксированный баланс</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Подходит для разовых сценариев</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Международные онлайн-платежи</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Контроль расходов</span>
</li>
</ul>
<a className="block w-full rounded-xl bg-white px-4 py-3 text-center text-base font-medium text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 mt-auto" href="#">
                        Узнать подробнее
                    </a>
</div>

<div className="flex flex-col bg-white rounded-3xl p-6 lg:p-8 border-2 border-blue-600 shadow-md relative">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full tracking-wide whitespace-nowrap">
                        ПОПУЛЯРНЫЙ ВЫБОР
                    </div>
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Easy</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">990 ₽</span>
</div>
</div>
<p className="text-base text-slate-600 mb-8 min-h-[100px]">
                        Карта с пополняемым балансом для регулярных онлайн-оплат, подписок и цифровых сервисов.
                    </p>
<ul className="space-y-4 flex-1 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Пополняемый баланс</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Международные платежи</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Контроль операций</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Подходит для регулярных онлайн-сценариев</span>
</li>
</ul>
<a className="block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-base font-medium text-white hover:bg-blue-700 transition-colors shadow-sm mt-auto" href="#">
                        Узнать подробнее
                    </a>
</div>

<div className="flex flex-col bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm relative">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Smart</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">1 590 ₽</span>
</div>
</div>
<p className="text-base text-slate-600 mb-8 min-h-[100px]">
                        Виртуальная карта для путешествий, бронирований и оплат в поездках, когда нужен более широкий сценарий использования.
                    </p>
<ul className="space-y-4 flex-1 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Пополняемый баланс</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Международные платежи</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Бесконтактная оплата</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Подходит для travel-сценариев</span>
</li>
</ul>
<a className="block w-full rounded-xl bg-white px-4 py-3 text-center text-base font-medium text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 mt-auto" href="#">
                        Узнать подробнее
                    </a>
</div>

<div className="flex flex-col bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm relative">
<div className="mb-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Pro</h3>
<div className="mt-2 flex items-baseline gap-2">
<span className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900">3 490 ₽</span>
</div>
</div>
<p className="text-base text-slate-600 mb-8 min-h-[100px]">
                        Карта для пользователей, которым нужен более высокий лимит и расширенные возможности для международных оплат.
                    </p>
<ul className="space-y-4 flex-1 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Пополняемый баланс</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Международные платежи</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Бесконтактная оплата</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base text-slate-700">Лимит до $50 000 в месяц</span>
</li>
</ul>
<a className="block w-full rounded-xl bg-white px-4 py-3 text-center text-base font-medium text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 mt-auto" href="#">
                        Узнать подробнее
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                Не знаете, какую карту выбрать?
            </h2>
<p className="text-lg text-slate-600 mb-12">
                Ориентируйтесь не на название тарифа, а на то, для чего вам нужна карта.
            </p>
<div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden text-left mb-10">
<div className="divide-y divide-slate-100">
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 lg:px-10 gap-4">
<span className="text-lg text-slate-700">Нужна карта для разовой покупки</span>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
<span className="text-sm font-medium text-slate-500">Выберите</span>
<span className="text-sm font-semibold text-slate-900">Prepaid</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 lg:px-10 gap-4">
<span className="text-lg text-slate-700">Нужна карта для подписок и сервисов</span>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
<span className="text-sm font-medium text-blue-600">Выберите</span>
<span className="text-sm font-semibold text-blue-700">Easy</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 lg:px-10 gap-4">
<span className="text-lg text-slate-700">Нужна карта для поездок и оплаты в путешествиях</span>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
<span className="text-sm font-medium text-slate-500">Выберите</span>
<span className="text-sm font-semibold text-slate-900">Smart</span>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 lg:px-10 gap-4">
<span className="text-lg text-slate-700">Нужны более высокие лимиты и расширенный сценарий использования</span>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200">
<span className="text-sm font-medium text-slate-500">Выберите</span>
<span className="text-sm font-semibold text-slate-900">Pro</span>
</div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3.5 text-lg font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300" href="#tariffs">
                Сравнить карты
            </a>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="how-it-works">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
                Как получить карту Wanttopay
            </h2>
<div className="relative pl-8 sm:pl-12 space-y-12 before:absolute before:inset-y-0 before:left-[15px] sm:before:left-[23px] before:w-px before:bg-slate-200">
<div className="relative">
<div className="absolute -left-8 sm:-left-12 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 ring-4 ring-white">
<span className="text-sm font-semibold text-blue-600">1</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Запустите мини-приложение</h3>
<p className="text-lg text-slate-600">Перейдите в Wanttopay через Telegram и создайте аккаунт.</p>
</div>
<div className="relative">
<div className="absolute -left-8 sm:-left-12 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-4 ring-white">
<span className="text-sm font-semibold text-slate-600">2</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Пройдите верификацию</h3>
<p className="text-lg text-slate-600">Проверка личности проводится через Sumsub. Это нужно для безопасной работы сервиса.</p>
</div>
<div className="relative">
<div className="absolute -left-8 sm:-left-12 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-4 ring-white">
<span className="text-sm font-semibold text-slate-600">3</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Выберите карту</h3>
<p className="text-lg text-slate-600">Ориентируйтесь на ваш сценарий: разовая оплата, подписки, путешествия или более высокий лимит.</p>
</div>
<div className="relative">
<div className="absolute -left-8 sm:-left-12 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-4 ring-white">
<span className="text-sm font-semibold text-slate-600">4</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Пополните баланс</h3>
<p className="text-lg text-slate-600">Используйте доступный способ пополнения и активируйте карту для оплаты.</p>
</div>
<div className="relative">
<div className="absolute -left-8 sm:-left-12 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-4 ring-white">
<span className="text-sm font-semibold text-slate-600">5</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Оплачивайте зарубежные сервисы и покупки</h3>
<p className="text-lg text-slate-600">Используйте карту для онлайн-платежей, подписок и других доступных сценариев.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow" href="#">
                    Выпустить карту
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Оплачивайте популярные зарубежные сервисы и платформы
                </h2>
<p className="text-lg text-slate-600">
                    Wanttopay подходит для разных категорий онлайн-платежей — от нейросетей и рабочих инструментов до travel-сервисов и цифровых платформ.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="font-medium text-slate-700">Нейросети и AI-сервисы</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="font-medium text-slate-700">Дизайн и креатив</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="font-medium text-slate-700">Продуктивность и бизнес</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="font-medium text-slate-700">Путешествия и бронирование</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-rose-400"></div>
<span className="font-medium text-slate-700">Маркетинг и реклама</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<span className="font-medium text-slate-700">Развлечения и медиа</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
<span className="font-medium text-slate-700">Игры и цифровые покупки</span>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4">
<div className="w-2 h-2 rounded-full bg-fuchsia-400"></div>
<span className="font-medium text-slate-700">Мобильные приложения</span>
</div>
</div>
<p className="text-sm text-center text-slate-500 max-w-2xl mx-auto">
                Актуальный список поддерживаемых сервисов и сценариев оплаты доступен внутри сервиса и в разделе помощи.
            </p>
</div>
</section>

<section className="py-20 lg:py-24 bg-white">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border border-slate-800">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 max-w-2xl text-white">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-3xl text-blue-300" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                        Подарочные карты популярных платформ
                    </h2>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Если вам нужен фиксированный цифровой номинал для конкретного сервиса или платформы, используйте подарочные карты Wanttopay. Это удобный формат для быстрых покупок без сложной настройки.
                    </p>
<div className="mb-10">
<p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Подходит для</p>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-slate-200">Apple</span>
<span className="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-slate-200">PlayStation</span>
<span className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400">и других доступных платформ</span>
</div>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-blue-400" href="#">
                        Выбрать подарочную карту
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-16 max-w-2xl">
                Что получает пользователь Wanttopay
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Понятный доступ к международным оплатам</h3>
<p className="text-lg text-slate-600">Сервис помогает оплачивать зарубежные продукты и сервисы в формате, который не требует сложных схем и лишних действий со стороны пользователя.</p>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Управление в одном месте</h3>
<p className="text-lg text-slate-600">Выпуск карты, пополнение, история операций и основные действия доступны внутри Telegram Mini App.</p>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Разные карты под разные задачи</h3>
<p className="text-lg text-slate-600">В линейке есть решения как для разовых покупок, так и для подписок, поездок и более широкого использования.</p>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Поддержка и сопровождение</h3>
<p className="text-lg text-slate-600">Если платёж требует дополнительных рекомендаций, команда поддержки помогает разобраться, как корректно провести оплату.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                    Отзывы пользователей Wanttopay
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left flex flex-col justify-between">
<p className="text-lg text-slate-700 mb-8">«Пользуюсь сервисом уже давно. Удобно, что всё работает через Telegram, а поддержка быстро отвечает, если возникают вопросы по оплате.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-medium">А</div>
<span className="text-sm font-medium text-slate-900">Пользователь сервиса</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left flex flex-col justify-between">
<p className="text-lg text-slate-700 mb-8">«Сначала было много сомнений, но постепенно стал пользоваться регулярно. Удобно для подписок и онлайн-сервисов.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-medium">М</div>
<span className="text-sm font-medium text-slate-900">Пользователь сервиса</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-left flex flex-col justify-between">
<p className="text-lg text-slate-700 mb-8">«Быстро выпустил карту, пополнил баланс и оплатил нужный сервис. Поддержка помогла разобраться с деталями.»</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-medium">Е</div>
<span className="text-sm font-medium text-slate-900">Пользователь сервиса</span>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50" href="#">
                    Смотреть больше отзывов
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
                Часто задаваемые вопросы
            </h2>
<div className="space-y-4 mb-10">

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Какую карту выбрать?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Выбор зависит от того, для чего вам нужна карта: разовая покупка, подписки, поездки или более высокий лимит. На странице карт можно посмотреть различия между тарифами.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Что нужно для выпуска карты?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Для начала работы нужен Telegram и прохождение верификации внутри сервиса.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Где можно посмотреть данные карты?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Реквизиты карты, срок действия и другие данные доступны в интерфейсе сервиса после выпуска.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Как пополнить баланс?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Пополнение доступно через поддерживаемые способы внутри сервиса.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Можно ли оплачивать зарубежные сервисы?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Да, карты Wanttopay предназначены для международных онлайн-оплат и других доступных сценариев использования.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex justify-between items-center cursor-pointer p-6">
<span className="text-lg font-medium text-slate-900">Есть ли поддержка?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 px-6 pb-6 text-base">
                        Да, служба поддержки помогает по вопросам выпуска, пополнения и оплаты.
                    </div>
</details>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50" href="#">
                    Смотреть все вопросы
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Инструкции и статьи по оплате зарубежных сервисов
                </h2>
<p className="text-lg text-slate-600">
                    Объясняем, как работают виртуальные карты, как оплачивать популярные сервисы и что учитывать перед покупкой.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как оплатить ChatGPT с виртуальной карты</h3>
</a>
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как выбрать карту Wanttopay под свой сценарий</h3>
</a>
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Что важно проверить перед оплатой зарубежного сервиса</h3>
</a>
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">В чём разница между Prepaid, Easy, Smart и Pro</h3>
</a>
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как использовать виртуальную карту в путешествии</h3>
</a>
<a className="group block p-6 border border-slate-200 rounded-2xl hover:border-blue-200 hover:shadow-sm transition-all" href="#">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Почему платёж может не пройти и что делать</h3>
</a>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center rounded-full bg-white border border-slate-200 px-8 py-3 text-base font-medium text-slate-900 shadow-sm transition-all hover:bg-slate-50" href="#">
                    Смотреть все статьи
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                Оплачивайте зарубежные сервисы и покупки через Wanttopay
            </h2>
<p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                Выберите подходящую карту, оформите её через Telegram и используйте для международных онлайн-платежей и других доступных сценариев.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-blue-500" href="#">
                    Выпустить карту
                </a>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/10 px-8 py-3.5 text-lg font-medium text-white shadow-sm transition-all hover:bg-white/20" href="#tariffs">
                    Посмотреть карты
                </a>
</div>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-slate-400" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">wanttopay</span>
</div>
<p className="text-sm text-slate-500">© 2024 Wanttopay. Все права защищены.</p>
</div>
</footer>

    </>
  );
}
