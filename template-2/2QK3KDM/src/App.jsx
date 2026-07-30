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



    tailwind.config = { theme: { extend: { fontFamily: { inter: ['Inter', 'sans-serif'] } } } }
  


    // Simple donut chart for analytics
    const canvas = document.getElementById('donut');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const centerX = 90;
      const centerY = 90;
      const radius = 60;
      const innerRadius = 35;
      
      // Data
      const data = [
        { value: 50.1, color: '#10B981', label: 'TechFlow' },
        { value: 36.2, color: '#3B82F6', label: 'Digital Dynamics' },
        { value: 13.7, color: '#8B5CF6', label: 'Nexus Media' }
      ];
      
      let currentAngle = -Math.PI / 2;
      
      data.forEach(segment => {
        const sliceAngle = (segment.value / 100) * 2 * Math.PI;
        
        // Draw outer arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
        ctx.closePath();
        ctx.fillStyle = segment.color;
        ctx.fill();
        
        currentAngle += sliceAngle;
      });
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
      
<div className="w-full max-w-6xl px-4 mx-auto flex flex-col lg:flex-row gap-8">

<section className="relative mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl w-80 h-[680px] flex flex-col overflow-hidden shadow-2xl border border-gray-700/30">

<header className="flex items-center justify-between px-6 pt-6 pb-2">
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
<h1 className="font-medium text-lg">Clients</h1>
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</header>

<div className="flex-1 mt-4 space-y-3 overflow-y-auto px-6">

