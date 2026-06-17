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



        // Mobile Menu
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = menu.querySelectorAll('a');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            });
        });

        // History Show More Toggle
        const historyBtn = document.getElementById('history-toggle');
        const historyContainer = document.querySelector('.history-hidden');
        
        historyBtn.addEventListener('click', () => {
            historyContainer.classList.remove('hidden');
            historyBtn.style.display = 'none';
        });

        // Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

    
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#FF3D1A] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#09090b]/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-heading font-bold text-2xl tracking-tighter text-white flex items-center gap-2 group z-50" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<span className="absolute inset-0 border border-[#FF3D1A] rotate-45 rounded-sm group-hover:rotate-90 transition-transform duration-500"></span>
<span className="text-[#FF3D1A] text-xs font-bold">DW</span>
</div>
                DWTECH
            </a>
<nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 px-2 backdrop-blur-sm">
<a className="text-xs font-semibold tracking-wide text-white bg-white/10 px-5 py-2 rounded-full transition-all" href="#home">ГЛАВНАЯ</a>
<a className="hover:text-white hover:bg-white/5 transition-all text-xs font-semibold text-zinc-400 tracking-wide rounded-full pt-2 pr-5 pb-2 pl-5" href="#about">О КОМПАНИИ</a>
<a className="text-xs font-semibold tracking-wide text-zinc-400 hover:text-white px-5 py-2 hover:bg-white/5 rounded-full transition-all" href="#products">ПРОДУКЦИЯ</a>
<a className="text-xs font-semibold tracking-wide text-zinc-400 hover:text-white px-5 py-2 hover:bg-white/5 rounded-full transition-all" href="#projects">ПРОЕКТЫ</a>
</nav>
<div className="hidden lg:flex items-center gap-6 z-50">
<a className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:scale-105" href="#contact">
<span className="mr-2 font-heading font-bold text-xs uppercase tracking-widest">Связаться</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<button className="lg:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
<div className="hidden absolute top-full left-0 w-full bg-[#09090b] border-b border-white/10 p-6 lg:hidden flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-white font-semibold text-lg" href="#home">Главная</a>
<a className="text-zinc-400 font-medium" href="#about">О компании</a>
<a className="text-zinc-400 font-medium" href="#products">Продукция</a>
<a className="text-zinc-400 font-medium" href="#projects">Проекты</a>
<a className="text-[#FF3D1A] font-bold uppercase tracking-widest text-sm pt-4" href="#contact">Оставить заявку</a>
</div>
</header>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-24 relative" id="home">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
<div className="lg:col-span-7 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF3D1A]/30 bg-[#FF3D1A]/10 text-[#FF3D1A] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF3D1A] animate-pulse"></span>
                    Интеллектуальное Наблюдение
                </div>
<h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white uppercase leading-[0.9] tracking-tighter mb-8">
                    Тепловизионная <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-white to-zinc-500">Защита</span> <br/>
                    Инфраструктуры
                </h1>
<p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl font-light border-l-2 border-zinc-800 pl-6">
                    Профессиональные оптико-электронные системы для охраны периметра, морской навигации и защиты критически важных объектов. Разработано и произведено для работы в экстремальных условиях.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#FF3D1A] hover:bg-[#d63215] text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm shadow-[0_0_20px_rgba(255,61,26,0.3)] transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center gap-2" href="#products">
                        Каталог Решений <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="group border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-widest uppercase py-4 px-8 rounded-sm backdrop-blur-sm transition-all duration-300 text-center flex items-center justify-center gap-2" href="#projects">
                        Проекты
                    </a>
