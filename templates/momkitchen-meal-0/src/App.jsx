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
      

<nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center relative z-20">
<div className="flex items-center gap-2">
<div className="bg-violet-600 p-2 rounded-xl text-white">
<svg className="lucide lucide-chef-hat w-5 h-5" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<span className="font-serif font-semibold text-xl text-slate-900 tracking-tight">MomKitchen.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium">
<a className="hover:text-violet-600 transition-colors" href="#">Recipes</a>
<a className="hover:text-violet-600 transition-colors" href="#">Features</a>
<a className="hover:text-violet-600 transition-colors" href="#">Pricing</a>
</div>
<button className="bg-white border border-slate-200 hover:border-violet-200 hover:text-violet-600 px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm">
            Log In
        </button>
</nav>

<header className="flex flex-col overflow-hidden bg-[#F9F8FD] w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-32 pl-6 relative items-center">

<div className="absolute top-12 left-12 lg:left-24 text-slate-800 opacity-80 animate-bounce hidden md:block">
<svg className="lucide lucide-rocket transform -rotate-45" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s.25-4.08 3.7-5.46"></path><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s4.08-.25 5.46-3.7"></path></svg>
</div>
<div className="absolute top-20 right-10 lg:right-32 text-slate-800 opacity-60 animate-pulse hidden md:block">
<svg className="lucide lucide-star fill-amber-200 text-amber-400" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="absolute bottom-40 left-10 text-slate-400 opacity-60 hidden lg:block rotate-12">
<svg className="lucide lucide-orbit" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 1 0-14 0 7 7 0 0 0 14 0Z"></path><path d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0Z"></path><path d="M12 2a10 10 0 1 0 10 10"></path></svg>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
<div className="flex transform hover:scale-105 transition-transform duration-300 cursor-default bg-white border-slate-100 border rounded-full mb-10 pt-3 pr-8 pb-3 pl-8 shadow-sm gap-x-3 gap-y-3 items-center">
<span className="text-lg">🚀</span>
<span className="text-slate-600 font-medium tracking-wide">#1 Meal Planner for Parents</span>
</div><h1 className="text-5xl md:text-7xl font-serif font-bold text-[#1e1b4b] tracking-tight mb-8 leading-[1.1]">
            Stop Mealtime <span className="text-[#6C5DD3]">Stress!</span>
</h1>


<button className="hover:bg-[#5b4eb8] shadow-violet-200 transition-all hover:-translate-y-1 flex group overflow-hidden text-lg font-bold text-white bg-[#6C5DD3] rounded-full pt-5 pr-10 pb-5 pl-10 relative shadow-xl gap-x-3 gap-y-3 items-center">
<span className="relative z-10">Start Your 7-Day Free Trial</span>
<div className="bg-white/20 p-1 rounded-full relative z-10 group-hover:translate-x-1 transition-transform">
<svg className="lucide lucide-chevron-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
</button>
</div>

<div className="grid lg:grid-cols-12 gap-8 w-full items-center relative z-10 mt-4">

