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



        // Init Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Init Charts
        document.addEventListener('DOMContentLoaded', function() {
            Chart.defaults.font.family = "'Inter', sans-serif";
            Chart.defaults.color = '#737373';

            const commonOptions = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        backgroundColor: '#171717',
                        titleColor: '#fff',
                        bodyColor: '#a3a3a3',
                        borderColor: '#333',
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8,
                        titleFont: { weight: '600', size: 13 },
                        displayColors: false,
                        callbacks: {
                            label: (context) => ` ${context.parsed.y} ${context.dataset.label === 'Энергия' ? 'кВт·ч' : 'сессий'}`
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { display: false, drawBorder: false },
                        ticks: { color: '#525252', font: { size: 11 }, padding: 10 },
                        border: { display: false }
                    },
                    y: {
                        grid: { color: '#262626', borderDash: [4, 4], drawBorder: false },
                        ticks: { color: '#525252', font: { size: 11 }, padding: 10 },
                        border: { display: false }
                    }
                },
                interaction: {
                    mode: 'nearest',
                    axis: 'x',
                    intersect: false
                },
                elements: {
                    line: { tension: 0.4 }
                }
            };

            // Sessions Chart
            const ctx1 = document.getElementById('sessionsChart').getContext('2d');
            const gradient1 = ctx1.createLinearGradient(0, 0, 0, 300);
            gradient1.addColorStop(0, 'rgba(239, 68, 68, 0.5)');
            gradient1.addColorStop(1, 'rgba(239, 68, 68, 0)');

            new Chart(ctx1, {
                type: 'line',
                data: {
                    labels: ['04 апр', '06 апр', '08 апр', '10 апр', '12 апр', '14 апр', '16 апр', '18 апр', '20 апр', '22 апр', '24 апр'],
                    datasets: [{
                        label: 'Сессии',
                        data: [12, 18, 14, 21, 16, 22, 19, 15, 12, 16, 11],
                        borderColor: '#ef4444',
                        backgroundColor: gradient1,
                        fill: true,
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: '#ef4444',
                        pointHoverBorderColor: '#171717',
                        pointHoverBorderWidth: 3
                    }]
                },
                options: {
                    ...commonOptions,
                    scales: {
                        ...commonOptions.scales,
                        y: { ...commonOptions.scales.y, min: 0, max: 25, ticks: { stepSize: 5 } }
                    }
                }
            });

            // Energy Chart
            const ctx2 = document.getElementById('energyChart').getContext('2d');
            const gradient2 = ctx2.createLinearGradient(0, 0, 0, 300);
            gradient2.addColorStop(0, 'rgba(220, 38, 38, 0.2)');
            gradient2.addColorStop(1, 'rgba(220, 38, 38, 0)');

            new Chart(ctx2, {
                type: 'line',
                data: {
                    labels: ['04 апр', '06 апр', '08 апр', '10 апр', '12 апр', '14 апр', '16 апр', '18 апр', '20 апр', '22 апр', '24 апр'],
                    datasets: [{
                        label: 'Энергия',
                        data: [620, 580, 710, 660, 540, 470, 510, 600, 560, 440, 390],
                        borderColor: '#ef4444',
                        backgroundColor: gradient2,
                        fill: true,
                        borderWidth: 2,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: '#ef4444',
                        pointHoverBorderColor: '#171717',
                        pointHoverBorderWidth: 3
                    }]
                },
                options: {
                    ...commonOptions,
                    scales: {
                        ...commonOptions.scales,
                        y: { ...commonOptions.scales.y, min: 0, max: 800, ticks: { stepSize: 200 } }
                    }
                }
            });
        });
    
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
      
<div className="flex min-h-screen w-full">

<aside className="fixed left-0 top-0 h-full w-72 border-r border-neutral-900 bg-[#0A0A0A] p-6 overflow-y-auto hidden xl:block z-50">

<div className="mb-10 pl-2">
<h1 className="text-2xl font-bold tracking-tighter text-white uppercase italic">
<span className="text-red-600">RED</span> PETROLEUM
                </h1>
</div>
<nav className="space-y-8">

