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
      

<div className="w-full max-w-md bg-white min-h-screen relative shadow-2xl border-x border-zinc-100 flex flex-col pb-24">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-5 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:hand-helping" data-strokeWidth="1.5" data-width="18"></span>
</div>
<h1 className="text-lg font-semibold tracking-tight text-zinc-900">Sahayak</h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 text-zinc-600">
<span className="text-xs font-medium">अ</span>
</button>
<button className="relative">
<span className="iconify text-zinc-500" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar">

<section className="px-5 pt-6 pb-2">
<p className="text-sm text-zinc-500 mb-1">Namaste, Rajesh 🙏</p>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-5">How can we help today?</h2>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-zinc-400" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</div>
<input className="block w-full pl-10 pr-12 py-3.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="Search schemes, jobs, help..." type="text"/>
<div className="absolute inset-y-0 right-1 flex items-center">
<button className="p-2 bg-orange-500 rounded-lg text-white shadow-sm hover:bg-orange-600 transition-colors">
<span className="iconify" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="mt-3 flex gap-2 overflow-x-auto hide-scrollbar pb-2">
<span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs text-zinc-600 whitespace-nowrap">📜 Ration Card</span>
<span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs text-zinc-600 whitespace-nowrap">💊 Health ID</span>
<span className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-xs text-zinc-600 whitespace-nowrap">💼 Local Jobs</span>
</div>
</section>

<section className="px-5 mt-4">
<h3 className="text-sm font-medium text-zinc-900 mb-3">Quick Help (सुविधा)</h3>
<div className="grid grid-cols-4 gap-3">
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:banknote" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-600 text-center">Banking</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center text-green-600 group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-600 text-center">Docs</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 bg-yellow-50 border border-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:lightbulb" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-600 text-center">Bills</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 bg-purple-50 border border-purple-100 rounded-2xl flex items-center justify-center text-purple-600 group-active:scale-95 transition-transform">
<span className="iconify" data-icon="lucide:graduation-cap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="text-xs text-zinc-600 text-center">Study</span>
</button>
</div>
</section>

<section className="mt-8 px-5">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-zinc-900">Government Schemes (योजनाएं)</h3>
<a className="text-xs text-orange-600 font-medium" href="#">View All</a>
</div>
<div className="space-y-3">

<div className="bg-white border border-zinc-200 rounded-xl p-4 subtle-shadow card-hover">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:wheat" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">PM Kisan Yojana</h4>
<p className="text-xs text-zinc-500">Farmers Support</p>
</div>
</div>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-md font-medium">Active</span>
</div>
<p className="text-xs text-zinc-600 leading-relaxed mt-2 line-clamp-2">
                            Get ₹6,000 per year directly in your bank account. Check eligibility and apply now.
                        </p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-zinc-400">Easy Apply</span>
<button className="text-xs bg-zinc-900 text-white px-3 py-1.5 rounded-lg font-medium hover:bg-zinc-800 transition-colors">Check Status</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-4 subtle-shadow card-hover">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Awas Yojana</h4>
<p className="text-xs text-zinc-500">Housing Scheme</p>
</div>
</div>
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-xs rounded-md font-medium">Closing Soon</span>
</div>
</div>
</div>
</section>

<section className="mt-8 px-5 mb-6">
<div className="flex justify-between items-end mb-4">
<h3 className="text-sm font-medium text-zinc-900">Jobs Nearby (नौकरी)</h3>
<a className="text-xs text-orange-600 font-medium" href="#">Find More</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-5 px-5">

<div className="min-w-[240px] bg-white border border-zinc-200 rounded-xl p-4 subtle-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-bl-3xl -mr-2 -mt-2"></div>
<div className="relative z-10">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-2 inline-block">Full Time</span>
<h4 className="text-sm font-medium text-zinc-900 mt-1">Delivery Partner</h4>
<p className="text-xs text-zinc-500 mt-0.5">Zomato • Within 5km</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold text-zinc-900">₹18,000<span className="text-xs font-normal text-zinc-400">/mo</span></span>
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-transparent transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
</div>
</div>

<div className="min-w-[240px] bg-white border border-zinc-200 rounded-xl p-4 subtle-shadow relative overflow-hidden group">
<div className="relative z-10">
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-md mb-2 inline-block">Skill Required</span>
<h4 className="text-sm font-medium text-zinc-900 mt-1">Mobile Repair</h4>
<p className="text-xs text-zinc-500 mt-0.5">City Center • Shop</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold text-zinc-900">₹12,000<span className="text-xs font-normal text-zinc-400">/mo</span></span>
<button className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white group-hover:border-transparent transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="px-5 mb-8">
<div className="bg-zinc-900 rounded-xl p-5 text-white relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
<span className="iconify" data-icon="lucide:brain-circuit" data-strokeWidth="1" data-width="120"></span>
</div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-zinc-200 mb-1">Student Corner 🎓</h3>
<h2 className="text-lg font-semibold tracking-tight mb-2">Exam Preparation</h2>
<p className="text-xs text-zinc-400 mb-4 max-w-[80%]">Get simple notes in Hindi &amp; English for Class 10 &amp; 12.</p>
<div className="flex gap-2">
<button className="text-xs bg-white text-zinc-900 px-3 py-1.5 rounded-lg font-medium">View Notes</button>
<button className="text-xs bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg font-medium">Ask Question</button>
</div>
</div>
</div>
</section>
</main>

<div className="absolute bottom-20 right-4 z-50">
<button className="w-14 h-14 bg-gradient-to-tr from-orange-500 to-rose-500 rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center text-white hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>

<nav className="absolute bottom-0 w-full glass-nav z-40 pb-5 pt-3 px-6">
<div className="flex justify-between items-center">
<button className="flex flex-col items-center gap-1 text-orange-600">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Schemes</span>
</button>
<div className="w-8"></div> 
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Jobs</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-600">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5" data-width="22"></span>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</nav>
</div>

    </>
  );
}
