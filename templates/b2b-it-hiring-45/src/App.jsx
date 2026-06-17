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
      

<aside className="w-64 border-r hidden md:flex flex-col z-20 bg-black border-slate-800">

<div className="h-16 flex items-center px-6 border-b border-slate-900">
<div className="flex items-center gap-2 text-blue-400">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tighter text-slate-100">Gigly</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">Рабочее пространство</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md group text-slate-100 bg-slate-900" href="#">
<iconify-icon className="text-blue-400" icon="solar:widget-2-linear" width="20"></iconify-icon>
                Дашборд
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md transition-colors group hover:text-slate-100 hover:bg-slate-950" href="#">
<iconify-icon className="group-hover:text-slate-700" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
                Мои задачи
                <span className="ml-auto py-0.5 px-2 rounded-full text-xs font-medium bg-blue-950 text-blue-400">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md transition-colors group hover:text-slate-100 hover:bg-slate-950" href="#">
<iconify-icon className="group-hover:text-slate-700" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Разработчики
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md transition-colors group hover:text-slate-100 hover:bg-slate-950" href="#">
<iconify-icon className="group-hover:text-slate-700" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
                Сообщения
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium uppercase tracking-wider text-slate-600">Финансы &amp; Юридические</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md transition-colors group hover:text-slate-100 hover:bg-slate-950" href="#">
<iconify-icon className="group-hover:text-slate-700" icon="solar:wallet-money-linear" width="20"></iconify-icon>
                Escrow Счет
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md transition-colors group hover:text-slate-100 hover:bg-slate-950" href="#">
<iconify-icon className="group-hover:text-slate-700" icon="solar:document-add-linear" width="20"></iconify-icon>
                Документы (ЭДО)
            </a>
</nav>

<div className="p-4 border-t border-slate-900">
<button className="flex items-center gap-3 w-full p-2 rounded-md transition-colors text-left hover:bg-slate-950">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr to-violet-500 flex items-center justify-center font-medium text-xs text-black from-blue-500">
                    TK
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-slate-100">TechKorp LLC</p>
<p className="text-xs text-slate-500 truncate">Заказчик (B2B)</p>
</div>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-slate-950">

<header className="glass-panel flex sm:px-8 sticky h-16 z-10 border-slate-800 border-b pr-4 pl-4 top-0 items-center justify-between">

<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex flex-col">
<h1 className="text-base font-semibold tracking-tight text-slate-100">Дашборд проектов</h1>
<span className="text-xs text-slate-500">Обновлено 2 минуты назад</span>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium border rounded-md transition-all shadow-sm text-slate-400 bg-black border-slate-800 hover:bg-slate-900 hover:text-slate-200">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    Создать задачу
                </button>
<div className="h-6 w-px hidden sm:block bg-slate-800"></div>
<button className="relative p-2 text-slate-500 transition-colors hover:text-slate-300">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto sm:p-8 pt-4 pr-4 pb-4 pl-4">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 rounded-xl border shadow-sm bg-black border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-blue-950 text-blue-400">
<iconify-icon icon="solar:code-file-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-full text-green-400 bg-green-950/30">+2 активных</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-100">5</div>
<div className="text-xs text-slate-500 mt-1">Активные задачи</div>
</div>

<div className="p-5 rounded-xl border shadow-sm bg-black border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-amber-950 text-amber-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">В холде</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-100">₽ 145,000</div>
<div className="text-xs text-slate-500 mt-1">Заморожено в Escrow</div>
</div>

<div className="p-5 rounded-xl border shadow-sm bg-black border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-green-950 text-green-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-100">12</div>
<div className="text-xs text-slate-500 mt-1">Откликов на рассмотрении</div>
</div>