</div>
</div>
<div className="lg:col-span-5 relative fade-in-up delay-200">
<div className="relative w-full aspect-[4/5] md:aspect-square bg-zinc-900 rounded-sm overflow-hidden border border-white/10 group">
<div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#FF3D1A]/50 z-20"></div>
<div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#FF3D1A]/50 z-20"></div>
<img alt="Thermal Camera" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 scale-105 hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
<div className="flex justify-between items-end">
<div>
<p className="text-[#FF3D1A] font-mono text-xs mb-1">SYS.STATUS: ACTIVE</p>
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide">Модуль X-200 PTZ</h3>
</div>
<div className="text-right">
<p className="text-zinc-500 text-[10px] font-mono uppercase">Дальность</p>
<p className="text-white font-mono text-lg">12.5 KM</p>
</div>
</div>
</div>
</div>
<div className="absolute -z-10 -right-10 -bottom-10 w-full h-full border border-white/5 rounded-sm"></div>
</div>
</div>
</section>

<section className="bg-zinc-900/30 border-white/5 border-t pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="font-heading text-3xl font-bold text-white uppercase tracking-tight mb-2">Почему выбирают <span className="text-[#FF3D1A]">DWTECH</span></h2>
<p className="text-zinc-400 text-sm max-w-lg">Сочетание передовых исследований и надежного производства.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-sm border border-white/10 bg-[#0c0c0e]">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF3D1A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="R&amp;D" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative h-full p-8 flex flex-col justify-end z-10">
<iconify-icon className="text-[#FF3D1A] text-4xl mb-4" icon="solar:cpu-bolt-linear"></iconify-icon>
<h3 className="text-white font-heading font-bold text-2xl uppercase tracking-wide mb-2">Собственный R&amp;D Центр</h3>
<p className="text-zinc-400 text-sm max-w-md">Полный цикл разработки: от проектирования печатных плат до написания нейросетевых алгоритмов распознавания угроз. Мы не просто собираем — мы создаем.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-sm border border-white/10 bg-[#0c0c0e] hover:border-white/20 transition-colors">
<div className="flex flex-col h-full pt-8 pr-8 pb-8 pl-8 justify-end">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide mb-2">Кастомизация</h3>
<p className="text-zinc-400 text-sm">Адаптация существующих решений под специфические задачи заказчика. Интеграция в существующие СКУД.</p>
</div>
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-white text-8xl" icon="solar:tuning-square-2-linear"></iconify-icon>
</div>
</div>

<div className="relative group overflow-hidden rounded-sm border border-white/10 bg-[#0c0c0e] hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-white text-8xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="p-8 h-full flex flex-col justify-end">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide mb-2">Надежность</h3>
<p className="text-zinc-400 text-sm">Оборудование сертифицировано для работы при температурах от -50°C до +60°C. Класс защиты IP67.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-12 relative" id="products">
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF3D1A] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="border-white/10 border-b mb-12 pb-6">
<span className="text-[#FF3D1A] font-bold tracking-widest text-xs uppercase mb-2 block">Каталог</span>
<h2 className="md:text-4xl uppercase text-3xl font-bold text-white tracking-tight font-heading">ПРОДУКЦИЯ</h2>
</div>

<div className="mb-16">
<div className="flex items-center justify-between mb-6">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide flex items-center gap-2">
<span className="w-1 h-6 bg-[#FF3D1A]"></span> Поворотные PTZ Системы
                    </h3>
<div className="hidden md:flex gap-2">
<button className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-zinc-500 hover:text-white hover:border-white"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-full text-zinc-500 hover:text-white hover:border-white"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] text-white font-mono border border-white/10">SERIES X-200</div>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Мультиспектральный комплекс</h4>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Дальнее обнаружение до 15км с лазерным дальномером.</p>
<a className="text-[#FF3D1A] text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1589923188900-85dae5233271?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] text-white font-mono border border-white/10">SERIES M-100</div>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Компактная PTZ Камера</h4>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Мобильное решение для быстрого развертывания.</p>
<a className="text-[#FF3D1A] text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1581093588401-fbb07366f955?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] text-white font-mono border border-white/10">SERIES TITAN</div>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Тяжелая Платформа</h4>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Для установки охлаждаемых тепловизионных модулей.</p>
<a className="text-[#FF3D1A] text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[10px] text-white font-mono border border-white/10">SERIES S-PRO</div>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Взрывозащищенная PTZ</h4>
<p className="text-zinc-500 text-xs mb-4 line-clamp-2">Сертификация EX для нефтегазового сектора.</p>
<a className="text-[#FF3D1A] text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide flex items-center gap-2 mb-6">
<span className="w-1 h-6 bg-zinc-700"></span> Стационарные Комплексы
                </h3>
<div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Периметр PRO</h4>
<p className="text-zinc-500 text-xs mb-4">Интеллектуальная видеоаналитика на борту.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Технологический контроль</h4>
<p className="text-zinc-500 text-xs mb-4">Радиометрический контроль температур.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Пожарная безопасность</h4>
<p className="text-zinc-500 text-xs mb-4">Детекция возгораний на ранней стадии.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Комплекс "Дозор"</h4>
<p className="text-zinc-500 text-xs mb-4">Автономное питание и связь 4G.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide flex items-center gap-2 mb-6">
<span className="w-1 h-6 bg-zinc-700"></span> Системы Анти-Дрон
                </h3>
<div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Sky-Watcher V1</h4>
<p className="text-zinc-500 text-xs mb-4">Визуальное сопровождение целей.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">RF-Scanner</h4>
<p className="text-zinc-500 text-xs mb-4">Радиочастотное обнаружение.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&amp;w=2134&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Jammer Integration</h4>
<p className="text-zinc-500 text-xs mb-4">Интеграция с подавителями.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Mobile Anti-UAV</h4>
<p className="text-zinc-500 text-xs mb-4">Мобильные комплексы защиты.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-white font-heading font-bold text-xl uppercase tracking-wide flex items-center gap-2 mb-6">
<span className="w-1 h-6 bg-zinc-700"></span> Морские Системы
                </h3>
<div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Marine PTZ-50</h4>
<p className="text-zinc-500 text-xs mb-4">Антикоррозийное покрытие.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1500350710682-1ddb53c13b63?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Навигатор-М</h4>
<p className="text-zinc-500 text-xs mb-4">Помощь при швартовке в тумане.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Спасатель-ИК</h4>
<p className="text-zinc-500 text-xs mb-4">Поиск человека за бортом.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>

<div className="min-w-[300px] md:min-w-[350px] snap-center bg-[#0c0c0e] border border-white/10 rounded-sm group hover:border-[#FF3D1A]/30 transition-all">
<div className="aspect-video bg-zinc-900 relative overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1549488497-2965b3281739?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="text-white font-bold uppercase text-sm mb-2">Портовый Контроль</h4>
<p className="text-zinc-500 text-xs mb-4">Мониторинг акватории порта.</p>
<a className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors" href="#">Подробнее -&gt;</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="max-w-2xl mx-auto px-6">
<div className="bg-[#18181b] border border-white/10 rounded-xl p-6 relative overflow-hidden hover:border-[#FF3D1A]/30 transition-all group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#FF3D1A] text-2xl" icon="solar:plain-2-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-[#2AABEE] flex items-center justify-center text-white">
<iconify-icon className="rotate-45 text-xl" icon="solar:paperclip-2-bold"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-sm">DWTECH Channel</h4>
<p className="text-zinc-500 text-xs">Только что</p>
</div>
</div>
<div className="bg-black/30 rounded p-4 border-l-2 border-[#2AABEE]">
<p className="text-zinc-300 text-sm leading-relaxed mb-2">🚀 Успешно завершены испытания нового модуля на полигоне в Арктике. Система подтвердила работоспособность при -52°C. Скоро опубликуем полный отчет и видеоматериалы.</p>
<a className="text-[#2AABEE] text-xs hover:underline" href="#">t.me/dwtech_official/492</a>
</div>
<div className="mt-4 flex justify-between items-center">
<span className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">Подписаться на новости</span>
<a className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050506] border-t border-white/5" id="projects">
<div className="w-full">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="font-heading text-4xl font-bold text-white uppercase tracking-tight mb-2">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
<p className="text-zinc-500 font-mono text-xs uppercase tracking-widest">География внедрений</p>
</div>

