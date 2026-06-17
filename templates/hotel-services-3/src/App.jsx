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
      

<div className="fixed inset-0 z-[80]" id="welcomeOverlay">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
<div className="relative h-full flex items-center justify-center p-4">
<div className="max-w-sm w-full rounded-2xl bg-white border border-black/10 shadow-xl text-center overflow-hidden">

<div className="relative h-32 sm:h-36 w-full">
<img alt="Hotel view" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-white/90 text-[#913D43] flex items-center justify-center font-semibold tracking-tight">HT</div>
<span className="text-white text-sm font-medium">Harborview Suites</span>
</div>
<div className="absolute bottom-3 left-3 right-3 text-left">
<div className="text-white text-lg font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Welcome</div>
<div className="text-white/80 text-xs">Your stay, elevated</div>
</div>
</div>
<div className="p-6 pt-4">

<h1 className="mt-1 text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\', ui-sans-serif'}}>Harborview Suites</h1>
<p className="mt-1.5 text-sm text-[#333]/70">Welcome! Explore room service, essentials, housekeeping, and more.</p>

<div className="mt-4 grid grid-cols-3 gap-2">
<img alt="Lobby" className="w-full h-16 rounded-lg object-cover border border-black/10" src="https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Dining" className="w-full h-16 rounded-lg object-cover border border-black/10" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Room" className="w-full h-16 rounded-lg object-cover border border-black/10" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mt-4 grid grid-cols-3 gap-2 text-left">
<div className="p-2 rounded-lg border border-black/10 bg-[#F5F5F5] hover:bg-white transition">
<div className="w-7 h-7 rounded-md bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="utensils-crossed"></i>
</div>
<div className="mt-1.5 text-[11px] font-medium">Room Service</div>
<div className="text-[10px] text-[#333]/60">24/7 menu</div>
</div>
<div className="p-2 rounded-lg border border-black/10 bg-[#F5F5F5] hover:bg-white transition">
<div className="w-7 h-7 rounded-md bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="broom"></i>
</div>
<div className="mt-1.5 text-[11px] font-medium">Housekeeping</div>
<div className="text-[10px] text-[#333]/60">On request</div>
</div>
<div className="p-2 rounded-lg border border-black/10 bg-[#F5F5F5] hover:bg-white transition">
<div className="w-7 h-7 rounded-md bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="wifi"></i>
</div>
<div className="mt-1.5 text-[11px] font-medium">Wi‑Fi</div>
<div className="text-[10px] text-[#333]/60">Fast &amp; secure</div>
</div>
</div>

<div className="mt-3 text-xs text-[#333]/70 flex items-center justify-center gap-3">
<div className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="clock-4"></i><span>Quick delivery</span>
</div>
<div className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i><span>Safe &amp; contactless</span>
</div>
</div>
<button className="mt-4 w-full px-4 py-2 rounded-lg text-sm font-semibold text-white active:scale-95 transition shadow-sm hover:brightness-110" id="welcomeContinue" style={{background: '#913D43'}}>
            Continue
          </button>
<div className="mt-2 text-[10px] text-[#333]/60">By continuing, you agree to our house rules.</div>
</div>
</div>
</div>
</div>

<div className="mx-auto w-full max-w-md relative pb-24">

<header className="sticky top-0 z-40 bg-[#F5F5F5]/90 backdrop-blur border-b border-black/5">
<div className="px-4 pt-4 pb-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center text-[#913D43] font-semibold tracking-tight">HT</div>
<div>
<h1 className="text-xl tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\', ui-sans-serif'}}>Harborview Suites</h1>
<p className="text-xs text-[#333]/60 -mt-0.5">Powered by AeroTag Assist</p>
</div>
</div>
<button aria-label="Notifications" className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition" id="notifBell">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
</div>

<div aria-label="Primary Sections" className="mt-3 flex gap-2 overflow-x-auto no-scrollbar" role="tablist">
<button className="tab-btn px-3 py-2 rounded-full text-sm font-medium border border-black/10 bg-white text-[#913D43] shadow-sm" data-route="room" style={{fontFamily: '\'Montserrat\''}}>Room Service</button>
<button className="tab-btn px-3 py-2 rounded-full text-sm font-medium border border-black/10 bg-white/60 hover-white transition" data-route="essentials" style={{fontFamily: '\'Montserrat\''}}>Essentials</button>
<button className="tab-btn px-3 py-2 rounded-full text-sm font-medium border border-black/10 bg-white/60 hover:bg-white transition" data-route="housekeeping" style={{fontFamily: '\'Montserrat\''}}>Housekeeping</button>
<button className="tab-btn px-3 py-2 rounded-full text-sm font-medium border border-black/10 bg-white/60 hover:bg-white transition" data-route="laundry" style={{fontFamily: '\'Montserrat\''}}>Laundry</button>
<button className="tab-btn px-3 py-2 rounded-full text-sm font-medium border border-black/10 bg-white/60 hover:bg-white transition" data-route="hub" style={{fontFamily: '\'Montserrat\''}}>Hotel Hub</button>
</div>
</div>
</header>

<div className="fixed top-3 inset-x-3 z-[60] hidden" id="toast">
<div className="px-3 py-2 rounded-lg shadow-md border border-black/10 bg-white flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-[#27AE60]" data-lucide="check-circle-2"></i>
<span id="toastText">Done</span>
</div>
</div>

<section className="px-4 pt-4 space-y-5" id="view-room">

<div className="relative overflow-hidden rounded-2xl shadow-sm border border-black/5">
<div className="whitespace-nowrap transition-transform duration-500 ease-out" id="carouselTrack">
<img alt="Room dining 1" className="inline-block w-full h-40 object-cover" src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Room dining 2" className="inline-block w-full h-40 object-cover" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Room dining 3" className="inline-block w-full h-40 object-cover" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-2 inset-x-0 flex items-center justify-center gap-2">
<button aria-label="Slide 1" className="dot w-1.5 h-1.5 rounded-full bg-white/60"></button>
<button aria-label="Slide 2" className="dot w-1.5 h-1.5 rounded-full bg-white/40"></button>
<button aria-label="Slide 3" className="dot w-1.5 h-1.5 rounded-full bg-white/40"></button>
</div>
</div>

<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\''}}>Menu</h2>
<button className="flex items-center gap-1.5 text-xs text-[#333]/70 hover:text-[#333] transition" id="scheduleInfo">
<i className="w-4 h-4" data-lucide="clock-4"></i> Schedule
        </button>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar" id="menuTabs">
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white shadow-sm" data-cat="all">All</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Breakfast">Breakfast</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Lunch">Lunch</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Dinner">Dinner</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Snacks">Snacks</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Beverages">Beverages</button>
<button className="menu-tab px-3 py-1.5 rounded-full text-xs font-medium border border-black/10 bg-white/70 hover:bg-white" data-cat="Desserts">Desserts</button>
</div>

