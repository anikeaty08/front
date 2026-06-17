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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-blue-950 rounded text-white flex items-center justify-center font-semibold tracking-tighter text-sm">
                    AI
                </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 uppercase leading-none">SIMAD AI</span>
<span className="text-[10px] tracking-wide text-slate-500 font-medium uppercase leading-none mt-0.5">Institute</span>
</div>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Research</a>
<a className="hidden sm:block text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Education</a>
<a className="text-xs font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 group" href="#">
                    Back to Main Site
                    <i className="w-3 h-3 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate pointer-events-none -z-10"></div>
<div className="relative max-w-3xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
</span>
<span className="text-xs font-medium text-blue-700 uppercase tracking-wide">Monthly Intelligence Brief</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Stay Connected with <br/>
<span className="text-blue-600">SIMAD AI Institute</span>
</h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light max-w-xl mx-auto">
                Research insights, events, partnerships, and AI innovation shaping Somalia and the region.
            </p>

<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-slate-400" data-lucide="mail"></i>
</div>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all shadow-sm" placeholder="Enter your email address" required="" type="email"/>
</div>
<button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md whitespace-nowrap" type="button">
                    Subscribe to Newsletter
                </button>
</form>
<p className="mt-4 text-xs text-slate-400 flex items-center justify-center gap-1.5">
<i className="w-3 h-3" data-lucide="shield-check"></i>
                Academic updates. No spam.
            </p>
</div>
</header>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="microscope"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Research &amp; Innovation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Updates on AI research projects, published papers, and technical breakthroughs.</p>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Events &amp; Trainings</h3>
<p className="text-sm text-slate-500 leading-relaxed">Registration for workshops, academic conferences, and capacity-building programs.</p>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Global Engagement</h3>
<p className="text-sm text-slate-500 leading-relaxed">News on regional and international collaborations and joint ventures.</p>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Policy &amp; Responsible AI</h3>
<p className="text-sm text-slate-500 leading-relaxed">Insights supporting ethical and inclusive AI adoption frameworks in Somalia.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">

<div className="md:w-5/12">
<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-blue-600 bg-blue-50 text-[11px] font-semibold uppercase tracking-wider mb-6">
                        Latest Issue
                    </div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">A glimpse into our academic updates.</h2>
<p className="text-slate-500 mb-8 font-light leading-relaxed">
                        We prioritize quality over quantity. Every issue is curated by our academic staff to ensure value for researchers, policymakers, and students.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group" href="#">
                        View Sample Newsletter
                        <i className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="md:w-7/12 w-full">
<div className="relative bg-white rounded-lg border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-8 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="border-b border-slate-100 pb-6 mb-6 flex justify-between items-start">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mb-1">Issue #14 • October 2023</p>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Large Language Models in Somali Context</h3>
</div>
<span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-medium rounded">Research</span>
</div>

<div className="space-y-3 mb-6">
<div className="h-2.5 bg-slate-100 rounded w-full"></div>
<div className="h-2.5 bg-slate-100 rounded w-11/12"></div>
<div className="h-2.5 bg-slate-100 rounded w-full"></div>
<div className="h-2.5 bg-slate-100 rounded w-4/5"></div>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-6 font-serif italic bg-slate-50 p-3 rounded border border-slate-100">
                            "Adapting open-source models to better understand Somali syntax and semantics is crucial for bridging the digital divide..."
                        </p>
<div className="flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-bold">JD</div>
<div className="text-[10px]">
<p className="text-slate-900 font-medium">Dr. Jamil D.</p>
<p className="text-slate-400">Lead Researcher</p>
</div>
</div>
</div>

<div className="absolute top-4 right-4 md:right-10 w-full max-w-md h-full bg-slate-50 rounded-lg border border-slate-200 -z-10 transform translate-x-4 translate-y-4"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/50 border-y border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-base md:text-xl text-slate-700 font-medium leading-relaxed mb-12">
<span className="text-blue-700 font-semibold">SIMAD AI Institute</span> is Somalia’s first university-based AI institute, advancing responsible and impactful Artificial Intelligence through research, education, and real-world applications.
            </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">

<span className="text-sm font-bold text-slate-800 tracking-tight uppercase">SIMAD University</span>
<span className="text-sm font-bold text-slate-800 tracking-tight uppercase">Alan Turing Inst.</span>
<span className="text-sm font-bold text-slate-800 tracking-tight uppercase">UNESCO</span>
<span className="text-sm font-bold text-slate-800 tracking-tight uppercase">Ministry of Education</span>
</div>
<div className="mt-12 flex items-center justify-center gap-2 text-[10px] font-medium text-slate-400 uppercase tracking-widest">
<span>University-based</span>
<span className="text-slate-300">•</span>
<span>Research-driven</span>
<span className="text-slate-300">•</span>
<span>Public Interest</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white">
<div className="max-w-xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Join Our Newsletter</h2>
<p className="text-slate-500 mb-8 text-sm">Be part of Somalia’s growing AI knowledge and innovation community.</p>
<form className="flex flex-col sm:flex-row gap-3 w-full">
<input className="flex-grow px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-600 transition-all" placeholder="Enter your email address" required="" type="email"/>
<button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow-md" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="py-10 border-t border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-300 rounded flex items-center justify-center text-white text-[10px] font-bold">S</div>
<p>© 2023 SIMAD AI Institute.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-blue-600 transition-colors" href="#">Academic Integrity</a>
<a className="hover:text-blue-600 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
