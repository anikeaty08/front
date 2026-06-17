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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<span>edusecure</span>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
<div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">R</div>
<span className="text-sm font-medium text-slate-700">rayhanrnsl</span>
</div>
<button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
<span>Logout</span>
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-12">

<div className="mb-16">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-4 uppercase">
                Student Dashboard
            </h1>
<p className="text-lg text-gray-500 font-light max-w-xl">
                Welcome back, mate. Track your progress and master new security concepts today.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<section>
<div className="flex items-center gap-2 mb-6">
<span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i> Performance Overview
                        </span>
</div>
<div className="bg-gray-50 rounded-[2.5rem] p-10 min-h-[300px] flex flex-col items-center justify-center text-center relative overflow-hidden group border border-gray-100">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="relative z-10">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-gray-200/50">
<i className="w-8 h-8 text-gray-300" data-lucide="activity"></i>
</div>
<h3 className="text-2xl font-semibold mb-2 text-slate-900">No quiz history found</h3>
<p className="text-gray-400 font-light max-w-sm mx-auto">
                                You haven't started any assessments yet. Start a module below to begin tracking your journey.
                            </p>
<p className="text-xs text-gray-300 mt-4 font-mono">Belum ada riwayat kuis</p>
</div>
</div>
</section>

<section>
<div className="flex items-end justify-between mb-8">
<h2 className="text-3xl font-semibold tracking-tight">Available Modules</h2>
<span className="text-sm text-gray-400 font-light">4 modules available</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
<i className="w-6 h-6 text-black group-hover:text-white transition-colors" data-lucide="shield"></i>
</div>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Beginner</span>
</div>
<h3 className="text-xl font-semibold mb-2">Basic Security Concepts</h3>
<p className="text-gray-500 text-sm font-light mb-6">Intro to InfoSec. Learn the fundamentals of protecting digital assets.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-2">
                                Start Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
<i className="w-6 h-6 text-black group-hover:text-white transition-colors" data-lucide="network"></i>
</div>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Beginner</span>
</div>
<h3 className="text-xl font-semibold mb-2">Network Protocols</h3>
<p className="text-gray-500 text-sm font-light mb-6">TCP/IP Model. Understand how data moves across the web securely.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-2">
                                Start Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
<i className="w-6 h-6 text-black group-hover:text-white transition-colors" data-lucide="bot"></i>
</div>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Beginner</span>
</div>
<h3 className="text-xl font-semibold mb-2">AI for Lazy bois</h3>
<p className="text-gray-500 text-sm font-light mb-6">Intro to AI. Automate your tasks and understand machine learning basics.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-2">
                                Start Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
<i className="w-6 h-6 text-black group-hover:text-white transition-colors" data-lucide="code-2"></i>
</div>
<span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full font-medium">Beginner</span>
</div>
<h3 className="text-xl font-semibold mb-2">Python Data Science</h3>
<p className="text-gray-500 text-sm font-light mb-6">Data Science. Analyze data sets effectively using Python libraries.</p>
<button className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center gap-2">
                                Start Module <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
</div>

<aside className="lg:col-span-4 space-y-8">
<div className="bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden flex flex-col min-h-[600px] sticky top-24">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="sparkles"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight">AI Insights</h2>
</div>
<div className="mb-8">
<p className="text-gray-400 font-light text-sm mb-2">Adaptive path based on:</p>
<div className="flex items-center justify-between bg-gray-800/50 p-3 rounded-xl border border-gray-700">
<span className="text-sm font-medium">Your learning style</span>
<button className="text-xs text-emerald-400 hover:text-emerald-300 font-medium">Change</button>
</div>
</div>
<div className="space-y-4 flex-1">

<div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wide">Recommended</span>
</div>
<h3 className="font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">AI for Lazy bois</h3>
<p className="text-gray-500 text-xs font-light mb-4">High completion rate for students like you.</p>
<div className="flex items-center text-sm font-medium text-white">
                                    Start Learning 
                                    <i className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-gray-800/40 p-5 rounded-2xl border border-gray-700/50 hover:bg-gray-800 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="bg-blue-500/10 text-blue-400 text-[10px] px-2 py-0.5 rounded border border-blue-500/20 uppercase tracking-wide">Trending</span>
</div>
<h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">Python for Data Science</h3>
<p className="text-gray-500 text-xs font-light mb-4">Essential skill for modern security analysis.</p>
<div className="flex items-center text-sm font-medium text-white">
                                    Start Learning 
                                    <i className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-800">
<button className="w-full bg-white text-black py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                                View Full Report
                            </button>
</div>
</div>
</div>
</aside>
</div>
</main>

<footer className="border-t border-gray-100 mt-12 py-12 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 font-semibold text-lg tracking-tight mb-6 opacity-50 grayscale">
<div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
<svg className="w-3 h-3 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<span>edusecure</span>
</div>
<p className="text-sm text-gray-400 font-light">© 2024 Edusecure. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
