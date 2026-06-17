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



        // --- Modal Logic ---
        function toggleModal(modalID, show) {
            const modal = document.getElementById(modalID);
            if (show) {
                modal.classList.remove('hidden');
                // Simple animation hook
                const panel = modal.querySelector('.transform');
                panel.classList.remove('scale-95', 'opacity-0');
                panel.classList.add('scale-100', 'opacity-100');
            } else {
                modal.classList.add('hidden');
            }
        }

        // --- Drawer Logic ---
        const drawerWrapper = document.getElementById('subscriptionDrawerWrapper');
        const drawerBackdrop = document.getElementById('drawerBackdrop');
        const drawerContent = document.getElementById('drawerContent');

        function openDrawer(data) {
            // Populate Data
            document.getElementById('drawerTitle').textContent = data.name || 'Subscription';
            document.getElementById('drawerPrice').textContent = data.price || '$0.00';
            
            // Icon Logic
            const iconContainer = document.getElementById('drawerIconContainer');
            iconContainer.innerHTML = `<span class="iconify ${data.iconClass || ''}" data-icon="${data.icon || 'lucide:box'}" data-width="24"></span>`;
            
            // Status Logic
            const statusBadge = document.getElementById('drawerStatus');
            statusBadge.textContent = data.status || 'Active';
            // Reset classes
            statusBadge.className = 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border';
            
            if(data.status === 'Active') statusBadge.classList.add('bg-green-50', 'text-green-700', 'border-green-200');
            else if(data.status === 'Trial') statusBadge.classList.add('bg-orange-50', 'text-orange-700', 'border-orange-200');
            else if(data.status === 'Failed') statusBadge.classList.add('bg-red-50', 'text-red-700', 'border-red-200');
            else statusBadge.classList.add('bg-gray-100', 'text-gray-600', 'border-gray-200');


            // Show Drawer
            drawerWrapper.classList.remove('hidden');
            
            // Animation Timeout
            setTimeout(() => {
                drawerBackdrop.classList.remove('opacity-0');
                drawerContent.classList.remove('translate-x-full');
            }, 10);
        }

        function closeDrawer() {
            drawerBackdrop.classList.add('opacity-0');
            drawerContent.classList.add('translate-x-full');
            
            setTimeout(() => {
                drawerWrapper.classList.add('hidden');
            }, 300); // Match transition duration
        }

        // --- Table Interaction ---
        // Checkbox logic
        const mainCheckbox = document.querySelector('thead input[type="checkbox"]');
        const rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        
        if(mainCheckbox) {
            mainCheckbox.addEventListener('change', (e) => {
                e.stopPropagation(); // Stop bubbling
                rowCheckboxes.forEach(cb => {
                    cb.checked = e.target.checked;
                    const row = cb.closest('tr');
                    if(e.target.checked) row.classList.add('bg-gray-50');
                    else row.classList.remove('bg-gray-50');
                });
            });
        }
    
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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-xs font-medium tracking-tight">V</span>
</div>
<span className="font-semibold tracking-tight text-sm">Vault.</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-900" data-height="18" data-icon="lucide:layout-grid" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-900" data-height="18" data-icon="lucide:arrow-right-left" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Transactions
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-gray-100 text-gray-900 rounded-md group transition-colors" href="#">
<span className="iconify text-gray-900" data-height="18" data-icon="lucide:zap" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Subscriptions
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-900" data-height="18" data-icon="lucide:credit-card" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Cards
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-50 hover:text-gray-900 group transition-colors" href="#">
<span className="iconify text-gray-400 group-hover:text-gray-900" data-height="18" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Team
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full px-2 py-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Settings
            </button>
