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
fontSize: {
'xxs': '0.625rem',
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-200/80 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-14 items-center">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-gray-900 rounded-md flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:command" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">NEXUS</span>
</div>

<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 rounded-md bg-gray-100 text-xs font-medium text-gray-900" href="#">Overview</a>
<a className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all" href="#">Audience</a>
<a className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all" href="#">Monetization</a>
<a className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="absolute inset-y-0 left-0 flex items-center pl-2.5 text-gray-400">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</span>
<input className="h-8 w-48 rounded-md border border-gray-200 bg-gray-50 pl-8 pr-3 text-xs text-gray-900 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-0 transition-colors" placeholder="Search..." type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-2">
<kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xxs font-medium text-gray-400">⌘K</kbd>
</div>
</div>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<button className="text-gray-400 hover:text-gray-600 transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
<span className="absolute top-0.5 right-0.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
<div className="h-7 w-7 rounded-full bg-gray-200 overflow-hidden ring-1 ring-gray-200 ml-1 cursor-pointer">
<img alt="User" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>
</div>
</nav>

<main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

<div className="mb-8">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="h-24 w-24 rounded-full overflow-hidden border border-gray-200 shadow-sm flex-shrink-0 relative group">
<img alt="Profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
<span className="iconify text-white drop-shadow-md" data-icon="lucide:upload-cloud" data-width="20"></span>
</div>
</div>
<div className="flex-1 min-w-0 pt-1">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-2">
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Elena Fisher</h1>
<span className="inline-flex items-center rounded-full bg-gray-900 px-2 py-0.5 text-xxs font-medium text-white">PRO</span>
</div>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                                @elenacreates 
                                <span className="text-gray-300 mx-1">•</span>
                                Digital Artist &amp; Designer
                            </p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-all">
<span className="iconify mr-1.5" data-icon="lucide:settings-2" data-width="14"></span>
                                Customize
                            </button>
<button className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-gray-800 transition-all">
<span className="iconify mr-1.5" data-icon="lucide:plus" data-width="14"></span>
                                New Post
                            </button>
</div>
</div>

<div className="flex items-center gap-6 mt-6 border-b border-gray-200">
<button className="pb-2 text-xs font-medium text-gray-900 border-b-2 border-gray-900">Dashboard</button>
<button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Content Library</button>
<button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Earnings</button>
<button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">Collaborations</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300 transition-colors group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-500 group-hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
</div>
<span className="text-xs font-medium text-gray-500">Total Followers</span>
</div>
</div>
<div className="mt-3">
<span className="text-xl font-semibold tracking-tight text-gray-900">124.8k</span>
<div className="flex items-center gap-1 mt-1">
<span className="iconify text-green-600" data-icon="lucide:trending-up" data-width="12"></span>
<span className="text-xxs font-medium text-green-600">12% growth</span>
<span className="text-xxs text-gray-400 ml-1">vs last 30 days</span>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300 transition-colors group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-500 group-hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="14"></span>
</div>
<span className="text-xs font-medium text-gray-500">Engagement</span>
</div>
</div>
<div className="mt-3">
<span className="text-xl font-semibold tracking-tight text-gray-900">4.2%</span>
<div className="flex items-center gap-1 mt-1">
<span className="iconify text-green-600" data-icon="lucide:trending-up" data-width="12"></span>
<span className="text-xxs font-medium text-green-600">0.8% increase</span>
<span className="text-xxs text-gray-400 ml-1">vs last 30 days</span>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300 transition-colors group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-500 group-hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:eye" data-width="14"></span>
</div>
<span className="text-xs font-medium text-gray-500">Impressions</span>
</div>
</div>
<div className="mt-3">
<span className="text-xl font-semibold tracking-tight text-gray-900">892.1k</span>
<div className="flex items-center gap-1 mt-1">
<span className="iconify text-gray-400" data-icon="lucide:minus" data-width="12"></span>
<span className="text-xxs font-medium text-gray-500">No change</span>
<span className="text-xxs text-gray-400 ml-1">vs last 30 days</span>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-300 transition-colors group">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-gray-50 rounded-md text-gray-500 group-hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:wallet" data-width="14"></span>
</div>
<span className="text-xs font-medium text-gray-500">Net Revenue</span>
</div>
</div>
<div className="mt-3">
<span className="text-xl font-semibold tracking-tight text-gray-900">$12,450</span>
<div className="flex items-center gap-1 mt-1">
<span className="iconify text-green-600" data-icon="lucide:trending-up" data-width="12"></span>
<span className="text-xxs font-medium text-green-600">24% increase</span>
<span className="text-xxs text-gray-400 ml-1">vs last 30 days</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-medium text-gray-900">Audience Growth</h3>
<p className="text-xs text-gray-500 mt-0.5">Followers vs Unfollows over time</p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 rounded-lg bg-gray-50 border border-gray-200 p-0.5">
<button className="rounded-md bg-white shadow-sm px-2 py-0.5 text-xxs font-medium text-gray-900 border border-gray-100">12M</button>
<button className="rounded-md px-2 py-0.5 text-xxs font-medium text-gray-500 hover:text-gray-900">30D</button>
<button className="rounded-md px-2 py-0.5 text-xxs font-medium text-gray-500 hover:text-gray-900">7D</button>
</div>
</div>
</div>
<div className="relative w-full h-60">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-b border-dashed border-gray-100 w-full h-0"></div>
<div className="border-b border-dashed border-gray-100 w-full h-0"></div>
<div className="border-b border-dashed border-gray-100 w-full h-0"></div>
<div className="border-b border-dashed border-gray-100 w-full h-0"></div>
<div className="border-b border-gray-200 w-full h-0"></div>
</div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#111827" stop-opacity="0.08"></stop>
<stop offset="100%" stop-color="#111827" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,250 C100,240 200,200 300,210 C400,220 500,100 600,80 C700,60 800,120 900,40 L1000,20 L1000,300 L0,300 Z" fill="url(#chartGradient)"></path>
<path d="M0,250 C100,240 200,200 300,210 C400,220 500,100 600,80 C700,60 800,120 900,40 L1000,20" fill="none" stroke="#111827" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path d="M0,280 C120,270 220,240 320,250 C420,260 520,180 620,160 C720,140 820,180 920,100 L1000,80" fill="none" stroke="#E5E7EB" stroke-dasharray="5,5" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<line stroke="#E5E7EB" strokeWidth="1" x1="600" x2="600" y1="80" y2="300"></line>
<circle cx="600" cy="80" fill="#ffffff" r="4" stroke="#111827" strokeWidth="2"></circle>
</svg>

<div className="absolute top-[10%] left-[60%] -translate-x-1/2 -translate-y-full mb-2 bg-white border border-gray-200 text-gray-900 text-xs py-2 px-3 rounded-lg shadow-lg min-w-[120px]">
<div className="font-medium">Feb 24, 2023</div>
<div className="flex justify-between items-center mt-1">
<span className="text-gray-500">New:</span>
<span className="font-semibold">+2,450</span>
</div>
</div>
</div>
<div className="flex justify-between mt-2 text-xxs text-gray-400 font-medium uppercase tracking-wider pl-1 pr-1">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-1 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-gray-900">Schedule</h3>
<button className="text-xs text-gray-500 hover:text-gray-900">
<span className="iconify" data-icon="lucide:calendar-plus" data-width="16"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto space-y-5 pr-1 custom-scrollbar">

<div className="relative pl-4 border-l border-gray-200">
<div className="absolute -left-1.5 top-0.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white"></div>
<p className="text-xs font-medium text-gray-500 mb-0.5">Today, 2:00 PM</p>
<h4 className="text-sm font-medium text-gray-900">Live Q&amp;A: Design Systems</h4>
<div className="flex -space-x-1 overflow-hidden mt-2">
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
<img alt="" className="inline-block h-5 w-5 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" />
<div className="flex items-center justify-center h-5 w-5 rounded-full ring-2 ring-white bg-gray-100 text-[8px] font-medium text-gray-500">+42</div>
</img></img></div>
</div>

<div className="relative pl-4 border-l border-gray-200">
<div className="absolute -left-1.5 top-0.5 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-white"></div>
<p className="text-xs font-medium text-gray-500 mb-0.5">Tomorrow, 10:00 AM</p>
<h4 className="text-sm font-medium text-gray-900">Publish: UI Kit v2.0</h4>
<span className="inline-flex items-center mt-1.5 rounded bg-purple-50 px-1.5 py-0.5 text-xxs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">Product Launch</span>
</div>

<div className="relative pl-4 border-l border-gray-200">
<div className="absolute -left-1.5 top-0.5 h-3 w-3 rounded-full bg-gray-200 ring-4 ring-white"></div>
<p className="text-xs font-medium text-gray-500 mb-0.5">Fri, Oct 24</p>
<h4 className="text-sm font-medium text-gray-900">Sponsor Review: Framer</h4>
<p className="text-xs text-gray-500 mt-1 line-clamp-1">Draft needs approval by Wed...</p>
</div>
</div>
<button className="mt-4 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
                    View Full Calendar
                </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 space-y-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-4">Top Revenue Sources</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<span className="iconify" data-icon="lucide:package" data-width="16"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<p className="text-xs font-medium text-gray-900 truncate">Abstract 3D Pack</p>
<p className="text-xs font-medium text-gray-900">$4.2k</p>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<span className="iconify" data-icon="lucide:monitor" data-width="16"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<p className="text-xs font-medium text-gray-900 truncate">Web Design Course</p>
<p className="text-xs font-medium text-gray-900">$2.8k</p>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full opacity-60" style={{width: '45%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<span className="iconify" data-icon="lucide:coffee" data-width="16"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-1">
<p className="text-xs font-medium text-gray-900 truncate">Ko-fi / Donations</p>
<p className="text-xs font-medium text-gray-900">$850</p>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-gray-900 h-1.5 rounded-full opacity-30" style={{width: '15%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-900 mb-4">Audience by Region</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:flag" data-width="12"></span>
<span className="text-gray-600">United States</span>
</div>
<span className="font-medium text-gray-900">42%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1 mb-3">
<div className="bg-blue-500 h-1 rounded-full" style={{width: '42%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:flag" data-width="12"></span>
<span className="text-gray-600">United Kingdom</span>
</div>
<span className="font-medium text-gray-900">18%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1 mb-3">
<div className="bg-blue-400 h-1 rounded-full" style={{width: '18%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:flag" data-width="12"></span>
<span className="text-gray-600">Germany</span>
</div>
<span className="font-medium text-gray-900">12%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1">
<div className="bg-blue-300 h-1 rounded-full" style={{width: '12%'}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm flex flex-col">
<div className="p-6 border-b border-gray-200 flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-gray-900">Recent Content Performance</h3>
<p className="text-xs text-gray-500 mt-1">Detailed analysis of your latest posts</p>
</div>
<div className="flex items-center gap-2">

<div className="relative group">
<button className="flex items-center justify-between w-24 px-2 py-1.5 text-xs text-gray-600 bg-white border border-gray-200 rounded-md hover:border-gray-300">
<span>Filter</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
</div>
<button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md border border-gray-200 hover:bg-gray-50">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
</button>
</div>
</div>
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50">
<th className="py-3 px-6 text-xxs font-medium text-gray-500 uppercase tracking-wider w-1/2">Content</th>
<th className="py-3 px-6 text-xxs font-medium text-gray-500 uppercase tracking-wider text-right">Reach</th>
<th className="py-3 px-6 text-xxs font-medium text-gray-500 uppercase tracking-wider text-right">Engage</th>
<th className="py-3 px-6 text-xxs font-medium text-gray-500 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm text-gray-600 divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400">
<span className="iconify" data-icon="lucide:image" data-width="14"></span>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">Minimalist Workspace Setup</p>
<p className="text-xxs text-gray-400">Oct 22 • Instagram</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-right font-medium text-gray-900">145k</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xxs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">8.4%</span>
</td>
<td className="py-3 px-6 text-right">
<div className="flex justify-end">
<span className="h-2 w-2 rounded-full bg-green-500"></span>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400">
<span className="iconify" data-icon="lucide:video" data-width="14"></span>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">Figma to Tailwind Workflow</p>
<p className="text-xxs text-gray-400">Oct 19 • YouTube</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-right font-medium text-gray-900">92k</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-0.5 text-xxs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">4.1%</span>
</td>
<td className="py-3 px-6 text-right">
<div className="flex justify-end">
<span className="h-2 w-2 rounded-full bg-green-500"></span>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">The Future of Digital Art</p>
<p className="text-xxs text-gray-400">Oct 15 • Blog</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-right font-medium text-gray-900">45k</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xxs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">3.2%</span>
</td>
<td className="py-3 px-6 text-right">
<div className="flex justify-end">
<span className="h-2 w-2 rounded-full bg-gray-300"></span>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded bg-gray-100 border border-gray-200 flex items-center justify-center flex-shrink-0 text-gray-400">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
</div>
<div className="min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">Quick design tips thread</p>
<p className="text-xxs text-gray-400">Oct 12 • Twitter</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-right font-medium text-gray-900">220k</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xxs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">12%</span>
</td>
<td className="py-3 px-6 text-right">
<div className="flex justify-end">
<span className="h-2 w-2 rounded-full bg-gray-300"></span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-xl flex justify-center">
<button className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors">
                        View All Content
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
</div>
</div>
</main>
<footer className="border-t border-gray-200 bg-white mt-12">
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:px-8">
<div className="flex items-center gap-2">
<div className="h-5 w-5 bg-gray-200 rounded flex items-center justify-center">
<span className="iconify text-gray-500" data-icon="lucide:command" data-width="12"></span>
</div>
<p className="text-xs text-gray-500">© 2023 Nexus Inc.</p>
</div>
<div className="flex space-x-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Help</a>
</div>
</div>
</footer>

    </>
  );
}
