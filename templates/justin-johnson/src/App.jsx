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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<nav aria-label="Main navigation" className="glass-panel w-full max-w-3xl rounded-full p-2 pl-4 flex items-center justify-between shadow-2xl shadow-black/50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center transition-all group-hover:bg-blue-500/20 group-hover:scale-105">
<iconify-icon className="text-blue-500" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-white tracking-tight">Justin Jay Johnson</span>
</a>
<a className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-2 border border-blue-500/50" href="#cta">
                Book Call
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</nav>
</header>
<main className="">

<section className="relative min-h-screen pt-40 pb-24 overflow-hidden flex flex-col items-center">

<div className="z-0 opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="wave-layer"></div>
<div className="data-lines"></div>

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen z-0"></div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs uppercase font-semibold tracking-wider mb-8 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-ring"></div>
                    Software Sales Execution
                </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl">
                    You're Not Losing Deals <br className="hidden md:block"/>
<span className="text-zinc-500">Because of Price.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 font-normal max-w-2xl mb-12 leading-relaxed">
                    Most deals are lost in how conversations are handled. Justin Jay Johnson shows reps how to win the moments that actually decide deals.
                </p>

<div className="w-full max-w-3xl mb-8 group relative cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative aspect-video bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-blue-500/30 shadow-2xl">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
<div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
<iconify-icon className="text-blue-500 ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 font-mono tracking-widest uppercase mb-2">[VIDEO PLACEHOLDER]</span>
<span className="text-sm text-zinc-300 font-medium">Watch: Why Deals Stall and How to Fix It</span>
</div>
</div>

<div className="w-full max-w-3xl bg-[#0A0A0A]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-10 text-left shadow-xl mb-12">
<p className="text-lg text-zinc-300 mb-6">If your pipeline looks strong but deals aren't closing, the issue isn't activity. <span className="text-white font-semibold">It's execution.</span></p>
<div className="grid md:grid-cols-2 gap-8">
<div>
<p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold mb-4">Most reps:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Run discovery but miss what matters</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Present too early or too late</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Lose control when deals get complex</span>
</li>
<li className="flex items-start gap-3 text-zinc-400 text-base">
<iconify-icon className="text-zinc-600 shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Struggle in late-stage conversations</span>
</li>
</ul>
</div>
<div>
<p className="text-sm text-blue-500 uppercase tracking-wider font-semibold mb-4">In this video, Justin breaks down:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-zinc-300 text-base">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Where deals actually fall apart</span>
</li>
<li className="flex items-start gap-3 text-zinc-300 text-base">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>What top reps do differently in real conversations</span>
</li>
<li className="flex items-start gap-3 text-zinc-300 text-base">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>How to handle moments that decide the outcome</span>
</li>
</ul>
</div>
</div>
</div>

<a className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_50px_rgba(59,130,246,0.4)] border border-blue-400/30 hover:bg-blue-500" href="#cta">
                    Fix My Close Rate
                    <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50 relative z-10">
<div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
<p className="text-sm text-zinc-500 font-medium mb-8 text-center uppercase tracking-wider">Software sales reps improving deal execution</p>
<div className="w-full h-20 border border-white/10 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-zinc-600 font-mono text-xs tracking-widest relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-900/50 group-hover:bg-zinc-900/80 transition-colors"></div>
<iconify-icon className="mr-2" icon="solar:gallery-wide-linear" width="24"></iconify-icon>
                    [IMAGE PLACEHOLDER: LOGO STRIP]
                </div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="problem">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Why Deals Slip Even When <br className="hidden md:block"/> Pipeline Looks Strong</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
