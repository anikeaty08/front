import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-2 text-xs">
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-2 opacity-90">
<i className="w-4 h-4" data-lucide="shield-check"></i>
              12 лет на рынке
            </span>
<span className="hidden md:inline-flex items-center gap-2 opacity-90">
<i className="w-4 h-4" data-lucide="truck"></i>
              Доставка по РФ и ЕАЭС
            </span>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 hover:opacity-80 transition" href="tel:+78001234567">
<i className="w-4 h-4" data-lucide="phone"></i>
              +7 (800) 123-45-67
            </a>
<a className="hidden sm:inline-flex items-center gap-2 hover:opacity-80 transition" href="mailto:sales@stequip.ru">
<i className="w-4 h-4" data-lucide="mail"></i>
              sales@stequip.ru
            </a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center tracking-tighter font-semibold">ST</div>
<span className="text-lg tracking-tight font-medium text-slate-900">Equipment</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition" href="#catalog">Каталог</a>
<a className="text-slate-600 hover:text-slate-900 transition" href="#service">Сервис</a>
<a className="text-slate-600 hover:text-slate-900 transition" href="#delivery">Доставка</a>
<a className="text-slate-600 hover:text-slate-900 transition" href="#about">О компании</a>
<a className="text-slate-600 hover:text-slate-900 transition" href="#contacts">Контакты</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="w-56 rounded-md border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="Найти технику..." type="text"/>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50 hover:border-slate-300 transition" href="#lead">
<i className="w-4 h-4" data-lucide="file-text"></i>
              Запросить КП
            </a>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm hover:bg-slate-800 transition">
<i className="w-4 h-4" data-lucide="phone-call"></i>
              Связаться
            </button>
<button className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-200 hover:bg-slate-50">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
<div className="border-t border-slate-100"></div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
<i className="w-4 h-4 text-emerald-600" data-lucide="badge-check"></i>
              Официальные поставки • Гарантия и сервис
            </div>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-slate-900">
              Продажа строительной техники
            </h1>
<p className="text-base sm:text-lg text-slate-600">
              Экскаваторы, погрузчики, самосвалы, краны и другая спецтехника от ведущих брендов. Финансирование, трейд‑ин, доставка и полное сервисное сопровождение.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800 transition" href="#catalog">
<i className="w-4 h-4" data-lucide="box"></i>
                Перейти в каталог
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm hover:bg-slate-50 hover:border-slate-300 transition" href="#lead">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Подбор под задачу
              </a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4 text-slate-700" data-lucide="boxes"></i>
                  1 200+
                </div>
<p className="text-xs text-slate-500 mt-1">Единиц на складе</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4 text-slate-700" data-lucide="map-pin"></i>
                  50+
                </div>
<p className="text-xs text-slate-500 mt-1">Сервисных центров</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4 text-slate-700" data-lucide="clock-8"></i>
                  24/7
                </div>
<p className="text-xs text-slate-500 mt-1">Техподдержка</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="w-4 h-4 text-slate-700" data-lucide="handshake"></i>
                  300+
                </div>
<p className="text-xs text-slate-500 mt-1">Корпоративных клиентов</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-100 to-white rounded-2xl"></div>
<div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm">
<img alt="Строительная техника на объекте" className="w-full h-[360px] object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Экскаватор" className="h-28 w-full object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Самосвал" className="h-28 w-full object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Погрузчик" className="h-28 w-full object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-100"></div>
</section>

<section className="py-12" id="service">
<div className="mx-auto max-w-7xl px-6">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="settings"></i>
<h3 className="font-medium tracking-tight text-slate-900">Сервис и запчасти</h3>
</div>
<p className="text-sm text-slate-600 mt-2">Оригинальные комплектующие, плановое ТО, выездные бригады и ремонт любой сложности.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="badge-dollar-sign"></i>
<h3 className="font-medium tracking-tight text-slate-900">Лизинг и рассрочка</h3>
</div>
<p className="text-sm text-slate-600 mt-2">Подберём оптимальные условия финансирования под ваш проект и бюджет.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="ship"></i>
<h3 className="font-medium tracking-tight text-slate-900">Доставка по РФ и ЕАЭС</h3>
</div>
<p className="text-sm text-slate-600 mt-2">Логистика на тралах и автовозах. Страхование и полное сопровождение.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="scale"></i>
<h3 className="font-medium tracking-tight text-slate-900">Трейд‑ин</h3>
</div>
<p className="text-sm text-slate-600 mt-2">Зачёт вашей техники в стоимость новой. Быстрая оценка и прозрачные условия.</p>
</div>
</div>
</div>
</section>

<section className="py-14" id="catalog">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-900">Популярная техника</h2>
<p className="text-sm text-slate-600 mt-1">В наличии и под заказ • Проверенные модели для стройки и карьеров</p>
</div>

