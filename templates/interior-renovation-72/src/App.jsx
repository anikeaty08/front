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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] aspect-square bg-zinc-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl border-b border-white/[0.05]">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-white font-medium tracking-tighter text-lg uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white"></span>
                RENOV
            </div>
<div className="hidden md:flex gap-8 text-sm font-light text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Услуги</a>
<a className="hover:text-white transition-colors" href="#process">Процесс</a>
<a className="hover:text-white transition-colors" href="#portfolio">Работы</a>
</div>
<a className="hidden md:inline-flex h-8 items-center justify-center rounded-full bg-white px-4 text-xs font-medium text-zinc-900 transition-transform hover:scale-105 active:scale-95" href="#contact">
                Обсудить проект
            </a>
<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-48 pb-24 md:pt-64 md:pb-40 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
<div className="group inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-light text-zinc-300 mb-8 cursor-default hover:bg-white/10 transition-colors">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
</span>
                    Принимаем проекты на следующий месяц
                </div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tighter leading-[1.1] mb-8 pb-2">
                    Архитектура комфорта.<br/>Без компромиссов.
                </h1>
<p className="text-base md:text-lg text-zinc-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                    Создаем минималистичные и функциональные интерьеры. Полный цикл ремонта от дизайн-проекта до финальной уборки. Точно в срок, строго по смете.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-zinc-900 transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#contact">
                        Рассчитать стоимость
                    </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20" href="#portfolio">
                        Смотреть работы
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.03] relative" id="services">
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Направления</h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed">Адаптируем подход под ваши задачи, сохраняя неизменно высокое качество исполнения на каждом этапе работы.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden isolate flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
<div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform duration-500">
<iconify-icon className="text-white" height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Дизайн-проект</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Разработка планировочных решений, 3D-визуализация, подбор материалов и мебели с учетом вашего бюджета.</p>
</div>

<div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden isolate flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
<div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform duration-500">
<iconify-icon className="text-white" height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Комплексный ремонт</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Реализация проекта "под ключ". Демонтаж, инженерные сети, черновая и чистовая отделка высшего уровня.</p>
</div>

<div className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden isolate flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-bl from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
<div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-8 group-hover:-translate-y-1 transition-transform duration-500">
<iconify-icon className="text-white" height="24" icon="solar:bed-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Комплектация</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed flex-grow">Закупка и доставка чистовых материалов, контроль качества, сборка и расстановка мебели.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.03] relative overflow-hidden" id="process">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-24 relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Прозрачный процесс</h2>
<p className="text-sm md:text-base text-zinc-400 font-light max-w-xl mx-auto">Каждый этап строго регламентирован, контролируется главным инженером и согласовывается с вами.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent z-0"></div>

<div className="relative z-10 group md:text-center">
<div className="absolute -top-10 -left-6 md:left-1/2 md:-translate-x-1/2 text-[8rem] font-medium text-white/[0.02] tracking-tighter select-none -z-10 group-hover:text-white/[0.05] transition-colors">01</div>
<div className="w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 mx-auto mb-8 hidden md:block group-hover:bg-white transition-colors shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Встреча и замер</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Осмотр объекта, обсуждение пожеланий и фиксация технических особенностей.</p>
</div>

<div className="relative z-10 group md:text-center md:pt-12">
<div className="absolute -top-6 -left-6 md:left-1/2 md:-translate-x-1/2 text-[8rem] font-medium text-white/[0.02] tracking-tighter select-none -z-10 group-hover:text-white/[0.05] transition-colors">02</div>
<div className="w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 mx-auto mb-8 hidden md:block group-hover:bg-white transition-colors"></div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Смета и договор</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Детальный расчет стоимости работ и материалов. Фиксируем сроки юридически.</p>
</div>

<div className="relative z-10 group md:text-center">
<div className="absolute -top-10 -left-6 md:left-1/2 md:-translate-x-1/2 text-[8rem] font-medium text-white/[0.02] tracking-tighter select-none -z-10 group-hover:text-white/[0.05] transition-colors">03</div>
<div className="w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 mx-auto mb-8 hidden md:block group-hover:bg-white transition-colors"></div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Производство работ</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Регулярные фото и видео отчеты. Строгий технический надзор на каждом этапе.</p>
</div>

<div className="relative z-10 group md:text-center md:pt-12">
<div className="absolute -top-6 -left-6 md:left-1/2 md:-translate-x-1/2 text-[8rem] font-medium text-white/[0.02] tracking-tighter select-none -z-10 group-hover:text-white/[0.05] transition-colors">04</div>
<div className="w-3 h-3 rounded-full bg-zinc-700 border-4 border-zinc-950 mx-auto mb-8 hidden md:block group-hover:bg-white transition-colors"></div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Сдача объекта</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Клининг после ремонта. Передача ключей и гарантийных сертификатов.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/[0.03] bg-zinc-900/10">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Фокус на вашем спокойствии</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">

<div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 text-white group-hover:scale-110 group-hover:opacity-20 transition-all duration-700">
<iconify-icon height="120" icon="solar:wallet-money-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end min-h-[160px]">
<h4 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">Фиксированная смета</h4>
<p className="text-sm text-zinc-400 font-light max-w-md">Никаких скрытых платежей. Стоимость, указанная в договоре, не меняется в процессе работы ни при каких обстоятельствах.</p>
</div>
</div>

