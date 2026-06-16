import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "MedicalOrganization",
"name": "Медицинский центр «Альфа»",
"url": "https://example-medcenter.ru",
"logo": "https://example-medcenter.ru/logo.png",
"image": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop",
"telephone": "+7 (495) 123-45-67",
"email": "info@example-medcenter.ru",
"address": {
"@type": "PostalAddress",
"streetAddress": "ул. Здоровья, д. 10",
"addressLocality": "Москва",
"postalCode": "101000",
"addressCountry": "RU"
},
"openingHoursSpecification": [
{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "20:00" },
{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "09:00", "closes": "17:00" }
],
"department": [
{ "@type": "MedicalClinic", "name": "Терапевтическое отделение" },
{ "@type": "MedicalClinic", "name": "Педиатрическое отделение" },
{ "@type": "MedicalClinic", "name": "Диагностическое отделение" }
],
"founder": "ООО «МЦ Альфа»",
"isAcceptingNewPatients": "True",
"medicalSpecialty": ["Cardiovascular","Pediatrics","Therapy","Diagnostic"],
"sameAs": ["https://vk.com/", "https://www.ok.ru/"]
}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Mobile menu toggle
      document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
        document.getElementById('mobileMenu')?.classList.toggle('hidden');
      });

      // High contrast (dark) toggle
      const body = document.body;
      const contrastBtn = document.getElementById('contrastToggle');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark)) {
        body.classList.add('dark', 'bg-slate-950', 'text-slate-100');
        document.documentElement.style.colorScheme = 'dark';
      }
      contrastBtn?.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('bg-slate-950');
        body.classList.toggle('text-slate-100');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500" href="#content">Перейти к содержимому</a>

<div className="w-full border-b border-slate-200 bg-slate-50/80 backdrop-blur supports-[backdrop-filter]:bg-slate-50/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 text-sm flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-slate-600">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Лицензия № ЛО-77-01-012345 от 12.05.2023</span>
</div>
<div className="hidden md:flex items-center gap-2 text-slate-600">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Пн–Пт 08:00–20:00, Сб 09:00–17:00</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md px-2 py-1" href="#accessibility">
<i className="w-4 h-4" data-lucide="accessibility"></i>
<span>Доступность</span>
</a>
<button className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md px-2 py-1" id="contrastToggle" type="button">
<i className="w-4 h-4" data-lucide="moon"></i>
            Контраст
          </button>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-md bg-sky-500 text-white flex items-center justify-center tracking-tight text-sm font-semibold shadow-sm group-hover:outline group-hover:outline-2 group-hover:outline-sky-300/70 transition-colors">МА</div>
<div className="flex flex-col leading-tight">
<span className="text-lg font-medium tracking-tight text-slate-900">Медицинский центр «Альфа»</span>
<span className="text-[11px] text-slate-500 -mt-px">официальный сайт</span>
</div>
</a>
<nav className="hidden lg:flex items-center gap-6 text-sm">
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#">Главная</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#about">О клинике</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#doctors">Врачи</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#services">Услуги и цены</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#licenses">Лицензии</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#patients">Пациентам</a>
<a className="text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded" href="#contacts">Контакты</a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-sky-500">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="w-52 placeholder-slate-400 text-sm border-0 focus:ring-0 focus:outline-none" placeholder="Поиск по сайту" type="search"/>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3.5 py-2 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar-plus"></i>
            Записаться
          </a>
<button className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-200 p-2 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="lg:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#">Главная</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#about">О клинике</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#doctors">Врачи</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#services">Услуги и цены</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#licenses">Лицензии</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#patients">Пациентам</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#contacts">Контакты</a>
</div>
</div>
</header>
<main id="content">

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10">
<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-xs font-medium text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-2.5 py-1 w-max">
<i className="w-3.5 h-3.5" data-lucide="stethoscope"></i>
              Ваше здоровье — наша ответственность
            </div>
<h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Достоверная медицина. Лицензии, цены, запись — официально и прозрачно.</h1>
<p className="mt-4 text-slate-600 text-base">Амбулаторная помощь, диагностика, телемедицина. Работаем по ОМС и ДМС. Все обязательные сведения — в открытом доступе.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
                Записаться онлайн
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2.5 text-slate-900 text-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="tel:+74951234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                +7 (495) 123-45-67
              </a>
