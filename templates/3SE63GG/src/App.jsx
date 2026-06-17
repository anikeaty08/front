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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

<header className="text-center mb-20 md:mb-28">
<div className="animate-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl md:text-6xl tracking-tight font-instrument-serif font-normal">Roadmap for "Roadmap"</h1>
<p className="md:mt-6 max-w-3xl md:text-xl text-lg text-slate-400 mt-4 mr-auto ml-auto">Ambitious 3-Month Growth Playbook for India's First AI-Native School</p>
</div>
<div className="animate-in text-sm text-slate-500 mt-8 space-x-6" style={{animationDelay: '0.2s'}}>
</div>
</header>

<section className="text-center mb-20 md:mb-28">
<div className="blur-in" style={{animationDelay: '0.3s'}}>
<h2 className="md:text-5xl bg-clip-text text-4xl font-normal text-transparent tracking-tight font-instrument-serif bg-gradient-to-br from-white to-slate-400">Grow from 1 →  30 → 300 students in 3 months</h2>
</div>
<div className="mt-10 flex justify-center items-end gap-4 animate-in" style={{animationDelay: '0.4s'}}>
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-briefcase w-16 h-16 text-teal-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-lg font-medium text-slate-200 font-sans">Portfolios</span>
<div className="w-24 h-2 bg-teal-400 rounded-full"></div>
</div>
<div className="text-4xl text-slate-600 pb-10 font-instrument-serif font-normal">&gt;</div>
<div className="flex flex-col items-center gap-2 text-slate-500">
<svg className="lucide lucide-award w-12 h-12" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-lg font-medium font-sans">Certificates</span>
<div className="w-20 h-2 bg-slate-700 rounded-full"></div>
</div>
</div>
</section>
<div className="section-divider animate-in" style={{animationDelay: '0.5s'}}></div>

<section className="mb-20 md:mb-28">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 md:mb-12 text-center animate-in font-instrument-serif font-normal" style={{animationDelay: '0.6s'}}>Industry Trends Shaping the Market</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '0.7s'}}>
<div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 mb-4">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-blue-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h4 className="font-medium text-slate-200 font-sans">AI-First Workflows</h4>
</div>
<div className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '0.8s'}}>
<div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 mb-4">
<svg className="lucide lucide-users w-5 h-5 text-blue-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="font-medium text-slate-200 font-sans">Community-Led Learning</h4>
</div>
<div className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '0.9s'}}>
<div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 mb-4">
<svg className="lucide lucide-clapperboard w-5 h-5 text-blue-400" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</div>
<h4 className="font-medium text-slate-200 font-sans">Short-Form Video</h4>
</div>
<div className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '1.0s'}}>
<div className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 mb-4">
<svg className="lucide lucide-trophy w-5 h-5 text-blue-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<h4 className="font-medium text-slate-200 font-sans">Outcomes &gt; Credentials</h4>
</div>
</div>
</section>

<section className="mb-20 md:mb-28">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 md:mb-12 text-center animate-in font-instrument-serif font-normal" style={{animationDelay: '1.1s'}}>Ideal Customer Profiles (ICPs)</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '1.2s'}}>
<h4 className="font-medium text-lg text-slate-200 font-sans">Students (20-24)</h4>
<p className="text-slate-400 mt-2 font-sans">"Want first job, crave fast outcomes."</p>
</div>
<div className="bg-slate-900 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '1.3s'}}>
<h4 className="font-medium text-lg text-slate-200 font-sans">Professionals (25-35)</h4>
<p className="text-slate-400 mt-2 font-sans">"Career pivot, demand ROI."</p>
</div>
<div className="bg-slate-900 p-6 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '1.4s'}}>
<h4 className="font-medium text-lg text-slate-200 font-sans">Entrepreneurs/Freelancers (22-35)</h4>
<p className="text-slate-400 mt-2 font-sans">"Scaling agencies, need AI-native execution."</p>
</div>
</div>
</section>

