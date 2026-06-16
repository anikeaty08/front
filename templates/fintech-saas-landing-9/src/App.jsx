import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold text-lg tracking-tight">WANTTOPAY</div>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Возможности</a>
<a className="hover:text-slate-900 transition-colors" href="#cards">Карты</a>
<a className="hover:text-slate-900 transition-colors" href="#comparison">Сравнение</a>
<a className="hover:text-slate-900 transition-colors" href="#exchange">Обмен USDT</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<a className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#">
                Открыть mini app
            </a>
</div>
</header>

<section className="relative pt-40 pb-24 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-600">800 000+ пользователей уже используют Wanttopay для международных оплат</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight max-w-4xl mx-auto text-slate-900">
                Wanttopay — виртуальные карты в Telegram
            </h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Оплачивайте зарубежные сервисы, подписки, онлайн-покупки и расходы в поездках через mini app в Telegram.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-2xl text-base font-medium hover:bg-blue-700 transition-all shadow-sm" href="#">
                    Выпустить карту
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl text-base font-medium hover:bg-slate-50 transition-all shadow-sm" href="#comparison">
                    Сравнить карты
                </a>
</div>
<div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-5xl mx-auto border-t border-slate-200/60 pt-12">
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-600" icon="solar:card-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900 leading-tight">Виртуальные карты<br/>под любые задачи</span>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-600" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900 leading-tight">Пополнение в фиате<br/>и криптовалюте</span>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-600" icon="solar:global-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900 leading-tight">Для оплаты онлайн<br/>и оффлайн</span>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-600" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-900 leading-tight">Поддержка и инструкции</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Для каких задач используют Wanttopay</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    Wanttopay помогает оплачивать цифровые сервисы, покупки в интернете, поездки и подарочные карты — в одном сервисе.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-3">AI, подписки и онлайн-сервисы</h3>
<p className="text-sm text-slate-500 leading-relaxed">ChatGPT, Claude, Cursor, Zoom, Figma, Midjourney и другие сервисы, которыми вы пользуетесь регулярно.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:bag-3-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-3">Онлайн-покупки</h3>
<p className="text-sm text-slate-500 leading-relaxed">Платежи в интернет-магазинах, приложениях и на зарубежных сайтах .</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:airplane-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-3">Поездки и travel-сценарии</h3>
<p className="text-sm text-slate-500 leading-relaxed">Бронирования, билеты, такси, покупки за границей и оплата телефоном в поездках.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:gamepad-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-3">App Store, Google Play и игровые платформы</h3>
<p className="text-sm text-slate-500 leading-relaxed">Оплата цифровых экосистем, приложений, игр и встроенных покупок, где нужен международный платёжный инструмент.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<iconify-icon className="text-3xl text-slate-900 mb-6" icon="solar:gift-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mb-3">Подарочные карты</h3>
<p className="text-sm text-slate-500 leading-relaxed">Гифт карты для конкретных платформ и сервисов, когда удобнее использовать готовый цифровой номинал.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Основные функции Wanttopay</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    Внутри сервиса собраны инструменты для управления цифровыми платежами в одном интерфейсе.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:add-square-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">Выпуск виртуальных карт</h4>
<p className="text-sm text-slate-500 leading-relaxed">Создавайте карты под разные задачи: разовые оплаты, подписки, поездки и регулярные расходы.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:wallet-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">Пополнение карт</h4>
<p className="text-sm text-slate-500 leading-relaxed">Используйте удобный способ пополнения: в фиате или криптовалюте.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:safe-square-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">Внутренний баланс</h4>
<p className="text-sm text-slate-500 leading-relaxed">Храните средства внутри сервиса и распределяйте их между картами по мере необходимости.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:history-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">История операций</h4>
<p className="text-sm text-slate-500 leading-relaxed">Проверяйте списания, зачисления, суммы, даты и детали транзакций.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:bell-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">Уведомления о транзакциях</h4>
<p className="text-sm text-slate-500 leading-relaxed">Следите за движением средств и статусом операций.</p>
</div>
<div className="flex flex-col">
<iconify-icon className="text-2xl text-blue-600 mb-4" icon="solar:chat-round-dots-linear"></iconify-icon>
<h4 className="text-base font-medium text-slate-900 mb-2">ИИ-консультант</h4>
<p className="text-sm text-slate-500 leading-relaxed">Получайте мгновенные ответы на вопросы по оплатам и картам.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">Чтобы оформить виртуальную карту,<br/>вам нужен только Telegram</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    Не нужно скачивать отдельное приложение и разбираться в новой банковской системе.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-base font-medium text-slate-900 mb-2">Карты под разные задачи</h4>
<p className="text-sm text-slate-500 leading-relaxed">Подписки, покупки, поездки и другие сценарии можно разделить по отдельным картам.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-base font-medium text-slate-900 mb-2">Прозрачность операций</h4>
<p className="text-sm text-slate-500 leading-relaxed">История платежей, остатки и движения по картам доступны в одном интерфейсе.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-base font-medium text-slate-900 mb-2">Удобное пополнение</h4>
<p className="text-sm text-slate-500 leading-relaxed">Пополняйте баланс тогда, когда это действительно нужно.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-base font-medium text-slate-900 mb-2">Поддержка рядом</h4>
<p className="text-sm text-slate-500 leading-relaxed">Если возникают вопросы по оплате, сервису или карте, можно быстро получить помощь.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="cards">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Выберите карту под свой сценарий</h2>
<p className="mt-4 text-base text-slate-500">
                    В линейке Wanttopay есть карты для разовых оплат, регулярных подписок, поездок и более активного использования. Сравните форматы и выберите тот, который подходит именно вам.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-3xl border border-slate-200/60 p-8 flex flex-col hover:border-slate-300 transition-colors bg-white shadow-sm">
