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
sans: ['Open Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
theme: {
gold: '#c5a47e',       /* The M.Williamson Gold */
goldDark: '#b08d66',
navy: '#1a1f24',       /* Deep Navy/Black */
navyLight: '#242a30',
gray: '#f5f5f5',       /* Light Gray Background */
text: '#555555',
}
},
letterSpacing: {
widest: '.15em',
}
}
}
}



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
      

<div className="hidden lg:block bg-theme-navy text-gray-400 py-3 border-b border-gray-800 text-xs tracking-wide">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center space-x-6">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-theme-gold" data-lucide="clock"></i>
<span>Пн - Пт: 9:00 - 18:00</span>
</div>
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-theme-gold" data-lucide="map-pin"></i>
<span>Дубай / Онлайн</span>
</div>
</div>
<div className="flex items-center space-x-4">
<a className="hover:text-theme-gold transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="hover:text-theme-gold transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-theme-gold transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>

<header className="sticky top-0 w-full z-50 bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col" href="#">
<span className="font-serif text-3xl tracking-wide text-theme-navy font-bold uppercase leading-none">Julia Bars</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-theme-gold mt-1">Sales Consultant</span>
</a>

<nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold tracking-wide text-theme-navy uppercase">
<a className="hover:text-theme-gold transition-colors" href="#about">Обо мне</a>
<a className="hover:text-theme-gold transition-colors" href="#services">Услуги</a>
<a className="hover:text-theme-gold transition-colors" href="#system">Система</a>
<a className="hover:text-theme-gold transition-colors" href="#diagnostic">Диагностика</a>
<a className="hover:text-theme-gold transition-colors" href="#contact">Контакты</a>
<div className="pl-4 border-l border-gray-200">
<div className="flex flex-col text-right">
<span className="text-xs text-gray-400 font-normal normal-case">Есть вопросы?</span>
<span className="font-serif text-lg leading-none text-theme-navy">+971 50 123 4567</span>
</div>
</div>
</nav>

<button className="lg:hidden text-theme-navy">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative h-[85vh] min-h-[600px] flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Consultant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-theme-navy/60"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-12">
<div className="max-w-3xl border-l-4 border-theme-gold pl-8 lg:pl-12 py-2">
<span className="block text-theme-gold font-bold tracking-widest uppercase text-xs mb-4">Бизнес-консалтинг</span>
<h1 className="font-serif text-5xl lg:text-7xl text-white font-bold leading-tight mb-6">
                    Системный<br/>
<span className="text-theme-gold italic font-serif">подход</span> к продажам
                </h1>
<p className="text-lg text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
                    Помогаю экспертам и предпринимателям выстраивать прогнозируемый доход и продавать без страха.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-theme-gold hover:bg-white hover:text-theme-navy text-white text-xs font-bold tracking-widest uppercase px-10 py-4 transition-all duration-300" href="#diagnostic">
                        Получить консультацию
                    </a>
<a className="border border-white hover:bg-white hover:text-theme-navy text-white text-xs font-bold tracking-widest uppercase px-10 py-4 transition-all duration-300" href="#about">
                        Узнать больше
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="About Julia" className="w-full shadow-2xl" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-theme-gold/20 -z-10 hidden lg:block"></div>

<div className="absolute bottom-10 left-0 bg-theme-navy text-white p-6 shadow-xl max-w-xs">
<div className="font-serif text-4xl text-theme-gold font-bold mb-1">10+</div>
<div className="text-xs uppercase tracking-widest font-semibold">Лет опыта в бизнесе и продажах</div>
</div>
</div>
<div>
<div className="separator"></div>
<h4 className="text-theme-gold text-xs font-bold uppercase tracking-widest mb-2">Обо мне</h4>
<h2 className="font-serif text-4xl text-theme-navy font-bold mb-6">Почему мне доверяют?</h2>
<p className="text-gray-600 mb-6 leading-relaxed">
                    Я не теоретик, а практик. Мой подход основан на реальном опыте построения бизнеса, глубоком понимании психологии клиента и маркетинговых стратегий.
                </p>
<p className="text-gray-600 mb-8 leading-relaxed">
                    Работа со мной — это не просто набор инструкций, а трансформация вашего мышления и бизнес-процессов для достижения устойчивого результата.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-theme-gold transition-colors">
<i className="w-5 h-5 text-theme-gold" data-lucide="check"></i>
</div>
<span className="text-sm font-semibold text-theme-navy uppercase tracking-wide">Действующий предприниматель</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-theme-gold transition-colors">
<i className="w-5 h-5 text-theme-gold" data-lucide="check"></i>
</div>
<span className="text-sm font-semibold text-theme-navy uppercase tracking-wide">Профильное образование</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-theme-gold transition-colors">
<i className="w-5 h-5 text-theme-gold" data-lucide="check"></i>
</div>
<span className="text-sm font-semibold text-theme-navy uppercase tracking-wide">Экспертиза в психологии продаж</span>
</div>
</div>
<div className="mt-10">
<img alt="Signature" className="h-12 opacity-50" src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-theme-gray" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="separator separator-center"></div>
<h4 className="text-theme-gold text-xs font-bold uppercase tracking-widest mb-2">Результаты</h4>
<h2 className="font-serif text-4xl text-theme-navy font-bold mb-4">Направления работы</h2>
<p className="text-gray-500">
                    Комплексный подход к вашему бизнесу для достижения максимальной эффективности.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="practice-card bg-white p-10 text-center border-b-4 border-transparent hover:border-theme-gold group">
