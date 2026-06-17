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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-stone-900" href="#">
<span className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center text-white text-xs">H</span>
                HEALTHIFYME RX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-stone-900 transition-colors" href="#programs">Plans</a>
<a className="hover:text-stone-900 transition-colors" href="#ai-tech">Care model</a>
<a className="hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Log In</a>
<a className="bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-stone-800 transition-colors" href="#download">
                    Start assessment
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-stone-50 to-stone-50 -z-10"></div>
<div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 shadow-sm text-emerald-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Check eligibility in minutes
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-stone-900 mb-6 leading-[1.1]">
                    Doctor‑guided medical weight loss.
                    <span className="text-stone-400">Personalized and safe.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                    A comprehensive program with licensed clinicians, medications when appropriate (including GLP‑1s), nutrition coaching, and ongoing support to help you lose weight sustainably.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-700 text-white font-medium rounded-full hover:bg-emerald-800 transition-all group shadow-xl shadow-emerald-200/50" href="#download">
                        Start eligibility check
                        <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white border border-stone-200 text-stone-700 font-medium rounded-full hover:bg-stone-50 transition-colors shadow-sm" href="#how-it-works">
                        See how it works
                    </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-stone-500 border-t border-stone-200/60 pt-6">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-stone-50 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-stone-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-[3px] border-stone-50 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<p className="font-semibold text-stone-900">Thousands of patients</p>
<p className="text-xs">Enrolled in our RX care program</p>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] flex items-center justify-center">

