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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-white tracking-tighter font-semibold text-lg">НВСК</div>
<div className="h-4 w-[1px] bg-white/20"></div>
<div className="text-xs tracking-widest uppercase text-neutral-500">Система контроля</div>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#">Методология</a>
<a className="hover:text-white transition-colors duration-300" href="#">Объекты</a>
<a className="hover:text-white transition-colors duration-300" href="#">Личный кабинет</a>
</nav>
<button className="glass-panel px-4 py-2 text-xs font-medium text-white hover:bg-white/5 transition duration-300 flex items-center gap-2 rounded">
<iconify-icon icon="solar:user-circle-linear" width="16"></iconify-icon>
<span>Войти</span>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-24">
<div className="lg:col-span-8 space-y-8 animate-enter">
<div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-neutral-300">Система активна • Новороссийск / Геленджик</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white font-medium leading-[0.95]">
                    Стройка как<br/>
<span className="text-neutral-500">управляемый</span><br/>
                    процесс.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                    Мы не продаем квадратные метры. Мы предоставляем инфраструктуру для реализации проектов с предсказуемым результатом, бюджетом и сроками.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-2xl font-semibold text-white tracking-tight">0%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Отклонение бюджета</span>
</div>
<div className="flex flex-col gap-1 border-l border-white/10 pl-4">
<span className="text-2xl font-semibold text-white tracking-tight">24/7</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">Доступ к данным</span>
</div>
</div>
</div>

<div className="lg:col-span-4 animate-enter delay-200">
<div className="glass-panel p-6 rounded-lg">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-neutral-500 uppercase">Текущий статус системы</span>
<iconify-icon className="text-neutral-400" icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300">Активные объекты</span>
<span className="text-white font-mono">12</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300">Ср. отклонение сроков</span>
<span className="text-emerald-400 font-mono">0.0 дней</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-neutral-300">Индекс доверия</span>
<span className="text-white font-mono">98.4%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-enter">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Выберите сценарий входа</h2>
<p className="text-neutral-400 max-w-lg">
                        Адаптируем процессы под вашу дистанцию, степень вовлеченности и цели.
                    </p>
</div>
<div className="hidden md:block h-px flex-grow bg-white/10 mx-8 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-enter delay-100">

<a className="group relative bg-neutral-900 border border-white/5 p-8 hover:border-white/20 transition-all duration-300 hover:bg-neutral-800" href="#">
<div className="absolute top-8 right-8 text-neutral-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-8 p-3 bg-white/5 w-fit rounded text-neutral-300 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Местный комфорт</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                        Живу в регионе. Нужен дом или ремонт без лишних нервов, с понятным бюджетом и сроками.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors">
<span>Настроить процесс</span>
</div>
</a>

<a className="group relative bg-neutral-900 border border-white/5 p-8 hover:border-white/20 transition-all duration-300 hover:bg-neutral-800" href="#">
<div className="absolute top-8 right-8 text-neutral-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-8 p-3 bg-white/5 w-fit rounded text-neutral-300 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Дистанционный контроль</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                        Переезжаю или нахожусь в другом городе. Мне нужен "аватар" на стройке и полная прозрачность.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors">
<span>Доступ к системе</span>
</div>
</a>

<a className="group relative bg-neutral-900 border border-white/5 p-8 hover:border-white/20 transition-all duration-300 hover:bg-neutral-800" href="#">
<div className="absolute top-8 right-8 text-neutral-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div className="mb-8 p-3 bg-white/5 w-fit rounded text-neutral-300 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Инвестиционный актив</h3>
<p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                        Строю для перепродажи или аренды. Важны цифры, ликвидность и соблюдение графика ROI.
                    </p>
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500 uppercase tracking-wider group-hover:text-white transition-colors">
<span>Рассчитать модель</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 animate-enter">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-500 uppercase tracking-widest">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>Анти-хаос</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                    Мы заменяем надежду <br/>на <span className="text-neutral-500">технологию</span>.
                </h2>
<p className="text-neutral-400 leading-relaxed text-lg">
                    Большинство проблем в стройке возникает из-за отсутствия информации. Наша платформа синхронизирует ожидания с реальностью в режиме реального времени.
                </p>
<ul className="space-y-6 pt-4">
<li className="flex gap-4">
<div className="mt-1 text-white opacity-50"><iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-white font-medium mb-1">Детализированная смета</h4>
<p className="text-sm text-neutral-500">Фиксируем цены на старте. Никаких скрытых доплат в процессе.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-white opacity-50"><iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-white font-medium mb-1">Директивный график</h4>
<p className="text-sm text-neutral-500">Вы видите движение проекта по дням, а не по сезонам.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-white opacity-50"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-white font-medium mb-1">Фото/Видео фиксация</h4>
<p className="text-sm text-neutral-500">Еженедельные отчеты в ваш личный кабинет. Полный архив скрытых работ.</p>
</div>
</li>
</ul>
</div>

<div className="relative animate-enter delay-200">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full opacity-30"></div>

<div className="relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

<div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<div className="ml-4 h-6 w-64 bg-white/5 rounded text-[10px] flex items-center px-2 text-neutral-500 font-mono">nvsk-client-portal/dashboard/project-42</div>
</div>

<div className="p-6 grid grid-cols-2 gap-4">