<span className="text-xs text-slate-500">Экстренная помощь: 103 | Единый номер: 122</span>
</div>
<div className="mt-8 grid grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="text-2xl font-semibold tracking-tight text-slate-900">15+</div>
<div className="text-sm text-slate-500">лет опыта</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="text-2xl font-semibold tracking-tight text-slate-900">60+</div>
<div className="text-sm text-slate-500">врачей</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="text-2xl font-semibold tracking-tight text-slate-900">3</div>
<div className="text-sm text-slate-500">филиала</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Приём у врача" className="w-full h-[380px] object-cover rounded-xl border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -left-4 bg-white rounded-lg border border-slate-200 shadow-sm p-4 w-[80%]">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-sky-600" data-lucide="file-text"></i>
<div className="text-sm">
<div className="font-medium text-slate-900">Работаем по ОМС и ДМС</div>
<div className="text-slate-500">Договоры с ведущими страховыми компаниями</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="group rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#appointment">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div className="text-sm">
<div className="font-medium text-slate-900">Запись на приём</div>
<div className="text-slate-500">Онлайн и по телефону</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#services">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="currency-ruble"></i>
</div>
<div className="text-sm">
<div className="font-medium text-slate-900">Прайс-лист</div>
<div className="text-slate-500">Актуальные цены</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#licenses">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div className="text-sm">
<div className="font-medium text-slate-900">Лицензии</div>
<div className="text-slate-500">Скан-копии и реквизиты</div>
</div>
</div>
</a>
<a className="group rounded-lg border border-slate-200 bg-white p-4 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#patients">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-sky-100 text-sky-700 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<div className="text-sm">
<div className="font-medium text-slate-900">Права и обязанности</div>
<div className="text-slate-500">Правила и порядок</div>
</div>
</div>
</a>
</div>
</section>

<section className="border-t border-slate-200" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Сведения об организации</h2>
<p className="mt-3 text-slate-600">Публикуем сведения в соответствии с законодательством РФ о предоставлении медицинской помощи и обработке персональных данных.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Полное наименование</div>
<div className="mt-1 font-medium text-slate-900">Общество с ограниченной ответственностью «Медицинский центр Альфа»</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Сокращённое наименование</div>
<div className="mt-1 font-medium text-slate-900">ООО «МЦ Альфа»</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">ОГРН</div>
<div className="mt-1 font-medium text-slate-900">1127746000000</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">ИНН / КПП</div>
<div className="mt-1 font-medium text-slate-900">7701000000 / 770101001</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Адрес места нахождения</div>
<div className="mt-1 font-medium text-slate-900">101000, г. Москва, ул. Здоровья, д. 10</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Руководитель</div>
<div className="mt-1 font-medium text-slate-900">Иванов Иван Иванович (Генеральный директор)</div>
</div>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="shield"></i>
<div className="font-medium text-slate-900">Сведения о лицензии</div>
</div>
<div className="mt-2 text-sm text-slate-600">
                  Номер: ЛО-77-01-012345, дата выдачи: 12.05.2023, выдавший орган: Департамент здравоохранения г. Москвы. Виды работ (услуг): амбулаторно-поликлиническая помощь, диагностика, лабораторные исследования.
                </div>
<div className="mt-3 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 px-3 py-1.5 rounded-md hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#licenses">
<i className="w-4 h-4" data-lucide="download"></i>
                    Скачать копию (PDF)
                  </a>
<a className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500" href="#licenses">
<i className="w-4 h-4" data-lucide="link"></i>
                    Сведения в реестре
                  </a>
