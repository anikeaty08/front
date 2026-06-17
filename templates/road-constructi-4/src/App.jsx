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
      

<header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    АсфальтСиб
                </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">О компании</a>
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#stages">Этапы</a>
<a className="hover:text-white transition-colors" href="#contacts">Контакты</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-white hover:text-yellow-400 transition-colors" href="tel:+79833000052">
<iconify-icon className="text-base text-yellow-400" icon="solar:phone-linear"></iconify-icon>
                    +7 (983) 300-00-52
                </a>
</div>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden bg-zinc-950">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-zinc-800/50 -z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8">
<iconify-icon className="text-yellow-400" icon="solar:clock-circle-linear"></iconify-icon>
                Работаем круглосуточно
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-4xl leading-tight mb-6">
                Асфальтирование дорог в Новосибирске и области
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mb-10">
                Строительство, ремонт и благоустройство территорий любой сложности. Выполняем полный цикл работ с гарантией качества.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<a className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-zinc-950 text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#contacts">
                    Оставить заявку
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-sm font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#contacts">
                    Рассчитать стоимость
                    <iconify-icon className="text-yellow-400" icon="solar:calculator-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl border-t border-zinc-800/80 pt-10 bg-zinc-950/50 backdrop-blur-sm rounded-t-3xl p-6">
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:bus-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Собственная техника</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Опытная команда</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200 text-balance">Выезд в любой регион<br/><span className="text-xs text-zinc-500 font-normal">(включая Барнаул)</span></span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-yellow-400 border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:routing-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">Круглосуточно</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 border-t border-zinc-800/50" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">О компании</h2>
<div className="text-base text-zinc-400 space-y-4">
<p>
                    Компания «АсфальтСиб» выполняет полный комплекс дорожно-строительных работ: от подготовки основания до укладки асфальта и благоустройства территории.
                </p>
<p>
                    Асфальтирование — это сложный технологический процесс, включающий строительство, реконструкцию и ремонт дорожного покрытия. Мы используем современную технику и проверенные материалы, что позволяет выполнять работы качественно и в срок.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-y border-zinc-800/80" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-12 text-center">Наши услуги</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors hover:border-yellow-400/50 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-2xl text-yellow-400" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Асфальтирование</h3>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Дороги и магистрали</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Дворы и придомовые территории</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Площадки и парковки</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Тротуары и дорожки</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Промышленные объекты</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Загородные дороги</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors hover:border-yellow-400/50 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-2xl text-yellow-400" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Ремонт дорог</h3>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ямочный ремонт</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Капитальный ремонт покрытия</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Ремонт асфальта любых категорий</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Устранение трещин и деформаций</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors hover:border-yellow-400/50 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-2xl text-yellow-400" icon="solar:cone-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Строительные работы</h3>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Строительство дорог с нуля</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Вертикальная планировка</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Устройство оснований</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Земляные работы</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Рытьё котлованов и вывоз грунта</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-colors hover:border-yellow-400/50 flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-2xl text-yellow-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-4">Благоустройство</h3>
<ul className="space-y-3 text-sm text-zinc-400 flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Укладка тротуарной плитки</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Установка бордюрного камня</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Озеленение и устройство газонов</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Благоустройство дворов</li>
<li className="flex items-start gap-2"><iconify-icon className="text-yellow-500/70 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Площадки из асфальтовой крошки</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-16">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-yellow-400" icon="solar:global-linear"></iconify-icon>
                        География и клиенты
                    </h3>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200">в Новосибирске</span>
<span className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200">по Новосибирской области</span>
<span className="px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-medium text-zinc-200">в Барнауле и регионах</span>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-white mb-2">Работаем с:</p>
<ul className="text-sm text-zinc-400 grid grid-cols-2 gap-3">
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-500/70" icon="solar:user-linear"></iconify-icon> Частными клиентами</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-500/70" icon="solar:buildings-linear"></iconify-icon> Бизнесом</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-500/70" icon="solar:factory-linear"></iconify-icon> Предприятиями</li>
<li className="flex items-center gap-2"><iconify-icon className="text-yellow-500/70" icon="solar:bank-linear"></iconify-icon> Гос. заказчиками</li>
</ul>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-yellow-400" icon="solar:star-linear"></iconify-icon>
                        Почему выбирают нас
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
<p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:shield-check-linear"></iconify-icon> Контроль качества
                            </p>
