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



      // Init icons with 1.5 stroke width and consistent sizing
      lucide.createIcons({
        attrs: { "stroke-width": 1.5, class: "w-5 h-5" }
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById("menuBtn");
      const mobileNav = document.getElementById("mobileNav");
      let open = false;

      function swapIcon(opened) {
        menuBtn.innerHTML = "";
        const iconName = opened ? "x" : "menu";
        const icon = lucide.createElement(iconName, { "stroke-width": 1.5, class: "w-5 h-5" });
        menuBtn.appendChild(icon);
      }

      menuBtn?.addEventListener("click", () => {
        open = !open;
        mobileNav.classList.toggle("hidden", !open);
        swapIcon(open);
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
      

<div className="w-full bg-white/70 backdrop-blur sticky top-0 z-50 border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between py-4">

<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<span className="text-[13px] font-semibold tracking-tight">VW</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-slate-900">Veria Walks</span>
<span className="text-[11px] font-medium text-slate-500">городские прогулки</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#routes">Маршруты</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">О нас</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#gallery">Галерея</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Отзывы</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Контакты</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
<i data-lucide="message-circle"></i>
<span>Задать вопрос</span>
</a>
<a className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-md shadow-sm transition-colors" href="#contact">
<i data-lucide="calendar"></i>
<span>Бронировать</span>
</a>
</div>

<button aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-white transition-all" id="menuBtn">
<i data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileNav">
<div className="max-w-7xl mx-auto px-6 py-4">
<nav className="grid gap-2">
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-slate-50 text-sm font-medium" href="#routes">
              Маршруты <i className="opacity-60" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-slate-50 text-sm font-medium" href="#about">
              О нас <i className="opacity-60" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-slate-50 text-sm font-medium" href="#gallery">
              Галерея <i className="opacity-60" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-slate-50 text-sm font-medium" href="#reviews">
              Отзывы <i className="opacity-60" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-slate-50 text-sm font-medium" href="#contact">
              Контакты <i className="opacity-60" data-lucide="chevron-right"></i>
</a>
</nav>
<div className="mt-4 flex items-center gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
<i data-lucide="message-circle"></i>
<span>Вопрос</span>
</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight text-white bg-slate-900 hover:bg-slate-800 px-4 py-2.5 rounded-md shadow-sm transition-colors" href="#contact">
<i data-lucide="calendar"></i>
<span>Бронь</span>
</a>
</div>
</div>
</div>
</div>

<section className="relative">
<div className="absolute inset-0 pointer-events-none">
<div className="max-w-7xl mx-auto px-6 h-full">
<div className="h-36 md:h-40 border-b border-slate-200/70"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-600 bg-white rounded-full ring-1 ring-slate-200 px-2.5 py-1 mb-4">
<i className="w-4 h-4" data-lucide="map-pin"></i>
              Верия, Центральная Македония
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Пешие прогулки по Верии с локальными гидами
            </h1>
<p className="mt-4 text-[15px] md:text-base text-slate-600">
              Откройте византийские церкви, еврейский квартал Барбута и шумные улочки вокруг реки Трипотамос. Маленькие группы, насыщенные маршруты, гибкое время.
            </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-700">
<i data-lucide="clock"></i>
                2–3 часа
              </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<i data-lucide="users"></i>
                до 10 человек
              </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<i data-lucide="languages"></i>
                RU | EN | EL
              </div>
</div>
<div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight text-white bg-slate-900 hover:bg-slate-800 px-5 py-3 rounded-md shadow-sm transition-colors" href="#routes">
<i data-lucide="map"></i>
                Смотреть маршруты
              </a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-4 py-3 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 bg-white transition-all" href="#contact">
<i data-lucide="calendar"></i>
                Оставить заявку
              </a>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="face" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="face" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="face" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<p className="text-[13px] text-slate-600">
                4.9/5 на основе 230+ отзывов
              </p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] md:aspect-[5/4] rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
<div className="grid grid-cols-2 gap-2 h-full p-2">
<img alt="Вид на город" className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="grid grid-rows-2 gap-2">
<img alt="Каменные улицы" className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<img alt="Река и мост" className="w-full h-full object-cover rounded-md" src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute -bottom-4 -left-4 hidden md:flex">
<div className="bg-white px-4 py-3 rounded-lg shadow-sm ring-1 ring-slate-200 flex items-center gap-3">
<i data-lucide="route"></i>
<div>
<p className="text-[11px] font-medium text-slate-600">Средний маршрут</p>
<p className="text-sm font-semibold tracking-tight text-slate-900">3.4 км</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-4 mt-12">
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4 hover:ring-slate-300 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center">
<i data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Аутентичные истории</h3>
<p className="text-sm text-slate-600 mt-1">Гиды — жители Верии: легенды, детали и лучшие точки обзора.</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4 hover:ring-slate-300 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center">
<i data-lucide="footprints"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Маленькие группы</h3>
<p className="text-sm text-slate-600 mt-1">До 10 человек. Комфортный темп, время для фото и вопросов.</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4 hover:ring-slate-300 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-items-center">
<i data-lucide="badge-check"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Просто забронировать</h3>
<p className="text-sm text-slate-600 mt-1">Гибкий график, подтверждение в мессенджере или по email.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="routes">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Популярные маршруты</h2>
<p className="text-sm text-slate-600 mt-1">Подберите прогулку по интересам. Все маршруты начинаются в центре.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
<i data-lucide="sliders-horizontal"></i>
          Подбор под вас
        </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

<article className="group bg-white rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Византийские кварталы" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-medium ring-1 ring-slate-200 text-slate-700 inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i>
              история
            </div>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Византийские кварталы</h3>
<p className="text-sm text-slate-600 mt-1">Иконы, деревянные «сахи́нья», древние церкви и узкие улочки Старого города.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-sm text-slate-700">
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="clock"></i>2 ч</span>
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="route"></i>2.5 км</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
                Подробнее <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</article>

<article className="group bg-white rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Набережная Трипотамоса" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-medium ring-1 ring-slate-200 text-slate-700 inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="leaf"></i>
              природа
            </div>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Река Трипотамос и мосты</h3>
<p className="text-sm text-slate-600 mt-1">Зелёные набережные, каменные мосты и панорамы на городские склоны.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-sm text-slate-700">
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="clock"></i>2.5 ч</span>
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="route"></i>3.4 км</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
                Подробнее <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</article>

<article className="group bg-white rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Квартал Барбута" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-medium ring-1 ring-slate-200 text-slate-700 inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="scroll-text"></i>
              наследие
            </div>
</div>
<div className="p-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Еврейский квартал Барбута</h3>
<p className="text-sm text-slate-600 mt-1">История общины, синагога, дома над водой и мостовые у Трипотамоса.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3 text-sm text-slate-700">
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="clock"></i>2 ч</span>
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="route"></i>2.1 км</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
                Подробнее <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="about">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Почему именно мы</h2>
<p className="mt-3 text-sm text-slate-600">
            Мы — небольшая команда гидов из Верии. Сочетаем живую подачу и аккуратную историческую базу. Подстроим темп и содержание под ваш интерес — будь то фото-прогулка, архитектура или гастро-остановки.
          </p>
<div className="mt-6 grid sm:grid-cols-3 gap-3">
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-3">
<div className="text-[11px] font-medium text-slate-600">Средняя оценка</div>
<div className="mt-1 flex items-center gap-1.5">
<i className="text-amber-500" data-lucide="star"></i>
<i className="text-amber-500" data-lucide="star"></i>
<i className="text-amber-500" data-lucide="star"></i>
<i className="text-amber-500" data-lucide="star"></i>
<i className="text-amber-500" data-lucide="star-half"></i>
<span className="ml-1 text-sm font-semibold tracking-tight text-slate-900">4.9</span>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-3">
<div className="text-[11px] font-medium text-slate-600">Годы работы</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">6+</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-3">
<div className="text-[11px] font-medium text-slate-600">Гостей в год</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">1500+</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
<img alt="Гиды на маршруте" className="w-full h-72 object-cover" src="https://images.unsplash.com/photo-1548266652-99cf27701ced?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="gallery">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Галерея</h2>
<p className="text-sm text-slate-600 mt-1">Кадры с наших прогулок — видовые точки, детали и свет.</p>
<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
<img alt="Панорама" className="rounded-lg ring-1 ring-slate-200 w-full h-44 object-cover" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Кафе" className="rounded-lg ring-1 ring-slate-200 w-full h-44 object-cover" src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Мост" className="rounded-lg ring-1 ring-slate-200 w-full h-44 object-cover" src="https://images.unsplash.com/photo-1530533718754-001d2668365a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Улица" className="rounded-lg ring-1 ring-slate-200 w-full h-44 object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="reviews">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Отзывы гостей</h2>
<p className="text-sm text-slate-600 mt-1">Живые впечатления о маршрутах и гидах.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#contact">
<i data-lucide="message-square"></i>
          Оставить отзыв
        </a>
</div>
<div className="grid md:grid-cols-3 gap-6 mt-6">
<div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Гость" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Екатерина</div>
<div className="text-[11px] text-slate-600">Москва</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="mt-3 text-sm text-slate-700">
            Прекрасная прогулка по Барбуте — очень атмосферно, много деталей, о которых невозможно догадаться без гида.
          </p>
</div>
<div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Гость" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Леонид</div>
<div className="text-[11px] text-slate-600">Санкт‑Петербург</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star-half"></i>
</div>
<p className="mt-3 text-sm text-slate-700">
            Отличный баланс истории и прогулки — и никаких толп. Понравились виды на реку и старые дома.
          </p>
</div>
<div className="bg-white rounded-xl ring-1 ring-slate-200 p-5">
<div className="flex items-center gap-3">
<img alt="Гость" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Мария</div>
<div className="text-[11px] text-slate-600">Салоники</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-amber-500">
<i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i><i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="mt-3 text-sm text-slate-700">
            Семейный формат зашёл отлично — дети не устали, гид вовлёк играми. Рекомендуем!
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16" id="contact">
<div className="grid lg:grid-cols-2 gap-10">
<div className="bg-white rounded-xl ring-1 ring-slate-200 p-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Оставьте заявку</h2>
<p className="text-sm text-slate-600 mt-1">Расскажите, когда вы в Верии и какой маршрут интересен — мы быстро ответим.</p>
<form className="mt-5 grid grid-cols-1 gap-4">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[11px] font-medium text-slate-600 mb-1">Ваше имя</label>
<input className="w-full bg-white placeholder-slate-400 text-sm text-slate-900 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none px-3 py-2.5 transition-shadow" placeholder="Например, Анна" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-600 mb-1">Email или телефон</label>
<input className="w-full bg-white placeholder-slate-400 text-sm text-slate-900 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none px-3 py-2.5 transition-shadow" placeholder="example@email.com / +30 ..." type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-600 mb-1">Сообщение</label>
<textarea className="w-full bg-white placeholder-slate-400 text-sm text-slate-900 rounded-md ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 focus:outline-none px-3 py-2.5 transition-shadow" placeholder="Даты, количество человек и интересы" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight text-white bg-slate-900 hover:bg-slate-800 px-5 py-3 rounded-md shadow-sm transition-colors" type="button">
<i data-lucide="send"></i>
                Отправить
              </button>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-4 py-3 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 bg-white transition-all" href="#">
<i data-lucide="phone"></i>
                Связаться по телефону
              </a>
</div>
<p className="text-[11px] text-slate-500">Отправляя форму, вы соглашаетесь с обработкой персональных данных.</p>
</form>
</div>
<div className="rounded-xl overflow-hidden ring-1 ring-slate-200 bg-white">
<div className="h-full grid">
<img alt="Карта и виды Верии" className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-5 border-t border-slate-200">
<div className="grid sm:grid-cols-3 gap-4">
<div className="flex items-start gap-3">
<i data-lucide="map-pin"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Точка сбора</div>
<div className="text-sm text-slate-600">Площадь Элия, центр Верии</div>
</div>
</div>
<div className="flex items-start gap-3">
<i data-lucide="clock"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Время стартов</div>
<div className="text-sm text-slate-600">ежедневно, 10:00 / 17:00</div>
</div>
</div>
<div className="flex items-start gap-3">
<i data-lucide="credit-card"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Оплата</div>
<div className="text-sm text-slate-600">картой/наличными</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#">
<i data-lucide="mail"></i> hello@veriawalks.gr
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 px-3 py-2 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 transition-all" href="#">
<i data-lucide="phone"></i> +30 000 000 0000
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Вопросы и ответы</h2>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4">
<div className="flex items-start gap-3">
<i data-lucide="sun"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Что взять с собой?</div>
<p className="text-sm text-slate-600 mt-1">Удобную обувь, воду и головной убор. В межсезонье — лёгкую ветровку.</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4">
<div className="flex items-start gap-3">
<i data-lucide="baby"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Подойдёт ли для детей?</div>
<p className="text-sm text-slate-600 mt-1">Да, адаптируем маршрут. Есть варианты с меньшим набором подъёмов.</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4">
<div className="flex items-start gap-3">
<i data-lucide="cloud-rain"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">Если пойдёт дождь?</div>
<p className="text-sm text-slate-600 mt-1">Прогулка пройдёт, но мы скорректируем маршрут. Возможен перенос.</p>
</div>
</div>
</div>
<div className="bg-white rounded-lg ring-1 ring-slate-200 p-4">
<div className="flex items-start gap-3">
<i data-lucide="languages"></i>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900">На каких языках?</div>
<p className="text-sm text-slate-600 mt-1">Русский, английский, греческий. Возможно сопровождение переводчика.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-items-center ring-1 ring-slate-900/10">
<span className="text-[13px] font-semibold tracking-tight">VW</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Veria Walks</span>
</div>
<p className="mt-3 text-sm text-slate-600">Авторские прогулки по Верии. Истории, виды и места, куда редко доходят туристы.</p>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Разделы</div>
<ul className="grid gap-1 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#routes">Маршруты</a></li>
<li><a className="hover:text-slate-900" href="#about">О нас</a></li>
<li><a className="hover:text-slate-900" href="#gallery">Галерея</a></li>
<li><a className="hover:text-slate-900" href="#reviews">Отзывы</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Контакты</div>
<ul className="grid gap-1 text-sm text-slate-600">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> hello@veriawalks.gr</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +30 000 000 0000</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Площадь Элия, Верия</li>
</ul>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-900 mb-2">Мы в соцсетях</div>
<div className="flex items-center gap-2">
<a aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-white transition-all" href="#">
<i data-lucide="instagram"></i>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-white transition-all" href="#">
<i data-lucide="youtube"></i>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-white transition-all" href="#">
<i data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-slate-500">
<p>© 2025 Veria Walks. Все права защищены.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-700" href="#">Условия</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