</div>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="building-2"></i>
<div className="font-medium text-slate-900">Структура и органы управления</div>
</div>
<ul className="mt-2 text-sm text-slate-600 list-disc pl-5">
<li>Руководство: генеральный директор, главный врач, заместитель по медчасти.</li>
<li>Отделения: терапевтическое, педиатрическое, диагностическое (УЗИ, ЭКГ, лаборатория).</li>
<li>Административные службы: регистратура, юридический отдел, отдел по работе с персональными данными.</li>
</ul>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="file-check-2"></i>
<div className="font-medium text-slate-900">Правила для пациентов и порядок оказания помощи</div>
</div>
<div className="mt-2 grid sm:grid-cols-2 gap-3 text-sm">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="scale"></i>
                    Права и обязанности пациента (PDF)
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="file-text"></i>
                    Правила внутреннего распорядка (PDF)
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="book-open-check"></i>
                    Порядок записи на приём и телемедицину
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="credit-card"></i>
                    Порядок и условия оказания платных услуг
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="shield"></i>
                    Политика обработки персональных данных
                  </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="#">
<i className="w-4 h-4 text-slate-600" data-lucide="circle-help"></i>
                    Памятка пациенту по ОМС/ДМС
                  </a>
</div>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="megaphone"></i>
<div className="font-medium text-slate-900">Публичная информация</div>
</div>
<ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
<li>Категории льгот граждан в приоритетном порядке обслуживания.</li>
<li>Сведения о вакцинации, профилактических осмотрах и диспансеризации.</li>
<li>Сроки ожидания плановой медицинской помощи.</li>
<li>Клинические рекомендации и стандарты (ссылки на Минздрав).</li>
</ul>
</div>
<div className="mt-6 text-xs text-slate-500">Дата обновления страницы: 15.10.2025</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="map-pin"></i>
<div className="font-medium text-slate-900">Контакты и режим работы</div>
</div>
<div className="mt-3 text-sm text-slate-700">
<div className="font-medium">Главный филиал</div>
<div>101000, г. Москва, ул. Здоровья, д. 10</div>
<div className="mt-1 flex items-center gap-2 text-slate-600">
<i className="w-4 h-4" data-lucide="phone"></i><a className="hover:underline" href="tel:+74951234567">+7 (495) 123-45-67</a>
</div>
<div className="mt-1 flex items-center gap-2 text-slate-600">
<i className="w-4 h-4" data-lucide="mail"></i><a className="hover:underline" href="mailto:info@example-medcenter.ru">info@example-medcenter.ru</a>
</div>
<div className="mt-1 flex items-center gap-2 text-slate-600">
<i className="w-4 h-4" data-lucide="clock"></i>Пн–Пт 08:00–20:00, Сб 09:00–17:00
                  </div>
<a className="mt-3 inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50" href="https://yandex.ru/maps" target="_blank">
<i className="w-4 h-4" data-lucide="map"></i>
                    Открыть карту
                  </a>
</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="users"></i>
<div className="font-medium text-slate-900">Страховые компании</div>
</div>
<ul className="mt-2 text-sm text-slate-700 space-y-1.5">
<li>ООО «АльфаСтрахование-ОМС»</li>
<li>АО «СОГАЗ-Мед»</li>
<li>АО «Ингосстрах» (ДМС)</li>
</ul>
</div>
<div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-600" data-lucide="alert-circle"></i>
<div className="font-medium text-slate-900">Горячая линия</div>
</div>
<div className="mt-2 text-sm text-slate-700">
                  Вопросы качества оказания помощи: <a className="hover:underline" href="tel:+78005553535">8-800-555-35-35</a>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="appointment">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Запись на приём</h2>
<p className="mt-3 text-slate-600">Выберите специалиста и удобное время. Подтверждение придёт по SMS и на email. Доступна запись по ОМС, ДМС и на платной основе.</p>
<ul className="mt-4 text-sm text-slate-700 space-y-2">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check"></i>Срок ожидания планового приёма — до 7 календарных дней.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check"></i>Телемедицинские консультации по согласованию с лечащим врачом.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-green-600 mt-0.5" data-lucide="check"></i>При себе иметь паспорт, полис ОМС/ДМС, СНИЛС (при наличии).</li>
</ul>
</div>
<form className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" onsubmit="event.preventDefault(); document.getElementById('apptSuccess').classList.remove('hidden'); this.reset();">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-600">Фамилия Имя Отчество</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Иванов Иван Иванович" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-600">Дата рождения</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="date"/>
</div>
<div>
<label className="block text-sm text-slate-600">Телефон</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="+7 (___) ___-__-__" required="" type="tel"/>
</div>
<div>
<label className="block text-sm text-slate-600">Email</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-600">Специалист</label>
<select className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-sky-500 focus:ring-sky-500" required="">
<option disabled="" selected="" value="">Выберите</option>
<option>Терапевт</option>
<option>Педиатр</option>
<option>Кардиолог</option>
<option>УЗИ-диагностика</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-600">Желаемая дата</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="date"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-slate-600">Комментарий</label>
<textarea className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Опишите жалобы, предпочтительное время" rows="3"></textarea>
</div>
</div>
<div className="mt-4 flex items-start gap-3">
<label className="relative inline-flex items-start gap-3 cursor-pointer select-none">
<input className="peer sr-only" id="consent" required="" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-sky-600 peer-checked:border-sky-600">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-600">Согласен(на) на обработку персональных данных и условия оказания медицинских услуг.</span>
</label>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Отправить заявку
                </button>
