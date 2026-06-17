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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-slate-800/20 rounded-full blur-[80px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B1121]/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<svg className="lucide lucide-chef-hat w-5 h-5 text-teal-400" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                MENTOR<span className="text-slate-400 font-normal">CHEF</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#blog">Insights</a>
</div>
<a className="hidden sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-white transition-all" href="#book">
                Book Session <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 text-teal-400 text-xs font-medium mb-8 fade-up hover:bg-teal-500/10 transition-colors cursor-default">
<svg className="lucide lucide-sparkles animate-pulse" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>
                New: AI-Enhanced Career Roadmap
            </div>
<h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6 text-balance fade-up delay-100">
                From Stuck to <br/>
<span className="gradient-text">Chef-Confident.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-up delay-200">
                Premium 1-on-1 career strategy and mindset coaching for ambitious culinary professionals. Turn your talent into a sustainable, high-growth career.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-sm hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#book">
                    Book a Mentorship Session
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 text-slate-300 rounded-lg font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group" href="#services">
                    Explore Strategy <svg className="lucide lucide-chevron-down w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-20 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover-lift group">
<div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Students &amp; Commis</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Bridge the gap between culinary school theory and the brutal reality of a professional kitchen. Build habits that get you noticed.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-lift group border-teal-500/20">
<div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
<svg className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Demi &amp; CDP</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Stuck on the line? Learn how to lead a section, manage time, and position yourself for the next promotion.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover-lift group">
<div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Career Pivoters</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Feeling burnt out or directionless? We redesign your career roadmap to focus on passion, income, and longevity.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-8 bg-gradient-to-r from-slate-900 to-slate-800 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-start gap-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-rose-400 shrink-0 mt-1" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<h4 className="text-base font-medium text-white">Serious Mentorship for Serious Chefs</h4>
<p className="text-sm text-slate-400 mt-1 max-w-2xl">
                        This is a <span className="text-rose-400 font-medium">paid mentorship program</span> because real growth requires investment. Free advice is everywhere; commitment is rare.
                    </p>
</div>
</div>
<div className="hidden md:block h-px w-24 bg-white/10"></div>
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Pricing revealed upon booking</span>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">Mastery in Minutes</h2>
<p className="text-slate-400">What you will gain in a 30-60 minute deep dive.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative bg-[#0F1629] border border-white/5 hover:border-teal-500/30 rounded-2xl p-8 transition-all duration-300">
<div className="absolute top-8 right-8 text-slate-600 group-hover:text-teal-400 transition-colors">
<svg className="lucide lucide-user-check w-6 h-6" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">1-on-1 Career Strategy</h3>
<ul className="space-y-3 text-slate-400 text-sm mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Roadmap from Commis to Exec Chef</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Salary negotiation tactics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Choosing the right restaurant type</li>
</ul>
</div>

<div className="group relative bg-[#0F1629] border border-white/5 hover:border-teal-500/30 rounded-2xl p-8 transition-all duration-300">
<div className="absolute top-8 right-8 text-slate-600 group-hover:text-teal-400 transition-colors">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">CV &amp; Portfolio Review</h3>
<ul className="space-y-3 text-slate-400 text-sm mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Audit against luxury standards</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Formatting for international opportunities</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Highlighting measurable achievements</li>
</ul>
</div>

<div className="group relative bg-[#0F1629] border border-white/5 hover:border-teal-500/30 rounded-2xl p-8 transition-all duration-300">
<div className="absolute top-8 right-8 text-slate-600 group-hover:text-teal-400 transition-colors">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Mindset &amp; Leadership</h3>
<ul className="space-y-3 text-slate-400 text-sm mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Overcoming "Imposter Syndrome"</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Command respect without shouting</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Stress management under pressure</li>
</ul>
</div>

<div className="group relative bg-[#0F1629] border border-white/5 hover:border-teal-500/30 rounded-2xl p-8 transition-all duration-300">
<div className="absolute top-8 right-8 text-slate-600 group-hover:text-teal-400 transition-colors">
<svg className="lucide lucide-chef-hat w-6 h-6" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Practical Kitchen Systems</h3>
<ul className="space-y-3 text-slate-400 text-sm mb-8">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Menu planning &amp; food costing basics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mise-en-place organization</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-teal-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> LQA (Learning Quality Assurance) mindset</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1629] border-y border-white/5" id="philosophy">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
<div className="lg:w-1/3">
<div className="w-full aspect-[4/5] bg-slate-800 rounded-lg relative overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-slate-700 animate-pulse"></div>

