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



        // Initialize Lucide Icons
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
      

<div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl relative border-x border-gray-100 pb-24">

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gray-900 text-white rounded-lg flex items-center justify-center font-medium tracking-tighter text-sm shadow-lg shadow-gray-200">
                    PF
                </div>
<div>
<h1 className="text-sm font-medium text-gray-900 tracking-tight leading-none">PhysioFlow</h1>
<span className="text-xs text-gray-500 font-normal">Recovery Plan B</span>
</div>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
</header>

<main className="px-6 py-6 space-y-8">

<section>
<div className="flex justify-between items-end mb-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Good morning, Alex</h2>
<p className="text-sm text-gray-500 mt-1">You're 80% through this week's goals.</p>
</div>
</div>

<div className="flex justify-between items-center gap-2 overflow-x-auto no-scrollbar py-1">
<div className="flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent opacity-50 grayscale">
<span className="text-xs font-medium text-gray-400">Mon</span>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">12</div>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent opacity-50 grayscale">
<span className="text-xs font-medium text-gray-400">Tue</span>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">13</div>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
<span className="text-xs font-medium text-indigo-600">Wed</span>
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-xs text-white font-medium">14</div>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent">
<span className="text-xs font-medium text-gray-400">Thu</span>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-xs text-gray-500">15</div>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-2 p-2 rounded-xl border border-transparent">
<span className="text-xs font-medium text-gray-400">Fri</span>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center text-xs text-gray-500">16</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900 tracking-tight uppercase opacity-80">Up Next</h3>
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">20 min total</span>
</div>

<div className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all cursor-pointer">

<div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-indigo-600 fill-indigo-600 ml-1" data-lucide="play"></i>
</div>
<span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md font-medium">3 sets</span>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="text-lg font-medium text-gray-900 tracking-tight">Rotator Cuff Glide</h4>
<p className="text-sm text-gray-500 mt-0.5">Mobility • Shoulder Left</p>
</div>
<div className="w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-indigo-600 group-hover:text-indigo-600 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between text-xs text-gray-400 mb-2 font-medium">
<span>Instruction</span>
<span>Step 1/4</span>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                                Gently press your arm against the wall, maintaining a 90-degree angle. Hold for 5 seconds.
                            </p>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-sm font-medium text-gray-900 tracking-tight uppercase opacity-80 mb-4">Remaining</h3>
<div className="space-y-3">

<div className="flex items-center p-4 bg-gray-50/50 rounded-xl border border-gray-100 active:scale-[0.99] transition-transform">
<div className="h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-center">
<h4 className="text-sm font-medium text-gray-900">Wall Angels</h4>
<span className="text-xs text-gray-400 font-medium">5 min</span>
</div>
<p className="text-xs text-gray-500 mt-1">Upper Back Strength</p>
</div>
<div className="ml-3">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="flex items-center p-4 bg-gray-50/50 rounded-xl border border-gray-100 active:scale-[0.99] transition-transform">
<div className="h-12 w-12 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="stretch-horizontal"></i>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-center">
<h4 className="text-sm font-medium text-gray-900">Doorway Stretch</h4>
<span className="text-xs text-gray-400 font-medium">3 min</span>
</div>
<p className="text-xs text-gray-500 mt-1">Pectoral Release</p>
</div>
<div className="ml-3">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-indigo-600 hover:text-indigo-600 transition-colors">
<i className="w-3.5 h-3.5 fill-current" data-lucide="play"></i>
</button>
</div>
</div>

<div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 opacity-60">
<div className="h-12 w-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<div className="ml-4 flex-1">
<div className="flex justify-between items-center">
<h4 className="text-sm font-medium text-gray-900 line-through decoration-gray-300">Neck Flexion</h4>
<span className="text-xs text-emerald-600 font-medium">Done</span>
</div>
<p className="text-xs text-gray-400 mt-1">Completed 9:30 AM</p>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 rounded-2xl p-6 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-indigo-400" data-lucide="clipboard-pulse"></i>
<h3 className="text-sm font-medium tracking-wide">Post-Session Check</h3>
</div>
<p className="text-sm text-gray-400 mb-6">How is your pain level today compared to yesterday?</p>

<div className="flex justify-between items-center bg-gray-800 rounded-lg p-1 border border-gray-700">
<button className="flex-1 py-2 text-xs font-medium text-gray-400 rounded-md hover:bg-gray-700 transition-colors">Better</button>
<button className="flex-1 py-2 text-xs font-medium bg-gray-600 text-white shadow-sm rounded-md ring-1 ring-black/20">Same</button>
<button className="flex-1 py-2 text-xs font-medium text-gray-400 rounded-md hover:bg-gray-700 transition-colors">Worse</button>
</div>
<button className="w-full mt-4 bg-white text-gray-900 py-3 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors">
                        Log Feedback
                    </button>
</div>
</section>
</main>

<nav className="fixed bottom-0 max-w-md w-full bg-white/90 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center px-2 py-3 pb-6 z-50">
<a className="flex flex-col items-center gap-1 p-2 text-indigo-600" href="#">
<i className="w-6 h-6 stroke-[2]" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="library"></i>
<span className="text-[10px] font-medium">Library</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
<span className="text-[10px] font-medium">Progress</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="user"></i>
<span className="text-[10px] font-medium">Profile</span>
</a>
</nav>
</div>


    </>
  );
}
