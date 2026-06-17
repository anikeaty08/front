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



        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('marketChart').getContext('2d');
            
            Chart.defaults.font.family = 'Inter';
            
            new Chart(ctx, {
                type: 'bar',
                // Horizontal Bar for Country comparison
                data: {
                    labels: ['United States', 'United Kingdom', 'Japan', 'Germany', 'Canada'],
                    datasets: [{
                        label: 'Current Period',
                        data: [210, 45, 32, 28, 18],
                        backgroundColor: '#2557a7',
                        hoverBackgroundColor: '#1d4486',
                        borderRadius: 4,
                        barPercentage: 0.6,
                        categoryPercentage: 0.8
                    },
                    {
                        label: 'Previous Period',
                        data: [185, 42, 35, 22, 16],
                        backgroundColor: '#e5e7eb',
                        hoverBackgroundColor: '#d1d5db',
                        borderRadius: 4,
                        barPercentage: 0.6,
                        categoryPercentage: 0.8,
                        // Hidden by default for cleaner look, but available in tooltip
                        hidden: false 
                    }]
                },
                options: {
                    indexAxis: 'y', // Makes it horizontal
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { 
                            position: 'bottom',
                            align: 'start',
                            labels: {
                                boxWidth: 8,
                                usePointStyle: true,
                                pointStyle: 'circle',
                                font: { size: 11, family: 'Inter' },
                                color: '#78716c'
                            }
                        },
                        tooltip: {
                            backgroundColor: '#1c1917',
                            padding: 12,
                            cornerRadius: 8,
                            titleFont: { family: 'Inter', size: 12 },
                            bodyFont: { family: 'Inter', size: 12 },
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return '$' + context.raw + 'M';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: '#f5f5f4', drawBorder: false },
                            ticks: {
                                font: { size: 10 },
                                color: '#a8a29e',
                                callback: function(value) { return '$' + value + 'M'; }
                            }
                        },
                        y: {
                            grid: { display: false, drawBorder: false },
                            ticks: {
                                font: { weight: '500', size: 11 },
                                color: '#44403c'
                            }
                        }
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
      
<div className="w-full max-w-[1600px] bg-[#F9F8F4] min-h-[90vh] rounded-[2.5rem] shadow-2xl overflow-hidden relative border border-white/40">

<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] pointer-events-none"></div>

<header className="relative z-10 px-8 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
<div>
<h1 className="text-3xl font-medium tracking-tight text-[#2557a7] flex items-center gap-2">
                    indeed <span className="text-stone-400 font-light text-2xl">| Markets</span>
</h1>
<p className="text-stone-500 text-sm mt-1 font-light">Global Performance • <span className="text-stone-800 font-medium">Q3 2025</span></p>
</div>
<nav className="glass-panel rounded-full px-2 py-2 flex items-center shadow-sm overflow-x-auto max-w-full">
<a className="text-stone-500 hover:text-stone-900 px-6 py-2.5 rounded-full text-xs font-medium transition-all hover:bg-white/50" href="#">Global Spend</a>

<a className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-xs font-medium transition-all shadow-md" href="#">Markets</a>
<a className="text-stone-500 hover:text-stone-900 px-6 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap hover:bg-white/50" href="#">Channels</a>
<a className="text-stone-500 hover:text-stone-900 px-6 py-2.5 rounded-full text-xs font-medium transition-all whitespace-nowrap hover:bg-white/50" href="#">Partners</a>
<div className="h-4 w-px bg-stone-300 mx-2"></div>
<a className="flex items-center justify-center w-10 h-10 ml-0 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></span>
</a>
<div className="relative ml-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full absolute top-1 right-1 border-2 border-[#F9F8F4] z-10"></div>
<a className="flex items-center justify-center w-10 h-10 bg-stone-100 rounded-full text-stone-600 hover:bg-stone-200 transition-colors" href="#">
<span className="iconify" data-icon="lucide:bell" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></span>
</a>
</div>
<a className="ml-2 w-10 h-10 rounded-full bg-[#2557a7] text-white flex items-center justify-center text-xs font-bold border border-stone-200" href="#">MW</a>
</nav>
</header>

<div className="relative z-10 px-8 pb-4 flex flex-wrap gap-12 items-end">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<span className="iconify" data-icon="lucide:globe" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wider">Active Markets</span>
</div>
<div className="flex items-baseline gap-3">
<div className="text-5xl font-light tracking-tighter text-stone-900">42</div>
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">+2 New</span>
</div>
</div>

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<span className="iconify" data-icon="lucide:trending-up" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wider">Top Growth (YoY)</span>
</div>
<div className="flex items-baseline gap-3">
<div className="text-5xl font-light tracking-tighter text-stone-900">DE</div>
<span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 text-stone-600">+24.5%</span>
</div>
</div>

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1 text-stone-500">
<span className="iconify" data-icon="lucide:target" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium uppercase tracking-wider">Avg. Global CPA</span>
</div>
<div className="flex items-baseline gap-3">
<div className="text-5xl font-light tracking-tighter text-stone-900">$34.12</div>
<span className="text-sm font-medium text-stone-400">USD</span>
</div>
</div>

<div className="ml-auto flex items-center gap-2 bg-white/40 p-1.5 rounded-xl border border-stone-100">
<button className="px-4 py-2 bg-white shadow-sm rounded-lg text-xs font-medium text-stone-900">All Regions</button>
<button className="px-4 py-2 hover:bg-white/50 rounded-lg text-xs font-medium text-stone-500 transition-colors">AMER</button>
<button className="px-4 py-2 hover:bg-white/50 rounded-lg text-xs font-medium text-stone-500 transition-colors">EMEA</button>
<button className="px-4 py-2 hover:bg-white/50 rounded-lg text-xs font-medium text-stone-500 transition-colors">APAC</button>
</div>
</div>
<main className="relative z-10 p-8 pt-4 grid grid-cols-1 md:grid-cols-12 gap-6 pb-12">

<div className="md:col-span-9 lg:col-span-9 flex flex-col gap-6">

<div className="glass-panel rounded-[2rem] p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] relative overflow-hidden flex flex-col h-[380px]">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-xl font-medium tracking-tight text-stone-900">Spend by Country</h3>
<p className="text-stone-500 mt-1 text-sm">Top 5 Markets vs Previous Period</p>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 hover:bg-white transition-colors">
<span className="iconify text-stone-600" data-icon="lucide:download" style={{width: '18px', height: '18px'}}></span>
</button>
</div>
<div className="flex-1 w-full relative">
<canvas id="marketChart"></canvas>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-stone-100 relative group hover:border-[#2557a7]/30 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="bg-blue-50 text-[#2557a7] w-10 h-10 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">NA</span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+12%</span>
</div>
<h4 className="text-stone-500 text-xs font-medium uppercase tracking-wide">North America</h4>
<div className="text-2xl font-semibold text-stone-900 mt-1">$284.5M</div>
<div className="mt-4 h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-[#2557a7] w-[85%]"></div>
</div>
<div className="mt-2 flex justify-between text-[10px] text-stone-400">
<span>85% of Budget</span>
<span>Target: $310M</span>
</div>
</div>

<div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-stone-100 relative group hover:border-[#2557a7]/30 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="bg-purple-50 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">EU</span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+8%</span>
</div>
<h4 className="text-stone-500 text-xs font-medium uppercase tracking-wide">EMEA</h4>
<div className="text-2xl font-semibold text-stone-900 mt-1">$142.2M</div>
<div className="mt-4 h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[62%]"></div>
</div>
<div className="mt-2 flex justify-between text-[10px] text-stone-400">
<span>62% of Budget</span>
<span>Target: $190M</span>
</div>
</div>

<div className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-stone-100 relative group hover:border-[#2557a7]/30 transition-all cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="bg-orange-50 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center">
<span className="text-xs font-bold">AP</span>
</div>
<span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-md">-2%</span>
</div>
<h4 className="text-stone-500 text-xs font-medium uppercase tracking-wide">Asia Pacific</h4>
<div className="text-2xl font-semibold text-stone-900 mt-1">$55.8M</div>
<div className="mt-4 h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[45%]"></div>
</div>
<div className="mt-2 flex justify-between text-[10px] text-stone-400">
<span>45% of Budget</span>
<span>Target: $110M</span>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-8 shadow-sm border border-stone-200/50">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium tracking-tight text-stone-900">Country Performance</h3>
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-stone-400">
<span className="iconify" data-icon="lucide:search" style={{width: '14px'}}></span>
</span>
<input className="pl-9 pr-4 py-2 rounded-xl bg-white border border-stone-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-stone-200 w-48" placeholder="Search markets..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-stone-400 text-xs uppercase tracking-wider border-b border-stone-100">
<th className="pb-4 pl-2 font-medium">Market</th>
<th className="pb-4 font-medium">Status</th>
<th className="pb-4 font-medium">Spend</th>
<th className="pb-4 font-medium">CPA</th>
<th className="pb-4 font-medium">Efficiency</th>
<th className="pb-4 pr-2 font-medium text-right">View</th>
</tr>
</thead>
<tbody className="text-stone-700 text-sm">
<tr className="group hover:bg-blue-50/50 transition-colors cursor-pointer border-l-2 border-transparent hover:border-[#2557a7]">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-8 h-6 rounded shadow-sm overflow-hidden bg-stone-200 relative">

<div className="absolute inset-0 bg-red-100"></div>
<div className="absolute top-0 left-0 w-4 h-3 bg-blue-800"></div>
</div>
<span className="font-medium text-stone-900">United States</span>
</div>
</td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-stone-600">Active</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="font-medium">$210.4M</span></td>
<td className="py-4 border-b border-stone-100">$38.50</td>
<td className="py-4 border-b border-stone-100">
<div className="w-24 h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[92%]"></div>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<span className="iconify text-stone-400 group-hover:text-[#2557a7]" data-icon="lucide:chevron-right" style={{width: '16px'}}></span>
</td>
</tr>
<tr className="group hover:bg-white/50 transition-colors cursor-pointer">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-8 h-6 rounded shadow-sm overflow-hidden bg-stone-200 flex items-center justify-center text-[10px] font-bold text-stone-500">UK</div>
<span className="font-medium text-stone-900">United Kingdom</span>
</div>
</td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs text-stone-600">Active</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="font-medium">$45.2M</span></td>
<td className="py-4 border-b border-stone-100">$31.20</td>
<td className="py-4 border-b border-stone-100">
<div className="w-24 h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[78%]"></div>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<span className="iconify text-stone-400 group-hover:text-stone-800" data-icon="lucide:chevron-right" style={{width: '16px'}}></span>
</td>
</tr>
<tr className="group hover:bg-white/50 transition-colors cursor-pointer">
<td className="py-4 pl-2 border-b border-stone-100">
<div className="flex items-center gap-3">
<div className="w-8 h-6 rounded shadow-sm overflow-hidden bg-stone-200 flex items-center justify-center text-[10px] font-bold text-stone-500">JP</div>
<span className="font-medium text-stone-900">Japan</span>
</div>
</td>
<td className="py-4 border-b border-stone-100">
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-xs text-stone-600">Review</span>
</div>
</td>
<td className="py-4 border-b border-stone-100"><span className="font-medium">$32.8M</span></td>
<td className="py-4 border-b border-stone-100">$24.15</td>
<td className="py-4 border-b border-stone-100">
<div className="w-24 h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[60%]"></div>
</div>
</td>
<td className="py-4 pr-2 border-b border-stone-100 text-right">
<span className="iconify text-stone-400 group-hover:text-stone-800" data-icon="lucide:chevron-right" style={{width: '16px'}}></span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-3 bg-[#1A1A1A] rounded-[2rem] p-6 text-white flex flex-col relative overflow-hidden shadow-2xl h-full min-h-[500px]">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="relative z-10 border-b border-white/10 pb-6 mb-6">
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-semibold text-[#6495ED] tracking-wider uppercase">Selected Market</span>
</div>
<div className="flex items-center justify-between">
<h2 className="text-2xl font-light text-white">United States</h2>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
<span className="iconify" data-icon="lucide:map" style={{width: '14px'}}></span>
</div>
</div>
</div>

<div className="relative z-10 grid grid-cols-2 gap-3 mb-6">
<div className="bg-white/5 p-3 rounded-xl border border-white/5">
<p className="text-[10px] text-stone-400 uppercase">Conversion</p>
<p className="text-lg font-medium text-white mt-1">4.2%</p>
<p className="text-[10px] text-green-400">+0.3%</p>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/5">
<p className="text-[10px] text-stone-400 uppercase">Budget Rem</p>
<p className="text-lg font-medium text-white mt-1">$12M</p>
<p className="text-[10px] text-stone-400">Ends 30d</p>
</div>
</div>
<div className="relative z-10 mb-4">
<h3 className="text-sm font-medium text-stone-300 mb-3">Top Campaigns</h3>
<div className="space-y-3">

<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<div>
<p className="text-sm text-stone-200">US_Brand_Exact</p>
<p className="text-[10px] text-stone-500">Search • Google</p>
</div>
</div>
<span className="text-xs font-medium text-white">98/100</span>
</div>

<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<div>
<p className="text-sm text-stone-200">US_Retargeting</p>
<p className="text-[10px] text-stone-500">Social • Meta</p>
</div>
</div>
<span className="text-xs font-medium text-stone-300">84/100</span>
</div>

<div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-lg -mx-2 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
<div>
<p className="text-sm text-stone-200">US_Generic_Jobs</p>
<p className="text-[10px] text-stone-500">Search • Bing</p>
</div>
</div>
<span className="text-xs font-medium text-amber-400">Warning</span>
</div>
</div>
</div>

<div className="mt-auto pt-4 border-t border-white/10">
<button className="w-full py-3 bg-[#2557a7] hover:bg-[#1d4486] rounded-xl text-sm font-medium text-white transition-colors shadow-lg shadow-blue-900/20"> 
                        Manage US Allocation
                    </button>
</div>
</div>
</main>
</div>


    </>
  );
}
