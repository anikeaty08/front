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
      

<header className="bg-white border-b border-zinc-200 py-12 px-6 mb-12">
<div className="max-w-6xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:figma-linear"></iconify-icon>
                Design System v1.0
            </div>
<h1 className="text-4xl font-semibold tracking-tight mb-4">Aura Finance</h1>
<p className="text-zinc-500 max-w-xl text-base leading-relaxed">
                A minimal, scalable mobile UI system for modern financial management. Designed for young professionals focusing on clear typography, high contrast, and atomic components.
            </p>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 space-y-24">

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-8 border-b border-zinc-200 pb-4">1. Foundations</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div>
<h3 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">Colors</h3>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-900 shadow-sm border border-zinc-200/50"></div>
<div>
<p className="text-sm font-medium">Primary Black</p>
<p className="text-xs text-zinc-500">zinc-900</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-zinc-200"></div>
<div>
<p className="text-sm font-medium">Surface White</p>
<p className="text-xs text-zinc-500">white / zinc-50</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-zinc-100 shadow-sm border border-zinc-200/50"></div>
<div>
<p className="text-sm font-medium">Neutral Light</p>
<p className="text-xs text-zinc-500">zinc-100 / zinc-200</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500 shadow-sm border border-zinc-200/50"></div>
<div>
<p className="text-sm font-medium">Success Green</p>
<p className="text-xs text-zinc-500">emerald-500</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">Typography</h3>
<div className="space-y-6">
<div>
<p className="text-3xl font-semibold tracking-tight">Heading 1</p>
<p className="text-xs text-zinc-500 mt-1">text-3xl, font-semibold, tracking-tight</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">Heading 2</p>
<p className="text-xs text-zinc-500 mt-1">text-2xl, font-semibold, tracking-tight</p>
</div>
<div>
<p className="text-lg font-medium tracking-tight">Heading 3</p>
<p className="text-xs text-zinc-500 mt-1">text-lg, font-medium, tracking-tight</p>
</div>
<div>
<p className="text-sm text-zinc-600">Body text used for general descriptions and paragraphs.</p>
<p className="text-xs text-zinc-500 mt-1">text-sm, text-zinc-600</p>
</div>
<div>
<p className="text-xs text-zinc-500">Caption text for hints.</p>
<p className="text-xs text-zinc-500 mt-1">text-xs, text-zinc-500</p>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-widest">Components</h3>
<div className="space-y-6">

<div className="space-y-3">
<button className="w-full bg-zinc-900 text-white rounded-xl py-3 px-4 text-sm font-medium hover:bg-zinc-800 transition-colors">Primary Button</button>
<button className="w-full bg-white text-zinc-900 border border-zinc-200 shadow-sm rounded-xl py-3 px-4 text-sm font-medium hover:bg-zinc-50 transition-colors">Secondary Button</button>
</div>

<div>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all placeholder:text-zinc-400" placeholder="Input field" type="text"/>
</div>

<div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl shadow-sm">
<span className="text-sm font-medium">Toggle Switch</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-8 border-b border-zinc-200 pb-4">2. Application Screens</h2>
<div className="flex flex-wrap justify-center gap-8">

<div className="w-80 h-[42rem] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">

<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col pt-16 pb-8 px-6">
<div className="flex-1 flex flex-col items-center justify-center">

<div className="w-48 h-48 relative mb-12">
<div className="absolute inset-0 bg-zinc-100 rounded-full"></div>
<div className="absolute top-4 right-4 w-24 h-24 bg-zinc-900 rounded-full shadow-lg flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 w-16 h-16 bg-white border border-zinc-200 rounded-2xl shadow-sm flex items-center justify-center rotate-12">
<iconify-icon className="text-zinc-900 text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-center mb-3">Master your money<br/>with clarity.</h2>
<p className="text-sm text-zinc-500 text-center px-4">Track spending, set budgets, and achieve your financial goals effortlessly.</p>
</div>
<div className="space-y-4">
<div className="flex justify-center gap-1.5 mb-8">
<div className="w-5 h-1.5 bg-zinc-900 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-zinc-200 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-zinc-200 rounded-full"></div>
</div>
<button className="w-full bg-zinc-900 text-white rounded-xl py-3.5 px-4 text-sm font-medium hover:bg-zinc-800 transition-colors">Get Started</button>
<button className="w-full bg-white text-zinc-900 rounded-xl py-3.5 px-4 text-sm font-medium hover:bg-zinc-50 transition-colors">Log In</button>
</div>
</div>
</div>

