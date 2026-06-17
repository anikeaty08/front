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



        // -- Configuration --
        const APP = {
            role: 'partner', // 'partner' or 'admin'
            activePage: 'dashboard', // Default page ID
            
            navItems: {
                partner: [
                    { id: 'dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
                    { id: 'referrals', label: 'Referrals', icon: 'link' },
                    { id: 'earnings', label: 'Earnings', icon: 'bar-chart-2' }, // Reusing dashboard template for simpl
                    { id: 'payouts', label: 'Payouts', icon: 'credit-card' },
                    { id: 'profile', label: 'Profile', icon: 'user' },
                ],
                admin: [
                    { id: 'overview', label: 'Overview', icon: 'activity' },
                    { id: 'affiliates', label: 'Affiliates', icon: 'users' },
                    { id: 'conversions', label: 'Conversions', icon: 'mouse-pointer-2' }, // Reusing overview logic for simple demo
                    { id: 'payouts', label: 'Payouts', icon: 'dollar-sign' },
                    { id: 'settings', label: 'Settings', icon: 'settings' },
                    { id: 'logs', label: 'Logs', icon: 'file-text' } // Placeholder
                ]
            }
        };

        // -- Logic --

        function init() {
            renderSidebar();
            navigate(APP.role === 'partner' ? 'dashboard' : 'overview');
            updateRoleDisplay();
            lucide.createIcons();
        }

        function toggleRole() {
            APP.role = APP.role === 'partner' ? 'admin' : 'partner';
            APP.activePage = APP.role === 'partner' ? 'dashboard' : 'overview';
            updateRoleDisplay();
            renderSidebar();
            navigate(APP.activePage);
        }

        function updateRoleDisplay() {
            const display = document.getElementById('role-display');
            const icon = APP.role === 'partner' ? 'user' : 'shield';
            const color = APP.role === 'partner' ? 'text-purple-500' : 'text-red-500';
            const label = APP.role === 'partner' ? 'Partner Panel' : 'Admin Panel';
            
            display.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4 ${color}"></i><span>${label}</span>`;
            
            // Re-run icons for the newly injected HTML
            lucide.createIcons();
        }

        function renderSidebar() {
            const container = document.getElementById('nav-container');
            const items = APP.navItems[APP.role];
            
            let html = '';
            items.forEach(item => {
                // Determine active styling logic later in navigate(), here we just build base
                html += `
                    <button onclick="navigate('${item.id}')" id="nav-${item.id}" class="w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md mb-1 transition-colors text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.03]">
                        <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                        ${item.label}
                    </button>
                `;
            });
            container.innerHTML = html;
            lucide.createIcons();
        }

        function navigate(pageId) {
            APP.activePage = pageId;
            
            // 1. Update Title
            const titleEl = document.getElementById('page-title');
            const currentItem = APP.navItems[APP.role].find(i => i.id === pageId);
            if(currentItem) titleEl.innerText = currentItem.label;

            // 2. Update Sidebar Active State
            document.querySelectorAll('nav button').forEach(btn => {
                btn.className = "w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md mb-1 transition-colors text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.03]";
            });
            const activeBtn = document.getElementById(`nav-${pageId}`);
            if(activeBtn) {
                activeBtn.className = "w-full flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md mb-1 transition-colors text-white bg-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]";
            }

            // 3. Render Content
            const contentArea = document.getElementById('content-area');
            contentArea.innerHTML = ''; // Clear current

            // Construct template ID
            // Note: For demo simplicity, 'earnings' maps to dashboard, 'conversions' maps to overview table only
            let templateId = `view-${APP.role}-${pageId}`;
            
            // Fallbacks for placeholder pages to keep code block concise
            if (pageId === 'earnings') templateId = 'view-partner-dashboard'; 
            if (pageId === 'conversions') templateId = 'view-admin-overview';
            if (pageId === 'logs') templateId = 'view-admin-overview';

            const template = document.getElementById(templateId);
            
            if (template) {
                const clone = template.content.cloneNode(true);
                contentArea.appendChild(clone);
            } else {
                contentArea.innerHTML = `<div class="text-neutral-500 flex flex-col items-center justify-center h-64"><i data-lucide="wrench" class="w-8 h-8 mb-2 opacity-50"></i><p>Component under construction</p></div>`;
            }

            // Mobile menu close
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            if (!sidebar.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
                 toggleSidebar();
            }

            lucide.createIcons();
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        // Boot
        init();

    
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
      

<div className="fixed inset-0 bg-black/80 z-40 hidden lg:hidden backdrop-blur-sm" id="mobile-overlay" onclick="toggleSidebar()"></div>

<aside className="w-64 h-full bg-neutral-950 border-r border-white/5 flex flex-col fixed lg:static z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-200" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-white/5 justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.5)]">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-neutral-100 font-medium tracking-tight text-lg">AURA</span>
</div>

