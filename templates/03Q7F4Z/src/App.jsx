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



    lucide.createIcons();
    
    // Add subtle number animation on load
    setTimeout(() => {
      const numbers = document.querySelectorAll('.number-animate');
      numbers.forEach(num => {
        num.style.transform = 'scale(1.01)';
        setTimeout(() => {
          num.style.transform = 'scale(1)';
        }, 300);
      });
    }, 1000);
  
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
      

<div className="relative w-full max-w-7xl glass-dark sm:rounded-3xl overflow-hidden fade-in border-gray-700/30 border rounded-2xl shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]" style={{}}>

<div className="absolute inset-y-0 left-0 flex flex-col gap-2 sm:gap-3 py-4 sm:py-6 px-2 sm:px-3 fade-in fade-in-delay-1 items-center glass-darker border-r border-gray-600/30" style={{}}>
<button className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600/50 hover:border-gray-500/70" style={{}}>
<svg className="lucide lucide-trending-up w-4 h-4 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-wallet w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-bar-chart-3 w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-credit-card w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-target w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</button>
<button className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 mt-auto bg-gray-800/50 border-gray-600/30 hover:bg-gray-700/60 hover:border-gray-500/50 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-settings w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="sm:pl-20 md:pl-24 lg:pl-28 sm:pr-6 md:pr-10 lg:pr-14 sm:pt-6 md:pt-8 sm:pb-10 sm:space-y-8 lg:space-y-12 pt-4 pr-4 pb-6 pl-14 space-y-6">

<div className="flex fade-in fade-in-delay-2 items-center justify-between">
<div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-400 font-mono" style={{}}>
<svg className="lucide lucide-building-2 w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<span className="hidden sm:inline font-sans">FinanceFlow</span>
<span className="sm:hidden font-sans">FF</span>
<span className="text-gray-300 font-medium font-sans" style={{}}>Pro</span>
<svg className="lucide lucide-chevron-down w-3 h-3 sm:w-4 sm:h-4 text-slate-500 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="flex gap-1 sm:text-sm sm:py-2 sm:px-4 transition-all duration-300 hover:scale-105 text-xs font-medium rounded-xl py-1.5 px-3 items-center bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-gray-200 border border-gray-600/50 hover:border-gray-500/70" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3 sm:w-4 sm:h-4 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="hidden sm:inline font-sans">Upgrade</span>
<span className="sm:hidden font-sans">Pro</span>
</button>
</div>

<div className="fade-in fade-in-delay-3">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-3xl tracking-tight text-gray-200 font-instrument-serif font-normal" style={{}}>
          Orchestrate Your
          <span className="text-gray-100 font-instrument-serif font-normal" style={{}}>Financial Symphony</span>
</h1>
<p className="text-gray-400 text-sm sm:text-base mt-3 font-mono font-light font-sans" style={{}}>// Advanced portfolio management &amp; AI insights</p>
</div>

<div className="relative fade-in fade-in-delay-3">

