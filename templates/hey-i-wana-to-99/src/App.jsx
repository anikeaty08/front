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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-16 md:w-64 border-r border-neutral-800/60 bg-neutral-950 flex flex-col h-full z-20 flex-shrink-0 transition-all duration-300">

<div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-neutral-800/60">
<span className="text-xl tracking-tighter font-medium text-white hidden md:block">NEXUS</span>
<span className="text-xl tracking-tighter font-medium text-white md:hidden">NX</span>
</div>

<nav className="flex-1 py-4 flex flex-col gap-1 px-2 md:px-3">
<a className="flex items-center gap-3 px-2 py-2 md:px-3 md:py-2 bg-neutral-900/80 text-white rounded-md text-sm font-medium transition-colors group" href="#">
<iconify-icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" icon="solar:routing-2-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden md:block">Mesh Map</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 md:px-3 md:py-2 text-neutral-500 hover:text-white hover:bg-neutral-900/50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:chat-round-line-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden md:block">Transmissions</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 md:px-3 md:py-2 text-neutral-500 hover:text-white hover:bg-neutral-900/50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:users-group-two-rounded-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="hidden md:block">Known Nodes</span>
</a>
</nav>

<div className="p-4 border-t border-neutral-800/60 flex flex-col gap-4">
<div className="hidden md:flex items-center justify-between">
<span className="text-xs text-neutral-500 font-medium uppercase tracking-widest">Broadcast</span>

<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="broadcast-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-700 cursor-pointer relative" htmlFor="broadcast-toggle">
<span className="absolute block w-3 h-3 rounded-full bg-white top-[2px] left-[2px] transition-transform duration-200 transform translate-x-4"></span>
</label>
</div>
</div>
<div className="flex items-center justify-center md:justify-start gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 text-xs font-medium border border-cyan-800/50 relative">
                    ME
                    <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-500 rounded-full border-2 border-neutral-950 animate-pulse"></div>
</div>
<div className="hidden md:block">
<div className="text-sm font-medium text-white tracking-tight">Node 0x7A</div>
<div className="text-xs text-neutral-500">Connected (3 peers)</div>
</div>
</div>
</div>
</aside>

<section className="w-72 md:w-80 border-r border-neutral-800/60 bg-neutral-950 flex flex-col h-full flex-shrink-0 z-10 hidden lg:flex">
<div className="h-16 flex items-center justify-between px-5 border-b border-neutral-800/60">
<h1 className="text-lg tracking-tight font-medium text-white">Active Channels</h1>
<button className="text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="p-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" icon="solar:magnifer-linear" style={{fontSize: '1rem'}}></iconify-icon>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-md py-1.5 pl-9 pr-3 text-sm text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-cyan-800 focus:ring-1 focus:ring-cyan-800/50 transition-all" placeholder="Search nodes..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto px-3 pb-3 space-y-1">

<div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/50 cursor-pointer hover:bg-neutral-900 transition-colors group">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
<span className="text-sm font-medium text-neutral-200 group-hover:text-white">Node 0x1B (Local)</span>
</div>
<span className="text-xs text-neutral-600">Just now</span>
</div>
<p className="text-xs text-neutral-500 truncate pl-3.5">Establishing secure handshake.</p>
</div>

<div className="p-3 rounded-lg border border-transparent cursor-pointer hover:bg-neutral-900/50 transition-colors group">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
<span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-200">Sector Alpha Relay</span>
</div>
<span className="text-xs text-neutral-600">12m</span>
</div>
<p className="text-xs text-neutral-500 truncate pl-3.5">Weather data synchronized.</p>
<div className="flex items-center gap-1.5 mt-2 pl-3.5">
<iconify-icon className="text-neutral-600" icon="solar:transfer-horizontal-linear" style={{fontSize: '0.75rem'}}></iconify-icon>
<span className="text-[10px] uppercase tracking-wider text-neutral-600">4 Hops via 0x9F</span>
</div>
</div>
</div>
</section>

