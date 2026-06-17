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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#6366f1',
'primary-light': '#a5b4fc',
brand: {
50: '#f5f3ff',
100: '#ede9fe',
500: '#8b5cf6',
600: '#7c3aed',
}
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': '1rem',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Mobile Sidebar Toggle
        const sidebar = document.getElementById('sidebar');
        const backdrop = document.getElementById('sidebarBackdrop');
        
        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('hidden');
            }
        }

        // Dark Mode Toggle
        const themeToggleBtn = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        // Check local storage or system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
            // Update charts colors on theme change
            updateChartsTheme();
        });

        // Chart.js Configuration
        // Common styling variables based on theme
        const getChartColors = () => {
            const isDark = document.documentElement.classList.contains('dark');
            return {
                text: isDark ? '#9ca3af' : '#6b7280', // gray-400 : gray-500
                grid: isDark ? '#374151' : '#f3f4f6', // gray-700 : gray-100
                costBar: '#8b5cf6', // violet-500
                expenseBar: isDark ? '#312e81' : '#ddd6fe', // indigo-900 : violet-200
                donutCyan: '#22d3ee', // cyan-400
                donutEmerald: '#34d399', // emerald-400
                donutBg: isDark ? '#1f2937' : '#f3f4f6' // gray-800 : gray-100
            };
        };

        let barChartInstance = null;
        let donutChartInstance = null;

        function initCharts() {
            const colors = getChartColors();

            // Bar Chart Setup
            const barCtx = document.getElementById('barChart').getContext('2d');
            barChartInstance = new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
                    datasets: [
                        {
                            label: 'Expense',
                            data: [3000, 4500, 5000, 3000, 8000, 3000, 5000, 4000, 5500],
                            backgroundColor: colors.expenseBar,
                            borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
                            borderSkipped: false,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        },
                        {
                            label: 'Cost',
                            data: [1500, 2000, 3000, 2000, 6000, 2000, 3000, 3000, 4000],
                            backgroundColor: colors.costBar,
                            borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 4, bottomRight: 4 },
                            borderSkipped: false,
                            barPercentage: 0.6,
                            categoryPercentage: 0.8
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'index',
                        intersect: false,
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                usePointStyle: true,
                                boxWidth: 6,
                                boxHeight: 6,
                                color: colors.text,
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 11
                                },
                                padding: 20
                            }
                        },
                        tooltip: {
                            enabled: false // Custom HTML tooltip simulated in layout
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                color: colors.text,
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 11
                                }
                            }
                        },
                        y: {
                            stacked: true,
                            border: { display: false },
                            grid: {
                                color: colors.grid,
                                drawTicks: false,
                            },
                            ticks: {
                                color: colors.text,
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 11
                                },
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                },
                                stepSize: 3000
                            },
                            beginAtZero: true
                        }
                    }
                }
            });

            // Donut Chart Setup
            const donutCtx = document.getElementById('donutChart').getContext('2d');
            donutChartInstance = new Chart(donutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Bonuses', 'Incentives'],
                    datasets: [{
                        data: [48.5, 51.5],
                        backgroundColor: [
                            colors.donutCyan,
                            colors.donutEmerald
                        ],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '85%',
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true,
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            bodyFont: { family: "'Inter', sans-serif" },
                            callbacks: {
                                label: function(context) {
                                    return context.label + ': ' + context.parsed + '%';
                                }
                            }
                        }
                    }
                },
                plugins: [{
                    id: 'customBackground',
                    beforeDraw: (chart) => {
                        const { ctx, width, height } = chart;
                        ctx.save();
                        const arc = chart.getDatasetMeta(0).data[0];
                        if(arc) {
                            const radius = arc.outerRadius;
                            const innerRadius = arc.innerRadius;
                            ctx.beginPath();
                            ctx.arc(width / 2, height / 2, (radius + innerRadius) / 2, 0, 2 * Math.PI);
                            ctx.lineWidth = radius - innerRadius;
                            ctx.strokeStyle = colors.donutBg;
                            ctx.stroke();
                        }
                        ctx.restore();
                    }
                }]
            });
        }

        function updateChartsTheme() {
            if(barChartInstance && donutChartInstance) {
                const colors = getChartColors();
                
                // Update Bar Chart
                barChartInstance.options.scales.x.ticks.color = colors.text;
                barChartInstance.options.scales.y.ticks.color = colors.text;
                barChartInstance.options.scales.y.grid.color = colors.grid;
                barChartInstance.options.plugins.legend.labels.color = colors.text;
                barChartInstance.data.datasets[0].backgroundColor = colors.expenseBar;
                barChartInstance.update();

                // Update Donut Chart custom background plugin isn't reactive easily without re-init, 
                // but we can update the config and trigger draw
                donutChartInstance.update();
            }
        }

        // Initialize charts on load
        document.addEventListener('DOMContentLoaded', initCharts);

        // Listen for theme changes from system if set to auto (optional refinement)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!('theme' in localStorage)) {
                if (e.matches) {
                    htmlElement.classList.add('dark');
                } else {
                    htmlElement.classList.remove('dark');
                }
                updateChartsTheme();
            }
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
      

