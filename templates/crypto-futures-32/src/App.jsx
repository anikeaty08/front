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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="flex flex-col transition-all duration-300 shrink-0 bg-[#0c0c0e] w-40 border-white/5 border-r pt-4 pb-4 justify-between">
<div className="flex flex-col w-full pr-3 pl-3">

<div className="mb-6 flex gap-2 justify-start w-full px-2">
<div className="h-3 w-3 rounded-full bg-[#ff5f56]" style={{}}></div>
<div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
<div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
</div>

<div className="w-full space-y-0.5 gap-x-3 gap-y-3">
<a className="group flex items-center justify-start gap-3 hover:bg-white/5 hover:text-zinc-200 transition-colors text-xs font-medium text-zinc-500 w-full rounded-md pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="" style={{}}>自选列表</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md bg-white/5 px-3 py-2.5 text-xs font-medium text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-colors" href="#" style={{}}>
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="">合约</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="">期货</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#">
<svg className="lucide lucide-arrow-left-right h-4 w-4" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
<span className="">套利</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-2 h-4 w-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="">期权</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="">外盘</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-dollar-sign h-4 w-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="">外汇</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="" style={{}}>股票</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-compass h-4 w-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="" style={{}}>环球</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-newspaper h-4 w-4" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
<span className="" style={{}}>资讯</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-sliders h-4 w-4" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
<span className="" style={{}}>自定义</span>
</a>
<a className="group flex w-full items-center justify-start gap-3 rounded-md px-3 py-2.5 text-xs font-medium text-zinc-500 hover:bg-white/5 hover:text-zinc-200 transition-colors" href="#" style={{}}>
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="" style={{}}>交易</span>
</a>
</div>
</div>

