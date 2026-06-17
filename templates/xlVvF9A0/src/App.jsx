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
      
<div className="iphone-frame">
<div className="iphone-screen">
<div className="notch"></div>
<div className="screen-content bg-gray-50">

<div className="pt-8 px-5 flex justify-between text-xs font-semibold">
<span>9:41</span>
<div className="flex space-x-1">
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L6 22"></path><path d="M10 6L10 22"></path><path d="M14 12L14 22"></path><path d="M18 16L18 22"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10L21 10"></path><path d="M18 14L21 14"></path><path d="M18 18L21 18"></path><path d="M18 6L21 6"></path><path d="M3 18L7 18 10 6 17 6"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H3.77778C2.79594 7 2 7.74619 2 8.66667V15.3333C2 16.2538 2.79594 17 3.77778 17H7"></path>
<path d="M17 7H20.2222C21.2041 7 22 7.74619 22 8.66667V15.3333C22 16.2538 21.2041 17 20.2222 17H17"></path>
<path d="M7 7L7 17"></path>
<path d="M17 7L17 17"></path>
<path d="M7 12L17 12"></path>
</svg>
</span>
</div>
</div>

<header className="px-6 pt-3 pb-4">
<div className="flex items-center">
<button className="mr-3 p-2 rounded-full bg-gray-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="M12 19l-7-7 7-7"></path>
</svg>
</button>
<h1 className="text-2xl font-bold text-gray-900">Smart Lights</h1>
</div>
</header>

<main className="px-6">

<div className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Phillips Hue</h3>
<p className="text-xs text-gray-500">Connected • 5 bulbs</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-2">Room Preview</h3>
<div className="room-preview">
<img alt="Living room preview" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="room-preview-overlay"></div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-gray-700">Brightness</h3>
<span className="text-sm font-medium text-gray-900">80%</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500 mb-4" max="100" min="0" type="range" value="80"/>
<div className="flex justify-between text-xs text-gray-500">
<button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</button>
<button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>
</button>
<button className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<path d="M12 1v2"></path>
<path d="M12 21v2"></path>
<path d="M4.22 4.22l1.42 1.42"></path>
<path d="M18.36 18.36l1.42 1.42"></path>
<path d="M1 12h2"></path>
<path d="M21 12h2"></path>
<path d="M4.22 19.78l1.42-1.42"></path>
<path d="M18.36 5.64l1.42-1.42"></path>
</svg>
</button>
<button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
<line x1="6" x2="6" y1="1" y2="4"></line>
<line x1="10" x2="10" y1="1" y2="4"></line>
<line x1="14" x2="14" y1="1" y2="4"></line>
</svg>
</button>
<button className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18a5 5 0 0 0-10 0"></path>
<line x1="12" x2="12" y1="2" y2="9"></line>
<line x1="4.22" x2="5.64" y1="10.22" y2="11.64"></line>
<line x1="1" x2="3" y1="18" y2="18"></line>
<line x1="21" x2="23" y1="18" y2="18"></line>
<line x1="18.36" x2="19.78" y1="11.64" y2="10.22"></line>
<line x1="23" x2="1" y1="22" y2="22"></line>
<polyline points="8 6 12 2 16 6"></polyline>
</svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-700 mb-4">Color</h3>
<div className="color-wheel mb-6">
<div className="color-wheel-inner">
<span>Warm White</span>
</div>
<div className="color-selector" style={{backgroundColor: '#ffcc33'}}></div>
</div>

<div className="grid grid-cols-6 gap-2">
<button className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-yellow-200 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-orange-300 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-red-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-pink-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-purple-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-indigo-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-blue-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-cyan-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-teal-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-green-400 border-2 border-gray-300 mx-auto"></button>
<button className="w-10 h-10 rounded-full bg-lime-400 border-2 border-gray-300 mx-auto"></button>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-3">Scenes</h3>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white rounded-2xl p-3 shadow-sm">
<div className="h-24 rounded-xl mb-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
<p className="text-sm font-medium text-gray-800">Relax</p>
<p className="text-xs text-gray-500">Soft blue light</p>
</div>
<div className="bg-white rounded-2xl p-3 shadow-sm">
<div className="h-24 rounded-xl mb-2 bg-gradient-to-r from-amber-300 to-orange-400"></div>
<p className="text-sm font-medium text-gray-800">Reading</p>
<p className="text-xs text-gray-500">Warm comfortable</p>
</div>
<div className="bg-white rounded-2xl p-3 shadow-sm">
<div className="h-24 rounded-xl mb-2 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
<p className="text-sm font-medium text-gray-800">Focus</p>
<p className="text-xs text-gray-500">Bright cool light</p>
</div>
<div className="bg-white rounded-2xl p-3 shadow-sm">
<div className="h-24 rounded-xl mb-2 bg-gradient-to-r from-violet-500 to-purple-600"></div>
<p className="text-sm font-medium text-gray-800">Nightlight</p>
<p className="text-xs text-gray-500">Dim purple glow</p>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-3">Individual Lights</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Ceiling Light 1</h4>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-3">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="75"/>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Ceiling Light 2</h4>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-3">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="75"/>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Floor Lamp</h4>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-3">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="90"/>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Table Lamp</h4>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-3">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="60"/>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">TV Backlight</h4>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-3">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" disabled="" max="100" min="0" type="range" value="0"/>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-gray-700">Schedules</h3>
<button className="text-xs font-medium text-blue-600">+ Add New</button>
</div>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Morning Routine</h4>
<p className="text-xs text-gray-500">Weekdays • 6:30 AM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="text-xs text-gray-600 bg-gray-50 p-2 rounded-md">
                  Gradually turns on lights to 70% brightness with warm white color
                </div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Evening Mode</h4>
<p className="text-xs text-gray-500">Every day • 7:00 PM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="text-xs text-gray-600 bg-gray-50 p-2 rounded-md">
                  Switches to "Relax" scene with dimmed blue lighting
                </div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Night Time</h4>
<p className="text-xs text-gray-500">Every day • 11:00 PM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="text-xs text-gray-600 bg-gray-50 p-2 rounded-md">
                  Turns off all lights except nightlight at 5% brightness
                </div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-3">Settings</h3>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<span className="text-sm text-gray-800">Device Settings</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<circle cx="12" cy="12" r="8"></circle>
</svg>
</div>
<span className="text-sm text-gray-800">Power Saving</span>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="4.93" x2="19.07" y1="4.93" y2="19.07"></line>
</svg>
</div>
<span className="text-sm text-gray-800">Reset All Lights</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[40px]">
<div className="flex justify-between max-w-md mx-auto">
<button className="flex flex-col items-center text-blue-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span className="text-xs mt-1">Devices</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-xs mt-1">Security</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
<span className="text-xs mt-1">Settings</span>
</button>
</div>
</nav>
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
