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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7', // Professional Blue
900: '#0c4a6e',
}
}
}
}
}

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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900">[НАЗВАНИЕ_СЕРВИСА]</span>
<span className="text-[10px] uppercase tracking-wide text-slate-500">Сервис Apple в СПб</span>
</div>

<nav className="hidden lg:flex gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-brand-600 transition-colors" href="#prices">Цены</a>
<a className="hover:text-brand-600 transition-colors" href="#models">Модели</a>
<a className="hover:text-brand-600 transition-colors" href="#faults">Неисправности</a>
<a className="hover:text-brand-600 transition-colors" href="#process">Как работаем</a>
<a className="hover:text-brand-600 transition-colors" href="#reviews">Отзывы</a>
<a className="hover:text-brand-600 transition-colors" href="#contacts">Адреса</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end">
<a className="text-sm font-semibold text-slate-900 tracking-tight hover:text-brand-600 transition-colors" href="tel:+7812XXXXXXX">+7 (812) XXX-XX-XX</a>
<span className="text-xs text-slate-400">Ежедневно 10:00–21:00</span>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-slate-800 transition-colors">
                        Заказать звонок
                    </button>
</div>
</div>
</div>
</header>

<section className="pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Ремонт iPhone в <br className="hidden lg:block"/> Санкт-Петербурге <br/> от 30 минут с гарантией
                    </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        [НАЗВАНИЕ_СЕРВИСА] — специализированный сервисный центр Apple в СПб. Чиним iPhone любой модели в день обращения: заменим экран, батарею и другие детали быстро.
                    </p>
<ul className="space-y-3 mb-10">
<li className="flex items-start gap-3">
<span className="iconify text-brand-600 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-slate-700">Бесплатная диагностика даже при отказе</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-brand-600 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-slate-700">Только оригинальные запчасти или проверенные аналоги</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-brand-600 mt-1 shrink-0" data-icon="lucide:check-circle-2" data-width="20"></span>
<span className="text-sm text-slate-700">Филиалы рядом с метро, удобно добираться</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="bg-brand-600 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-brand-500 transition-colors shadow-sm shadow-brand-500/20">
                            Узнать стоимость ремонта
                            <span className="block text-[10px] font-normal opacity-80 mt-0.5">Ответ за 5 мин в WhatsApp</span>
</button>
<button className="bg-white text-slate-700 border border-slate-200 text-base font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors">
                            Записаться на диагностику
                        </button>
</div>

<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 max-w-md">
<div className="flex gap-2 mb-3">
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-brand-500 transition-colors" placeholder="+7 (___) ___-__-__" type="tel"/>
<button className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                                Отправить
                            </button>
</div>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<span className="text-xs text-slate-400">Связаться в:</span>
<span className="iconify text-slate-400 hover:text-green-500 cursor-pointer" data-icon="lucide:phone" data-width="16"></span>
<span className="iconify text-slate-400 hover:text-green-500 cursor-pointer" data-icon="ic:baseline-whatsapp" data-width="16"></span>
<span className="iconify text-slate-400 hover:text-blue-500 cursor-pointer" data-icon="ic:baseline-telegram" data-width="16"></span>
</div>
<span className="text-[10px] text-slate-400">Согласие с политикой конфиденциальности</span>
</div>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 group">
<img alt="Инженер ремонтирует смартфон" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Почему нам доверяют владельцы iPhone в Санкт-Петербурге</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="text-center">
<div className="text-4xl font-semibold text-brand-600 tracking-tight mb-2">8 лет</div>
<div className="text-sm text-slate-500">на рынке услуг СПб</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-brand-600 tracking-tight mb-2">15k+</div>
<div className="text-sm text-slate-500">отремонтированных устройств</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-brand-600 tracking-tight mb-2">5</div>
<div className="text-sm text-slate-500">сервисных центров в центре</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-brand-600 tracking-tight mb-2">4.9</div>
<div className="text-sm text-slate-500">средний рейтинг клиентов</div>
</div>
</div>
<div className="flex flex-wrap justify-center gap-6">
<div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<span className="font-semibold text-slate-900">Яндекс Карты</span>
<span className="text-yellow-500">★ 4.9</span>
<span className="text-xs text-slate-400">500+ отзывов</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<span className="font-semibold text-slate-900">Google</span>
<span className="text-yellow-500">★ 4.8</span>
<span className="text-xs text-slate-400">300+ отзывов</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<span className="font-semibold text-slate-900">2ГИС</span>
<span className="text-yellow-500">★ 4.9</span>
<span className="text-xs text-slate-400">450+ отзывов</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50" id="models">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Ремонтируем все модели iPhone</h2>
<p className="text-slate-500">От iPhone 4 до iPhone 17 Pro Max — знаем особенности каждой модели.</p>
</div>
</div>
<div className="grid gap-4">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Новейшие</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 17 Pro Max</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 17 Pro</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 17 Air</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 17</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">15 &amp; 16 серия</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 16 Pro Max</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 16 Pro</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 16 Plus</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 16</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 15 Pro Max</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 15 Pro</span>
</div>
</div>
<details className="group">
<summary className="flex items-center gap-2 text-brand-600 font-medium text-sm cursor-pointer hover:underline mt-2">
<span>Показать более старые модели</span>
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-4">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 14 Series</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 13 Series</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 12 Series</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 11 Series</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone X/XS/XR</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone SE (все)</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">iPhone 8/7/6/5</span>
</div>
</div>
</details>
</div>
</div>
</section>