<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition">Все</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition">Экскаваторы</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition">Погрузчики</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition">Самосвалы</button>
<button className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition">Краны</button>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Гусеничный экскаватор" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> 175 кВт
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Экскаватор CX350</h3>
<p className="text-sm text-slate-600 mt-1">Ковш 1.6 м³ • Гусеничный • Stage V</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 12 900 000 ₽</div>
<div className="text-xs text-slate-500">В наличии на складе</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Фронтальный погрузчик" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="gauge"></i> 3.0 м³
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Погрузчик FL980</h3>
<p className="text-sm text-slate-600 mt-1">Ковш 3.0 м³ • Колёсный • Гидроусилитель</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 8 700 000 ₽</div>
<div className="text-xs text-slate-500">Срок поставки 2–3 недели</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Карьерный самосвал" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="weight"></i> 40 т
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Самосвал HD400</h3>
<p className="text-sm text-slate-600 mt-1">Грузоподъёмность 40 т • 6×6 • Евро 5</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 15 200 000 ₽</div>
<div className="text-xs text-slate-500">В пути на склад</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Гусеничный кран" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-narrow-wide"></i> Стрела 45 м
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Кран CR450</h3>
<p className="text-sm text-slate-600 mt-1">Гусеничный • Г/п 80 т • Точные маневры</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 27 900 000 ₽</div>
<div className="text-xs text-slate-500">Под заказ</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Бульдозер" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="ruler"></i> Отвал 4.5 м
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Бульдозер DZ230</h3>
<p className="text-sm text-slate-600 mt-1">Полужёсткая рама • Кабина ROPS</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 10 400 000 ₽</div>
<div className="text-xs text-slate-500">В наличии</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative">
<img alt="Бетономешалка" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-md bg-white/90 backdrop-blur px-2.5 py-1 text-xs text-slate-700 border border-slate-200">
<i className="w-3.5 h-3.5" data-lucide="blend"></i> 10 м³
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight text-slate-900">Бетоносмеситель MX10</h3>
<p className="text-sm text-slate-600 mt-1">Барабан 10 м³ • Автономный привод</p>
<div className="mt-4 flex items-center justify-between">
<div>
<div className="text-slate-900 font-medium">от 6 200 000 ₽</div>
<div className="text-xs text-slate-500">Срок 1–2 недели</div>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 text-xs hover:bg-slate-50" href="#">Подробнее</a>
<button className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 text-white px-3 py-2 text-xs hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="file-plus-2"></i>
                    КП
                  </button>
</div>
</div>
</div>
</article>
</div>

<div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<div className="text-slate-900 font-medium tracking-tight">Не нашли нужную комплектацию?</div>
<p className="text-sm text-slate-600">Подберём технику под условия эксплуатации и бюджет за 30 минут.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800" href="#lead">
<i className="w-4 h-4" data-lucide="sliders"></i>
              Подбор и смета
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm hover:bg-slate-50" href="tel:+78001234567">
<i className="w-4 h-4" data-lucide="phone"></i>
              Позвонить
            </a>
</div>
</div>
</div>
</section>

<section className="py-14" id="delivery">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-4">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Доставка и ввод в эксплуатацию</h3>
<p className="text-slate-600 text-sm">
              Организуем доставку вашей техники на объект, проведём инструктаж и запуск. При необходимости — оперативно поставим расходники и навесное оборудование.
            </p>
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
                Маршрут и сроки под ваш график строительства
              </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
                Страхование груза и контроль на каждом этапе
              </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check"></i>
                ПТС, СТС, сертификаты и полная документация
              </li>
</ul>
<div className="pt-2">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm hover:bg-slate-50" href="#lead">
<i className="w-4 h-4" data-lucide="route"></i>
                Рассчитать доставку
              </a>
</div>
</div>
<div className="rounded-xl border border-slate-200 overflow-hidden">
<img alt="Доставка строительной техники" className="w-full h-[320px] object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-14" id="lead">
<div className="mx-auto max-w-7xl px-6">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Получить персональное предложение</h3>
<p className="text-sm text-slate-600 mt-1">Оставьте контакты — вернёмся с расчётом цены и сроков в течение рабочего часа.</p>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-600">Имя</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="Алексей" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600">Компания</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="ООО «СтройПро»" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-slate-600">Телефон</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="+7 (___) ___‑__‑__" type="tel"/>
</div>
<div>
<label className="text-xs text-slate-600">Email</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="you@company.ru" type="email"/>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Интересующая техника</label>
<div className="mt-2 flex flex-wrap gap-2">
<button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white hover:bg-slate-50" type="button">Экскаваторы</button>
<button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white hover:bg-slate-50" type="button">Погрузчики</button>
<button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white hover:bg-slate-50" type="button">Самосвалы</button>
<button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white hover:bg-slate-50" type="button">Краны</button>
<button className="px-3 py-1.5 text-xs rounded-md border border-slate-200 bg-white hover:bg-slate-50" type="button">Другое</button>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Комментарий к заявке</label>
<textarea className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="Опишите задачу, условия и сроки..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Нажимая «Отправить», вы соглашаетесь с политикой обработки данных.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                    Отправить
                  </button>
