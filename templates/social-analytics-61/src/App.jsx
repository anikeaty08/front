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
      

<aside className="w-[5.5rem] bg-white flex flex-col items-center py-8 flex-shrink-0 z-30 hidden md:flex border-r border-slate-50/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">

<div className="mb-14">
<svg className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"></path>
<path d="M9 10v4"></path>
<path d="M12 8v8"></path>
<path d="M15 10v4"></path>
</svg>
</div>

<nav className="flex flex-col gap-9 w-full items-center">
<a className="w-10 h-10 flex items-center justify-center rounded-xl bg-rose-50 text-rose-500 transition-all shadow-sm group" href="#">
<i className="w-5 h-5" data-lucide="activity"></i>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 12L12 3"></path>
<path d="M12 12L18.36 18.36"></path>
</svg>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="calendar"></i>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="sliders-horizontal"></i>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
</nav>
<div className="mt-auto">
<a className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="log-out"></i>
</a>
</div>
</aside>

<main className="flex-1 flex overflow-hidden relative">

<div className="flex-1 overflow-y-auto no-scrollbar p-6 lg:p-12 scroll-smooth">

<header className="flex justify-between items-center mb-10">
<div className="flex items-center gap-6">
<button className="md:hidden p-2 text-slate-500">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="hidden md:flex gap-1 text-slate-400 hover:text-slate-600 cursor-pointer">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
</div>
</div>

<div className="hidden md:block text-slate-300 hover:text-slate-500 cursor-pointer">
<i className="w-5 h-5" data-lucide="menu"></i>
</div>
</div>
<div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-card cursor-pointer hover:shadow-md transition-shadow">
<span className="text-[11px] font-bold text-slate-600 tracking-wider uppercase">Last 15 Days</span>
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-down"></i>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

<div className="bg-white p-7 rounded-[2rem] shadow-soft flex flex-col justify-between h-48 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-2">
<div className="text-[#1DA1F2]">
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
</div>
</div>
<div>
<h3 className="text-[2.5rem] leading-tight font-medium text-slate-800 tracking-tight">280k</h3>
<p className="text-sm font-medium text-slate-400 pl-0.5">Followers</p>
</div>
<div className="absolute bottom-7 right-7 flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-800"></div>
</div>
</div>

<div className="bg-white p-7 rounded-[2rem] shadow-soft flex flex-col justify-between h-48 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-2">

<div className="relative w-8 h-8">
<svg className="w-full h-full" fill="none" stroke="url(#insta-grad)" strokeWidth="2" viewbox="0 0 24 24">
<defs>
<lineargradient id="insta-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#f09433'}}></stop>
<stop offset="50%" style={{stopColor: '#e6683c'}}></stop>
<stop offset="100%" style={{stopColor: '#bc1888'}}></stop>
</lineargradient>
</defs>
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<i className="w-5 h-5 text-slate-600" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-[2.5rem] leading-tight font-medium text-slate-800 tracking-tight">680k</h3>
<p className="text-sm font-medium text-slate-400 pl-0.5">Followers</p>
</div>
<div className="absolute bottom-7 right-7 flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-800"></div>
</div>
</div>

<div className="bg-white p-7 rounded-[2rem] shadow-soft flex flex-col justify-between h-48 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-2">
<div className="text-[#FF0000]">
<svg className="w-9 h-9 fill-current" viewbox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon fill="white" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
</div>
</div>
<div>
<h3 className="text-[2.5rem] leading-tight font-medium text-slate-800 tracking-tight">2.3M</h3>
<p className="text-sm font-medium text-slate-400 pl-0.5">Followers</p>
</div>
<div className="absolute bottom-7 right-7 flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-800"></div>
</div>
</div>

<div className="bg-white p-7 rounded-[2rem] shadow-soft flex flex-col justify-between h-48 relative overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-2">
<div className="text-[#1877F2]">
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
</div>
<div>
<h3 className="text-[2.5rem] leading-tight font-medium text-slate-800 tracking-tight">50k</h3>
<p className="text-sm font-medium text-slate-400 pl-0.5">Followers</p>
</div>
<div className="absolute bottom-7 right-7 flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="w-1 h-1 rounded-full bg-slate-800"></div>
</div>
</div>
</div>

