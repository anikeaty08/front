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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(50,50,60,0.15),transparent_70%)] blur-3xl animate-flow-slow"></div>
<div className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle_at_center,rgba(40,40,45,0.15),transparent_70%)] blur-3xl animate-flow-slow" style={{animationDelay: '-5s', animationDuration: '25s'}}></div>
<div className="absolute -bottom-[20%] left-[20%] w-[70%] h-[60%] rounded-full bg-[radial-gradient(circle_at_center,rgba(60,60,65,0.1),transparent_70%)] blur-3xl animate-flow-slow" style={{animationDelay: '-10s', animationDuration: '22s'}}></div>
</div>
<div className="relative min-h-screen z-10">

<header className="sticky top-0 z-30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="fade-in-blur delay-100 flex sm:px-4 bg-zinc-950/60 h-16 border-white/5 border rounded-b-xl pr-3 pl-3 backdrop-blur items-center justify-between">

<a className="flex items-center gap-3" href="#">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<iconify-icon className="h-5 w-5 text-white/90" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-base font-medium tracking-tight cursor-pointer">Richard Moore</span>
</a>


<div className="flex items-center gap-2">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.02)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.05)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.15), rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[120px] transition-colors duration-300 group-hover:bg-zinc-900/80 font-normal bg-zinc-900 w-full h-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4">
<span>Book a Call</span>
</span>
</button>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 hover:bg-white/5">
<iconify-icon className="h-4 w-4" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-16 sm:pt-24 pb-16">
<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

<div className="fade-in-blur delay-200 mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-inset ring-white/10 backdrop-blur">
<span className="text-xs font-medium text-zinc-300">Insight</span>
<span className="text-xs font-normal text-white/70">Buyer Behavior Focus</span>
</div>

<h1 className="fade-in-up delay-300 mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
          You’re Not Struggling to Sell.<br className="hidden sm:block"/> You’re Misunderstanding Buyers
        </h1>

<p className="fade-in-up delay-400 mt-5 max-w-2xl mx-auto text-base sm:text-lg text-white/60 font-light">
          Most sales approaches focus on tactics. Richard Moore focuses on how people actually think, decide, and buy.
        </p>

<div className="fade-in-up delay-500 mt-12 mb-12 relative mx-auto max-w-4xl rounded-2xl bg-zinc-900/40 ring-1 ring-inset ring-white/10 p-2 backdrop-blur-sm shadow-2xl shadow-black/50">
<div className="absolute top-4 left-4 z-20 inline-flex items-center rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/10 backdrop-blur">
            Watch: Why Buyers Don’t Decide
          </div>
<div className="aspect-[16/9] w-full rounded-xl bg-zinc-950 ring-1 ring-inset ring-white/5 flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent)] opacity-50"></div>
<span className="text-zinc-600 font-medium tracking-widest text-sm sm:text-base z-10 group-hover:scale-[1.02] transition-transform duration-500">VIDEO PLACEHOLDER</span>
<div className="absolute z-10 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md ring-1 ring-white/10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shadow-xl">
<iconify-icon className="text-2xl text-white/80 ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>

<div className="fade-in-up delay-600 max-w-4xl mx-auto text-left grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-white/5 rounded-2xl p-6 sm:p-8 ring-1 ring-inset ring-white/10">
<div>
<p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-4">
              If your conversations aren’t leading to decisions, the issue isn’t effort. <br/><br/>
<span className="text-white font-medium">It’s understanding.</span>
</p>
<button className="inline-flex items-center gap-2 ring-inset hover:bg-white/10 transition ring-white/15 ring-1 text-sm font-medium text-white/90 bg-white/5 rounded-lg pt-3 pr-6 pb-3 pl-6 backdrop-blur" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
              Improve My Conversations
              <iconify-icon className="h-4 w-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div>
