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



document.addEventListener("DOMContentLoaded", () => {
lucide.createIcons();
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
}
});
});
document.querySelectorAll('.animate-fade-up').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12">
<path d="M2 12h20"></path>
<path d="M2 12l5 5"></path>
<path d="M22 12l-5-5"></path>
</svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">
            RUDI
          </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#services">
            Услуги
          </a>
<a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#maps">
            Карты
          </a>
<a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#info">
            Информация
          </a>
<a className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#torgi">
            Торги
          </a>
</nav>
<div className="flex items-center gap-4">
<button className="flex items-center justify-center w-8 h-8 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all" onclick="toggleTheme()" title="Сменить тему (Системная / Светлая / Темная)">
<svg fill="none" height="18" id="theme-btn-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</button>
<a className="hidden sm:flex text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#login">
            Вход
          </a>
<a className="hidden sm:flex items-center gap-2 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md transition-all duration-300 shadow-sm" href="#contact">
<span>Связаться</span>
<svg className="lucide lucide-arrow-right w-3 h-3 text-blue-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<button className="md:hidden text-slate-600 hover:text-slate-900">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen w-full overflow-hidden flex items-center pt-20 pb-20 bg-slate-50">

<div className="absolute inset-0 z-0">

<img alt="Береговая линия" className="object-center animate-[revealImage_1.5s_ease-out_forwards] opacity-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1758743527538-62628bcb655e?w=3840&amp;q=80"/>
<div className="bg-gradient-to-r from-white via-white/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 w-full max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative gap-x-10 gap-y-10 items-center">
<div className="lg:col-span-7 animate-fade-up" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-3 mb-6">
<span className="px-2 py-0.5 border border-blue-200 bg-blue-50 text-blue-700 text-[10px] uppercase tracking-widest font-semibold rounded-sm">
              Береговая инженерия
            </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 leading-[1.1] mb-6">
            ОФОРМЛЯЕМ
            <br/>
            АКВАТОРИИ И
            <br/>
<span className="text-blue-600">СТРОИМ У ВОДЫ.</span>
</h1>
<p className="text-base md:text-lg text-slate-600 font-normal max-w-xl leading-relaxed mb-8">
            Проверим свободна ли акватория, подготовим правовые документы,
            разработаем проект берегоукрепления или искусственного участка и
            доведём работу до регистрации.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wide hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20" href="#calculate">
              Рассчитать проект
            </a>
<a className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-md text-xs font-semibold uppercase tracking-wide hover:bg-slate-50 transition-colors" href="#map">
              Карта водопользователей
            </a>
</div>
<div className="grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 max-w-lg">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                70+
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500">
                Проектов
              </span>
</div>
<div className="flex flex-col gap-1 border-l border-slate-200 pl-6">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                8 лет
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500">
                Опыта работы
              </span>
</div>
<div className="flex flex-col gap-1 border-l border-slate-200 pl-6">
<span className="text-2xl font-semibold tracking-tight text-slate-900">
                Эксперты
              </span>
<span className="text-[10px] uppercase tracking-wider text-slate-500">
                Команда профи
              </span>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-5 animate-fade-up delay-200" style={{animationPlayState: 'running'}}>
<div className="glass-panel max-w-sm rounded-xl ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-3 mb-6 items-center">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<div className="text-xs font-bold uppercase text-slate-400">
                  Полный цикл
                </div>
<div className="text-sm font-semibold text-slate-900">
                  Работа под ключ
                </div>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="lucide lucide-scale w-4 h-4 text-blue-500" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
                Юридическое оформление
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="lucide lucide-compass w-4 h-4 text-blue-500" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                Инженерные изыскания
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="lucide lucide-pen-tool w-4 h-4 text-blue-500" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
<path d="m2.3 2.3 7.286 7.286"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
                Проектирование
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<svg className="lucide lucide-hard-hat w-4 h-4 text-blue-500" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
<path d="M14 6a6 6 0 0 1 6 6v3"></path>
<path d="M4 15v-3a6 6 0 0 1 6-6"></path>
<rect height="4" rx="1" width="20" x="2" y="15"></rect>
</svg>
                Строительство
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-[1440px] mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-up" style={{animationPlayState: 'running'}}>
<div>
<span className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-semibold block mb-3">
            Направления
          </span>
<h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-slate-900">
            Что мы делаем
          </h3>
</div>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">
          Наша команда специализируется на юридическом и документальном
          сопровождении водопользования, проектировании и строительстве.
        </p>
