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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Check for saved theme preference
        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.remove('dark');
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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/30 flex flex-col justify-between flex-shrink-0 transition-colors duration-300">
<div>
<div className="h-16 flex items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
<iconify-icon className="text-xl text-red-600 dark:text-yellow-400 mr-3" icon="solar:chart-2-linear"></iconify-icon>
<span className="font-medium text-zinc-900 dark:text-zinc-100 text-sm tracking-tight">Tender Analytics</span>
</div>
<nav className="p-3 space-y-1 mt-2">
<a className="flex items-center px-3 py-2 text-sm text-red-700 dark:text-yellow-400 bg-red-600/10 dark:bg-yellow-400/10 rounded-md group font-medium" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:widget-2-linear"></iconify-icon>
                        Dashboard
                    </a>
<a className="flex items-center px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg mr-3 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" icon="solar:cloud-upload-linear"></iconify-icon>
                        Upload Tenders
                    </a>
<a className="flex items-center px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg mr-3 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" icon="solar:document-text-linear"></iconify-icon>
                        All Tenders
                    </a>
<a className="flex items-center px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg mr-3 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" icon="solar:pie-chart-linear"></iconify-icon>
                        Analytics
                    </a>
<a className="flex items-center px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200/50 dark:hover:bg-zinc-900 rounded-md transition-colors group" href="#">
<iconify-icon className="text-lg mr-3 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" icon="solar:settings-linear"></iconify-icon>
                        Settings
                    </a>
</nav>
</div>
<div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
<a className="flex items-center px-2 py-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg mr-3" icon="solar:question-circle-linear"></iconify-icon>
                    Help &amp; Support
                </a>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-white dark:bg-black scroll-smooth transition-colors duration-300">

<header className="h-16 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-8 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-10 transition-colors duration-300">
<div>
<h1 className="text-zinc-900 dark:text-zinc-100 font-medium text-base">Dashboard</h1>
<p className="text-zinc-500 text-xs mt-0.5">AI-powered tender analysis and matching</p>
</div>
<div className="flex items-center gap-4">

<div className="relative group hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-base text-zinc-400 group-focus-within:text-zinc-600 dark:group-focus-within:text-zinc-300" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm pl-10 pr-4 py-1.5 rounded-md text-zinc-900 dark:text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-red-500 dark:focus:border-yellow-500 focus:ring-1 focus:ring-red-500 dark:focus:ring-yellow-500 w-64 transition-all" placeholder="Search tenders..." type="text"/>
</div>

<button className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors" id="theme-toggle" onclick="toggleTheme()">
<iconify-icon className="text-lg hidden dark:block" icon="solar:sun-linear"></iconify-icon>
<iconify-icon className="text-lg block dark:hidden" icon="solar:moon-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-red-600 dark:bg-yellow-400 flex items-center justify-center text-white dark:text-black text-xs font-semibold hover:bg-red-500 dark:hover:bg-yellow-300 transition-colors">
                        JD
                    </button>
</div>
</header>
<div className="p-8 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-red-600/10 dark:bg-yellow-400/10 rounded-md">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:file-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">124</div>
<div className="text-xs text-zinc-500 mt-1">Total Tenders</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-emerald-500/10 rounded-md">
<iconify-icon className="text-lg text-emerald-600 dark:text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">42</div>
<div className="text-xs text-zinc-500 mt-1">Analyzed</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-amber-500/10 rounded-md">
<iconify-icon className="text-lg text-amber-600 dark:text-amber-500" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">8</div>
<div className="text-xs text-zinc-500 mt-1">In Progress</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-indigo-500/10 rounded-md">
<iconify-icon className="text-lg text-indigo-600 dark:text-indigo-500" icon="solar:graph-new-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">64%</div>
<div className="text-xs text-zinc-500 mt-1">Avg Match</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-teal-500/10 rounded-md">
<iconify-icon className="text-lg text-teal-600 dark:text-teal-500" icon="solar:dollar-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">$3.3M</div>
<div className="text-xs text-zinc-500 mt-1">Total Value</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 hover:border-zinc-300 dark:hover:bg-zinc-900/50 transition-all">
<div className="flex items-start justify-between mb-3">
<div className="p-1.5 bg-orange-500/10 rounded-md">
<iconify-icon className="text-lg text-orange-600 dark:text-orange-500" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<div className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">12h</div>
<div className="text-xs text-zinc-500 mt-1">Time Saved</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:chart-2-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Performance Trend</h3>
</div>
<div className="relative h-64 w-full">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="grad1-dark" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#facc15', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#facc15', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="grad1-light" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#dc2626', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<line className="stroke-zinc-200 dark:stroke-zinc-800" strokeWidth="1" x1="0" x2="800" y1="290" y2="290"></line>
<line className="stroke-zinc-200 dark:stroke-zinc-800" stroke-dasharray="4" strokeWidth="1" x1="0" x2="800" y1="220" y2="220"></line>
<line className="stroke-zinc-200 dark:stroke-zinc-800" stroke-dasharray="4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
<line className="stroke-zinc-200 dark:stroke-zinc-800" stroke-dasharray="4" strokeWidth="1" x1="0" x2="800" y1="80" y2="80"></line>

