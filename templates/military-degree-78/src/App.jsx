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



        // Simple mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
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
      

<nav className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="text-[#0B1F3B] transition-transform duration-300 group-hover:scale-110">
<iconify-icon height="32" icon="solar:mortarboard-linear" width="32"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-[#0B1F3B]">Military Degree Directory</span>
</a>

<div className="hidden lg:flex items-center relative group">
<iconify-icon className="absolute left-3 text-slate-400 group-hover:text-[#0B1F3B] transition-colors" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="pl-10 pr-4 py-2.5 bg-[#F7F9FC] border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3B]/20 focus:border-[#0B1F3B] w-64 transition-all duration-300 hover:shadow-sm placeholder:text-slate-400 font-normal text-[#0B1F3B]" placeholder="Search degrees..." type="text"/>
</div>
</div>

<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-6 text-sm font-medium text-[#5B6B7A]">
<a className="hover:text-[#0B1F3B] transition-colors" href="#">Browse Degrees</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#">Schools</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#">GI Bill &amp; Benefits</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#">Guides</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#">Scholarships</a>
</div>
<a className="px-6 py-2.5 bg-[#C1121F] text-white font-medium rounded-lg hover:bg-[#9f0e19] transition-all duration-200 shadow-sm transform hover:-translate-y-0.5 active:translate-y-0" href="#">
                        Find Your Program
                    </a>
</div>

<button className="lg:hidden p-2 text-slate-600 hover:text-[#0B1F3B]" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex-col gap-4" id="mobile-menu">
<input className="w-full pl-4 pr-4 py-3 bg-[#F7F9FC] border border-slate-200 rounded-lg text-base focus:ring-2 focus:ring-[#0B1F3B]" placeholder="Search degrees..." type="text"/>
<a className="text-lg font-medium text-[#0B1F3B] py-2 border-b border-slate-100" href="#">Browse Degrees</a>
<a className="text-lg font-medium text-[#5B6B7A] py-2 border-b border-slate-100" href="#">Schools</a>
<a className="text-lg font-medium text-[#5B6B7A] py-2 border-b border-slate-100" href="#">GI Bill &amp; Benefits</a>
<a className="text-lg font-medium text-[#5B6B7A] py-2" href="#">Guides</a>
<a className="text-lg font-medium text-[#C1121F] py-2" href="#">Find Your Program</a>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">

<div className="max-w-4xl">
<h1 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] tracking-tight leading-[1.15] mb-6">
                Search military-friendly degree programs in seconds.
            </h1>
<p className="text-xl text-[#5B6B7A] font-normal leading-relaxed max-w-2xl mb-10">
                Compare online and on-campus options, tuition support, transfer credit policies, and flexible schedules for service members and veterans.
            </p>
</div>

<div className="flex flex-col lg:flex-row gap-2 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgb(11,31,59,0.08)] bg-white border-slate-200 border rounded-xl pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-x-2 gap-y-2 relative z-10">

<div className="flex-1 group relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-hover:text-[#0B1F3B] transition-colors" height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</div>
<input className="block placeholder:text-slate-400 focus:ring-0 focus:bg-[#F7F9FC] transition-colors text-lg font-normal text-[#0B1F3B] bg-transparent w-full rounded-lg pt-4 pr-4 pb-4 pl-12" placeholder="Degree, school, or career goal (ex: cybersecurity, nursing, MBA)" type="text"/>
</div>

<div className="hidden lg:block w-px bg-slate-200 my-3"></div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-hover:text-[#0B1F3B] transition-colors" height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<input className="block placeholder:text-slate-400 focus:ring-0 focus:bg-[#F7F9FC] transition-colors text-lg font-normal text-[#0B1F3B] bg-transparent w-full rounded-lg pt-4 pr-4 pb-4 pl-12" placeholder="Online / State / City / Near base" type="text"/>
</div>

<button className="w-full lg:w-auto px-8 py-3 bg-[#C1121F] hover:bg-[#9f0e19] text-white text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform active:scale-95 flex items-center justify-center gap-2">
<span className="">Search Programs</span>
</button>
</div>

<div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#5B6B7A] hover:border-[#0B1F3B] hover:text-[#0B1F3B] transition-colors">100% Online</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#5B6B7A] hover:border-[#0B1F3B] hover:text-[#0B1F3B] transition-colors">Evening / Weekend</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#5B6B7A] hover:border-[#0B1F3B] hover:text-[#0B1F3B] transition-colors">Transfer Credits</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#5B6B7A] hover:border-[#0B1F3B] hover:text-[#0B1F3B] transition-colors">Mil. Tuition Assistance</button>
<button className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-sm font-medium text-[#5B6B7A] hover:border-[#0B1F3B] hover:text-[#0B1F3B] transition-colors">GI Bill Friendly</button>
</div>
<span className="text-sm text-slate-400 hidden lg:block">Start broad. Filter down fast.</span>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-[#F7F9FC] rounded-xl flex items-center justify-center text-[#2B5C8A] mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300">
<iconify-icon height="32" icon="solar:briefcase-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0B1F3B] mb-3 tracking-tight">Career-Focused Degrees</h3>
<p className="text-base text-[#5B6B7A] font-normal leading-relaxed mb-4">Cybersecurity, IT, Healthcare, Business, Education, and Trades designed for transition.</p>
<span className="text-[#2B5C8A] font-medium flex items-center gap-1 text-sm group-hover:gap-2 transition-all">Explore careers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-[#F7F9FC] rounded-xl flex items-center justify-center text-[#2B5C8A] mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300">
<iconify-icon height="32" icon="solar:laptop-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0B1F3B] mb-3 tracking-tight">Flexible Learning</h3>
<p className="text-base text-[#5B6B7A] font-normal leading-relaxed mb-4">Find 100% online programs, hybrid options, and self-paced courses that fit active duty schedules.</p>
<span className="text-[#2B5C8A] font-medium flex items-center gap-1 text-sm group-hover:gap-2 transition-all">View options <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>

<div className="p-8 border border-slate-200 rounded-2xl bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
<div className="w-14 h-14 bg-[#F7F9FC] rounded-xl flex items-center justify-center text-[#2B5C8A] mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300">
<iconify-icon height="32" icon="solar:hand-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0B1F3B] mb-3 tracking-tight">Benefits &amp; Funding</h3>
<p className="text-base text-[#5B6B7A] font-normal leading-relaxed mb-4">Maximize your GI Bill, Tuition Assistance, and find Yellow Ribbon schools and scholarships.</p>
<span className="text-[#2B5C8A] font-medium flex items-center gap-1 text-sm group-hover:gap-2 transition-all">Maximize benefits <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</main>

<section className="bg-[#0B1F3B] py-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="">
<span className="inline-block px-3 py-1 bg-[#2B5C8A]/30 text-blue-100 text-xs font-semibold uppercase tracking-wider rounded-full mb-4 border border-[#2B5C8A]/50">
                    Featured
                </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Featured Military-Friendly Programs</h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full relative">
<div className="flex w-[200%] animate-scroll hover:pause">

<div className="flex animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="min-w-[340px] w-[340px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative border border-transparent hover:border-[#C1121F]/20">
<div className="absolute top-4 right-4 bg-[#F7F9FC] text-[#0B1F3B] text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide">Featured</div>
<div className="flex flex-col items-start text-left">
<div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
<img alt="University Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2 py-1 rounded">100% Online Options</span>
</div>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Liberty State University</h3>
<p className="text-sm text-[#5B6B7A] font-medium mb-4">Cybersecurity &amp; Business Analytics</p>
<ul className="space-y-2 mb-6 w-full">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Max transfer credit accepted
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Dedicated military advisors
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> $250/credit hour cap match
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-[#0B1F3B] text-[#0B1F3B] font-semibold hover:bg-[#0B1F3B] hover:text-white transition-all text-sm">View Details</button>
</div>
</div>

<div className="min-w-[340px] w-[340px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative border border-transparent hover:border-[#C1121F]/20">
<div className="absolute top-4 right-4 bg-[#F7F9FC] text-[#0B1F3B] text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide">Featured</div>
<div className="flex flex-col items-start text-left">
<div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
<img alt="Students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2 py-1 rounded">Hybrid &amp; Campus</span>
</div>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Global Tech Institute</h3>
<p className="text-sm text-[#5B6B7A] font-medium mb-4">IT, Cloud Computing &amp; AI</p>
<ul className="space-y-2 mb-6 w-full">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Industry certs included
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Self-paced learning
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Yellow Ribbon Program
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-[#0B1F3B] text-[#0B1F3B] font-semibold hover:bg-[#0B1F3B] hover:text-white transition-all text-sm">View Details</button>
</div>
</div>

<div className="min-w-[340px] w-[340px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative border border-transparent hover:border-[#C1121F]/20">
<div className="absolute top-4 right-4 bg-[#F7F9FC] text-[#0B1F3B] text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide">Featured</div>
<div className="flex flex-col items-start text-left">
<div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
<img alt="Healthcare" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2 py-1 rounded">Nursing &amp; Health</span>
</div>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Columbia Southern Medical</h3>
<p className="text-sm text-[#5B6B7A] font-medium mb-4">Nursing, Public Health, Admin</p>
<ul className="space-y-2 mb-6 w-full">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Credit for medic training
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Clinical placement support
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Flexible term starts
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-[#0B1F3B] text-[#0B1F3B] font-semibold hover:bg-[#0B1F3B] hover:text-white transition-all text-sm">View Details</button>
</div>
</div>

<div className="min-w-[340px] w-[340px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative border border-transparent hover:border-[#C1121F]/20">
<div className="absolute top-4 right-4 bg-[#F7F9FC] text-[#0B1F3B] text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide">Featured</div>
<div className="flex flex-col items-start text-left">
<div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
<img alt="Business" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2 py-1 rounded">Executive MBA</span>
</div>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Washington Leadership U</h3>
<p className="text-sm text-[#5B6B7A] font-medium mb-4">Business Management &amp; HR</p>
<ul className="space-y-2 mb-6 w-full">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> GMAT waiver for officers
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Weekend intensives
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Strong alumni network
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-[#0B1F3B] text-[#0B1F3B] font-semibold hover:bg-[#0B1F3B] hover:text-white transition-all text-sm">View Details</button>
</div>
</div>
</div>

<div aria-hidden="true" className="flex animate-infinite-scroll pl-6 gap-x-6 gap-y-6">

<div className="min-w-[340px] w-[340px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 group relative border border-transparent hover:border-[#C1121F]/20">
<div className="absolute top-4 right-4 bg-[#F7F9FC] text-[#0B1F3B] text-[10px] font-bold uppercase px-2 py-1 rounded tracking-wide">Featured</div>
<div className="flex flex-col items-start text-left">
<div className="w-full h-40 rounded-xl overflow-hidden mb-5 relative">
<img alt="University Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/40 backdrop-blur-md px-2 py-1 rounded">100% Online Options</span>
</div>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-1">Liberty State University</h3>
<p className="text-sm text-[#5B6B7A] font-medium mb-4">Cybersecurity &amp; Business Analytics</p>
<ul className="space-y-2 mb-6 w-full">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Max transfer credit accepted
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> Dedicated military advisors
                                </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#2B5C8A]" icon="solar:check-circle-bold"></iconify-icon> $250/credit hour cap match
                                </li>
</ul>
<button className="w-full py-2.5 rounded-lg border-2 border-[#0B1F3B] text-[#0B1F3B] font-semibold hover:bg-[#0B1F3B] hover:text-white transition-all text-sm">View Details</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#C1121F] font-semibold uppercase tracking-wider text-sm mb-3 block">Simple Process</span>
<h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3B] tracking-tight mb-6">How Military Degree Directory Works</h2>
<p className="text-xl text-[#5B6B7A] font-normal">We organize. You decide.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-slate-100 rounded-2xl bg-[#F7F9FC] group">
<div className="mb-6 text-[#0B1F3B] group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="40" icon="solar:magnifer-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1F3B] text-white font-bold text-sm">1</span>
<h3 className="text-xl font-bold text-[#0B1F3B] tracking-tight">Search by Goal</h3>
</div>
<p className="text-base text-[#5B6B7A] leading-relaxed font-normal">
                        Enter your desired degree, career path, or preferred location. Use filters to find "GI Bill Friendly" schools immediately.
                    </p>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-[#F7F9FC] group">
<div className="mb-6 text-[#0B1F3B] group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="40" icon="solar:sort-from-top-to-bottom-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1F3B] text-white font-bold text-sm">2</span>
<h3 className="text-xl font-bold text-[#0B1F3B] tracking-tight">Compare Options</h3>
</div>
<p className="text-base text-[#5B6B7A] leading-relaxed font-normal">
                        Review transfer credit policies, tuition assistance caps, and flexibility. See which programs fit your mission timeline.
                    </p>
</div>

<div className="p-8 border border-slate-100 rounded-2xl bg-[#F7F9FC] group">
<div className="mb-6 text-[#0B1F3B] group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="40" icon="solar:checklist-minimalistic-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B1F3B] text-white font-bold text-sm">3</span>
<h3 className="text-xl font-bold text-[#0B1F3B] tracking-tight">Apply Smarter</h3>
</div>
<p className="text-base text-[#5B6B7A] leading-relaxed font-normal">
                        Use our checklists to ask the right questions to admissions advisors and maximize your military education benefits.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FC] relative border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-[#0B1F3B] tracking-tight mb-12 text-center">Benefits &amp; Funding Quick Guide</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#2B5C8A]" href="#">
<div className="mb-4 text-[#2B5C8A]">
<iconify-icon height="32" icon="solar:diploma-verified-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#0B1F3B] mb-2 group-hover:text-[#C1121F] transition-colors">GI Bill Basics</h3>
<p className="text-sm text-[#5B6B7A] leading-snug mb-4">Understand the Post-9/11 GI Bill, housing allowances (BAH), and book stipends.</p>
<div className="mt-auto text-[#C1121F] text-sm font-medium flex items-center gap-1">Read Guide <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#2B5C8A]" href="#">
<div className="mb-4 text-[#2B5C8A]">
<iconify-icon height="32" icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#0B1F3B] mb-2 group-hover:text-[#C1121F] transition-colors">Tuition Assistance (TA)</h3>
<p className="text-sm text-[#5B6B7A] leading-snug mb-4">How active duty service members can get up to $250/credit hour covered.</p>
<div className="mt-auto text-[#C1121F] text-sm font-medium flex items-center gap-1">Read Guide <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#2B5C8A]" href="#">
<div className="mb-4 text-[#2B5C8A]">
<iconify-icon height="32" icon="solar:ribbon-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#0B1F3B] mb-2 group-hover:text-[#C1121F] transition-colors">Yellow Ribbon Program</h3>
<p className="text-sm text-[#5B6B7A] leading-snug mb-4">Find private and out-of-state schools that cover tuition costs exceeding the GI Bill cap.</p>
<div className="mt-auto text-[#C1121F] text-sm font-medium flex items-center gap-1">Read Guide <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-[#2B5C8A]" href="#">
<div className="mb-4 text-[#2B5C8A]">
<iconify-icon height="32" icon="solar:history-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#0B1F3B] mb-2 group-hover:text-[#C1121F] transition-colors">Credit for Training</h3>
<p className="text-sm text-[#5B6B7A] leading-snug mb-4">Convert your JST (Joint Services Transcript) and military experience into college credits.</p>
<div className="mt-auto text-[#C1121F] text-sm font-medium flex items-center gap-1">Read Guide <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3B] tracking-tight">Latest Guides</h2>
<a className="text-[#2B5C8A] font-medium hover:text-[#0B1F3B] transition-colors flex items-center gap-1" href="#">View all guides <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">GI Bill</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">GI Bill vs Tuition Assistance: What to Use First?</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">A strategic guide to preserving your benefits while on active duty versus saving them for later.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Working" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">Career Paths</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">Best Degrees for Career Transition After Service</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">From logistics to cybersecurity—which degrees yield the highest ROI for veterans.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Online Learning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">Choosing a Program</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">Questions to Ask a Military Admissions Advisor</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">Don't enroll until you get clear answers on these 5 critical deployment policies.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Paperwork" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">Warnings</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">How to Avoid "Degree Mill" Red Flags</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">Spotting predatory schools that target veterans for their GI Bill money.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Studying" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">Online Learning</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">Asynchronous vs. Synchronous: What fits active duty?</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">Why self-paced (asynchronous) learning is often the superior choice for deployed members.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="rounded-xl overflow-hidden mb-4 aspect-video bg-slate-100">
<img alt="Students" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-xs font-bold text-[#C1121F] uppercase tracking-wide mb-2">Transfer Credits</span>
<h3 className="text-xl font-bold text-[#0B1F3B] mb-2 group-hover:text-[#2B5C8A] transition-colors leading-tight">Maxing Out Your JST Credits</h3>
<p className="text-[#5B6B7A] text-sm line-clamp-2">How to ensure you get every single credit you deserve for your military training.</p>
</article>
</div>
</div>
</section>

<section className="bg-[#0B1F3B] py-20 overflow-hidden relative">
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2B5C8A]/30 backdrop-blur-sm mb-6 text-white border border-[#2B5C8A]/50">
<iconify-icon height="32" icon="solar:checklist-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                Get the Military Degree Checklist (Free)
            </h2>
<p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto font-normal">
                Don't waste time or benefits. Get our one-page PDF guide containing questions to ask advisors, a funding options map, and a transfer credit checklist.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-4">
<input className="flex-1 px-4 py-3.5 rounded-lg border-0 bg-white/10 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-[#C1121F] backdrop-blur-sm" placeholder="First Name" type="text"/>
<input className="flex-1 px-4 py-3.5 rounded-lg border-0 bg-white/10 text-white placeholder:text-blue-200 focus:ring-2 focus:ring-[#C1121F] backdrop-blur-sm" placeholder="Email Address" type="email"/>
<button className="px-6 py-3.5 bg-[#C1121F] hover:bg-[#9f0e19] text-white font-semibold rounded-lg transition-all shadow-lg whitespace-nowrap" type="button">
                    Send Checklist
                </button>
</form>
<p className="text-blue-300/60 text-xs">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2 lg:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="text-[#0B1F3B]">
<iconify-icon height="28" icon="solar:mortarboard-linear" width="28"></iconify-icon>
</div>
<span className="text-lg font-bold text-[#0B1F3B] tracking-tight">Military Degree Directory</span>
</a>
<p className="text-sm text-[#5B6B7A] font-normal mb-6 leading-relaxed">
                        Helping service members and veterans find military-friendly degree programs that fit their mission, budget, and future career goals.
                    </p>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<p className="text-xs text-[#5B6B7A] leading-snug font-medium">
<strong>Disclaimer:</strong> This site is not affiliated with the U.S. Department of Defense or the Department of Veterans Affairs.
                        </p>
</div>
</div>

<div>
<h3 className="text-[#0B1F3B] font-semibold mb-6 tracking-tight">Browse</h3>
<ul className="space-y-4 text-sm text-[#5B6B7A] font-medium">
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Search Degrees</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Featured Schools</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Online Programs</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Scholarship Finder</a></li>
</ul>
</div>

<div>
<h3 className="text-[#0B1F3B] font-semibold mb-6 tracking-tight">Guides</h3>
<ul className="space-y-4 text-sm text-[#5B6B7A] font-medium">
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">GI Bill Guide</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Tuition Assistance</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Career Transition</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">About Us</a></li>
</ul>
</div>

<div>
<h3 className="text-[#0B1F3B] font-semibold mb-6 tracking-tight">Contact</h3>
<ul className="space-y-4 text-sm text-[#5B6B7A] font-medium">
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Partner with Us</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">School Login</a></li>
<li><a className="hover:text-[#0B1F3B] transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-slate-400">
                    © 2024 Military Degree Directory. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-[#5B6B7A] font-medium">
<a className="hover:text-[#0B1F3B]" href="#">Privacy Policy</a>
<a className="hover:text-[#0B1F3B]" href="#">Terms of Service</a>
<a className="hover:text-[#0B1F3B]" href="#">Affiliate Disclosure</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
