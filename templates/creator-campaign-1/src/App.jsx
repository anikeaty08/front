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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center text-white text-xs font-bold tracking-tighter">O</div>
<span className="text-white font-semibold tracking-tight text-sm">OUTREACH</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#problem">Problem</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#solution">Solution</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#how-it-works">How it Works</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-slate-950 px-4 py-2 rounded text-xs font-semibold hover:bg-slate-200 transition-colors" href="#">
                    Start Pilot
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 border-b border-white/5 bg-grid overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 text-center z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Campaign Operations Platform</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight mb-6 max-w-4xl mx-auto">
                Run creator campaigns without follow-ups, delays, or confusion.
            </h1>
<p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
                Outreach by Oye Creators helps marketing teams manage creator outreach, confirmations, scheduling, submissions, and approvals in one structured workflow. 
                <span className="text-slate-300">So campaigns move forward on time, even at scale.</span>
</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all shadow-lg shadow-red-900/20 w-full md:w-auto">
                    Start a campaign pilot
                </button>
<button className="group px-8 py-3.5 rounded-md text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all w-full md:w-auto flex items-center justify-center gap-2">
                    See how it works
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<p className="text-xs text-slate-500 font-medium tracking-tight mb-16">
                Built for nano and micro creators. Designed for execution-heavy campaigns.
            </p>

<div className="w-full max-w-5xl mx-auto rounded-xl border border-white/10 bg-slate-900 shadow-2xl overflow-hidden">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 h-4 w-32 bg-white/5 rounded-sm"></div>
</div>

<div className="p-6 md:p-10 bg-slate-900 grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="space-y-3 opacity-60">
<div className="flex justify-between text-xs font-medium text-slate-400 uppercase tracking-wider pb-2 border-b border-white/5">
<span>Interested</span>
<span className="text-slate-600">42</span>
</div>
<div className="h-20 border border-white/5 bg-white/[0.02] rounded p-3 space-y-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded"></div>
</div>
<div className="h-20 border border-white/5 bg-white/[0.02] rounded p-3 space-y-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<div className="h-2 w-20 bg-slate-700 rounded"></div>
</div>
<div className="h-1.5 w-3/4 bg-slate-800 rounded"></div>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between text-xs font-semibold text-emerald-400 uppercase tracking-wider pb-2 border-b border-emerald-500/30">
<span>Confirmed</span>
<span className="bg-emerald-500/10 px-1.5 rounded text-emerald-500">18</span>
</div>

<div className="relative h-24 border border-emerald-500/20 bg-emerald-500/[0.02] rounded p-3 space-y-3 shadow-lg shadow-emerald-900/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-800 flex items-center justify-center text-[8px] text-white font-bold">JD</div>
<div className="h-2 w-20 bg-slate-600 rounded"></div>
</div>
<iconify-icon className="text-emerald-500 text-sm" icon="lucide:check-circle-2"></iconify-icon>
</div>
<div className="flex gap-2">
<span className="h-4 px-2 rounded-sm bg-slate-800 border border-slate-700 text-[9px] text-slate-400 flex items-center">Contract Signed</span>
</div>
<div className="absolute -right-1 top-8">
<iconify-icon className="text-slate-600 text-lg" icon="lucide:arrow-right"></iconify-icon>
</div>
</div>

<div className="h-24 border border-slate-700 bg-slate-800/20 rounded p-3 space-y-3 opacity-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded"></div>
</div>
</div>

<div className="space-y-3 opacity-80">
<div className="flex justify-between text-xs font-medium text-amber-400 uppercase tracking-wider pb-2 border-b border-amber-500/30">
<span>Scheduled</span>
<span className="text-amber-500">08</span>
</div>
<div className="h-20 border border-white/5 bg-white/[0.02] rounded p-3 space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
<span className="text-[9px] text-amber-500 font-mono">OCT 24</span>
</div>
<div className="h-1.5 w-1/2 bg-amber-500/20 rounded"></div>
</div>
</div>

