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
      

<div className="w-full max-w-[400px] h-[852px] sm:rounded-[2.5rem] shadow-2xl overflow-hidden relative border-0 sm:border-[6px] bg-[#0A0A0A] border-[#1A1A1A]">

<div className="h-12 w-full flex items-end justify-between px-7 pb-2 z-20 relative bg-[#0A0A0A]">
<span className="text-xs font-medium tracking-wide text-white">09:41</span>
<div className="flex gap-1.5 items-center text-white">
<iconify-icon className="text-sm" icon="solar:cellular-network-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wi-fi-linear"></iconify-icon>
<div className="w-5 h-2.5 border rounded-[3px] relative border-white/80 overflow-hidden">
<div className="absolute inset-y-0 right-0 w-[80%] bg-white"></div>
</div>
</div>
</div>

<main className="h-full overflow-y-auto no-scrollbar pb-32 bg-[#0A0A0A]">

<header className="px-6 pt-6 pb-6">
<div className="flex justify-between items-start mb-2">
<div className="flex flex-col">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-1">Welcome back, Alexander</h1>
<p className="text-xs font-medium uppercase tracking-[0.15em] text-[#A0A0A0]">We don't rent luxury. We architect access to it.</p>
</div>
<button className="relative w-10 h-10 flex shrink-0 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#1A1A1A] transition hover:bg-[#242424]">
<div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#B8A27A] rounded-full"></div>
<iconify-icon className="text-xl text-white" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 mt-4 inline-flex px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] cursor-pointer hover:bg-[#242424] transition">
<iconify-icon className="text-sm text-white" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium text-white">New York, NY</span>
<iconify-icon className="text-xs text-[#A0A0A0] ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</header>

<div className="px-6 mb-8">
<div className="bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-5 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#4A80F0]/10 blur-3xl rounded-full"></div>
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider">Active Control</span>
<div className="bg-[#101A2B] text-[#4A80F0] px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wide border border-[#4A80F0]/20 flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#4A80F0] animate-pulse"></div>
                            In Progress
                        </div>
</div>
<h2 className="text-lg font-semibold tracking-tight text-white mb-1">Villa: The Serene Estate</h2>
<p className="text-sm font-normal text-[#A0A0A0] mb-6 flex items-center gap-2">
                        Sardinia <span className="w-1 h-1 rounded-full bg-[#3A3A3A]"></span> Apr 15-22, 2024
                    </p>
<button className="w-full bg-transparent border border-[#B8A27A] text-[#B8A27A] text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition hover:bg-[#B8A27A]/10">
                        View Active Booking
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 mb-8 flex justify-between gap-4">
<button className="flex-1 flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] transition hover:bg-[#242424]">
<iconify-icon className="text-xl text-white" icon="solar:compass-linear"></iconify-icon>
<span className="text-xs font-medium text-[#A0A0A0]">Book Access</span>
</button>
<button className="flex-1 flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] transition hover:bg-[#242424]">
<iconify-icon className="text-xl text-white" icon="solar:headset-linear"></iconify-icon>
<span className="text-xs font-medium text-[#A0A0A0]">Contact Operator</span>
</button>
<button className="flex-1 flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] transition hover:bg-[#242424]">
<iconify-icon className="text-xl text-white" icon="solar:clipboard-list-linear"></iconify-icon>
<span className="text-xs font-medium text-[#A0A0A0]">View Active</span>
</button>
</div>

<div className="px-6 mb-8 flex gap-4 overflow-x-auto no-scrollbar pb-2">
<div className="w-[220px] bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-5 shrink-0 flex flex-col">
<div className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center mb-4 border border-[#3A3A3A]">
<iconify-icon className="text-white text-xl" icon="solar:headset-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Concierge</h3>
<p className="text-xs font-normal text-[#A0A0A0] mb-5">24/7 Operator Available</p>
<button className="mt-auto text-xs font-medium text-white border border-white/20 bg-transparent w-full py-2 rounded-lg hover:bg-[#242424] transition">Contact Concierge</button>
</div>
<div className="w-[220px] bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-5 shrink-0 flex flex-col">
<div className="w-10 h-10 rounded-full bg-[#242424] flex items-center justify-center mb-4 border border-[#3A3A3A]">
<iconify-icon className="text-white text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-1">Upcoming</h3>
<p className="text-xs font-normal text-[#A0A0A0] mb-5">3 bookings scheduled</p>
<button className="mt-auto text-xs font-medium text-white border border-white/20 bg-transparent w-full py-2 rounded-lg hover:bg-[#242424] transition">View Schedule</button>
</div>
</div>

<div className="mb-4">
<div className="px-6 flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold tracking-tight text-white">Curated For You</h2>
</div>
<div className="pl-6 flex gap-4 overflow-x-auto no-scrollbar pr-6 pb-4">

<div className="w-[260px] shrink-0 group cursor-pointer bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-2">
<div className="relative h-[160px] rounded-lg overflow-hidden mb-3 bg-[#242424]">
<img alt="Exotic Vehicle" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-sm font-semibold text-white mb-1">Ferrari 812 Superfast</h3>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal flex items-center gap-1 text-[#A0A0A0]">
<iconify-icon className="text-[10px]" icon="solar:map-point-linear"></iconify-icon>
                                    Miami, FL
                                </span>
<span className="text-sm font-medium text-white">$5,000<span className="text-xs text-[#A0A0A0] font-normal">/day</span></span>
</div>
</div>
</div>

<div className="w-[260px] shrink-0 group cursor-pointer bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] p-2">
<div className="relative h-[160px] rounded-lg overflow-hidden mb-3 bg-[#242424]">
<img alt="Architectural Villa" className="w-full h-full object-cover transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<h3 className="text-sm font-semibold text-white mb-1">The Glass Pavilion</h3>
<div className="flex justify-between items-center mt-2">
<span className="text-xs font-normal flex items-center gap-1 text-[#A0A0A0]">
<iconify-icon className="text-[10px]" icon="solar:map-point-linear"></iconify-icon>
                                    Malibu, CA
                                </span>
<span className="text-sm font-medium text-white">$12,000<span className="text-xs text-[#A0A0A0] font-normal">/night</span></span>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full h-[88px] bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-[#1A1A1A] flex justify-between items-center px-8 pb-6 pt-3 z-50">

<button className="flex flex-col items-center gap-1.5 text-[#B8A27A]">
<iconify-icon className="text-[22px]" icon="solar:home-2-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Home</span>
</button>

<button className="flex flex-col items-center gap-1.5 text-[#606060] transition hover:text-[#A0A0A0]">
<iconify-icon className="text-[22px]" icon="solar:compass-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Explore</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-[#606060] transition hover:text-[#A0A0A0]">
<iconify-icon className="text-[22px]" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Bookings</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-[#606060] transition hover:text-[#A0A0A0]">
<iconify-icon className="text-[22px]" icon="solar:headset-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Concierge</span>
</button>
<button className="flex flex-col items-center gap-1.5 text-[#606060] transition hover:text-[#A0A0A0]">
<iconify-icon className="text-[22px]" icon="solar:user-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Profile</span>
</button>
</nav>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full z-50 bg-[#3A3A3A]"></div>
</div>

    </>
  );
}
