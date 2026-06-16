import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            menuIconOpen.classList.toggle('hidden');
            menuIconClose.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                menuIconClose.classList.add('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-b border-blue-200 sticky top-0 z-50 bg-white/95 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 z-50 group no-underline" href="#">
<div className="relative w-10 h-10 flex-shrink-0">

<svg className="w-full h-full drop-shadow-sm transform group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M50 6 L92 29 V71 L50 94 L8 71 V29 Z" stroke="#0B254E" strokeLinejoin="round" strokeWidth="8"></path>

<g transform="translate(50,50)">

<circle cx="0" cy="0" fill="#0B254E" r="10"></circle>

<path d="M-12 -18 A 22 22 0 0 0 -12 18" stroke="#D92D20" strokeLinecap="round" strokeWidth="7"></path>

<path d="M12 18 A 22 22 0 0 0 12 -18" stroke="#3B7BC8" strokeLinecap="round" strokeWidth="7" transform="rotate(180)"></path>
</g>
</svg>
</div>
<div className="flex flex-col justify-center select-none">
<div className="flex items-baseline leading-none -mt-0.5">
<span className="text-xl font-bold text-[#0B254E] tracking-tighter">ИнТех</span>
<span className="text-xl font-bold text-[#D92D20] tracking-tighter">про</span>
</div>
<span className="text-[0.5rem] font-bold text-[#0B254E] uppercase tracking-[0.15em] leading-none mt-1 whitespace-nowrap">Архитектура безопасности</span>
</div>
</a>

<nav className="hidden md:flex text-sm font-medium text-blue-600 items-center gap-8">
<a className="hover:text-blue-900 transition-colors" href="#">Системы</a>
<a className="hover:text-blue-900 transition-colors" href="#">Кейсы</a>
<a className="hover:text-blue-900 transition-colors" href="#">Библиотека</a>
<a className="hover:text-blue-900 transition-colors" href="#">Лаборатория</a>
</nav>

<div className="hidden md:block">
<a className="text-sm font-medium text-cyan-700 hover:text-cyan-800 transition-colors" href="#contact">
                    Связаться
                </a>
</div>

<button className="md:hidden z-50 p-2 -mr-2 text-blue-900 hover:bg-blue-50 rounded transition-colors focus:outline-none" id="menu-btn">
<iconify-icon icon="lucide:menu" id="menu-icon-open" width="24"></iconify-icon>
<iconify-icon className="hidden" icon="lucide:x" id="menu-icon-close" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-16 left-0 w-full bg-white border-b border-blue-200 shadow-xl md:hidden flex flex-col p-6 gap-4 z-40" id="mobile-menu">
<nav className="flex flex-col space-y-4 text-base font-medium text-blue-600">
<a className="hover:text-blue-900 hover:bg-blue-50 px-4 py-2 rounded -mx-4 transition-colors" href="#">Системы</a>
<a className="hover:text-blue-900 hover:bg-blue-50 px-4 py-2 rounded -mx-4 transition-colors" href="#">Кейсы</a>
<a className="hover:text-blue-900 hover:bg-blue-50 px-4 py-2 rounded -mx-4 transition-colors" href="#">Библиотека</a>
<a className="hover:text-blue-900 hover:bg-blue-50 px-4 py-2 rounded -mx-4 transition-colors" href="#">Лаборатория</a>
</nav>
<div className="border-t border-blue-100 pt-4 mt-2">
<a className="flex items-center justify-center w-full px-4 py-3 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800 transition-colors" href="#contact">
                    Связаться
                </a>
</div>
</div>
</header>

<section className="relative md:pt-32 md:pb-24 pt-24 pb-20 overflow-hidden border-b border-blue-200">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed opacity-20 grayscale mix-blend-multiply"></div>

<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95"></div>

<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/60 backdrop-blur-sm border border-blue-200/60 rounded-full mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
<span className="text-xs font-medium text-blue-700 uppercase tracking-wider">Инженерные системы 2.0</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-blue-900 tracking-tighter leading-[1.1] mb-8 drop-shadow-sm">
                    Инженерный хаб по слаботочным и системам безопасности
                </h1>
<p className="text-lg md:text-xl text-blue-600 max-w-2xl leading-relaxed font-light mb-10">
                    Кейсы, методики и практический инженерный опыт. <br className="hidden md:block"/>
                    Для тех, кто строит и эксплуатирует реальные объекты.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800 transition-all shadow-sm hover:shadow-md min-w-[160px]">
<span className="">Смотреть кейсы</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-300 text-blue-700 text-sm font-medium rounded hover:bg-white transition-colors min-w-[160px]">
<iconify-icon icon="lucide:book" width="16"></iconify-icon>
<span className="">Библиотека знаний</span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-white border-blue-200 border-b">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 md:divide-x divide-blue-200">
<div className="group hover:bg-blue-50 transition-colors pt-8 pr-8 pb-8 pl-8">
<div className="text-3xl font-medium text-blue-900 tracking-tight mb-1">120+</div>
<div className="text-sm text-blue-500 font-medium">Реализованных объектов</div>
</div>
<div className="p-8 group hover:bg-blue-50 transition-colors">
<div className="text-3xl font-medium text-blue-900 tracking-tight mb-1">Фокус</div>
<div className="text-sm text-blue-500 font-medium">Логистика / БЦ / Пром</div>
</div>
<div className="p-8 group hover:bg-blue-50 transition-colors">
<div className="text-3xl font-medium text-blue-900 tracking-tight mb-1">99,95%</div>
<div className="text-sm text-blue-500 font-medium">SLA надежности</div>
</div>
<div className="p-8 group hover:bg-blue-50 transition-colors">
<div className="text-3xl font-medium text-blue-900 tracking-tight mb-1">100%</div>
<div className="text-sm text-blue-500 font-medium">Сертифицированные инженеры</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-blue-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-blue-900 mb-4">Классификация систем</h2>
<p className="text-blue-500 max-w-xl">Полный перечень слаботочных систем (СС), с которыми мы работаем на этапах проектирования, монтажа и ПНР.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-blue-200">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-blue-900">Комплексная безопасность</h3>
</div>
<ul className="space-y-0">
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Пожарная сигнализация</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">АПС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Оповещение и эвакуация</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">СОУЭ</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Охранная сигнализация</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">ОС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Контроль доступа</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">СКУД</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Видеонаблюдение</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">СОТ</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Газовое пожаротушение</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">АУГПТ</span>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-blue-200">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
<iconify-icon icon="lucide:network" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-blue-900">Связь и телекоммуникации</h3>
</div>
<ul className="space-y-0">
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Структурированные сети</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">СКС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Локальные сети</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">ЛВС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Волоконно-оптические линии</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">ВОЛС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Беспроводные сети</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">Wi-Fi</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">IP-Телефония</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">АТС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Усиление сотовой связи</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">DAS</span>
</li>
</ul>
</div>

<div className="">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-blue-200">
<div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
<iconify-icon icon="lucide:settings-2" width="16"></iconify-icon>
</div>
<h3 className="font-medium text-blue-900">Автоматизация и Медиа</h3>
</div>
<ul className="space-y-0">
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Диспетчеризация</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">АСДУ</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Автоматизация зданий</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">BMS</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Часофикация</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">СЕВ</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Конференц-связь</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">ВКС</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Телевидение</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">IPTV</span>
</li>
<li className="flex items-center justify-between py-3 border-b border-blue-100 hover:bg-blue-50 px-2 -mx-2 transition-colors group cursor-default">
<span className="text-sm text-blue-900 font-medium">Учет ресурсов</span>
<span className="text-[10px] font-mono font-medium text-blue-400 bg-blue-50 px-1.5 py-0.5 rounded group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">АСКУЭ</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-blue-50 border-blue-200 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-blue-900 mb-2">Инженерные кейсы</h2>
<p className="text-blue-500">Решения сложных технических задач на объектах.</p>
</div>
<a className="text-sm font-medium text-blue-900 border-b border-blue-300 hover:border-blue-900 pb-0.5 transition-colors inline-block" href="#">Все кейсы</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="bg-white border border-blue-200 p-8 rounded-lg flex flex-col h-full hover:border-blue-300 hover:shadow-sm transition-all group">
<div className="mb-6">
<span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded">Логистика</span>
</div>
<h3 className="text-xl font-medium text-blue-900 mb-6 tracking-tight group-hover:text-cyan-700 transition-colors">CCTV для склада 40 000 м² без слепых зон</h3>
<div className="space-y-4 mb-8 flex-grow">
<div className="">
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Задача</span>
<p className="text-sm text-blue-600">Обеспечить контроль сборки заказов с детализацией до этикетки.</p>
</div>
<div className="">
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Результат</span>
<p className="text-sm text-blue-600">Снижение рекламаций на 35%, полный видеоархив 60 дней.</p>
</div>
</div>
<div className="pt-6 border-t border-blue-100 mt-auto">
<span className="flex items-center gap-2 text-sm font-medium text-blue-900">
                            Читать кейс 
                            <iconify-icon className="text-blue-400 group-hover:text-blue-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</span>
</div>
</article>

<article className="bg-white border border-blue-200 p-8 rounded-lg flex flex-col h-full hover:border-blue-300 hover:shadow-sm transition-all group">
<div className="mb-6">
<span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded">Офис</span>
</div>
<h3 className="text-xl font-medium text-blue-900 mb-6 tracking-tight group-hover:text-cyan-700 transition-colors">СКУД для офиса на 500+ сотрудников</h3>
<div className="space-y-4 mb-8 flex-grow">
<div>
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Задача</span>
<p className="text-sm text-blue-600">Разграничение доступа по зонам секретности и интеграция с FaceID.</p>
</div>
<div>
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Результат</span>
<p className="text-sm text-blue-600">Бесшовный проход &lt;1с, автоматический учет рабочего времени.</p>
</div>
</div>
<div className="pt-6 border-t border-blue-100 mt-auto">
<span className="text-sm font-medium text-blue-900 flex items-center gap-2">
                            Читать кейс 
                            <iconify-icon className="text-blue-400 group-hover:text-blue-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</span>
</div>
</article>

<article className="bg-white border border-blue-200 p-8 rounded-lg flex flex-col h-full hover:border-blue-300 hover:shadow-sm transition-all group">
<div className="mb-6">
<span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2 py-1 rounded">Реконструкция</span>
</div>
<h3 className="text-xl font-medium text-blue-900 mb-6 tracking-tight group-hover:text-cyan-700 transition-colors">Модернизация пожарной системы без остановки</h3>
<div className="space-y-4 mb-8 flex-grow">
<div className="">
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Задача</span>
<p className="text-sm text-blue-600">Замена аналоговой системы на адресную в действующем ТЦ.</p>
</div>
<div className="">
<span className="block text-xs text-blue-400 uppercase tracking-wide mb-1">Результат</span>
<p className="text-sm text-blue-600">Сдача объекта МЧС с первого раза, отсутствие ложных срабатываний.</p>
</div>
</div>
<div className="pt-6 border-t border-blue-100 mt-auto">
<span className="text-sm font-medium text-blue-900 flex items-center gap-2">
                            Читать кейс 
                            <iconify-icon className="text-blue-400 group-hover:text-blue-900 transition-colors" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-blue-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between md:items-start gap-12">
<div className="md:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight text-blue-900 mb-4">Библиотека знаний</h2>
<p className="text-blue-500 mb-8">Технические гайды, чек-листы и нормативная документация. Делимся опытом проектирования и пусконаладки.</p>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-blue-300 text-blue-700 text-sm font-medium rounded hover:bg-blue-50 transition-colors" href="#">
                        Перейти в библиотеку
                    </a>
</div>
<div className="md:w-2/3">
<ul className="border-t border-blue-200">
<li className="group">
<a className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-blue-200 group-hover:bg-blue-50 px-4 -mx-4 transition-colors" href="#">
<div className="flex items-start gap-4">
<div className="mt-1 text-blue-300 group-hover:text-cyan-600 transition-colors">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-base font-medium text-blue-900 mb-1">Как спроектировать видеонаблюдение без слепых зон</h4>
<p className="text-sm text-blue-500">Методика расчета фокусных расстояний и плотности пикселей.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-400" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</a>
</li>
<li className="group">
<a className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-blue-200 group-hover:bg-blue-50 px-4 -mx-4 transition-colors" href="#">
<div className="flex items-start gap-4">
<div className="mt-1 text-blue-300 group-hover:text-cyan-600 transition-colors">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-blue-900 mb-1">Практическое резервирование слаботочных систем</h4>
<p className="text-sm text-blue-500">Схемы питания, кольцевая топология и горячая замена.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-400" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</a>
</li>
<li className="group">
<a className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-blue-200 group-hover:bg-blue-50 px-4 -mx-4 transition-colors" href="#">
<div className="flex items-start gap-4">
<div className="mt-1 text-blue-300 group-hover:text-cyan-600 transition-colors">
<iconify-icon icon="lucide:alert-triangle" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-blue-900 mb-1">Что чаще всего ломается в эксплуатации</h4>
<p className="text-sm text-blue-500">Статистика отказов за 5 лет и способы их предотвращения.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-400" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</a>
</li>
<li className="group">
<a className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-blue-200 group-hover:bg-blue-50 px-4 -mx-4 transition-colors" href="#">
<div className="flex items-start gap-4">
<div className="mt-1 text-blue-300 group-hover:text-cyan-600 transition-colors">
<iconify-icon icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-blue-900 mb-1">Как правильно заказать проектирование</h4>
<p className="text-sm text-blue-500">Структура ТЗ, на которую не смогут пожаловаться подрядчики.</p>
</div>
</div>
<div className="mt-4 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-blue-400" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-blue-900 py-16 text-white border-b border-blue-800">
<div className="max-w-7xl mx-auto px-6">
<div className="border border-blue-700 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/20 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex-shrink-0 w-16 h-16 rounded bg-blue-800 flex items-center justify-center border border-blue-700 text-cyan-400">
<iconify-icon icon="lucide:microscope" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex-grow z-10">
<h3 className="text-xl font-medium tracking-tight mb-2">Лаборатория R&amp;D</h3>
<p className="text-blue-400 max-w-2xl leading-relaxed">
                        Мы не верим маркетинговым буклетам. Мы тестируем оборудование и решения на практике в собственной лаборатории.
                        Только реальные измерения, нагрузочные тесты, отчёты и подтвержденный опыт внедрения.
                    </p>
</div>
<div className="flex-shrink-0 z-10">
<button className="text-sm font-medium text-white border-b border-blue-500 hover:border-white transition-colors pb-1">
                        Смотреть отчеты тестов
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-white border-blue-200 border-b pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="flex text-blue-300 mb-6 justify-center">
<svg className="" data-icon-set="lucide" data-lucide="hexagon" height="40" style={{}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="md:text-3xl leading-tight text-2xl font-medium text-blue-900 tracking-tight mb-6">Мы — инжиниринговая компания.</p>
<p className="text-lg text-blue-500 leading-relaxed font-light">
                Наш фокус — надежность, строгое соответствие нормам и длительная эксплуатация систем. 
                Мы избегаем необоснованной сложности и проектируем решения, которые работают годами.
            </p>
</div>
</section>

<section className="bg-blue-50 pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-blue-900 mb-8">Готовы обсудить вашу задачу</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-cyan-700 text-white text-sm font-medium rounded hover:bg-cyan-800 transition-colors shadow-sm">
                    Связаться с инженером
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-blue-300 text-blue-700 text-sm font-medium rounded hover:bg-blue-50 transition-colors">
                    Запросить технический аудит
                </button>
</div>
<p className="mt-8 text-sm text-blue-400">Отвечаем в течение рабочего дня. Без спама.</p>
</div>
</section>

<footer className="bg-white py-16 border-t border-blue-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-blue-900 flex items-center justify-center text-white text-[10px] rounded-sm">
<iconify-icon icon="lucide:hexagon"></iconify-icon>
</div>
<span className="font-bold text-xs uppercase tracking-widest text-blue-900">ИнТехпро</span>
</div>
<p className="text-xs text-blue-500 leading-relaxed max-w-xs">
                        Профессиональный интегратор слаботочных систем и систем безопасности.
                    </p>
</div>

<div>
<h4 className="font-medium text-sm text-blue-900 mb-4">Навигация</h4>
<ul className="space-y-3">
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Кейсы</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Библиотека знаний</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Лаборатория R&amp;D</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">О компании</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-sm text-blue-900 mb-4">Услуги</h4>
<ul className="space-y-3">
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Проектирование</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Монтаж и пусконаладка</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Технический аудит</a></li>
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="#">Сервисное обслуживание</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-sm text-blue-900 mb-4">Контакты</h4>
<ul className="space-y-3">
<li><a className="text-sm text-blue-500 hover:text-blue-900 transition-colors" href="mailto:info@intechpro.ru">info@intechpro.ru</a></li>
<li><span className="text-sm text-blue-500">+7 (999) 000-00-00</span></li>
<li className="pt-2 flex gap-4">
<a className="text-blue-400 hover:text-blue-900 transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="text-blue-400 hover:text-blue-900 transition-colors" href="#">
<iconify-icon icon="lucide:send" width="18"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<p className="text-xs text-blue-400">© 2023 ИнТехпро. Все права защищены.</p>
<div className="flex gap-6">
<a className="text-xs text-blue-400 hover:text-blue-900 transition-colors" href="#">Политика конфиденциальности</a>
<a className="text-xs text-blue-400 hover:text-blue-900 transition-colors" href="#">Юридическая информация</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