<div className="icon-box w-16 h-16 mx-auto border border-gray-200 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
<i className="w-7 h-7 text-theme-navy group-hover:text-white transition-colors" data-lucide="bar-chart-2"></i>
</div>
<h3 className="font-serif text-xl font-bold text-theme-navy mb-4 group-hover:text-theme-gold transition-colors">Система продаж</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Выстраивание процесса так, чтобы клиенты приходили системно, а не случайно.
                    </p>
<a className="text-xs font-bold uppercase tracking-widest text-theme-navy hover:text-theme-gold" href="#system">Подробнее <i className="w-3 h-3 inline ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="practice-card bg-white p-10 text-center border-b-4 border-transparent hover:border-theme-gold group">
<div className="icon-box w-16 h-16 mx-auto border border-gray-200 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
<i className="w-7 h-7 text-theme-navy group-hover:text-white transition-colors" data-lucide="trending-up"></i>
</div>
<h3 className="font-serif text-xl font-bold text-theme-navy mb-4 group-hover:text-theme-gold transition-colors">Рост дохода</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Понимание рычагов влияния на прибыль и масштабирование результатов.
                    </p>
<a className="text-xs font-bold uppercase tracking-widest text-theme-navy hover:text-theme-gold" href="#system">Подробнее <i className="w-3 h-3 inline ml-1" data-lucide="arrow-right"></i></a>
</div>

<div className="practice-card bg-white p-10 text-center border-b-4 border-transparent hover:border-theme-gold group">
<div className="icon-box w-16 h-16 mx-auto border border-gray-200 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
<i className="w-7 h-7 text-theme-navy group-hover:text-white transition-colors" data-lucide="calendar"></i>
</div>
<h3 className="font-serif text-xl font-bold text-theme-navy mb-4 group-hover:text-theme-gold transition-colors">Прогнозирование</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Избавление от страха неопределенности и четкое видение будущего бизнеса.
                    </p>
<a className="text-xs font-bold uppercase tracking-widest text-theme-navy hover:text-theme-gold" href="#system">Подробнее <i className="w-3 h-3 inline ml-1" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-theme-navy text-center bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp'}}>
<div className="absolute inset-0 bg-theme-navy/80"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6">
<i className="w-12 h-12 text-theme-gold mx-auto mb-8 opacity-80" data-lucide="quote"></i>
<h2 className="font-serif text-3xl lg:text-5xl text-white font-medium italic leading-tight mb-8">
                "Продажи — это не навязывание, а помощь клиенту в решении его проблем. Когда вы это поймете, ваш доход вырастет кратно."
            </h2>
<div className="separator separator-center mb-4"></div>
<p className="text-white uppercase tracking-widest text-sm font-bold">Julia Bars</p>
</div>
</section>

<section className="py-24 bg-white" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<div className="separator"></div>
<h4 className="text-theme-gold text-xs font-bold uppercase tracking-widest mb-2">Методология</h4>
<h2 className="font-serif text-4xl text-theme-navy font-bold mb-6">Над чем мы будем работать?</h2>
<p className="text-gray-600 mb-8">
                        Система состоит из трех ключевых этапов, каждый из которых необходим для стабильного результата.
                    </p>

<div className="mb-6">
<button className="w-full flex items-center justify-between text-left p-5 bg-theme-gray hover:bg-theme-navy hover:text-white group transition-colors duration-300">
<span className="font-serif text-lg font-bold">01. Продажа</span>
<i className="w-5 h-5 text-theme-gold" data-lucide="plus"></i>
</button>
<div className="p-5 border border-t-0 border-gray-100 bg-white">
<p className="text-sm text-gray-500">Позиционирование, упаковка, каналы трафика, скрипты и воронки.</p>
</div>
</div>

<div className="mb-6">
<button className="w-full flex items-center justify-between text-left p-5 bg-theme-gray hover:bg-theme-navy hover:text-white group transition-colors duration-300">
<span className="font-serif text-lg font-bold">02. Предоставление</span>
<i className="w-5 h-5 text-theme-gold" data-lucide="plus"></i>
</button>
<div className="p-5 border border-t-0 border-gray-100 bg-white">
<p className="text-sm text-gray-500">Качество продукта, клиентский сервис, автоматизация процессов.</p>
</div>
</div>

