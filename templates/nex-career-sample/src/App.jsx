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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<span className="font-heading font-bold text-xl tracking-tight text-slate-900">NEXCAREER</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#">For Employers</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">For Job Seekers</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">Industries</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#">About</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900">Login</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                        Request Callback
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-50 -translate-x-1/4 translate-y-1/4"></div>
<div className="absolute inset-0 hero-pattern opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Verified Hiring Partner
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                        We connect the right people to the right jobs — <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">fast.</span>
</h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        A trusted placement partner for companies and job seekers. Verified profiles, quick turnaround, and support that actually responds.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<button className="flex-1 sm:flex-none bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-indigo-200 hover:-translate-y-1 flex items-center justify-center gap-2">
                            I'm Hiring
                            <i className="w-4 h-4" data-lucide="briefcase"></i>
</button>
<button className="flex-1 sm:flex-none bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full text-base font-medium transition-all hover:shadow-md flex items-center justify-center gap-2">
                            Find a Job
                            <i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=12"/>
</div>
<p>Trusted by <span className="text-slate-900 font-bold">150+</span> companies • <span className="text-slate-900 font-bold">5,000+</span> placements</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center lg:justify-end">
<div className="relative w-full max-w-md">

<div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full blur-2xl"></div>

<div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative z-10">
<div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
<h3 className="font-heading font-semibold text-slate-800 flex items-center gap-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="layout-dashboard"></i>
                                    Live Opportunity Board
                                </h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">Live Updates</span>
</div>

<div className="p-4 space-y-3">

<div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-semibold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">Sales Executive</h4>
<p className="text-xs text-slate-500">Bengaluru • TechStart Solutions</p>
</div>
<span className="text-[10px] font-bold tracking-wide uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Full-Time</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="banknote"></i> ₹4.5 - 6 LPA</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 2-4 Yrs</span>
</div>
</div>

<div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-semibold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">HR Recruiter</h4>
<p className="text-xs text-slate-500">Pune • Global Consultants</p>
</div>
<span className="text-[10px] font-bold tracking-wide uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Urgent</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="banknote"></i> ₹3 - 4.2 LPA</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 1-2 Yrs</span>
</div>
</div>

<div className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-semibold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">Senior Accountant</h4>
<p className="text-xs text-slate-500">Delhi NCR • FinCorp Ltd</p>
</div>
<span className="text-[10px] font-bold tracking-wide uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">Remote</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-600">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="banknote"></i> ₹8 - 12 LPA</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="clock"></i> 5+ Yrs</span>
</div>
</div>
</div>

<div className="p-4 bg-slate-50 border-t border-slate-100">
<button className="w-full border-2 border-dashed border-slate-300 bg-white hover:bg-slate-50 hover:border-indigo-400 text-slate-500 hover:text-indigo-600 rounded-lg py-3 text-sm font-medium transition-all flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="upload-cloud"></i>
                                    Upload Resume for Instant Match
                                </button>
<p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="shield-check"></i> No spam. Verified roles only.
                                </p>
</div>
</div>

<div className="absolute -bottom-6 -right-4 bg-white p-3 rounded-lg shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="bg-emerald-100 text-emerald-600 p-1.5 rounded-full">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<p className="text-xs font-bold text-slate-900">New Offer Letter!</p>
<p className="text-[10px] text-slate-500">Rahul got placed at Infosys</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white/50 backdrop-blur-sm overflow-hidden">
<div className="max-w-7xl mx-auto px-4 py-6">
<div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-4 md:justify-center items-center pb-2 md:pb-0">
<div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex-shrink-0">
<i className="w-4 h-4 text-indigo-600" data-lucide="badge-check"></i>
<span className="text-sm font-semibold text-slate-700">Verified Employers</span>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="search-check"></i>
<span className="text-sm font-semibold text-slate-700">Background Screening</span>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex-shrink-0">
<i className="w-4 h-4 text-orange-500" data-lucide="calendar-check-2"></i>
<span className="text-sm font-semibold text-slate-700">Interview Scheduling</span>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex-shrink-0">
<i className="w-4 h-4 text-blue-500" data-lucide="file-check"></i>
<span className="text-sm font-semibold text-slate-700">Offer Support</span>
</div>
<div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm flex-shrink-0">
<i className="w-4 h-4 text-purple-600" data-lucide="user-check"></i>
<span className="text-sm font-semibold text-slate-700">Post Placement Follow-up</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8 relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2">
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-300 rounded-full"></div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-300 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_0_4px_rgba(99,102,241,0.2)]"></div>
</div>