<section className="mb-20 md:mb-28 animate-in" style={{animationDelay: '1.5s'}}>
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 md:mb-12 text-center font-instrument-serif font-normal">Competitive Landscape</h3>
<div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
<div className="grid grid-cols-5 p-4 bg-slate-800/50 font-medium text-sm text-slate-400">
<div className="col-span-2 font-sans">Provider</div>
<div className="font-sans">Price</div>
<div className="font-sans">Duration</div>
<div className="font-sans">Placement</div>
</div>
<div className="divide-y divide-slate-800">
<div className="grid grid-cols-5 p-4 items-center bg-blue-900/10 ring-1 ring-inset ring-blue-500/20">
<div className="col-span-2">
<h4 className="font-medium text-lg text-teal-300 font-sans">TarunSpeaks</h4>
<p className="text-sm text-teal-400 font-sans">Unique Value: AI-Native Execution</p>
</div>
<div className="font-medium text-slate-200 font-sans">₹97,000</div>
<div className="font-medium text-slate-200 font-sans">12 weeks</div>
<div className="font-medium text-slate-200 font-sans">100%</div>
</div>
<div className="grid grid-cols-5 p-4 items-center">
<div className="col-span-2">
<h4 className="font-medium text-slate-300 font-sans">GrowthX</h4>
<p className="text-sm text-slate-500 font-sans">Premium network</p>
</div>
<div className="text-slate-400">₹200,000+</div>
<div className="text-slate-400 font-sans">24 weeks</div>
<div className="text-slate-400 font-sans">High</div>
</div>
<div className="grid grid-cols-5 pt-4 pr-4 pb-4 pl-4 items-center">
<div className="col-span-2">
<h4 className="font-medium text-slate-300 font-sans">Growth School</h4>
<p className="text-sm text-slate-500 font-sans">Affordable, diverse</p>
</div>
<div className="text-slate-400 font-sans">₹20,000-50,000</div>
<div className="text-slate-400 font-sans">8-16 weeks</div>
<div className="text-slate-400 font-sans">Varies</div>
</div>
</div>
</div>
</section>
<div className="section-divider animate-in" style={{animationDelay: '1.6s'}}></div>

<section className="mb-20 md:mb-28">
<h3 className="text-2xl md:text-3xl tracking-tight mb-12 md:mb-16 text-center animate-in font-instrument-serif font-normal" style={{animationDelay: '1.7s'}}>The Growth Engine</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

<div className="animate-in" style={{animationDelay: '1.8s'}}>
<h4 className="text-xl font-medium mb-8 text-center font-sans">Scholarship Funnel</h4>
<div className="relative flex flex-col items-center space-y-4">

<div className="absolute top-8 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-4rem)] bg-slate-700"></div>
<div className="z-10 w-full p-4 bg-slate-900 border border-slate-800 rounded-lg text-center">
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-instagram w-5 h-5 text-slate-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-youtube w-5 h-5 text-slate-400" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
<p className="mt-1 font-medium text-slate-200 font-sans">Instagram/YouTube</p>
<span className="text-xs text-blue-400 font-sans">Lever: Story-driven ads</span>
</div>
<div className="z-10 w-full p-4 bg-slate-900 border border-slate-800 rounded-lg text-center">
<svg className="lucide lucide-file-text w-5 h-5 mx-auto text-slate-400 mb-1" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<p className="font-medium text-slate-200 font-sans">Landing Page</p>
<span className="text-xs text-blue-400 font-sans">Lever: Urgency countdowns</span>
</div>
<div className="z-10 w-full p-4 bg-slate-900 border border-slate-800 rounded-lg text-center">
<svg className="lucide lucide-message-circle w-5 h-5 mx-auto text-slate-400 mb-1" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<p className="font-medium text-slate-200 font-sans">WhatsApp Group</p>
</div>
<div className="z-10 w-full p-4 bg-teal-900/50 border border-teal-500/30 rounded-lg text-center">
<svg className="lucide lucide-gem w-5 h-5 mx-auto text-teal-400 mb-1" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<p className="font-medium text-teal-300 font-sans">Conversion into Cohort</p>
</div>
</div>
</div>