<section className="py-16 bg-white" id="faults">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Частые проблемы</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:smartphone" data-width="32"></span>
<h3 className="font-medium text-slate-900">Разбит экран</h3>
<p className="text-xs text-slate-500 mt-1">Замена стекла или модуля</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:battery-warning" data-width="32"></span>
<h3 className="font-medium text-slate-900">Быстро разряжается</h3>
<p className="text-xs text-slate-500 mt-1">Замена аккумулятора</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:droplets" data-width="32"></span>
<h3 className="font-medium text-slate-900">Попала вода</h3>
<p className="text-xs text-slate-500 mt-1">Чистка и восстановление</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:zap-off" data-width="32"></span>
<h3 className="font-medium text-slate-900">Не заряжается</h3>
<p className="text-xs text-slate-500 mt-1">Ремонт разъема питания</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:camera" data-width="32"></span>
<h3 className="font-medium text-slate-900">Не работает камера</h3>
<p className="text-xs text-slate-500 mt-1">Замена модуля или стекла</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:mic-off" data-width="32"></span>
<h3 className="font-medium text-slate-900">Проблемы со звуком</h3>
<p className="text-xs text-slate-500 mt-1">Динамики и микрофоны</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:power-off" data-width="32"></span>
<h3 className="font-medium text-slate-900">Не включается</h3>
<p className="text-xs text-slate-500 mt-1">Сложная диагностика цепи</p>
</div>
<div className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-brand-200 hover:shadow-md transition-all group cursor-pointer">
<span className="iconify text-slate-400 group-hover:text-brand-600 mb-3" data-icon="lucide:server-crash" data-width="32"></span>
<h3 className="font-medium text-slate-900">Глючит / Завис</h3>
<p className="text-xs text-slate-500 mt-1">Программный ремонт</p>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center justify-center gap-1" href="#contacts">
                    Не нашли проблему? Напишите нам
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50" id="prices">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Сколько стоит ремонт iPhone</h2>
<p className="text-slate-500 mb-8">Цены указаны за работу мастера. Стоимость запчастей зависит от модели и качества (оригинал/аналог).</p>
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="py-3 px-6 font-medium text-slate-900">Услуга</th>
<th className="py-3 px-6 font-medium text-slate-900 hidden sm:table-cell">Описание</th>
<th className="py-3 px-6 font-medium text-slate-900 whitespace-nowrap">Цена от, ₽</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 font-medium text-slate-900">Диагностика</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Бесплатно при ремонте</td>
<td className="py-3 px-6 font-semibold text-brand-600">0 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Замена дисплея</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Разбито стекло или матрица</td>
<td className="py-3 px-6 font-medium text-slate-900">1 500 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Замена аккумулятора</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Быстро садится, выключается</td>
<td className="py-3 px-6 font-medium text-slate-900">1 000 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Чистка после воды</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Ультразвуковая чистка платы</td>
<td className="py-3 px-6 font-medium text-slate-900">1 500 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Замена стекла камеры</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Треснуло стекло объектива</td>
<td className="py-3 px-6 font-medium text-slate-900">1 200 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Ремонт Face ID</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Не распознает лицо</td>
<td className="py-3 px-6 font-medium text-slate-900">2 500 ₽</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="py-3 px-6 text-slate-700">Замена задней крышки</td>
<td className="py-3 px-6 text-slate-500 hidden sm:table-cell">Лазерная резка (аккуратно)</td>
<td className="py-3 px-6 font-medium text-slate-900">2 000 ₽</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
<button className="text-sm font-medium text-brand-600 hover:text-brand-700">Отправить модель на расчет стоимости</button>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden h-40 border border-slate-200">
<img alt="Рабочее место мастера с микросхемами" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2 block">0 Рублей</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Бесплатная диагностика iPhone от 15 минут</h2>
<p className="text-slate-500 mb-6">Определим истинную причину поломки и предложим варианты решения до начала каких-либо работ. Вы платите только за результат.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-brand-600 mt-0.5" data-icon="lucide:check" data-width="18"></span>
                            Бесплатно даже при отказе от ремонта
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-brand-600 mt-0.5" data-icon="lucide:check" data-width="18"></span>
                            Точный расчет стоимости «под ключ»
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-brand-600 mt-0.5" data-icon="lucide:check" data-width="18"></span>
                            Понятный отчет о состоянии устройства
                        </li>