<div className="hidden xl:block absolute -right-16 -top-20">
<div className="relative">
<div className="w-28 h-28 opacity-5 animate-pulse bg-gray-600 rounded-full" style={{}}></div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
<div className="sm:rounded-2xl sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glass-darker hover:border-gray-500/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6776fba5-2ede-4e94-b98f-8d32fde75a36_800w.jpg)] bg-cover border-gray-600/40 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-xl" style={{}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-800 flex items-center justify-center border border-gray-600/50 text-gray-300" style={{}}>
<svg className="lucide lucide-dollar-sign w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="">
<p className="text-2xl sm:text-3xl text-gray-100 number-animate font-instrument-serif font-normal" style={{transform: 'scale(1)'}}>$12,847</p>
<p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans" style={{}}>Total Balance</p>
</div>
<div className="flex items-center gap-1 text-xs font-mono font-light text-purple-400" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans">+12.5% ↗</span>
</div>
</div>
<div className="sm:rounded-2xl sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 glass-darker text-gray-200 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec79d014-d7ca-4526-b496-b6bb9ba0a50c_800w.jpg)] bg-cover border-gray-500/50 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-xl" style={{}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gray-700 flex items-center justify-center border border-gray-500/50 text-gray-300" style={{}}>
<svg className="lucide lucide-pie-chart w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="">
<p className="text-2xl sm:text-3xl text-gray-100 number-animate font-instrument-serif font-normal" style={{transform: 'scale(1)'}}>$3,420</p>
<p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans" style={{}}>Monthly Burn</p>
</div>
<div className="flex items-center gap-1 text-xs font-mono font-light text-pink-400" style={{}}>
<svg className="lucide lucide-trending-down w-3 h-3 stroke-[1.5]" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<span className="font-sans">-5.2% ↘</span>
</div>
</div>
<div className="sm:rounded-2xl sm:p-6 flex flex-col gap-3 sm:gap-4 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1 glass-darker hover:border-gray-500/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/381bd046-b81e-4b30-87a3-412386e6824f_800w.jpg)] bg-cover border-gray-600/40 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-xl" style={{}}>
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gray-800 border border-gray-600/50 text-gray-300" style={{}}>
<svg className="lucide lucide-trending-up w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<p className="sm:text-3xl number-animate text-2xl font-normal text-gray-100 font-instrument-serif" style={{transform: 'scale(1)'}}>$8,950</p>
<p className="text-xs sm:text-sm text-gray-400 mt-1 font-sans" style={{}}>Portfolio Growth</p>
</div>
<div className="flex items-center gap-1 text-xs font-mono font-light text-purple-400" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3 stroke-[1.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-sans">+24.8% ↗↗</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto fade-in fade-in-delay-3">
<div className="rounded-xl sm:rounded-2xl flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border shadow-xl glass-darker border-gray-600/40" style={{}}>
<div className="flex items-center justify-between text-xs font-mono font-light text-gray-400" style={{}}>
<div className="flex items-center gap-1">
<svg className="lucide lucide-bot w-3 h-3 stroke-[1.5]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="hidden sm:inline font-sans">Financial.AI()</span>
<span className="sm:hidden font-sans">AI</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-shield-check w-3 h-3 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="hidden sm:inline font-sans">encrypted.secure</span>
<span className="sm:hidden font-sans">secure</span>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<svg className="lucide lucide-message-circle w-4 h-4 sm:w-5 sm:h-5 text-slate-500 shrink-0 stroke-[1.5]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<input className="flex-1 border-none outline-none placeholder-gray-500 text-sm sm:text-base bg-transparent text-gray-200 font-light" placeholder='Query your financial data... "analyze my spending patterns"' style={{}} type="text"/>
<button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-xl border transition-all duration-300 border-gray-600/50 text-gray-400 hover:bg-gray-800/50 hover:border-gray-500/70 hover:text-gray-300" style={{}}>
<svg className="lucide lucide-paperclip w-4 h-4 stroke-[1.5]" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<button className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-200 border border-gray-600/50 hover:border-gray-500/70" style={{}}>
<svg className="lucide lucide-send w-4 h-4 stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>

<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-1 text-xs sm:text-sm font-mono font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-all duration-300 hover:scale-105 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-200 border border-gray-600/50 hover:border-gray-500/70 shadow-md" style={{}}>
<svg className="lucide lucide-calculator w-3 h-3 stroke-[1.5]" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
<span className="hidden sm:inline font-sans">budget.plan()</span>
<span className="sm:hidden font-sans">budget</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-mono font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-all duration-300 bg-gray-800/60 border-gray-600/40 hover:bg-gray-700/70 hover:border-gray-500/60 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-piggy-bank w-3 h-3 stroke-[1.5]" data-lucide="piggy-bank" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path><path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path></svg>
<span className="hidden sm:inline font-sans">save.target</span>
<span className="sm:hidden font-sans">save</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-mono font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-all duration-300 bg-gray-800/60 border-gray-600/40 hover:bg-gray-700/70 hover:border-gray-500/60 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-line-chart w-3 h-3 stroke-[1.5]" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="hidden sm:inline font-sans">invest.ai</span>
<span className="sm:hidden font-sans">invest</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-mono font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-all duration-300 bg-gray-800/60 border-gray-600/40 hover:bg-gray-700/70 hover:border-gray-500/60 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-receipt w-3 h-3 stroke-[1.5]" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<span className="hidden sm:inline font-sans">report.gen</span>
<span className="sm:hidden font-sans">report</span>
</button>
<button className="flex items-center gap-1 text-xs sm:text-sm font-mono font-light px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl transition-all duration-300 bg-gray-800/60 border-gray-600/40 hover:bg-gray-700/70 hover:border-gray-500/60 text-gray-400 hover:text-gray-300 border" style={{}}>
<svg className="lucide lucide-more-horizontal w-3 h-3 stroke-[1.5]" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
