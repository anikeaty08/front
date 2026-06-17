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



    document.addEventListener('DOMContentLoaded', function() {
      VANTA.NET({
        el: "#vanta-canvas",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3b82f6,
        backgroundColor: 0x111827,
        points: 12,
        maxDistance: 25.00,
        spacing: 18.00,
        showDots: true
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
      
<div className="max-w-7xl mx-auto">

<header className="mb-6 animate-fade-in">
<h1 className="text-2xl md:text-3xl font-bold text-white">Network Infrastructure</h1>
<p className="text-gray-400">Real-time monitoring and analytics</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg animate-blur-in delay-100">
<div className="p-5">
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 mb-2 inline-block">STATUS</span>
<h2 className="text-xl font-semibold text-gray-200 mb-3">Network Health</h2>
<div className="space-y-4 mt-6">
<div className="animate-slide-up delay-200">
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">UPTIME</span>
<span className="text-gray-400 text-xs">99.8%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 rounded-full" style={{width: '99.8%'}}></div>
</div>
</div>
<div className="animate-slide-up delay-300">
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">LATENCY</span>
<span className="text-gray-400 text-xs">24ms</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div className="animate-slide-up delay-400">
<div className="flex justify-between items-center mb-1">
<span className="text-gray-300 text-xs font-medium">BANDWIDTH</span>
<span className="text-gray-400 text-xs">87%</span>
</div>
<div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 rounded-full" style={{width: '87%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg animate-blur-in delay-200">
<div className="h-72 relative" id="vanta-canvas">
<div className="absolute top-4 left-4 z-10">
<span className="px-2 py-1 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs text-gray-400 mb-2 inline-block">GLOBAL VIEW</span>
<h2 className="text-2xl font-bold text-white">Network Topology</h2>
</div>
<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 z-10 animate-fade-in delay-500">
<div className="flex space-x-4 text-xs text-gray-300">
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
<span>Active Nodes</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-blue-400 mr-1.5"></span>
<span>Data Centers</span>
</div>
<div className="flex items-center">
<span className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5"></span>
<span>Edge Points</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg animate-blur-in delay-300">
<div className="p-5">
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 mb-2 inline-block">INFRASTRUCTURE</span>
<h2 className="text-xl font-semibold text-gray-200 mb-4">Data Centers</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-gray-800/50 p-4 rounded-lg animate-fade-in delay-200">
<div className="flex justify-between items-start">
<div>
<h3 className="text-gray-200 font-medium">North America</h3>
<p className="text-gray-400 text-sm">4 locations</p>
</div>
<span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Online</span>
</div>
<div className="mt-3 flex items-center text-xs text-gray-400">
<div className="w-full bg-gray-700 rounded-full h-1">
<div className="bg-green-500 h-1 rounded-full" style={{width: '92%'}}></div>
</div>
<span className="ml-2">92%</span>
</div>
</div>
<div className="bg-gray-800/50 p-4 rounded-lg animate-fade-in delay-300">
<div className="flex justify-between items-start">
<div>
<h3 className="text-gray-200 font-medium">Europe</h3>
<p className="text-gray-400 text-sm">3 locations</p>
</div>
<span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Online</span>
</div>
<div className="mt-3 flex items-center text-xs text-gray-400">
<div className="w-full bg-gray-700 rounded-full h-1">
<div className="bg-green-500 h-1 rounded-full" style={{width: '95%'}}></div>
</div>
<span className="ml-2">95%</span>
</div>
</div>
<div className="bg-gray-800/50 p-4 rounded-lg animate-fade-in delay-400">
<div className="flex justify-between items-start">
<div>
<h3 className="text-gray-200 font-medium">Asia Pacific</h3>
<p className="text-gray-400 text-sm">3 locations</p>
</div>
<span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Maintenance</span>
</div>
<div className="mt-3 flex items-center text-xs text-gray-400">
<div className="w-full bg-gray-700 rounded-full h-1">
<div className="bg-yellow-500 h-1 rounded-full" style={{width: '78%'}}></div>
</div>
<span className="ml-2">78%</span>
</div>
</div>
<div className="bg-gray-800/50 p-4 rounded-lg animate-fade-in delay-500">
<div className="flex justify-between items-start">
<div>
<h3 className="text-gray-200 font-medium">South America</h3>
<p className="text-gray-400 text-sm">2 locations</p>
</div>
<span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Online</span>
</div>
<div className="mt-3 flex items-center text-xs text-gray-400">
<div className="w-full bg-gray-700 rounded-full h-1">
<div className="bg-green-500 h-1 rounded-full" style={{width: '88%'}}></div>
</div>
<span className="ml-2">88%</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-lg animate-blur-in delay-400">
<div className="p-5">
<span className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-400 mb-2 inline-block">ALERTS</span>
<h2 className="text-xl font-semibold text-gray-200 mb-3">Recent Events</h2>
<div className="space-y-3 mt-4">
<div className="border-l-2 border-yellow-500 pl-3 py-1 animate-slide-up delay-200">
<p className="text-gray-300 text-sm font-medium">Latency Spike</p>
<p className="text-gray-400 text-xs">Asia Pacific Region</p>
<p className="text-gray-500 text-xs mt-1">10 minutes ago</p>
</div>
<div className="border-l-2 border-green-500 pl-3 py-1 animate-slide-up delay-300">
<p className="text-gray-300 text-sm font-medium">Maintenance Complete</p>
<p className="text-gray-400 text-xs">EU-West-2 Data Center</p>
<p className="text-gray-500 text-xs mt-1">1 hour ago</p>
</div>
<div className="border-l-2 border-red-500 pl-3 py-1 animate-slide-up delay-400">
<p className="text-gray-300 text-sm font-medium">Security Alert</p>
<p className="text-gray-400 text-xs">Unusual traffic pattern detected</p>
<p className="text-gray-500 text-xs mt-1">3 hours ago</p>
</div>
<div className="border-l-2 border-blue-500 pl-3 py-1 animate-slide-up delay-500">
<p className="text-gray-300 text-sm font-medium">Capacity Upgrade</p>
<p className="text-gray-400 text-xs">NA-East-1 Data Center</p>
<p className="text-gray-500 text-xs mt-1">Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
