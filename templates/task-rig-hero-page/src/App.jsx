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
      

<div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-50"></div>
<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-900 via-red-800 to-zinc-900 z-50"></div>

<nav className="fixed z-40 glass-panel w-full border-red-800/40 border-b top-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 border border-orange-500 bg-orange-500/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-orange-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<svg className="w-4 h-4 text-orange-500 relative z-10" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m16 6-4 4-4-4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
</div>
<span className="font-heading font-semibold text-2xl tracking-tight text-zinc-100">TASK <span className="text-orange-500">RIG</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-mono text-xs tracking-widest text-zinc-400 hover:text-orange-500 transition-colors uppercase" href="#features">[ Services ]</a>
<a className="font-mono text-xs tracking-widest text-zinc-400 hover:text-orange-500 transition-colors uppercase" href="#process">[ Protocol ]</a>
<a className="font-mono text-xs tracking-widest text-zinc-400 hover:text-orange-500 transition-colors uppercase" href="#pricing">[ Access ]</a>
</div>
<button className="border border-red-800 bg-red-900/10 px-5 py-2 hover:bg-orange-500 hover:border-orange-500 hover:text-black transition-all duration-300 group shadow-sm">
<span className="font-heading font-semibold text-lg uppercase tracking-wide flex items-center gap-2">
                    Initialize
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden border-red-800/30 border-b pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto relative z-10">

<div className="absolute top-0 right-0 font-mono text-xs text-red-800/60 flex flex-col items-end gap-1 opacity-60 hidden md:flex">
<span>SYS.STATUS: ONLINE</span>
<span>LAT: 34.0522 N</span>
<span>LON: 118.2437 W</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-8">
<div className="fade-in-up">
<div className="inline-flex gap-2 bg-zinc-900/50 border-red-800/50 border mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.6)] animate-pulse"></span><span className="text-xs text-orange-500 tracking-wider font-mono">AI AGENT V.2.0 DEPLOYED</span>
</div>
<h1 className="sm:text-7xl lg:text-[80px] leading-[0.9] uppercase text-6xl font-semibold text-white tracking-tight font-heading mb-6">
        Automate
        <span className="text-zinc-600">The Mundane.</span>
</h1>
<p className="font-body text-xl sm:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
        Task Rig deploys autonomous AI agents to handle your service business's repetitive workload. We automate emails,
        social DMs, and inbound calls so you can focus on execution.
    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-orange-500 text-black px-8 py-4 font-heading font-semibold text-xl uppercase tracking-wide hover:bg-orange-400 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                                Deploy System
                            </button>
<button className="border border-zinc-700 text-zinc-300 px-8 py-4 font-heading font-semibold text-xl uppercase tracking-wide hover:border-orange-500 hover:text-orange-500 transition-colors">
                                View Demo Reel
                            </button>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-4 relative h-full min-h-[300px] border border-red-800/30 bg-black/40 fade-in-up delay-200">
<div className="absolute inset-0 overflow-hidden">
<div className="w-full h-[2px] bg-orange-500/50 absolute top-0 animate-scan"></div>
</div>
<div className="p-4 grid grid-cols-2 gap-2 h-full content-between">
<div className="font-mono text-[10px] text-red-800/80">CPU_01  [ACTIVE]</div>
<div className="font-mono text-[10px] text-red-800/80 text-right">MEM_USAGE  12%</div>
<div className="col-span-2 flex items-center justify-center py-12">
<div className="w-32 h-32 border border-zinc-700 rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border-t border-orange-500 rounded-full animate-spin duration-[3s]"></div>
<div className="absolute inset-2 border-b border-zinc-600 rounded-full animate-spin duration-[5s] direction-reverse"></div>
<svg className="lucide lucide-cpu text-zinc-500 w-8 h-8" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
<div className="font-mono text-[10px] text-zinc-600 col-span-2 border-t border-zinc-800 pt-2 mt-2">
                            &gt; LOG: INCOMING REQUEST PROCESSED
                            &gt; LOG: EMAIL DRAFTED (0.02s)
                            &gt; LOG: CALENDAR SYNCED
                        </div>
</div>

<div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-orange-500"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-orange-500"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-orange-500"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-orange-500"></div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-zinc-800 pb-8">
<div className="">
<span className="font-mono text-xs text-orange-500 tracking-widest mb-2 block">// MODULES</span>
<h2 className="font-heading font-semibold text-5xl md:text-6xl text-zinc-100 uppercase tracking-tight">Core Capabilities</h2>
</div>
<p className="font-body text-lg text-zinc-400 max-w-sm text-right mt-4 md:mt-0">
                    High-performance protocols designed to intercept and resolve inbound communications.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900 border border-red-800/40 p-8 hover:border-orange-500 transition-colors duration-300">