<button className="lg:hidden text-neutral-500" onclick="toggleRole()">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
</button>
</div>

<div className="px-4 py-4">
<div className="bg-neutral-900 rounded-lg p-3 border border-white/5">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Current View</span>
<button className="text-xs text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1" onclick="toggleRole()">
                        Switch <i className="w-3 h-3" data-lucide="refresh-cw"></i>
</button>
</div>
<div className="text-neutral-200 font-medium flex items-center gap-2" id="role-display">
<i className="w-4 h-4 text-purple-500" data-lucide="user"></i>
<span>Partner</span>
</div>
</div>
</div>

<nav className="flex-1 px-2 space-y-0.5 overflow-y-auto" id="nav-container">

</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-300 font-medium">
                    JS
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-200 truncate">John Smith</p>
<p className="text-xs text-neutral-600 truncate">john@aura.build</p>
</div>
<button className="text-neutral-600 hover:text-neutral-300">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black/20">

<header className="h-16 border-b border-white/5 bg-neutral-950 flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-4">
<button className="lg:hidden text-neutral-400 hover:text-white" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<h1 className="text-base font-medium text-neutral-200 tracking-tight" id="page-title">Overview</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-green-400">System Operational</span>
</div>
<button className="text-neutral-500 hover:text-neutral-300 relative">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full border-2 border-neutral-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6" id="content-area">

</div>
</main>


