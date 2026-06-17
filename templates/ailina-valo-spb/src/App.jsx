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
serif: ['Playfair Display', 'serif'],
},
colors: {
valo: {
base: '#02040a',
surface: '#0b1221',
gold: '#D4AF37',
goldlight: '#FAE5AB',
golddim: '#8a6d3b',
}
},
backgroundImage: {
'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)',
'night-petersburg': 'radial-gradient(circle at 50% 0%, rgba(20, 30, 55, 0.8) 0%, #02040a 100%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-valo-base/80 backdrop-blur-md border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="tracking-[0.2em] text-lg text-white font-medium uppercase border border-white/20 px-3 py-1">
                Ailina
            </div>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
<a className="hover:text-valo-gold transition-colors duration-300" href="#about">О проекте</a>
<a className="hover:text-valo-gold transition-colors duration-300" href="#features">Возможности</a>
<a className="hover:text-valo-gold transition-colors duration-300" href="#routes">Маршруты</a>
<a className="hover:text-valo-gold transition-colors duration-300" href="#partners">Партнёры</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-valo-gold hover:text-white transition-colors duration-300" href="#access">
<i className="w-4 h-4" data-lucide="key"></i>
<span>Личный кабинет</span>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-valo-base">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-valo-gold/5 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1 pt-8 lg:pt-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-valo-gold/20 bg-valo-gold/5 backdrop-blur-sm mb-8 animate-[fadeIn_1s_ease-out_forwards]">
<span className="w-1.5 h-1.5 rounded-full bg-valo-gold animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-valo-gold">AI Concierge Online</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.95] tracking-tight animate-[fadeIn_1s_ease-out_0.2s_forwards]">
                    Аилина.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Ваш личный</span><br/>
<span className="text-gold-gradient italic">консьерж.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-lg mb-10 leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_forwards]">
                    Я профессиональный цифровой гид VALO. Объединяю сервисы резидентов и ритм Санкт-Петербурга в одном диалоге.
                </p>
<div className="flex flex-col sm:flex-row gap-5 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
<button className="group relative px-8 py-4 bg-valo-gold hover:bg-[#c5a028] transition-all duration-300 rounded-sm overflow-hidden">
<span className="relative flex items-center gap-3 text-valo-base font-semibold tracking-widest uppercase text-xs">
                            Начать диалог
                            <i className="w-4 h-4" data-lucide="message-circle"></i>
</span>
</button>
<button className="px-8 py-4 border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 rounded-sm">
<span className="flex items-center gap-3 text-white font-medium tracking-widest uppercase text-xs">
                            Возможности
                            <i className="w-4 h-4 text-slate-500" data-lucide="arrow-down"></i>
</span>
</button>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex gap-8 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
<div>
<p className="text-2xl font-serif text-white">24/7</p>
<p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Поддержка</p>
</div>
<div>
<p className="text-2xl font-serif text-white">150+</p>
<p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Партнёров</p>
</div>
<div>
<p className="text-2xl font-serif text-white">0₽</p>
<p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Старт</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] lg:h-[800px] flex items-end justify-center lg:justify-end animate-[fadeIn_1s_ease-out_0.4s_forwards]">

<div className="absolute top-20 right-10 w-64 h-64 bg-valo-gold/20 rounded-full blur-[80px]"></div>

<div className="relative z-10 w-full h-full max-w-lg">

<img alt="Ailina AI Concierge" className="object-top mask-gradient-bottom hover:opacity-100 transition-opacity duration-700 grayscale-[20%] hover:grayscale-0 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b14011b1-989c-4093-8e59-19814eea5fd4_1600w.jpg"/>