<div className="absolute inset-0 h-full w-full">
<img alt="Chef Sugam Tamang" className="h-full w-full object-cover object-top" src="2.jpeg"/>
</div>
<div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded border border-white/10">
<p className="text-white text-sm font-medium">Sugam Tamang</p>
<p className="text-slate-400 text-xs">Executive Chef &amp; Mentor</p>
</div>
</div>
</div>
<div className="lg:w-2/3">
<h5 className="text-teal-400 font-medium text-sm mb-4">ABOUT THE MENTOR</h5>
<h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight">It’s not just about cooking.<br/>It’s about <span className="text-white">character.</span></h2>
<div className="space-y-6 text-slate-400 text-lg font-light leading-relaxed">
<p className="">
                        The kitchen is one of the toughest environments on earth. I’ve seen talented chefs quit because they lacked direction, and average cooks rise to Executive Chef because they had discipline and a roadmap.
                    </p>
<p className="">
                        My mentorship philosophy is direct, practical, and devoid of fluff. I don't give you motivation; I give you a strategy. We analyze where you are, identify the gap, and build the bridge to where you want to be.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/5">
<div className="">
<h4 className="text-white font-medium mb-1">Discipline</h4>
<p className="text-xs text-slate-500">The foundation of skill.</p>
</div>
<div>
<h4 className="text-white font-medium mb-1">Excellence</h4>
<p className="text-xs text-slate-500">Standard, not a goal.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Growth</h4>
<p className="text-xs text-slate-500">Comfort is the enemy.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Mindset</h4>
<p className="text-xs text-slate-500">Win before service.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="book">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold mb-4">Book Your Session</h2>
<p className="text-slate-400">Select a time. No payment required now.</p>
</div>
<div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50">
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">

<div className="md:col-span-5 bg-[#0F1629] p-8 border-r border-white/5">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Select Duration</h3>
<div className="space-y-4">
<label className="block relative cursor-pointer group">
<input checked="" className="peer sr-only" name="session" type="radio"/>
<div className="p-4 rounded-lg border border-white/10 bg-white/5 peer-checked:border-teal-500/50 peer-checked:bg-teal-500/10 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-white font-medium">30 Min Strategy</span>
<span className="w-4 h-4 rounded-full border border-slate-500 peer-checked:border-teal-400 peer-checked:bg-teal-400"></span>
</div>
<p className="text-xs text-slate-400">Quick alignment, CV review, or specific problem solving.</p>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="peer sr-only" name="session" type="radio"/>
<div className="p-4 rounded-lg border border-white/10 bg-white/5 peer-checked:border-teal-500/50 peer-checked:bg-teal-500/10 transition-all">
<div className="flex justify-between items-start mb-2">
<span className="text-white font-medium">60 Min Deep Dive</span>
<span className="w-4 h-4 rounded-full border border-slate-500 peer-checked:border-teal-400 peer-checked:bg-teal-400"></span>
</div>
<p className="text-xs text-slate-400">Full career roadmap, leadership coaching, and long-term planning.</p>
</div>
</label>
</div>
<div className="mt-8 p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
<p className="text-xs text-rose-300 leading-relaxed">
                                
                                This is a booking request. I will review your profile and confirm the fee personally via WhatsApp/Email.
                            </p>
</div>
</div>

<div className="md:col-span-7 p-8 bg-[#0B1121]">
<h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">Your Details</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-400 mb-1.5">Full Name</label>
<input className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-600" placeholder="Chef John Doe" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Current Role</label>
<input className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-600" placeholder="e.g. CDP" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Email Address</label>
<input className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-600" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">WhatsApp Number</label>
<input className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-600" placeholder="+1 234 567 890" type="tel"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Biggest Challenge / Goal</label>
<textarea className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-600" placeholder="I feel stuck at my current level..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Preferred Date/Time</label>
<input className="w-full bg-[#151F32] border border-white/10 rounded px-3 py-2.5 text-sm text-white/50 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all" type="datetime-local"/>
</div>
<button className="w-full py-3 bg-teal-500 hover:bg-teal-400 text-[#0B1121] font-semibold rounded text-sm transition-all mt-4" type="button">
                                Confirm Booking Request
                            </button>