<div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 group-hover:text-orange-500">SYS_01</div>
<div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h3 className="font-heading font-semibold text-3xl text-zinc-100 mb-3 uppercase">Email Triage</h3>
<p className="font-body text-lg text-zinc-400 leading-snug">
                        AI reads, categorizes, and drafts responses to client inquiries instantly. Only high-priority items reach your inbox.
                    </p>
<div className="mt-8 w-full h-px bg-zinc-800 group-hover:bg-orange-500/50 transition-colors"></div>
</div>

<div className="group relative bg-zinc-900 border border-red-800/40 p-8 hover:border-orange-500 transition-colors duration-300">
<div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 group-hover:text-orange-500">SYS_02</div>
<div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="font-heading font-semibold text-3xl text-zinc-100 mb-3 uppercase">Social Command</h3>
<p className="font-body text-lg text-zinc-400 leading-snug">
                        24/7 monitoring of DMs and comments. Instant engagement for leads, booking scheduling directly within the chat interface.
                    </p>
<div className="mt-8 w-full h-px bg-zinc-800 group-hover:bg-orange-500/50 transition-colors"></div>
</div>

<div className="group relative bg-zinc-900 border border-red-800/40 p-8 hover:border-orange-500 transition-colors duration-300">
<div className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 group-hover:text-orange-500">SYS_03</div>
<div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
<svg className="lucide lucide-phone w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="font-heading font-semibold text-3xl text-zinc-100 mb-3 uppercase">Voice Synthesis</h3>
<p className="font-body text-lg text-zinc-400 leading-snug">
                        Natural sounding AI voice receptionists to handle appointments, FAQs, and emergency routing without human intervention.
                    </p>
<div className="mt-8 w-full h-px bg-zinc-800 group-hover:bg-orange-500/50 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black border-red-800/30 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center border-r border-zinc-800 last:border-0">
<div className="font-heading font-semibold text-5xl text-white mb-1">24/7</div>
<div className="font-mono text-xs text-orange-500 uppercase tracking-widest">Uptime</div>
</div>
<div className="text-center border-r border-zinc-800 last:border-0">
<div className="font-heading font-semibold text-5xl text-white mb-1">0.2s</div>
<div className="font-mono text-xs text-orange-500 uppercase tracking-widest">Response Time</div>
</div>
<div className="text-center border-r border-zinc-800 last:border-0">
<div className="font-heading font-semibold text-5xl text-white mb-1">100%</div>
<div className="font-mono text-xs text-orange-500 uppercase tracking-widest">Lead Capture</div>
</div>
<div className="text-center">
<div className="font-heading font-semibold text-5xl text-white mb-1">Auto</div>
<div className="font-mono text-xs text-orange-500 uppercase tracking-widest">Scaling</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="process">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-orange-500/5 blur-xl"></div>
<div className="border border-red-800 bg-zinc-900 relative p-1">

<div className="bg-black border border-zinc-800 h-[400px] relative overflow-hidden flex flex-col">
<div className="h-8 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/50">
<span className="font-mono text-[10px] text-zinc-500">TERMINAL_04</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-800"></div>
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
</div>
</div>
<div className="p-6 font-mono text-sm space-y-4 text-zinc-400">
<p className=""><span className="text-orange-500">&gt;</span> INITIATING SEQUENCE...</p>
<p className=""><span className="text-zinc-600">[10:42:01]</span> INCOMING CALL DETECTED</p>
<p className=""><span className="text-zinc-600">[10:42:02]</span> ANALYSIS: SERVICE INQUIRY</p>
<p className=""><span className="text-zinc-600">[10:42:03]</span> AGENT DEPLOYED: "SARA"</p>
<p className=""><span className="text-zinc-600">[10:42:45]</span> APPOINTMENT CONFIRMED</p>
<p className=""><span className="text-zinc-600">[10:42:46]</span> CRM UPDATED</p>
<p className=""><span className="text-orange-500">&gt;</span> TASK COMPLETE. STANDBY.</p>
<div className="mt-8 border border-orange-500/30 bg-orange-500/10 p-3 text-orange-500 text-xs animate-pulse">
                                    STATUS: EXECUTING
                                </div>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<span className="font-mono text-xs text-orange-500 tracking-widest block">// INTEGRATION</span>
<h2 className="font-heading font-semibold text-5xl md:text-6xl text-zinc-100 uppercase tracking-tight">Seamless Infrastructure</h2>
<p className="font-body text-xl text-zinc-400">
                        Task Rig doesn't require you to change your stack. We layer intelligent automation over your existing tools—CRM, Email, Calendar, and VoIP systems.
                    </p>
