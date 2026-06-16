import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Modal Logic
        function toggleModal(show) {
            const modal = document.getElementById('upgrade-modal');
            if (show) {
                modal.classList.remove('hidden');
            } else {
                modal.classList.add('hidden');
            }
        }

        // Navigation Logic
        function switchTab(tabId) {
            // Hide all pages
            const pages = ['page-overview', 'page-analytics', 'page-subscription', 'page-team', 'page-settings'];
            pages.forEach(page => {
                document.getElementById(page).classList.add('hidden');
            });

            // Show selected page
            document.getElementById('page-' + tabId).classList.remove('hidden');

            // Reset all Nav Buttons styles
            const navIds = ['nav-overview', 'nav-analytics', 'nav-subscription', 'nav-team', 'nav-settings'];
            navIds.forEach(nav => {
                const btn = document.getElementById(nav);
                const icon = btn.querySelector('iconify-icon');
                
                // Remove active classes
                btn.classList.remove('bg-zinc-100', 'text-zinc-900', 'font-medium');
                btn.classList.add('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');
                
                // Reset Icon
                icon.classList.remove('text-zinc-900');
                icon.classList.add('text-zinc-400', 'group-hover:text-zinc-900');
            });

            // Set Active Nav Button style
            const activeBtn = document.getElementById('nav-' + tabId);
            const activeIcon = activeBtn.querySelector('iconify-icon');
            
            activeBtn.classList.remove('text-zinc-500', 'hover:text-zinc-900', 'hover:bg-zinc-50');
            activeBtn.classList.add('bg-zinc-100', 'text-zinc-900', 'font-medium');
            
            activeIcon.classList.remove('text-zinc-400', 'group-hover:text-zinc-900');
            activeIcon.classList.add('text-zinc-900');

            // Update Header Breadcrumb
            const breadcrumb = document.getElementById('header-breadcrumbs');
            const capitalizedTitle = tabId.charAt(0).toUpperCase() + tabId.slice(1);
            breadcrumb.querySelector('span:last-child').innerText = capitalizedTitle;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-200/60 bg-white flex flex-col justify-between hidden md:flex z-20 shrink-0">
<div className="p-4 space-y-8">

<div className="flex items-center gap-3 px-2 cursor-pointer" onclick="switchTab('overview')">
<div className="w-8 h-8 bg-zinc-900 text-white rounded-lg flex items-center justify-center font-medium tracking-tight shadow-sm">
                    N
                </div>
<span className="font-medium tracking-tight text-sm">NexusCloud</span>
</div>

<nav className="space-y-0.5" id="sidebar-nav">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-900 bg-zinc-100 rounded-md transition-all group" id="nav-overview" onclick="switchTab('overview')">
<iconify-icon className="text-zinc-900" icon="solar:home-smile-linear" width="18"></iconify-icon>
                    Overview
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all group" id="nav-analytics" onclick="switchTab('analytics')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:chart-2-linear" width="18"></iconify-icon>
                    Analytics
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all group" id="nav-subscription" onclick="switchTab('subscription')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:card-linear" width="18"></iconify-icon>
                    Subscription
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all group" id="nav-team" onclick="switchTab('team')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Team
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-all group" id="nav-settings" onclick="switchTab('settings')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </button>
</nav>
</div>

<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3 px-2 cursor-pointer hover:bg-zinc-50 p-2 rounded-lg transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-xs text-zinc-500 font-medium shadow-sm">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">John Doe</span>
<span className="text-xs text-zinc-500">Acme Corp</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-zinc-50/50">

<header className="h-16 border-b border-zinc-200/60 bg-white/80 backdrop-blur-sm flex items-center justify-between px-8 shrink-0 z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500" id="header-breadcrumbs">
<span>Dashboard</span>
<iconify-icon className="opacity-50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-900 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors relative">
<div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:question-circle-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative scroll-smooth">
<div className="max-w-6xl mx-auto pb-12">

<div className="fade-in space-y-8" id="page-overview">
<div className="flex justify-between items-end">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Dashboard Overview</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Welcome back, John. Here is what's happening today.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-md hover:bg-zinc-50 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                             </button>
<button className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> New Project
                             </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12%
                                </span>
</div>
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Total Revenue</h3>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-2xl font-medium text-zinc-900">$24,500.00</p>
<span className="text-xs text-zinc-400">USD</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:minus-circle-linear"></iconify-icon> 0%
                                </span>
</div>
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Active Projects</h3>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-2xl font-medium text-zinc-900">12</p>
<span className="text-xs text-zinc-400">Projects</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:server-linear" width="18"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 8%
                                </span>
</div>
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">API Usage</h3>
<div className="flex items-baseline gap-2 mt-1">
<p className="text-2xl font-medium text-zinc-900">1.2M</p>
<span className="text-xs text-zinc-400">Requests</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-zinc-900">Revenue Trends</h3>
<div className="flex gap-2">
<span className="text-xs text-zinc-500">Last 6 months</span>
</div>
</div>

<div className="h-64 w-full flex items-end justify-between gap-2 md:gap-4 px-2">

<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[40%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$12k</div>
<div className="h-full bg-zinc-200 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">May</span>
</div>
<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[55%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$15k</div>
<div className="h-full bg-zinc-200 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">Jun</span>
</div>
<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[45%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$13k</div>
<div className="h-full bg-zinc-200 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">Jul</span>
</div>
<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[70%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$19k</div>
<div className="h-full bg-zinc-200 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">Aug</span>
</div>
<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[60%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$16k</div>
<div className="h-full bg-zinc-200 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">Sep</span>
</div>
<div className="w-full bg-zinc-50 rounded-t-sm relative group chart-bar h-[85%] hover:bg-blue-50 transition-colors cursor-pointer">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 transition-opacity tooltip pointer-events-none">$24.5k</div>
<div className="h-full bg-zinc-900 rounded-t-sm group-hover:bg-blue-500 transition-colors"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-zinc-400">Oct</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<h3 className="text-sm font-medium text-zinc-900 mb-4">System Health</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm text-zinc-600">API Status</span>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Operational</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm text-zinc-600">Database</span>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Operational</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm text-zinc-600">CDN Nodes</span>
</div>
<span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Degraded</span>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-white shadow-lg">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-yellow-400" icon="solar:crown-star-linear" width="24"></iconify-icon>
<span className="text-xs font-medium bg-white/10 px-2 py-1 rounded backdrop-blur-md">New Feature</span>
</div>
<h3 className="font-medium text-lg mb-2">AI Insights</h3>
<p className="text-sm text-zinc-400 mb-4 font-light">Get automated summary reports of your daily traffic.</p>
<button className="w-full py-2 bg-white text-zinc-900 text-xs font-medium rounded hover:bg-zinc-100 transition-colors">Enable Beta</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-900">Recent Activity</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">View All</button>
</div>
<table className="w-full text-left text-sm">
<tbody className="divide-y divide-zinc-50">
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5 w-10">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
</div>
</td>
<td className="px-2 py-3.5">
<p className="text-sm font-medium text-zinc-900">New Project Created</p>
<p className="text-xs text-zinc-500">Dashboard UI Kit was created by John Doe</p>
</td>
<td className="px-6 py-3.5 text-right text-xs text-zinc-400">2 min ago</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5 w-10">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:bill-check-linear"></iconify-icon>
</div>
</td>
<td className="px-2 py-3.5">
<p className="text-sm font-medium text-zinc-900">Invoice Paid</p>
<p className="text-xs text-zinc-500">Invoice #4920 was automatically paid</p>
</td>
<td className="px-6 py-3.5 text-right text-xs text-zinc-400">1 hour ago</td>
</tr>
<tr className="group hover:bg-zinc-50 transition-colors">
<td className="px-6 py-3.5 w-10">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
</div>
</td>
<td className="px-2 py-3.5">
<p className="text-sm font-medium text-zinc-900">Usage Alert</p>
<p className="text-xs text-zinc-500">You have reached 80% of your token limit</p>
</td>
<td className="px-6 py-3.5 text-right text-xs text-zinc-400">4 hours ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden fade-in space-y-8" id="page-analytics">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Analytics</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Detailed insights into your application performance.</p>
</div>
<div className="flex items-center bg-white border border-zinc-200 rounded-lg p-1 shadow-sm">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md shadow-sm">7 Days</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">30 Days</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">3 Months</button>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-sm font-medium text-zinc-900">Total Visitors</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-medium text-zinc-900">142,392</span>
<span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon> 24.5%
                                    </span>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="h-64 flex items-end justify-between gap-1 w-full px-2">


<div className="w-full bg-zinc-100 rounded-t-sm h-[30%] hover:bg-zinc-800 transition-all duration-300 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">423 visits</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[45%] hover:bg-zinc-800 transition-all duration-300 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">512 visits</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[35%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[60%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[55%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[70%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[80%] hover:bg-zinc-800 transition-all duration-300 relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">Peak: 982</div></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[65%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[50%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[40%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[55%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[75%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[60%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-100 rounded-t-sm h-[45%] hover:bg-zinc-800 transition-all duration-300 relative group"></div>
<div className="w-full bg-zinc-900 rounded-t-sm h-[85%] hover:bg-zinc-800 transition-all duration-300 relative group shadow-lg shadow-zinc-200"><div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-100 transition-opacity whitespace-nowrap z-10">Today</div></div>
</div>
<div className="flex justify-between mt-4 text-xs text-zinc-400 px-1">
<span>Nov 1</span>
<span>Nov 4</span>
<span>Nov 7</span>
<span>Nov 10</span>
<span>Today</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-zinc-100">
<h3 className="text-sm font-medium text-zinc-900">Top Referrers</h3>
</div>
<div className="p-2">
<table className="w-full text-left text-sm">
<thead className="text-xs text-zinc-500 font-medium bg-zinc-50/50">
<tr>
<th className="px-4 py-2 font-medium">Source</th>
<th className="px-4 py-2 font-medium text-right">Visitors</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-50">
<tr>
<td className="px-4 py-3 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:global-linear"></iconify-icon>
<span className="text-zinc-900">google.com</span>
</td>
<td className="px-4 py-3 text-right font-medium text-zinc-700">42,302</td>
</tr>
<tr>
<td className="px-4 py-3 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:chat-round-linear"></iconify-icon>
<span className="text-zinc-900">twitter.com</span>
</td>
<td className="px-4 py-3 text-right font-medium text-zinc-700">21,493</td>
</tr>
<tr>
<td className="px-4 py-3 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear"></iconify-icon>
<span className="text-zinc-900">Direct</span>
</td>
<td className="px-4 py-3 text-right font-medium text-zinc-700">12,402</td>
</tr>
<tr>
<td className="px-4 py-3 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:link-linear"></iconify-icon>
<span className="text-zinc-900">github.com</span>
</td>
<td className="px-4 py-3 text-right font-medium text-zinc-700">8,231</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm p-6">
<h3 className="text-sm font-medium text-zinc-900 mb-6">Top Locations</h3>
<div className="space-y-5">

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<span className="text-lg">🇺🇸</span>
<span className="text-sm text-zinc-700">United States</span>
</div>
<span className="text-xs font-medium text-zinc-900">45%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[45%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<span className="text-lg">🇩🇪</span>
<span className="text-sm text-zinc-700">Germany</span>
</div>
<span className="text-xs font-medium text-zinc-900">21%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[21%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<span className="text-lg">🇬🇧</span>
<span className="text-sm text-zinc-700">United Kingdom</span>
</div>
<span className="text-xs font-medium text-zinc-900">14%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[14%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<span className="text-lg">🇨🇦</span>
<span className="text-sm text-zinc-700">Canada</span>
</div>
<span className="text-xs font-medium text-zinc-900">8%</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 w-[8%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-8" id="page-subscription">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Plan &amp; Usage</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Manage your billing information and view usage limits.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-zinc-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-medium text-zinc-900">Monthly AI Tokens</h3>
<p className="text-xs text-zinc-500 mt-1">Resets on Nov 1, 2023</p>
</div>
<div className="px-2.5 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                                        Near Limit
                                    </div>
</div>
<div className="mb-2 flex items-end justify-between">
<span className="text-3xl font-medium tracking-tight text-zinc-900">892,400</span>
<span className="text-sm text-zinc-500 mb-1">of 1,000,000</span>
</div>
<div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-zinc-800 to-zinc-900 w-[89%] rounded-full relative"></div>
</div>
<div className="mt-4">
<p className="text-xs text-zinc-500 leading-relaxed">
                                        You have used <span className="text-zinc-900 font-medium">89%</span> of your monthly allowance. At this rate, you will exceed your quota in approximately 3 days.
                                    </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:cloud-storage-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Storage</span>
</div>
<span className="text-xs text-zinc-500">24%</span>
</div>
<div className="flex items-end gap-1 mb-2">
<span className="text-lg font-medium text-zinc-900">12.4 GB</span>
<span className="text-xs text-zinc-400 mb-1">/ 50 GB</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[24%] rounded-full"></div>
</div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Seats</span>
</div>
<span className="text-xs text-zinc-500">Active</span>
</div>
<div className="flex items-end gap-1 mb-2">
<span className="text-lg font-medium text-zinc-900">4</span>
<span className="text-xs text-zinc-400 mb-1">/ 5 users</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-[80%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-zinc-900 rounded-xl p-6 text-white relative overflow-hidden shadow-lg group">
<div className="absolute top-0 right-0 p-32 bg-white/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<p className="text-zinc-400 text-xs font-medium uppercase tracking-wide">Current Plan</p>
<h2 className="text-2xl font-medium mt-1">Growth</h2>
</div>
<div className="h-8 w-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:star-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>1M Tokens / month</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>5 Team Members</span>
</div>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium">$49</span>
<span className="text-zinc-400 text-sm">/mo</span>
</div>
<button className="w-full py-2.5 bg-white text-zinc-950 text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors" onclick="toggleModal(true)">
                                        Manage Plan
                                    </button>
</div>
</div>
<div className="bg-white rounded-xl border border-zinc-200 p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900">Payment Method</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900 underline">Edit</button>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-7 bg-zinc-50 border border-zinc-200 rounded flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:card-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-sm text-zinc-900 font-medium">Visa ending in 4242</p>
<p className="text-xs text-zinc-500">Expires 12/25</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in space-y-8" id="page-team">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Team Members</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Manage access and roles.</p>
</div>
<button className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800">Invite Member</button>
</div>
<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 text-xs font-medium">
<tr>
<th className="px-6 py-3 font-medium">User</th>
<th className="px-6 py-3 font-medium">Role</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs">JD</div>
<span className="font-medium text-zinc-900">John Doe</span>
</td>
<td className="px-6 py-4 text-zinc-600">Admin</td>
<td className="px-6 py-4"><span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">Active</span></td>
<td className="px-6 py-4 text-right"><iconify-icon className="text-zinc-400 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon></td>
</tr>
<tr>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs">AS</div>
<span className="font-medium text-zinc-900">Alice Smith</span>
</td>
<td className="px-6 py-4 text-zinc-600">Developer</td>
<td className="px-6 py-4"><span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">Active</span></td>
<td className="px-6 py-4 text-right"><iconify-icon className="text-zinc-400 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden fade-in space-y-8" id="page-settings">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">General Settings</h1>
<p className="text-zinc-500 mt-1 text-sm font-light">Manage global application configurations.</p>
</div>
<div className="max-w-2xl space-y-6">
<div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
<h3 className="font-medium text-zinc-900 mb-4">Profile Information</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Company Name</label>
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-900/10" type="text" value="NexusCloud"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Workspace URL</label>
<div className="flex items-center">
<span className="bg-zinc-50 border border-r-0 border-zinc-200 px-3 py-2 text-sm text-zinc-500 rounded-l-md">nexus.com/</span>
<input className="w-full px-3 py-2 text-sm border border-zinc-200 rounded-r-md focus:outline-none focus:ring-2 focus:ring-zinc-900/10" type="text" value="acme-corp"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4" id="upgrade-modal">

<div className="bg-zinc-900/40 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm transition-opacity" onclick="toggleModal(false)"></div>

<div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 flex flex-col animate-[fadeIn_0.2s_ease-out]">

<div className="flex sticky bg-white border-zinc-100 border-b pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between z-20">
<div className="">
<h2 className="text-lg font-medium text-zinc-900">Upgrade your Subscription</h2>
<p className="text-sm text-zinc-500">Scale your production with higher limits and advanced features.</p>
</div>

<button className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 transition-colors" onclick="toggleModal(false)">
<iconify-icon icon="solar:close-circle-linear" width="22"></iconify-icon>
</button>
</div>

<div className="p-6 md:p-8 bg-zinc-50/50 flex-1">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-xl border border-zinc-200 bg-white opacity-60">
<h3 className="font-medium text-zinc-900">Growth</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight">$49</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-xs text-zinc-500 mb-6 h-8">Perfect for small teams and startups getting started.</p>
<button className="w-full py-2 rounded-lg border border-zinc-200 text-zinc-400 text-sm font-medium cursor-not-allowed bg-zinc-50" disabled="">Current Plan</button>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-500"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> 1M Tokens</li>
<li className="flex items-center gap-2 text-xs text-zinc-500"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> 5 Users</li>
</ul>
</div>

<div className="p-5 rounded-xl border border-zinc-900 bg-white ring-1 ring-zinc-900/5 shadow-xl transform md:-translate-y-2 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-900 text-white text-[10px] font-medium tracking-wide uppercase rounded-full">Recommended</div>
<h3 className="font-medium text-zinc-900">Scale</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight">$149</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<p className="text-xs text-zinc-500 mb-6 h-8">For growing companies with higher volume needs.</p>
<button className="w-full py-2 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10">Upgrade to Scale</button>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-700 font-medium"><iconify-icon className="text-zinc-900" icon="solar:check-circle-bold" width="14"></iconify-icon> 10M Tokens <span className="text-green-600 text-[10px] bg-green-50 px-1 rounded ml-1">10x</span></li>
<li className="flex items-center gap-2 text-xs text-zinc-700 font-medium"><iconify-icon className="text-zinc-900" icon="solar:check-circle-bold" width="14"></iconify-icon> 20 Users</li>
</ul>
</div>

<div className="p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors">
<h3 className="font-medium text-zinc-900">Enterprise</h3>
<div className="mt-2 mb-4">
<span className="text-2xl font-medium tracking-tight">Custom</span>
</div>
<p className="text-xs text-zinc-500 mb-6 h-8">Unlimited volume and dedicated support.</p>
<button className="w-full py-2 rounded-lg border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors">Contact Sales</button>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-500"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Unlimited Tokens</li>
<li className="flex items-center gap-2 text-xs text-zinc-500"><iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon> Unlimited Users</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-200 flex justify-between items-center">
<p className="text-xs text-zinc-400">Prices exclude VAT. You will be charged a prorated amount for the remainder of the cycle.</p>
<a className="text-xs text-zinc-900 font-medium hover:underline" href="#">Compare all features</a>
</div>
</div>
</div>
</div>


    </>
  );
}