</ul>
<form className="space-y-4 max-w-sm">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Ваше имя" type="text"/>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500" placeholder="Ваш телефон" type="tel"/>
<button className="w-full bg-brand-600 text-white font-medium rounded-lg px-4 py-3 hover:bg-brand-700 transition-colors">
                            Записаться на диагностику
                        </button>
</form>
</div>
<div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
<img alt="Обсуждение ремонта с клиентом" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Как проходит ремонт</h2>
<div className="grid md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10"></div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-4 border border-brand-100">
<span className="text-2xl font-bold text-brand-600">1</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Заявка</h3>
<p className="text-sm text-slate-500">Вы оставляете заявку или звоните нам.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-4 border border-brand-100">
<span className="text-2xl font-bold text-brand-600">2</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Диагностика</h3>
<p className="text-sm text-slate-500">Мастер находит проблему за 15 минут.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-4 border border-brand-100">
<span className="text-2xl font-bold text-brand-600">3</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Согласование</h3>
<p className="text-sm text-slate-500">Озвучиваем цену и сроки ремонта.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
<div className="w-16 h-16 mx-auto bg-brand-50 rounded-full flex items-center justify-center mb-4 border border-brand-100">
<span className="text-2xl font-bold text-brand-600">4</span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Готово!</h3>
<p className="text-sm text-slate-500">Забираете исправный iPhone с гарантией.</p>
</div>
</div>
<p className="text-center text-sm text-slate-400 mt-8">*85% ремонтов выполняем в течение 1 часа.</p>

<div className="mt-10 rounded-xl overflow-hidden h-64 border border-slate-200">
<img alt="Детальный процесс ремонта под микроскопом" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl text-white">
<div className="grid md:grid-cols-2">
<div className="p-8 md:p-12 flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Не хотите ехать в сервис?</h2>
<p className="text-slate-300 mb-6">Наш курьер заберет устройство, мы починим его в сервисе и привезем обратно. Либо мастер приедет к вам (для модульного ремонта).</p>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin"></span>
                                Выезд по всему Санкт-Петербургу
                            </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:shield-check"></span>
                                Полная материальная ответственность
                            </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:truck"></span>
                                Доставка от 300 ₽
                            </li>
</ul>
<div>
<button className="bg-white text-slate-900 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">
                                Вызвать курьера
                            </button>
