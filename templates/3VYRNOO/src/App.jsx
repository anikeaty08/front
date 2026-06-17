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



  // Initialize Lucide icons
  lucide.createIcons();

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
  };

  // Initialize animations when DOM is loaded
  document.addEventListener('DOMContentLoaded', animateOnScroll);

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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1688cd4-dd26-4794-8630-f4f2efc16143_3840w.jpg")'}}></div>

<div className="min-h-screen flex flex-col">

<header className="transition-all duration-700 ease-out opacity-100 bg-black border-neutral-50/20 border-0 shadow-sm translate-y-0" data-animate="">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center space-x-2">
<span className="focus:outline-none hover:text-indigo-300 text-lg text-neutral-50 tracking-tight font-geist font-medium" style={{fontFamily: 'ui-sans-serif, system-ui, sans-serif'}}>Prisma Cloud</span>
</div>
<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
<a className="font-semibold text-neutral-100 font-geist" href="#" style={{}}>Dashboard</a>
<a className="text-neutral-400 hover:text-neutral-100 font-geist text-lg" href="#" style={{}}>Projects</a>
<a className="text-neutral-400 hover:text-neutral-100 font-geist text-lg" href="#" style={{}}>Violations</a>
<a className="text-neutral-400 hover:text-neutral-100 font-geist text-lg" href="#" style={{}}>Compliance</a>
<a className="text-neutral-400 hover:text-neutral-100 font-geist text-lg" href="#" style={{}}>Reports</a>
</nav>
<div className="flex space-x-6 items-center">
<button aria-label="Sign Up" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-colors duration-150 font-medium" style={{}}>
<svg className="lucide lucide-user-plus w-5 h-5 mr-2" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
    Sign Up
  </button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl sm:px-6 lg:px-8 text-center mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<h1 className="sm:text-5xl max-w-3xl text-5xl font-normal text-neutral-100 tracking-tight font-poppins mr-auto ml-auto" style={{}}>Secure your software supply chain with confidence</h1>
<p className="mt-4 max-w-2xl mx-auto text-neutral-400 font-geist text-base" style={{}}>Comprehensive visibility across 847 repositories, 23 cloud accounts, and 156 CI/CD pipelines. Prevent vulnerabilities before they reach production.</p>
<div className="mt-8 flex justify-center space-x-4">
<a className="inline-flex items-center space-x-2 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer text-base font-medium bg-gradient-to-r from-[#9c97fc] to-[#271874] border-neutral-950/20 rounded-md pt-3 pr-6 pb-3 pl-6 shadow-lg" href="#" onblur="this.style.boxShadow='none';" onfocus="this.style.outline='none'; this.style.boxShadow='0 0 0 3px var(--btn-bg-color), 0 0 0 6px var(--btn-bg-2)';" onmouseout="this.style.backgroundPosition='left top';" onmouseover="this.style.backgroundPosition='right top';" style={{backgroundPosition: 'left top', boxShadow: 'none', outline: 'none'}}>r<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path className="" d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg><span className="font-geist font-medium" style={{}}>Get Started</span></a>
<a className="inline-flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-neutral-900 text-base font-semibold text-neutral-300 border-neutral-50/20 border rounded-md pt-3 pr-6 pb-3 pl-6" href="#">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="font-geist" style={{}}>View Demo</span>
</a>
</div>
</div>
<section className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 space-y-10">


<div className="grid lg:grid-cols-3 gap-6">

