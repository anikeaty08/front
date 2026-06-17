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
      
<div className="min-h-screen flex">

<aside className="w-64 bg-zinc-900 text-white flex-shrink-0 hidden lg:flex flex-col">
<div className="p-6 border-b border-zinc-800">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
<span className="iconify text-zinc-900" data-icon="lucide:sun" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-base font-semibold tracking-tight">PV Системи</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-zinc-800 rounded-lg text-white text-sm font-medium" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Табло
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:folder-kanban" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Проекти
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Клиенти
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:package" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Оборудване
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:calendar" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    График
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Документи
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Отчети
                </a>
</nav>
<div className="p-4 border-t border-zinc-800">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Настройки
                </a>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="bg-white border-b border-zinc-200 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 hover:bg-zinc-100 rounded-lg">
<span className="iconify text-zinc-600" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div>
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight">Табло за управление</h1>
<p className="text-sm text-zinc-500">Преглед на всички PV проекти</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden md:block">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="pl-9 pr-4 py-2 bg-zinc-100 border-0 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all w-64" placeholder="Търсене..." type="text"/>
</div>
<button className="p-2 hover:bg-zinc-100 rounded-lg relative">
<span className="iconify text-zinc-600" data-icon="lucide:bell" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-medium text-zinc-900">
                            ИП
                        </div>
</div>
</div>
</header>

<main className="flex-1 p-6 overflow-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-zinc-500">Активни проекти</span>
<div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
<span className="iconify text-amber-600" data-icon="lucide:folder-open" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">24</div>
<div className="text-xs text-green-600 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12" style={{strokeWidth: '1.5'}}></span>
                            +3 този месец
                        </div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-zinc-500">Обща мощност</span>
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<span className="iconify text-blue-600" data-icon="lucide:zap" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">1.2 MW</div>
<div className="text-xs text-zinc-500 mt-1">Инсталирана мощност</div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-zinc-500">Клиенти</span>
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
<span className="iconify text-purple-600" data-icon="lucide:users" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">156</div>
<div className="text-xs text-green-600 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12" style={{strokeWidth: '1.5'}}></span>
                            +12 нови
                        </div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-zinc-500">Приходи</span>
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
<span className="iconify text-green-600" data-icon="lucide:banknote" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">458K лв.</div>
<div className="text-xs text-zinc-500 mt-1">Този квартал</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200">
<div className="px-5 py-4 border-b border-zinc-200 flex items-center justify-between">
<h2 className="text-base font-semibold text-zinc-900">Последни проекти</h2>
<button className="text-sm text-amber-600 hover:text-amber-700 font-medium">Виж всички</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left text-xs text-zinc-500 border-b border-zinc-100">
<th className="px-5 py-3 font-medium">Проект</th>
<th className="px-5 py-3 font-medium">Клиент</th>
<th className="px-5 py-3 font-medium">Мощност</th>
<th className="px-5 py-3 font-medium">Статус</th>
<th className="px-5 py-3 font-medium"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-zinc-100 hover:bg-zinc-50">
<td className="px-5 py-4">
<div className="font-medium text-zinc-900">PV-2024-089</div>
<div className="text-xs text-zinc-500">София, Витоша</div>
</td>
<td className="px-5 py-4 text-zinc-600">Иван Петров</td>
<td className="px-5 py-4 text-zinc-600">15 kWp</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">В изпълнение</span>
</td>
<td className="px-5 py-4">
<button className="p-1 hover:bg-zinc-100 rounded">
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50">
<td className="px-5 py-4">
<div className="font-medium text-zinc-900">PV-2024-088</div>
<div className="text-xs text-zinc-500">Пловдив, Тракия</div>
</td>
<td className="px-5 py-4 text-zinc-600">Мария Георгиева</td>
<td className="px-5 py-4 text-zinc-600">30 kWp</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">Проектиране</span>
</td>
<td className="px-5 py-4">
<button className="p-1 hover:bg-zinc-100 rounded">
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50">
<td className="px-5 py-4">
<div className="font-medium text-zinc-900">PV-2024-087</div>
<div className="text-xs text-zinc-500">Варна, Център</div>
</td>
<td className="px-5 py-4 text-zinc-600">Димитър Стоянов</td>
<td className="px-5 py-4 text-zinc-600">10 kWp</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">Одобрение</span>
</td>
<td className="px-5 py-4">
<button className="p-1 hover:bg-zinc-100 rounded">
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
<tr className="border-b border-zinc-100 hover:bg-zinc-50">
<td className="px-5 py-4">
<div className="font-medium text-zinc-900">PV-2024-086</div>
<div className="text-xs text-zinc-500">Бургас, Славейков</div>
</td>
<td className="px-5 py-4 text-zinc-600">Елена Николова</td>
<td className="px-5 py-4 text-zinc-600">50 kWp</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700">Завършен</span>
</td>
<td className="px-5 py-4">
<button className="p-1 hover:bg-zinc-100 rounded">
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-5 py-4">
<div className="font-medium text-zinc-900">PV-2024-085</div>
<div className="text-xs text-zinc-500">Русе, Център</div>
</td>
<td className="px-5 py-4 text-zinc-600">Георги Димитров</td>
<td className="px-5 py-4 text-zinc-600">20 kWp</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">В изпълнение</span>
</td>
<td className="px-5 py-4">
<button className="p-1 hover:bg-zinc-100 rounded">
<span className="iconify text-zinc-400" data-icon="lucide:more-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-xl border border-zinc-200">
<div className="px-5 py-4 border-b border-zinc-200">
<h2 className="text-base font-semibold text-zinc-900">Наличност оборудване</h2>
</div>
<div className="p-5 space-y-4">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-zinc-600">Соларни панели</span>
<span className="text-sm font-medium text-zinc-900">245 бр.</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-zinc-600">Инвертори</span>
<span className="text-sm font-medium text-zinc-900">32 бр.</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-zinc-600">Конструкции</span>
<span className="text-sm font-medium text-zinc-900">18 комплекта</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-zinc-600">Кабели (м)</span>
<span className="text-sm font-medium text-zinc-900">1,250 м</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200">
<div className="px-5 py-4 border-b border-zinc-200">
<h2 className="text-base font-semibold text-zinc-900">Предстоящи задачи</h2>
</div>
<div className="p-5 space-y-3">
<div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
<div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Монтаж PV-2024-089</div>
<div className="text-xs text-zinc-500">Днес, 09:00</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
<div className="w-2 h-2 bg-amber-500 rounded-full mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Оглед на обект</div>
<div className="text-xs text-zinc-500">Утре, 14:00</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
<div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Подаване на документи</div>
<div className="text-xs text-zinc-500">23.01.2024</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
<div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
<div>
<div className="text-sm font-medium text-zinc-900">Въвеждане в експлоатация</div>
<div className="text-xs text-zinc-500">25.01.2024</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-amber-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
<span className="iconify text-amber-600" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-medium text-zinc-900">Нов проект</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<span className="iconify text-blue-600" data-icon="lucide:user-plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-medium text-zinc-900">Добави клиент</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-green-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
<span className="iconify text-green-600" data-icon="lucide:file-plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-medium text-zinc-900">Нова оферта</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded-xl hover:border-purple-300 hover:shadow-sm transition-all">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<span className="iconify text-purple-600" data-icon="lucide:download" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-medium text-zinc-900">Експорт данни</span>
</button>
</div>
</main>
</div>
</div>

    </>
  );
}
