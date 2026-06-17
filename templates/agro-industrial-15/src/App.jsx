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
      

<main className="mx-auto max-w-[1440px] bg-white min-h-screen relative shadow-2xl overflow-hidden xl:my-8 xl:rounded-[2rem] border border-slate-200/60">

<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#0A1F44 1px, transparent 1px), linear-gradient(90deg, #0A1F44 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<header className="sticky top-0 z-50 w-full glass-panel border-b border-slate-100">
<div className="flex items-center justify-between px-6 py-4 md:px-10">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 bg-[#0A1F44] rounded-lg flex items-center justify-center text-white overflow-hidden group-hover:scale-105 transition-transform">
<iconify-icon className="relative z-10 text-[#FF8C42]" icon="solar:leaf-bold-duotone" width="24"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
</div>
<div className="flex flex-col">
<span className="font-heading font-bold text-lg leading-none tracking-tight text-[#0A1F44]">АГРОСЕП<span className="text-[#FF8C42]">-ТЕХ</span></span>
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Промышленные решения</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#0A1F44] transition-colors" href="#equipment">Оборудование</a>
<a className="hover:text-[#0A1F44] transition-colors" href="#cultures">Культуры</a>
<a className="hover:text-[#0A1F44] transition-colors" href="#advantages">Преимущества</a>
<a className="hover:text-[#0A1F44] transition-colors" href="#contacts">Контакты</a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<div className="flex flex-col items-end text-right">
<a className="text-sm font-semibold text-[#0A1F44] tracking-tight hover:text-[#FF8C42] transition-colors" href="tel:+78000000000">8 (800) 000-00-00</a>
<span className="text-[10px] text-slate-400">Пн-Пт 9:00 - 18:00</span>
</div>
<a className="group relative overflow-hidden rounded-lg bg-[#FF8C42] px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-500/20 hover:bg-orange-500 transition-all hover:-translate-y-0.5" href="#form">
<span className="relative z-10 flex items-center gap-2">
                            Рассчитать проект
                            <iconify-icon icon="solar:calculator-linear" width="16"></iconify-icon>
</span>
</a>
</div>

<button className="md:hidden text-[#0A1F44]">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-16 pb-20 px-6 md:px-10 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0A1F44] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C42] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C42]"></span>
</span>
<span className="text-xs font-semibold tracking-wide uppercase">Инновации в агропромышленности</span>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-[#0A1F44] leading-[1.1] mb-6">
                        Очистка зерна <br/>
                        с точностью <span className="text-[#FF8C42]">99,9%</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed mb-10 border-l-2 border-[#FF8C42] pl-6">
                        Фотосепараторы, пневмостолы и воздушно-решётные машины для обработки зерновых, бобовых и масличных культур. Минимальные потери, максимальная рентабельность.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0A1F44] text-white rounded-xl font-medium shadow-xl shadow-blue-900/10 hover:bg-[#0f2a5a] transition-all hover:-translate-y-1" href="#equipment">
                            Каталог оборудования
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-[#0A1F44] rounded-xl font-medium hover:bg-slate-50 transition-all hover:border-[#FF8C42]" href="#form">
                            Связаться с инженером
                        </a>
</div>
</div>

<div className="relative h-[400px] lg:h-[500px] bg-slate-50 rounded-[2rem] border border-slate-200 p-8 flex items-center justify-center overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-transparent opacity-80"></div>

<div className="relative z-10 w-64 h-64 bg-white rounded-3xl shadow-2xl flex items-center justify-center border border-slate-100 animate-float">
<div className="absolute -top-4 -right-4 bg-[#FF8C42] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">AI Vision</div>
<iconify-icon className="text-[#0A1F44] drop-shadow-lg" icon="solar:scanner-bold-duotone" width="80"></iconify-icon>

<div className="absolute top-0 left-0 w-full h-1 bg-[#FF8C42]/50 shadow-[0_0_15px_rgba(255,140,66,0.5)] animate-[float_3s_ease-in-out_infinite]" style={{top: '50%'}}></div>
</div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-80"></div>
<div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-yellow-500 rounded-full opacity-60"></div>
<div className="absolute top-1/2 right-10 w-2 h-2 bg-orange-300 rounded-full opacity-70"></div>

<div className="absolute inset-0">
<img alt="Grains Texture" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5001c8a3-11ae-443a-8753-a5ce85c0a547_1600w.png"/>
<svg className="opacity-20 w-[642px] h-[498px] z-10 relative" data-icon-replaced="true" strokeWidth="2" style={{width: '642px', height: '498px', color: 'rgb(10, 31, 68)'}} viewbox="0 0 400 400">
<circle className="animate-[spin_20s_linear_infinite]" cx="200" cy="200" fill="none" r="150" stroke="#0A1F44" stroke-dasharray="5,5" strokeWidth="1"></circle>
<circle cx="200" cy="200" fill="none" r="100" stroke="#FF8C42" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50 py-10 overflow-hidden" id="cultures">
<div className="mb-6 px-6 md:px-10 text-center">
<span className="text-xs font-semibold tracking-widest uppercase text-slate-400">Работаем с 15+ типами культур</span>
</div>
<div className="relative w-full flex overflow-hidden">
<div className="flex animate-scroll-x gap-8 min-w-full px-4">


<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-amber-500" icon="solar:wheel-angle-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Пшеница</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-yellow-500" icon="solar:sun-2-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Подсолнечник</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-yellow-400" icon="lucide:corn"></iconify-icon> <span className="text-sm font-medium text-slate-700">Кукуруза</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-green-600" icon="solar:leaf-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Соя</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-orange-400" icon="solar:database-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Чечевица</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-slate-500" icon="solar:filters-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Гречка</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-blue-400" icon="solar:waterdrops-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Рис</span>
</div>

<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-amber-500" icon="solar:wheel-angle-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Пшеница</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-yellow-500" icon="solar:sun-2-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Подсолнечник</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-yellow-400" icon="lucide:corn"></iconify-icon> <span className="text-sm font-medium text-slate-700">Кукуруза</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-green-600" icon="solar:leaf-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Соя</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-orange-400" icon="solar:database-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Чечевица</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-slate-500" icon="solar:filters-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Гречка</span>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm whitespace-nowrap">
<iconify-icon className="text-blue-400" icon="solar:waterdrops-bold-duotone"></iconify-icon> <span className="text-sm font-medium text-slate-700">Рис</span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 py-24 bg-white" id="equipment">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0A1F44] tracking-tight mb-4">Технологии сепарации</h2>
<p className="text-slate-500 font-normal">Современное оборудование для решения задач любой сложности: от первичной очистки до финальной сортировки по цвету.</p>
</div>
<a className="group text-sm font-medium text-[#FF8C42] flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    Смотреть все модели
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-[#0A1F44]" icon="solar:eye-scan-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-[#FF8C42]">
<iconify-icon icon="solar:camera-square-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0A1F44] mb-2">Фотосепараторы</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Интеллектуальная сортировка по цвету и форме с использованием AI камер. Удаление 99.9% примесей.</p>
<div className="space-y-2 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Инфракрасные камеры
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Удаление стекла и камней
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-slate-200">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Серия "Сапсан"</span>
</div>
</div>
</div>

<div className="group relative bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-[#0A1F44]" icon="solar:wind-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-[#FF8C42]">
<iconify-icon icon="solar:layers-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0A1F44] mb-2">Пневмостолы</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Гравитационная сепарация. Разделение семян по удельному весу. Идеально для калибровки.</p>
<div className="space-y-2 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Высокая точность
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Для трудных смесей
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-slate-200">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Серия "ПСС"</span>
</div>
</div>
</div>

<div className="group relative bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-[#0A1F44]" icon="solar:filter-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-[#FF8C42]">
<iconify-icon icon="solar:tuning-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0A1F44] mb-2">ВРМ</h3>
<p className="text-sm text-slate-500 mb-6 flex-grow">Воздушно-решётные машины для первичной и вторичной очистки. Удаление легких примесей и пыли.</p>
<div className="space-y-2 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Аспирация
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-[#FF8C42]" icon="solar:check-circle-bold"></iconify-icon> Высокая производительность
                            </div>
</div>
<div className="mt-auto pt-6 border-t border-slate-200">
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Серия "ВРМ-Универсал"</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0A1F44] relative overflow-hidden text-white" id="advantages">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="px-6 md:px-10 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-bold text-[#FF8C42] tracking-tighter">99.9%</span>
<span className="text-sm font-medium text-blue-100/80 uppercase tracking-wide">Чистота продукта</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">15+</span>
<span className="text-sm font-medium text-blue-100/80 uppercase tracking-wide">Видов культур</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">24/7</span>
<span className="text-sm font-medium text-blue-100/80 uppercase tracking-wide">Сервисная поддержка</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl lg:text-5xl font-bold text-[#FF8C42] tracking-tighter">0%</span>
<span className="text-sm font-medium text-blue-100/80 uppercase tracking-wide">Скрытых платежей</span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 py-24 bg-slate-50" id="form">
<div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

<div className="lg:w-2/5 p-10 bg-slate-900 text-white relative flex flex-col justify-between">
<div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] to-slate-900 z-0"></div>
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-4">Нужен подбор оборудования?</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-8">Заполните форму, и наш инженер рассчитает стоимость линии очистки под ваши задачи и производительность.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#FF8C42] mt-1" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm text-slate-300">sales@agrosep-tech.ru</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#FF8C42] mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-sm text-slate-300">8 (800) 000-00-00</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#FF8C42] mt-1" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm text-slate-300">г. Воронеж, Индустриальный парк, д. 12</span>
</div>
</div>
</div>
<div className="relative z-10 mt-12">
<div className="h-px w-full bg-white/10 mb-6"></div>
<p className="text-xs text-slate-500">Ответ в течение 15 минут</p>
</div>
</div>

<div className="lg:w-3/5 p-10 lg:p-12">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Ваше имя</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#0A1F44] text-sm focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-colors" placeholder="Иван Петров" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Телефон</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#0A1F44] text-sm focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-colors" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2 relative">
<label className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Культура</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-[#0A1F44] text-sm focus:outline-none focus:border-[#FF8C42] focus:ring-1 focus:ring-[#FF8C42] transition-colors appearance-none cursor-pointer">
<option disabled="" selected="" value="">Выберите культуру для очистки</option>
<option value="wheat">Пшеница / Зерновые</option>
<option value="sunflower">Подсолнечник</option>
<option value="corn">Кукуруза</option>
<option value="soy">Соя / Бобовые</option>
<option value="other">Другое (семена трав, овощные)</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-[#FF8C42] text-white font-medium rounded-lg px-6 py-4 shadow-lg shadow-orange-500/20 hover:bg-orange-500 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2" type="submit">
                                Получить коммерческое предложение
                            </button>
<p className="text-[10px] text-slate-400 mt-3 text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6 md:px-10">
<div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-[#FF8C42]" icon="solar:leaf-bold-duotone" width="24"></iconify-icon>
<span className="font-heading font-bold text-lg text-[#0A1F44]">АГРОСЕП-ТЕХ</span>
</a>
<p className="text-sm text-slate-500">Российский производитель оборудования для послеуборочной обработки зерна. Инновации и качество с 2010 года.</p>
</div>
<div className="flex flex-wrap gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="font-medium text-[#0A1F44]">Оборудование</h4>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Фотосепараторы</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Пневмостолы</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Машины ВРМ</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Нории</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-[#0A1F44]">Компания</h4>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">О нас</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Проекты</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Сервис</a>
<a className="text-sm text-slate-500 hover:text-[#FF8C42] transition-colors" href="#">Контакты</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 АГРОСЕП-ТЕХ. Все права защищены.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#0A1F44] transition-colors" href="#">
<iconify-icon icon="mingcute:telegram-line" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#0A1F44] transition-colors" href="#">
<iconify-icon icon="mingcute:vkontakte-line" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#0A1F44] transition-colors" href="#">
<iconify-icon icon="mingcute:youtube-line" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
