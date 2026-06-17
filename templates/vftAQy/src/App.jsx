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
      
<div className="relative w-[375px] h-[812px] bg-white rounded-[54px] overflow-hidden shadow-xl border-8 border-slate-200">

<div className="h-full overflow-y-auto bg-slate-50">

<header className="bg-emerald-100 p-4 pt-12">
<div className="flex items-center">
<button className="mr-4">
<svg className="h-6 w-6 text-slate-600" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 19l-7-7m0 0l7-7m-7 7h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-medium text-slate-700">Account Summary</h1>
</div>
<div className="mt-4 flex justify-between items-center">
<div>
<div className="text-2xl font-bold text-slate-700">$12,849.75</div>
<div className="text-sm text-slate-500">Total Balance</div>
</div>
<div className="bg-white/60 px-3 py-1 rounded-full text-sm text-emerald-600 border border-emerald-200">
            +2.4% today
          </div>
</div>
</header>

<div className="p-4 border-b border-slate-100 bg-white">
<div className="flex justify-between items-center">
<div className="text-sm text-slate-500">Account Number</div>
<div className="font-medium text-slate-700">****3456</div>
</div>
</div>

<div className="p-4">
<div className="flex items-center mb-2">
<div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center mr-2 border border-emerald-100">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium text-slate-700">Investments</span>
</div>
<div className="bg-white rounded-xl border border-slate-100 overflow-hidden mb-6 shadow-sm">

<div className="p-4 flex items-center border-b border-slate-50">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-3 border border-blue-100">
<span className="text-blue-400 font-bold text-sm">AAPL</span>
</div>
<div>
<div className="font-medium text-slate-700">Apple Inc.</div>
<div className="text-sm text-slate-500">Technology</div>
</div>
<div className="ml-auto">
<div className="font-medium text-slate-700">$182.63</div>
<div className="text-xs text-emerald-500">+1.25%</div>
</div>
</div>

<div className="p-4 flex justify-between relative">
<div>
<div className="text-xs text-slate-500">Shares</div>
<div className="text-lg font-medium text-slate-700">12</div>
<div className="text-xs text-slate-500 mt-1">Avg Cost</div>
<div className="text-sm font-medium text-slate-700">$145.32</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-4">
<div className="w-full h-16">
<div className="w-full h-0.5 bg-slate-100 relative mt-8">
<div className="absolute top-0 left-0 w-3/4 h-0.5 bg-emerald-300"></div>
</div>
</div>
</div>
<div>
<div className="text-xs text-slate-500">Market Value</div>
<div className="text-lg font-medium text-slate-700">$2,191.56</div>
<div className="text-xs text-slate-500 mt-1">Return</div>
<div className="text-sm font-medium text-emerald-500">+$447.72</div>
</div>
</div>

<div className="bg-slate-50 p-4 border-t border-slate-100">
<div className="grid grid-cols-3 gap-4">
<div>
<div className="text-xs text-slate-500">52-Week Low</div>
<div className="text-sm font-medium text-slate-700">$124.17</div>
</div>
<div>
<div className="text-xs text-slate-500">52-Week High</div>
<div className="text-sm font-medium text-slate-700">$198.23</div>
</div>
<div>
<div className="text-xs text-slate-500">P/E Ratio</div>
<div className="text-sm font-medium text-slate-700">28.5</div>
</div>
</div>
</div>
</div>

<div className="flex items-center mb-2">
<div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center mr-2 border border-emerald-100">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-medium text-slate-700">ETFs</span>
</div>
<div className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">

<div className="p-4 flex items-center border-b border-slate-50">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mr-3 border border-green-100">
<span className="text-green-400 font-bold text-sm">VOO</span>
</div>
<div>
<div className="font-medium text-slate-700">Vanguard S&amp;P 500 ETF</div>
<div className="text-sm text-slate-500">Index Fund</div>
</div>
<div className="ml-auto">
<div className="font-medium text-slate-700">$412.36</div>
<div className="text-xs text-emerald-500">+0.78%</div>
</div>
</div>

<div className="p-4 flex justify-between relative">
<div>
<div className="text-xs text-slate-500">Shares</div>
<div className="text-lg font-medium text-slate-700">25</div>
<div className="text-xs text-slate-500 mt-1">Avg Cost</div>
<div className="text-sm font-medium text-slate-700">$375.14</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-4">
<div className="w-full h-16">
<div className="w-full h-0.5 bg-slate-100 relative mt-8">
<div className="absolute top-0 left-0 w-2/3 h-0.5 bg-emerald-300"></div>
</div>
</div>
</div>
<div>
<div className="text-xs text-slate-500">Market Value</div>
<div className="text-lg font-medium text-slate-700">$10,309.00</div>
<div className="text-xs text-slate-500 mt-1">Return</div>
<div className="text-sm font-medium text-emerald-500">+$930.50</div>
</div>
</div>

<div className="bg-slate-50 p-4 border-t border-slate-100">
<div className="grid grid-cols-3 gap-4">
<div>
<div className="text-xs text-slate-500">YTD Return</div>
<div className="text-sm font-medium text-slate-700">+12.8%</div>
</div>
<div>
<div className="text-xs text-slate-500">Expense Ratio</div>
<div className="text-sm font-medium text-slate-700">0.03%</div>
</div>
<div>
<div className="text-xs text-slate-500">Dividend Yield</div>
<div className="text-sm font-medium text-slate-700">1.4%</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-100 bg-white">
<h2 className="font-medium mb-3 text-slate-700">Account Information</h2>
<div className="bg-slate-50 rounded-xl p-4">
<div className="flex justify-between mb-2">
<div className="text-sm text-slate-500">Account Type</div>
<div className="font-medium text-slate-700">Individual Brokerage</div>
</div>
<div className="flex justify-between mb-2">
<div className="text-sm text-slate-500">Tax Status</div>
<div className="font-medium text-slate-700">Taxable</div>
</div>
<div className="flex justify-between">
<div className="text-sm text-slate-500">Last Statement</div>
<div className="font-medium text-slate-700">May 31, 2023</div>
</div>
</div>
</div>

<div className="p-4 flex gap-3">
<button className="flex-1 bg-emerald-100 text-emerald-600 py-3 rounded-lg font-medium border border-emerald-200">
          Trade
        </button>
<button className="flex-1 bg-white text-slate-600 py-3 rounded-lg font-medium border border-slate-200">
          Transfer Funds
        </button>
</div>
</div>

<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
</div>

    </>
  );
}
