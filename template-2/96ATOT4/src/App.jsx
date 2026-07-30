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

    // Add scroll-triggered animations for mobile responsiveness
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe elements for mobile scroll animations
    document.querySelectorAll('[style*="opacity: 0"]').forEach(el => {
      if (window.innerWidth < 1024) {
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
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
      
<div className="fixed w-full h-screen"><iframe frameborder="0" height="100%" src="https://my.spline.design/hellodistortingintro-KK1UjacLdIpYX67NFsvuRTYC/" width="100%"></iframe></div>

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800/50" style={{opacity: `0`, animation: `0.8s ease-out 0.2s 1 normal forwards running fadeSlideDown`, transition: `outline 0.1s ease-in-out`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center from-indigo-500 to-indigo-600" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-cpu w-4 h-4 text-white stroke-2" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-lg tracking-tight font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Nexus AI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Products</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Solutions</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Developers</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors font-geist font-normal" href="#" style={{transition: `outline 0.1s ease-in-out`}}>Company</a>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>
<header className="relative overflow-hidden pt-20">
<div className="max-w-7xl sm:px-6 lg:px-8 md:pt-24 mr-auto ml-auto pt-16 pr-4 pb-8 pl-4">
<div className="max-w-4xl text-center mr-auto ml-auto">
<span className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-medium mb-6" style={{opacity: `0`, animation: `fadeSlideUp 0.8s ease-out 0.4s forwards`}}>
<span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-500" style={{transition: `outline 0.1s ease-in-out`}}></span>
<span className="text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Next-Generation AI Architecture</span>
</span>
<h1 className="sm:text-5xl lg:text-7xl xl:text-8xl leading-[0.9] text-4xl font-light text-neutral-100 tracking-tight mb-8 font-geist" style={{fontFamily: `"Playfair Display", serif`, opacity: `0`, animation: `0.8s ease-out 0.6s 1 normal forwards running fadeSlideUp`}}>
          Powered by the<br className="hidden sm:block" />
<span className="bg-clip-text font-light text-transparent tracking-tight font-geist bg-gradient-to-tr from-teal-400 to-blue-500" style={{}}>Nexus AI Engine™</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10 font-geist font-normal" style={{opacity: `0`, animation: `0.8s ease-out 0.8s 1 normal forwards running fadeSlideUp`, transition: `outline 0.1s ease-in-out`}}>
          Revolutionary AI architecture designed for enterprise-grade customer intelligence. Built for precision, optimized for scale.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{opacity: `0`, animation: `fadeSlideUp 0.8s ease-out 1s forwards`}}>
<button className="group inline-flex gap-2 transition-all duration-300 transform hover:scale-105 hover:from-indigo-600 hover:to-indigo-700 text-sm font-normal text-white font-geist bg-gradient-to-tr from-teal-400 to-blue-500 rounded-full pt-3 pr-6 pb-3 pl-6 items-center" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-sparkles w-4 h-4 stroke-2 group-hover:rotate-12 transition-transform" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            Experience Nexus AI Demo
          </button>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 text-sm px-6 py-3 transition-all duration-300 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-play-circle w-4 h-4 stroke-1.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
            Watch Technical Overview
          </button>
</div>
</div>
</div>

<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="absolute -top-40 -right-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5" style={{transition: `outline 0.1s ease-in-out`}}></div>
<div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full blur-3xl bg-indigo-500/5" style={{transition: `outline 0.1s ease-in-out`}}></div>
</div>
</header>

<section className="py-16 border-y border-neutral-800/50 backdrop-blur-lg" style={{opacity: `0`, animation: `0.8s ease-out 1.2s 1 normal forwards running fadeSlideUp`, transition: `outline 0.1s ease-in-out`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400" style={{}}>99.7%</div>
<div className="text-sm text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Accuracy Rate</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400" style={{}}>2.3s</div>
<div className="text-sm text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Avg Response Time</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400" style={{}}>150M+</div>
<div className="text-sm text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Conversations Processed</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl mb-2 font-light tracking-tight font-geist text-cyan-400" style={{}}>24/7</div>
<div className="text-sm text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Uptime Guarantee</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden py-20 md:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-4 space-y-6" style={{opacity: `0`, animation: `fadeSlideRight 0.8s ease-out 0.2s forwards`}}>
<div className="flex items-start gap-4">
<div className="flex-shrink-0">
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-geist font-normal bg-indigo-500/10 text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>03</span>
</div>
<div className="">
<h2 className="text-2xl text-neutral-100 mb-4 font-light tracking-tight font-geist" style={{}}>Advanced AI Architecture</h2>
<p className="text-neutral-400 leading-relaxed font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>
                The Nexus AI Engine™ features a proprietary AI architecture specifically engineered for customer service excellence. Every neural layer is meticulously optimized for precision, speed, and reliability—enabling our AI agents to resolve customer conversations more effectively than any competing solution.
              </p>
</div>
</div>
<div className="space-y-4 pl-12">
<div className="flex items-center gap-3">
<svg className="lucide lucide-zap w-4 h-4 stroke-2 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-neutral-300 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Lightning-fast inference optimization</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield w-4 h-4 stroke-2 text-cyan-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-neutral-300 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Enterprise-grade security protocols</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-target w-4 h-4 stroke-2 text-cyan-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm text-neutral-300 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Context-aware response generation</span>
</div>
</div>
</div>

<div className="lg:col-span-8" style={{opacity: `0`, animation: `fadeSlideLeft 0.8s ease-out 0.4s forwards`}}>
<div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 border border-neutral-800/50 rounded-2xl overflow-hidden p-6 md:p-12" style={{transition: `outline 0.1s ease-in-out`}}>

<div className="absolute inset-0 pointer-events-none opacity-30">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M40 0V40H0" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="text-neutral-700" fill="url(#grid)" height="100%" style={{transition: `outline 0.1s ease-in-out`}} width="100%"></rect>
</svg>
</div>

<div className="relative">
<div className="flex flex-col items-center space-y-8">

<div className="w-full max-w-md">
<div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
<svg className="lucide lucide-message-circle w-8 h-8 text-blue-400 mx-auto mb-3 stroke-1.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<div className="text-sm text-blue-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Customer Query Input</div>
<div className="text-xs text-neutral-400 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Natural language processing</div>
</div>
</div>

<div className="w-full grid md:grid-cols-2 gap-6 max-w-4xl">
<div className="bg-gradient-to-r border rounded-xl p-6 from-indigo-500/20 to-indigo-600/20 border-indigo-500/30" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-brain w-8 h-8 mb-3 stroke-1.5 text-indigo-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<div className="text-sm mb-2 font-geist font-normal text-indigo-400" style={{transition: `outline 0.1s ease-in-out`}}>Neural Processing Core</div>
<div className="text-xs text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Advanced transformer architecture</div>
</div>
<div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-database w-8 h-8 text-green-400 mb-3 stroke-1.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<div className="text-sm text-green-400 mb-2 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Knowledge Retrieval</div>
<div className="text-xs text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>RAG-enhanced information access</div>
</div>
</div>

<div className="w-full max-w-md">
<div className="bg-gradient-to-r border rounded-xl p-6 text-center from-indigo-500/20 to-indigo-600/20 border-indigo-500/30" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-check-circle w-8 h-8 mx-auto mb-3 stroke-1.5 text-indigo-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<div className="text-sm font-geist font-normal text-indigo-400" style={{transition: `outline 0.1s ease-in-out`}}>Validated Response</div>
<div className="text-xs text-neutral-400 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Quality-assured output</div>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: `-1`}}>
<defs>
<lineargradient id="flowGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: `#f97316`, stopOpacity: `0.6`}}></stop>
<stop offset="100%" style={{stopColor: `#f97316`, stopOpacity: `0.2`}}></stop>
</lineargradient>
</defs>
<path d="M50% 20% L50% 80%" fill="none" stroke="url(#flowGradient)" strokeDasharray="6 6" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="2s" repeatcount="indefinite" values="0;12"></animate>
</path>
</svg>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center p-4 rounded-lg bg-neutral-800/30" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="text-lg mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>4.2B</div>
<div className="text-xs text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Parameters</div>
</div>
<div className="text-center p-4 rounded-lg bg-neutral-800/30" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="text-lg mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>128K</div>
<div className="text-xs text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Context Window</div>
</div>
<div className="text-center p-4 rounded-lg bg-neutral-800/30" style={{transition: `outline 0.1s ease-in-out`}}>
<div className="text-lg mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>99.97%</div>
<div className="text-xs text-neutral-400 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Uptime SLA</div>
</div>
</div>
</div>

<div className="hidden lg:block">
<div className="absolute -left-8 top-32 w-64" style={{opacity: `0`, animation: `fadeSlideRight 0.8s ease-out 1s forwards`}}>
<div className="space-y-8">
<div className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500" style={{transition: `outline 0.1s ease-in-out`}}></span>
<div className="">
<div className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>[3.A.1] Query Refinement</div>
<div className="text-xs text-neutral-400 leading-relaxed font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Advanced preprocessing optimizes input comprehension and context extraction.</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500" style={{transition: `outline 0.1s ease-in-out`}}></span>
<div>
<div className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>[3.A.3] Response Validation</div>
<div className="text-xs text-neutral-400 leading-relaxed font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Multi-layer validation ensures accuracy and safety compliance.</div>
</div>
</div>
</div>
</div>
<div className="absolute -right-8 top-48 w-64" style={{opacity: `0`, animation: `fadeSlideLeft 0.8s ease-out 1.2s forwards`}}>
<div className="space-y-8">
<div className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500" style={{transition: `outline 0.1s ease-in-out`}}></span>
<div>
<div className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>[3.A.2] Intelligent Generation</div>
<div className="text-xs text-neutral-400 leading-relaxed font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Proprietary RAG architecture delivers contextually precise responses.</div>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-neutral-900/80 rounded-lg border border-neutral-800/50 backdrop-blur-sm" style={{transition: `outline 0.1s ease-in-out`}}>
<span className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-indigo-500" style={{transition: `outline 0.1s ease-in-out`}}></span>
<div>
<div className="text-xs uppercase tracking-wide mb-1 font-geist font-normal text-cyan-400" style={{transition: `outline 0.1s ease-in-out`}}>[3.A.4] Continuous Optimization</div>
<div className="text-xs text-neutral-400 leading-relaxed font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Real-time learning improves efficiency and knowledge coverage.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-neutral-900/50 to-neutral-800/30 border-y border-neutral-800/50" style={{opacity: `0`, animation: `0.8s ease-out 0.2s 1 normal forwards running fadeSlideUp`, transition: `outline 0.1s ease-in-out`}}>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-3xl md:text-4xl text-neutral-100 mb-6 font-light tracking-tight font-geist" style={{}}>Ready to experience the future?</h3>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Join thousands of enterprises leveraging Nexus AI Engine for superior customer experiences.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r text-white px-8 py-4 transition-all duration-300 transform hover:scale-105 font-geist font-normal from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-rocket w-5 h-5 stroke-2 group-hover:translate-x-1 transition-transform" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Start Free Trial
        </button>
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-900/50 px-8 py-4 transition-all duration-300 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-calendar w-5 h-5 stroke-1.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Schedule Demo
        </button>
</div>
</div>
</section>

<section className="py-20" style={{opacity: `0`, animation: `fadeSlideUp 0.8s ease-out 0.4s forwards`}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="text-sm text-neutral-400 uppercase tracking-widest mb-2 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Enterprise Security & Compliance</h3>
<p className="text-2xl text-neutral-200 font-light tracking-tight font-geist" style={{}}>Trusted by Fortune 500 companies worldwide</p>
</div>
<div className="flex gap-8 items-center justify-evenly">
<div className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-shield-check w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-file-lock w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" data-lucide="file-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><rect height="6" rx="1" width="8" x="8" y="12"></rect><path d="M10 12v-2a2 2 0 1 1 4 0v2"></path></svg>
</div>
<div className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-globe-lock w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" data-lucide="globe-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path><path d="M2 12h8.5"></path><path d="M20 6V4a2 2 0 1 0-4 0v2"></path><rect height="5" rx="1" width="8" x="14" y="6"></rect></svg>
</div>
<div className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-award w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div className="group w-16 h-16 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 flex items-center justify-center transition-all duration-300 hover:scale-110" style={{transition: `outline 0.1s ease-in-out`}}>
<svg className="lucide lucide-key w-7 h-7 text-neutral-600 group-hover:text-neutral-400 stroke-1.5 transition-colors" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: `outline 0.1s ease-in-out`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
<div className="">
<div className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>SOC 2 Type II</div>
<div className="text-sm text-neutral-500 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Security Certified</div>
</div>
<div className="">
<div className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>GDPR</div>
<div className="text-sm text-neutral-500 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Privacy Compliant</div>
</div>
<div className="">
<div className="uppercase text-xs font-normal text-neutral-400 tracking-wide font-geist" style={{transition: `outline 0.1s ease-in-out`}}>ISO 27001</div>
<div className="text-sm text-neutral-500 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Information Security</div>
</div>
<div className="">
<div className="text-xs text-neutral-400 uppercase tracking-wide font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>HIPAA</div>
<div className="text-sm text-neutral-500 mt-1 font-geist font-normal" style={{transition: `outline 0.1s ease-in-out`}}>Healthcare Ready</div>
</div>
</div>
</div>
</section>



    </>
  );
}