<path className="fill-red-500/10 dark:fill-yellow-400/20 stroke-none transition-all duration-300" d="M0,250 C150,240 300,200 450,180 S700,160 800,150"></path>
<path className="stroke-red-600 dark:stroke-yellow-400 transition-all duration-300" d="M0,250 C150,240 300,200 450,180 S700,160 800,150" fill="none" strokeWidth="2"></path>
</svg>

<div className="flex justify-between text-xs text-zinc-400 dark:text-zinc-600 mt-2">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span>Jan</span>
<span>Feb</span>
</div>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:target-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Recommendations</h3>
</div>
<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="w-40 h-40 rounded-full border-[12px] border-zinc-200 dark:border-zinc-800 relative flex items-center justify-center transition-colors">
<div className="text-center">
<div className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">42</div>
<div className="text-xs text-zinc-500">Total</div>
</div>
</div>
<div className="flex gap-4 mt-8 text-xs">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-zinc-500">GO (12)</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-zinc-500">NO-GO (8)</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-zinc-500">REVIEW (22)</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:upload-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Upload Tender Documents</h3>
</div>
<div className="border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900/30 rounded-lg h-56 flex flex-col items-center justify-center transition-colors hover:bg-zinc-200/50 dark:hover:bg-zinc-900/50 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center mb-3 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-lg text-zinc-500 dark:text-zinc-400" icon="solar:arrow-up-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Drop your tender documents here</p>
<p className="text-xs text-zinc-500 mt-1 mb-4">Supports PDF, DOCX, and XLSX files (up to 20 files)</p>
<button className="bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs px-4 py-1.5 rounded-md border border-zinc-300 dark:border-zinc-700 transition-all font-medium shadow-sm">Browse Files</button>
</div>
<div className="flex justify-end gap-3 mt-4">
<button className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 text-xs font-medium px-3 py-1.5 transition-colors">Save as Draft</button>
<button className="bg-red-600 dark:bg-yellow-400 hover:bg-red-500 dark:hover:bg-yellow-300 text-white dark:text-black text-xs font-semibold px-4 py-1.5 rounded-md shadow-lg shadow-red-500/10 dark:shadow-yellow-500/10 transition-colors">Start Analysis</button>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Recent Activity</h3>
</div>
<div className="space-y-6 relative">

<div className="absolute left-2.5 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800"></div>
<div className="relative flex gap-4">
<div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center z-10 shrink-0 mt-0.5">
<iconify-icon className="text-xs text-emerald-600 dark:text-emerald-500" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">Analyzed "CLOUD INFRA..."</p>
<p className="text-[10px] text-zinc-500 mt-0.5">Ministry of Digital Transformation</p>
</div>
<span className="text-[10px] text-zinc-400">2m ago</span>
</div>
<div className="h-24"></div>
</div>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Recent Tenders</h3>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-sm" icon="solar:sort-vertical-linear"></iconify-icon> Sort
                             </button>