<div className="grid grid-cols-1 gap-3" id="menuGrid">

<div className="menu-card p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex gap-3 items-center" data-cat="Breakfast">
<img alt="Pancakes" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Buttermilk Pancakes</h3>
<p className="text-xs text-[#333]/60 line-clamp-2">Fluffy stack with maple syrup and berries</p>
</div>
<span className="text-sm font-medium">$9</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button aria-label="Decrease" className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button aria-label="Increase" className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Schedule item" className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition"><i className="w-4 h-4" data-lucide="clock"></i></button>
<button className="add-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="menu-card p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex gap-3 items-center" data-cat="Lunch,Dinner">
<img alt="Caesar Salad" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Grilled Chicken Caesar</h3>
<p className="text-xs text-[#333]/60">Romaine, parmesan, house dressing</p>
</div>
<span className="text-sm font-medium">$12</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Schedule item" className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition"><i className="w-4 h-4" data-lucide="clock"></i></button>
<button className="add-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="menu-card p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex gap-3 items-center" data-cat="Snacks,Desserts">
<img alt="Cheesecake" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Vanilla Cheesecake</h3>
<p className="text-xs text-[#333]/60">Berry compote, mint</p>
</div>
<span className="text-sm font-medium">$7</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Schedule item" className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition"><i className="w-4 h-4" data-lucide="clock"></i></button>
<button className="add-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="menu-card p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex gap-3 items-center" data-cat="Beverages">
<img alt="Iced Coffee" className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Iced Coffee</h3>
<p className="text-xs text-[#333]/60">Classic brew over ice</p>
</div>
<span className="text-sm font-medium">$4</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<div className="flex items-center gap-1.5">
<button aria-label="Schedule item" className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition"><i className="w-4 h-4" data-lucide="clock"></i></button>
<button className="add-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Add to Cart</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-3 rounded-2xl bg-white border border-black/5 shadow-sm" id="orderTracker">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Live Order</h3>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#FFB400]/15 text-[#AA6F00] border border-[#FFB400]/30">ETA 25–35 min</span>
</div>
<div className="relative">
<div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-black/10"></div>
<div className="flex items-center justify-between">
<div className="step flex flex-col items-center relative z-10">
<div className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="chef-hat"></i>
</div>
<span className="mt-1 text-[10px]">Preparing</span>
</div>
<div className="step flex flex-col items-center relative z-10">
<div className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="bike"></i>
</div>
<span className="mt-1 text-[10px]">Out for Delivery</span>
</div>
<div className="step flex flex-col items-center relative z-10">
<div className="w-8 h-8 rounded-full border border-black/10 bg-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="mt-1 text-[10px]">Delivered</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 pt-4 space-y-3 hidden" id="view-essentials">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\''}}>Toiletries &amp; Essentials</h2>
<button className="text-xs px-2.5 py-1 rounded-lg border border-black/10 bg-white hover:bg-black/5 active:scale-95 transition flex items-center gap-1.5" id="openEssentialsNote">
<i className="w-4 h-4" data-lucide="pencil-line"></i> Special Request
        </button>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="shower-head"></i>