<div className="absolute bottom-24 -left-6 glass-card p-4 rounded-sm border border-white/10 max-w-[260px] animate-bounce [animation-duration:3s]">
<div className="flex gap-3 items-center">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
<span className="text-[10px] text-slate-400 uppercase tracking-widest">Сейчас в Петербурге</span>
</div>
<p className="text-white text-sm mt-2 font-light leading-snug">
                            "Вечер обещает быть джазовым. В <span className="text-valo-gold">The Hat</span> сегодня джем-сейшн. Забронировать?"
                        </p>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 relative bg-valo-base border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight tracking-tight">
                        Город открывается точнее, <br/>когда рядом <span className="text-valo-gold">свой человек</span>
</h2>
<p className="text-slate-400 font-light leading-relaxed mb-8 text-lg">
                        Аилина — это не просто алгоритм. Это цифровая проекция лучшего консьержа. Она помогает гостям и резидентам VALO: подбирает заведения, предлагает события и нативно открывает доступ к привилегиям.
                    </p>
<ul className="space-y-8">
<li className="flex items-start gap-5 group">
<div className="p-3 rounded-full bg-valo-gold/5 text-valo-gold border border-valo-gold/20 group-hover:bg-valo-gold/10 transition-colors">
<i className="w-5 h-5" data-lucide="map"></i>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-1">Персональные маршруты</h4>
<p className="text-sm text-slate-500">Учитывает погоду, ваше настроение и свободное время.</p>
</div>
</li>
<li className="flex items-start gap-5 group">
<div className="p-3 rounded-full bg-valo-gold/5 text-valo-gold border border-valo-gold/20 group-hover:bg-valo-gold/10 transition-colors">
<i className="w-5 h-5" data-lucide="gem"></i>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-1">Привилегии резидентов</h4>
<p className="text-sm text-slate-500">Закрытые предложения от сервисов VALO и партнёров.</p>
</div>
</li>
<li className="flex items-start gap-5 group">
<div className="p-3 rounded-full bg-valo-gold/5 text-valo-gold border border-valo-gold/20 group-hover:bg-valo-gold/10 transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-1">Сервис в диалоге</h4>
<p className="text-sm text-slate-500">Заказ уборки, столика или билетов без лишних звонков.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 relative group bg-valo-surface">

<div className="absolute inset-0 flex flex-col p-6 lg:p-10">

<div className="flex items-center gap-4 pb-6 border-b border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-valo-gold to-yellow-700 p-[1px]">
<img className="w-full h-full rounded-full object-cover grayscale brightness-110" src="https://images.unsplash.com/photo-1534008779836-93257cb9b650?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white text-sm font-medium">Ailina Guide</div>
<div className="text-valo-gold text-[10px] uppercase tracking-wider">Online</div>
</div>
</div>

<div className="flex-1 py-6 space-y-6 overflow-hidden">
<div className="flex gap-4">
<div className="text-xs text-slate-300 bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%] leading-relaxed">
                                        Доброе утро! Сегодня в Петербурге солнечно, +18. Идеально для завтрака на веранде. Рекомендую <b className="text-white">Charlie</b> на канале Грибоедова. У резидентов VALO там комплимент — бокал игристого. Забронировать?
                                    </div>