<div className="lg:col-span-4 flex justify-center lg:justify-end relative group order-2 lg:order-1">
<div className="relative w-64 h-80 lg:w-72 lg:h-96">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-56 lg:w-64 lg:h-64 bg-[#FF8F5D] rounded-full -z-10 group-hover:scale-105 transition-transform duration-500"></div>

<img alt="Happy child" className="transform group-hover:rotate-0 transition-transform duration-500 w-full h-full object-cover border-white/50 border-4 rounded-[2.5rem] shadow-lg rotate-2" src="https://images.unsplash.com/photo-1678285901330-bb80e5432cd5?w=800&amp;q=80"/>

<div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-lg rotate-12 animate-float">
<svg className="lucide lucide-book-open text-[#FF8F5D]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-4 text-center px-4 relative order-1 lg:order-2">

<svg className="hidden xl:block absolute -top-12 -left-8 w-24 h-24 text-slate-300 transform -rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M90,50 C70,10 30,10 10,40" marker-end="url(#arrowhead)" stroke-dasharray="4 4"></path>
</svg>
<p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                We just don't give you recipes, we provide a complete <span className="text-[#6C5DD3] font-bold">nutritional ecosystem</span> with real expert support and tools throughout your parenting journey!
            </p>
<div className="flex flex-col gap-6 relative">

<div className="bg-white p-4 pr-8 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 w-fit mx-auto lg:ml-0 lg:-translate-x-4 hover:-translate-y-1 transition-transform cursor-pointer">
<div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-sky-600">
<svg className="lucide lucide-users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="text-left">
<h3 className="text-2xl font-bold text-slate-900">10k+</h3>
<p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Total Moms</p>
</div>
</div>

<div className="bg-white p-4 pr-8 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 w-fit mx-auto lg:mr-0 lg:ml-auto lg:translate-x-4 hover:-translate-y-1 transition-transform cursor-pointer">
<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<svg className="lucide lucide-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<div className="text-left">
<h3 className="text-2xl font-bold text-slate-900">500+</h3>
<p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Daily Recipes</p>
</div>
</div>

</div>
</div>

<div className="lg:col-span-4 flex justify-center lg:justify-start relative group order-3">
<div className="relative w-64 h-80 lg:w-72 lg:h-96">

<div className="absolute top-10 left-1/2 -translate-x-1/2 w-56 h-56 lg:w-64 lg:h-64 bg-[#FFD02F] rounded-full -z-10 group-hover:scale-105 transition-transform duration-500"></div>

<img alt="Happy cooking" className="transform group-hover:rotate-0 transition-transform duration-500 w-full h-full object-cover border-white/50 border-4 rounded-[2.5rem] shadow-lg -rotate-2" src="https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?w=800&amp;q=80"/>

<div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-lg -rotate-12 animate-float-delayed">
<svg className="lucide lucide-utensils text-[#FFD02F]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
</div>
</div>
</div>
</header>

<section className="w-full bg-[#1E1B4B] py-20 px-6 my-10 rounded-[3rem] mx-auto max-w-[95%] text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-violet-600 rounded-full blur-[100px] opacity-30"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Tired of Kitchen Overwhelm?</h2>
<p className="text-xl text-violet-200">We understand the daily struggle of feeding a family.</p>
</div>
<div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/15 transition-all group">
<div className="w-14 h-14 bg-rose-500/20 text-rose-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-frown w-7 h-7" data-lucide="frown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Struggling with picky eaters?</h3>
<p className="text-lg text-slate-300">Dealing with GTM (Gerakan Tutup Mulut) every single mealtime is exhausting.</p>
</div>

<div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/15 transition-all group">
<div className="w-14 h-14 bg-amber-500/20 text-amber-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-7 h-7" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3">No time to cook twice?</h3>
<p className="text-lg text-slate-300">Cooking separate meals for the baby and the rest of the family drains your energy.</p>
</div>

<div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/15 transition-all group">
<div className="w-14 h-14 bg-cyan-500/20 text-cyan-300 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-activity w-7 h-7" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Nutritional worries?</h3>
<p className="text-lg text-slate-300">Constantly stressed about meeting daily iron, protein, and vitamin requirements.</p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-violet-600 font-semibold tracking-wider text-sm uppercase">Features</span>
<h2 className="text-4xl md:text-5xl text-slate-900 font-semibold tracking-tight mt-3">Practical Mom's Kitchen Tools</h2>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
<div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-200 rounded-full scale-0 transition-transform origin-bottom-left group-hover:scale-150"></div>
<svg className="lucide lucide-calendar-check w-8 h-8 relative z-10" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Automatic Meal Planner</h3>
<p className="text-lg leading-relaxed">Input baby's age and allergies, and our system generates a 7-day, optimized menu for both MPASI and the whole family.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
<div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-8">
<svg className="lucide lucide-chef-hat w-8 h-8" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Expert-Verified Recipes</h3>
<p className="text-lg leading-relaxed">Access hundreds of failure-proof recipes, tested by nutritionists, complete with exclusive step-by-step video guides.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 border border-slate-100">
<div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-8">
<svg className="lucide lucide-shopping-cart w-8 h-8" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Instant Shopping List</h3>
<p className="text-lg leading-relaxed">Turn your weekly menu into an organized list automatically, ready to print or sync with online grocery apps.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-amber-50/50">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl text-slate-900 font-semibold tracking-tight text-center mb-16">Real Results from Happy Families</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100/50">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6">"My baby's GTM issues disappeared! The recipes are so tasty even my husband loves them. Total game changer."</p>
<div className="flex items-center gap-4">
<img alt="Sarah" className="w-12 h-12 rounded-full" src="https://i.pravatar.cc/100?img=5"/>
<div>
<h4 className="font-semibold text-slate-900">Sarah K.</h4>
<p className="text-sm text-slate-500">Bandung, ID</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100/50 relative">

<div className="absolute -top-4 -right-4 bg-violet-600 text-white p-2 rounded-xl rotate-12 shadow-lg">
<svg className="lucide lucide-heart w-5 h-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6">"The shopping list feature saves me 2 hours a week. I don't have to think about 'what to cook' anymore."</p>
<div className="flex items-center gap-4">
<img alt="Linda" className="w-12 h-12 rounded-full" src="https://i.pravatar.cc/100?img=32"/>
<div>
<h4 className="font-semibold text-slate-900">Linda M.</h4>
<p className="text-sm text-slate-500">Jakarta, ID</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100/50">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg italic mb-6">"Finally, a meal plan that considers allergies seriously. It gives me so much peace of mind."</p>
<div className="flex items-center gap-4">
<img alt="Rina" className="w-12 h-12 rounded-full" src="https://i.pravatar.cc/100?img=9"/>
<div>
<h4 className="font-semibold text-slate-900">Rina S.</h4>
<p className="text-sm text-slate-500">Surabaya, ID</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl text-slate-900 font-semibold tracking-tight">Choose the Perfect Plan</h2>
<p className="text-xl text-slate-500 mt-4">Start small or go all in for your family's health.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="bg-white p-10 rounded-[2.5rem] border border-slate-200">
<h3 className="text-3xl font-serif font-semibold text-slate-900 mb-2">Starter</h3>
<p className="text-slate-500 mb-8 text-lg">Perfect for trying things out.</p>
<div className="text-5xl font-semibold text-slate-900 mb-8">$0<span className="text-xl font-normal text-slate-500">/mo</span></div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg">
<div className="bg-slate-100 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        20 MPASI Recipes
                    </li>
<li className="flex items-center gap-3 text-lg">
<div className="bg-slate-100 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-slate-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        20 Home Recipes
                    </li>
<li className="flex items-center gap-3 text-lg text-slate-400">
<div className="bg-slate-50 p-1 rounded-full"><svg className="lucide lucide-x w-4 h-4 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
                        Automatic Planner
                    </li>
<li className="flex items-center gap-3 text-lg text-slate-400">
<div className="bg-slate-50 p-1 rounded-full"><svg className="lucide lucide-x w-4 h-4 text-slate-300" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></div>
                        Shopping List
                    </li>
</ul>
<button className="w-full py-4 rounded-full border-2 border-slate-200 font-semibold text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors text-lg">
                    Get Started Free
                </button>
</div>

<div className="bg-[#1E1B4B] p-10 rounded-[2.5rem] text-white relative shadow-2xl shadow-violet-900/20 overflow-hidden transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-violet-600 text-white text-sm font-bold px-6 py-2 rounded-bl-2xl">POPULAR</div>
<h3 className="text-3xl font-serif font-semibold mb-2">Premium Mom</h3>
<p className="text-violet-200 mb-8 text-lg">Everything you need for a stress-free kitchen.</p>
<div className="text-5xl font-semibold mb-8">$12<span className="text-xl font-normal text-violet-300">/mo</span></div>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-lg">
<div className="bg-violet-600 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Unlimited Recipes
                    </li>
<li className="flex items-center gap-3 text-lg">
<div className="bg-violet-600 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Automatic Weekly Planner
                    </li>
<li className="flex items-center gap-3 text-lg">
<div className="bg-violet-600 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Video Guides
                    </li>
<li className="flex items-center gap-3 text-lg">
<div className="bg-violet-600 p-1 rounded-full"><svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                        Smart Shopping List
                    </li>
</ul>
<button className="w-full py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold transition-colors text-lg shadow-lg">
                    Unlock Premium Access Today
                </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-violet-600 p-1.5 rounded-lg text-white">
<svg className="lucide lucide-chef-hat w-4 h-4" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<span className="font-serif font-semibold text-lg text-slate-900 tracking-tight">MomKitchen.</span>
</div>
<div className="text-slate-500 text-sm">
                © 2023 MomKitchen Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-violet-600" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-violet-600" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-violet-600" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