<main className="flex-1 bg-neutral-950 relative overflow-hidden flex flex-col">

<div className="absolute top-0 w-full h-16 flex items-center justify-between px-6 bg-gradient-to-b from-neutral-950/90 to-transparent z-10 pointer-events-none">
<div className="flex items-center gap-2 pointer-events-auto">
<div className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 flex items-center gap-2 text-xs font-medium text-neutral-400">
<iconify-icon className="text-cyan-500" icon="solar:radar-linear"></iconify-icon>
                    Local Mesh Frequency: 2.4 GHz (Ad-hoc)
                </div>
</div>
</div>

<div className="flex-1 relative w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(5,5,5,1)_100%)] flex items-center justify-center">

<div className="absolute inset-0 grid-bg opacity-30"></div>

<div className="absolute w-[800px] h-[800px] rounded-full border border-neutral-800/20"></div>
<div className="absolute w-[500px] h-[500px] rounded-full border border-neutral-800/30"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-neutral-700/30"></div>

<div className="absolute w-full h-[1px] bg-neutral-800/20"></div>
<div className="absolute h-full w-[1px] bg-neutral-800/20"></div>

<div className="absolute w-[800px] h-[800px] radar-sweep origin-center pointer-events-none"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">

<line stroke="rgba(6, 182, 212, 0.3)" stroke-dasharray="4 4" strokeWidth="1.5" x1="50%" x2="calc(50% + 120px)" y1="50%" y2="calc(50% - 150px)"></line>

<line stroke="rgba(115, 115, 115, 0.3)" stroke-dasharray="2 4" strokeWidth="1" x1="50%" x2="calc(50% - 180px)" y1="50%" y2="calc(50% + 80px)"></line>

<line stroke="rgba(115, 115, 115, 0.2)" strokeWidth="1" x1="calc(50% + 120px)" x2="calc(50% + 250px)" y1="calc(50% - 150px)" y2="calc(50% - 50px)"></line>
</svg>


<div className="absolute flex flex-col items-center justify-center z-20 group cursor-default">
<div className="w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] relative flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<div className="absolute top-6 flex flex-col items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs text-white font-medium bg-neutral-900 border border-neutral-700 px-2 py-0.5 rounded shadow-lg whitespace-nowrap">Node 0x7A (You)</span>
<span className="text-[10px] text-neutral-500 mt-0.5">Signal: Excellent</span>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center z-20 translate-x-[120px] -translate-y-[150px] group cursor-pointer hover:scale-110 transition-transform">
<div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
<div className="absolute top-4 flex flex-col items-center pointer-events-none">
<span className="text-[10px] text-cyan-100 font-medium tracking-wide bg-neutral-900/80 backdrop-blur-sm border border-cyan-900/50 px-1.5 py-0.5 rounded">0x1B</span>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center z-20 -translate-x-[180px] translate-y-[80px] group cursor-pointer hover:scale-110 transition-transform">
<div className="w-2.5 h-2.5 bg-neutral-500 rounded-full"></div>
<div className="absolute top-4 flex flex-col items-center pointer-events-none">
<span className="text-[10px] text-neutral-400 font-medium tracking-wide bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 px-1.5 py-0.5 rounded">0x4F</span>
</div>
</div>

<div className="absolute flex flex-col items-center justify-center z-20 translate-x-[250px] -translate-y-[50px] group cursor-pointer hover:scale-110 transition-transform">
<div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
<div className="absolute top-3 flex flex-col items-center pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] text-neutral-500 font-medium tracking-wide">0x9F</span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-1.5 rounded-lg z-20 shadow-2xl">
<button aria-label="Zoom Out" className="p-2 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon icon="solar:minus-square-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-[1px] h-4 bg-neutral-700"></div>
<button aria-label="Zoom In" className="p-2 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon icon="solar:add-square-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="w-[1px] h-4 bg-neutral-700"></div>
<button className="px-3 py-1.5 rounded hover:bg-neutral-800 text-xs font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:target-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
                Recenter
            </button>
</div>
</main>

    </>
  );
}
