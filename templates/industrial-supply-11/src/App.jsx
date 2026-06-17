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
      

<nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center">
<a className="text-2xl font-semibold tracking-tighter text-slate-900 uppercase flex items-center" href="#">
<span className="text-red-600 mr-0.5">К</span>ОРУНД
                    </a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" href="#benefits">Преимущества</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" href="#expertise">Инжиниринг</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" href="#products">Ассортимент</a>
<a className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors" href="#process">Сотрудничество</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col text-right">
<a className="text-sm font-semibold text-slate-900 tracking-tight hover:text-red-600 transition-colors" href="tel:+78000000000">8 (800) 000-00-00</a>
<span className="text-xs text-slate-500">Звонок по РФ бесплатный</span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 transition-all" href="#contact">
                        Оставить заявку
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative bg-slate-900 overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
</div>
<div className="sm:px-6 lg:px-8 lg:py-32 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-4xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Оптовые поставки промышленного инструмента для предприятий
                </h1>
<p className="sm:text-lg leading-relaxed text-base text-slate-300 max-w-2xl mb-8">Комплексное снабжение от официального дилера 100+ заводов. Решаем задачи любой сложности: от разовых закупок до полной оптимизации технологических процессов.</p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-sm text-slate-300">
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-red-600/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="leading-snug text-slate-200">Работаем с НДС и через ЭДО.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-red-600/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500" icon="solar:box-minimalistic-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="leading-snug text-slate-200">Отгрузка в день обращения (склад 5 000 кв. м).</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-red-600/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500" icon="solar:document-text-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="leading-snug text-slate-200">Подбор инструмента под ТЗ за 1 день.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-red-600/10 border border-red-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-red-500" icon="solar:history-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="leading-snug text-slate-200">26 лет опыта прямых поставок в РФ.</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-600 rounded shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-slate-900 transition-all" href="#contact">
                        Получить коммерческое предложение
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/5 border border-slate-700 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 focus:ring-offset-slate-900 transition-all backdrop-blur-sm" href="#contact">
                        Быстрый заказ по списку
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Экономика сделки: Почему с нами выгодно</h2>
<p className="mt-3 text-sm text-slate-500 max-w-2xl">Прозрачные финансовые условия для оптимизации бюджета вашего предприятия.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-red-200 hover:shadow-sm transition-all group">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-red-600 text-xl transition-colors" icon="solar:sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Гибкая система скидок</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-3">Многоуровневая система скидок от объема:</p>
<ul className="text-xs font-medium text-slate-500 space-y-1">
<li className="flex justify-between border-b border-slate-100 pb-1"><span>От 10 000 ₽</span> <span className="text-red-600">1%</span></li>
<li className="flex justify-between border-b border-slate-100 pb-1"><span>От 30 000 ₽</span> <span className="text-red-600">2%</span></li>
<li className="flex justify-between"><span>От 50 000 ₽</span> <span className="text-red-600">3%</span></li>
</ul>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-red-200 hover:shadow-sm transition-all group">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-red-600 text-xl transition-colors" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Отсрочка платежа</h3>
<p className="text-sm text-slate-600 leading-relaxed">Для постоянных партнеров, работающих по договору, предоставляем комфортную отсрочку платежа до <strong>60 календарных дней</strong>.</p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-red-200 hover:shadow-sm transition-all group">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-red-600 text-xl transition-colors" icon="solar:star-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Бонусная программа</h3>
<p className="text-sm text-slate-600 leading-relaxed">Начисляем 1 балл за каждые 100 ₽. Оплачивайте накопленными баллами до <strong>30% стоимости</strong> ваших будущих заказов.</p>
</div>