<button className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                                View All <iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-200 dark:border-zinc-800">
<th className="pb-3 text-xs font-medium text-zinc-500 w-24">ID</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Title</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Organization</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Budget</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Deadline</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Status</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Score</th>
<th className="pb-3 text-xs font-medium text-zinc-500">Risk</th>
<th className="pb-3 text-xs font-medium text-zinc-500 w-10"></th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="group hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-colors border-b border-zinc-100 dark:border-zinc-800/50 last:border-0">
<td className="py-4 text-xs text-zinc-500">TND-0040</td>
<td className="py-4 font-medium text-zinc-700 dark:text-zinc-200">ENTERPRISE CLOUD INFRA...</td>
<td className="py-4 text-xs text-zinc-500 dark:text-zinc-400">Ministry of Digital Transformation</td>
<td className="py-4 text-xs font-medium text-zinc-700 dark:text-zinc-200">$3.3M</td>
<td className="py-4 text-xs text-zinc-500">Apr 6</td>
<td className="py-4">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-500 border border-emerald-200 dark:border-emerald-500/20">
                                            Analyzed
                                        </span>
</td>
<td className="py-4 text-xs font-medium text-red-600 dark:text-red-400">51%</td>
<td className="py-4">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-500 border border-amber-200 dark:border-amber-500/20">
                                            Medium
                                        </span>
</td>
<td className="py-4 text-right">
<iconify-icon className="text-base text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 cursor-pointer" icon="solar:eye-linear"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-lg text-red-600 dark:text-yellow-400" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Company Capabilities</h3>
</div>
<p className="text-xs text-zinc-500 mb-6">Nama LLC</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white dark:bg-zinc-950/50 p-3 rounded-md border border-zinc-200 dark:border-zinc-800/50">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Employees</span>
</div>
<div className="text-lg font-medium text-zinc-900 dark:text-zinc-100">250+</div>
</div>
<div className="bg-white dark:bg-zinc-950/50 p-3 rounded-md border border-zinc-200 dark:border-zinc-800/50">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
<iconify-icon className="text-sm" icon="solar:dollar-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-wider">Turnover</span>
</div>
<div className="text-lg font-medium text-zinc-900 dark:text-zinc-100">$2M</div>
</div>
</div>
<div className="space-y-4">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-sm text-zinc-500" icon="solar:cpu-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">Core Skills</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">Cloud Architecture</span>
<span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">Database Migration</span>
<span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">Data Analytics</span>
<span className="px-2 py-1 rounded bg-zinc-200 dark:bg-zinc-800 text-[10px] text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">Kubernetes</span>
<span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-[10px] text-zinc-500 border border-zinc-200 dark:border-zinc-800">+3 more</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col">
<h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-6">Quick Actions</h3>
<div className="grid grid-cols-2 gap-4 flex-1">
<button className="bg-white dark:bg-zinc-950/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg p-4 text-left transition-all group shadow-sm">
<div className="bg-zinc-100 dark:bg-zinc-800 w-8 h-8 rounded flex items-center justify-center mb-3 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-sm text-zinc-600 dark:text-zinc-300" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Bulk Upload</div>
<div className="text-[10px] text-zinc-500 mt-1">Upload 10-20 docs</div>
</button>
<button className="bg-white dark:bg-zinc-950/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg p-4 text-left transition-all group shadow-sm">
<div className="bg-zinc-100 dark:bg-zinc-800 w-8 h-8 rounded flex items-center justify-center mb-3 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-sm text-zinc-600 dark:text-zinc-300" icon="solar:restart-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Sync Profile</div>
<div className="text-[10px] text-zinc-500 mt-1">Update capabilities</div>
</button>
<button className="bg-white dark:bg-zinc-950/30 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 rounded-lg p-4 text-left transition-all group shadow-sm">
<div className="bg-zinc-100 dark:bg-zinc-800 w-8 h-8 rounded flex items-center justify-center mb-3 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-sm text-zinc-600 dark:text-zinc-300" icon="solar:history-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-800 dark:text-zinc-200">History</div>
<div className="text-[10px] text-zinc-500 mt-1">View past logs</div>
</button>
</div>
</div>
</div>
<div className="h-8"></div>
</div>
</main>
</div>


    </>
  );
}
