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



        // Mouse Spotlight Script
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                document.documentElement.style.setProperty('--mouse-x', x + 'px');
                document.documentElement.style.setProperty('--mouse-y', y + 'px');
            });
        });

        // Intersection Observer for Fade In
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('border-b', 'border-white/5');
            } else {
                nav.classList.remove('border-b', 'border-white/5');
            }
        });

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
      

<div className="spotlight fixed inset-0 pointer-events-none transition-opacity duration-300"></div>

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<div className="fixed top-0 left-0 w-96 h-96 bg-blue-600/20 blob rounded-full mix-blend-screen pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/70 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="group flex items-center gap-2 font-semibold tracking-tighter text-white text-lg relative z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
<span>YTM<span className="text-blue-500">.</span></span>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#problems">Problems</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#case-studies">Results</a>
<a className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#timeline">The System</a>
</div>
<a className="group relative overflow-hidden bg-white text-black px-5 py-2 text-xs font-semibold rounded-full transition-transform hover:scale-105 active:scale-95" href="#audit">
<span className="relative z-10 flex items-center gap-2">
                    Book Audit
                    <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 text-center relative mb-32">
<div className="fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-[10px] md:text-xs font-medium mb-10 shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.5)] transition-shadow cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Waitlist opening for Q4 Cohort
            </div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 text-balance leading-[1.05]">
                Turn passive views <br/>
<span className="relative">
                    into active revenue.
                    <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 text-blue-600 opacity-80" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</span>
</h1>
<p className="fade-in-up delay-200 text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                The algorithmic infrastructure for experts. We architect the content systems that drive predictable 6-figure growth for personal brands.
            </p>
<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.6)] text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5">
                    Start Architecture
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="fade-in-up delay-500 mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20"></div>
<div className="relative rounded-xl border border-white/10 bg-[#020617]/80 backdrop-blur-xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex flex-col group">
<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 h-1.5 w-32 bg-white/10 rounded-full"></div>
</div>
<div className="flex-1 p-8 relative flex items-end gap-2 md:gap-4 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[20%] group-hover:h-[30%] transition-all duration-700 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[35%] group-hover:h-[45%] transition-all duration-700 delay-75 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[30%] group-hover:h-[50%] transition-all duration-700 delay-100 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[50%] group-hover:h-[65%] transition-all duration-700 delay-150 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[45%] group-hover:h-[60%] transition-all duration-700 delay-200 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-blue-500/10 rounded-t-sm h-[60%] group-hover:h-[80%] transition-all duration-700 delay-300 ease-out border-t border-blue-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500/40 rounded-t-sm h-[75%] group-hover:h-[95%] transition-all duration-700 delay-500 ease-out border-t border-blue-400 relative shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity delay-700">+342%</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 overflow-hidden bg-white/[0.01]">
<div className="marquee-container w-full relative overflow-hidden">
<div className="marquee-content flex gap-16 min-w-max">
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded-full"></span> SEQUOIA</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded rotate-45"></span> Y COMBINATOR</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 border-2 border-slate-700 rounded-full"></span> A16Z</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded-sm"></span> INDEX</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 border-b-4 border-slate-700"></span> ACCEL</div>

<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded-full"></span> SEQUOIA</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded rotate-45"></span> Y COMBINATOR</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 border-2 border-slate-700 rounded-full"></span> A16Z</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 bg-slate-700 rounded-sm"></span> INDEX</div>
<div className="text-xl font-bold text-slate-600 flex items-center gap-2"><span className="w-6 h-6 border-b-4 border-slate-700"></span> ACCEL</div>
</div>
</div>
</section>