</div>
<div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-xl hover:border-blue-200 transition-colors duration-300 animate-fade-up" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">
            Документы на водопользование
          </h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
            Готовим заявления, схемы и сопровождаем получение решений и
            договоров. Полная легализация акватории.
          </p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">
            Подробнее
            <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-xl hover:border-blue-200 transition-colors duration-300 animate-fade-up delay-100" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
<path d="M15 5.764v15"></path>
<path d="M9 3.236v15"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">
            Корректировка береговой линии
          </h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
            Проводим изыскания, формируем каталог координат и увязываем
            береговую полосу с ЕГРН.
          </p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">
            Подробнее
            <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="group relative bg-slate-50 border border-slate-100 p-8 rounded-xl hover:border-blue-200 transition-colors duration-300 animate-fade-up delay-200" style={{animationPlayState: 'running'}}>
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pickaxe w-5 h-5" data-lucide="pickaxe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999"></path>
<path d="M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024"></path>
<path d="M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069"></path>
<path d="M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z"></path>
</svg>
</div>
<h4 className="text-lg font-semibold text-slate-900 mb-3">
            Искусственные участки
          </h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
            Создаём ИЗУ: концепция, проект, согласования и сопровождение
            строительства от идеи до реализации.
          </p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700" href="#">
            Подробнее
            <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-[1440px] mr-auto ml-auto pr-6 pl-6">
<div className="mb-12 animate-fade-up" style={{animationPlayState: 'running'}}>
<h3 className="text-3xl font-medium tracking-tighter text-slate-900">
            Примеры наших работ
          </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-lg overflow-hidden border border-slate-200 bg-white animate-fade-up" style={{animationPlayState: 'running'}}>
<div className="h-64 overflow-hidden">
<img alt="Причал" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1594003715326-f6030861574e?w=1600&amp;q=80"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                Оформление частного причала
              </h4>
<p className="text-sm text-slate-500">
                Провели полный цикл работ: от подготовки картографических
                материалов до получения решения о предоставлении водного
                объекта.
              </p>
</div>
</div>

<div className="group relative rounded-lg overflow-hidden border border-slate-200 bg-white animate-fade-up delay-100" style={{animationPlayState: 'running'}}>
<div className="h-64 overflow-hidden">
<img alt="Набережная" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1662278340905-fabbcf66e84f?w=1600&amp;q=80"/>
</div>
<div className="p-6">
<h4 className="text-lg font-semibold text-slate-900 mb-2">
                Проектирование набережной
              </h4>
<p className="text-sm text-slate-500">
                Разработали комплект проектной документации для строительства
                городской набережной, включая водоохранные мероприятия.
              </p>
</div>
</div>
</div>
<div className="mt-6 text-center animate-fade-up" style={{animationPlayState: 'running'}}>
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
            Посмотреть все проекты
            <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="calculate">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-50/50 skew-x-12 translate-x-32 z-0"></div>
<div className="max-w-[1440px] mx-auto px-6 relative z-10">
<div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-center shadow-2xl animate-fade-up" style={{animationPlayState: 'running'}}>
<span className="text-blue-400 text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">
            Стоимость проекта
          </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Рассчитайте смету
            <br/>
<span className="text-slate-400">онлайн</span>
</h2>
<p className="text-slate-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Ответьте на несколько вопросов о типе объекта, акватории и
            материалах, и мы подготовим предварительный расчет.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-blue-600 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-blue-500 transition-colors rounded-md shadow-lg shadow-blue-900/50">
              Начать расчет
            </button>
<button className="px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white border border-slate-700 hover:bg-slate-800 transition-colors rounded-md">
              Связаться с менеджером
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-[1440px] mx-auto px-6 mb-12 animate-fade-up" style={{animationPlayState: 'paused'}}>
<h3 className="text-3xl font-medium tracking-tighter text-slate-900 mb-2">
          Отзывы клиентов
        </h3>
<p className="text-slate-500 text-sm">Люди нам доверяют</p>
</div>
<div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm animate-fade-up" style={{animationPlayState: 'paused'}}>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
            "Давно собирался сделать пирс на озере. Благодарю ребят из компании
            Rudi за отличный пирс. Теперь стало очень удобно пришвартовывать
            лодку."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
              С
            </div>
