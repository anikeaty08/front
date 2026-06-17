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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="gradient-bg">
<div className="gradient-blob blob-1"></div>
<div className="gradient-blob blob-2"></div>
<div className="gradient-blob blob-3"></div>
</div>

<nav className="fixed bg-black/50 w-full z-50 border-white/5 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex gap-2 group cursor-pointer gap-x-2 gap-y-2 items-center">
<div className="flex bg-blue-600 w-6 h-6 rounded-full items-center justify-center">
<div className="bg-black w-2 h-2 rounded-full"></div>
</div>
<span className="group-hover:text-blue-400 transition-colors text-sm font-medium text-white tracking-tighter cursor-pointer" onclick="window.location.href='/file:///C:/Users/micha/Downloads/Title%20(7).png'" role="button"></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-blue-400 transition-colors text-xs font-medium text-gray-400" href="#">Methodology</a>
<a className="text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors" href="#">Research</a>
<a className="text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4">
                    Contact Sales
                </button>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">

<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8 backdrop-blur-sm hover:border-blue-500/40 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs font-medium text-blue-200 tracking-wide">Nexus v2.0 Model Available</span>
</div>

<h1 className="reveal reveal-delay-1 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-100 to-blue-300/40">Autonomous intelligence</span><br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white/40 to-white/10">for the enterprise.</span>
</h1>

<p className="reveal reveal-delay-2 text-base md:text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            We build cognitive infrastructure that scales. From predictive analytics to generative workflows, deploy AI that understands your business context.
        </p>

<div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<button className="group sm:w-auto inline-flex gap-2 transition-all overflow-hidden text-sm font-medium text-white w-full border-transparent border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative gap-x-2 gap-y-2 items-center justify-center hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]" style={{background: 'linear-gradient(110deg, #1d4ed8 45%, #3b82f6 50%, #1d4ed8 55%)', backgroundSize: '200% 100%', animation: 'shimmer 3s infinite linear'}}>
<span className="">Deploy Agent</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-gray-300 text-sm font-medium hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch Demo
            </button>
</div>

<div className="reveal reveal-delay-3 mt-20 w-full relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden shadow-2xl shadow-blue-900/20 aspect-[16/9] md:aspect-[21/9] group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 h-4 w-32 bg-white/5 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-full">

<div className="col-span-3 hidden md:block space-y-3">
<div className="h-8 w-full bg-white/5 rounded animate-pulse"></div>
<div className="h-8 w-3/4 bg-white/5 rounded"></div>
<div className="h-8 w-4/5 bg-white/5 rounded"></div>
<div className="mt-8 h-32 w-full border border-white/5 rounded bg-gradient-to-b from-blue-900/10 to-transparent"></div>
</div>

<div className="col-span-12 md:col-span-9 flex flex-col gap-4">
<div className="flex justify-between items-end border-b border-white/5 pb-4">
<div className="h-10 w-48 bg-white/10 rounded"></div>
<div className="h-8 w-24 bg-white/5 rounded"></div>
</div>
<div className="flex-1 grid grid-cols-3 gap-4 mt-2">
<div className="col-span-2 overflow-hidden bg-white/5 border-white/5 border rounded relative">

<svg className="absolute bottom-0 left-0 w-full h-24 text-blue-500/20" preserveaspectratio="none" viewbox="0 0 100 20">
<path className="" d="M0,20 L0,10 Q20,15 40,5 T100,10 L100,20 Z" fill="currentColor"></path>
</svg>
</div>
<div className="col-span-1 rounded border border-white/5 bg-white/5 flex flex-col justify-center items-center p-4">
<div className="w-16 h-16 rounded-full border-2 border-white/10 border-t-blue-500 animate-spin"></div>
<div className="mt-4 text-xs text-blue-400 font-mono">PROCESSING</div>
</div>
</div>
<div className="h-24 rounded border border-white/5 bg-white/5 flex items-center px-6 gap-4">
<div className="h-8 w-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div className="space-y-2 flex-1">
<div className="h-2 w-full bg-white/10 rounded"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 w-full pt-10 border-t border-white/5">
<p className="text-xs text-center font-medium text-gray-500 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group"><div className="w-4 h-4 bg-white group-hover:bg-blue-400 transition-colors rounded-sm"></div><span className="group-hover:text-blue-200 transition-colors font-semibold text-white tracking-tight">n8n</span></div>
<div className="flex items-center gap-2 group"><div className="w-4 h-4 rounded-full border border-white group-hover:border-blue-400 transition-colors"></div><span className="group-hover:text-blue-200 transition-colors font-semibold text-white tracking-tight">Slack</span></div>
<div className="flex items-center gap-2 group"><div className="w-4 h-4 bg-white group-hover:bg-blue-400 transition-colors rotate-45"></div><span className="group-hover:text-blue-200 transition-colors font-semibold text-white tracking-tight">GHL</span></div>
<div className="flex items-center gap-2 group"><div className="flex gap-0.5"><div className="w-1.5 h-4 bg-white group-hover:bg-blue-400 transition-colors"></div><div className="w-1.5 h-4 bg-white group-hover:bg-blue-400 transition-colors"></div></div><span className="group-hover:text-blue-200 transition-colors font-semibold text-white tracking-tight">Airtable</span></div>
<div className="flex items-center gap-2 group"><div className="w-4 h-4 rounded-sm border-2 border-white group-hover:border-blue-400 transition-colors"></div><span className="group-hover:text-blue-200 transition-colors font-semibold text-white tracking-tight">Notion</span></div>
</div>
</div>
</main>

