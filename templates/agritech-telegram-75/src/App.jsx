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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 transition-colors group-hover:bg-emerald-100">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<span className="font-medium tracking-tight text-stone-900">Grain Intelligence</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-500">
<a className="hover:text-emerald-700 transition-colors" href="#">Можливості</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Підписка Stars</a>
<a className="hover:text-emerald-700 transition-colors" href="#">Аналітика</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Увійти</a>
<a className="text-sm font-medium bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-emerald-800 transition-all duration-300 shadow-lg shadow-emerald-900/10 border border-transparent" href="#">
                    Відкрити в Telegram
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden grain-gradient">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-50"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Нове: Оплата через Telegram Stars
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Інтелект, що вирощує <br/> <span className="text-emerald-700">ваші прибутки</span>
</h1>
<p className="text-lg text-stone-500 mb-8 font-light leading-relaxed max-w-lg">
                    Миттєвий доступ до ринкових цін, погодних прогнозів та агро-новин прямо у Telegram. Підписуйтесь зручно за допомогою Telegram Stars.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="send"></i>
                        Запустити бота
                    </button>
<button className="px-6 py-3 rounded-xl bg-white border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2 group">
<i className="w-4 h-4 text-amber-400 fill-amber-400 group-hover:scale-110 transition-transform" data-lucide="star"></i>
                        Про підписку Stars
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-stone-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-500">AG</div>
<div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-500">UK</div>
<div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-white flex items-center justify-center text-xs font-bold text-stone-600">ST</div>
</div>
<p>Більше 2,000 аграріїв вже використовують</p>
</div>
</div>

<div className="relative h-[600px] flex items-center justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/20 to-amber-200/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

<div className="absolute left-0 lg:left-10 top-10 w-[300px] h-[580px] bg-stone-900 rounded-[3rem] p-3 shadow-2xl border-4 border-stone-800 transform -rotate-6 scale-90 opacity-90 z-10 transition-transform duration-500 hover:rotate-0 hover:z-30 hover:scale-100 hover:opacity-100">
<div className="w-full h-full bg-stone-50 rounded-[2.2rem] overflow-hidden relative border border-stone-800">

<div className="h-24 bg-stone-100 border-b border-stone-200 px-6 pt-10 pb-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="sprout"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900 text-sm">Grain Bot</h3>
<p className="text-xs text-emerald-600">bot</p>
</div>
</div>

<div className="p-4 space-y-3 bg-stone-200/50 h-full telegram-bg">
<div className="flex flex-col gap-2 bg-white rounded-xl rounded-tl-none p-3 shadow-sm max-w-[85%]">
<span className="text-xs font-medium text-emerald-600 mb-1">Ринок зерна</span>
<div className="space-y-2">
<div className="flex justify-between text-xs border-b border-stone-100 pb-1">
<span className="text-stone-600">Пшениця 2 кл.</span>
<span className="font-semibold text-stone-900">195 $/т</span>
</div>
<div className="flex justify-between text-xs border-b border-stone-100 pb-1">
<span className="text-stone-600">Кукурудза</span>
<span className="font-semibold text-stone-900">168 $/т</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-stone-600">Соняшник</span>
<span className="font-semibold text-stone-900">385 $/т</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute right-0 lg:right-4 top-0 w-[320px] h-[620px] bg-stone-950 rounded-[3.5rem] p-3 shadow-2xl shadow-emerald-900/30 border-[6px] border-stone-800 transform rotate-3 z-20 hover:rotate-0 transition-transform duration-500">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-30"></div>

<div className="w-full h-full bg-[#88CC9F] rounded-[2.8rem] overflow-hidden relative telegram-bg flex flex-col">

<div className="h-12 px-6 flex justify-between items-end pb-2 text-[10px] font-semibold text-black/80">
<span>11:29</span>
<div className="flex gap-1.5">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<i className="w-3 h-3" data-lucide="battery-medium"></i>
</div>
</div>

<div className="bg-[#f6f6f6]/90 backdrop-blur-md px-4 py-2 flex items-center gap-3 border-b border-black/5 z-20">
<i className="w-6 h-6 text-emerald-500" data-lucide="chevron-left"></i>
<div className="flex-1 text-center pr-6">
<h3 className="font-semibold text-black text-sm">Grain Intelligence Bot</h3>
<p className="text-[10px] text-gray-500">bot</p>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden">
<img alt="Bot" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Grain+Bot&amp;background=047857&amp;color=fff"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-3 relative">


