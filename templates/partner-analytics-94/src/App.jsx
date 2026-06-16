import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        function switchTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected content
            document.getElementById('tab-' + tabId).classList.remove('hidden');

            // Reset all nav items
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-white', 'bg-zinc-800/50', 'border-zinc-700/50');
                el.classList.add('text-zinc-400', 'border-transparent');
            });

            // Activate selected nav item
            const activeNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
            if (activeNav) {
                activeNav.classList.remove('text-zinc-400', 'border-transparent');
                activeNav.classList.add('text-white', 'bg-zinc-800/50', 'border-zinc-700/50');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-800/50 hidden md:flex flex-col justify-between bg-zinc-950/50 backdrop-blur-sm relative z-20">
<div className="p-6">

<div className="flex items-center gap-2 mb-10">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-lg">LMN</span>
</div>

<nav className="space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-white bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all group" data-tab="dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Обзор
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg border border-transparent transition-all group" data-tab="links" onclick="switchTab('links')">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:link" strokeWidth="1.5" width="18"></iconify-icon>
                    Ссылки
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg border border-transparent transition-all group" data-tab="analytics" onclick="switchTab('analytics')">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:pie-chart" strokeWidth="1.5" width="18"></iconify-icon>
                    Аналитика
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg border border-transparent transition-all group" data-tab="payouts" onclick="switchTab('payouts')">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:wallet" strokeWidth="1.5" width="18"></iconify-icon>
                    Выплаты
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg border border-transparent transition-all group" data-tab="assets" onclick="switchTab('assets')">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:zap" strokeWidth="1.5" width="18"></iconify-icon>
                    Ассеты
                </button>
</nav>
</div>
<div className="p-6 border-t border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-white">Alexey V.</span>
<span className="text-[10px] text-zinc-500">Pro Partner</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-grid relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none -z-10"></div>

<div className="md:hidden flex items-center justify-between p-4 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur sticky top-0 z-30">
<span className="font-medium text-white">LMN</span>
<button className="text-zinc-400"><iconify-icon icon="lucide:menu" width="24"></iconify-icon></button>
</div>
<div className="max-w-6xl mx-auto p-6 md:p-10">

<div className="tab-content space-y-10" id="tab-dashboard">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Дашборд партнера</h1>
<p className="text-zinc-500 text-sm">Обновлено: только что. Твой трафик растет.</p>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-end mr-4">
<span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Баланс</span>
<span className="text-xl font-medium text-white tracking-tight">₽ 42,500</span>
</div>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2" onclick="switchTab('payouts')">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
                            Вывести
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-card rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:users" width="60"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<div className="flex items-center gap-2 text-zinc-500 mb-4">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
<span className="uppercase text-xs font-medium tracking-wide">Регистрации</span>
</div>
<div className="">
<div className="text-3xl text-white font-medium tracking-tight mb-1">1,248</div>
<div className="flex items-center gap-1 text-xs text-emerald-400">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
<span>+12.5%</span>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:credit-card" width="60"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<div className="flex items-center gap-2 text-zinc-500 mb-4">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Оплатили</span>
</div>
<div>
<div className="text-3xl text-white font-medium tracking-tight mb-1">186</div>
<div className="flex items-center gap-1 text-xs text-emerald-400">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon>
<span>+4.2%</span>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-5 relative overflow-hidden border-indigo-500/20">
<div className="absolute top-0 right-0 p-5 opacity-10 text-indigo-500">
<iconify-icon icon="lucide:sparkles" width="60"></iconify-icon>
</div>
<div className="flex flex-col h-full justify-between">
<div className="flex items-center gap-2 text-indigo-400 mb-4">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wide">Потенциал</span>
</div>
<div>
<div className="text-3xl text-white font-medium tracking-tight mb-1">₽ 125k</div>
<div className="flex items-center gap-1 text-xs text-zinc-400">
<span>Прогноз на конец месяца</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 glass-card rounded-xl p-6 border-zinc-800">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">Твоя ссылка</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">Кастомизация</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-zinc-400 border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex items-center bg-zinc-900 rounded-lg border border-zinc-700/50 p-1">
<div className="pl-4 pr-2 py-3 text-zinc-400 select-none pointer-events-none">
<iconify-icon icon="lucide:globe" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent text-sm text-white placeholder-zinc-600 focus:outline-none font-mono" readonly="" type="text" value="lumen.app/r/alexey-pro-2024"/>
<button className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-md text-xs font-medium transition-all flex items-center gap-2 whitespace-nowrap min-w-[90px] justify-center">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon> Copy
                                </button>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="text-xs text-zinc-500 py-1">Теги:</span>
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 cursor-pointer hover:border-zinc-600 hover:text-white transition-colors">Instagram</span>
<span className="px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50 text-[10px] text-zinc-400 cursor-pointer hover:border-zinc-600 hover:text-white transition-colors">Telegram</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Уровень: Pro</h3>
<p className="text-xs text-zinc-500 mt-1">Комиссия 25%</p>
</div>
<iconify-icon className="text-indigo-400" icon="lucide:award" width="24"></iconify-icon>
</div>
<div className="relative pt-4 pb-2">
<div className="flex mb-2 items-center justify-between text-xs">
<span className="text-indigo-300 font-medium">Текущий</span>
<span className="text-zinc-500">Elite (30%)</span>
</div>
<div className="overflow-hidden h-2 mb-2 text-xs flex rounded-full bg-zinc-800">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-600 to-purple-500 progress-glow relative" style={{width: '72%'}}>
<div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl border-zinc-800 overflow-hidden">
<div className="p-6 border-b border-zinc-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="text-base font-medium text-white">Последние конверсии</h3>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs text-white bg-zinc-800 rounded hover:bg-zinc-700 transition-colors">Все</button>
<button className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors">Оплаченные</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[11px] uppercase tracking-wider text-zinc-500 border-b border-zinc-800/50">
<th className="px-6 py-4 font-medium">Пользователь</th>
<th className="px-6 py-4 font-medium">Источник</th>
<th className="px-6 py-4 font-medium">Дата</th>
<th className="px-6 py-4 font-medium">Сумма</th>
<th className="px-6 py-4 font-medium text-right">Доход</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-white/[0.02] transition-colors border-b border-zinc-800/30">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-[10px] text-black font-bold">M</div>
<span className="text-zinc-300">maxim.k@...</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400 text-xs">Telegram / Channel 1</td>
<td className="px-6 py-4 text-zinc-500 text-xs">2 мин назад</td>
<td className="px-6 py-4 text-zinc-300">₽ 4,990</td>
<td className="px-6 py-4 text-right text-white font-medium">+ ₽ 1,247</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center text-[10px] text-black font-bold">S</div>
<span className="text-zinc-300">sarah.j@...</span>
</div>
</td>
<td className="px-6 py-4 text-zinc-400 text-xs">Instagram Stories</td>
<td className="px-6 py-4 text-zinc-500 text-xs">15 мин назад</td>
<td className="px-6 py-4 text-zinc-300">₽ 0</td>
<td className="px-6 py-4 text-right text-zinc-600">--</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="tab-content hidden space-y-8" id="tab-links">
<div>
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Управление ссылками</h1>
<p className="text-zinc-500 text-sm">Создавай уникальные ссылки для отслеживания разных источников трафика.</p>
</div>
<div className="glass-card rounded-xl p-6 border-zinc-800">
<h3 className="text-base font-medium text-white mb-6">Создать новую ссылку (UTM Builder)</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium">Источник (utm_source)</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="google, newsletter, instagram" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium">Канал (utm_medium)</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="cpc, banner, email" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium">Кампания (utm_campaign)</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors" placeholder="summer_sale" type="text"/>
</div>
</div>
<div className="mt-6 flex justify-end">
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                            Сгенерировать
                        </button>
</div>
</div>
<div className="space-y-4">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide px-1">Активные ссылки</h3>

<div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-zinc-600 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Instagram Bio</div>
<div className="text-xs text-zinc-500 font-mono mt-1">lumen.app/r/alexey-ig</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right hidden sm:block">
<div className="text-sm text-white font-medium">843</div>
<div className="text-[10px] text-zinc-500">кликов</div>
</div>
<button className="p-2 text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</div>
</div>

<div className="glass-card p-4 rounded-xl flex items-center justify-between group hover:border-zinc-600 transition-all">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:send" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Telegram Channel</div>
<div className="text-xs text-zinc-500 font-mono mt-1">lumen.app/r/alexey-tg</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="text-right hidden sm:block">
<div className="text-sm text-white font-medium">2,105</div>
<div className="text-[10px] text-zinc-500">кликов</div>
</div>
<button className="p-2 text-zinc-500 hover:text-white transition-colors"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-8" id="tab-analytics">
<div>
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Аналитика</h1>
<p className="text-zinc-500 text-sm">Глубокий анализ конверсии и поведения аудитории.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-card rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:bar-chart-2" width="16"></iconify-icon>
                            Источники трафика
                        </h3>
<div className="space-y-4">

<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-zinc-300">Telegram</span>
<span className="text-zinc-500">54%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '54%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-zinc-300">Instagram</span>
<span className="text-zinc-500">32%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 rounded-full" style={{width: '32%'}}></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-xs">
<span className="text-zinc-300">YouTube</span>
<span className="text-zinc-500">14%</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 rounded-full" style={{width: '14%'}}></div>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:globe-2" width="16"></iconify-icon>
                            География
                        </h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Russia</div>
<div className="text-lg font-medium text-white">65%</div>
</div>
<div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Kazakhstan</div>
<div className="text-lg font-medium text-white">15%</div>
</div>
<div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Belarus</div>
<div className="text-lg font-medium text-white">10%</div>
</div>
<div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
<div className="text-xs text-zinc-500 mb-1">Other</div>
<div className="text-lg font-medium text-white">10%</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden space-y-8" id="tab-payouts">
<div>
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Финансы и выплаты</h1>
<p className="text-zinc-500 text-sm">Управляйте методами вывода и отслеживайте историю транзакций.</p>
</div>
<div className="glass-card rounded-xl p-8 border-l-4 border-l-emerald-500 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<div className="text-sm text-zinc-400 font-medium uppercase tracking-wide mb-1">Доступно к выводу</div>
<div className="text-4xl text-white font-medium tracking-tight">₽ 42,500</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-zinc-200 transition-colors text-sm">Запросить выплату</button>
<button className="flex-1 md:flex-none bg-zinc-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-700 transition-colors text-sm">Настройки</button>
</div>
</div>
<div className="glass-card rounded-xl overflow-hidden">
<div className="p-6 border-b border-zinc-800/50">
<h3 className="text-base font-medium text-white">История транзакций</h3>
</div>
<table className="w-full text-left">
<thead className="bg-zinc-900/30">
<tr className="text-[11px] uppercase text-zinc-500">
<th className="px-6 py-4 font-medium">ID</th>
<th className="px-6 py-4 font-medium">Дата</th>
<th className="px-6 py-4 font-medium">Метод</th>
<th className="px-6 py-4 font-medium">Статус</th>
<th className="px-6 py-4 font-medium text-right">Сумма</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-zinc-800/30">
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">#TR-8821</td>
<td className="px-6 py-4 text-zinc-300">15 Окт 2023</td>
<td className="px-6 py-4 text-zinc-300">Bank Card •••• 4242</td>
<td className="px-6 py-4"><span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Выполнено</span></td>
<td className="px-6 py-4 text-right text-white">₽ 25,000</td>
</tr>
<tr className="border-b border-zinc-800/30">
<td className="px-6 py-4 text-zinc-500 font-mono text-xs">#TR-8105</td>
<td className="px-6 py-4 text-zinc-300">01 Окт 2023</td>
<td className="px-6 py-4 text-zinc-300">USDT (TRC20)</td>
<td className="px-6 py-4"><span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">Выполнено</span></td>
<td className="px-6 py-4 text-right text-white">₽ 18,450</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="tab-content hidden space-y-8" id="tab-assets">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Маркетинговые материалы</h1>
<p className="text-zinc-500 text-sm">Все необходимое для продвижения бренда.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-black bg-white rounded-md transition-colors">Все</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md hover:text-white transition-colors">Бренд</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md hover:text-white transition-colors">Соцсети</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-md hover:text-white transition-colors">Тексты</button>
</div>
</div>

<section>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:palette" width="16"></iconify-icon>
                        Айдентика и цвета
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-6 group relative">
<div className="h-32 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center mb-4 pattern-grid">
<span className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
                                    LMN
                                </span>
</div>
<div className="flex justify-between items-center">
<div>
<div className="text-sm text-white font-medium">Логотип (Dark Mode)</div>
<div className="text-xs text-zinc-500">SVG, PNG</div>
</div>
<button className="text-zinc-400 hover:text-white transition-colors"><iconify-icon icon="lucide:download" width="18"></iconify-icon></button>
</div>
</div>

<div className="glass-card rounded-xl p-6 group relative">
<div className="h-32 bg-white rounded-lg flex items-center justify-center mb-4">
<span className="text-2xl font-bold text-black tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
                                    LMN
                                </span>
</div>
<div className="flex justify-between items-center">
<div>
<div className="text-sm text-white font-medium">Логотип (Light Mode)</div>
<div className="text-xs text-zinc-500">SVG, PNG</div>
</div>
<button className="text-zinc-400 hover:text-white transition-colors"><iconify-icon icon="lucide:download" width="18"></iconify-icon></button>
</div>
</div>

<div className="glass-card rounded-xl p-6">
<div className="space-y-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
<div className="text-sm text-zinc-300">Primary Indigo</div>
</div>
<code className="text-xs bg-zinc-900 px-2 py-1 rounded text-zinc-500 group-hover:text-white transition-colors">#6366f1</code>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700"></div>
<div className="text-sm text-zinc-300">Surface Dark</div>
</div>
<code className="text-xs bg-zinc-900 px-2 py-1 rounded text-zinc-500 group-hover:text-white transition-colors">#18181b</code>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200"></div>
<div className="text-sm text-zinc-300">Text White</div>
</div>
<code className="text-xs bg-zinc-900 px-2 py-1 rounded text-zinc-500 group-hover:text-white transition-colors">#ffffff</code>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:image" width="16"></iconify-icon>
                        Креативы для соцсетей
                    </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-xl mb-3 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
<span className="text-white font-bold text-lg leading-tight mb-2">Start Earning Today</span>
<button className="bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full">Learn More</button>
</div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white" icon="lucide:download" width="24"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-white font-medium">Stories Promo 01</div>
<div className="text-[10px] text-zinc-500">1080x1920</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[9/16] bg-zinc-900 border border-zinc-800 rounded-xl mb-3 overflow-hidden relative">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white" icon="lucide:download" width="24"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-white font-medium">Abstract Dark</div>
<div className="text-[10px] text-zinc-500">1080x1920</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl mb-3 overflow-hidden relative flex items-center justify-center">
<div className="text-center p-2">
<div className="text-3xl font-bold text-white mb-1">50%</div>
<div className="text-[10px] text-zinc-400 uppercase tracking-widest">Commission</div>
</div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white" icon="lucide:download" width="24"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-white font-medium">Square Post</div>
<div className="text-[10px] text-zinc-500">1080x1080</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-xl mb-3 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800 to-zinc-900"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-full"></div>
<span className="text-[10px] font-bold text-white">LMN</span>
</div>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-white" icon="lucide:download" width="24"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<div className="text-xs text-white font-medium">Minimal Logo</div>
<div className="text-[10px] text-zinc-500">1080x1080</div>
</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:file-text" width="16"></iconify-icon>
                        Готовые тексты
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-card rounded-xl p-5 border border-zinc-800/50 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Telegram Post</span>
<button className="text-zinc-500 hover:text-white transition-colors text-xs flex items-center gap-1">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon> Copy
                                </button>
</div>
<div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-900 text-xs text-zinc-400 font-mono leading-relaxed flex-1">
                                🔥 Нашел крутой сервис для аналитики!<br/><br/>
                                Lumen помогает отслеживать все метрики в одном месте. Интерфейс просто космос, а функционал закрывает все потребности.<br/><br/>
                                👉 Попробуйте бесплатно: [ВАША ССЫЛКА]<br/><br/>
                                #marketing #analytics #lumen
                            </div>
</div>
<div className="glass-card rounded-xl p-5 border border-zinc-800/50 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-sky-400 bg-sky-500/10 px-2 py-1 rounded">Twitter / X</span>
<button className="text-zinc-500 hover:text-white transition-colors text-xs flex items-center gap-1">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon> Copy
                                </button>
</div>
<div className="bg-zinc-950/50 p-3 rounded-lg border border-zinc-900 text-xs text-zinc-400 font-mono leading-relaxed flex-1">
                                Just switched to Lumen for my dashboard needs. The UI is incredibly clean and dark mode is perfect 🌑.<br/><br/>
                                Check it out here: [LINK] 🚀
                            </div>
</div>
</div>
</section>
</div>

<div className="flex justify-center py-8">
<div className="text-[10px] text-zinc-600 flex items-center gap-2">
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon>
                    Безопасное соединение. Данные обновляются в реальном времени.
                </div>
</div>
</div>
</main>


    </>
  );
}
