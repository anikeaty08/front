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



    // lucide icons init
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }
      const yearEl = document.getElementById('year');
      if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
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
      
<div className="flex-1 flex flex-col">

<header className="w-full border-b border-slate-800/60 bg-slate-950/70 backdrop-blur">
<div className="max-w-5xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="inline-flex bg-slate-900 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/161056da-3bf1-4456-9f33-dc8c90ca694d_320w.jpg)] bg-cover bg-center border-slate-700/80 border rounded-full items-center justify-center">
<span className="text-base font-semibold tracking-tight"></span>
</div>
<div className="flex flex-col">
<span className="sm:text-base text-sm font-semibold tracking-tight">Руслан Пронин</span>
<span className="text-xs sm:text-sm text-slate-400">Графический дизайнер для бизнеса</span>
</div>
</div>
<nav className="hidden sm:flex items-center gap-6 text-xs sm:text-sm text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#services">Услуги</a>
<a className="hover:text-slate-50 transition-colors" href="#skills">Навыки</a>
<a className="hover:text-slate-50 transition-colors" href="#portfolio">Портфолио</a>
<a className="hover:text-slate-50 transition-colors" href="#contact">Контакты</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-50 text-slate-950 text-xs sm:text-sm font-medium tracking-tight py-2 px-4 hover:bg-white transition-colors" href="#contact">
<span>Заказать дизайн</span>
<span className="inline-flex items-center justify-center">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</header>

<main className="flex-1">

<section className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 w-full border-slate-900/60 border-b">
<div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:py-14 lg:py-20 sm:px-6 lg:px-8 max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 gap-x-10 gap-y-10 items-center">

<div className="space-y-7">
<div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/60 text-xs sm:text-sm text-slate-300 px-3 py-1 gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="">Дизайн, который помогает бизнесу расти</span>
</div>
<div className="space-y-4">
<h1 className="sm:text-4xl lg:text-5xl leading-tight text-3xl font-semibold text-slate-50 tracking-tight">
                Меня зовут Руслан.<br className="hidden sm:block"/>
                Я графический дизайнер,<br className="hidden sm:block"/>
                создаю дизайн для бизнеса.
              </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                Буду рад создать что-то особенное для Вас. Разрабатываю графические материалы
                для любых направлений бизнеса с учётом ваших пожеланий и задач бренда.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-slate-50 text-slate-950 text-sm sm:text-base font-medium tracking-tight py-2.5 px-5 hover:bg-white transition-colors" href="#contact">
                Обсудить проект
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 text-slate-200 text-sm sm:text-base py-2.5 px-4 hover:border-slate-500 hover:text-slate-50 transition-colors" href="#portfolio">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Посмотреть работы</span>
</a>
</div>
<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 text-xs sm:text-sm text-slate-400">
<div className="space-y-0.5">
<p className="text-slate-200 text-sm">Дизайн для бизнеса</p>
<p>Фирменный стиль, презентации, интерфейсы</p>
</div>
<div className="space-y-0.5">
<p className="text-slate-200 text-sm">Современные инструменты</p>
<p className="">Adobe, Figma, Tilda, адаптация под цифровые и печатные носители</p>
</div>
</div>
</div>

<div className="w-full">
<div className="relative rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/60 shadow-[0_24px_80px_rgba(15,23,42,0.9)] overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute bottom-0 -left-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"></div>
</div>
<div className="relative p-5 sm:p-6 lg:p-7 space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-slate-300">Специализация</p>
<p className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      Руслан Пронин — Дизайн для бизнеса
                    </p>
</div>
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
<span className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 px-2 py-1">
                      online
                    </span>
</div>
</div>
<div className="grid gap-3 text-xs sm:text-sm text-slate-200">
<div className="flex items-start gap-2">
<span className="mt-0.5 text-base">🚀</span>
<div className="">
<p className="font-medium text-slate-50">Интерфейсы</p>
<p className="text-slate-400">
                        Структурные и понятные интерфейсы для сервисов и продуктов.
                      </p>
</div>
</div>
<div className="flex items-start gap-2">
<span className="mt-0.5 text-base">🤝</span>
<div className="">
<p className="font-medium text-slate-50">Полиграфия</p>
<p className="text-slate-400">
                        Визитки, каталоги, буклеты, упаковка и другая печатная продукция.
                      </p>
</div>
</div>
<div className="flex items-start gap-2">
<span className="mt-0.5 text-base">⛪️</span>
<div className="">
<p className="font-medium text-slate-50">Дизайн сайтов в Figma и Tilda</p>
<p className="text-slate-400">
                        Современные адаптивные сайты с акцентом на конверсию и визуальную целостность.
                      </p>
