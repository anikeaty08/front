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
      

<nav className="fixed top-0 w-full z-50 border-b border-blue-100 bg-white/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-blue-900 uppercase" href="#">
                    Ascona
                </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-blue-500 hover:text-blue-900 transition-colors" href="#catalog">Каталог</a>
<a className="text-sm font-medium text-blue-500 hover:text-blue-900 transition-colors" href="#technology">Технологии</a>
<a className="text-sm font-medium text-blue-500 hover:text-blue-900 transition-colors" href="#reviews">Отзывы</a>
<a className="text-sm font-medium text-blue-500 hover:text-blue-900 transition-colors" href="#promo">Акции</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-blue-500 hover:text-blue-900 transition-colors hover:bg-blue-50 rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="p-2 text-blue-500 hover:text-blue-900 transition-colors hover:bg-blue-50 rounded-full relative">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-600 rounded-full border border-white"></span>
</button>
<button className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-blue-800 transition-all">
<span>Войти</span>
</button>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium mb-6 border border-cyan-100">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse"></span>
                    Лидер рынка в России
                </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-blue-900 tracking-tight mb-6">
                    Идеальный сон <br/>
<span className="text-blue-400">начинается здесь.</span>
</h1>
<p className="text-lg text-blue-500 mb-8 max-w-lg leading-relaxed">
                    Премиальные анатомические матрасы, созданные с использованием инновационных технологий для восстановления вашего здоровья каждую ночь.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-blue-900 text-white text-sm font-medium hover:bg-blue-800 transition-all shadow-lg shadow-blue-200" href="#catalog">
                        Выбрать матрас
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-blue-200 text-blue-700 text-sm font-medium hover:bg-blue-50 transition-all" href="#quiz">
                        Пройти тест
                        <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="mt-12 flex items-center gap-6 text-sm text-blue-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span>100 дней на обмен</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-icon="lucide:shield-check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Гарантия 25 лет</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/50 to-transparent rounded-3xl transform rotate-3 scale-95 -z-10"></div>
<div className="overflow-hidden shadow-cyan-100 bg-white border-blue-100 border rounded-3xl shadow-2xl">
<img alt="Ascona Mattress Interior" className="hover:scale-105 transition-transform duration-700 w-full h-[500px] object-cover cursor-pointer" onclick="window.location.href='https://www.askona.ru/upload/medialibrary/2ff/2ff1564647c0ad5f9bf4ac3cde2897d2.jpeg'" role="button" src="https://www.askona.ru/upload/medialibrary/2ff/2ff1564647c0ad5f9bf4ac3cde2897d2.jpeg?w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-xl border border-blue-100 flex items-center gap-4 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:moon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs text-blue-500 uppercase tracking-wide font-medium">Технология сна</p>
<p className="text-sm font-medium text-blue-900">Поддержка позвоночника</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-blue-100 bg-blue-50/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-blue-400 uppercase tracking-widest mb-8">Нам доверяют лучшие отели мира</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale">

<span className="text-xl font-bold text-blue-900 tracking-tighter">HILTON</span>
<span className="text-xl font-bold text-blue-900 tracking-tighter">MARRIOTT</span>
<span className="text-xl font-bold text-blue-900 tracking-tighter">RADISSON</span>
<span className="text-xl font-bold text-blue-900 tracking-tighter">FOUR SEASONS</span>
<span className="text-xl font-bold text-blue-900 tracking-tighter">RITZ</span>
</div>
</div>
</section>

<section className="py-12" id="catalog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-blue-900 mb-2">Бестселлеры</h2>
<p className="text-blue-500">Выбор миллионов покупателей по всей России.</p>
</div>
<div className="flex gap-2 bg-blue-100 p-1 rounded-lg">
<button className="px-4 py-1.5 rounded-md bg-white shadow-sm text-xs font-medium text-blue-900">Все</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-blue-500 hover:text-blue-900">Жесткие</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-blue-500 hover:text-blue-900">Мягкие</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-blue-500 hover:text-blue-900">Ортопедические</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group flex flex-col">
<div className="relative bg-blue-50 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
<img alt="Serta Bennett" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1631049552057-403cdb8f0658?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-xs font-medium px-2 py-1 rounded text-blue-900 border border-blue-100">Хит продаж</span>
</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-900 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-blue-900">Serta Bennett</h3>
<div className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-blue-600">4.9</span>
</div>
</div>
<p className="text-sm text-blue-500 mb-3">Анатомическая пена с памятью формы</p>
<div className="mt-auto flex items-center gap-3">
<span className="text-lg font-medium text-blue-900">45 990 ₽</span>
<span className="text-sm text-blue-400 line-through">65 990 ₽</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative bg-blue-50 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
<img alt="Ascona Original" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-cyan-600 text-white text-xs font-medium px-2 py-1 rounded">-30%</span>
</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-900 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-blue-900">Ascona Original Pro</h3>
<div className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-blue-600">5.0</span>
</div>
</div>
<p className="text-sm text-blue-500 mb-3">Блок независимых пружин Hour Glass</p>
<div className="mt-auto flex items-center gap-3">
<span className="text-lg font-medium text-blue-900">28 500 ₽</span>
<span className="text-sm text-blue-400 line-through">40 700 ₽</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative bg-blue-50 rounded-2xl overflow-hidden aspect-[4/3] mb-4">
<img alt="Family Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-900 hover:text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-medium text-blue-900">Sleep Expert</h3>
<div className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:star" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-blue-600">4.8</span>
</div>
</div>
<p className="text-sm text-blue-500 mb-3">Идеальный баланс жесткости</p>
<div className="mt-auto flex items-center gap-3">
<span className="text-lg font-medium text-blue-900">19 990 ₽</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-cyan-600 transition-colors" href="#">
                    Смотреть весь каталог
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-blue-900 pt-24 pb-24 relative" id="technology">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block px-3 py-1 mb-6 rounded-full border border-blue-700 bg-blue-800 text-xs text-cyan-300 font-medium">
                        Научный подход
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Технология 7-зональной поддержки</h2>
<p className="text-blue-400 mb-8 leading-relaxed">
                        Каждая пружина работает индивидуально, подстраиваясь под особенности вашего тела. Мы используем запатентованную технологию Hour Glass ("Песочные часы"), которая обеспечивает тройной уровень упругости для максимального расслабления.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Многослойность</h4>
