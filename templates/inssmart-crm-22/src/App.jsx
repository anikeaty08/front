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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="text-xl font-semibold tracking-tighter uppercase">Inssmart</span>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<span>Главная</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span>Полисы</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span>Клиенты</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50/50 text-blue-700 font-medium rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
<span>Моя сеть</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<span>Выплаты</span>
</a>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-2 py-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300 flex items-center justify-center text-xs font-medium text-slate-600">
                    АИ
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Алексей Иванов</p>
<p className="text-xs text-slate-500 truncate">Pro-агент</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 md:px-10 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">Моя сеть</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-4">
<span className="text-xs text-slate-500">Заработано с сети</span>
<span className="font-semibold text-emerald-600 tracking-tight">345 000 ₽</span>
</div>
<button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-10 pb-20">
<div className="max-w-5xl mx-auto space-y-10">

<section>
<h2 className="text-lg font-medium tracking-tight mb-4">Приглашения</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden group hover:border-blue-200 hover:shadow-md transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-blue-600" height="120" icon="solar:users-group-two-rounded-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-3">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                                        Новая MLM программа
                                    </div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Пригласить агента</h3>
<p className="text-emerald-600 font-medium tracking-tight mb-3">Получите до 120 000 ₽ за партнера</p>
<p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                                    Мы перешли на систему фиксированных бонусов. Вы получаете выплату за каждый новый грейд, которого достигает приглашенный вами агент.
                                </p>
<div className="mt-auto space-y-3">
<div className="flex items-center p-1.5 bg-slate-50 border border-slate-200 rounded-lg">
<input className="bg-transparent border-none outline-none text-slate-600 text-sm px-3 w-full truncate cursor-default" readonly="" type="text" value="inssmart.ru/ref/agent/AI1928"/>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium shadow-sm flex-shrink-0">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
                                            Копировать
                                        </button>
</div>
<button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm shadow-blue-600/20 flex items-center justify-center gap-2">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
                                        Отправить приглашение
                                    </button>
</div>
</div>
</div>

<div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-hidden group hover:border-emerald-200 hover:shadow-md transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-600" height="120" icon="solar:user-heart-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-3">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                                        Рост удержания
                                    </div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Пригласить клиента</h3>
<p className="text-slate-700 font-medium tracking-tight mb-3">Повысьте % пролонгации и кросс-продаж</p>
<p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">
                                    Дайте клиенту доступ в удобное приложение. Вы получаете комиссию с его покупок, а он — баллы лояльности и удобный сервис. Если он приведет друга, друг станет вашим клиентом.
                                </p>
<div className="mt-auto space-y-3">
<div className="flex items-center p-1.5 bg-slate-50 border border-slate-200 rounded-lg">
<input className="bg-transparent border-none outline-none text-slate-600 text-sm px-3 w-full truncate cursor-default" readonly="" type="text" value="inssmart.ru/app/c/AI1928"/>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors font-medium shadow-sm flex-shrink-0">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
                                            Копировать
                                        </button>
</div>
<button className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:smartphone-update-linear" strokeWidth="1.5"></iconify-icon>
                                        Поделиться приложением
                                    </button>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight text-slate-900">Развитие партнеров</h2>
<p className="text-sm text-slate-500 mt-1">Отслеживайте прогресс агентов по грейдам и ожидаемые бонусы.</p>
</div>

<div className="flex items-center gap-2 self-start sm:self-auto">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:minimalistic-magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all w-full sm:w-48 bg-white" placeholder="Поиск агента..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 bg-white transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Фильтр</span>
</button>
</div>
</div>

<div className="space-y-3">

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden">

<div className="flex items-center gap-4 md:w-1/4 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium">
                                    МС
                                </div>
<div>
<h4 className="font-medium text-slate-900">Михаил Смирнов</h4>
<p className="text-xs text-slate-500 mt-0.5">Присоед. 12 окт 2023</p>
</div>
</div>

