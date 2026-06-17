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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<aside className="w-72 bg-black border-r border-zinc-800 flex flex-col flex-shrink-0 z-20">

<div className="h-16 flex items-center px-6 border-b border-zinc-900/50">
<div className="flex flex-col leading-none">
<span className="text-base font-semibold text-cyan-400 tracking-tight">SMART</span>
<span className="text-base font-semibold text-white tracking-tight">LOGISTICS</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">

<div className="flex items-center justify-between px-2 py-2 mb-4 hover:bg-zinc-900 rounded-lg cursor-pointer group transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px]">
<i className="w-4 h-4" data-lucide="asterisk"></i>
</div>
<span className="text-zinc-100 font-medium text-base">Walmart, Inc.</span>
</div>
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="chevron-down"></i>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="text-base">Overview</span>
</a>

<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-zinc-100 bg-zinc-900/40 rounded-lg transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5] text-cyan-400" data-lucide="share-2"></i>
<span className="text-base font-medium">Tracking</span>
</a>

<div className="pl-10 pr-2 space-y-1 pt-1">
<a className="flex items-center justify-between py-1.5 text-zinc-100 text-sm" href="#">
<span>My orders</span>
<span className="bg-zinc-800 text-zinc-300 text-xs px-1.5 py-0.5 rounded">23</span>
</a>
<a className="flex items-center justify-between py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm" href="#">
<span>Active routes</span>
</a>
<a className="flex items-center justify-between py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm" href="#">
<span>Popular routes</span>
</a>
<a className="flex items-center justify-between py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm" href="#">
<span>Danger zones</span>
</a>
<a className="flex items-center justify-between py-1.5 text-zinc-500 hover:text-zinc-300 transition-colors text-sm" href="#">
<span>Weather forecast</span>
</a>
</div>
</div>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-all mt-4" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="message-square"></i>
<span className="text-base">Messages</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="credit-card"></i>
<span className="text-base">Payments</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="history"></i>
<span className="text-base">History</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="sparkles"></i>
<span className="text-base">Smart routes</span>
</a>
</nav>

