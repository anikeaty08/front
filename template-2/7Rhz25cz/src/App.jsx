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
      
<header className="border-b border-slate-700">
<div className="container mx-auto px-4 py-4 flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-md bg-cyan-500 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
</svg>
</div>
<span className="font-bold text-xl">AnalyticsPro</span>
</div>
<nav>
<ul className="flex space-x-6">
<li><a className="text-cyan-400 font-medium" href="#">Dashboard</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Reports</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Users</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Settings</a></li>
</ul>
</nav>
</div>
</header>
<main className="container mx-auto px-4 py-8">
<div className="flex justify-between items-center mb-8">
<h1 className="text-2xl font-bold">User Analytics Dashboard</h1>
<div className="flex space-x-3">
<button className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md transition-colors">
          Export Data
        </button>
<button className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2 rounded-md transition-colors">
          Generate Report
        </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
<div className="p-6 border-b border-slate-700 flex justify-between items-center">
<div>
<h2 className="text-xl font-semibold">User Engagement</h2>
<p className="text-sm text-slate-400">14-day overview</p>
</div>
<div className="flex items-center space-x-2">
<span className="w-3 h-3 rounded-full bg-cyan-400"></span>
<span className="text-sm">Weekly Report</span>
</div>
</div>
<div className="p-6 gradient-bg">

<div className="flex space-x-4">

<div className="flex flex-col justify-between text-right text-xs text-slate-400 py-2 h-64">
<p>100%</p>
<p>75%</p>
<p>50%</p>
<p>25%</p>
<p>0%</p>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 border border-slate-700 border-dashed opacity-50">
<div className="absolute w-full h-px border-t border-slate-700 border-dashed top-1/4"></div>
<div className="absolute w-full h-px border-t border-slate-700 border-dashed top-2/4"></div>
<div className="absolute w-full h-px border-t border-slate-700 border-dashed top-3/4"></div>
</div>

<div className="flex justify-between h-64 gap-3">

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">85%</p>
<p className="text-sm font-semibold text-white">12.4K users</p>
</div>
<div className="w-full h-[85%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">78%</p>
<p className="text-sm font-semibold text-white">11.3K users</p>
</div>
<div className="w-full h-[78%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">62%</p>
<p className="text-sm font-semibold text-white">8.9K users</p>
</div>
<div className="w-full h-[62%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">70%</p>
<p className="text-sm font-semibold text-white">10.1K users</p>
</div>
<div className="w-full h-[70%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">68%</p>
<p className="text-sm font-semibold text-white">9.7K users</p>
</div>
<div className="w-full h-[68%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">54%</p>
<p className="text-sm font-semibold text-white">7.8K users</p>
</div>
<div className="w-full h-[54%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end group relative">
<div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-900 rounded px-3 py-2 shadow-lg border border-slate-700 transition-opacity duration-200 z-10 w-24 text-center">
<p className="text-sm font-semibold text-slate-400">72%</p>
<p className="text-sm font-semibold text-white">10.4K users</p>
</div>
<div className="w-full h-[72%] rounded-t-md overflow-hidden">
<div className="w-full h-full bar-gradient"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-between text-xs text-slate-400 pt-4 ml-12">
<p>Mon</p>
<p>Tue</p>
<p>Wed</p>
<p>Thu</p>
<p>Fri</p>
<p>Sat</p>
<p>Sun</p>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
<h2 className="text-xl font-semibold mb-4">Weekly Summary</h2>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-1">
<span className="text-sm text-slate-400">Total Users</span>
<span className="text-sm font-medium">72,540</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-cyan-400 h-2 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-sm text-slate-400">Active Users</span>
<span className="text-sm font-medium">58,032</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-cyan-400 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-1">
<span className="text-sm text-slate-400">Conversion Rate</span>
<span className="text-sm font-medium">24.8%</span>
</div>
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-cyan-400 h-2 rounded-full" style={{width: `25%`}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
<p className="text-sm text-slate-400">Session Duration</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold">8m 42s</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
<span className="text-sm text-emerald-400 ml-1">+12%</span>
</div>
</div>
</div>

<div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
<p className="text-sm text-slate-400">Pages / Session</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold">5.2</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
<span className="text-sm text-emerald-400 ml-1">+8%</span>
</div>
</div>
</div>

<div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
<p className="text-sm text-slate-400">DAU / MAU</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold">34%</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
<span className="text-sm text-emerald-400 ml-1">+5%</span>
</div>
</div>
</div>

<div className="bg-slate-800 rounded-xl border border-slate-700 p-4">
<p className="text-sm text-slate-400">User Stickiness</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold">42%</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
<span className="text-sm text-emerald-400 ml-1">+15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-slate-700 mt-12 py-6">
<div className="container mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<p className="text-sm text-slate-400">© 2023 AnalyticsPro. All rights reserved.</p>
</div>
<div className="flex space-x-6">
<a className="text-sm text-slate-400 hover:text-cyan-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-400 hover:text-cyan-400 transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-slate-400 hover:text-cyan-400 transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
