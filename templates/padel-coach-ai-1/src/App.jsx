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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="h-8 w-8 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden shadow-lg shadow-[#00eba4]/20 border border-[#00eba4]/30">
<img alt="Padel Coach AI Logo" className="w-full h-full object-cover" src="padel-logo.png"/>
</div>
<div className="text-sm font-semibold tracking-tighter uppercase text-slate-900">
                    PADEL COACH AI
                </div>
</div>
<a className="hidden sm:block text-xs font-medium text-slate-500 hover:text-[#00eba4] transition-colors" href="#">
                Download App
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00eba4]/10 to-transparent blur-3xl -z-10 rounded-full opacity-60 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00eba4] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d695]"></span>
</span>
<span className="text-xs font-medium text-slate-600">Now available on iOS</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Your Personal Padel Coach.<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00eba4] to-emerald-500">Powered by AI.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                Analyse your game, fix your technique, and train smarter — anytime, anywhere.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium text-sm transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(0,235,164,0.4)] border border-[#00eba4]/20">
<svg aria-hidden="true" className="iconify group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:apple" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
                    Download on the App Store
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-[#00eba4]/50 hover:text-[#00eba4] text-slate-700 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2">
                    See how it works
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#00eba4]/10 border border-[#00eba4]/20 flex items-center justify-center mb-6 text-[#00c98d] group-hover:scale-110 group-hover:bg-[#00eba4] group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">1. Record</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Record or upload a short padel clip directly from your phone.
                    </p>
</div>

<div className="group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#00eba4]/10 border border-[#00eba4]/20 flex items-center justify-center mb-6 text-[#00c98d] group-hover:scale-110 group-hover:bg-[#00eba4] group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">2. Analyse</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        AI analyses your movement, timing, and technique frame-by-frame.
                    </p>
</div>

<div className="group cursor-default">
<div className="w-12 h-12 rounded-2xl bg-[#00eba4]/10 border border-[#00eba4]/20 flex items-center justify-center mb-6 text-[#00c98d] group-hover:scale-110 group-hover:bg-[#00eba4] group-hover:text-white transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">3. Improve</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Get clear feedback, personalised drills, and progress tracking.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything you need to level up.</h2>
<p className="text-slate-500">Comprehensive tools for the modern player.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:scan-face" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m5-3s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">AI Video Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fix your technique instantly with clear, actionable feedback.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:dumbbell" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Personalised Drills</h3>
<p className="text-sm text-slate-500 leading-relaxed">Custom training drills tailored to your goals and weaknesses.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Progress Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Monitor your performance and rating improvements over time.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Coach Mode</h3>
<p className="text-sm text-slate-500 leading-relaxed">Ask tactical questions and get instant answers, 24/7.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Session Logging</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track matches, scores, opponents, and performance notes.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:utensils" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Meal Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Log nutrition to support energy, recovery, and consistency.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Injury &amp; Recovery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Monitor injuries, rehab progress, and recovery routines.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:tag" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Equipment Tracker</h3>
<p className="text-sm text-slate-500 leading-relaxed">Manage racket usage, grip changes, and gear condition.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:target" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Goals &amp; Milestones</h3>
<p className="text-sm text-slate-500 leading-relaxed">Set targets, stay motivated, and celebrate wins.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:timer" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Warm-up &amp; Cool-down</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pre-built routines designed specifically for padel sessions.</p>
</div>

<div className="flex flex-col gap-3 group">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-[#00eba4] transition-colors iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Training Buddies</h3>
<p className="text-sm text-slate-500 leading-relaxed">Connect and train with your padel partners.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-slate-100 relative overflow-hidden">
<div className="absolute -left-20 top-0 w-64 h-64 bg-[#00eba4]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<svg aria-hidden="true" className="iconify inline-block mb-6 text-[#00eba4] iconify--lucide" data-icon="lucide:quote" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xl md:text-2xl font-light text-slate-900 leading-relaxed">
                "Padel Coach AI is designed to support your training — not replace professional coaching. It gives you structure, clarity, and consistency so you can improve faster and play with confidence."
            </p>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="max-w-xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Train Smarter. Play Better.</h2>
<div className="flex flex-col items-center gap-4">
<button className="group w-full sm:w-auto px-10 py-4 bg-slate-900 hover:bg-black text-white rounded-full font-medium text-base shadow-[0_4px_14px_0_rgba(0,235,164,0.39)] border border-[#00eba4]/30 transition-all transform hover:-translate-y-1">
                    Download on the App Store
                </button>
<p className="text-xs text-slate-400 font-medium">No commitments. Cancel anytime.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-24">
<details className="group border border-slate-200 rounded-lg overflow-hidden bg-slate-50/30">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors select-none pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="font-medium text-sm text-slate-700">Privacy Policy</span>
<span className="chevron text-slate-400 transition-transform duration-300 group-hover:text-[#00eba4]">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:chevron-down" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(0, 235, 164)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 pt-2 text-sm text-slate-500 leading-relaxed space-y-4 border-t border-slate-100 bg-white">
<p className="font-medium text-slate-900">Privacy Policy – Padel Coach AI</p>
<p>Padel Coach AI respects your privacy and is committed to protecting your data.</p>
<div>
                    
                    We may collect videos you upload for analysis, training logs, goals, session notes, and basic account information if provided.
                </div>
<div>
                    
                    Videos are used only to generate performance feedback. Video files may be temporarily stored and automatically deleted after processing. AI-generated feedback is for training and informational purposes only.
                </div>
<div>
                    
                    Injury, recovery, and nutrition features are optional and user-entered. This information is not medical advice.
                </div>
<div>
                    
                    Your data is used solely to provide and improve the app experience. We do not sell personal data or use it for advertising.
                </div>
<div>
                    
                    You can delete your videos and data at any time. You may request access to or removal of your data.
                </div>
<div>
                    
                    We use reasonable technical measures to protect your information.
                </div>
<div>
                    
                    Padel Coach AI is not intended for children under 13.
                </div>
</div>
</details>
</section>

<footer className="bg-white border-slate-100 border-t pt-12 pb-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex gap-6 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
<a className="hover:text-slate-900 transition-colors" href="#">App Store</a>
</div>
<div className="text-xs text-slate-400">
                © Padel Coach AI. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
