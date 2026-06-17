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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
<span className="text-white text-xs font-bold">N</span>
</div>
                NE PRO SPORT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#about">Обо мне</a>
<a className="hover:text-white transition-colors" href="#features">Методика</a>
<a className="hover:text-white transition-colors" href="#programs">Программы</a>
</div>
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#programs">
                Выбрать программу
            </a>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center fade-in">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-wider">
                        Автор программ
                    </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                        Мария <span className="text-zinc-500">Непроспорт</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-lg">
                        Персональный подход к вашему телу. Без жестких диет, с научным подходом и гарантированным результатом.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<div className="flex items-center gap-3 text-sm text-zinc-400">
<i className="w-5 h-5 text-indigo-400" data-lucide="award"></i>
<span>Сертифицированный тренер</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-400">
<i className="w-5 h-5 text-indigo-400" data-lucide="users"></i>
<span>1000+ довольных учеников</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-[4/5] bg-zinc-900 rounded-xl border border-white/10 overflow-hidden flex items-center justify-center">

<img alt="Maria Trainer" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-zinc-950/70 backdrop-blur-md p-4 rounded-lg border border-white/5">
<p className="text-white text-sm font-medium">Мои достижения</p>
<p className="text-xs text-zinc-400 mt-1">Создатель уникальной методики оздоровления и коррекции фигуры</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="features">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center fade-in delay-100">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">НЕ ПРО СПОРТ — это:</h2>
<p className="text-lg text-zinc-400 font-light">Комплексная система заботы о себе</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in delay-200">

<div className="lg:col-span-2 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="absolute right-8 top-8 p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
<i className="w-8 h-8" data-lucide="dumbbell"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Профессиональные тренировки</h3>
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base text-zinc-400">Профессионально разработанные программы</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="video"></i>
<span className="text-base text-zinc-400">Подробный видео-разбор техники</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="trophy"></i>
<span className="text-base text-zinc-400">С гарантированным результатом</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="flask-conical"></i>
<span className="text-base text-zinc-400">С научным подходом</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="bar-chart-2"></i>
<span className="text-base text-zinc-400">Для любого уровня подготовки</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" data-lucide="home"></i>
<span className="text-base text-zinc-400">Занимайтесь дома или в зале</span>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
<i className="w-6 h-6" data-lucide="message-circle-heart"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Поддержка</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5"></span>
                                Доступ к чату единомышленников
                            </li>
<li className="flex items-start gap-3 text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5"></span>
                                Под руководством тренера
                            </li>
<li className="flex items-start gap-3 text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5"></span>
                                Ответы на вопросы и рекомендации
                            </li>
</ul>
</div>
</div>

<div className="lg:col-span-2 group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="absolute right-8 top-8 p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
<i className="w-8 h-8" data-lucide="utensils"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-6 tracking-tight">Умное питание</h3>
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-base text-zinc-400">План питания без жестких ограничений</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="calculator"></i>
<span className="text-base text-zinc-400">С подсчетом калорий и без</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="shopping-cart"></i>
<span className="text-base text-zinc-400">Готовые продуктовые корзины</span>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" data-lucide="book-open"></i>
<span className="text-base text-zinc-400">Дневник питания с индивид. подходом</span>
</div>
<div className="col-span-2 flex items-start gap-3 bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/10 mt-2">
<i className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" data-lucide="book"></i>
<span className="text-base text-emerald-100">Книга высокобелковых, вкусных и полезных рецептов</span>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-3xl p-8 hover:bg-zinc-900/60 transition-all duration-300">
<div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 mb-6">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Другие активности</h3>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-pink-400" data-lucide="wind"></i>
<span className="text-base text-zinc-400">Дыхательные практики</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-pink-400" data-lucide="move"></i>
<span className="text-base text-zinc-400">Суставная гимнастика</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-pink-400" data-lucide="sun"></i>
<span className="text-base text-zinc-400">Утренние зарядки</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-4 h-4 text-pink-400" data-lucide="activity"></i>
<span className="text-base text-zinc-400">Растяжка</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="programs">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 fade-in delay-200">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2">Программы тренировок</h2>
<p className="text-lg text-zinc-400">Выберите подходящий формат для ваших целей</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in delay-300">

<div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
<div className="h-48 bg-zinc-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<img alt="Home Workout" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="bg-indigo-500 text-white text-xs font-semibold px-2 py-1 rounded">Хит продаж</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-white mb-2">Домашний старт</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Идеально для новичков. Тренировки без оборудования в домашних условиях.</p>
<div className="space-y-3 mb-8 border-t border-white/5 pt-6">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="calendar"></i> 4 недели
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="play-circle"></i> 12 тренировок
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="message-circle"></i> Общий чат
                            </div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white">2 990 ₽</span>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">Купить</button>
</div>
</div>
</div>

<div className="flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors">
<div className="h-48 bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<img alt="Gym Workout" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-white mb-2">Зал &amp; Рельеф</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Продвинутая программа для тренажерного зала. Акцент на ягодицы и спину.</p>
<div className="space-y-3 mb-8 border-t border-white/5 pt-6">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="calendar"></i> 6 недель
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="dumbbell"></i> Силовые + Кардио
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="book"></i> Книга рецептов
                            </div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white">4 500 ₽</span>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors">Купить</button>
</div>
</div>
</div>

<div className="flex flex-col bg-gradient-to-b from-zinc-800 to-zinc-900 border border-indigo-500/30 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors shadow-lg shadow-indigo-900/10">
<div className="h-48 bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10"></div>
<img alt="Individual" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 z-20">
<span className="bg-white text-black text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><i className="w-3 h-3 fill-black" data-lucide="star"></i> VIP</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium text-white mb-2">Личное ведение</h3>
<p className="text-base text-zinc-400 mb-6 flex-grow">Полное сопровождение, индивидуальный план питания и тренировок.</p>
<div className="space-y-3 mb-8 border-t border-white/5 pt-6">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="calendar"></i> 1 месяц
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="user-check"></i> Личная связь 24/7
                            </div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-400" data-lucide="check-circle"></i> Коррекция техники
                            </div>
</div>
<div className="flex items-center justify-between">
<span className="text-xl font-medium text-white">12 000 ₽</span>
<button className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 transition-colors">Записаться</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center">
<span className="text-white text-xs font-bold">N</span>
</div>
<span className="text-zinc-400 text-sm">© 2024 Ne Pro Sport</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="send"></i></a>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-300" href="#">Оферта</a>
<a className="hover:text-zinc-300" href="#">Политика конфиденциальности</a>
</div>
</div>
</footer>


    </>
  );
}