<div className="pr-0 md:pr-12 lg:pr-16 group">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 h-full">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Hire Better. Hire Faster.</h2>
<p className="text-slate-600 mb-6">Stop sifting through irrelevant resumes. We deliver pre-screened talent ready to interview.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="zap"></i>
                                Shortlisted candidates in 24–72 hrs
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="filter"></i>
                                Role-based deep screening
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="users"></i>
                                Full hiring coordination support
                            </li>
</ul>
<button className="w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                            Request Candidates
                            <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="pl-0 md:pl-12 lg:pl-16 mt-8 md:mt-0 group">
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 h-full">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="user-circle"></i>
</div>
<h2 className="text-2xl font-heading font-bold text-slate-900 mb-2">Your next job is closer than you think.</h2>
<p className="text-slate-600 mb-6">Access hidden opportunities and get guidance until you sign the offer letter.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="check-circle-2"></i>
                                100% Verified openings (No scams)
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="file-text"></i>
                                Resume optimization guidance
                            </li>
<li className="flex items-start gap-3 text-sm font-medium text-slate-700">
<i className="w-5 h-5 text-orange-500 shrink-0" data-lucide="calendar"></i>
                                Direct interview scheduling
                            </li>
</ul>
<button className="w-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                            Upload Resume
                            <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-4 tracking-tight">Hiring across industries that keep India moving.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">

<div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl bg-indigo-900 p-6 flex flex-col justify-between hover:scale-[1.01] transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="relative z-10 flex justify-between items-start">
<i className="w-8 h-8 text-indigo-300" data-lucide="monitor"></i>
<span className="bg-white/20 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md">Top Demand</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-white mb-1">IT &amp; Software</h3>
<p className="text-indigo-200 text-sm mb-4">Developers, QA, UI/UX, Support</p>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all text-xs text-white/80">
                            120+ roles filled last month
                        </div>
</div>
</div>

<div className="col-span-1 row-span-2 bg-slate-100 rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-200 transition-colors group">
<i className="w-6 h-6 text-slate-600" data-lucide="headset"></i>
<div>
<h3 className="font-bold text-slate-900">BPO &amp; Telecalling</h3>
<p className="text-xs text-slate-500 mt-1">Customer Success, Sales</p>
</div>
</div>

<div className="col-span-1 bg-emerald-50 rounded-2xl p-5 flex flex-col justify-center hover:bg-emerald-100 transition-colors cursor-pointer border border-emerald-100">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="trending-up"></i>
<h3 className="font-bold text-slate-900 text-sm">Sales &amp; Marketing</h3>
</div>
</div>

<div className="col-span-1 bg-orange-50 rounded-2xl p-5 flex flex-col justify-center hover:bg-orange-100 transition-colors cursor-pointer border border-orange-100">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-orange-600" data-lucide="calculator"></i>
<h3 className="font-bold text-slate-900 text-sm">Accounts</h3>
</div>
</div>

<div className="col-span-2 row-span-1 bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition-all">
<div className="flex items-center gap-4">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<div>
<h3 className="font-bold text-slate-900">Healthcare</h3>
<p className="text-xs text-slate-500">Nurses, Admin, Pharmacists</p>
</div>
</div>
<span className="text-slate-400"><i className="w-5 h-5" data-lucide="arrow-right"></i></span>
</div>

<div className="col-span-1 bg-slate-50 rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-100 transition-colors">
<i className="w-6 h-6 text-slate-600" data-lucide="truck"></i>
<h3 className="font-bold text-slate-900 text-sm">Logistics</h3>
</div>

