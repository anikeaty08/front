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



        lucide.createIcons();
    
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
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 border-r border-gray-200 bg-white hidden lg:flex lg:flex-col">
<div className="h-16 flex items-center px-6 border-b border-gray-200">
<span className="text-xl font-semibold tracking-tight text-gray-900">DASHBOARD</span>
</div>
<nav className="flex-1 px-3 py-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users"></i>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="shopping-cart"></i>
                    Orders
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="package"></i>
                    Products
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings"></i>
                    Settings
                </a>
</nav>
<div className="p-3 border-t border-gray-200">
<div className="flex items-center gap-3 px-3 py-2">
<img alt="User" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
<p className="text-xs text-gray-500 truncate">john@example.com</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col overflow-hidden">

<header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
<div className="flex items-center gap-4">
<button className="lg:hidden text-gray-600 hover:text-gray-900">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Overview</h1>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-gray-50">
<div className="p-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Total Revenue</span>
<i className="w-4 h-4 text-gray-400" data-lucide="dollar-sign"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">$45,231</div>
<div className="mt-2 flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+20.1%</span>
<span className="text-gray-500">from last month</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Subscriptions</span>
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">+2,350</div>
<div className="mt-2 flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+18.1%</span>
<span className="text-gray-500">from last month</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Sales</span>
<i className="w-4 h-4 text-gray-400" data-lucide="credit-card"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">+12,234</div>
<div className="mt-2 flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+19.0%</span>
<span className="text-gray-500">from last month</span>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-gray-600">Active Now</span>
<i className="w-4 h-4 text-gray-400" data-lucide="activity"></i>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">+573</div>
<div className="mt-2 flex items-center gap-1 text-sm">
<span className="text-green-600 font-medium">+2.5%</span>
<span className="text-gray-500">from last hour</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
<div className="lg:col-span-4 bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-gray-900">Overview</h2>
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">View all</button>
</div>
<div className="h-80 flex items-end justify-between gap-2">
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '45%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '65%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '55%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '75%'}}></div>
<div className="flex-1 bg-gray-900 hover:bg-gray-800 rounded-t transition-colors" style={{height: '85%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '60%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '70%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '50%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '80%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '65%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '55%'}}></div>
<div className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-t transition-colors" style={{height: '60%'}}></div>
</div>
</div>
<div className="lg:col-span-3 bg-white border border-gray-200 rounded-lg p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-semibold text-gray-900">Recent Sales</h2>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Olivia Martin</p>
<p className="text-sm text-gray-500">olivia.martin@email.com</p>
</div>
<div className="text-sm font-medium text-gray-900">+$1,999</div>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Jackson Lee</p>
<p className="text-sm text-gray-500">jackson.lee@email.com</p>
</div>
<div className="text-sm font-medium text-gray-900">+$39</div>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Isabella Nguyen</p>
<p className="text-sm text-gray-500">isabella.nguyen@email.com</p>
</div>
<div className="text-sm font-medium text-gray-900">+$299</div>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">William Kim</p>
<p className="text-sm text-gray-500">will@email.com</p>
</div>
<div className="text-sm font-medium text-gray-900">+$99</div>
</div>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Sofia Davis</p>
<p className="text-sm text-gray-500">sofia.davis@email.com</p>
</div>
<div className="text-sm font-medium text-gray-900">+$39</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg">
<div className="p-6 border-b border-gray-200">
<h2 className="text-base font-semibold text-gray-900">Recent Orders</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead className="border-b border-gray-200">
<tr>
<th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
<th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
<th className="text-left py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
<th className="text-right py-3 px-6 text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 text-sm font-medium text-gray-900">#3210</td>
<td className="py-4 px-6"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Completed</span></td>
<td className="py-4 px-6 text-sm text-gray-600">Liam Johnson</td>
<td className="py-4 px-6 text-sm text-gray-500">2024-01-15</td>
<td className="py-4 px-6 text-sm text-right font-medium text-gray-900">$250.00</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 text-sm font-medium text-gray-900">#3209</td>
<td className="py-4 px-6"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">Processing</span></td>
<td className="py-4 px-6 text-sm text-gray-600">Olivia Smith</td>
<td className="py-4 px-6 text-sm text-gray-500">2024-01-14</td>
<td className="py-4 px-6 text-sm text-right font-medium text-gray-900">$150.00</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 text-sm font-medium text-gray-900">#3208</td>
<td className="py-4 px-6"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Completed</span></td>
<td className="py-4 px-6 text-sm text-gray-600">Noah Williams</td>
<td className="py-4 px-6 text-sm text-gray-500">2024-01-14</td>
<td className="py-4 px-6 text-sm text-right font-medium text-gray-900">$350.00</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-6 text-sm font-medium text-gray-900">#3207</td>
<td className="py-4 px-6"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">Completed</span></td>
<td className="py-4 px-6 text-sm text-gray-600">Emma Brown</td>
<td className="py-4 px-6 text-sm text-gray-500">2024-01-13</td>
<td className="py-4 px-6 text-sm text-right font-medium text-gray-900">$450.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
