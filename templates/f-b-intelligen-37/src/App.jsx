import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: '#0F2847',
gold: '#E8A838',
cream: '#FAF7F2',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-navy/10 bg-white flex flex-col justify-between shrink-0 hidden md:flex">
<div>

<div className="h-16 flex items-center px-6 border-b border-navy/5">
<span className="text-lg tracking-tighter text-navy font-medium">JAVARA</span>
</div>

<nav className="p-4 space-y-1">
<div className="text-xs text-navy/40 font-medium mb-2 px-2 uppercase tracking-widest mt-2">Insights</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-navy/5 text-navy font-medium transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                    Loyalty Members
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shop-2-linear" strokeWidth="1.5"></iconify-icon>
                    Multi-Outlet View
                </a>
<div className="text-xs text-navy/40 font-medium mb-2 px-2 uppercase tracking-widest mt-6">Actions</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                    AI Content Gen
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
                    Menu Optimizer
                </a>
<div className="text-xs text-navy/40 font-medium mb-2 px-2 uppercase tracking-widest mt-6">Data</div>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-navy/60 hover:text-navy hover:bg-navy/5 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
                        CSV Upload
                    </div>
<span className="bg-gold/10 text-gold text-xs px-1.5 py-0.5 rounded font-medium">Req</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-navy/5">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-navy/5 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center text-navy font-medium">JD</div>
<div className="flex-1 overflow-hidden">
<div className="text-sm font-medium truncate">Kopi Kenangan</div>
<div className="text-xs text-navy/50 truncate">Owner Account</div>
</div>
<iconify-icon className="text-navy/50" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 lg:px-10 border-b border-navy/10 bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-navy/60 hover:text-navy">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-lg tracking-tight font-medium">Merchant Insights</h1>

<div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1.5 border border-navy/10 rounded-md bg-white cursor-pointer hover:border-navy/20 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium">Medan - Setiabudi</span>
<iconify-icon className="text-navy/50 ml-1" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="flex items-center bg-navy/5 p-1 rounded-lg">
<button className="px-3 py-1 text-xs font-medium rounded-md text-navy/60 hover:text-navy transition-colors">Today</button>
<button className="px-3 py-1 text-xs font-medium rounded-md bg-white shadow-sm text-navy transition-colors">7 Days</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-navy/60 hover:text-navy transition-colors">30 Days</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-navy/60 hover:text-navy transition-colors">Custom</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<div className="bg-white p-5 rounded-xl border border-navy/10 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-navy/60 font-medium">Gross Revenue</div>
<iconify-icon className="text-navy/40 text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight mb-1">Rp 42.5M</div>
<div className="flex items-center gap-1.5 text-xs text-emerald-600">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="font-medium">14.2%</span>
<span className="text-navy/40 ml-1">vs last 7d</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-navy/10 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-navy/60 font-medium">Average Order Value</div>
<iconify-icon className="text-navy/40 text-lg" icon="solar:ticket-sale-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight mb-1">Rp 85,400</div>
<div className="flex items-center gap-1.5 text-xs text-rose-600">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-rose-100">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
<span className="font-medium">2.1%</span>
<span className="text-navy/40 ml-1">vs last 7d</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-navy/10 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<div className="text-xs text-navy/60 font-medium">Transactions</div>
<iconify-icon className="text-navy/40 text-lg" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight mb-1">498</div>
<div className="flex items-center gap-1.5 text-xs text-emerald-600">
<div className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="font-medium">8.4%</span>
<span className="text-navy/40 ml-1">vs last 7d</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-navy/10 shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-bl-[100px] -z-0"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="text-xs text-navy/60 font-medium">Repeat Rate (Loyalty)</div>
<iconify-icon className="text-gold text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-2xl font-medium tracking-tight mb-1">34%</div>
<div className="flex items-center gap-1.5 text-xs text-navy/50">
<span>Based on 1,204 active members</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm lg:col-span-2 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base tracking-tight font-medium">Revenue Trend</h2>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-0.5 bg-navy rounded"></div>
<span className="text-xs text-navy/60">Current</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-0.5 border-t border-dashed border-navy/30 rounded"></div>
<span className="text-xs text-navy/60">Previous</span>
</div>
</div>
</div>