<div className="col-span-1 bg-slate-50 rounded-2xl p-5 flex flex-col justify-between hover:bg-slate-100 transition-colors">
<i className="w-6 h-6 text-slate-600" data-lucide="factory"></i>
<h3 className="font-bold text-slate-900 text-sm">Manufacturing</h3>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-heading font-bold mb-4">A simple process. Strong outcomes.</h2>
<div className="inline-flex bg-slate-800 p-1 rounded-full border border-slate-700">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-sm transition-all">For Employers</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all">For Job Seekers</button>
</div>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-slate-800 border-2 border-indigo-500 rounded-full flex items-center justify-center text-indigo-400 text-xl font-bold mb-4 shadow-lg shadow-indigo-500/20">1</div>
<h3 className="font-bold text-lg mb-2">Requirement</h3>
<p className="text-sm text-slate-400">Share your job description and hiring goals.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 mb-4">2</div>
<h3 className="font-bold text-lg mb-2">Screening</h3>
<p className="text-sm text-slate-400">We filter database &amp; conduct 1st round.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 mb-4">3</div>
<h3 className="font-bold text-lg mb-2">Interview</h3>
<p className="text-sm text-slate-400">Coordinate schedules for shortlisted candidates.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-slate-300 mb-4">4</div>
<h3 className="font-bold text-lg mb-2">Selection</h3>
<p className="text-sm text-slate-400">Offer roll-out &amp; documentation support.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-14 h-14 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center text-emerald-400 mb-4">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h3 className="font-bold text-lg mb-2">Joining</h3>
<p className="text-sm text-slate-400">Candidate joins. 90-day replacement guarantee.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Not just recruitment.</h2>
<h2 className="text-3xl font-heading font-bold text-indigo-600 mb-8">A placement ecosystem.</h2>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="bg-emerald-100 p-2 rounded-lg text-emerald-600 mt-1">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-bold text-slate-900">Verified Candidates Only</h4>
<p className="text-sm text-slate-600 mt-1">We don't forward bulk dumps. Every profile is verified for intent and skill match.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-1">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-bold text-slate-900">Response Time SLA</h4>
<p className="text-sm text-slate-600 mt-1">We respect your time. Feedback and lineups provided within 24 business hours.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
<div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-1">
<i className="w-5 h-5" data-lucide="network"></i>
</div>
<div>
<h4 className="font-bold text-slate-900">Strong Network</h4>
<p className="text-sm text-slate-600 mt-1">Access to talent pools from 12+ industries and specialized domains.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
<span className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-2">5k+</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Placements</span>
</div>
<div className="bg-indigo-600 p-8 rounded-2xl shadow-lg shadow-indigo-200 flex flex-col justify-center items-center text-center text-white transform translate-y-4">
<span className="text-4xl lg:text-5xl font-bold tracking-tighter mb-2">150+</span>
<span className="text-sm font-medium text-indigo-100 uppercase tracking-wide">Hiring Partners</span>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center transform -translate-y-4">
<span className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-2">60%</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Repeat Clients</span>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
<span className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tighter mb-2">5-7</span>
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide">Days to Hire</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Featured Openings</h2>
<p className="text-slate-500">Verified jobs updated weekly.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-900 bg-slate-50">All</button>
<button className="px-4 py-2 rounded-full border border-transparent text-sm font-medium text-slate-500 hover:bg-slate-50">Freshers</button>
<button className="px-4 py-2 rounded-full border border-transparent text-sm font-medium text-slate-500 hover:bg-slate-50">Experienced</button>
<button className="px-4 py-2 rounded-full border border-transparent text-sm font-medium text-slate-500 hover:bg-slate-50">Remote</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">

<div className="min-w-[320px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all snap-center">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 font-bold">FE</div>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">Frontend Developer</h3>
<p className="text-sm text-slate-500 mb-4">Bangalore • Hybrid</p>
<div className="space-y-2 mb-6">
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="banknote"></i> ₹6 - 12 LPA
                        </div>
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="briefcase"></i> 2-4 Years Exp
                        </div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">React</span>
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Tailwind</span>
</div>
<button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 rounded-lg font-medium transition-colors text-sm">View Details</button>
</div>

