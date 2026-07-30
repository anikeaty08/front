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
      

<aside className="fixed inset-y-0 left-0 w-64 bg-black text-white flex flex-col">
<div className="flex h-16 gap-3 border-white/10 border-b pr-6 pl-6 items-center">
<div className="h-6 w-6 bg-orange-600 rounded flex items-center justify-center">
<svg className="lucide lucide-shield text-white w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="font-semibold">Rights Manager</span>
<button className="ml-auto">
<svg className="lucide lucide-x w-[16px] h-[16px]" data-lucide="x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
<nav className="flex-1 overflow-y-auto px-6 py-4 space-y-6 text-sm">

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Main Features</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#dashboard">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded bg-white/10 text-white" href="#content">
<svg className="lucide lucide-clipboard w-4 h-4" data-lucide="clipboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="m9 12 2 2 4-4"></path><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>Content Management
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Master Data Management</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#partner-master">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Partner Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#channel-master">
<svg className="lucide lucide-tv w-4 h-4" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="15" rx="2" ry="2" width="20" x="2" y="3"></rect><polyline points="8,21 16,21"></polyline><line x1="12" x2="12" y1="17" y2="21"></line></svg>Channel Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#project-master">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>Project Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Rights & Contract Types</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#rights-type-master">
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>Rights Type Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#contract-type-master">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Contract Type Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">System Configuration</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#currency-master">
<svg className="lucide lucide-banknote w-4 h-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="m6 12h.01M18 12h.01"></path></svg>Currency Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#status-master">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Status Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Templates & Data Mapping</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#template-master">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>Template Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#mapping-master">
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>Mapping Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">System Integration</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#4tune-integration">
<svg className="lucide lucide-plug w-4 h-4" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>4tune Integration
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#axross-integration">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path></svg>AXROSS Integration
            </a>
</li>
</ul>
</div>
</nav>
<div className="px-6 py-4 space-y-3 border-t border-white/10">
<a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href="#">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Settings
      </a>
<a className="flex items-center gap-2 text-sm text-gray-300 hover:text-white" href="#">
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>Help
      </a>
<div className="flex items-center justify-between pt-3">
<span className="text-sm">Admin Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
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
<svg className="lucide lucide-chevron-down w-4 h-4 ml-auto text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Total Content</div>
<span className="text-xs text-gray-400">All time</span>
</div>
<p className="text-2xl font-semibold">1,247</p>
<p className="text-xs flex items-center gap-1 text-green-600 mt-1">
              15.8% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 1,081 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Active Rights</div>
<span className="text-xs text-gray-400">Current</span>
</div>
<p className="text-2xl font-semibold">987</p>
<p className="text-xs flex items-center gap-1 text-green-600 mt-1">
              8.2% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 912 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg> Pending Review</div>
<span className="text-xs text-gray-400">Today</span>
</div>
<p className="text-2xl font-semibold">156</p>
<p className="text-xs flex items-center gap-1 text-orange-600 mt-1">
              12.4% <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 139 Last Period</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> Expired</div>
<span className="text-xs text-gray-400">30 days</span>
</div>
<p className="text-2xl font-semibold">104</p>
<p className="text-xs flex items-center gap-1 text-red-600 mt-1">
              3.1% <svg className="lucide lucide-arrow-down-right w-3 h-3" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M17 7 7 17"></path></svg>
</p>
<p className="text-xs text-gray-400 mt-1">vs. 107 Last Period</p>
</div>
</div>

<div className="mt-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold">Recent Content</h3>
<div className="flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<input className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent" placeholder="Search content..." type="text" />
</div>
<button className="px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors">
                Add Content
              </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-gray-200">
<th className="text-left py-3 px-4 font-medium text-gray-600">Content Title</th>
<th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
<th className="text-left py-3 px-4 font-medium text-gray-600">Partner</th>
<th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
<th className="text-left py-3 px-4 font-medium text-gray-600">Expiry Date</th>
<th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-play w-4 h-4 text-orange-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5,3 19,12 5,21"></polygon></svg>
</div>
<div>
<p className="font-medium">Tokyo Detective Story</p>
<p className="text-sm text-gray-500">Drama Series • 2024</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">TV Series</span>
</td>
<td className="py-4 px-4">Toho Studios</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Active</span>
</td>
<td className="py-4 px-4">2025-12-31</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-edit w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"></path><path d="m16 5 3 3L8 19l-3 1 1-3Z"></path></svg>
</button>
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-trash-2 w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
</td>
</tr>
<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-film w-4 h-4 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2.18" ry="2.18" width="20" x="2" y="2"></rect><line x1="7" x2="7" y1="2" y2="22"></line><line x1="17" x2="17" y1="2" y2="22"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="2" x2="22" y1="7" y2="7"></line><line x1="2" x2="22" y1="17" y2="17"></line></svg>
</div>
<div>
<p className="font-medium">Sakura Dreams</p>
<p className="text-sm text-gray-500">Movie • 2023</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Movie</span>
</td>
<td className="py-4 px-4">Shochiku</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">Pending</span>
</td>
<td className="py-4 px-4">2024-06-15</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-edit w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"></path><path d="m16 5 3 3L8 19l-3 1 1-3Z"></path></svg>
</button>
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-trash-2 w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
</td>
</tr>
<tr className="border-b border-gray-100 hover:bg-gray-50">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-tv w-4 h-4 text-red-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="15" rx="2" ry="2" width="20" x="2" y="3"></rect><polyline points="8,21 16,21"></polyline><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div>
<p className="font-medium">News Tonight</p>
<p className="text-sm text-gray-500">News Program • 2024</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">News</span>
</td>
<td className="py-4 px-4">NTV News</td>
<td className="py-4 px-4">
<span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">Expired</span>
</td>
<td className="py-4 px-4">2024-01-31</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-edit w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"></path><path d="m16 5 3 3L8 19l-3 1 1-3Z"></path></svg>
</button>
<button className="p-1 hover:bg-gray-100 rounded">
<svg className="lucide lucide-trash-2 w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between mt-6">
<p className="text-sm text-gray-500">Showing 1-3 of 1,247 results</p>
<div className="flex items-center gap-2">
<button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
<button className="px-3 py-1 bg-orange-600 text-white rounded text-sm">1</button>
<button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">2</button>
<button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">3</button>
<span className="px-2">...</span>
<button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">416</button>
<button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">Next</button>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
