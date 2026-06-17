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
      
<div className="w-[900px] h-[650px] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">

<div className="bg-[#f5f5f5] h-10 border-b border-gray-300 flex items-center px-3 relative">
<div className="flex space-x-2 absolute left-3">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="mx-auto text-sm text-gray-600 font-medium">Screen Design</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-[240px] bg-[#101010] p-4 overflow-y-auto border-r border-[#252525]">

<div className="mb-6">
<h1 className="text-white text-xl font-medium">Components</h1>
<p className="text-gray-400 text-sm">Website Design</p>
</div>

<div className="mb-6">
<h3 className="text-gray-300 font-medium mb-2 text-sm">Elements</h3>
<div className="grid grid-cols-2 gap-2">
<button className="bg-[#1a1a1a] p-3 rounded-xl border border-indigo-500 flex flex-col items-center">
<svg className="w-5 h-5 text-indigo-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Layout</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Text</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Image</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Button</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Input</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Menu</span>
</button>
</div>
</div>

<div className="w-full bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-[#252525] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#252525]">
<h3 className="text-gray-200 font-medium text-sm">UI Components</h3>
</div>
<div className="p-4 space-y-3">
<div className="bg-[#212121] rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 bg-[#2a2a2a] rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-xs text-gray-300">Navigation Bar</p>
</div>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="bg-[#212121] rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 bg-[#2a2a2a] rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-xs text-gray-300">Card Component</p>
</div>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="bg-[#212121] rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 bg-[#2a2a2a] rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-xs text-gray-300">Modal Dialog</p>
</div>
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-[#1c1c1c] flex flex-col">

<div className="bg-[#101010] border-b border-[#252525] h-12 flex items-center px-4 justify-between">
<div className="flex space-x-4">
<button className="text-gray-400 hover:text-white">File</button>
<button className="text-gray-400 hover:text-white">Edit</button>
<button className="text-gray-400 hover:text-white">View</button>
<button className="text-gray-400 hover:text-white">Prototype</button>
</div>
<div className="flex space-x-2">
<button className="bg-[#1c1c1c] p-2 rounded-md">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">Export</button>
</div>
</div>

<div className="flex-1 p-6 flex items-center justify-center">
<div className="w-full max-w-xs aspect-[9/16] bg-white rounded-lg shadow-lg relative">

<div className="absolute top-0 left-0 w-full h-14 bg-indigo-600 flex items-center px-4">
<div className="text-white font-medium">App Header</div>
</div>
<div className="absolute top-16 left-0 w-full px-4">
<div className="w-3/4 h-6 bg-gray-200 rounded-md mb-2"></div>
<div className="w-full h-4 bg-gray-200 rounded-md mb-1"></div>
<div className="w-full h-4 bg-gray-200 rounded-md mb-1"></div>
<div className="w-2/3 h-4 bg-gray-200 rounded-md mb-4"></div>
<div className="w-full h-40 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
<svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="flex space-x-2 mb-4">
<div className="w-1/2 h-8 bg-indigo-600 rounded-md"></div>
<div className="w-1/2 h-8 bg-gray-200 rounded-md"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-16 bg-gray-100 border-t border-gray-300 flex items-center justify-around px-4">
<div className="w-10 h-10 rounded-full bg-gray-300"></div>
<div className="w-10 h-10 rounded-full bg-gray-300"></div>
<div className="w-10 h-10 rounded-full bg-indigo-600"></div>
<div className="w-10 h-10 rounded-full bg-gray-300"></div>
</div>
</div>
</div>
</div>

<div className="w-[220px] bg-[#101010] p-4 overflow-y-auto border-l border-[#252525]">
<div className="mb-4 flex justify-between items-center">
<h3 className="text-gray-300 font-medium text-sm">Properties</h3>
<button className="text-indigo-400 text-xs px-2 py-1 bg-[#1a1a1a] rounded-md">Reset</button>
</div>
<div className="divide-y divide-[#252525] bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#252525] mb-4">
<div className="p-3">
<p className="text-xs text-gray-400 mb-2">Dimensions</p>
<div className="flex space-x-2">
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">W</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1 text-center" type="text" value="360"/>
</div>
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">H</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1 text-center" type="text" value="640"/>
</div>
</div>
</div>
<div className="p-3">
<p className="text-xs text-gray-400 mb-2">Position</p>
<div className="flex space-x-2">
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">X</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1 text-center" type="text" value="0"/>
</div>
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">Y</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1 text-center" type="text" value="0"/>
</div>
</div>
</div>
<div className="p-3">
<p className="text-xs text-gray-400 mb-2">Appearance</p>
<div className="space-y-2">
<div>
<p className="text-[10px] text-gray-500 mb-1">Fill</p>
<div className="flex items-center">
<div className="w-6 h-6 bg-indigo-600 rounded mr-2"></div>
<input className="flex-1 bg-[#252525] rounded text-xs text-white p-1" type="text" value="#4F46E5"/>
</div>
</div>
<div>
<p className="text-[10px] text-gray-500 mb-1">Border</p>
<div className="flex items-center">
<div className="w-6 h-6 border border-gray-400 rounded mr-2"></div>
<input className="flex-1 bg-[#252525] rounded text-xs text-white p-1" type="text" value="1px solid"/>
</div>
</div>
<div>
<p className="text-[10px] text-gray-500 mb-1">Radius</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1" type="text" value="8px"/>
</div>
</div>
</div>
</div>
<div className="mb-4">
<h3 className="text-gray-300 font-medium mb-2 text-sm">Typography</h3>
<div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#252525]">
<div className="space-y-2">
<div>
<p className="text-[10px] text-gray-500 mb-1">Font</p>
<select className="w-full bg-[#252525] rounded text-xs text-white p-1">
<option>Inter</option>
</select>
</div>
<div className="flex space-x-2">
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">Size</p>
<input className="w-full bg-[#252525] rounded text-xs text-white p-1 text-center" type="text" value="16px"/>
</div>
<div className="flex-1">
<p className="text-[10px] text-gray-500 mb-1">Weight</p>
<select className="w-full bg-[#252525] rounded text-xs text-white p-1">
<option>Medium</option>
</select>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#101010] h-6 border-t border-[#252525] flex items-center px-4 justify-between">
<div className="text-xs text-gray-400">Mobile - 360 × 640</div>
<div className="text-xs text-gray-400">Zoom: 100%</div>
</div>
</div>

    </>
  );
}
