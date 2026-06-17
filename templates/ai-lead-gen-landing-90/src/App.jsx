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



        // Smooth Scroll
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        })
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Simple Fade In
        gsap.to(".animate-fade-in", { opacity: 1, y: 0, duration: 1, delay: 0.2 });
    
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
      

<div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>
<div className="bg-noise absolute inset-0 opacity-40"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
<div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 transition-all duration-300">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<span className="text-lg font-bold font-display tracking-tight text-white">ZoryaFlow<span className="text-indigo-400">.ai</span></span>
</a>
<a className="hidden md:flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors tracking-wide uppercase" href="#book">
<span>Book a 15-min review</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="relative pt-32 pb-16 px-4 md:px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] font-mono tracking-widest uppercase mb-8 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                Performance Guarantee
            </div>

<h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-white bg-clip-text">
                20–40 qualified sales meetings per month in 20 days <br className="hidden md:block"/>
<span className="text-gray-500 italic font-serif">— or you don’t pay.</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                For B2B service companies with a sales team. We turn your CRM and inbound leads into booked meetings <span className="text-white font-medium">(no extra headcount)</span>.
            </p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-12">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="22" y1="8" y2="11"></line><line x1="22" x2="19" y1="8" y2="11"></line><line x1="19" x2="22" y1="14" y2="11"></line><line x1="22" x2="19" y1="14" y2="11"></line></svg>
</div>
<span className="text-sm font-medium text-gray-200">No SDR hires, no manual follow-ups</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<span className="text-sm font-medium text-gray-200">AI qualifies &amp; nurtures to "Meeting-Ready"</span>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm font-medium text-gray-200">Quality control + Anti-spam safeguards</span>
</div>
</div>

<div className="flex flex-col items-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:scale-105" href="#book">
<span>Book a 15-min funnel review</span>
<svg className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<p className="text-xs text-gray-500 font-mono">*We agree on the KPI and ‘qualified meeting’ criteria upfront.</p>
</div>
</div>
</section>

<section className="px-4 md:px-6 pb-20">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-6 px-2">
<h2 className="text-xl md:text-2xl font-display font-medium text-white">Watch the 2-minute overview</h2>
<span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden sm:block">System Walkthrough</span>
</div>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl group">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#111] to-black">
<div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 cursor-pointer backdrop-blur-sm">
<svg className="text-white ml-1" fill="currentColor" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<p className="mt-6 text-sm text-gray-400 font-medium">See how the system turns CRM + inbound into booked meetings.</p>
</div>