<p className="text-sm font-medium text-zinc-400 mb-3">Most people:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="h-5 w-5 text-zinc-500 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>try to persuade instead of understand</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="h-5 w-5 text-zinc-500 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>focus on what to say instead of what matters</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="h-5 w-5 text-zinc-500 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>miss how buyers actually make decisions</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="h-5 w-5 text-zinc-500 shrink-0" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>rely on tactics instead of insight</span>
</li>
</ul>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="text-xs text-zinc-400">In this video, Richard breaks down why buyers hesitate, how trust is built, and what drives real decisions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-10 fade-in-up delay-600 border-y border-white/5 bg-zinc-950/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-6">
<p className="text-xs font-normal text-zinc-500 tracking-wide uppercase">Professionals improving sales conversations</p>
</div>
<div className="relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="ticker-track flex gap-8 sm:gap-16 items-center">
<div className="flex gap-8 sm:gap-16 shrink-0 items-center opacity-40 grayscale">

<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
</div>
<div className="flex gap-8 sm:gap-16 shrink-0 items-center opacity-40 grayscale">
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
<div className="px-4 py-2 ring-1 ring-white/10 rounded text-xs tracking-widest text-white/50 bg-white/5">IMAGE PLACEHOLDER</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="approach">

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center mb-20 sm:mb-32">
<div className="slide-in-scale delay-200 order-2 md:order-1 relative">
<div className="ring-inset p-6 sm:p-8 bg-zinc-900/30 ring-white/10 ring-1 rounded-2xl">
<h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-6">Why Sales Conversations Don’t Lead to Decisions</h3>
<div className="space-y-4">
<div className="flex items-start gap-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
<iconify-icon className="h-6 w-6 text-zinc-400 shrink-0" icon="solar:user-cross-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white/90">Misunderstanding buyers</div>
<div className="text-xs text-white/50 mt-1">Focus is on selling, not understanding.</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
<iconify-icon className="h-6 w-6 text-zinc-400 shrink-0" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white/90">Overuse of tactics</div>
<div className="text-xs text-white/50 mt-1">Approaches feel forced.</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
<iconify-icon className="h-6 w-6 text-zinc-400 shrink-0" icon="solar:shield-cross-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white/90">Lack of trust</div>
<div className="text-xs text-white/50 mt-1">Buyers hesitate to move forward.</div>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 p-4">
<iconify-icon className="h-6 w-6 text-zinc-400 shrink-0" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-medium text-white/90">Conversations lack depth</div>
<div className="text-xs text-white/50 mt-1">Real issues aren’t uncovered.</div>
</div>
</div>
</div>
</div>
</div>
<div className="fade-in-right delay-300 order-1 md:order-2">
<div className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10">The Core Issue</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">The Problem Isn’t Selling.<br/> It’s Thinking</h3>
<p className="mt-4 text-sm sm:text-base lg:text-lg text-white/60 font-light leading-relaxed">
            More scripts won’t fix this.<br/>
            More techniques won’t fix this.
          </p>
<div className="mt-6 p-5 rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
<p className="text-sm font-medium text-white/80 mb-3">Better outcomes come from:</p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
                understanding people
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
                building trust
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
                guiding decisions
              </li>
</ul>
</div>
</div>
</div>

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center">
<div className="fade-in-left delay-400 order-1">
<div className="mb-4 inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10">The Solution</div>
<h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">Buyer-Centered Selling</h3>
<p className="mt-4 text-sm sm:text-base lg:text-lg text-white/60 font-light leading-relaxed">
            Top performers don’t push. They understand deeply, ask better questions, and guide thinking.
          </p>
<div className="mt-6 flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl ring-1 ring-inset ring-white/10">
<span className="text-sm text-zinc-400">Conversations</span>
<iconify-icon className="text-zinc-500" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-sm font-medium text-white/90">Decisions</span>
</div>
</div>
<div className="slide-in-scale delay-500 order-2">
<div className="ring-inset p-6 bg-zinc-900/30 ring-white/10 ring-1 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full"></div>
<div className="space-y-4 relative z-10">
<div className="p-5 rounded-xl bg-black/40 ring-1 ring-inset ring-white/10 flex flex-col items-center justify-center text-center aspect-[4/3]">
<iconify-icon className="text-4xl text-zinc-400 mb-4 opacity-50" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<div className="text-sm font-medium text-white/90 mb-2">Shift Perspective</div>
<div className="text-xs text-zinc-400 max-w-[200px]">Understand the psychology behind why buyers hesitate and how they evaluate risk.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight">Professionals improving how they sell</h2>
<p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl mx-auto font-light">
          Professionals use Richard Moore’s approach to improve how they understand buyers and guide conversations.
        </p>