<div className="p-6 rounded-lg border border-slate-200 bg-white hover:border-red-200 hover:shadow-sm transition-all group">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center mb-5 group-hover:bg-red-50 transition-colors">
<iconify-icon className="text-slate-700 group-hover:text-red-600 text-xl transition-colors" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight mb-2">Три ценовые категории</h3>
<p className="text-sm text-slate-600 leading-relaxed">Подберем оптимальные аналоги и закроем потребность в трех категориях под бюджет: <strong>«Эконом»</strong>, <strong>«Стандарт»</strong> и <strong>«Премиум»</strong>.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-200" id="expertise">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 mb-6">
<iconify-icon className="text-red-600" icon="solar:user-id-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700">Квалифицированные инженеры-технологи</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight mb-6">Комплексный технический аудит</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-700 text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Выезд на предприятие</h4>
<p className="text-xs text-slate-500">Выезд технолога на ваше производство для проведения тестов и презентаций инструмента.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-700 text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Анализ задач и подбор</h4>
<p className="text-xs text-slate-500">Глубокий анализ ваших задач и подбор инструмента для обеспечения максимальной производительности.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-700 text-lg" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Разработка чертежей</h4>
<p className="text-xs text-slate-500">Проектирование и разработка чертежей нестандартной технологической оснастки под ваши требования.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-700 text-lg" icon="solar:speedometer-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Оптимизация техпроцессов</h4>
<p className="text-xs text-slate-500">Модернизация режимов для существенного сокращения машинного времени и снижения себестоимости деталей.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-lg bg-slate-100 overflow-hidden relative border border-slate-200">
<div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-slate-700 text-9xl opacity-30" icon="solar:cpu-bolt-linear" strokeWidth="1"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-5 rounded border border-slate-200 shadow-sm text-slate-900">
<div className="flex items-center gap-3">
<div className="p-2 bg-red-50 rounded text-red-600">
<iconify-icon className="text-2xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<p className="text-base font-semibold tracking-tight">Бесплатные испытания</p>
<p className="text-xs text-slate-500 mt-1">Предоставляем опытные образцы инструмента на испытания совершенно бесплатно.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">Каталог и бренды</h2>
<p className="mt-3 text-sm text-slate-500">Широкая номенклатура из наличия и производство под собственными торговыми марками.</p>
</div>

<div className="flex flex-wrap gap-2 mb-10">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon className="text-red-600" icon="solar:settings-linear"></iconify-icon> Металлорежущий
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon className="text-red-600" icon="solar:ruler-linear"></iconify-icon> Измерительный
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon className="text-red-600" icon="solar:hammer-linear"></iconify-icon> Слесарный
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon className="text-red-600" icon="solar:layers-minimalistic-linear"></iconify-icon> Абразивный
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-sm font-medium text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer">
<iconify-icon className="text-red-600" icon="solar:bolt-linear"></iconify-icon> Оснастка
                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative bg-slate-900 border border-slate-800 rounded-lg p-8 overflow-hidden group">
<div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-9xl text-white" icon="solar:shield-star-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-red-600/20 rounded flex items-center justify-center mb-6 border border-red-500/30">
<iconify-icon className="text-red-500 text-2xl" icon="solar:crown-star-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Собственные торговые марки (СТМ)</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                            Предлагаем высококлассный инструмент под нашими торговыми марками. Это контрактное производство на ведущих мировых площадках. Вы получаете качество на уровне премиальных брендов без переплаты за имя.
                        </p>
<a className="text-sm font-medium text-red-500 hover:text-red-400 transition flex items-center gap-1" href="#contact">Запросить каталог СТМ <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="relative bg-white border border-slate-200 rounded-lg p-8 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden group">
<div className="absolute right-0 top-0 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4 transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-9xl text-slate-900" icon="solar:city-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-6 border border-slate-200">
<iconify-icon className="text-slate-700 text-2xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Прямой дилер 100+ заводов</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                            Работаем напрямую с более чем 100 заводами-производителями по всему миру. Гарантируем оригинальность продукции, минимальные сроки поставки благодаря отлаженной логистике и официальную гарантию.
                        </p>
