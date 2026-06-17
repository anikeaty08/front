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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
glass: {
100: 'rgba(255, 255, 255, 0.03)',
200: 'rgba(255, 255, 255, 0.05)',
border: 'rgba(255, 255, 255, 0.08)',
highlight: 'rgba(255, 255, 255, 0.15)',
},
neon: {
blue: '#3b82f6',
purple: '#8b5cf6',
pink: '#ec4899',
teal: '#14b8a6',
}
}
}
}
}



        // Common Chart Defaults for Premium Look
        Chart.defaults.color = '#94a3b8';
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';
        Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        Chart.defaults.plugins.tooltip.titleColor = '#fff';
        Chart.defaults.plugins.tooltip.bodyColor = '#cbd5e1';
        Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.1)';
        Chart.defaults.plugins.tooltip.borderWidth = 1;
        Chart.defaults.plugins.tooltip.padding = 10;
        Chart.defaults.plugins.tooltip.cornerRadius = 8;
        Chart.defaults.plugins.legend.labels.usePointStyle = true;
        Chart.defaults.plugins.legend.labels.boxWidth = 8;

        // Gradients
        function createGradient(ctx, colorStart, colorEnd) {
            const gradient = ctx.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, colorStart);
            gradient.addColorStop(1, colorEnd);
            return gradient;
        }

        // 1. Revenue Line Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        const revenueGradient = createGradient(revenueCtx, 'rgba(59, 130, 246, 0.5)', 'rgba(59, 130, 246, 0.0)');
        
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Current Year',
                    data: [65, 78, 72, 85, 92, 88, 96, 105, 110, 102, 115, 125],
                    borderColor: '#3b82f6',
                    backgroundColor: revenueGradient,
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#1e293b',
                    pointBorderColor: '#3b82f6',
                    pointBorderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { 
                        border: { display: false },
                        grid: { color: 'rgba(255,255,255,0.03)', borderDash: [5, 5] } 
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            }
        });

        // 2. Traffic Doughnut Chart
        const trafficCtx = document.getElementById('trafficChart').getContext('2d');
        new Chart(trafficCtx, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Social', 'Organic', 'Referral'],
                datasets: [{
                    data: [35, 25, 25, 15],
                    backgroundColor: [
                        '#3b82f6', // Blue
                        '#8b5cf6', // Purple
                        '#2dd4bf', // Teal
                        '#ec4899'  // Pink
                    ],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // 3. Conversions Bar Chart
        const conversionCtx = document.getElementById('conversionChart').getContext('2d');
        new Chart(conversionCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Conversions',
                    data: [12, 19, 15, 25, 22, 30, 28],
                    backgroundColor: '#14b8a6', // Teal
                    borderRadius: 4,
                    barThickness: 20
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: { grid: { display: false }, border: { display: false } },
                    y: { display: false }
                }
            }
        });

        // 4. Radar Chart
        const radarCtx = document.getElementById('radarChart').getContext('2d');
        new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
                datasets: [{
                    label: 'System A',
                    data: [85, 90, 70, 80, 95],
                    fill: true,
                    backgroundColor: 'rgba(236, 72, 153, 0.2)', // Pink transparent
                    borderColor: '#ec4899',
                    pointBackgroundColor: '#ec4899',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#ec4899'
                }, {
                    label: 'System B',
                    data: [70, 85, 90, 60, 80],
                    fill: true,
                    backgroundColor: 'rgba(59, 130, 246, 0.2)', // Blue transparent
                    borderColor: '#3b82f6',
                    pointBackgroundColor: '#3b82f6',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: { line: { borderWidth: 2 } },
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#94a3b8', font: { size: 10 } },
                        ticks: { display: false, backdropColor: 'transparent' }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });

        // 5. Comparison Mixed/Line Chart
        const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
        new Chart(comparisonCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [
                    {
                        label: 'Projected',
                        data: [200, 250, 300, 350],
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        borderRadius: 6,
                        barPercentage: 0.6,
                        categoryPercentage: 0.7
                    },
                    {
                        type: 'line',
                        label: 'Actual',
                        data: [210, 240, 320, 340],
                        borderColor: '#8b5cf6', // Purple
                        borderWidth: 2,
                        tension: 0.3,
                        pointBackgroundColor: '#1e293b',
                        pointBorderColor: '#8b5cf6',
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { 
                        display: true, 
                        position: 'top', 
                        align: 'end',
                        labels: { boxWidth: 10, usePointStyle: true } 
                    }
                },
                scales: {
                    x: { grid: { display: false }, border: { display: false } },
                    y: { 
                        display: true,
                        grid: { color: 'rgba(255,255,255,0.03)', borderDash: [4, 4] },
                        border: { display: false }
                    }
                }
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
      

<div bis_size='{"x":0,"y":0,"w":911,"h":598,"abs_x":440,"abs_y":43}' className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div bis_size='{"x":-91,"y":-119,"w":607,"h":398,"abs_x":349,"abs_y":-76}' className="absolute top-[-20%] left-[-10%] w-2/3 h-2/3 bg-blue-900/20 rounded-full blur-3xl opacity-40 mix-blend-screen animate-pulse"></div>
<div bis_size='{"x":546,"y":418,"w":455,"h":299,"abs_x":986,"abs_y":461}' className="absolute bottom-[-20%] right-[-10%] w-1/2 h-1/2 bg-purple-900/20 rounded-full blur-3xl opacity-30 mix-blend-screen"></div>
<div bis_size='{"x":516,"y":119,"w":303,"h":199,"abs_x":956,"abs_y":162}' className="absolute top-[20%] right-[10%] w-1/3 h-1/3 bg-teal-900/10 rounded-full blur-3xl opacity-20"></div>
</div>
<div bis_size='{"x":0,"y":0,"w":911,"h":2039,"abs_x":440,"abs_y":43}' className="relative z-10 flex min-h-screen">

<aside bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="hidden lg:flex flex-col w-64 border-r border-glass-border bg-slate-900/30 backdrop-blur-xl fixed inset-y-0 left-0 z-50">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="p-6 flex items-center gap-3">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold tracking-tighter shadow-lg shadow-blue-500/20">
                    N
                </div>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-white font-medium tracking-tight text-lg">NEXUS</span>
</div>
<nav bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex-1 px-4 space-y-1 mt-6">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-white border border-white/5 shadow-sm transition-all group" href="#">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-blue-400" icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium">Dashboard</span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="group-hover:text-purple-400 transition-colors" icon="lucide:bar-chart-2" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium">Analytics</span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="group-hover:text-pink-400 transition-colors" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium">Customers</span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="group-hover:text-teal-400 transition-colors" icon="lucide:wallet" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium">Revenue</span>
</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all group" href="#">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="group-hover:text-slate-200 transition-colors" icon="lucide:settings" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium">Settings</span>
</a>
</nav>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="p-4 border-t border-glass-border">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center border border-white/10">
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-slate-300" icon="lucide:user" width="16"></iconify-icon>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex-1 overflow-hidden">
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-sm font-medium text-white truncate">Alex Morgan</p>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-xs text-slate-500 truncate">Pro Plan</p>
</div>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-slate-500" icon="lucide:chevron-up" width="16"></iconify-icon>
</div>
</div>
</aside>

<main bis_size='{"x":0,"y":0,"w":911,"h":2039,"abs_x":440,"abs_y":43}' className="flex-1 lg:ml-64 relative">

<header bis_size='{"x":0,"y":0,"w":911,"h":79,"abs_x":440,"abs_y":43}' className="sticky top-0 z-40 px-6 py-4 bg-slate-950/70 backdrop-blur-xl border-b border-glass-border flex items-center justify-between">
<div bis_size='{"x":24,"y":16,"w":239,"h":46,"abs_x":464,"abs_y":59}' className="flex items-center gap-4">
<button bis_size='{"x":24,"y":16,"w":40,"h":46,"abs_x":464,"abs_y":59}' className="lg:hidden p-2 text-slate-400 hover:text-white">
<iconify-icon bis_size='{"x":32,"y":24,"w":24,"h":24,"abs_x":472,"abs_y":67}' icon="lucide:menu" width="24"></iconify-icon>
</button>
<div bis_size='{"x":80,"y":17,"w":183,"h":44,"abs_x":520,"abs_y":60}' className="hidden sm:flex flex-col">
<span bis_size='{"x":80,"y":17,"w":183,"h":16,"abs_x":520,"abs_y":60}' className="text-xs text-slate-500 font-medium tracking-wide uppercase">Overview</span>
<h1 bis_size='{"x":80,"y":33,"w":183,"h":28,"abs_x":520,"abs_y":76}' className="text-lg font-medium text-white tracking-tight">Financial Performance</h1>
</div>
</div>
<div bis_size='{"x":579,"y":18,"w":308,"h":42,"abs_x":1019,"abs_y":61}' className="flex items-center gap-4">
<div bis_size='{"x":579,"y":22,"w":256,"h":34,"abs_x":1019,"abs_y":65}' className="relative hidden md:block group">
<iconify-icon bis_size='{"x":591,"y":31,"w":16,"h":16,"abs_x":1031,"abs_y":74}' className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-400 transition-colors" icon="lucide:search" width="16"></iconify-icon>
<input bis_size='{"x":579,"y":22,"w":256,"h":34,"abs_x":1019,"abs_y":65}' className="bg-glass-100 border border-glass-border rounded-lg pl-9 pr-4 py-1.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-glass-200 transition-all w-64" placeholder="Search analytics..." type="text"/>
</div>
<button bis_size='{"x":851,"y":18,"w":36,"h":42,"abs_x":1291,"abs_y":61}' className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5">
<iconify-icon bis_size='{"x":859,"y":26,"w":20,"h":20,"abs_x":1299,"abs_y":69}' icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
<span bis_size='{"x":871,"y":26,"w":6,"h":6,"abs_x":1311,"abs_y":69}' className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
</button>
</div>
</header>
<div bis_size='{"x":0,"y":79,"w":911,"h":1960,"abs_x":440,"abs_y":122}' className="pt-6 pr-6 pb-6 pl-6 space-y-6">

<div bis_size='{"x":24,"y":103,"w":863,"h":288,"abs_x":464,"abs_y":146}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":24,"y":103,"w":419,"h":132,"abs_x":464,"abs_y":146}' className="group relative bg-glass-100 backdrop-blur-md border border-glass-border rounded-2xl p-5 shadow-lg shadow-black/20 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
<div bis_size='{"x":25,"y":104,"w":417,"h":130,"abs_x":465,"abs_y":147}' className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div bis_size='{"x":45,"y":124,"w":377,"h":52,"abs_x":485,"abs_y":167}' className="relative flex justify-between items-start mb-4">
<div bis_size='{"x":45,"y":124,"w":105,"h":52,"abs_x":485,"abs_y":167}' className="">
<p bis_size='{"x":45,"y":124,"w":105,"h":16,"abs_x":485,"abs_y":167}' className="text-slate-400 text-xs font-medium uppercase tracking-wider">Total Revenue</p>
<h3 bis_size='{"x":45,"y":144,"w":105,"h":32,"abs_x":485,"abs_y":187}' className="text-2xl font-medium text-white mt-1 tracking-tight">$124,500</h3>
</div>
<div bis_size='{"x":384,"y":124,"w":38,"h":44,"abs_x":824,"abs_y":167}' className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
<iconify-icon bis_size='{"x":393,"y":133,"w":20,"h":20,"abs_x":833,"abs_y":176}' icon="lucide:dollar-sign" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div bis_size='{"x":45,"y":192,"w":377,"h":22,"abs_x":485,"abs_y":235}' className="relative flex items-center gap-2">
<span bis_size='{"x":45,"y":192,"w":65,"h":22,"abs_x":485,"abs_y":235}' className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon bis_size='{"x":52,"y":197,"w":12,"h":12,"abs_x":492,"abs_y":240}' className="mr-1" icon="lucide:arrow-up-right" width="12"></iconify-icon> 12.5%
                            </span>
<span bis_size='{"x":118,"y":195,"w":75,"h":16,"abs_x":558,"abs_y":238}' className="text-xs text-slate-500">vs last month</span>
</div>
</div>

<div bis_size='{"x":467,"y":103,"w":419,"h":132,"abs_x":907,"abs_y":146}' className="group relative bg-glass-100 backdrop-blur-md border border-glass-border rounded-2xl p-5 shadow-lg shadow-black/20 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
<div bis_size='{"x":468,"y":104,"w":417,"h":130,"abs_x":908,"abs_y":147}' className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div bis_size='{"x":488,"y":124,"w":377,"h":52,"abs_x":928,"abs_y":167}' className="relative flex justify-between items-start mb-4">
<div bis_size='{"x":488,"y":124,"w":93,"h":52,"abs_x":928,"abs_y":167}' className="">
<p bis_size='{"x":488,"y":124,"w":93,"h":16,"abs_x":928,"abs_y":167}' className="text-slate-400 text-xs font-medium uppercase tracking-wider">Active Users</p>
<h3 bis_size='{"x":488,"y":144,"w":93,"h":32,"abs_x":928,"abs_y":187}' className="text-2xl font-medium text-white mt-1 tracking-tight">45,231</h3>
</div>
<div bis_size='{"x":828,"y":124,"w":38,"h":44,"abs_x":1268,"abs_y":167}' className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
<iconify-icon bis_size='{"x":837,"y":133,"w":20,"h":20,"abs_x":1277,"abs_y":176}' icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div bis_size='{"x":488,"y":192,"w":377,"h":22,"abs_x":928,"abs_y":235}' className="relative flex items-center gap-2">
<span bis_size='{"x":488,"y":192,"w":60,"h":22,"abs_x":928,"abs_y":235}' className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon bis_size='{"x":495,"y":197,"w":12,"h":12,"abs_x":935,"abs_y":240}' className="mr-1" icon="lucide:arrow-up-right" width="12"></iconify-icon> 8.2%
                            </span>
<span bis_size='{"x":556,"y":195,"w":75,"h":16,"abs_x":996,"abs_y":238}' className="text-xs text-slate-500">vs last month</span>
</div>
</div>

<div bis_size='{"x":24,"y":259,"w":419,"h":132,"abs_x":464,"abs_y":302}' className="group relative bg-glass-100 backdrop-blur-md border border-glass-border rounded-2xl p-5 shadow-lg shadow-black/20 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1">
<div bis_size='{"x":25,"y":260,"w":417,"h":130,"abs_x":465,"abs_y":303}' className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div bis_size='{"x":45,"y":280,"w":377,"h":52,"abs_x":485,"abs_y":323}' className="relative flex justify-between items-start mb-4">
<div bis_size='{"x":45,"y":280,"w":91,"h":52,"abs_x":485,"abs_y":323}' className="">
<p bis_size='{"x":45,"y":280,"w":91,"h":16,"abs_x":485,"abs_y":323}' className="text-slate-400 text-xs font-medium uppercase tracking-wider">Bounce Rate</p>
<h3 bis_size='{"x":45,"y":300,"w":91,"h":32,"abs_x":485,"abs_y":343}' className="text-2xl font-medium text-white mt-1 tracking-tight">24.8%</h3>
</div>
<div bis_size='{"x":384,"y":280,"w":38,"h":44,"abs_x":824,"abs_y":323}' className="p-2 rounded-lg bg-pink-500/10 text-pink-400 border border-pink-500/20">
<iconify-icon bis_size='{"x":393,"y":289,"w":20,"h":20,"abs_x":833,"abs_y":332}' icon="lucide:bar-chart-4" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div bis_size='{"x":45,"y":348,"w":377,"h":22,"abs_x":485,"abs_y":391}' className="relative flex items-center gap-2">
<span bis_size='{"x":45,"y":348,"w":56,"h":22,"abs_x":485,"abs_y":391}' className="flex items-center text-xs font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
<iconify-icon bis_size='{"x":52,"y":353,"w":12,"h":12,"abs_x":492,"abs_y":396}' className="mr-1" icon="lucide:arrow-down-right" width="12"></iconify-icon> 4.1%
                            </span>
<span bis_size='{"x":109,"y":351,"w":75,"h":16,"abs_x":549,"abs_y":394}' className="text-xs text-slate-500">vs last month</span>
</div>
</div>

<div bis_size='{"x":467,"y":259,"w":419,"h":132,"abs_x":907,"abs_y":302}' className="group relative bg-glass-100 backdrop-blur-md border border-glass-border rounded-2xl p-5 shadow-lg shadow-black/20 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-1">
<div bis_size='{"x":468,"y":260,"w":417,"h":130,"abs_x":908,"abs_y":303}' className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div bis_size='{"x":488,"y":280,"w":377,"h":52,"abs_x":928,"abs_y":323}' className="relative flex justify-between items-start mb-4">
<div bis_size='{"x":488,"y":280,"w":90,"h":52,"abs_x":928,"abs_y":323}' className="">
<p bis_size='{"x":488,"y":280,"w":90,"h":16,"abs_x":928,"abs_y":323}' className="text-slate-400 text-xs font-medium uppercase tracking-wider">Avg. Session</p>
<h3 bis_size='{"x":488,"y":300,"w":90,"h":32,"abs_x":928,"abs_y":343}' className="text-2xl font-medium text-white mt-1 tracking-tight">4m 32s</h3>
</div>
<div bis_size='{"x":828,"y":280,"w":38,"h":44,"abs_x":1268,"abs_y":323}' className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
<iconify-icon bis_size='{"x":837,"y":289,"w":20,"h":20,"abs_x":1277,"abs_y":332}' icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div bis_size='{"x":488,"y":348,"w":377,"h":22,"abs_x":928,"abs_y":391}' className="relative flex items-center gap-2">
<span bis_size='{"x":488,"y":348,"w":60,"h":22,"abs_x":928,"abs_y":391}' className="flex items-center text-xs font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
<iconify-icon bis_size='{"x":495,"y":353,"w":12,"h":12,"abs_x":935,"abs_y":396}' className="mr-1" icon="lucide:arrow-up-right" width="12"></iconify-icon> 2.3%
                            </span>
<span bis_size='{"x":556,"y":351,"w":75,"h":16,"abs_x":996,"abs_y":394}' className="text-xs text-slate-500">vs last month</span>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":415,"w":863,"h":916,"abs_x":464,"abs_y":458}' className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":415,"w":863,"h":418,"abs_x":464,"abs_y":458}' className="lg:col-span-2 bg-glass-100 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl shadow-black/10 relative overflow-hidden group">

<div bis_size='{"x":630,"y":416,"w":256,"h":256,"abs_x":1070,"abs_y":459}' className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div bis_size='{"x":49,"y":440,"w":813,"h":44,"abs_x":489,"abs_y":483}' className="flex items-center justify-between mb-6 relative z-10">
<div bis_size='{"x":49,"y":440,"w":188,"h":44,"abs_x":489,"abs_y":483}' className="">
<h3 bis_size='{"x":49,"y":440,"w":188,"h":24,"abs_x":489,"abs_y":483}' className="text-white font-medium tracking-tight">Revenue Growth</h3>
<p bis_size='{"x":49,"y":468,"w":188,"h":16,"abs_x":489,"abs_y":511}' className="text-xs text-slate-400 mt-1">Monthly recurring revenue (MRR)</p>
</div>
<div bis_size='{"x":709,"y":449,"w":152,"h":26,"abs_x":1149,"abs_y":492}' className="flex gap-2">
<button bis_size='{"x":709,"y":449,"w":49,"h":26,"abs_x":1149,"abs_y":492}' className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 transition hover:bg-white/20">12M</button>
<button bis_size='{"x":766,"y":449,"w":47,"h":26,"abs_x":1206,"abs_y":492}' className="text-xs font-medium px-3 py-1 rounded-full text-slate-400 hover:text-white transition">30D</button>
<button bis_size='{"x":822,"y":449,"w":39,"h":26,"abs_x":1262,"abs_y":492}' className="text-xs font-medium px-3 py-1 rounded-full text-slate-400 hover:text-white transition">7D</button>
</div>
</div>
<div bis_size='{"x":49,"y":508,"w":813,"h":300,"abs_x":489,"abs_y":551}' className="relative w-full h-[300px]">
<canvas bis_size='{"x":49,"y":508,"w":813,"h":300,"abs_x":489,"abs_y":551}' className="" height="300" id="revenueChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '813px'}} width="813"></canvas>
</div>
</div>

<div bis_size='{"x":24,"y":857,"w":863,"h":474,"abs_x":464,"abs_y":900}' className="bg-glass-100 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl shadow-black/10 flex flex-col relative overflow-hidden group">

<div bis_size='{"x":25,"y":1138,"w":192,"h":192,"abs_x":465,"abs_y":1181}' className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div bis_size='{"x":49,"y":882,"w":813,"h":44,"abs_x":489,"abs_y":925}' className="mb-4 relative z-10">
<h3 bis_size='{"x":49,"y":882,"w":813,"h":24,"abs_x":489,"abs_y":925}' className="text-white font-medium tracking-tight">Traffic Sources</h3>
<p bis_size='{"x":49,"y":910,"w":813,"h":16,"abs_x":489,"abs_y":953}' className="text-xs text-slate-400 mt-1">User acquisition channels</p>
</div>
<div bis_size='{"x":49,"y":942,"w":813,"h":300,"abs_x":489,"abs_y":985}' className="flex-1 flex items-center justify-center relative w-full h-[220px]">
<canvas bis_size='{"x":49,"y":942,"w":813,"h":300,"abs_x":489,"abs_y":985}' className="" height="300" id="trafficChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '813px'}} width="813"></canvas>

<div bis_size='{"x":49,"y":942,"w":813,"h":300,"abs_x":489,"abs_y":985}' className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
<span bis_size='{"x":428,"y":1068,"w":54,"h":32,"abs_x":868,"abs_y":1111}' className="text-2xl font-semibold text-white tracking-tight">Total</span>
<span bis_size='{"x":439,"y":1100,"w":31,"h":16,"abs_x":879,"abs_y":1143}' className="text-xs text-slate-400">100%</span>
</div>
</div>
<div bis_size='{"x":49,"y":1258,"w":813,"h":48,"abs_x":489,"abs_y":1301}' className="mt-4 grid grid-cols-2 gap-4 text-xs relative z-10">
<div bis_size='{"x":49,"y":1258,"w":398,"h":16,"abs_x":489,"abs_y":1301}' className="flex items-center gap-2">
<span bis_size='{"x":49,"y":1262,"w":8,"h":8,"abs_x":489,"abs_y":1305}' className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
<span bis_size='{"x":65,"y":1258,"w":33,"h":16,"abs_x":505,"abs_y":1301}' className="text-slate-300">Direct</span>
</div>
<div bis_size='{"x":463,"y":1258,"w":398,"h":16,"abs_x":903,"abs_y":1301}' className="flex items-center gap-2">
<span bis_size='{"x":463,"y":1262,"w":8,"h":8,"abs_x":903,"abs_y":1305}' className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]"></span>
<span bis_size='{"x":479,"y":1258,"w":34,"h":16,"abs_x":919,"abs_y":1301}' className="text-slate-300">Social</span>
</div>
<div bis_size='{"x":49,"y":1290,"w":398,"h":16,"abs_x":489,"abs_y":1333}' className="flex items-center gap-2">
<span bis_size='{"x":49,"y":1294,"w":8,"h":8,"abs_x":489,"abs_y":1337}' className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
<span bis_size='{"x":65,"y":1290,"w":44,"h":16,"abs_x":505,"abs_y":1333}' className="text-slate-300">Organic</span>
</div>
<div bis_size='{"x":463,"y":1290,"w":398,"h":16,"abs_x":903,"abs_y":1333}' className="flex items-center gap-2">
<span bis_size='{"x":463,"y":1294,"w":8,"h":8,"abs_x":903,"abs_y":1337}' className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]"></span>
<span bis_size='{"x":479,"y":1290,"w":44,"h":16,"abs_x":919,"abs_y":1333}' className="text-slate-300">Referral</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":1355,"w":863,"h":660,"abs_x":464,"abs_y":1398}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":1355,"w":419,"h":318,"abs_x":464,"abs_y":1398}' className="bg-glass-100 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl shadow-black/10 group">
<div bis_size='{"x":49,"y":1380,"w":369,"h":44,"abs_x":489,"abs_y":1423}' className="mb-6 flex justify-between items-end">
<div bis_size='{"x":49,"y":1380,"w":149,"h":44,"abs_x":489,"abs_y":1423}' className="">
<h3 bis_size='{"x":49,"y":1380,"w":149,"h":24,"abs_x":489,"abs_y":1423}' className="text-white font-medium tracking-tight">Weekly Conversions</h3>
<p bis_size='{"x":49,"y":1408,"w":149,"h":16,"abs_x":489,"abs_y":1451}' className="text-xs text-slate-400 mt-1">Goal completion stats</p>
</div>
<iconify-icon bis_size='{"x":398,"y":1404,"w":20,"h":20,"abs_x":838,"abs_y":1447}' className="text-emerald-400" icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<div bis_size='{"x":49,"y":1448,"w":369,"h":200,"abs_x":489,"abs_y":1491}' className="relative w-full h-[200px]">
<canvas bis_size='{"x":49,"y":1448,"w":369,"h":200,"abs_x":489,"abs_y":1491}' height="200" id="conversionChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '369.5px'}} width="369"></canvas>
</div>
</div>