<div className="flex pr-2 pb-0 pl-2 gap-x-3 gap-y-3 items-center">
<div className="relative group cursor-pointer flex items-center gap-3 w-full rounded-md p-2 hover:bg-white/5">
<div className="relative">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 ring-1 ring-transparent transition-all" style={{}}>
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-[#0c0c0e]" style={{}}></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">User</span>
<span className="text-[10px] text-zinc-500" style={{}}>Premium Plan</span>
</div>
</div>
</div>
</div>

<div className="flex flex-1 flex-col h-full overflow-hidden relative min-w-0">
<div className="flex flex-1 overflow-hidden">

<div className="flex flex-col bg-[#0c0c0e] w-[220px] border-white/5 border-r">
<div className="flex items-center justify-between border-b border-white/5 px-4 py-3" style={{}}>
<h2 className="text-sm font-medium text-white" style={{}}>自选列表</h2>
<div className="flex gap-2 text-zinc-500" style={{}}>
<svg className="lucide lucide-layout-grid h-4 w-4 cursor-pointer hover:text-white" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<svg className="lucide lucide-list h-4 w-4 cursor-pointer hover:text-white" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
</div>
</div>

<div className="flex gap-4 text-xs border-white/5 border-b pt-3 pr-4 pb-3 pl-4 gap-x-4 gap-y-4">
<button className="decoration-zinc-500 decoration-2 underline-offset-8 hover:underline font-medium text-white">上海商品期货</button>
<button className="hover:text-zinc-300 font-medium text-zinc-500">自选股</button>
<button className="ml-auto text-zinc-500 hover:text-white transition-colors">
<svg className="lucide lucide-settings text-neutral-500 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto pt-0 pb-0">

<div className="group flex cursor-pointer hover:bg-white/[0.06] border-blue-500 border-l-2 pt-2 pr-4 pb-2 pl-4 items-center justify-between">
<div className="">
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-white">不锈钢主连</span>
</div>
<div className="text-[10px] text-zinc-500">ss9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-rose-500">
                  13125
                </div>
<div className="text-[10px] font-medium text-rose-500">+0.57%</div>
</div>
</div>

<div className="group flex cursor-pointer hover:bg-white/[0.02] border-transparent border-l-2 items-center justify-between px-4 py-2">
<div className="">
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-zinc-300">
                    欧线集运主连
                  </span>
</div>
<div className="text-[10px] text-zinc-500">ec9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-rose-500">
                  1801.3
                </div>
<div className="text-[10px] font-medium text-rose-500">+0.52%</div>
</div>
</div>

<div className="group flex cursor-pointer hover:bg-white/[0.02] border-transparent border-l-2 items-center justify-between px-4 py-2">
<div>
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-zinc-300">
                    双胶纸主连
                  </span>
</div>
<div className="text-[10px] text-zinc-500">op9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-rose-500">
                  4178
                </div>
<div className="text-[10px] font-medium text-rose-500">+0.48%</div>
</div>
</div>

<div className="group flex cursor-pointer hover:bg-white/[0.02] border-transparent border-l-2 items-center justify-between px-4 py-2">
<div className="">
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-zinc-300">纸浆主连</span>
</div>
<div className="text-[10px] text-zinc-500">sp9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-rose-500">
                  5532
                </div>
<div className="text-[10px] font-medium text-rose-500">+0.22%</div>
</div>
</div>

<div className="group flex cursor-pointer hover:bg-white/[0.02] border-transparent border-l-2 items-center justify-between px-4 py-2">
<div className="">
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-zinc-300">沪锌主连</span>
</div>
<div className="text-[10px] text-zinc-500">zn9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-rose-500">
                  23275
                </div>
<div className="text-[10px] font-medium text-rose-500">+0.06%</div>
</div>
</div>

<div className="group flex cursor-pointer hover:bg-white/[0.02] border-transparent border-l-2 items-center justify-between px-4 py-2">
<div className="">
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-zinc-300">
                    合成橡胶主连
                  </span>
</div>
<div className="text-[10px] text-zinc-500">br9999</div>
</div>
<div className="text-right">
<div className="text-xs font-mono font-medium text-emerald-500">
                  11520
                </div>
<div className="text-[10px] font-medium text-emerald-500">
                  -0.26%
                </div>
</div>
</div>
</div>
</div>

<div className="flex min-w-0 flex-1 flex-col bg-[#131315]">

<header className="flex h-14 border-white/5 border-b pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-100" style={{}}>
<svg className="lucide lucide-home h-4 w-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<span className="text-zinc-700" style={{}}>/</span>
<button className="text-zinc-500 hover:text-zinc-100" style={{}}>
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="text-zinc-500 hover:text-zinc-100" style={{}}>
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="relative w-64">
<svg className="lucide lucide-search absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="h-8 w-full rounded-full border border-white/5 bg-white/5 pl-9 pr-4 text-xs text-zinc-200 placeholder-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-0" placeholder="搜索市场..." style={{}} type="text"/>
</div>
<div className="flex items-center gap-4">

<button className="text-zinc-500 hover:text-zinc-100 transition-colors" title="Wallet">
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</button>

<button className="text-zinc-500 hover:text-zinc-100 transition-colors" title="Download">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>

<button className="text-zinc-500 hover:text-zinc-100 transition-colors" title="Language">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>

<button className="text-zinc-500 hover:text-zinc-100 transition-colors" title="Settings">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>

<button className="text-zinc-500 hover:text-zinc-100 transition-colors" title="Help">
<svg className="lucide lucide-help-circle h-4 w-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>

<button className="text-zinc-500 hover:text-zinc-100 transition-colors">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>

<button className="relative text-zinc-500 hover:text-zinc-100 transition-colors">
<svg className="lucide lucide-bell h-4 w-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-rose-500 ring-2 ring-[#131315]"></span>
</button>
</div>
</header>

<div className="flex border-white/5 border-b pt-2 pr-4 pb-2 pl-4 items-end justify-between">
<div className="flex gap-x-8 gap-y-8 items-start">
<div className="gap-x-8 gap-y-8">
<h1 className="flex items-center gap-4 text-base font-semibold text-white tracking-tight">
<span className="">同花顺商品</span>
<div className="flex gap-4 text-red-500 font-mono gap-x-2 gap-y-4 items-center">
<span className="">2766</span>
<span className="">2.70</span>
<span className="">+0.99%</span>
</div>
</h1>
<div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
<span className="">850001</span>
<div className="flex items-center gap-1">
<span className="flex items-center justify-center text-[10px] leading-none font-medium text-fuchsia-500 bg-fuchsia-500/5 border-fuchsia-500/40 border rounded-[3px] pt-[1px] pr-1 pb-[1px] pl-1 shadow-[0_0_5px_rgba(217,70,239,0.1)]">
                      CN
                    </span>
<span className="flex items-center justify-center rounded-[3px] border border-yellow-500/40 bg-yellow-500/5 px-1 py-[1px] text-[10px] font-medium leading-none text-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.1)]">
                      上期所
                    </span>
<span className="flex items-center justify-center rounded-[3px] border border-indigo-400/40 bg-indigo-500/5 px-1 py-[1px] text-[10px] font-medium leading-none text-indigo-400 shadow-[0_0_5px_rgba(129,140,248,0.1)]">
                      L2
                    </span>
</div>
</div>
</div>
</div>

<div className="self-center">
<button className="flex cursor-not-allowed items-center gap-1.5 rounded-full bg-white/10 pl-3 pr-4 py-1.5 text-xs font-medium text-zinc-400 transition-all" disabled="">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>已加自选</span>
</button>
</div>
</div>

<div className="flex flex-1 min-h-0 px-1 py-1">

<div className="flex flex-1 flex-col min-w-0 m-2 gap-2">

<div className="relative flex flex-1 flex-col bg-[#131315] rounded-2xl border border-white/5 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden z-10" style={{}}>

<div className="flex border-white/5 border-b pt-2 pr-3 pb-2 pl-4 items-center justify-between">
<div className="flex items-center gap-4 text-xs">
<button className="flex items-center gap-1.5 text-zinc-300 hover:text-white" style={{}}>
<span className="" style={{}}>日内交易</span>
<svg className="lucide lucide-x h-3 w-3 text-zinc-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="text-zinc-500 hover:text-white" style={{}}>
                      自定义
                    </button>
<button className="text-zinc-500 hover:text-white" style={{}}>
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex items-center gap-2">
<button className="rounded p-1 text-zinc-500 hover:bg-white/5 hover:text-zinc-100" style={{}}>
<svg className="lucide lucide-maximize-2 h-3.5 w-3.5" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between border-b border-white/5 px-4 py-2 text-xs" style={{}}>
<div className="flex items-center gap-4 text-zinc-500" style={{}}>
<button className="hover:text-zinc-200" style={{}}>1分</button>
<button className="hover:text-zinc-200" style={{}}>5分</button>
<button className="hover:text-zinc-200" style={{}}>15分</button>
<button className="hover:text-zinc-200" style={{}}>30分</button>
<button className="font-medium text-white" style={{}}>
                      1小时
                    </button>
<button className="hover:text-zinc-200" style={{}}>4小时</button>
<button className="hover:text-zinc-200" style={{}}>日K</button>
<svg className="lucide lucide-chevron-down h-3 w-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<div className="mx-2 h-3 w-px bg-zinc-800" style={{}}></div>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-bar-chart-2 h-4 w-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-activity h-4 w-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="flex gap-2 text-zinc-500" style={{}}>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-camera h-4 w-4" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="relative flex flex-1 flex-col min-h-0">

<div className="absolute left-16 top-4 z-10 flex gap-4 text-[10px]">
<div className="flex items-center gap-2 rounded bg-black/40 px-2 py-1 backdrop-blur-sm">
<span className="font-bold text-white/70" style={{}}>B</span>
<span className="font-medium text-zinc-400" style={{}}>
                        BTC/USD
                      </span>
<span className="text-rose-500" style={{}}>O 87,767.0</span>
<span className="text-rose-500" style={{}}>H 87,767.0</span>
<span className="text-rose-500" style={{}}>L 87,592.1</span>
<span className="text-rose-500" style={{}}>C 87,616.8</span>
<span className="text-rose-500" style={{}}>-150.2 (-0.17%)</span>
<span className="text-zinc-400" style={{}}>已收盘</span>
</div>
</div>

<div className="flex w-10 flex-col items-center gap-4 border-r border-white/5 py-4 text-zinc-500" style={{}}>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-crosshair w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style="
                          width: 16px;
                          height: 16px;
                          color: rgb(228, 228, 231);
                        " viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-hash h-4 w-4" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-pencil h-4 w-4" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-type h-4 w-4" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-activity h-4 w-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-smile h-4 w-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-ruler h-4 w-4" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-magnet h-4 w-4" data-lucide="magnet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 15 4 4"></path><path d="M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z"></path><path d="m5 8 4 4"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="hover:text-zinc-200" style={{}}>
<svg className="lucide lucide-trash-2 h-4 w-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>

<div className="chart-grid overflow-hidden absolute top-0 right-0 bottom-0 left-10">


<div className="absolute bottom-6 left-0 right-0 flex h-24 items-end gap-[1px] px-10 opacity-50">
<div className="h-8 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-12 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-6 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-16 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-10 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-20 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-14 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-8 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-4 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-24 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-12 w-2 bg-rose-900/60" style={{}}></div>
<div className="ml-2 h-16 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-10 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-14 w-2 bg-emerald-900/60" style={{}}></div>
<div className="h-20 w-2 bg-rose-900/60" style={{}}></div>
<div className="h-8 w-2 bg-emerald-900/60" style={{}}></div>
<div className="ml-auto flex items-end gap-1 px-4 text-[10px] text-zinc-500" style={{}}>
<span className="" style={{}}>5</span>
<span style={{}}>7</span>
<span style={{}}>9</span>
<span style={{}}>11</span>
<span style={{}}>14</span>
<span style={{}}>17</span>
<span style={{}}>20</span>
<span style={{}}>23</span>
<span style={{}}>26</span>
<span style={{}}>29</span>
<span className="" style={{}}>2</span>
<span style={{}}>4</span>
<span style={{}}>6</span>
<span style={{}}>8</span>
<span style={{}}>10</span>
<span style={{}}>13</span>
</div>
</div>
</div>

<div className="absolute right-0 top-0 flex h-full flex-col justify-between py-10 pr-2 text-right text-[10px] text-zinc-500" style={{}}>
<span className="" style={{}}>89,700</span>
<span style={{}}>88,400</span>
<span style={{}}>87,750</span>
<span className="" style={{}}>300</span>
<span style={{}}>150</span>
<span className="" style={{}}>75</span>
<span style={{}}>0</span>
</div>
</div>
</div>

<div className="relative flex h-72 flex-col bg-[#0c0c0e] rounded-2xl border border-white/5 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden z-10" style={{}}>

<div className="flex items-center justify-between border-b border-white/5 px-2 py-2" style={{}}>
<div className="flex items-center gap-2">
<div className="flex h-6 items-center gap-4 px-2">
<button className="text-[11px] font-medium text-white" style={{}}>
                        资讯
                      </button>
<button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300" style={{}}>
                        关联品种
                      </button>
<button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300" style={{}}>
                        相关合约
                      </button>
<button className="text-[11px] font-medium text-zinc-500 hover:text-zinc-300" style={{}}>
                        期权链
                      </button>
</div>
</div>
<button className="flex items-center gap-1 rounded border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400 hover:bg-blue-500/20" style={{}}>
<span style={{}}>持仓分析</span>
</button>
</div>

<div className="flex-1 overflow-hidden z-30 relative">
<div className="h-full overflow-y-auto py-1">

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          “反内卷”的风吹到金属产业链铝与氧化铝价格
                          “反向背离” 不可持续
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        11:14
                      </span>
</div>

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          高性能氧化铝陶瓷——半导体装备中应用广泛的陶瓷材料
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        01-02
                      </span>
</div>

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          氧化铝月报：铝元素-平衡表未改，关注短期扰动
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        01-01
                      </span>
</div>

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          铝系品种年度报告：铝价存趋势格局，氧化铝寻底路漫漫
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        01-01
                      </span>
</div>

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          【持仓分析】氧化铝前20期货商净空头持仓骤降2.5万手！
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        12-31
                      </span>
</div>

<div className="group flex cursor-pointer items-center justify-between px-3 py-1.5 text-xs hover:bg-white/5">
<div className="flex items-center gap-2 overflow-hidden">
<span className="shrink-0 text-zinc-500" style={{}}>[资讯]</span>
<span className="truncate text-zinc-300 group-hover:text-zinc-100" style={{}}>
                          【库存】12月31日全国氧化铝港口库存较上周增加0.50万吨
                        </span>
</div>
<span className="shrink-0 font-mono text-zinc-600 group-hover:text-zinc-400" style={{}}>
                        12-31
                      </span>
</div>
</div>

<div className="z-30 flex shadow-black/50 bg-[#101014] border-blue-500/20 border rounded-xl pt-2 pr-2 pb-2 pl-3 absolute right-2 bottom-2 left-2 shadow-xl scale-100 items-center justify-between"><div className="absolute inset-0" data-container-bg="true"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>
<div className="flex items-center gap-2.5">
<div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-400" style={{}}>
<svg className="lucide lucide-bot h-3.5 w-3.5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<div className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full ring-2 ring-[#101014] bg-blue-500" style={{}}></div>
</div>
<span className="text-xs text-zinc-300" style={{}}>
                        AI全网监控，今日暂无氧化铝相关大事发生
                      </span>
<button className="flex items-center gap-0.5 text-xs text-blue-400 hover:text-blue-300" style={{}}>
<span className="" style={{}}>展开</span>
<svg className="lucide lucide-chevron-down h-3 w-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<button className="text-zinc-500 hover:text-zinc-300" style={{}}>
<svg className="lucide lucide-x h-3.5 w-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="flex w-[280px] flex-col gap-2 my-2 mr-2 z-10">

<div className="flex flex-col bg-[#131315] rounded-2xl border border-white/5 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden shrink-0">

<div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
<h3 className="text-sm font-medium text-white">盘口数据</h3>
<svg className="lucide lucide-hexagon text-zinc-500 hover:text-white cursor-pointer" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>

<div className="grid grid-cols-2 text-xs pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-1.5">

<div className="flex justify-between items-center">
<span className="text-zinc-500">开盘</span>
<span className="font-mono text-rose-500">2761</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">日增仓</span>
<span className="font-mono text-emerald-500">-30866</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">涨停</span>
<span className="text-zinc-300 font-mono">2930</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">昨持仓</span>
<span className="font-mono text-zinc-300">40.42万</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">跌停</span>
<span className="font-mono text-zinc-300">2547</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">持仓</span>
<span className="font-mono text-zinc-300">37.33万</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">最高</span>
<span className="font-mono text-rose-500">2821</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">振幅</span>
<span className="font-mono text-zinc-300">3.27%</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">最低</span>
<span className="font-mono text-emerald-500">2731</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">现手</span>
<span className="font-mono text-zinc-300">90</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">均价</span>
<span className="font-mono text-rose-500">2766</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">成交量</span>
<span className="font-mono text-zinc-300">74.26万</span>
</div>

<div className="flex justify-between items-center">
<span className="text-zinc-500">量比</span>
<span className="font-mono text-zinc-300">1.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">成交额</span>
<span className="font-mono text-zinc-300">410.81亿</span>
</div>

<div className="flex items-center justify-between">
<span className="text-zinc-500">昨结</span>
<span className="font-mono text-zinc-300">2739</span>
</div>
<div className="flex justify-between items-center">
<span className="text-zinc-500">外盘</span>
<span className="font-mono text-zinc-300">36.84万</span>
</div>
</div>
</div>

<div className="flex flex-1 flex-col bg-[#131315] rounded-2xl border border-white/5 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden relative" style={{}}>

<div className="flex items-center justify-between border-b border-white/5 px-4 py-2" style={{}}>
<h3 className="text-sm font-medium text-white" style={{}}>行情</h3>
<svg className="lucide lucide-maximize-2 h-3 w-3 text-zinc-500 cursor-pointer hover:text-white" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</div>

<div className="grid grid-cols-3 px-4 py-2 text-[10px] text-zinc-500" style={{}}>
<div className="text-left" style={{}}>价格</div>
<div className="text-right" style={{}}>总量</div>
<div className="text-right" style={{}}>涨跌幅</div>
</div>

<div className="flex-1 overflow-y-auto font-mono text-[11px]">

<div className="grid cursor-pointer grid-cols-3 gap-1 hover:bg-white/5 pt-1.5 pr-4 pb-1.5 pl-4 relative" style="
                      mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                      -webkit-mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                    ">
<div className="z-10 text-rose-500" style={{}}>$47,290</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.3191
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.04%
                    </div>
<div className="absolute right-0 top-0 h-full w-[30%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,295</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.7882
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.04%
                    </div>
<div className="absolute right-0 top-0 h-full w-[70%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,300</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.1477
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[15%] bg-rose-500/10" style={{}}></div>
</div>
<div className="grid cursor-pointer grid-cols-3 gap-1 hover:bg-white/5 pt-1.5 pr-4 pb-1.5 pl-4 relative" style="
                      mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                      -webkit-mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                    ">
<div className="z-10 text-rose-500" style={{}}>$47,305</div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[45%] bg-rose-500/10" style={{}}></div>
</div>
<div className="grid cursor-pointer grid-cols-3 gap-1 hover:bg-white/5 pt-1.5 pr-4 pb-1.5 pl-4 relative" style="
                      mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                      -webkit-mask-image: linear-gradient(
                        170deg,
                        transparent,
                        black 0%,
                        black 100%,
                        transparent
                      );
                    ">
<div className="text-rose-500 z-0" style="
                        mask-image: linear-gradient(
                          170deg,
                          transparent,
                          black 0%,
                          black 100%,
                          transparent
                        );
                        -webkit-mask-image: linear-gradient(
                          170deg,
                          transparent,
                          black 0%,
                          black 100%,
                          transparent
                        );
                      ">
                      $47,310
                    </div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.2271
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.05%
                    </div>
<div className="absolute right-0 top-0 h-full w-[20%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,315</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.4087
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.02%
                    </div>
<div className="absolute right-0 top-0 h-full w-[40%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,320</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.1241
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.02%
                    </div>
<div className="absolute right-0 top-0 h-full w-[10%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,325</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.6190
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.06%
                    </div>
<div className="absolute right-0 top-0 h-full w-[60%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500">$47,330</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.5082
                    </div>
<div className="text-rose-500 text-right z-10">+0.02%</div>
<div className="absolute right-0 top-0 h-full w-[50%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,335</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.5846
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.06%
                    </div>
<div className="absolute right-0 top-0 h-full w-[55%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,340</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.1782
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.01%
                    </div>
<div className="absolute right-0 top-0 h-full w-[18%] bg-rose-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-rose-500" style={{}}>$47,345</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.3766
                    </div>
<div className="z-10 text-right text-rose-500" style={{}}>
                      +0.04%
                    </div>
<div className="absolute right-0 top-0 h-full w-[35%] bg-rose-500/10" style={{}}></div>
</div>

<div className="my-2 border-t border-white/5" style={{}}></div>

<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,240</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.2500
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[25%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,235</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.2967
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.02%
                    </div>
<div className="absolute right-0 top-0 h-full w-[29%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,230</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.7129
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[70%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,225</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.8517
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.02%
                    </div>
<div className="absolute right-0 top-0 h-full w-[85%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,220</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.4070
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.02%
                    </div>
<div className="absolute right-0 top-0 h-full w-[40%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,215</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.2115
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[20%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,210</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.3245
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.03%
                    </div>
<div className="absolute right-0 top-0 h-full w-[30%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,205</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.1854
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.04%
                    </div>
<div className="absolute right-0 top-0 h-full w-[18%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,200</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.9818
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.06%
                    </div>
<div className="absolute right-0 top-0 h-full w-[98%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,195</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.6193
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.06%
                    </div>
<div className="absolute right-0 top-0 h-full w-[60%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,190</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.1097
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.04%
                    </div>
<div className="absolute right-0 top-0 h-full w-[10%] bg-emerald-500/10" style={{}}></div>
</div>
<div className="relative grid cursor-pointer grid-cols-3 gap-1 px-4 py-1.5 hover:bg-white/5">
<div className="z-10 text-emerald-500" style={{}}>$47,185</div>
<div className="z-10 text-right text-zinc-400" style={{}}>
                      0.6451
                    </div>
<div className="z-10 text-right text-emerald-500" style={{}}>
                      -0.05%
                    </div>
<div className="absolute right-0 top-0 h-full w-[64%] bg-emerald-500/10" style={{}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex shrink-0 text-xs bg-[#0c0c0e] border-white/5 border-t pt-1.5 pr-4 pb-1.5 pl-4 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex -translate-x-6 scale-90 gap-x-6 items-center">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-300">沪指</span>
<span className="font-mono font-medium text-rose-500">3978.84</span>
<div className="flex items-center gap-4 text-[11px]">
<span className="font-mono text-rose-500">+3.72</span>
<span className="font-mono text-rose-500">+0.09%</span>
</div>
<span className="font-mono text-zinc-500">8267.21亿</span>
</div>
<div className="h-3 w-px bg-zinc-800"></div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-300">同花顺商品</span>
<span className="font-mono font-medium text-rose-500">2766</span>
<div className="flex items-center gap-4 text-[11px]">
<span className="font-mono text-rose-500">+2.70</span>
<span className="font-mono text-rose-500">+0.99%</span>
</div>
</div>
</div>
<span className="font-mono text-zinc-500">12/21 17:21:43</span>
</div>
</div>


    </>
  );
}
