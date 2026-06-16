import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        function dashboard() {
            return {
                sidebarOpen: false,
                activeTab: 'Overview',
                activeModal: null, // 'contract', 'invite', 'batch'
                selectedPartner: '',
                notification: null,
                navItems: [
                    { name: 'Overview', icon: 'solar:widget-2-linear', badge: null },
                    { name: 'Transactions', icon: 'solar:wallet-money-linear', badge: '3 New' },
                    { name: 'Inventory', icon: 'solar:box-linear', badge: null },
                    { name: 'Analytics', icon: 'solar:chart-2-linear', badge: null },
                    { name: 'Partners', icon: 'solar:users-group-rounded-linear', badge: null },
                ],
                switchTab(tab) {
                    this.activeTab = tab;
                    // Re-render charts if going back to overview to ensure proper size
                    if (tab === 'Overview') {
                        setTimeout(() => {
                           // Logic to refresh charts if needed
                        }, 300);
                    }
                },
                openModal(type, data = null) {
                    this.activeModal = type;
                    if (data) this.selectedPartner = data;
                },
                triggerNotification(message) {
                    this.notification = message;
                    setTimeout(() => {
                        this.notification = null;
                    }, 3000);
                },
                init() {
                    this.initCharts();
                },
                initCharts() {
                    Chart.defaults.font.family = 'Inter';
                    Chart.defaults.color = '#737373';

                    // 1. Main Financial Chart (Revenue vs Cost)
                    const ctx1 = document.getElementById('mainChart').getContext('2d');
                    let gradient1 = ctx1.createLinearGradient(0, 0, 0, 400);
                    gradient1.addColorStop(0, 'rgba(99, 102, 241, 0.2)');
                    gradient1.addColorStop(1, 'rgba(99, 102, 241, 0)');

                    new Chart(ctx1, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                            datasets: [{
                                label: 'Revenue',
                                data: [1200000, 1350000, 1100000, 1600000, 1800000, 1950000, 2100000, 2250000, 2350000, 2412000],
                                borderColor: '#818cf8',
                                backgroundColor: gradient1,
                                borderWidth: 2,
                                fill: true,
                                tension: 0.4,
                                pointRadius: 0,
                                pointHoverRadius: 6
                            }, {
                                label: 'Op Costs',
                                data: [800000, 900000, 750000, 1100000, 1200000, 1300000, 1400000, 1500000, 1550000, 1617000],
                                borderColor: '#525252',
                                borderWidth: 2,
                                borderDash: [5, 5],
                                fill: false,
                                tension: 0.4,
                                pointRadius: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { grid: { display: false } },
                                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { callback: (val) => '₹' + val/1000 + 'k' } }
                            },
                            interaction: { mode: 'index', intersect: false }
                        }
                    });

                    // 2. Unit Economics Doughnut (Cost vs Profit per unit)
                    const ctx2 = document.getElementById('unitChart').getContext('2d');
                    new Chart(ctx2, {
                        type: 'doughnut',
                        data: {
                            labels: ['Cost (₹80)', 'Profit (₹40)'],
                            datasets: [{
                                data: [80, 40],
                                backgroundColor: ['#525252', '#10b981'],
                                borderWidth: 0,
                                hoverOffset: 4
                            }]
                        },
                        options: {
                            cutout: '75%',
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } }
                        }
                    });

                    // 3. Bar Chart (Regional Distribution)
                    const ctx3 = document.getElementById('barChart').getContext('2d');
                    new Chart(ctx3, {
                        type: 'bar',
                        data: {
                            labels: ['Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyd'],
                            datasets: [{
                                label: 'Boxes Active',
                                data: [8500, 6200, 4100, 2800, 2100],
                                backgroundColor: '#6366f1',
                                borderRadius: 4,
                                barThickness: 20
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { grid: { display: false } },
                                y: { grid: { color: 'rgba(255,255,255,0.05)' } }
                            }
                        }
                    });

                    // 4. Line Chart (Box Lifecycle)
                    const ctx4 = document.getElementById('lineChart2').getContext('2d');
                    new Chart(ctx4, {
                        type: 'line',
                        data: {
                            labels: ['W1', 'W2', 'W3', 'W4'],
                            datasets: [{
                                label: 'Returns Processed',
                                data: [120, 190, 170, 250],
                                borderColor: '#34d399',
                                borderWidth: 2,
                                tension: 0.3,
                                pointRadius: 3
                            },
                            {
                                label: 'Refurbished',
                                data: [100, 150, 140, 210],
                                borderColor: '#3b82f6',
                                borderWidth: 2,
                                tension: 0.3,
                                pointRadius: 3
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: true, labels: { boxWidth: 10, usePointStyle: true } } },
                            scales: {
                                x: { grid: { display: false } },
                                y: { grid: { color: 'rgba(255,255,255,0.05)' } }
                            }
                        }
                    });
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-900/10 rounded-full blur-[150px] mix-blend-screen"></div>
<div className="absolute top-[40%] left-[60%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[100px] mix-blend-overlay"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
</div>
<div className="flex h-screen overflow-hidden relative z-10">

<div @click="sidebarOpen = false" className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden" x-show="sidebarOpen" x-transition.opacity=""></div>

<aside :className="sidebarOpen ? 'translate-x-0' : '-translate-x-full'" className="fixed lg:static inset-y-0 left-0 z-50 w-64 border-r border-white/5 bg-neutral-950/80 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col justify-between">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 mr-3 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
<iconify-icon className="text-white text-lg" icon="solar:infinity-bold"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">Circuloop</span>
</div>

<nav className="px-3 py-6 space-y-1">
<template :key="item.name" x-htmlFor="item in navItems">
<a :className="activeTab === item.name ? 'bg-white/10 text-white shadow-inner' : 'text-neutral-400 hover:text-white hover:bg-white/5'" @click.prevent="switchTab(item.name)" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg trans-all" href="#">
<iconify-icon :className="activeTab === item.name ? 'text-indigo-400' : 'text-neutral-500 group-hover:text-neutral-300'" :icon="item.icon" className="mr-3 text-lg"></iconify-icon>
<span x-text="item.name"></span>
<span className="ml-auto bg-indigo-500/20 text-indigo-300 py-0.5 px-2 rounded-full text-[10px] font-medium" x-show="item.badge" x-text="item.badge"></span>
</a>
</template>
</nav>

<div className="px-6 py-4 mt-2">
<div className="p-4 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 trans-all"></div>
<h4 className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold mb-3 relative z-10">Unit Economics</h4>
<div className="flex items-end justify-between mb-2 relative z-10">
<span className="text-xs text-neutral-400">Cost</span>
<span className="text-sm font-medium text-white font-mono-numbers">₹80</span>
</div>
<div className="flex items-end justify-between mb-3 relative z-10">
<span className="text-xs text-indigo-400">Sell</span>
<span className="text-sm font-medium text-indigo-300 font-mono-numbers">₹120</span>
</div>

<div className="w-full h-1.5 bg-neutral-700 rounded-full flex overflow-hidden relative z-10">
<div className="h-full bg-neutral-500 w-[66%]"></div>
<div className="h-full bg-indigo-500 w-[34%]"></div>
</div>
<div className="flex justify-between text-[9px] mt-1 text-neutral-500 relative z-10">
<span>66% Cost</span>
<span>33% Margin</span>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 p-4 bg-neutral-900/30">
<a @click.prevent="triggerNotification('Profile settings locked in demo')" className="flex items-center w-full group" href="#">
<div className="h-8 w-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User" className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="ml-3">
<p className="text-xs font-medium text-white group-hover:text-indigo-300 trans-all">Admin Account</p>
<p className="text-[10px] text-neutral-500">Finance Lead</p>
</div>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden bg-transparent relative">

<header className="flex shrink-0 sticky bg-neutral-950/20 h-16 border-white/5 border-b pr-6 pl-6 top-0 backdrop-blur-md items-center justify-between z-20">
<div className="flex items-center">
<button @click="sidebarOpen = true" className="lg:hidden mr-4 text-neutral-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<nav aria-label="Breadcrumb" className="flex items-center">
<div className="flex items-center space-x-2">
<span className="text-neutral-500 text-sm">Circuloop</span>
<iconify-icon className="text-neutral-600 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-white font-medium text-sm tracking-tight" x-text="activeTab">Overview</span>
</div>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-neutral-900/50">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-neutral-300">System Operational</span>
</div>
<button @click="triggerNotification('No new notifications')" className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/5 trans-all text-neutral-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-2 right-2 block h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto scroll-smooth p-4 lg:p-8 relative">

<div className="max-w-7xl mx-auto space-y-6" x-show="activeTab === 'Overview'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">

<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl font-medium text-white tracking-tight">Financial Overview</h1>
<p className="text-sm text-neutral-500 mt-1">Real-time revenue and unit metric analysis.</p>
</div>
<button @click="switchTab('Transactions')" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium trans-all shadow-[0_0_20px_rgba(79,70,229,0.2)] flex items-center gap-2">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> View Recent Payments
                        </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 perspective-container">

<div className="glass-panel p-5 rounded-2xl card-3d relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 trans-all"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Total Revenue</span>
</div>
<div className="relative z-10">
<span className="text-2xl font-semibold text-white tracking-tight font-mono-numbers">₹24,12,000</span>
<div className="flex items-center mt-1 text-xs text-emerald-400">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear"></iconify-icon> 8.2% vs last month
                                </div>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-3d relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 trans-all"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Net Profit</span>
</div>
<div className="relative z-10">
<span className="text-2xl font-semibold text-white tracking-tight font-mono-numbers">₹7,95,000</span>
<div className="flex items-center mt-1 text-xs text-emerald-400">
<span className="text-neutral-500 mr-2">Margin ~33%</span>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-3d relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 trans-all"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Boxes Deployed</span>
</div>
<div className="relative z-10">
<span className="text-2xl font-semibold text-white tracking-tight font-mono-numbers">20,100</span>
<div className="w-full bg-neutral-800 rounded-full h-1 mt-3">
<div className="bg-blue-500 h-1 rounded-full w-[85%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-2xl card-3d relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 trans-all"></div>
<div className="flex items-center gap-2 mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:tag-price-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Avg. Production</span>
</div>
<div className="relative z-10">
<span className="text-2xl font-semibold text-white tracking-tight font-mono-numbers">₹80.00</span>
<div className="flex items-center mt-1 text-xs text-orange-400">
<iconify-icon className="mr-1" icon="solar:arrow-right-down-linear"></iconify-icon> 2% efficiency gain
                                </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 glass-panel p-6 rounded-2xl relative">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Monthly Financial Performance</h3>
<div className="flex gap-4">
<div className="flex items-center text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span> Revenue
                                    </div>
<div className="flex items-center text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-neutral-600 mr-2"></span> Cost
                                    </div>
</div>
</div>
<div className="h-72 w-full">
<canvas id="mainChart"></canvas>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl relative flex flex-col">
<h3 className="text-sm font-medium text-white mb-6">Per Box Unit Economics</h3>
<div className="flex-1 flex items-center justify-center relative">
<canvas className="max-h-[200px]" id="unitChart"></canvas>
<div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
<span className="text-3xl font-bold text-white font-mono-numbers">₹120</span>
<span className="text-[10px] text-neutral-500 uppercase">Selling Price</span>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-neutral-400">Raw Material</span>
<span className="text-white font-mono-numbers">₹45.00</span>
</div>
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-neutral-400">Manufacturing</span>
<span className="text-white font-mono-numbers">₹25.00</span>
</div>
<div className="flex justify-between text-xs border-b border-white/5 pb-2">
<span className="text-neutral-400">Logistics</span>
<span className="text-white font-mono-numbers">₹10.00</span>
</div>
<div className="flex justify-between text-xs text-emerald-400 font-medium">
<span>Profit Margin</span>
<span className="font-mono-numbers">₹40.00</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-sm font-medium text-white mb-4">Regional Distribution (Top 5)</h3>
<div className="h-60">
<canvas id="barChart"></canvas>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-sm font-medium text-white mb-4">Box Lifecycle Status</h3>
<div className="h-60">
<canvas id="lineChart2"></canvas>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto space-y-6" x-cloak="" x-show="activeTab === 'Transactions'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium text-white tracking-tight">Incoming Payments</h1>
<p className="text-sm text-neutral-500 mt-1">Live transaction feed from e-commerce partners.</p>
</div>
<div className="flex gap-2">
<button @click="triggerNotification('CSV Export downloaded successfully')" className="h-9 px-4 rounded-lg bg-neutral-800 border border-white/10 text-xs text-white hover:bg-neutral-700 trans-all">
                                Export CSV
                            </button>
<button @click="triggerNotification('Filters updated')" className="h-9 w-9 flex items-center justify-center rounded-lg bg-neutral-800 border border-white/10 text-white hover:bg-neutral-700 trans-all">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-panel-light p-4 rounded-xl flex items-center justify-between border-l-4 border-l-indigo-500">
<div>
<p className="text-xs text-neutral-400">Total Today</p>
<p className="text-xl font-medium text-white font-mono-numbers mt-1">₹2,73,000</p>
</div>
<iconify-icon className="text-indigo-500 text-2xl opacity-50" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div className="glass-panel-light p-4 rounded-xl flex items-center justify-between border-l-4 border-l-emerald-500">
<div>
<p className="text-xs text-neutral-400">Settled</p>
<p className="text-xl font-medium text-white font-mono-numbers mt-1">12 Txns</p>
</div>
<iconify-icon className="text-emerald-500 text-2xl opacity-50" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="glass-panel-light p-4 rounded-xl flex items-center justify-between border-l-4 border-l-orange-500">
<div>
<p className="text-xs text-neutral-400">Pending</p>
<p className="text-xl font-medium text-white font-mono-numbers mt-1">₹45,000</p>
</div>
<iconify-icon className="text-orange-500 text-2xl opacity-50" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>

<div className="glass-panel rounded-2xl overflow-hidden">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-white/5 text-xs uppercase text-neutral-500 font-medium">
<tr>
<th className="px-6 py-4 font-semibold">Transaction ID</th>
<th className="px-6 py-4 font-semibold">Source / Partner</th>
<th className="px-6 py-4 font-semibold">Date</th>
<th className="px-6 py-4 font-semibold">Status</th>
<th className="px-6 py-4 font-semibold text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 trans-all group">
<td className="px-6 py-4 font-mono-numbers text-xs">#TRX-8892-PM</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">PM</div>
<div>
<p className="text-white font-medium">Pradesh Mishra</p>
<p className="text-xs text-neutral-500">Bulk Order #402</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs">Today, 10:42 AM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Received</span>
</td>
<td className="px-6 py-4 text-right font-medium text-white font-mono-numbers">+ ₹1,20,000</td>
</tr>
<tr className="hover:bg-white/5 trans-all group">
<td className="px-6 py-4 font-mono-numbers text-xs">#TRX-9921-AJ</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">AR</div>
<div>
<p className="text-white font-medium">Arjun</p>
<p className="text-xs text-neutral-500">E-commerce Seller</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs">Today, 09:15 AM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Received</span>
</td>
<td className="px-6 py-4 text-right font-medium text-white font-mono-numbers">+ ₹97,000</td>
</tr>
<tr className="hover:bg-white/5 trans-all group">
<td className="px-6 py-4 font-mono-numbers text-xs">#TRX-7721-CP</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white text-[10px] font-bold shadow-lg">CR</div>
<div>
<p className="text-white font-medium">Cpcoblu Retail</p>
<p className="text-xs text-neutral-500">Retail Partner</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs">Yesterday, 04:30 PM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Processing</span>
</td>
<td className="px-6 py-4 text-right font-medium text-white font-mono-numbers">+ ₹56,000</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 border-t border-white/5 flex items-center justify-center">
<button @click="triggerNotification('More transactions loaded')" className="text-xs text-neutral-500 hover:text-white trans-all">Load earlier transactions</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto space-y-6" x-cloak="" x-show="activeTab === 'Inventory'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl font-medium text-white tracking-tight">Inventory Management</h1>
<p className="text-sm text-neutral-500 mt-1">Track Box locations and condition status.</p>
</div>
<button @click="openModal('batch')" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium trans-all flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add New Batch
                        </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel p-4 rounded-xl">
<p className="text-xs text-neutral-400 mb-1">Total Stock</p>
<p className="text-2xl font-medium text-white font-mono-numbers">24,500</p>
</div>
<div className="glass-panel p-4 rounded-xl">
<p className="text-xs text-emerald-400 mb-1">In Circulation</p>
<p className="text-2xl font-medium text-white font-mono-numbers">20,100</p>
</div>
<div className="glass-panel p-4 rounded-xl">
<p className="text-xs text-orange-400 mb-1">Maintenance</p>
<p className="text-2xl font-medium text-white font-mono-numbers">850</p>
</div>
<div className="glass-panel p-4 rounded-xl">
<p className="text-xs text-neutral-500 mb-1">Retired</p>
<p className="text-2xl font-medium text-white font-mono-numbers">3,550</p>
</div>
</div>
<div className="glass-panel rounded-2xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex gap-4">
<div className="relative flex-1 max-w-xs">
<iconify-icon className="absolute left-3 top-2.5 text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50" placeholder="Search SKU or Location..." type="text"/>
</div>
<div className="flex gap-2">
<button @click="triggerNotification('Filter applied')" className="px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-neutral-400 hover:text-white">Filter</button>
<button @click="triggerNotification('Sorted by newest')" className="px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-xs text-neutral-400 hover:text-white">Sort</button>
</div>
</div>
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-white/5 text-xs uppercase text-neutral-500 font-medium">
<tr>
<th className="px-6 py-3">SKU ID</th>
<th className="px-6 py-3">Location</th>
<th className="px-6 py-3">Condition</th>
<th className="px-6 py-3">Cycles</th>
<th className="px-6 py-3 text-right">Last Scan</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5 trans-all">
<td className="px-6 py-3 font-mono-numbers text-xs text-white">#BOX-2023-A1</td>
<td className="px-6 py-3">Mumbai Hub (Andheri)</td>
<td className="px-6 py-3"><span className="text-emerald-400 text-xs px-2 py-0.5 rounded bg-emerald-500/10">Good</span></td>
<td className="px-6 py-3 font-mono-numbers">12</td>
<td className="px-6 py-3 text-right text-xs">2 mins ago</td>
</tr>
<tr className="hover:bg-white/5 trans-all">
<td className="px-6 py-3 font-mono-numbers text-xs text-white">#BOX-2023-B4</td>
<td className="px-6 py-3">Transit (DL-MUM)</td>
<td className="px-6 py-3"><span className="text-emerald-400 text-xs px-2 py-0.5 rounded bg-emerald-500/10">Good</span></td>
<td className="px-6 py-3 font-mono-numbers">8</td>
<td className="px-6 py-3 text-right text-xs">1 hr ago</td>
</tr>
<tr className="hover:bg-white/5 trans-all">
<td className="px-6 py-3 font-mono-numbers text-xs text-white">#BOX-2022-X9</td>
<td className="px-6 py-3">Delhi Warehouse</td>
<td className="px-6 py-3"><span className="text-orange-400 text-xs px-2 py-0.5 rounded bg-orange-500/10">Repair</span></td>
<td className="px-6 py-3 font-mono-numbers">45</td>
<td className="px-6 py-3 text-right text-xs">3 hrs ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="max-w-7xl mx-auto space-y-6" x-cloak="" x-show="activeTab === 'Analytics'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
<h1 className="text-2xl font-medium text-white tracking-tight">Performance Analytics</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-sm font-medium">Collection Efficiency</h3>
<span className="text-emerald-400 text-xs font-mono-numbers">+4.5%</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-bold text-white font-mono-numbers">92%</span>
<span className="text-neutral-500 text-sm mb-1">return rate</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2 mt-2">
<div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-2 rounded-full w-[92%] shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-sm font-medium">Carbon Offset</h3>
<span className="text-emerald-400 text-xs font-mono-numbers">Daily</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl font-bold text-white font-mono-numbers">1,240</span>
<span className="text-neutral-500 text-sm mb-1">kg CO2 saved</span>
</div>
<div className="flex gap-1 h-2 mt-2">
<div className="bg-emerald-500/80 w-[20%] rounded-l-full"></div>
<div className="bg-emerald-500/60 w-[30%]"></div>
<div className="bg-emerald-500/40 w-[40%]"></div>
<div className="bg-emerald-500/20 w-[10%] rounded-r-full"></div>
</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-white text-sm font-medium mb-6">Cost per Retrieval Analysis (Weekly)</h3>
<div className="flex items-end justify-between h-48 gap-2">
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '40%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹32</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '55%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹45</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '45%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹38</div>
</div>
<div className="w-full bg-indigo-600/50 rounded-t-lg relative group hover:bg-indigo-500 trans-all" style={{height: '30%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹24</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '35%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹28</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '40%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹32</div>
</div>
<div className="w-full bg-neutral-800/50 rounded-t-lg relative group hover:bg-indigo-500/20 trans-all" style={{height: '25%'}}>
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 trans-all">₹20</div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-neutral-500">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto space-y-6" x-cloak="" x-show="activeTab === 'Partners'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-medium text-white tracking-tight">Partner Network</h1>
<button @click="openModal('invite')" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium trans-all shadow-[0_0_20px_rgba(79,70,229,0.2)]">
                            Invite Partner
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel p-5 rounded-2xl group hover:border-indigo-500/30 trans-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Zepto"/>
</div>
<div>
<h3 className="text-white font-medium text-sm">Zepto Logistics</h3>
<span className="text-xs text-neutral-500">Logistics Partner</span>
</div>
</div>
<span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20">Active</span>
</div>
<div className="space-y-2 text-xs text-neutral-400 mb-4">
<div className="flex justify-between">
<span>Volume</span>
<span className="text-white font-mono-numbers">8,500/mo</span>
</div>
<div className="flex justify-between">
<span>Success Rate</span>
<span className="text-white font-mono-numbers">98.2%</span>
</div>
</div>
<button @click="openModal('contract', 'Zepto Logistics')" className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white border border-white/5 trans-all">Manage Contract</button>
</div>

<div className="glass-panel p-5 rounded-2xl group hover:border-indigo-500/30 trans-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Blinkit"/>
</div>
<div>
<h3 className="text-white font-medium text-sm">Blinkit</h3>
<span className="text-xs text-neutral-500">Retail Partner</span>
</div>
</div>
<span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20">Active</span>
</div>
<div className="space-y-2 text-xs text-neutral-400 mb-4">
<div className="flex justify-between">
<span>Volume</span>
<span className="text-white font-mono-numbers">12,200/mo</span>
</div>
<div className="flex justify-between">
<span>Success Rate</span>
<span className="text-white font-mono-numbers">96.5%</span>
</div>
</div>
<button @click="openModal('contract', 'Blinkit')" className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white border border-white/5 trans-all">Manage Contract</button>
</div>

<div className="glass-panel p-5 rounded-2xl group hover:border-indigo-500/30 trans-all">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
<img className="w-full h-full" src="https://api.dicebear.com/7.x/initials/svg?seed=Paper"/>
</div>
<div>
<h3 className="text-white font-medium text-sm">EcoPaper Mfg</h3>
<span className="text-xs text-neutral-500">Supplier</span>
</div>
</div>
<span className="bg-orange-500/10 text-orange-400 text-[10px] px-2 py-0.5 rounded-full border border-orange-500/20">Pending</span>
</div>
<div className="space-y-2 text-xs text-neutral-400 mb-4">
<div className="flex justify-between">
<span>Next Delivery</span>
<span className="text-white font-mono-numbers">Nov 14</span>
</div>
<div className="flex justify-between">
<span>Outstanding</span>
<span className="text-white font-mono-numbers">₹45,000</span>
</div>
</div>
<button @click="triggerNotification('Invoice #INV-2023-882 Downloaded')" className="w-full py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs text-white border border-white/5 trans-all">View Invoice</button>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center" style={{display: 'none'}} x-cloak="" x-show="activeModal">

<div @click="activeModal = null" className="absolute inset-0 bg-black/80 backdrop-blur-sm" x-transition.opacity=""></div>

<div className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 scale-100 translate-y-0" x-transition:enter-start="opacity-0 scale-95 translate-y-4">

<button @click="activeModal = null" className="absolute top-4 right-4 text-neutral-500 hover:text-white">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div x-show="activeModal === 'contract'">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-medium text-white">Manage Contract</h2>
<p className="text-xs text-neutral-500" x-text="'Partner: ' + selectedPartner"></p>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-800/50 p-3 rounded-lg border border-white/5">
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Status</span>
<span className="text-emerald-400">Active</span>
</div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">Contract ID</span>
<span className="text-white font-mono-numbers">#CNT-2023-88</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-neutral-400">Valid Until</span>
<span className="text-white font-mono-numbers">Dec 31, 2024</span>
</div>
</div>
<div className="flex gap-3 pt-2">
<button @click="triggerNotification('Renewal request sent'); activeModal = null" className="flex-1 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white trans-all border border-white/5">Renew</button>
<button @click="triggerNotification('Termination initialized'); activeModal = null" className="flex-1 py-2.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-sm font-medium text-red-400 trans-all border border-red-500/20">Terminate</button>
</div>
</div>
</div>

<div x-show="activeModal === 'invite'">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-medium text-white">Invite New Partner</h2>
<p className="text-xs text-neutral-500">Send an onboarding link via email.</p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email Address</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50" placeholder="partner@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Role</label>
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50">
<option>Retail Partner</option>
<option>Logistics Provider</option>
<option>Manufacturer</option>
</select>
</div>
<button @click="triggerNotification('Invitation sent successfully'); activeModal = null" className="w-full mt-2 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white trans-all shadow-[0_0_20px_rgba(79,70,229,0.2)]">Send Invitation</button>
</div>
</div>

<div x-show="activeModal === 'batch'">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-medium text-white">Add Inventory Batch</h2>
<p className="text-xs text-neutral-500">Register new boxes into the system.</p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Batch ID</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-neutral-500 font-mono-numbers focus:outline-none" readonly="" type="text" value="BATCH-2023-OCT-004"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Quantity</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50" placeholder="500" type="number"/>
</div>
<div className="flex items-center gap-2">
<input className="rounded bg-neutral-800 border-white/10 text-indigo-500 focus:ring-0" id="check" type="checkbox"/>
<label className="text-xs text-neutral-400" htmlFor="check">Print QR Labels immediately</label>
</div>
<button @click="triggerNotification('Batch added to production queue'); activeModal = null" className="w-full mt-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-sm font-medium text-white trans-all shadow-[0_0_20px_rgba(16,185,129,0.2)]">Create Batch</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 pointer-events-none" x-cloak="" x-show="notification" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-2" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<div className="bg-neutral-900 border border-white/10 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium" x-text="notification"></span>
</div>
</div>



    </>
  );
}
