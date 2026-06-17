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
      

<aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col h-screen fixed top-0 left-0 z-10">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-square-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm">PedantAI</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                Обзор
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-gray-100 rounded-lg" href="#">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                Звонки
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                Сотрудники
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-gray-50 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
                Аналитика
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">AD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Admin User</span>
<span className="text-xs text-slate-500">Pedant Center</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

<header className="mb-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
<span>Звонки</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span>ID #1</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 flex items-center gap-3">
                        +7 (999) 123-45-67
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                            Анализ завершён
                        </span>
</h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
<iconify-icon icon="solar:export-linear" width="18"></iconify-icon>
                        Скачать PDF
                    </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs text-slate-500 font-medium mb-1">Сотрудник</span>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-600">Е</div>
<span className="text-sm font-semibold text-slate-900">Егор</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs text-slate-500 font-medium mb-1">Устройство</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Samsung S23</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs text-slate-500 font-medium mb-1">Тип звонка</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Повторное обращение</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
<span className="text-xs text-slate-500 font-medium mb-1">Дата анализа</span>
<span className="text-sm font-medium text-slate-900">19 янв 2026, 12:52</span>
</div>
</div>
</header>

<div className="border-b border-gray-200 mb-8">
<nav aria-label="Tabs" className="flex space-x-8">
<a className="border-slate-900 text-slate-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                    Сводка
                </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:user-speak-linear" width="18"></iconify-icon>
                    Диаризация
                </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                    Постпроцессинг
                </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2" href="#">
<iconify-icon icon="solar:code-file-linear" width="18"></iconify-icon>
                    Сырой текст
                </a>
</nav>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
<div className="flex items-start justify-between mb-4">
<h2 className="text-base font-semibold text-slate-900">Результат звонка</h2>
<span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">
                            Высокая вероятность конверсии
                        </span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        Звонок завершился подтверждением записи. Мастер Егор идентифицировал проблему с Samsung S23 и подтвердил прибытие детали. Однако, был упущен этап допродажи услуг через диагностику.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:like-linear" width="14"></iconify-icon>
                                Сильные стороны
                            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Идентификация клиента по голосу/номеру</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-500 mt-0.5 min-w-[16px]" icon="solar:check-circle-linear"></iconify-icon>
<span>Удержание инициативы в разговоре</span>
</li>
</ul>
</div>

<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<h3 className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                Точки роста
                            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-amber-500 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
<span>Отсутствие попытки Upsell (диагностика)</span>
</li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-amber-500 mt-0.5 min-w-[16px]" icon="solar:close-circle-linear"></iconify-icon>
<span>Цена ремонта не зафиксирована голосом</span>
</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm relative z-0">
<div className="p-4 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900">Детальный чек-лист</h2>
<span className="text-xs text-slate-500">Наведите на <iconify-icon className="inline align-middle text-indigo-400" icon="solar:quote-up-square-linear"></iconify-icon> для цитаты</span>
</div>
<div className="p-4 space-y-6">

<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Структура</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<div className="space-y-1">

<div className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors relative">
<span className="text-sm text-slate-700 font-medium">Приветствие по стандартам</span>
<div className="flex items-center gap-3">

<div className="relative">
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 cursor-help transition-colors" icon="solar:quote-up-square-linear"></iconify-icon>

<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 tooltip-arrow pointer-events-none">
<p className="italic opacity-90">"Добрый день, сервисный центр Pedant, меня зовут Егор."</p>
</div>
</div>
<div className="flex items-center gap-1.5 min-w-[60px] justify-end">
<span className="text-xs font-medium text-emerald-700">Да</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>

<div className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors relative">
<span className="text-sm text-slate-700 font-medium">Идентификация клиента/устройства</span>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 cursor-help transition-colors" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 tooltip-arrow pointer-events-none">
<p className="italic opacity-90">"Да, вижу ваше обращение от вчерашнего числа по Samsung S23."</p>
</div>
</div>
<div className="flex items-center gap-1.5 min-w-[60px] justify-end">
<span className="text-xs font-medium text-emerald-700">Да</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Консультация</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<div className="space-y-1">

<div className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors relative">
<span className="text-sm text-slate-700 font-medium">Озвучены сроки ремонта</span>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 cursor-help transition-colors" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 tooltip-arrow pointer-events-none">
<p className="italic opacity-90">"Деталь поступит завтра к обеду, сразу сможем приступить."</p>
</div>
</div>
<div className="flex items-center gap-1.5 min-w-[60px] justify-end">
<span className="text-xs font-medium text-emerald-700">Да</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>

<div className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-rose-50/50 transition-colors relative">
<span className="text-sm text-slate-700 font-medium">Предложена бесплатная диагностика</span>
<div className="flex items-center gap-3">

<span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">Не найдено</span>
<div className="flex items-center gap-1.5 min-w-[60px] justify-end">
<span className="text-xs font-medium text-rose-700">Нет</span>
<iconify-icon className="text-rose-500 text-lg" icon="solar:close-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Завершение</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<div className="space-y-1">

<div className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors relative">
<span className="text-sm text-slate-700 font-medium">Адрес сервиса подтвержден</span>
<div className="flex items-center gap-3">
<div className="relative">
<iconify-icon className="text-slate-300 group-hover:text-indigo-500 cursor-help transition-colors" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="absolute bottom-full right-0 mb-2 hidden group-hover:block w-64 p-3 bg-slate-800 text-white text-xs rounded-lg shadow-xl z-20 tooltip-arrow pointer-events-none">
<p className="italic opacity-90">"Ждем вас на Ленина 10, вход со двора."</p>
</div>
</div>
<div className="flex items-center gap-1.5 min-w-[60px] justify-end">
<span className="text-xs font-medium text-emerald-700">Да</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-wrap">
<div className="w-full p-6 border-b border-gray-100 pb-0">
<h2 className="text-base font-semibold text-slate-900 mb-1">Анализ первопричин "5 Почему"</h2>
<p className="text-sm text-slate-500 mb-4">Разбор причины отсутствия предложения диагностики</p>
</div>

