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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="relative z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-slate-900 font-semibold tracking-tighter text-xl uppercase flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-sm">W</div>
                WantToPay Exchange
            </a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#">Главная</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#offer">Обмен USDT ↔ RUB</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#how-it-works">Как проходит обмен</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#docs">Документы</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#contacts">Контакты</a>
</div>

<a className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-sm shadow-blue-600/20" href="https://t.me/WanttopayExchangeBot" target="_blank">
                Начать обмен
            </a>
</div>
</nav>
<main className="relative z-10">

<section className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-700">
<iconify-icon className="text-blue-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        Лицензированный оператор
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight">
                        Лицензированный обмен криптовалют
                    </h1>
<p className="text-lg text-slate-600 leading-relaxed">
                        Покупайте и продавайте USDT — легально, безопасно и без рисков P2P. Все сделки проходят через Telegram-бота.
                    </p>
<div className="flex flex-col gap-3 text-sm text-slate-700 pt-2">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Для физических и юридических лиц</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Среднее время обмена — от 15 минут</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-500 text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Часы работы: пн–пт с 09:00 до 18:00 МСК</span>
</div>
</div>
<div className="pt-6">
<a className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-sm font-medium transition-colors w-full sm:w-auto shadow-lg shadow-blue-600/20" href="https://t.me/WanttopayExchangeBot">
                            Начать обмен
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-teal-50 rounded-[2.5rem] blur-xl opacity-50"></div>
<div className="relative bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-8">
<div className="flex items-center justify-between mb-8">
<span className="text-sm font-medium text-slate-500 uppercase tracking-tight">Пример обмена</span>
<span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Online
                            </span>
</div>
<div className="space-y-6">

<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Вы отдаете</div>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">100 000</span>
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-semibold">₽</div>
<span className="text-sm font-medium text-slate-700">RUB</span>
</div>
</div>
</div>

<div className="flex justify-center -my-3 relative z-10">
<div className="bg-white border border-slate-200 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 shadow-sm">
<iconify-icon icon="solar:transfer-vertical-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
<div className="text-xs text-slate-500 mb-1">Вы получаете</div>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">~ 985.20</span>
<div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
<div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-[10px] font-semibold">₮</div>
<span className="text-sm font-medium text-slate-700">USDT</span>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Статус:</span>
<span className="text-slate-900 font-medium">Заявка обрабатывается</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Среднее время:</span>
<span className="text-slate-900 font-medium">от 15 минут</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-20" id="offer">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                        Покупайте и продавайте USDT без рисков
                    </h2>
<p className="text-slate-600 text-base">
                        В WantToPay Exchange вы можете:
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Купить USDT за рубли</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Обменять средства через лицензированный сервис, абсолютно легально и без посредников.
                        </p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group hover:border-blue-300 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6 text-blue-600">
<iconify-icon className="text-2xl" icon="solar:card-transfer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Продать USDT</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                            Получить рубли на банковский счёт и избежать рисков при P2P-обмене с неизвестными контрагентами.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="benefits">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
                Почему выбирают WantToPay Exchange
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-slate-200 shadow-sm shadow-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600 text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Выгодные условия</h3>
<p className="text-slate-600 text-sm leading-relaxed">Минимальная комиссия и близость к кросс-курсу.</p>
</div>

<div className="bg-white border border-slate-200 shadow-sm shadow-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600 text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Безопасная сделка</h3>
<p className="text-slate-600 text-sm leading-relaxed">Работа с лицензированным сервисом обмена.</p>
</div>

<div className="bg-white border border-slate-200 shadow-sm shadow-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600 text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Гарантия исполнения</h3>
<p className="text-slate-600 text-sm leading-relaxed">Обмен проходит по заранее согласованным условиям.</p>
</div>

<div className="bg-white border border-slate-200 shadow-sm shadow-slate-100 rounded-3xl p-8 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600 text-xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">Поддержка на всех этапах</h3>
<p className="text-slate-600 text-sm leading-relaxed">Оператор сервиса сопровождает сделку до полного завершения.</p>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-24" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">
                    Как проходит обмен
                </h2>
<div className="relative pl-4 md:pl-0">

