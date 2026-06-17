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
      
<div className="w-full h-full flex items-center justify-start lg:justify-center overflow-x-auto p-10 no-scrollbar">

<div className="flex flex-row gap-[40px] items-center shrink-0">

<div className="w-[393px] h-[852px] shrink-0 bg-gradient-to-b from-[#0a3161] to-[#04101e] rounded-[50px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-[8px] border-gray-900 relative overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-4 pb-2">
<span className="text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="battery-full" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex items-center gap-3 px-6 mt-2">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1 bg-white/10 border border-white/10 rounded-full h-10 flex items-center px-4 gap-2">
<i className="w-4 h-4 text-gray-300" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-base text-gray-300">Search</span>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
</div>

<div className="px-6 mt-8">
<h1 className="text-3xl font-medium tracking-tight mb-6">Cards</h1>

<div className="w-full h-56 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-800 p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-white/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-center relative z-10">
<span className="text-base font-medium tracking-tight">Revolut Business</span>
<i className="w-5 h-5 rotate-90" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<div className="text-xl font-medium tracking-widest mb-2 text-gray-100">**** **** **** 4912</div>
<div className="flex justify-between items-end">
<div className="text-sm text-gray-200">
<div>Alex Smith</div>
<div>08/28</div>
</div>
<div className="text-2xl font-bold italic tracking-tighter">VISA</div>
</div>
</div>
</div>