<section className="bg-black/20 z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative backdrop-blur-sm">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6">Improve Every Step Of The Customer Journey</h2>
<p className="text-lg font-light text-gray-400 max-w-2xl">Use AI to enhance every interaction across your customer lifecycle, from first touch to long-term retention, with smarter automation and more reliable performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group hover:bg-blue-900/[0.1] transition-all duration-500 hover:border-blue-500/30 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex group-hover:scale-110 transition-transform duration-500 bg-blue-500/10 w-10 h-10 border-blue-500/20 border rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-brain-circuit w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="group-hover:text-blue-100 transition-colors text-lg font-medium text-white tracking-tight mb-3">Increase Your Qualify Leads</h3>
<p className="leading-relaxed group-hover:text-gray-400 text-sm text-gray-500">Automatically qualify leads with better accuracy and reduce time wasted on low-quality prospects by using real-time AI checks that keep your pipeline clean and focused on the people who are ready to convert.</p>
</div>

<div className="group hover:bg-blue-900/[0.1] transition-all duration-500 hover:border-blue-500/30 border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-blue-500/20">
<svg className="lucide lucide-zap text-blue-400 w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="group-hover:text-blue-100 transition-colors text-lg font-medium text-white tracking-tight mb-3">Free up your post-sales team
</h3>
<p className="leading-relaxed group-hover:text-gray-400 text-sm text-gray-500">Give your onboarding team the ability to focus on higher leverage tasks while the platform handles configuration and setup.</p>
</div>

<div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-blue-900/[0.1] transition-all duration-500 hover:border-blue-500/30">
<div className="flex group-hover:scale-110 transition-transform duration-500 bg-blue-500/10 w-10 h-10 border-blue-500/20 border rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-shield-check w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(96, 165, 250)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="group-hover:text-blue-100 transition-colors text-lg font-medium text-white tracking-tight mb-3">Stay Active With Customers</h3>
<p className="leading-relaxed group-hover:text-gray-400 text-sm text-gray-500">Keep conversations alive with automated follow-ups that feel personal, timely, and designed to maintain steady customer engagement.</p>
</div>
</div>
</div>
</section>

<section className="z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-3xl mx-auto">
<div className="mb-20 text-center">
<div className="inline-flex items-center gap-2 mb-6 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></span>
<span className="text-[10px] font-medium text-blue-300 uppercase tracking-widest">Workflow</span>
</div>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6">Integration in three steps.</h2>
<p className="text-gray-400 font-light text-lg max-w-xl mx-auto">From API key to production-ready autonomous agents in minutes.</p>
</div>
<div className="relative max-w-2xl mx-auto">

<div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10"></div>

<div className="absolute left-[19px] top-0 h-[60%] w-px bg-gradient-to-b from-blue-500 via-blue-600 to-transparent"></div>

<div className="relative pl-16 pb-16 group">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border border-blue-500 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
<span className="text-blue-400 font-mono text-xs font-bold">01</span>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 ease-out">
<h3 className="text-xl font-medium text-white mb-2">Discover &amp; Analyze</h3>
<p className="leading-relaxed text-sm font-light text-gray-400 mb-4">Identify bottlenecks in your data pipeline. Our agents automatically map your infrastructure to find optimization opportunities.</p>
</div>
</div>

<div className="relative pl-16 pb-16 group">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300 flex items-center justify-center z-10">
<span className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300 font-mono text-xs">02</span>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 ease-out">
<h3 className="text-xl font-medium text-white mb-2">Build &amp; Implement</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">Deploy solutions instantly. The system generates and tests code patches, ensuring zero downtime during implementation.</p>
</div>
</div>

<div className="group pb-16 pl-16 relative">
<div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black border border-white/10 group-hover:border-blue-500/50 transition-colors duration-300 flex items-center justify-center z-10">
<span className="text-gray-600 group-hover:text-blue-400 transition-colors duration-300 font-mono text-xs">03</span>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 ease-out">
<h3 className="text-xl font-medium text-white mb-2">Deliver &amp; Monitor</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">Ensure efficient execution and tracking. Real-time dashboards give you visibility into performance metrics and health.</p>
</div>
</div>

<div className="relative pl-16 group">
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-8">Ready to Transform</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="hover:bg-gray-200 transition-colors sm:w-auto text-sm font-medium text-black bg-white w-full rounded-full pt-3 pr-8 pb-3 pl-8 shadow-[0_0_15px_rgba(255,255,255,0.2)]">Schedule a Call</button>
<button className="px-8 py-3 rounded-full font-medium text-sm text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Talk to an Expert
                </button>
</div>
</div>
</section>

<footer className="z-10 bg-black border-white/5 border-t pt-12 pr-6 pb-12 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="text-xs font-medium text-white tracking-tighter">NEURAL</span>
</div>
</div>
<div className="">
<ul className="space-y-3">
</ul>
</div>
<div className="">
<ul className="space-y-3">
<li className=""></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-blue-400 transition-colors" href="#">About</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-[10px] text-gray-600">© 2024 Neural Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
