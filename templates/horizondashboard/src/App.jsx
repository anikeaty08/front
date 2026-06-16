import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#5802f7',
secondary: '#f3f0ff',
dark: '#1a1a1a',
pastelBlue: '#eef2ff',
pastelPurple: '#f5f3ff',
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        // --- Sidebar Logic ---
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');

        function toggleSidebar() {
            // Mobile: Toggle Translate X
            const isClosed = sidebar.classList.contains('-translate-x-full');
            
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                }, 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 300);
            }
        }

        // --- Charts Configuration ---
        document.addEventListener('DOMContentLoaded', function() {
            Chart.defaults.font.family = "'Montserrat', sans-serif";
            Chart.defaults.color = '#94a3b8';
            Chart.defaults.scale.grid.color = '#f1f5f9';
            Chart.defaults.scale.grid.borderColor = 'transparent';

            // Revenue Chart (Line with Gradient)
            const ctxRevenue = document.getElementById('revenueChart').getContext('2d');
            
            // Gradient
            let gradient = ctxRevenue.createLinearGradient(0, 0, 0, 400);
            gradient.addColorStop(0, 'rgba(88, 2, 247, 0.2)');
            gradient.addColorStop(1, 'rgba(88, 2, 247, 0)');

            new Chart(ctxRevenue, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                    datasets: [{
                        label: 'Revenue',
                        data: [30000, 35000, 32000, 48000, 45000, 60000, 58000, 75000, 72000, 84254],
                        borderColor: '#5802f7',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointBackgroundColor: '#ffffff',
                        pointBorderColor: '#5802f7',
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'white',
                            titleColor: '#1a1a1a',
                            bodyColor: '#64748b',
                            borderColor: '#e2e8f0',
                            borderWidth: 1,
                            padding: 12,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return '$ ' + context.parsed.y.toLocaleString();
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: { borderDash: [4, 4] },
                            ticks: { callback: function(value) { return '$' + value / 1000 + 'k'; } }
                        },
                        x: {
                            grid: { display: false }
                        }
                    }
                }
            });

            // Device Chart (Doughnut)
            const ctxDevice = document.getElementById('deviceChart').getContext('2d');
            new Chart(ctxDevice, {
                type: 'doughnut',
                data: {
                    labels: ['Desktop', 'Mobile', 'Tablet'],
                    datasets: [{
                        data: [65, 25, 10],
                        backgroundColor: [
                            '#5802f7', // Primary
                            '#2dd4bf', // Teal
                            '#fb923c'  // Orange
                        ],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '75%',
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: 'white',
                            bodyColor: '#1a1a1a',
                            borderColor: '#e2e8f0',
                            borderWidth: 1,
                        }
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="sidebar-transition fixed inset-y-0 left-0 z-50 w-64 bg-white/90 backdrop-blur-xl border-r border-slate-100 transform -translate-x-full md:relative md:translate-x-0 flex flex-col justify-between shadow-[4px_0_24px_rgba(0,0,0,0.02)]" id="sidebar">

<div className="h-20 flex items-center px-8 border-b border-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
<span className="text-lg font-semibold font-poppins">H</span>
</div>
<span className="text-dark text-xl font-extrabold tracking-tight font-poppins">HORIZON<span className="text-primary">.</span></span>
</div>
</div>

<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Overview</p>
<a className="group flex items-center gap-3 text-primary transition-all duration-200 font-medium font-poppins rounded-xl pt-3 pr-4 pb-3 pl-4" href="#">
<iconify-icon icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon className="" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Analytics</span>
</a>
<a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Transactions</span>
</a>
<p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 mt-8">Management</p>
<a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Users</span>
</a>
<a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Products</span>
</a>
<a className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="flex-1 flex justify-between items-center">
<span>Notifications</span>
<span className="bg-rose-100 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
</div>
</a>
</nav>

<div className="p-4 border-t border-slate-50">
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-primary transition-all duration-200" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-rose-500 transition-all duration-200 mt-1" href="#">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Logout</span>
</a>
</div>
</aside>

<div className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-40 hidden md:hidden transition-opacity opacity-0" id="sidebar-overlay" onclick="toggleSidebar()"></div>

<main className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden scroll-smooth">

<header className="sticky flex glass md:px-10 md:pt-3 md:pb-3 h-20 z-30 pt-3 pr-6 pb-3 pl-6 top-0 items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-primary transition-colors p-1" onclick="toggleSidebar()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<nav className="hidden sm:flex items-center text-sm font-medium text-slate-400">
<span className="hover:text-primary cursor-pointer transition-colors">Dashboard</span>
<iconify-icon className="mx-2 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-primary">Overview</span>
</nav>
</div>
<div className="flex items-center gap-4 md:gap-6">

<div className="hidden md:flex focus-within:border-primary/20 focus-within:bg-white focus-within:shadow-sm transition-all duration-300 bg-slate-100/50 w-64 border-transparent border rounded-full pt-2 pr-4 pb-2 pl-4 items-center">
<iconify-icon className="text-slate-400 mr-2" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-slate-600 w-full placeholder-slate-400" placeholder="Search..." type="text"/>
</div>

<button className="relative text-slate-400 hover:text-primary transition-colors p-1.5 rounded-full hover:bg-secondary">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>

<div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
<div className="text-right hidden md:block">
<p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">Alex Morgan</p>
<p className="text-xs text-slate-400">Administrator</p>
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-[2px]">
<img alt="Profile" className="w-full h-full object-cover border-white border-2 rounded-full" src="https://avatars.githubusercontent.com/u/152723454?w=800&amp;q=80"/>
</div>
</div>
</div>
</header>

<div className="md:p-10 w-full max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 space-y-8">

<div className="flex flex-col md:flex-row md:items-end gap-4 gap-x-4 gap-y-4 justify-between">
<div className="">
<h1 className="md:text-4xl text-dark text-3xl font-semibold tracking-tight font-poppins mb-2">Morning, Alex</h1>
<p className="text-slate-500 font-poppins">Here's what's happening with your store today.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-white hover:shadow-sm hover:border-primary/30 hover:text-primary transition-all">
<iconify-icon className="" height="18" icon="solar:calendar-date-linear" style={{color: 'rgb(88, 2, 247)'}} width="18"></iconify-icon>
<span className="">Last 30 Days</span>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span>New Report</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="hover:shadow-[0_8px_30px_-4px_rgba(88,2,247,0.08)] transition-all duration-300 group bg-white border-slate-50 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-xl bg-pastelPurple text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dollar-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                +12.5% <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
<h3 className="text-slate-400 text-sm font-medium mb-1">Total Revenue</h3>
<p className="text-dark text-2xl font-bold font-poppins">$84,254.00</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(88,2,247,0.08)] transition-all duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                +5.2% <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
<h3 className="text-slate-400 text-sm font-medium mb-1">Total Orders</h3>
<p className="text-dark text-2xl font-bold font-poppins">1,254</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(88,2,247,0.08)] transition-all duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-full">
                                -2.1% <iconify-icon className="ml-1" icon="solar:arrow-right-down-linear"></iconify-icon>
</span>
</div>
<h3 className="text-slate-400 text-sm font-medium mb-1">New Customers</h3>
<p className="text-dark text-2xl font-bold font-poppins">856</p>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_-4px_rgba(88,2,247,0.08)] transition-all duration-300 border border-slate-50 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                +8.4% <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
<h3 className="text-sm font-medium text-slate-400 mb-1">Conversion Rate</h3>
<p className="text-dark text-2xl font-bold font-poppins">3.42%</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border-slate-50 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)]">
<div className="flex justify-between items-center mb-6">
<div className="">
<h3 className="text-dark text-lg font-semibold font-poppins">Revenue Analytics</h3>
<p className="text-xs text-slate-400">Monthly revenue growth</p>
</div>
<button className="text-slate-400 hover:text-primary transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="24"></iconify-icon>
</button>
</div>
<div className="h-64 w-full relative">
<canvas className="" height="320" id="revenueChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '738.7px'}} width="923"></canvas>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col">
<h3 className="text-dark text-lg font-semibold font-poppins mb-1">Traffic Source</h3>
<p className="text-xs text-slate-400 mb-6">Device breakdown</p>
<div className="relative h-48 w-full flex justify-center mb-4">
<canvas className="" height="240" id="deviceChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '332.5px'}} width="415"></canvas>
</div>
<div className="mt-auto space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-slate-600">Desktop</span>
</div>
<span className="font-semibold text-dark">65%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-teal-400"></span>
<span className="text-slate-600">Mobile</span>
</div>
<span className="font-semibold text-dark">25%</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-orange-400"></span>
<span className="text-slate-600">Tablet</span>
</div>
<span className="font-semibold text-dark">10%</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-slate-50 overflow-hidden">
<div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="">
<h3 className="text-dark text-lg font-semibold font-poppins">Recent Orders</h3>
<p className="text-xs text-slate-400">Transaction history</p>
</div>
<div className="flex gap-2">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-primary/50 transition-colors w-full sm:w-48" placeholder="Search order..." type="text"/>
</div>
<button className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500">
<iconify-icon icon="solar:filter-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-slate-50/50 border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400 font-semibold">
<th className="px-6 py-4">Order ID</th>
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Product</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4">Amount</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0">
<td className="px-6 py-4 font-mono text-slate-500">#ORD-001</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">JD</div>
<span className="font-medium text-dark">John Doe</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">Premium Subscription</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 font-medium text-dark">$129.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Completed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0">
<td className="px-6 py-4 font-mono text-slate-500">#ORD-002</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">AS</div>
<span className="font-medium text-dark">Sarah Smith</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">UI Design Kit</td>
<td className="px-6 py-4 text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 font-medium text-dark">$49.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700">Pending</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors border-b border-slate-50 last:border-0">
<td className="px-6 py-4 font-mono text-slate-500">#ORD-003</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 text-xs font-bold">MK</div>
<span className="font-medium text-dark">Mike K.</span>
</div>
</td>
<td className="px-6 py-4 text-slate-600">Consultation Hour</td>
<td className="px-6 py-4 text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 font-medium text-dark">$250.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">Completed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-slate-50 flex items-center justify-between">
<p className="text-xs text-slate-500">Showing <span className="font-medium text-dark">1-3</span> of <span className="font-medium text-dark">128</span></p>
<div className="flex gap-2">
<button className="px-3 py-1 rounded-md border border-slate-200 text-slate-500 hover:border-primary hover:text-primary text-xs transition-colors">Prev</button>
<button className="px-3 py-1 rounded-md bg-primary text-white text-xs shadow-md shadow-primary/20">1</button>
<button className="px-3 py-1 rounded-md border border-slate-200 text-slate-500 hover:border-primary hover:text-primary text-xs transition-colors">2</button>
<button className="px-3 py-1 rounded-md border border-slate-200 text-slate-500 hover:border-primary hover:text-primary text-xs transition-colors">Next</button>
</div>
</div>
</div>

<footer className="mt-8 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2023 Aura Dashboard UI. All rights reserved.</p>
<div className="flex gap-4 mt-2 sm:mt-0">
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Terms of Service</a>
</div>
</footer>
</div>
</main>
</div>



    </>
  );
}