<div className="mb-6">
<button className="w-full flex items-center justify-between text-left p-5 bg-theme-gray hover:bg-theme-navy hover:text-white group transition-colors duration-300">
<span className="font-serif text-lg font-bold">03. Постпродажи</span>
<i className="w-5 h-5 text-theme-gold" data-lucide="plus"></i>
</button>
<div className="p-5 border border-t-0 border-gray-100 bg-white">
<p className="text-sm text-gray-500">LTV, повторные покупки, работа с базой, рекомендации.</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Process" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-0 right-0 bg-theme-gold p-8 max-w-xs text-center hidden md:block">
<h4 className="font-serif text-xl text-white font-bold mb-2">Нужна помощь?</h4>
<p className="text-white/80 text-sm mb-4">Запишитесь на диагностику</p>
<a className="inline-block border border-white text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-theme-gold transition-colors" href="#diagnostic">Записаться</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-theme-navy" id="diagnostic">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-white">
<div className="separator"></div>
<h4 className="text-theme-gold text-xs font-bold uppercase tracking-widest mb-2">Старт работы</h4>
<h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">Диагностическая сессия</h2>
<p className="text-gray-400 text-lg mb-8 font-light">
                        Разберем 7 критических ошибок в ваших продажах и составим пошаговый план выхода на желаемый доход.
                    </p>
<div className="grid sm:grid-cols-2 gap-8 mb-8">
<div>
<h5 className="text-theme-gold font-serif text-xl mb-2">Онлайн / Оффлайн</h5>
<p className="text-sm text-gray-500">Возможна встреча в Дубае или Zoom-звонок из любой точки мира.</p>
</div>
<div>
<h5 className="text-theme-gold font-serif text-xl mb-2">Результат</h5>
<p className="text-sm text-gray-500">Понимание точки А и четкая стратегия движения к точке Б.</p>
</div>
</div>
</div>

<div className="bg-white p-10 shadow-2xl">
<h3 className="font-serif text-2xl text-theme-navy font-bold mb-6 text-center">Заполните форму</h3>
<form action="#" className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<input className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-theme-gold placeholder-gray-400 transition-colors" placeholder="Ваше Имя" type="text"/>
<input className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-theme-gold placeholder-gray-400 transition-colors" placeholder="Телефон" type="text"/>
</div>
<input className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-theme-gold placeholder-gray-400 transition-colors" placeholder="Email" type="email"/>
<select className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-theme-gold text-gray-500 transition-colors cursor-pointer">
<option>Выберите тему обращения</option>
<option>Диагностическая сессия</option>
<option>Индивидуальная работа</option>
<option>Вопрос</option>
</select>
<textarea className="w-full bg-gray-50 border border-gray-200 p-4 text-sm focus:outline-none focus:border-theme-gold placeholder-gray-400 transition-colors" placeholder="Кратко о вашей ситуации" rows="4"></textarea>
<button className="w-full bg-theme-gold text-white font-bold uppercase tracking-widest text-xs py-5 hover:bg-theme-navy transition-colors duration-300" type="submit">
                            Отправить заявку
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-theme-navyLight pt-20 pb-10 border-t border-gray-800 text-gray-400 text-sm">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="font-serif text-2xl text-white font-bold uppercase tracking-wide block mb-6" href="#">
                    Julia Bars
                </a>
<p className="leading-relaxed mb-6">
                    Профессиональный консалтинг для предпринимателей. Системный подход, гарантированный результат.
                </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-theme-gold hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-theme-gold hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-serif font-bold text-lg mb-6">Навигация</h4>
<ul className="space-y-3">
<li><a className="hover:text-theme-gold transition-colors flex items-center gap-2" href="#about"><i className="w-3 h-3" data-lucide="chevron-right"></i> Обо мне</a></li>
<li><a className="hover:text-theme-gold transition-colors flex items-center gap-2" href="#services"><i className="w-3 h-3" data-lucide="chevron-right"></i> Услуги</a></li>
<li><a className="hover:text-theme-gold transition-colors flex items-center gap-2" href="#diagnostic"><i className="w-3 h-3" data-lucide="chevron-right"></i> Диагностика</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif font-bold text-lg mb-6">Услуги</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="chevron-right"></i> Построение отдела продаж</li>
<li className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="chevron-right"></i> Аудит скриптов</li>
<li className="flex items-center gap-2"><i className="w-3 h-3" data-lucide="chevron-right"></i> Менторство</li>
</ul>
</div>

<div>
<h4 className="text-white font-serif font-bold text-lg mb-6">Контакты</h4>
<ul className="space-y-4">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-theme-gold shrink-0 mt-1" data-lucide="map-pin"></i>
<span>Dubai, UAE<br/>Online Worldwide</span>
</li>
<li className="flex gap-3 items-center">
<i className="w-5 h-5 text-theme-gold shrink-0" data-lucide="phone"></i>
<span>+971 50 123 4567</span>
</li>
<li className="flex gap-3 items-center">
<i className="w-5 h-5 text-theme-gold shrink-0" data-lucide="mail"></i>
<span>contact@juliabars.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 text-center text-xs">
<p>© 2025 Julia Bars Consulting. Все права защищены.</p>
</div>
</footer>


    </>
  );
}