<span className="text-xs font-bold text-slate-900">Сергей В.</span>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm animate-fade-up delay-100" style={{animationPlayState: 'paused'}}>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
            "Работы выполнены качественно и вовремя. Специалисты компании
            грамотно составили проект и подобрали оптимальные решения."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
              О
            </div>
<span className="text-xs font-bold text-slate-900">Олег С.</span>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm animate-fade-up delay-200" style={{animationPlayState: 'paused'}}>
<div className="flex items-center gap-2 mb-4">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 italic">
            "Причал был изготовлен быстро и качественно, учитывая все мои
            пожелания. Установка прошла без проблем. Рекомендую!"
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
              Н
            </div>
<span className="text-xs font-bold text-slate-900">Николай В.</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="info">
<div className="max-w-[1440px] mx-auto px-6 flex justify-between items-end mb-12 animate-fade-up" style={{animationPlayState: 'paused'}}>
<h3 className="text-3xl font-medium tracking-tighter text-slate-900">
          Полезная информация
        </h3>
<a className="hidden md:block text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors" href="#">
          Все статьи →
        </a>
</div>
<div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer animate-fade-up" style={{animationPlayState: 'paused'}}>
<div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-[10px] text-blue-600 font-bold mb-2">24.11.25</div>
<h4 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            Приказ Росводресурсов № 221 от 19.08.2021 простыми словами
          </h4>
<p className="text-sm text-slate-500 line-clamp-2">
            Если вы планируете получить акваторию для причала, понтонов,
            плавучих домиков или другого объекта...
          </p>
</article>
<article className="group cursor-pointer animate-fade-up delay-100" style={{animationPlayState: 'paused'}}>
<div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-[10px] text-blue-600 font-bold mb-2">21.11.25</div>
<h4 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            Приказ Минприроды № 1025 и бывший № 533
          </h4>
<p className="text-sm text-slate-500 line-clamp-2">
            Когда вы оформляете акваторию под причал, плавучие пирсы, пляж,
            рекреацию или забор воды...
          </p>
</article>
<article className="group cursor-pointer animate-fade-up delay-200" style={{animationPlayState: 'paused'}}>
<div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="text-[10px] text-blue-600 font-bold mb-2">20.11.25</div>
<h4 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            Постановление Правительства № 274 простыми словами
          </h4>
<p className="text-sm text-slate-500 line-clamp-2">
            Устанавливает порядок, по которому происходит подготовка и
            заключение договора водопользования...
          </p>
</article>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10" id="contact">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 animate-fade-up" style={{animationPlayState: 'paused'}}>
<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px]">
                R
              </div>
<span className="text-lg font-bold tracking-tight text-slate-900">
                RUDI
              </span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              Береговая инженерия. Оформляем акватории, проектируем и строим у
              воды.
            </p>
<div className="text-xs text-slate-500">
<p>ИП Есипов М.Ю.</p>
<p>ИНН 732812643021</p>
</div>
</div>
<div>
<h4 className="text-xs text-slate-900 font-bold uppercase tracking-widest mb-6">
              Меню
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Услуги
                </a>
</li>
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Интерактивная карта
                </a>
</li>
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  База знаний (FAQ)
                </a>
</li>
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Личный кабинет
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs text-slate-900 font-bold uppercase tracking-widest mb-6">
              Документы
            </h4>
<ul className="space-y-3">
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Публичная оферта
                </a>
</li>
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Политика обработки ПД
                </a>
</li>
<li>
<a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">
                  Политика cookie
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs text-slate-900 font-bold uppercase tracking-widest mb-6">
              Контакты
            </h4>
<ul className="space-y-4">
<li className="flex items-start gap-2">
<svg className="lucide lucide-map-pin w-3 h-3 text-blue-600 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-xs text-slate-500">
                  г. Ульяновск, пер. 1й Рабочий д.6
                </span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-3 h-3 text-blue-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="tel:+79510963300">
                  +7 (9510) 96 33 00
                </a>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail w-3 h-3 text-blue-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="mailto:info@rudi.ru">
                  info@rudi.ru
                </a>
</li>
<li className="flex gap-4 mt-2">
<a className="bg-green-100 p-2 rounded-full text-green-600 hover:bg-green-200 transition-colors" href="https://wa.me/79510963300">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
</a>
<a className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors" href="https://t.me/IP_Esipov">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-200">
<span className="text-[10px] text-slate-400 uppercase tracking-widest">
            © 2025 RUDI. Все права защищены.
          </span>
</div>
</div>
</footer>

    </>
  );
}