<div className="w-80 h-[42rem] bg-white rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col pt-20 px-6 pb-8">
<div className="mb-12">
<div className="text-lg font-semibold tracking-tighter mb-8">AURA</div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Welcome back</h2>
<p className="text-sm text-zinc-500">Enter your details to access your account.</p>
</div>
<div className="space-y-5 flex-1">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-700">Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="email" value="hello@example.com"/>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-700">Password</label>
<a className="text-xs text-zinc-500 hover:text-zinc-900" href="#">Forgot?</a>
</div>
<div className="relative">
<input className="w-full bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 transition-all" type="password" value="password123"/>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-6">
<button className="w-full bg-zinc-900 text-white rounded-xl py-3.5 px-4 text-sm font-medium hover:bg-zinc-800 transition-colors">Log In</button>
<p className="text-center text-sm text-zinc-500">
                                Don't have an account? <a className="text-zinc-900 font-medium" href="#">Sign up</a>
</p>
</div>
</div>
</div>

<div className="w-80 h-[42rem] bg-zinc-50 rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-24 pt-14 no-scrollbar">

<div className="px-6 flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 border border-zinc-300 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=f4f4f5"/>
</div>
<div>
<p className="text-xs text-zinc-500">Good morning</p>
<p className="text-sm font-medium">Alex Doe</p>
</div>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-white shadow-sm relative">
<div className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="px-6 mb-6">
<div className="bg-zinc-900 text-white rounded-2xl p-5 shadow-lg relative overflow-hidden">

<div className="absolute -right-4 -top-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<p className="text-xs text-zinc-400 mb-1">Total Balance</p>
<h3 className="text-3xl font-semibold tracking-tight mb-4">$14,250.00</h3>
<div className="flex gap-4">
<div className="flex items-center gap-1.5 text-xs bg-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-sm">
<iconify-icon className="text-emerald-400" icon="solar:arrow-right-up-linear"></iconify-icon>
<span>+$2,400</span>
</div>
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<span>vs last month</span>
</div>
</div>
</div>
</div>

<div className="px-6 grid grid-cols-4 gap-4 mb-8">
<div className="flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Send</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Receive</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">Top Up</span>
</div>
<div className="flex flex-col items-center gap-2 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
</div>
<span className="text-xs font-medium">More</span>
</div>
</div>

<div className="px-6">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-semibold tracking-tight">Recent Activity</h4>
<a className="text-xs font-medium text-zinc-500" href="#">See all</a>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-600" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Whole Foods</p>
<p className="text-xs text-zinc-500">Today, 10:24 AM</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight">-$42.50</span>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
<iconify-icon className="text-lg text-emerald-600" icon="solar:case-minimalistic-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Stripe Payout</p>
<p className="text-xs text-zinc-500">Yesterday</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight text-emerald-600">+$1,250.00</span>
</div>

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-600" icon="solar:music-note-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Spotify Premium</p>
<p className="text-xs text-zinc-500">Oct 24</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight">-$10.99</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-white/80 backdrop-blur-md border-t border-zinc-200 flex justify-around items-center px-4 z-30 pb-2">
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-900">Home</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:wallet-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Cards</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Analytics</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Profile</span>
</div>
</div>
</div>

<div className="w-80 h-[42rem] bg-zinc-50 rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="pt-14 px-6 pb-4 bg-white border-b border-zinc-200">
<h2 className="text-lg font-semibold tracking-tight mb-4">Transactions</h2>

<div className="relative">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-zinc-100 border-none text-zinc-900 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 transition-all placeholder:text-zinc-500" placeholder="Search activity..." type="text"/>
</div>

<div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar pb-1">
<button className="px-4 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-full whitespace-nowrap">All</button>
<button className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full whitespace-nowrap hover:bg-zinc-50">Income</button>
<button className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full whitespace-nowrap hover:bg-zinc-50">Expense</button>
<button className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full whitespace-nowrap hover:bg-zinc-50">Tags</button>
</div>
</div>
<div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">October 2023</p>

<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-600" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Starbucks</p>
<p className="text-xs text-zinc-500">Coffee</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight">-$5.40</span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-600" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Amazon</p>
<p className="text-xs text-zinc-500">Shopping</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight">-$129.00</span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
<iconify-icon className="text-lg text-emerald-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Sarah Miller</p>
<p className="text-xs text-zinc-500">Dinner split</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight text-emerald-600">+$45.00</span>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded-xl border border-zinc-200/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-lg text-zinc-600" icon="solar:gamepad-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Steam</p>
<p className="text-xs text-zinc-500">Entertainment</p>
</div>
</div>
<span className="text-sm font-medium tracking-tight">-$59.99</span>
</div>
</div>
</div>