</div>
</div>
<div className="relative h-64 md:h-auto">
<img alt="Курьерская доставка" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10">Стандарты качества</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Оригинальные запчасти</h3>
<p className="text-sm text-slate-500">Используем оригиналы или 100% качественные аналоги (OEM) по согласованию.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:shield" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Гарантия до 2 лет</h3>
<p className="text-sm text-slate-500">Честная гарантия на работу и комплектующие. Документальное подтверждение.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:users" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Опытные инженеры</h3>
<p className="text-sm text-slate-500">Средний стаж мастеров — 6 лет. Регулярно проходят сертификацию.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:file-check" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Прозрачные цены</h3>
<p className="text-sm text-slate-500">Никаких скрытых наценок. Стоимость не меняется в процессе ремонта.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Срочный ремонт</h3>
<p className="text-sm text-slate-500">Собственный склад запчастей позволяет чинить устройства сразу.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="p-2 bg-brand-50 rounded-lg text-brand-600 shrink-0">
<span className="iconify" data-icon="lucide:armchair" data-width="24"></span>
</div>
<div>
<h3 className="font-semibold text-slate-900 mb-1">Комфорт</h3>
<p className="text-sm text-slate-500">Уютная зона ожидания, кофе и Wi-Fi, пока мы чиним ваш телефон.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Что говорят клиенты</h2>
<p className="text-slate-500 mb-8">Нас рекомендуют друзьям и коллегам.</p>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">

<div className="snap-start shrink-0 w-80 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="font-medium text-slate-900">Александр В.</div>
<div className="text-yellow-400 text-xs">★★★★★</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Менял дисплей на iPhone 13 Pro. Сделали при мне за 40 минут. Цвета как на оригинале, Face ID работает. Рекомендую!"
                    </p>
<div className="mt-4 text-xs text-slate-400">Яндекс Карты, 10 окт 2023</div>
</div>

<div className="snap-start shrink-0 w-80 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="font-medium text-slate-900">Елена С.</div>
<div className="text-yellow-400 text-xs">★★★★★</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Спасли утопленный телефон! В другом сервисе сказали менять плату, а тут почистили и заменили пару микросхем. Спасибо!"
                    </p>
<div className="mt-4 text-xs text-slate-400">Google, 22 сен 2023</div>
</div>

<div className="snap-start shrink-0 w-80 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="font-medium text-slate-900">Дмитрий К.</div>
<div className="text-yellow-400 text-xs">★★★★★</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                        "Отличный сервис в центре. Удобно зайти после работы. Батарею поменяли быстро, дали гарантию. Цены адекватные."
                    </p>
<div className="mt-4 text-xs text-slate-400">2ГИС, 05 ноя 2023</div>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden h-40 border border-slate-200">
<img alt="Счастливые люди с телефонами" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Частые вопросы</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900">
                        Сколько времени занимает ремонт?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
                        В среднем ремонт занимает 30–60 минут (замена аккумулятора, экрана). Сложная пайка или восстановление после воды могут занять от 1 до 3 дней.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900">
                        Используете оригинальные запчасти?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
                        Мы предлагаем выбор: оригинальные запчасти (снятые с доноров или OEM) и высококачественные аналоги. Вы сами выбираете вариант, подходящий по бюджету.
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900">
                        Даете ли вы гарантию?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
                        Да, мы даем гарантию до 2 лет на выполненные работы и до 1 года на запчасти (в зависимости от типа детали).
                    </div>
</details>
<details className="group bg-slate-50 rounded-lg border border-slate-200">
<summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-slate-900">
                         Вы официальный сервис Apple?
                        <span className="iconify text-slate-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
                         Нет, мы независимый сервисный центр. Это позволяет нам выполнять ремонты, которые не делают официалы (пайка, замена стекла отдельно от дисплея) и предлагать более низкие цены.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-16 bg-slate-50/50" id="contacts">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Наши сервисные центры</h2>
