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
      

<nav className="bg-white shadow sticky top-0 z-10">
<div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-3">
<div className="flex items-center gap-2">
<img alt="币安" className="w-7 h-7 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" />
<span className="font-bold text-lg text-gray-800">币安投注</span>
</div>
<button className="px-3 py-1 rounded text-sm bg-yellow-400 text-black hover:bg-yellow-300 transition">登录</button>
</div>
</nav>

<main className="flex-1 max-w-2xl mx-auto p-4 space-y-6">
<section>
<div className="flex items-center justify-between mb-2">
<h2 className="text-[16px] font-semibold text-gray-800">热门盘口</h2>
<button className="text-sm text-blue-600 hover:underline">更多 {">"}</button>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer border border-gray-200">
<div className="flex items-center gap-2 mb-1">
<span className="font-bold text-gray-900 text-[17px]">BTC/USDT</span>
<span className="bg-green-100 text-green-600 rounded px-2 text-xs">涨</span>
</div>
<span className="block text-gray-500 text-sm mb-2">24h: 43,289.31</span>
<div className="flex items-center gap-3">
<span className="block text-gray-700 font-semibold">赔率 1.82</span>
<span className="ml-auto text-xs text-gray-400">剩余: 03:22</span>
</div>
</div>

<div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer border border-gray-200">
<div className="flex items-center gap-2 mb-1">
<span className="font-bold text-gray-900 text-[17px]">ETH/USDT</span>
<span className="bg-red-100 text-red-500 rounded px-2 text-xs">跌</span>
</div>
<span className="block text-gray-500 text-sm mb-2">24h: 2,712.87</span>
<div className="flex items-center gap-3">
<span className="block text-gray-700 font-semibold">赔率 1.95</span>
<span className="ml-auto text-xs text-gray-400">剩余: 07:59</span>
</div>
</div>
</div>
</section>

<section>
<div className="bg-white rounded-lg p-5 shadow border border-gray-200">
<h3 className="text-lg font-bold mb-4 text-gray-800 flex items-center gap-2">
<img alt="BNB" className="w-6 h-6 rounded-full" src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" />
          BNB/USDT - 涨跌投注
        </h3>
<form className="space-y-4">
<div>
<label className="block text-sm text-gray-600 mb-1">选择方向</label>
<div className="flex gap-3">
<button className="flex-1 py-2 rounded border border-green-500 text-green-600 font-semibold bg-green-50 hover:bg-green-100" type="button">涨</button>
<button className="flex-1 py-2 rounded border border-red-400 text-red-500 font-semibold bg-red-50 hover:bg-red-100" type="button">跌</button>
</div>
</div>
<div>
<label className="block text-sm text-gray-600 mb-1">投注金额 (USDT)</label>
<input className="w-full py-2 px-3 rounded border border-gray-300 bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300" min="0" type="number" value="10" />
</div>
<div className="flex items-center justify-between text-sm text-gray-700">
<span>赔率: <span className="font-semibold text-gray-900">1.92</span></span>
<span>预计奖励: <span className="font-semibold text-green-600">19.2 USDT</span></span>
</div>
<button className="w-full mt-1 py-3 bg-yellow-400 hover:bg-yellow-300 rounded-xl font-bold text-black text-lg transition">确认投注</button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t sticky bottom-0 w-full shadow-inner">
<div className="max-w-2xl mx-auto flex items-center justify-around py-3 px-4 text-gray-700 text-sm">
<a className="flex flex-col items-center gap-1" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m0 0H5a2 2 0 01-2-2v-7a2 2 0 012-2h3m6 10v-6m0 0l7 7-7-7z"></path>
</svg>
<span>首页</span>
</a>
<a className="flex flex-col items-center gap-1 text-yellow-500" href="#">
<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
<path d="M5 20h14v-2H5m14-2v-2a2 2 0 00-2-2h-4V8a2 2 0 012-2h2a2 2 0 012 2v4h2v4m-2 4v-4h2v4h-2z"></path>
</svg>
<span>投注</span>
</a>
<a className="flex flex-col items-center gap-1" href="#">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M12 4v16m8-8H4"></path>
</svg>
<span>我的</span>
</a>
</div>
</footer>

    </>
  );
}