</div>
<div>
<p className="text-sm font-medium">Shampoo</p>
<span className="text-[10px] text-[#333]/60">10–15 mins</span>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="request-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="soap"></i>
</div>
<div>
<p className="text-sm font-medium">Soap</p>
<span className="text-[10px] text-[#333]/60">10–15 mins</span>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="request-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="toothbrush"></i>
</div>
<div>
<p className="text-sm font-medium">Toothpaste</p>
<span className="text-[10px] text-[#333]/60">10–15 mins</span>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="request-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="align-justify"></i>
</div>
<div>
<p className="text-sm font-medium">Towels</p>
<span className="text-[10px] text-[#333]/60">10–15 mins</span>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="request-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex flex-col">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="footprints"></i>
</div>
<div>
<p className="text-sm font-medium">Slippers</p>
<span className="text-[10px] text-[#333]/60">10–15 mins</span>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<button className="request-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
</div>
</div>
</section>

<section className="px-4 pt-4 space-y-3 hidden" id="view-housekeeping">
<h2 className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\''}}>Housekeeping</h2>

<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-sm font-semibold" style={{fontFamily: '\'Montserrat\''}}>Cleaning</p>
<span className="text-xs text-[#333]/60">General room cleaning</span>
</div>
</div>
<div className="inline-flex p-0.5 rounded-full bg-[#F5F5F5] border border-black/10">
<button className="seg-btn px-2 py-1 text-xs rounded-full bg-white border border-black/10">Immediate</button>
<button className="seg-btn px-2 py-1 text-xs rounded-full">Schedule</button>
</div>
</div>
<div className="schedule mt-2 hidden">
<div className="grid grid-cols-2 gap-2">
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="time"/>
</div>
</div>
<button className="toggle-notes mt-2 w-full text-left text-xs text-[#333]/70 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="chevron-down"></i> Special instructions
        </button>
<textarea className="notes mt-2 hidden w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" placeholder="e.g., Please focus on bathroom and balcony." rows="2"></textarea>
<div className="mt-3 flex items-center justify-between">
<div className="flex-1 mr-2 h-2 rounded-full bg-black/10 overflow-hidden">
<div className="progress h-2 bg-yellow-400 w-1/3 transition-all"></div>
</div>
<button className="hk-request px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
<div className="mt-1 text-[10px] text-[#333]/60">Status: <span className="status-text text-yellow-600">In Progress</span></div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="sheet"></i>
</div>
<div>
<p className="text-sm font-semibold" style={{fontFamily: '\'Montserrat\''}}>Bed Linen Change</p>
<span className="text-xs text-[#333]/60">Fresh sheets and pillowcases</span>
</div>
</div>
<div className="inline-flex p-0.5 rounded-full bg-[#F5F5F5] border border-black/10">
<button className="seg-btn px-2 py-1 text-xs rounded-full bg-white border border-black/10">Immediate</button>
<button className="seg-btn px-2 py-1 text-xs rounded-full">Schedule</button>
</div>
</div>
<div className="schedule mt-2 hidden">
<div className="grid grid-cols-2 gap-2">
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="time"/>
</div>
</div>
<button className="toggle-notes mt-2 w-full text-left text-xs text-[#333]/70 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="chevron-down"></i> Special instructions
        </button>
