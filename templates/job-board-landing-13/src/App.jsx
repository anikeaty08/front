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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
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
      

<div className="bg-slate-50 border-b border-slate-100 hidden md:block">
<div className="max-w-7xl mx-auto px-6 h-10 flex justify-between items-center text-sm text-slate-500">
<div className="flex gap-6">
<a className="hover:text-[#009BD4] transition-colors" href="#">Home</a>
<a className="hover:text-[#009BD4] transition-colors" href="#">Find Job</a>
<a className="hover:text-[#009BD4] transition-colors" href="#">Employers</a>
<a className="hover:text-[#009BD4] transition-colors" href="#">Candidates</a>
<a className="hover:text-[#009BD4] transition-colors" href="#">Pricing Plans</a>
<a className="hover:text-[#009BD4] transition-colors" href="#">Customer Supports</a>
</div>
<div className="flex gap-6 items-center font-medium">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+1-202-555-0178</span>
</div>
<div className="flex items-center gap-2 cursor-pointer">
<img alt="US" className="w-5 h-auto rounded-sm" src="https://flagcdn.com/w20/us.png"/>
<span>English</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2" href="#">
<img alt="Angel Jobs India" className="w-auto h-20 max-w-lg object-contain" src="https://www.angel-jobs.in/assets/images/Angel-Jobs-India-logo.svg"/>
</a>
<div className="hidden lg:flex items-center border border-slate-200 rounded-md px-3 py-2 gap-3 w-[360px] focus-within:border-[#009BD4] transition-colors">
<img alt="India" className="w-6 h-auto rounded-sm" src="https://flagcdn.com/w20/in.png"/>
<span className="text-slate-900 font-medium">India</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<div className="h-5 w-px bg-slate-200 mx-1"></div>
<svg className="lucide lucide-search w-5 h-5 text-[#009BD4]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none outline-none text-slate-600 placeholder-slate-400 w-full text-base" placeholder="Job title, keyword, company" type="text"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="font-medium text-slate-600 hover:text-[#009BD4] px-4 py-2 text-base">Sign In</button>
<button className="bg-[#009BD4] hover:bg-[#0089bd] text-white font-medium px-5 py-2.5 rounded-md text-base transition-colors shadow-sm shadow-[#009BD4]/30">Post A Jobs</button>
</div>
</div>
</nav>

<section className="bg-slate-50 pb-20 pt-16 lg:pt-24 relative overflow-hidden">
<div className="grid lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl">
<h1 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Find a job that suits <br/> your interest &amp; skills.
                </h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed">
                    Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit vestibulum.
                </p>
<div className="bg-white p-3 rounded-lg shadow-lg shadow-slate-200/50 flex flex-col md:flex-row gap-3 items-center border border-slate-100 max-w-xl">
<div className="flex-1 flex items-center px-3 gap-3 w-full">
<svg className="lucide lucide-search w-5 h-5 text-[#009BD4]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full py-2 bg-transparent outline-none text-slate-700 placeholder-slate-400" placeholder="Job title, Keyword..." type="text"/>
</div>
<div className="hidden md:block w-px h-8 bg-slate-200"></div>
<div className="flex-1 flex items-center px-3 gap-3 w-full">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#009BD4]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full py-2 bg-transparent outline-none text-slate-700 placeholder-slate-400" placeholder="Your Location" type="text"/>
</div>
<button className="bg-[#009BD4] hover:bg-[#0089bd] text-white px-8 py-3 rounded-md font-medium transition-colors w-full md:w-auto">
                        Find Job
                    </button>
