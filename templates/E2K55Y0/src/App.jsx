import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener("DOMContentLoaded", () => {
      // Staggered fade/slide-in
      document.querySelectorAll("[data-animate]").forEach(el => {
        const delay = +el.dataset.delay || 0
        el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700")
        setTimeout(() => {
          el.classList.remove("opacity-0", "translate-y-8")
          el.classList.add("opacity-100", "translate-y-0")
        }, delay)
      })
      // Icons
      if (window.lucide) lucide.createIcons()
    })
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative isolate overflow-hidden" style={{background: 'radial-gradient(circle at 60% 40%, rgba(99,102,241,0.15), transparent 70%)'}}>
<img alt="Polar background" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="container mx-auto px-6 py-24 flex flex-col items-start gap-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight" data-animate="" data-delay="100">
        Стандарт полярных авиационных операций
      </h1>
<p className="max-w-2xl text-lg text-gray-300" data-animate="" data-delay="250">
        Устранение нормативного пробела и повышение фактической безопасности
        полётов в экстремальных условиях Северного и Южного полюсов.
      </p>
</div>
</section>

<section className="container mx-auto px-6 py-16 space-y-12">

</section>

<section className="container mx-auto px-6 pb-24 space-y-8">

</section>

<section className="container mx-auto px-6 pb-32 space-y-8">
<h2 className="text-2xl font-semibold tracking-tight" data-animate="" data-delay="100">
      ГЛАВА 2. Требования к персоналу
    </h2>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="150">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.1. Общие положения</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.1.1.</span> Настоящая глава устанавливает минимальные обязательные требования к квалификации, подготовке, допуску и поддержанию навыков персонала, участвующего в выполнении полётов в полярных регионах.</p>
<p><span className="font-semibold">2.1.2.</span> Весь персонал, на который распространяется действие настоящей главы, должен быть ознакомлен с её требованиями под подпись.</p>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="200">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.2. Требования к лётному составу</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">

<div className="px-5 py-4 space-y-4">
<h4 className="font-semibold">2.2.1. Общие требования к допуску</h4>
<p>К выполнению полётов в полярных регионах допускаются члены лётного экипажа, одновременно выполняющие условия:</p>
<ol className="list-decimal list-inside space-y-2">
<li>Наличие действующего свидетельства авиационного персонала с квалификационной отметкой на Ил-76ТД-90ВД.</li>
<li>Наличие действующего медицинского заключения (ВЛЭК) соответствующего класса.</li>
<li>Опыт полётов на Ил-76ТД-90ВД: 
              <ul className="list-disc ml-5 space-y-1">
<li>все члены экипажа — не менее 500 часов;</li>
<li>командир ВС — не менее 200 часов в качестве КВС.</li>
</ul>
</li>
<li>Успешное прохождение специальной подготовки к полётам в полярных регионах по ППЧЛЭ.</li>
</ol>
</div>

<div className="px-5 py-4 space-y-4">
<h4 className="font-semibold">2.2.2. Программа специальной подготовки</h4>
<p>Все члены летного экипажа проходят подготовку в рамках ППЧЛЭ, включающую этапы:</p>
<ol className="list-decimal list-inside space-y-1">
<li>Теоретическая подготовка.</li>
<li>Тренажёрная подготовка (при наличии сертифицированного тренажёра).</li>
<li>Лётная подготовка (по показаниям ППЧЛЭ).</li>
</ol>
<p className="font-medium">Темы теоретической подготовки:</p>
<ul className="list-disc list-inside space-y-1">
<li>Нормативная база, навигация и метеорология полярных регионов.</li>
<li>Эксплуатация систем и оборудования ВС в условиях низких температур.</li>
<li>Планирование и выполнение полётов на СЛВПП.</li>
<li>Действия в особых и аварийных ситуациях, процедуры выживания.</li>
<li>CRM в полярных условиях.</li>
</ul>
<p className="font-medium">Тренажёрная подготовка включает отработку:</p>
<ul className="list-disc list-inside space-y-1">
<li>Отказов навигационного оборудования.</li>
<li>Заходов на СЛВПП.</li>
<li>Полётов в сложных метеоусловиях.</li>
</ul>
</div>

<div className="px-5 py-4 space-y-4">
<h4 className="font-semibold">2.2.3. Допуск к специальным видам ТСР</h4>
<p>Члены экипажа, привлекаемые к десантированию грузов/персонала, проходят дополнительную подготовку. ППЧЛЭ определяет содержание, объём и критерии успешности для каждого вида работ.</p>
</div>

<div className="px-5 py-4 space-y-4">
<h4 className="font-semibold">2.2.4. Порядок оформления допуска</h4>
<ol className="list-decimal list-inside space-y-1">
<li>Допуск оформляется приказом уполномоченного лица.</li>
<li>Основание — отчёты о подготовке и проверках.</li>
<li>В летной книжке делается запись о допуске (вид полётов, регион).</li>
</ol>
</div>