<div className="flex justify-end">
<div className="bg-[#EEFFDE] text-black text-sm px-3 py-1.5 rounded-xl rounded-tr-sm shadow-sm max-w-[80%]">
<p>/subscribe</p>
<div className="flex justify-end items-center gap-1 mt-0.5">
<span className="text-[10px] text-[#5EB48D]">11:26</span>
<i className="w-3 h-3 text-[#5EB48D]" data-lucide="check-check"></i>
</div>
</div>
</div>

<div className="flex justify-start w-full">
<div className="bg-white text-black text-sm rounded-xl rounded-tl-sm shadow-sm max-w-[85%] w-full overflow-hidden">
<div className="p-3">
<p className="mb-3 font-medium">Оберіть тип підписки:</p>
<div className="space-y-1.5">
<div className="flex items-center gap-1">
<span>1 місяць - 599</span>
<i className="w-3 h-3 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
<div className="flex items-center gap-1">
<span>6 місяців - 1999</span>
<i className="w-3 h-3 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
<div className="flex items-center gap-1">
<span>12 місяців - 3699</span>
<i className="w-3 h-3 text-amber-400 fill-amber-400" data-lucide="star"></i>
</div>
</div>
<div className="flex justify-end mt-1">
<span className="text-[10px] text-gray-400">11:26</span>
</div>
</div>

<div className="p-1 bg-transparent space-y-1">
<button className="w-full bg-[#50A728] hover:bg-[#469622] text-white py-2 rounded-lg text-xs font-semibold flex justify-center items-center gap-1 shadow-sm transition-colors">
                                            1 місяць - 599 <i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
</button>
<button className="w-full bg-[#50A728] hover:bg-[#469622] text-white py-2 rounded-lg text-xs font-semibold flex justify-center items-center gap-1 shadow-sm transition-colors">
                                            6 місяців - 1999 <i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
</button>
<button className="w-full bg-[#50A728] hover:bg-[#469622] text-white py-2 rounded-lg text-xs font-semibold flex justify-center items-center gap-1 shadow-sm transition-colors">
                                            12 місяців - 3699 <i className="w-3 h-3 fill-white text-white" data-lucide="star"></i>
</button>
</div>
</div>
</div>

<div className="flex justify-start w-full animate-fade-in-up">
<div className="bg-white text-black text-sm rounded-xl rounded-tl-sm shadow-sm max-w-[75%] w-full overflow-hidden border border-emerald-100">
<div className="p-3 relative overflow-hidden">

<div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-400 rounded-full opacity-20"></div>
<div className="flex items-center gap-2 mb-1">
<span className="text-amber-500 text-xs font-bold uppercase tracking-wider">Invoice</span>
</div>
<h4 className="font-bold text-stone-800">Підписка month12</h4>
<p className="text-xs text-stone-500 mb-3">Підписка на 365 днів</p>
<div className="flex justify-end">
<span className="text-[10px] text-gray-400">11:26</span>
</div>
</div>
<div className="p-1">
<button className="w-full bg-[#36a617] hover:bg-[#309614] text-white py-2.5 rounded-lg text-sm font-bold flex justify-center items-center gap-1.5 shadow-md relative overflow-hidden group transition-all">
<span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                            Pay <i className="w-4 h-4 fill-white text-white" data-lucide="star"></i> 3,699
                                        </button>
</div>
</div>
</div>
</div>

<div className="bg-[#f6f6f6]/95 p-2 px-3 flex items-center gap-2 border-t border-black/5 z-20">
<div className="w-8 h-8 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="paperclip"></i>
</div>
<div className="flex-1 bg-white rounded-2xl h-9 px-3 flex items-center text-sm text-gray-400 border border-gray-200">
                                Message
                            </div>
<div className="w-8 h-8 flex items-center justify-center text-gray-400">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
</div>

<div className="h-5 w-full flex justify-center items-center bg-[#f6f6f6]">
<div className="w-32 h-1 bg-black/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-4">Вся агро-інформація <br/>в одному діалозі</h2>
<p className="text-stone-500 font-light">Grain Intelligence замінює десятки сайтів та таблиць, надаючи точні дані за секунди.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<i className="w-24 h-24 text-amber-500" data-lucide="star"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-amber-500 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Оплата через Stars</h3>
<p className="text-sm text-stone-500 leading-relaxed">Швидка оплата підписки цифровими товарами Telegram Stars. Безпечно та миттєво.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<i className="w-24 h-24 text-emerald-500" data-lucide="sun-medium"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="cloud-rain"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Агро-метеорологія</h3>
<p className="text-sm text-stone-500 leading-relaxed">Детальний прогноз погоди для конкретного поля. Опади, температура ґрунту, вологість.</p>
</div>

