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
      
    // Initialize Lucide icons
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

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Main Features</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#dashboard">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>Dashboard
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded bg-white/10 text-white" href="#content">
<svg className="lucide lucide-clipboard w-4 h-4" data-lucide="clipboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="m9 12 2 2 4-4"></path><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>Content Management
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Master Data Management</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#partner-master">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Partner Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#channel-master">
<svg className="lucide lucide-tv w-4 h-4" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="15" rx="2" ry="2" width="20" x="2" y="3"></rect><polyline points="8,21 16,21"></polyline><line x1="12" x2="12" y1="17" y2="21"></line></svg>Channel Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#project-master">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>Project Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Rights &amp; Contract Types</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#rights-type-master">
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path></svg>Rights Type Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#contract-type-master">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>Contract Type Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">System Configuration</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#currency-master">
<svg className="lucide lucide-banknote w-4 h-4" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="m6 12h.01M18 12h.01"></path></svg>Currency Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#status-master">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Status Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">Templates &amp; Data Mapping</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#template-master">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>Template Master
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#mapping-master">
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>Mapping Master
            </a>
</li>
</ul>
</div>

<div>
<p className="uppercase tracking-wide text-gray-400 mb-2">System Integration</p>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#4tune-integration">
<svg className="lucide lucide-plug w-4 h-4" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>4tune Integration
            </a>
</li>
<li>
<a className="flex items-center gap-2 px-3 py-2 rounded text-gray-300 hover:bg-white/10" href="#axross-integration">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"></path><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"></path></svg>AXROSS Integration
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

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a20 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M22 12a1 1 0 0 0-.58-.91l-8.6-3.91a2 2 0 0 0-1.66 0l-8.58 3.9a1 1 0 0 0 0 1.83z"></path></svg>Total Content</div>
<span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">+12%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">1,247</div>
<p className="text-xs text-gray-500">Items in library</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22,4 12,14.01 9,11.01"></polyline></svg>Active Rights</div>
<span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">987</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">79.2%</div>
<p className="text-xs text-gray-500">Of total content</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>Pending</div>
<span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">156</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">12.5%</div>
<p className="text-xs text-gray-500">Awaiting approval</p>
</div>

<div className="border border-gray-200 rounded-xl p-5">
<div className="flex items-start justify-between mb-2">
<div className="flex items-center gap-2 text-gray-600"><svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></svg>Expired</div>
<span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">104</span>
</div>
<div className="text-2xl font-semibold text-gray-900 mb-1">8.3%</div>
<p className="text-xs text-gray-500">Rights expired</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Content Title</th>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Type</th>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Rights Status</th>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Expiry Date</th>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Partner</th>
<th className="text-left py-3 px-4 font-medium text-gray-900 text-sm">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="23 7 16 12 23 17 23 7"></polygon>
<rect height="14" rx="2" ry="2" width="14" x="1" y="5"></rect>
</svg>
</div>
<div>
<p className="font-medium text-gray-900">Detective Conan Movie 26</p>
<p className="text-sm text-gray-500">Animation Feature Film</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">Movie</span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Active</span>
</td>
<td className="py-4 px-4 text-sm text-gray-600">2025-03-15</td>
<td className="py-4 px-4 text-sm text-gray-600">Toho Animation</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
</svg>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="15" rx="2" ry="2" width="20" x="2" y="3"></rect>
<polyline points="8,21 16,21"></polyline>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<div>
<p className="font-medium text-gray-900">My Family's Story</p>
<p className="text-sm text-gray-500">Drama Series - 12 Episodes</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Series</span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>
</td>
<td className="py-4 px-4 text-sm text-gray-600">2024-12-31</td>
<td className="py-4 px-4 text-sm text-gray-600">NTV Studios</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
</svg>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-4 px-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="8,12 12,16 16,12"></polyline>
<line x1="12" x2="12" y1="8" y2="16"></line>
</svg>
</div>
<div>
<p className="font-medium text-gray-900">Tokyo Chronicles</p>
<p className="text-sm text-gray-500">Documentary Special</p>
</div>
</div>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Documentary</span>
</td>
<td className="py-4 px-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">Expired</span>
</td>
<td className="py-4 px-4 text-sm text-gray-600">2024-10-15</td>
<td className="py-4 px-4 text-sm text-gray-600">External Producer</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</button>
<button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
</svg>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between px-6 py-3 bg-gray-50 border-t border-gray-200">
<div className="flex items-center text-sm text-gray-500">
              Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">10</span> of <span className="font-medium text-gray-900">97</span> results
            </div>
<div className="flex items-center space-x-2">
<button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Previous</button>
<button className="px-3 py-1 text-sm font-medium text-white bg-orange-600 border border-orange-600 rounded-md hover:bg-orange-700">1</button>
<button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">2</button>
<button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">3</button>
<button className="px-3 py-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Next</button>
</div>
</div>
</div>

<div className="flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
            Add New Content
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
            Export Data
          </button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>
            Filter Options
          </button>
</div>
</section>
</div>
</main>


    </>
  );
}