</div>
<p className="text-slate-400 text-sm mt-4">Suggestion: <span className="text-slate-600">Designer, Programming, <span className="text-[#009BD4]">Digital Marketing</span>, Video, Animation.</span></p>
</div>
<div className="relative">
<img alt="Job Search Illustration" className="w-full h-auto rounded-xl shadow-2xl shadow-[#009BD4]/10 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{clipPath: 'polygon(10% 0, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0 15%)'}}/>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-[#009BD4]/10 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-10"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group">
<div className="bg-[#009BD4]/10 p-4 rounded-md text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">1,75,324</h3>
<p className="text-slate-500">Live Job</p>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300">
<div className="bg-[#009BD4] p-4 rounded-md text-white shadow-lg shadow-[#009BD4]/20">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">97,354</h3>
<p className="text-slate-500">Companies</p>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group">
<div className="bg-[#009BD4]/10 p-4 rounded-md text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">38,47,154</h3>
<p className="text-slate-500">Candidates</p>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group">
<div className="bg-[#009BD4]/10 p-4 rounded-md text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">7,532</h3>
<p className="text-slate-500">New Jobs</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">Most Popular Vacancies</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">

<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Anesthesiologists</h3>
<p className="text-slate-500">45,904 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Maxillofacial Surgeons</h3>
<p className="text-slate-500">74,875 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Financial Manager</h3>
<p className="text-slate-500">61,391 Open Positions</p>
</div>

<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Surgeons</h3>
<p className="text-slate-500">50,364 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Software Developer</h3>
<p className="text-slate-500">43359 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Management Analysis</h3>
<p className="text-slate-500">93,046 Open Positions</p>
</div>

<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Obstetricians-Gynecologists</h3>
<p className="text-slate-500">4,339 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Psychiatrists</h3>
<p className="text-slate-500">18,599 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">IT Manager</h3>
<p className="text-slate-500">50,963 Open Positions</p>
</div>