<div className="mt-4 flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">JS</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">John Snow</span>
<span className="text-[10px] text-gray-500">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<nav className="flex text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Finance</span>
<span className="mx-2 text-gray-300">/</span>
<span className="font-medium text-gray-900">Subscriptions</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center w-8 h-8 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 border border-transparent hover:border-gray-200 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-md hover:bg-gray-800 shadow-sm shadow-gray-300/50 transition-all hover:scale-[1.02] active:scale-[0.98]" onclick="toggleModal('addSubscriptionModal', true)">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    Add Subscription
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Manage your recurring expenses and billing cycles.</p>
</div>
<div className="flex items-center bg-white border border-gray-200 rounded-md shadow-sm h-9">
<button className="px-3 h-full border-r border-gray-100 hover:bg-gray-50 text-xs font-medium text-gray-600 transition-colors">Monthly</button>
<button className="px-3 h-full hover:bg-gray-50 text-xs font-medium text-gray-400 transition-colors">Yearly</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg text-gray-500 group-hover:text-black group-hover:bg-gray-100 transition-colors">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12.5%</span>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">$12,450</div>
<div className="text-xs text-gray-500 mt-1">Total Monthly Cost</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg text-gray-500 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
<span className="iconify" data-icon="lucide:layers" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">24</div>
<div className="text-xs text-gray-500 mt-1">Active Subscriptions</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg text-gray-500 group-hover:text-orange-600 group-hover:bg-orange-50 transition-colors">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs font-medium text-gray-500">Next 7 days</span>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">5</div>
<div className="text-xs text-gray-500 mt-1">Upcoming Renewals</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-gray-50 rounded-lg text-gray-500 group-hover:text-red-600 group-hover:bg-red-50 transition-colors">
<span className="iconify" data-icon="lucide:alert-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="text-2xl font-medium tracking-tight text-gray-900">1</div>
<div className="text-xs text-gray-500 mt-1">Payment Failed</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
<div className="relative w-full sm:w-80 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-gray-400 group-focus-within:text-gray-600" data-icon="lucide:search" data-width="16"></span>
</div>
<input className="block w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200 focus:border-gray-300 text-sm transition-all" placeholder="Search subscriptions..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                                Filter
                            </button>
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                                Export
                            </button>
</div>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100">
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4" onclick="event.stopPropagation()" type="checkbox"/>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Billing</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Next Payment</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">

<tr className="group hover:bg-gray-50/80 cursor-pointer transition-colors" onclick="openDrawer({name: 'Vercel Pro', price: '$20.00', icon: 'logos:vercel-icon', status: 'Active'})">
<td className="px-6 py-4 whitespace-nowrap" onclick="event.stopPropagation()">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-9 w-9 bg-white border border-gray-100 rounded-lg flex items-center justify-center p-1 shadow-sm">
<span className="iconify" data-icon="logos:vercel-icon" data-width="20"></span>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900">Vercel Pro</div>
<div className="text-xs text-gray-500">Development</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">Monthly</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium text-gray-900">$20.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            Active
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Oct 24, 2023
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onclick="event.stopPropagation()">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded-md hover:bg-gray-200/50 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 cursor-pointer transition-colors" onclick="openDrawer({name: 'Discord Nitro', price: '$99.99', icon: 'cib:discord', iconClass:'text-[#5865F2]', status: 'Active'})">
<td className="px-6 py-4 whitespace-nowrap" onclick="event.stopPropagation()">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-9 w-9 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-lg flex items-center justify-center p-1 shadow-sm">
<span className="iconify text-[#5865F2]" data-icon="cib:discord" data-width="20"></span>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900">Discord Nitro</div>
<div className="text-xs text-gray-500">Communication</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">Yearly</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium text-gray-900">$99.99</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            Active
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        Dec 12, 2023
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onclick="event.stopPropagation()">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded-md hover:bg-gray-200/50 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 cursor-pointer transition-colors" onclick="openDrawer({name: 'Notion Team', price: '$48.00', icon: 'simple-icons:notion', iconClass: 'text-white bg-black rounded p-0.5', status: 'Trial'})">
<td className="px-6 py-4 whitespace-nowrap" onclick="event.stopPropagation()">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-9 w-9 bg-black border border-gray-800 rounded-lg flex items-center justify-center p-1 shadow-sm">
<span className="iconify text-white" data-icon="simple-icons:notion" data-width="18"></span>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900">Notion Team</div>
<div className="text-xs text-gray-500">Productivity</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">Monthly</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium text-gray-900">$48.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                            Trial
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
<span className="text-orange-600 font-medium">2 days left</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onclick="event.stopPropagation()">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded-md hover:bg-gray-200/50 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 cursor-pointer transition-colors" onclick="openDrawer({name: 'Linear', price: '$350.00', icon: 'simple-icons:linear', iconClass:'text-[#FF61F6]', status: 'Failed'})">
<td className="px-6 py-4 whitespace-nowrap" onclick="event.stopPropagation()">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<div className="flex-shrink-0 h-9 w-9 bg-[#FF61F6]/10 border border-[#FF61F6]/20 rounded-lg flex items-center justify-center p-1 shadow-sm">
<span className="iconify text-[#FF61F6]" data-icon="simple-icons:linear" data-width="20"></span>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900">Linear</div>
<div className="text-xs text-gray-500">Management</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">Monthly</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm font-medium text-gray-900">$350.00</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200/60">
<span className="iconify" data-icon="lucide:alert-circle" data-width="12"></span>
                                            Failed
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
<span className="text-red-600 font-medium">Retry now</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" onclick="event.stopPropagation()">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded-md hover:bg-gray-200/50 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 cursor-pointer transition-colors bg-gray-50/30" onclick="openDrawer({name: 'Adobe Creative', price: '$54.99', icon: 'logos:adobe-icon', status: 'Canceled'})">
<td className="px-6 py-4 whitespace-nowrap" onclick="event.stopPropagation()">
<input className="rounded border-gray-300 text-black focus:ring-0 focus:ring-offset-0 cursor-pointer w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
</td>
<td className="px-6 py-4 whitespace-nowrap opacity-50">
<div className="flex items-center">
<div className="flex-shrink-0 h-9 w-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center p-1 grayscale">
<span className="iconify" data-icon="logos:adobe-icon" data-width="20"></span>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-gray-900 line-through decoration-gray-400">Adobe Creative</div>
<div className="text-xs text-gray-500">Design</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap opacity-50">
<span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md border border-gray-200">Monthly</span>
</td>
<td className="px-6 py-4 whitespace-nowrap opacity-50">
<div className="text-sm font-medium text-gray-900">$54.99</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                            Canceled
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 opacity-50">
                                        -
                                    </td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium opacity-50" onclick="event.stopPropagation()">