<textarea className="notes mt-2 hidden w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" placeholder="e.g., Hypoallergenic bedding if available." rows="2"></textarea>
<div className="mt-3 flex items-center justify-between">
<div className="flex-1 mr-2 h-2 rounded-full bg-black/10 overflow-hidden">
<div className="progress h-2 bg-gray-300 w-1/3 transition-all"></div>
</div>
<button className="hk-request px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
<div className="mt-1 text-[10px] text-[#333]/60">Status: <span className="status-text text-gray-600">Pending</span></div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</div>
<div>
<p className="text-sm font-semibold" style={{fontFamily: '\'Montserrat\''}}>Trash Pickup</p>
<span className="text-xs text-[#333]/60">Remove and replace liners</span>
</div>
</div>
<div className="inline-flex p-0.5 rounded-full bg-[#F5F5F5] border border-black/10">
<button className="seg-btn px-2 py-1 text-xs rounded-full bg-white border border-black/10">Immediate</button>
<button className="seg-btn px-2 py-1 text-xs rounded-full">Schedule</button>
</div>
</div>
<div className="schedule mt-2 hidden">
<div className="grid grid-cols-2 gap-2">
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
<input className="px-2 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="time"/>
</div>
</div>
<button className="toggle-notes mt-2 w-full text-left text-xs text-[#333]/70 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="chevron-down"></i> Special instructions
        </button>
<textarea className="notes mt-2 hidden w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" placeholder="e.g., Please come after 6 PM." rows="2"></textarea>
<div className="mt-3 flex items-center justify-between">
<div className="flex-1 mr-2 h-2 rounded-full bg-black/10 overflow-hidden">
<div className="progress h-2 bg-green-500 w-full transition-all"></div>
</div>
<button className="hk-request px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Request</button>
</div>
<div className="mt-1 text-[10px] text-[#333]/60">Status: <span className="status-text text-green-600">Completed</span></div>
</div>
</section>

<section className="px-4 pt-4 space-y-3 hidden" id="view-laundry">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\''}}>Laundry</h2>
<div className="inline-flex gap-1 p-1 rounded-full bg-[#F5F5F5] border border-black/10">
<button className="laundry-tab px-2 py-1 text-xs rounded-full bg-white border border-black/10" data-type="Wash &amp; Fold">Wash &amp; Fold</button>
<button className="laundry-tab px-2 py-1 text-xs rounded-full" data-type="Dry Cleaning">Dry Cleaning</button>
<button className="laundry-tab px-2 py-1 text-xs rounded-full" data-type="Ironing">Ironing</button>
</div>
</div>
<div className="space-y-2" id="laundryList">
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-between">
<div>
<p className="text-sm font-medium">Shirt</p>
<span className="text-[10px] text-[#333]/60">$2.00</span>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<span className="text-xs text-[#333]/70">Subtotal: $0.00</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-between">
<div>
<p className="text-sm font-medium">Pants</p>
<span className="text-[10px] text-[#333]/60">$3.00</span>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<span className="text-xs text-[#333]/70">Subtotal: $0.00</span>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm flex items-center justify-between">
<div>
<p className="text-sm font-medium">Dress</p>
<span className="text-[10px] text-[#333]/60">$4.00</span>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center rounded-full border border-black/10 overflow-hidden bg-[#F5F5F5]">
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="minus"></i></button>
<span className="qty px-2 text-sm">0</span>
<button className="qty-btn px-2 py-1 text-sm hover:bg-black/5"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<span className="text-xs text-[#333]/70">Subtotal: $0.00</span>
</div>
</div>
</div>
<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
<div className="grid grid-cols-2 gap-2">
<input aria-label="Pickup date" className="px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
<input aria-label="Pickup time" className="px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="time"/>
<input aria-label="Delivery date" className="px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
<input aria-label="Delivery time" className="px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="time"/>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs px-2.5 py-1 rounded-lg border border-black/10 bg-white hover:bg-black/5 active:scale-95 transition flex items-center gap-1.5" id="laundryPricing"><i className="w-4 h-4" data-lucide="info"></i> Pricing</button>
<button className="px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" id="laundrySchedule" style={{background: '#913D43'}}>Schedule Pickup</button>
</div>
</div>
</section>

<section className="px-4 pt-4 space-y-4 hidden" id="view-hub">
<h2 className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Montserrat\''}}>Hotel Hub</h2>
<div className="grid grid-cols-2 gap-3">
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="key-round"></i>
</div>
<p className="mt-2 text-sm font-medium">Check-in/out</p>
<span className="text-[10px] text-[#333]/60">Times &amp; process</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<p className="mt-2 text-sm font-medium">Policies</p>
<span className="text-[10px] text-[#333]/60">House rules</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<p className="mt-2 text-sm font-medium">Emergency</p>
<span className="text-[10px] text-[#333]/60">Contacts</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4 rotate-180" data-lucide="forklift"></i>
</div>
<p className="mt-2 text-sm font-medium">Transport</p>
<span className="text-[10px] text-[#333]/60">Book a ride</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="calendar-heart"></i>
</div>
<p className="mt-2 text-sm font-medium">Activities</p>
<span className="text-[10px] text-[#333]/60">Events &amp; tours</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="map"></i>
</div>
<p className="mt-2 text-sm font-medium">Map &amp; Amenities</p>
<span className="text-[10px] text-[#333]/60">Explore</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition" id="openMaintenance">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="wrench"></i>
</div>
<p className="mt-2 text-sm font-medium">Maintenance</p>
<span className="text-[10px] text-[#333]/60">Report issue</span>
</button>
<button className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm text-left active:scale-95 transition">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="concierge-bell"></i>
</div>
<p className="mt-2 text-sm font-medium">Restaurant</p>
<span className="text-[10px] text-[#333]/60">Reserve table</span>
</button>
</div>

