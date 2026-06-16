import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icons
      lucide.createIcons();

      // Mobile nav
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
          menuBtn.innerHTML = '';
          const icon = lucide.createElement(mobileNav.classList.contains('hidden') ? 'menu' : 'x', { width: 20, height: 20 });
          menuBtn.appendChild(icon);
        });
      }

      // Form handler
      const leadForm = document.getElementById('leadForm');
      const formToast = document.getElementById('formToast');
      if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
          e.preventDefault();
          formToast.classList.remove('hidden');
          leadForm.reset();
          setTimeout(() => formToast.classList.add('hidden'), 4000);
        });
      }

      // Cookie consent
      const cookie = document.getElementById('cookie');
      const cookieOk = document.getElementById('cookieOk');
      if (cookieOk) {
        cookieOk.addEventListener('click', () => cookie.classList.add('hidden'));
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="border-b border-zinc-200/70">
<div className="mx-auto max-w-[1140px] px-4 flex items-center justify-between h-10 text-[13px] text-zinc-600">
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-2">
<i className="size-4" data-lucide="clock-3"></i>
            Пн–Пт 09:00–19:00
          </span>
<span className="hidden sm:inline-flex items-center gap-2">
<i className="size-4" data-lucide="map-pin"></i>
            Москва
          </span>
</div>
<div className="flex items-center gap-5">
<a className="inline-flex items-center gap-2 text-zinc-900" href="tel:+78002947717">
<i className="size-4" data-lucide="phone"></i>
<span className="font-medium tracking-tight">8 800 294 71 77</span>
</a>
<a className="hidden md:inline-flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition" href="mailto:info@terra-machinery.ru">
<i className="size-4" data-lucide="mail"></i>
            info@terra-machinery.ru
          </a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-zinc-200/70">
<div className="mx-auto max-w-[1140px] px-4">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3" href="#">
<div className="size-8 rounded bg-zinc-900 text-white flex items-center justify-center">
<i className="size-4" data-lucide="mountain"></i>
</div>
<div className="leading-tight">
<div className="text-[13px] uppercase tracking-[0.14em] text-zinc-500">Terra</div>
<div className="text-lg font-semibold tracking-tight -mt-0.5">Machinery</div>
</div>
</a>

<nav className="hidden md:flex items-center gap-7 text-[15px]">
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#tech">Техника</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#parts">Запасные части</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#service">Сервис</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#about">О компании</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#contacts">Контакты</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex h-9 items-center rounded-md bg-zinc-900 px-4 text-white text-[14px] font-medium tracking-tight hover:bg-zinc-800 transition" href="#form">
              Оставить заявку
            </a>
<button aria-label="Открыть меню" className="md:hidden inline-flex items-center justify-center size-9 rounded-md border border-zinc-300 hover:bg-zinc-50 transition" id="menuBtn">
<i className="size-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-zinc-200" id="mobileNav">
<div className="mx-auto max-w-[1140px] px-4 py-3 grid gap-2 text-[15px]">
<a className="py-2 text-zinc-800" href="#tech">Техника</a>
<a className="py-2 text-zinc-800" href="#parts">Запасные части</a>
<a className="py-2 text-zinc-800" href="#service">Сервис</a>
<a className="py-2 text-zinc-800" href="#about">О компании</a>
<a className="py-2 text-zinc-800" href="#contacts">Контакты</a>
</div>
</div>
</header>

<section className="relative">
<div className="relative h-[56vw] max-h-[560px] min-h-[380px] overflow-hidden">
<img alt="Карьерный самосвал" className="absolute inset-0 size-full object-cover" src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
<div className="relative z-10 mx-auto max-w-[1140px] px-4 h-full flex items-center">
<div className="max-w-xl">
<h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Инструмент больших проектов
            </h1>
<p className="mt-4 text-zinc-100/90 text-[15px] sm:text-base max-w-lg">
              Поставка техники, оригинальных и аналоговых запчастей, сервис и сопровождение на каждом этапе.
            </p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex h-11 items-center rounded-md bg-white/95 px-5 text-zinc-900 text-[15px] font-medium tracking-tight hover:bg-white transition" href="#form">
                Оставить заявку
              </a>
<a className="inline-flex h-11 items-center rounded-md bg-zinc-900/20 px-5 text-white text-[15px] font-medium tracking-tight ring-1 ring-white/20 hover:bg-zinc-900/30 transition" href="#about">
                Узнать больше
              </a>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0">
<div className="mx-auto max-w-[1140px] px-4">
<div className="mb-[-1px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-px bg-white/20 rounded-t-md overflow-hidden backdrop-blur-[2px]">
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">Caterpillar</div>
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">Komatsu</div>
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">Volvo</div>
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">JCB</div>
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">Hitachi</div>
<div className="bg-white/90 py-3 text-center text-zinc-700 text-sm">Liebherr</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-b border-zinc-200/70" id="tech">
<div className="mx-auto max-w-[1140px] px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<a className="group rounded-md bg-white border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm transition" href="#catalog">
<div className="flex items-center gap-4">
<div className="size-11 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center ring-1 ring-emerald-100">
<i className="size-5" data-lucide="truck"></i>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-zinc-900">Техника</div>
<div className="text-[13px] text-zinc-600">Каталог спецтехники</div>
</div>
</div>
</a>
<a className="group rounded-md bg-white border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm transition" href="#features" id="parts">
<div className="flex items-center gap-4">
<div className="size-11 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="size-5" data-lucide="package"></i>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-zinc-900">Запчасти</div>
<div className="text-[13px] text-zinc-600">Оригинал и аналоги</div>
</div>
</div>
</a>
<a className="group rounded-md bg-white border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-sm transition" href="#cta" id="service">
<div className="flex items-center gap-4">
<div className="size-11 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center ring-1 ring-amber-100">
<i className="size-5" data-lucide="wrench"></i>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-zinc-900">Сервис</div>
<div className="text-[13px] text-zinc-600">Обслуживание и ремонт</div>
</div>
</div>
</a>
</div>
</section>

<section className="relative" id="cta">
<div className="relative">
<div className="absolute inset-0">
<img alt="Бульдозер" className="size-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
</div>
<div className="relative mx-auto max-w-[1140px] px-4 py-16 lg:py-24">
<div className="max-w-2xl text-white">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Мы знаем, что такое надежность. Мы её поставляем.
            </h2>
<p className="mt-5 text-zinc-100/90 text-[15px] sm:text-base leading-relaxed">
              Мы — ваш стратегический партнёр в мире тяжёлых задач и высоких нагрузок. Специализация: поставка новой и восстановленной техники, оригинальных и аналоговых запасных частей, а также профессиональное сервисное обслуживание.
            </p>
<div className="mt-7">
<a className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-5 text-zinc-900 text-[15px] font-medium tracking-tight hover:bg-zinc-100 transition" href="#form">
<i className="size-5" data-lucide="message-circle"></i>
                Связаться с нами
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-12" id="about">
<div className="mx-auto max-w-[1140px] px-4">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
          В основе нашей работы — высокая организационная дисциплина, техническая экспертиза и чёткая ориентация на результат.
        </h3>
<p className="mt-2 text-zinc-600 text-[15px] sm:text-base">
          Мы не просто поставляем технику и запчасти — мы решаем задачи бизнеса в условиях, где цена ошибки особенно высока.
        </p>
</div>
</section>

<section className="pb-6 sm:pb-10" id="features">
<div className="mx-auto max-w-[1140px] px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-white rounded-lg border border-zinc-200 p-6">
<div className="relative mb-6 flex items-center justify-center">
<div className="relative">
<div className="size-20 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center text-emerald-600">
<i className="size-6" data-lucide="key-round"></i>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-emerald-50"></div>
</div>
</div>
<div className="text-center">
<div className="text-4xl font-light tracking-tight text-zinc-300">01</div>
<h4 className="mt-2 text-base font-medium tracking-tight">Доступ к дефицитной технике и компонентам</h4>
<p className="mt-2 text-[14px] text-zinc-600">
                Поиск и поставка сложнодоступного оборудования и узлов в кратчайшие сроки.
              </p>
</div>
</div>

<div className="bg-white rounded-lg border border-zinc-200 p-6">
<div className="relative mb-6 flex items-center justify-center">
<div className="relative">
<div className="size-20 rounded-full bg-sky-50 ring-1 ring-sky-100 flex items-center justify-center text-sky-600">
<i className="size-6" data-lucide="network"></i>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-sky-50"></div>
</div>
</div>
<div className="text-center">
<div className="text-4xl font-light tracking-tight text-zinc-300">02</div>
<h4 className="mt-2 text-base font-medium tracking-tight">Отлаженная сеть поставок</h4>
<p className="mt-2 text-[14px] text-zinc-600">
                Работаем с проверенными международными поставщиками и логистическими операторами.
              </p>
</div>
</div>

<div className="bg-white rounded-lg border border-zinc-200 p-6">
<div className="relative mb-6 flex items-center justify-center">
<div className="relative">
<div className="size-20 rounded-full bg-amber-50 ring-1 ring-amber-100 flex items-center justify-center text-amber-600">
<i className="size-6" data-lide="settings"></i>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-amber-50"></div>
</div>
</div>
<div className="text-center">
<div className="text-4xl font-light tracking-tight text-zinc-300">03</div>
<h4 className="mt-2 text-base font-medium tracking-tight">Комплексное сопровождение</h4>
<p className="mt-2 text-[14px] text-zinc-600">
                От подбора и поставки до пуско-наладки, ТО и обучения персонала.
              </p>
</div>
</div>

<div className="bg-white rounded-lg border border-zinc-200 p-6">
<div className="relative mb-6 flex items-center justify-center">
<div className="relative">
<div className="size-20 rounded-full bg-fuchsia-50 ring-1 ring-fuchsia-100 flex items-center justify-center text-fuchsia-600">
<i className="size-6" data-lucide="shield-check"></i>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-fuchsia-50"></div>
</div>
</div>
<div className="text-center">
<div className="text-4xl font-light tracking-tight text-zinc-300">04</div>
<h4 className="mt-2 text-base font-medium tracking-tight">Проверенные сервисные партнёры</h4>
<p className="mt-2 text-[14px] text-zinc-600">
                Соблюдение регламентов и стандартов качества на всех этапах обслуживания.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-12 bg-white" id="catalog">
<div className="mx-auto max-w-[1140px] px-4">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">Каталог спецтехники</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="dig"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Экскаваторы</div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">30</span>
</div>
<div className="text-[13px] text-zinc-600">Гусеничные и колёсные</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="tractor"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Бульдозеры</div>
<span className="text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-700 ring-1 ring-sky-100">12</span>
</div>
<div className="text-[13px] text-zinc-600">Средний и тяжёлый класс</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="dump-truck"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Самосвалы</div>
<span className="text-xs px-2 py-0.5 rounded bg-amber-50 text-amber-700 ring-1 ring-amber-100">4</span>
</div>
<div className="text-[13px] text-zinc-600">Карьерные и дорожные</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="forklift"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Погрузчики</div>
<span className="text-xs px-2 py-0.5 rounded bg-fuchsia-50 text-fuchsia-700 ring-1 ring-fuchsia-100">5</span>
</div>
<div className="text-[13px] text-zinc-600">Фронтальные и телескопические</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="ruler"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Грейдеры</div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">2</span>
</div>
<div className="text-[13px] text-zinc-600">Дорожные</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-zinc-200 p-6 hover:border-zinc-300 hover:shadow-sm transition" href="#">
<div className="flex items-center gap-4">
<div className="size-12 rounded-md bg-zinc-50 ring-1 ring-zinc-200 text-zinc-700 flex items-center justify-center">
<i className="size-6" data-lucide="crane"></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-base font-medium tracking-tight">Краны</div>
<span className="text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-700 ring-1 ring-sky-100">4</span>
</div>
<div className="text-[13px] text-zinc-600">Авто и гусеничные</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-10 sm:py-12 bg-zinc-50 border-t border-b border-zinc-200/70" id="form">
<div className="mx-auto max-w-[1140px] px-4">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Оставьте заявку</h3>
<p className="text-[15px] text-zinc-600 mt-1">Для получения коммерческого предложения</p>
<form className="mt-6 grid grid-cols-1 lg:grid-cols-6 gap-3" id="leadForm">
<input className="lg:col-span-1 h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400" placeholder="Имя" required="" type="text"/>
<input className="lg:col-span-1 h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400" placeholder="Телефон" required="" type="tel"/>
<input className="lg:col-span-2 h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400" placeholder="Email" required="" type="email"/>
<input className="lg:col-span-1 h-11 rounded-md border border-zinc-300 bg-white px-3 text-[15px] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400" placeholder="Компания" type="text"/>
<button className="lg:col-span-1 h-11 rounded-md bg-zinc-900 text-white text-[15px] font-medium tracking-tight hover:bg-zinc-800 transition inline-flex items-center justify-center gap-2">
<i className="size-5" data-lucide="send"></i>
            Отправить
          </button>
<p className="lg:col-span-6 text-[12px] text-zinc-500">
            Нажимая на кнопку «Отправить», вы даёте согласие на обработку персональных данных и получение Email-рассылки.
          </p>
</form>
<div className="mt-4 hidden" id="formToast">
<div className="flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-emerald-700 text-[14px]">
<i className="size-4" data-lucide="check-circle-2"></i>
            Успешно отправлено
          </div>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-300" id="contacts">
<div className="mx-auto max-w-[1140px] px-4 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-3" href="#">
<div className="size-8 rounded bg-white text-zinc-900 flex items-center justify-center">
<i className="size-4" data-lucide="mountain"></i>
</div>
<div className="leading-tight">
<div className="text-[13px] uppercase tracking-[0.14em] text-zinc-400">Terra</div>
<div className="text-lg font-semibold tracking-tight text-white -mt-0.5">Machinery</div>
</div>
</a>
<p className="mt-4 text-[14px] text-zinc-400 max-w-xs">
              Комплексные поставки техники и запчастей. Сервис и поддержка по всей стране.
            </p>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Каталог</div>
<ul className="mt-3 space-y-2 text-[14px]">
<li><a className="hover:text-white transition" href="#catalog">Экскаваторы</a></li>
<li><a className="hover:text-white transition" href="#catalog">Бульдозеры</a></li>
<li><a className="hover:text-white transition" href="#catalog">Погрузчики</a></li>
<li><a className="hover:text-white transition" href="#catalog">Краны</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Полезное</div>
<ul className="mt-3 space-y-2 text-[14px]">
<li><a className="hover:text-white transition" href="#service">Сервис</a></li>
<li><a className="hover:text-white transition" href="#about">О компании</a></li>
<li><a className="hover:text-white transition" href="#form">Коммерческое предложение</a></li>
<li><a className="hover:text-white transition" href="#form">Политика конфиденциальности</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight text-white">Контакты</div>
<ul className="mt-3 space-y-2 text-[14px]">
<li className="flex items-center gap-2">
<i className="size-4" data-lucide="map-pin"></i> Москва, Россия
              </li>
<li className="flex items-center gap-2">
<i className="size-4" data-lucide="phone"></i> <a className="hover:text-white" href="tel:+78002947177">8 800 294 71 77</a>
</li>
<li className="flex items-center gap-2">
<i className="size-4" data-lucide="mail"></i> <a className="hover:text-white" href="mailto:info@terra-machinery.ru">info@terra-machinery.ru</a>
</li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
<div className="text-[13px] text-zinc-500">© 2025 TERRA Machinery</div>
<div className="flex items-center gap-4">
<a className="text-[13px] text-zinc-400 hover:text-white transition" href="#">Политика конфиденциальности</a>
<a className="text-[13px] text-zinc-400 hover:text-white transition" href="#">Пользовательское соглашение</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-auto z-50" id="cookie">
<div className="mx-auto max-w-[1140px] px-4">
<div className="rounded-lg border border-zinc-200 bg-white shadow/10 px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
<p className="text-[13px] text-zinc-700">
            Мы используем cookies. Продолжая пользоваться сайтом, вы соглашаетесь с их использованием.
          </p>
<div className="flex items-center gap-2 ml-auto">
<button className="inline-flex h-8 items-center rounded-md bg-zinc-900 px-3 text-white text-[13px] font-medium tracking-tight hover:bg-zinc-800 transition" id="cookieOk">
              Хорошо
            </button>
</div>
</div>
</div>
</div>


    </>
  );
}
