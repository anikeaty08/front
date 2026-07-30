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
        
        // Slider functionality
        let currentSlide = 0;
        const slider = document.getElementById('casesSlider');
        const slides = slider.children;
        const totalSlides = slides.length;
        const visibleSlides = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
        const maxSlide = totalSlides - visibleSlides;

        function updateSlider() {
            const translateX = -(currentSlide * (100 / visibleSlides));
            slider.style.transform = `translateX(${translateX}%)`;
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentSlide < maxSlide) {
                currentSlide++;
                updateSlider();
            }
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            }
        });

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

        // Form submission
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
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
      

<nav className="absolute top-0 left-0 right-0 z-20 p-6">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="text-white text-2xl font-bold tracking-tight">EVENTPRO</div>
<button className="text-white hover:text-gray-300 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="x" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
</nav>

<section className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop')`}}>
<div className="absolute inset-0 gradient-overlay"></div>
<div className="relative z-10 h-full flex items-center">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
<div className="text-white">
<h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 fade-in" style={{animationDelay: `0.2s`}}>
                        КОРПОРАТИВНЫЕ<br />СОБЫТИЯ
                    </h1>
<p className="text-xl md:text-2xl font-light mb-8 fade-in" style={{animationDelay: `0.4s`}}>
                        Создаем впечатляющие бизнес-мероприятия, которые укрепляют команду и впечатляют партнеров
                    </p>
<div className="flex flex-wrap gap-4 fade-in" style={{animationDelay: `0.6s`}}>
<div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Конференции</div>
<div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Тимбилдинги</div>
<div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Презентации</div>
<div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">Награждения</div>
</div>
</div>
<div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl fade-in" style={{animationDelay: `0.8s`}}>
<h3 className="text-2xl font-semibold mb-6 text-gray-900">Получить консультацию</h3>
<form className="space-y-4">
<input className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors duration-300" placeholder="Ваше имя" type="text" />
<input className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors duration-300" placeholder="Телефон" type="tel" />
<input className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors duration-300" placeholder="Email" type="email" />
<textarea className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-black transition-colors duration-300 resize-none" placeholder="Опишите ваше мероприятие" rows="4"></textarea>
<button className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-300" type="submit">
                            ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="slide-up">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">О УСЛУГЕ</h2>
<div className="text-lg text-gray-600 leading-relaxed space-y-6">
<p>
                        Корпоративные события — это мощный инструмент для развития бизнеса, укрепления команды и построения отношений с партнерами. Наше агентство специализируется на создании профессиональных мероприятий, которые не только впечатляют участников, но и достигают поставленных бизнес-целей.
                    </p>
<p>
                        От масштабных международных конференций до камерных презентаций продуктов — мы обеспечиваем безупречную организацию на каждом этапе. Наша команда профессионалов работает с ведущими компаниями России, создавая события, которые становятся частью корпоративной истории и культуры.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 slide-up">ЧТО ВХОДИТ В УСЛУГУ</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.1s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="lightbulb" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Концепция и стратегия</h3>