<div className="w-full overflow-hidden mb-16 relative group">
<div className="flex gap-4 animate-scroll w-max group-hover:[animation-play-state:paused] px-6">

<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="NPP" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1569091791842-7cf9646cb053?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">КУРСКАЯ АЭС</div>
</div>
<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="Border" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&amp;w=2178&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">ГРАНИЦА KZ/UZ</div>
</div>
<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="Oil" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">БАЛАКОВСКАЯ АЭС</div>
</div>
<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="Port" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1621253457193-41e98d97587b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">ПОРТ ТАМАНЬ</div>
</div>
<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="Airport" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">АЭРОПОРТ ТОМСК</div>
</div>

<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="NPP" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1569091791842-7cf9646cb053?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">КУРСКАЯ АЭС</div>
</div>
<div className="w-[400px] h-[250px] relative rounded-sm overflow-hidden border border-white/10 shrink-0">
<img alt="Border" className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&amp;w=2178&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-black/80 px-3 py-1 text-white text-[10px] font-mono border-t border-r border-white/10">ГРАНИЦА KZ/UZ</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8 font-mono text-sm">

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Курская АЭС</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированная поворотная тепловизионная камера совместно радаром + тепловизор с автоматизированной системой обнаружения и сопровождения по тепловизионному и видеоканалу.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Балаковская АЭС</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры в системе охраны периметра.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Граница Казахстана с Узбекистаном</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированная поворотная тепловизионная камера с автоматизированной системой обнаружения и сопровождения по тепловизионному и видеоканалу.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Специальные объекты в Крыму и регионах</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры в системе охраны периметра и акватории объектов высшей категории.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Мутновская ГеоЭС, ГРЭС Сургут</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры в системе охраны периметра.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Пром. порт Череповец, Порт Тамань</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры совместно с радарным комплексом.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Порт Махачкала (граница)</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры совместно с радарным комплексом.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Янтарный карьер (Калининград)</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры совместно с радарным комплексом.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Аэропорты (Томск, Иркутск, Норильск, Сургут)</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры совместно с радарным комплексом.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Мозырьский НПЗ (Белоруссия)</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Стационарные тепловизионные камеры в системе охраны периметра.</p>
</div>

