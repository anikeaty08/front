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
      

<main className="w-full max-w-md h-[100dvh] bg-gray-50 flex flex-col overflow-hidden shadow-2xl relative sm:ring-1 sm:ring-gray-200 sm:rounded-[2.5rem]">

<header className="px-6 pt-10 pb-4 flex items-center justify-between bg-gray-50 z-10 relative shrink-0">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500 font-medium">Good morning</span>
<span className="text-base tracking-tighter font-semibold">MNY</span>
</div>
</div>
<button className="w-10 h-10 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors relative">
<div className="absolute top-2.5 right-2.5 w-2 h-2 bg-gray-900 rounded-full border-2 border-white"></div>
<iconify-icon className="text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto pb-32">

<section className="px-6 py-2 relative z-10">
<div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col gap-8 relative overflow-hidden">

<div className="absolute top-0 right-0 w-40 h-40 bg-gray-50 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="z-10 flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500 font-medium">Total Balance</span>
<iconify-icon className="text-gray-400 text-sm cursor-pointer" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-gray-900">$12,480.00</h1>
<span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-1 rounded-md w-fit mt-1">+2.4% from last month</span>
</div>
<div className="z-10 flex items-center gap-3">
<button className="flex-1 bg-gray-900 text-white py-3.5 rounded-2xl text-sm font-medium flex justify-center items-center gap-2 hover:bg-gray-800 active:scale-[0.98] transition-all">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Send
                        </button>
<button className="flex-1 bg-white border border-gray-200 shadow-sm text-gray-900 py-3.5 rounded-2xl text-sm font-medium flex justify-center items-center gap-2 hover:bg-gray-50 active:scale-[0.98] transition-all">
<iconify-icon className="text-base" icon="solar:arrow-left-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Receive
                        </button>
</div>
</div>
</section>

<div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-2xl mx-6 mt-4 mb-2 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Smart Savings</span>
<span className="text-xs text-gray-500">Auto-invest spare change</span>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-10 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-gray-900"></div>
</label>
</div>

<section className="mt-6 px-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Activity</h2>
<button className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">See all</button>
</div>
<div className="flex flex-col gap-5">

<div className="flex items-center justify-between group cursor-pointer active:opacity-70 transition-opacity">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 text-gray-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">Coffee Shop</span>
<span className="text-xs text-gray-500">Today, 9:41 AM</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$4.50</span>
</div>

<div className="flex items-center justify-between group cursor-pointer active:opacity-70 transition-opacity">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 text-gray-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">Grocery Store</span>
<span className="text-xs text-gray-500">Yesterday</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$62.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer active:opacity-70 transition-opacity">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800 text-white shadow-sm">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">Salary Deposit</span>
<span className="text-xs text-gray-500">Mon, 12 Aug</span>
</div>
</div>
<span className="text-sm font-medium text-emerald-600">+$3,200.00</span>
</div>

<div className="flex items-center justify-between group cursor-pointer active:opacity-70 transition-opacity">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 text-gray-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:music-note-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">Spotify</span>
<span className="text-xs text-gray-500">Sun, 11 Aug</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$10.99</span>
</div>

<div className="flex items-center justify-between group cursor-pointer active:opacity-70 transition-opacity">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-gray-200 text-gray-700 shadow-sm">
<iconify-icon className="text-xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-gray-900">Phone Bill</span>
<span className="text-xs text-gray-500">Fri, 9 Aug</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">-$45.00</span>
</div>
</div>
</section>
</div>

<nav className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 px-8 py-5 pb-8 flex justify-between items-center z-50">
<button className="text-gray-900 flex flex-col items-center justify-center active:scale-95 transition-transform">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 flex flex-col items-center justify-center active:scale-95 transition-all">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<button className="relative -top-6 bg-gray-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-gray-900/20 hover:bg-gray-800 hover:-translate-y-1 active:scale-95 transition-all">
<iconify-icon className="text-2xl" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 flex flex-col items-center justify-center active:scale-95 transition-all">
<iconify-icon className="text-2xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-gray-400 hover:text-gray-900 flex flex-col items-center justify-center active:scale-95 transition-all">
<iconify-icon className="text-2xl" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
</main>

    </>
  );
}