<div className="animate-in" style={{animationDelay: '1.9s'}}>
<h4 className="text-xl font-medium mb-8 text-center font-sans">Community Flywheel</h4>
<div className="relative w-full aspect-square max-w-md mx-auto">

<div className="absolute inset-0 flex items-center justify-center">
<svg className="w-2/3 h-2/3 text-slate-700 animate-spin" style={{animationDuration: '20s', animationTimingFunction: 'linear'}} viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="4 8" strokeWidth="2"></circle>
</svg>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-40">
<div className="p-3 bg-slate-900 border border-slate-800 rounded-lg"><p className="text-sm font-medium text-slate-200 font-sans">Cohort Testimonials</p><span className="text-xs text-blue-400 block mt-1 font-sans">Alumni spotlight</span></div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-center w-40">
<div className="p-3 bg-slate-900 border border-slate-800 rounded-lg"><p className="text-sm font-medium text-slate-200 font-sans">Repurposed Content</p></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-40">
<div className="p-3 bg-slate-900 border border-slate-800 rounded-lg"><p className="text-sm font-medium text-slate-200 font-sans">New Leads</p><span className="text-xs text-blue-400 block mt-1 font-sans">Peer-to-peer referrals</span></div>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 text-center w-40">
<div className="p-3 bg-slate-900 border border-slate-800 rounded-lg"><p className="text-sm font-medium text-slate-200 font-sans">Fuels Next Cohort</p></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20 md:mb-28">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 md:mb-12 text-center animate-in font-instrument-serif font-normal" style={{animationDelay: '2.0s'}}>Distribution Stack</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
<div className="flex flex-col items-center p-6 bg-slate-900 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '2.1s'}}>
<svg className="lucide lucide-instagram w-8 h-8 text-slate-300 mb-3" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<h5 className="font-medium text-slate-200 font-sans">Instagram</h5>
<p className="text-sm text-slate-500 font-sans">(Reach)</p>
</div>
<div className="flex flex-col items-center p-6 bg-slate-900 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '2.2s'}}>
<svg className="lucide lucide-youtube w-8 h-8 text-slate-300 mb-3" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
<h5 className="font-medium text-slate-200 font-sans">YouTube</h5>
<p className="text-sm text-slate-500 font-sans">(Depth)</p>
</div>
<div className="flex flex-col items-center p-6 bg-slate-900 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '2.3s'}}>
<svg className="lucide lucide-message-circle w-8 h-8 text-slate-300 mb-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<h5 className="font-medium text-slate-200 font-sans">WhatsApp</h5>
<p className="text-sm text-slate-500 font-sans">(Conversion)</p>
</div>
<div className="flex flex-col items-center p-6 bg-slate-900 rounded-lg border border-slate-800 animate-in" style={{animationDelay: '2.4s'}}>
<svg className="lucide lucide-mail w-8 h-8 text-slate-300 mb-3" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<h5 className="font-medium text-slate-200 font-sans">Email</h5>
<p className="text-sm text-slate-500 font-sans">(Retention)</p>
</div>
<div className="flex flex-col items-center p-6 bg-slate-900 rounded-lg border border-slate-800 animate-in col-span-2 md:col-span-1" style={{animationDelay: '2.5s'}}>
<svg className="lucide lucide-linkedin w-8 h-8 text-slate-300 mb-3" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<h5 className="font-medium text-slate-200 font-sans">LinkedIn</h5>
<p className="text-sm text-slate-500 font-sans">(Thought Leadership)</p>
</div>
</div>
</section>

<section className="mb-20 md:mb-28">
<h3 className="text-2xl md:text-3xl tracking-tight mb-12 md:mb-16 text-center animate-in font-instrument-serif font-normal" style={{animationDelay: '2.6s'}}>3-Month Roadmap</h3>
<div className="relative">