<div className="col-span-2 bg-neutral-950 border border-white/5 p-4 rounded">
<div className="flex justify-between mb-4">
<span className="text-xs text-neutral-500 uppercase">Этап работ</span>
<span className="text-xs text-white bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/20">В графике</span>
</div>
<div className="text-sm text-white mb-2">Монтаж инженерных сетей</div>
<div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-white w-[78%] h-full rounded-full"></div>
</div>
</div>

<div className="bg-neutral-950 border border-white/5 p-4 rounded flex flex-col justify-between">
<span className="text-xs text-neutral-500 uppercase">Бюджет</span>
<div className="mt-2 text-xl font-mono text-white">4.2M ₽</div>
<div className="text-[10px] text-neutral-500 mt-1">Освоено: 65%</div>
</div>

<div className="bg-neutral-950 border border-white/5 p-4 rounded flex flex-col justify-between">
<span className="text-xs text-neutral-500 uppercase">След. платеж</span>
<div className="mt-2 text-xl font-mono text-white">12 Окт</div>
<div className="text-[10px] text-neutral-500 mt-1">По этапу №4</div>
</div>

<div className="col-span-2 bg-neutral-950 border border-white/5 p-4 rounded space-y-3">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px]">Н</div>
<div className="bg-neutral-800 p-2 rounded-r-lg rounded-bl-lg text-xs text-neutral-300">
                                    Бетон марки М350 принят. Лабораторные испытания пройдены. Фотоотчет загружен.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Реализованные системы</h2>
<a className="hidden md:flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" href="#">
<span>Весь реестр</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-1">

<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Project House" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Вилла "Монолит"</h3>
<p className="text-sm text-neutral-400">Мысхако, Новороссийск</p>
</div>
<span className="text-xs font-mono text-neutral-500 uppercase">2023 / 340 м²</span>
</div>
<div className="grid grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
<div className="text-xs text-neutral-400"><span className="block text-white font-medium">8 мес</span>Срок</div>
<div className="text-xs text-neutral-400"><span className="block text-white font-medium">0%</span>Сверх сметы</div>
<div className="text-xs text-neutral-400 text-right">Посмотреть кейс -&gt;</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Project Interior" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
<div>
<h3 className="text-2xl font-medium text-white tracking-tight">Резиденция "Бухта"</h3>
<p className="text-sm text-neutral-400">Голубая Бухта, Геленджик</p>
</div>
<span className="text-xs font-mono text-neutral-500 uppercase">2024 / 210 м²</span>
</div>
<div className="grid grid-cols-3 gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0">
<div className="text-xs text-neutral-400"><span className="block text-white font-medium">6 мес</span>Срок</div>
<div className="text-xs text-neutral-400"><span className="block text-white font-medium">Premium</span>Отделка</div>
<div className="text-xs text-neutral-400 text-right">Посмотреть кейс -&gt;</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 border border-white/5 bg-neutral-950">
<div className="p-8 text-center group hover:bg-white/5 transition duration-300">
<div className="text-4xl font-semibold text-white mb-2 tracking-tighter">12+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Лет опыта</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition duration-300">
<div className="text-4xl font-semibold text-white mb-2 tracking-tighter">45</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Объектов сдано</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition duration-300">
<div className="text-4xl font-semibold text-white mb-2 tracking-tighter">3</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Города</div>
</div>
<div className="p-8 text-center group hover:bg-white/5 transition duration-300">
<div className="text-4xl font-semibold text-white mb-2 tracking-tighter">5 лет</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Гарантия</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                Готовы к структурированному процессу?
            </h2>
<p className="text-neutral-400 text-lg mb-12 leading-relaxed">
                Мы не берем все проекты подряд. Мы работаем с теми, кто ценит порядок, прозрачность и инженерный подход. Запросите доступ к системе для обсуждения вашего объекта.
            </p>
<form className="space-y-4 max-w-md mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="Ваше имя" type="text"/>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>

<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 p-4 text-sm text-white focus:outline-none focus:border-white/30 appearance-none cursor-pointer">
<option>Строительство дома</option>
<option>Комплексный ремонт</option>
<option>Инвестиционный проект</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-white text-neutral-950 font-medium p-4 hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 group" type="button">
<span>Инициировать обсуждение</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-neutral-600 mt-4">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки данных. Это не подписка на спам.
                </p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="text-2xl font-bold text-white tracking-tighter mb-4">НВСК</div>
<p className="text-sm text-neutral-500 max-w-xs">
                    Системный подход к строительству и управлению проектами в Новороссийске, Анапе и Геленджике.
                </p>
</div>
<div className="grid grid-cols-2 gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-1">Компания</span>
<a className="text-neutral-500 hover:text-white transition" href="#">О нас</a>
<a className="text-neutral-500 hover:text-white transition" href="#">Процессы</a>
<a className="text-neutral-500 hover:text-white transition" href="#">Гарантии</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium mb-1">Контакты</span>
<a className="text-neutral-500 hover:text-white transition" href="#">+7 (900) 000-00-00</a>
<a className="text-neutral-500 hover:text-white transition" href="#">info@nvsk.ru</a>
<div className="flex gap-4 mt-2">
<a className="text-neutral-500 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-telegram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition" href="#"><iconify-icon icon="solar:brand-whatsapp-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-neutral-700">
<span>© 2024 НВСК. Все права защищены.</span>
<span>Privacy Policy</span>
</div>
</footer>

    </>
  );
}