<div className="flex flex-col justify-between p-5 rounded-xl border shadow-sm cursor-pointer group transition-colors bg-slate-100 text-black border-slate-200 hover:bg-slate-200">
<div className="">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-blue-600" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-sm font-medium text-blue-800">AI Assessment</span>
</div>
<p className="text-sm leading-snug text-slate-700">Проверьте навыки кандидатов автоматически.</p>
</div>
<div className="mt-4 flex items-center text-xs font-medium text-black">
                            Настроить тест <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-slate-100">В работе и Поиск</h2>
<button className="text-xs font-medium text-blue-400 hover:text-blue-300">Все задачи</button>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden group transition-colors bg-black border-slate-800 hover:border-blue-900/50">
<div className="p-6">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-950/50"></div>
</div>
<div>
<h3 className="text-base font-medium text-slate-100 transition-colors group-hover:text-blue-400">Интеграция платежного шлюза ЮKassa</h3>
<p className="text-sm text-slate-500 mt-1">Backend • Node.js • NestJS</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md text-xs font-medium border bg-green-950/30 text-green-400 border-green-900/50">В работе</span>
</div>
<div className="mt-6 flex items-center justify-between border-t border-slate-900 pt-4">
<div className="flex items-center gap-2">
<img alt="Dev" className="w-6 h-6 rounded-full border border-black shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<span className="text-xs font-medium text-slate-300">Алексей М. (Senior)</span>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Дедлайн: 24 Окт</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wallet-linear"></iconify-icon> Escrow: ₽ 85,000</span>
</div>
</div>
</div>
<div className="px-6 py-2 border-t border-slate-900 bg-slate-950 flex items-center justify-between">
<span className="text-xs text-slate-500">Спринт 2/4</span>
<div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-1/2"></div>
</div>
</div>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden group transition-colors bg-black border-slate-800 hover:border-blue-900/50">
<div className="p-6">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="mt-1">
<div className="w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-950/50"></div>
</div>
<div>
<h3 className="text-base font-medium text-slate-100 transition-colors group-hover:text-blue-400">Разработка React компонентов (UI Kit)</h3>
<p className="text-sm text-slate-500 mt-1">Frontend • React • Tailwind • TypeScript</p>
</div>
</div>
<span className="px-2.5 py-1 rounded-md text-xs font-medium border bg-amber-950/30 text-amber-400 border-amber-900/50">Сбор откликов</span>
</div>
<div className="mt-6">
<div className="flex items-center justify-between text-xs text-slate-500 mb-2">
<span>Бюджет: <span className="font-medium text-slate-100">до ₽ 120,000</span></span>
<span>Откликов: 8</span>
</div>

<div className="space-y-3 mt-4">

<div className="flex items-center justify-between p-3 rounded-lg border border-slate-900 bg-slate-950/50 hover:bg-slate-900 transition-all cursor-pointer hover:shadow-sm hover:border-blue-900">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Dev" className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=8"/>
<div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
<iconify-icon className="text-green-500 text-xs" icon="solar:verified-check-bold"></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center gap-2">
<p className="text-sm font-medium text-slate-100">Дмитрий К.</p>
<span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Middle+</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<div className="flex text-[10px] text-amber-600">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-600">4.9 (24 проекта)</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-100">₽ 110,000</p>
<p className="text-xs text-green-400">Тест пройден 98%</p>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-slate-900 bg-slate-950/50 hover:bg-slate-900 transition-all cursor-pointer hover:shadow-sm hover:border-blue-900">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Dev" className="w-9 h-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=22"/>
</div>
<div>
<div className="flex items-center gap-2">
<p className="text-sm font-medium text-slate-100">Мария С.</p>
<span className="text-[10px] uppercase tracking-wide px-1.5 py-0.5 rounded bg-blue-950 text-blue-400">Senior</span>
</div>
<div className="flex items-center gap-2 mt-0.5">
<div className="flex text-[10px] text-amber-600">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-600">4.6 (12 проектов)</span>
</div>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-slate-100">₽ 125,000</p>
<p className="text-xs text-slate-600">Портфолио проверено</p>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 text-xs font-medium rounded-lg border border-slate-800 text-slate-400 bg-slate-950 hover:bg-slate-900 transition-colors">
                                        Показать все 8 откликов
                                    </button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="relative p-6 rounded-xl shadow-md overflow-hidden text-black bg-blue-400">