<div className="space-y-3 opacity-60">
<div className="flex justify-between text-xs font-medium text-blue-400 uppercase tracking-wider pb-2 border-b border-blue-500/30">
<span>Delivered</span>
<span className="text-blue-500">05</span>
</div>
<div className="h-20 border border-white/5 bg-white/[0.02] rounded p-3 space-y-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700"></div>
<div className="h-2 w-24 bg-slate-700 rounded"></div>
</div>
<div className="h-1.5 w-full bg-blue-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-zinc-50 border-b border-slate-200" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Creator campaigns don’t fail on ideas.<br/>
<span className="text-slate-400">They fail on execution.</span>
</h2>
<div className="space-y-4 text-slate-600 mb-8 font-medium">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x"></iconify-icon>
<p>Replies come late.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x"></iconify-icon>
<p>Rates change mid-way.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x"></iconify-icon>
<p>Deadlines slip and approvals pile up.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1" icon="lucide:x"></iconify-icon>
<p>Everything lives across chats, emails, and spreadsheets.</p>
</div>
</div>
<p className="text-sm font-semibold text-slate-900 border-l-2 border-red-500 pl-4">
                        The more creators you involve, the harder it gets to stay in control.
                    </p>
</div>

<div className="relative h-[400px] w-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

<div className="absolute top-10 right-10 w-64 bg-white border border-slate-300 rounded shadow-lg p-2 rotate-3 z-10">
<div className="flex gap-2 mb-2 border-b border-slate-100 pb-2">
<div className="w-3 h-3 rounded-full bg-red-100"></div>
<div className="h-3 w-20 bg-slate-100 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="h-2 bg-slate-100 rounded"></div>
<div className="h-2 bg-red-100 rounded col-span-2"></div>
<div className="h-2 bg-slate-100 rounded col-span-2"></div>
<div className="h-2 bg-slate-100 rounded"></div>
</div>
</div>

<div className="absolute bottom-12 left-8 w-56 bg-slate-800 text-white rounded-lg shadow-xl p-4 -rotate-2 z-20">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 bg-slate-600 rounded-full"></div>
<div className="h-2 w-24 bg-slate-600 rounded"></div>
</div>
<p className="text-[10px] leading-relaxed text-slate-300">
                            "Hey, sorry I missed the deadline. Can I submit the draft next week instead?"
                        </p>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 bg-white border border-slate-200 rounded shadow-lg p-4 z-0">
<div className="h-2 w-12 bg-slate-200 rounded mb-4"></div>
<div className="h-3 w-full bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-3/4 bg-slate-100 rounded mb-2"></div>
<div className="h-3 w-5/6 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative" id="solution">
<div className="max-w-3xl mx-auto text-center px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                Outreach is your creator campaign execution system.
            </h2>
<p className="text-slate-400 text-lg leading-relaxed mb-12">
                Outreach is not just a messaging tool. It is a structured workflow that tracks every creator from interest to delivery. 
                <br/><br/>
<span className="text-white">Every creator has a status. Every task has an owner. Nothing moves without confirmation.</span>
</p>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="border border-white/10 bg-slate-900 rounded-lg p-8 flex items-center justify-center">
<div className="flex items-center gap-4 text-sm font-medium text-slate-500">
<span>Input (Brief)</span>
<iconify-icon className="text-slate-600" icon="lucide:arrow-right"></iconify-icon>
<div className="bg-slate-800 border border-white/10 text-white px-6 py-2 rounded-md shadow-lg shadow-black/50">
                        Structured Workflow Engine
                    </div>
<iconify-icon className="text-slate-600" icon="lucide:arrow-right"></iconify-icon>
<span>Output (ROI)</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-6xl mx-auto px-6 space-y-32">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-2">Step 01</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Shortlist creators who respond and commit.</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Filter creators by location, platform, reach, and engagement. Track who shows interest and who is ready to move forward.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Real-time engagement data
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-emerald-500" icon="lucide:check"></iconify-icon> Bulk status updates
                        </li>
</ul>
</div>
<div className="order-1 md:order-2 bg-slate-900 border border-white/10 rounded-xl p-1 shadow-2xl">
<div className="bg-slate-950 rounded-lg border border-white/5 p-4">
<div className="flex justify-between items-center mb-4">
<div className="text-xs text-slate-500 font-medium">Creator List</div>
<div className="flex gap-2">
<span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">Filter: High Reach</span>
</div>
</div>
<div className="space-y-2">