<a className="text-sm font-medium text-slate-900 hover:text-red-600 transition flex items-center gap-1" href="#contact">Подобрать аналоги <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-slate-300" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center mb-12">Стандарты качества и логистики</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-20 border-b border-slate-800">
<div>
<iconify-icon className="text-red-500 text-3xl mb-4" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Сертификация</h3>
<p className="text-sm text-slate-400">СМК предприятия строго соответствует международному стандарту ГОСТ Р ИСО 9001-2015.</p>
</div>
<div>
<iconify-icon className="text-red-500 text-3xl mb-4" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Двойной контроль</h3>
<p className="text-sm text-slate-400">Обязательный входной и выходной контроль каждой партии специалистами ОТК.</p>
</div>
<div>
<iconify-icon className="text-red-500 text-3xl mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Надежная упаковка</h3>
<p className="text-sm text-slate-400">Упаковка в плотный гофрокартон с фирменной контрольной лентой исключает порчу.</p>
</div>
<div>
<iconify-icon className="text-red-500 text-3xl mb-4" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-semibold text-white tracking-tight mb-2">Точная доставка</h3>
<p className="text-sm text-slate-400">Сотрудничаем с ведущими ТК. Гарантируем сохранность груза и строгое соблюдение сроков.</p>
</div>
</div>

<div className="pt-20">
<h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight text-center mb-12">Порядок сотрудничества</h2>
<div className="relative">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
<div className="text-center relative">
<div className="w-10 h-10 mx-auto bg-slate-900 border border-red-500 rounded flex items-center justify-center text-white font-semibold text-sm mb-4 shadow-[0_0_10px_rgba(220,38,38,0.3)]">1</div>
<h4 className="text-sm font-semibold text-white mb-1">Заявка</h4>
<p className="text-xs text-slate-500">Отправьте запрос или ТЗ</p>
</div>
<div className="text-center relative">
<div className="w-10 h-10 mx-auto bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-slate-400 font-semibold text-sm mb-4">2</div>
<h4 className="text-sm font-semibold text-white mb-1">Уточнение</h4>
<p className="text-xs text-slate-500">Менеджер согласует детали</p>
</div>
<div className="text-center relative">
<div className="w-10 h-10 mx-auto bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-slate-400 font-semibold text-sm mb-4">3</div>
<h4 className="text-sm font-semibold text-white mb-1">КП за 1 час</h4>
<p className="text-xs text-slate-500">Расчет с учетом скидок</p>
</div>
<div className="text-center relative">
<div className="w-10 h-10 mx-auto bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-slate-400 font-semibold text-sm mb-4">4</div>
<h4 className="text-sm font-semibold text-white mb-1">Договор</h4>
<p className="text-xs text-slate-500">Согласование и ЭДО</p>
</div>
<div className="text-center relative">
<div className="w-10 h-10 mx-auto bg-slate-900 border border-slate-700 rounded flex items-center justify-center text-slate-400 font-semibold text-sm mb-4">5</div>
<h4 className="text-sm font-semibold text-white mb-1">Отгрузка</h4>
<p className="text-xs text-slate-500">Поставка по графику</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6 text-center">Сертификаты и лицензии</p>
<div className="flex gap-4 overflow-x-auto hide-scroll pb-4 snap-x">
<div className="min-w-[200px] h-32 rounded border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-slate-400 snap-center shrink-0 hover:border-slate-300 transition-colors">
<iconify-icon className="text-3xl mb-2 text-slate-300" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-medium text-center px-2 text-slate-500">ГОСТ Р ИСО 9001</span>
</div>
<div className="min-w-[200px] h-32 rounded border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-slate-400 snap-center shrink-0 hover:border-slate-300 transition-colors">
<iconify-icon className="text-3xl mb-2 text-slate-300" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-medium text-center px-2 text-slate-500">Официальный дилер</span>
</div>
<div className="min-w-[200px] h-32 rounded border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-slate-400 snap-center shrink-0 hover:border-slate-300 transition-colors">
<iconify-icon className="text-3xl mb-2 text-slate-300" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-medium text-center px-2 text-slate-500">Авторизованный партнер</span>
</div>
<div className="min-w-[200px] h-32 rounded border border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-slate-400 snap-center shrink-0 hover:border-slate-300 transition-colors">
<iconify-icon className="text-3xl mb-2 text-slate-300" icon="solar:diploma-linear"></iconify-icon>
<span className="text-xs font-medium text-center px-2 text-slate-500">Сертификат СТМ</span>
</div>
</div>
</div>
<div className="text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">Нам доверяют лидеры отрасли</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
<span className="text-xl font-bold tracking-tighter text-slate-800">ТРАНССТРОЙ</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">РЖД <span className="font-normal text-sm">ИНЖИНИРИНГ</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">МЕТАЛЛ<span className="text-slate-500">ПРОМ</span></span>
<span className="text-xl font-bold tracking-tighter text-slate-800">СЕВЕР<span className="tracking-normal">МАШ</span></span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight text-center mb-10">Ответы на частые вопросы</h2>
<div className="space-y-3">
<details className="group bg-white border border-slate-200 rounded" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-slate-900">
<span>Какой минимальный заказ?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-600 p-5 pt-0 border-t border-slate-100 mt-2 leading-relaxed">
                        Мы работаем с юридическими лицами, минимальная сумма заказа не ограничена жестко, однако для получения многоуровневых оптовых скидок заказ должен начинаться от 10 000 ₽ (скидка 1%), от 30 000 ₽ (2%) и от 50 000 ₽ (3%).
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-slate-900">
<span>Работаете ли вы с НДС?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-600 p-5 pt-0 border-t border-slate-100 mt-2 leading-relaxed">
                        Да, абсолютно все цены в наших коммерческих предложениях, счетах и на сайте включают НДС 20%. Мы предоставляем полный пакет закрывающих документов и активно работаем через системы электронного документооборота (ЭДО).
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-slate-900">
<span>Как быстро доставите?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-600 p-5 pt-0 border-t border-slate-100 mt-2 leading-relaxed">
                        Отгрузка инструмента из наличия с нашего склада в Пензе (5 000 кв.м.) осуществляется в день обращения или в день поступления оплаты. Итоговые сроки зависят от удаленности вашего региона и выбранной транспортной компании.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 text-slate-400" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">