<div className="min-w-[320px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all snap-center">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 font-bold">SM</div>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Urgent</span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">Sales Manager</h3>
<p className="text-sm text-slate-500 mb-4">Mumbai • On-site</p>
<div className="space-y-2 mb-6">
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="banknote"></i> ₹5 - 8 LPA + Incentives
                        </div>
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="briefcase"></i> 3+ Years Exp
                        </div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">B2B Sales</span>
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Lead Gen</span>
</div>
<button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 rounded-lg font-medium transition-colors text-sm">View Details</button>
</div>

<div className="min-w-[320px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all snap-center">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">DA</div>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">Data Analyst</h3>
<p className="text-sm text-slate-500 mb-4">Pune • Remote</p>
<div className="space-y-2 mb-6">
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="banknote"></i> ₹7 - 10 LPA
                        </div>
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="briefcase"></i> 2+ Years Exp
                        </div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Python</span>
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">SQL</span>
</div>
<button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 rounded-lg font-medium transition-colors text-sm">View Details</button>
</div>

<div className="min-w-[320px] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all snap-center">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 font-bold">HR</div>
<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Active</span>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-1">HR Generalist</h3>
<p className="text-sm text-slate-500 mb-4">Hyderabad • On-site</p>
<div className="space-y-2 mb-6">
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="banknote"></i> ₹4 - 6 LPA
                        </div>
<div className="flex items-center text-sm text-slate-600 gap-2">
<i className="w-4 h-4 text-slate-400" data-lucide="briefcase"></i> 1-3 Years Exp
                        </div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Recruitment</span>
<span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-600">Payroll</span>
</div>
<button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white py-2 rounded-lg font-medium transition-colors text-sm">View Details</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-10">
<div className="max-w-xl">
<div className="inline-block bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-indigo-500/30">For Companies</div>
<h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">Need candidates urgently?</h2>
<p className="text-slate-300 mb-2">Share your requirement and get shortlisted profiles quickly. No upfront cost to review profiles.</p>
<p className="text-xs text-emerald-400 flex items-center gap-1 mt-4">
<i className="w-3 h-3" data-lucide="clock"></i> Response within 2 business hours.
                    </p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Company Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Role Needed</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900" type="tel"/>
</div>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-lg shadow-indigo-200" type="button">
                            Get Candidates
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-heading font-bold text-center text-slate-900 mb-12">Trusted by employers. Loved by candidates.</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-6">
<h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Employers</h3>

<div className="bg-white p-6 rounded-xl border-l-4 border-indigo-600 shadow-sm">
<div className="flex text-orange-400 mb-3"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-slate-600 italic mb-4">"The screening quality is excellent. We closed our Sales Manager role in just 5 days. Highly professional team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">RP</div>
<div>
<p className="text-sm font-bold text-slate-900">Rajesh P.</p>
<p className="text-xs text-slate-500">Director, TechFlow Solutions</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider">Job Seekers</h3>

