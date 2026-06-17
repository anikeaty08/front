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
      

<div className="max-w-7xl mx-auto mb-12 text-center">
<h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-2">PetCare</h1>
<p className="text-gray-500 font-normal">Modern Dog Walking Application UI</p>
</div>

<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col justify-between p-8">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-400 opacity-10"></div>
<div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
<div className="w-24 h-24 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-200/50 text-white transform rotate-3">
<iconify-icon height="48" icon="solar:paw-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="text-center">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">PetCare</h1>
<p className="text-gray-500 text-sm">Trusted care for your best friend</p>
</div>
</div>
<div className="relative z-10 w-full">
<div className="w-8 h-8 border-t-2 border-emerald-500 rounded-full animate-spin mx-auto mb-8"></div>
</div>
</div>

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">
<div className="p-8 pt-12 flex-1 flex flex-col justify-center">
<button className="absolute top-12 left-6 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Welcome Back</h2>
<p className="text-gray-500 text-sm mb-8">Sign in to continue booking walks.</p>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Email</label>
<div className="flex items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100 focus-within:ring-1 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
<iconify-icon className="text-gray-400 mr-3" icon="solar:letter-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-800" placeholder="alex@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700 ml-1">Password</label>
<div className="flex items-center bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100 focus-within:ring-1 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
<iconify-icon className="text-gray-400 mr-3" icon="solar:lock-password-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-gray-400 text-gray-800" placeholder="••••••••" type="password"/>
<button className="text-gray-400" type="button">
<iconify-icon icon="solar:eye-closed-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-end pt-1">
<a className="text-xs font-medium text-emerald-600 hover:text-emerald-700" href="#">Forgot password?</a>
</div>
<button className="w-full bg-gray-900 text-white font-medium py-3.5 rounded-2xl text-sm shadow-lg shadow-gray-200 hover:bg-black transition-transform active:scale-95" type="button">
                        Log In
                    </button>
</form>
<div className="mt-8 text-center">
<p className="text-xs text-gray-400 mb-4">Or continue with</p>
<div className="flex justify-center gap-4">
<button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
<iconify-icon icon="logos:google-icon" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors">
<iconify-icon icon="logos:apple" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="p-6 text-center border-t border-gray-50">
<p className="text-xs text-gray-500">Don't have an account? <a className="font-medium text-emerald-600" href="#">Sign Up</a></p>
</div>
</div>

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-gray-50 rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">

<div className="bg-white p-6 pb-4 rounded-b-3xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] z-10">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Good Morning,</p>
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Alex &amp; Buddy</h2>
</div>
<img alt="Profile" className="w-10 h-10 rounded-full object-cover border-2 border-emerald-100" src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=100&amp;h=100&amp;fit=crop"/>
</div>

<div className="bg-gray-50 rounded-2xl p-3 flex items-center text-gray-400 gap-3 border border-gray-100">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
<span className="text-xs font-normal">Find a walker nearby...</span>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-emerald-500 text-white p-4 rounded-3xl flex flex-col items-start justify-between h-32 shadow-lg shadow-emerald-200">
<div className="bg-white/20 p-2 rounded-full">
<iconify-icon icon="solar:map-point-wave-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs opacity-90 block mb-1">Explore</span>
<span className="font-semibold text-sm">Find Walker</span>
</div>
</div>
<div className="bg-white text-gray-800 p-4 rounded-3xl flex flex-col items-start justify-between h-32 border border-gray-100 shadow-sm">
<div className="bg-gray-50 text-gray-600 p-2 rounded-full">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div>
<span className="text-xs text-gray-400 block mb-1">Schedule</span>
<span className="font-semibold text-sm">My Bookings</span>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-3">
<h3 className="font-semibold text-gray-900 text-sm">Recommended</h3>
<a className="text-xs text-emerald-600" href="#">See all</a>
</div>
<div className="bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
<img alt="Walker" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;h=100&amp;fit=crop"/>
<div className="flex-1">
<h4 className="text-sm font-medium text-gray-900">Sarah Jenkins</h4>
<div className="flex items-center gap-1 text-xs text-gray-500">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="12"></iconify-icon>
<span>4.9</span>
<span className="text-gray-300">•</span>
<span>1km away</span>
</div>
</div>
<button className="bg-gray-50 p-2 rounded-xl text-gray-900 hover:bg-gray-100">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-between items-center text-gray-400">
<button className="flex flex-col items-center gap-1 text-emerald-600">
<iconify-icon icon="solar:home-2-bold" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 hover:text-gray-600">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 hover:text-gray-600">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 hover:text-gray-600">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">

<div className="p-6 pb-2">
<div className="flex items-center gap-4 mb-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-600">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<h2 className="text-base font-semibold text-gray-900">Available Walkers</h2>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="flex items-center gap-1 bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
<iconify-icon icon="solar:sort-linear"></iconify-icon> All
                    </button>
<button className="flex items-center gap-1 bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                        Top Rated
                    </button>
<button className="flex items-center gap-1 bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                        Under $20
                    </button>
<button className="flex items-center gap-1 bg-gray-50 text-gray-600 border border-gray-100 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap">
                        Nearby
                    </button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 pt-2 space-y-4">