</div>
</div>
</div>
<div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm">
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 space-y-1">
<p className="text-slate-400">Баннеры</p>
<p className="font-medium text-slate-50">Онлайн и офлайн реклама</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 space-y-1">
<p className="text-slate-400">Презентации</p>
<p className="font-medium text-slate-50">Структура, визуальный стиль и логика</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 space-y-1">
<p className="text-slate-400">Логотипы</p>
<p className="font-medium text-slate-50">Свежий бренд-образ</p>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-emerald-500 to-emerald-300"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-sky-500 to-sky-300"></div>
<div className="h-7 w-7 rounded-full border border-slate-900 bg-gradient-to-br from-fuchsia-500 to-fuchsia-300"></div>
</div>
<div className="text-right text-slate-400">
<p>Готов адаптировать стиль</p>
<p>под вашу нишу и аудиторию</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-900/60 bg-slate-950" id="services">
<div className="max-w-5xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Что вы можете заказать
              </h2>
<p className="mt-2 text-base sm:text-lg text-slate-300 max-w-xl">
                Комплексный графический дизайн для цифровых и печатных задач бизнеса.
              </p>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
<span className="text-base">🚀</span>
</div>
<span className="text-xs text-slate-400">Интерфейсы</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Интерфейсы
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Продуманные интерфейсы для сайтов, сервисов и мобильных приложений с фокусом на удобство и визуальную чистоту.
                </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30">
<span className="text-base">🤝</span>
</div>
<span className="text-xs text-slate-400">Полиграфия</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Полиграфия
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Визитки, каталоги, листовки, упаковка, наружная реклама — всё, что помогает бренду быть заметным офлайн.
                </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/30">
<span className="text-base">⛪️</span>
</div>
<span className="text-xs text-slate-400">Сайты</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Дизайн сайтов в Figma и Tilda
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Лендинги и многостраничные сайты: структура, визуал, адаптивность и подготовка к запуску на Tilda.
                </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
<span className="text-base">🏆</span>
</div>
<span className="text-xs text-slate-400">Реклама</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Баннеры
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Рекламные баннеры для соцсетей, сайтов и наружных носителей с учётом требований площадок.
                </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
<span className="text-base">🎯</span>
</div>
<span className="text-xs text-slate-400">Презентации</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Презентации
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Структурированные и визуально цельные презентации для инвесторов, клиентов и внутренних задач.
                </p>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-900/80 hover:border-slate-700 transition-colors p-5 flex flex-col gap-4">
<div className="flex items-center justify-between gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30">
<span className="text-base">⚡️</span>
</div>
<span className="text-xs text-slate-400">Айдентика</span>
</div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                  Логотипы
                </h3>
<p className="text-sm sm:text-base text-slate-300">
                  Логотипы и элементы фирменного стиля, которые легко масштабируются на любые носители.
                </p>
</div>
</article>
</div>
</div>
</section>

<section className="w-full border-b border-slate-900/60 bg-slate-950" id="skills">
<div className="max-w-5xl mx-auto py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Навыки и инструменты
              </h2>
<p className="mt-2 text-base sm:text-lg text-slate-300 max-w-xl">
                Работаю в профессиональных инструментах, что позволяет готовить макеты для печати и цифровых платформ без потери качества.
              </p>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Вектор</span>
<svg className="lucide lucide-pen-tool w-4 h-4 text-emerald-300" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Adobe Illustrator</p>
<p className="text-sm text-slate-300">
                  Логотипы, иконки, иллюстрации и векторная графика для любых форматов.
                </p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Макетирование</span>
<svg className="lucide lucide-file-text w-4 h-4 text-sky-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Adobe InDesign</p>
<p className="text-sm text-slate-300">
                  Каталоги, журналы, брошюры, многостраничные издания, подготовка к печати.
                </p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Растровая графика</span>
<svg className="lucide lucide-image w-4 h-4 text-fuchsia-300" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Adobe Photoshop</p>
<p className="text-sm text-slate-300">
                  Обработка, коллажи и подготовка графики для баннеров и соцсетей.
                </p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Интерфейсы</span>
<svg className="lucide lucide-layout-template w-4 h-4 text-amber-300" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Figma</p>
<p className="text-sm text-slate-300">
                  Прототипы, дизайн интерфейсов и дизайн-системы для цифровых продуктов.
                </p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Сайты</span>
