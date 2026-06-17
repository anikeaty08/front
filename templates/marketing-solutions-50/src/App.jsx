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



      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Mobile menu toggle
        const btn = document.getElementById('mobileMenuBtn');
        const menu = document.getElementById('mobileMenu');
        btn?.addEventListener('click', () => {
          if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
          } else {
            menu.classList.add('hidden');
          }
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
      

<div className="w-full bg-slate-50/60 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between text-xs text-slate-600">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="sparkles"></i>
            Бесплатный аудит для новых клиентов до 30 ноября
          </span>
</div>
<div className="hidden sm:flex items-center gap-4">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="phone"></i>
            +7 (495) 000‑00‑00
          </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="mail"></i>
            hello@mkburo.ru
          </span>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-sm font-semibold">MK</div>
<span className="text-slate-900 tracking-tight text-base font-semibold">MKBureau</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#services">Услуги</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#cases">Кейсы</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#process">Процесс</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#pricing">Тарифы</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#about">О нас</a>
<a className="text-slate-700 hover:text-slate-900 transition-colors" href="#blog">Блог</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
            Встреча
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition" href="#cta">
<i className="w-4.5 h-4.5" data-lucide="wand-2"></i>
            Запросить аудит
          </a>
</div>
<button aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 bg-white w-9 h-9 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" id="mobileMenuBtn">
<i className="w-5 h-5 text-slate-900" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#services">Услуги</a>
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#cases">Кейсы</a>
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#process">Процесс</a>
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#pricing">Тарифы</a>
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#about">О нас</a>
<a className="block rounded-md px-3 py-2 text-slate-700 hover:text-slate-900 hover:bg-slate-50" href="#blog">Блог</a>
<div className="pt-2 border-t border-slate-200">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition" href="#cta">
<i className="w-4.5 h-4.5" data-lucide="wand-2"></i>
              Запросить аудит
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(15,23,42,0.05),_transparent_60%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 lg:pt-20 lg:pb-16">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-600">
<i className="w-3.5 h-3.5 text-amber-500" data-lucide="star"></i>
              ROMI 3,2× в среднем по проектам
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Бюро маркетинговых решений, которое ускоряет рост
            </h1>
<p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl">
              Стратегия, перформанс, аналитика и креатив — единым контуром. Запустим гипотезы за 2 недели и выведем стабильный поток заявок.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-5 py-3 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition" href="#cta">
<i className="w-5 h-5" data-lucide="rocket"></i>
                Бесплатный аудит
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 text-sm font-medium px-5 py-3 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="#cases">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                Портфолио и кейсы
              </a>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">120+</div>
<div className="mt-1 text-xs text-slate-600">запусков за 12 мес.</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">3,2×</div>
<div className="mt-1 text-xs text-slate-600">ROMI в среднем</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">98%</div>
<div className="mt-1 text-xs text-slate-600">удовлетворённость</div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<img alt="Команда маркетинга за работой" className="w-full h-[420px] object-cover rounded-xl border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm w-64">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-600">Лиды (30 дн.)</span>
<i className="w-4.5 h-4.5 text-slate-600" data-lucide="line-chart"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">+184%</div>
<div className="mt-2 h-14 w-full rounded-md bg-gradient-to-r from-slate-50 to-white border border-slate-200 grid place-items-center text-[10px] text-slate-500">
                    Мини‑график
                  </div>
</div>
</div>
</div>

<div className="mt-10">
<p className="text-xs uppercase tracking-wide text-slate-500">Нам доверяют</p>
<div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-4">
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">ALPHA</div>
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">LUMO</div>
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">NOVA</div>
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">PIXEL</div>
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">RATIO</div>
<div className="h-10 rounded-md border border-slate-200 bg-white grid place-items-center text-slate-700 text-sm font-medium tracking-tight">FORMA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-slate-50/50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Решаем ключевые задачи роста</h2>
<p className="mt-3 text-slate-600 max-w-2xl">Фокус на бизнес‑метриках: CAC, LTV, ROMI, payback. Выбираем каналы под ваш рынок и гипотезы.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">
            Все услуги
            <i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="target"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Стратегия и аудит</h3>
<p className="mt-2 text-sm text-slate-600">Позиционирование, сегментация, воронки, JTBD. Аудит каналов и гипотез.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="megaphone"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Перформанс‑маркетинг</h3>
<p className="mt-2 text-sm text-slate-600">Контекст, таргет, programmatic. Сквозная оптимизация по целям.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="search"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">SEO и контент</h3>
<p className="mt-2 text-sm text-slate-600">Техническая оптимизация, контент‑стратегия и лидогенерация из органики.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="palette"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Креатив и продакшн</h3>
<p className="mt-2 text-sm text-slate-600">Айдентика, лендинги, креативы. Подходим данными, а не вкусовщиной.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Аналитика и атрибуция</h3>
<p className="mt-2 text-sm text-slate-600">Сквозная аналитика, BI‑дашборды, корректная атрибуция и payback.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="mouse-pointer-click"></i>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">CRO и воронки</h3>
<p className="mt-2 text-sm text-slate-600">A/B‑тесты, оптимизация конверсии на каждом этапе пути клиента.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-900">
              Узнать больше
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Прозрачный процесс за 5 шагов</h2>
<p className="mt-3 text-slate-600 max-w-2xl">От брифа до масштабирования. Вижуалы, дашборды и отчёты — каждую неделю.</p>
</div>
</div>
<div className="mt-10 grid lg:grid-cols-5 gap-6">

<div className="relative rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="compass"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">1. Диагностика</h3>
<p className="mt-1.5 text-sm text-slate-600">Интервью, аудит, цели. Согласуем метрики успеха.</p>
</div>
<div className="relative rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="file-text"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">2. Стратегия</h3>
<p className="mt-1.5 text-sm text-slate-600">Гипотезы, каналы, медиаплан, KPI и бюджет.</p>
</div>
<div className="relative rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="beaker"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">3. Запуск</h3>
<p className="mt-1.5 text-sm text-slate-600">Креативы, трекинг, QA. Первые данные — через 48 часов.</p>
</div>
<div className="relative rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="sliders"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">4. Оптимизация</h3>
<p className="mt-1.5 text-sm text-slate-600">A/B‑тесты, bid‑менеджмент, перераспределение бюджета.</p>
</div>
<div className="relative rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white w-10 h-10">
<i className="w-5 h-5 text-slate-900" data-lucide="rocket"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">5. Масштаб</h3>
<p className="mt-1.5 text-sm text-slate-600">Добавляем каналы, расширяем сегменты, растим LTV.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-slate-50/50" id="cases">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Кейсы и результаты</h2>
<p className="mt-3 text-slate-600 max-w-2xl">Показываем метрики: не просмотры, а заявки и выручку.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#portfolio">
            Весь портфель
            <i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-colors">
<img alt="E-commerce проект" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600">E‑commerce</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700">Перформанс</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">ROMI 4,1× за 90 дней</h3>
<p className="mt-1.5 text-sm text-slate-600">Комбинация контекста и ретаргета, реформа карточек товара, CRO.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-900 inline-flex items-center gap-1.5">
<i className="w-4.5 h-4.5 text-emerald-600" data-lucide="trending-up"></i>
                  +286% выручка
                </div>
<a className="text-sm text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                  Подробнее <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-colors">
<img alt="EdTech проект" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600">EdTech</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700">Аналитика</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Payback 2,8 мес.</h3>
<p className="mt-1.5 text-sm text-slate-600">Сквозная аналитика, мульти‑тач атрибуция, авто‑аллок бюджетов.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-900 inline-flex items-center gap-1.5">
<i className="w-4.5 h-4.5 text-blue-600" data-lucide="gauge"></i>
                  -34% CAC
                </div>
<a className="text-sm text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                  Подробнее <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 transition-colors">
<img alt="B2B SaaS проект" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2">
<span className="text-xs text-slate-600">B2B SaaS</span>
<span className="text-[10px] px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700">CRO</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Конверсия +68%</h3>
<p className="mt-1.5 text-sm text-slate-600">А/Б‑тесты, персонализация лендингов, работа с ICP.</p>
<div className="mt-4 flex items-center justify-between">
<div className="text-sm text-slate-900 inline-flex items-center gap-1.5">
<i className="w-4.5 h-4.5 text-violet-600" data-lucide="sparkle"></i>
                  +68% CR
                </div>
<a className="text-sm text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                  Подробнее <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-16" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Команда, которой можно доверять</h2>
<p className="mt-3 text-slate-600">Экспертиза из продуктовых и агентских команд: performance, продуктовая аналитика, дизайн, data engineering.</p>
<div className="mt-6 grid grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">12</div>
<div className="mt-1 text-xs text-slate-600">средний опыт (лет)</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">50+</div>
<div className="mt-1 text-xs text-slate-600">ниш в портфеле</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight">24/7</div>
<div className="mt-1 text-xs text-slate-600">дашборды</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Аватар" className="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-slate-900">Анна, CMO</div>
<div className="text-xs text-slate-600">ALPHA</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-700">«Команда быстро погрузилась в продукт, показали рост заявок без увеличения бюджета. Отчётность — на уровне.»</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Аватар" className="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Максим, CEO</div>
<div className="text-xs text-slate-600">NOVA</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-700">«Чёткая стратегия, прозрачные метрики и контроль юнит‑экономики. Рекомендуем.»</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200 bg-slate-50/50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Гибкие форматы сотрудничества</h2>
<p className="mt-3 text-slate-600 max-w-2xl">Оплата за абонентское обслуживание или performance‑бонус.</p>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="text-sm text-slate-600">Стартер</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">от 120 000 ₽/мес</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>2 канала</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>Базовая аналитика</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>Еженедельные отчёты</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 text-sm font-medium px-4 py-2 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition w-full" href="#cta">
              Выбрать
            </a>
</div>
<div className="relative rounded-2xl border border-slate-900 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
<div className="absolute -top-3 right-4 rounded-full border border-slate-200 bg-slate-900 text-white text-[10px] px-2 py-1">Рекомендуем</div>
<div className="text-sm text-slate-600">Рост</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">от 240 000 ₽/мес</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>4–6 каналов</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>Сквозная аналитика, BI</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>CRO и A/B‑тесты</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition w-full" href="#cta">
              Выбрать
            </a>
</div>
<div className="relative rounded-2xl border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
<div className="text-sm text-slate-600">Масштаб</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">индивидуально</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>&gt;6 каналов, PR, оффлайн</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>Data engineering</li>
<li className="inline-flex items-center gap-2"><i className="w-4.5 h-4.5 text-emerald-600" data-lucide="check"></i>Performance‑бонус</li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 text-sm font-medium px-4 py-2 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition w-full" href="#cta">
              Выбрать
            </a>
</div>
</div>
</div>
</section>

<section className="py-16" id="cta">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-slate-200 bg-white p-8 lg:p-10">
<div className="grid lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Готовы обсудить задачу?</h3>
<p className="mt-2 text-slate-600">Оставьте контакты — вернёмся с планом работ и оценкой в течение 24 часов.</p>
<form className="mt-6 grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-600 mb-1">Имя</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition" placeholder="Иван" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Email</label>
<input className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition" placeholder="name@company.ru" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-slate-600 mb-1">Комментарий</label>
<textarea className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition" placeholder="Опишите кратко задачу" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition" type="submit">
<i className="w-4.5 h-4.5" data-lucide="send"></i>
                    Получить план работ
                  </button>
<p className="text-xs text-slate-500">Нажимая, вы соглашаетесь с политикой конфиденциальности.</p>
</div>
</form>
</div>
<div className="lg:pl-6">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<div className="inline-flex items-center gap-2 text-sm text-slate-700">
<i className="w-4.5 h-4.5" data-lucide="shield-check"></i>
                  Без спама и лишних звонков
                </div>
<div className="mt-4 space-y-3 text-sm text-slate-700">
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 text-slate-600 mt-0.5" data-lucide="clock"></i>
<div>Ответ в течение 24 часов</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 text-slate-600 mt-0.5" data-lucide="file-check-2"></i>
<div>Чёткий план на 30/60/90 дней</div>
</div>
<div className="flex items-start gap-3">
<i className="w-4.5 h-4.5 text-slate-600 mt-0.5" data-lucide="wallet"></i>
<div>Прозрачная смета и KPI</div>
</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<img alt="Руководитель" className="w-10 h-10 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-slate-900">Екатерина, руководитель проектов</div>
<div className="text-xs text-slate-600">Ответит на все вопросы</div>
</div>
</div>
<div className="mt-3 text-sm text-slate-700">«Чаще всего первые результаты вы видите уже в течение 2–3 недель после старта».</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-200" id="blog">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Экспертиза и материалы</h2>
<p className="mt-3 text-slate-600">Подборки инструментов, кейсы, разборы юнит‑экономики.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#">
            Все статьи
            <i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<article className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="text-xs text-slate-600">Гайд</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Как настроить сквозную аналитику за 7 дней</h3>
<p className="mt-2 text-sm text-slate-600">Стек, ETL, атрибуция, типичные ошибки и быстрые победы.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-slate-900" href="#">
              Читать <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="text-xs text-slate-600">Разбор</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">ROMI vs ROAS: что реально важно бизнесу</h3>
<p className="mt-2 text-sm text-slate-600">Главные метрики эффективности и как их согласовать с PnL.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-slate-900" href="#">
              Читать <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</article>
<article className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 transition-colors">
<div className="text-xs text-slate-600">Чек‑лист</div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">20 быстрых проверок рекламного кабинета</h3>
<p className="mt-2 text-sm text-slate-600">Найдите “утечки” бюджета и увеличьте CR.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-slate-900" href="#">
              Читать <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</article>
</div>
</div>
</section>

<footer className="pt-16 pb-10 border-t border-slate-200 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-900 text-white grid place-items-center tracking-tight text-sm font-semibold">MK</div>
<span className="text-slate-900 tracking-tight text-base font-semibold">MKBureau</span>
</div>
<p className="mt-3 text-sm text-slate-600">Бюро маркетинговых решений: стратегия, перформанс, аналитика и креатив.</p>
<div className="mt-4 text-sm text-slate-700 inline-flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="map-pin"></i>
              Москва, ул. Пример, 10
            </div>
<div className="mt-2 text-sm text-slate-700 inline-flex items-center gap-2">
<i className="w-4.5 h-4.5" data-lucide="phone"></i>
              +7 (495) 000‑00‑00
            </div>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Компания</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:text-slate-900" href="#about">О нас</a></li>
<li><a className="hover:text-slate-900" href="#services">Услуги</a></li>
<li><a className="hover:text-slate-900" href="#cases">Кейсы</a></li>
<li><a className="hover:text-slate-900" href="#blog">Блог</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Материалы</div>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li><a className="hover:text-slate-900" href="#">Гайды</a></li>
<li><a className="hover:text-slate-900" href="#">Шаблоны</a></li>
<li><a className="hover:text-slate-900" href="#">Подкаст</a></li>
<li><a className="hover:text-slate-900" href="#">Вебинары</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Подписка</div>
<p className="mt-3 text-sm text-slate-600">Еженедельная рассылка о росте и маркетинге.</p>
<form className="mt-3 flex gap-2">
<input className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition" placeholder="Email" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 transition">
                Подписаться
              </button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-600">
<div>© 2025 MKBureau. Все права защищены.</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-900" href="#">Условия</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