<a className="text-sm text-sky-700 hover:text-sky-900" href="#">Записаться через Госуслуги</a>
</div>
<div className="hidden mt-4 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-800 px-3 py-2 text-sm" id="apptSuccess">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                  Заявка отправлена. Мы свяжемся с вами для подтверждения.
                </div>
</div>
</form>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="doctors">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Наши врачи</h2>
<a className="text-sm text-sky-700 hover:text-sky-900" href="#">Все специалисты</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
<img alt="Врач терапевт" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="font-medium text-slate-900">Смирнова Анна Петровна</div>
<div className="text-sm text-slate-600">Терапевт, к.м.н., высшая категория</div>
</div>
<a className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 text-sm" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Записаться
                  </a>
</div>
<div className="mt-3 text-xs text-slate-600">
                  Образование: РНИМУ им. Н.И. Пирогова; Сертификат по терапии до 2027 г. Стаж 12 лет.
                </div>
<div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-xs text-slate-700">
                  Прием: Пн, Ср, Пт — 10:00–18:00
                </div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
<img alt="Врач кардиолог" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="font-medium text-slate-900">Петров Сергей Николаевич</div>
<div className="text-sm text-slate-600">Кардиолог, первая категория</div>
</div>
<a className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 text-sm" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Записаться
                  </a>
</div>
<div className="mt-3 text-xs text-slate-600">
                  Образование: Первый МГМУ им. И.М. Сеченова; Аккредитация до 2026 г. Стаж 9 лет.
                </div>
<div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-xs text-slate-700">
                  Прием: Вт, Чт — 11:00–19:00; Сб — 10:00–15:00
                </div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-sm">
<img alt="Врач педиатр" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="font-medium text-slate-900">Кузнецова Мария Игоревна</div>
<div className="text-sm text-slate-600">Педиатр</div>
</div>
<a className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 text-sm" href="#appointment">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> Записаться
                  </a>
</div>
<div className="mt-3 text-xs text-slate-600">
                  Образование: СПбГПМУ; Аккредитация до 2028 г. Стаж 7 лет.
                </div>
<div className="mt-3 rounded-md border border-slate-200 bg-slate-50 p-2 text-xs text-slate-700">
                  Прием: Пн–Пт — 09:00–16:00
                </div>
