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
      

<nav className="fixed z-50 glass-card w-full border-white/10 border-b top-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center font-poppins font-semibold text-sm" style={{letterSpacing: '-0.05em'}}>NA</div>
<span className="font-poppins font-semibold text-lg tracking-tight">Nourish AI</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#demo">Demo</a>
</div>
<div className="flex items-center space-x-3">
<button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">Login</button>
<button className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg hover:from-violet-500 hover:to-blue-500 transition-all glow-border">Start Free</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">

<div className="overflow-hidden absolute top-0 right-0 bottom-0 left-0">
<div className="animate-pulse-glow bg-violet-600/20 w-96 h-96 rounded-full absolute top-20 left-10 blur-3xl"></div>
<div className="animate-pulse-glow bg-blue-600/20 w-96 h-96 rounded-full absolute right-10 bottom-20 blur-3xl" style={{animationDelay: '1.5s'}}></div>
<div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{animationDelay: '3s'}}></div>
</div>
<div className="relative max-w-7xl mx-auto text-center z-10">

<div className="flex mb-12 justify-center">
<div className="relative animate-float">
</div>
</div>

<h1 className="sm:text-6xl lg:text-7xl bg-clip-text text-5xl font-semibold text-transparent tracking-tight font-poppins bg-gradient-to-r from-white via-violet-200 to-blue-200 mb-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)'}}>
    Your Intelligent MBA &amp; CAT<br className=""/>Preparation Ecosystem
</h1>
<p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                Algorithmic guidance through every step — CV building, college prediction, SOP generation, and CAT prep. Transparent, personalized, and built for Top 50 B-Schools.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl font-medium text-lg hover:from-violet-500 hover:to-blue-500 transition-all glow-border-blue transform hover:scale-105 w-full sm:w-auto">
                    Start Your Journey
                </button>
<button className="px-8 py-4 glass-card rounded-xl font-medium text-lg hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2 w-full sm:w-auto">
<svg className="lucide lucide-play-circle" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    See How It Works
                </button>
</div>

<div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<p className="text-sm text-slate-200">AI-powered. Data-driven. Designed for CAT aspirants &amp; MBA dreamers.</p>
</div>
</div>
</section>

