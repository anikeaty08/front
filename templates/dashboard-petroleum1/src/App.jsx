import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex h-screen overflow-hidden">

<aside className="hidden w-72 flex-col border-r border-white/5 bg-[#050505] md:flex overflow-y-auto no-scrollbar">
<div className="p-8 pb-6">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-brand-red flex items-center justify-center text-white shadow-[0_0_15px_rgba(227,30,36,0.4)]">
<iconify-icon icon="solar:bolt-bold" width="20"></iconify-icon>
</div>
<div className="text-2xl font-bold text-white tracking-tight">Red Petroleum</div>
</div>
</div>
<nav className="flex-1 space-y-8 px-4 py-2">

<div className="">
<h3 className="mb-3 px-4 text-xs font-medium uppercase tracking-wider text-slate-500">CPO</h3>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 rounded-xl bg-brand-red px-4 py-3 text-white shadow-md shadow-red-900/20 transition-all" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Панель управления</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Лог событий</span>
</a>
</li>
<li className="">
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Зарядные локации</span>
</a>
</li>
</ul>
</div>

<div className="">
<h3 className="mb-3 px-4 text-xs font-medium uppercase tracking-wider text-slate-500">EMSP</h3>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Клиенты</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Корпоративные клиенты</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:tag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Зарядные метки</span>
</a>
</li>
</ul>
</div>