<div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
<div className="flex text-orange-400 mb-3"><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i></div>
<p className="text-slate-600 mb-4">"I was struggling to get interviews. NexCareer team helped fix my resume and scheduled 3 interviews in a week. Got placed!"</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/100?img=5"/>
<div>
<p className="text-sm font-bold text-slate-900">Sneha M.</p>
<p className="text-xs text-emerald-600 font-medium">Placed as HR Executive</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-2">Get placement-ready.</h2>
<p className="text-slate-500">Small things that improve your chances a lot.</p>
</div>
<button className="text-indigo-600 font-medium text-sm hover:underline">View all resources</button>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="h-40 bg-indigo-50 rounded-xl mb-4 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-100 transition-colors">
<i className="w-12 h-12" data-lucide="file-text"></i>
</div>
<h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">Resume Builder Tips</h3>
<p className="text-sm text-slate-500 mt-2">How to write a CV that gets past the ATS scanners.</p>
</div>
<div className="group cursor-pointer">
<div className="h-40 bg-orange-50 rounded-xl mb-4 flex items-center justify-center text-orange-300 group-hover:bg-orange-100 transition-colors">
<i className="w-12 h-12" data-lucide="check-square"></i>
</div>
<h3 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">Interview Checklist</h3>
<p className="text-sm text-slate-500 mt-2">10 things to do before you walk into the interview room.</p>
</div>
<div className="group cursor-pointer">
<div className="h-40 bg-emerald-50 rounded-xl mb-4 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-100 transition-colors">
<i className="w-12 h-12" data-lucide="trending-up"></i>
</div>
<h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">High-Demand Skills 2024</h3>
<p className="text-sm text-slate-500 mt-2">What employers are actually looking for right now.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">Questions? Answered.</h2>
<div className="space-y-4">

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-900 hover:bg-slate-50">
                        Is your service free for job seekers?
                        <i className="w-4 h-4 text-slate-400" data-lucide="plus"></i>
</button>
<div className="p-4 pt-0 text-sm text-slate-600 border-t border-slate-100 mt-2">
                        Yes, our basic placement services are completely free for candidates. We charge companies for successful hiring.
                    </div>
</div>

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-900 hover:bg-slate-50">
                        How soon can I get interviews?
                        <i className="w-4 h-4 text-slate-400" data-lucide="plus"></i>
</button>
<div className="hidden p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">
                        Typically within 3-5 days if your profile matches active requirements.
                    </div>
</div>

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<button className="w-full flex justify-between items-center p-4 text-left font-medium text-slate-900 hover:bg-slate-50">
                        Do you provide verified jobs only?
                        <i className="w-4 h-4 text-slate-400" data-lucide="plus"></i>
</button>
<div className="hidden p-4 pt-0 text-sm text-slate-600 border-t border-slate-100">
                        Yes. Every employer is verified before we list their requirements.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-600/10 hero-pattern opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">Let’s build your next hiring success story.</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Whether you are scaling a team or starting a career, we are the partner you can trust.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 w-full sm:w-80 hover:bg-white/15 transition-all cursor-pointer">
<h3 className="text-xl font-bold mb-2">Employers</h3>
<p className="text-sm text-slate-300 mb-6">Find the perfect candidate.</p>
<button className="w-full bg-white text-slate-900 py-3 rounded-lg font-bold hover:bg-indigo-50 transition-colors">Request Callback</button>
</div>
<div className="bg-indigo-600 p-6 rounded-2xl border border-indigo-500 w-full sm:w-80 hover:bg-indigo-500 transition-all cursor-pointer shadow-xl shadow-indigo-900/50">
<h3 className="text-xl font-bold mb-2">Candidates</h3>
<p className="text-sm text-indigo-100 mb-6">Find your dream job.</p>
<button className="w-full bg-indigo-800 text-white py-3 rounded-lg font-bold hover:bg-indigo-900 transition-colors">Upload Resume</button>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
<i className="w-3 h-3" data-lucide="briefcase"></i>
</div>
<span className="font-heading font-bold text-lg tracking-tight">NEXCAREER</span>
</div>
<p className="text-sm leading-relaxed mb-6">Bridging the gap between talent and opportunity with trust, speed, and transparency.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-bold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-indigo-400 transition-colors" href="#">For Employers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">For Job Seekers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Success Stories</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Industries</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-indigo-400 transition-colors" href="#">IT &amp; Software</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Sales &amp; Marketing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Finance</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Healthcare</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-bold mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="map-pin"></i>
                            123, Tech Park, Sector 4, Bengaluru, India
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="phone"></i>
                            +91 98765 43210
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-500 shrink-0" data-lucide="mail"></i>
                            hello@nexcareer.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 NexCareer Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 hover:scale-110 duration-200" href="#">
<i className="w-7 h-7" data-lucide="message-circle"></i>
</a>


    </>
  );
}