<div className="mb-5">
<span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-100">Лучше всего для разовой оплаты</span>
</div>
<div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 p-6 flex flex-col text-white mb-6">
<div className="flex justify-between items-start mb-4">
<span className="font-semibold tracking-tight text-xl">Prepaid</span>
<iconify-icon className="text-2xl opacity-80" icon="solar:card-linear"></iconify-icon>
</div>
<div className="text-sm font-medium opacity-90">Разовая оплата</div>
<div className="text-xs opacity-75 mt-1">Для конкретной покупки или отдельного сервиса</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-grow">Предоплаченная карта с фиксированным номиналом. Подходит, когда карта нужна под одну задачу: оплатить подписку, цифровой сервис или отдельную онлайн-покупку без регулярного пополнения.</p>
<div className="text-sm font-medium text-slate-900 mb-3">Ключевые особенности:</div>
<ul className="space-y-2 text-sm text-slate-600 mb-8">
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>фиксированный номинал</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>без платы за обслуживание</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>без возможности пополнения</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>карта перестает работать, когда вы потратите весь номинал</span></li>
</ul>
<a className="mt-auto w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors text-center" href="#">Оформить Prepaid</a>
</div>

<div className="rounded-3xl border border-slate-200/60 p-8 flex flex-col hover:border-slate-300 transition-colors bg-white shadow-sm">
<div className="mb-5">
<span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">Лучше всего для подписок</span>
</div>
<div className="rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-6 flex flex-col text-white mb-6">
<div className="flex justify-between items-start mb-4">
<span className="font-semibold tracking-tight text-xl">Easy</span>
<iconify-icon className="text-2xl opacity-80" icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<div className="text-sm font-medium opacity-90">Регулярные платежи</div>
<div className="text-xs opacity-75 mt-1">Для сервисов и повторяющихся списаний</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-grow">Карта с пополняемым балансом для сервисов, которыми вы пользуетесь регулярно. Подходит для подписок и повседневных онлайн-расходов.</p>
<div className="text-sm font-medium text-slate-900 mb-3">Ключевые особенности:</div>
<ul className="space-y-2 text-sm text-slate-600 mb-8">
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>пополняемый баланс</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>подходит для повторяющихся списаний</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>удобна для подписок и цифровых сервисов</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>базовый формат для повседневных онлайн-оплат</span></li>
</ul>
<a className="mt-auto w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors text-center" href="#">Оформить Easy</a>
</div>