<div className="transition-all duration-700 ease-out opacity-100 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-black/20 bg-black/30 border-white/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md translate-y-0" data-animate="">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold flex items-center space-x-2">
<span className="font-geist" style={{}}>Threats Prevented</span>
</h3>
<button className="text-neutral-600 hover:text-neutral-400">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
</div>
<div className="flex items-center space-x-4">
<div className="">
<p className="font-poppins text-4xl font-medium" style={{}}>2,847</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Blocked in PRs this month</p>
</div>
</div>
<div className="mt-6">
<div className="flex justify-between text-sm mb-2">
<span className="font-geist" style={{}}>Prevention Rate</span>
<span className="font-semibold font-geist" style={{}}>94.2%</span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden bg-neutral-800/50">
<div className="h-full w-[94%] bg-[#00D2FF] rounded-full"></div>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-4 text-xs">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-github w-4 h-4 text-gray-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="font-geist text-sm" style={{}}>GitHub: <span className="font-semibold font-geist" style={{}}>1,847</span></span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-gitlab w-4 h-4 text-gray-400" data-lucide="gitlab" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path></svg>
<span className="font-geist text-sm" style={{}}>GitLab: <span className="font-semibold font-geist" style={{}}>742</span></span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-git-branch w-4 h-4 text-gray-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="font-geist text-sm" style={{}}>Bitbucket: <span className="font-semibold font-geist" style={{}}>258</span></span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-key w-4 h-4 text-gray-400" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="font-geist text-sm" style={{}}>Secrets: <span className="font-semibold font-geist" style={{}}>1,247</span></span>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out opacity-100 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-black/20 bg-black/30 border-white/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md translate-y-0" data-animate="">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold flex items-center space-x-2">
<span className="font-geist" style={{}}>Active Violations</span>
</h3>
<button className="text-neutral-600 hover:text-neutral-400">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 144, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="flex items-center space-x-4">
<div className="">
<p className="font-poppins text-4xl font-medium" style={{}}>414</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Across all environments</p>
</div>
</div>
<div className="mt-6">
<div className="flex h-3 w-full rounded overflow-hidden bg-black/20">
<div className="flex-[84] bg-blue-300" title="Critical: 84"></div>
<div className="flex-[127] bg-blue-500" title="High: 127"></div>
<div className="flex-[143] bg-indigo-600" title="Medium: 143"></div>
<div className="flex-[60] bg-[#FF9000]" title="Low: 60"></div>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 text-xs">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="h-2 w-2 rounded-full bg-blue-300"></span>
<span className="font-geist text-sm" style={{}}>Critical</span>
</div>
<span className="font-semibold font-geist" style={{}}>84</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="h-2 w-2 bg-blue-500 rounded-full"></span>
<span className="font-geist text-sm" style={{}}>High</span>
</div>
<span className="font-semibold font-geist" style={{}}>127</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="h-2 w-2 rounded-full bg-indigo-600"></span>
<span className="font-geist text-sm" style={{}}>Medium</span>
</div>
<span className="font-semibold font-geist" style={{}}>143</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="h-2 w-2 bg-[#FF9000] rounded-full"></span>
<span className="font-geist text-sm" style={{}}>Low</span>
</div>
<span className="font-semibold font-geist" style={{}}>60</span>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out opacity-100 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-black/20 bg-black/30 border-white/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md translate-y-0" data-animate="">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold flex items-center space-x-2">
<span className="font-geist" style={{}}>Remediated</span>
</h3>
<button className="text-neutral-600 hover:text-neutral-400">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
</div>
<div className="flex items-center space-x-4">
<div className="">
<p className="font-poppins text-4xl font-medium" style={{}}>1,847</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Fixed in last 30 days</p>
</div>
</div>
<div className="mt-6">
<div className="flex justify-between text-sm mb-2">
<span className="font-geist" style={{}}>MTTR (Mean Time to Resolve)</span>
<span className="font-semibold font-geist" style={{}}>4.2 days</span>
</div>
<div className="flex h-3 w-full rounded overflow-hidden bg-black/20">
<div className="flex-[847] bg-[#00D2FF]/75" title="≤ 24 hours: 847"></div>
<div className="flex-[523] bg-blue-600" title="2-7 days: 523"></div>
<div className="flex-[347] bg-[#00D2FF]" title="8-30 days: 347"></div>
<div className="flex-[130] bg-cyan-700" title="&gt; 30 days: 130"></div>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3 text-xs">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-zap w-3 h-3 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist text-sm" style={{}}>≤ 24h</span>
</div>
<span className="font-semibold font-geist" style={{}}>847</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-clock w-3 h-3 text-emerald-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist text-sm" style={{}}>2-7 days</span>
</div>
<span className="font-semibold font-geist" style={{}}>523</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-calendar w-3 h-3 text-green-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-geist text-sm" style={{}}>8-30 days</span>
</div>
<span className="font-semibold font-geist" style={{}}>347</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-clock-3 w-3 h-3 text-green-700" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(0, 210, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist text-sm" style={{}}>&gt; 30 days</span>
</div>
<span className="font-semibold font-geist" style={{}}>130</span>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-6">