<div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-5 space-y-4 hover:bg-gray-800/90 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-search w-[16px] h-[16px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(96, 165, 250)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<span className="font-medium">TechFlow Solutions</span>
</div>
<svg className="text-gray-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="h-px bg-gray-700/50"></div>
<div className="space-y-3">
<div className="">
<p className="text-gray-400 text-xs font-medium tracking-wide">WEB DEVELOPMENT</p>
<p className="text-sm mt-1">$125 per hour</p>
</div>
<div className="">
<p className="text-gray-400 text-xs font-medium tracking-wide">UI/UX DESIGN</p>
<p className="text-sm mt-1">$850 flat fee</p>
</div>
</div>
</div>

<div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-5 space-y-4 hover:bg-gray-800/90 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-user w-[16px] h-[16px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(52, 211, 153)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="font-medium">Digital Dynamics</span>
</div>
<svg className="text-gray-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="h-px bg-gray-700/50"></div>
<div className="space-y-3">
<div>
<p className="text-gray-400 text-xs font-medium tracking-wide">MOBILE DEVELOPMENT</p>
<p className="text-sm mt-1">$95 per hour</p>
</div>
<div className="">
<p className="text-gray-400 text-xs font-medium tracking-wide">CONSULTATION</p>
<p className="text-sm mt-1">$180 flat fee</p>
</div>
</div>
</div>

<div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-5 space-y-4 hover:bg-gray-800/90 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m0 0a5.5 5.5 0 1 0-7.54-7.54A5.5 5.5 0 0 0 19 18Z"></path></svg>
</div>
<span className="font-medium">Nexus Media</span>
</div>
<svg className="text-gray-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="h-px bg-gray-700/50"></div>
<div className="space-y-3">
<div className="">
<p className="text-gray-400 text-xs font-medium tracking-wide">CONTENT STRATEGY</p>
<p className="text-sm mt-1">$75 per hour</p>
</div>
<div>
<p className="text-gray-400 text-xs font-medium tracking-wide">BRAND DESIGN</p>
<p className="text-sm mt-1">$1,200 flat fee</p>
</div>
</div>
</div>
</div>

<nav className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/50 flex justify-around items-center h-20 px-2">
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-calendar w-[20px] h-[20px]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs">Schedule</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-heart w-[20px] h-[20px]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs">Projects</span>
</button>
<button className="flex flex-col items-center gap-1 text-blue-400 py-2 relative">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs">Clients</span>
<div className="absolute -top-1 w-full h-1 bg-blue-400 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-refresh-ccw w-[20px] h-[20px]" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<span className="text-xs">Analytics</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-settings w-[20px] h-[20px]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs">Settings</span>
</button>
</nav>
</section>

<section className="relative mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl w-80 h-[680px] flex flex-col overflow-hidden shadow-2xl border border-gray-700/30">

<header className="flex items-center justify-between px-6 pt-6 pb-2">
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-center">
<h1 className="font-medium text-lg">Analytics</h1>
<p className="text-xs text-gray-400 mt-1">Mar 01 – May 31</p>
</div>
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7,10 12,15 17,10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
</header>

<div className="mx-6 mt-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl h-28 flex items-center justify-center relative overflow-hidden border border-emerald-500/20">
<div className="absolute inset-0 flex">
<div className="w-3/5 bg-emerald-600/20 rounded-l-2xl"></div>
<div className="w-2/5 bg-blue-600/10"></div>
</div>
<div className="relative z-10 text-center">
<h2 className="text-3xl font-medium tracking-tight">$24,750</h2>
<p className="text-xs text-gray-400 mt-1">Total Revenue</p>
</div>
</div>

<div className="mx-6 mt-6 bg-gray-800/70 border border-gray-700/50 rounded-2xl flex-1 flex flex-col">
<header className="flex items-center justify-between px-5 pt-5 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
</div>
<span className="text-sm font-medium">Revenue Breakdown</span>
</div>
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="flex-1 flex items-center justify-center pb-4">
<canvas className="" height="180" id="donut" width="180"></canvas>
</div>
</div>

<div className="mx-6 my-6 rounded-2xl overflow-hidden border border-gray-700/50 bg-gray-800/50">
<table className="w-full text-sm">
<thead className="bg-gray-800/80 text-gray-400 text-xs uppercase tracking-wider">
<tr className="">
<th className="px-4 py-3 font-medium text-left">Client</th>
<th className="px-4 py-3 font-medium text-left">Projects</th>
<th className="px-4 py-3 font-medium text-left">Revenue</th>
<th className="px-4 py-3 font-medium text-left">Share</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-700/50">
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="px-4 py-3 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="font-medium">TechFlow</span>
</td>
<td className="px-4 py-3">8</td>
<td className="px-4 py-3 font-medium">$12,400</td>
<td className="px-4 py-3 text-emerald-400">50.1%</td>
</tr>
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="px-4 py-3 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
<span className="font-medium">Digital Dynamics</span>
</td>
<td className="px-4 py-3">6</td>
<td className="px-4 py-3 font-medium">$8,950</td>
<td className="px-4 py-3 text-blue-400">36.2%</td>
</tr>
<tr className="hover:bg-gray-800/50 transition-colors">
<td className="px-4 py-3 flex items-center gap-3">
<span className="inline-block w-2 h-2 rounded-full bg-purple-400"></span>
<span className="font-medium">Nexus Media</span>
</td>
<td className="px-4 py-3">4</td>
<td className="px-4 py-3 font-medium">$3,400</td>
<td className="px-4 py-3 text-purple-400">13.7%</td>
</tr>
</tbody>
</table>
</div>

<nav className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/50 flex justify-around items-center h-20 px-2">
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-calendar w-[20px] h-[20px]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs">Schedule</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-heart w-[20px] h-[20px]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs">Projects</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs">Clients</span>
</button>
<button className="flex flex-col items-center gap-1 text-blue-400 py-2 relative">
<svg className="lucide lucide-refresh-ccw w-[20px] h-[20px]" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(96, 165, 250)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<span className="text-xs">Analytics</span>
<div className="absolute -top-1 w-full h-1 bg-blue-400 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-settings w-[20px] h-[20px]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs">Settings</span>
</button>
</nav>
</section>

<section className="relative mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl w-80 h-[680px] flex flex-col overflow-hidden shadow-2xl border border-gray-700/30">

<header className="flex items-center justify-between px-6 pt-6 pb-2">
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
</button>
<div className="flex items-center gap-2">
<h1 className="font-medium text-lg">June</h1>
<svg className="text-gray-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="p-2 rounded-xl hover:bg-gray-700/50 transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="httpwww.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</header>

<div className="mx-6 mt-6 bg-gray-800/70 border border-gray-700/50 rounded-2xl p-4">

<div className="grid grid-cols-7 gap-2 mb-4">
<div className="text-xs font-medium text-gray-400 text-center py-2">S</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">M</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">T</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">W</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">T</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">F</div>
<div className="text-xs font-medium text-gray-400 text-center py-2">S</div>
</div>

<div className="grid grid-cols-7 gap-2">
<div className="text-xs text-gray-500 text-center py-2">28</div>
<div className="text-xs text-gray-500 text-center py-2">29</div>
<div className="text-xs text-gray-500 text-center py-2">30</div>
<div className="text-xs text-gray-500 text-center py-2">31</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">1</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">2</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">3</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">4</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">5</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">6</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">7</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">8</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">9</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">10</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">11</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">12</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">13</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">14</div>
<div className="bg-blue-500 text-xs text-white text-center py-2 rounded-lg font-medium">15</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">16</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">17</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">18</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">19</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">20</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">21</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">22</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">23</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">24</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">25</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">26</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">27</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">28</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">29</div>
<div className="text-xs text-white text-center py-2 hover:bg-gray-700/50 rounded-lg transition-colors cursor-pointer">30</div>
<div className="text-xs text-gray-500 text-center py-2">1</div>
</div>
</div>

<div className="mx-6 mt-6 space-y-4 flex-1 overflow-y-auto">
<div className="flex items-center justify-between">
<h3 className="font-medium text-sm">Today's Schedule</h3>
<span className="text-xs text-gray-400">June 15</span>
</div>

<div className="space-y-3">
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="font-medium text-sm">Client Review Meeting</span>
</div>
<span className="text-xs text-gray-400">2:00 PM</span>
</div>
<p className="text-xs text-gray-400 ml-5">TechFlow Solutions - Project milestone review</p>
</div>
<div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="font-medium text-sm">Design Workshop</span>
</div>
<span className="text-xs text-gray-400">4:30 PM</span>
</div>
<p className="text-xs text-gray-400 ml-5">Digital Dynamics - UI/UX brainstorming session</p>
</div>
<div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="font-medium text-sm">Content Strategy</span>
</div>
<span className="text-xs text-gray-400">6:00 PM</span>
</div>
<p className="text-xs text-gray-400 ml-5">Nexus Media - Brand guidelines discussion</p>
</div>
</div>
</div>

<nav className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/50 flex justify-around items-center h-20 px-2">
<button className="flex flex-col items-center gap-1 text-blue-400 py-2 relative">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs">Schedule</span>
<div className="absolute -top-1 w-full h-1 bg-blue-400 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-heart w-[20px] h-[20px]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-xs">Projects</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-search w-[20px] h-[20px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-xs">Clients</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-refresh-ccw w-[20px] h-[20px]" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<span className="text-xs">Analytics</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors py-2">
<svg className="lucide lucide-settings w-[20px] h-[20px]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs">Settings</span>
</button>
</nav>
</section>
</div>



    </>
  );
}