<div className="fixed inset-0 bg-gray-900/50 z-20 hidden lg:hidden" id="sidebarBackdrop" onclick="toggleSidebar()"></div>

<aside className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transform -translate-x-full lg:translate-x-0 lg:static lg:flex flex-col transition-transform duration-300 ease-in-out" id="sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 lg:border-none lg:mt-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
<div className="w-4 h-4 border-2 border-white dark:border-black rounded-sm relative">
<div className="absolute w-2 h-2 bg-white dark:bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
<span className="font-semibold text-lg tracking-tight">Ocupite</span>
<i className="w-4 h-4 text-gray-400 ml-1" data-lucide="chevrons-up-down"></i>
</div>

<button className="lg:hidden text-gray-500" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="px-6 py-4 hidden">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?img=11"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">

<div>
<p className="px-2 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Main Menu</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Dashboard
                    </a>
<a className="flex items-center justify-between px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="check-square"></i> Tasks
                        </div>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar"></i> Calendar
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i> Settings
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="help-circle"></i> Help &amp; Center
                    </a>
</nav>
</div>

<div>
<p className="px-2 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2">Team Management</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="line-chart"></i> Performance
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-100/80 dark:bg-gray-800 rounded-lg transition-colors border border-gray-200/50 dark:border-gray-700/50 shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="circle-dollar-sign"></i> Payrolls
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i> Invoices
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i> Employees
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="user-plus"></i> Hiring
                    </a>
</nav>
</div>

<div>
<button className="w-full flex items-center justify-between px-2 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-2 group">
<span>List</span>
<i className="w-3 h-3 group-hover:text-gray-600 dark:group-hover:text-gray-300" data-lucide="chevron-up"></i>
</button>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<span className="text-base">💰</span> Salary Information
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<span className="text-base">⚖️</span> Compensation Breakdown
                    </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors" href="#">
<span className="text-base">📊</span> Project-specific Data
                    </a>
</nav>
</div>
</div>

<div className="p-4 mt-auto">
<div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
<div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mx-auto mb-3">
<i className="w-4 h-4 text-indigo-600 dark:text-indigo-400" data-lucide="gem"></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Upgrade plan</h4>
<p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Your free trial will be over soon</p>
<button className="w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm font-medium py-2 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
                    Upgrade Now
                </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white dark:bg-gray-950 rounded-tl-none lg:rounded-tl-2xl border-t lg:border-t lg:border-l border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden z-10">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="lg:hidden text-gray-500 hover:text-gray-900 dark:hover:text-white" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Payrolls</h1>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex relative group">
<i className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 w-64 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:ring-indigo-500/40 transition-all dark:text-white placeholder-gray-400" placeholder="Search anything .." type="text"/>
</div>

<div className="flex items-center gap-2">
<button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
<i className="w-4 h-4" data-lucide="mail"></i>
</button>
<button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 relative">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
</button>
<button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hidden sm:block" id="themeToggle">
<i className="w-4 h-4 dark:hidden" data-lucide="moon"></i>
<i className="w-4 h-4 hidden dark:block" data-lucide="sun"></i>
</button>
</div>

<div className="hidden sm:flex items-center -space-x-2 border-l border-gray-200 dark:border-gray-800 pl-4 ml-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 z-30 relative" src="https://i.pravatar.cc/150?img=32"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 z-20 relative" src="https://i.pravatar.cc/150?img=12"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 z-10 relative" src="https://i.pravatar.cc/150?img=68"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6">

<div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 rounded-lg p-3 flex items-start sm:items-center gap-3">
<div className="text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-0 flex-shrink-0">
<i className="w-4 h-4" data-lucide="info"></i>
</div>
<p className="text-sm text-emerald-800 dark:text-emerald-300">
                    Payroll submission for the current pay period is due in 2 days. review and finalize all employee payroll details.
                </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<button className="flex items-center justify-between w-full sm:w-auto px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<span>01 July - 31 July 2024</span>
<i className="w-4 h-4 ml-3 text-gray-400" data-lucide="chevron-down"></i>
</button>
<button className="flex items-center justify-center sm:w-auto px-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="download"></i>
                    Export
                </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Payrolls Cost</p>
<div className="flex items-end gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$12.500</h3>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded mb-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 20%
                        </div>
</div>
<p className="text-xs text-gray-400 mt-2">last month</p>
</div>

<div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Expense</p>
<div className="flex items-end gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$2.560</h3>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded mb-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> 0.1%
                        </div>
</div>
<p className="text-xs text-gray-400 mt-2">last month</p>
</div>

<div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Pending payments</p>
<div className="flex items-end gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">$4.700</h3>
<div className="flex items-center gap-1 text-xs font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-1.5 py-0.5 rounded mb-1">
                            -50
                        </div>
</div>
<p className="text-xs text-gray-400 mt-2">Total Employee</p>
</div>

<div className="bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
<p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Payrolls</p>
<div className="flex items-end gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">200</h3>
</div>

<p className="text-xs text-transparent mt-2">.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-gray-900 dark:text-white">Payroll Cost Overview</h2>
<a className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors" href="#">
                            More details <i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
