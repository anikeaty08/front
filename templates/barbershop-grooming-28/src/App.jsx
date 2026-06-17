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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-neutral-800/20 to-transparent blur-3xl -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0">
<a className="text-white font-medium tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<iconify-icon height="20" icon="solar:scissors-linear" width="20"></iconify-icon>
                        SHARP &amp; CO.
                    </a>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#">Barbers</a>
<a className="hover:text-white transition-colors duration-200" href="#">Membership</a>
<a className="hover:text-white transition-colors duration-200" href="#">Locations</a>
</div>

<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-neutral-300 hidden sm:block" href="#">Sign In</a>
<button className="bg-white text-neutral-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-all duration-200 flex items-center gap-2">
<span>Book Now</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col items-start space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span>Accepting new clients for October</span>
</div>

<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                        Elevate your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">everyday ritual.</span>
</h1>

<p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light">
                        Experience precision grooming tailored to your lifestyle. Master barbers, premium products, and an atmosphere designed for the modern gentleman.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group h-12 px-6 rounded-full bg-white text-neutral-950 font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="solar:calendar-add-linear" width="20"></iconify-icon>
<span>Book Appointment</span>
</button>
<button className="h-12 px-6 rounded-full border border-neutral-800 text-neutral-300 font-medium flex items-center justify-center gap-2 hover:bg-neutral-900 hover:text-white transition-all duration-200 hover:border-neutral-700">
<span>View Service Menu</span>
</button>
</div>

<div className="pt-4 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-neutral-950 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-neutral-950 bg-neutral-800 flex items-center justify-center text-xs font-medium text-white">
                                +2k
                            </div>
</div>
<div className="flex flex-col text-sm">
<div className="flex items-center text-yellow-500 gap-0.5">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-neutral-500 text-xs">Rated 4.9/5 by locals</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 to-neutral-700/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="relative w-full max-w-md aspect-[4/5] bg-neutral-900 rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">
<img alt="Barber Cutting Hair" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%]" src="https://images.unsplash.com/photo-1503951914875-befbb763d071?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>


<div className="absolute top-6 right-6 backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-neutral-950 flex items-center justify-center text-white">
<iconify-icon icon="solar:scissors-square-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400">Service</p>
<p className="text-sm font-medium text-white">Executive Cut</p>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 transform transition-transform group-hover:-translate-y-2 duration-500">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-300">Available Today</span>
</div>
<span className="text-xs text-neutral-500">Los Angeles</span>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
<button className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-white hover:bg-white hover:text-black transition-colors">
                                    2:00 PM
                                </button>
<button className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-neutral-700 text-xs text-neutral-500 line-through cursor-not-allowed">
                                    3:30 PM
                                </button>
<button className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-white hover:bg-white hover:text-black transition-colors">
                                    4:15 PM
                                </button>
<button className="flex-shrink-0 px-3 py-1.5 rounded-lg border border-white/20 bg-white/5 text-xs text-white hover:bg-white hover:text-black transition-colors">
                                    5:00 PM
                                </button>
</div>
</div>
</div>

<div className="absolute -right-4 lg:-right-8 top-1/4 bg-neutral-900 border border-neutral-800 p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon className="text-yellow-500" height="24" icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-neutral-800">
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:chair-2-linear" width="28"></iconify-icon>
<h3 className="text-white font-medium">Premium Comfort</h3>
<p className="text-sm text-neutral-500">Ergonomic chairs and complimentary beverages.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<h3 className="text-white font-medium">Zero Wait Time</h3>
<p className="text-sm text-neutral-500">App-based booking guarantees your seat.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:verified-check-linear" width="28"></iconify-icon>
<h3 className="text-white font-medium">Expert Stylists</h3>
<p className="text-sm text-neutral-500">Minimum 5 years experience for all staff.</p>
</div>
</div>
</div>
</main>

    </>
  );
}