<div>
<h3 className="mb-3 px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">CPO</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="layout-dashboard"></i>
                                Панель управления
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="file-text"></i>
                                Лог событий
                            </a>
</li>

<li>
<a className="flex items-center gap-3 rounded-lg bg-red-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-900/20 transition-all" href="#">
<i className="h-5 w-5 text-white" data-lucide="map-pin"></i>
                                Зарядные локации
                            </a>
</li>
</ul>
</div>

<div>
<h3 className="mb-3 px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">EMSP</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="users"></i>
                                Клиенты
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="building"></i>
                                Корпоративные клиенты
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="tag"></i>
                                Зарядные метки
                            </a>
</li>
</ul>
</div>

<div>
<h3 className="mb-3 px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">EMSP – CPO</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="arrow-left-right"></i>
                                Транзакции
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="bar-chart-3"></i>
                                Статистика
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="check-circle-2"></i>
                                Доступность
                            </a>
</li>
</ul>
</div>

<div>
<h3 className="mb-3 px-2 text-xs font-medium text-neutral-500 uppercase tracking-wider">ADMINISTRATIVE</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="user-cog"></i>
                                Администраторы
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="wallet"></i>
                                Владельцы станций
                            </a>
</li>
<li>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all" href="#">
<i className="h-5 w-5 opacity-70" data-lucide="globe"></i>
                                Роуминг
                            </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 xl:ml-72 lg:p-12 pt-8 pr-8 pb-8 pl-8">

<header className="mb-10">
<h1 className="text-3xl font-semibold text-white tracking-tight mb-1">Зарядная станция Asia Mall
</h1>
<p className="text-base text-neutral-500">улица</p>
</header>

<div className="bg-[#111111] w-full border-neutral-800 border rounded-xl pt-10 pr-10 pb-10 pl-12 shadow-2xl">

<div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-10">
<div className="flex flex-wrap items-center gap-4">

<div className="flex items-center rounded-md border border-neutral-800 bg-[#0A0A0A] p-1">
<button className="hover:text-white transition-colors text-sm font-medium text-neutral-400 rounded pt-1.5 pr-4 pb-1.5 pl-4">НЕДЕЛЯ</button>
<button className="rounded bg-neutral-800 px-4 py-1.5 text-sm font-medium text-white shadow-sm border border-neutral-700/50">МЕСЯЦ</button>
<button className="hover:text-white transition-colors text-sm font-medium text-neutral-400 rounded pt-1.5 pr-4 pb-1.5 pl-4">КВАРТАЛ</button>
<button className="rounded px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors">ГОД</button>
</div>

<div className="flex items-center gap-3 rounded-md border border-neutral-800 bg-[#0A0A0A] px-4 py-2 hover:border-neutral-700 transition-colors cursor-pointer group">
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">04.04.2025</span>
<i className="h-3 w-3 text-neutral-600" data-lucide="arrow-right"></i>
<span className="text-sm text-neutral-400 group-hover:text-white transition-colors">04.05.2025</span>
<i className="ml-2 h-4 w-4 text-neutral-500" data-lucide="calendar"></i>
</div>
</div>

<div className="flex items-center rounded-md border border-neutral-800 bg-[#0A0A0A] p-1">
<button className="rounded bg-neutral-800 px-4 py-1.5 text-sm font-medium text-red-500 shadow-sm border border-neutral-700/50">ДЕНЬ</button>
<button className="rounded px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors">НЕДЕЛЯ</button>
<button className="rounded px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white transition-colors">МЕСЯЦ</button>
</div>
</div>

<div className="mb-12">
<h2 className="text-lg font-semibold text-white tracking-tight mb-6">Количество зарядных сессий</h2>
<div className="select-none w-full h-[300px] relative">
<canvas className="w-full h-full" height="600" id="sessionsChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '960px'}} width="1920"></canvas>
</div>
</div>

<div>
<h2 className="text-lg font-semibold text-white tracking-tight mb-6">Энергия | кВт·ч</h2>
<div className="select-none w-full h-[300px] relative">
<canvas className="w-full h-full" height="600" id="energyChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '960px'}} width="1920"></canvas>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