<div className="flex-1 space-y-2.5">
<div className="flex items-end justify-between text-xs">
<div className="flex flex-col gap-1">
<span className="text-slate-500">Текущий грейд: <strong className="text-slate-900 font-medium">Бронза</strong></span>
<span className="text-slate-500">Доход: 35 000 ₽ / 50 000 ₽</span>
</div>
<div className="text-right flex flex-col gap-1 items-end">
<span className="text-slate-500">Цель: <strong className="text-slate-900 font-medium">Серебро</strong></span>
<span className="flex items-center gap-1 text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded font-medium">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                            Осталось 14 дней
                                        </span>
</div>
</div>
<div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">

<div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500" style={{width: '70%'}}></div>
</div>
</div>

<div className="md:w-48 flex-shrink-0 md:text-right flex flex-row md:flex-col items-center md:items-end justify-between pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
<span className="text-xs text-slate-500 mb-1">Бонус за достижение</span>
<span className="text-base font-semibold text-emerald-600 tracking-tight">+ 15 000 ₽</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden">
<div className="flex items-center gap-4 md:w-1/4 flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-medium">
                                    ЕК
                                </div>
<div>
<h4 className="font-medium text-slate-900">Елена Ковалева</h4>
<p className="text-xs text-slate-500 mt-0.5">Присоед. 2 дн. назад</p>
</div>
</div>
<div className="flex-1 space-y-2.5">
<div className="flex items-end justify-between text-xs">
<div className="flex flex-col gap-1">
<span className="text-slate-500">Текущий грейд: <strong className="text-slate-900 font-medium">Новичок</strong></span>
<span className="text-slate-500">Оформлено: 0 / 2 полиса</span>
</div>
<div className="text-right flex flex-col gap-1 items-end">
<span className="text-slate-500">Квалификация: <strong className="text-slate-900 font-medium">Старт</strong></span>
<span className="flex items-center gap-1 text-slate-500 px-1.5 py-0.5 rounded font-medium">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                            Осталось 28 дней
                                        </span>
</div>
</div>
<div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-slate-300 rounded-full transition-all duration-500" style={{width: '5%'}}></div>
</div>
</div>
<div className="md:w-48 flex-shrink-0 md:text-right flex flex-row md:flex-col items-center md:items-end justify-between pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
<span className="text-xs text-slate-500 mb-1">Бонус за старт</span>
<span className="text-base font-semibold text-emerald-600 tracking-tight">+ 3 000 ₽</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-colors flex flex-col md:flex-row gap-6 md:items-center relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"></div>
<div className="flex items-center gap-4 md:w-1/4 flex-shrink-0 pl-2">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-medium relative">
                                    ДВ
                                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5 border-2 border-white">
<iconify-icon className="text-xs" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900">Дмитрий Волков</h4>
<p className="text-xs text-slate-500 mt-0.5">Присоед. 15 авг 2023</p>
</div>
</div>
<div className="flex-1 space-y-2.5">
<div className="flex items-end justify-between text-xs">
<div className="flex flex-col gap-1">
<span className="text-slate-500">Текущий грейд: <strong className="text-slate-900 font-medium">Золото</strong></span>
<span className="text-slate-500">Грейд достигнут</span>
</div>
<div className="text-right flex flex-col gap-1 items-end">
<span className="text-slate-500">Цель: <strong className="text-slate-900 font-medium">Платина</strong></span>
<span className="flex items-center gap-1 text-slate-400 px-1.5 py-0.5 rounded font-medium">
                                            Начало нового периода
                                        </span>
</div>
</div>
<div className="relative w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full transition-all duration-500" style={{width: '100%'}}></div>
</div>
</div>
<div className="md:w-48 flex-shrink-0 md:text-right flex flex-row md:flex-col items-center md:items-end justify-between pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
<span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md font-medium mb-1">Выплачено</span>
<span className="text-base font-semibold text-slate-400 tracking-tight line-through">40 000 ₽</span>
</div>
</div>
</div>
<div className="mt-6 text-center">
<button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                            Показать всю структуру
                            <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
