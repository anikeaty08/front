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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
                    Gazbeton
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-black transition-colors" href="#about">Технология</a>
<a className="hover:text-black transition-colors" href="#pricing">Цены</a>
<a className="hover:text-black transition-colors" href="#portfolio">Кейсы</a>
<a className="hover:text-black transition-colors" href="#reviews">Отзывы</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-slate-200 hover:bg-slate-50">
<i className="w-4 h-4 text-slate-600" data-lucide="search"></i>
</button>
<a className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full transition-all hover:scale-105 active:scale-95 hover:bg-slate-800" href="#contact">
                    Рассчитать смету
                    <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<button className="sm:hidden flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium border-slate-200">
                    Menu
                    <i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-[1400px] mx-auto px-6 mb-32">
<div className="max-w-4xl mx-auto text-center mb-16">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 leading-[0.95] text-slate-900">
                    Дома из газобетона<br/>
<span className="text-slate-400">с фиксированной сметой.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-slate-500">
                    Строим под ключ без скрытых платежей. Юридическая гарантия сроков и качества. Прозрачность на каждом этапе от фундамента до кровли.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full text-base font-medium transition-all hover:scale-105 hover:bg-slate-800" href="#contact">
                        Начать строительство
                        <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-2 px-8 py-4 bg-white border rounded-full text-base font-medium transition-all border-slate-200 text-slate-900 hover:bg-slate-50" href="#portfolio">
                        Смотреть проекты
                        <i className="w-4 h-4" data-lucide="layout-grid"></i>
</a>
</div>
</div>

<div className="relative w-full h-[500px] md:h-[700px] rounded-[40px] overflow-hidden group">
<img alt="Modern House" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-3 shadow-sm">
<span className="w-2 h-2 rounded-full animate-pulse bg-yellow-500"></span>
<span className="text-sm font-medium">Сдаем объекты точно в срок</span>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-2 pl-6 pr-2 rounded-full flex items-center justify-between gap-6 shadow-lg max-w-sm">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider text-slate-500">Проект месяца</span>
<span className="text-sm font-semibold">Villa 'Nordic', 145 м²</span>
</div>
<button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32" id="about">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-none max-w-2xl">
                    Полный цикл <br/>строительства.
                </h2>
<p className="max-w-md text-lg text-slate-500">
                    Мы решаем проблему «бесконечного ремонта». Вы получаете готовый дом с документацией.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-[32px] p-10 min-h-[400px] flex flex-col justify-between group transition-colors cursor-pointer relative overflow-hidden bg-slate-100 hover:bg-slate-200/80">
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-black" data-lucide="file-text"></i>
</div>
<h3 className="text-2xl font-medium mb-3">Прозрачная смета</h3>
<p className="leading-relaxed text-slate-500">
                            Детальная стоимость до гвоздя. Фиксируем цену в договоре и не меняем её в процессе.
                        </p>
</div>
<div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all ml-auto mt-8 border-slate-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="rounded-[32px] p-10 min-h-[400px] flex flex-col justify-between group transition-colors cursor-pointer bg-slate-100 hover:bg-slate-200/80">
<div>
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-black" data-lucide="brick-wall"></i>
</div>
<h3 className="text-2xl font-medium mb-3">Материалы D400/D500</h3>
<p className="leading-relaxed text-slate-500">
                            Используем только автоклавный газобетон с заводов-партнеров. Идеальная геометрия.
                        </p>
</div>
<div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all ml-auto mt-8 border-slate-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="rounded-[32px] p-10 min-h-[400px] flex flex-col justify-between group transition-colors cursor-pointer bg-slate-100 hover:bg-slate-200/80">
<div>
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-black" data-lucide="video"></i>
</div>
<h3 className="text-2xl font-medium mb-3">Видеоконтроль 24/7</h3>
<p className="leading-relaxed text-slate-500">
                            Ежедневные фото и видео отчеты в WhatsApp. Наблюдайте за стройкой с телефона.
                        </p>