<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full blur-2xl opacity-50 bg-blue-500"></div>
<h3 className="relative z-10 text-base font-semibold tracking-tight">Новая задача</h3>
<p className="relative z-10 mt-1 mb-4 text-xs text-blue-900">Опишите задачу, выберите стек и начните работу за 15 минут.</p>
<form className="relative z-10 space-y-3">
<div className="">
<label className="text-[10px] uppercase font-semibold tracking-wider text-blue-800">Название</label>
<input className="w-full px-3 py-2 text-sm text-black border rounded-md bg-white/20 focus:outline-none focus:ring-1 focus:ring-white border-blue-500 placeholder-blue-700/50" placeholder="Напр: API доработка" type="text"/>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="">
<label className="text-[10px] uppercase font-semibold tracking-wider text-blue-800">Стек</label>
<div className="relative">
<select className="w-full px-3 py-2 text-sm text-black border rounded-md appearance-none bg-white/20 focus:outline-none border-blue-500">
<option>Python</option>
<option>JS/TS</option>
<option>Go</option>
</select>
<iconify-icon className="absolute right-2 top-2.5 pointer-events-none text-blue-800" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="text-[10px] uppercase font-semibold tracking-wider text-blue-800">Бюджет</label>
<input className="w-full px-3 py-2 text-sm text-black border rounded-md bg-white/20 focus:outline-none border-blue-500 placeholder-blue-700/50" placeholder="₽" type="text"/>
</div>
</div>
<button className="w-full py-2 mt-2 text-sm font-medium transition-colors bg-black rounded-md shadow-sm text-blue-400 hover:bg-blue-950" type="button">
                                    Создать черновик
                                </button>
</form>
</div>

<div className="p-5 rounded-xl border shadow-sm bg-black border-slate-800">
<h3 className="mb-4 text-sm font-semibold text-slate-100">Рекомендуемые специалисты</h3>
<div className="space-y-4">
<div className="flex items-start gap-3 group cursor-pointer">
<img className="w-8 h-8 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=44"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-100 truncate transition-colors group-hover:text-blue-400">Иван П.</p>
<p className="text-xs text-slate-500 truncate">DevOps • Docker • K8s</p>
</div>
<div className="text-xs font-medium text-slate-100">₽2.5к/ч</div>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<img className="w-8 h-8 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=31"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-100 truncate transition-colors group-hover:text-blue-400">Елена В.</p>
<p className="text-xs text-slate-500 truncate">UX/UI • Figma • Design System</p>
</div>
<div className="text-xs font-medium text-slate-100">₽1.8к/ч</div>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<img className="w-8 h-8 rounded-full object-cover bg-slate-900" src="https://i.pravatar.cc/150?u=12"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-100 truncate transition-colors group-hover:text-blue-400">Сергей Б.</p>
<p className="text-xs text-slate-500 truncate">Fullstack • Laravel • Vue</p>
</div>
<div className="text-xs font-medium text-slate-100">₽2.2к/ч</div>
</div>
</div>
<button className="w-full mt-4 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors text-center">
                                Смотреть всех
                            </button>
</div>

<div className="flex items-center gap-3 p-4 rounded-lg border border-slate-900 bg-slate-950">
<iconify-icon className="text-2xl text-slate-600" icon="solar:shield-keyhole-linear"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-300">Безопасная сделка</p>
<p className="text-[10px] leading-tight text-slate-600">Оплата замораживается до принятия работы. Комиссия 10%.</p>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-12 py-6 border-t border-slate-800 max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 Gigly Platform LLC. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Политика конфиденциальности (152-ФЗ)</a>
<a className="hover:text-slate-400" href="#">Условия использования</a>
<a className="hover:text-slate-400" href="#">Поддержка</a>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