<div className="md:col-span-1 p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Соблюдение сроков</h4>
<p className="text-sm text-zinc-400 font-light">Мы ценим ваше время. За каждый день просрочки выплачиваем неустойку.</p>
</div>

<div className="md:col-span-1 p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white tracking-tight mb-3">Гарантия 3 года</h4>
<p className="text-sm text-zinc-400 font-light">Уверены в качестве. Предоставляем расширенную гарантию на все виды работ.</p>
</div>

<div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden glow-mesh">
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between h-full">
<div>
<h4 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">Собственный штат</h4>
<p className="text-sm text-zinc-400 font-light max-w-sm">Только проверенные мастера узкого профиля. Мы не привлекаем случайных подрядчиков со стороны.</p>
</div>
<div className="flex -space-x-4">
<div className="w-14 h-14 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-zinc-500"><iconify-icon icon="solar:user-linear" width="24"></iconify-icon></div>
<div className="w-14 h-14 rounded-full border-2 border-zinc-900 bg-zinc-700 flex items-center justify-center text-zinc-400"><svg className="" data-icon-set="solar" data-solar="user-linear" height="24" style={{color: 'rgb(161, 161, 170)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4"></circle><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z"></path></g></svg></div>
<div className="w-14 h-14 rounded-full border-2 border-zinc-900 bg-zinc-600 flex items-center justify-center text-white"><iconify-icon icon="solar:user-linear" width="24"></iconify-icon></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="portfolio">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">Избранные проекты</h2>
<p className="text-sm text-zinc-400 font-light">Эстетика минимализма и безупречное исполнение в каждом метре.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-white hover:text-zinc-300 transition-colors group" href="#">
                        Смотреть все <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="group cursor-pointer">
<div className="aspect-[4/5] w-full bg-zinc-900/40 rounded-3xl mb-5 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all duration-500">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

<div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">ЖК «Символ», 84 м²</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Минимализм, Комплексный ремонт</p>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="aspect-[4/5] w-full bg-zinc-900/40 rounded-3xl mb-5 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:24px_24px] [background-position:12px_12px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">ЖК «Прайм Парк», 112 м²</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Современный стиль, Дизайн и ремонт</p>
</div>

<div className="group cursor-pointer hidden lg:block">
<div className="aspect-[4/5] w-full bg-zinc-900/40 rounded-3xl mb-5 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:24px_24px] [background-position:6px_6px]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<h4 className="text-lg font-medium text-white tracking-tight">ЖК «Сердце Столицы», 65 м²</h4>
<p className="text-sm text-zinc-500 mt-1 font-light">Сканди, Частичный ремонт</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="contact">
<div className="max-w-5xl mx-auto relative">

<div className="absolute -inset-4 bg-gradient-to-r from-zinc-500/10 to-zinc-700/10 blur-2xl rounded-[3rem] -z-10"></div>
<div className="rounded-[2.5rem] bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col lg:flex-row gap-16 relative z-10">
<div className="lg:w-5/12 flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-6">Начнем проект?</h2>
<p className="text-sm md:text-base text-zinc-400 font-light mb-12 leading-relaxed">Оставьте контакты, и наш главный инженер свяжется с вами в течение рабочего дня для обсуждения деталей и предварительного расчета.</p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 text-sm text-zinc-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:phone-linear"></iconify-icon>
</div>
<span className="font-medium">+7 (495) 000-00-00</span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-300 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="font-medium">hello@renov.studio</span>
</div>
</div>
</div>
<div className="lg:w-7/12">
<form className="bg-zinc-950/50 rounded-3xl p-6 md:p-8 border border-white/5 space-y-8">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-zinc-700/50 py-3 text-sm text-white placeholder-transparent focus:border-white focus:outline-none transition-colors" id="name" placeholder="Имя" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="name">Ваше имя</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-zinc-700/50 py-3 text-sm text-white placeholder-transparent focus:border-white focus:outline-none transition-colors" id="phone" placeholder="Телефон" required="" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-zinc-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="phone">Телефон</label>
</div>
<label className="flex items-start gap-4 cursor-pointer group mt-4">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 rounded border border-zinc-700 bg-zinc-900 group-hover:border-zinc-500 transition-colors">
<input className="peer sr-only" required="" type="checkbox"/>
<iconify-icon className="text-zinc-900 bg-white w-full h-full rounded-[3px] opacity-0 peer-checked:opacity-100 absolute transition-opacity flex items-center justify-center" height="14" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 font-light leading-relaxed select-none">
                                        Я согласен с <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors" href="#">политикой конфиденциальности</a>
</span>
</label>
<button className="w-full h-12 items-center justify-center rounded-2xl bg-white text-sm font-medium text-zinc-900 transition-transform hover:scale-[1.02] active:scale-95 mt-4" type="submit">
                                    Отправить заявку
                                </button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-white/[0.03] bg-zinc-950 text-center md:text-left">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-white font-medium tracking-tighter text-base uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                RENOV
            </div>
<p className="text-xs text-zinc-500 font-light">© 2023 RENOV Studio. Все права защищены.</p>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:paperclip-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