<p className="text-slate-500 mb-8">Рядом с метро в центре Санкт-Петербурга.</p>
<div className="grid md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<h3 className="font-semibold text-slate-900">м. Площадь Восстания</h3>
</div>
<p className="text-sm text-slate-600 mb-2">Лиговский пр., д. 10, оф. 202</p>
<p className="text-sm text-slate-400 mb-4">10:00 – 21:00</p>
<a className="text-brand-600 text-sm font-medium" href="tel:+78120000000">+7 (812) XXX-XX-XX</a>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<h3 className="font-semibold text-slate-900">м. Сенная / Садовая</h3>
</div>
<p className="text-sm text-slate-600 mb-2">ул. Садовая, д. 32</p>
<p className="text-sm text-slate-400 mb-4">10:00 – 21:00</p>
<a className="text-brand-600 text-sm font-medium" href="tel:+78120000000">+7 (812) XXX-XX-XX</a>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-brand-200 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<h3 className="font-semibold text-slate-900">м. Петроградская</h3>
</div>
<p className="text-sm text-slate-600 mb-2">Каменноостровский пр., 40</p>
<p className="text-sm text-slate-400 mb-4">10:00 – 21:00</p>
<a className="text-brand-600 text-sm font-medium" href="tel:+78120000000">+7 (812) XXX-XX-XX</a>
</div>
</div>

<div className="relative w-full h-[400px] bg-slate-200 rounded-xl overflow-hidden">
<img alt="Карта с адресами" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-slate-800 transition-colors text-sm font-medium">Построить маршрут</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-brand-50 rounded-2xl p-8 md:p-12 border border-brand-100 flex flex-col lg:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Остались вопросы?</h2>
<p className="text-slate-600 mb-8">Расскажите, что случилось с вашим iPhone. Мы предложим варианты ремонта и назовем точную стоимость заранее.</p>
<form className="space-y-4 max-w-md">
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Опишите проблему (например, разбит экран iPhone 13)" type="text"/>
<div className="flex gap-4">
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500" placeholder="Телефон" type="tel"/>
<button className="bg-brand-600 text-white font-medium px-6 py-3 rounded-lg whitespace-nowrap hover:bg-brand-700 transition-colors">
                                Жду звонка
                            </button>
</div>
<div className="text-[10px] text-slate-400">
                            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                        </div>
</form>
<div className="mt-8 flex gap-4">
<button className="flex items-center gap-2 text-sm font-medium text-green-600 bg-white px-4 py-2 rounded-lg border border-slate-200 hover:bg-green-50 transition-colors">
<span className="iconify" data-icon="ic:baseline-whatsapp"></span> Написать в WhatsApp
                        </button>
<button className="flex items-center gap-2 text-sm font-medium text-blue-600 bg-white px-4 py-2 rounded-lg border border-slate-200 hover:bg-blue-50 transition-colors">
<span className="iconify" data-icon="ic:baseline-telegram"></span> Написать в Telegram
                        </button>
</div>
</div>
<div className="flex-1 w-full lg:w-auto overflow-hidden rounded-xl">
<img alt="Довольный клиент" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<p className="text-[10px] text-slate-400 mt-6 text-center max-w-3xl mx-auto">
                Мы не являемся авторизованным сервисным центром Apple Inc. Все товарные знаки (Apple, iPhone, iPad и др.) принадлежат их правообладателям и используются на этом сайте исключительно для идентификации техники и информирования потребителей о совместимости услуг и запчастей (в соответствии со ст. 1487 ГК РФ).
            </p>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<span className="text-white text-lg font-semibold tracking-tight block mb-4">[НАЗВАНИЕ_СЕРВИСА]</span>
<p className="text-sm max-w-sm">Сеть профессиональных сервисных центров по ремонту техники Apple в Санкт-Петербурге. Работаем честно, быстро и с гарантией.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Информация</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a></li>
<li><a className="hover:text-white transition-colors" href="#">Пользовательское соглашение</a></li>
<li><a className="hover:text-white transition-colors" href="#">Карта сайта</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Контакты</h4>
<ul className="space-y-2 text-sm">
<li className="text-white">+7 (812) XXX-XX-XX</li>
<li>spb@myservice.ru</li>
<li className="flex gap-4 mt-4">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="ic:baseline-whatsapp" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="ic:baseline-telegram" data-width="20"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="entypo-social:vk" data-width="20"></span></a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 text-xs text-center">
                © 2023 [НАЗВАНИЕ_СЕРВИСА]. Сайт носит информационный характер и не является публичной офертой.
            </div>
</div>
</footer>

    </>
  );
}
