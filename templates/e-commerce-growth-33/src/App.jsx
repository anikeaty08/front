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
      

<nav className="fixed top-0 z-50 w-full bg-white/80 border-b border-slate-200 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-medium text-slate-900 tracking-tight">Победа в Excel</span>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium transition-colors bg-slate-900 text-white rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#audit">
                Записаться на аудит
            </a>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Уже считаем экономию для 40+ брендов с оборотом 100+ млн ₽
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Вы отдаете до 60% выручки маркетплейсам. <br className="hidden lg:block"/>
<span className="text-slate-400">Пора строить свой миллиардный актив.</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg font-light">
                    Мы не делаем сайты. Мы строим независимый бизнес, который за 3 года обгонит ваш оборот на Wildberries и Ozon. Наша модель: мы зарабатываем только с вашей прибыли.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white transition-all bg-emerald-600 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/20" href="#audit">
                        Рассчитать мой потенциал
                        <iconify-icon className="ml-2" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col items-center justify-center p-8">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="relative z-10 w-full max-w-md flex justify-between items-center gap-4">

<div className="flex-1 flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-200 border-dashed opacity-70">
<div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 mb-4">
<iconify-icon height="24" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Вы сейчас</span>
<span className="text-lg font-medium text-slate-900">Арендатор</span>
<span className="text-xs text-slate-400 mt-2">Зависимость</span>
</div>

<div className="flex flex-col items-center justify-center shrink-0">
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest bg-white px-2 mb-[-10px] relative z-10">За 3 года</span>
<div className="w-24 h-[1px] bg-slate-300 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-slate-300 rotate-45"></div>
</div>
</div>

<div className="flex-1 flex flex-col items-center text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 shadow-lg ring-1 ring-emerald-500/10">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon height="24" icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 mb-1">Цель</span>
<span className="text-lg font-medium text-slate-900">Собственник</span>
<span className="text-xs text-emerald-600/70 mt-2">Капитализация</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
<svg className="w-full h-full text-emerald-500 fill-current" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 15 Q20 15 40 10 T100 0 L100 20 Z"></path>
</svg>
</div>
</div>
</div>
</header>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Где на самом деле утекает ваша прибыль?</h2>
<p className="text-slate-500 font-light text-lg">Сравнение экономики на примере оборота 100 млн ₽</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon height="120" icon="solar:cart-large-4-linear" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon height="20" icon="solar:shop-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">На маркетплейсах (Аренда)</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
<span className="text-slate-500">Комиссия</span>
<span className="font-medium text-slate-900">15-25%</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
<span className="text-slate-500">Логистика</span>
<span className="font-medium text-slate-900">5-15%</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
<span className="text-slate-500">Хранение</span>
<span className="font-medium text-slate-900">3-8%</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
<span className="text-slate-500">Штрафы и акции</span>
<span className="font-medium text-slate-900">5-12%</span>
</li>
</ul>
<div className="bg-red-50 rounded-xl p-4 border border-red-100 mb-6">
<div className="flex items-start gap-2 text-red-700 text-sm font-medium mb-1">
<iconify-icon className="mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
                            Итого "налог": 40-60% с выручки
                        </div>
<div className="text-xs text-red-600/80 pl-6">
                            Покупатель принадлежит площадке. Вы зависите от алгоритмов.
                        </div>
</div>
<div className="text-center pt-2">
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-1">Чистыми</span>
<span className="text-2xl font-medium text-slate-900">~10 млн ₽</span>
</div>
</div>