</div>
<div className="mt-10 fade-in-blur delay-200 rounded-2xl bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-8 sm:p-12 text-center relative overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]"></div>
<div className="z-10 bg-black/40 px-6 py-4 rounded-lg ring-1 ring-white/10 mb-6">
<span className="text-sm font-medium tracking-widest text-zinc-500">IMAGE PLACEHOLDER</span>
</div>
<p className="text-sm text-zinc-400 italic max-w-lg mx-auto z-10">
          "Replacing typical success story imagery with an abstract placeholder representing professionals implementing these insights."
        </p>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8" id="process">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center mb-12">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10">Methodology</span>
<h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">How Richard Improves Sales Conversations</h2>
</div>
<div className="grid gap-6 sm:gap-8 md:grid-cols-3">

<div className="slide-in-scale delay-200 rounded-2xl bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-6 sm:p-8 flex flex-col h-full">
<div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
<span className="text-sm font-medium text-white/80">1</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Understand current approach</h3>
<p className="text-sm text-white/60 font-light leading-relaxed flex-grow">Analyze your existing patterns, where conversations stall, and identify gaps in understanding the buyer's actual needs.</p>
</div>

<div className="slide-in-scale delay-300 rounded-2xl bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-6 sm:p-8 flex flex-col h-full">
<div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
<span className="text-sm font-medium text-white/80">2</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Shift thinking and perspective</h3>
<p className="text-sm text-white/60 font-light leading-relaxed flex-grow">Move away from tactic-based pushing towards a psychology-based approach of understanding decision-making frameworks.</p>
</div>

<div className="slide-in-scale delay-400 rounded-2xl bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-6 sm:p-8 flex flex-col h-full">
<div className="mb-6 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 ring-1 ring-inset ring-white/10">
<span className="text-sm font-medium text-white/80">3</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3">Improve conversations and outcomes</h3>
<p className="text-sm text-white/60 font-light leading-relaxed flex-grow">Implement new frameworks that build trust organically and guide prospects to confident decisions.</p>
</div>
</div>
<div className="mt-12 text-center fade-in-up delay-500">
<button className="inline-flex items-center gap-2 ring-inset hover:bg-white/10 transition ring-white/15 ring-1 text-sm font-medium text-white/90 bg-white/5 rounded-lg pt-3 pr-6 pb-3 pl-6 backdrop-blur" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
          Improve My Approach
          <iconify-icon className="h-4 w-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