<section className="relative py-24 px-4" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-4">Four Intelligent Modules</h2>
<p className="text-lg text-slate-400">Each powered by adaptive algorithms and transparent feedback</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 glow-border group">
<div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="font-poppins font-semibold text-xl mb-3 tracking-tight">CV Builder</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">Stepwise AI nudging with template selection &amp; interview prep</p>
<div className="flex items-center gap-2 text-xs text-violet-400">
<span className="px-2 py-1 bg-violet-500/20 rounded">Free</span>
<span className="px-2 py-1 bg-blue-500/20 rounded">Paid</span>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 glow-border group">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="font-poppins font-semibold text-xl mb-3 tracking-tight">College Predictor</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">Real-time matching for Top 50 B-Schools with transparent probability</p>
<div className="flex items-center gap-2 text-xs text-blue-400">
<span className="px-2 py-1 bg-blue-500/20 rounded">Algorithm-based</span>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 glow-border group">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pen-tool" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-poppins font-semibold text-xl mb-3 tracking-tight">SOP Generator</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">CV-integrated drafts aligned to college-specific criteria</p>
<div className="flex items-center gap-2 text-xs text-purple-400">
<span className="px-2 py-1 bg-purple-500/20 rounded">Paid</span>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 glow-border group">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-book-open" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="font-poppins font-semibold text-xl mb-3 tracking-tight">Knowledge Vault</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">Curated MBA &amp; CAT flashcards: QA, VARC, DILR, GK</p>
<div className="flex items-center gap-2 text-xs text-green-400">
<span className="px-2 py-1 bg-green-500/20 rounded">Trending Topics</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-4 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-4">How Our Algorithm Works</h2>
<p className="text-lg text-slate-400">Transparent, adaptive, and personalized at every step</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center font-semibold">1</div>
<div>
<h3 className="font-poppins font-semibold text-lg mb-2">Input Initiation &amp; User Profiling</h3>
<p className="text-slate-400 text-sm">System identifies you as Student / Working Professional / Fresher and adapts questioning complexity accordingly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-semibold">2</div>
<div>
<h3 className="font-poppins font-semibold text-lg mb-2">AI Nudging &amp; Data Collection</h3>
<p className="text-slate-400 text-sm">Stepwise structured questions with real-time feedback: "This detail improves your profile visibility by X%"</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center font-semibold">3</div>
<div className="">
<h3 className="font-poppins font-semibold text-lg mb-2">Algorithmic Matching &amp; Prediction</h3>
<p className="text-slate-400 text-sm">Weightage formula: (CAT % × 0.5) + (Work Exp × 0.3) + (Academics × 0.2) for Top 50 B-Schools</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center font-semibold">4</div>
<div>
<h3 className="font-poppins font-semibold text-lg mb-2">Output Generation &amp; Recommendations</h3>
<p className="text-slate-400 text-sm">Personalized CV, college predictions with likelihood scores, SOP drafts, and curated flashcard recommendations</p>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8">
<h3 className="font-poppins font-semibold text-xl mb-6">Live Transparency Example</h3>
<div className="space-y-4">
<div className="glass-card-light text-slate-900 rounded-lg p-4">
<div className="flex items-start gap-3 mb-2">
<svg className="lucide lucide-user text-violet-600 mt-1" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="flex-1">
<p className="text-sm font-medium">What's your CGPA?</p>
<p className="text-xs text-slate-600 mt-1">Input: 8.2</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600"></div>
<svg className="lucide lucide-arrow-down text-violet-400" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<div className="glass-card rounded-lg p-4 border border-violet-500/30">
<div className="flex items-start gap-3">
<svg className="lucide lucide-sparkles text-violet-400 mt-1" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="flex-1">
<p className="text-sm font-medium text-violet-300">AI Feedback</p>
<p className="text-xs text-slate-400 mt-1">"Your 8.2 CGPA places you in the 75th percentile. This strengthens your profile for IIM Lucknow, XLRI, and FMS Delhi."</p>
<div className="mt-3 flex items-center gap-2">
<div className="h-2 flex-1 bg-slate-700 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-violet-500 to-blue-500"></div>
</div>
<span className="text-xs text-violet-400 font-medium">75%</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
<svg className="lucide lucide-arrow-down text-blue-400" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<div className="glass-card-light text-slate-900 rounded-lg p-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-target text-blue-600 mt-1" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="flex-1">
<p className="text-sm font-medium">College Match Results</p>
<div className="mt-2 space-y-2">
<div className="flex justify-between items-center text-xs">
<span className="">IIM Lucknow</span>
<span className="px-2 py-0.5 bg-green-500/20 text-green-700 rounded">High Match</span>
</div>
<div className="flex justify-between items-center text-xs">
<span>XLRI Jamshedpur</span>
<span className="px-2 py-0.5 bg-green-500/20 text-green-700 rounded">High Match</span>
</div>
<div className="flex justify-between items-center text-xs">
<span>FMS Delhi</span>
<span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-700 rounded">Good Match</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-4">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-4">Module Breakdown</h2>
<p className="text-lg text-slate-400">Deep dive into each algorithmic system</p>
</div>
<div className="space-y-8">

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all">
<div className="flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/3">
<div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-file-text" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="font-poppins font-semibold text-2xl mb-2">CV Builder Module</h3>
<p className="text-sm text-violet-400">Free + Paid Tiers</p>
</div>
<div className="lg:w-2/3 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">User Type Selection:</span> Student / Working Professional / Fresher — adaptive questioning complexity</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">AI Nudging:</span> Stepwise questions with real-time profile improvement feedback</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Template Selection:</span> Professional layouts optimized for Top 50 B-Schools</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Output:</span> Free users get basic CV. Paid users get AI improvement suggestions + interview readiness score</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all">
<div className="flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/3">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-target" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="font-poppins font-semibold text-2xl mb-2">College Predictor</h3>
<p className="text-sm text-blue-400">Top 50 B-Schools Database</p>
</div>
<div className="lg:w-2/3 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Data Collection:</span> CGPA, Degree, Work Experience, CAT Percentile, Location &amp; Fee Preferences</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Weightage Formula:</span> (CAT % × 0.5) + (Work Exp × 0.3) + (Academics × 0.2)</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Real-time Probability:</span> Displays admission likelihood per school with transparent reasoning</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Post-Prediction:</span> Suggests SOP building for top 3 matched schools + relevant Knowledge Vault content</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all">
<div className="flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/3">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-pen-tool" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-poppins font-semibold text-2xl mb-2">SOP Generator</h3>
<p className="text-sm text-purple-400">CV-Integrated / Manual Input</p>
</div>
<div className="lg:w-2/3 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Input Source:</span> Import from CV Builder or manual entry via AI nudging</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">AI Draft Generation:</span> Templates aligned with Top 50 B-Schools criteria</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Feedback Transparency:</span> Every AI edit shows reason: "This phrasing aligns better with IIM interview criteria"</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Dynamic Adjustment:</span> Nudging adapts based on specialization (Leadership for IIMs, Analytics for ISB)</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all">
<div className="flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/3">
<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
<svg className="lucide lucide-book-open" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<h3 className="font-poppins font-semibold text-2xl mb-2">Knowledge Vault</h3>
<p className="text-sm text-green-400">Curated MBA &amp; CAT Content</p>
</div>
<div className="lg:w-2/3 space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Content Categories:</span> Quantitative Aptitude, VARC, DILR, Current Affairs, Business GK</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Trending Topics:</span> Auto-curated from latest MBA and CAT preparation data</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">Focus Areas:</span> CAT Prep / MBA Interview / General Knowledge — user selects, AI recommends packs</p>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-check-circle text-green-400 mt-1 flex-shrink-0" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-slate-300"><span className="font-medium">No Uploads:</span> All content managed and curated by Nourish AI — no user content creation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-4">Trusted by CAT Aspirants</h2>
<p className="text-lg text-slate-400">Join 10,000+ students targeting Top 50 Indian B-Schools</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
<div className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-4">"The college predictor's transparency helped me focus on the right targets. Got into IIM Lucknow!"</p>
<p className="text-sm text-slate-500">— Priya Sharma, IIM-L</p>
</div>
<div className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-4">"AI feedback on my CV was spot-on. The interview prep questions were exactly what I faced at XLRI."</p>
<p className="text-sm text-slate-500">— Rahul Verma, XLRI</p>
</div>
<div className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 mb-4">"The SOP generator understood my story better than I did. Got admits from 3 top B-schools!"</p>
<p className="text-sm text-slate-500">— Ananya Singh, FMS Delhi</p>
</div>
</div>