<div className="flex justify-between mt-8 px-2">
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Freeze</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Settings</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Details</span>
</div>
</div>
</div>
<div className="mt-8 bg-[#182233] rounded-t-[32px] mx--6 px-6 py-6 pb-32 h-full absolute w-full left-0 top-[520px]">
<h3 className="text-base font-medium mb-6">Recent card activity</h3>
<div className="flex justify-between items-center mb-6">
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/20">
<i className="w-5 h-5" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium tracking-tight">Starbucks</div>
<div className="text-sm text-gray-400">Today, 8:45 AM</div>
</div>
</div>
<div className="text-base font-medium">-S$6.50</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-[#111928]/95 backdrop-blur-md border-t border-white/5 flex justify-between px-2 pt-2 pb-6 z-20">
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 bg-white/10 rounded-2xl">
<i className="w-6 h-6 mb-1 text-white" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-white">Cards</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Transfers</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Merchant</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Treasury</span>
</div>
</div>
</div>

<div className="w-[393px] h-[852px] shrink-0 bg-gradient-to-b from-[#0a3161] to-[#04101e] rounded-[50px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-[8px] border-gray-900 relative overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-4 pb-2">
<span className="text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="battery-full" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex items-center gap-3 px-6 mt-2">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1 bg-white/10 border border-white/20 rounded-full h-10 flex items-center px-4 gap-2">
<i className="w-4 h-4 text-gray-300" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-base text-gray-300">Search</span>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex flex-col items-center mt-12">
<div className="flex items-center gap-2 text-base text-gray-200">
<div className="w-[18px] h-[18px] rounded-full overflow-hidden relative border border-white/20">
<img alt="SGD" className="w-full h-full object-cover" src="https://flagcdn.com/w40/sg.png"/>
</div>
<span className="font-medium">Main · SGD</span>
</div>
<div className="mt-2 flex items-baseline tracking-tight">
<span className="text-[64px] font-medium tracking-tight leading-none">S$9</span>
<span className="text-3xl font-medium">.14</span>
</div>
<span className="text-base text-gray-400 mt-2">Default</span>
<button className="mt-4 px-5 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-full text-base font-medium">
                        Accounts
                    </button>
<div className="flex gap-1.5 mt-8">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
</div>
</div>

<div className="flex justify-between px-8 mt-8">
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Add money</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-sm shadow-white/5">
<i className="w-6 h-6" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Move</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-sm shadow-white/5">
<i className="w-6 h-6" data-lucide="align-justify" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">Details</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center shadow-sm shadow-white/5">
<i className="w-6 h-6" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium">More</span>
</div>
</div>

<div className="mt-8 bg-[#182233] rounded-t-[32px] flex-1 px-5 py-6 w-full relative z-10 pb-32">

<div className="flex justify-between items-center mb-6">
<div className="flex gap-4 items-center">
<div className="relative w-10 h-10">
<div className="absolute top-0 left-0 w-7 h-7 rounded-full bg-[#182233] border-2 border-[#182233] overflow-hidden z-10">
<img className="w-full h-full object-cover" src="https://flagcdn.com/w40/us.png"/>
</div>
<div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-[#182233] border-2 border-[#182233] overflow-hidden">
<img className="w-full h-full object-cover" src="https://flagcdn.com/w40/sg.png"/>
</div>
</div>
<div>
<div className="text-base font-medium tracking-tight">Main · USD → Main · SGD</div>
<div className="text-sm text-gray-400 mt-0.5">Today, 11:17 AM</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium">+S$0.64</div>
<div className="text-sm text-gray-400 mt-0.5">-$0.50</div>
</div>
</div>

<div className="flex justify-between items-center mb-6">
<div className="flex gap-4 items-center">
<div className="relative w-10 h-10">
<div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i>
</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#182233]">
<i className="w-3 h-3 text-black" data-lucide="clock" strokeWidth="2"></i>
</div>
</div>
<div>
<div className="text-base font-medium tracking-tight">Sent via Payout link</div>
<div className="text-sm text-gray-400 mt-0.5">Today, 11:06 AM · Travel</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium">-S$1</div>
</div>
</div>

<div className="flex justify-between items-center mb-4">
<div className="flex gap-4 items-center">
<div className="relative w-10 h-10">
<div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
</div>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-[#182233]">
<i className="w-3 h-3 text-black" data-lucide="arrow-up-right" strokeWidth="2"></i>
</div>
</div>
<div>
<div className="text-base font-medium tracking-tight">To Alexander</div>
<div className="text-sm text-gray-400 mt-0.5">Today, 11:03 AM</div>
</div>
</div>
<div className="text-right">
<div className="text-base font-medium">-S$1</div>
</div>
</div>
<div className="text-center mt-6 text-sm text-gray-400 font-medium pb-4">See all</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-[#111928] border-t border-white/5 flex justify-between items-start px-2 pt-2 pb-6 z-20">
<div className="flex flex-col items-center justify-center w-[72px] h-14 bg-white/10 rounded-2xl">
<div className="font-bold text-lg leading-none mb-1">R</div>
<span className="text-[11px] font-medium text-white">Home</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Cards</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Transfers</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Merchant</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Treasury</span>
</div>
</div>
</div>

<div className="w-[393px] h-[852px] shrink-0 bg-gradient-to-b from-[#0a3161] to-[#04101e] rounded-[50px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-[8px] border-gray-900 relative overflow-hidden flex flex-col">

<div className="flex justify-between items-center px-6 pt-4 pb-2">
<span className="text-sm font-medium">9:41</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="wifi" strokeWidth="1.5"></i>
<i className="w-5 h-5" data-lucide="battery-full" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex items-center gap-3 px-6 mt-2">
<img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex-1 bg-white/10 border border-white/10 rounded-full h-10 flex items-center px-4 gap-2">
<i className="w-4 h-4 text-gray-300" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-base text-gray-300">Search</span>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
</div>

<div className="px-6 mt-8">
<h1 className="text-3xl font-medium tracking-tight mb-6">Transfers</h1>

<div className="flex gap-3 mb-8">
<div className="flex-1 bg-white/10 border border-white/10 rounded-xl h-12 flex items-center px-4 gap-2">
<i className="w-5 h-5 text-gray-300" data-lucide="search" strokeWidth="1.5"></i>
<span className="text-base text-gray-300">Name or @revtag</span>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<h3 className="text-base text-gray-300 font-medium mb-4">Recent</h3>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<div className="flex flex-col items-center gap-2 min-w-[64px]">
<div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center text-xl font-medium shadow-sm shadow-black/20">
                                AS
                            </div>
<span className="text-sm font-medium">Alex</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[64px]">
<div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-xl font-medium shadow-sm shadow-black/20">
                                MJ
                            </div>
<span className="text-sm font-medium">Mary</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[64px]">
<div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-xl font-medium shadow-sm shadow-black/20">
                                RK
                            </div>
<span className="text-sm font-medium">Raj</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[64px]">
<div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-xl font-medium shadow-sm shadow-black/20">
                                EL
                            </div>
<span className="text-sm font-medium">Emma</span>
</div>
</div>
</div>

<div className="mt-4 bg-[#182233] rounded-t-[32px] px-6 py-6 pb-32 h-full absolute w-full left-0 top-[420px]">
<h3 className="text-base font-medium mb-6">Scheduled</h3>
<div className="flex justify-between items-center mb-6">
<div className="flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-gray-300" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-base font-medium tracking-tight">Office Rent</div>
<div className="text-sm text-gray-400 mt-0.5">Next week, 1st</div>
</div>
</div>
<div className="text-base font-medium">-S$2,500</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-[#111928]/95 backdrop-blur-md border-t border-white/5 flex justify-between px-2 pt-2 pb-6 z-20">
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Cards</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 bg-white/10 rounded-2xl">
<i className="w-6 h-6 mb-1 text-white" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium text-white">Transfers</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Merchant</span>
</div>
<div className="flex flex-col items-center justify-center w-[72px] h-14 text-gray-400">
<i className="w-6 h-6 mb-1" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium">Treasury</span>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