<div className="rounded-3xl border border-slate-200/60 p-8 flex flex-col hover:border-slate-300 transition-colors bg-white shadow-sm">
<div className="mb-5">
<span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-100">Подходит для оплаты онлайн и оффлайн</span>
</div>
<div className="rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 p-6 flex flex-col text-white mb-6">
<div className="flex justify-between items-start mb-4">
<span className="font-semibold tracking-tight text-xl">Smart</span>
<iconify-icon className="text-2xl opacity-80" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="text-sm font-medium opacity-90">Онлайн и поездки</div>
<div className="text-xs opacity-75 mt-1">Для travel-сценариев и оплаты за границей</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-grow">Карта для более широкого сценария использования: сервисы, бронирования, поездки и офлайн-оплата через Apple Pay / Google Pay.</p>
<div className="text-sm font-medium text-slate-900 mb-3">Ключевые особенности:</div>
<ul className="space-y-2 text-sm text-slate-600 mb-8">
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>пополняемый баланс</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>онлайн- и офлайн-использование</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>поддержка Apple Pay / Google Pay</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>подходит для travel-сценариев</span></li>
</ul>
<a className="mt-auto w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors text-center" href="#">Оформить Smart</a>
</div>

<div className="rounded-3xl border border-slate-200/60 p-8 flex flex-col hover:border-slate-300 transition-colors bg-white shadow-sm">
<div className="mb-5">
<span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200">Лучше всего для активного использования</span>
</div>
<div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 flex flex-col text-white mb-6">
<div className="flex justify-between items-start mb-4">
<span className="font-semibold tracking-tight text-xl">Pro</span>
<iconify-icon className="text-2xl opacity-80" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="text-sm font-medium opacity-90">Максимум возможностей</div>
<div className="text-xs opacity-75 mt-1">Для активного использования и широкого набора сценариев</div>
</div>
<p className="text-sm text-slate-500 mb-6 flex-grow">Самая функциональная карта в линейке Wanttopay. Подходит пользователям, которым нужны более высокие лимиты, универсальность и один инструмент под максимум задач.</p>
<div className="text-sm font-medium text-slate-900 mb-3">Ключевые особенности:</div>
<ul className="space-y-2 text-sm text-slate-600 mb-8">
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>более высокий уровень возможностей</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>широкий сценарий использования</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>подходит для активных пользователей</span></li>
<li className="flex items-start gap-2.5"><iconify-icon className="text-slate-400 mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon> <span>закрывает максимум кейсов</span></li>
</ul>
<a className="mt-auto w-full px-4 py-3.5 bg-slate-50 border border-slate-200/80 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors text-center" href="#">Оформить Pro</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="comparison">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Сравнение карт</h2>
<div className="overflow-x-auto rounded-3xl border border-slate-200/60 shadow-sm">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead className="bg-slate-50 border-b border-slate-200/60">
<tr>
<th className="py-5 px-6 font-medium text-slate-500 text-sm w-1/5 border-r border-slate-200/60">Параметр</th>
<th className="py-5 px-6 font-semibold text-slate-900 text-base w-1/5">Prepaid</th>
<th className="py-5 px-6 font-semibold text-slate-900 text-base w-1/5">Easy</th>
<th className="py-5 px-6 font-semibold text-slate-900 text-base w-1/5">Smart</th>
<th className="py-5 px-6 font-semibold text-slate-900 text-base w-1/5">Pro</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-slate-200/60 bg-white">
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Лучший сценарий</td>
<td className="py-4 px-6 text-slate-900">Разовая оплата</td>
<td className="py-4 px-6 text-slate-900">Регулярные подписки и сервисы</td>
<td className="py-4 px-6 text-slate-900">Онлайн + поездки</td>
<td className="py-4 px-6 text-slate-900">Максимум сценариев</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Формат карты</td>
<td className="py-4 px-6 text-slate-900">Предоплаченная</td>
<td className="py-4 px-6 text-slate-900">Пополняемая</td>
<td className="py-4 px-6 text-slate-900">Пополняемая</td>
<td className="py-4 px-6 text-slate-900">Пополняемая</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Баланс</td>
<td className="py-4 px-6 text-slate-900">Фиксированный номинал</td>
<td className="py-4 px-6 text-slate-900">Пополняемый</td>
<td className="py-4 px-6 text-slate-900">Пополняемый</td>
<td className="py-4 px-6 text-slate-900">Пополняемый</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Подписки и цифровые сервисы</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Онлайн-покупки</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Разовые покупки</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Повторяющиеся списания</td>
<td className="py-4 px-6 text-slate-500">Нет / ограниченно</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Бронирования и travel-сценарии</td>
<td className="py-4 px-6 text-slate-500">Ограниченно</td>
<td className="py-4 px-6 text-slate-500">Ограниченно</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Офлайн-оплата за границей</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Apple Pay / Google Pay</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Для повседневного использования</td>
<td className="py-4 px-6 text-slate-500">Ограниченно</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Для активного использования</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-900">Базово</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Срок действия</td>
<td className="py-4 px-6 text-slate-900">По условиям карты</td>
<td className="py-4 px-6 text-slate-900">По условиям карты</td>
<td className="py-4 px-6 text-slate-900">По условиям карты</td>
<td className="py-4 px-6 text-slate-900">По условиям карты</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Валюта карты</td>
<td className="py-4 px-6 text-slate-900">USD</td>
<td className="py-4 px-6 text-slate-900">USD</td>
<td className="py-4 px-6 text-slate-900">USD</td>
<td className="py-4 px-6 text-slate-900">USD</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Пополнение</td>
<td className="py-4 px-6 text-slate-500">Нет</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
<td className="py-4 px-6 text-slate-900">Да</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Обслуживание</td>
<td className="py-4 px-6 text-slate-900">Без обслуживания</td>
<td className="py-4 px-6 text-slate-900">По тарифу</td>
<td className="py-4 px-6 text-slate-900">По тарифу</td>
<td className="py-4 px-6 text-slate-900">По тарифу</td>
</tr>
<tr>
<td className="py-4 px-6 text-slate-500 font-medium border-r border-slate-200/60">Лимиты</td>
<td className="py-4 px-6 text-slate-900">Базовый формат</td>
<td className="py-4 px-6 text-slate-900">Для регулярных платежей</td>
<td className="py-4 px-6 text-slate-900">Расширенный формат</td>
<td className="py-4 px-6 text-slate-900">Максимальные возможности в линейке</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24" id="gift-cards">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Gift Cards</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    Используйте готовые карты пополнения для Steam, PlayStation, Roblox, Apple, Nintendo и других платформ.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:apple-linear"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">Apple</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для App Store, Apple ID, подписок и цифровых покупок внутри экосистемы Apple.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4 opacity-80" icon="solar:gamepad-bold-duotone"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">PlayStation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для пополнения аккаунта, игр, подписок и покупок в PlayStation Store.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:monitor-camera-linear"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">Steam</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для игр, внутриигровых покупок и пополнения баланса Steam.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:play-linear"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">Google Play</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для приложений, подписок, игр и цифровых покупок внутри Google Play.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:gamepad-minimalistic-linear"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">Nintendo</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для eShop, игр и цифрового контента внутри экосистемы Nintendo.</p>
</div>
<div className="p-6 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<iconify-icon className="text-3xl text-slate-900 mb-4" icon="solar:wad-of-money-linear"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-2">Razer Gold / игровые платформы</h3>
<p className="text-sm text-slate-500 leading-relaxed">Для игровых сервисов и цифровых платежей на отдельных платформах.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Какую карту выбрать под ваш сценарий</h2>
<p className="text-base text-slate-500 mb-12">Ориентируйтесь не только на название карты, а на то, как именно вы планируете её использовать.</p>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-sm text-slate-600">Нужна карта для одной конкретной оплаты</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-400">Выбирайте</span>
<span className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">Prepaid</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-sm text-slate-600">Нужна карта для постоянных подписок и сервисов</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-400">Выбирайте</span>
<span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">Easy</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-sm text-slate-600">Нужна карта для поездок и офлайн-оплаты за границей</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-400">Выбирайте</span>
<span className="px-3 py-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">Smart</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-sm text-slate-600">Нужна карта, которая закрывает максимум сценариев</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-400">Выбирайте</span>
<span className="px-3 py-1 rounded-lg bg-slate-800 text-white text-sm font-medium">Pro</span>
</div>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="text-sm text-slate-600">Нужен готовый цифровой номинал для конкретной платформы</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-sm text-slate-400">Выбирайте</span>
<span className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-900 shadow-sm text-sm font-medium">Gift Card</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4 mt-8 pt-4">
<div className="p-6 rounded-2xl border border-slate-200/60">
<p className="text-sm text-slate-600"><strong>Не хотите привязывать основную карту ко всем сайтам?</strong> Используйте Wanttopay для отдельных расходов и изолируйте такие платежи.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200/60">
<p className="text-sm text-slate-600"><strong>Хотите разделить подписки, покупки и поездки?</strong> Wanttopay помогает выстроить более безопасную и понятную логику расходов, где у каждого сценария свой платёжный инструмент.</p>
</div>
</div>
</div>
<div className="mt-8 text-sm text-slate-500 text-center">
                Не уверены, что выбрать? <a className="text-blue-600 font-medium hover:text-blue-700" href="#comparison">Смотрите сравнение карт</a> или обратитесь в поддержку — поможем подобрать подходящий вариант.
            </div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Как работает Wanttopay</h2>