<div className="px-5 py-4 space-y-4">
<h4 className="font-semibold">2.2.5. Поддержание квалификации</h4>
<ul className="list-disc list-inside space-y-1">
<li>Ежегодно — теоретическая подготовка по ОЗП и полярным особенностям.</li>
<li>Каждые 12 месяцев — полёт с практикой десантирования для сохранения допуска к ТСР.</li>
<li>Перерыв &gt; 12 мес — допуск аннулируется; требуется повторная подготовка.</li>
</ul>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="250">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.3. Требования к инженерно-техническому персоналу</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.3.1.</span> Персонал должен пройти подготовку по особенностям ТО ВС в полярных условиях.</p>
<p><span className="font-semibold">2.3.2.</span> Программа и порядок подготовки определены Руководством ИАС.</p>
</div>
<div className="px-5 py-4 space-y-2">
<h4 className="font-semibold">2.3.3. Содержание специальной подготовки</h4>
<ul className="list-disc list-inside space-y-1">
<li>Эксплуатация систем и агрегатов ВС при экстремально низких температурах.</li>
<li>Процедуры прогрева ВС и его оборудования.</li>
<li>Противообледенительная обработка.</li>
<li>Работа наземного оборудования на снежно-ледовых покрытиях.</li>
<li>ТО и ремонт на аэродромах с ограниченной инфраструктурой.</li>
<li>Техника безопасности при низких температурах и ветре.</li>
</ul>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="300">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.4. Персонал по планированию и обеспечению полётов</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.4.1.</span> Планировщики/диспетчеры проходят подготовку по утверждённой программе.</p>
</div>
<div className="px-5 py-4 space-y-2">
<h4 className="font-semibold">2.4.2. Основные темы подготовки</h4>
<ul className="list-disc list-inside space-y-1">
<li>Полярная навигация и специальные методы.</li>
<li>Полярная метеорология и интерпретация прогнозов.</li>
<li>Характеристики СЛВПП, методы оценки состояния.</li>
<li>Расчёты топлива, загрузки, запасных аэродромов.</li>
<li>Оценка рисков и принятие решений.</li>
<li>Взаимодействие с операторами площадок и службами.</li>
</ul>
</div>
<div className="px-5 py-4">
<p><span className="font-semibold">2.4.3.</span> Порядок допуска и поддержания квалификации регламентируется внутренними документами Авиакомпании.</p>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="350">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.5. Диспетчерский состав ЦУВП</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.5.1.</span> Диспетчеры ЦУВП проходят специальную подготовку.</p>
</div>
<div className="px-5 py-4 space-y-2">
<h4 className="font-semibold">2.5.2. Основные темы подготовки</h4>
<ul className="list-disc list-inside space-y-1">
<li>Специфика полярных маршрутов.</li>
<li>Связь и координация с экипажами и службами.</li>
<li>Получение и анализ информации о СЛВПП и погоде.</li>
<li>Действия в аварийных ситуациях, поиск и спасение.</li>
<li>Системы наблюдения/контроля за ВС в полярных регионах.</li>
</ul>
</div>
<div className="px-5 py-4">
<p><span className="font-semibold">2.5.3.</span> Порядок допуска и поддержания квалификации определён внутренними документами.</p>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="400">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.6. Персонал по оценке состояния СЛВПП</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.6.1.</span> Персонал проходит подготовку по специальной программе.</p>
</div>
<div className="px-5 py-4 space-y-2">
<h4 className="font-semibold">2.6.2. Основные темы подготовки</h4>
<ul className="list-disc list-inside space-y-1">
<li>Физико-механические свойства снега и льда.</li>
<li>Измерение несущей способности, ровности, сцепления.</li>
<li>Критерии пригодности СЛВПП для Ил-76ТД-90ВД.</li>
<li>Процедуры инспектирования и документирования.</li>
<li>Верификация данных от операторов площадок.</li>
<li>Влияние метеоусловий и прогнозирование изменений.</li>
</ul>
</div>
<div className="px-5 py-4">
<p><span className="font-semibold">2.6.3.</span> Порядок допуска и поддержания квалификации определяется внутренними документами и настоящим Стандартом.</p>
</div>
</div>
</details>

<details className="group border border-neutral-800 rounded-lg overflow-hidden" data-animate="" data-delay="450">
<summary className="flex items-center justify-between cursor-pointer px-4 py-3 font-medium">
<span>2.7. Специалисты по загрузке ВС (лоад-мастеры)</span>
<svg className="lucide h-5 w-5 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down"></svg>
</summary>
<div className="bg-neutral-900 divide-y divide-neutral-800">
<div className="px-5 py-4 space-y-4">
<p><span className="font-semibold">2.7.1.</span> Лоад-мастеры проходят специальную подготовку.</p>
</div>
<div className="px-5 py-4 space-y-2">
<h4 className="font-semibold">2.7.2. Основные темы подготовки</h4>
<ul className="list-disc list-inside space-y-1">
<li>Размещение и швартовка грузов при турбулентности / СЛВПП.</li>
<li>Загрузка/разгрузка в условиях низких температур и ветра.</li>
<li>Использование спецоборудования в полярных условиях.</li>
<li>Расширенные процедуры выживания в Арктике/Антарктике.</li>
<li>Использование аварийно-спасательного оборудования.</li>
<li>Первая помощь в полярной среде.</li>
</ul>
</div>
<div className="px-5 py-4">
<p><span className="font-semibold">2.7.3.</span> Порядок допуска и поддержания квалификации — по внутренним документам Авиакомпании.</p>
</div>
</div>
</details>
</section>

<footer className="text-center py-8 text-sm text-neutral-500">
    © 2024 Эксплуатант. Все права защищены.
  </footer>


    </>
  );
}