<p className="text-center text-[10px] text-slate-500">By booking, you agree to the mentorship terms.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold mb-10 pl-2 border-l-2 border-teal-500">Mentee Results</h2>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-6 bg-[#151F32] rounded-xl border border-white/5">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm italic mb-6">"I was stuck as a Demi Chef for 3 years. One session with Chef Sugam changed my perspective on leadership. I got promoted 4 months later."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">R</div>
<div>
<p className="text-sm font-medium text-white">Rahul S.</p>
<p className="text-xs text-slate-500">Sous Chef, Dubai</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-6 bg-[#151F32] rounded-xl border border-white/5">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm italic mb-6">"The CV review was brutal but necessary. He removed the fluff and highlighted my real value. I landed interviews at two Michelin spots immediately."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">A</div>
<div>
<p className="text-sm font-medium text-white">Anjali K.</p>
<p className="text-xs text-slate-500">CDP, London</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-6 bg-[#151F32] rounded-xl border border-white/5">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-teal-500 fill-teal-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm italic mb-6">"Worth every penny. It's not just cooking advice; it's life coaching for chefs. The discipline frameworks he teaches are gold."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">M</div>
<div>
<p className="text-sm font-medium text-white">Michael T.</p>
<p className="text-xs text-slate-500">Junior Sous, NYC</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="blog">
<div className="max-w-6xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-semibold">Latest from the Pass</h2>
<a className="text-teal-400 text-sm font-medium hover:text-teal-300" href="#">View all</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="w-full aspect-video bg-slate-800 rounded-lg mb-4 overflow-hidden border border-white/5">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs text-teal-400 font-mono mb-2 block">MINDSET</span>
<h3 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors">Why "Yes Chef" Isn't Enough</h3>
</article>
<article className="group cursor-pointer">
<div className="w-full aspect-video bg-slate-800 rounded-lg mb-4 overflow-hidden border border-white/5">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs text-teal-400 font-mono mb-2 block">CAREER</span>
<h3 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors">The 5-Year Chef Roadmap</h3>
</article>
<article className="group cursor-pointer">
<div className="w-full aspect-video bg-slate-800 rounded-lg mb-4 overflow-hidden border border-white/5">
<div className="w-full h-full bg-slate-700 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<span className="text-xs text-teal-400 font-mono mb-2 block">SKILLS</span>
<h3 className="text-lg font-medium text-white group-hover:text-teal-400 transition-colors">Plating: Minimal vs Empty</h3>
</article>
</div>
</div>
</section>

<section className="py-16 bg-[#0F1629]">
<div className="max-w-6xl mx-auto px-6 text-center">
<h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Coming Soon</h4>
<h3 className="text-2xl font-medium text-white mb-6">MentorChef <span className="text-slate-500">Academy</span></h3>
<p className="text-slate-400 max-w-lg mx-auto mb-8 text-sm">Comprehensive video courses on Leadership, Advanced Culinary Techniques, and Restaurant Management.</p>
<div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded text-xs text-slate-300">Join waitlist for early access</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#0B1121]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2 mb-6" href="#">
<svg className="lucide lucide-chef-hat w-6 h-6 text-teal-400" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                        MENTOR<span className="text-slate-400 font-normal">CHEF</span>
</a>
<p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                        Helping ambitious chefs build confidence, discipline, and successful careers through personalized mentorship.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-teal-400 transition-colors" href="#">Book a Session</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">About Chef Sugam</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-teal-400 transition-all text-slate-400" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-teal-400 transition-all text-slate-400" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-teal-400 transition-all text-slate-400" href="#">
<svg className="lucide lucide-youtube w-5 h-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 MentorChef. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 w-full p-4 bg-[#0B1121]/90 backdrop-blur-lg border-t border-white/10 md:hidden z-40">
<a className="block w-full py-3 bg-teal-500 text-[#0B1121] text-center font-bold rounded shadow-lg shadow-teal-500/20" href="#book">
            Book Mentorship
        </a>
</div>


    </>
  );
}