</div>
</div>
</div>
<div className="mt-6 text-xs text-slate-500">Сведения о квалификации и сертификатах специалистов актуализируются по мере обновления документов.</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Услуги и цены</h2>
<a className="text-sm text-sky-700 hover:text-sky-900" href="#">Скачать прайс (PDF)</a>
</div>
<div className="mt-6 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white overflow-hidden">
<div className="grid grid-cols-12 border-b border-slate-200 bg-slate-50/60 text-xs text-slate-500 px-4 py-2">
<div className="col-span-6">Наименование услуги</div>
<div className="col-span-3">Категория</div>
<div className="col-span-3 text-right">Цена, руб.</div>
</div>
<div className="divide-y divide-slate-200">
<div className="grid grid-cols-12 px-4 py-3 hover:bg-slate-50">
<div className="col-span-6 text-sm text-slate-800">Приём терапевта первичный</div>
<div className="col-span-3 text-sm text-slate-600">Терапия</div>
<div className="col-span-3 text-right text-sm font-medium text-slate-900">1 800</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 hover:bg-slate-50">
<div className="col-span-6 text-sm text-slate-800">ЭКГ с расшифровкой</div>
<div className="col-span-3 text-sm text-slate-600">Диагностика</div>
<div className="col-span-3 text-right text-sm font-medium text-slate-900">1 200</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 hover:bg-slate-50">
<div className="col-span-6 text-sm text-slate-800">УЗИ брюшной полости</div>
<div className="col-span-3 text-sm text-slate-600">УЗИ</div>
<div className="col-span-3 text-right text-sm font-medium text-slate-900">2 500</div>
</div>
<div className="grid grid-cols-12 px-4 py-3 hover:bg-slate-50">
<div className="col-span-6 text-sm text-slate-800">Общий анализ крови (ОАК)</div>
<div className="col-span-3 text-sm text-slate-600">Лаборатория</div>
<div className="col-span-3 text-right text-sm font-medium text-slate-900">750</div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="info"></i>
<div className="font-medium text-slate-900">Условия оплаты</div>
</div>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li>Наличный и безналичный расчёт, банковские карты.</li>
<li>По ОМС/ДМС — при наличии направления и полиса.</li>
<li>Итоговая стоимость определяется по объёму оказанных услуг.</li>
</ul>
<a className="mt-3 inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i> Договор на оказание платных услуг
              </a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="licenses">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Лицензии и сертификаты</h2>
<p className="mt-3 text-slate-600">Публикуем сканы лицензий, сведения о видах работ и реквизиты выдавшего органа. Проверить действительность можно в открытых реестрах.</p>
<div className="mt-6 grid md:grid-cols-3 gap-6">
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<img alt="Лицензия скан" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="font-medium text-slate-900">Лицензия ЛО-77-01-012345</div>
<div className="text-sm text-slate-600">Выдана 12.05.2023 ДЗМ. Бессрочно.</div>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="download"></i> Скачать PDF
                  </a>
<a className="inline-flex items-center gap-1.5 text-sm text-sky-700 hover:text-sky-900" href="#">
<i className="w-4 h-4" data-lucide="external-link"></i> Проверить в реестре
                  </a>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<img alt="Санитарно-эпидемиологическое заключение" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="font-medium text-slate-900">СЭЗ</div>
<div className="text-sm text-slate-600">Соответствие санитарным правилам.</div>
<a className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="download"></i> Скачать PDF
                </a>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
<img alt="Сертификаты оборудования" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1503431128871-cd250803fa41?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="font-medium text-slate-900">Декларации и сертификаты на оборудование</div>
<div className="text-sm text-slate-600">Росздравнадзор, ЕАЭС.</div>
<a className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50" href="#">
<i className="w-4 h-4" data-lucide="download"></i> Скачать ZIP
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="patients">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Пациентам</h2>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="font-medium text-slate-900">Порядок записи</div>
<p className="mt-1 text-sm text-slate-700">Запись осуществляется через сайт, по телефону или при личном обращении в регистратуру. Для телемедицины требуется информированное добровольное согласие.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="font-medium text-slate-900">Сроки ожидания</div>
<p className="mt-1 text-sm text-slate-700">Плановый приём — до 7 дней, диагностические процедуры — до 10 дней. Экстренная помощь — незамедлительно.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="font-medium text-slate-900">Права и обязанности</div>
<p className="mt-1 text-sm text-slate-700">Соблюдение врачебной тайны, информированное согласие, право на выбор врача и методы лечения согласно законодательству РФ.</p>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="font-medium text-slate-900">Персональные данные</div>
<p className="mt-1 text-sm text-slate-700">Обработка в соответствии с 152-ФЗ. Назначен ответственный за ПДн. Реализованы организационные и технические меры защиты.</p>
</div>
</div>