<div className="flex-1 min-h-[200px] relative w-full flex items-end">

<div className="absolute inset-0 flex flex-col justify-between pb-6">
<div className="w-full border-t border-navy/5"></div>
<div className="w-full border-t border-navy/5"></div>
<div className="w-full border-t border-navy/5"></div>
<div className="w-full border-t border-navy/5"></div>
</div>

<svg className="absolute inset-0 h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M0,70 Q10,60 20,65 T40,50 T60,60 T80,40 T100,55" fill="none" stroke="rgba(15, 40, 71, 0.2)" stroke-dasharray="2,2" strokeWidth="1" vector-effect="non-scaling-stroke"></path>

<path d="M0,80 Q15,50 30,55 T50,30 T70,45 T85,20 T100,25" fill="none" stroke="#0F2847" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="50" cy="30" fill="#ffffff" r="3" stroke="#0F2847" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
<circle cx="85" cy="20" fill="#ffffff" r="3" stroke="#0F2847" strokeWidth="2" vector-effect="non-scaling-stroke"></circle>
</svg>

<div className="absolute bottom-0 w-full flex justify-between text-[10px] text-navy/40 font-medium px-2 mt-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-navy/10 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base tracking-tight font-medium">Peak Hours</h2>
<div className="flex items-center gap-1 bg-navy/5 p-0.5 rounded">
<button className="px-2 py-0.5 text-[10px] font-medium bg-white rounded shadow-sm">Vol</button>
<button className="px-2 py-0.5 text-[10px] font-medium text-navy/50">Rev</button>
</div>
</div>

<div className="flex-1 flex flex-col gap-1.5">
<div className="flex gap-1.5 text-[10px] text-navy/40 font-medium pl-8 mb-1">
<div className="flex-1 text-center">M</div>
<div className="flex-1 text-center">T</div>
<div className="flex-1 text-center">W</div>
<div className="flex-1 text-center">T</div>
<div className="flex-1 text-center">F</div>
<div className="flex-1 text-center text-navy/80">S</div>
<div className="flex-1 text-center text-navy/80">S</div>
</div>

<div className="flex items-center gap-1.5">
<div className="w-6 text-[10px] text-navy/40 font-medium text-right">08h</div>
<div className="flex-1 h-6 bg-gold/10 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/10 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/5 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/20 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/30 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/40 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/50 rounded-sm"></div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-6 text-[10px] text-navy/40 font-medium text-right">12h</div>
<div className="flex-1 h-6 bg-gold/40 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/50 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/40 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/60 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/70 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold rounded-sm relative group cursor-pointer">

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-navy text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
                                    Peak: 45 orders
                                </div>
</div>
<div className="flex-1 h-6 bg-gold/80 rounded-sm"></div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-6 text-[10px] text-navy/40 font-medium text-right">16h</div>
<div className="flex-1 h-6 bg-gold/20 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/10 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/20 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/30 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/40 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/60 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/50 rounded-sm"></div>
</div>
<div className="flex items-center gap-1.5">
<div className="w-6 text-[10px] text-navy/40 font-medium text-right">20h</div>
<div className="flex-1 h-6 bg-gold/60 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/70 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/60 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/80 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/90 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/80 rounded-sm"></div>
<div className="flex-1 h-6 bg-gold/70 rounded-sm"></div>
</div>
</div>

<div className="mt-4 p-3 bg-cream rounded-lg border border-navy/5 flex gap-3 items-start">
<iconify-icon className="text-gold mt-0.5" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs text-navy/70 leading-relaxed">
                            Weekend lunch volume (12h-14h) is <strong className="font-medium text-navy">25% higher</strong> than category average in Medan.
                        </p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-navy/10 shadow-sm overflow-hidden flex flex-col">