<section className="py-32 relative" id="problems">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Why most channels <span className="text-slate-500">flatline</span></h2>
<p className="text-slate-400">Great expertise. Terrible packaging. The algorithm isn't broken, your content architecture is.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-red-500/20 transition-all fade-in-up delay-100">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">The Content Treadmill</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">You're posting 3x a week but seeing diminishing returns. You're an employee to the algorithm, not a business owner.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-red-500 rounded-full"></span> High effort, low yield</li>
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-red-500 rounded-full"></span> Creative burnout</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-orange-500/20 transition-all fade-in-up delay-200">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 20 20"></path><path d="M8.56 2.9A7 7 0 0 1 19 13.44"></path><path d="M5 10a7 7 0 0 0 12 12"></path><path d="M5 10a7 7 0 0 1 3.08-5.9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">The Invisible Expert</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">You have world-class knowledge, but your packaging (thumbnails, hooks) is amateur. The click-through rate kills the video before it starts.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-orange-500 rounded-full"></span> Low CTR (&lt; 2%)</li>
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-orange-500 rounded-full"></span> Poor retention</li>
</ul>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-yellow-500/20 transition-all fade-in-up delay-300">
<div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/20">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">The AdSense Trap</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">You're optimizing for views instead of qualified leads. 100k views means nothing if it doesn't convert to your backend offer.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Vanity metrics</li>
<li className="flex items-center gap-2 text-xs text-slate-500"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Unpredictable revenue</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-in-up">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Engineering Virality</h2>
<p className="text-slate-400 max-w-lg">We don't guess. We deploy proven frameworks. See the data behind the growth.</p>
</div>
<a className="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center gap-2 group" href="#">
                        View all case studies 
                        <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-card rounded-3xl overflow-hidden group fade-in-up">
<div className="p-8 border-b border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">S</div>
<div>
<h3 className="text-white font-medium">SaaS Founder</h3>
<p className="text-xs text-slate-500">B2B Tech Niche</p>
</div>
<span className="ml-auto px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">+412% Revenue</span>
</div>
<p className="text-slate-400 text-sm mb-6">"We shifted from generic tutorials to high-level architectural breakdowns. The channel is now our #1 lead source."</p>
</div>
<div className="bg-[#020617]/50 p-8 h-64 flex items-end gap-3 relative">

<div className="w-full flex items-end justify-between gap-2 h-full">
<div className="w-full bg-slate-800/50 rounded-t h-[20%]"></div>
<div className="w-full bg-slate-800/50 rounded-t h-[25%]"></div>
<div className="w-full bg-slate-800/50 rounded-t h-[22%]"></div>
<div className="w-full bg-slate-800/50 rounded-t h-[30%]"></div>
<div className="w-full bg-blue-600/20 border-t border-blue-500 rounded-t h-[55%] relative group-hover:h-[65%] transition-all duration-500"></div>
<div className="w-full bg-blue-600/40 border-t border-blue-500 rounded-t h-[85%] relative group-hover:h-[95%] transition-all duration-500 delay-75 shadow-[0_0_20px_rgba(59,130,246,0.2)]"></div>
</div>
<div className="absolute top-4 left-6 text-xs text-slate-500 font-mono">MONTHLY LEADS</div>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden group fade-in-up delay-100">
<div className="p-8 border-b border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-white font-bold text-sm">F</div>
<div>
<h3 className="text-white font-medium">Fintech Advisor</h3>
<p className="text-xs text-slate-500">Finance Education</p>
</div>
<span className="ml-auto px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">2.1M Views</span>
</div>
<p className="text-slate-400 text-sm mb-6">"YTM restructured our scripting process. Average view duration went from 2:30 to 8:45 minutes instantly."</p>
</div>
<div className="bg-[#020617]/50 p-8 h-64 flex items-center justify-center relative">

<div className="relative w-40 h-40">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle className="text-slate-800 stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
<circle className="text-blue-500 stroke-current" cx="50" cy="50" fill="transparent" r="40" stroke-dasharray="251.2" stroke-dashoffset="60" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-white">72%</span>
<span className="text-[10px] uppercase text-slate-500 tracking-widest">Retention</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-900/5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-medium text-white mb-6">Ready to treat your channel like a <span className="text-blue-400 italic">media asset</span>?</h2>
<div className="flex items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors" href="#audit">Apply for Audit</a>
</div>
</div>
</section>

<section className="py-32 relative" id="timeline">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-20 text-center fade-in-up">
<span className="text-blue-500 text-xs font-bold tracking-widest uppercase mb-2 block">The Protocol</span>
<h2 className="text-4xl font-semibold text-white">From Chaos to System</h2>
</div>
<div className="relative pl-8 md:pl-0">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

<div className="relative mb-24 md:flex justify-between items-center group fade-in-up">
<div className="md:w-[45%] md:text-right">
<h3 className="text-2xl font-bold text-white mb-2">Architect &amp; Audit</h3>
<p className="text-slate-400 text-sm leading-relaxed">We dismantle your current strategy. We analyze your top competitors, identify content gaps, and build a 90-day roadmap tailored to your high-ticket offer.</p>
</div>
<div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#020617] border-2 border-blue-500 rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="hidden md:block md:w-[45%] pl-10">
<div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Competitor Forensics</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Value Prop Design</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Thumbnail Templates</li>
</ul>
</div>
</div>
</div>

