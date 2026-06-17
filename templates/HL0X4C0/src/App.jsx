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
      

<div className="flex min-h-screen">
<aside className="w-64 bg-white shadow-lg flex flex-col">
<div className="px-6 py-6 flex items-center gap-2 border-b">
<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 3l8 5v7a8 8 0 01-16 0V8l8-5z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="font-bold text-xl text-gray-800">InsurePro</span>
</div>
<nav className="flex-1 px-4 py-6">
<ul className="space-y-2">
<li>
<a className="flex items-center px-3 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold" href="#">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Dashboard
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 17v-2a4 4 0 014-4h3m-7 6v2a4 4 0 004 4h3m-7-6V7a4 4 0 014-4h3m-7 6h3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Policies
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Claims
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m7-2.13V5a2 2 0 10-4 0v7a2 2 0 004 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Customers
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M11 12h2m-1-1v2m11 0A11 11 0 112 12a11 11 0 0122 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
              Reports
            </a>
</li>
</ul>
</nav>
<div className="px-6 py-4 border-t">
<button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 w-full">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 16l4-4m0 0l-4-4m4 4H7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
          Logout
        </button>
</div>
</aside>

<main className="flex-1 px-8 py-6">

<div className="flex items-center justify-between mb-6">
<div>
<h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
<p className="text-gray-400 text-sm">Welcome back, John Doe.</p>
</div>
<div className="flex items-center gap-4">
<input className="px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white" placeholder="Search..." type="text"/>
<button className="relative">
<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">2</span>
</button>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-blue-500" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
<div className="bg-blue-100 p-3 rounded-full">
<svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M7 17a4 4 0 008 0V5a4 4 0 10-8 0v12z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="text-gray-500 text-xs">Active Policies</div>
<div className="text-2xl font-bold text-gray-800">1,200</div>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
<div className="bg-green-100 p-3 rounded-full">
<svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="text-gray-500 text-xs">Claims Today</div>
<div className="text-2xl font-bold text-gray-800">23</div>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
<div className="bg-yellow-100 p-3 rounded-full">
<svg className="w-7 h-7 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-2a4 4 0 00-4-4h-3V7a4 4 0 00-8 0v2H7a4 4 0 00-4 4v2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="text-gray-500 text-xs">Pending Claims</div>
<div className="text-2xl font-bold text-gray-800">57</div>
</div>
</div>
<div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
<div className="bg-purple-100 p-3 rounded-full">
<svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<div className="text-gray-500 text-xs">Total Customers</div>
<div className="text-2xl font-bold text-gray-800">3,845</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow p-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-bold text-gray-800">Recent Policies</h2>
<a className="text-blue-600 hover:underline text-sm font-medium" href="#">View all</a>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-left">
<thead>
<tr>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Policy #</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Customer</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Type</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Status</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Start Date</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Premium</th>
<th className="py-2 px-3 text-xs text-gray-500 font-semibold">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-2 px-3 font-medium">P123456</td>
<td className="py-2 px-3">Alice Smith</td>
<td className="py-2 px-3">Auto</td>
<td className="py-2 px-3">
<span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Active</span>
</td>
<td className="py-2 px-3">2024-04-01</td>
<td className="py-2 px-3">$150</td>
<td className="py-2 px-3">
<button className="text-blue-500 hover:underline text-xs">View</button>
</td>
</tr>
<tr className="border-b">
<td className="py-2 px-3 font-medium">P123457</td>
<td className="py-2 px-3">Bob Lee</td>
<td className="py-2 px-3">Home</td>
<td className="py-2 px-3">
<span className="inline-block px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">Pending</span>
</td>
<td className="py-2 px-3">2024-03-28</td>
<td className="py-2 px-3">$320</td>
<td className="py-2 px-3">
<button className="text-blue-500 hover:underline text-xs">View</button>
</td>
</tr>
<tr className="border-b">
<td className="py-2 px-3 font-medium">P123458</td>
<td className="py-2 px-3">Carla Gomez</td>
<td className="py-2 px-3">Life</td>
<td className="py-2 px-3">
<span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-700 rounded">Expired</span>
</td>
<td className="py-2 px-3">2023-12-10</td>
<td className="py-2 px-3">$210</td>
<td className="py-2 px-3">
<button className="text-blue-500 hover:underline text-xs">View</button>
</td>
</tr>
<tr>
<td className="py-2 px-3 font-medium">P123459</td>
<td className="py-2 px-3">David Kim</td>
<td className="py-2 px-3">Health</td>
<td className="py-2 px-3">
<span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Active</span>
</td>
<td className="py-2 px-3">2024-05-09</td>
<td className="py-2 px-3">$180</td>
<td className="py-2 px-3">
<button className="text-blue-500 hover:underline text-xs">View</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

    </>
  );
}