<div className="bg-white p-9 rounded-[2rem] shadow-soft mb-10">
<div className="flex justify-between items-center mb-10">
<h2 className="text-lg font-semibold text-slate-800">Instagram Subscribers</h2>
<div className="flex gap-6 text-xs font-semibold tracking-wide">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#F5C564]"></span>
<span className="text-slate-600">Gained</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#E84A5F]"></span>
<span className="text-slate-600">Lost</span>
</div>
</div>
</div>
<div className="flex relative h-64 items-end justify-between w-full pl-2 pr-4">

<div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[11px] font-medium text-slate-300 w-8">
<span>100</span>
<span>50</span>
<span>0</span>
<span>-50</span>
</div>

<div className="flex-1 flex justify-between items-end pl-12 h-full pb-8 w-full relative">

<div className="absolute left-12 right-0 bottom-[33%] border-t border-slate-100 z-0"></div>

<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">

<div className="w-full h-full relative">

<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3 group-hover:brightness-95" style={{height: '35%'}}></div>

<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3 group-hover:brightness-95" style={{height: '15%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 5</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '15%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '8%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 7</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '15%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '10%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 9</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '40%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '20%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 11</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '60%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '8%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 13</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '10%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '5%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 11</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '35%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '10%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 13</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '25%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '18%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 15</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '42%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '8%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 15</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '15%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '18%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 17</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '35%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '15%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 17</span>
</div>
<div className="flex flex-col items-center gap-4 h-full relative group cursor-pointer w-full z-10">
<div className="w-full h-full relative">
<div className="absolute bottom-[33%] left-1/2 -translate-x-1/2 w-2.5 bg-[#F5C564] rounded-t-full rounded-b-[1px] transition-all duration-300 group-hover:w-3" style={{height: '18%'}}></div>
<div className="absolute top-[67%] left-1/2 -translate-x-1/2 w-2.5 bg-[#E84A5F] rounded-b-full rounded-t-[1px] transition-all duration-300 group-hover:w-3" style={{height: '8%'}}></div>
</div>
<span className="text-[10px] text-slate-300 font-semibold uppercase tracking-wide absolute -bottom-1">Feb 19</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white p-9 rounded-[2rem] shadow-soft">
<h2 className="text-lg font-semibold text-slate-800 mb-8">Key Metricks</h2>
<div className="space-y-8">

<div className="flex items-center text-sm">
<span className="w-24 font-medium text-slate-500">Clicks</span>
<span className="w-10 font-bold text-slate-800 text-right mr-5">10k</span>
<div className="flex-1 h-[2px] bg-slate-100 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[20%] right-[30%] h-[3px] bg-[#F5C564]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[20%] w-[2px] h-2.5 bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 right-[30%] w-[2px] h-2.5 bg-slate-800"></div>
</div>
<span className="w-10 font-bold text-slate-800 text-left ml-5">12k</span>
</div>

<div className="flex items-center text-sm">
<span className="w-24 font-medium text-slate-500">Likes</span>
<span className="w-10 font-bold text-slate-800 text-right mr-5">680</span>
<div className="flex-1 h-[2px] bg-slate-100 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[45%] right-[25%] h-[3px] bg-emerald-400"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[45%] w-[2px] h-2.5 bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 right-[25%] w-[2px] h-2.5 bg-slate-800"></div>
</div>
<span className="w-10 font-bold text-slate-800 text-left ml-5">520</span>
</div>

<div className="flex items-center text-sm">
<span className="w-24 font-medium text-slate-500">Followers</span>
<span className="w-10 font-bold text-slate-800 text-right mr-5">8k</span>
<div className="flex-1 h-[2px] bg-slate-100 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[15%] right-[45%] h-[3px] bg-[#F5C564]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[15%] w-[2px] h-2.5 bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 right-[45%] w-[2px] h-2.5 bg-slate-800"></div>
</div>
<span className="w-10 font-bold text-slate-800 text-left ml-5">12.5k</span>
</div>