</div>
<div className="flex justify-end">
<div className="text-valo-base text-xs font-medium bg-amber-200 max-w-[80%] rounded-2xl pt-3 pr-3 pb-3 pl-3">Да, давай на 11:00. Какая сегодня погода?</div>
</div>
<div className="flex gap-4">
<div className="text-xs text-slate-300 bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 max-w-[85%] leading-relaxed flex flex-col gap-2">
<span className="">Готово. Столик #4 у окна подтверждён. Maybach прибудет к лобби через 15 минут.</span>
<div className="flex gap-2 mt-1">
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/10">Бронь #8821</span>
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/10">Такси в пути</span>
</div>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<div className="bg-black/20 rounded-full h-10 w-full border border-white/10 px-4 flex items-center justify-between text-slate-500 text-xs">
<span>Написать сообщение...</span>
<i className="w-3 h-3 text-valo-gold" data-lucide="send"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-800 pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-valo-gold text-xs uppercase tracking-[0.2em] mb-3 block">Возможности</span>
<h2 className="font-serif text-3xl md:text-4xl text-white">Что умеет Аилина</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="map-pin"></i>
<h3 className="text-white text-lg font-medium mb-3">Маршруты под ритм</h3>
<p className="text-sm text-slate-400 font-light">Составляет прогулки, учитывая вашу скорость, интересы и настроение момента.</p>
</div>

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="wine"></i>
<h3 className="text-white text-lg font-medium mb-3">Гастрономия</h3>
<p className="text-sm text-slate-400 font-light">Рекомендует рестораны, кофейни и бары. Бронирует лучшие столики.</p>
</div>

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="ticket"></i>
<h3 className="text-white text-lg font-medium mb-3">Культурная афиша</h3>
<p className="text-sm text-slate-400 font-light">Знает, где проходят лучшие премьеры, выставки и закрытые мероприятия.</p>
</div>

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="percent"></i>
<h3 className="text-white text-lg font-medium mb-3">Привилегии</h3>
<p className="text-sm text-slate-400 font-light">Ведёт по партнёрам, предоставляя скидки и комплименты при предъявлении карты.</p>
</div>

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="building-2"></i>
<h3 className="text-white text-lg font-medium mb-3">Сервисы VALO</h3>
<p className="text-sm text-slate-400 font-light">SPA, фитнес, уборка или доставка — всё внутри экосистемы отеля.</p>
</div>

<div className="glass-card p-8 rounded-sm hover:bg-white/5 transition-all duration-300 gold-border-hover group">
<i className="w-8 h-8 text-valo-gold mb-6 group-hover:scale-110 transition-transform stroke-1" data-lucide="clock"></i>
<h3 className="text-white text-lg font-medium mb-3">Экономия времени</h3>
<p className="text-sm text-slate-400 font-light">Всё решается в одном сообщении. Без поиска в Google и звонков.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-valo-base" id="routes">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-5xl text-white mb-6 tracking-tight">Карты, превращающие город в привилегию</h2>
<div className="w-24 h-[1px] bg-valo-gold mx-auto opacity-50"></div>
<p className="text-slate-400 mt-6 max-w-2xl mx-auto font-light">Выберите уровень доступа к сервисам резидентов VALO и возможностям города.</p>
</div>

<div className="mb-24">
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col min-h-[500px]">
<div className="mb-8 pb-8 border-b border-white/5">
<span className="text-slate-500 text-[10px] tracking-[0.2em] uppercase block mb-3">Start</span>
<span className="text-3xl text-white font-serif block mb-2">Economy</span>
<span className="text-slate-400 text-sm font-light">Для знакомства с отелем</span>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-slate-500" data-lucide="home"></i> Внутри VALO
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400 font-light">
<i className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" data-lucide="check"></i>
<span>Спецпредложения резидентов (базовые)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-400 font-light">
<i className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" data-lucide="check"></i>
<span>Гид по событиям отеля</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-slate-500" data-lucide="map"></i> В городе
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400 font-light">
<i className="w-4 h-4 text-slate-600 mt-0.5 shrink-0" data-lucide="check"></i>
<span>AI-рекомендации мест</span>
</li>
</ul>
</div>
</div>
<button className="w-full mt-8 py-4 border border-white/10 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Бесплатно</button>
</div>

<div className="p-8 rounded-sm border border-white/20 bg-white/[0.04] hover:bg-white/[0.06] transition-all duration-300 relative flex flex-col min-h-[500px] -mt-4 mb-4 md:mb-0 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 right-0 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur-sm">Popular</div>
<div className="mb-8 pb-8 border-b border-white/10">
<span className="text-valo-gold text-[10px] tracking-[0.2em] uppercase block mb-3">Optimal</span>
<span className="text-3xl text-white font-serif block mb-2">Comfort</span>
<span className="text-slate-300 text-sm font-light">Расширенный комфорт</span>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-valo-gold" data-lucide="home"></i> Внутри VALO
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="check"></i>
<span>Все привилегии резидентов</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="check"></i>
<span>Приоритет в SPA и ресторанах отеля</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-valo-gold" data-lucide="map"></i> В городе
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="check"></i>
<span className="font-medium text-white">Скидки у городских партнёров</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300 font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="check"></i>
<span>2 персональных сложных маршрута</span>
</li>
</ul>
</div>
</div>
<button className="w-full mt-8 py-4 bg-white/10 text-white border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">Купить карту</button>
</div>

