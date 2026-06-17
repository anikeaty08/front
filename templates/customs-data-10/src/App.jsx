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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)'
}
}
}
}



        // Login Logic
        function handleLogin(e) {
            e.preventDefault();
            const overlay = document.getElementById('login-overlay');
            const dashboard = document.getElementById('view-dashboard');
            
            // Fade out overlay
            overlay.classList.add('opacity-0', 'pointer-events-none');
            
            // Wait for fade then remove overlay and show dashboard
            setTimeout(() => {
                overlay.remove();
                
                // Show dashboard with fade in
                dashboard.classList.remove('opacity-0', 'translate-y-2');
                
                // Trigger chart animations after dashboard is visible
                const bars = document.querySelectorAll('.bar-trigger');
                bars.forEach(bar => {
                    bar.classList.add('bar-grow');
                });
                
            }, 600);
        }

        // Navigation Logic
        function switchTab(tabId) {
            const views = ['dashboard', 'upload', 'reports', 'maps', 'invoice'];
            
            views.forEach(v => {
                const el = document.getElementById('view-' + v);
                const nav = document.getElementById('nav-' + v);
                const icon = nav.querySelector('iconify-icon');
                
                el.classList.add('hidden');
                
                nav.classList.remove('bg-slate-50', 'text-slate-900', 'border-slate-100');
                nav.classList.add('text-slate-500', 'border-transparent');
                icon.classList.remove('text-slate-900');
            });

            const activeEl = document.getElementById('view-' + tabId);
            activeEl.classList.remove('hidden');
            
            // Reset and trigger fade
            activeEl.classList.remove('fade-in'); 
            void activeEl.offsetWidth; 
            activeEl.classList.add('fade-in');

            const activeNav = document.getElementById('nav-' + tabId);
            const activeIcon = activeNav.querySelector('iconify-icon');
            
            activeNav.classList.remove('text-slate-500', 'border-transparent');
            activeNav.classList.add('bg-slate-50', 'text-slate-900', 'border-slate-100');
            activeIcon.classList.add('text-slate-900');

            const titles = {
                'dashboard': 'Dashboard Overview',
                'upload': 'Data Integration',
                'reports': 'Compliance Audit',
                'maps': 'Geospatial Intelligence',
                'invoice': 'Reconciliation Center'
            };
            document.getElementById('page-title').textContent = titles[tabId];
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
      

<div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center transition-opacity duration-700" id="login-overlay">
<div className="w-full max-w-sm p-8">
<div className="flex flex-col items-center mb-10">
<div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h1 className="text-xl font-medium tracking-tight text-slate-900">Sign in to CDAP</h1>
<p className="text-sm text-slate-500 mt-2">Enterprise Customs Analytics</p>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700">Work Email</label>
<div className="relative">
<input className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 bg-white transition-all shadow-sm placeholder:text-slate-400" required="" type="email" value="analytics@demo.com"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-slate-700">Password</label>
<div className="relative">
<input className="w-full pl-9 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 focus:border-slate-400 bg-white transition-all shadow-sm" required="" type="password" value="password"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-md shadow-slate-200 mt-2 hover:shadow-lg flex justify-center items-center gap-2" type="submit">
<span>Authenticate</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>

<aside className="w-72 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg mr-3 shadow-sm">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block font-semibold tracking-tight text-slate-900 text-sm">CDAP Enterprise</span>
<span className="block text-[10px] text-slate-400 font-medium tracking-wide uppercase">v2.4.0 (Stable)</span>
</div>
</div>

<nav className="p-4 space-y-1">
<p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 mt-4">Platform</p>
<button className="nav-item group w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium bg-slate-50 text-slate-900 border border-slate-100" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-slate-900" icon="solar:widget-2-linear" width="20"></iconify-icon>
<span>Dashboard</span>
<span className="ml-auto text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-500 hidden group-hover:block">CMD+1</span>
</button>
<button className="nav-item group w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent hover:border-slate-100" id="nav-upload" onclick="switchTab('upload')">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:upload-track-linear" width="20"></iconify-icon>
<span>Data Integration</span>
</button>
<p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3 mt-8">Intelligence</p>
<button className="nav-item group w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent hover:border-slate-100" id="nav-reports" onclick="switchTab('reports')">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span>Compliance Audit</span>
<span className="ml-auto w-2 h-2 rounded-full bg-rose-500"></span>
</button>
<button className="nav-item group w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent hover:border-slate-100" id="nav-maps" onclick="switchTab('maps')">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:globe-linear" width="20"></iconify-icon>
<span>Trade Routes</span>
</button>
<button className="nav-item group w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all border border-transparent hover:border-slate-100" id="nav-invoice" onclick="switchTab('invoice')">
<iconify-icon className="group-hover:text-slate-900 transition-colors" icon="solar:bill-check-linear" width="20"></iconify-icon>
<span>Reconciliation</span>
</button>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center space-x-3 hover:border-slate-200 transition-colors cursor-pointer group">
<div className="relative">
<div className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium">AD</div>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-white bg-emerald-500 rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-slate-900 truncate">Admin User</p>
<p className="text-[10px] text-slate-500 truncate">Global Logistics</p>
</div>
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 z-10">
<div className="flex items-center gap-4">
<h2 className="text-base font-semibold tracking-tight text-slate-900" id="page-title">Dashboard Overview</h2>
<span className="h-4 w-px bg-slate-200"></span>
<span className="text-xs text-slate-500 font-medium">Last updated: <span className="text-slate-700">Just now</span></span>
</div>
<div className="flex items-center space-x-4">
<div className="relative hidden lg:block">
<iconify-icon className="absolute left-3 top-2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:border-slate-400 w-64 transition-all" placeholder="Search declarations, HS codes..." type="text"/>
</div>
<button className="relative w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-50 text-slate-500 transition-colors border border-transparent hover:border-slate-100">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-rose-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll p-6 lg:p-8 bg-zinc-50 relative">

<div className="space-y-6 opacity-0 translate-y-2 max-w-7xl mx-auto" id="view-dashboard" style={{transition: 'opacity 0.5s ease, transform 0.5s ease'}}>

<div className="flex justify-between items-center">
<div className="flex space-x-1 bg-white border border-slate-200 p-1 rounded-lg shadow-sm">
<button className="px-3 py-1 text-xs font-medium bg-slate-900 text-white rounded shadow-sm">12 Months</button>
<button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded">30 Days</button>
<button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded">7 Days</button>
</div>
<button className="flex items-center space-x-2 text-xs font-medium text-indigo-600 hover:text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg border border-indigo-100 transition-colors">
<iconify-icon icon="solar:export-linear"></iconify-icon>
<span>Export Report</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="bg-indigo-50 group-hover:bg-indigo-100 text-indigo-600 p-2.5 rounded-lg transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span className="text-[10px] font-bold">+12.5%</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">1,402</h3>
<p className="text-slate-500 text-xs font-medium mt-1">Total Declarations</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="bg-emerald-50 group-hover:bg-emerald-100 text-emerald-600 p-2.5 rounded-lg transition-colors">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
<span className="text-[10px] font-bold">+8.2%</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">AED 42.5M</h3>
<p className="text-slate-500 text-xs font-medium mt-1">Total Import Value (CIF)</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="bg-rose-50 group-hover:bg-rose-100 text-rose-600 p-2.5 rounded-lg transition-colors">
<iconify-icon icon="solar:danger-circle-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center space-x-1 text-rose-600 bg-rose-50 px-2 py-1 rounded-md">
<span className="text-[10px] font-bold">Action Req.</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">5</h3>
<p className="text-slate-500 text-xs font-medium mt-1">Compliance Flags</p>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-card hover:border-slate-300 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="bg-amber-50 group-hover:bg-amber-100 text-amber-600 p-2.5 rounded-lg transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center space-x-1 text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
<span className="text-[10px] font-bold">Stable</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">AED 2.1M</h3>
<p className="text-slate-500 text-xs font-medium mt-1">Duties Paid (YTD)</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-96">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-card lg:col-span-2 flex flex-col justify-between">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Import Volume by HS Chapter</h3>
<p className="text-xs text-slate-500 mt-0.5">Top 8 Commodities vs Previous Period</p>
</div>
<div className="flex items-center gap-2 text-[10px] font-medium text-slate-500">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-800"></span>Current</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-200"></span>Previous</span>
</div>
</div>
<div className="flex-1 flex items-end justify-between space-x-4 px-2" id="chart-bars">

<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-800 rounded-t-sm h-[85%] relative opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '0ms'}}></div>
<div className="w-full bg-slate-100 h-1 absolute bottom-8 z-0"></div> 
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">8517</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-800 rounded-t-sm h-[65%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '50ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">8471</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-800 rounded-t-sm h-[55%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '100ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">8703</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-800 rounded-t-sm h-[48%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '150ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">3304</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-800 rounded-t-sm h-[42%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '200ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">6109</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-300 rounded-t-sm h-[30%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '250ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">3004</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-200 rounded-t-sm h-[25%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '300ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">9018</span>
</div>
<div className="flex flex-col items-center flex-1 group">
<div className="w-full bg-slate-200 rounded-t-sm h-[18%] opacity-90 group-hover:opacity-100 transition-opacity bar-trigger scale-y-0" style={{animationDelay: '350ms'}}></div>
<span className="text-[10px] font-medium text-slate-500 mt-3 group-hover:text-slate-800">7113</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-card flex flex-col">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Recent Activity</h3>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto custom-scroll p-4 space-y-4">

<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
<div>
<p className="text-xs text-slate-600"><span className="font-semibold text-slate-900">Declaration #92201</span> cleared via Jebel Ali.</p>
<p className="text-[10px] text-slate-400 mt-1">10 mins ago • Automated</p>
</div>
</div>

<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-rose-500 shrink-0"></div>
<div>
<p className="text-xs text-slate-600"><span className="font-semibold text-slate-900">System Alert:</span> HS Code mismatch detected for Invoice INV-002.</p>
<p className="text-[10px] text-slate-400 mt-1">32 mins ago • Compliance Bot</p>
</div>
</div>

<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-indigo-500 shrink-0"></div>
<div>
<p className="text-xs text-slate-600"><span className="font-semibold text-slate-900">Upload Complete:</span> October_Data.csv processed successfully.</p>
<p className="text-[10px] text-slate-400 mt-1">1 hour ago • Admin User</p>
</div>
</div>

<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
<div>
<p className="text-xs text-slate-600"><span className="font-semibold text-slate-900">Agent Note:</span> Updated origin certificate for Swift Logistics.</p>
<p className="text-[10px] text-slate-400 mt-1">2 hours ago • Manual Entry</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-900">Clearing Agent Performance</h3>
<span className="bg-slate-200 text-slate-600 px-1.5 rounded text-[10px] font-bold">TOP 5</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center space-x-1 text-xs text-slate-500 border border-slate-200 rounded-md px-2 py-1 bg-white cursor-pointer hover:border-slate-300">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
<span>Filter</span>
</div>
<button className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">View Full Report</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
<th className="px-6 py-3">Agent Entity</th>
<th className="px-6 py-3">Dec. Count</th>
<th className="px-6 py-3">CIF Value</th>
<th className="px-6 py-3">Avg. Clearance Time</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-xs">
<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-3 font-medium text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-[10px]">SL</div>
                                        Swift Logistics LLC
                                    </td>
<td className="px-6 py-3 text-slate-600">452</td>
<td className="px-6 py-3 text-slate-600 font-medium">AED 18,240,000</td>
<td className="px-6 py-3 text-slate-600">1.2 Days</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-3 font-medium text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-[10px]">GT</div>
                                        Global Trade Services
                                    </td>
<td className="px-6 py-3 text-slate-600">318</td>
<td className="px-6 py-3 text-slate-600 font-medium">AED 11,500,000</td>
<td className="px-6 py-3 text-slate-600">2.4 Days</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-3 font-medium text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-[10px]">OB</div>
                                        Ocean Blue Cargo
                                    </td>
<td className="px-6 py-3 text-slate-600">192</td>
<td className="px-6 py-3 text-slate-600 font-medium">AED 5,120,000</td>
<td className="px-6 py-3 text-slate-600">3.1 Days</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Review</span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="px-6 py-3 font-medium text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[10px]">AZ</div>
                                        Azteca Freight
                                    </td>
<td className="px-6 py-3 text-slate-600">84</td>
<td className="px-6 py-3 text-slate-600 font-medium">AED 2,800,000</td>
<td className="px-6 py-3 text-slate-600">1.8 Days</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Active</span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col fade-in max-w-5xl mx-auto" id="view-upload">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-medium text-slate-900">Data Integration</h3>
<p className="text-sm text-slate-500">Manage data sources and view ingestion history.</p>
</div>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                         Download Template
                     </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center hover:border-indigo-500 hover:bg-slate-50 transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:cloud-upload-linear" width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-1">Click to upload or drag and drop</h3>
<p className="text-xs text-slate-500 mb-6">Supports .XLSX, .CSV, .XML (Max 50MB)</p>
<button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs font-medium shadow-sm hover:border-slate-300 transition-colors">Select File</button>
</div>
</div>

<div className="mt-6 bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-slate-700">Customs_Data_Nov2025.csv</span>
<span className="text-slate-500">45%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-600 h-1.5 rounded-full w-[45%] animate-pulse"></div>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="bg-slate-900 text-white rounded-xl p-6 shadow-card h-fit">
<h4 className="font-medium text-sm mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
                            Schema Requirements
                        </h4>
<ul className="space-y-4 text-xs text-slate-300">
<li className="flex gap-3">
<span className="text-emerald-400 font-bold">✓</span>
<div>
<strong className="text-white block mb-0.5">HS Code Format</strong>
                                    Ensure 8-digit codes without dots (e.g., 85171200).
                                </div>
</li>
<li className="flex gap-3">
<span className="text-emerald-400 font-bold">✓</span>
<div>
<strong className="text-white block mb-0.5">Date Standard</strong>
                                    Use ISO 8601 format (YYYY-MM-DD).
                                </div>
</li>
<li className="flex gap-3">
<span className="text-emerald-400 font-bold">✓</span>
<div>
<strong className="text-white block mb-0.5">Value Currency</strong>
                                    All CIF values must be normalized to AED.
                                </div>
</li>
</ul>
</div>
</div>
</div>

<div className="hidden space-y-6 fade-in max-w-6xl mx-auto" id="view-reports">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-slate-900">Compliance Audit</h3>
<p className="text-sm text-slate-500">Automated checks against FTA regulations and Tariff codes.</p>
</div>
<div className="flex gap-2">
<span className="bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-rose-100 flex items-center gap-1">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                             3 Critical Issues
                         </span>
<span className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-medium border border-orange-100 flex items-center gap-1">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
                             5 Warnings
                         </span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
<div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-white border border-slate-200 p-1.5 rounded-md shadow-sm">
<iconify-icon className="text-slate-700" icon="solar:shield-warning-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-sm text-slate-900">FTA Preference Analysis</span>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon></button>
</div>
<div className="p-0">

<div className="p-4 border-b border-slate-100 flex gap-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="mt-1">
<iconify-icon className="text-rose-500" icon="solar:close-circle-bold" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h5 className="text-sm font-medium text-slate-900">Invalid GCC Preference</h5>
<span className="text-[10px] text-slate-400">#IMP-88210</span>
</div>
<p className="text-xs text-slate-600 mt-1">Origin is <span className="font-semibold">China</span> but GCC Customs Union code applied. Origin must be a GCC member state.</p>
<div className="mt-3 flex gap-2">
<button className="text-[10px] font-medium bg-white border border-slate-200 px-2 py-1 rounded text-slate-600 shadow-sm hover:border-slate-300">View Declaration</button>
<button className="text-[10px] font-medium bg-rose-50 text-rose-600 px-2 py-1 rounded border border-rose-100 hover:bg-rose-100">Dismiss</button>
</div>
</div>
</div>

<div className="p-4 flex gap-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="mt-1">
<iconify-icon className="text-orange-500" icon="solar:info-circle-bold" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h5 className="text-sm font-medium text-slate-900">Certificate Expiry Warning</h5>
<span className="text-[10px] text-slate-400">#EXP-20192</span>
</div>
<p className="text-xs text-slate-600 mt-1">Beneficiary certificate for <span className="font-semibold">Global Trade Services</span> expires in 5 days.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">
<div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="bg-white border border-slate-200 p-1.5 rounded-md shadow-sm">
<iconify-icon className="text-slate-700" icon="solar:tag-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-sm text-slate-900">Tariff Classification</span>
</div>
<span className="text-[10px] bg-slate-200 px-1.5 rounded text-slate-600">AI Powered</span>
</div>
<div className="p-0">

<div className="p-4 border-b border-slate-100 flex gap-4 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="mt-1">
<iconify-icon className="text-orange-500" icon="solar:danger-triangle-bold" width="18"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h5 className="text-sm font-medium text-slate-900">Description Mismatch</h5>
<span className="text-[10px] text-slate-400">HS: 8517.12.00</span>
</div>
<div className="bg-slate-50 p-2 rounded border border-slate-100 mt-2 text-xs grid grid-cols-2 gap-2">
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold">Declared</span>
<p className="text-slate-700">"Plastic Toy Parts"</p>
</div>
<div>
<span className="text-[10px] text-slate-400 uppercase font-bold">Tariff Book</span>
<p className="text-slate-700">"Telephones for cellular..."</p>
</div>
</div>
<p className="text-[10px] text-orange-600 mt-2 font-medium">Confidence: 94% Probability of Error</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col fade-in" id="view-maps">
<div className="flex items-center justify-between mb-4 px-2">
<h3 className="text-lg font-medium text-slate-900">Geospatial Intelligence</h3>
<div className="flex bg-white rounded-lg border border-slate-200 p-0.5 shadow-sm">
<button className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-900 rounded-md">Map View</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Route Analysis</button>
</div>
</div>
<div className="flex-1 bg-white rounded-xl border border-slate-200 shadow-card p-0 overflow-hidden relative group">

<div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
<div className="bg-white/90 backdrop-blur p-3 rounded-lg border border-slate-200 shadow-sm w-48">
<p className="text-xs font-semibold text-slate-900 mb-2">Filters</p>
<label className="flex items-center gap-2 text-xs text-slate-600 mb-1 cursor-pointer">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/> High Volume (&gt;10M)
                            </label>
<label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
<input checked="" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/> Risk Origins
                            </label>
</div>
</div>

<div className="w-full h-full bg-slate-50 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.5'}}></div>

<svg className="w-full h-full text-slate-300 fill-current drop-shadow-lg" style={{transform: 'scale(0.9)'}} viewbox="0 0 1000 500">

<path className="hover:text-slate-400 transition-colors cursor-pointer" d="M150,120 Q220,50 300,100 T350,250 T200,300 T150,120 Z"></path>

<path className="hover:text-slate-400 transition-colors cursor-pointer" d="M250,320 Q320,320 340,400 T300,480 T250,320 Z"></path>

<path className="hover:text-slate-400 transition-colors cursor-pointer text-slate-300" d="M450,100 Q600,50 800,100 T900,250 T700,350 T500,300 T450,100 Z"></path>

<path className="hover:text-slate-400 transition-colors cursor-pointer" d="M480,250 Q550,250 580,350 T500,450 T450,350 Z"></path>

<path className="hover:text-slate-400 transition-colors cursor-pointer" d="M750,350 Q850,350 880,400 T800,450 Z"></path>

<path className="animate-pulse" d="M780,180 Q650,220 520,280" fill="none" stroke="#6366f1" stroke-dasharray="4" strokeWidth="2"></path>
<circle cx="780" cy="180" fill="#6366f1" r="4"></circle> 
<circle cx="520" cy="280" fill="#6366f1" r="4"></circle> 
</svg>

<div className="absolute top-[30%] right-[25%] bg-slate-900 text-white p-4 rounded-xl shadow-2xl min-w-[200px] border border-slate-700 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center justify-between mb-2 border-b border-slate-700 pb-2">
<span className="font-semibold text-xs text-white">CN - Shanghai</span>
<span className="text-[10px] bg-indigo-600 px-1.5 rounded">Top Origin</span>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-slate-300">
<span>Vol:</span> <span className="text-white font-mono">12,402 TEU</span>
</div>
<div className="flex justify-between text-[10px] text-slate-300">
<span>Val:</span> <span className="text-white font-mono">AED 45M</span>
</div>
</div>

<div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-b border-r border-slate-700"></div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6 fade-in max-w-6xl mx-auto" id="view-invoice">
<div className="bg-indigo-600 rounded-xl p-6 text-white shadow-lg flex justify-between items-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
<div>
<h3 className="text-xl font-medium">Reconciliation Center</h3>
<p className="text-indigo-200 text-sm mt-1">Cross-reference Commercial Invoices against Customs Declarations.</p>
</div>
<button className="bg-white text-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-indigo-50 transition-colors">
                        New Reconciliation Job
                    </button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-card overflow-hidden">

<div className="p-4 border-b border-slate-100 flex gap-4">
<div className="relative">
<input className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs w-48 focus:border-indigo-500 outline-none" placeholder="Search Invoice Ref..." type="text"/>
<iconify-icon className="absolute left-2.5 top-2 text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<select className="pl-2 pr-8 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600 outline-none">
<option>Status: All</option>
<option>Mismatch Only</option>
<option>Matched</option>
</select>
</div>
<table className="w-full text-left text-xs">
<thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase font-semibold">
<tr>
<th className="px-6 py-3 w-4"></th>
<th className="px-6 py-3">Invoice Ref</th>
<th className="px-6 py-3">Item Description</th>
<th className="px-6 py-3 text-right">Inv Value</th>
<th className="px-6 py-3 text-right">Dec Value</th>
<th className="px-6 py-3 text-center">Diff</th>
<th className="px-6 py-3">Result</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="bg-rose-50/30 hover:bg-rose-50/50 transition-colors">
<td className="px-6 py-4 text-center"><iconify-icon className="text-rose-500" icon="solar:danger-circle-bold" width="16"></iconify-icon></td>
<td className="px-6 py-4 font-medium text-slate-900">INV-2024-001</td>
<td className="px-6 py-4 text-slate-600">Electronic Components</td>
<td className="px-6 py-4 text-right font-mono">25,000</td>
<td className="px-6 py-4 text-right font-mono">25,500</td>
<td className="px-6 py-4 text-center text-rose-600 font-bold">+500</td>
<td className="px-6 py-4"><span className="bg-white border border-rose-200 text-rose-700 px-2 py-0.5 rounded shadow-sm">Value Mismatch</span></td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4 text-center"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold" width="16"></iconify-icon></td>
<td className="px-6 py-4 font-medium text-slate-900">INV-2024-002</td>
<td className="px-6 py-4 text-slate-600">Cotton T-Shirts</td>
<td className="px-6 py-4 text-right font-mono">12,000</td>
<td className="px-6 py-4 text-right font-mono">12,000</td>
<td className="px-6 py-4 text-center text-slate-300">-</td>
<td className="px-6 py-4"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">Matched</span></td>
</tr>

<tr className="bg-orange-50/30 hover:bg-orange-50/50 transition-colors">
<td className="px-6 py-4 text-center"><iconify-icon className="text-orange-500" icon="solar:info-circle-bold" width="16"></iconify-icon></td>
<td className="px-6 py-4 font-medium text-slate-900">INV-2024-003</td>
<td className="px-6 py-4 text-slate-600">Auto Parts</td>
<td className="px-6 py-4 text-right font-mono">8,500</td>
<td className="px-6 py-4 text-right font-mono">8,500</td>
<td className="px-6 py-4 text-center text-slate-300">-</td>
<td className="px-6 py-4"><span className="bg-white border border-orange-200 text-orange-700 px-2 py-0.5 rounded shadow-sm">HS Code Diff</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