</div>
</form>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="building-2"></i>
<h4 className="font-medium tracking-tight text-slate-900">О компании</h4>
</div>
<p className="text-sm text-slate-600 mt-2">
                Мы поставляем строительную технику по всей стране, обеспечивая полное постгарантийное обслуживание и поставку оригинальных запчастей. Работает собственный учебный центр для операторов.
              </p>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-slate-900 font-medium">ISO 9001</div>
<div className="text-xs text-slate-500">Система менеджмента качества</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-slate-900 font-medium">5 лет</div>
<div className="text-xs text-slate-500">Расширенная гарантия</div>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-700" data-lucide="map"></i>
<div>
<div className="font-medium tracking-tight text-slate-900">Головной офис</div>
<p className="text-sm text-slate-600">Москва, пр-т Андропова, 18к3</p>
<div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50" href="tel:+78001234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                      +7 (800) 123-45-67
                    </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50" href="mailto:sales@stequip.ru">
<i className="w-4 h-4" data-lucide="mail"></i>
                      sales@stequip.ru
                    </a>
</div>
</div>
</div>
<div className="mt-4">
<img alt="Офис компании" className="w-full h-44 object-cover rounded-lg border border-slate-200" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<h3 className="text-xl tracking-tight font-semibold text-slate-900">Частые вопросы</h3>
<div className="mt-4 grid md:grid-cols-2 gap-6">
<div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-700 mt-0.5" data-lucide="help-circle"></i>
<div>
<div className="font-medium text-slate-900">Какие варианты оплаты доступны?</div>
<p className="text-sm text-slate-600 mt-1">Безналичный расчёт, лизинг, рассрочка. Для госзакупок — все необходимые документы.</p>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-700 mt-0.5" data-lucide="wrench"></i>
<div>
<div className="font-medium text-slate-900">Как работает гарантия?</div>
<p className="text-sm text-slate-600 mt-1">Стандартная гарантия 2–3 года в зависимости от модели. Есть расширенная программа до 5 лет.</p>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-700 mt-0.5" data-lucide="file-check-2"></i>
<div>
<div className="font-medium text-slate-900">Поможете с документами?</div>
<p className="text-sm text-slate-600 mt-1">Подготовим ПТС, СТС, сертификаты соответствия, инструкцию и сервисную книжку.</p>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-700 mt-0.5" data-lucide="pin"></i>
<div>
<div className="font-medium text-slate-900">Работаете по всей стране?</div>
<p className="text-sm text-slate-600 mt-1">Да, склады и сервисные бригады размещены в ключевых регионах РФ и ЕАЭС.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-12 pb-8 border-t border-slate-100" id="contacts">
<div className="mx-auto max-w-7xl px-6">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center tracking-tighter font-semibold">ST</div>
<span className="text-lg tracking-tight font-medium text-slate-900">Equipment</span>
</a>
<p className="text-sm text-slate-600 mt-3">Продажа строительной техники с доставкой, финансированием и сервисом по всей России.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50" href="tel:+78001234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                +7 (800) 123-45-67
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50" href="mailto:sales@stequip.ru">
<i className="w-4 h-4" data-lucide="mail"></i>
                sales@stequip.ru
              </a>
</div>
</div>
<div>
<div className="font-medium tracking-tight text-slate-900">Разделы</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#catalog">Каталог</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#service">Сервис</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#delivery">Доставка</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#lead">Запрос КП</a></li>
</ul>
</div>
<div>
<div className="font-medium tracking-tight text-slate-900">Подписка на обновления</div>
<form className="mt-3 flex items-center gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="mail"></i>
<input className="w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition" placeholder="you@company.ru" type="email" />
</input></div>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 py-2 text-sm hover:bg-slate-800">
<i className="w-4 h-4" data-lucide="bell"></i>
                Подписаться
              </button>
</form>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500">
<div>© 2025 ST Equipment. Все права защищены.</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700" href="#">Политика конфиденциальности</a>
<a className="hover:text-slate-700" href="#">Пользовательское соглашение</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 inset-x-4 md:hidden z-50">
<div className="rounded-full border border-slate-200 bg-white shadow-lg p-2 flex items-center justify-between">
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-full hover:bg-slate-50" href="#catalog">
<i className="w-4 h-4" data-lucide="boxes"></i>
          Каталог
        </a>
<div className="w-px h-6 bg-slate-200"></div>
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-full hover:bg-slate-50" href="tel:+78001234567">
<i className="w-4 h-4" data-lucide="phone"></i>
          Звонок
        </a>
<div className="w-px h-6 bg-slate-200"></div>
<a className="flex-1 inline-flex items-center justify-center gap-2 text-sm py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800" href="#lead">
<i className="w-4 h-4" data-lucide="file-text"></i>
          КП
        </a>
</div>
</div>


    </>
  );
}