</div>
<div className="mt-6 text-center">
<a className="text-sm text-indigo-400 hover:text-indigo-300 font-medium border-b border-indigo-400/30 hover:border-indigo-300 pb-0.5 transition-all" href="#book">Book a 15-min funnel review</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/5 bg-[#050505] relative overflow-hidden">
<div className="max-w-5xl mx-auto px-4 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Tracking What Matters</h2>
<p className="text-gray-400">Total transparency on pipeline velocity and quality.</p>
</div>

<div className="glass-heavy rounded-xl border border-white/10 overflow-hidden shadow-2xl relative">

<div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-6">
<div className="flex items-center gap-2">
<span className="text-xs font-bold text-gray-300 tracking-wider">ZORYA<span className="text-indigo-500">FLOW</span></span>
<span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-gray-400">DASHBOARD</span>
</div>
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-lg bg-black/40 border border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Processed</div>
<div className="text-2xl font-mono text-white">1,240</div>
<div className="text-[10px] text-green-500 mt-1">▲ 12% vs last mo</div>
</div>
<div className="p-4 rounded-lg bg-black/40 border border-white/5">
<div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Conversations</div>
<div className="text-2xl font-mono text-white">315</div>
<div className="text-[10px] text-gray-400 mt-1">25% Response Rate</div>
</div>
<div className="p-4 rounded-lg bg-black/40 border border-white/5 animate-glow">
<div className="text-[10px] text-indigo-300 uppercase tracking-widest mb-1">Qualified</div>
<div className="text-2xl font-mono text-indigo-400">85</div>
<div className="text-[10px] text-indigo-300/60 mt-1">ICP Verified</div>
</div>
<div className="p-4 rounded-lg bg-gradient-to-br from-indigo-900/20 to-blue-900/20 border border-indigo-500/30">
<div className="text-[10px] text-white/70 uppercase tracking-widest mb-1">Booked Mtgs</div>
<div className="text-2xl font-mono text-white">32</div>
<div className="text-[10px] text-green-400 mt-1">Goal: 30</div>
</div>
</div>

<div className="lg:col-span-2 p-5 rounded-lg bg-black/40 border border-white/5">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-gray-300">Speed-to-Lead Response Time</h3>
<span className="text-xs text-green-400 font-mono">Avg: 2.4 min</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs">
<div className="w-16 text-gray-500">Manual</div>
<div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-gray-600"></div></div>
<div className="w-12 text-right text-gray-500">4h 12m</div>
</div>
<div className="flex items-center gap-3 text-xs">
<div className="w-16 text-gray-200 font-medium">ZoryaFlow</div>
<div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden"><div className="w-[5%] h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div></div>
<div className="w-12 text-right text-indigo-400 font-bold">2m 24s</div>
</div>
</div>
</div>

<div className="p-5 rounded-lg bg-black/40 border border-white/5">
<h3 className="text-sm font-medium text-gray-300 mb-4">Meeting Quality Checklist</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50"><svg className="text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span className="text-xs text-gray-300">ICP Fit Confirmed</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50"><svg className="text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span className="text-xs text-gray-300">Decision Maker Role</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/50"><svg className="text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
<span className="text-xs text-gray-300">Pain Point Identified</span>
</div>
<div className="flex items-center gap-3 opacity-50">
<div className="w-4 h-4 rounded-full border border-gray-600 flex items-center justify-center"></div>
<span className="text-xs text-gray-500">Budget Discussed</span>
</div>
</div>
</div>
</div>
</div>
<p className="text-[10px] text-gray-600 mt-4 text-center font-mono">Sample for illustration; results depend on CRM size, inbound volume, and ICP clarity.</p>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-display font-semibold mb-12 text-center">Implementation Timeline</h2>
<div className="relative pl-8 border-l border-white/10 space-y-12">

<div className="relative">
<div className="absolute -left-[39px] w-5 h-5 rounded-full bg-[#030303] border-2 border-indigo-500 z-10"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h3 className="text-lg font-bold text-white">KPI + ICP Setup</h3>
<span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">Days 1–2</span>
</div>
<p className="text-sm text-gray-400 mt-2">We align on your exact target audience and success metrics.</p>
</div>

<div className="relative">
<div className="absolute -left-[39px] w-5 h-5 rounded-full bg-[#030303] border-2 border-white/20 z-10"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h3 className="text-lg font-bold text-white">CRM &amp; Inbound Prep</h3>
<span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">Days 2–5</span>
</div>
<p className="text-sm text-gray-400 mt-2">Connecting data sources and cleaning lists for AI processing.</p>
</div>

<div className="relative">
<div className="absolute -left-[39px] w-5 h-5 rounded-full bg-[#030303] border-2 border-white/20 z-10"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h3 className="text-lg font-bold text-white">AI Outreach + Guardrails</h3>
<span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">Days 5–14</span>
</div>
<p className="text-sm text-gray-400 mt-2">Campaigns launch with strict quality control and human oversight.</p>
</div>

<div className="relative">
<div className="absolute -left-[39px] w-5 h-5 rounded-full bg-[#030303] border-2 border-white/20 z-10"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h3 className="text-lg font-bold text-white">Meeting-Ready Handoff</h3>
<span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">Daily / SLA</span>
</div>
<p className="text-sm text-gray-400 mt-2">Your team receives booked meetings or highly qualified leads only.</p>
</div>

<div className="relative">
<div className="absolute -left-[39px] w-5 h-5 rounded-full bg-[#030303] border-2 border-white/20 z-10"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
<h3 className="text-lg font-bold text-white">Reporting &amp; Quality Control</h3>
<span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-0.5 rounded">Ongoing</span>
</div>
<p className="text-sm text-gray-400 mt-2">Continuous optimization to improve conversion rates.</p>
</div>
</div>
</div>
</section>

<footer className="py-16 md:py-24 bg-[#050505] border-t border-white/5" id="book">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-5xl font-display font-semibold mb-6">Ready to scale your meetings?</h2>
<p className="text-gray-400 mb-12">Book a time below. No pressure, just a review of your current funnel.</p>

<div className="w-full h-[700px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 mb-12">

<iframe frameborder="0" height="100%" src="https://calendly.com/noocapm/new-meeting" width="100%"></iframe>
</div>
<div className="flex items-center justify-center gap-8 pt-12 border-t border-white/5">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="mailto:hello@zoryaflow.ai">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</a>
</div>
<p className="text-xs text-gray-700 mt-6">© 2025 ZoryaFlow.ai</p>
</div>
</footer>


    </>
  );
}