<p className="mt-4 text-base text-slate-500">
                    Сервис устроен просто: вы заходите в mini app, проходите верификацию, выбираете карту, пополняете баланс и используете её под нужный сценарий.
                </p>
</div>
<div className="grid md:grid-cols-5 gap-8 relative">
<div className="hidden md:block absolute top-6 left-12 right-12 h-[1px] bg-slate-200/80 -z-10"></div>
<div className="flex flex-col text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 mx-auto flex items-center justify-center text-sm font-medium text-slate-900 mb-4 z-10">1</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Откройте Wanttopay</h4>
<p className="text-xs text-slate-500 leading-relaxed">Вход в сервис через mini app в Telegram. Не нужно скачивать отдельное приложение.</p>
</div>
<div className="flex flex-col text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 mx-auto flex items-center justify-center text-sm font-medium text-slate-900 mb-4 z-10">2</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Пройдите верификацию</h4>
<p className="text-xs text-slate-500 leading-relaxed">Подтвердите личность, чтобы получить доступ к выпуску карт и функциям сервиса.</p>
</div>
<div className="flex flex-col text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 mx-auto flex items-center justify-center text-sm font-medium text-slate-900 mb-4 z-10">3</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Выберите карту</h4>
<p className="text-xs text-slate-500 leading-relaxed">Разовая покупка, подписки или поездки — выберите подходящий формат.</p>
</div>
<div className="flex flex-col text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 mx-auto flex items-center justify-center text-sm font-medium text-slate-900 mb-4 z-10">4</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Пополните баланс</h4>
<p className="text-xs text-slate-500 leading-relaxed">Используйте удобный способ пополнения в фиате или криптовалюте.</p>
</div>
<div className="flex flex-col text-center">
<div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-200 mx-auto flex items-center justify-center text-sm font-medium text-blue-600 mb-4 z-10">5</div>
<h4 className="text-sm font-medium text-slate-900 mb-2">Оплачивайте сервис или покупку</h4>
<p className="text-xs text-slate-500 leading-relaxed">После выпуска и пополнения карта готова к использованию.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-3.5 bg-slate-900 text-white rounded-2xl text-base font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    Открыть Wanttopay
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 space-y-16">

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
<div className="lg:w-1/3">
<div className="w-12 h-12 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Зачем нужна верификация KYC</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        KYC — стандартная часть финансового сервиса. Она нужна, чтобы карты и функции Wanttopay были доступны реальным пользователям в безопасной и устойчивой инфраструктуре.
                    </p>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Верификация помогает подтвердить личность, защитить аккаунт и обеспечить корректную работу сервиса. Это нормальная практика для зрелых финтех-продуктов, а не лишний барьер.
                    </p>