<div className="absolute left-[27px] md:left-1/2 md:-ml-px top-2 bottom-2 w-px bg-slate-200"></div>
<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Оставьте заявку</h3>
<p className="text-slate-600 text-sm">Выберите направление обмена и укажите сумму.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-[4px] border-slate-200 group-hover:border-blue-500 transition-colors z-10"></div>
<div className="md:hidden pl-12">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Оставьте заявку</h3>
<p className="text-slate-600 text-sm">Выберите направление обмена и укажите сумму.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-[4px] border-slate-200 group-hover:border-blue-500 transition-colors z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Узнайте условия</h3>
<p className="text-slate-600 text-sm">Мы покажем актуальный курс и рассчитаем условия сделки.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Пройдите верификацию</h3>
<p className="text-slate-600 text-sm">Для первого обмена потребуется паспорт.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-[4px] border-slate-200 group-hover:border-blue-500 transition-colors z-10"></div>
<div className="md:hidden pl-12">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Пройдите верификацию</h3>
<p className="text-slate-600 text-sm">Для первого обмена потребуется паспорт.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-[4px] border-slate-200 group-hover:border-blue-500 transition-colors z-10"></div>
<div className="md:w-1/2 md:pl-12 pl-12">
<h3 className="text-lg font-semibold text-slate-900 mb-1 tracking-tight">Оплатите заявку</h3>
<p className="text-slate-600 text-sm">После подтверждения сделки отправим реквизиты для перевода.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
<h3 className="text-lg font-semibold text-blue-600 mb-1 tracking-tight">Получите средства</h3>
<p className="text-slate-600 text-sm">Средства поступят на указанные вами реквизиты.</p>
</div>
<div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-[4px] border-blue-100 shadow-[0_0_15px_rgba(37,99,235,0.4)] z-10"></div>
<div className="md:hidden pl-12">
<h3 className="text-lg font-semibold text-blue-600 mb-1 tracking-tight">Получите средства</h3>
<p className="text-slate-600 text-sm">Средства поступят на указанные вами реквизиты.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="docs">
<div className="bg-slate-100/50 rounded-[2.5rem] border border-slate-200 p-8 md:p-12">
<div className="flex flex-col lg:flex-row gap-12 items-start">
<div className="lg:w-1/3">
<div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:shield-bold"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                            Легальный и безопасный обмен
                        </h2>
<p className="text-slate-600 text-sm leading-relaxed mb-4">
                            WantToPay Exchange соблюдает законодательство Кыргызской Республики.
                        </p>
<ul className="space-y-2.5 text-sm text-slate-700">
<li className="flex items-start gap-2">
<span className="text-blue-500">—</span> Работаем по лицензии
                            </li>
<li className="flex items-start gap-2">
<span className="text-blue-500">—</span> Все условия указываем в публичной оферте
                            </li>
<li className="flex items-start gap-2">
<span className="text-blue-500">—</span> Проводим обмен по прозрачным правилам
                            </li>
<li className="flex items-start gap-2">
<span className="text-blue-500">—</span> Сообщаем о возможных рисках и просим подписать согласие
                            </li>
</ul>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
<a className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Лицензия</span>
</a>
<a className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Публичная оферта</span>
</a>
<a className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Правила обмена виртуальных активов</span>
</a>
<a className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm transition-all group" href="#">
<iconify-icon className="text-blue-500 text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Согласие с рисками операций</span>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-12 mb-12">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">
                    Почему это безопаснее P2P-обмена
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-blue-50/50 border border-blue-100 rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
<h3 className="text-xl font-semibold tracking-tight text-blue-900 mb-8 flex items-center gap-2">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:check-circle-bold"></iconify-icon>
                        С WantToPay Exchange:
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-slate-700 text-sm">официальный сервис</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-slate-700 text-sm">прозрачные условия</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-slate-700 text-sm">нет риска столкнуться с мошенником</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="2"></iconify-icon>
<span className="text-slate-700 text-sm">банковский перевод от организации</span>
</li>
</ul>
</div>