<div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">IIM Ahmedabad</div>
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">IIM Bangalore</div>
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">IIM Lucknow</div>
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">XLRI</div>
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">FMS Delhi</div>
<div className="glass-card px-6 py-3 rounded-lg text-sm font-medium">ISB</div>
</div>
</div>
</section>


<section className="relative py-24 px-4" id="demo">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-4">Experience the Algorithm</h2>
<p className="text-lg text-slate-400">See real-time AI nudging and transparent feedback in action</p>
</div>

<div className="glass-card rounded-2xl p-8 glow-border">
<div className="space-y-4 mb-6">

<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="glass-card-light text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
<p className="text-sm">Hi! Let's build your MBA profile. Are you a Student, Working Professional, or Fresher?</p>
</div>
</div>

<div className="flex items-start gap-3 justify-end">
<div className="bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
<p className="text-sm">Working Professional with 2 years experience</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="glass-card-light text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
<p className="text-sm">Great! Your work experience adds <span className="font-semibold text-violet-700">30% weightage</span> to college predictions. What's your CAT percentile?</p>
</div>
</div>

<div className="flex items-start gap-3 justify-end">
<div className="bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-md">
<p className="text-sm">95 percentile</p>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="glass-card-light text-slate-900 rounded-2xl rounded-tl-sm px-4 py-3 max-w-md">
<p className="text-sm mb-2">Excellent! Based on: CAT 95% × 0.5 + 2yr Exp × 0.3, your top matches are:</p>
<div className="space-y-1 text-xs">
<div className="flex justify-between items-center bg-green-100 px-2 py-1 rounded">
<span>IIM Lucknow</span>
<span className="font-semibold text-green-700">High Match</span>
</div>
<div className="flex justify-between items-center bg-green-100 px-2 py-1 rounded">
<span>XLRI</span>
<span className="font-semibold text-green-700">High Match</span>
</div>
<div className="flex justify-between items-center bg-yellow-100 px-2 py-1 rounded">
<span>FMS Delhi</span>
<span className="font-semibold text-yellow-700">Good Match</span>
</div>
</div>
</div>
</div>
</div>
<div className="text-center pt-4 border-t border-white/10">
<button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg font-medium hover:from-violet-500 hover:to-blue-500 transition-all inline-flex items-center gap-2">
<svg className="lucide lucide-play" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                        Try Full Interactive Demo
                    </button>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-4">