<div className="w-80 h-[42rem] bg-zinc-50 rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="pt-14 px-4 pb-2 flex items-center justify-between">
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<span className="text-sm font-medium">Details</span>
<div className="w-10"></div> 
</div>
<div className="flex-1 overflow-y-auto px-6 py-6">

<div className="flex flex-col items-center mb-10">
<div className="w-16 h-16 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-zinc-800" icon="solar:shop-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">-$129.00</h2>
<p className="text-sm text-zinc-500 mb-4">Amazon</p>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-200/50 border border-zinc-200 text-xs font-medium text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                                Completed
                            </span>
</div>

<div className="bg-white border border-zinc-200 shadow-sm rounded-2xl p-4 space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-zinc-100">
<span className="text-sm text-zinc-500">Date</span>
<span className="text-sm font-medium">Oct 24, 14:32</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-zinc-100">
<span className="text-sm text-zinc-500">Category</span>
<span className="text-sm font-medium">Shopping</span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-zinc-100">
<span className="text-sm text-zinc-500">Payment Method</span>
<span className="text-sm font-medium flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:card-linear"></iconify-icon>
                                    Visa •••• 4242
                                </span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-zinc-500">Transaction ID</span>
<span className="text-sm font-medium font-mono text-zinc-600">#TRX-9824L</span>
</div>
</div>

<div className="mt-6">
<label className="text-xs font-medium text-zinc-700 mb-2 block">Notes</label>
<div className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl px-4 py-3 text-sm">
                                Desk setup accessories.
                            </div>
</div>
</div>

<div className="p-6 pt-2 bg-zinc-50">
<button className="w-full bg-white border border-zinc-200 text-zinc-900 rounded-xl py-3.5 px-4 text-sm font-medium hover:bg-zinc-100 transition-colors shadow-sm flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:bill-list-linear"></iconify-icon>
                            Split Expense
                        </button>
</div>
</div>

<div className="w-80 h-[42rem] bg-zinc-50 rounded-[2.5rem] shadow-2xl border-8 border-zinc-900 relative overflow-hidden flex flex-col">
<div className="absolute top-0 w-full h-7 flex justify-between items-center px-6 pt-2 z-20">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="pt-14 px-6 pb-4">
<h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
</div>
<div className="flex-1 overflow-y-auto px-6 pb-24 space-y-8 no-scrollbar">

<div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-zinc-200 shadow-sm">
<div className="w-14 h-14 rounded-full bg-zinc-200 border border-zinc-300 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=f4f4f5"/>
</div>
<div className="flex-1">
<p className="text-base font-semibold tracking-tight">Alex Doe</p>
<p className="text-xs text-zinc-500">hello@example.com</p>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
</div>

<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 pl-1">Account</p>
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-zinc-100 cursor-pointer hover:bg-zinc-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-zinc-500" icon="solar:user-id-linear"></iconify-icon>
<span className="text-sm font-medium">Personal Information</span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 border-b border-zinc-100 cursor-pointer hover:bg-zinc-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-zinc-500" icon="solar:shield-keyhole-linear"></iconify-icon>
<span className="text-sm font-medium">Security</span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-zinc-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-zinc-500" icon="solar:card-linear"></iconify-icon>
<span className="text-sm font-medium">Payment Methods</span>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 pl-1">Preferences</p>
<div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-zinc-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-zinc-500" icon="solar:bell-linear"></iconify-icon>
<span className="text-sm font-medium">Push Notifications</span>
</div>
<label className="relative inline-flex items-center cursor-pointer scale-90 origin-right">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-zinc-500" icon="solar:moon-linear"></iconify-icon>
<span className="text-sm font-medium">Dark Mode</span>
</div>
<label className="relative inline-flex items-center cursor-pointer scale-90 origin-right">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
</div>
</div>
<button className="w-full py-4 text-sm font-medium text-rose-500 hover:bg-rose-50 rounded-xl transition-colors">
                            Log Out
                        </button>
</div>

<div className="absolute bottom-0 w-full h-20 bg-white/80 backdrop-blur-md border-t border-zinc-200 flex justify-around items-center px-4 z-30 pb-2">
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Home</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:wallet-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Cards</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-400" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-400">Analytics</span>
</div>
<div className="flex flex-col items-center gap-1 cursor-pointer">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:user-circle-bold"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-900">Profile</span>
</div>
</div>
</div>
</div>
</section>
</main>
<style>
        /* Hide scrollbar for clean mockups */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

    </>
  );
}
