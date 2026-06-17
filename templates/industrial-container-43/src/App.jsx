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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-slate-950 uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-red-600 text-2xl" icon="solar:box-minimalistic-linear"></iconify-icon>
                    CONTEX
                </a>
<nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#catalog">Каталог</a>
<a className="hover:text-slate-900 transition-colors" href="#applications">Решения</a>
<a className="hover:text-slate-900 transition-colors" href="#specs">Размеры</a>
<a className="hover:text-slate-900 transition-colors" href="#delivery">Доставка</a>
<a className="hover:text-slate-900 transition-colors" href="#contacts">Контакты</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<div className="hidden md:flex flex-col items-end">
<a className="text-slate-950 hover:text-red-600 transition-colors" href="tel:+74950000000">+7 (495) 000-00-00</a>
<span className="text-xs text-slate-500 font-normal">Ежедневно 9:00 - 20:00</span>
</div>
<div className="flex items-center gap-2">
<a className="w-8 h-8 flex items-center justify-center rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear"></iconify-icon>
</a>
<a className="hidden sm:flex items-center justify-center h-9 px-4 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors" href="#">
                        Оставить заявку
                    </a>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #334155 25%, transparent 25%, transparent 75%, #334155 75%, #334155), repeating-linear-gradient(45deg, #334155 25%, #0f172a 25%, #0f172a 75%, #334155 75%, #334155)', backgroundPosition: '0 0, 20px 20px', backgroundSize: '40px 40px'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-xs font-medium text-slate-300 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        В наличии более 200 единиц
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-white">
                        Морские контейнеры <br className="hidden sm:block"/>20 и 40 футов с доставкой
                    </h1>
<p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl font-normal leading-relaxed">
                        Новые и б/у контейнеры без скрытых дефектов. Подберем оптимальный вариант под склад, стройку, дачу или бизнес. Прямая доставка манипулятором по Москве, МО, СПб и регионам.
                    </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 h-12 px-6 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-base" href="#catalog">
                            Подобрать контейнер
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="w-full sm:w-auto flex items-center justify-center h-12 px-6 rounded-md bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors text-base border border-slate-700">
                            Рассчитать доставку
                        </button>
