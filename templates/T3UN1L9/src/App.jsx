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
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] },
      colors: { brand:'#000000' },
      borderRadius: { '54': '54px' }
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
      
<div className="rounded-[54px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_6px_0_rgba(10,37,64,0.35)] bg-[#f6f9fc] p-2 w-[375px] h-[812px]">
<div className="phone-screen py-8">

<div className="sticky top-0 z-10 bg-white/95 border-gray-200 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mountain lucide-locate-fixed w-[20px] h-[20px]" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<h1 className="text-lg font-medium text-black tracking-tight">Trail Progress</h1>
</div>
<span className="px-2 py-1 bg-gray-100 text-black text-xs rounded-md border">Level 12</span>
</div>
</div>

<div className="space-y-6 pt-6 pr-4 pb-6 pl-4">

<div className="bg-black rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
<svg className="text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path className="" d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
</div>
<div className="flex-1">
<h3 className="font-medium text-white">Monthly Challenge</h3>
<p className="text-sm text-gray-300">December 2023</p>
</div>
</div>
<div className="grid grid-cols-3 gap-3 text-center">
<div className="bg-white/10 rounded-lg p-3">
<div className="text-xl font-semibold text-white">18</div>
<div className="text-xs text-gray-300">Trails</div>
</div>
<div className="bg-white/10 rounded-lg p-3">
<div className="text-xl font-semibold text-white">247</div>
<div className="text-xs text-gray-300">Miles</div>
</div>
<div className="bg-white/10 rounded-lg p-3">
<div className="text-xl font-semibold text-white">28</div>
<div className="text-xs text-gray-300">Hours</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl pt-4 pr-4 pb-4 pl-4 border border-gray-200">
<div className="flex items-center gap-2 mb-4">
<svg className="text-black" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<h2 className="text-lg font-medium text-black">Current Goals</h2>
</div>
<div className="space-y-4">
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-700">Weekly Distance</span>
<span className="text-black font-medium">85%</span>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-black rounded-full"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-700">Peak Challenge</span>
<span className="text-black font-medium">3/5</span>
</div>
<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-black rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl pt-4 pr-4 pb-4 pl-4 border border-gray-200">
<h2 className="text-lg font-medium text-black mb-4">Recent Hikes</h2>
<div className="space-y-3">
<div className="flex items-center justify-between py-2">
<div className="">
<div className="text-sm font-medium text-gray-900">Eagle Peak Trail</div>
<div className="text-xs text-gray-500">Dec 15, 2023</div>
</div>
<span className="px-2 py-1 bg-black text-white text-xs rounded">Completed</span>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-200">
<div>
<div className="text-sm font-medium text-gray-900">Forest Loop</div>
<div className="text-xs text-gray-500">Dec 12, 2023</div>
</div>
<span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">Easy</span>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-200">
<div>
<div className="text-sm font-medium text-gray-900">Mountain Ridge</div>
<div className="text-xs text-gray-500">Dec 8, 2023</div>
</div>
<span className="px-2 py-1 bg-gray-800 text-white text-xs rounded">Hard</span>
</div>
<div className="flex items-center justify-between py-2 border-t border-gray-200">
<div>
<div className="text-sm font-medium text-gray-900">Riverside Walk</div>
<div className="text-xs text-gray-500">Dec 5, 2023</div>
</div>
<span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">Easy</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<svg className="text-black" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
<h3 className="text-sm font-medium text-black">Trails</h3>
</div>
<div className="text-2xl font-light text-black mb-1">156</div>
<div className="text-xs text-gray-500">Total Completed</div>
</div>
<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<svg className="text-black" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9,22 9,12 15,12 15,22"></polyline></svg>
<h3 className="text-sm font-medium text-black">Peaks</h3>
</div>
<div className="text-2xl font-light text-black mb-1">42</div>
<div className="text-xs text-gray-500">Summits Reached</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center gap-2 mb-4">
<svg className="text-black" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 3v3a2 2 0 0 1-2 2H3"></path><path d="M21 8h-3a2 2 0 0 1-2-2V3"></path><path d="M3 16h3a2 2 0 0 1 2 2v3"></path><path d="M16 21v-3a2 2 0 0 1 2-2h3"></path></svg>
<h2 className="text-lg font-medium text-black">Trail Types</h2>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-gray-300 rounded-full"></div>
<span className="text-sm text-gray-700">Easy Trails</span>
</div>
<span className="text-sm font-medium text-black">67</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-gray-600 rounded-full"></div>
<span className="text-sm text-gray-700">Moderate Trails</span>
</div>
<span className="text-sm font-medium text-black">52</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-black rounded-full"></div>
<span className="text-sm text-gray-700">Hard Trails</span>
</div>
<span className="text-sm font-medium text-black">37</span>
</div>
</div>
</div>

<div className="h-4"></div>
</div>
</div>
</div>

    </>
  );
}