<div>
<h3 className="mb-3 px-4 text-xs font-medium uppercase tracking-wider text-slate-500">EMSP – CPO</h3>
<ul className="space-y-1">
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:transfer-horizontal-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Транзакции</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Статистика</span>
</a>
</li>
<li>
<a className="group flex items-center gap-3 rounded-xl px-4 py-3 text-slate-400 hover-bg-glass hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Доступность</span>
</a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 overflow-y-auto bg-[#050505] p-6 md:p-10">
<header className="mb-8 flex items-center justify-between animate-entry">
<div className="flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-white">Мониторинг станций</h1>
<p className="text-sm text-slate-500">Обзор состояния сети в реальном времени</p>
</div>
<div className="flex items-center gap-4">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111] shadow-sm border border-white/10 text-slate-400 hover:text-brand-red hover:border-brand-red/50 transition-colors relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-brand-red shadow-[0_0_8px_#E31E24]"></span>
</button>
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-medium shadow-lg shadow-red-900/20 border border-white/10">
                        JD
                    </div>
</div>
</header>

<div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="animate-entry rounded-2xl glass-panel p-6 hover:border-white/20 transition-colors duration-300">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium text-white">Зарядные станции</h2>
<iconify-icon className="text-brand-red" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/10">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<span>Настройка</span>
</div>
<span className="font-medium text-white">10</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400 border border-green-500/10">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span>Эксплуатация</span>
</div>
<span className="font-medium text-white">25</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 border border-red-500/10">
<iconify-icon icon="solar:wrench-linear" width="16"></iconify-icon>
</div>
<span>Ремонт</span>
</div>
<span className="font-medium text-white">0</span>
</li>
</ul>
</div>

<div className="animate-entry rounded-2xl glass-panel p-6 hover:border-white/20 transition-colors duration-300 delay-100">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium text-white">Статус сети</h2>
<iconify-icon className="text-brand-red" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400 border border-green-500/10">
<iconify-icon icon="solar:wi-fi-linear" width="16"></iconify-icon>
</div>
<span>Online</span>
</div>
<span className="font-medium text-white">15</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400 border border-white/5">
<iconify-icon icon="solar:wi-fi-no-connection-linear" width="16"></iconify-icon>
</div>
<span>Offline</span>
</div>
<span className="font-medium text-white">10</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/10">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span>Available</span>
</div>
<span className="font-medium text-white">15</span>
</li>
</ul>
</div>

<div className="animate-entry rounded-2xl glass-panel p-6 hover:border-white/20 transition-colors duration-300 delay-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium text-white">Коннекторы</h2>
<iconify-icon className="text-brand-red" icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/10">
<iconify-icon icon="solar:check-square-linear" width="16"></iconify-icon>
</div>
<span>Available</span>
</div>
<span className="font-medium text-white">13</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red border border-brand-red/10">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<span>Charging</span>
</div>
<span className="font-medium text-white">7</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-3 text-slate-400">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/10">
<iconify-icon icon="solar:danger-triangle-linear" width="16"></iconify-icon>
</div>
<span>Suspended</span>
</div>
<span className="font-medium text-white">0</span>
</li>
</ul>
</div>
</div>

<div className="animate-entry mb-8 rounded-2xl glass-panel p-8 delay-300">
<div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
<div className="w-full md:w-1/2">
<h2 className="mb-2 text-xl font-semibold tracking-tight text-white">Общая статистика</h2>
<p className="mb-8 text-sm text-slate-500">Распределение статусов зарядных портов</p>
<div className="grid grid-cols-2 gap-x-8 gap-y-5">
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-green-500 ring-2 ring-green-900/40"></span>
<span className="text-sm text-slate-300 font-medium">Online <span className="ml-1 text-slate-500 font-normal">(17)</span></span>
</div>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-slate-500 ring-2 ring-slate-700/40"></span>
<span className="text-sm text-slate-300 font-medium">Offline <span className="ml-1 text-slate-500 font-normal">(8)</span></span>
</div>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-brand-red ring-2 ring-red-900/40"></span>
<span className="text-sm text-slate-300 font-medium">Charging <span className="ml-1 text-slate-500 font-normal">(5)</span></span>
</div>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-red-800 ring-2 ring-red-900/20"></span>
<span className="text-sm text-slate-300 font-medium">Failed <span className="ml-1 text-slate-500 font-normal">(2)</span></span>
</div>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-orange-400 ring-2 ring-orange-900/40"></span>
<span className="text-sm text-slate-300 font-medium">Unavailable <span className="ml-1 text-slate-500 font-normal">(11)</span></span>
</div>
</div>
</div>

<div className="relative flex h-52 w-52 items-center justify-center">
<svg className="h-full w-full -rotate-90 transform drop-shadow-2xl" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="transparent" r="40" stroke="#1F1F1F" strokeWidth="10"></circle>


<circle className="animate-chart-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#22c55e" stroke-dasharray="40 60" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="10"></circle>

<circle className="animate-chart-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#64748b" stroke-dasharray="18 82" stroke-dashoffset="-43" strokeLinecap="round" strokeWidth="10"></circle>

<circle className="animate-chart-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#7f1d1d" stroke-dasharray="5 95" stroke-dashoffset="-64" strokeLinecap="round" strokeWidth="10"></circle>

<circle className="animate-chart-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#E31E24" stroke-dasharray="12 88" stroke-dashoffset="-72" strokeLinecap="round" strokeWidth="10"></circle>

<circle className="animate-chart-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#fb923c" stroke-dasharray="12 88" stroke-dashoffset="-87" strokeLinecap="round" strokeWidth="10"></circle>
</svg>

<div className="absolute flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-white tracking-tight">43</span>
<span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wide">Всего</span>
</div>
</div>
</div>
</div>

<div className="animate-entry rounded-2xl glass-panel delay-300">
<div className="border-b border-white/5 p-6 md:flex md:items-center md:justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Список станций</h2>
</div>
<div className="mt-4 flex gap-3 md:mt-0">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-brand-red" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full min-w-[280px] rounded-xl glass-input py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-brand-red focus:ring-1 focus:ring-brand-red md:w-auto placeholder:text-slate-600 text-white" placeholder="Поиск станции..." type="text"/>
</div>
<button className="flex items-center gap-2 rounded-xl glass-input px-4 py-2.5 text-sm font-medium text-slate-300 hover:border-brand-red hover:text-brand-red transition-all">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
                            Фильтры
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-white/[0.02] border-b border-white/5">
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Локация</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Станция</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Коннектор</th>
<th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Статус</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm">

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-5 text-slate-300 font-medium">URBAN улица</td>
<td className="px-6 py-5 text-white font-semibold">Mascom Urban Mall</td>
<td className="px-6 py-5 text-slate-400">
<div className="flex items-center gap-2 rounded-lg bg-[#181818] px-3 py-1.5 w-fit border border-white/5">
<iconify-icon className="text-slate-500" icon="solar:plug-circle-linear"></iconify-icon>
<span className="text-xs font-medium">GB/T DC 160 кВт</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400 border border-green-500/10">
<span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></span>
                                        Available
                                    </span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-5 text-slate-300 font-medium">Глобус Жд улица</td>
<td className="px-6 py-5 text-white font-semibold">Глобус правый</td>
<td className="px-6 py-5 text-slate-400">
<div className="flex items-center gap-2 rounded-lg bg-[#181818] px-3 py-1.5 w-fit border border-white/5">
<iconify-icon className="text-slate-500" icon="solar:plug-circle-linear"></iconify-icon>
<span className="text-xs font-medium">GB/T DC 40 кВт</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/10 px-3 py-1 text-xs font-semibold text-brand-red border border-brand-red/10">
<iconify-icon icon="solar:bolt-bold" width="10"></iconify-icon>
                                        Charging
                                    </span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-5 text-slate-300 font-medium">АКО Гранд улица</td>
<td className="px-6 py-5 text-white font-semibold">Гранд правый</td>
<td className="px-6 py-5 text-slate-400">
<div className="flex items-center gap-2 rounded-lg bg-[#181818] px-3 py-1.5 w-fit border border-white/5">
<iconify-icon className="text-slate-500" icon="solar:plug-circle-linear"></iconify-icon>
<span className="text-xs font-medium">GB/T DC 40 кВт</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 rounded-full bg-red-900/20 px-3 py-1 text-xs font-semibold text-red-500 border border-red-500/10">
<iconify-icon icon="solar:danger-circle-bold" width="10"></iconify-icon>
                                        Failed
                                    </span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-5 text-slate-300 font-medium">Ош Глобус улица</td>
<td className="px-6 py-5 text-white font-semibold">
<div className="flex items-center gap-2">
<span>Глобус</span>
<span className="rounded bg-slate-800 border border-white/5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-400">Offline</span>
</div>
</td>
<td className="px-6 py-5 text-slate-400">
<div className="flex items-center gap-2 rounded-lg bg-[#181818] px-3 py-1.5 w-fit border border-white/5">
<iconify-icon className="text-slate-500" icon="solar:plug-circle-linear"></iconify-icon>
<span className="text-xs font-medium">GB/T DC 80 кВт</span>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400 border border-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                                        Offline
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-end gap-2 border-t border-white/5 p-4">
<button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 hover:text-white transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red text-white text-xs font-bold shadow-md shadow-red-900/30">1</button>
<button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-brand-red text-xs font-semibold transition-colors">2</button>
<button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-brand-red text-xs font-semibold transition-colors">3</button>
<span className="flex h-9 w-9 items-center justify-center text-slate-600 text-xs">...</span>
<button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-brand-red text-xs font-semibold transition-colors">5</button>
<button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-white/5 hover:text-white transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</main>
</div>

    </>
  );
}