<p className="text-sm text-blue-400">Сочетание кокосовой койры, латекса и пены Memoform.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Терморегуляция</h4>
<p className="text-sm text-blue-400">Материалы отводят лишнее тепло, поддерживая комфортную температуру.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
<img alt="Technology Layers" className="hover:grayscale-0 transition-all duration-700 w-full border-blue-700 border rounded-2xl relative shadow-2xl grayscale object-cover" src="https://www.askona.ru/upload/medialibrary/2ff/2ff1564647c0ad5f9bf4ac3cde2897d2.jpeg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50" id="quiz">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-blue-900 mb-4">Подберем идеальный матрас за 1 минуту</h2>
<p className="text-blue-500 mb-10">Ответьте на 3 простых вопроса и получите персональную подборку с скидкой 5%.</p>
<div className="bg-white rounded-2xl shadow-sm border border-blue-200 p-8 text-left">
<div className="mb-6">
<span className="text-xs font-medium text-cyan-600 mb-2 block">Вопрос 1 из 3</span>
<h3 className="text-lg font-medium text-blue-900">В какой позе вы чаще всего спите?</h3>
</div>
<div className="space-y-3">
<label className="flex items-center p-4 border border-blue-200 rounded-xl cursor-pointer hover:border-cyan-500 hover:bg-cyan-50/30 transition-all group">
<input className="peer sr-only" name="pose" type="radio"/>
<div className="w-5 h-5 rounded-full border-2 border-blue-300 mr-4 peer-checked:border-cyan-600 peer-checked:bg-cyan-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
</div>
<span className="text-sm text-blue-700 font-medium group-hover:text-blue-900">На боку</span>
</label>
<label className="flex items-center p-4 border border-blue-200 rounded-xl cursor-pointer hover:border-cyan-500 hover:bg-cyan-50/30 transition-all group">
<input className="peer sr-only" name="pose" type="radio"/>
<div className="w-5 h-5 rounded-full border-2 border-blue-300 mr-4 peer-checked:border-cyan-600 peer-checked:bg-cyan-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
</div>
<span className="text-sm text-blue-700 font-medium group-hover:text-blue-900">На спине</span>
</label>
<label className="flex items-center p-4 border border-blue-200 rounded-xl cursor-pointer hover:border-cyan-500 hover:bg-cyan-50/30 transition-all group">
<input className="peer sr-only" name="pose" type="radio"/>
<div className="w-5 h-5 rounded-full border-2 border-blue-300 mr-4 peer-checked:border-cyan-600 peer-checked:bg-cyan-600 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
</div>
<span className="text-sm text-blue-700 font-medium group-hover:text-blue-900">На животе</span>
</label>
</div>
<div className="mt-8 flex justify-end">
<button className="bg-blue-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                        Далее
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-blue-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-blue-900 uppercase mb-6 inline-block" href="#">
                        Ascona
                    </a>
<p className="text-sm text-blue-500 max-w-xs mb-6">
                        Крупнейший вертикально-интегрированный ритейлер товаров для здорового сна в Восточной Европе.
                    </p>
<div className="flex gap-4">
<a className="text-blue-400 hover:text-blue-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-blue-400 hover:text-blue-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-blue-400 hover:text-blue-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-blue-900 mb-4 text-sm">Каталог</h4>
<ul className="space-y-3 text-sm text-blue-500">
<li><a className="hover:text-cyan-600 transition-colors" href="#">Матрасы</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#">Кровати</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-blue-900 mb-4 text-sm">Покупателям</h4>
<ul className="space-y-3 text-sm text-blue-500">
<li><a className="hover:text-cyan-600 transition-colors" href="#">Доставка и оплата</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#">Обмен и возврат</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-blue-900 mb-4 text-sm">Компания</h4>
<ul className="space-y-3 text-sm text-blue-500">
<li><a className="hover:text-cyan-600 transition-colors" href="#">О нас</a></li>
<li><a className="hover:text-cyan-600 transition-colors" href="#">Контакты</a></li>
</ul>
</div>
</div>
<div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-blue-400">© 2023 Askona. Все права защищены.</p>
<div className="flex gap-6">
<a className="text-xs text-blue-400 hover:text-blue-600" href="#">Политика конфиденциальности</a>
<a className="text-xs text-blue-400 hover:text-blue-600" href="#">Оферта</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