<div className="fade-in-up delay-100 rounded-2xl bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-8 sm:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight">What’s Included in the Process</h2>
</div>
<div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-start gap-4">
<div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Sales Psychology Training</div>
<div className="text-xs text-white/50 mt-1 font-light">Deep dive into cognitive biases and decision triggers.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Buyer Behavior Insights</div>
<div className="text-xs text-white/50 mt-1 font-light">Understand how modern buyers evaluate risk and value.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Conversation Frameworks</div>
<div className="text-xs text-white/50 mt-1 font-light">Structures to guide discussions without scripts.</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Decision-Making Guidance</div>
<div className="text-xs text-white/50 mt-1 font-light">Techniques to help buyers navigate uncertainty.</div>
</div>
</div>
<div className="flex items-start gap-4 sm:col-span-2 sm:w-1/2 sm:mx-auto">
<div className="mt-1 flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 ring-1 ring-inset ring-white/10 shrink-0">
<iconify-icon className="text-zinc-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white/90">Workshops &amp; Programs</div>
<div className="text-xs text-white/50 mt-1 font-light">Interactive sessions to apply insights to real scenarios.</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8" id="about">
<div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center bg-zinc-900/30 ring-1 ring-inset ring-white/10 p-6 sm:p-10 rounded-2xl fade-in-blur delay-200">
<div className="aspect-square bg-black/40 rounded-xl ring-1 ring-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent)]"></div>
<span className="text-sm font-medium tracking-widest text-zinc-500 z-10">IMAGE PLACEHOLDER</span>
</div>
<div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4">Hi, I’m Richard Moore.</h2>
<div className="space-y-4 text-sm sm:text-base text-white/60 font-light leading-relaxed">
<p>I work with professionals who want better outcomes from their sales conversations.</p>
<p>The issue isn’t effort — it’s understanding.</p>
<p>My focus is helping you understand how buyers think so you can guide better decisions.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-4xl mx-auto pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
<div className="fade-in-up delay-100 text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4 fade-in-blur delay-200">
<div className="bg-zinc-900/30 ring-1 ring-inset ring-white/10 rounded-xl p-5">
<h4 className="text-sm font-medium text-white/90 mb-2">Who is this for?</h4>
<p className="text-xs sm:text-sm text-white/60 font-light">Sales professionals, consultants, and leaders.</p>
</div>
<div className="bg-zinc-900/30 ring-1 ring-inset ring-white/10 rounded-xl p-5">
<h4 className="text-sm font-medium text-white/90 mb-2">Is this sales training?</h4>
<p className="text-xs sm:text-sm text-white/60 font-light">It’s focused on psychology and decision-making, moving beyond traditional tactical sales training.</p>
</div>
<div className="bg-zinc-900/30 ring-1 ring-inset ring-white/10 rounded-xl p-5">
<h4 className="text-sm font-medium text-white/90 mb-2">Does this work for experienced professionals?</h4>
<p className="text-xs sm:text-sm text-white/60 font-light">Yes, especially those wanting deeper understanding and looking to refine their approach beyond basics.</p>
</div>
<div className="bg-zinc-900/30 ring-1 ring-inset ring-white/10 rounded-xl p-5">
<h4 className="text-sm font-medium text-white/90 mb-2">What makes this different?</h4>
<p className="text-xs sm:text-sm text-white/60 font-light">Focus on thinking, not tactics. It's about fundamentally understanding buyer behavior.</p>
</div>
<div className="bg-zinc-900/30 ring-1 ring-inset ring-white/10 rounded-xl p-5">
<h4 className="text-sm font-medium text-white/90 mb-2">How do we start?</h4>
<p className="text-xs sm:text-sm text-white/60 font-light">Book a call using the calendar below to discuss your specific context.</p>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="fade-in-blur delay-200 rounded-2xl bg-zinc-900/40 ring-1 ring-inset ring-white/10 p-6 sm:p-8 lg:p-12 shadow-2xl">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-left">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-inset ring-white/10 mb-6">Take Action</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4">Improve How You Sell</h2>
<p className="text-base text-white/60 font-light mb-8 max-w-md">
                Book a call to improve how your conversations lead to decisions. We'll discuss your current approach and where shifts in thinking can create impact.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                  No pressure, exploratory conversation
                </li>
<li className="flex items-center gap-3 text-sm text-white/80">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon>
                  Identify immediate blindspots
                </li>
</ul>
</div>
<div className="bg-black/40 rounded-xl ring-1 ring-white/10 p-2 relative overflow-hidden h-[400px] flex items-center justify-center group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none"></div>
<div className="text-center z-10">
<span className="text-sm font-medium tracking-widest text-zinc-500 block mb-4">CALENDLY PLACEHOLDER</span>
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.02)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.05)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.15), rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[140px] transition-colors duration-300 group-hover:bg-zinc-900/80 font-medium bg-zinc-900 w-full h-full rounded-lg pt-3 pr-5 pb-3 pl-5">
<span>Book My Call</span>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 py-12 text-center bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-center gap-3 mb-6">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<iconify-icon className="h-5 w-5 text-white/90" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span className="text-base tracking-tight font-medium">Richard Moore</span>
</div>
<p className="text-xs text-white/50 font-light max-w-md mx-auto mb-8">
          Focusing on how people actually think, decide, and buy. Buyer-Centered Selling methodologies.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-xs text-white/40">
<span>© 2024 Richard Moore. All rights reserved.</span>
<div className="flex gap-4">
<a className="hover:text-white/80 transition" href="#">LinkedIn</a>
<a className="hover:text-white/80 transition" href="#">YouTube</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
