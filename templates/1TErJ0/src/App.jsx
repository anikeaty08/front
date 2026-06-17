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
<div className="mx-auto text-sm text-gray-600 font-medium">Drawing App</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-[240px] bg-[#101010] p-4 overflow-y-auto border-r border-[#252525]">

<div className="mb-6">
<h1 className="text-white text-xl font-medium">Canvas</h1>
<p className="text-gray-400 text-sm">New Drawing</p>
</div>

<div className="mb-6">
<h3 className="text-gray-300 font-medium mb-2 text-sm">Tools</h3>
<div className="grid grid-cols-2 gap-2">
<button className="bg-[#1a1a1a] p-3 rounded-xl border border-indigo-500 flex flex-col items-center">
<svg className="w-5 h-5 text-indigo-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Brush</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Shape</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Edit</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Add</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Select</span>
</button>
<button className="bg-[#1a1a1a] p-3 rounded-xl flex flex-col items-center">
<svg className="w-5 h-5 text-gray-400 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs text-gray-400">Erase</span>
</button>
</div>
</div>

<div className="w-full bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-[#252525] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#252525]">
<h3 className="text-gray-200 font-medium text-sm">Color Palette</h3>
</div>
<div className="p-4">
<div className="flex flex-wrap gap-2 mb-4">
<div className="w-7 h-7 rounded-full bg-black border-2 border-white"></div>
<div className="w-7 h-7 rounded-full bg-white border border-gray-300"></div>
<div className="w-7 h-7 rounded-full bg-red-500"></div>
<div className="w-7 h-7 rounded-full bg-orange-500"></div>
<div className="w-7 h-7 rounded-full bg-yellow-500"></div>
<div className="w-7 h-7 rounded-full bg-green-500"></div>
<div className="w-7 h-7 rounded-full bg-blue-500"></div>
<div className="w-7 h-7 rounded-full bg-indigo-500"></div>
</div>
<div className="mb-4">
<div className="relative h-4 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-8 border-2 border-white rounded-full bg-green-500 -mt-2"></div>
</div>
</div>
<div className="space-y-3">
<div className="bg-[#212121] rounded-lg p-2">
<p className="text-xs text-gray-500 mb-1">Opacity</p>
<div className="h-1 bg-[#333] rounded-full">
<div className="h-1 w-3/4 bg-indigo-500 rounded-full"></div>
</div>
</div>
<div className="bg-[#212121] rounded-lg p-2">
<p className="text-xs text-gray-500 mb-1">Size</p>
<div className="h-1 bg-[#333] rounded-full">
<div className="h-1 w-1/2 bg-indigo-500 rounded-full"></div>
</div>
</div>
<div className="bg-[#212121] rounded-lg p-2">
<p className="text-xs text-gray-500 mb-1">Hardness</p>
<div className="h-1 bg-[#333] rounded-full">
<div className="h-1 w-1/4 bg-indigo-500 rounded-full"></div>
</div>
</div>
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
<button className="text-gray-400 hover:text-white">Help</button>
</div>
<div className="flex space-x-2">
<button className="bg-[#1c1c1c] p-2 rounded-md">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="bg-[#1c1c1c] p-2 rounded-md">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>

<div className="flex-1 p-6 flex items-center justify-center">
<div className="w-full max-w-3xl aspect-[4/3] bg-white rounded-lg shadow-lg relative">

<div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 rounded-full border-2 border-blue-500"></div>
<div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 rounded-lg border-2 border-red-500"></div>
<div className="absolute top-1/2 left-1/2 w-1/4 h-1/4 bg-yellow-200 rounded-md"></div>

<div className="absolute top-[45%] left-[55%] w-3 h-3 rounded-full border-2 border-black bg-transparent"></div>
</div>
</div>
</div>

<div className="w-[220px] bg-[#101010] p-4 overflow-y-auto border-l border-[#252525]">
<div className="mb-4 flex justify-between items-center">
<h3 className="text-gray-300 font-medium text-sm">Layers</h3>
<button className="text-indigo-400 text-xs px-2 py-1 bg-[#1a1a1a] rounded-md">Add New</button>
</div>
<div className="divide-y divide-[#252525] bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#252525]">
<div className="p-3 flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 bg-[#252525] rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-sm text-gray-300">Background</p>
</div>
<div className="w-6 h-3 bg-white rounded-sm"></div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 bg-[#252525] rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-sm text-gray-300">Shapes</p>
</div>
<div className="w-6 h-3 bg-yellow-200 rounded-sm"></div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center">
<div className="w-6 h-6 bg-indigo-500 rounded mr-2 flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<p className="text-sm text-gray-300">Brush Strokes</p>
</div>
<div className="w-6 h-3 bg-blue-500 rounded-sm"></div>
</div>
</div>
<div className="mt-6">
<h3 className="text-gray-300 font-medium mb-2 text-sm">Properties</h3>
<div className="bg-[#1a1a1a] rounded-lg p-3 border border-[#252525]">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-400">Position</span>
<span className="text-xs text-gray-300">X: 450 Y: 320</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-400">Size</span>
<span className="text-xs text-gray-300">W: 200 H: 150</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Rotation</span>
<span className="text-xs text-gray-300">0°</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#101010] h-6 border-t border-[#252525] flex items-center px-4 justify-between">
<div className="text-xs text-gray-400">Canvas: 1200 × 900 px</div>
<div className="text-xs text-gray-400">Zoom: 100%</div>
</div>
</div>

    </>
  );
}