<iconify-icon className="text-blue-500" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Deals stall late</h3>
<p className="text-zinc-400 text-base leading-relaxed">Conversations lose momentum when it matters most.</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
<iconify-icon className="text-blue-500" icon="solar:magnifer-zoom-out-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Discovery is surface-level</h3>
<p className="text-zinc-400 text-base leading-relaxed">Reps miss what actually drives decisions.</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
<iconify-icon className="text-blue-500" icon="solar:ghost-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Buyers go silent</h3>
<p className="text-zinc-400 text-base leading-relaxed">Not because they're not interested — but because nothing changed.</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
<iconify-icon className="text-blue-500" icon="solar:clipboard-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Reps rely on process instead of judgment</h3>
<p className="text-zinc-400 text-base leading-relaxed">Following steps instead of reading the situation.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-10 leading-tight">
                    The Problem Isn't Your Pipeline. <br/>
<span className="text-blue-500">It's How You Work Deals.</span>
</h2>
<div className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed space-y-6 mb-12">
<p>More calls won't fix this.</p>
<p>More activity won't fix this.</p>
<p className="text-white font-medium mt-10 mb-6">Deals are won or lost in:</p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
<div className="flex items-center gap-2 bg-black border border-white/10 px-5 py-3 rounded-full text-zinc-300 shadow-lg">
<iconify-icon className="text-blue-500" icon="solar:shield-warning-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">How you handle uncertainty</span>
</div>
<div className="flex items-center gap-2 bg-black border border-white/10 px-5 py-3 rounded-full text-zinc-300 shadow-lg">
<iconify-icon className="text-blue-500" icon="solar:map-arrow-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">How you guide conversations</span>
</div>
<div className="flex items-center gap-2 bg-black border border-white/10 px-5 py-3 rounded-full text-zinc-300 shadow-lg">
<iconify-icon className="text-blue-500" icon="solar:bolt-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">How you respond in real time</span>
</div>
</div>
<div className="inline-block bg-blue-500/10 border border-blue-500/20 px-8 py-5 rounded-2xl">
<p className="text-lg text-zinc-300">That's not a script problem. <br/><span className="text-white font-semibold">That's an execution problem.</span></p>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Deal-Level Execution</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">Top reps don't rely on perfect process. They focus on:</p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/5">
<iconify-icon className="text-blue-500" icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base mb-1">Reading the deal</h4>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/5">
<iconify-icon className="text-blue-500" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base mb-1">Adapting to the moment</h4>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/5">
<iconify-icon className="text-blue-500" icon="solar:gamepad-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-base mb-1">Controlling the conversation</h4>
</div>
</li>
</ul>
<div className="pt-6 border-t border-white/10">
<p className="text-zinc-500 text-sm uppercase tracking-wide font-semibold mb-2">This is what separates:</p>
<p className="text-xl text-white font-medium">Average pipeline <span className="text-zinc-600 mx-2">→</span> <span className="text-blue-400">Closed revenue</span></p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full"></div>
<div className="glass-card aspect-square rounded-2xl flex flex-col items-center justify-center border border-white/10 relative p-8 text-center group overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<iconify-icon className="text-blue-500/50 mb-6 group-hover:scale-110 transition-transform duration-500" icon="solar:graph-up-linear" width="64"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono tracking-widest uppercase relative z-10">[EXECUTION DIAGRAM PLACEHOLDER]</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="glass-card rounded-3xl p-2 md:p-4 border border-white/10 overflow-hidden shadow-2xl relative">
<div className="aspect-[21/9] bg-zinc-900 rounded-2xl flex flex-col items-center justify-center border border-white/5 relative overflow-hidden group">
<iconify-icon className="text-zinc-700 mb-4" icon="solar:users-group-rounded-linear" width="48"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono tracking-widest uppercase relative z-10">[IMAGE PLACEHOLDER]</span>
<p className="text-xs text-zinc-600 mt-2 font-medium">Sales reps improving deal execution with Justin</p>
</div>
<div className="p-8 md:p-12 text-center">
<iconify-icon className="text-white/10 mb-6" icon="solar:quote-right-bold" width="32"></iconify-icon>
<p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light italic max-w-2xl mx-auto">
                            "Reps use Justin's approach to improve how they handle real sales conversations and close more deals."
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">How Justin Improves <br className="hidden md:block"/> Deal Execution</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-16 relative">

