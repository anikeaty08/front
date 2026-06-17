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

        function switchTab(type) {
            const btnStudents = document.getElementById('btn-students');
            const btnEmployers = document.getElementById('btn-employers');
            const contentStudents = document.getElementById('content-students');
            const contentEmployers = document.getElementById('content-employers');

            if (type === 'students') {
                btnStudents.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnStudents.classList.remove('text-slate-600');
                btnEmployers.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnEmployers.classList.add('text-slate-600');
                
                contentStudents.classList.remove('hidden');
                contentEmployers.classList.add('hidden');
            } else {
                btnEmployers.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                btnEmployers.classList.remove('text-slate-600');
                btnStudents.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                btnStudents.classList.add('text-slate-600');
                
                contentEmployers.classList.remove('hidden');
                contentStudents.classList.add('hidden');
            }
        }
    
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
      

<nav className="fixed z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<div className="glass-panel flex max-w-7xl rounded-full mr-auto ml-auto pt-3 pr-6 pb-3 pl-6 shadow-sm items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-neutral-900 text-white" style={{}}>
<svg className="lucide lucide-zap w-5 h-5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">StarterYou</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600" style={{}}>
<a className="transition-colors hover:text-neutral-900" href="#opportunities" style={{}}>Opportunities</a>
<a className="transition-colors hover:text-neutral-900" href="#students" style={{}}>For Students</a>
<a className="transition-colors hover:text-neutral-900" href="#employers" style={{}}>For Employers</a>
<a className="transition-colors hover:text-neutral-900" href="#resources" style={{}}>Resources</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-sm font-medium px-3 py-2 text-neutral-600 hover:text-neutral-900" style={{}}>Log in</button>
<button className="text-sm font-medium px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white" style={{}}>
                    Start Now <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-28 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b to-transparent -z-10 from-indigo-50/50" style={{}}>