<div className="border-l border-white/10 pl-6 hover:border-[#FF3D1A] transition-colors group md:col-span-2">
<h4 className="text-white font-bold mb-2 group-hover:text-[#FF3D1A] transition-colors">Каскад ГЭС (Нижегородская, Саяно-Шушенская и др.)</h4>
<p className="text-zinc-500 leading-relaxed text-xs">Интегрированные поворотные тепловизионные камеры совместно с радарным комплексом и тепловизоры в системе охраны периметра.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/50 border-y border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<h2 className="font-heading text-3xl font-bold text-white uppercase tracking-tight mb-16 text-center">История Развития</h2>
<div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-12" id="history-container">
<div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#FF3D1A] to-transparent"></div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-[#FF3D1A] group-hover:shadow-[0_0_15px_#FF3D1A] transition-all flex items-center justify-center">
<span className="w-1.5 h-1.5 bg-[#FF3D1A] rounded-full"></span>
</span>
<div className="text-[#FF3D1A] text-2xl font-heading font-bold mb-1 opacity-80">2015</div>
<h4 className="text-white text-lg font-bold mb-2">Основание компании</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Запуск первого прототипа промышленного тепловизора. Формирование инженерной команды.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2016</div>
<h4 className="text-white text-lg font-bold mb-2">Первый Госзаказ</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Оснащение пилотной зоны пограничного контроля. Разработка собственного ПО для видеоаналитики.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2017</div>
<h4 className="text-white text-lg font-bold mb-2">Открытие Производства</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Запуск линии поверхностного монтажа печатных плат. Локализация производства 70%.</p>
</div>