<div bis_size='{"x":467,"y":1355,"w":419,"h":318,"abs_x":907,"abs_y":1398}' className="bg-glass-100 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl shadow-black/10 group">
<div bis_size='{"x":492,"y":1380,"w":369,"h":24,"abs_x":932,"abs_y":1423}' className="mb-4 text-center">
<h3 bis_size='{"x":492,"y":1380,"w":369,"h":24,"abs_x":932,"abs_y":1423}' className="text-white font-medium tracking-tight">System Health</h3>
</div>
<div bis_size='{"x":492,"y":1420,"w":369,"h":220,"abs_x":932,"abs_y":1463}' className="relative w-full h-[220px] flex justify-center">
<canvas bis_size='{"x":492,"y":1420,"w":369,"h":220,"abs_x":932,"abs_y":1463}' height="220" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '220px', width: '369.5px'}} width="369"></canvas>
</div>
</div>

<div bis_size='{"x":24,"y":1697,"w":419,"h":318,"abs_x":464,"abs_y":1740}' className="bg-glass-100 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-xl shadow-black/10 group">
<div bis_size='{"x":49,"y":1722,"w":369,"h":44,"abs_x":489,"abs_y":1765}' className="mb-6">
<h3 bis_size='{"x":49,"y":1722,"w":369,"h":24,"abs_x":489,"abs_y":1765}' className="text-white font-medium tracking-tight">Projected vs Actual</h3>
<p bis_size='{"x":49,"y":1750,"w":369,"h":16,"abs_x":489,"abs_y":1793}' className="text-xs text-slate-400 mt-1">Q3 Performance</p>
</div>
<div bis_size='{"x":49,"y":1790,"w":369,"h":200,"abs_x":489,"abs_y":1833}' className="w-full h-[200px] relative">
<canvas bis_size='{"x":49,"y":1790,"w":369,"h":200,"abs_x":489,"abs_y":1833}' height="200" id="comparisonChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '369.5px'}} width="369"></canvas>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
