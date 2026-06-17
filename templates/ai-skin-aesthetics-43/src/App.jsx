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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/50 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-stone-900" data-icon="lucide:scan-face" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-lg font-semibold tracking-tight">PRIME</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Methodology</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Success Stories</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hidden sm:block" href="#">Log in</a>
<button className="bg-stone-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-sm hover:shadow-md">
                    Start Analysis
                </button>
</div>
</div>
</nav>

<main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
</span>
<span className="text-xs font-medium text-stone-600 tracking-wide uppercase">AI Model v2.4 Live</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Redefine your <br/>
<span className="text-stone-400">prime years.</span>
</h1>
<p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg font-light">
                    Scientific aesthetics for the modern 40+. Our AI analyzes 120+ facial biomarkers to build a personalized roadmap for skin health, symmetry, and vitality.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
<span className="iconify" data-icon="lucide:camera" data-width="18" style={{strokeWidth: '1.5'}}></span>
                        Scan Your Face
                    </button>
<button className="flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-50 transition-all">
                        View Sample Plan
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-stone-500">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white overflow-hidden flex items-center justify-center text-xs font-medium">JD</div>
<div className="w-10 h-10 rounded-full bg-stone-300 border-2 border-white overflow-hidden flex items-center justify-center text-xs font-medium">AS</div>
<div className="w-10 h-10 rounded-full bg-stone-400 border-2 border-white overflow-hidden flex items-center justify-center text-xs font-medium text-white">MR</div>
</div>
<p className="text-xs font-medium">Joined by 12,000+ members this month</p>
</div>
</div>

