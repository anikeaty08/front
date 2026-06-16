import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Category dropdown
    const btn = document.getElementById('categoryBtn');
    const menu = document.getElementById('categoryMenu');
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!btn.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed inset-y-0 left-0 w-64 bg-black text-white flex flex-col">
<div className="flex h-16 gap-3 border-white/10 border-b pr-6 pl-6 items-center">
<div className="h-6 w-6 bg-orange-600 rounded flex items-center justify-center">
<svg className="lucide lucide-shield text-white w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="font-semibold">Rights Manager</span>
<button className="ml-auto">
<svg className="lucide lucide-x w-[16px] h-[16px]" data-lucide="x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
<nav className="flex-1 overflow-y-auto px-6 py-4 space-y-6 text-sm">
<div className="">
<p className="uppercase tracking-wide text-gray-400 mb-2">Main Features</p>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard
            </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-3 py-2 rounded bg-white/10 text-white" href="#">
<svg className="lucide lucide-folder w-4 h-4" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> Content Management
            </a>
</li>
</ul>
</div>
<div className="">
<p className="uppercase tracking-wide text-gray-400 mb-2">Rights Management</p>
<ul className="space-y-1">
<li><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Rights Holders</a></li>
<li><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Contracts</a></li>
<li className=""><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-file-signature w-4 h-4" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>Applications</a></li>
</ul>
</div>
<div className="">
<p className="uppercase tracking-wide text-gray-400 mb-2">Distribution</p>
<ul className="space-y-1">
<li className=""><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Distribution Projects</a></li>
<li className=""><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>Revenue Reports</a></li>
<li className=""><a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#"><svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>Payments</a></li>
</ul>
</div>
<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">System Integration</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#">
<svg className="lucide lucide-plug w-4 h-4" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>4tune Integration
              <svg className="lucide lucide-chevron-down w-3 h-3 ml-auto opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#">
<svg className="lucide lucide-plug-2 w-4 h-4" data-lucide="plug-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 2v6"></path><path d="M15 2v6"></path><path d="M12 17v5"></path><path d="M5 8h14"></path><path d="M6 11V8h12v3a6 6 0 1 1-12 0Z"></path></svg>AXROSS Integration
              <svg className="lucide lucide-chevron-down w-3 h-3 ml-auto opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</li>
</ul>
</div>
</nav>
<div className="px-6 py-4 space-y-3 border-t border-white/10">
<a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href="#">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Settings
      </a>
<a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href="#">
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>Help
      </a>
<div className="flex items-center justify-between pt-3">
<span className="text-sm">Admin Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-600 peer-checked:bg-orange-500 rounded-full peer-focus:ring-2 peer-focus:ring-orange-500 transition-all"></div>
<span className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-4"></span>
</label>
</div>
<div className="flex items-center gap-3 pt-4">
<div className="w-9 h-9 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-semibold text-xs">AD</div>
<div className="text-sm">
<p className="font-medium">Admin User</p>
<p className="text-gray-400 text-xs">admin@nippontv.co.jp</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 ml-auto text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="text-xs text-gray-500 pt-4">© 2024 Nippon Television</p>
</div>
</aside>

<main className="lg:p-10 ml-64 pt-6 pr-6 pb-6 pl-6">
<div className="bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<header className="mb-8">
<h1 className="text-2xl font-semibold mb-1 tracking-tight">Content Management</h1>
<p className="text-sm text-gray-500">Manage your content library and rights</p>
</header>

<section className="space-y-6">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="col-span-2 lg:col-span-4">
<p className="text-sm text-gray-500">Content Overview</p>
<h2 className="text-3xl font-semibold tracking-tight">
              1,247 Total Items
            </h2>
<p className="text-sm text-gray-500 mt-1">
              987 Active • 156 Pending • 104 Expired
            </p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Total Content</div>