<button className="text-gray-400 hover:text-gray-900 p-1 rounded-md hover:bg-gray-200/50 transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="18"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-100 sm:px-6">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-xs text-gray-500">
                                    Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">5</span> of <span className="font-medium text-gray-900">24</span> results
                                </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
<span className="sr-only">Previous</span>
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-gray-50 text-xs font-medium text-gray-700 hover:bg-gray-50" href="#">1</a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50" href="#">2</a>
<a className="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50" href="#">3</a>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-200 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50" href="#">
<span className="sr-only">Next</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
</nav>
</div>
</div>
</div>
</div>

<div className="flex justify-center pt-8 pb-12">
<p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">End of list</p>
</div>
</div>
</div>

<div className="md:hidden absolute bottom-6 right-6 z-20">
<button className="w-14 h-14 bg-black text-white rounded-full shadow-lg shadow-black/20 flex items-center justify-center" onclick="toggleModal('addSubscriptionModal', true)">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto" id="addSubscriptionModal" role="dialog">
<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

<div aria-hidden="true" className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onclick="toggleModal('addSubscriptionModal', false)"></div>

<span aria-hidden="true" className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
<div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full border border-gray-100">
<div className="bg-white px-6 pt-5 pb-4 sm:p-6 sm:pb-4">
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg leading-6 font-medium text-gray-900 tracking-tight" id="modal-title">New Subscription</h3>
<button className="text-gray-400 hover:text-gray-500" onclick="toggleModal('addSubscriptionModal', false)">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="service-name">Service Name</label>
<input className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 bg-gray-50" id="service-name" name="service-name" placeholder="e.g. Netflix, Spotify" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="price">Amount</label>
<div className="relative rounded-md shadow-sm">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 sm:text-sm">$</span>
</div>
<input className="focus:ring-black focus:border-black block w-full pl-7 sm:text-sm border-gray-300 rounded-md px-3 py-2 bg-gray-50" id="price" name="price" placeholder="0.00" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="cycle">Billing Cycle</label>
<select className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 bg-gray-50" id="cycle" name="cycle">
<option>Monthly</option>
<option>Yearly</option>
<option>Quarterly</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="category">Category</label>
<select className="focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 bg-gray-50" id="category" name="category">
<option>Development</option>
<option>Design</option>
<option>Productivity</option>
<option>Entertainment</option>
<option>Utility</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="start-date">First Payment</label>
<input className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 bg-gray-50" id="start-date" name="start-date" type="date"/>
</div>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 flex flex-row-reverse gap-3 border-t border-gray-100">
<button className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-sm font-medium text-white hover:bg-gray-800 focus:outline-none sm:w-auto sm:text-sm transition-colors" onclick="toggleModal('addSubscriptionModal', false)" type="button">
                        Add Subscription
                    </button>