<div className="relative mb-24 md:flex justify-between items-center flex-row-reverse group fade-in-up">
<div className="md:w-[45%] md:text-left">
<h3 className="text-2xl font-bold text-white mb-2">Production Systems</h3>
<p className="text-slate-400 text-sm leading-relaxed">Remove yourself from the edit. We install SOPs and hire/train editors to match your style. You focus on recording; the machine handles the rest.</p>
</div>
<div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#020617] border-2 border-purple-500 rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<div className="hidden md:block md:w-[45%] pr-10">
<div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Scripting Frameworks</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Editor Workflows</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Quality Control</li>
</ul>
</div>
</div>
</div>

<div className="relative md:flex justify-between items-center group fade-in-up">
<div className="md:w-[45%] md:text-right">
<h3 className="text-2xl font-bold text-white mb-2">Monetization &amp; Scale</h3>
<p className="text-slate-400 text-sm leading-relaxed">Turn views into dollars. We implement backend funnels, newsletter integrations, and retargeting systems to capture the traffic we generate.</p>
</div>
<div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-[#020617] border-2 border-emerald-500 rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<div className="hidden md:block md:w-[45%] pl-10">
<div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Lead Magnet Optimization</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Community Building</li>
<li className="flex items-center gap-3 text-sm text-slate-300"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Evergreen Sales</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-white/[0.02] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="col-span-1 lg:col-span-1 glass-card p-10 rounded-3xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-4">Predictable Revenue</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Stop hoping a video goes viral. Build a library of assets that generate leads while you sleep.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Automated lead flow</li>
<li className="flex items-center gap-2 text-sm text-slate-300"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Higher client quality</li>
</ul>
</div>
</div>
<div className="col-span-1 lg:col-span-2 glass-card p-10 rounded-3xl relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-purple-500/20">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<span className="text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">4H</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">The 4-Hour Content Month</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-lg mb-6">
                                You shouldn't be editing. You shouldn't be designing thumbnails. You just record. Our systems reduce your workload by 80% while increasing output quality.
                            </p>
<div className="flex gap-4">
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300">Batch Recording</div>
<div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300">Asynch Approvals</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-semibold text-white mb-16">Words from the <span className="text-gradient">high performers</span></h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl fade-in-up">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"I was stuck at 50k subs for two years. YTM came in, audited my content, and we doubled to 100k in 3 months. The revenue impact was even bigger."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">JM</div>
<div>
<div className="text-white text-sm font-medium">James M.</div>
<div className="text-xs text-slate-500">Crypto Founder</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl fade-in-up delay-100">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The systems they built allowed me to fire my expensive agency and run everything in-house with one part-time editor. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs">SL</div>
<div>
<div className="text-white text-sm font-medium">Sarah L.</div>
<div className="text-xs text-slate-500">Real Estate Coach</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl fade-in-up delay-200">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Finally, someone who understands that views don't pay bills. The backend funnels they set up added $25k MRR in the first month."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs">DK</div>
<div>
<div className="text-white text-sm font-medium">David K.</div>
<div className="text-xs text-slate-500">SaaS CEO</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="audit">

<div className="absolute inset-0 bg-blue-900/10"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8">
                    Stop guessing. <br/>
<span className="text-gradient">Start engineering.</span>
</h2>
<p className="text-slate-400 mb-10 max-w-xl mx-auto">Join 500+ founders using our systems. Book a free audit call to see exactly where your channel is leaking revenue.</p>
<div className="glass-card p-2 rounded-2xl max-w-lg mx-auto flex flex-col sm:flex-row gap-2 mb-8">
<input className="bg-transparent border-none outline-none text-white px-6 py-4 w-full placeholder:text-slate-600 focus:placeholder:text-slate-500 transition-colors" placeholder="youtube.com/@yourchannel" required="" type="email"/>
<button className="bg-white hover:bg-slate-200 text-black font-semibold px-8 py-4 rounded-xl shrink-0 transition-colors flex items-center justify-center gap-2">
                        Audit Me
                        <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Free 15-min deep dive</span>
</div>
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>No sales pressure</span>
</div>
<div className="flex items-center gap-2">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Actionable roadmap provided</span>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#020617] py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-900 flex items-center justify-center text-white text-xs font-bold">Y</div>
<span className="text-slate-500 text-sm">© 2024 YTM Systems Inc.</span>
</div>
<div className="flex gap-8">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