<div className="flex items-center text-sm">
<span className="w-24 font-medium text-slate-500">Impressions</span>
<span className="w-10 font-bold text-slate-800 text-right mr-5">369</span>
<div className="flex-1 h-[2px] bg-slate-100 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[25%] right-[25%] h-[3px] bg-emerald-400"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[25%] w-[2px] h-2.5 bg-slate-800"></div>
<div className="absolute top-1/2 -translate-y-1/2 right-[25%] w-[2px] h-2.5 bg-slate-800"></div>
</div>
<span className="w-10 font-bold text-slate-800 text-left ml-5">10k</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">

<div className="bg-gradient-to-br from-[#59405C] to-[#422F43] p-7 rounded-[2rem] text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
<div className="text-center z-10">
<p className="text-[11px] text-white/60 mb-2 leading-tight font-medium">Engaged<br/>Users</p>
<h3 className="text-[1.75rem] font-medium tracking-tight">12.2k</h3>
</div>
<div className="h-14 w-full z-10 my-1 relative translate-y-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="gradGreen" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(52, 211, 153, 0.2)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(52, 211, 153, 0)'}}></stop>
</lineargradient>
</defs>
<path d="M0 35 C 20 35, 30 25, 50 25 S 80 10, 100 5" fill="none" stroke="#34D399" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0 35 C 20 35, 30 25, 50 25 S 80 10, 100 5 V 50 H 0 Z" fill="url(#gradGreen)" stroke="none"></path>
</svg>
</div>
<div className="text-center z-10 flex items-center justify-center gap-1.5 text-[11px] text-[#34D399] font-bold">
<i className="w-3 h-3 stroke-[3]" data-lucide="arrow-up"></i> 19%
                        </div>
</div>

<div className="bg-gradient-to-br from-[#59405C] to-[#422F43] p-7 rounded-[2rem] text-white flex flex-col justify-between shadow-lg relative overflow-hidden group">
<div className="text-center z-10">
<p className="text-[11px] text-white/60 mb-2 leading-tight font-medium">Page<br/>Impressions</p>
<h3 className="text-[1.75rem] font-medium tracking-tight">8.6k</h3>
</div>
<div className="h-14 w-full z-10 my-1 relative translate-y-2">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="gradRed" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgba(251, 113, 133, 0.2)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(251, 113, 133, 0)'}}></stop>
</lineargradient>
</defs>
<path d="M0 15 C 20 40, 40 35, 60 25 S 80 30, 100 35" fill="none" stroke="#FB7185" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0 15 C 20 40, 40 35, 60 25 S 80 30, 100 35 V 50 H 0 Z" fill="url(#gradRed)" stroke="none"></path>
</svg>
</div>
<div className="text-center z-10 flex items-center justify-center gap-1.5 text-[11px] text-[#FB7185] font-bold">
<i className="w-3 h-3 stroke-[3]" data-lucide="arrow-down"></i> 9%
                        </div>
</div>
</div>
</div>
</div>

<aside className="w-[23rem] bg-white border-l border-slate-50 hidden xl:flex flex-col p-10 overflow-y-auto no-scrollbar shadow-[-10px_0_40px_rgba(0,0,0,0.015)] z-20">

<div className="flex justify-between items-center mb-10">
<i className="w-6 h-6 text-slate-800 cursor-pointer hover:text-slate-600 stroke-[1.5]" data-lucide="bell"></i>
<div className="bg-rose-50 px-4 py-2.5 rounded-lg flex items-center gap-2 shadow-sm cursor-pointer">
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="gift"></i>
<span className="text-[10px] font-bold text-rose-500 tracking-wider uppercase">2 New Updates</span>
</div>
<i className="w-6 h-6 text-slate-800 cursor-pointer hover:text-slate-600 stroke-[1.5]" data-lucide="user"></i>
</div>

<div className="bg-[#F8F9FA] rounded-[2rem] p-4 mb-10 flex items-center justify-center relative min-h-[160px]">
<img alt="Illustration" className="w-48 opacity-90 object-contain mix-blend-multiply filter contrast-125 grayscale-[20%]" src="https://img.freepik.com/free-vector/business-team-brainstorming-discussing-startup-project_74855-13864.jpg?w=900&amp;t=st=1709405000~exp=1709405600~hmac=xyz"/>
</div>

<div className="mb-12 px-2">
<h3 className="text-base font-bold text-slate-900 mb-8">February 2020</h3>
<div className="grid grid-cols-7 gap-y-7 gap-x-2 text-center text-[12px]">
<div className="text-[#E84A5F] font-bold mb-2">S</div>
<div className="text-[#E84A5F] font-bold mb-2">M</div>
<div className="text-[#E84A5F] font-bold mb-2">T</div>
<div className="text-[#E84A5F] font-bold mb-2">W</div>
<div className="text-[#E84A5F] font-bold mb-2">T</div>
<div className="text-[#E84A5F] font-bold mb-2">F</div>
<div className="text-[#E84A5F] font-bold mb-2">S</div>

<div className="text-slate-300 font-medium">26</div>
<div className="text-slate-300 font-medium">27</div>
<div className="text-slate-300 font-medium">28</div>
<div className="text-slate-300 font-medium">29</div>
<div className="text-slate-300 font-medium">30</div>
<div className="text-slate-300 font-medium">31</div>
<div className="text-slate-800 font-bold">1</div>
<div className="text-slate-800 font-bold relative">
                        2
                        <span className="absolute -top-1 right-2 flex gap-0.5">
<span className="w-1 h-1 bg-[#F5C564] rounded-full"></span>
<span className="w-1 h-1 bg-[#E84A5F] rounded-full"></span>
</span>
</div>
<div className="text-slate-800 font-bold">3</div>
<div className="text-slate-800 font-bold">4</div>
<div className="text-slate-800 font-bold">5</div>
<div className="text-slate-800 font-bold">6</div>
<div className="text-slate-800 font-bold">7</div>
<div className="text-slate-800 font-bold">8</div>
<div className="text-slate-800 font-bold">9</div>
<div className="text-slate-800 font-bold">10</div>
<div className="text-slate-800 font-bold">11</div>
<div className="text-slate-800 font-bold relative">
                        12
                        <span className="absolute -top-1 right-1.5 flex gap-0.5">
<span className="w-1 h-1 bg-[#F5C564] rounded-full"></span>
<span className="w-1 h-1 bg-[#E84A5F] rounded-full"></span>
</span>
</div>
<div className="text-slate-800 font-bold">13</div>
<div className="text-slate-800 font-bold">14</div>
<div className="text-slate-800 font-bold">15</div>
<div className="text-slate-800 font-bold">16</div>
<div className="text-slate-800 font-bold">17</div>
<div className="text-slate-800 font-bold relative">
                        18
                         <span className="absolute -top-1 right-2 flex gap-0.5">
<span className="w-1 h-1 bg-[#F5C564] rounded-full"></span>
<span className="w-1 h-1 bg-[#E84A5F] rounded-full"></span>
</span>
</div>
<div className="text-slate-800 font-bold">19</div>
<div className="text-slate-800 font-bold">20</div>
<div className="text-slate-800 font-bold relative">
                        21
                         <span className="absolute -top-1 right-2 flex gap-0.5">
<span className="w-1 h-1 bg-[#F5C564] rounded-full"></span>
<span className="w-1 h-1 bg-[#E84A5F] rounded-full"></span>
</span>
</div>
<div className="text-slate-800 font-bold">22</div>
<div className="text-slate-800 font-bold">23</div>
<div className="text-slate-800 font-bold">24</div>
<div className="text-slate-800 font-bold">25</div>
<div className="text-slate-800 font-bold">26</div>
<div className="text-slate-800 font-bold">27</div>
<div className="text-slate-800 font-bold">28</div>
<div className="text-slate-800 font-bold">29</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-4">
<span className="text-xl group-hover:scale-110 transition-transform">🤘</span>
<div className="text-[13px]">
<span className="text-slate-400 font-medium">Say Hi to</span>
<span className="font-bold text-slate-800 ml-0.5">Laith Hart</span>
</div>
</div>
<img alt="User" className="w-10 h-10 rounded-full shadow-sm" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div className="bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex items-center gap-4">
<span className="text-xl group-hover:scale-110 transition-transform">✌️</span>
<div className="text-[13px]">
<span className="text-slate-400 font-medium">Say Hi to</span>
<span className="font-bold text-slate-800 ml-0.5">Sidney Dyer</span>
</div>
</div>
<img alt="User" className="w-10 h-10 rounded-full shadow-sm" src="https://i.pravatar.cc/100?img=5"/>
</div>
</div>
</aside>
</main>


    </>
  );
}