<span className="text-xs text-gray-400">All time</span>
</div>
<p className="text-2xl font-semibold">1,247</p>
<p className="text-xs flex items-center gap-1 text-green-600 mt-1">
              15.8% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 1,081 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Active Content</div>
<span className="text-xs text-gray-400">Last 30 days</span>
</div>
<p className="text-2xl font-semibold">987</p>
<p className="text-xs flex items-center gap-1 text-green-600 mt-1">
              8.2% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 912 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Pending</div>
<span className="text-xs text-gray-400">Last 30 days</span>
</div>
<p className="text-2xl font-semibold">156</p>
<p className="text-xs flex items-center gap-1 text-orange-600 mt-1">
              12.5% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 139 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> Expired</div>
<span className="text-xs text-gray-400">Last 30 days</span>
</div>
<p className="text-2xl font-semibold">104</p>
<p className="text-xs flex items-center gap-1 text-red-600 mt-1">
              5.2% <svg className="lucide lucide-arrow-down-right w-3 h-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 110 Last Period</p>
</div>
</div>

<div className="border border-gray-200 rounded-2xl">

<div className="flex flex-col sm:flex-row sm:items-center gap-3 border-gray-200 border-b pt-5 pr-5 pb-5 pl-5">
<div className="relative flex-1">
<input className="w-full pl-10 pr-4 h-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none placeholder-gray-400 text-sm" placeholder="Search content…" type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border px-1.5 py-0.5 rounded">⌘+F</span>
</div>

<div className="relative">
<button className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50" id="categoryBtn">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg><span>All Categories</span><svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10" id="categoryMenu">
<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">All</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Drama</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Anime</button>
<button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">Documentary</button>
</div>
</div>
<button className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Export
            </button>
<button className="flex items-center gap-2 h-10 px-4 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
<svg className="lucide lucide-upload w-4 h-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>Import
            </button>
<button className="flex gap-2 h-10 hover:bg-red-700 text-sm text-white bg-red-600 rounded-lg pr-4 pl-4 items-center" onclick="
  const tableBody = document.querySelector('table tbody');
  if (!tableBody) return;
  const newRow = document.createElement('tr');
  newRow.className = 'hover:bg-gray-50';
  newRow.innerHTML = `
    &lt;td className='px-6 py-4 flex items-center gap-3'&gt;
      &lt;span className='w-6 h-6 flex items-center justify-center rounded bg-gray-200 text-gray-600'&gt;
        &lt;svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' data-lucide='file-text' className='lucide lucide-file-text w-4 h-4' style={{strokeWidth: '1.5'}}&gt;&lt;path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'&gt;&lt;/path&gt;&lt;path d='M14 2v6h6'&gt;&lt;/path&gt;&lt;path d='M16 13H8'&gt;&lt;/path&gt;&lt;path d='M16 17H8'&gt;&lt;/path&gt;&lt;path d='M10 9H8'&gt;&lt;/path&gt;&lt;/svg&gt;
      &lt;/span&gt;
      &lt;div&gt;
        &lt;p className='font-medium'&gt;New Content&lt;/p&gt;
        &lt;p className='text-xs text-gray-500'&gt;ID: NEW-000&lt;/p&gt;
      &lt;/div&gt;
    &lt;/td&gt;
    &lt;td className='px-6 py-4'&gt;
      &lt;span className='px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs'&gt;Uncategorized&lt;/span&gt;
    &lt;/td&gt;
    &lt;td className='px-6 py-4'&gt;
      &lt;span className='px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs'&gt;Status&lt;/span&gt;
    &lt;/td&gt;
    &lt;td className='px-6 py-4'&gt;Region&lt;/td&gt;
    &lt;td className='px-6 py-4'&gt;YYYY-MM-DD&lt;/td&gt;
    &lt;td className='px-6 py-4 flex gap-4'&gt;
      &lt;button className='text-indigo-600 hover:underline'&gt;Edit&lt;/button&gt;
      &lt;button className='text-red-600 hover:underline'&gt;Delete&lt;/button&gt;
    &lt;/td&gt;
  `;
  tableBody.appendChild(newRow);
  lucide.createIcons(newRow);