<div className="absolute inset-0 bg-stone-200 rounded-[2.5rem] rotate-3 overflow-hidden shadow-2xl shadow-stone-200">
<img alt="Healthy lifestyle" className="w-full h-full object-cover opacity-90 scale-105" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-5 border border-white/50 animate-float-slow">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-xs font-bold text-stone-400 uppercase tracking-wider">Your Care Plan</p>
<p className="text-sm font-semibold text-stone-900">GLP‑1 + Nutrition Coaching</p>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center">
<i className="w-4 h-4 text-stone-400" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-stone-600">Eligibility</span>
<span className="text-emerald-600 font-bold">85%</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full w-[85%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-stone-600">Onboarding</span>
<span className="text-emerald-600 font-bold">Day 2 of 7</span>
</div>
<div className="w-full bg-stone-100 rounded-full h-2">
<div className="bg-stone-800 h-2 rounded-full w-[28%]"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-12 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3 animate-float-fast">
<div className="bg-orange-50 p-2 rounded-lg text-orange-600">
<i className="w-4 h-4" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-[10px] text-stone-400 font-bold uppercase">Medication</p>
<p className="text-sm font-bold text-stone-900">Prescribed if eligible</p>
</div>
</div>

<div className="absolute bottom-40 -left-6 bg-white px-4 py-3 rounded-xl shadow-lg border border-stone-100 flex items-center gap-3 animate-float-fast hidden md:flex">
<div className="bg-blue-50 p-2 rounded-lg text-blue-600">
<i className="w-4 h-4" data-lucide="heart-pulse" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-[10px] text-stone-400 font-bold uppercase">Monitoring</p>
<p className="text-sm font-bold text-stone-900">Ongoing care &amp; check‑ins</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="stethoscope" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Licensed Clinicians</h3>
<p className="text-xs text-stone-500">Medical oversight</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Medications</h3>
<p className="text-xs text-stone-500">Including GLP‑1s if eligible</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Nutrition Coaching</h3>
<p className="text-xs text-stone-500">Personalized plans</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="beaker" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Labs &amp; Monitoring</h3>
<p className="text-xs text-stone-500">Track progress safely</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3 group">
<div className="p-3 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-stone-900" data-lucide="life-buoy" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-medium text-stone-900 text-sm mb-1">Ongoing Support</h3>
<p className="text-xs text-stone-500">Care team check‑ins</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="ai-tech">
<div className="max-w-7xl mx-auto px-6">
<div className="lg:flex gap-16 items-center">
<div className="lg:w-1/2 mb-12 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                        A clinical care model.<br/>Personalized for <span className="text-emerald-600">you.</span>
</h2>
<p className="text-stone-500 leading-relaxed mb-8">
                        Your program is built by clinicians and guided by data to ensure safety and results. We evaluate:
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm text-emerald-600">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900">Medical History &amp; Vitals</h3>
<p className="text-sm text-stone-500 mt-1">Eligibility screening and health risk assessment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm text-emerald-600">
<i className="w-5 h-5" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900">Medication Suitability</h3>
<p className="text-sm text-stone-500 mt-1">GLP‑1s and other options when clinically appropriate.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm text-emerald-600">
<i className="w-5 h-5" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900">Lifestyle &amp; Coaching</h3>
<p className="text-sm text-stone-500 mt-1">Nutrition, movement, and behavior support for lasting change.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="relative bg-emerald-900 rounded-3xl p-8 overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20"></div>
<div className="relative z-10 text-white">
<div className="flex items-center gap-3 mb-8 opacity-80">
<i className="w-5 h-5 text-emerald-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xs font-mono tracking-widest uppercase">Assessment Ready</span>
</div>
<div className="space-y-4 font-mono text-sm">
<div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
<div className="flex justify-between mb-2 text-emerald-100">
<span>Eligibility Score</span>
<span>Pre‑qualified</span>
</div>
<div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-400 h-full w-[78%]"></div>
</div>
</div>
<div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
<div className="flex justify-between mb-2 text-emerald-100">
<span>Clinical Risk</span>
<span>Low</span>
</div>
<div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-400 h-full w-[25%]"></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-emerald-200 mb-2">Next Step:</p>
<p className="text-xl font-semibold">Book a video consult with your clinician</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Choose the plan that fits your needs</h2>
<p className="text-stone-500 max-w-2xl mx-auto">From medication‑assisted programs to lifestyle‑only options. Your clinician will help you decide what’s right for you.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="GLP‑1 Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-emerald-500/80 backdrop-blur-md px-2 py-1 rounded">Most Popular</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">GLP‑1 Program</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            Clinician‑guided program with GLP‑1s when appropriate, plus nutrition and behavior coaching for sustainable results.
                        </p>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Doctor consults &amp; ongoing care</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Medication eligibility &amp; management</li>
</ul>
</div>
</div>

<div className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Metabolic Reset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-emerald-500/80 backdrop-blur-md px-2 py-1 rounded">Clinician Led</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Metabolic Reset</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            Non‑GLP‑1 medication options and tailored nutrition protocols to improve metabolic health under medical supervision.
                        </p>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Personalized medication plan</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Nutrition &amp; habit coaching</li>
</ul>
</div>
</div>

<div className="group bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Lifestyle Plan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<span className="text-xs font-medium bg-emerald-500/80 backdrop-blur-md px-2 py-1 rounded">No Medication</span>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Lifestyle‑Only Plan</h3>
<p className="text-sm text-stone-500 mb-6 leading-relaxed">
                            Structured nutrition, movement, and behavior support for those who prefer a non‑medication approach.
                        </p>
<ul className="space-y-2 mb-6 text-sm text-stone-600">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Coaching &amp; accountability</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-emerald-600" data-lucide="check" strokeWidth="1.5"></i> Personalized meal guidance</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12 text-center">What’s included in your care</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-stone-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="video" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Clinician Consults</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Video visits with licensed providers for evaluation, prescription decisions, and follow‑ups.
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="beaker" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Labs &amp; Screening</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Relevant labs and health checks to ensure medications and plans are safe and effective for you.
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Medication Management</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            If eligible, your provider will prescribe and monitor medications, adjusting as needed.
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-stone-100 flex gap-6 items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="life-buoy" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Coaching &amp; Support</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Ongoing nutrition guidance, habit coaching, and check‑ins to keep you on track.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-200 -z-10"></div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-emerald-700 text-white rounded-full flex items-center justify-center font-semibold mb-6 shadow-lg shadow-emerald-100 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Check eligibility</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Complete a quick assessment to see if the program is right for you.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Meet your clinician</h3>
<p className="text-sm text-stone-500 text md:text-left">A licensed provider reviews your history and discusses options.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Start your plan</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Begin medications if eligible and follow your tailored coaching plan.</p>
</div>

<div className="relative bg-white pt-8">
<div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2 text-center md:text-left">Ongoing support</h3>
<p className="text-sm text-stone-500 text-center md:text-left">Regular check‑ins, adjustments, and tracking to stay on course.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-stone-900 mb-16">Member results</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">“Having a doctor guide my plan made all the difference. The medication and coaching combo helped me stay consistent and finally see real progress.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold">AK</div>
<div>
<p className="text-sm font-semibold text-stone-900">Anita K.</p>
<p className="text-xs text-stone-500">GLP‑1 Program</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">“The check‑ins kept me accountable. My plan was adjusted based on my progress, which kept the momentum going.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold">DM</div>
<div>
<p className="text-sm font-semibold text-stone-900">Dev M.</p>
<p className="text-xs text-stone-500">Metabolic Reset</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-stone-700 text-sm mb-6 leading-relaxed">“I chose the lifestyle‑only plan and still got amazing support. The structure and coaching helped me build habits that stuck.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 font-bold">SJ</div>
<div>
<p className="text-sm font-semibold text-stone-900">Sara J.</p>
<p className="text-xs text-stone-500">Lifestyle‑Only Plan</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-50" id="download">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
<div>
<h2 className="text-2xl font-semibold text-stone-900 mb-2">Begin your eligibility assessment</h2>
<p className="text-stone-500">Answer a few questions and connect with a licensed clinician.</p>
</div>
<div className="flex gap-4">
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> Begin Assessment
                    </button>
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> Talk to an Expert
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-stone-900 mb-6" href="#">
<span className="w-5 h-5 bg-emerald-600 rounded flex items-center justify-center text-white text-[10px]">H</span>
                         HEALTHIFYME RX
                    </a>
<p className="text-sm text-stone-500 mb-6">Clinician‑guided medical weight loss with medications, nutrition, and ongoing support.</p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-stone-400 hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-stone-400 hover:text-emerald-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Plans</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">GLP‑1 Program</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Metabolic Reset</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Lifestyle‑Only Plan</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact Support</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Medical Disclaimer</a></li>
</ul>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2026 HealthifyMe RX. All rights reserved.</p>
<div className="flex gap-6 text-xs text-stone-400">
<p>Not medical advice. Consult a licensed clinician before starting.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