<div className="p-3 rounded-2xl bg-white border border-black/5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-[#913D43]/10 text-[#913D43] flex items-center justify-center">
<i className="w-4 h-4" data-lucide="wifi"></i>
</div>
<div>
<p className="text-sm font-semibold" style={{fontFamily: '\'Montserrat\''}}>Hotel Wi‑Fi</p>
<span className="text-xs text-[#333]/60">AeroTag-WiFi • 5GHz</span>
</div>
</div>
<button className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#333] border border-black/10 bg-[#F5F5F5] hover:bg-black/5 active:scale-95 transition" id="copyWifi">Copy Password</button>
</div>
<div className="mt-3 flex items-center gap-3">
<img alt="QR code" className="w-24 h-24 rounded-lg border border-black/10" src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&amp;data=AeroTag-WiFi"/>
<div className="text-xs">
<div className="flex items-center gap-1.5"><span className="text-[#333]/60 w-16">SSID</span><span className="font-medium">AeroTag-WiFi</span></div>
<div className="flex items-center gap-1.5"><span className="text-[#333]/60 w-16">Password</span><span className="font-medium" id="wifiPwd">Harbor123!</span></div>
<div className="flex items-center gap-1.5"><span className="text-[#333]/60 w-16">Security</span><span className="font-medium">WPA2</span></div>
</div>
</div>
</div>
</section>

<button className="fixed bottom-20 right-4 z-40 px-4 py-3 rounded-full text-sm font-semibold text-white shadow-lg active:scale-95 transition flex items-center gap-2" id="fabCart" style={{background: '#913D43'}}>
<i className="w-5 h-5" data-lucide="shopping-bag"></i> Cart
      <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-white/20" id="cartBadge">0</span>
</button>
<button className="fixed bottom-20 right-4 z-40 px-4 py-3 rounded-full text-sm font-semibold text-[#333] border border-black/10 bg-[#FFB400] shadow-lg active:scale-95 transition hidden" id="fabReorder">
<i className="w-5 h-5" data-lucide="refresh-ccw"></i> Reorder
    </button>

<button aria-label="Open chat" className="fixed bottom-24 left-4 z-40 p-3 rounded-full text-[#333] bg-white border border-black/10 shadow-md active:scale-95 transition" id="chatBtn">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>

<nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-black/10">
<div className="mx-auto max-w-md grid grid-cols-5">
<button className="nav-btn flex flex-col items-center py-2 text-xs text-[#333]/70" data-route="room">
<i className="w-5 h-5" data-lucide="utensils-crossed"></i>
<span>Room</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 text-xs text-[#333]/70" data-route="essentials">
<i className="w-5 h-5" data-lucide="hand-platter"></i>
<span>Essentials</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 text-xs text-[#333]/70" data-route="housekeeping">
<i className="w-5 h-5" data-lucide="broom"></i>
<span>Housekeeping</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 text-xs text-[#333]/70" data-route="laundry">
<i className="w-5 h-5" data-lucide="shirt"></i>
<span>Laundry</span>
</button>
<button className="nav-btn flex flex-col items-center py-2 text-xs text-[#333]/70" data-route="hub">
<i className="w-5 h-5" data-lucide="home"></i>
<span>Hub</span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[70] hidden" id="cartModal">
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-x-0 bottom-0 mx-auto max-w-md bg-white rounded-t-2xl shadow-xl border border-black/10">
<div className="p-3 flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Order Summary</h3>
<button className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition" id="closeCart"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="max-h-60 overflow-auto divide-y divide-black/5" id="cartList"></div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between text-sm">
<span>Estimated delivery</span><span className="font-medium">25–35 min</span>
</div>
<div className="flex items-center justify-between text-sm">
<span>Total</span><span className="font-semibold" id="cartTotal">$0.00</span>
</div>
<div className="grid grid-cols-2 gap-2 pt-1">
<button className="px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" id="checkout" style={{background: '#913D43'}}>Checkout</button>
<button className="px-3 py-2 rounded-lg text-xs font-semibold text-[#333] border border-black/10 bg-[#FFB400] active:scale-95 transition" id="trackOrder">Track Order</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="essentialsModal">
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-x-0 bottom-0 mx-auto max-w-md bg-white rounded-t-2xl shadow-xl border border-black/10">
<div className="p-3 flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Special Request</h3>
<button className="closeEssentials p-2 rounded-lg hover:bg-black/5 active:scale-95 transition"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-3 space-y-2">
<textarea className="w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" placeholder="Describe your request..." rows="3"></textarea>
<button className="closeEssentials w-full px-3 py-2 rounded-lg text-xs font-semibold text-white active:scale-95 transition shadow-sm" style={{background: '#913D43'}}>Send</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="maintenanceSheet">
<div className="absolute inset-0 bg-black/30"></div>
<div className="absolute inset-x-0 bottom-0 mx-auto max-w-md bg-white rounded-t-2xl shadow-xl border border-black/10">
<div className="p-3 flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight" style={{fontFamily: '\'Montserrat\''}}>Report Maintenance Issue</h3>
<button className="p-2 rounded-lg hover:bg-black/5 active:scale-95 transition" id="closeMaintenance"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-3 space-y-3">

<div className="relative">
<button className="w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm flex items-center justify-between" id="catBtn">
<span id="catText">Select Category</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-10 left-0 right-0 mt-1 rounded-lg border border-black/10 bg-white shadow-md hidden" id="catMenu">
<button className="cat-opt w-full px-3 py-2 text-left text-sm hover:bg-black/5" data-val="Electrical">Electrical</button>
<button className="cat-opt w-full px-3 py-2 text-left text-sm hover:bg-black/5" data-val="Plumbing">Plumbing</button>
<button className="cat-opt w-full px-3 py-2 text-left text-sm hover:bg-black/5" data-val="AC">AC</button>
<button className="cat-opt w-full px-3 py-2 text-left text-sm hover:bg-black/5" data-val="TV/Wi‑Fi">TV/Wi‑Fi</button>
<button className="cat-opt w-full px-3 py-2 text-left text-sm hover:bg-black/5" data-val="Furniture">Furniture</button>
</div>
</div>

<label className="block">
<div className="w-full px-3 py-6 rounded-lg border border-dashed border-black/20 bg-[#F5F5F5] text-sm text-center hover:border-[#913D43]/40 transition">
<i className="w-5 h-5 mx-auto mb-1" data-lucide="camera"></i>
<div>Tap to upload photo</div>
<input accept="image/*" capture="environment" className="hidden" id="photoInput" type="file"/>
<div className="mt-2 grid grid-cols-4 gap-2" id="photoPreview"></div>
</div>
</label>
<textarea className="w-full px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" id="issueDesc" placeholder="Describe the issue..." rows="3"></textarea>
<div className="grid grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-lg border border-black/10 bg-[#F5F5F5] text-sm" type="date"/>
</div></div></div></div></div>
    </>
  );
}
