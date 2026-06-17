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
      
    document.addEventListener('DOMContentLoaded', function () {
      const tabs = document.querySelectorAll('[data-tab]');
      const views = document.querySelectorAll('[data-view]');
      tabs.forEach(tab => {
        tab.addEventListener('click', function () {
          tabs.forEach(t => t.classList.remove('border-blue-600', 'text-blue-600', 'bg-blue-50'));
          this.classList.add('border-blue-600', 'text-blue-600', 'bg-blue-50');
          const target = this.getAttribute('data-tab');
          views.forEach(view => {
            if (view.getAttribute('data-view') === target) {
              view.classList.remove('hidden');
            } else {
              view.classList.add('hidden');
            }
          });
        });
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
      
<div className="min-h-screen flex flex-col">

<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
<div className="hidden sm:block">
<span className="text-gray-500">Welcome, Jane Doe</span>
</div>
</div>
</header>

<main className="flex-1 flex flex-col sm:flex-row max-w-7xl mx-auto w-full px-4 py-6 gap-6">

<nav className="sm:w-56 sm:mr-8 mb-4 sm:mb-0">

<div className="flex sm:hidden space-x-2 mb-4">
<button className="flex-1 py-2 px-2 rounded-lg text-sm font-medium border-b-2 border-blue-600 text-blue-600 bg-blue-50 focus:outline-none" data-tab="overview">Overview</button>
<button className="flex-1 py-2 px-2 rounded-lg text-sm font-medium border-b-2 border-transparent text-gray-700 focus:outline-none" data-tab="analytics">Analytics</button>
<button className="flex-1 py-2 px-2 rounded-lg text-sm font-medium border-b-2 border-transparent text-gray-700 focus:outline-none" data-tab="reports">Reports</button>
</div>

<div className="hidden sm:flex flex-col gap-1">
<button className="w-full py-2 px-4 rounded-lg text-left text-sm font-medium border-l-4 border-blue-600 text-blue-600 bg-blue-50 focus:outline-none" data-tab="overview">Overview</button>
<button className="w-full py-2 px-4 rounded-lg text-left text-sm font-medium border-l-4 border-transparent text-gray-700 hover:bg-gray-100 focus:outline-none" data-tab="analytics">Analytics</button>
<button className="w-full py-2 px-4 rounded-lg text-left text-sm font-medium border-l-4 border-transparent text-gray-700 hover:bg-gray-100 focus:outline-none" data-tab="reports">Reports</button>
</div>
</nav>

<section className="flex-1">

<div className="" data-view="overview">
<h2 className="text-xl font-semibold text-gray-800 mb-6">Overview</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
<span className="text-gray-500 text-sm">Total Users</span>
<span className="text-2xl font-bold text-blue-600">8,245</span>
<span className="text-green-600 text-sm font-medium">+3.1% this month</span>
</div>
<div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
<span className="text-gray-500 text-sm">Revenue</span>
<span className="text-2xl font-bold text-blue-600">$52,400</span>
<span className="text-green-600 text-sm font-medium">+1.8% this month</span>
</div>
<div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
<span className="text-gray-500 text-sm">Active Projects</span>
<span className="text-2xl font-bold text-blue-600">21</span>
<span className="text-gray-400 text-sm font-medium">No change</span>
</div>
</div>
<div className="bg-white rounded-xl shadow p-6 mt-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
<a className="text-blue-600 text-sm font-medium hover:underline" href="#">View all</a>
</div>
<ul className="divide-y divide-gray-100">
<li className="py-3 flex items-center justify-between">
<span className="text-gray-700">User <b>Sarah</b> joined</span>
<span className="text-xs text-gray-400">2 hours ago</span>
</li>
<li className="py-3 flex items-center justify-between">
<span className="text-gray-700">Project <b>Redesign</b> launched</span>
<span className="text-xs text-gray-400">1 day ago</span>
</li>
<li className="py-3 flex items-center justify-between">
<span className="text-gray-700">Revenue report exported</span>
<span className="text-xs text-gray-400">2 days ago</span>
</li>
</ul>
</div>
</div>

<div className="hidden" data-view="analytics">
<h2 className="text-xl font-semibold text-gray-800 mb-6">Analytics</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white rounded-xl shadow p-6">
<h3 className="text-md font-semibold text-gray-700 mb-2">User Growth</h3>

<div className="w-full h-40 flex items-end space-x-1">
<div className="flex-1 bg-blue-100 rounded-t-lg" style={{height: '45%'}}></div>
<div className="flex-1 bg-blue-300 rounded-t-lg" style={{height: '60%'}}></div>
<div className="flex-1 bg-blue-400 rounded-t-lg" style={{height: '80%'}}></div>
<div className="flex-1 bg-blue-200 rounded-t-lg" style={{height: '55%'}}></div>
<div className="flex-1 bg-blue-500 rounded-t-lg" style={{height: '95%'}}></div>
</div>
<div className="flex justify-between text-xs text-gray-400 mt-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span>
</div>
</div>
<div className="bg-white rounded-xl shadow p-6">
<h3 className="text-md font-semibold text-gray-700 mb-2">Traffic Sources</h3>

<div className="flex items-center justify-center h-40">
<svg className="mr-4" height="110" viewbox="0 0 42 42" width="110">
<circle cx="21" cy="21" fill="#F1F5F9" r="15.9155"></circle>
<circle cx="21" cy="21" fill="transparent" r="15.9155" stroke="#2563eb" stroke-dasharray="40 60" stroke-dashoffset="0" strokeWidth="6"></circle>
<circle cx="21" cy="21" fill="transparent" r="15.9155" stroke="#38bdf8" stroke-dasharray="30 70" stroke-dashoffset="-40" strokeWidth="6"></circle>
<circle cx="21" cy="21" fill="transparent" r="15.9155" stroke="#22c55e" stroke-dasharray="20 80" stroke-dashoffset="-70" strokeWidth="6"></circle>
<circle cx="21" cy="21" fill="transparent" r="15.9155" stroke="#f59e42" stroke-dasharray="10 90" stroke-dashoffset="-90" strokeWidth="6"></circle>
</svg>
<div>
<div className="flex items-center mb-1">
<span className="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
<span className="text-xs text-gray-700">Organic: 40%</span>
</div>
<div className="flex items-center mb-1">
<span className="w-3 h-3 rounded-full bg-sky-400 mr-2"></span>
<span className="text-xs text-gray-700">Referral: 30%</span>
</div>
<div className="flex items-center mb-1">
<span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
<span className="text-xs text-gray-700">Social: 20%</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-orange-400 mr-2"></span>
<span className="text-xs text-gray-700">Paid: 10%</span>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow p-6 mt-6">
<h3 className="text-md font-semibold text-gray-700 mb-2">Sessions by Device</h3>
<div className="flex flex-col md:flex-row md:items-end gap-6">
<div className="flex items-center">
<svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="12" rx="2" ry="2" width="18" x="3" y="6"></rect>
<path d="M7 20h10"></path>
</svg>
<span className="text-gray-700 text-sm">Desktop: <b>54%</b></span>
</div>
<div className="flex items-center">
<svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="20" rx="2" ry="2" width="10" x="7" y="2"></rect>
<path d="M11 18h2"></path>
</svg>
<span className="text-gray-700 text-sm">Mobile: <b>36%</b></span>
</div>
<div className="flex items-center">
<svg className="w-6 h-6 text-sky-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="8" rx="2" ry="2" width="16" x="4" y="8"></rect>
</svg>
<span className="text-gray-700 text-sm">Tablet: <b>10%</b></span>
</div>
</div>
</div>
</div>

<div className="hidden" data-view="reports">
<h2 className="text-xl font-semibold text-gray-800 mb-6">Reports</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white rounded-xl shadow p-6 flex flex-col">
<h3 className="text-md font-semibold text-gray-700 mb-2">Monthly Report</h3>
<p className="text-gray-500 text-sm mb-4">A summary of your platform's performance in the last month.</p>
<table className="w-full text-left text-sm">
<thead>
<tr>
<th className="px-3 py-2 text-gray-500 font-medium">Metric</th>
<th className="px-3 py-2 text-gray-500 font-medium">Value</th>
</tr>
</thead>
<tbody>
<tr className="border-t">
<td className="px-3 py-2">Users</td>
<td className="px-3 py-2 font-semibold text-blue-600">2,134</td>
</tr>
<tr className="border-t">
<td className="px-3 py-2">Sessions</td>
<td className="px-3 py-2 font-semibold text-blue-600">12,401</td>
</tr>
<tr className="border-t">
<td className="px-3 py-2">Revenue</td>
<td className="px-3 py-2 font-semibold text-blue-600">$8,200</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-white rounded-xl shadow p-6 flex flex-col">
<h3 className="text-md font-semibold text-gray-700 mb-2">Export Reports</h3>
<p className="text-gray-500 text-sm mb-4">Download detailed reports for further analysis.</p>
<div className="flex flex-col space-y-3">
<button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">Download PDF</button>
<button className="w-full py-2 px-4 bg-sky-400 text-white rounded-lg font-medium hover:bg-sky-500 transition">Download CSV</button>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