</div>
<div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-800/60">
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">10+</div>
<div className="text-xs text-slate-400">Лет на рынке РФ</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">Гарантия</div>
<div className="text-xs text-slate-400">Юридическая чистота</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">От 1 дня</div>
<div className="text-xs text-slate-400">Сроки доставки</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">Б/У и Новые</div>
<div className="text-xs text-slate-400">Строгий отбор качества</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50" id="catalog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-4">Каталог контейнеров в наличии</h2>
<p className="text-slate-600 text-base">Выбирайте из проверенных вариантов. Все б/у контейнеры герметичны, с исправными дверными механизмами, готовы к эксплуатации.</p>
</div>
<div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
<button className="whitespace-nowrap px-4 py-2 rounded-md bg-slate-900 text-white text-sm font-medium transition-colors">Все</button>
<button className="whitespace-nowrap px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-sm font-medium transition-colors">20 футов</button>
<button className="whitespace-nowrap px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-sm font-medium transition-colors">40 футов</button>
<button className="whitespace-nowrap px-4 py-2 rounded-md bg-white border border-slate-200 text-slate-600 hover:border-slate-300 text-sm font-medium transition-colors">Б/У</button>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
<div className="aspect-[4/3] bg-slate-100 relative p-4 flex items-center justify-center">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-2 py-1 rounded border border-slate-200">Б/У Стандарт</span>
<iconify-icon className="text-6xl text-slate-300 group-hover:scale-105 transition-transform duration-500" icon="solar:box-bold-duotone"></iconify-icon>
</div>
<div className="p-5 flex-grow flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Контейнер 20 футов (Dry Cube)</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Оптимален под склад на стройке, даче или для хранения оборудования.</p>
<div className="space-y-2 mb-6 mt-auto">
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Состояние</span>
<span className="font-medium text-slate-900">Герметичен, б/у</span>
</div>
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Объем</span>
<span className="font-medium text-slate-900">33.2 м³</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Вес тары</span>
<span className="font-medium text-slate-900">2 200 кг</span>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-500">Цена от</span>
<div className="text-xl font-semibold tracking-tight text-slate-950">125 000 ₽</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="h-9 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Купить</button>
<button className="h-9 rounded-md bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Подробнее</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
<div className="aspect-[4/3] bg-slate-100 relative p-4 flex items-center justify-center">
<span className="absolute top-3 left-3 bg-red-50 text-red-700 text-xs font-semibold px-2 py-1 rounded border border-red-100">Новый (One Way)</span>
<iconify-icon className="text-6xl text-slate-300 group-hover:scale-105 transition-transform duration-500" icon="solar:box-bold-duotone"></iconify-icon>
</div>
<div className="p-5 flex-grow flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Контейнер 20 футов (Новый)</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Идеальное состояние. Для презентабельного бизнеса, модульных зданий.</p>
<div className="space-y-2 mb-6 mt-auto">
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Состояние</span>
<span className="font-medium text-slate-900">Новый, 1 рейс</span>
</div>
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Объем</span>
<span className="font-medium text-slate-900">33.2 м³</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Вес тары</span>
<span className="font-medium text-slate-900">2 200 кг</span>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-500">Цена от</span>
<div className="text-xl font-semibold tracking-tight text-slate-950">280 000 ₽</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="h-9 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Купить</button>
<button className="h-9 rounded-md bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Подробнее</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
<div className="aspect-[4/3] bg-slate-100 relative p-4 flex items-center justify-center">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-xs font-semibold px-2 py-1 rounded border border-slate-200">Б/У Увеличенный</span>
<span className="absolute top-3 right-3 text-slate-400"><iconify-icon className="text-lg" icon="solar:stars-line-linear"></iconify-icon></span>
<iconify-icon className="text-6xl text-slate-300 group-hover:scale-105 transition-transform duration-500 w-[120%] h-[120%]" icon="solar:box-bold-duotone"></iconify-icon>
</div>
<div className="p-5 flex-grow flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Контейнер 40 футов (High Cube)</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Увеличенная высота. Максимальная вместимость для крупных складов и логистики.</p>
<div className="space-y-2 mb-6 mt-auto">
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Состояние</span>
<span className="font-medium text-slate-900">Хорошее, б/у</span>
</div>
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Объем</span>
<span className="font-medium text-slate-900">76.4 м³</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Высота внутри</span>
<span className="font-medium text-slate-900">2.69 м</span>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-500">Цена от</span>
<div className="text-xl font-semibold tracking-tight text-slate-950">210 000 ₽</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="h-9 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors">Купить</button>
<button className="h-9 rounded-md bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors">Подробнее</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden group hover:border-slate-300 hover:shadow-sm transition-all flex flex-col">
<div className="aspect-[4/3] bg-slate-100 relative p-4 flex items-center justify-center">
<span className="absolute top-3 left-3 bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-1 rounded border border-blue-100">Спец</span>
<iconify-icon className="text-6xl text-slate-300 group-hover:scale-105 transition-transform duration-500" icon="solar:snowflake-linear"></iconify-icon>
</div>
<div className="p-5 flex-grow flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Рефконтейнер 40 футов</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Поддержание температурного режима от -25°C до +25°C. Проверенные установки.</p>
<div className="space-y-2 mb-6 mt-auto">
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Установка</span>
<span className="font-medium text-slate-900">Carrier / ThermoKing</span>
</div>
<div className="flex justify-between text-xs border-b border-slate-100 pb-2">
<span className="text-slate-500">Питание</span>
<span className="font-medium text-slate-900">380В</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-slate-500">Диагностика</span>
<span className="font-medium text-slate-900">Пройдена (PTI)</span>
</div>
</div>
<div className="mb-4">
<span className="text-xs text-slate-500">Цена от</span>
<div className="text-xl font-semibold tracking-tight text-slate-950">По запросу</div>
</div>
<div className="grid grid-cols-1 mt-auto">
<button className="h-9 rounded-md bg-white border border-slate-200 text-slate-900 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                                    Узнать стоимость
                                </button>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors" href="#">
                        Смотреть весь каталог и цены
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white border-t border-slate-100" id="applications">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-4">Для каких задач подходят контейнеры?</h2>
<p className="text-slate-600 text-base">Морской контейнер — это надежное, вандалостойкое и мобильное решение. Не требует капитального фундамента и разрешений на строительство.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group">
<div className="mb-4 w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Склад и логистика</h3>
<p className="text-sm text-slate-600 mb-4">Организация надежного хранения товаров, запчастей, оборудования. Абсолютно сухие, герметичные, с надежными замками.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Склад на территории предприятия</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Хранение сезонных товаров</li>
</ul>
</div>