<div className="flex items-center justify-between p-2 bg-slate-900 rounded border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-700"></div>
<div>
<div className="h-2 w-20 bg-slate-600 rounded mb-1"></div>
<div className="h-1.5 w-12 bg-slate-800 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] rounded font-medium">Interested</div>
</div>

<div className="flex items-center justify-between p-2 bg-slate-900 rounded border border-white/5 opacity-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-slate-700"></div>
<div>
<div className="h-2 w-24 bg-slate-600 rounded mb-1"></div>
<div className="h-1.5 w-10 bg-slate-800 rounded"></div>
</div>
</div>
<div className="px-2 py-1 bg-slate-800 text-slate-500 text-[10px] rounded font-medium">Pending</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2">
<div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-2">Step 02</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Pitch once. Confirm terms early.</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Share campaign briefs, negotiate pricing, and lock deliverables in one thread. No last-minute surprises.
                    </p>
</div>
<div className="order-1 bg-slate-900 border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 bg-amber-500 h-full"></div>
<div className="flex justify-between items-start mb-6">
<div className="space-y-1">
<div className="text-sm text-white font-medium">Campaign Brief: Summer Launch</div>
<div className="text-xs text-slate-500">Sent to 12 creators</div>
</div>
<span className="text-[10px] border border-amber-500 text-amber-500 px-2 py-1 rounded uppercase tracking-wider">Negotiating</span>
</div>
<div className="space-y-3">
<div className="bg-slate-950 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg w-5/6 text-xs text-slate-400 border border-white/5">
                            Here are the deliverables: 1 Reel + 2 Stories. Rate: ₹15k fixed.
                        </div>
<div className="bg-white/10 p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg w-5/6 ml-auto text-xs text-white">
                            Confirmed. Can we lock the posting date for the 24th?
                        </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-2">Step 03</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Schedule content without chasing people.</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                         Assign timelines, share guidelines, and manage tasks centrally. Creators know what to do and when to do it.
                    </p>
</div>
<div className="order-1 md:order-2 bg-slate-900 border border-white/10 rounded-xl p-1 shadow-2xl">
<div className="bg-slate-950 rounded-lg p-4 border border-white/5 grid grid-cols-7 gap-1 text-center">
<div className="text-[10px] text-slate-600 mb-2">M</div>
<div className="text-[10px] text-slate-600 mb-2">T</div>
<div className="text-[10px] text-slate-600 mb-2">W</div>
<div className="text-[10px] text-slate-600 mb-2">T</div>
<div className="text-[10px] text-slate-600 mb-2">F</div>
<div className="text-[10px] text-slate-600 mb-2">S</div>
<div className="text-[10px] text-slate-600 mb-2">S</div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
<div className="h-8 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-xs text-blue-400 relative">
                            24
                            <div className="absolute -bottom-1 w-1 h-1 bg-blue-500 rounded-full"></div>
</div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
<div className="h-8 rounded bg-slate-900 border border-white/5"></div>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-1 h-8 bg-blue-500 rounded-full"></div>
<div>
<div className="text-xs text-white font-medium">Reel Submission Deadline</div>
<div className="text-[10px] text-slate-500">Assigned to 8 creators</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2">
<div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-2">Step 04</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Review submissions before content goes live.</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        Collect submissions, request revisions, and approve content from one place. Maintain brand control without slowing campaigns down.
                    </p>
