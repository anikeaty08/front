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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="w-full max-w-[1440px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative">

<header className="px-8 lg:px-12 py-6 flex items-center justify-between border-b border-slate-100">

<div className="text-3xl font-medium tracking-tight text-slate-900 flex items-center gap-1">
                MLC <span className="w-2 h-2 rounded-full bg-indigo-500 mb-2"></span>
</div>

<div className="hidden lg:flex items-center bg-slate-50 rounded-full px-6 py-3 w-[480px] border border-slate-100 focus-within:border-indigo-300 transition-colors">
<i className="w-5 h-5 text-slate-400 mr-3" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-base w-full placeholder:text-slate-400 text-slate-900" placeholder="Search courses..." type="text"/>
</div>

<div className="flex items-center gap-8 text-slate-600">
<a className="hidden sm:flex items-center gap-2 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="box"></i>
<span className="font-medium text-base">Orders</span>
</a>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="heart"></i>
<span className="font-medium text-base hidden sm:block">Favourites</span>
</a>
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors relative" href="#">
<i className="w-5 h-5" data-lucide="shopping-basket"></i>
<span className="font-medium text-base hidden sm:block">Cart</span>
<span className="absolute -top-2 -right-2 sm:right-auto sm:left-3 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border border-white">2</span>
</a>
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ml-2 shadow-sm border border-slate-100">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
</div>
</header>

<div className="px-8 lg:px-12 py-5 flex gap-3 overflow-x-auto no-scrollbar">
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-base hover:bg-slate-50 transition-all">All Categories</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-transparent bg-[#6366F1] text-white font-medium text-base shadow-md shadow-indigo-200">Health &amp; Wellness</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-base hover:bg-slate-50 transition-all">Sport</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-base hover:bg-slate-50 transition-all">Music</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-base hover:bg-slate-50 transition-all">Art</button>
<button className="whitespace-nowrap px-6 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-base hover:bg-slate-50 transition-all">Gaming</button>
</div>

<main className="p-8 lg:p-12 bg-slate-50/50 flex-grow">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1200px] mx-auto">

<div className="lg:col-span-8 flex flex-col">

<div className="mb-10">
<div className="flex items-center gap-4 mb-6">
<div className="flex items-center gap-1 text-[#FACC15]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half"></i>
</div>
<span className="text-base font-medium text-slate-500">4.9/5 Rating</span>
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
<span className="text-base font-medium text-slate-500">169 Students</span>
</div>
<h1 className="text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                            Yoga for Beginners
                        </h1>
<p className="text-xl text-slate-600 leading-relaxed">
                            Introductory course focusing on flexibility, breathing techniques, and basic yoga poses. Designed for absolute beginners to build a strong foundation in a relaxing environment.
                        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#6366F1] mb-1">
<i className="w-5 h-5" data-lucide="user"></i>
</div>
<div className="text-sm text-slate-500">Instructor</div>
<div className="text-base font-medium text-slate-900">L. Schmidt</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#6366F1] mb-1">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div className="text-sm text-slate-500">Schedule</div>
<div className="text-base font-medium text-slate-900">Mon, 18:00</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#6366F1] mb-1">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="text-sm text-slate-500">Location</div>
<div className="text-base font-medium text-slate-900">Room 2</div>
</div>
<div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#6366F1] mb-1">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div className="text-sm text-slate-500">Duration</div>
<div className="text-base font-medium text-slate-900">12 Weeks</div>
</div>
</div>

<div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-8 lg:p-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">What you'll learn</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Basic yoga poses and postures</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Flexibility and strength building</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Breathing techniques (Pranayama)</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Stress relief methods</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Mindfulness and meditation</span>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#6366F1] flex items-center justify-center text-white shrink-0 mt-0.5">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<span className="text-lg text-slate-700">Body alignment principles</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 relative">
<div className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.08)] p-8 sticky top-12">

<div className="text-center mb-8">
<span className="text-base font-medium text-slate-500 uppercase tracking-wider">Per Semester</span>
<div className="text-5xl font-medium tracking-tight text-slate-900 mt-2">$120.00</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
<div className="flex justify-between items-end mb-4">
<span className="text-base font-medium text-slate-700">Course Capacity</span>
<div className="text-2xl font-medium text-slate-900">12<span className="text-slate-400 text-lg">/15</span></div>
</div>

<div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full bg-[#6366F1] rounded-full w-[80%]"></div>
<div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-[#6366F1] rounded-full shadow-sm"></div>
</div>
<p className="text-sm text-center text-[#6366F1] font-medium mt-4">3 spots remaining</p>
</div>

<div className="space-y-4 mb-8">
<label className="flex items-center justify-between p-4 rounded-2xl border-2 border-[#6366F1] bg-indigo-50/50 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-[#6366F1] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#6366F1]"></div>
</div>
<span className="text-base font-medium text-slate-900">Standard Access</span>
</div>
<span className="text-base font-medium text-slate-900">Included</span>
</label>
<label className="flex items-center justify-between p-4 rounded-2xl border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<span className="text-base font-medium text-slate-700">Premium Kit</span>
</div>
<span className="text-base font-medium text-slate-500">+$45.00</span>
</label>
</div>

<button className="w-full bg-[#6366F1] hover:bg-indigo-600 text-white rounded-full py-4 text-lg font-medium transition-colors shadow-lg shadow-indigo-200 flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="shopping-basket"></i> Add to Cart
                        </button>
</div>
</div>
</div>

<div className="mt-20 max-w-[1200px] mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8 px-2">Related Courses</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col group">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6">
<button className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#FACC15] text-yellow-900 text-xs font-semibold px-4 py-1.5 rounded-full z-10 whitespace-nowrap">
                                Top item
                            </div>
<img alt="Pilates" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl font-medium text-slate-900 mb-6 truncate">Pilates Basics</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border-2 border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<i className="w-4 h-4" data-lucide="shopping-basket"></i>
<span className="text-base font-medium">$110.00</span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col group">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6">
<button className="absolute top-4 right-4 bg-white rounded-full p-2.5 shadow-sm text-slate-400 hover:text-red-500 transition-colors z-10">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
<img alt="Stretching" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl font-medium text-slate-900 mb-6 truncate">Stretching &amp; Mobility</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border-2 border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<i className="w-4 h-4" data-lucide="shopping-basket"></i>
<span className="text-base font-medium">$95.00</span>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col group">
<div className="aspect-[4/3] bg-slate-50 rounded-[1.5rem] relative flex items-center justify-center mb-6">
<button className="absolute top-4 right-4 bg-[#6366F1] rounded-full p-2.5 shadow-sm text-white transition-colors z-10">
<i className="w-5 h-5 fill-current" data-lucide="heart"></i>
</button>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-sm text-sm font-medium text-slate-800 flex items-center gap-1 z-10">
                                4.9/5 <i className="w-3.5 h-3.5 text-yellow-400 fill-current" data-lucide="star"></i>
</div>
<img alt="Meditation" className="absolute inset-0 w-full h-full object-cover rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow text-center">
<h3 className="text-xl font-medium text-slate-900 mb-6 truncate">Yoga &amp; Meditation</h3>
<div className="mt-auto">
<button className="mx-auto flex items-center justify-center gap-2 border-2 border-[#6366F1] text-[#6366F1] rounded-full px-6 py-2 hover:bg-indigo-50 transition-colors w-max">
<i className="w-4 h-4" data-lucide="shopping-basket"></i>
<span className="text-base font-medium">$110.00</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