<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Нужен расчет поставки или подбор аналогов?</h2>
<p className="text-sm mb-8 max-w-md text-slate-400">Отправьте заявку с вашими контактными данными и прикрепите ТЗ. Инженер-технолог свяжется с вами для подготовки решения.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-2xl mt-1" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Отдел продаж</p>
<a className="text-lg font-medium text-white hover:text-red-500 transition" href="tel:+78000000000">8 (800) 000-00-00</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-2xl mt-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Электронная почта</p>
<a className="text-base font-medium text-white hover:text-red-500 transition" href="mailto:zakaz@korund-tools.ru">zakaz@korund-tools.ru</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-red-500 text-2xl mt-1" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wider">Центральный склад</p>
<p className="text-sm text-slate-300">г. Пенза, ул. Индустриальная, д. 1А</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-lg p-8 border border-slate-800">
<form action="#" className="space-y-4" method="POST">
<div>
<label className="sr-only" htmlFor="company">Название компании</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" id="company" name="company" placeholder="Компания / ИНН" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="name">Имя</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" id="name" name="name" placeholder="Ваше имя" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Телефон</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors" id="phone" name="phone" placeholder="Контактный телефон" required="" type="tel"/>
</div>
</div>
<div className="pt-2 border-t border-slate-800/50 mt-4">
<label className="block text-sm font-medium text-slate-400 mb-2">Прикрепить ТЗ или список (до 10 МБ)</label>
<input className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-slate-300 hover:file:bg-slate-700 cursor-pointer transition-colors" id="file" name="file" type="file"/>
</div>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-green-500 text-xs font-medium bg-green-500/10 px-3 py-1.5 rounded w-full sm:w-auto justify-center border border-green-500/20">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
                                Ответим в течение 30 минут
                            </div>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-red-600 rounded shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 focus:ring-offset-slate-900 transition-all" type="submit">
                                Отправить заявку
                            </button>
</div>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800">

<div className="flex items-center mb-4 md:mb-0">
<span className="text-2xl font-semibold tracking-tighter text-white uppercase flex items-center">
<span className="text-red-600 mr-0.5">К</span>ОРУНД
                    </span>
</div>
<p className="text-xs text-slate-500 text-center md:text-left">
                    © 1998–2024 ООО «Корунд». Все права защищены. Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер.
                </p>
</div>
</div>
</footer>

    </>
  );
}