</div>
<div className="flex-1 relative min-h-[250px] w-full">
<canvas id="barChart"></canvas>

<div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-3 z-10 hidden sm:block pointer-events-none">
<p className="text-xs font-medium text-gray-900 dark:text-white mb-2">July 2024</p>
<div className="flex justify-between items-center gap-6 mb-1">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs text-gray-500 dark:text-gray-400">$8.740,00</span>
</div>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> 51.3%</span>
</div>
<div className="flex justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-200 dark:bg-indigo-900"></span>
<span className="text-xs text-gray-500 dark:text-gray-400">$2.110,00</span>
</div>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5"><i className="w-3 h-3" data-lucide="arrow-up-right"></i> 12.1%</span>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5 flex flex-col">
<h2 className="text-base font-semibold text-gray-900 dark:text-white mb-6">Bonuses and Incentives</h2>
<div className="flex-1 flex flex-col items-center justify-center relative min-h-[200px]">
<div className="relative w-48 h-48">
<canvas id="donutChart"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span className="text-xs text-gray-500 dark:text-gray-400">Totals</span>
<span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">$10.500</span>
</div>
</div>
<div className="w-full flex justify-between mt-6 px-4">
<div className="border-l-2 border-cyan-400 pl-2">
<p className="text-sm font-semibold text-gray-900 dark:text-white">$5.100</p>
<p className="text-xs text-gray-500 dark:text-gray-400">Bonuses</p>
</div>
<div className="border-l-2 border-emerald-400 pl-2">
<p className="text-sm font-semibold text-gray-900 dark:text-white">$5.400</p>
<p className="text-xs text-gray-500 dark:text-gray-400">Incentives</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        More details
                    </button>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">

<div className="p-5 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h2 className="text-base font-semibold text-gray-900 dark:text-white">Payroll list</h2>
<div className="flex items-center gap-3">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-1.5 w-full sm:w-48 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:text-white placeholder-gray-400 transition-all" placeholder="Search Employee" type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
                            All Status <i className="w-4 h-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
<thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50/50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
<tr>
<th className="px-5 py-3 w-12" scope="col">
<input className="custom-checkbox rounded" type="checkbox"/>
</th>
<th className="px-5 py-3 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" scope="col">
                                    Payroll ID <i className="w-3 h-3" data-lucide="chevrons-up-down"></i>
</th>
<th className="px-5 py-3 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" scope="col">
                                    Employee name <i className="w-3 h-3" data-lucide="chevrons-up-down"></i>
</th>
<th className="px-5 py-3 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" scope="col">
                                    Role <i className="w-3 h-3" data-lucide="chevrons-up-down"></i>
</th>
<th className="px-5 py-3 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200" scope="col">
                                    Date &amp; Time <i className="w-3 h-3" data-lucide="chevrons-up-down"></i>
</th>
<th className="px-5 py-3 font-medium" scope="col">
                                    Total Salary
                                </th>
<th className="px-5 py-3 font-medium" scope="col">
                                    Reimbursments
                                </th>
<th className="px-5 py-3 font-medium" scope="col">
                                    Status
                                </th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200 dark:divide-gray-800">

<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-5 py-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-300 font-medium">PYRL120124</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<img alt="Hazel Nutt" className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/150?img=47"/>
<span className="text-gray-900 dark:text-gray-200 font-medium">Hazel Nutt</span>
</div>
</td>
<td className="px-5 py-4">Lead UI/UX Designer</td>
<td className="px-5 py-4">21 Jun, 2024 - 05.05 pm</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200 font-medium">$ 2.500.00</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200">$ 500.00</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
                                        Completed
                                    </span>
</td>
</tr>

<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-5 py-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-300 font-medium">PYRL120124</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<img alt="Simon Cyrene" className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/150?img=11"/>
<span className="text-gray-900 dark:text-gray-200 font-medium">Simon Cyrene</span>
</div>
</td>
<td className="px-5 py-4">Sr UI/UX Designer</td>
<td className="px-5 py-4">21 Jun, 2024 - 05.03 pm</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200 font-medium">$ 2.300.00</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200">$ 100.00</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
                                        Completed
                                    </span>
</td>
</tr>

<tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<td className="px-5 py-4">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-300 font-medium">PYRL120124</td>
<td className="px-5 py-4">
<div className="flex items-center gap-3">
<img alt="Aida Bugg" className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/150?img=5"/>
<span className="text-gray-900 dark:text-gray-200 font-medium">Aida Bugg</span>
</div>
</td>
<td className="px-5 py-4">Jr Graphics Designer</td>
<td className="px-5 py-4">21 Jun, 2024 - 05.01 pm</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200 font-medium">$ 2.000.00</td>
<td className="px-5 py-4 text-gray-900 dark:text-gray-200">$ 1.000.00</td>
<td className="px-5 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/20">
                                        Pending
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
<span>Showing 1 to 3 of 10 entries</span>
<div className="flex gap-1">
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled="">Prev</button>
<button className="px-3 py-1 border border-transparent bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-md font-medium">1</button>
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">2</button>
<button className="px-3 py-1 border border-gray-200 dark:border-gray-700 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">Next</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