</div>
<div className="order-1 bg-slate-900 border border-white/10 rounded-xl p-4 shadow-2xl flex flex-col items-center">
<div className="w-48 h-64 bg-slate-800 rounded border border-white/5 mb-4 relative flex items-center justify-center">
<iconify-icon className="text-white/20 text-4xl" icon="lucide:play"></iconify-icon>
<div className="absolute bottom-2 left-2 bg-black/50 px-2 py-0.5 rounded text-[10px] text-white">0:45</div>
</div>
<div className="flex gap-2 w-full max-w-[200px]">
<button className="flex-1 bg-red-500/10 text-red-500 text-xs py-2 rounded border border-red-500/20 hover:bg-red-500/20">Reject</button>
<button className="flex-1 bg-emerald-500 text-white text-xs py-2 rounded font-medium hover:bg-emerald-600">Approve</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="text-xs font-bold text-red-500 tracking-wider uppercase mb-2">Step 05</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Track campaign progress in real time.</h3>
<p className="text-slate-400 leading-relaxed mb-6">
                        See how many creators are shortlisted, confirmed, submitted, and delivered. Identify bottlenecks before deadlines slip.
                    </p>
</div>
<div className="order-1 md:order-2 bg-slate-900 border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-medium text-white">Overall Progress</h4>
<span className="text-xs text-slate-500">65% Complete</span>
</div>
<div className="w-full bg-slate-800 h-2 rounded-full mb-6 overflow-hidden">
<div className="bg-gradient-to-r from-red-600 to-amber-500 h-full w-[65%]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-slate-950 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">Drafts Pending</div>
<div className="text-lg text-white font-semibold">12</div>
</div>
<div className="p-3 bg-slate-950 rounded border border-white/5">
<div className="text-[10px] text-slate-500 uppercase">Live Links</div>
<div className="text-lg text-emerald-500 font-semibold">24</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 text-slate-900 border-t border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Built for teams running creator campaigns at scale.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-slate-700 text-lg" icon="lucide:briefcase"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Brand Marketing Teams</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Coordinate internal approvals and manage timelines across multiple product lines seamlessly.
                    </p>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-slate-700 text-lg" icon="lucide:trending-up"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Performance Teams</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Scale UGC production for ads without getting bogged down in administrative chaos.
                    </p>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center mb-4">
<iconify-icon className="text-slate-700 text-lg" icon="lucide:building-2"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Agencies</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Manage multi-city campaigns for multiple clients with a single source of truth.
                    </p>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xs text-slate-500 font-medium bg-slate-100 inline-block px-3 py-1 rounded-full">
                    Note: If you run occasional influencer posts manually, this may be more than you need.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-b border-white/5" id="how-it-works">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 text-center">How Outreach works</h2>
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-white/10 -z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-white font-medium mb-4 group-hover:border-red-500 transition-colors">1</div>
<h4 className="text-sm text-white font-medium mb-1">Discover</h4>
<p className="text-xs text-slate-500 px-2">Shortlist creators</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-white font-medium mb-4 group-hover:border-red-500 transition-colors">2</div>
<h4 className="text-sm text-white font-medium mb-1">Brief</h4>
<p className="text-xs text-slate-500 px-2">Share campaign details</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-white font-medium mb-4 group-hover:border-red-500 transition-colors">3</div>
<h4 className="text-sm text-white font-medium mb-1">Track</h4>
<p className="text-xs text-slate-500 px-2">Monitor responses</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-white font-medium mb-4 group-hover:border-red-500 transition-colors">4</div>
<h4 className="text-sm text-white font-medium mb-1">Schedule</h4>
<p className="text-xs text-slate-500 px-2">Assign tasks</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-white font-medium mb-4 group-hover:border-red-500 transition-colors">5</div>
<h4 className="text-sm text-white font-medium mb-1">Approve</h4>
<p className="text-xs text-slate-500 px-2">Review deliverables</p>
</div>
</div>
<div className="text-center mt-12 text-slate-400 text-sm">
                One workflow. One source of truth.
            </div>
</div>
</section>

<footer className="py-24 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                Start your next creator campaign with control.
            </h2>
<p className="text-slate-400 text-lg mb-10">
                Create a pilot campaign and see how Outreach fits your workflow.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-md text-sm font-semibold transition-all shadow-lg shadow-red-900/20 w-full md:w-auto">
                    Start a campaign pilot
                </button>
<button className="px-8 py-3.5 rounded-md text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all w-full md:w-auto">
                    Request a demo
                </button>
</div>
</div>
<div className="mt-24 border-t border-white/5 pt-8 max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-slate-600">
<div>
                © 2023 Outreach by Oye Creators. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