<div className="group">
<div className="mb-4 w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Строительство и дача</h3>
<p className="text-sm text-slate-600 mb-4">Быстрая организация безопасной хозпостройки на участке или инструменталки на строительном объекте.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Хранение стройматериалов</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Замена сарая или бытовки</li>
</ul>
</div>

<div className="group">
<div className="mb-4 w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950 mb-2">Малый бизнес и переделка</h3>
<p className="text-sm text-slate-600 mb-4">Основа для модульного строительства, кафе, шиномонтажа или майнинг-фермы. Мощный стальной каркас.</p>
<ul className="text-sm text-slate-500 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> База для модульных зданий</li>
<li className="flex items-start gap-2"><iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Установка оборудования</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-slate-50" id="specs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-4">Размеры и характеристики</h2>
<p className="text-slate-600 text-base max-w-2xl">Точные параметры стандартных морских контейнеров для планирования площадки и понимания вместимости.</p>
</div>
<div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
<tr>
<th className="px-6 py-4">Параметр</th>
<th className="px-6 py-4">20 футов (Dry Cube)</th>
<th className="px-6 py-4">40 футов (Standard)</th>
<th className="px-6 py-4 text-slate-900 font-semibold bg-slate-100">40 футов (High Cube)</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700">
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Внешняя длина</td>
<td className="px-6 py-4">6.058 м</td>
<td className="px-6 py-4">12.192 м</td>
<td className="px-6 py-4 bg-slate-50">12.192 м</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Внешняя ширина</td>
<td className="px-6 py-4">2.438 м</td>
<td className="px-6 py-4">2.438 м</td>
<td className="px-6 py-4 bg-slate-50">2.438 м</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Внешняя высота</td>
<td className="px-6 py-4">2.591 м</td>
<td className="px-6 py-4">2.591 м</td>
<td className="px-6 py-4 bg-slate-50 text-red-600 font-medium">2.896 м</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Внутренний объем</td>
<td className="px-6 py-4">33.2 м³</td>
<td className="px-6 py-4">67.7 м³</td>
<td className="px-6 py-4 bg-slate-50 font-medium">76.4 м³</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Собственный вес (тара)</td>
<td className="px-6 py-4">~2 200 кг</td>
<td className="px-6 py-4">~3 780 кг</td>
<td className="px-6 py-4 bg-slate-50">~3 900 кг</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Вместимость паллет (1200x800)</td>
<td className="px-6 py-4">11 шт</td>
<td className="px-6 py-4">25 шт</td>
<td className="px-6 py-4 bg-slate-50">25 шт</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-white" id="delivery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold mb-6">
<iconify-icon className="text-base" icon="solar:routing-linear"></iconify-icon>
                            Своя логистика
                        </div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-6">Доставка и выгрузка<br/>точно в срок</h2>
<p className="text-slate-600 text-base mb-8">
                            Организуем доставку морских контейнеров собственным транспортом. Привезем, аккуратно выгрузим и установим на вашей территории.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 font-semibold text-sm">1</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Москва и Московская область</h4>