<div className="p-6 border-b border-navy/5 flex justify-between items-center">
<h2 className="text-base tracking-tight font-medium">Menu Performance Details</h2>
<div className="flex items-center gap-3">

<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-navy/40" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-3 py-1.5 bg-navy/5 border-transparent focus:bg-white focus:border-navy/20 rounded-md text-xs w-48 outline-none transition-all placeholder:text-navy/30" placeholder="Search menu..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 border border-navy/10 rounded-md text-xs font-medium hover:bg-navy/5 transition-colors">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filter
                        </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-navy/[0.02] text-[11px] uppercase tracking-wider text-navy/50 border-b border-navy/5">
<th className="px-6 py-3 font-medium">Menu Item</th>
<th className="px-6 py-3 font-medium">Units Sold</th>
<th className="px-6 py-3 font-medium">Revenue</th>
<th className="px-6 py-3 font-medium">% Total</th>
<th className="px-6 py-3 font-medium text-right">AI Classification</th>
</tr>
</thead>
<tbody className="text-xs divide-y divide-navy/5">
<tr className="hover:bg-navy/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-navy">
                                    Nasi Goreng Spesial
                                    <div className="text-[10px] text-navy/40 font-normal mt-0.5">Main Course</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
                                        245 
                                        <iconify-icon className="text-emerald-500" icon="solar:trend-up-linear"></iconify-icon>
</div>
</td>
<td className="px-6 py-4">Rp 8.5M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-navy/10 rounded-full overflow-hidden">
<div className="h-full bg-navy w-[20%]"></div>
</div>
<span className="text-[10px] text-navy/60">20%</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-medium">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
                                        Cash Cow
                                    </span>
</td>
</tr>
<tr className="hover:bg-navy/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-navy">
                                    Es Kopi Susu Aren
                                    <div className="text-[10px] text-navy/40 font-normal mt-0.5">Beverage</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
                                        182
                                        <iconify-icon className="text-emerald-500" icon="solar:trend-up-linear"></iconify-icon>
</div>
</td>
<td className="px-6 py-4">Rp 4.5M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-navy/10 rounded-full overflow-hidden">
<div className="h-full bg-navy w-[11%]"></div>
</div>
<span className="text-[10px] text-navy/60">11%</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-100 text-[10px] font-medium">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                                        Star
                                    </span>
</td>
</tr>
<tr className="hover:bg-navy/[0.02] transition-colors group bg-gold/[0.02]">
<td className="px-6 py-4 font-medium text-navy">
                                    Truffle Fries
                                    <div className="text-[10px] text-navy/40 font-normal mt-0.5">Appetizer</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
                                        45
                                        <iconify-icon className="text-navy/30" icon="solar:minus-linear"></iconify-icon>
</div>
</td>
<td className="px-6 py-4">Rp 1.8M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-navy/10 rounded-full overflow-hidden">
<div className="h-full bg-navy w-[4%]"></div>
</div>
<span className="text-[10px] text-navy/60">4%</span>
</div>
</td>
<td className="px-6 py-4 text-right relative">

<button className="absolute right-32 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-medium text-gold hover:underline">
                                        Generate Promo Caption
                                    </button>
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-gold/10 text-gold border border-gold/20 text-[10px] font-medium">
<iconify-icon icon="solar:diamond-linear"></iconify-icon>
                                        Hidden Gem
                                    </span>
</td>
</tr>
<tr className="hover:bg-navy/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-navy">
                                    Salad Buah
                                    <div className="text-[10px] text-navy/40 font-normal mt-0.5">Dessert</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
                                        12
                                        <iconify-icon className="text-rose-500" icon="solar:trend-down-linear"></iconify-icon>
</div>
</td>
<td className="px-6 py-4">Rp 0.4M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-navy/10 rounded-full overflow-hidden">
<div className="h-full bg-navy w-[1%]"></div>
</div>
<span className="text-[10px] text-navy/60">1%</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-100 text-[10px] font-medium">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                                        Drag
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="h-4"></div>
</div>
</main>

    </>
  );
}
