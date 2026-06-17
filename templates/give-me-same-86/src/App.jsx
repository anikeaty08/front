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
      

<div className="fixed top-0 left-0 right-0 h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050810]/80 to-[#050810] pointer-events-none z-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-800/30 rounded-full pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-slate-800/20 rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">

<div className="flex flex-col items-center text-center mb-20 space-y-6">
<div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-3 py-1 text-sm font-medium text-cyan-400 shadow-lg shadow-cyan-900/20 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span>AI-Powered LMS Platform</span>
</div>
<div className="space-y-2">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-cyan-500 to-blue-600">
                    CorpTrainer.ai
                </h1>
<p className="text-xl md:text-2xl text-slate-400 font-light tracking-tight">
                    The AI-First Learning Management System
                </p>
</div>
</div>

<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 relative">

<button className="hidden xl:flex absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all z-20">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<button className="hidden xl:flex absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all z-20">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>

<div className="space-y-8">

<div className="flex items-center space-x-4 mb-8">
<div className="flex items-center justify-center w-8 h-8 bg-cyan-900/30 border border-cyan-800 rounded text-cyan-400 font-medium text-sm">01</div>
<div className="h-px bg-slate-800 flex-1"></div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">The Core Platform</span>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">1</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Private AI Training</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Turn Static Content into Active Learning.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">Stop forcing employees to read giant, boring PDFs. We turn your manuals and videos into an interactive 'Private Brain' that learns strictly from your data.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">2</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Rapid Course Builder</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Upload. Organize. Launch.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">Build a course in minutes. Simply upload videos and guides; the AI trains instantly, allowing you to update training as fast as business changes.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">3</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Unified Media Integration</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">All Your Formats in One Place.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">Don't fragment the learning experience. Seamlessly blend videos, text guides, and PDF documents into one cohesive timeline.</p>
</div>
</div>
</div>

<div className="space-y-8">

<div className="flex items-center space-x-4 mb-8">
<div className="flex items-center justify-center w-8 h-8 bg-cyan-900/30 border border-cyan-800 rounded text-cyan-400 font-medium text-sm">02</div>
<div className="h-px bg-slate-800 flex-1"></div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">The Learning Experience</span>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">4</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Industrial-Grade Streaming</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">YouTube-Quality Playback.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">No buffering, no lag. Your course videos stream in high resolution with smart caching. A smooth experience, whether in the office or on the go.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">5</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="message-square-text" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">On-Demand Assistance</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">The 'Super Teacher' at Their Side.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">A dedicated AI tutor. Employees can ask contextual questions inside a video lesson or search the entire company library for specific answers instantly.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">6</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Trustworthy Infrastructure</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Answers You Can Verify.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">No hallucinations. Unlike public tools, our AI cites the exact source document for every answer, providing total transparency and trust.</p>
</div>
</div>
</div>

<div className="space-y-8">

<div className="flex items-center space-x-4 mb-8">
<div className="flex items-center justify-center w-8 h-8 bg-cyan-900/30 border border-cyan-800 rounded text-cyan-400 font-medium text-sm">03</div>
<div className="h-px bg-slate-800 flex-1"></div>
<span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">Assessment &amp; Control</span>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">7</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="clipboard-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Verification Gates</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Test Understanding, Not Just Memory.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">Verify that your team actually 'gets it.' Use built-in tools to create single and multi-choice quizzes that confirm mastery before moving forward.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">8</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Managerial Insights</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Track, Measure, and Support.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">Get detailed LMS reporting on exactly where every student stands. Manage roles and permissions easily to identify knowledge gaps.</p>
</div>
</div>

<div className="relative group">
<div className="absolute -top-3 -left-3 md:-left-4 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-400 text-slate-900 font-bold text-sm shadow-lg shadow-cyan-400/20">9</div>
<div className="h-full p-6 bg-[#0B1221]/80 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md">
<div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/50 text-cyan-400">
<i className="w-5 h-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-1 tracking-tight">Private &amp; Secure</h3>
<p className="text-sm font-medium text-cyan-400 mb-3">Your Data, Your Vault.</p>
<p className="text-sm text-slate-400 leading-relaxed font-light">We treat your data like a trade secret. Your custom private AI never touches the public cloud and never leaves our secure servers. Zero data leakage.</p>
</div>
</div>
</div>
</div>

<div className="mt-20 flex flex-col items-center space-y-4">
<div className="flex space-x-2">
<div className="w-10 h-1.5 bg-cyan-400 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
</div>
<div className="px-5 py-2 bg-slate-900/80 border border-slate-800 rounded-full text-sm text-slate-500 backdrop-blur-sm">
                Slide 1 of 2 • Click arrows to navigate
            </div>
</div>
</div>


    </>
  );
}