<div className="hidden history-hidden space-y-12">
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2018</div>
<h4 className="text-white text-lg font-bold mb-2">Серия "Сигма"</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Выход на международный рынок с линейкой высокочувствительных камер.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2019</div>
<h4 className="text-white text-lg font-bold mb-2">Интеграция с РЛС</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Создание единого комплекса "Радар-Оптика" для защиты аэропортов.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2020</div>
<h4 className="text-white text-lg font-bold mb-2">Патент на AI</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Регистрация уникального алгоритма распознавания человека в условиях нулевой видимости.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2021</div>
<h4 className="text-white text-lg font-bold mb-2">Морская Сертификация</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Получение сертификата Морского Регистра Судоходства для серии Marine PTZ.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2021</div>
<h4 className="text-white text-lg font-bold mb-2">Расширение R&amp;D</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Открытие второй лаборатории в технопарке "Орбита". Штат инженеров вырос до 50 человек.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2022</div>
<h4 className="text-white text-lg font-bold mb-2">Анти-Дрон Направление</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Запуск линейки систем противодействия БПЛА с оптическим захватом цели.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2023</div>
<h4 className="text-white text-lg font-bold mb-2">Крупные Контракты</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Оснащение границ и стратегических объектов системами дальнего обнаружения.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2023</div>
<h4 className="text-white text-lg font-bold mb-2">Новый Цех</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Ввод в эксплуатацию цеха по сборке охлаждаемых тепловизоров.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2024</div>
<h4 className="text-white text-lg font-bold mb-2">Экосистема DWTECH</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Интеграция всех устройств в единую программную среду управления безопасностью.</p>
</div>
<div className="relative group">
<span className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border border-zinc-700 group-hover:border-[#FF3D1A] transition-colors"></span>
<div className="text-white text-2xl font-heading font-bold mb-1 group-hover:text-[#FF3D1A] transition-colors">2024</div>
<h4 className="text-white text-lg font-bold mb-2">Международная Экспансия</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Открытие представительств в странах Ближнего Востока и Азии.</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all" id="history-toggle">
                    Показать всю историю
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#09090b]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-tight mb-16">Сферы Применения</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-zinc-900/20 border border-white/5 p-8 rounded-sm hover:bg-zinc-900/40 transition-colors group">
<iconify-icon className="text-[#FF3D1A] text-3xl mb-6 group-hover:scale-110 transition-transform" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-4">Энергетика</h3>
<ul className="space-y-3 text-zinc-400 text-sm">
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>АЭС и ГЭС</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Подстанции</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>ЛЭП</li>
</ul>
</div>

<div className="bg-zinc-900/20 border border-white/5 p-8 rounded-sm hover:bg-zinc-900/40 transition-colors group">
<iconify-icon className="text-[#FF3D1A] text-3xl mb-6 group-hover:scale-110 transition-transform" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-4">Безопасность</h3>
<ul className="space-y-3 text-zinc-400 text-sm">
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Государственные границы</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Аэропорты</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Режимные объекты</li>
</ul>
</div>

<div className="bg-zinc-900/20 border border-white/5 p-8 rounded-sm hover:bg-zinc-900/40 transition-colors group">
<iconify-icon className="text-[#FF3D1A] text-3xl mb-6 group-hover:scale-110 transition-transform" icon="solar:ship-linear"></iconify-icon>
<h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-4">Морской Флот</h3>
<ul className="space-y-3 text-zinc-400 text-sm">
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Навигация в тумане</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Поиск и спасение</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Береговая охрана</li>
</ul>
</div>

<div className="bg-zinc-900/20 border border-white/5 p-8 rounded-sm hover:bg-zinc-900/40 transition-colors group">
<iconify-icon className="text-[#FF3D1A] text-3xl mb-6 group-hover:scale-110 transition-transform" icon="solar:rocket-2-linear"></iconify-icon>
<h3 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-4">Спецпроекты</h3>
<ul className="space-y-3 text-zinc-400 text-sm">
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>OEM Модули</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Научные исследования</li>
<li className="flex gap-2 items-start"><span className="w-1 h-1 bg-zinc-600 rounded-full mt-2 shrink-0"></span>Космическая отрасль</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-zinc-900/30" id="contact">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-[#0c0c0e] border border-white/10 rounded-lg p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<h2 className="font-heading text-3xl font-bold text-white uppercase tracking-tight mb-4">Запросить Демонстрацию</h2>
<p className="text-zinc-500 text-sm">Заполните форму, и наши инженеры свяжутся с вами в течение 24 часов.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">ФИО *</label>
<input className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] focus:ring-1 focus:ring-[#FF3D1A] transition-all placeholder:text-zinc-700 font-light text-sm" placeholder="Иван Иванов" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Компания *</label>
<input className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] focus:ring-1 focus:ring-[#FF3D1A] transition-all placeholder:text-zinc-700 font-light text-sm" placeholder="Название организации" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Телефон *</label>
<input className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] focus:ring-1 focus:ring-[#FF3D1A] transition-all placeholder:text-zinc-700 font-light text-sm" placeholder="+7 (999) 000-00-00" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Email *</label>
<input className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] focus:ring-1 focus:ring-[#FF3D1A] transition-all placeholder:text-zinc-700 font-light text-sm" placeholder="mail@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Интересующее решение</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] transition-all appearance-none font-light text-sm cursor-pointer">
<option>Поворотные камеры (PTZ)</option>
<option>Стационарные системы</option>
<option>Защита от БПЛА</option>
<option>Морские системы</option>
<option>Индивидуальная разработка</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Сообщение</label>
<textarea className="w-full bg-zinc-900/50 text-white border border-white/10 rounded px-4 py-3 focus:outline-none focus:border-[#FF3D1A] focus:ring-1 focus:ring-[#FF3D1A] transition-all placeholder:text-zinc-700 font-light text-sm" placeholder="Опишите ваши задачи..." rows="4"></textarea>
</div>
<button className="w-full bg-[#FF3D1A] hover:bg-[#d63215] text-white font-bold uppercase tracking-widest py-4 rounded shadow-[0_0_20px_rgba(255,61,26,0.2)] transition-all transform active:scale-[0.99]" type="submit">
                        Отправить Заявку
                    </button>
<p className="text-center text-zinc-600 text-[10px] pt-4">Нажимаю кнопку, вы соглашаетесь с политикой обработки персональных данных.</p>
</form>
</div>
</div>
</section>

<footer className="bg-[#050506] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<a className="font-heading font-bold text-2xl tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<span className="text-[#FF3D1A]">///</span> DWTECH
                </a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                    Передовые технологии тепловидения для защиты того, что действительно важно.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF3D1A] transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF3D1A] transition-all" href="#">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF3D1A] transition-all" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Навигация</h5>
<ul className="space-y-3 text-zinc-500 text-sm">
<li><a className="hover:text-[#FF3D1A] transition-colors" href="#home">Главная</a></li>
<li><a className="hover:text-[#FF3D1A] transition-colors" href="#about">О компании</a></li>
<li><a className="hover:text-[#FF3D1A] transition-colors" href="#products">Продукция</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Решения</h5>
<ul className="space-y-3 text-zinc-500 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Охрана Периметра</a></li>
<li><a className="hover:text-white transition-colors" href="#">Морские Системы</a></li>
<li><a className="hover:text-white transition-colors" href="#">Анти-Дрон</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-heading font-bold text-sm uppercase tracking-widest mb-6">Контакты</h5>
<ul className="space-y-3 text-zinc-500 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-[#FF3D1A]" icon="solar:map-point-linear"></iconify-icon>
                        Москва, Технопарк "Орбита", стр. 4
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF3D1A]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+74950000000">+7 (495) 000-00-00</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF3D1A]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:info@dwtech.ru">info@dwtech.ru</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs">
<p>© 2024 DWTECH. Все права защищены.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Политика конфиденциальности</a>
<a className="hover:text-zinc-400" href="#">Условия использования</a>
</div>
</div>
</footer>


    </>
  );
}