<div className="transition-all duration-700 ease-out opacity-100 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-black/20 bg-black/30 border-white/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md translate-y-0 space-y-8" data-animate="">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg text-neutral-100 font-geist" style={{}}>Recent Activity</h3>
<button className="hover:text-indigo-300 text-sm font-medium text-[#00D2FF] font-geist" style={{}}>View All</button>
</div>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-blue-900/70">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-red-400" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-neutral-100 font-geist text-lg" style={{}}>Critical vulnerability detected in shopify-core</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>SQL injection vulnerability (CVE-2024-1234) • 12 minutes ago</p>
</div>
<span className="inline-flex items-center text-xs font-medium text-blue-300 font-geist bg-blue-950 rounded-full pt-1 pr-2 pb-1 pl-2" style={{}}>Critical</span>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-cyan-900/70">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-neutral-100 font-geist text-lg" style={{}}>Remediation completed for analytics-api</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Updated dependencies to fix 3 high-severity vulnerabilities • 1 hour ago</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyan-950 text-cyan-300 font-geist" style={{}}>Resolved</span>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-indigo-900/70">
<svg className="lucide lucide-git-pull-request w-4 h-4 text-blue-400" data-lucide="git-pull-request" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" x2="6" y1="9" y2="21"></line></svg>
</div>
<div className="flex-1">
<p className="font-medium text-neutral-100 font-geist text-lg" style={{}}>Security scan blocked PR merge</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Hardcoded API key detected in mobile-backend • 3 hours ago</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-950 text-indigo-300 font-geist" style={{}}>Blocked</span>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-indigo-900/70">
<svg className="lucide lucide-shield-check w-4 h-4 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-neutral-100 font-geist text-lg" style={{}}>New policy applied to payment-service</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Enhanced secret scanning enabled for PCI compliance • 6 hours ago</p>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-950 text-indigo-300 font-geist" style={{}}>Policy</span>
</div>
</div>
</div>

<div className="transition-all duration-700 ease-out opacity-100 shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-black/20 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-black/30 border-white/20 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md translate-y-0" data-animate="">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg text-neutral-100 font-geist" style={{}}>Compliance Status</h3>
<button className="hover:text-indigo-300 text-sm font-medium text-[#FF9000] font-geist" style={{}}>Generate Report</button>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-900/70">
<svg className="lucide lucide-shield-check w-5 h-5 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-neutral-100 font-geist font-medium" style={{}}>SOC 2 Type II</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Last audit: March 2024</p>
</div>
</div>
<span className="inline-flex items-center text-xs font-medium text-cyan-300 font-geist bg-cyan-950 border-cyan-800 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>
                Compliant
              </span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-900/70">
<svg className="lucide lucide-credit-card w-5 h-5 text-orange-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<p className="text-neutral-100 font-geist font-medium" style={{}}>PCI DSS Level 1</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>3 findings require attention</p>
</div>
</div>
<span className="inline-flex items-center text-xs font-medium text-indigo-300 font-geist bg-indigo-950 border-indigo-800 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>
                Action Required
              </span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-900/70">
<svg className="lucide lucide-globe w-5 h-5 text-blue-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="">
<p className="text-neutral-100 font-geist font-medium" style={{}}>ISO 27001:2022</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Certification expires Dec 2024</p>
</div>
</div>
<span className="inline-flex items-center text-xs font-medium text-indigo-300 font-geist bg-indigo-950 border-indigo-800 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>
                Certified
              </span>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-900/70">
<svg className="lucide lucide-user-check w-5 h-5 text-purple-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<p className="text-neutral-100 font-geist font-medium" style={{}}>GDPR Compliance</p>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Data protection assessment</p>
</div>
</div>
<span className="inline-flex items-center text-xs font-medium text-cyan-300 font-geist bg-cyan-950 border-cyan-800 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>
                Compliant
              </span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t transition-all duration-700 ease-out opacity-100 translate-y-0 bg-black border-neutral-800" data-animate="">
</footer>
</div>



    </>
  );
}
