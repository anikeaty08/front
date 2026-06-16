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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col justify-between hidden md:flex">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tighter">SYS</span>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-gray-50 text-gray-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:home-angle-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:wallet-money-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Transactions
                </a>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon className="" icon="solar:settings-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-10 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Dashboard</h1>
</div>
<div className="flex items-center gap-5">

<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
<input className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:bg-white transition-all w-64 placeholder:text-gray-400" placeholder="Search..." type="text"/>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors relative">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-gray-900 rounded-full border border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-gray-200 cursor-pointer"></div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="">
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Financial Overview</h2>
<p className="text-sm text-gray-500 mt-1">Track your recent volume and key metrics.</p>
</div>

<div className="flex items-center gap-3">
<span className="text-sm text-gray-500 font-medium">Test Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Gross Revenue</p>
<iconify-icon className="text-gray-400" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="flex gap-2 mt-4 gap-x-2 gap-y-2 items-baseline">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">$124,500</span>
<span className="text-xs font-medium text-gray-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                12%
                            </span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Active Subscribers</p>
<iconify-icon className="text-gray-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">1,432</span>
<span className="text-xs font-medium text-gray-500 flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                4.1%
                            </span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Churn Rate</p>
<iconify-icon className="text-gray-400" icon="solar:chart-square-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</div>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-gray-900">1.2%</span>
<span className="text-xs font-medium text-gray-400 flex items-center gap-0.5">
                                Stable
                            </span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="flex border-gray-100 border-b pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-gray-900">Recent Transactions</h3>
<button className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">View all</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-gray-50/50">
<th className="px-6 py-3 text-xs font-medium text-gray-500 w-12">
<input className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-gray-900 checked:border-gray-900 focus:ring-0 focus:outline-none cursor-pointer transition-colors relative after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45" type="checkbox"/>
</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500">Customer</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500">Amount</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<input className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-gray-900 checked:border-gray-900 focus:ring-0 focus:outline-none cursor-pointer transition-colors relative after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 tracking-tighter">EL</div>
<div>
<p className="text-sm font-medium text-gray-900">Emma Lopez</p>
<p className="text-xs text-gray-500">emma.l@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-900 font-medium">$49.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">Completed</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500 text-right">Today, 2:45 PM</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<input className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-gray-900 checked:border-gray-900 focus:ring-0 focus:outline-none cursor-pointer transition-colors relative after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 tracking-tighter">JD</div>
<div>
<p className="text-sm font-medium text-gray-900">James Doe</p>
<p className="text-xs text-gray-500">j.doe@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-900 font-medium">$199.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">Completed</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500 text-right">Oct 24, 2023</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<input className="appearance-none w-4 h-4 border border-gray-300 rounded-sm checked:bg-gray-900 checked:border-gray-900 focus:ring-0 focus:outline-none cursor-pointer transition-colors relative after:content-[''] checked:after:absolute checked:after:left-[4px] checked:after:top-[1px] checked:after:w-[6px] checked:after:h-[10px] checked:after:border-r-2 checked:after:border-b-2 checked:after:border-white checked:after:rotate-45" type="checkbox"/>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 tracking-tighter">SW</div>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Williams</p>
<p className="text-xs text-gray-500">sarah@example.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-900 font-medium">$12.50</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-600">Pending</span>
</td>
<td className="px-6 py-4 text-sm text-gray-500 text-right">Oct 22, 2023</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