</div>
<div className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl -z-10 bg-cyan-200/20"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl -z-10 bg-blue-200/20"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-indigo-50 border-indigo-100 text-indigo-700" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" style={{}}></span>
</span>
        Connecting early talent with future leaders
      </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-neutral-900" style={{}}>
        Find your first job <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0e0b41] to-[#0e0b41]">in days, not months.</span>
</h1>
<p className="text-lg text-neutral-500 mb-8 leading-relaxed" style={{}}>
        The career platform built for the next generation. We connect high school and college students with companies
        offering internships, part-time jobs, and entry-level roles without the hassle.
      </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="text-base font-medium px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white" style={{}}>
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> Find opportunities
                    </button>
<button className="border text-base font-medium px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200" style={{}}>
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg> Hire early talent
                    </button>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-neutral-500" style={{}}>
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" style={{}}/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" style={{}}/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white bg-neutral-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark" style={{}}/>
</div>
<p>Trusted by 10,000+ students</p>
</div>
</div>

<div className="relative">

<div className="absolute -top-6 -right-6 p-4 rounded-xl shadow-xl z-20 animate-[bounce_3s_infinite] bg-white">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full bg-blue-100 text-blue-600">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium" style={{}}>Application Status</p>
<p className="text-sm font-semibold text-neutral-900" style={{}}>Interview Scheduled</p>
</div>
</div>
</div>

<div className="border rounded-2xl shadow-2xl overflow-hidden relative z-10 bg-white border-neutral-200" style={{}}>

<div className="border-b px-4 py-3 flex items-center gap-2 bg-neutral-50 border-neutral-200" style={{}}>
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-blue-400"></div>
<div className="w-3 h-3 rounded-full bg-blue-400"></div>
<div className="w-3 h-3 rounded-full bg-blue-400"></div>
</div>
<div className="mx-auto border rounded-md px-3 py-1 text-[10px] font-medium flex items-center gap-1 w-48 justify-center bg-white border-neutral-200 text-neutral-400" style={{}}>
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> starteryou.com/jobs
          </div>
</div>

<div className="p-6 min-h-[400px] bg-neutral-50/50" style={{}}>
<div className="flex gap-6">

<div className="hidden sm:block w-16 flex flex-col gap-4 items-center">
<div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg bg-indigo-600 text-white shadow-indigo-200" style={{}}>
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-white text-neutral-400 border-neutral-200" style={{}}>
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="w-10 h-10 rounded-full flex items-center justify-center border bg-white text-neutral-400 border-neutral-200" style={{}}>
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>

<div className="flex-1 space-y-4">
<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold text-neutral-900" style={{}}>Recommended for you</h3>
<span className="text-xs font-medium cursor-pointer text-indigo-600" style={{}}>View all</span>
</div>

<div className="p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-white border-neutral-100" style={{}}>
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-100 text-cyan-600">
<svg className="lucide lucide-figma w-5 h-5" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-sm text-neutral-900" style={{}}>Product Design Intern</h4>
<p className="text-xs text-neutral-500" style={{}}>Stripe • Remote</p>
</div>
</div>
<div className="px-2 py-1 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600" style={{}}>$30/hr</div>
</div>
<div className="mt-3 flex gap-2">
<span className="text-[10px] px-2 py-1 rounded-full font-medium bg-indigo-50 text-indigo-600" style={{}}>Design</span>
<span className="text-[10px] px-2 py-1 rounded-full font-medium bg-neutral-100 text-neutral-600" style={{}}>Summer 2024</span>
</div>
<button className="mt-3 w-full py-1.5 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white" style={{}}>Apply Now</button>
</div>

<div className="p-4 rounded-xl border shadow-sm hover:shadow-md transition-shadow opacity-60 bg-white border-neutral-100" style={{}}>
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-sm text-neutral-900" style={{}}>Frontend Developer</h4>
<p className="text-xs text-neutral-500" style={{}}>Vercel • Hybrid</p>
</div>
</div>
<div className="px-2 py-1 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600" style={{}}>$45/hr</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200 bg-white" style={{}}>
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-neutral-500 mb-6" style={{}}>Trusted by leading education institutions and companies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold font-sans text-neutral-800" style={{}}><svg className="lucide lucide-hexagon fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Acme Corp</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif text-neutral-800" style={{}}><svg className="lucide lucide-triangle fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> University</div>
<div className="flex items-center gap-2 text-xl font-bold font-mono text-neutral-800" style={{}}><svg className="lucide lucide-box fill-current" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> TechStart</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans text-neutral-800" style={{}}><svg className="lucide lucide-circle fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Global Inc</div>
<div className="flex items-center gap-2 text-xl font-bold font-serif text-neutral-800" style={{}}><svg className="lucide lucide-droplet fill-current" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg> FutureLabs</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 bg-neutral-50" id="how-it-works" style={{}}>
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-900" style={{}}>How StarterYou Works</h2>
<p className="text-neutral-500 text-lg" style={{}}>Whether you are starting your journey or looking to hire, we make it simple.</p>

<div className="mt-8 inline-flex p-1 rounded-full relative bg-neutral-200" style={{}}>
<button className="relative z-10 px-6 py-2 rounded-full text-sm font-medium shadow-sm transition-all duration-200 text-neutral-900 bg-white" id="btn-students" onclick="switchTab('students')" style={{}}>For Students</button>
<button className="transition-all duration-200 hover:text-neutral-900 z-10 text-sm font-medium text-neutral-600 rounded-full pt-2 pr-6 pb-2 pl-6 relative" id="btn-employers" onclick="switchTab('employers')" style={{}}>For Employers</button>
</div>
</div>
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300" id="content-students">
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600" style={{}}>
<svg className="lucide lucide-user-plus w-6 h-6" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>1. Create Profile</h3>
<p className="text-neutral-500" style={{}}>Sign up in seconds. Build a profile that showcases your skills, education, and interests without the fluff.</p>
</div>
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>2. Explore Roles</h3>
<p className="text-neutral-500" style={{}}>Filter through internships, part-time jobs, and entry-level roles tailored to students and new grads.</p>
</div>
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-cyan-50 text-cyan-600">
<svg className="lucide lucide-send w-6 h-6" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>3. Apply &amp; Connect</h3>
<p className="text-neutral-500" style={{}}>One-click apply to opportunities or connect directly with hiring managers. No endless forms.</p>
</div>
</div>

<div className="hidden grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300" id="content-employers">
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-neutral-50 text-neutral-600" style={{}}>
<svg className="lucide lucide-file-plus w-6 h-6" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>1. Post a Role</h3>
<p className="text-neutral-500" style={{}}>Create a job listing in minutes tailored for early talent. Specify skills, hours, and pay transparently.</p>
</div>
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600" style={{}}>
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>2. Review Candidates</h3>
<p className="text-neutral-500" style={{}}>Access a pool of pre-filtered, motivated students. See relevant coursework and potential instantly.</p>
</div>
<div className="p-8 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100" style={{}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-50 text-indigo-600" style={{}}>
<svg className="lucide lucide-handshake w-6 h-6" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900" style={{}}>3. Hire Quickly</h3>
<p className="text-neutral-500" style={{}}>Streamline communication and offers. Fill your part-time and entry-level needs faster.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y bg-white border-neutral-100" id="opportunities" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2 text-neutral-900" style={{}}>Explore Opportunities</h2>
<p className="text-neutral-500" style={{}}>Curated categories to kickstart your journey.</p>
</div>
<a className="font-medium flex items-center gap-1 text-indigo-600 hover:text-indigo-700" href="#" style={{}}>View all categories <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
<a className="group p-4 rounded-xl border transition-all border-neutral-200 hover:border-indigo-200 hover:bg-indigo-50/50" href="#" style={{}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-indigo-100 text-indigo-600" style={{}}>
<svg className="lucide lucide-laptop w-4 h-4" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
</div>
<h4 className="font-medium text-sm text-neutral-900" style={{}}>Remote</h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Work from anywhere</p>
</a>
<a className="group p-4 rounded-xl border transition-all border-neutral-200 hover:border-blue-200 hover:bg-blue-50/50" href="#" style={{}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-blue-100 text-blue-600">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h4 className="font-medium text-sm text-neutral-900" style={{}}>Part-Time</h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Flexible hours</p>
</a>
<a className="group p-4 rounded-xl border transition-all border-neutral-200 hover:border-cyan-200 hover:bg-cyan-50/50" href="#" style={{}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-cyan-100 text-cyan-600">
<svg className="lucide lucide-graduation-cap w-4 h-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h4 className="font-medium text-sm text-neutral-900" style={{}}>Internships</h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Gain experience</p>
</a>
<a className="group p-4 rounded-xl border transition-all border-neutral-200 hover:border-neutral-200 hover:bg-neutral-50/50" href="#" style={{}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-neutral-100 text-neutral-600" style={{}}>
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h4 className="font-medium text-sm text-neutral-900" style={{}}>Entry-Level</h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Start your career</p>
</a>
<a className="group p-4 rounded-xl border transition-all border-neutral-200 hover:border-neutral-200 hover:bg-neutral-50/50" href="#" style={{}}>
<div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform bg-neutral-100 text-neutral-600" style={{}}>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h4 className="font-medium text-sm text-neutral-900" style={{}}>Local Jobs</h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>Near campus</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-gradient-to-tr rounded-3xl transform rotate-3 scale-105 -z-10 from-indigo-100 to-blue-100" style={{}}></div>
<div className="border rounded-2xl shadow-xl p-8 bg-white border-neutral-200" style={{}}>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded-lg transition-colors cursor-default hover:bg-neutral-50" style={{}}>
<div className="p-2 rounded-lg bg-blue-100 text-blue-700"><svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>One Profile, Many Jobs</h4>
<p className="text-sm text-neutral-500" style={{}}>Stop filling out the same data 100 times.</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg transition-colors cursor-default hover:bg-neutral-50" style={{}}>
<div className="p-2 rounded-lg bg-cyan-100 text-cyan-700"><svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg></div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Tailored Matches</h4>
<p className="text-sm text-neutral-500" style={{}}>We only show roles relevant to your major.</p>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-lg transition-colors cursor-default hover:bg-neutral-50" style={{}}>
<div className="p-2 rounded-lg bg-blue-100 text-blue-700"><svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Career Growth</h4>
<p className="text-sm text-neutral-500" style={{}}>Access guides and resume tips for free.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 rounded-full font-medium text-xs mb-4 bg-indigo-50 text-indigo-700" style={{}}>For Students</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-neutral-900" style={{}}>Stop searching. Start working.</h2>
<p className="text-lg text-neutral-500 mb-8" style={{}}>StarterYou removes the friction of job hunting. We focus on what matters: getting you connected with employers who want to hire students like you.</p>
<a className="font-medium hover:underline inline-flex items-center gap-2 text-indigo-600" href="#" style={{}}>Create Student Profile <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block px-3 py-1 rounded-full font-medium text-xs mb-4 bg-cyan-50 text-cyan-700">For Employers</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-neutral-900" style={{}}>The modern way to hire early talent.</h2>
<p className="text-lg text-neutral-500 mb-8" style={{}}>Access a vibrant community of high schoolers and college students ready to learn and work. Skip the noise of general job boards.</p>
<ul className="space-y-3 mb-8 text-neutral-600" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Post a job in under 5 minutes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Filter by GPA, major, and availability</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-indigo-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Direct messaging with candidates</li>
</ul>
<a className="font-medium hover:underline inline-flex items-center gap-2 text-indigo-600" href="#" style={{}}>Post a Job for Free <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="relative">
<div className="absolute inset-0 rounded-3xl transform -rotate-3 scale-105 -z-10 bg-neutral-100" style={{}}></div>
<div className="border rounded-2xl shadow-xl p-8 flex flex-col items-center text-center bg-white border-neutral-200" style={{}}>
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-neutral-900 text-white" style={{}}>
<svg className="lucide lucide-users w-8 h-8" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-bold text-neutral-900" style={{}}>1,200+</h3>
<p className="text-neutral-500 mb-6" style={{}}>Active candidates in your area</p>
<div className="w-full rounded-lg p-4 border text-left bg-neutral-50 border-neutral-100" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-indigo-100" style={{}}></div>
<div className="">
<p className="text-sm font-semibold text-neutral-900" style={{}}>Sarah Jenkins</p>
<p className="text-xs text-neutral-500" style={{}}>Marketing Major • 3.8 GPA</p>
</div>
<button className="ml-auto text-xs border px-2 py-1 rounded bg-white border-neutral-200 text-neutral-600" style={{}}>View</button>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100"></div>
<div>
<p className="text-sm font-semibold text-neutral-900" style={{}}>David Chen</p>
<p className="text-xs text-neutral-500" style={{}}>CS Major • 3.9 GPA</p>
</div>
<button className="ml-auto text-xs border px-2 py-1 rounded bg-white border-neutral-200 text-neutral-600" style={{}}>View</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white" id="resources" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-10 flex justify-between items-end">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Grow your career</h2>
<p className="text-neutral-400" style={{}}>Expert advice to help you land the role.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group block rounded-2xl p-6 transition-colors bg-neutral-800 hover:bg-neutral-700" href="#" style={{}}>
<div className="mb-4 text-indigo-400" style={{}}><svg className="lucide lucide-file-text w-8 h-8" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg></div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-300 transition-colors" style={{}}>Resume Optimizer</h3>
<p className="text-sm text-neutral-400" style={{}}>Learn how to format your high school or college resume for maximum impact.</p>
</a>
<a className="group block rounded-2xl p-6 transition-colors bg-neutral-800 hover:bg-neutral-700" href="#" style={{}}>
<div className="mb-4 text-blue-400"><svg className="lucide lucide-mic w-8 h-8" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-blue-300 transition-colors">Interview Prep</h3>
<p className="text-sm text-neutral-400" style={{}}>Common questions for entry-level roles and how to answer them with confidence.</p>
</a>
<a className="group block rounded-2xl p-6 transition-colors bg-neutral-800 hover:bg-neutral-700" href="#" style={{}}>
<div className="mb-4 text-cyan-400"><svg className="lucide lucide-compass w-8 h-8" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
<h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">Career Path Quiz</h3>
<p className="text-sm text-neutral-400" style={{}}>Not sure what you want to do? Take our 5-minute quiz to find your fit.</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900" style={{}}>Ready to start?</h2>
<p className="text-lg text-neutral-500 mb-10" style={{}}>Join thousands of students and companies building the future together.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="text-base font-medium px-8 py-3 rounded-full transition-all shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200" style={{}}>
                    Sign up as Student
                </button>
<button className="border text-base font-medium px-8 py-3 rounded-full transition-all bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200" style={{}}>
                    Post a Job
                </button>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="p-1 rounded-md bg-neutral-900 text-white" style={{}}>
<svg className="lucide lucide-zap w-4 h-4 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="font-bold text-neutral-900" style={{}}>StarterYou</span>
</div>
<p className="text-sm text-neutral-500" style={{}}>Connecting the next generation with their first big opportunity.</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Students</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Search Jobs</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Create Profile</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Career Advice</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Employers</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Post a Job</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Browse Candidates</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="hover:text-indigo-600" href="#" style={{}}>About Us</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Contact</a></li>
<li><a className="hover:text-indigo-600" href="#" style={{}}>Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100" style={{}}>
<p className="text-xs text-neutral-400" style={{}}>© 2024 StarterYou Inc. All rights reserved.</p>
<div className="flex gap-4 text-neutral-400" style={{}}>
<a className="transition-colors hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition-colors hover:text-neutral-900" href="#" style={{}}><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
