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



    document.querySelectorAll('button[class*="border-b-2"]').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('button[class*="border-b-2"]').forEach(t => {
          t.classList.remove('border-white', 'text-white');
          t.classList.add('border-transparent', 'text-zinc-500');
        });
        tab.classList.add('border-white', 'text-white');
        tab.classList.remove('border-transparent', 'text-zinc-500');
      });
    });

    document.querySelectorAll('th[class*="cursor-pointer"]').forEach(header => {
      header.addEventListener('click', () => {
        const icon = header.querySelector('.sort-icon');
        document.querySelectorAll('.sort-icon').forEach(i => {
          if (i !== icon) i.classList.remove('sort-active');
        });
        icon.classList.toggle('sort-active');
        document.querySelector('tbody').classList.add('fade-in');
        setTimeout(() => document.querySelector('tbody').classList.remove('fade-in'), 300);
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
      
<div className="max-w-6xl mx-auto">
<div className="mb-8 flex items-center justify-between">
<h1 className="text-xl font-semibold text-white">Projects</h1>
<button className="px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">New Project</button>
</div>
<div className="flex border-b border-zinc-800 mb-6">
<button className="px-4 py-2 text-sm font-medium border-b-2 border-white mr-6 text-white">All</button>
<button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent mr-6 text-zinc-500 hover:text-zinc-300">Active</button>
<button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-300">Completed</button>
</div>
<div className="rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-zinc-800">
<div className="relative">
<input className="py-1.5 px-3 pl-8 bg-zinc-900 border border-zinc-800 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700 w-64" placeholder="Search projects..." type="text" />
<svg className="w-4 h-4 absolute left-2.5 top-2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<button className="py-1.5 px-3 bg-zinc-900 rounded-md text-sm font-medium border border-zinc-800 hover:bg-zinc-800">Filter</button>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="border-b border-zinc-800 bg-zinc-950">
<th className="py-3 px-4 text-left text-xs font-semibold tracking-wider text-zinc-400 relative cursor-pointer">
<div className="flex items-center">
<span>NAME</span>
<svg className="sort-icon ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="resizer"></div>
</th>
<th className="py-3 px-4 text-left text-xs font-semibold tracking-wider text-zinc-400 relative cursor-pointer">
<div className="flex items-center">
<span>STATUS</span>
<svg className="sort-icon ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="resizer"></div>
</th>
<th className="py-3 px-4 text-left text-xs font-semibold tracking-wider text-zinc-400 relative cursor-pointer">
<div className="flex items-center">
<span>OWNER</span>
<svg className="sort-icon ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="resizer"></div>
</th>
<th className="py-3 px-4 text-right text-xs font-semibold tracking-wider text-zinc-400 relative cursor-pointer">
<div className="flex items-center justify-end">
<span>BUDGET</span>
<svg className="sort-icon ml-1 w-4 h-4 sort-active" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="resizer"></div>
</th>
<th className="py-3 px-4 text-right text-xs font-semibold tracking-wider text-zinc-400 relative cursor-pointer">
<div className="flex items-center justify-end">
<span>DEADLINE</span>
<svg className="sort-icon ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="resizer"></div>
</th>
</tr>
</thead>
<tbody>

<tr className="border-l-2 border-l-white bg-zinc-900/20 border-b border-zinc-800 hover:bg-zinc-800/20">
<td className="py-3 px-4 text-sm">
<div className="font-normal">Website Redesign</div>
<div className="text-xs text-zinc-500">Design Team</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-900/20 text-emerald-400">Active</span>
</td>
<td className="py-3 px-4 text-sm">Sarah Johnson</td>
<td className="py-3 px-4 text-sm text-right">$12,500</td>
<td className="py-3 px-4 text-sm text-right">Oct 15, 2023</td>
</tr>
<tr className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/10">
<td className="py-3 px-4 text-sm">
<div className="font-normal">Mobile App Development</div>
<div className="text-xs text-zinc-500">Engineering</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-900/20 text-amber-400">In Progress</span>
</td>
<td className="py-3 px-4 text-sm">Alex Chen</td>
<td className="py-3 px-4 text-sm text-right">$45,000</td>
<td className="py-3 px-4 text-sm text-right">Dec 31, 2023</td>
</tr>
<tr className="bg-zinc-900/10 border-b border-zinc-800 hover:bg-zinc-900/20">
<td className="py-3 px-4 text-sm">
<div className="font-normal">Brand Strategy</div>
<div className="text-xs text-zinc-500">Marketing</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-900/20 text-blue-400">Planning</span>
</td>
<td className="py-3 px-4 text-sm">Maya Rodriguez</td>
<td className="py-3 px-4 text-sm text-right">$18,750</td>
<td className="py-3 px-4 text-sm text-right">Nov 20, 2023</td>
</tr>
<tr className="bg-zinc-950 border-b border-zinc-800 hover:bg-zinc-900/10">
<td className="py-3 px-4 text-sm">
<div className="font-normal">Data Migration</div>
<div className="text-xs text-zinc-500">IT Operations</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-rose-900/20 text-rose-400">Blocked</span>
</td>
<td className="py-3 px-4 text-sm">Thomas Wilson</td>
<td className="py-3 px-4 text-sm text-right">$32,000</td>
<td className="py-3 px-4 text-sm text-right">Sep 30, 2023</td>
</tr>
<tr className="bg-zinc-900/10 border-b border-zinc-800 hover:bg-zinc-900/20">
<td className="py-3 px-4 text-sm">
<div className="font-normal">Security Audit</div>
<div className="text-xs text-zinc-500">Security Team</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400">Completed</span>
</td>
<td className="py-3 px-4 text-sm">Olivia Park</td>
<td className="py-3 px-4 text-sm text-right">$8,500</td>
<td className="py-3 px-4 text-sm text-right">Aug 15, 2023</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-4 py-3 border-t border-zinc-800">
<div className="text-xs text-zinc-500">
          Showing 1-5 of 25 items
        </div>
<div className="flex items-center space-x-1">
<button className="p-1 rounded hover:bg-zinc-900">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="px-3 py-1 text-xs font-medium rounded bg-white text-black">1</button>
<button className="px-3 py-1 text-xs font-medium rounded hover:bg-zinc-900">2</button>
<button className="px-3 py-1 text-xs font-medium rounded hover:bg-zinc-900">3</button>
<button className="p-1 rounded hover:bg-zinc-900">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