<div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20 group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-emerald-400">
<iconify-icon height="120" icon="solar:global-linear" width="120"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
<iconify-icon height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">На своем сайте (Собственность)</h3>
</div>
<ul className="space-y-4 mb-8">
<li className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
<span className="text-slate-400">Расходы на привлечение</span>
<span className="font-medium text-white">10-25%</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
<span className="text-slate-400">Владение клиентом</span>
<span className="font-medium text-emerald-400">100%</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
<span className="text-slate-400">Контроль правил</span>
<span className="font-medium text-emerald-400">Полный</span>
</li>
<li className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
<span className="text-slate-400">Маржа</span>
<span className="font-medium text-white">Вся остальная ваша</span>
</li>
</ul>
<div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20 mb-6">
<div className="flex items-start gap-2 text-emerald-400 text-sm font-medium mb-1">
<iconify-icon className="mt-0.5" icon="solar:wallet-money-linear"></iconify-icon>
                            Актив, который можно продать
                        </div>
<div className="text-xs text-emerald-400/70 pl-6">
                            Вы владеете базой клиентов и контролируете повторные продажи.
                        </div>
</div>
<div className="text-center pt-2">
<span className="block text-xs text-slate-400 uppercase tracking-widest mb-1">Чистыми</span>
<span className="text-2xl font-medium text-white">25-40 млн ₽</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
<div className="mb-12 md:max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Почему прошлые попытки запустить сайт проваливались?</h2>
<p className="text-lg text-slate-500">Вам продавали процесс, а не результат. Мы меняем правила игры.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:text-slate-900 group-hover:scale-110 transition-all">
<iconify-icon height="20" icon="solar:user-hand-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Проблема рынка</h3>
<p className="text-sm text-slate-500 leading-relaxed">Фрилансеры берут деньги за дизайн и код. Им все равно, купят у вас или нет.</p>
</div>

<div className="group p-6 bg-emerald-50 rounded-2xl border border-emerald-100 hover:border-emerald-200 transition-colors">
<div className="w-10 h-10 bg-white border border-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-all">
<iconify-icon height="20" icon="solar:graph-new-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Наша модель</h3>
<p className="text-sm text-slate-600 leading-relaxed">Мы работаем за % от выручки. Наша прибыль напрямую зависит от вашего роста.</p>
</div>

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:text-slate-900 group-hover:scale-110 transition-all">
<iconify-icon height="20" icon="solar:filter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Жесткий фильтр</h3>
<p className="text-sm text-slate-500 leading-relaxed">Берем проект, только если в таблице "Победа в Excel" видим, что свой сайт выгоднее WB.</p>
</div>

<div className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 mb-4 group-hover:text-slate-900 group-hover:scale-110 transition-all">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Партнерство</h3>
<p className="text-sm text-slate-500 leading-relaxed">Можем отказать, если нет потенциала под 100 млн ₽. Нам нужны партнеры, а не клиенты.</p>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Системный путь к 1 млрд ₽ за 3 года</h2>
<p className="text-slate-400">Никакой магии, только прогрессия.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center mb-6 group-hover:border-emerald-500 transition-colors shadow-lg shadow-black/20">
<span className="text-xs text-slate-500 font-mono mb-1">ШАГ 0</span>
<iconify-icon className="text-emerald-400" height="28" icon="solar:clipboard-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Аудит "Победа в Excel"</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-2">Сейчас</p>
<ul className="text-xs text-slate-400 space-y-1">
<li className="flex gap-2"><span className="text-emerald-500">•</span> 30 минут разбора</li>
<li className="flex gap-2"><span className="text-emerald-500">•</span> Честный вердикт</li>
</ul>
</div>

<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center mb-6 group-hover:border-slate-500 transition-colors">
<span className="text-xs text-slate-500 font-mono mb-1">ШАГ 1</span>
<iconify-icon className="text-white" height="28" icon="solar:rocket-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Фундамент</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-2">0-15 дней</p>
<ul className="text-xs text-slate-400 space-y-1">
<li className="flex gap-2"><span className="text-slate-600">•</span> Первые транзакции</li>
<li className="flex gap-2"><span className="text-slate-600">•</span> Перенос с WB/Ozon</li>
</ul>
</div>