" type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Add Content
</button>
</div>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr className="text-left">
<th className="px-6 py-3 font-medium text-gray-500">Content</th>
<th className="px-6 py-3 font-medium text-gray-500">Category</th>
<th className="px-6 py-3 font-medium text-gray-500">Status</th>
<th className="px-6 py-3 font-medium text-gray-500">Rights</th>
<th className="px-6 py-3 font-medium text-gray-500">Expiry</th>
<th className="px-6 py-3 font-medium text-gray-500">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200">

<tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-violet-100 text-violet-600">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</span>
<div>
<p className="font-medium">Tokyo Love Story 2024</p>
<p className="text-xs text-gray-500">ID: TLS-2024-001</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-violet-100 text-violet-600 text-xs">Drama</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-xs">Active</span>
</td>
<td className="px-6 py-4">Global</td>
<td className="px-6 py-4">2025-12-31</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="hover:underline text-red-600" onclick="if(confirm('Are you sure you want to delete this row?')) { const row = this.closest('tr'); if(row) row.remove(); }" type="button">Delete</button>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-blue-100 text-blue-600">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</span>
<div>
<p className="font-medium">Detective Conan: New Case</p>
<p className="text-xs text-gray-500">ID: DCN-2024-089</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-xs">Anime</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600 text-xs">Pending</span>
</td>
<td className="px-6 py-4">Asia</td>
<td className="px-6 py-4">2024-08-15</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="text-red-600 hover:underline">Delete</button>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-blue-100 text-blue-600">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</span>
<div>
<p className="font-medium">Detective Conan: New Case</p>
<p className="text-xs text-gray-500">ID: DCN-2024-089</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-600 text-xs">Anime</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-600 text-xs">Pending</span>
</td>
<td className="px-6 py-4">Asia</td>
<td className="px-6 py-4">2024-08-15</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="text-red-600 hover:underline">Delete</button>
</td>
</tr>

<tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-green-100 text-green-600">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</span>
<div className="">
<p className="font-medium">Japan Wildlife Documentary</p>
<p className="text-xs text-gray-500">ID: JWD-2024-003</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-600 text-xs">Documentary</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs">Expired</span>
</td>
<td className="px-6 py-4">Japan Only</td>
<td className="px-6 py-4">2024-01-31</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="text-red-600 hover:underline">Delete</button>
</td>
</tr>
<tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 text-gray-600">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<div>
<p className="font-medium">New Content</p>
<p className="text-xs text-gray-500">ID: NEW-000</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">Uncategorized</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">Status</span>
</td>
<td className="px-6 py-4">Region</td>
<td className="px-6 py-4">YYYY-MM-DD</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="hover:underline text-red-600">Delete</button>
</td>
</tr><tr className="hover:bg-gray-50">
<td className="px-6 py-4 flex items-center gap-3">
<span className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 text-gray-600">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<div className="">
<p className="font-medium">New Content</p>
<p className="text-xs text-gray-500">ID: NEW-000</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">Uncategorized</span>
</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 text-xs">Status</span>
</td>
<td className="px-6 py-4">Region</td>
<td className="px-6 py-4">YYYY-MM-DD</td>
<td className="px-6 py-4 flex gap-4">
<button className="text-indigo-600 hover:underline">Edit</button>
<button className="text-red-600 hover:underline">Delete</button>
</td>
</tr></tbody>
</table>
</div>

<div className="flex flex-col md:flex-row md:items-center gap-4 text-sm border-gray-200 border-t pt-5 pr-5 pb-5 pl-5 justify-between">
<p className="text-gray-500">Showing 1 to 3 of 1,247 results</p>
<div className="flex items-center gap-2">
<button className="h-8 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
<button className="h-8 px-3 bg-red-600 text-white rounded-lg">1</button>
<button className="h-8 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
<button className="h-8 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
<button className="h-8 px-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