<div className="relative fade-in-up delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-200/50 to-transparent rounded-[2rem] blur-3xl -z-10"></div>
<div className="bg-white rounded-[2rem] border border-stone-200 shadow-xl shadow-stone-200/50 p-6 md:p-8 max-w-md mx-auto relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-[4rem] -z-0"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-semibold tracking-tight">Analysis Results</h3>
<p className="text-xs text-stone-500">Scan ID: #8829-AF • 42 Years</p>
</div>
<div className="h-10 w-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center">
<span className="iconify text-stone-900" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="space-y-6 mb-8">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-stone-700">Dermal Density</span>
<span className="font-semibold text-stone-900">84/100</span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-stone-900 w-[84%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-stone-700">Facial Symmetry</span>
<span className="font-semibold text-stone-900">92/100</span>
</div>
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-stone-900 w-[92%] rounded-full"></div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-2xl p-5 mb-6 border border-stone-100">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">Focus Areas</h4>
<div className="space-y-4">
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="relative">
<input checked="" className="custom-checkbox sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-stone-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Periorbital Lines</span>
</div>
<span className="text-xs text-stone-400 bg-white px-2 py-1 rounded border border-stone-100">High Priority</span>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="relative">
<input className="custom-checkbox sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-stone-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Skin Texture</span>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group">
<div className="flex items-center gap-3">
<div className="relative">
<input checked="" className="custom-checkbox sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-stone-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Jawline Definition</span>
</div>
<span className="text-xs text-stone-400 bg-white px-2 py-1 rounded border border-stone-100">Moderate</span>
</label>
</div>
</div>

<div className="mb-4">
<div className="flex justify-between text-xs text-stone-500 mb-2 font-medium">
<span>Current State</span>
<span>Projected Goal (3 mo)</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="65"/>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold uppercase tracking-wider text-stone-400 mb-8">Trusted by dermatologists from</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<span className="text-xl font-bold tracking-tighter text-stone-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:plus" style={{strokeWidth: '3'}}></span> MEDICAL</span>
<span className="text-xl font-bold tracking-tighter text-stone-800 flex items-center gap-1">DERMA<span className="font-light">LOGIC</span></span>
<span className="text-xl font-bold tracking-tighter text-stone-800 flex items-center gap-1">SKIN<span className="italic font-serif">science</span></span>
<span className="text-xl font-bold tracking-tighter text-stone-800 flex items-center gap-1">AESTHETICA</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Targeted optimization, not just covering up.</h2>
<p className="text-stone-600 font-light text-lg">We move beyond generic advice. Our engine builds a protocol based on your unique physiological markers.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:activity" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Metabolic Skin Analysis</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">Identify underlying inflammation, cortisol impact, and hydration levels that contribute to premature aging.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:dumbbell" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Facial Structure Training</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">Non-invasive micro-exercises targeted to tone facial muscles, reduce double chin, and sharpen the jawline.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-100 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<span className="iconify text-stone-900" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Product Matching</h3>
<p className="text-sm text-stone-600 leading-relaxed font-light">Stop guessing. We recommend active ingredients (Retinol, Vitamin C, Peptides) tailored to your skin's tolerance.</p>
</div>
</div>
</section>

<section className="py-20 bg-stone-100 border-y border-stone-200">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Customize your roadmap</h2>
</div>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200">
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">I am looking to optimize</label>
<div className="flex gap-4">
<label className="flex-1 cursor-pointer">
<input checked="" className="sr-only peer" name="gender" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-lg border border-stone-200 bg-stone-50 text-stone-600 font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">
                                        Male Traits
                                    </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="sr-only peer" name="gender" type="radio"/>
<div className="h-12 flex items-center justify-center rounded-lg border border-stone-200 bg-stone-50 text-stone-600 font-medium peer-checked:bg-stone-900 peer-checked:text-white peer-checked:border-stone-900 transition-all">
                                        Female Traits
                                    </div>
</label>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">Age Range</label>
<div className="relative pt-6 pb-2">
<input className="w-full h-2 bg-stone-100 rounded-lg appearance-none cursor-pointer" max="70" min="40" type="range" value="45"/>
<div className="flex justify-between mt-2 text-xs text-stone-400 font-medium">
<span>40</span>
<span>55</span>
<span>70+</span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">Primary Concern</label>
<div className="relative">
<select className="w-full appearance-none bg-stone-50 border border-stone-200 text-stone-700 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-stone-400">
<option>Deep Wrinkles &amp; Fine Lines</option>
<option>Skin Laxity (Sagging)</option>
<option>Hyper-pigmentation</option>
<option>Under-eye Bags</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-stone-700">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-white rounded-lg border border-stone-200 shadow-sm">
<span className="iconify text-stone-900" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<h4 className="font-medium text-stone-900">Recommended Protocol</h4>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify text-green-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Collagen stimulation routing</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify text-green-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Lymphatic drainage exercises</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify text-green-600 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Customized peptide selection</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-stone-200">
<button className="w-full py-3 bg-white border border-stone-300 text-stone-900 rounded-lg font-medium text-sm hover:border-stone-900 transition-colors">
                                Generate Full Report
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="mb-8 flex justify-center">
<span className="iconify text-stone-300" data-icon="lucide:quote" data-width="40" style={{strokeWidth: '1'}}></span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 leading-snug mb-8">
                "I was skeptical about 'apps' for skincare at 48. But the analysis picked up issues my dermatologist missed. My skin texture has visibly improved in 6 weeks."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-90 grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-stone-900">Marcus Thorn</p>
<p className="text-xs text-stone-500">Member since 2022</p>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-5xl mx-auto bg-[#1C1917] rounded-[2rem] p-12 md:p-24 text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-stone-700/30 rounded-full blur-3xl -z-0 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Start your transformation today.</h2>
<p className="text-stone-400 text-lg mb-10 font-light max-w-xl mx-auto">Get your personalized AI facial analysis and step-by-step plan to reverse signs of aging naturally.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-stone-100 text-stone-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-white transition-all">
                        Scan Face Now
                    </button>
<button className="w-full sm:w-auto text-white border border-stone-700 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-800 transition-all">
                        View Pricing
                    </button>
</div>
<p className="mt-6 text-xs text-stone-500">No credit card required for initial scan.</p>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-stone-900" data-icon="lucide:scan-face" data-width="24" style={{strokeWidth: '1.5'}}></span>
<span className="text-lg font-semibold tracking-tight">PRIME</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed font-light">
                    AI-powered aesthetic optimization for the sophisticated individual.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Platform</h4>
<ul className="space-y-2">
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Technology</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Accuracy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Blog</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Research</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Privacy</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
<p className="text-xs text-stone-400">© 2024 Prime Aesthetics Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<span className="iconify text-stone-400 hover:text-stone-900 cursor-pointer" data-icon="lucide:twitter" data-width="18"></span>
<span className="iconify text-stone-400 hover:text-stone-900 cursor-pointer" data-icon="lucide:instagram" data-width="18"></span>
<span className="iconify text-stone-400 hover:text-stone-900 cursor-pointer" data-icon="lucide:linkedin" data-width="18"></span>
</div>
</div>
</footer>

    </>
  );
}