<div className="inline-flex px-3 py-2 bg-slate-50 border border-slate-200/60 rounded-lg text-xs font-medium text-slate-600">
                        Часть безопасного доступа, а не усложнение.
                    </div>
</div>
<div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-sm font-medium text-slate-900 mb-2">Подтверждение личности</h4>
<p className="text-sm text-slate-500 leading-relaxed">Доступ к картам и функциям сервиса получает именно владелец аккаунта.</p>
</div>
<div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-sm font-medium text-slate-900 mb-2">Защита аккаунта и операций</h4>
<p className="text-sm text-slate-500 leading-relaxed">Проверка помогает снизить риск мошенничества и неправомерного использования инструментов.</p>
</div>
<div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-sm font-medium text-slate-900 mb-2">Надёжная инфраструктура</h4>
<p className="text-sm text-slate-500 leading-relaxed">Верификация проходит через Sumsub — специализированный сервис для KYC-проверок.</p>
</div>
<div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60">
<h4 className="text-sm font-medium text-slate-900 mb-2">Только необходимые данные</h4>
<p className="text-sm text-slate-500 leading-relaxed">Запрашивается только тот объём информации, который нужен для идентификации и доступа к функциям сервиса.</p>
</div>
</div>
</div>

<div className="p-10 lg:p-12 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<div className="lg:w-1/3 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon className="text-2xl" icon="solar:safe-2-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Внутренний баланс для большего контроля</h2>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        Мы рекомендуем хранить средства не на картах, а на внутреннем балансе и пополнять карту тогда, когда она нужна. Такой подход даёт больше гибкости, помогает лучше контролировать расходы и снижает риски.
                    </p>