<p className="text-gray-600">Разработка уникальной концепции мероприятия в соответствии с целями бизнеса</p>
</div>
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.2s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="map-pin" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Поиск и бронирование площадки</h3>
<p className="text-gray-600">Подбор идеальной локации с учетом формата и количества участников</p>
</div>
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.3s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="mic" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Техническое обеспечение</h3>
<p className="text-gray-600">Звук, свет, видео, трансляции и все необходимое оборудование</p>
</div>
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.4s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="users" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Управление участниками</h3>
<p className="text-gray-600">Регистрация, бейджирование, координация гостей и VIP-сопровождение</p>
</div>
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.5s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="utensils" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Кейтеринг</h3>
<p className="text-gray-600">Организация питания от кофе-брейков до торжественных банкетов</p>
</div>
<div className="bg-white p-6 rounded-2xl slide-up" style={{animationDelay: `0.6s`}}>
<div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4">
<i className="w-6 h-6 text-white" data-lucide="camera" style={{strokeWidth: `1.5`}}></i>
</div>
<h3 className="text-xl font-semibold mb-3">Фото и видеосъемка</h3>
<p className="text-gray-600">Профессиональная съемка и создание контента для дальнейшего использования</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight slide-up">КЕЙСЫ</h2>
<div className="flex space-x-4">
<button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors duration-300" id="prevBtn">
<i className="w-5 h-5" data-lucide="chevron-left" style={{strokeWidth: `1.5`}}></i>
</button>
<button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:border-black transition-colors duration-300" id="nextBtn">
<i className="w-5 h-5" data-lucide="chevron-right" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
</div>
<div className="slider-container">
<div className="slider flex" id="casesSlider">
<div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Международная конференция Sberbank</h3>
<p className="text-gray-600 mb-4">Трехдневная конференция на 2000 участников с международными спикерами и интерактивными зонами</p>
<div className="text-sm text-gray-500">2000 участников • 3 дня • Москва</div>
</div>
<div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Корпоративный тимбилдинг Yandex</h3>
<p className="text-gray-600 mb-4">Выездное мероприятие для укрепления команды с активностями и развлекательной программой</p>
<div className="text-sm text-gray-500">500 участников • 2 дня • Загородный клуб</div>
</div>
<div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4" style={{backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Презентация продукта Mail.ru</h3>
<p className="text-gray-600 mb-4">Торжественная презентация нового продукта с показом технологий и фуршетом</p>
<div className="text-sm text-gray-500">300 участников • 1 день • Digital-пространство</div>
</div>
<div className="flex-none w-full md:w-1/2 lg:w-1/3 px-4">
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4" style={{backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Церемония награждения VK</h3>
<p className="text-gray-600 mb-4">Годовая церемония награждения лучших сотрудников с концертной программой</p>
<div className="text-sm text-gray-500">800 участников • 1 день • Концерт-холл</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16 slide-up">ОТЗЫВЫ КЛИЕНТОВ</h2>
<div className="grid lg:grid-cols-2 gap-12 mb-16">
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.1s`}}>
<div className="flex items-center mb-6">
<img alt="Client" className="w-16 h-16 rounded-full mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" />
<div>
<div className="font-semibold text-lg">Александр Петров</div>
<div className="text-gray-600">Директор по маркетингу, Tinkoff Bank</div>
</div>
</div>
<p className="text-gray-700 text-lg leading-relaxed">"EventPro превратили нашу корпоративную конференцию в настоящее событие года. Профессионализм команды, внимание к деталям и способность решать любые задачи впечатлили всех участников. Наши партнеры до сих пор вспоминают это мероприятие."</p>
</div>
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.2s`}}>
<div className="flex items-center mb-6">
<img alt="Client" className="w-16 h-16 rounded-full mr-4" src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" />
<div>
<div className="font-semibold text-lg">Елена Смирнова</div>
<div className="text-gray-600">HR-директор, Ozon</div>
</div>
</div>
<p className="text-gray-700 text-lg leading-relaxed">"Организация тимбилдинга для 500 сотрудников — задача не из легких, но команда EventPro справилась блестяще. Мероприятие получилось не только веселым, но и действительно полезным для укрепления корпоративной культуры."</p>
</div>
</div>

<div className="text-center mb-8 slide-up">
<h3 className="text-2xl font-semibold mb-8">Нам доверяют</h3>
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
<div className="text-xl font-bold tracking-tight">SBERBANK</div>
<div className="text-xl font-bold tracking-tight">TINKOFF</div>
<div className="text-xl font-bold tracking-tight">YANDEX</div>
<div className="text-xl font-bold tracking-tight">MAIL.RU</div>
<div className="text-xl font-bold tracking-tight">VK</div>
<div className="text-xl font-bold tracking-tight">OZON</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 slide-up">ГОТОВЫ ОБСУДИТЬ ПРОЕКТ?</h2>
<p className="text-xl text-gray-600 mb-12 slide-up" style={{animationDelay: `0.2s`}}>
                Свяжитесь с нами для получения персонального предложения
            </p>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="slide-up" style={{animationDelay: `0.1s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="phone" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Телефон</div>
<div className="text-gray-600">+7 (495) 123-45-67</div>
</div>
<div className="slide-up" style={{animationDelay: `0.2s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="mail" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Email</div>
<div className="text-gray-600">corporate@eventpro.ru</div>
</div>
<div className="slide-up" style={{animationDelay: `0.3s`}}>
<i className="w-8 h-8 mx-auto mb-4" data-lucide="calendar" style={{strokeWidth: `1.5`}}></i>
<div className="font-semibold mb-2">Консультация</div>
<div className="text-gray-600">Пн-Пт 9:00-20:00</div>
</div>
</div>
<div className="space-x-4">
<button className="bg-black text-white px-12 py-4 text-lg font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 slide-up" style={{animationDelay: `0.4s`}}>
                    ЗАКАЗАТЬ ЗВОНОК
                </button>
<button className="border-2 border-black text-black px-12 py-4 text-lg font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 slide-up" style={{animationDelay: `0.5s`}}>
                    СКАЧАТЬ ПРЕЗЕНТАЦИЮ
                </button>
</div>
</div>
</section>


    </>
  );
}
