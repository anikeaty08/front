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
      

<nav className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center relative z-50">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#111111] flex items-center justify-center text-white shadow-md">
<span className="iconify" data-icon="lucide:feather" data-strokeWidth="2"></span>
</div>
<span className="font-semibold text-lg tracking-tight">Vayal</span>
</div>

<div className="hidden md:flex items-center bg-white/60 backdrop-blur-md border border-[#E5E7EB] rounded-full px-2 py-1.5 shadow-sm gap-1">
<a className="px-4 py-2 text-sm font-medium text-[#111111] bg-white rounded-full shadow-sm border border-gray-100" href="#">Home</a>
<a className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors" href="#">Courses</a>
<a className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors" href="#">For Families</a>
<a className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#111111] transition-colors" href="#">Pricing</a>
</div>

<button className="bg-[#111111] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black/80 transition-all shadow-lg shadow-black/5 hover:shadow-black/10">
            Get Started
        </button>
</nav>

<main className="max-w-7xl mx-auto px-6 pt-10 pb-20 lg:pt-16 lg:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-start max-w-2xl relative z-10">
<h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.05] font-semibold tracking-tight text-[#111111] animate-reveal">
                Make learning feel <span className="highlight-text">effortless</span> for your parents.
            </h1>
<p className="mt-6 text-xl md:text-2xl text-[#6B7280] leading-relaxed font-normal animate-reveal delay-100 text-pretty">
                Simple <span className="text-[#111111] font-medium">Tamil‑first</span> courses, built for elders on mobile.
            </p>
<p className="mt-4 text-base md:text-lg text-[#6B7280] max-w-lg leading-relaxed animate-reveal delay-200">
                Short, doctor‑backed lessons for diabetes, yoga and daily habits. Two taps, zero confusion.
            </p>

<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-reveal delay-300 w-full">
<button className="h-14 px-8 rounded-full bg-[#000000] text-white font-medium text-lg hover:bg-gray-900 transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-200 flex items-center gap-3 w-full sm:w-auto justify-center">
<span>Start learning in Tamil</span>
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2"></span>
</button>
<button className="h-14 px-8 rounded-full bg-transparent text-[#6B7280] font-medium text-lg hover:text-[#111111] hover:bg-white/50 transition-all flex items-center gap-2 border border-transparent hover:border-gray-200 w-full sm:w-auto justify-center">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5"></span>
<span>Preview a lesson</span>
</button>
</div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full animate-reveal delay-300">
<div className="feature-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-[#6C5CE7]" data-icon="lucide:users" width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-[#111111]">Made for 50+</p>
<p className="text-xs text-[#6B7280]">Large text, clear audio</p>
</div>
</div>
<div className="feature-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-[#2ECC71]" data-icon="lucide:stethoscope" width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-[#111111]">Doctor‑reviewed</p>
<p className="text-xs text-[#6B7280]">Verified health tips</p>
</div>
</div>
<div className="feature-card rounded-2xl p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-blue-500" data-icon="lucide:languages" width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-[#111111]">Tamil &amp; English</p>
<p className="text-xs text-[#6B7280]">Switch anytime</p>
</div>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end animate-reveal delay-200 h-full min-h-[500px] lg:min-h-auto">

<div className="relative z-20 w-[300px] sm:w-[320px] rounded-[3rem] border-8 border-white bg-[#111111] overflow-hidden phone-shadow animate-float">

<div className="absolute top-0 left-0 w-full h-8 bg-black z-30 flex justify-between items-center px-6">
<span className="text-[10px] text-white font-medium">9:41</span>
<div className="w-16 h-5 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0"></div>
<div className="flex gap-1">
<span className="iconify text-white text-[10px]" data-icon="lucide:signal"></span>
<span className="iconify text-white text-[10px]" data-icon="lucide:battery-full"></span>
</div>
</div>

<div className="w-full h-full bg-[#F2F2F7] pt-12 pb-8 overflow-hidden flex flex-col">

<div className="px-6 mb-6 flex justify-between items-center">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Vanakkam,</p>
<h3 className="text-xl font-semibold text-gray-900">Appa ❤️</h3>
</div>
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
<img alt="Profile" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>

<div className="mx-5 bg-white rounded-2xl p-4 shadow-sm mb-6">
<div className="flex justify-between mb-3">
<span className="text-sm font-medium text-gray-900">Today's Goal</span>
<span className="text-sm font-bold text-[#6C5CE7]">80%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 mb-3">
<div className="bg-[#6C5CE7] h-2 rounded-full" style={{width: '80%'}}></div>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-purple-50 text-xs font-medium text-[#6C5CE7]">Diabetes Care</span>
<span className="px-2 py-1 rounded bg-orange-50 text-xs font-medium text-orange-500">Walking</span>
</div>
</div>

<div className="flex-1 px-5 space-y-4 overflow-hidden">
<div className="text-sm font-semibold text-gray-900 mb-2">Up Next</div>

<div className="bg-white rounded-2xl p-3 flex gap-3 shadow-sm items-center">
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-[#2ECC71] flex-shrink-0">
<span className="iconify" data-icon="lucide:leaf"></span>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-gray-900">Natural Diet</h4>
<p className="text-xs text-gray-500">உணவு முறை</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
<span className="iconify text-gray-400" data-icon="lucide:play" width="12"></span>
</div>
</div>

<div className="bg-white rounded-2xl p-3 flex gap-3 shadow-sm items-center">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-500 flex-shrink-0">
<span className="iconify" data-icon="lucide:footprints"></span>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-gray-900">Morning Yoga</h4>
<p className="text-xs text-gray-500">காலை யோகா</p>
</div>
<div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center">
<span className="iconify text-gray-400" data-icon="lucide:lock" width="12"></span>
</div>
</div>
</div>

<div className="bg-white px-6 py-4 border-t border-gray-100 flex justify-between items-center mt-auto">
<span className="iconify text-[#6C5CE7]" data-icon="lucide:home" width="24"></span>
<span className="iconify text-gray-300" data-icon="lucide:book-open" width="24"></span>
<span className="iconify text-gray-300" data-icon="lucide:user" width="24"></span>
</div>
</div>
</div>

<div className="absolute bottom-20 -left-10 md:-left-20 z-30 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 w-56 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-[#2ECC71]/10 flex items-center justify-center">
<span className="iconify text-[#2ECC71]" data-icon="lucide:check-circle-2"></span>
</div>
<div>
<div className="text-xs text-gray-500 font-medium">Streak</div>
<div className="text-lg font-bold text-gray-900">12 Days 🔥</div>
</div>
</div>
<div className="text-xs text-gray-400">Keep it up, Appa!</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#6C5CE7]/20 to-[#2ECC71]/20 blur-3xl rounded-full -z-10 opacity-60"></div>
</div>
</main>

    </>
  );
}