</div>
<div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
<p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:history-linear"></iconify-icon> Соблюдение сроков
                            </p>
</div>
<div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
<p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:wallet-linear"></iconify-icon> Доступные цены
                            </p>
</div>
<div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
<p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<iconify-icon className="text-yellow-400" icon="solar:layers-linear"></iconify-icon> Любая сложность
                            </p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">
                    Важность своевременного ремонта
                </h3>
<p className="text-sm text-zinc-400 mb-6">
                    Асфальтовое покрытие требует регулярного контроля. Под воздействием нагрузок и погодных условий неизбежно появляются разрушения.
                </p>
<div className="mb-8 p-4 rounded-xl bg-zinc-900 border border-yellow-500/20 flex gap-4 items-start">
<iconify-icon className="text-xl text-yellow-500 mt-0.5 shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<p className="text-sm font-medium text-white mb-2">Частые проблемы:</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">Трещины</span>
<span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">Выбоины</span>
<span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs text-zinc-300">Ямы</span>
</div>
</div>
</div>
<div className="space-y-4">
<p className="text-sm font-medium text-white">Своевременный ремонт позволяет:</p>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400" icon="solar:check-read-linear"></iconify-icon>
</div>
                            Избежать аварийных ситуаций
                        </li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400" icon="solar:check-read-linear"></iconify-icon>
</div>
                            Продлить срок службы дороги
                        </li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400" icon="solar:check-read-linear"></iconify-icon>
</div>
                            Снизить затраты на капитальный ремонт
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-800/80" id="stages">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16 text-center">Этапы работы</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">

<div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-zinc-800 border-t border-dashed border-zinc-700"></div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-yellow-400 text-zinc-950 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">1</div>
<span className="text-sm font-medium text-white">Осмотр объекта</span>
</div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">2</div>
<span className="text-sm font-medium text-zinc-300">Расчет стоимости</span>
</div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">3</div>
<span className="text-sm font-medium text-zinc-300">Подготовка основания</span>
</div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">4</div>
<span className="text-sm font-medium text-zinc-300">Укладка асфальта</span>
</div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">5</div>
<span className="text-sm font-medium text-zinc-300">Уплотнение покрытия</span>
</div>
<div className="relative flex flex-col items-center text-center gap-4 z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center text-lg font-medium ring-4 ring-zinc-950">6</div>
<span className="text-sm font-medium text-zinc-300">Сдача объекта</span>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-300 py-20 border-t border-zinc-800" id="contacts">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Контакты</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Телефон</p>
<a className="text-lg font-medium text-white hover:text-yellow-400 transition-colors" href="tel:+79833000052">+7 (983) 300-00-52</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Адрес</p>
<p className="text-base text-zinc-300">Новосибирск,<br/>ул. Выборная, 199/4</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center shrink-0 border border-zinc-800">
<iconify-icon className="text-yellow-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Режим работы</p>
<p className="text-base text-zinc-300">Круглосуточно</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-950/50 p-8 rounded-2xl border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-2 tracking-tight">Начать проект</h3>
<p className="text-sm text-zinc-400 mb-6">Оставьте заявку — и мы рассчитаем стоимость вашего проекта бесплатно!</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" placeholder="Ваше имя" type="text"/>
</div>
<div>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all" placeholder="Номер телефона" type="tel"/>
</div>
<button className="w-full bg-yellow-400 text-zinc-950 hover:bg-yellow-500 font-medium rounded-lg px-4 py-3 text-sm transition-colors flex items-center justify-center gap-2" type="submit">
                        Оставить заявку
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-zinc-500 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                АсфальтСиб
            </span>
<p className="text-xs text-zinc-500">© 2023–2024 АсфальтСиб. Все права защищены.</p>
</div>
</section>

    </>
  );
}
