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
      
<div className="flex flex-col md:flex-row gap-6 items-start">

<div className="w-64 h-[460px] bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 flex flex-col">

<div className="p-4 border-b border-gray-700/70">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-md bg-blue-500/90 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
</svg>
</div>
<div>
<h3 className="text-base font-medium text-white">CloudPanel</h3>
<p className="text-xs text-gray-400">Infrastructure Control</p>
</div>
</div>
</div>

<div className="p-3 flex-1 overflow-y-auto">
<nav className="space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gray-700/70 text-white group" href="#">
<svg className="h-5 w-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
<span className="text-sm">Overview</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 text-gray-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
</svg>
<span className="text-sm">Cloud Services</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 text-gray-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm">API Endpoints</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 text-gray-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm">Monitoring</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 text-gray-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-1-1H6v-1h2l2.257-2.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm">Security</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 text-gray-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm">Settings</span>
</a>
</nav>

<div className="mt-6 bg-gray-700/30 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-300">System Status</span>
<div className="flex items-center space-x-1">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs text-green-400">Healthy</span>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-400 text-xs">CPU Usage</span>
<span className="text-gray-400 text-xs">24%</span>
</div>
<div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '24%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-400 text-xs">Memory</span>
<span className="text-gray-400 text-xs">62%</span>
</div>
<div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 rounded-full" style={{width: '62%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-gray-400 text-xs">Network</span>
<span className="text-gray-400 text-xs">3.2 Gbps</span>
</div>
<div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-700/70">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="relative">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-gray-800"></div>
</div>
<div>
<p className="text-xs font-medium text-white">Alex Morgan</p>
<p className="text-xs text-gray-400">DevOps Engineer</p>
</div>
</div>
<button className="text-gray-400 hover:text-white p-1">
<svg className="h-4 w-4" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="w-16 h-[460px] bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-gray-700/50 flex flex-col">

<div className="p-3 border-b border-gray-700/70 flex justify-center">
<div className="w-8 h-8 rounded-md bg-blue-500/90 flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
</svg>
</div>
</div>

<div className="p-2 flex-1 overflow-y-auto">
<nav className="space-y-1">
<a className="flex items-center justify-center p-2 rounded-lg bg-gray-700/70 text-white group" href="#">
<svg className="h-5 w-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
</svg>
</a>
<a className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
</svg>
</a>
<a className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-1-1H6v-1h2l2.257-2.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="flex items-center justify-center p-2 rounded-lg text-gray-400 hover:bg-gray-700/50 hover:text-white transition group" href="#">
<svg className="h-5 w-5 group-hover:text-blue-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" fill-rule="evenodd"></path>
</svg>
</a>
</nav>

<div className="mt-6 flex flex-col items-center space-y-3">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-green-400 mb-1"></div>
<span className="text-[10px] text-gray-400">CPU</span>
<span className="text-[10px] text-gray-300">24%</span>
</div>
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-purple-400 mb-1"></div>
<span className="text-[10px] text-gray-400">MEM</span>
<span className="text-[10px] text-gray-300">62%</span>
</div>
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-teal-400 mb-1"></div>
<span className="text-[10px] text-gray-400">NET</span>
<span className="text-[10px] text-gray-300">3.2G</span>
</div>
</div>
</div>

<div className="p-3 border-t border-gray-700/70 flex justify-center">
<div className="relative">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-green-400 border-2 border-gray-800"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