</div>
<div className="w-12 h-12 rounded-full border flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-black transition-all ml-auto mt-8 border-slate-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-100">
<div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-geist">YTONG</span>
<span className="text-xl font-bold font-geist">BONOLIT</span>
<span className="text-xl font-bold font-geist">AEROC</span>
<span className="text-xl font-bold font-geist">СБЕРБАНК</span>
<span className="text-xl font-bold font-geist">DOM.RF</span>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32" id="pricing">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-center mb-16">Тарифы</h2>
<div className="grid lg:grid-cols-3 gap-6">

<div className="p-8 rounded-[32px] border transition-colors flex flex-col border-slate-200 hover:border-slate-400">
<div className="mb-8">
<span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100">Базовый</span>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight">25k</span>
<span className="text-slate-500">₽/м²</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> Фундамент плита
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> Стены 300мм
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> Кровля металл
                        </li>
</ul>
<a className="w-full py-4 rounded-full border font-medium text-center transition-colors border-slate-200 hover:bg-slate-50" href="#contact">Выбрать</a>
</div>

<div className="p-8 rounded-[32px] text-white flex flex-col relative overflow-hidden bg-slate-900">
<div className="absolute top-6 right-6">
<i className="w-6 h-6 text-white fill-white" data-lucide="star"></i>
</div>
<div className="mb-8">
<span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold uppercase tracking-wider">Популярный</span>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight">38k</span>
<span className="text-slate-400">₽/м²</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Всё из Базового
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Окна ПВХ (2 пакет)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<i className="w-5 h-5 text-white" data-lucide="check-circle-2"></i> Фасад штукатурка
                        </li>
</ul>
<a className="w-full py-4 rounded-full bg-white text-black font-medium text-center transition-colors hover:bg-slate-200" href="#contact">Начать проект</a>
</div>

<div className="p-8 rounded-[32px] border transition-colors flex flex-col border-slate-200 hover:border-slate-400">
<div className="mb-8">
<span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100">Премиум</span>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight">55k</span>
<span className="text-slate-500">₽/м²</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> White Box отделка
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> Все коммуникации
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<i className="w-5 h-5 text-black" data-lucide="check-circle-2"></i> Дизайн-проект
                        </li>
</ul>
<a className="w-full py-4 rounded-full border font-medium text-center transition-colors border-slate-200 hover:bg-slate-50" href="#contact">Выбрать</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Как мы строим</h2>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-all border-slate-200"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition-all border-slate-200"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between bg-slate-50">
<span className="text-6xl font-medium text-slate-200">01</span>
<div>
<h4 className="text-lg font-medium mb-2">Проект и смета</h4>
<p className="text-sm text-slate-500">Разработка разделов АР/КР, фиксация стоимости.</p>
</div>
</div>
<div className="p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between bg-slate-50">
<span className="text-6xl font-medium text-slate-200">02</span>
<div>
<h4 className="text-lg font-medium mb-2">Фундамент</h4>
<p className="text-sm text-slate-500">Земляные работы, заливка монолитной плиты.</p>
</div>
</div>
<div className="p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between bg-slate-50">
<span className="text-6xl font-medium text-slate-200">03</span>
<div>
<h4 className="text-lg font-medium mb-2">Коробка</h4>
<p className="text-sm text-slate-500">Кладка газобетона, армопояса, перекрытия.</p>
</div>
</div>
<div className="bg-black text-white p-8 rounded-[32px] min-h-[300px] flex flex-col justify-between">
<span className="text-6xl font-medium text-slate-700">04</span>
<div>
<h4 className="text-lg font-medium mb-2">Кровля и окна</h4>
<p className="text-sm text-slate-400">Монтаж крыши, остекление, сдача ключей.</p>
</div>
</div>
</div>
</section>

<section className="py-32 rounded-[48px] mx-4 mb-32 bg-slate-50" id="portfolio">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6">Реализованные проекты</h2>
<a className="inline-flex items-center gap-2 px-6 py-2 rounded-full border bg-white transition-colors text-sm font-medium border-slate-200 hover:bg-slate-50" href="#">
                        Смотреть все работы <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative rounded-[32px] overflow-hidden aspect-[4/3] cursor-pointer">
<img alt="House" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute top-8 right-8">
<div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                                Сдан 2023 <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="text-3xl font-medium mb-2">Проект "Скандинавия"</h3>
<p className="opacity-80">120 м² • 4 спальни • 3.5 млн ₽</p>
</div>
</div>