<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center mb-6 group-hover:border-slate-500 transition-colors">
<span className="text-xs text-slate-500 font-mono mb-1">ШАГ 2</span>
<iconify-icon className="text-white" height="28" icon="solar:wad-of-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Первый кэш</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-2">1-3 месяца</p>
<ul className="text-xs text-slate-400 space-y-1">
<li className="flex gap-2"><span className="text-slate-600">•</span> ROAS &gt; 300%</li>
<li className="flex gap-2"><span className="text-slate-600">•</span> CPO ниже комиссии МП</li>
</ul>
</div>

<div className="relative group">
<div className="w-24 h-24 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center mb-6 group-hover:border-slate-500 transition-colors">
<span className="text-xs text-slate-500 font-mono mb-1">ШАГ 3</span>
<iconify-icon className="text-white" height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Масштаб</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-2">3-36 месяцев</p>
<ul className="text-xs text-slate-400 space-y-1">
<li className="flex gap-2"><span className="text-slate-600">•</span> Рост до 100+ млн ₽</li>
<li className="flex gap-2"><span className="text-slate-600">•</span> 30% выручки с LTV</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Инфраструктура на миллиард с первого дня</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">LTV-машина</h4>
<p className="text-sm text-slate-500 mt-1">CRM-маркетинг. 2-я и 10-я продажа — за 0 ₽ на привлечение.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Автоматизация</h4>
<p className="text-sm text-slate-500 mt-1">Роботы возвращают 15% брошенных корзин, делают апсейлы.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:lock-password-unlocked-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Полный контроль</h4>
<p className="text-sm text-slate-500 mt-1">Данные покупателей — ваш главный актив. Прямые платежи на р/с.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Синхронизация</h4>
<p className="text-sm text-slate-500 mt-1">Склад, остатки, заказы — все в единой системе.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 aspect-square flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-x-8 top-8 bottom-0 bg-white rounded-t-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-200/60 p-6">
<div className="flex items-center justify-between mb-8">
<div className="h-2 w-24 bg-slate-100 rounded"></div>
<div className="h-8 w-8 bg-emerald-50 text-emerald-500 rounded flex items-center justify-center">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
<div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
<div className="h-24 bg-slate-50 rounded-lg border border-slate-100"></div>
</div>
<div className="space-y-3">
<div className="h-10 w-full bg-slate-50 rounded border border-slate-100"></div>
<div className="h-10 w-full bg-slate-50 rounded border border-slate-100"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative" id="audit">
<div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>
<div className="max-w-xl mx-auto px-4 relative z-10 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-emerald-900/50 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-6 border border-emerald-800">
                Шаг 0
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Аудит "Победа в Excel"</h2>
<p className="text-slate-400 mb-10 leading-relaxed">
                Нам нужно 30 минут вашего времени. Мы не будем продавать. Мы будем считать. Если видим потенциал — предложим план. Если нет — честно скажем.
            </p>
<form className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-left space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Имя</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm" placeholder="Иван Иванов" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Телефон / Telegram</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm" placeholder="@username" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Текущий оборот на маркетплейсах</label>
<div className="relative">
<select className="w-full appearance-none bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm cursor-pointer">
<option>50-100 млн ₽ / год</option>
<option>100-500 млн ₽ / год</option>
<option>500 млн ₽+ / год</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3.5 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)] flex items-center justify-center gap-2" type="button">
                    Назначить время для расчета
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-slate-900 font-medium mb-1">Стройте актив, который будет принадлежать вам.</p>
<p className="text-slate-500 text-sm">Не платите аренду всю жизнь.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon height="24" icon="solar:plain-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 pt-8 border-t border-slate-100 text-center md:text-left text-xs text-slate-400">
<div className="flex flex-col md:flex-row justify-between gap-4">
<span>© 2025 Победа в Excel. Все права защищены.</span>
<div className="flex gap-4 justify-center md:justify-end">
<a className="hover:text-slate-600" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-600" href="#">Оферта</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