<ul className="space-y-4 mt-8">
<li className="flex items-center gap-4 group">
<div className="w-6 h-6 border border-zinc-700 flex items-center justify-center group-hover:border-orange-500 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-heading text-xl text-zinc-300">Instant CRM Population</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-6 h-6 border border-zinc-700 flex items-center justify-center group-hover:border-orange-500 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-heading text-xl text-zinc-300">Autonomous Follow-ups</span>
</li>
<li className="flex items-center gap-4 group">
<div className="w-6 h-6 border border-zinc-700 flex items-center justify-center group-hover:border-orange-500 transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-heading text-xl text-zinc-300">Sentiment Analysis</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black relative border-t border-red-800/30" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="font-mono text-xs text-orange-500 tracking-widest uppercase">// ACCESS PROTOCOLS</span>
<h2 className="font-heading font-semibold text-5xl md:text-6xl text-white mt-4 uppercase tracking-tight">Select Configuration</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="border border-zinc-800 bg-zinc-900/50 p-8 flex flex-col relative hover:border-zinc-600 transition-all">
<h3 className="font-heading font-semibold text-3xl text-zinc-100 uppercase">Starter</h3>
<div className="mt-4 mb-6">
<span className="font-heading text-5xl font-bold text-white">$499</span>
<span className="font-body text-zinc-500">/mo</span>
</div>
<ul className="space-y-3 font-body text-zinc-400 text-lg mb-8 flex-1">
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email Triage Agent</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Calendar Sync</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weekly Reports</li>
</ul>
<button className="w-full py-4 border border-zinc-700 font-heading font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">Initialize</button>
</div>

<div className="border border-red-800 bg-zinc-900 p-8 flex flex-col relative transform scale-105 z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-black font-mono text-xs px-3 py-1 uppercase tracking-widest">Recommended</div>
<h3 className="font-heading font-semibold text-3xl text-orange-500 uppercase">Pro</h3>
<div className="mt-4 mb-6">
<span className="font-heading text-5xl font-bold text-white">$999</span>
<span className="font-body text-zinc-500">/mo</span>
</div>
<ul className="space-y-3 font-body text-zinc-300 text-lg mb-8 flex-1">
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> All Starter features</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Voice Agent (500 mins)</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Social Media Response</li>
</ul>
<button className="w-full py-4 bg-orange-500 text-black font-heading font-semibold uppercase tracking-wide hover:bg-orange-400 transition-colors">Initialize</button>
</div>

<div className="border border-zinc-800 bg-zinc-900/50 p-8 flex flex-col relative hover:border-zinc-600 transition-all">
<h3 className="font-heading font-semibold text-3xl text-zinc-100 uppercase">Enterprise</h3>
<div className="mt-4 mb-6">
<span className="font-heading text-5xl font-bold text-white">Custom</span>
</div>
<ul className="space-y-3 font-body text-zinc-400 text-lg mb-8 flex-1">
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Server</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Full Custom Models</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-5 h-5 text-zinc-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 Priority Support</li>
</ul>
<button className="w-full py-4 border border-zinc-700 font-heading font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-colors">Contact</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto">
<h2 className="font-heading font-semibold text-4xl text-white mb-12 uppercase tracking-tight border-b border-red-800 pb-4 inline-block">System Data (FAQ)</h2>
<div className="space-y-4">
<details className="group bg-zinc-900 border border-zinc-800 open:border-orange-500 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="font-heading font-semibold text-xl text-zinc-200 uppercase">Does the AI sound robotic?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 font-body text-lg">
                    Negative. We utilize advanced voice synthesis protocols that include natural pauses, intonation, and fillers. Most clients cannot distinguish our agents from human operators.
                </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 open:border-orange-500 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="font-heading font-semibold text-xl text-zinc-200 uppercase">Is integration difficult?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 font-body text-lg">
                    Our onboarding process is streamlined. We connect via API to your existing stack. Setup typically takes less than 48 hours to reach full operational capacity.
                </div>
</details>
<details className="group bg-zinc-900 border border-zinc-800 open:border-orange-500 transition-all">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none">
<span className="font-heading font-semibold text-xl text-zinc-200 uppercase">Is my data secure?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 font-body text-lg">
                    Affirmative. We use enterprise-grade encryption for all voice and text data. We are SOC2 compliant and do not use your customer data to train public models.
                </div>
</details>
</div>
</section>

<footer className="border-t border-red-800 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-orange-500"></div>
<span className="font-heading font-semibold text-2xl text-white">TASK RIG</span>
</div>
<p className="font-body text-xl text-zinc-500 max-w-sm">
                        Defining the future of autonomous service work. Eliminate the noise. Focus on the signal.
                    </p>
</div>
<div>
<h4 className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-6">Sitemap</h4>
<ul className="space-y-4 font-heading text-lg text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Protocol</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-orange-500 uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 font-heading text-lg text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-mono text-xs text-zinc-600 uppercase">© 2024 TASK RIG AUTOMATION LTD. // ALL RIGHTS RESERVED.</p>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-5 h-5 text-zinc-600 hover:text-orange-500 cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-5 h-5 text-zinc-600 hover:text-orange-500 cursor-pointer transition-colors" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-linkedin w-5 h-5 text-zinc-600 hover:text-orange-500 cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
