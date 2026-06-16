import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b',    // Zinc 900
border: '#27272a',     // Zinc 800
primary: '#fafafa',    // Zinc 50
secondary: '#a1a1aa',  // Zinc 400
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobileOverlay');

        function toggleMenu() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Chart.js Setup
        const ctx = document.getElementById('priceIndexChart').getContext('2d');
        
        // Gradient for chart
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.2)'); // Emerald
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
                datasets: [
                    {
                        label: 'Мій Індекс Ціни (%)',
                        data: [102, 101, 99, 98, 96.8, 97, 96.8],
                        borderColor: '#10b981', // Emerald 500
                        backgroundColor: gradient,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 3,
                        pointBackgroundColor: '#09090b',
                        pointBorderColor: '#10b981',
                        borderWidth: 2
                    },
                    {
                        label: 'Середнє по Ринку',
                        data: [100, 100, 100, 100, 100, 100, 100],
                        borderColor: '#52525b', // Zinc 600
                        borderDash: [4, 4],
                        pointRadius: 0,
                        borderWidth: 1,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        align: 'end',
                        labels: { color: '#a1a1aa', boxWidth: 10, usePointStyle: true, font: { family: 'Inter', size: 10 } }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#18181b',
                        borderColor: '#27272a',
                        borderWidth: 1,
                        titleColor: '#fafafa',
                        bodyColor: '#a1a1aa'
                    }
                },
                scales: {
                    y: {
                        grid: { color: '#27272a' },
                        ticks: { color: '#71717a', font: { size: 10 }, callback: (val) => val + '%' },
                        suggestedMin: 90,
                        suggestedMax: 110
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#71717a', font: { size: 10 } }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/60 z-40 hidden lg:hidden backdrop-blur-sm" id="mobileOverlay"></div>

<aside className="fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface/50 backdrop-blur-xl border-r border-border transform -translate-x-full lg:translate-x-0 transition-transform duration-300 flex flex-col" id="sidebar">

<div className="h-14 flex items-center px-4 border-b border-border/50 gap-3">
<div className="h-8 w-8 rounded bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</div>
<span className="font-medium tracking-tight">Stimma Analytics</span>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-white/5 text-white rounded-md border border-white/5" href="#">
<i className="w-4 h-4 text-rose-400" data-lucide="layout-dashboard"></i>
                Дашборд
            </a>
<div className="pt-4 pb-1 px-3 text-xs font-medium text-secondary uppercase tracking-wider">Каталог</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layers"></i>
                Категорії
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="shirt"></i>
                Товари
            </a>
<div className="pt-4 pb-1 px-3 text-xs font-medium text-secondary uppercase tracking-wider">Ринок</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="globe"></i>
                Конкуренти
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bell"></i>
                Сповіщення
                <span className="ml-auto bg-rose-500/20 text-rose-300 py-0.5 px-1.5 rounded text-xs">8</span>
</a>
<div className="pt-4 pb-1 px-3 text-xs font-medium text-secondary uppercase tracking-wider">Система</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="bot"></i>
                Парсери
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                Налаштування
            </a>
</nav>

<div className="p-4 border-t border-border/50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-900 to-rose-800 border border-white/10 flex items-center justify-center text-xs font-medium text-rose-100">OM</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-primary truncate">Олена Мельник</p>
<p className="text-xs text-secondary truncate">Категорійний менеджер</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-background relative z-0">

<header className="h-14 flex items-center justify-between px-6 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="lg:hidden p-1 text-secondary hover:text-primary" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div>
<h1 className="text-sm font-medium text-primary">Цінова аналітика</h1>
<p className="text-xs text-secondary hidden sm:block">Позиціонування відносно ринку (Kasta, Rozetka, Vovk)</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-secondary hover:text-primary transition-colors">
<i className="w-5 h-5" data-lucide="help-circle"></i>
</button>
</div>
</header>

<div className="px-6 py-3 border-b border-border bg-surface/30 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
<div className="flex flex-wrap items-center gap-2">

<button className="group flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-xs font-medium text-secondary hover:text-primary hover:border-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i>
                    Останні 30 днів
                    <i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
<div className="w-px h-4 bg-border mx-1 hidden sm:block"></div>

<button className="group flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-xs font-medium text-secondary hover:text-primary hover:border-white/20 transition-all">
<span>Категорія: Сукні та Блузи</span>
<i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>

<button className="group flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-xs font-medium text-secondary hover:text-primary hover:border-white/20 transition-all">
<span>Колекція: Весна 2024</span>
<i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>

<button className="group flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-xs font-medium text-secondary hover:text-primary hover:border-white/20 transition-all">
<span>Конкуренти: 4 обрано</span>
<i className="w-3 h-3 opacity-50" data-lucide="chevron-down"></i>
</button>
</div>
<div className="flex items-center gap-2 ml-auto">
<button className="p-1.5 text-secondary hover:text-primary transition">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded text-xs font-medium transition-colors shadow-lg shadow-rose-900/20">
<i className="w-3 h-3" data-lucide="save"></i>
                    Зберегти звіт
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-8xl mx-auto space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-surface border border-border rounded-lg p-4 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-secondary font-medium">SKU на моніторингу</span>
<i className="w-4 h-4 text-secondary/50" data-lucide="tag"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-primary">458</span>
<span className="text-xs text-secondary">з 520</span>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-4 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-secondary font-medium">Сайти-конкуренти</span>
<i className="w-4 h-4 text-secondary/50" data-lucide="globe"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-primary">4</span>
<span className="text-xs text-emerald-500 flex items-center">Активні</span>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-4 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-secondary font-medium">Індекс ціни</span>
<i className="w-4 h-4 text-secondary/50" data-lucide="percent"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-emerald-400">-4.5%</span>
<span className="text-xs text-secondary">vs Ринок</span>
</div>
<div className="mt-1 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-[42%] bg-emerald-500 rounded-full"></div>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-4 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-secondary font-medium">Завищена ціна</span>
<i className="w-4 h-4 text-rose-500/70" data-lucide="alert-triangle"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-primary">32</span>
<span className="text-xs text-rose-400">&gt; 10% різниця</span>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-4 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-xs text-secondary font-medium">Зміни цін (24год)</span>
<i className="w-4 h-4 text-secondary/50" data-lucide="activity"></i>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium tracking-tight text-primary">15</span>
<span className="text-xs text-secondary">Товарів</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[400px]">

<div className="lg:col-span-2 bg-surface border border-border rounded-lg p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="text-sm font-medium text-primary">Індекс ціни vs Ринок</h3>
<p className="text-xs text-secondary">Динаміка цін відносно середньої ціни конкурентів</p>
</div>
<div className="flex bg-background rounded-md p-0.5 border border-border">
<button className="px-3 py-1 text-xs font-medium bg-white/10 text-primary rounded-sm shadow-sm">Індекс</button>
<button className="px-3 py-1 text-xs font-medium text-secondary hover:text-primary transition">Зміни</button>
</div>
</div>
<div className="flex-1 min-h-0 relative w-full">
<canvas id="priceIndexChart"></canvas>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-5 flex flex-col overflow-hidden">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-primary">Топ можливостей</h3>
<div className="flex gap-2">
<span className="h-2 w-2 rounded-full bg-rose-500"></span>
<span className="text-xs text-secondary">Увага</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-1 -mr-1 space-y-1">

<div className="group flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-all">
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-primary truncate">Сукня міді "Лора"</span>
<span className="text-[10px] text-secondary">Плаття</span>
</div>
<div className="text-right">
<div className="text-xs font-medium text-rose-400">+150 ₴</div>
<div className="text-[10px] text-secondary">vs Kasta</div>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-all">
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-primary truncate">Брюки палаццо бежеві</span>
<span className="text-[10px] text-secondary">Штани</span>
</div>
<div className="text-right">
<div className="text-xs font-medium text-emerald-400">-12%</div>
<div className="text-[10px] text-secondary">Можливість</div>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-all">
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-primary truncate">Жакет оверсайз клітинка</span>
<span className="text-[10px] text-secondary">Жакети</span>
</div>
<div className="text-right">
<div className="text-xs font-medium text-rose-400">+350 ₴</div>
<div className="text-[10px] text-secondary">Критично</div>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-all">
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-primary truncate">Спідниця плісе максі</span>
<span className="text-[10px] text-secondary">Спідниці</span>
</div>
<div className="text-right">
<div className="text-xs font-medium text-amber-400">Немає в наявності</div>
<div className="text-[10px] text-secondary">Rozetka</div>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/5 transition-all">
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-primary truncate">Блуза віскозна чорна</span>
<span className="text-[10px] text-secondary">Блузи</span>
</div>
<div className="text-right">
<div className="text-xs font-medium text-emerald-400">-50 ₴</div>
<div className="text-[10px] text-secondary">Оптимально</div>
</div>
</div>
</div>
<button className="mt-3 w-full py-2 text-xs font-medium text-secondary hover:text-primary border border-white/5 rounded bg-background hover:bg-white/5 transition-colors">
                            Всі рекомендації
                        </button>
</div>
</div>

<div className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col">

<div className="p-4 border-b border-border flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 w-full sm:w-auto">
<div className="relative flex-1 sm:flex-none">
<i className="absolute left-2.5 top-1.5 w-4 h-4 text-secondary" data-lucide="search"></i>
<input className="w-full sm:w-64 bg-background border border-border rounded pl-9 pr-3 py-1.5 text-xs text-primary focus:outline-none focus:border-rose-500/50" placeholder="Пошук артикулу, назви..." type="text"/>
</div>
<button className="p-1.5 border border-border rounded bg-background text-secondary hover:text-primary">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/5 text-primary rounded hover:bg-white/10 transition">
                                Експорт
                            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border bg-white/[0.02]">
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider w-12">Фото</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider">Назва товару</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider">Категорія</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-right">Наша ціна</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-right">Мін. Конкурент</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-right">Різниця</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-center">Сайти</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-center">Статус</th>
<th className="py-3 px-4 text-xs font-medium text-secondary uppercase tracking-wider text-right">Оновлено</th>
</tr>
</thead>
<tbody className="divide-y divide-border">

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-rose-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-rose-400" data-lucide="image"></i>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-primary">Сукня міді з принтом</div>
<div className="text-[10px] text-secondary">Арт: STM-2024-DR-01</div>
</td>
<td className="py-3 px-4 text-xs text-secondary">Сукні</td>
<td className="py-3 px-4 text-sm text-primary text-right">1 299 ₴</td>
<td className="py-3 px-4 text-sm text-primary text-right">1 150 ₴</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-rose-500/10 text-rose-400">
                                            +13%
                                        </span>
</td>
<td className="py-3 px-4 text-xs text-secondary text-center">3</td>
<td className="py-3 px-4 text-center">
<i className="w-4 h-4 text-rose-500 mx-auto" data-lucide="arrow-up-right"></i>
</td>
<td className="py-3 px-4 text-xs text-secondary text-right">10 хв</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-rose-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-rose-400" data-lucide="image"></i>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-primary">Класичні брюки мокко</div>
<div className="text-[10px] text-secondary">Арт: STM-PNT-MO-22</div>
</td>
<td className="py-3 px-4 text-xs text-secondary">Штани</td>
<td className="py-3 px-4 text-sm text-primary text-right">899 ₴</td>
<td className="py-3 px-4 text-sm text-primary text-right">950 ₴</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400">
                                            -5.3%
                                        </span>
</td>
<td className="py-3 px-4 text-xs text-secondary text-center">2</td>
<td className="py-3 px-4 text-center">
<i className="w-4 h-4 text-emerald-500 mx-auto" data-lucide="check-circle-2"></i>
</td>
<td className="py-3 px-4 text-xs text-secondary text-right">1 год</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors cursor-pointer">
<td className="py-3 px-4">
<div className="h-8 w-8 rounded bg-rose-500/10 flex items-center justify-center">
<i className="w-4 h-4 text-rose-400" data-lucide="image"></i>
</div>
</td>
<td className="py-3 px-4">
<div className="text-sm font-medium text-primary">Базова футболка біла</div>
<div className="text-[10px] text-secondary">Арт: STM-TSH-WHT-05</div>
</td>
<td className="py-3 px-4 text-xs text-secondary">Футболки</td>
<td className="py-3 px-4 text-sm text-primary text-right">450 ₴</td>
<td className="py-3 px-4 text-sm text-primary text-right">450 ₴</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-white/5 text-secondary">
                                            0%
                                        </span>
</td>
<td className="py-3 px-4 text-xs text-secondary text-center">4</td>
<td className="py-3 px-4 text-center">
<i className="w-4 h-4 text-secondary mx-auto" data-lucide="minus"></i>
</td>
<td className="py-3 px-4 text-xs text-secondary text-right">2 год</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden 2xl:flex w-72 flex-col border-l border-border bg-surface/30 backdrop-blur-xl">
<div className="p-4 border-b border-border flex items-center justify-between">
<h2 className="text-sm font-medium text-primary">Жива стрічка</h2>
<button className="text-secondary hover:text-primary"><i className="w-4 h-4" data-lucide="filter"></i></button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex gap-3 items-start">
<div className="mt-0.5 min-w-[16px]">
<i className="w-4 h-4 text-rose-500" data-lucide="arrow-down-circle"></i>
</div>
<div>
<p className="text-xs text-primary leading-tight">Конкурент <b>Kasta</b> знизив ціну на <span className="text-secondary">Літні сукні</span> на 15%.</p>
<span className="text-[10px] text-secondary mt-1 block">5 хв тому</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 min-w-[16px]">
<i className="w-4 h-4 text-amber-500" data-lucide="alert-octagon"></i>
</div>
<div>
<p className="text-xs text-primary leading-tight">Помилка парсингу <b>Rozetka</b>. Перевірте проксі.</p>
<span className="text-[10px] text-secondary mt-1 block">32 хв тому</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 min-w-[16px]">
<i className="w-4 h-4 text-emerald-500" data-lucide="arrow-up-circle"></i>
</div>
<div>
<p className="text-xs text-primary leading-tight"><b>Vovk</b> підняв ціни на <span className="text-secondary">Жакети</span>. Наша пропозиція вигідніша.</p>
<span className="text-[10px] text-secondary mt-1 block">2 год тому</span>
</div>
</div>

<div className="flex gap-3 items-start">
<div className="mt-0.5 min-w-[16px]">
<i className="w-4 h-4 text-blue-500" data-lucide="info"></i>
</div>
<div>
<p className="text-xs text-primary leading-tight">Синхронізація каталогу Stimma.com.ua завершена.</p>
<span className="text-[10px] text-secondary mt-1 block">4 год тому</span>
</div>
</div>
</div>
<div className="p-4 border-t border-border">
<button className="w-full py-1.5 text-xs text-secondary hover:text-primary border border-border rounded hover:bg-white/5 transition">
                Всі сповіщення
            </button>
</div>
</aside>


    </>
  );
}