<div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 md:p-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-800 mb-8 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                        При P2P-обмене:
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-slate-600 text-sm">неизвестный контрагент</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-slate-600 text-sm">риск отмены или блокировки сделки</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-slate-600 text-sm">отсутствие гарантий</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-slate-600 text-sm">переводы от физических лиц</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200 py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
                    Кому подойдёт WantToPay Exchange
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
<iconify-icon className="text-blue-500 text-2xl mb-4" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Частным лицам</h3>
<p className="text-xs text-slate-600 leading-relaxed">Для легальной покупки и продажи USDT.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
<iconify-icon className="text-blue-500 text-2xl mb-4" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Фрилансерам и digital-специалистам</h3>
<p className="text-xs text-slate-600 leading-relaxed">Для вывода оплаты из USDT в рубли и обратно.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
<iconify-icon className="text-blue-500 text-2xl mb-4" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Тем, кто регулярно работает с цифровыми активами</h3>
<p className="text-xs text-slate-600 leading-relaxed">Для быстрого и прозрачного обмена без серых схем.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50">
<iconify-icon className="text-blue-500 text-2xl mb-4" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Юридическим лицам</h3>
<p className="text-xs text-slate-600 leading-relaxed">Для компаний, которым нужен официальный сервис для работы с криптовалютами.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                Быстрый обмен с сопровождением
            </h2>
<p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
                Сделка проходит автоматически — без ожидания оператора. При этом наша команда остаётся на связи и контролирует процесс до полного завершения сделки.
            </p>
<a className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-colors shadow-md" href="https://t.me/WanttopayExchangeBot" target="_blank">
                Приступить к обмену
            </a>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">
                    Частые вопросы
                </h2>
<div className="space-y-2">
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Сколько занимает обмен?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Обычно около 15 минут в рабочее время после подтверждения оплаты.
                        </div>
</details>
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Какие документы нужны для обмена?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Для первого обмена нужны паспорт и селфи с паспортом для прохождения идентификации.
                        </div>
</details>
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Нужно ли проходить верификацию каждый раз?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Нет, только при первом обмене или при необходимости обновления данных.
                        </div>
</details>
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Когда фиксируется курс?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Курс фиксируется в момент подтверждения заявки перед оплатой.
                        </div>
</details>
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Можно ли обменять крупную сумму?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Да, мы можем рассмотреть обмен на крупную сумму. Условия зависят от направления обмена, суммы и требований проверки.
                        </div>
</details>
<details className="group border-b border-slate-200 py-4">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-slate-800 hover:text-blue-600 transition-colors">
<span>Нужно ли платить налог в России?</span>
<span className="transition-transform duration-200 group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed pb-2">
                            Налоговые обязательства зависят от вашего статуса и законодательства вашей страны. При необходимости рекомендуем проконсультироваться с налоговым специалистом.
                        </div>
</details>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 pb-32">
<div className="bg-blue-600 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-xl shadow-blue-900/10">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KSIvPjwvc3ZnPg==')] opacity-50"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 relative z-10">
                    Обменивайте USDT и рубли без стресса
                </h2>
<p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 relative z-10">
                    Если вам нужен надёжный способ обмена без рисков P2P и неформальных посредников, вы его нашли.
                </p>
<a className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 rounded-full text-sm font-semibold transition-colors relative z-10 shadow-lg" href="https://t.me/WanttopayExchangeBot">
                    Начать обмен в Telegram-боте
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white pt-16 pb-8" id="contacts">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

<div className="lg:col-span-2">
<div className="text-slate-900 font-semibold tracking-tighter text-lg uppercase mb-4 flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center text-[10px]">W</div>
                        WantToPay Exchange
                    </div>
<p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                        WantToPay Exchange — сервис безопасного обмена USDT и рублей через лицензированного оператора виртуальных активов.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Навигация</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Главная</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#offer">Обмен USDT ↔ RUB</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#how-it-works">Как проходит обмен</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#docs">Документы</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#contacts">Контакты</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Документы</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Лицензия</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Публичная оферта</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Правила обмена виртуальных активов</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Согласие с рисками операций</a></li>
<li><a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Политика конфиденциальности</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Контакты</h4>
<ul className="space-y-3">
<li className="text-xs text-slate-500 leading-relaxed">
                            Служба поддержки:<br/>
                            ежедневно с 09:00 до 18:00 МСК
                        </li>
<li>
<a className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-1.5 mt-2" href="https://t.me/WanttopayExchangeBot" target="_blank">
<iconify-icon className="text-base" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
                                Telegram
                            </a>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
<p className="text-xs text-slate-400 whitespace-nowrap">
                    © 2026 WantToPay Exchange. Все права защищены.
                </p>
<p className="text-[11px] text-slate-400 max-w-3xl leading-relaxed lg:text-right">
                    Операции с виртуальными активами связаны с финансовыми рисками. Перед совершением обмена ознакомьтесь с условиями сервиса.
                </p>
</div>
</div>
</footer>

    </>
  );
}
