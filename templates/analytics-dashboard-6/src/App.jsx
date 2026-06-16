import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
dark: {
900: '#0f172a', // Main background
800: '#1e293b', // Panel background
700: '#334155', // Borders
},
accent: {
blue: '#0ea5e9',
purple: '#8b5cf6',
teal: '#14b8a6'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Global Chart Defaults
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#94a3b8';
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.05)';

        // 1. Revenue Chart
        const ctxRev = document.getElementById('revenueChart').getContext('2d');
        const gradientRev = ctxRev.createLinearGradient(0, 0, 0, 400);
        gradientRev.addColorStop(0, 'rgba(14, 165, 233, 0.5)'); // Blue
        gradientRev.addColorStop(1, 'rgba(14, 165, 233, 0)');

        new Chart(ctxRev, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [65000, 59000, 80000, 81000, 56000, 55000, 40000, 75000, 95000, 105000, 98000, 115000],
                    borderColor: '#0ea5e9',
                    backgroundColor: gradientRev,
                    borderWidth: 2,
                    pointBackgroundColor: '#0f172a',
                    pointBorderColor: '#0ea5e9',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { 
                        beginAtZero: true,
                        grid: { borderDash: [2, 4], color: '#334155' }
                    },
                    x: { grid: { display: false } }
                }
            }
        });

        // 2. Traffic Chart
        const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
        new Chart(ctxTraffic, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Social', 'Referral'],
                datasets: [{
                    data: [45, 35, 20],
                    backgroundColor: ['#3b82f6', '#8b5cf6', '#14b8a6'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: { legend: { display: false } }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-dark-800 border-r border-dark-700 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-dark-700">
<span className="iconify text-3xl text-accent-blue mr-2" data-icon="carbon:chart-multitype"></span>
<span className="text-xl font-bold text-white tracking-tight">Nexus<span className="text-accent-blue">BI</span></span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center px-4 py-3 bg-accent-blue/10 text-accent-blue rounded-lg border-l-4 border-accent-blue transition-all group" href="#">
<span className="iconify text-xl mr-3" data-icon="lucide:layout-dashboard"></span>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-slate-400 hover:bg-dark-700 hover:text-white rounded-lg transition-all group" href="#">
<span className="iconify text-xl mr-3 group-hover:scale-110 transition-transform" data-icon="lucide:pie-chart"></span>
<span>Analytics</span>
</a>
<a className="flex items-center px-4 py-3 text-slate-400 hover:bg-dark-700 hover:text-white rounded-lg transition-all group" href="#">
<span className="iconify text-xl mr-3 group-hover:scale-110 transition-transform" data-icon="lucide:users"></span>
<span>Customers</span>
</a>
<a className="flex items-center px-4 py-3 text-slate-400 hover:bg-dark-700 hover:text-white rounded-lg transition-all group" href="#">
<span className="iconify text-xl mr-3 group-hover:scale-110 transition-transform" data-icon="lucide:wallet"></span>
<span>Finance</span>
</a>
<a className="flex items-center px-4 py-3 text-slate-400 hover:bg-dark-700 hover:text-white rounded-lg transition-all group" href="#">
<span className="iconify text-xl mr-3 group-hover:scale-110 transition-transform" data-icon="lucide:settings"></span>
<span>Settings</span>
</a>
</nav>
<div className="p-4 border-t border-dark-700">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-700 cursor-pointer transition-colors">
<img alt="Profile" className="w-10 h-10 rounded-full border-2 border-dark-700" src="https://i.pravatar.cc/150?img=68"/>
<div>
<p className="text-sm font-semibold text-white">Alex Morgan</p>
<p className="text-xs text-slate-500">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden">

<header className="h-16 bg-dark-800/80 backdrop-blur-md border-b border-dark-700 flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<span className="iconify text-2xl" data-icon="lucide:menu"></span>
</button>
<div className="relative hidden sm:block">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-icon="lucide:search"></span>
<input className="bg-dark-900 border border-dark-700 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue w-64 transition-all" placeholder="Search data..." type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:bell"></span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
</button>
<button className="bg-accent-blue hover:bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:download"></span> Export
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
<div>
<h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
<p className="text-slate-400 text-sm mt-1">Performance metrics for current quarter</p>
</div>
<div className="bg-dark-800 rounded-lg p-1 border border-dark-700 inline-flex text-sm">
<button className="px-4 py-1.5 rounded-md hover:text-white transition-colors">Weekly</button>
<button className="px-4 py-1.5 rounded-md bg-accent-blue text-white shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-md hover:text-white transition-colors">Yearly</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Total Revenue</p>
<h3 className="text-2xl font-bold text-white mt-1">$84,250</h3>
</div>
<div className="p-2 bg-accent-blue/10 rounded-lg text-accent-blue">
<span className="iconify text-xl" data-icon="lucide:dollar-sign"></span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="text-emerald-400 flex items-center font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded">
<span className="iconify mr-1" data-icon="lucide:trending-up"></span> 12.5%
                            </span>
<span className="ml-2 text-slate-500">vs last month</span>
</div>
</div>

<div className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Active Users</p>
<h3 className="text-2xl font-bold text-white mt-1">12,403</h3>
</div>
<div className="p-2 bg-accent-purple/10 rounded-lg text-accent-purple">
<span className="iconify text-xl" data-icon="lucide:users"></span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="text-emerald-400 flex items-center font-medium bg-emerald-400/10 px-1.5 py-0.5 rounded">
<span className="iconify mr-1" data-icon="lucide:trending-up"></span> 8.2%
                            </span>
<span className="ml-2 text-slate-500">vs last month</span>
</div>
</div>

<div className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Conversion Rate</p>
<h3 className="text-2xl font-bold text-white mt-1">2.4%</h3>
</div>
<div className="p-2 bg-accent-teal/10 rounded-lg text-accent-teal">
<span className="iconify text-xl" data-icon="lucide:activity"></span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="text-rose-400 flex items-center font-medium bg-rose-400/10 px-1.5 py-0.5 rounded">
<span className="iconify mr-1" data-icon="lucide:trending-down"></span> 0.5%
                            </span>
<span className="ml-2 text-slate-500">vs last month</span>
</div>
</div>

<div className="glass-card rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-black/20">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-slate-400 text-sm font-medium">Avg. Order Value</p>
<h3 className="text-2xl font-bold text-white mt-1">$128</h3>
</div>
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-500">
<span className="iconify text-xl" data-icon="lucide:shopping-bag"></span>
</div>
</div>
<div className="w-full bg-dark-700 h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-orange-500 h-full rounded-full" style={{width: '70%'}}></div>
</div>
<p className="text-xs text-slate-500 mt-2">70% of monthly goal</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-card rounded-xl p-6 lg:col-span-2">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white">Revenue Analytics</h3>
<button className="text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal"></span></button>
</div>
<div className="relative h-80 w-full">
<canvas id="revenueChart"></canvas>
</div>
</div>

<div className="glass-card rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white">Traffic Source</h3>
<div className="text-xs text-slate-400">Oct 2023</div>
</div>
<div className="relative h-56 w-full flex justify-center">
<canvas id="trafficChart"></canvas>
</div>
<div className="mt-6 space-y-3">
<div className="flex justify-between text-sm">
<span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-blue-500"></span>Direct</span>
<span className="text-white font-medium">45%</span>
</div>
<div className="flex justify-between text-sm">
<span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span>Social</span>
<span className="text-white font-medium">35%</span>
</div>
<div className="flex justify-between text-sm">
<span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-500"></span>Referral</span>
<span className="text-white font-medium">20%</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl overflow-hidden">
<div className="p-6 border-b border-dark-700 flex justify-between items-center">
<h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
<a className="text-sm text-accent-blue hover:text-blue-400" href="#">View All</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-dark-800 text-xs uppercase text-slate-400 font-semibold">
<tr>
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4 text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-dark-700 text-sm">
<tr className="hover:bg-dark-800/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-xs font-bold text-white">JD</div>
<span className="font-medium text-white">John Doe</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>
</td>
<td className="px-6 py-4 text-slate-400">Oct 24, 2023</td>
<td className="px-6 py-4 text-right font-medium text-white">$320.00</td>
</tr>
<tr className="hover:bg-dark-800/50 transition-colors">
<td className="px-6 py-4 flex items--to-tr from-purple-400 to-purple-600 flex items-center justify-center text-xs font-bold text-white">AS</td></tr></tbody></table></div>
<span className="font-medium text-white">Alice Smith</span>

<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Pending</span>
</td>
<td className="px-6 py-4 text-slate-400">Oct 24, 2023</td>
<td className="px-6 py-4 text-right font-medium text-white">$120.50</td>

<tr className="hover:bg-dark-800/50 transition-colors">
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-rose-600 flex items-center justify-center text-xs font-bold text-white">RM</div>
<span className="font-medium text-white">Robert Meyer</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Completed</span>
</td>
<td className="px-6 py-4 text-slate-400">Oct 23, 2023</td>
<td className="px-6 py-4 text-right font-medium text-white">$1,450.00</td>
</tr>


</div>
</div>
<footer className="text-center text-slate-600 text-xs pb-4">
                    © 2023 Analytics Dashboard Demo. Designed for visual clarity.
                </footer>
</div>

</main>



    </>
  );
}