<a className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-xl transition-colors" href="#">
                        Узнать больше о балансе
                    </a>
</div>
<div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 relative z-10">
<div className="p-6 rounded-3xl bg-white/5 border border-white/10">
<h4 className="text-sm font-medium mb-2">Хранение внутри сервиса</h4>
<p className="text-sm text-slate-400 leading-relaxed">Вы можете держать деньги на внутреннем балансе и распределять их по картам по мере необходимости.</p>
</div>
<div className="p-6 rounded-3xl bg-white/5 border border-white/10">
<h4 className="text-sm font-medium mb-2">Быстрое пополнение карт</h4>
<p className="text-sm text-slate-400 leading-relaxed">Нужную карту можно быстро пополнить под конкретный сценарий оплаты за пару кликов.</p>
</div>
<div className="p-6 rounded-3xl bg-white/5 border border-white/10">
<h4 className="text-sm font-medium mb-2">Разделение бюджета</h4>
<p className="text-sm text-slate-400 leading-relaxed">Подписки, покупки, поездки и другие расходы можно удобнее распределять между разными картами.</p>
</div>
<div className="p-6 rounded-3xl bg-white/5 border border-white/10">
<h4 className="text-sm font-medium mb-2">Больше спокойствия</h4>
<p className="text-sm text-slate-400 leading-relaxed">Не нужно держать лишние суммы на карте постоянно — используйте баланс как основной резервный инструмент.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Почему пользователи выбирают Wanttopay</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    На рынке много сервисов с картами, но Wanttopay выбирают за сочетание удобства, функциональности и понятной логики продукта.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm md:col-span-1">
<h4 className="text-lg font-medium text-slate-900 mb-3">Более 3 лет на рынке</h4>
<p className="text-sm text-slate-500 leading-relaxed">Сервис развивается не как временное решение, а как устойчивый продукт для цифровых платежей.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm md:col-span-2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blue-50/20">
<h4 className="text-lg font-medium text-slate-900 mb-3">Более 1 000 000 пользователей</h4>
<p className="text-sm text-slate-500 leading-relaxed max-w-md">Воспользовались Wanttopay для подписок, цифровых сервисов, поездок и других международных сценариев оплаты.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-3">Функциональное приложение</h4>
<p className="text-sm text-slate-500 leading-relaxed">Внутри сервиса доступны не только карты, но и внутренний баланс, история операций, gift cards и поддержка.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-3">Карты под задачи</h4>
<p className="text-sm text-slate-500 leading-relaxed">Wanttopay помогает выбрать не один универсальный инструмент, а понятный сценарий под конкретную цель.</p>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<h4 className="text-lg font-medium text-slate-900 mb-3">Поддержка и инфраструктура</h4>
<p className="text-sm text-slate-500 leading-relaxed">Сервис строится как зрелый финтех-продукт: с KYC, поддержкой и вниманием к безопасности.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Отзывы пользователей Wanttopay</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                        Пользователи приходят в Wanttopay с разными задачами: подписки, поездки, конкретные сервисы или помощь с оплатой.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    Смотреть отзывы на Trustpilot <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4 text-sm"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 italic mb-6">«С помощью Wanttopay получилось оплатить нужный сервис без лишней сложности. Поддержка быстро подсказала, как всё сделать правильно.»</p>
<div className="text-xs font-medium text-slate-900">— Для подписок и сервисов</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4 text-sm"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 italic mb-6">«Нужна была карта для travel-сценария и оплаты за границей. Удобно, что сервис подходит не только для подписок, но и для поездок.»</p>
<div className="text-xs font-medium text-slate-900">— Для поездок</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4 text-sm"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 italic mb-6">«Если что-то не получается с первого раза, команда объясняет спокойно и по делу, а не отвечает шаблонами.»</p>
<div className="text-xs font-medium text-slate-900">— Про поддержку</div>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm">
<div className="flex gap-1 text-orange-400 mb-4 text-sm"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm text-slate-600 italic mb-6">«Понравилось, что всё находится внутри Telegram и не нужно разбираться в отдельном банковском приложении.»</p>
<div className="text-xs font-medium text-slate-900">— Про простоту</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="knowledge">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Инструкции и ответы на частые вопросы</h2>
<p className="mt-4 text-base text-slate-500 leading-relaxed">
                    Wanttopay — это сервис, где важно не только оформить карту, но и понимать, как её использовать. Поэтому мы собрали инструкции по самым частым сценариям.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как оплатить ChatGPT</h3>