<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Orthodontists</h3>
<p className="text-slate-500">20,079 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-[#009BD4] font-medium underline underline-offset-4 decoration-[#009BD4]/30">Data Scientist</h3>
<p className="text-slate-500">28,200 Open Positions</p>
</div>
<div className="space-y-1 group cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-[#009BD4] transition-colors">Operations Research Analysis</h3>
<p className="text-slate-500">16,627 Open Positions</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-slate-900 mb-16 tracking-tight">How it works</h2>
<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px border-t-2 border-dashed border-slate-300 z-0"></div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#009BD4] group-hover:text-[#009BD4] transition-all">
<svg className="lucide lucide-user-plus w-8 h-8 text-slate-600 group-hover:text-[#009BD4] transition-colors" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Create account</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">Aliquam facilisis egestas sapien, nec tempor leo tristique at.</p>
</div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 rounded-full bg-[#009BD4] flex items-center justify-center mb-6 shadow-lg shadow-[#009BD4]/30">
<svg className="lucide lucide-cloud-upload w-8 h-8 text-white" data-lucide="cloud-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Upload CV/Resume</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales</p>
</div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#009BD4] group-hover:text-[#009BD4] transition-all">
<svg className="lucide lucide-search-check w-8 h-8 text-slate-600 group-hover:text-[#009BD4] transition-colors" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Find suitable job</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
</div>

<div className="relative z-10 flex flex-col items-center group">
<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:border-[#009BD4] group-hover:text-[#009BD4] transition-all">
<svg className="lucide lucide-check-circle-2 w-8 h-8 text-slate-600 group-hover:text-[#009BD4] transition-colors" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Apply job</h3>
<p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales purus.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Popular category</h2>
<a className="group flex items-center gap-2 text-[#009BD4] border border-slate-200 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50 hover:border-[#009BD4]/30 transition-all" href="#">
                    View All <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Graphics &amp; Design</h3>
<p className="text-slate-500 text-sm mt-1">357 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Code &amp; Programing</h3>
<p className="text-slate-500 text-sm mt-1">312 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-megaphone w-6 h-6" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Digital Marketing</h3>
<p className="text-slate-500 text-sm mt-1">297 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Video &amp; Animation</h3>
<p className="text-slate-500 text-sm mt-1">247 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-music w-6 h-6" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Music &amp; Audio</h3>
<p className="text-slate-500 text-sm mt-1">204 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-bar-chart-big w-6 h-6" data-lucide="bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Account &amp; Finance</h3>
<p className="text-slate-500 text-sm mt-1">167 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4]/10 p-3 rounded text-[#009BD4] group-hover:bg-[#009BD4] group-hover:text-white transition-colors">
<svg className="lucide lucide-heart-pulse w-6 h-6" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Health &amp; Care</h3>
<p className="text-slate-500 text-sm mt-1">125 Open position</p>
</div>
</div>

<div className="flex items-center gap-4 p-5 border border-slate-100 rounded-lg hover:border-[#009BD4]/50 hover:shadow-lg hover:shadow-[#009BD4]/5 transition-all cursor-pointer group bg-slate-50/30">
<div className="bg-[#009BD4] p-3 rounded text-white shadow-md shadow-[#009BD4]/30">
<svg className="lucide lucide-database w-6 h-6" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div>
<h3 className="font-medium text-slate-900 text-lg">Data &amp; Science</h3>
<p className="text-slate-500 text-sm mt-1">57 Open position</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Featured job</h2>
<a className="group flex items-center gap-2 text-[#009BD4] border border-slate-200 px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-50 hover:border-[#009BD4]/30 transition-all" href="#">
                    View All <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Techical Support Specialist</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded uppercase tracking-wide">Part-Time</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group shadow-sm ring-1 ring-[#009BD4]/10">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Senior UX Designer</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-[#009BD4] bg-[#009BD4]/10 px-2 py-1 rounded uppercase tracking-wide">Full-Time</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Marketing Officer</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded uppercase tracking-wide">Internship</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Junior Graphic Designer</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded uppercase tracking-wide">Internship</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Interaction Designer</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded uppercase tracking-wide">Part-Time</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-[#009BD4]/50 transition-all bg-white group">
<div className="flex justify-between items-start mb-4">
<h3 className="font-semibold text-lg text-slate-900">Project Manager</h3>
</div>
<div className="flex gap-2 mb-6">
<span className="text-xs font-semibold text-[#009BD4] bg-[#009BD4]/10 px-2 py-1 rounded uppercase tracking-wide">Full-Time</span>
<span className="text-sm text-slate-500">Salary: $20,000 - $25,000</span>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-2">
<img alt="Google" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Google Inc.</h4>
<div className="flex items-center gap-1 text-slate-400 text-xs mt-0.5">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                                </div>
</div>
</div>
<svg className="lucide lucide-bookmark w-5 h-5 text-slate-400 hover:text-[#009BD4] cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 tracking-tight">Top companies</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-slate-200 rounded-lg p-6 bg-white hover:border-[#009BD4]/50 transition-colors">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded bg-rose-500 flex items-center justify-center text-white">
<svg className="lucide lucide-dribbble w-6 h-6" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900">Dribbble</h3>
<span className="text-[10px] uppercase font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Featured</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                            </div>
</div>
</div>
<button className="w-full bg-[#009BD4]/10 text-[#009BD4] py-3 rounded-md font-medium text-sm hover:bg-[#009BD4] hover:text-white transition-colors">
                        Open Position (3)
                    </button>
</div>

<div className="border border-slate-200 rounded-lg p-6 bg-white hover:border-[#009BD4]/50 transition-colors">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded bg-rose-500 flex items-center justify-center text-white">
<svg className="lucide lucide-dribbble w-6 h-6" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900">Dribbble</h3>
<span className="text-[10px] uppercase font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Featured</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                            </div>
</div>
</div>
<button className="w-full bg-[#009BD4]/10 text-[#009BD4] py-3 rounded-md font-medium text-sm hover:bg-[#009BD4] hover:text-white transition-colors">
                        Open Position (3)
                    </button>
</div>

<div className="border border-slate-200 rounded-lg p-6 bg-white hover:border-[#009BD4]/50 transition-colors">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded bg-rose-500 flex items-center justify-center text-white">
<svg className="lucide lucide-dribbble w-6 h-6" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900">Dribbble</h3>
<span className="text-[10px] uppercase font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">Featured</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-sm">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Dhaka, Bangladesh
                            </div>
</div>
</div>
<button className="w-full bg-[#009BD4]/10 text-[#009BD4] py-3 rounded-md font-medium text-sm hover:bg-[#009BD4] hover:text-white transition-colors">
                        Open Position (3)
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 mb-12 text-center tracking-tight">Clients Testimonial</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-500 text-lg leading-relaxed mb-8">"Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est."</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Robert Fox" className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<h4 className="font-semibold text-slate-900">Robert Fox</h4>
<p className="text-xs text-slate-400">UI/UX Designer</p>
</div>
</div>
<svg className="lucide lucide-quote w-8 h-8 text-slate-200" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-500 text-lg leading-relaxed mb-8">"Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare."</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Bessie Cooper" className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<h4 className="font-semibold text-slate-900">Bessie Cooper</h4>
<p className="text-xs text-slate-400">Creative Director</p>
</div>
</div>
<svg className="lucide lucide-quote w-8 h-8 text-slate-200" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-6">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-500 text-lg leading-relaxed mb-8">"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh."</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Jane Cooper" className="w-10 h-10 rounded-full" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
<div>
<h4 className="font-semibold text-slate-900">Jane Cooper</h4>
<p className="text-xs text-slate-400">Photographer</p>
</div>
</div>
<svg className="lucide lucide-quote w-8 h-8 text-slate-200" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-2 h-2 rounded-full bg-[#009BD4]/30"></div>
<div className="w-2 h-2 rounded-full bg-[#009BD4]"></div>
<div className="w-2 h-2 rounded-full bg-[#009BD4]/30"></div>
<div className="w-2 h-2 rounded-full bg-[#009BD4]/30"></div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

<div className="bg-slate-100 rounded-lg p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
<div className="relative z-10 max-w-sm">
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Become a Candidate</h2>
<p className="text-slate-500 mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.</p>
<button className="bg-white text-[#009BD4] px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                        Register Now <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/2 opacity-20 md:opacity-100">
<img alt="Candidate" className="h-full w-full object-cover [mask-image:linear-gradient(to_left,black,transparent)]" src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="bg-[#009BD4] rounded-lg p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
<div className="relative z-10 max-w-sm">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Become a Employers</h2>
<p className="text-white/80 mb-8 leading-relaxed">Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.</p>
<button className="bg-white text-[#009BD4] px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                        Register Now <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="absolute right-0 bottom-0 h-full w-1/2 opacity-20 md:opacity-100">
<img alt="Employer" className="h-full w-full object-cover [mask-image:linear-gradient(to_left,black,transparent)] mix-blend-overlay" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">

<img alt="Angel Jobs India" className="h-8 w-auto brightness-0 invert" src="https://www.angel-jobs.in/assets/images/Angel-Jobs-India-logo.svg"/>
</div>
<div className="text-slate-400 text-sm mb-2">
                        Call now: <span className="text-white font-medium">(319) 555-0115</span>
</div>
<p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">
                        6391 Elgin St. Celina, Delaware 10299, New York, United States of America
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Link</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Candidate</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Browse Jobs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Browse Employers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Candidate Dashboard</a></li>
<li><a className="hover:text-white transition-colors" href="#">Saved Jobs</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Employers</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Post a Job</a></li>
<li><a className="hover:text-white transition-colors" href="#">Browse Candidates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Employers Dashboard</a></li>
<li><a className="hover:text-white transition-colors" href="#">Applications</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-4 text-slate-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Faqs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-sm">@ 2023 Angel Jobs India. All rights Reserved</p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