<div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-slate-800"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
<div className="relative animate-in" style={{animationDelay: '2.7s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 1-2</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Launch scholarship funnel</h5>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '2.8s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 3-4</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Collect 500+ leads</h5>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '2.9s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 5-6</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Run 1st beta cohort (30-50 students)</h5>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '3.0s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 7-8</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Repurpose cohort outcomes into reels</h5>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '3.1s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 9-10</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Launch Pro Cohort &amp; partner with influencers</h5>
</div>
</div>
<div className="relative animate-in" style={{animationDelay: '3.2s'}}>
<div className="md:absolute -top-5 left-0 w-10 h-10 flex items-center justify-center bg-slate-950">
<div className="w-3 h-3 bg-blue-400 rounded-full ring-4 ring-slate-950"></div>
</div>
<div className="md:pt-10">
<p className="text-sm font-medium text-blue-400 font-sans">Wks 11-12</p>
<h5 className="mt-1 font-medium text-slate-200 font-sans">Alumni showcase &amp; scale partnerships</h5>
</div>
</div>
</div>
</div>
</section>
<div className="section-divider animate-in" style={{animationDelay: '3.3s'}}></div>

<section className="mb-20 md:mb-28">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
<div className="animate-in" style={{animationDelay: '3.4s'}}>
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-center lg:text-left font-instrument-serif font-normal">KPIs</h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
<p className="text-sm text-slate-400 font-sans">CTR</p>
<p className="text-2xl text-teal-400 font-instrument-serif font-normal">&gt;3%</p>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
<p className="text-sm text-slate-400 font-sans">CPL</p>
<p className="text-2xl text-teal-400 font-instrument-serif font-normal">₹80-150</p>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
<p className="text-sm text-slate-400 font-sans">Landing Conversion</p>
<p className="text-2xl text-teal-400 font-instrument-serif font-normal">20-30%</p>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
<p className="text-sm text-slate-400 font-sans">WhatsApp → Paid</p>
<p className="text-2xl text-teal-400 font-instrument-serif font-normal">10-15%</p>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800 col-span-2">
<p className="text-sm text-slate-400 font-sans">Enrollments</p>
<p className="text-2xl text-teal-400 font-instrument-serif font-normal">100+</p>
</div>
</div>
</div>
<div className="animate-in" style={{animationDelay: '3.5s'}}>
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-center lg:text-left font-instrument-serif font-normal">Risks &amp; Mitigation</h3>
<div className="bg-slate-900 p-6 rounded-lg border border-slate-800">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<h4 className="font-medium text-red-400/80 mb-2 font-sans">Risk</h4>
<ul className="list-disc list-inside space-y-2 text-slate-300">
<li className="font-sans">Founder dependency</li>
<li className="font-sans">Ops bottlenecks</li>
</ul>
</div>
<div>
<h4 className="font-medium text-green-400/80 mb-2 font-sans">Mitigation</h4>
<ul className="list-disc list-inside space-y-2 text-slate-300">
<li className="font-sans">Hire ops manager</li>
<li className="font-sans">Use AI editors</li>
<li className="font-sans">Build tech stack</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="text-center pt-8">
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 animate-in" style={{animationDelay: '3.6s'}}>
<div className="text-center">
<p className="text-sm text-slate-400 tracking-widest uppercase font-sans">Wedge</p>
<p className="text-3xl md:text-4xl tracking-tight text-slate-100 font-instrument-serif font-normal">Execution</p>
</div>
<div className="text-2xl text-slate-600 hidden md:block font-instrument-serif font-normal">/</div>
<div className="text-center">
<p className="text-sm text-slate-400 tracking-widest uppercase font-sans">Engine</p>
<p className="text-3xl md:text-4xl tracking-tight text-slate-100 font-instrument-serif font-normal">Content</p>
</div>
<div className="text-2xl text-slate-600 hidden md:block font-instrument-serif font-normal">/</div>
<div className="text-center">
<p className="text-sm text-slate-400 tracking-widest uppercase font-sans">Moat</p>
<p className="text-3xl md:text-4xl tracking-tight text-slate-100 font-instrument-serif font-normal">Community</p>
</div>
</div>
</footer>
</div>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