<button className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 rounded-lg text-base shadow-[0_0_15px_-3px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center">
                New order
            </button>
</div>

<div className="p-4 space-y-3 border-t border-zinc-900">
<a className="flex items-center gap-3 px-2 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="settings"></i>
<span className="text-base">Settings</span>
</a>
<a className="flex items-center gap-3 px-2 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="help-circle"></i>
<span className="text-base">Support</span>
</a>
<a className="flex items-center gap-3 px-2 text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="log-out"></i>
<span className="text-base">Logout</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-zinc-950 relative">

<header className="h-16 flex items-center justify-end px-8 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md z-30">
<div className="flex items-center gap-8">
<nav className="flex gap-6 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Prohibited goods</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Partners</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</nav>
<div className="h-6 w-px bg-zinc-800"></div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-zinc-900 rounded-full p-1 border border-zinc-800">
<button className="p-1.5 rounded-full text-zinc-500 hover:text-zinc-300">
<i className="w-4 h-4" data-lucide="sun"></i>
</button>
<button className="p-1.5 rounded-full bg-zinc-800 text-cyan-400 shadow-sm">
<i className="w-4 h-4 fill-current" data-lucide="moon"></i>
</button>
</div>
<button className="relative text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 border border-zinc-700"></div>
</div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-[450px] bg-zinc-950 border-r border-zinc-800 flex flex-col z-20 shadow-2xl">

<div className="p-6 pb-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-xl font-medium text-white tracking-tight">Tracking list</h2>
<div className="flex gap-2 text-zinc-500">
<button className="hover:text-zinc-300"><i className="w-5 h-5" data-lucide="filter"></i></button>
<button className="hover:text-zinc-300"><i className="w-5 h-5" data-lucide="more-vertical"></i></button>
</div>
</div>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700" placeholder="Order ID..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">SF2043892GH</h3>
<span className="text-xs font-semibold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wide">In Transit</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">PVG</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-zinc-500 rotate-90" data-lucide="plane"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">21H</span>
<span className="text-sm font-medium text-zinc-400">JFK</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Shanghai, China</span>
<span className="text-zinc-600 mt-0.5">OCT 15, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>Los Angeles, USA</span>
<span className="text-zinc-600 mt-0.5">DEC 20, 2024</span>
</div>
</div>
</div>

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">SG3840291KR</h3>
<span className="text-xs font-semibold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wide">In Transit</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">INB</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-zinc-500 rotate-90" data-lucide="plane"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">9H</span>
<span className="text-sm font-medium text-zinc-400">JFK</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Mumbai Port, India</span>
<span className="text-zinc-600 mt-0.5">SEP 18, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>New York, USA</span>
<span className="text-zinc-600 mt-0.5">NOV 20, 2024</span>
</div>
</div>
</div>

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">DE9982736BR</h3>
<span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wide">Pending</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">NRT</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-zinc-500" data-lucide="ship"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">14H</span>
<span className="text-sm font-medium text-zinc-400">SYD</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Tokyo, Japan</span>
<span className="text-zinc-600 mt-0.5">OCT 2, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>Sydney, Australia</span>
<span className="text-zinc-600 mt-0.5">DEC 2, 2024</span>
</div>
</div>
</div>

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">FR5678920NL</h3>
<span className="text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wide">Arrived</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">DXB</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-emerald-500" data-lucide="check-circle"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">RTM</span>
<span className="text-sm font-medium text-zinc-400">RTM</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Dubai, UAE</span>
<span className="text-zinc-600 mt-0.5">AUG 10, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>Rotterdam, Netherlands</span>
<span className="text-zinc-600 mt-0.5">OCT 15, 2024</span>
</div>
</div>
</div>

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors">
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">JP8495732JP</h3>
<span className="text-xs font-semibold text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 uppercase tracking-wide">In Transit</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">YOK</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-zinc-500" data-lucide="ship"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">21H</span>
<span className="text-sm font-medium text-zinc-400">ORD</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Yokohama Port</span>
<span className="text-zinc-600 mt-0.5">SEP 22, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>Chicago</span>
<span className="text-zinc-600 mt-0.5">NOV 18, 2024</span>
</div>
</div>
</div>

<div className="px-6 py-5 border-b border-zinc-800/50 hover:bg-zinc-900/30 cursor-pointer group transition-colors relative">

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-800 border border-zinc-700 rounded-full flex items-center p-1 shadow-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">ALL</button>
<button className="p-2 text-zinc-400 hover:text-white"><i className="w-3 h-3" data-lucide="plane"></i></button>
<button className="p-2 text-zinc-400 hover:text-white"><i className="w-3 h-3" data-lucide="ship"></i></button>
<button className="p-2 text-zinc-400 hover:text-white"><i className="w-3 h-3" data-lucide="truck"></i></button>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-base font-semibold text-zinc-100 tracking-wider">AU4561289SG</h3>
<span className="text-xs font-semibold text-red-500 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 uppercase tracking-wide">Delayed</span>
</div>
<div className="flex items-center gap-3 mb-2">
<span className="text-sm font-medium text-zinc-400">DFW</span>
<div className="flex-1 flex items-center gap-2">
<div className="h-px bg-zinc-700 flex-1 relative">
<div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 bg-zinc-950 px-1">
<i className="w-3 h-3 text-red-500" data-lucide="alert-circle"></i>
</div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">9H</span>
<span className="text-sm font-medium text-zinc-400">MEL</span>
</div>
<div className="flex justify-between items-center text-xs text-zinc-500 mt-3">
<div className="flex flex-col">
<span>Dallas, USA</span>
<span className="text-zinc-600 mt-0.5">OCT 12, 2024</span>
</div>
<div className="flex flex-col items-end">
<span>Melbourne, Australia</span>
<span className="text-zinc-600 mt-0.5">DEC 20, 2024</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 relative bg-zinc-900 overflow-hidden">

<div className="absolute inset-0 map-bg opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>

<div className="absolute top-6 left-6 text-zinc-500 text-xs font-mono space-y-1">
<p className="text-zinc-400">OCT 28, 2024</p>
<p>02:48 (UTC)</p>
</div>

<div className="absolute top-6 right-6 flex flex-col gap-2">
<button className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors shadow-lg">
<i className="w-5 h-5" data-lucide="layers"></i>
</button>
<button className="w-10 h-10 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors shadow-lg">
<i className="w-5 h-5" data-lucide="maximize"></i>
</button>
</div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg">
<button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-t-lg transition-colors border-b border-zinc-700">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-b-lg transition-colors">
<i className="w-5 h-5" data-lucide="minus"></i>
</button>
</div>


<div className="absolute top-[35%] left-[25%] text-yellow-500 animate-pulse">
<i className="w-5 h-5 fill-yellow-500/20" data-lucide="triangle-alert"></i>
</div>

<div className="absolute top-[30%] left-[30%] text-zinc-300 rotate-45">
<i className="w-5 h-5 fill-current" data-lucide="plane"></i>
<div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-zinc-500 absolute top-1/2 right-full -translate-y-1/2 opacity-30"></div>
</div>

<div className="absolute top-[45%] left-[20%] w-6 h-6 bg-zinc-800 border border-zinc-600 rounded-full flex items-center justify-center text-xs text-white shadow-lg z-10 hover:scale-110 transition-transform cursor-pointer">
                    3
                </div>

<div className="absolute top-[48%] left-[22%] w-6 h-6 bg-zinc-800 border border-zinc-600 rounded-full flex items-center justify-center text-xs text-white shadow-lg z-10">
                    2
                </div>

<div className="absolute top-[40%] left-[55%] text-zinc-100 -rotate-12 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
<i className="w-6 h-6 fill-zinc-400" data-lucide="plane"></i>

<div className="absolute top-1/2 right-2 w-24 h-[1px] bg-gradient-to-l from-white/50 to-transparent -translate-y-1/2 origin-right rotate-0"></div>
</div>

<div className="absolute top-[38%] left-[62%] text-yellow-500">
<i className="w-4 h-4 fill-yellow-500/20" data-lucide="triangle-alert"></i>
</div>

<div className="absolute top-[60%] left-[60%] text-yellow-500">
<i className="w-4 h-4 fill-yellow-500/20" data-lucide="triangle-alert"></i>
</div>

<div className="absolute top-[42%] left-[60%] w-6 h-6 bg-zinc-800 border border-zinc-600 rounded-full flex items-center justify-center text-xs text-white shadow-lg z-10">
                    3
                </div>

<div className="absolute top-[40%] left-[80%] text-zinc-300 rotate-[100deg]">
<i className="w-5 h-5 fill-current" data-lucide="plane"></i>
</div>

<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-950 to-transparent flex flex-col justify-end px-6 pb-6">

<div className="absolute bottom-6 left-[65%] top-[40%] w-px bg-cyan-400 z-10 flex flex-col items-center">
<div className="w-2 h-2 bg-cyan-400 rounded-full -mt-1 box-content border-2 border-zinc-950"></div>
<div className="mt-auto mb-2 text-[10px] font-bold text-cyan-400 bg-zinc-900/80 px-1 rounded">NOW</div>
</div>

<div className="flex justify-between items-end w-full text-[10px] font-mono text-zinc-600 border-b border-zinc-800 pb-1 relative">

<button className="absolute -left-4 bottom-0 p-1 hover:text-zinc-300"><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="absolute -right-4 bottom-0 p-1 hover:text-zinc-300"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>11:50 AM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
<span className="opacity-0 group-hover:opacity-100 transition-opacity">12:00</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>12:10 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>12:30 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>12:50 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>01:10 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>01:30 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>01:50 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>02:10 PM</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-3 w-px bg-zinc-500"></div>
<span>02:50 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-3 w-px bg-zinc-500"></div>
<span>03:10 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-3 w-px bg-zinc-500"></div>
<span>03:30 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-3 w-px bg-zinc-500"></div>
<span>03:50 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>04:10 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>04:30 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>04:50 PM</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-1 w-px bg-zinc-800"></div>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer hover:text-zinc-400">
<div className="h-2 w-px bg-zinc-800 group-hover:bg-zinc-600"></div>
<span>05:10 PM</span>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