<p className="text-sm text-slate-500">Пошагово разбираем, как выбрать карту и провести оплату.</p>
</a>
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как оплатить Google Play</h3>
<p className="text-sm text-slate-500">Объясняем, какой формат карты подходит и что важно проверить перед покупкой.</p>
</a>
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как выбрать карту Wanttopay</h3>
<p className="text-sm text-slate-500">Разбираем разницу между Prepaid, Easy, Smart, Pro и Gift Card.</p>
</a>
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Что такое биллинг-адрес</h3>
<p className="text-sm text-slate-500">Объясняем, зачем он нужен и где посмотреть корректные данные для оплаты.</p>
</a>
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Как работает KYC</h3>
<p className="text-sm text-slate-500">Показываем, что именно проверяется и зачем нужна верификация.</p>
</a>
<a className="p-6 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-slate-300 transition-colors group" href="#">
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Что делать, если платёж не проходит</h3>
<p className="text-sm text-slate-500">Собираем типовые причины и действия перед обращением в поддержку.</p>
</a>
</div>
<div className="mt-12 text-center">
<a className="inline-block px-6 py-2.5 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="#">
                    Открыть базу знаний
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200/60" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Часто задаваемые вопросы</h2>
<div className="space-y-4">
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Что такое Wanttopay?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Wanttopay — это сервис виртуальных карт и цифровых платежей в Telegram, который помогает оплачивать сервисы, подписки, онлайн-покупки, travel-расходы и gift cards.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Чем Wanttopay отличается от обычного банковского приложения?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Wanttopay позволяет создавать карты под разные задачи, удобнее разделять цифровые расходы и управлять ими в одном более понятном интерфейсе.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Зачем нужна верификация KYC?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        KYC нужен для подтверждения личности, безопасного доступа к функциям сервиса и устойчивой работы платёжной инфраструктуры.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Что такое внутренний баланс?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Это инструмент внутри Wanttopay, который помогает хранить средства, распределять их между картами и пополнять карты под конкретные покупки и сценарии.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Какую карту выбрать?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Это зависит от вашей задачи: разовая покупка, регулярные сервисы, поездки, активное использование или gift card под конкретную платформу.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Можно ли использовать Wanttopay в поездках?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Да. Для travel-расходов, бронирований и офлайн-оплаты за границей подойдут карты, рассчитанные на более широкий сценарий использования.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Можно ли пополнить баланс криптовалютой?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Да. Wanttopay поддерживает формат, при котором криптовалюта становится удобным входом в обычные онлайн-платежи.
                    </div>
</details>
<details className="group border border-slate-200/60 rounded-2xl bg-white shadow-sm">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-base text-slate-900 select-none">
                        Что делать, если платёж не проходит?
                        <span className="text-slate-400 group-open:rotate-45 transition-transform duration-200">
<iconify-icon className="text-xl" icon="solar:add-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-200/60 pt-4">
                        Проверьте параметры оплаты, биллинг-адрес и выбранную карту. Если вопрос остаётся, поддержка поможет разобраться по вашему сценарию.
                    </div>
</details>
</div>
<div className="mt-10 text-center">
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="#">Смотреть все вопросы</a>
</div>
</div>
</section>


<section className="overflow-hidden text-center bg-white border-slate-200/60 border-b pt-32 pb-32 relative">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                Выберите карту Wanttopay под свой сценарий
            </h2>
<p className="text-lg text-slate-500 mb-10">
                Подписки, онлайн-сервисы, покупки, поездки, gift cards и управление расходами — в одном сервисе внутри Telegram.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-2xl text-base font-medium hover:bg-blue-700 transition-all shadow-sm" href="#">
                    Выпустить карту
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-2xl text-base font-medium hover:bg-slate-50 transition-all shadow-sm" href="#comparison">
                    Сравнить карты
                </a>
