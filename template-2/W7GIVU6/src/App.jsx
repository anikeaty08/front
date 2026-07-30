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

        // Video play functionality
        document.querySelector('.video-container').addEventListener('click', function() {
            // In real implementation, this would load and play the actual video
            alert('Здесь будет воспроизводиться видео с мероприятия');
        });

        // Image gallery lightbox (simplified)
        document.querySelectorAll('.gallery-grid img').forEach(img => {
            img.addEventListener('click', function() {
                // In real implementation, this would open a lightbox
                window.open(this.src, '_blank');
            });
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
<div className="flex items-center space-x-6">
<a className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center" href="#">
<i className="w-5 h-5 mr-2" data-lucide="arrow-left" style={{strokeWidth: `1.5`}}></i>
                    Назад к портфолио
                </a>
<button className="text-white hover:text-gray-300 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="x" style={{strokeWidth: `1.5`}}></i>
</button>
</div>
</div>
</nav>

<section className="relative h-screen bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop')`}}>
<div className="absolute inset-0 gradient-overlay"></div>
<div className="relative z-10 h-full flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="max-w-4xl">
<div className="fade-in" style={{animationDelay: `0.2s`}}>
<div className="flex flex-wrap gap-3 mb-6">
<span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">Конференция</span>
<span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">Техническое обеспечение</span>
<span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">Кейтеринг</span>
<span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">Управление участниками</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 fade-in" style={{animationDelay: `0.4s`}}>
                        МЕЖДУНАРОДНАЯ КОНФЕРЕНЦИЯ SBERBANK
                    </h1>
<p className="text-xl md:text-2xl text-white/90 font-light mb-8 fade-in" style={{animationDelay: `0.6s`}}>
                        Трехдневная международная конференция по цифровым инновациям в банковской сфере с участием более 2000 делегатов из 25 стран
                    </p>
<div className="grid md:grid-cols-4 gap-6 text-white fade-in" style={{animationDelay: `0.8s`}}>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
<div className="text-3xl font-bold">2000+</div>
<div className="text-sm opacity-80">Участников</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
<div className="text-3xl font-bold">25</div>
<div className="text-sm opacity-80">Стран</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
<div className="text-3xl font-bold">3</div>
<div className="text-sm opacity-80">Дня</div>
</div>
<div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
<div className="text-3xl font-bold">50+</div>
<div className="text-sm opacity-80">Спикеров</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
<i className="w-8 h-8" data-lucide="chevron-down" style={{strokeWidth: `1.5`}}></i>
</div>
</section>

<section className="py-20">
<div className="max-w-4xl mx-auto px-6">
<div className="slide-up">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">О ПРОЕКТЕ</h2>
<div className="prose prose-lg max-w-none">
<p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Sberbank обратился к нам с задачей организации масштабной международной конференции, посвященной цифровым инновациям в банковской сфере. Мероприятие должно было стать ключевым событием года для финтех-индустрии и продемонстрировать лидерство банка в области технологических решений.
                    </p>
<p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Конференция проходила в течение трех дней в Москва-Сити и включала в себя основную программу с пленарными докладами, панельные дискуссии по отраслевым темам, выставочную зону с демонстрацией инновационных решений, нетворкинг-зоны и торжественный гала-ужин для VIP-гостей.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="slide-up" style={{animationDelay: `0.1s`}}>
<h3 className="text-3xl font-bold tracking-tight mb-8 text-red-600">ЗАДАЧА</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Масштабность мероприятия</h4>
<p className="text-gray-600">Организация события для 2000+ участников из 25 стран с одновременным проведением нескольких программных треков</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Технические требования</h4>
<p className="text-gray-600">Обеспечение высококачественной трансляции, синхронного перевода на 5 языков и интерактивных презентаций</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Логистика</h4>
<p className="text-gray-600">Координация прибытия международных делегаций, размещения и трансфера участников</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Безопасность</h4>
<p className="text-gray-600">Обеспечение высокого уровня безопасности для топ-менеджмента ведущих банков мира</p>
</div>
</div>
</div>
</div>
<div className="slide-up" style={{animationDelay: `0.2s`}}>
<h3 className="text-3xl font-bold tracking-tight mb-8 text-green-600">РЕШЕНИЕ</h3>
<div className="space-y-6">
<div className="flex items-start">
<div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Многозональная площадка</h4>
<p className="text-gray-600">Организация 5 залов разной вместимости с возможностью трансляции между залами и онлайн-подключения</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Цифровая платформа</h4>
<p className="text-gray-600">Разработка мобильного приложения с программой, нетворкингом и интерактивными возможностями</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Комплексное сопровождение</h4>
<p className="text-gray-600">Персональные менеджеры для VIP-гостей и групповое сопровождение для остальных участников</p>
</div>
</div>
<div className="flex items-start">
<div className="w-2 h-2 bg-green-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
<div>
<h4 className="font-semibold mb-2">Многоуровневая безопасность</h4>
<p className="text-gray-600">Система контроля доступа, металлодетекторы и персональная охрана для ключевых участников</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 slide-up">ФОТО И ВИДЕО</h2>

<div className="mb-12 slide-up" style={{animationDelay: `0.1s`}}>
<div className="video-container rounded-2xl overflow-hidden bg-gray-900">
<div className="w-full h-full bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=450&fit=crop')`}}>
<div className="bg-black/50 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/70 transition-all duration-300">
<i className="w-8 h-8 text-white ml-1" data-lucide="play" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
</div>
</div>

<div className="gallery-grid">
<div className="slide-up" style={{animationDelay: `0.2s`}}>
<img alt="Conference hall" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop" />
</div>
<div className="slide-up" style={{animationDelay: `0.3s`}}>
<img alt="Keynote speaker" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop" />
</div>
<div className="slide-up" style={{animationDelay: `0.4s`}}>
<img alt="Networking area" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop" />
</div>
<div className="slide-up" style={{animationDelay: `0.5s`}}>
<img alt="Exhibition zone" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop" />
</div>
<div className="slide-up" style={{animationDelay: `0.6s`}}>
<img alt="Panel discussion" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop" />
</div>
<div className="slide-up" style={{animationDelay: `0.7s`}}>
<img alt="Gala dinner" className="w-full h-64 object-cover rounded-xl" src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop" />
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 slide-up">РЕЗУЛЬТАТЫ</h2>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.1s`}}>
<h3 className="text-2xl font-semibold mb-4">Медиа-охват</h3>
<div className="space-y-3">
<div className="flex justify-between">
<span>Упоминания в СМИ</span>
<span className="font-semibold">150+</span>
</div>
<div className="flex justify-between">
<span>Онлайн-просмотры трансляции</span>
<span className="font-semibold">50,000+</span>
</div>
<div className="flex justify-between">
<span>Социальные сети (reach)</span>
<span className="font-semibold">2M+</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.2s`}}>
<h3 className="text-2xl font-semibold mb-4">Удовлетворенность</h3>
<div className="space-y-3">
<div className="flex justify-between">
<span>Оценка организации</span>
<span className="font-semibold">4.8/5</span>
</div>
<div className="flex justify-between">
<span>Готовность рекомендовать</span>
<span className="font-semibold">94%</span>
</div>
<div className="flex justify-between">
<span>Желание участвовать снова</span>
<span className="font-semibold">87%</span>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl slide-up" style={{animationDelay: `0.3s`}}>
<h3 className="text-2xl font-semibold mb-4">Отзыв клиента</h3>
<blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    "EventPro превзошли все наши ожидания. Организация конференции такого масштаба требует не только профессионализма, но и способности мыслить стратегически. Команда агентства продемонстрировала исключительные навыки в управлении проектом, и результат превзошел все наши цели по охвату аудитории и медиа-эффекту."
                </blockquote>
<div className="flex items-center mt-6">
<img alt="Client" className="w-16 h-16 rounded-full mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" />
<div>
<div className="font-semibold">Анатолий Попов</div>
<div className="text-gray-600">Вице-президент по маркетингу, Sberbank</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 slide-up">ДРУГИЕ КЕЙСЫ</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer slide-up" style={{animationDelay: `0.1s`}}>
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Корпоративный тимбилдинг Yandex</h3>
<p className="text-gray-600 mb-4">Выездное мероприятие для укрепления команды</p>
<div className="flex gap-2">
<span className="text-xs bg-gray-100 px-2 py-1 rounded">Тимбилдинг</span>
<span className="text-xs bg-gray-100 px-2 py-1 rounded">Развлечения</span>
</div>
</div>
<div className="group cursor-pointer slide-up" style={{animationDelay: `0.2s`}}>
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Презентация продукта Mail.ru</h3>
<p className="text-gray-600 mb-4">Торжественная презентация нового продукта</p>
<div className="flex gap-2">
<span className="text-xs bg-gray-100 px-2 py-1 rounded">Презентация</span>
<span className="text-xs bg-gray-100 px-2 py-1 rounded">PR-событие</span>
</div>
</div>
<div className="group cursor-pointer slide-up" style={{animationDelay: `0.3s`}}>
<div className="bg-cover bg-center aspect-video rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop')`}}></div>
<h3 className="text-xl font-semibold mb-2">Церемония награждения VK</h3>
<p className="text-gray-600 mb-4">Годовая церемония награждения сотрудников</p>
<div className="flex gap-2">
<span className="text-xs bg-gray-100 px-2 py-1 rounded">Церемония</span>
<span className="text-xs bg-gray-100 px-2 py-1 rounded">Награждение</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 slide-up">ГОТОВЫ ОБСУДИТЬ ВАШ ПРОЕКТ?</h2>
<p className="text-xl mb-12 slide-up" style={{animationDelay: `0.2s`}}>
                Давайте создадим событие, которое станет частью истории вашей компании
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center slide-up" style={{animationDelay: `0.4s`}}>
<button className="bg-white text-black px-12 py-4 text-lg font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
                    ОБСУДИТЬ ПРОЕКТ
                </button>
<button className="border-2 border-white text-white px-12 py-4 text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    ПОСМОТРЕТЬ ПОРТФОЛИО
                </button>
</div>
</div>
</section>


    </>
  );
}