<p className="text-sm text-slate-500">Доставка манипулятором (20 футов) или контейнеровозом (40 футов). Возможна доставка в день обращения при оплате.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 font-semibold text-sm">2</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Санкт-Петербург и ЛО</h4>
<p className="text-sm text-slate-500">Регулярные отправки. Отгрузка с терминалов СПб. Выгодные тарифы на доставку по области.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-600 font-semibold text-sm">3</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Регионы России</h4>
<p className="text-sm text-slate-500">Отправляем контейнеры попутным транспортом или по ж/д для минимизации ваших расходов на логистику.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
<h3 className="text-xl font-semibold tracking-tight text-slate-950 mb-6">Рассчитать стоимость доставки</h3>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Куда везем?</label>
<input className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-shadow" placeholder="Введите адрес доставки" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Тип контейнера</label>
<select className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 text-slate-700">
<option>20 футов</option>
<option>40 футов</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Нужна выгрузка?</label>
<select className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 text-slate-700">
<option>Да (манипулятор)</option>
<option>Нет (своими силами)</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Телефон для связи</label>
<input className="w-full h-11 px-4 rounded-md border border-slate-300 bg-white text-sm focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 transition-shadow" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
<button className="w-full h-11 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-sm mt-2" type="button">
                                Получить расчет
                            </button>
<p className="text-[10px] text-slate-400 text-center mt-4">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Поможем выбрать правильный контейнер</h2>
<p className="text-slate-400 text-base mb-10 max-w-2xl mx-auto">Оставьте заявку, и наш специалист подберет 2-3 варианта под ваши задачи и бюджет. Пришлем реальные фото контейнеров со склада в WhatsApp.</p>
<form className="max-w-2xl mx-auto bg-slate-900 p-6 sm:p-8 rounded-xl border border-slate-800 shadow-2xl flex flex-col sm:flex-row gap-4">
<input className="flex-grow h-12 px-4 rounded-md border border-slate-700 bg-slate-800 text-white text-sm focus:outline-none focus:border-slate-500 placeholder-slate-500" placeholder="Ваш телефон" required="" type="tel"/>
<button className="h-12 px-8 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors text-sm whitespace-nowrap" type="submit">
                        Подобрать варианты
                    </button>
</form>
<div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Работаем по договору</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:wallet-money-linear"></iconify-icon> С НДС и без НДС</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8" id="contacts">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-xl font-semibold tracking-tighter text-slate-950 uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-red-600" icon="solar:box-minimalistic-linear"></iconify-icon>
                        CONTEX
                    </a>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Профессиональная продажа и логистика морских контейнеров. Надежный партнер для вашего бизнеса и частных задач.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:whatsapp-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-950 mb-4 tracking-tight">Каталог</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-red-600 transition-colors" href="#">Контейнеры 20 футов</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Контейнеры 40 футов</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Новые контейнеры</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Б/У контейнеры</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Рефконтейнеры</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-950 mb-4 tracking-tight">Информация</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-red-600 transition-colors" href="#">Цены</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Доставка</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Размеры и характеристики</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Как выбрать</a></li>
<li><a className="hover:text-red-600 transition-colors" href="#">Выкуп контейнеров</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-950 mb-4 tracking-tight">Контакты</h4>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-slate-400 shrink-0" icon="solar:phone-linear"></iconify-icon>
<div>
<a className="block font-medium text-slate-900 hover:text-red-600" href="tel:+74950000000">+7 (495) 000-00-00</a>
<span className="text-xs text-slate-500">Пн-Вс: 09:00 - 20:00</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-slate-400 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>г. Москва, ул. Складская, д. 1 (Терминал)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5 text-slate-400 shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-red-600" href="mailto:info@contex.ru">info@contex.ru</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 CONTEX. Все права защищены. Не является публичной офертой.</p>
<div className="flex gap-4">
<a className="hover:text-slate-900 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-900 transition-colors" href="#">Реквизиты</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
