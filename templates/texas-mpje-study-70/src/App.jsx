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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
medical: {
50: '#f0fdf9',
100: '#ccfbf1',
500: '#14b8a6', // Teal
600: '#0d9488',
900: '#134e4a',
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-gradient-to-br from-medical-500 to-teal-700 rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="iconify" data-icon="lucide:cross" data-strokeWidth="2.5"></span>
</div>
<span className="text-lg font-medium tracking-tighter text-slate-900">mpje.io</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-medical-600 transition-colors" href="#">Study Material</a>
<a className="hover:text-medical-600 transition-colors" href="#">Practice Exams</a>
<a className="hover:text-medical-600 transition-colors" href="#">Flashcards</a>
<a className="hover:text-medical-600 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/5 hover:shadow-md" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-medical-100/40 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
<div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-medical-600"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-tight">Updated for 2026 Texas State Board Rules</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 max-w-4xl">
                Pass the Texas MPJE <br className="hidden md:block"/> with confidence.
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
                The most accurate, comprehensive, and up-to-date pharmacy law platform. Master controlled substances, dispensing limits, and state regulations without the fluff.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-medical-600 text-white font-medium hover:bg-medical-700 transition-all shadow-lg shadow-medical-500/20 flex items-center justify-center gap-2">
                    Start Learning
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5"></span>
                    View Demo
                </button>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-80">
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">2,500+</span>
<span className="text-sm text-slate-500">Pharmacists Licensed</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">98%</span>
<span className="text-sm text-slate-500">Pass Rate</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">500+</span>
<span className="text-sm text-slate-500">Practice Questions</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-sm text-slate-500">Law Updates</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="absolute -inset-4 bg-gradient-to-r from-medical-100 to-blue-50 rounded-3xl blur-xl opacity-50"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="h-12 border-b border-slate-100 flex items-center px-4 justify-between bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="text-xs font-medium text-slate-400">Exam Simulator v2.0</div>
</div>

<div className="p-8">
<div className="flex justify-between items-start mb-6">
<span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-md">Question 14 of 90</span>
<span className="text-slate-400 text-xs flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5"></span>
                                    01:12:45
                                </span>
</div>
<p className="text-slate-900 font-medium mb-6 text-sm leading-relaxed">
                                A pharmacist in Texas receives a prescription for Acetaminophen with Codeine #3 (C-III). The prescription was written on November 1st. What is the last day this prescription can be filled?
                            </p>
<div className="space-y-3">
<label className="cursor-pointer block">
<input className="custom-radio hidden peer" name="q14" type="radio"/>
<div className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
<div className="radio-circle w-5 h-5 rounded-full border border-slate-300 relative flex items-center justify-center transition-colors">
<div className="w-2 h-2 bg-white rounded-full opacity-0 transition-opacity absolute"></div>
</div>
<span className="text-sm text-slate-600 font-medium">November 8th (7 days)</span>
</div>
</label>
<label className="cursor-pointer block">
<input checked="" className="custom-radio hidden peer" name="q14" type="radio"/>
<div className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
<div className="radio-circle w-5 h-5 rounded-full border border-slate-300 relative flex items-center justify-center transition-colors">
<div className="w-2 h-2 bg-white rounded-full opacity-0 transition-opacity absolute"></div>
</div>
<span className="text-sm text-slate-600 font-medium">May 1st (6 months)</span>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio hidden peer" name="q14" type="radio"/>
<div className="group flex items-center gap-3 p-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-all">
<div className="radio-circle w-5 h-5 rounded-full border border-slate-300 relative flex items-center justify-center transition-colors">
<div className="w-2 h-2 bg-white rounded-full opacity-0 transition-opacity absolute"></div>
</div>
<span className="text-sm text-slate-600 font-medium">November 22nd (21 days)</span>
</div>
</label>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<button className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">Submit Answer</button>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-medical-50 rounded-xl flex items-center justify-center text-medical-600 mb-6">
<span className="iconify" data-icon="lucide:brain-circuit" data-strokeWidth="1.5"></span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Built for retention, <br/>not just reading.</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        Reading the raw laws is dry and confusing. We break down the Texas Pharmacy Act and Rules into digestible, scenario-based learning modules.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-medical-600 mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="2"></span>
<span className="text-slate-600 text-sm">Scenario-based questions reflecting real exams.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-medical-600 mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="2"></span>
<span className="text-slate-600 text-sm">Detailed explanations citing specific TSBP rules.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-medical-600 mt-0.5 flex-shrink-0" data-icon="lucide:check-circle-2" data-strokeWidth="2"></span>
<span className="text-slate-600 text-sm">Smart flashcards for Class C, A, and B pharmacy rules.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Everything you need to pass</h2>
<p className="text-slate-500">We track the Texas State Board of Pharmacy updates so you don't have to.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group">
<div className="h-10 w-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:scale" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Federal vs. Texas Law</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Confusion often arises between federal and state requirements. Our distinct "Stricter Law" identifier highlights exactly which regulation to follow in practice.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group">
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:pill" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Controlled Substances</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Deep dive into C-II through C-V dispensing, PMP requirements, and 2026 opioid prescribing mandates specifically for Texas practitioners.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group">
<div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:book-open-check" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">TSBP Updates</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Our content is audited quarterly. If a rule regarding technician ratios or remote counseling changes, our material updates immediately.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-medical-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">One price, full access.</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Stop buying outdated books. Get instant access to our entire question bank, flashcards, and law summaries.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-all flex items-center gap-2">
                            Get Access for $79
                        </button>
<button className="h-12 px-8 rounded-full border border-slate-700 text-slate-300 font-medium hover:text-white hover:border-slate-600 transition-all">
                            View Syllabus
                        </button>
</div>
<p className="mt-6 text-xs text-slate-500">Includes 3-month access. No auto-renewal.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="h-6 w-6 bg-slate-200 rounded-md flex items-center justify-center text-slate-500">
<span className="iconify" data-icon="lucide:cross" data-strokeWidth="2.5"></span>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">mpje.io</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Helping future pharmacists navigate the complexities of Texas pharmacy law with modern, effective learning tools.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Law Updates</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Disclaimer</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 mpje.io. Not affiliated with the Texas State Board of Pharmacy.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
