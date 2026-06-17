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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 saturate-0 absolute">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/fireparticleloaderanimationdrstrangeporta-2XtNK3LbyCGmClvus9SdgnYJ/" width="100%"></iframe>
</div>
</div>

<div className="relative min-h-screen">

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="fade-in-blur delay-100 flex h-16 items-center justify-between rounded-b-xl bg-black/80 backdrop-blur-md border border-white/5 px-3 sm:px-4">

<a className="flex items-center gap-3" href="#">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<iconify-icon className="text-purple-400" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
</span>
<span className="text-base font-semibold tracking-tight cursor-pointer">samsales</span>
</a>


<div className="flex items-center gap-2">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[130px] transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 w-full h-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4">
<span>Fix My Outreach</span>
<iconify-icon className="transition-transform duration-300 group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg ring-1 ring-white/10 hover:bg-white/5">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-20 sm:pt-28 pb-16 sm:pb-24">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="chat-bubble-bg w-24 h-16 left-[10%] animation-delay-0"></div>
<div className="chat-bubble-bg w-32 h-20 left-[25%] animation-delay-200" style={{animationDelay: '2s', animationDuration: '18s'}}></div>
<div className="chat-bubble-bg w-20 h-12 left-[80%] animation-delay-500" style={{animationDelay: '5s', animationDuration: '14s'}}></div>
<div className="chat-bubble-bg w-28 h-16 left-[65%] animation-delay-700" style={{animationDelay: '8s', animationDuration: '20s'}}></div>
<div className="chat-bubble-bg w-16 h-10 left-[45%] animation-delay-300" style={{animationDelay: '11s', animationDuration: '16s'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
<path d="M100,500 C300,400 400,600 800,200" fill="none" stroke="white" stroke-dasharray="10 10" strokeWidth="2"></path>
<path d="M500,800 C600,600 700,700 1200,300" fill="none" stroke="white" stroke-dasharray="10 10" strokeWidth="2"></path>
</svg>
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
<div className="relative h-[44rem] w-[44rem] max-w-none opacity-30 animate-rotate-slow">
<div className="absolute inset-0 rounded-full blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.35),rgba(0,0,0,0)_60%)]"></div>
</div>
</div>
<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">

<div className="fade-in-blur delay-200 mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-inset ring-white/10 backdrop-blur">
<span className="text-[11px] font-semibold text-purple-300">Authentic Sales</span>
<span className="text-[12px] font-medium text-white/80">Human-First Outreach Approach</span>
</div>

<h1 className="fade-in-up delay-300 mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.1]">
            Your Outreach Isn't Working Because It Feels Like Spam
          </h1>

<p className="fade-in-up delay-400 mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/70">
            Most sales messages get ignored because they feel automated. Samantha McKenna helps you create outreach that actually feels human.
          </p>

<div className="fade-in-up delay-500 mt-12 mx-auto max-w-3xl">
<div className="text-xs text-white/50 mb-4 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
<iconify-icon height="16" icon="solar:play-circle-linear" width="16"></iconify-icon>
              Watch: Why Your Outreach Gets Ignored
            </div>

<div className="aspect-video bg-black/60 ring-1 ring-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-purple-900/20 backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<iconify-icon className="text-white/80 z-20 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" height="64" icon="solar:play-bold" width="64"></iconify-icon>
<span className="absolute bottom-6 left-6 text-white/40 font-mono text-sm z-20 font-medium tracking-wide">VIDEO PLACEHOLDER</span>
</div>
</div>

<div className="fade-in-up delay-600 mt-8 max-w-3xl mx-auto text-left bg-white/[0.03] ring-1 ring-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
<div className="grid sm:grid-cols-2 gap-8">
<div>
<p className="text-base text-white/90 mb-4 font-medium leading-relaxed">If your messages aren't getting replies, the issue isn't volume. It's how they come across.</p>
<p className="text-sm text-white/60 mb-3 uppercase tracking-wider font-semibold">Most reps:</p>
<ul className="space-y-2.5 text-sm text-white/80">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span>Send generic templated messages</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span>Use fake or superficial personalization</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span>Focus on selling way too quickly</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-zinc-500 mt-0.5 shrink-0" height="18" icon="solar:close-circle-linear" width="18"></iconify-icon>
<span>Sound exactly like everyone else</span>
</li>
</ul>
</div>
<div className="sm:border-l border-white/10 sm:pl-8">
<p className="text-sm text-white/60 mb-3 uppercase tracking-wider font-semibold">In this video, Sam breaks down:</p>
<ul className="space-y-2.5 text-sm text-white/80 mb-8">
<li className="flex items-start gap-2.5">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>Why most outreach feels like spam</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>What real personalization actually looks like</span>
</li>
<li className="flex items-start gap-2.5">
<iconify-icon className="text-purple-400 mt-0.5 shrink-0" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
<span>How to create messages people want to respond to</span>
</li>
</ul>
<a className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3.5 text-sm font-semibold shadow-sm hover:bg-zinc-200 transition-colors" href="#contact">
                  Fix My Outreach
                  <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 sm:py-16 fade-in-up delay-700">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-6">
<p className="uppercase text-xs font-semibold text-zinc-500 tracking-widest">Sales teams improving outreach and conversations</p>
</div>

<div className="h-24 sm:h-32 w-full bg-white/[0.02] ring-1 ring-white/5 rounded-2xl flex items-center justify-center relative overflow-hidden group border border-dashed border-white/10">
<span className="text-white/30 font-mono text-sm tracking-widest font-medium">IMAGE PLACEHOLDER (CLIENT LOGOS)</span>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="fade-in-up delay-100 mx-auto max-w-3xl text-center mb-16">
<span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400 ring-1 ring-inset ring-red-500/20 font-medium">Deep Diagnosis</span>
<h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Why Your Outreach Gets Ignored</h2>
</div>

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center mb-16">

<div className="fade-in-left delay-200 relative order-2 md:order-1">
<div className="ring-inset p-4 sm:p-6 bg-[#000000]/20 ring-white/10 ring-1 rounded-2xl backdrop-blur-sm">
<div className="mb-4 inline-flex items-center rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-1 text-xs text-white/70">
<span className="px-3 py-1 rounded-md bg-white/10 text-white font-medium">Outbox (Sent)</span>
<span className="px-3 py-1 rounded-md">Failed to connect</span>
</div>

<div className="space-y-2.5 relative overflow-hidden" style={{height: '240px'}}>
<div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-up">

<div className="flex items-center justify-between rounded-lg bg-black/60 ring-1 ring-inset ring-red-500/20 px-3 py-3 border-l-2 border-l-red-500/50">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<iconify-icon className="text-zinc-400" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-white/90">Quick question about {{Company}}</div>
<div className="text-[11px] text-white/50 truncate w-48">Hi {{First_Name}}, hope you're doing well today...</div>
</div>
</div>
<span className="text-[10px] text-red-400 font-medium bg-red-500/10 px-2 py-1 rounded ring-1 ring-red-500/20">Ignored</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/60 ring-1 ring-inset ring-red-500/20 px-3 py-3 border-l-2 border-l-red-500/50">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<iconify-icon className="text-zinc-400" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-white/90">Synergies between our companies</div>
<div className="text-[11px] text-white/50 truncate w-48">I saw you went to college. Go team! Anyway...</div>
</div>
</div>
<span className="text-[10px] text-red-400 font-medium bg-red-500/10 px-2 py-1 rounded ring-1 ring-red-500/20">Archived</span>
</div>

<div className="flex items-center justify-between rounded-lg bg-black/60 ring-1 ring-inset ring-red-500/20 px-3 py-3 border-l-2 border-l-red-500/50">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
<iconify-icon className="text-zinc-400" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</span>
<div>
<div className="text-sm font-medium text-white/90">15 mins to chat this week?</div>
<div className="text-[11px] text-white/50 truncate w-48">We are the leading provider of enterprise...</div>
</div>
</div>
<span className="text-[10px] text-red-400 font-medium bg-red-500/10 px-2 py-1 rounded ring-1 ring-red-500/20">Deleted</span>
</div>
</div>
</div>
</div>
</div>

<div className="fade-in-right delay-300 order-1 md:order-2 space-y-8">
<div>
<div className="mb-3 inline-flex items-center gap-2">
<iconify-icon className="text-zinc-400" height="20" icon="solar:robot-linear" width="20"></iconify-icon>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Messages feel automated</h3>
</div>
<p className="text-base text-white/60">Prospects instantly disengage when they smell automation. If it looks like a template, it gets treated like spam.</p>
</div>
<div>
<div className="mb-3 inline-flex items-center gap-2">
<iconify-icon className="text-zinc-400" height="20" icon="solar:user-cross-linear" width="20"></iconify-icon>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Fake personalization</h3>
</div>
<p className="text-base text-white/60">Mentioning their college or a generic recent post isn't real personalization. Superficial details don't create relevance or earn the right to their time.</p>
</div>
</div>
</div>

<div className="grid gap-8 lg:gap-16 md:grid-cols-2 items-center">

<div className="fade-in-left delay-400 order-1 space-y-8">
<div>
<div className="mb-3 inline-flex items-center gap-2">
<iconify-icon className="text-zinc-400" height="20" icon="solar:cart-cross-linear" width="20"></iconify-icon>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Too focused on selling</h3>
</div>
<p className="text-base text-white/60">Pitching in the first breath guarantees rejection. When you sell before you connect, conversations never start.</p>
</div>
<div>
<div className="mb-3 inline-flex items-center gap-2">
<iconify-icon className="text-zinc-400" height="20" icon="solar:copy-linear" width="20"></iconify-icon>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">No differentiation</h3>
</div>
<p className="text-base text-white/60">"We help companies like yours scale..." Everything sounds exactly the same. You blend in with the hundreds of other pitches in their inbox.</p>
</div>
</div>

<div className="fade-in-right delay-500 order-2">
<div className="ring-inset p-4 sm:p-6 bg-[#000000]/20 ring-white/10 ring-1 rounded-2xl relative overflow-hidden backdrop-blur-sm">
<div className="ring-inset relative overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg p-4 sm:p-5">
<div className="flex flex-col items-center text-center mb-6">
<div className="text-sm font-medium text-white/90">Automated Sequence Flow</div>
<div className="mt-1 text-[11px] text-white/50">The reason conversations aren't happening</div>
</div>

<div className="h-40 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
<div className="animate-scroll-vertical flex flex-col gap-3">
<div className="flex items-center gap-3 bg-white/5 p-2 rounded-md ring-1 ring-white/5">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">1</div>
<div className="flex-1 text-[12px] text-white/70">Day 1: Generic Pitch Email</div>
</div>
<div className="w-px h-3 bg-white/10 ml-5"></div>
<div className="flex items-center gap-3 bg-white/5 p-2 rounded-md ring-1 ring-white/5">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">2</div>
<div className="flex-1 text-[12px] text-white/70">Day 3: LinkedIn Connect (No Note)</div>
</div>
<div className="w-px h-3 bg-white/10 ml-5"></div>
<div className="flex items-center gap-3 bg-white/5 p-2 rounded-md ring-1 ring-white/5">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">3</div>
<div className="flex-1 text-[12px] text-white/70">Day 5: "Just bubbling this up"</div>
</div>
<div className="w-px h-3 bg-white/10 ml-5"></div>
<div className="flex items-center gap-3 bg-white/5 p-2 rounded-md ring-1 ring-white/5">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">4</div>
<div className="flex-1 text-[12px] text-white/70">Day 8: "Thoughts on my last email?"</div>
</div>
<div className="w-px h-3 bg-white/10 ml-5"></div>
<div className="flex items-center gap-3 bg-white/5 p-2 rounded-md ring-1 ring-white/5">
<div className="w-6 h-6 rounded-full bg-red-900/50 flex items-center justify-center text-[10px] text-red-300">!</div>
<div className="flex-1 text-[12px] text-red-300/80">Day 12: Breakup Email (Unsubscribed)</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5">
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="fade-in-up delay-100 bg-white/[0.02] ring-1 ring-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-sm">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10 mb-6 font-medium">The Truth</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 leading-snug">The Problem Isn't Outreach.<br/>It's Authenticity.</h2>
<div className="space-y-4 text-base text-white/70 leading-relaxed">
<p>More emails won't fix this.</p>
<p>More automation won't fix this.</p>
<p className="pt-4 font-medium text-white/90">Results immediately improve when:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
                  Outreach actually feels human
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
                  Personalization is real and relevant
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-400" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
                  Conversations come before the pitch
                </li>
</ul>
</div>
</div>

<div className="fade-in-up delay-200 bg-gradient-to-br from-purple-900/10 to-black ring-1 ring-purple-500/20 rounded-2xl p-8 sm:p-10 backdrop-blur-sm relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full pointer-events-none"></div>
<span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 ring-1 ring-inset ring-purple-500/20 mb-6 font-medium">The Solution</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 leading-snug">Authentic<br/>Personalization</h2>
<div className="space-y-4 text-base text-white/70 leading-relaxed relative z-10">
<p>Top performers don't rely on generic templates.</p>
<p className="font-medium text-white/90 pt-2">Instead, they:</p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Research properly to find genuine hooks
                </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Connect genuinely on a human level
                </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                  Write like actual humans speaking to humans
                </li>
</ul>
<div className="mt-8 p-4 bg-white/5 ring-1 ring-white/10 rounded-xl flex items-center justify-between">
<span className="text-sm font-medium text-white/60 line-through">Outreach</span>
<iconify-icon className="text-purple-400" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<span className="text-base font-semibold text-white">Conversations</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-20 bg-zinc-950/50 border-y border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10 mb-6">Social Proof</span>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-12">Teams improving response rates</h2>
<div className="fade-in-blur delay-200 max-w-4xl mx-auto bg-white/[0.02] ring-1 ring-white/10 rounded-2xl p-2 sm:p-4">
<div className="aspect-[21/9] w-full bg-black/40 rounded-xl flex items-center justify-center relative overflow-hidden group border border-dashed border-white/10">
<span className="text-white/30 font-mono text-sm tracking-widest font-medium">IMAGE PLACEHOLDER (TEAMS / DASHBOARDS)</span>
</div>
<div className="p-6 sm:p-8">
<p className="text-base sm:text-lg text-white/80 font-medium">Sales teams use Samantha McKenna's approach to improve how they write outreach and connect with prospects.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="fade-in-up delay-100 mx-auto max-w-3xl text-center mb-16">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">The Framework</span>
<h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">How Sam Improves Outreach</h2>
</div>

<div className="grid gap-6 sm:gap-8 md:grid-cols-2">

<div className="slide-in-scale delay-200 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 sm:p-8 backdrop-blur-sm">
<div className="mb-4">
<span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white ring-1 ring-inset ring-white/20 uppercase">Step 1</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Analyze current messaging</h3>
<p className="text-sm text-white/60 mb-6">We tear down your existing sequences to identify exactly why prospects are ignoring you.</p>
<div className="rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-4">
<div className="grid grid-cols-2 gap-4 items-center">
<div className="relative w-full aspect-square max-w-[120px] mx-auto flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="48" stroke="rgba(255,255,255,0.05)" strokeWidth="8"></circle>
</svg>
<svg className="absolute inset-0 w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="48" stroke="rgba(168,85,247,0.8)" stroke-dasharray="301.59" stroke-dashoffset="180" strokeLinecap="round" strokeWidth="8" style={{animation: 'progressRing 3s ease-in-out infinite'}}></circle>
</svg>
<div className="relative z-10 text-center">
<iconify-icon className="text-purple-400 mb-1" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
<div className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">Audit</div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-red-400/50 w-[80%]"></div></div>
<div className="text-[10px] text-white/50 uppercase tracking-wider">Spam Words</div>
<div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mt-2"><div className="h-full bg-yellow-400/50 w-[60%]"></div></div>
<div className="text-[10px] text-white/50 uppercase tracking-wider">Pitch Density</div>
</div>
</div>
</div>
</div>

<div className="slide-in-scale delay-300 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 sm:p-8 backdrop-blur-sm">
<div className="mb-4">
<span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white ring-1 ring-inset ring-white/20 uppercase">Step 2</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Remove spam patterns</h3>
<p className="text-sm text-white/60 mb-6">We strip out the generic fluff, fake pleasantries, and immediate pitches that ruin trust.</p>
<div className="rounded-lg bg-black/40 ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-black/50">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-500/50"></span>
</div>
<div className="text-[10px] font-mono text-white/50">email_editor.txt</div>
</div>
<div className="text-[12px] leading-relaxed font-geist-mono p-4 h-[140px] relative overflow-hidden">
<div className="text-white/40 line-through decoration-red-500/70 decoration-2">Subject: Quick question regarding {{Company}}</div>
<br/>
<div className="text-white/40 line-through decoration-red-500/70 decoration-2">Hi {{First_Name}},</div>
<div className="text-white/40 line-through decoration-red-500/70 decoration-2">Hope you're having a great week so far!</div>
<br/>
<div className="text-white/40 line-through decoration-red-500/70 decoration-2">I noticed you work at {{Company}}. We help...</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-center">
<span className="bg-red-500/20 text-red-300 text-[10px] px-2 py-1 rounded ring-1 ring-red-500/30 uppercase tracking-widest font-semibold flex items-center gap-1">
<iconify-icon height="12" icon="solar:trash-bin-trash-linear" width="12"></iconify-icon> Patterns Removed
                  </span>
</div>
</div>
</div>
</div>

<div className="slide-in-scale delay-400 rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 sm:p-8 backdrop-blur-sm">
<div className="mb-4">
<span className="inline-flex items-center rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-white ring-1 ring-inset ring-white/20 uppercase">Step 3</span>
</div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">Build authentic outreach</h3>
<p className="text-sm text-white/60 mb-6">We train your team to research efficiently and write messages that sound like a human peer.</p>
<div className="rounded-lg bg-black/40 ring-1 ring-inset ring-white/10 p-4">
<div className="grid grid-cols-3 gap-3 text-center">
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5 flex flex-col items-center gap-2">
<iconify-icon className="text-purple-400" height="20" icon="solar:user-id-linear" width="20"></iconify-icon>
<span className="text-[10px] text-white/70 uppercase tracking-wider">Research</span>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5 flex flex-col items-center gap-2">
<iconify-icon className="text-purple-400" height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
<span className="text-[10px] text-white/70 uppercase tracking-wider">Draft</span>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5 flex flex-col items-center gap-2">
<iconify-icon className="text-purple-400" height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span className="text-[10px] text-white/70 uppercase tracking-wider">Connect</span>
</div>
</div>
<div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/60 bg-white/5 py-2 rounded ring-1 ring-white/5">
<iconify-icon className="text-green-400" height="14" icon="solar:check-circle-linear" width="14"></iconify-icon>
                Human-first approach active
              </div>
</div>
</div>

<div className="slide-in-scale delay-500 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 ring-1 ring-purple-400/30 p-8 flex flex-col items-center justify-center text-center shadow-2xl shadow-purple-900/20">
<h3 className="text-2xl font-semibold text-white mb-4">Ready to stop getting ignored?</h3>
<p className="text-purple-200 text-sm mb-8">Let's transform your outbound strategy.</p>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-8 py-4 text-sm font-bold shadow-lg hover:scale-105 transition-transform duration-300" href="#contact">
              Improve My Messaging
              <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5" id="training">
<div className="fade-in-up delay-100 mx-auto max-w-3xl text-center mb-12">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10">The Offering</span>
<h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">What's Included</h2>
</div>
<div className="max-w-3xl mx-auto">
<div className="slide-in-scale delay-200 relative ring-inset sm:p-10 overflow-hidden ring-white/10 ring-1 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-white/0 to-purple-900/20 rounded-3xl p-6 backdrop-blur-sm">
<div className="grid sm:grid-cols-2 gap-8 items-center relative z-10">
<div>
<h3 className="text-2xl font-semibold mb-2">Comprehensive Sales Training</h3>
<p className="text-white/60 text-sm mb-6">Equip your team with the modern skills needed to generate real conversations.</p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium text-white/90">Outbound Messaging Training</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium text-white/90">Personalization Frameworks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium text-white/90">LinkedIn &amp; Email Strategy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-purple-400 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium text-white/90">Sales Conversation Coaching</span>
</li>
</ul>
</div>

<div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-purple-500/20 blur-[80px]"></div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 bg-zinc-950/50 border-y border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="fade-in-right delay-200 order-1 md:order-2">
<div className="aspect-[3/4] w-full max-w-md mx-auto bg-black/40 rounded-2xl flex items-center justify-center relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
<span className="text-white/30 font-mono text-sm tracking-widest font-medium">IMAGE PLACEHOLDER (SAMANTHA)</span>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>

<div className="fade-in-left delay-100 order-2 md:order-1">
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/80 ring-1 ring-inset ring-white/10 mb-6">About the Founder</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Hi, I'm Samantha McKenna.</h2>
<div className="space-y-6 text-base sm:text-lg text-white/70 leading-relaxed">
<p>I work with sales teams that are doing outreach but not getting responses.</p>
<p>The issue isn't effort — it's how messages feel.</p>
<p className="text-white font-medium border-l-2 border-purple-500 pl-4 py-1">My focus is helping you create outreach that actually connects with people.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="grid gap-4">
<div className="bg-white/[0.02] ring-1 ring-white/10 rounded-xl p-6 backdrop-blur-sm">
<h4 className="text-base font-semibold text-white mb-2">Who is this for?</h4>
<p className="text-sm text-white/60">SDRs, BDRs, founders, and sales teams who want to improve their outbound results.</p>
</div>
<div className="bg-white/[0.02] ring-1 ring-white/10 rounded-xl p-6 backdrop-blur-sm">
<h4 className="text-base font-semibold text-white mb-2">Is this outreach training?</h4>
<p className="text-sm text-white/60">Yes, highly focused on messaging, authentic connection, and real personalization.</p>
</div>
<div className="bg-white/[0.02] ring-1 ring-white/10 rounded-xl p-6 backdrop-blur-sm">
<h4 className="text-base font-semibold text-white mb-2">Does this work for experienced reps?</h4>
<p className="text-sm text-white/60">Yes, especially those who feel their current tactics are yielding diminishing returns and struggling with replies.</p>
</div>
<div className="bg-white/[0.02] ring-1 ring-white/10 rounded-xl p-6 backdrop-blur-sm">
<h4 className="text-base font-semibold text-white mb-2">What makes this different?</h4>
<p className="text-sm text-white/60">We focus on authentic, human-to-human outreach. No generic templates, no "spray and pray" automation.</p>
</div>
<div className="bg-white/[0.02] ring-1 ring-white/10 rounded-xl p-6 backdrop-blur-sm flex justify-between items-center">
<div>
<h4 className="text-base font-semibold text-white mb-1">How do we start?</h4>
<p className="text-sm text-white/60">Book a call below to discuss your team's specific needs.</p>
</div>
<a className="text-purple-400 bg-purple-400/10 p-2 rounded-lg hover:bg-purple-400/20 transition-colors" href="#contact">
<iconify-icon height="20" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-black" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="fade-in-up delay-100 mx-auto max-w-4xl text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">Start Getting Real Replies</h2>
<p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">Book a call to improve how your outreach connects and start turning messages into meetings.</p>
</div>
<div className="fade-in-blur delay-200 max-w-4xl mx-auto">

<div className="w-full bg-white/[0.02] ring-1 ring-white/10 rounded-2xl overflow-hidden backdrop-blur-sm p-2 shadow-2xl shadow-purple-900/10">
<div className="aspect-square sm:aspect-video w-full bg-black/60 rounded-xl flex items-center justify-center relative border border-dashed border-white/10">
<div className="flex flex-col items-center gap-4">
<iconify-icon className="text-white/20" height="48" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span className="text-white/40 font-mono text-sm tracking-widest font-medium">CALENDLY PLACEHOLDER</span>
</div>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-purple-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                Book My Call
              </button>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex items-center gap-3">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 ring-white/10 ring-1 rounded-lg">
<iconify-icon className="text-purple-400" height="18" icon="solar:hashtag-linear" width="18"></iconify-icon>
</span>
<span className="text-base tracking-tight font-semibold">samsales</span>
</div>
<div className="flex gap-6 text-sm text-white/60">
<a className="hover:text-white transition" href="#">LinkedIn</a>
<a className="hover:text-white transition" href="#">YouTube</a>
<a className="hover:text-white transition" href="#">Website</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-sm text-white/40">
              © 2024 #samsales Consulting. All rights reserved.
            </div>
</div>
</div>
</footer>
</div>

    </>
  );
}
