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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-blue-500 flex items-center justify-center text-white font-semibold text-base tracking-tighter shadow-sm">
                        CG
                    </div>
<span className="font-semibold text-lg tracking-tight text-slate-900">CareerPath</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Colleges</a>
<a className="text-sm font-medium text-[#4F8CFF] transition-colors relative after:absolute after:-bottom-5 after:left-0 after:w-full after:h-[2px] after:bg-[#4F8CFF] after:rounded-t-full" href="#">Courses</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Jobs</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Internships</a>
</div>

<div className="hidden md:flex items-center">
<button className="bg-slate-900 text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2">
<iconify-icon height="18" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Take Career Test
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="bg-gradient-to-b from-[#4F8CFF]/5 via-white to-transparent pt-16 pb-12 border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#22C55E]/20 text-[#22C55E] text-xs font-medium mb-6 shadow-sm">
<iconify-icon height="16" icon="solar:verified-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Industry-relevant courses trusted by 10,000+ students
            </div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 max-w-3xl">
                Explore Courses for Your Career
            </h1>
<p className="mt-4 text-base md:text-lg text-slate-500 max-w-2xl font-normal leading-relaxed">
                Find the right skills, certifications, and degrees to achieve your career goals after 12th.
            </p>

<div className="mt-10 w-full max-w-4xl bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-2 flex flex-col md:flex-row items-center gap-2 relative z-10 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

<div className="flex-1 flex items-center gap-3 px-4 py-3 w-full group">
<iconify-icon className="text-slate-400 group-focus-within:text-[#4F8CFF] transition-colors stroke-[1.5]" height="20" icon="solar:magnifier-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Search courses, skills..." type="text"/>
</div>
<div className="hidden md:block w-[1px] h-8 bg-slate-200"></div>

<div className="flex-1 flex items-center gap-3 px-4 py-3 w-full group">
<iconify-icon className="text-slate-400 group-focus-within:text-[#4F8CFF] transition-colors stroke-[1.5]" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Location (Optional)" type="text"/>
</div>
<div className="hidden md:block w-[1px] h-8 bg-slate-200"></div>

<div className="w-full md:w-48 relative group">
<button className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-600 bg-transparent rounded-xl hover:bg-slate-50 transition-colors outline-none text-left">
<span className="flex items-center gap-2">
<iconify-icon className="text-slate-400 stroke-[1.5]" height="20" icon="solar:filter-linear" width="20"></iconify-icon>
                            Any Level
                        </span>
<iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="absolute left-0 top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-slate-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer font-medium">Beginner</div>
<div className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer font-medium">Intermediate</div>
<div className="px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer font-medium">Expert</div>
</div>
</div>

<button className="w-full md:w-auto bg-[#4F8CFF] text-white px-8 py-3 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 flex items-center justify-center gap-2">
                    Search
                </button>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