<svg className="lucide lucide-globe-2 w-4 h-4 text-rose-300" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Tilda</p>
<p className="text-sm text-slate-300">
                  Реализация дизайн-концепций в работающие сайты с анимацией и адаптацией.
                </p>
</div>
</div>
<div className="rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 p-5 space-y-3">
<div className="flex items-center justify-between gap-3">
<span className="text-sm text-slate-400">Рабочий процесс</span>
<svg className="lucide lucide-workflow w-4 h-4 text-slate-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium text-slate-50 tracking-tight">Понятный подход</p>
<p className="text-sm text-slate-300">
                  Бриф, концепция, согласование, доработка и подготовка финальных файлов в удобных форматах.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 w-full border-slate-900/60 border-b" id="portfolio">
<div className="sm:py-14 lg:py-16 sm:px-6 lg:px-8 max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold text-slate-50 tracking-tight">
        Портфолио
      </h2>
<p className="sm:text-lg text-base text-slate-300 max-w-xl mt-2">
        Здесь могут быть ваши кейсы: интерфейсы, полиграфия, сайты, презентации и логотипы.
      </p>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-3">
<div className="aspect-[4/3] flex text-center bg-slate-950/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e606c90-6bcd-46f8-89da-6f67d068c3e3_800w.png)] bg-cover bg-center border-slate-800 border rounded-2xl pr-4 pl-4 items-center justify-center">
<p className="sm:text-base text-sm text-slate-400" style={{}}>Пример кейса по дизайну интерфейса</p>
</div>
<div className="aspect-[4/3] flex text-center bg-slate-950/60 border-slate-800 border rounded-2xl pr-4 pl-4 items-center justify-center">
<p className="sm:text-base text-sm text-slate-400" style={{}}>Пример кейса по полиграфии</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/60 aspect-[4/3] flex items-center justify-center text-center px-4">
<p className="sm:text-base text-sm text-slate-400" style={{}}>Пример кейса по дизайну сайта</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-950" id="contact">
<div className="sm:py-14 lg:py-16 sm:px-6 lg:px-8 max-w-5xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
<div className="space-y-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Давайте обсудим ваш проект
              </h2>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                Напишите несколько слов о задаче, сроках и формате сотрудничества — я отвечу и предложу варианты решения.
              </p>
<ul className="space-y-1.5 text-sm sm:text-base text-slate-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Учёт ваших пожеланий и целей бизнеса</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Подготовка макетов к печати и цифровым площадкам</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Прозрачные сроки и этапы работы</span>
</li>
</ul>
<div className="text-sm sm:text-base text-slate-400">
<p>Вы можете заменить форму справа на ваши контакты:</p>
<p>например, ссылку на Telegram, WhatsApp или e-mail.</p>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 lg:p-7 space-y-5">
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-slate-200" htmlFor="name">Имя</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-900/70 text-slate-50 text-sm sm:text-base px-3 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/70 placeholder:text-slate-500" id="name" placeholder="Как к вам обращаться" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-slate-200" htmlFor="contact-field">Контакт</label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-900/70 text-slate-50 text-sm sm:text-base px-3 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/70 placeholder:text-slate-500" id="contact-field" placeholder="Телеграм, e-mail или телефон" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-slate-200" htmlFor="project">Кратко о задаче</label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-900/70 text-slate-50 text-sm sm:text-base px-3 py-2 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/70 placeholder:text-slate-500 resize-none" id="project" placeholder="Расскажите о проекте: что нужно сделать, сроки, ссылки на примеры..." rows="4"></textarea>
</div>
<button className="inline-flex sm:text-base hover:bg-white transition-colors text-sm font-medium text-slate-950 tracking-tight bg-slate-50 w-full rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" onclick="window.location.href='mailto:bodoni@mail.ru?subject=' + encodeURIComponent('Запрос на дизайн-проект') + '&amp;body=' + encodeURIComponent(document.getElementById('project')?.value ? 'Описание проекта:\n' + document.getElementById('project').value : 'Здравствуйте! Хочу обсудить дизайн-проект.')" type="submit">
                  Отправить запрос
                </button>
</form>
<p className="text-xs sm:text-sm text-slate-500">
                Нажимая кнопку, вы соглашаетесь на обработку указанных данных для связи по вашему запросу.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-slate-900/60 bg-slate-950">
<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-4 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tight text-slate-300">RP</span>
<span>© <span id="year">2025</span> Руслан Пронин. Дизайн для бизнеса.</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-slate-300 transition-colors" href="#portfolio">Портфолио</a>
<a className="hover:text-slate-300 transition-colors" href="#contact">Связаться</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