<div className="bg-white rounded-3xl p-3 border border-gray-100 shadow-sm hover:border-emerald-100 hover:shadow-md transition-all cursor-pointer">
<div className="relative mb-3">
<img alt="Walker" className="w-full h-32 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold text-emerald-700 flex items-center gap-1">
                            $15<span className="text-gray-500 font-normal">/hr</span>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-gray-900 text-sm">James Wilson</h3>
<div className="flex items-center text-xs font-medium text-gray-900">
<iconify-icon className="text-yellow-400 mr-1" icon="solar:star-bold"></iconify-icon> 5.0
                            </div>
</div>
<p className="text-xs text-gray-500 line-clamp-1">Expert with large dogs, marathon runner.</p>
<div className="mt-3 flex gap-2">
<span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[10px]">Big Dogs</span>
<span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[10px]">Training</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-3 border border-gray-100 shadow-sm hover:border-emerald-100 hover:shadow-md transition-all cursor-pointer">
<div className="relative mb-3">
<img alt="Walker" className="w-full h-32 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&amp;h=200&amp;fit=crop"/>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold text-emerald-700 flex items-center gap-1">
                            $22<span className="text-gray-500 font-normal">/hr</span>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-semibold text-gray-900 text-sm">Emily Chen</h3>
<div className="flex items-center text-xs font-medium text-gray-900">
<iconify-icon className="text-yellow-400 mr-1" icon="solar:star-bold"></iconify-icon> 4.8
                            </div>
</div>
<p className="text-xs text-gray-500 line-clamp-1">Certified trainer, loves puppies.</p>
<div className="mt-3 flex gap-2">
<span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[10px]">Puppies</span>
<span className="bg-gray-50 text-gray-500 px-2 py-1 rounded-md text-[10px]">Grooming</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">

<div className="relative h-1/2">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&amp;h=600&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start bg-gradient-to-b from-black/40 to-transparent">
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 bg-white -mt-10 rounded-t-[2rem] relative z-10 p-6 flex flex-col">
<div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">James Wilson</h2>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center text-yellow-400">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-700">5.0</span>
<span className="text-xs text-gray-400">(124 Reviews)</span>
</div>
</div>
<div className="text-right">
<span className="text-lg font-semibold text-emerald-600">$15</span>
<span className="text-xs text-gray-400 block">per hour</span>
</div>
</div>
<div className="flex gap-4 mb-6 border-b border-gray-50 pb-6">
<div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
<span className="block text-sm font-semibold text-gray-900">350+</span>
<span className="block text-[10px] text-gray-500 uppercase tracking-wide">Walks</span>
</div>
<div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
<span className="block text-sm font-semibold text-gray-900">3 yrs</span>
<span className="block text-[10px] text-gray-500 uppercase tracking-wide">Exp</span>
</div>
<div className="flex-1 bg-gray-50 rounded-2xl p-3 text-center">
<span className="block text-sm font-semibold text-gray-900">100%</span>
<span className="block text-[10px] text-gray-500 uppercase tracking-wide">Reliable</span>
</div>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">About</h3>
<p className="text-xs text-gray-500 leading-relaxed mb-auto">
                    Hi! I'm James, a certified dog trainer and marathon runner. I specialize in high-energy breeds that need lots of exercise. I treat every dog like my own family member.
                </p>
<button className="w-full bg-gray-900 text-white font-medium py-3.5 rounded-2xl text-sm shadow-xl shadow-gray-200 mt-4 hover:scale-[1.02] transition-transform">
                    Book Now
                </button>
</div>
</div>

<div className="relative w-full max-w-[320px] aspect-[9/19] bg-white rounded-[2.5rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col justify-between p-8">
<div className="flex-1 flex flex-col items-center justify-center text-center">
<div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 animate-bounce">
<iconify-icon icon="solar:check-circle-bold" width="40"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Booking Confirmed!</h2>
<p className="text-sm text-gray-500 mb-8">James will arrive at the scheduled time.</p>
<div className="w-full bg-gray-50 rounded-3xl p-5 border border-gray-100 text-left space-y-4">
<div className="flex items-center gap-3">
<img alt="Walker" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&amp;h=100&amp;fit=crop"/>
<div>
<p className="text-xs text-gray-500">Walker</p>
<p className="text-sm font-medium text-gray-900">James Wilson</p>
</div>
</div>
<div className="h-px bg-gray-200 w-full"></div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 border border-gray-100 shrink-0">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500">Date &amp; Time</p>
<p className="text-sm font-medium text-gray-900">Mon, 24 Oct • 10:00 AM</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 border border-gray-100 shrink-0">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500">Total Amount</p>
<p className="text-sm font-medium text-gray-900">$15.00</p>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<button className="w-full bg-gray-900 text-white font-medium py-3.5 rounded-2xl text-sm shadow-lg hover:bg-black transition-colors">
                    Back to Home
                </button>
<button className="w-full bg-white text-gray-900 font-medium py-3.5 rounded-2xl text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                    View Booking
                </button>
</div>
</div>
</div>

    </>
  );
}