<div className="group relative rounded-[32px] overflow-hidden aspect-[4/3] cursor-pointer">
<img alt="House" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute top-8 right-8">
<div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm flex items-center gap-2">
                                Сдан 2022 <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="absolute bottom-10 left-10 text-white">
<h3 className="text-3xl font-medium mb-2">Коттедж "Лесной"</h3>
<p className="opacity-80">180 м² • 5 спален • 5.2 млн ₽</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32" id="reviews">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Что говорят клиенты</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border shadow-sm p-8 rounded-[32px] hover:shadow-md transition-shadow border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<h4 className="font-medium text-lg">Александр Иванов</h4>
<p className="text-sm text-slate-400">Москва</p>
</div>
</div>
<p className="leading-relaxed text-slate-600">
                        "Переживали за итоговую сумму, но ребята уложились копейка в копейку по договору. Дом теплый, живем второй год."
                    </p>
<div className="mt-6 flex text-black">
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
</div>
</div>

<div className="bg-white border shadow-sm p-8 rounded-[32px] hover:shadow-md transition-shadow border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=13"/>
</div>
<div>
<h4 className="font-medium text-lg">Дмитрий Смирнов</h4>
<p className="text-sm text-slate-400">Жуковка</p>
</div>
</div>
<p className="leading-relaxed text-slate-600">
                        "Видеоотчеты реально спасали нервы. Я не мог ездить на участок, но видел весь прогресс. Сдали раньше срока."
                    </p>
<div className="mt-6 flex text-black">
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
</div>
</div>

<div className="bg-white border shadow-sm p-8 rounded-[32px] hover:shadow-md transition-shadow border-slate-100">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=59"/>
</div>
<div>
<h4 className="font-medium text-lg">Максим Петров</h4>
<p className="text-sm text-slate-400">Истра</p>
</div>
</div>
<p className="leading-relaxed text-slate-600">
                        "Технадзор не нашел к чему придраться. Газобетон клали на клей-пену, швы идеальные. Рекомендую."
                    </p>
<div className="mt-6 flex text-black">
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
<i className="w-4 h-4 fill-black" data-lucide="star"></i>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 mb-32">
<div className="rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden bg-slate-900">

<div className="absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50 bg-slate-800"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50 bg-slate-800"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Построим дом мечты</h2>
<p className="mb-10 max-w-xl mx-auto text-lg text-slate-400">
                        Оставьте заявку сегодня. Скидка 50% на архитектурный проект при заключении договора в этом сезоне.
                    </p>
<form className="max-w-md mx-auto space-y-4" id="contact">
<div className="relative">
<input className="w-full h-14 pl-6 pr-4 rounded-full bg-white/10 border border-white/10 text-white focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm placeholder-slate-500" placeholder="Ваше имя" type="text"/>
</div>
<div className="relative">
<input className="w-full h-14 pl-6 pr-4 rounded-full bg-white/10 border border-white/10 text-white focus:outline-none focus:bg-white/20 transition-all backdrop-blur-sm placeholder-slate-500" placeholder="Телефон" type="tel"/>
</div>
<button className="w-full h-14 bg-white text-black font-medium rounded-full transition-colors flex items-center justify-center gap-2 hover:bg-slate-200" type="submit">
                            Обсудить проект
                            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t py-20 border-slate-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-black rounded-sm transform rotate-45"></div>
                        Gazbeton
                    </a>
<p className="text-sm leading-relaxed text-slate-500">
                        Современное строительство загородных домов. Надежность и экологичность.
                    </p>
</div>
<div>
<h4 className="font-medium mb-6">Компания</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-black transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-black transition-colors" href="#">Команда</a></li>
<li><a className="hover:text-black transition-colors" href="#">Вакансии</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6">Услуги</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-black transition-colors" href="#">Строительство</a></li>
<li><a className="hover:text-black transition-colors" href="#">Проектирование</a></li>
<li><a className="hover:text-black transition-colors" href="#">Ипотека</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6">Контакты</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Москва, ул. Строителей 12</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +7 (999) 000-00-00</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> info@gazbeton.pro</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t text-xs border-slate-100 text-slate-400">
<p>© 2023 Gazbeton.Pro. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-black" href="#">Privacy Policy</a>
<a className="hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