<div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="message-square"></i>
<div className="font-medium text-slate-900">Обращения граждан (вопросы и жалобы)</div>
</div>
<form className="mt-4 grid sm:grid-cols-2 gap-4" onsubmit="event.preventDefault(); document.getElementById('fbOk').classList.remove('hidden'); this.reset();">
<div className="sm:col-span-2">
<label className="block text-sm text-slate-600">Тема обращения</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Качество обслуживания, предложение, благодарность" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-600">Ваше имя</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-600">Email или телефон</label>
<input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-slate-600">Текст обращения</label>
<textarea className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" placeholder="Опишите ситуацию..." required="" rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex items-start gap-3">
<label className="relative inline-flex items-start gap-3 cursor-pointer select-none">
<input className="peer sr-only" required="" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-sky-600 peer-checked:border-sky-600">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-xs text-slate-600">Согласен(на) на обработку персональных данных и публикацию ответа при необходимости (обезличенно).</span>
</label>
</div>
<div className="sm:col-span-2 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2.5 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Отправить
                    </button>
<div className="hidden text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-3 py-1.5" id="fbOk">Принято. Ответ направим в течение 30 дней.</div>
</div>
</form>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-6 h-max" id="accessibility">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="accessibility"></i>
<div className="font-medium text-slate-900">Доступная среда</div>
</div>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li>Безбарьерный вход, пандусы, широкие дверные проёмы.</li>
<li>Санузел для маломобильных граждан.</li>
<li>Визуальные и звуковые указатели.</li>
<li>При необходимости — сопровождение сотрудником.</li>
</ul>
<div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                Ответственный за доступную среду: Петрова Е.В., <a className="hover:underline" href="mailto:access@example-medcenter.ru">access@example-medcenter.ru</a>
</div>
<div className="mt-6 flex items-center gap-2">
<i className="w-5 h-5 text-amber-600" data-lucide="shield-alert"></i>
<div className="font-medium text-slate-900">Противодействие коррупции</div>
</div>
<ul className="mt-2 text-sm text-slate-700 space-y-2">
<li>Горячая линия комплаенса: <a className="hover:underline" href="mailto:ethics@example-medcenter.ru">ethics@example-medcenter.ru</a></li>
<li>Запрет даров и вознаграждений. Конфликт интересов — декларируется.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="contacts">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Контакты</h2>
<div className="mt-4 rounded-lg border border-slate-200 bg-white p-4">
<div className="grid sm:grid-cols-3 gap-4">
<div>
<div className="text-sm text-slate-500">Адрес</div>
<div className="font-medium text-slate-900 mt-1">101000, г. Москва, ул. Здоровья, д. 10</div>
</div>
<div>
<div className="text-sm text-slate-500">Телефон</div>
<a className="font-medium text-slate-900 mt-1 inline-flex items-center gap-2 hover:underline" href="tel:+74951234567">
<i className="w-4 h-4" data-lucide="phone"></i> +7 (495) 123-45-67
                    </a>
</div>
<div>
<div className="text-sm text-slate-500">Email</div>
<a className="font-medium text-slate-900 mt-1 hover:underline" href="mailto:info@example-medcenter.ru">info@example-medcenter.ru</a>
</div>
</div>
<div className="mt-4">
<img alt="Карта района" className="w-full h-64 object-cover rounded-md border border-slate-200" src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Реквизиты для оплаты</div>
<div className="mt-1 text-xs text-slate-700">Получатель: ООО «МЦ Альфа»<br/>ИНН 7701000000, КПП 770101001<br/>р/с 40702810900000000001 в ПАО «Банк»<br/>БИК 044525225, к/с 30101810400000000225</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Приём обращений</div>
<div className="mt-1 text-xs text-slate-700">Пн–Пт 09:00–18:00 <br/> Канцелярия: office@example-medcenter.ru</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="text-sm text-slate-500">Для СМИ</div>
<div className="mt-1 text-xs text-slate-700">press@example-medcenter.ru</div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-6 h-max">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="bell-ring"></i>
<div className="font-medium text-slate-900">Запрос справки или выписки</div>
</div>
<form className="mt-3 grid gap-3" onsubmit="event.preventDefault(); this.reset(); alert('Запрос отправлен. Мы свяжемся с вами.');">
<label className="text-sm text-slate-600">Ваше ФИО
                  <input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="text"/>
</label>
<label className="text-sm text-slate-600">Дата рождения
                  <input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="date"/>