<div className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 cursor-default relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
<i className="w-24 h-24 text-blue-500" data-lucide="bar-chart-3"></i>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-emerald-700 mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Моніторинг цін</h3>
<p className="text-sm text-stone-500 leading-relaxed">Актуальні закупівельні ціни трейдерів в портах та на елеваторах. Історія змін та прогнози.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-100 bg-stone-50">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200/60 flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="text-xs text-stone-400 font-medium uppercase">Пшениця</span>
<span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded text-[10px]">+2.4%</span>
</div>
<div>
<div className="text-2xl font-medium text-stone-900 mb-1">195 $/т</div>
<div className="w-full h-1 bg-stone-100 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-stone-800 rounded-full"></div>
</div>
</div>
</div>
<div className="bg-emerald-900 p-6 rounded-2xl shadow-sm border border-emerald-800 flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="text-xs text-emerald-300 font-medium uppercase">Вологість ґрунту</span>
<i className="w-4 h-4 text-emerald-400" data-lucide="droplets"></i>
</div>
<div>
<div className="text-2xl font-medium text-white mb-1">24%</div>
<div className="w-full h-1 bg-emerald-800 rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-emerald-400 rounded-full"></div>
</div>
</div>
</div>
<div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-stone-200/60">
<div className="flex items-center gap-4 mb-4">
<div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="truck"></i>
</div>
<div className="text-sm font-medium text-stone-900">Черга в порту Південний</div>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-full bg-stone-100 rounded-sm h-[40%]"></div>
<div className="w-full bg-stone-100 rounded-sm h-[60%]"></div>
<div className="w-full bg-emerald-500 rounded-sm h-[80%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-stone-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Сьогодні</div>
</div>
<div className="w-full bg-stone-100 rounded-sm h-[50%]"></div>
<div className="w-full bg-stone-100 rounded-sm h-[30%]"></div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-stone-900 mb-6">Дані, що перетворюються <br/>на стратегію</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-1 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium text-sm mb-1">Об'єктивність</h4>
<p className="text-stone-500 text-sm leading-relaxed">Ми збираємо дані з понад 50 джерел, виключаючи людський фактор та маніпуляції.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-1 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium text-sm mb-1">Швидкість</h4>
<p className="text-stone-500 text-sm leading-relaxed">Оновлення інформації відбувається в реальному часі. Ви дізнаєтесь про зміни першими.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-1 shrink-0">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<h4 className="text-stone-900 font-medium text-sm mb-1">Персоналізація</h4>
<p className="text-stone-500 text-sm leading-relaxed">Налаштуйте сповіщення лише по тих культурах та регіонах, що цікавлять саме вас.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-5xl mx-auto px-6">
<div className="relative bg-emerald-900 rounded-3xl overflow-hidden px-6 py-16 md:px-16 md:py-20 text-center">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" height="100%" preserveaspectratio="none" viewbox="0 0 100 100" width="100%">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
<path d="M0 100 C 30 20 70 20 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
<path d="M0 100 C 40 40 60 40 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Готові оптимізувати свій агробізнес?</h2>
<p className="text-emerald-200/80 mb-8 max-w-lg mx-auto font-light">Долучайтесь до закритого тестування Grain Intelligence та отримайте знижку при оплаті Telegram Stars.</p>
<form className="max-w-sm mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-emerald-200/50 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm" placeholder="Ваш Email" type="email"/>
<button className="bg-white text-emerald-900 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors shadow-lg" type="submit">
                            Приєднатись
                        </button>
</form>
<p className="text-xs text-emerald-400/60 mt-4">Ми не передаємо дані третім особам.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-emerald-700" data-lucide="sprout"></i>
<span className="font-semibold text-stone-900 tracking-tight">Grain Intelligence</span>
</div>
<p className="text-sm text-stone-500 max-w-xs leading-relaxed">
                        Інноваційна платформа для аграріїв, що поєднує штучний інтелект та великі дані для прийняття ефективних рішень.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Продукт</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Функціонал</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Telegram Bot</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Stars Оплата</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">API</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Компанія</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Про нас</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Блог</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Кар'єра</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Контакти</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2023 Grain Intelligence. Всі права захищено.</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-600" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-stone-400 hover:text-stone-600" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-stone-400 hover:text-stone-600" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