</div>
</div>
</section><section className="text-white bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight">Зарабатывайте вместе с Wanttopay</h2>
<p className="mt-4 text-base text-slate-400">Получайте выгоду от рекомендаций или работайте с Wanttopay как партнёр.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-10 rounded-3xl bg-white/5 border border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-3">Реферальная программа</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
                        Приглашайте друзей в Wanttopay и получайте бонусы на внутренний баланс. Это удобный способ снизить собственные расходы внутри сервиса и делиться полезным продуктом с теми, кому он тоже подходит.
                    </p>
<a className="inline-block px-6 py-2.5 bg-white/10 text-white rounded-xl text-sm font-medium hover:bg-white/20 transition-colors" href="#">
                        Пригласить друга
                    </a>
</div>
<div className="p-10 rounded-3xl bg-white/5 border border-white/10">
<h3 className="text-xl font-medium tracking-tight mb-3">Партнёрская программа</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
                        Подходит тем, у кого есть аудитория, площадки, каналы или другие места для размещения контента. Если вы умеете рекомендовать полезные цифровые продукты своей аудитории, Wanttopay можно интегрировать как партнёрский сервис.
                    </p>
<a className="inline-block px-6 py-2.5 bg-white text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-100 transition-colors" href="#">
                        Стать партнёром
                    </a>
</div>
</div>
</div>
</section><section className="border-y bg-white border-slate-200/60 pt-24 pb-24" id="exchange">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 mb-6">
                    WantToPay Exchange
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Покупайте и продавайте USDT через лицензированный сервис обмена
                </h2>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                    WantToPay Exchange — отдельный сервис в экосистеме Wanttopay для покупки и продажи USDT без рисков P2P и неформальных посредников.
                </p>
<ul className="space-y-3 text-sm text-slate-600 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Для физических и юридических лиц</li>
<li className="flex items-start gap-3"><iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Среднее время обмена — от 15 минут</li>
<li className="flex items-start gap-3"><iconify-icon className="text-blue-600 mt-0.5 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon> Работаем по будням с 09:00 до 18:00 (МСК)</li>
</ul>
<a className="inline-flex px-8 py-3.5 bg-blue-600 text-white rounded-2xl text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#">
                    Начать обмен в Telegram-боте
                </a>
</div>
<div className="lg:w-1/2 w-full">
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/60 shadow-sm">
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        Если вам нужен обмен USDT и рублей, вы можете воспользоваться отдельным сервисом WantToPay Exchange в Telegram. Это самостоятельный продукт для пользователей, которым важны понятные условия сделки, сопровождение и работа через лицензированного оператора виртуальных активов.
                    </p>
<div className="text-sm font-semibold text-slate-900 mb-4">Через WantToPay Exchange можно:</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span> купить USDT за рубли;</li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span> продать USDT и получить рубли на банковский счёт;</li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span> провести обмен через лицензированный сервис, а не через случайных контрагентов;</li>
<li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span> избежать типовых рисков P2P-сделок.</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-slate-950 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">

<div className="col-span-2 md:col-span-3 lg:col-span-1">
<div className="text-lg font-semibold tracking-tight text-white">WANTTOPAY</div>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-5">Навигация</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Тарифы и сравнение</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Карты</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors pl-3 block" href="#">Prepaid</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors pl-3 block" href="#">Easy</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors pl-3 block" href="#">Smart</a></li>
<li><a className="text-sm text-slate-500 hover:text-white transition-colors pl-3 block" href="#">Pro</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Где можно платить</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-5">Партнёрам</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Приглашай друзей</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Инфлюенсерам</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Партнёрская программа</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Обмен криптовалюты</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-5">Помощь</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Инструкции</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Служба поддержки</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white mb-5">Полезное</h3>
<ul className="space-y-3.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Блог</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
<div className="text-xs text-slate-500 leading-relaxed max-w-xl">
<p className="mb-1">WTP Technology Limited (HK). Incorporation number: 76394774.</p>
<p>Unit 1603, 16th Floor,The L. Plaza, 367 - 375 Queen's Road Central, Sheung Wan, Hong Kong</p>
</div>
<div className="flex flex-wrap gap-4 sm:gap-8">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Пользовательское соглашение</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
