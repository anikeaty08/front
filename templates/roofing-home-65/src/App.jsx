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
colors: {
primary: '#0E9443',
dark: '#333333',
light: '#F8F9FA',
beige: '#F5F1EE',
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<header className="relative min-h-screen flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Красивая кровля дома" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
</div>

<nav className="relative z-10 w-full border-b border-white/10 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="font-sans font-semibold text-lg tracking-tighter text-white uppercase">
                    Кровельный Дом
                </div>
<div className="flex flex-col items-end text-white">
<span className="text-xs font-light opacity-80 mb-0.5">ЛНР, Луганск</span>
<a className="font-medium text-sm md:text-base hover:text-primary transition-colors flex items-center gap-2" href="tel:+79991234567">
<i className="w-4 h-4 text-primary" data-lucide="phone"></i>
                        +7 (999) 123-45-67
                    </a>
</div>
</div>
</nav>

<div className="relative z-10 flex-grow flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full pt-10 pb-20">
<div className="max-w-2xl">
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-6 reveal">
                        От надёжной кровли <br/>
<span className="text-primary italic">до зон отдыха «под ключ»</span>
</h1>
<p className="text-white/90 text-base md:text-lg mb-10 font-light leading-relaxed reveal delay-100 max-w-lg">
                        Полный комплекс работ для вашего участка в ЛНР.
                        Консультация и выезд замерщика — <strong className="font-medium text-white border-b border-primary">бесплатны!</strong>
</p>

<div className="flex flex-wrap gap-4 mb-10 reveal delay-200">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
<i className="w-4 h-4 text-primary" data-lucide="home"></i>
<span className="text-white text-xs md:text-sm">Работаем в ЛНР</span>
</div>
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
<i className="w-4 h-4 text-primary" data-lucide="check-circle-2"></i>
<span className="text-white text-xs md:text-sm">Бесплатный замер</span>
</div>
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
<i className="w-4 h-4 text-primary" data-lucide="shield-check"></i>
<span className="text-white text-xs md:text-sm">Гарантия 5 лет</span>
</div>
</div>
<button className="bg-primary hover:bg-green-700 text-white font-medium py-4 px-8 rounded-lg shadow-lg shadow-green-900/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center gap-3 animate-pulse-slow reveal delay-300 group">
<i className="w-5 h-5" data-lucide="phone-call"></i>
                        Бесплатный выезд замерщика
                        <i className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Наши ценности</span>
<h2 className="font-serif text-3xl md:text-4xl text-dark tracking-tight">Мы работаем для вашего спокойствия</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-8 bg-light rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group reveal delay-100">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-primary" data-lucide="shield"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3 text-dark">Надёжность</h3>
<p className="text-sm text-gray-600 leading-relaxed">Строгое соблюдение технологий и контроль на каждом этапе работ.</p>
</div>

<div className="p-8 bg-light rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group reveal delay-200">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-primary" data-lucide="user"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3 text-dark">Индивидуальность</h3>
<p className="text-sm text-gray-600 leading-relaxed">Учитываем все пожелания и особенности вашего участка.</p>
</div>

<div className="p-8 bg-light rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group reveal delay-300">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-primary" data-lucide="message-square"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3 text-dark">Консультация</h3>
<p className="text-sm text-gray-600 leading-relaxed">Поможем выбрать оптимальное решение под ваш бюджет.</p>
</div>

<div className="p-8 bg-light rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group reveal delay-300">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-primary" data-lucide="gem"></i>
</div>
<h3 className="font-serif text-lg font-medium mb-3 text-dark">Материалы</h3>
<p className="text-sm text-gray-600 leading-relaxed">Работаем как с экономичными, так и с премиальными материалами.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-light">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Услуги</span>
<h2 className="font-serif text-3xl md:text-4xl text-dark tracking-tight">Полный комплекс работ <br/>для вашего участка</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal">
<div className="relative h-64 overflow-hidden group">
<img alt="Кровельные работы" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<h3 className="font-serif text-xl font-medium mb-6 text-dark">Кровельные покрытия</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Металлочерепица
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Мягкая кровля
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Профнастил
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Фальцевая кровля
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-100">
<div className="relative h-64 overflow-hidden group">
<img alt="Заборы" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<h3 className="font-serif text-xl font-medium mb-6 text-dark">Заборы и ограждения</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Из профнастила
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Деревянные
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Сетка Рабица
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Кованые элементы
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-200">
<div className="relative h-64 overflow-hidden group">
<img alt="Навесы" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="p-8">
<h3 className="font-serif text-xl font-medium mb-6 text-dark">Навесы и беседки</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Для автомобилей
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Зоны барбекю
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Хозяйственные
                            </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-primary" data-lucide="check"></i> Летние кухни
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Процесс</span>
<h2 className="font-serif text-3xl md:text-4xl text-dark tracking-tight">Простой и понятный <br/>процесс работы</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group reveal delay-100">
<div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 mx-auto md:mx-0">
<span className="font-serif text-3xl text-gray-300 group-hover:text-primary transition-colors">01</span>
</div>
<div className="text-center md:text-left">
<h4 className="font-medium text-lg mb-2 text-dark">Заявка и консультация</h4>
<p className="text-sm text-gray-500 leading-relaxed">Звоните или оставляете заявку. Консультация — бесплатно!</p>
</div>
</div>

<div className="group reveal delay-200">
<div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 mx-auto md:mx-0">
<span className="font-serif text-3xl text-gray-300 group-hover:text-primary transition-colors">02</span>
</div>
<div className="text-center md:text-left">
<h4 className="font-medium text-lg mb-2 text-dark">Выезд и замер</h4>
<p className="text-sm text-gray-500 leading-relaxed">Выезжаем на ваш участок в ЛНР, делаем точные замеры.</p>
</div>
</div>

<div className="group reveal delay-300">
<div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 mx-auto md:mx-0">
<span className="font-serif text-3xl text-gray-300 group-hover:text-primary transition-colors">03</span>
</div>
<div className="text-center md:text-left">
<h4 className="font-medium text-lg mb-2 text-dark">Расчёт и договор</h4>
<p className="text-sm text-gray-500 leading-relaxed">Составляем смету, фиксируем цену и сроки в договоре.</p>
</div>
</div>

<div className="group reveal delay-300">
<div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300 mx-auto md:mx-0">
<span className="font-serif text-3xl text-gray-300 group-hover:text-primary transition-colors">04</span>
</div>
<div className="text-center md:text-left">
<h4 className="font-medium text-lg mb-2 text-dark">Работы и гарантия</h4>
<p className="text-sm text-gray-500 leading-relaxed">Работаем качественно, сдаём объект, предоставляем гарантию.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-beige/30">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Портфолио</span>
<h2 className="font-serif text-3xl md:text-4xl text-dark tracking-tight">Реализованные проекты <br/>в ЛНР</h2>
</div>
<button className="hidden md:flex items-center gap-2 text-dark font-medium hover:text-primary transition-colors pb-1 border-b border-transparent hover:border-primary">
<i className="w-5 h-5" data-lucide="camera"></i>
                    Смотреть все работы
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl reveal cursor-pointer">
<img alt="Кровля в Луганске" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-primary text-xs font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">Кровля</span>
<h4 className="text-white font-serif text-xl mb-1">Частный дом</h4>
<p className="text-white/70 text-sm">г. Луганск, 180 м²</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl reveal delay-100 cursor-pointer">
<img alt="Забор в Алчевске" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-primary text-xs font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">Ограждение</span>
<h4 className="text-white font-serif text-xl mb-1">Забор жалюзи</h4>
<p className="text-white/70 text-sm">г. Алчевск, 45 п.м.</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl reveal delay-200 cursor-pointer">
<img alt="Навес в Юбилейном" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-primary text-xs font-semibold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block">Навес</span>
<h4 className="text-white font-serif text-xl mb-1">Навес для авто</h4>
<p className="text-white/70 text-sm">п. Юбилейный, 6×8 м</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden reveal">
<button className="w-full py-3 border border-dark/10 rounded-lg text-dark font-medium">Смотреть все работы</button>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-green-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
<div className="flex items-start gap-6">
<div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-600/20 transform -rotate-6">
<i className="w-8 h-8 text-white" data-lucide="users"></i>
</div>
<div>
<h3 className="font-serif text-2xl text-dark mb-2">Наше сообщество ВКонтакте</h3>
<p className="text-gray-600 text-sm max-w-md">Смотрите свежие отчёты с объектов, задавайте вопросы мастерам и получайте полезные советы по строительству.</p>
</div>
</div>
<a className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20 text-center flex items-center justify-center gap-2" href="#">
                    Перейти в группу
                    <i className="w-4 h-4" data-lucide="external-link"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-light">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 reveal">
<div>
<span className="text-primary text-xs font-semibold tracking-widest uppercase mb-2 block">Отзывы</span>
<h2 className="font-serif text-3xl md:text-4xl text-dark tracking-tight">Что говорят клиенты</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors" onclick="document.getElementById('reviews-slider').scrollBy({left: -300, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors" onclick="document.getElementById('reviews-slider').scrollBy({left: 300, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 reveal delay-100" id="reviews-slider">

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm snap-center">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-serif text-dark font-medium">А</div>
<div>
<div className="font-medium text-dark text-sm">Александр</div>
<div className="text-xs text-gray-400">г. Луганск</div>
</div>
</div>
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Делали крышу и забор. Работали аккуратно, быстро, качественно. Цена осталась как в смете, без доплат. Рекомендую!"</p>
<div className="text-xs text-gray-400">Ноябрь 2023</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm snap-center">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-serif text-dark font-medium">Е</div>
<div>
<div className="font-medium text-dark text-sm">Елена</div>
<div className="text-xs text-gray-400">г. Алчевск</div>
</div>
</div>
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Очень довольна навесом для машины. Ребята подсказали какой поликарбонат лучше выбрать, сделали всё за 2 дня. Чисто и красиво."</p>
<div className="text-xs text-gray-400">Октябрь 2023</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm snap-center">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-serif text-dark font-medium">С</div>
<div>
<div className="font-medium text-dark text-sm">Сергей</div>
<div className="text-xs text-gray-400">п. Металлист</div>
</div>
</div>
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-4">"Заказывали забор из профнастила. Всё четко по договору. Материал привезли сами, мусор за собой убрали. Надёжная фирма."</p>
<div className="text-xs text-gray-400">Сентябрь 2023</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-3xl p-8 md:p-12 reveal">
<div className="text-center mb-10">
<h2 className="font-serif text-3xl text-dark mb-4">Бесплатный замер и консультация</h2>
<p className="text-gray-600">Оставьте заявку, и мы перезвоним в течение 30 минут для уточнения деталей.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Ваше имя</label>
<input className="custom-input w-full px-4 py-3 text-dark" placeholder="Иван Иванов" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Телефон</label>
<input className="custom-input w-full px-4 py-3 text-dark" placeholder="+7 (___) ___-__-__" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray-700 uppercase tracking-wide">Интересующая услуга</label>
<div className="relative">
<select className="custom-input w-full px-4 py-3 text-dark appearance-none cursor-pointer">
<option disabled="" selected="" value="">Выберите из списка</option>
<option value="roof">Кровельные работы</option>
<option value="fence">Заборы и ограждения</option>
<option value="canopy">Навесы и беседки</option>
<option value="complex">Комплекс работ</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-primary hover:bg-green-700 text-white font-medium py-4 rounded-lg shadow-lg shadow-green-900/20 transition-all duration-300 transform hover:-translate-y-1 mt-4" type="submit">
                        📞 Заказать бесплатный замер
                    </button>
<p className="text-center text-xs text-gray-400 mt-4">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
</form>
</div>
</div>
</section>

<footer className="bg-dark text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<div className="font-sans font-semibold text-lg tracking-tighter uppercase mb-4">Кровельный Дом</div>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Профессиональные кровельные работы и благоустройство участков в Луганской Народной Республике. Надёжность, проверенная временем.
                    </p>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-white/90">Контакты</h4>
<div className="space-y-4">
<a className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors" href="tel:+79991234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                            +7 (999) 123-45-67
                        </a>
<div className="flex items-center gap-3 text-gray-400">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                            Работаем по всей ЛНР
                        </div>
<div className="flex items-center gap-3 text-gray-400">
<i className="w-4 h-4" data-lucide="clock"></i>
                            Пн-Сб: 9:00 - 18:00
                        </div>
</div>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-white/90">Мы в соцсетях</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<span className="font-bold text-sm">Vk</span>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<i className="w-4 h-4" data-lucide="send"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<div>© 2024 Кровельный Дом. Все права защищены.</div>
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</footer>



    </>
  );
}