</label>
<label className="text-sm text-slate-600">Email
                  <input className="mt-1 w-full rounded-md border-slate-300 focus:border-sky-500 focus:ring-sky-500" required="" type="email"/>
</label>
<label className="text-sm text-slate-600">Тип документа
                  <select className="mt-1 w-full rounded-md border-slate-300 bg-white focus:border-sky-500 focus:ring-sky-500" required="">
<option disabled="" selected="" value="">Выберите</option>
<option>Справка 086/у</option>
<option>Выписка из амбул. карты</option>
<option>Заключение по анализам</option>
</select>
</label>
<label className="relative inline-flex items-start gap-3 cursor-pointer select-none text-xs text-slate-600">
<input className="peer sr-only" required="" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 rounded-md border border-slate-300 bg-white flex items-center justify-center peer-checked:bg-sky-600 peer-checked:border-sky-600">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span>Согласен(на) на обработку персональных данных.</span>
</label>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-sky-600 px-4 py-2.5 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Отправить запрос
                </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-sky-500 text-white flex items-center justify-center tracking-tight text-xs font-semibold">МА</div>
<div className="text-sm font-medium text-slate-900">МЦ «Альфа»</div>
</div>
<p className="mt-3 text-sm text-slate-600">Качественная медицинская помощь. Прозрачность и соблюдение стандартов.</p>
<div className="mt-3 text-xs text-slate-500">© 2010–2025 ООО «МЦ Альфа»</div>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Документы</div>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li><a className="hover:underline" href="#licenses">Лицензия</a></li>
<li><a className="hover:underline" href="#">Политика ПДн</a></li>
<li><a className="hover:underline" href="#">Пользовательское соглашение</a></li>
<li><a className="hover:underline" href="#">Публичная оферта</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Пациентам</div>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li><a className="hover:underline" href="#appointment">Запись на приём</a></li>
<li><a className="hover:underline" href="#services">Прайс-лист</a></li>
<li><a className="hover:underline" href="#doctors">Врачи</a></li>
<li><a className="hover:underline" href="#patients">Права и обязанности</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Реквизиты</div>
<ul className="mt-3 text-sm text-slate-700 space-y-1.5">
<li>ОГРН: 1127746000000</li>
<li>ИНН/КПП: 7701000000 / 770101001</li>
<li>Адрес: 101000, г. Москва, ул. Здоровья, д. 10</li>
<li>Тел.: <a className="hover:underline" href="tel:+74951234567">+7 (495) 123-45-67</a></li>
<li>Email: <a className="hover:underline" href="mailto:info@example-medcenter.ru">info@example-medcenter.ru</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-3">
<div>Материалы на сайте носят справочный характер и не заменяют консультацию врача.</div>
<div>Последнее обновление: 15.10.2025</div>
</div>
</div>
</footer>

<div className="fixed inset-x-3 bottom-3 z-50 rounded-lg border border-slate-200 bg-white shadow-lg p-4 max-w-3xl mx-auto" id="cookieBanner">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-sky-600 mt-0.5" data-lucide="cookie"></i>
<div className="text-sm text-slate-700">
          Мы используем файлы cookie и обрабатываем персональные данные для улучшения работы сайта. Подробности — в Политике обработки ПДн.
          <div className="mt-2 flex items-center gap-3">
<label className="relative inline-flex items-center gap-2 cursor-pointer select-none text-xs text-slate-600">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="h-4 w-7 rounded-full border border-slate-300 bg-slate-200 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-white peer-checked:bg-sky-600 peer-checked:after:translate-x-3 transition-all"></span>
              Функциональные
            </label>
<label className="relative inline-flex items-center gap-2 cursor-pointer select-none text-xs text-slate-600">
<input className="peer sr-only" type="checkbox"/>
<span className="h-4 w-7 rounded-full border border-slate-300 bg-slate-200 relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-white peer-checked:bg-sky-600 peer-checked:after:translate-x-3 transition-all"></span>
              Аналитические
            </label>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-end gap-2">
<a className="text-xs text-slate-600 hover:text-slate-900" href="#">Подробнее</a>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-white text-xs font-medium tracking-tight hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500" onclick="document.getElementById('cookieBanner').remove()">
          Принять
        </button>
</div>
</div>


    </>
  );
}