<div className="hidden md:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 z-0"></div>

<div className="glass-card p-8 rounded-2xl relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-500 font-mono font-semibold text-lg">
                            01
                        </div>
<h3 className="text-lg font-semibold text-white mb-3">Break Down</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Break down how deals are currently being run.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-500 font-mono font-semibold text-lg">
                            02
                        </div>
<h3 className="text-lg font-semibold text-white mb-3">Identify</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Identify where execution breaks down.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-blue-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-blue-500 font-mono font-semibold text-lg">
                            03
                        </div>
<h3 className="text-lg font-semibold text-white mb-3">Train</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Train reps to handle real sales moments.</p>
</div>
</div>
<div className="flex justify-center">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20" href="#cta">
                        Improve My Deal Execution
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-y border-white/5 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-4">
<div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border border-white/5">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Deal Execution Coaching</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border border-white/5">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Sales Conversation Training</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border border-white/5">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Closing Strategy Development</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border border-white/5">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Sales Performance Coaching</span>
</div>
<div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border border-white/5 md:col-span-2">
<iconify-icon className="text-blue-500 shrink-0" icon="solar:check-read-linear" width="24"></iconify-icon>
<span className="text-white font-medium">Team Sales Workshops</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/5] bg-zinc-900 rounded-3xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
<iconify-icon className="text-zinc-700 mb-4" icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono tracking-widest uppercase relative z-10">[IMAGE PLACEHOLDER]</span>
</div>
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Hi, I'm Justin Jay Johnson.</h2>
<div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
<p>I work with software sales reps who have pipeline but aren't closing at the level they should.</p>
<p>The gap isn't effort — it's how deals are handled.</p>
<p className="text-white font-medium border-l-2 border-blue-500 pl-4 py-1">My focus is helping reps improve execution in real conversations so more deals actually close.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative z-10">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-2">
<details className="group glass-panel rounded-xl border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>Who is this for?</span>
<span className="transition duration-300 group-open:-rotate-180 text-blue-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            B2B SaaS reps and sales teams.
                        </div>
</details>
<details className="group glass-panel rounded-xl border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>Is this closing training?</span>
<span className="transition duration-300 group-open:-rotate-180 text-blue-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            It's focused on deal execution and real conversations.
                        </div>
</details>
<details className="group glass-panel rounded-xl border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>Does this help experienced reps?</span>
<span className="transition duration-300 group-open:-rotate-180 text-blue-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            Yes — especially reps with pipeline but low close rates.
                        </div>
</details>
<details className="group glass-panel rounded-xl border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>What makes this different?</span>
<span className="transition duration-300 group-open:-rotate-180 text-blue-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            Focus on real deal situations, not generic frameworks.
                        </div>
</details>
<details className="group glass-panel rounded-xl border border-white/5 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-white">
<span>How do we start?</span>
<span className="transition duration-300 group-open:-rotate-180 text-blue-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                            Book a call.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden" id="cta">
<div className="absolute inset-0 bg-grid-pattern opacity-30 z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Close More of the Deals <br className="hidden md:block"/> You Already Have</h2>
<p className="text-lg text-zinc-400 mb-12 max-w-xl mx-auto">Book a call to see how your deal execution can be improved.</p>

<div className="w-full max-w-2xl mx-auto bg-[#0A0A0A] border border-white/10 rounded-2xl h-[400px] flex flex-col items-center justify-center mb-10 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-900/50"></div>
<iconify-icon className="text-zinc-600 mb-4 relative z-10" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span className="text-sm text-zinc-400 font-mono tracking-widest uppercase relative z-10">[CALENDLY PLACEHOLDER]</span>
</div>
<button className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-blue-600 px-10 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-400/30 hover:bg-blue-500">
                    Book My Call
                    <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</section>
</main>
<footer className="py-8 border-t border-white/10 bg-black text-center text-zinc-600 text-sm">
<p>© 2024 Justin Jay Johnson. All rights reserved.</p>
</footer>

    </>
  );
}