<input checked="" className="peer/process hidden" id="tab_process" name="whytabs" type="radio"/>
<input className="peer/master hidden" id="tab_master" name="whytabs" type="radio"/>

<div className="w-full flex px-6 border-b border-gray-100 order-first">
<label className="cursor-pointer py-3 mr-6 text-sm font-medium border-b-2 border-transparent peer-checked/process:border-indigo-600 peer-checked/process:text-indigo-600 text-slate-500 hover:text-slate-700 transition-colors" htmlFor="tab_process">
                            Процессы (Система)
                        </label>
<label className="cursor-pointer py-3 text-sm font-medium border-b-2 border-transparent peer-checked/master:border-indigo-600 peer-checked/master:text-indigo-600 text-slate-500 hover:text-slate-700 transition-colors" htmlFor="tab_master">
                            Мастер (Конверсия)
                        </label>
</div>

<div className="w-full p-6 hidden peer-checked/process:block order-last">
<div className="relative pl-4 border-l-2 border-indigo-100 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-white"></div>
<p className="text-xs text-indigo-600 font-semibold mb-1">ПОЧЕМУ #1</p>
<p className="text-sm text-slate-700">В CRM не всплыла подсказка о допродаже при статусе "Ожидание детали".</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-indigo-300 ring-4 ring-white"></div>
<p className="text-xs text-indigo-500 font-semibold mb-1">ПОЧЕМУ #2</p>
<p className="text-sm text-slate-700">Сценарий повторного звонка не содержит блока "Cross-sell".</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-800 ring-4 ring-white"></div>
<p className="text-xs text-slate-600 font-semibold mb-1">КОРНЕВАЯ ПРИЧИНА (ПРОЦЕСС)</p>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
<p className="text-sm font-medium text-slate-900">Отсутствие регламента для входящих звонков по существующим заказам.</p>
</div>
</div>
</div>
</div>

<div className="w-full p-6 hidden peer-checked/master:block order-last">
<div className="relative pl-4 border-l-2 border-emerald-100 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-white"></div>
<p className="text-xs text-emerald-600 font-semibold mb-1">ПОЧЕМУ #1</p>
<p className="text-sm text-slate-700">Егор посчитал, что клиент уже "куплен" (заказ оформлен).</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-emerald-300 ring-4 ring-white"></div>
<p className="text-xs text-emerald-500 font-semibold mb-1">ПОЧЕМУ #2</p>
<p className="text-sm text-slate-700">Страх показаться навязчивым клиенту, который уже ждет деталь.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-slate-800 ring-4 ring-white"></div>
<p className="text-xs text-slate-600 font-semibold mb-1">КОРНЕВАЯ ПРИЧИНА (МАСТЕР)</p>
<div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
<p className="text-sm font-medium text-slate-900">Непонимание ценности диагностики как инструмента заботы, а не "впаривания".</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg">
<div className="flex items-center gap-2 mb-4 text-indigo-200">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Главный фокус</span>
</div>
<h3 className="text-lg font-medium leading-snug mb-4">Предложение бесплатной диагностики при повторных обращениях</h3>
<p className="text-sm text-slate-300 leading-relaxed mb-6 opacity-90">
                        Даже если проблема с S23 известна, диагностика укрепляет доверие и может выявить скрытые неисправности, увеличивая средний чек.
                    </p>
<div className="bg-white/10 rounded-lg p-3 border border-white/10">
<p className="text-xs text-slate-400 mb-1">Пример фразы:</p>
<p className="text-sm italic font-light">"Пока мы ждем деталь, давайте еще раз проведем бесплатную диагностику, чтобы убедиться, что нет других скрытых проблем..."</p>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
<h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:list-check-linear" width="18"></iconify-icon>
                        Рекомендации
                    </h2>
<div className="space-y-6">
<div>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded mb-2 inline-block">ПРОДОЛЖАТЬ</span>
<ul className="space-y-2 mt-1">
<li className="text-sm text-slate-600 flex gap-2">
<span className="w-1 h-1 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                                    Быстрая идентификация проблемы
                                </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="w-1 h-1 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                                    Четкое информирование о сроках
                                </li>
</ul>
</div>
<div className="border-t border-gray-100 pt-4">
<span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded mb-2 inline-block">УЛУЧШИТЬ</span>
<ul className="space-y-2 mt-1">
<li className="text-sm text-slate-600 flex gap-2">
<span className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                                    Всегда предлагать диагностику
                                </li>
<li className="text-sm text-slate-600 flex gap-2">
<span className="w-1 h-1 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                                    Фиксировать цену до приезда
                                </li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
<h2 className="text-sm font-semibold text-slate-900 mb-3">Обратная связь</h2>
<div className="flex gap-3 items-start">
<iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:chat-round-like-linear"></iconify-icon>
<p className="text-sm text-slate-600 italic">
                            "Егор отлично идентифицировал клиента. Если добавить фразу про диагностику в конце, конверсия в доп. услуги вырастет на 15%."
                        </p>
</div>
</div>
</div>
</div>
<footer className="mt-12 border-t border-gray-200 py-6 text-center">
<p className="text-xs text-slate-400">PedantAI Analysis System © 2026</p>
</footer>
</main>

    </>
  );
}