<template id="view-partner-dashboard">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-5 bg-neutral-900/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><i className="w-5 h-5" data-lucide="dollar-sign"></i></div>
<span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded">+12.5%</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$4,230.50</div>
<div className="text-xs text-neutral-500">Total Earnings</div>
</div>
<div className="p-5 bg-neutral-900/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><i className="w-5 h-5" data-lucide="wallet"></i></div>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">$850.00</div>
<div className="text-xs text-neutral-500">Available Balance</div>
</div>
<div className="p-5 bg-neutral-900/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-500/10 rounded-lg text-orange-400"><i className="w-5 h-5" data-lucide="mouse-pointer-2"></i></div>
<span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded">+5.2%</span>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">1,245</div>
<div className="text-xs text-neutral-500">Total Clicks</div>
</div>
<div className="p-5 bg-neutral-900/50 border border-white/5 rounded-xl hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400"><i className="w-5 h-5" data-lucide="users"></i></div>
</div>
<div className="text-2xl font-semibold text-white tracking-tight mb-1">3.4%</div>
<div className="text-xs text-neutral-500">Conversion Rate</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200">Earnings Overview</h3>
<div className="flex bg-neutral-800 rounded-lg p-0.5">
<button className="px-3 py-1 text-xs font-medium text-white bg-neutral-700 rounded-md shadow-sm">7D</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white">1M</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white">3M</button>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '40%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$120</div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '65%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">$340</div>
</div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '45%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '80%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '55%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '30%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-all relative group" style={{height: '70%'}}></div>
<div className="w-full bg-purple-600 rounded-t-sm hover:bg-purple-500 transition-all relative group" style={{height: '90%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs px-2 py-1 rounded opacity-100">$510</div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs text-neutral-600 font-mono">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</template>

<template id="view-partner-referrals">
<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 mb-6">
<h3 className="text-sm font-medium text-neutral-200 mb-4">Your Referral Link</h3>
<div className="flex gap-2">
<div className="flex-1 bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-neutral-300 text-sm font-mono flex items-center justify-between">
<span>https://aura.build/ref/johnsmith</span>
</div>
<button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
                </button>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-neutral-200">Recent Referrals</h3>
<button className="text-xs text-purple-400 hover:text-purple-300">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-neutral-500 border-b border-white/5">
<th className="px-6 py-3 font-medium">User</th>
<th className="px-6 py-3 font-medium">Date Joined</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Commission</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-300">0x4a...9b2c</td>
<td className="px-6 py-3 text-neutral-500">Oct 24, 2023</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Active</span></td>
<td className="px-6 py-3 text-right text-neutral-300">$45.00</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-300">0x12...8d11</td>
<td className="px-6 py-3 text-neutral-500">Oct 23, 2023</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Active</span></td>
<td className="px-6 py-3 text-right text-neutral-300">$12.50</td>
</tr>
<tr className="hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-300">0x8f...22a1</td>
<td className="px-6 py-3 text-neutral-500">Oct 22, 2023</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-700/30 text-neutral-400">Pending</span></td>
<td className="px-6 py-3 text-right text-neutral-300">$0.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</template>

<template id="view-partner-payouts">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-lg font-medium text-white tracking-tight">$850.00</h2>
<p className="text-xs text-neutral-500">Available for withdrawal</p>
</div>
<button className="bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Request Payout
            </button>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5">
<h3 className="text-sm font-medium text-neutral-200">Payout History</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-xs text-neutral-500 border-b border-white/5">
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Transaction ID</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-400">Oct 15, 2023</td>
<td className="px-6 py-3 font-mono text-xs text-neutral-500">TX-9821-3321</td>
<td className="px-6 py-3 text-white font-medium">$1,200.00</td>
<td className="px-6 py-3 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Paid</span></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-400">Sep 01, 2023</td>
<td className="px-6 py-3 font-mono text-xs text-neutral-500">TX-1122-4411</td>
<td className="px-6 py-3 text-white font-medium">$450.00</td>
<td className="px-6 py-3 text-right"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Paid</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</template>

<template id="view-partner-profile">
<div className="max-w-2xl">
<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 space-y-6">
<div>
<h3 className="text-sm font-medium text-white mb-1">Account Details</h3>
<p className="text-xs text-neutral-500">Your personal information is read-only.</p>
</div>
<div className="grid grid-cols-1 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Email Address</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-neutral-400 text-sm focus:outline-none cursor-not-allowed" readonly="" type="text" value="john@aura.build"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Wallet Address (USDT/USDC)</label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-colors font-mono" type="text" value="0x71C...92F1"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1.5">Account Status</label>
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400">Verified</span>
<span className="text-xs text-neutral-600">Level 2 Affiliate</span>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5 flex justify-end">
<button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Save Changes
                    </button>
</div>
</div>
</div>
</template>

<template id="view-admin-overview">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
<div className="p-4 bg-neutral-900/50 border border-white/5 rounded-xl">
<div className="text-xs text-neutral-500 mb-1">Total Affiliates</div>
<div className="text-xl font-semibold text-white">1,240</div>
</div>
<div className="p-4 bg-neutral-900/50 border border-white/5 rounded-xl">
<div className="text-xs text-neutral-500 mb-1">Total Clicks</div>
<div className="text-xl font-semibold text-white">845.2K</div>
</div>
<div className="p-4 bg-neutral-900/50 border border-white/5 rounded-xl">
<div className="text-xs text-neutral-500 mb-1">Total Conversions</div>
<div className="text-xl font-semibold text-white">12.5K</div>
</div>
<div className="p-4 bg-neutral-900/50 border border-white/5 rounded-xl">
<div className="text-xs text-neutral-500 mb-1">Total Paid</div>
<div className="text-xl font-semibold text-white">$1.2M</div>
</div>
<div className="p-4 bg-neutral-900/50 border border-red-500/20 rounded-xl">
<div className="text-xs text-red-400 mb-1">Pending Payouts</div>
<div className="text-xl font-semibold text-white">$45,200</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden">
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center">
<h3 className="text-sm font-medium text-neutral-200">Recent Conversions</h3>
<button className="text-xs text-neutral-500 hover:text-white">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-white/[0.02]">
<tr className="text-xs text-neutral-500">
<th className="px-5 py-2 font-medium">Affiliate</th>
<th className="px-5 py-2 font-medium">Amount</th>
<th className="px-5 py-2 font-medium">Type</th>
<th className="px-5 py-2 font-medium text-right">Time</th>
</tr>
</thead>
<tbody className="text-xs">
<tr className="border-b border-white/5">
<td className="px-5 py-3 text-neutral-300">alex_crypto</td>
<td className="px-5 py-3 text-white">$120.00</td>
<td className="px-5 py-3 text-neutral-500">Sale</td>
<td className="px-5 py-3 text-right text-neutral-500">2m ago</td>
</tr>
<tr className="border-b border-white/5">
<td className="px-5 py-3 text-neutral-300">sarah_v</td>
<td className="px-5 py-3 text-white">$45.00</td>
<td className="px-5 py-3 text-neutral-500">Sub</td>
<td className="px-5 py-3 text-right text-neutral-500">15m ago</td>
</tr>
<tr className="border-b border-white/5">
<td className="px-5 py-3 text-neutral-300">mike_trade</td>
<td className="px-5 py-3 text-white">$240.00</td>
<td className="px-5 py-3 text-neutral-500">Sale</td>
<td className="px-5 py-3 text-right text-neutral-500">1h ago</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-5">
<h3 className="text-sm font-medium text-neutral-200 mb-4">Top Affiliates</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">1</div>
<div>
<div className="text-sm text-neutral-200">CryptoKing</div>
<div className="text-xs text-neutral-500">1,204 Leads</div>
</div>
</div>
<div className="text-sm font-medium text-white">$12.4k</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs font-bold">2</div>
<div>
<div className="text-sm text-neutral-200">ChainMaster</div>
<div className="text-xs text-neutral-500">982 Leads</div>
</div>
</div>
<div className="text-sm font-medium text-white">$9.2k</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs font-bold">3</div>
<div>
<div className="text-sm text-neutral-200">AlphaGain</div>
<div className="text-xs text-neutral-500">850 Leads</div>
</div>
</div>
<div className="text-sm font-medium text-white">$8.1k</div>
</div>
</div>
</div>
</div>
</template>

<template id="view-admin-affiliates">
<div className="flex justify-between items-center mb-6">
<div className="relative w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" data-lucide="search"></i>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-neutral-300 focus:outline-none focus:border-neutral-700" placeholder="Search affiliates..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-neutral-900 border border-white/10 rounded-lg text-xs text-neutral-300 hover:text-white flex items-center gap-2">
<i className="w-3 h-3" data-lucide="filter"></i> Filter
                </button>
<button className="px-3 py-2 bg-white text-black rounded-lg text-xs font-medium hover:bg-neutral-200">
                    Add Affiliate
                </button>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="text-xs text-neutral-500 border-b border-white/5 bg-white/[0.02]">
<th className="px-6 py-3 font-medium">Affiliate</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Comm. %</th>
<th className="px-6 py-3 font-medium">Balance</th>
<th className="px-6 py-3 font-medium">Total Earned</th>
<th className="px-6 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02] group">
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-neutral-200 font-medium">john_doe</span>
<span className="text-xs text-neutral-600">john@example.com</span>
</div>
</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/10 text-green-400">Active</span></td>
<td className="px-6 py-3 text-neutral-400">20%</td>
<td className="px-6 py-3 text-white font-medium">$450.00</td>
<td className="px-6 py-3 text-neutral-400">$12,450.00</td>
<td className="px-6 py-3 text-right">
<div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white" title="View"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white" title="Edit"><i className="w-4 h-4" data-lucide="edit-2"></i></button>
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-red-400" title="Block"><i className="w-4 h-4" data-lucide="ban"></i></button>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] group">
<td className="px-6 py-3">
<div className="flex flex-col">
<span className="text-neutral-200 font-medium">mark_trading</span>
<span className="text-xs text-neutral-600">mark@trade.io</span>
</div>
</td>
<td className="px-6 py-3"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-500/10 text-yellow-400">Pending</span></td>
<td className="px-6 py-3 text-neutral-400">15%</td>
<td className="px-6 py-3 text-white font-medium">$0.00</td>
<td className="px-6 py-3 text-neutral-400">$0.00</td>
<td className="px-6 py-3 text-right">
<div className="flex justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-white"><i className="w-4 h-4" data-lucide="edit-2"></i></button>
<button className="p-1.5 hover:bg-neutral-800 rounded text-neutral-400 hover:text-red-400"><i className="w-4 h-4" data-lucide="ban"></i></button>
</div>
</td>
</tr>
</tbody>
</table>

<div className="flex items-center justify-between px-6 py-3 border-t border-white/5">
<div className="text-xs text-neutral-500">Showing 1-10 of 124</div>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500 disabled:opacity-50"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="p-1 rounded hover:bg-neutral-800 text-neutral-500"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</template>

<template id="view-admin-payouts">
<div className="flex gap-2 mb-6 border-b border-white/5 pb-1">
<button className="px-4 py-2 text-sm font-medium text-white border-b-2 border-purple-500">Pending Requests</button>
<button className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-300">History</button>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-xl overflow-hidden">
<table className="w-full text-left">
<thead>
<tr className="text-xs text-neutral-500 border-b border-white/5 bg-white/[0.02]">
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Affiliate</th>
<th className="px-6 py-3 font-medium">Wallet</th>
<th className="px-6 py-3 font-medium">Amount</th>
<th className="px-6 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-400">Oct 24, 14:30</td>
<td className="px-6 py-3 text-neutral-200">crypto_fan_99</td>
<td className="px-6 py-3 font-mono text-xs text-neutral-500">0x99...a1b2</td>
<td className="px-6 py-3 text-white font-medium">$1,450.00</td>
<td className="px-6 py-3 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 rounded text-xs font-medium border border-green-500/20">Approve</button>
<button className="px-3 py-1.5 bg-neutral-800 text-neutral-400 hover:text-white rounded text-xs font-medium border border-white/10">Reject</button>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02]">
<td className="px-6 py-3 text-neutral-400">Oct 24, 12:15</td>
<td className="px-6 py-3 text-neutral-200">alpha_trader</td>
<td className="px-6 py-3 font-mono text-xs text-neutral-500">0x3f...11cc</td>
<td className="px-6 py-3 text-white font-medium">$320.00</td>
<td className="px-6 py-3 text-right">
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 bg-green-500/10 text-green-400 hover:bg-green-500/20 rounded text-xs font-medium border border-green-500/20">Approve</button>
<button className="px-3 py-1.5 bg-neutral-800 text-neutral-400 hover:text-white rounded text-xs font-medium border border-white/10">Reject</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</template>

<template id="view-admin-settings">
<div className="max-w-3xl">
<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6 mb-6">
<h3 className="text-sm font-medium text-white mb-6 pb-4 border-b border-white/5">Global Configurations</h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-neutral-200">Default Commission Rate</label>
<p className="text-xs text-neutral-500">The base percentage for new affiliates.</p>
</div>
<div className="flex items-center gap-2">
<input className="w-20 bg-neutral-950 border border-white/10 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-purple-500" type="number" value="20"/>
<span className="text-neutral-400">%</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-neutral-200">Cookie Lifetime</label>
<p className="text-xs text-neutral-500">Days before referral link expires.</p>
</div>
<div className="flex items-center gap-2">
<input className="w-20 bg-neutral-950 border border-white/10 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-purple-500" type="number" value="30"/>
<span className="text-neutral-400">Days</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-neutral-200">Minimum Payout</label>
<p className="text-xs text-neutral-500">Minimum balance required to request withdrawal.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-neutral-400">$</span>
<input className="w-20 bg-neutral-950 border border-white/10 rounded px-2 py-1 text-right text-white focus:outline-none focus:border-purple-500" type="number" value="100"/>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-xl p-6">
<h3 className="text-sm font-medium text-white mb-6 pb-4 border-b border-white/5">System Switches</h3>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-neutral-200">Allow New Registrations</label>
<p className="text-xs text-neutral-500">If disabled, only admins can create affiliates.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<label className="block text-sm font-medium text-neutral-200">Auto-Approve Payouts</label>
<p className="text-xs text-neutral-500">Automatically process payouts under $500.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
</label>
</div>
</div>
</div>
</div>
</template>


    </>
  );
}
