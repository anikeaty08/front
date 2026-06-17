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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#"><div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8366FF] to-[#00DAA4] flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-rabbit w-5 h-5" data-lucide="rabbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 16a3 3 0 0 1 2.24 5"></path><path d="M18 12h.01"></path><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"></path><path d="M20 8.54V4a2 2 0 1 0-4 0v3"></path><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"></path></svg>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg">Billroo</span>
</div></a>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#6342F0] rounded-full hover:bg-[#8366FF] hover:shadow-lg hover:shadow-[#EAE5FF] transition-all duration-200" href="#ticket">
                Save my spot
            </a>

<button className="sm:hidden text-slate-900">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-16 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F5FE] border border-[#EAE5FF] text-[#6342F0] text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8366FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6342F0]"></span>
</span>
                    Live Workshop · Feb 2nd
                </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight mb-6">Review your last 90 days. <br/> <span className="text-slate-400">Plan your next 30.</span><br/> All in 60 minute.</h1>
<p className="leading-relaxed text-lg text-slate-500 max-w-lg mb-8">
                    Join <strong className="text-slate-900 font-medium">Queenie Tan</strong> for the Money Reset Live Workshop. Stop guessing where your money goes and start telling it what to do.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-[#6342F0] rounded-full hover:bg-[#8366FF] hover:shadow-xl hover:shadow-[#EAE5FF] transition-all duration-200 w-full sm:w-auto" href="#ticket">
                        Join the Reset - $39
                        <svg aria-hidden="true" className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 px-4 py-2">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-sm font-medium text-slate-600">100+ joined</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full flex items-center justify-center lg:justify-end">

<div className="absolute top-0 right-0 w-72 h-72 bg-[#EAE5FF] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute bottom-0 left-10 w-72 h-72 bg-[#CFFCF1] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

<div className="relative w-full max-w-md bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/50 aspect-[4/5] lg:aspect-auto lg:h-full group">
<img alt="Queenie Tan" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-sm">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Goal Progress</span>
<span className="text-xs font-medium text-[#07B086]">+12%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6342F0] w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Sound familiar?</h2>
<p className="text-slate-500">We've all been there. The "budgeting cycle" that never sticks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#F7F5FE] rounded-2xl flex items-center justify-center text-[#6342F0] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-clipboard-x w-6 h-6" data-lucide="clipboard-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m15 11-6 6"></path><path d="m9 11 6 6"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">The "Monday" Budget</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        You promise to start tracking on Monday. By Wednesday, you've forgotten to log three coffees and give up.
                    </p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#CFFCF1] rounded-2xl flex items-center justify-center text-[#07B086] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Payday Panic</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        The account looks healthy on the 15th, but positively scary a week before the next pay cycle.
                    </p>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
<div className="w-12 h-12 bg-[#F7F5FE] rounded-2xl flex items-center justify-center text-[#8366FF] mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-party-popper w-6 h-6" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Life Happens</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        You want to save, but birthdays, dinners, and "just one treat" keep getting in the way of your goals.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[500px] w-[300px] shadow-2xl">
<div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
<div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
<div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-50 relative flex flex-col">

<div className="pt-10 px-6 pb-4 bg-white">
<div className="flex justify-between items-center mb-6">
<div className="h-8 w-8 bg-slate-100 rounded-full"></div>
<div className="h-2 w-12 bg-slate-100 rounded-full"></div>
</div>
<div className="h-8 w-32 bg-slate-900 rounded-lg mb-2"></div>
<div className="h-3 w-20 bg-slate-200 rounded-full"></div>
</div>

<div className="p-6 space-y-4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex justify-between mb-2">
<div className="h-3 w-24 bg-slate-100 rounded-full"></div>
<div className="h-3 w-8 bg-[#CFFCF1] rounded-full"></div>
</div>
<div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
<div className="h-full bg-[#00DAA4] w-[80%]"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
<div className="flex justify-between mb-2">
<div className="h-3 w-16 bg-slate-100 rounded-full"></div>
<div className="h-3 w-8 bg-[#EAE5FF] rounded-full"></div>
</div>
<div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden">
<div className="h-full bg-[#6342F0] w-[40%]"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 left-6 bg-slate-900 text-white p-4 rounded-xl shadow-lg">
<p className="text-xs opacity-90">"This workshop isn't about restriction. It's about freedom."</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-8">
                        The reset button your wallet needs.
                    </h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 bg-[#F7F5FE] rounded-full flex items-center justify-center text-[#6342F0]">
<svg aria-hidden="true" className="lucide lucide-eye w-6 h-6" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900 mb-1">Clarity</h3>
<p className="text-slate-500 text-sm leading-relaxed">Spot your biggest money leaks instantly without digging through months of paper statements.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 bg-[#CFFCF1] rounded-full flex items-center justify-center text-[#07B086]">
<svg aria-hidden="true" className="lucide lucide-check-square w-6 h-6" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900 mb-1">Action</h3>
<p className="text-slate-500 text-sm leading-relaxed">Leave with a 30-day plan done and dusted. No "homework" for later.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 bg-[#F7F5FE] rounded-full flex items-center justify-center text-[#6342F0]">
<svg aria-hidden="true" className="lucide lucide-smile w-6 h-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900 mb-1">Realism</h3>
<p className="text-slate-500 text-sm leading-relaxed">Build a budget that handles fun, travel, and surprises. It's not a budget if it breaks on the weekend.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="ticket">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6342F0]/20 rounded-full filter blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Secure your spot</h2>
<p className="text-slate-400">Join 100 others resetting their finances.</p>
</div>

<div className="flex flex-col md:flex-row w-full max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">

<div className="flex-1 p-8 md:p-10 relative">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-sm font-medium text-[#6342F0] uppercase tracking-wider mb-1">Live Workshop</p>
<h3 className="text-2xl font-medium text-slate-900">Money Reset 2026</h3>
</div>
<div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-[#07B086]">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F5FE] flex items-center justify-center text-[#6342F0]">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase">Date</p>
<p className="text-slate-900 font-medium">Mon 2nd Feb, 2026</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F5FE] flex items-center justify-center text-[#6342F0]">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase">Time</p>
<p className="text-slate-900 font-medium">7pm – 8pm AEDT</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F7F5FE] flex items-center justify-center text-[#6342F0]">
<svg aria-hidden="true" className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase">Location</p>
<p className="text-slate-900 font-medium">Zoom (Replay Included)</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EAE5FF] text-[#6342F0]">
                            Limited to 100 spots
                        </span>
<span className="text-xs text-slate-400"> Selling fast</span>
</div>

<div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full md:block hidden"></div>
</div>

<div className="hidden md:block w-[2px] border-l-2 border-dashed border-slate-200 relative my-4"></div>

<div className="md:hidden h-[2px] w-full border-t-2 border-dashed border-slate-200 relative mx-4"></div>

<div className="bg-slate-50 p-8 md:w-64 flex flex-col justify-center items-center relative">

<div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 rounded-full md:block hidden"></div>
<div className="text-center w-full">
<p className="text-3xl font-bold text-slate-900 mb-1">$39</p>
<p className="text-xs text-slate-500 mb-6">One-time payment</p>
<button className="hover:bg-[#8366FF] transition-colors text-sm font-medium text-white bg-[#6342F0] w-full rounded-xl pt-3 pr-4 pb-3 pl-4 shadow-[#EAE5FF]">
                            Get Ticket
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="mb-8 relative inline-block">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#6342F0] to-[#00DAA4]">
<img alt="Queenie Tan" className="w-full h-full rounded-full object-cover border-4 border-white" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-0 right-0 bg-[#6342F0] text-white p-1.5 rounded-full border-2 border-white">
<svg aria-hidden="true" className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<h2 className="text-2xl font-medium text-slate-900 mb-4">Hosted by Queenie Tan</h2>
<p className="text-slate-500 leading-relaxed mb-10">
                I went from $0 in savings to building a six-figure portfolio by simplifying finance, not complicating it. I founded Billroo to help everyday Aussies do the same. No suit, no jargon, just results.
            </p>
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Featured In</p>
<div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-serif text-slate-800">VOGUE</span>
<span className="text-xl font-extrabold italic text-slate-800">news.com.au</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">ABC</span>
<span className="text-lg font-semibold text-slate-800">The Australian Financial Review</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight text-center mb-12">Questions?</h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-100 open:shadow-md transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Do I need the Billroo app?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Nope! While we'll show you how Billroo makes it easier, the principles we teach work with a spreadsheet, a notebook, or any other app.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 open:shadow-md transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>Is this financial advice?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        This workshop provides general educational information only. It does not take into account your personal financial situation or needs.
                    </div>
</details>

<details className="group bg-white rounded-2xl border border-slate-100 open:shadow-md transition-all duration-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900">
<span>What if I miss the live session?</span>
<span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 text-sm leading-relaxed">
                        Don't worry! Everyone who buys a ticket gets a recording sent to their inbox within 24 hours, yours to keep forever.
                    </div>
</details>
</div>
</div>
</section>

<div className="fixed bottom-6 left-6 right-6 z-40 sm:hidden">
<a className="flex items-center justify-center w-full py-4 text-base font-semibold text-white bg-[#6342F0] rounded-full shadow-xl shadow-[#6342F0]/20" href="#ticket">
            Save my spot - $39
        </a>
</div>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<a className="flex items-center gap-2" href="#"><div className="flex items-center gap-2"><div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#8366FF] to-[#00DAA4] flex items-center justify-center text-white"><span className="text-xs font-bold">B</span></div><span className="font-medium text-slate-900 tracking-tight">Billroo</span></div></a>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col items-center justify-center border-t border-slate-50 pt-8 gap-4">
<p className="text-xs text-slate-400">© 2026 Billroo. All rights reserved.</p>

<div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-full">
<div className="flex gap-1">
<svg aria-hidden="true" className="lucide lucide-heart w-3 h-3 text-black fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<svg aria-hidden="true" className="lucide lucide-heart w-3 h-3 text-yellow-400 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<svg aria-hidden="true" className="lucide lucide-heart w-3 h-3 text-red-600 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<span className="text-[10px] text-slate-500 font-medium">
                        We acknowledge the Traditional Owners of country throughout Australia.
                    </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
