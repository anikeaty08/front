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
      
        lucide.createIcons();
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
    
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
      

<section className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&h=1080&fit=crop')`}}>
<div className="absolute inset-0 gradient-overlay"></div>
<div className="relative z-10 h-full flex items-center justify-center">
<div className="text-center text-white max-w-4xl px-6">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 fade-in" style={{animationDelay: `0.2s`}}>
                    СОЗДАЕМ СОБЫТИЯ<br />КОТОРЫЕ ЗАПОМИНАЮТ
                </h1>
<p className="text-xl md:text-2xl font-light mb-8 fade-in" style={{animationDelay: `0.4s`}}>
                    Полный цикл организации корпоративных и частных мероприятий любого масштаба
                </p>
<button className="bg-white text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-gray-100 transition-all duration-300 fade-in" style={{animationDelay: `0.6s`}}>
                    НАЧАТЬ ПРОЕКТ
                </button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center slide-up" style={{animationDelay: `0.1s`}}>
<div className="text-4xl md:text-6xl font-bold text-black mb-2">500+</div>
<div className="text-gray-600 font-medium">Мероприятий</div>
</div>
<div className="text-center slide-up" style={{animationDelay: `0.2s`}}>
<div className="text-4xl md:text-6xl font-bold text-black mb-2">50K+</div>
<div className="text-gray-600 font-medium">Гостей</div>
</div>
<div className="text-center slide-up" style={{animationDelay: `0.3s`}}>
<div className="text-4xl md:text-6xl font-bold text-black mb-2">12</div>
<div className="text-gray-600 font-medium">Лет опыта</div>
</div>
<div className="text-center slide-up" style={{animationDelay: `0.4s`}}>
<div className="text-4xl md:text-6xl font-bold text-black mb-2">200+</div>
<div className="text-gray-600 font-medium">Клиентов</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-gray-200 overflow-hidden">
<div className="scroll-text whitespace-nowrap">
<div className="inline-flex items-center space-x-16 text-2xl font-bold text-gray-400 tracking-tight">
<span>SBERBANK</span><span>YANDEX</span><span>MAIL.RU</span><span>TINKOFF</span><span>OZON</span><span>VK</span><span>AVITO</span><span>WILDBERRIES</span>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center slide-up">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">О НАС</h2>
<p className="text-lg text-gray-600 leading-relaxed mb-8">
                    EventPro — ведущее агентство полного цикла в сфере организации мероприятий. Мы специализируемся на создании уникальных событий, которые остаются в памяти надолго. От концепции до реализации — наша команда профессионалов обеспечит безупречное исполнение каждой детали вашего события.
                </p>
<button className="border-2 border-black text-black px-8 py-3 font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300">
                    ПОДРОБНЕЕ
                </button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 slide-up">УСЛУГИ</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-up" style={{animationDelay: `0.1s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="users" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Корпоративные события</h3>
<p className="text-gray-600 mb-6">Конференции, тимбилдинги, презентации и корпоративные праздники</p>
<button className="text-black font-medium hover:underline">Подробнее →</button>
</div>
<div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-up" style={{animationDelay: `0.2s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="heart" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Частные мероприятия</h3>
<p className="text-gray-600 mb-6">Свадьбы, дни рождения, юбилеи и семейные торжества</p>
<button className="text-black font-medium hover:underline">Подробнее →</button>
</div>
<div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 slide-up" style={{animationDelay: `0.3s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="mic" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-2xl font-semibold mb-4">Концерты и шоу</h3>
<p className="text-gray-600 mb-6">Организация концертов, фестивалей и развлекательных шоу</p>
<button className="text-black font-medium hover:underline">Подробнее →</button>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 slide-up">ПОСЛЕДНИЕ КЕЙСЫ</h2>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="group slide-up" style={{animationDelay: `0.1s`}}>
<div className="aspect-video bg-cover bg-center rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Корпоративная конференция Sberbank</h3>
<p className="text-gray-600">Международная конференция на 2000 участников</p>
</div>
<div className="group slide-up" style={{animationDelay: `0.2s`}}>
<div className="aspect-video bg-cover bg-center rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Свадьба в загородном клубе</h3>
<p className="text-gray-600">Выездная церемония и банкет на 150 гостей</p>
</div>
<div className="group slide-up" style={{animationDelay: `0.3s`}}>
<div className="aspect-video bg-cover bg-center rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Музыкальный фестиваль</h3>
<p className="text-gray-600">Трехдневный фестиваль под открытым небом</p>
</div>
</div>
<div className="text-center space-x-4">
<button className="bg-black text-white px-8 py-3 font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
                    ВСЕ КЕЙСЫ
                </button>
<button className="border-2 border-black text-black px-8 py-3 font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300">
                    ЗАПРОСИТЬ ПРЕЗЕНТАЦИЮ
                </button>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 slide-up">ОТЗЫВЫ КЛИЕНТОВ</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.1s`}}>
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" />
<div>
<div className="font-semibold">Александр Петров</div>
<div className="text-gray-600 text-sm">Директор по маркетингу, Tinkoff</div>
</div>
</div>
<p className="text-gray-700">"Профессиональная команда, которая превратила нашу корпоративную конференцию в незабываемое событие. Каждая деталь была продумана до мелочей."</p>
</div>
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.2s`}}>
<div className="flex items-center mb-4">
<img alt="Client" className="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face" />
<div>
<div className="font-semibold">Мария Сидорова</div>
<div className="text-gray-600 text-sm">Частный клиент</div>
</div>
</div>
<p className="text-gray-700">"Свадьба моей мечты стала реальностью благодаря EventPro. Безупречная организация и внимание к деталям превзошли все ожидания."</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 slide-up">КОНТАКТЫ</h2>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="slide-up" style={{animationDelay: `0.1s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="phone" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Телефон</div>
<div className="text-gray-600">+7 (495) 123-45-67</div>
</div>
<div className="slide-up" style={{animationDelay: `0.2s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="mail" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Email</div>
<div className="text-gray-600">info@eventpro.ru</div>
</div>
<div className="slide-up" style={{animationDelay: `0.3s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="map-pin" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Адрес</div>
<div className="text-gray-600">Москва, ул. Тверская, 15</div>
</div>
</div>
<button className="bg-black text-white px-12 py-4 text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 slide-up" style={{animationDelay: `0.4s`}}>
                СВЯЗАТЬСЯ С НАМИ
            </button>
</div>
</section>


    </>
  );
}