<button className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm transition-colors" onclick="toggleModal('addSubscriptionModal', false)" type="button">
                        Cancel
                    </button>
</div>
</div>
</div>
</div>

<div aria-labelledby="slide-over-title" aria-modal="true" className="hidden relative z-50" id="subscriptionDrawerWrapper" role="dialog">

<div className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity opacity-0" id="drawerBackdrop" onclick="closeDrawer()"></div>
<div className="fixed inset-0 overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
<div className="pointer-events-auto w-screen max-w-md transform translate-x-full transition-transform duration-300 sm:duration-400" id="drawerContent">
<div className="flex h-full flex-col bg-white shadow-2xl border-l border-gray-100">

<div className="px-6 py-6 border-b border-gray-100 bg-gray-50/50 flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="h-12 w-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center p-2 shadow-sm" id="drawerIconContainer">

</div>
<div>
<h2 className="text-lg font-medium text-gray-900 tracking-tight" id="drawerTitle">Service Name</h2>
<div className="mt-1 flex items-center gap-2">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800" id="drawerStatus">
                                                Active
                                            </span>
<span className="text-xs text-gray-500">• Monthly</span>
</div>
</div>
</div>
<button className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onclick="closeDrawer()" type="button">
<span className="sr-only">Close panel</span>
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</button>
</div>

<div className="relative flex-1 overflow-y-auto px-6 py-6">
<div className="mb-8">
<div className="text-3xl font-semibold text-gray-900 tracking-tight" id="drawerPrice">$0.00</div>
<div className="text-sm text-gray-500 mt-1">per month</div>
</div>
<div className="space-y-6">
<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Details</h3>
<dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<dt className="text-sm font-medium text-gray-500">Next Payment</dt>
<dd className="mt-1 text-sm text-gray-900">Oct 24, 2023</dd>
</div>
<div className="sm:col-span-1">
<dt className="text-sm font-medium text-gray-500">Payment Method</dt>
<dd className="mt-1 text-sm text-gray-900 flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:credit-card" data-width="14"></span>
                                                    Visa •••• 4242
                                                </dd>
</div>
<div className="sm:col-span-2">
<dt className="text-sm font-medium text-gray-500">Category</dt>
<dd className="mt-1 text-sm text-gray-900">Software Service</dd>
</div>
<div className="sm:col-span-2">
<dt className="text-sm font-medium text-gray-500">Description</dt>
<dd className="mt-1 text-sm text-gray-900">Standard team subscription plan.</dd>
</div>
</dl>
</div>
<div className="border-t border-gray-100 pt-6">
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Payment History</h3>
<ul className="space-y-3" role="list">
<li className="flex items-center justify-between">
<div className="text-sm text-gray-600">Sep 24, 2023</div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                                    $20.00 
                                                    <span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
</li>
<li className="flex items-center justify-between">
<div className="text-sm text-gray-600">Aug 24, 2023</div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                                    $20.00 
                                                    <span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
</li>
<li className="flex items-center justify-between">
<div className="text-sm text-gray-600">Jul 24, 2023</div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                                    $20.00 
                                                    <span className="iconify text-green-500" data-icon="lucide:check-circle-2" data-width="14"></span>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none transition-colors">
                                        Edit
                                    </button>
<button className="flex items-center justify-center gap-2 w-full px-4 py-2 border border-red-200 shadow-sm text-sm font-medium rounded-md text-red-600 bg-white hover:bg-red-50 focus:outline-none transition-colors">
                                        Cancel Plan
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