<div className="p-8 rounded-sm border border-valo-gold/40 bg-gradient-to-b from-valo-gold/10 to-transparent relative overflow-hidden flex flex-col min-h-[500px] group shadow-[0_0_30px_rgba(212,175,55,0.05)] hover:shadow-[0_0_50px_rgba(212,175,55,0.1)] transition-all">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-valo-gold to-transparent opacity-50"></div>
<div className="mb-8 pb-8 border-b border-white/10 relative z-10">
<span className="text-gold-gradient text-[10px] tracking-[0.2em] uppercase block mb-3 font-semibold">Elite Access</span>
<span className="text-3xl text-white font-serif block mb-2">Premium</span>
<span className="text-slate-300 text-sm font-light">Полная свобода действий</span>
</div>
<div className="flex-1 space-y-6 relative z-10">
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-valo-gold" data-lucide="crown"></i> Внутри VALO
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-white font-light">
<i className="w-4 h-4 text-valo-gold fill-valo-gold mt-0.5 shrink-0" data-lucide="star"></i>
<span>VIP-статус во всей экосистеме</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="star"></i>
<span>Личный консьерж (человек)</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3 h-3 text-valo-gold" data-lucide="map"></i> В городе
                                </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-white font-light">
<i className="w-4 h-4 text-valo-gold fill-valo-gold mt-0.5 shrink-0" data-lucide="star"></i>
<span className="font-medium">Доступ к закрытым мероприятиям</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="star"></i>
<span>Безлимитное создание маршрутов</span>
</li>
<li className="flex items-start gap-3 text-sm text-white font-light">
<i className="w-4 h-4 text-valo-gold mt-0.5 shrink-0" data-lucide="star"></i>
<span>VIP-обслуживание у партнёров</span>
</li>
</ul>
</div>
</div>
<button className="w-full mt-8 py-4 bg-gradient-to-r from-valo-gold to-[#b08d26] text-black font-semibold text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all relative z-10">Оформить Premium</button>
</div>
</div>
</div>

<div>
<h3 className="text-white text-xl font-light mb-10 text-center uppercase tracking-widest opacity-80">Авторские маршруты</h3>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-slate-500 transition-colors">
<div className="absolute inset-0 bg-[#1a1a1a]"></div>
<div className="relative p-8 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<h4 className="font-serif text-2xl text-white">Маршрут Достоевского</h4>
<i className="text-slate-500 group-hover:text-white transition-colors w-6 h-6" data-lucide="book-open"></i>
</div>
<p className="text-[10px] text-slate-500 uppercase tracking-widest mb-4">Камерный Петербург</p>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                Литературные улицы, атмосфера романа, тени и каналы. Идеально для сумерек.
                            </p>
<div className="mt-auto pt-4 border-t border-white/10">
<button className="w-full text-left text-white text-xs uppercase tracking-widest hover:text-valo-gold transition-colors flex items-center gap-2">
                                    Выбрать маршрут <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-amber-200/50 transition-colors">
<div className="absolute inset-0 bg-[#1e2030]"></div>
<div className="relative p-8 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<h4 className="font-serif text-2xl text-white">Маршрут Пушкина</h4>
<i className="text-amber-200/50 group-hover:text-amber-200 transition-colors w-6 h-6" data-lucide="feather"></i>
</div>
<p className="text-[10px] text-amber-200/70 uppercase tracking-widest mb-4">Светский Петербург</p>
<p className="text-sm text-slate-300 mb-6 leading-relaxed">
                                Классика, парадные проспекты, блеск и эстетика золотого века.
                            </p>
