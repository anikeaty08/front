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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Common Chart Config for Dark Theme
        Chart.defaults.color = '#737373';
        Chart.defaults.font.family = 'Inter';
        const gridConfig = { color: '#262626', drawBorder: false };

        // Revenue Line Chart
        const ctxRev = document.getElementById('revenueChart').getContext('2d');
        
        // Create gradient for revenue
        const gradient = ctxRev.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(34, 197, 94, 0.2)');   // Green-500 at 20% opacity
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        new Chart(ctxRev, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [28000, 31000, 29500, 34000, 36500, 35000, 38000, 41000, 39500, 42500, 41000, 44000],
                    borderColor: '#22c55e', // Green 500
                    backgroundColor: gradient,
                    borderWidth: 2,
                    pointBackgroundColor: '#171717', // Neutral 900
                    pointBorderColor: '#22c55e',
                    pointBorderWidth: 2,
                    pointRadius: 3,
                    pointHoverRadius: 5,
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
                        backgroundColor: '#171717',
                        titleColor: '#e5e5e5',
                        bodyColor: '#e5e5e5',
                        borderColor: '#404040',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return '$' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                scales: {
                    x: { grid: { display: false }, border: { display: false } },
                    y: { 
                        grid: gridConfig, 
                        border: { display: false },
                        ticks: {
                            callback: function(value) { return '$' + value / 1000 + 'k'; }
                        }
                    }
                },
                interaction: { intersect: false, mode: 'index' },
            }
        });

        // Attendance Bar Chart
        const ctxAtt = document.getElementById('attendanceChart').getContext('2d');
        new Chart(ctxAtt, {
            type: 'bar',
            data: {
                labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm'],
                datasets: [{
                    label: 'Avg Members',
                    data: [45, 25, 30, 40, 85, 55],
                    backgroundColor: '#404040', // Neutral 700
                    hoverBackgroundColor: '#22c55e', // Green 500 on hover
                    borderRadius: 4,
                    barThickness: 16
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: '#171717',
                        titleColor: '#e5e5e5',
                        bodyColor: '#e5e5e5',
                        borderColor: '#404040',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false
                    }
                },
                scales: {
                    x: { grid: { display: false }, border: { display: false } },
                    y: { grid: gridConfig, border: { display: false } }
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
      

<aside className="w-64 bg-neutral-900/50 border-r border-neutral-800/60 hidden md:flex flex-col justify-between backdrop-blur-xl z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-neutral-800/60">
<span className="text-xl font-semibold tracking-tighter text-white">G Y M I O</span>
<div className="ml-2 px-1.5 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">PRO</div>
</div>

<nav className="p-4 space-y-1">
<div className="text-xs font-medium text-neutral-500 mb-2 px-2 uppercase tracking-wider">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-800/80 text-white font-medium text-sm border border-neutral-700/50 shadow-sm transition-all" href="#">
<iconify-icon className="text-lg text-green-400" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Members
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
                    Attendance
                </a>
<div className="text-xs font-medium text-neutral-500 mt-6 mb-2 px-2 uppercase tracking-wider">Management</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:medal-ribbon-linear" strokeWidth="1.5"></iconify-icon>
                    Memberships
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all border border-transparent" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
                    Billing &amp; Payments
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
                    Trainers
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
                    Equipment
                </a>
<div className="text-xs font-medium text-neutral-500 mt-6 mb-2 px-2 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon>
                    Reports
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 font-medium text-sm hover:text-white hover:bg-neutral-800/50 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                    Settings
                </a>
</nav>
</div>

<div className="p-4 border-t border-neutral-800/60">
<button className="flex items-center gap-3 w-full px-2 py-2 rounded-lg hover:bg-neutral-800/50 transition-all text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white text-xs font-semibold">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-neutral-500 truncate">Admin</p>
</div>
<iconify-icon className="text-neutral-500" icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-neutral-950 relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-neutral-800/60 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-4 flex-1">
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="relative w-full max-w-md hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-neutral-900/50 border border-neutral-800/80 rounded-lg pl-9 pr-4 py-1.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all" placeholder="Search members, IDs, or invoices..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium text-neutral-500 bg-neutral-800 rounded border border-neutral-700/50">⌘</kbd>
<kbd className="hidden lg:inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium text-neutral-500 bg-neutral-800 rounded border border-neutral-700/50">K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-5">

<div className="hidden lg:flex items-center gap-2">
<span className="text-xs text-neutral-400 font-medium">Scanner Mode</span>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer translate-x-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<div className="h-5 w-px bg-neutral-800 hidden lg:block"></div>
<button className="relative text-neutral-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full ring-2 ring-neutral-950"></span>
</button>
<button className="flex items-center gap-2 bg-white text-neutral-950 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Add Member</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-8">

<div>
<h1 className="text-2xl font-semibold tracking-tight text-white">Overview</h1>
<p className="text-sm text-neutral-400 mt-1">Monitor your gym's performance and recent activities.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon> 12%
                            </span>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-1">Total Members</p>
<h3 className="text-3xl font-semibold tracking-tight text-white">1,248</h3>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:user-check-linear"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon> 4.5%
                            </span>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-1">Active Members</p>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-semibold tracking-tight text-white">1,102</h3>
<span className="text-xs text-neutral-500 font-medium">/ 146 expired</span>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:qr-code-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-800 px-2 py-1 rounded-md">Today</span>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-1">Check-ins Today</p>
<h3 className="text-3xl font-semibold tracking-tight text-white">342</h3>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5 relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded-lg bg-neutral-800/80 border border-neutral-700/50 text-neutral-300">
<iconify-icon className="text-lg" icon="solar:dollar-linear"></iconify-icon>
</div>
<span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-md">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon> 8.2%
                            </span>
</div>
<div>
<p className="text-sm font-medium text-neutral-400 mb-1">Monthly Revenue</p>
<h3 className="text-3xl font-semibold tracking-tight text-white">$42,500</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-base font-semibold text-white">Revenue Overview</h2>
<p className="text-xs text-neutral-500 mt-0.5">Monthly revenue vs expenses (current year)</p>
</div>
<div className="flex bg-neutral-900 border border-neutral-800 rounded-md p-0.5">
<button className="px-2.5 py-1 text-xs font-medium text-white bg-neutral-800 rounded shadow-sm">12M</button>
<button className="px-2.5 py-1 text-xs font-medium text-neutral-400 hover:text-white">6M</button>
<button className="px-2.5 py-1 text-xs font-medium text-neutral-400 hover:text-white">30D</button>
</div>
</div>
<div className="h-64 w-full">
<canvas id="revenueChart"></canvas>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl p-5">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-base font-semibold text-white">Peak Hours</h2>
<p className="text-xs text-neutral-500 mt-0.5">Average attendance by time</p>
</div>
<button className="text-neutral-400 hover:text-white">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
<div className="h-64 w-full">
<canvas id="attendanceChart"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl flex flex-col">
<div className="p-5 border-b border-neutral-800/60 flex items-center justify-between">
<h2 className="text-base font-semibold text-white">Live Check-ins</h2>
<a className="text-xs font-medium text-green-400 hover:text-green-300 transition-colors flex items-center gap-1" href="#">
                                View Log <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="p-2 flex-1 overflow-auto">
<div className="space-y-1">

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800/40 transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full bg-neutral-800 object-cover border border-neutral-700" src="https://i.pravatar.cc/150?u=1"/>
<div>
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Sarah Jenkins</p>
<p className="text-xs text-neutral-500 font-mono">ID: #M-9021</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-neutral-300">Just now</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">12 Months</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800/40 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">
                                            MK
                                        </div>
<div>
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Marcus King</p>
<p className="text-xs text-neutral-500 font-mono">ID: #M-8834</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-neutral-300">2 mins ago</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">VIP Plan</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800/40 transition-colors group">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-9 h-9 rounded-full bg-neutral-800 object-cover border border-neutral-700" src="https://i.pravatar.cc/150?u=4"/>
<div>
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Elena Rodriguez</p>
<p className="text-xs text-neutral-500 font-mono">ID: #M-7622</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-neutral-300">15 mins ago</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-neutral-700">3 Months</span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800/40 transition-colors group">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300">
                                            DT
                                        </div>
<div>
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">David Thompson</p>
<p className="text-xs text-neutral-500 font-mono">ID: #M-9102</p>
</div>
</div>
<div className="text-right flex items-center gap-3">
<div className="text-right">
<p className="text-sm font-medium text-neutral-300">32 mins ago</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-500/10 text-red-400 border border-red-500/20">Expiring Soon</span>
</div>

<button className="p-1 text-neutral-500 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/60 rounded-xl flex flex-col">
<div className="p-5 border-b border-neutral-800/60 flex items-center justify-between">
<h2 className="text-base font-semibold text-white flex items-center gap-2">
                                Renewals Required 
                                <span className="bg-red-500/10 text-red-400 border border-red-500/20 text-[10px] px-1.5 py-0.5 rounded-full font-medium">24</span>
</h2>
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-1 bg-neutral-800 px-2 py-1 rounded border border-neutral-700">
                                Send Reminders <iconify-icon icon="solar:letter-linear"></iconify-icon>
</button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-neutral-800/60 text-xs font-medium text-neutral-500 uppercase tracking-wider bg-neutral-900/20">
<th className="px-5 py-3 font-medium">Member</th>
<th className="px-5 py-3 font-medium">Plan</th>
<th className="px-5 py-3 font-medium">Expires In</th>
<th className="px-5 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-neutral-800/40">
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-5 py-3 whitespace-nowrap">
<div className="font-medium text-white">Alex Morgan</div>
<div className="text-xs text-neutral-500">+1 555-0192</div>
</td>
<td className="px-5 py-3 whitespace-nowrap text-neutral-400">1 Month Plan</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="text-red-400 font-medium text-xs">Today</span>
</td>
<td className="px-5 py-3 whitespace-nowrap text-right">
<button className="text-xs font-medium bg-green-500 hover:bg-green-600 text-neutral-950 px-3 py-1.5 rounded transition-colors shadow-sm">Renew</button>
</td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-5 py-3 whitespace-nowrap">
<div className="font-medium text-white">Brian Chen</div>
<div className="text-xs text-neutral-500">brian.c@email.com</div>
</td>
<td className="px-5 py-3 whitespace-nowrap text-neutral-400">6 Months</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="text-orange-400 font-medium text-xs">2 Days</span>
</td>
<td className="px-5 py-3 whitespace-nowrap text-right">
<button className="text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-3 py-1.5 rounded transition-colors">Renew</button>
</td>
</tr>
<tr className="hover:bg-neutral-800/30 transition-colors">
<td className="px-5 py-3 whitespace-nowrap">
<div className="font-medium text-white">Jessica Wong</div>
<div className="text-xs text-neutral-500">+1 555-8831</div>
</td>
<td className="px-5 py-3 whitespace-nowrap text-neutral-400">12 Months</td>
<td className="px-5 py-3 whitespace-nowrap">
<span className="text-yellow-400 font-medium text-xs">5 Days</span>
</td>
<td className="px-5 py-3 whitespace-nowrap text-right">
<button className="text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-3 py-1.5 rounded transition-colors">Renew</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-neutral-800/60 text-center">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">View all expiring memberships</a>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