<span className="text-slate-500 font-medium text-xs">Trending:</span>
<button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:border-[#4F8CFF] hover:text-[#4F8CFF] transition-colors">B.Tech</button>
<button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:border-[#4F8CFF] hover:text-[#4F8CFF] transition-colors">Digital Marketing</button>
<button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:border-[#4F8CFF] hover:text-[#4F8CFF] transition-colors">UI/UX Design</button>
<button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium hover:border-[#4F8CFF] hover:text-[#4F8CFF] transition-colors">Data Science</button>
</div>
</div>
</header>

<main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-8 items-start relative z-0">

<aside className="w-full lg:w-64 shrink-0 space-y-6">
<div className="bg-white rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 p-5 sticky top-24">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
<h2 className="text-base font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 stroke-[1.5]" height="20" icon="solar:tuning-square-2-linear" width="20"></iconify-icon>
                        Filters
                    </h2>
<button className="text-xs font-medium text-slate-400 hover:text-[#4F8CFF] transition-colors">Clear all</button>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-slate-900 mb-3">Category</h3>
<div className="space-y-3">

<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">Design &amp; Creative</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">Business &amp; Mgt</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">IT &amp; Software</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">Data Science</span>
</label>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-slate-900 mb-3">Price</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:border-[4px] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]"></div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">Free</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:border-[4px] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]"></div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">Paid</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Duration</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">0 - 3 Months</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">3 - 6 Months</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 peer-checked:bg-[#4F8CFF] peer-checked:border-[#4F8CFF] flex items-center justify-center text-white transition-all group-hover:border-[#4F8CFF]">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-[10px] stroke-[2]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-900 peer-checked:font-medium transition-colors">6+ Months</span>
</label>
</div>
</div>
</div>
</aside>

<div className="flex-1 w-full flex flex-col">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
<p className="text-sm text-slate-500 font-medium">Showing <span className="text-slate-900">1–12</span> of 120 courses</p>
<div className="flex items-center gap-3">
<span className="text-sm text-slate-500 font-medium">Sort by:</span>
<div className="relative group">
<button className="flex items-center gap-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 hover:bg-slate-50 transition-colors shadow-sm outline-none">
                            Most Popular
                            <iconify-icon className="text-slate-400" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
<div className="px-4 py-2 text-sm text-[#4F8CFF] bg-blue-50/50 cursor-pointer font-medium">Most Popular</div>
<div className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 cursor-pointer font-medium">Newest</div>
<div className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 cursor-pointer font-medium">Price: Low to High</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col relative">

<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
<img alt="UI Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
                            Popular
                        </div>
<button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-[#4F8CFF] hover:bg-white transition-colors shadow-sm">
<iconify-icon height="18" icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>

<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
<iconify-icon height="14" icon="solar:buildings-linear" width="14"></iconify-icon>
                            Design Institute
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug mb-1 group-hover:text-[#4F8CFF] transition-colors line-clamp-2">
                            Advanced UI/UX Design Masterclass
                        </h3>
<p className="text-sm text-slate-500 line-clamp-1 mb-4">Learn Figma, prototyping, and user psychology.</p>

<div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 mt-auto">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<span>4.8 <span className="text-slate-400 font-normal">(2k)</span></span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                24h
                            </div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1 text-[#22C55E]">
                                Beginner
                            </div>
</div>
<div className="h-[1px] w-full bg-slate-100 mb-4"></div>

<div className="flex items-center justify-between">
<div className="text-lg font-semibold text-slate-900 tracking-tight">₹2,999</div>
<button className="bg-[#4F8CFF]/10 text-[#4F8CFF] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#4F8CFF] hover:text-white transition-colors">
                                View Details
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col relative">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
<img alt="Web Dev" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-[#4F8CFF] hover:bg-white transition-colors shadow-sm">
<iconify-icon height="18" icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
<iconify-icon height="14" icon="solar:laptop-linear" width="14"></iconify-icon>
                            Tech Academy
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug mb-1 group-hover:text-[#4F8CFF] transition-colors line-clamp-2">
                            Full Stack Web Development
                        </h3>
<p className="text-sm text-slate-500 line-clamp-1 mb-4">Master React, Node.js, and modern databases.</p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 mt-auto">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<span>4.9 <span className="text-slate-400 font-normal">(5k)</span></span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                48h
                            </div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1 text-amber-500">
                                Intermediate
                            </div>
</div>
<div className="h-[1px] w-full bg-slate-100 mb-4"></div>
<div className="flex items-center justify-between">
<div className="text-lg font-semibold text-[#22C55E] tracking-tight">Free</div>
<button className="bg-[#4F8CFF] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors shadow-sm">
                                Start Learning
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col relative">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
<img alt="Data Science" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 z-20 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
                            Recommended
                        </div>
<button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-[#4F8CFF] hover:bg-white transition-colors shadow-sm">
<iconify-icon height="18" icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
<iconify-icon height="14" icon="solar:chart-2-linear" width="14"></iconify-icon>
                            DataPro Institute
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug mb-1 group-hover:text-[#4F8CFF] transition-colors line-clamp-2">
                            Data Science &amp; Machine Learning A-Z
                        </h3>
<p className="text-sm text-slate-500 line-clamp-1 mb-4">Python, Statistics, and predictive modeling.</p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 mt-auto">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<span>4.7 <span className="text-slate-400 font-normal">(1.2k)</span></span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                36h
                            </div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1 text-red-500">
                                Expert
                            </div>
</div>
<div className="h-[1px] w-full bg-slate-100 mb-4"></div>
<div className="flex items-center justify-between">
<div className="text-lg font-semibold text-slate-900 tracking-tight">₹4,500</div>
<button className="bg-[#4F8CFF]/10 text-[#4F8CFF] text-sm font-semibold px-4 py-2 rounded-xl hover:bg-[#4F8CFF] hover:text-white transition-colors">
                                View Details
                            </button>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 xl:col-span-3 bg-gradient-to-r from-[#22C55E]/10 via-white to-transparent border border-[#22C55E]/20 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm my-2 relative overflow-hidden">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-[#22C55E]/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="hidden sm:flex w-12 h-12 rounded-full bg-[#22C55E]/10 items-center justify-center shrink-0">
<iconify-icon className="text-[#22C55E] stroke-[1.5]" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg md:text-xl font-semibold text-slate-900 tracking-tight mb-1">Not sure which course is right for you?</h3>
<p className="text-sm text-slate-600 font-medium">Get AI-powered personalized recommendations based on your interests and career goals.</p>
</div>
</div>
<button className="w-full md:w-auto bg-[#22C55E] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-green-600 transition-colors shadow-sm shrink-0 relative z-10 flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:round-alt-arrow-right-linear" width="20"></iconify-icon>
                        Take Career Test
                    </button>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col relative">
<div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
<img alt="Digital Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:text-[#4F8CFF] hover:bg-white transition-colors shadow-sm">
<iconify-icon height="18" icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
<iconify-icon height="14" icon="solar:global-linear" width="14"></iconify-icon>
                            Marketing Hub
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 leading-snug mb-1 group-hover:text-[#4F8CFF] transition-colors line-clamp-2">
                            Complete Digital Marketing Course
                        </h3>
<p className="text-sm text-slate-500 line-clamp-1 mb-4">SEO, Social Media Ads, and Analytics.</p>
<div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4 mt-auto">
<div className="flex items-center gap-1">
<iconify-icon className="text-amber-400" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<span>4.6 <span className="text-slate-400 font-normal">(850)</span></span>
</div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-slate-400" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                                12h
                            </div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1 text-[#22C55E]">
                                Beginner
                            </div>
</div>
<div className="h-[1px] w-full bg-slate-100 mb-4"></div>
<div className="flex items-center justify-between">
<div className="text-lg font-semibold text-[#22C55E] tracking-tight">Free</div>
<button className="bg-[#4F8CFF] text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-blue-600 transition-colors shadow-sm">
                                Start Learning
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] overflow-hidden flex flex-col relative animate-pulse">
<div className="aspect-[4/3] bg-slate-200"></div>
<div className="p-5 flex flex-col flex-1">
<div className="h-3 w-24 bg-slate-200 rounded-full mb-3"></div>
<div className="h-5 w-full bg-slate-200 rounded-md mb-2"></div>
<div className="h-5 w-2/3 bg-slate-200 rounded-md mb-4"></div>
<div className="h-3 w-full bg-slate-100 rounded-full mb-4 mt-auto"></div>
<div className="h-[1px] w-full bg-slate-100 mb-4"></div>
<div className="flex items-center justify-between">
<div className="h-6 w-16 bg-slate-200 rounded-md"></div>
<div className="h-9 w-28 bg-slate-200 rounded-xl"></div>
</div>
</div>
</div>
</div>

<div className="mt-12 flex items-center justify-center gap-2">
<button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
<iconify-icon height="18" icon="solar:alt-arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-xl bg-[#4F8CFF] text-white text-sm font-medium flex items-center justify-center shadow-sm shadow-blue-200">1</button>
<button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium flex items-center justify-center hover:bg-slate-50 hover:text-[#4F8CFF] transition-colors">2</button>
<button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium flex items-center justify-center hover:bg-slate-50 hover:text-[#4F8CFF] transition-colors">3</button>
<span className="text-slate-400 px-1">...</span>
<button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-600 text-sm font-medium flex items-center justify-center hover:bg-slate-50 hover:text-[#4F8CFF] transition-colors">10</button>
<button className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-500 flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 py-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#4F8CFF] to-blue-500 flex items-center justify-center text-white font-semibold text-[10px]">CG</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">CareerPath © 2023</span>
</div>
<div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
</div>
</footer>

    </>
  );
}