<div className="mt-auto pt-4 border-t border-white/10">
<button className="w-full text-left text-amber-200 text-xs uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                                    Выбрать маршрут <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm border border-white/10 hover:border-cyan-900 transition-colors">
<div className="absolute inset-0 bg-[#0f1520]"></div>
<div className="relative p-8 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<h4 className="font-serif text-2xl text-white">Маршрут Лермонтова</h4>
<i className="text-slate-400 group-hover:text-cyan-100 transition-colors w-6 h-6" data-lucide="wind"></i>
</div>
<p className="text-[10px] text-cyan-900/80 uppercase tracking-widest mb-4">Драматичный Петербург</p>
<p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                Ветер и характер. Места настроения, видовые точки и глубокие смыслы.
                            </p>
<div className="mt-auto pt-4 border-t border-white/10">
<button className="w-full text-left text-white text-xs uppercase tracking-widest hover:text-cyan-200 transition-colors flex items-center gap-2">
                                    Выбрать маршрут <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5 bg-valo-surface text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-serif text-2xl text-white mb-8">Всегда под рукой</h2>
<div className="flex justify-center gap-8 md:gap-16 mb-8 text-slate-400">
<div className="flex flex-col items-center gap-3 group cursor-pointer hover:text-valo-gold transition-colors">
<i className="w-8 h-8 stroke-[1]" data-lucide="send"></i>
<span className="text-[10px] uppercase tracking-widest">Telegram</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer hover:text-valo-gold transition-colors">
<i className="w-8 h-8 stroke-[1]" data-lucide="message-square"></i>
<span className="text-[10px] uppercase tracking-widest">VKontakte</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer hover:text-valo-gold transition-colors">
<i className="w-8 h-8 stroke-[1]" data-lucide="qr-code"></i>
<span className="text-[10px] uppercase tracking-widest">QR в номере</span>
</div>
</div>
<p className="text-sm text-slate-500 max-w-lg mx-auto">Аилина доступна в привычных каналах, работает быстро и одинаково уверенно для гостей и резидентов.</p>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-night-petersburg text-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557053503-0c252e5c8093?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight tracking-tight">
                Петербург — это сценарий. <br/>
<span className="text-gold-gradient italic">Аилина — ваш режиссёр.</span>
</h2>
<div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
<button className="px-10 py-4 bg-valo-gold hover:bg-yellow-500 text-black font-semibold text-xs uppercase tracking-widest transition-colors shadow-[0_0_25px_rgba(212,175,55,0.3)]">
                    Попробовать Аилину
                </button>
<button className="px-10 py-4 bg-transparent border border-white/30 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                    Купить карту
                </button>
</div>
</div>
</section>

<footer className="bg-valo-base border-t border-white/5 py-12 text-slate-500 text-xs font-light">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<span className="text-white text-sm uppercase tracking-widest mb-4 block">Ailina AI Guide</span>
<p className="max-w-xs">Интеллектуальный консьерж-сервис для VALO City Resort. Санкт-Петербург, ул. Салова, 61.</p>
</div>
<div>
<ul className="space-y-2">
<li><a className="hover:text-valo-gold transition-colors" href="#">О сервисе</a></li>
<li><a className="hover:text-valo-gold transition-colors" href="#">Партнёрам</a></li>
<li><a className="hover:text-valo-gold transition-colors" href="#">Контакты</a></li>
</ul>
</div>
<div>
<ul className="space-y-2">
<li><a className="hover:text-valo-gold transition-colors" href="#">Политика конфиденциальности</a></li>
<li><a className="hover:text-valo-gold transition-colors" href="#">Договор оферты</a></li>
<li className="flex gap-4 mt-4">
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-white" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<span>© 2023 VALO Service. All rights reserved.</span>
<span className="opacity-50">Designed for St. Petersburg</span>
</div>
</footer>


    </>
  );
}