<div className="max-w-4xl mx-auto text-center">
<div className="glass-card rounded-3xl p-12 glow-border-blue">
<h2 className="font-poppins font-semibold text-4xl sm:text-5xl tracking-tight mb-6">Start Your MBA Journey Today</h2>
<p className="text-lg text-slate-300 mb-8">Join 10,000+ CAT aspirants using algorithmic intelligence</p>
<div className="max-w-md mx-auto space-y-4">
<input className="w-full px-4 py-3 glass-card rounded-lg border border-white/20 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-white placeholder-slate-400" placeholder="Enter your email" type="email"/>
<input className="w-full px-4 py-3 glass-card rounded-lg border border-white/20 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-white placeholder-slate-400" placeholder="Create password" type="password"/>
<button className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg font-medium text-lg hover:from-violet-500 hover:to-blue-500 transition-all">
                        Sign Up Free
                    </button>
<button className="w-full py-4 glass-card rounded-lg font-medium hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20">
<path d="M19.8 10.2273C19.8 9.51819 19.7364 8.83637 19.6182 8.18182H10V12.05H15.5818C15.3364 13.3 14.6091 14.3591 13.5273 15.0682V17.5773H16.8182C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"></path>
<path d="M10 20C12.7 20 14.9636 19.1045 16.8182 17.5773L13.5273 15.0682C12.6136 15.6682 11.4818 16.0227 10 16.0227C7.39545 16.0227 5.19091 14.2636 4.40455 11.9H0.995453V14.4909C2.84091 18.1591 6.15909 20 10 20Z" fill="#34A853"></path>
<path d="M4.40455 11.9C4.19091 11.3 4.06818 10.6591 4.06818 10C4.06818 9.34091 4.19091 8.7 4.40455 8.1V5.50909H0.995453C0.359091 6.77273 0 8.18182 0 10C0 11.8182 0.359091 13.2273 0.995453 14.4909L4.40455 11.9Z" fill="#FBBC04"></path>
<path d="M10 3.97727C11.6045 3.97727 13.0455 4.53182 14.1818 5.61364L17.0955 2.7C15.0091 0.781818 12.7 0 10 0C6.15909 0 2.84091 1.84091 0.995453 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z" fill="#EA4335"></path>
</svg>
                        Continue with Google
                    </button>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10 py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center space-x-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center font-poppins font-semibold text-sm" style={{letterSpacing: '-0.05em'}}>NA</div>
<span className="font-poppins font-semibold text-lg tracking-tight">Nourish AI</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed">Algorithmic intelligence<br/>for MBA aspirants.</p>
</div>
<div>
<h4 className="font-semibold mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">CV Builder</a></li>
<li><a className="hover:text-white transition-colors" href="#">College Predictor</a></li>
<li><a className="hover:text-white transition-colors" href="#">SOP Generator</a></li>
<li><a className="hover:text-white transition-colors" href="#">Knowledge Vault</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">© 2024 Nourish AI. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all glow-border group" href="#">
<svg className="lucide lucide-twitter text-slate-400 group-hover:text-white transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all glow-border group" href="#">
<svg className="lucide lucide-linkedin text-slate-400 group-hover:text-white transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-white/10 transition-all glow-border group" href="#">
<svg className="lucide lucide-instagram text-slate-400 group-hover:text-white transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
