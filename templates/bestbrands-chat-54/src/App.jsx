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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900">

<header className="w-full border-b border-white/5">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-4 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-400 via-blue-400 to-indigo-500 flex items-center justify-center shadow-sm shadow-black/40">
<span className="text-[0.7rem] font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>BB</span>
</div>
<span className="text-base font-semibold tracking-tight text-neutral-50" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>BestBrands</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent text-xs sm:text-sm text-neutral-100 hover:bg-white/5 transition-colors px-3 sm:px-4 py-1.5" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Sign in
            </button>
<button className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 text-xs sm:text-sm hover:bg-neutral-100 transition-colors px-3 sm:px-4 py-1.5 shadow-sm shadow-black/40" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
              Get started
            </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-8">
<div className="space-y-3">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 text-[0.7rem] sm:text-xs text-neutral-100 px-3 py-1 backdrop-blur" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Live in 32 teams · Zero notification noise
                </p>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Chat without the
                  <span className="text-neutral-300">clutter.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  BestBrands is the focused chat app that quietly organizes
                  conversations, filters noise, and keeps only what matters on
                  your screen. No feeds, no chaos — just calm, intentional
                  communication.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 text-sm sm:text-base hover:bg-neutral-100 transition-colors px-5 sm:px-6 py-2 sm:py-2.5 shadow-sm shadow-black/40" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Start free trial
                </button>
<button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent text-sm sm:text-base text-neutral-100 hover:bg-white/5 transition-colors px-5 sm:px-6 py-2 sm:py-2.5" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Watch demo
                  <span className="ml-2 inline-flex">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</button>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
<div aria-hidden="true" className="flex -space-x-2 overflow-hidden">
<div className="inline-flex h-6 w-6 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 border border-neutral-900"></div>
<div className="inline-flex h-6 w-6 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-400 border border-neutral-900"></div>
<div className="inline-flex h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-400 to-purple-500 border border-neutral-900"></div>
</div>
<p className="text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Loved by product, design &amp; support teams who care about calm.
                </p>
</div>
</div>

<div className="relative">

<div aria-hidden="true" className="absolute inset-0 -translate-y-4 blur-3xl opacity-70">
<div className="mx-auto h-full w-full max-w-md bg-gradient-to-tr from-sky-500/25 via-blue-500/20 to-indigo-500/25 rounded-full"></div>
</div>
<div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-neutral-950/70 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">

<div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-neutral-900/80">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-red-500/80"></span>
<span className="h-2 w-2 rounded-full bg-amber-400/80"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
</div>
<span className="text-[0.6rem] text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>BestBrands · Focus View</span>
<div className="w-8"></div>
</div>
<div className="grid grid-cols-[0.8fr,1.2fr]">

<aside className="border-r border-white/10 bg-neutral-950/80 p-3 sm:p-3.5 space-y-4">
<div className="space-y-3">
<div className="flex items-center justify-between gap-2 text-[0.7rem] text-neutral-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="font-medium">Conversations</span>
<span className="text-neutral-500">3 focused</span>
</div>
<div className="space-y-1.5">
<button className="w-full flex items-center gap-2 rounded-2xl bg-white text-neutral-900 px-2.5 py-1.5 text-[0.7rem] shadow-sm shadow-black/30" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900 text-[0.55rem] text-white">BB</span>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-1">
<span className="font-medium tracking-tight">Brand Launch</span>
<span className="text-neutral-500 text-[0.6rem]">Now</span>
</div>
<p className="text-neutral-600 truncate text-[0.6rem]">
                              “Here’s everything you missed, in 3 bullets.”
                            </p>
</div>
</button>
<button className="w-full flex items-center gap-2 rounded-2xl bg-neutral-900/80 hover:bg-neutral-800/80 transition-colors px-2.5 py-1.5 text-[0.7rem]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/90 text-[0.55rem] text-white">PM</span>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-1">
<span className="font-medium tracking-tight">Product Sync</span>
<span className="text-neutral-500 text-[0.6rem]">12:04</span>
</div>
<p className="text-neutral-500 truncate text-[0.6rem]">
                              Summarized and pinned · 2 decisions
                            </p>
</div>
</button>
<button className="w-full flex items-center gap-2 rounded-2xl bg-neutral-900/60 hover:bg-neutral-800/70 transition-colors px-2.5 py-1.5 text-[0.7rem]" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/90 text-[0.55rem] text-white">CX</span>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-1">
<span className="font-medium tracking-tight">Support Highlights</span>
<span className="text-neutral-500 text-[0.6rem]">09:30</span>
</div>
<p className="text-neutral-500 truncate text-[0.6rem]">
                              148 messages → 4 insights
                            </p>
</div>
</button>
</div>
</div>
<div className="space-y-2 pt-1 border-t border-white/5 mt-3">
<p className="text-[0.6rem] uppercase tracking-[0.16em] text-neutral-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                        Filters
                      </p>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[0.65rem] text-neutral-300">
<span>Noise</span>
<span className="rounded-full bg-neutral-800 px-1.5 py-0.5">Muted</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-neutral-300">
<span>Mentions</span>
<span>Smart</span>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-neutral-300">
<span>Summaries</span>
<span>On</span>
</div>
</div>
</div>
</aside>

<section className="bg-neutral-950/60 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2 border-b border-white/5 pb-2.5">
<div>
<h2 className="text-sm font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                          Brand Launch · Focus Summary
                        </h2>
<p className="text-[0.7rem] text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          214 messages condensed into what you actually need.
                        </p>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-neutral-900 border border-white/10 text-[0.65rem] text-neutral-200 px-2.5 py-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<iconify-icon className="w-3 h-3" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
                        CleanView
                      </button>
</div>
<div className="space-y-2.5">
<div className="rounded-2xl bg-neutral-900/90 border border-white/10 p-3 space-y-1.5">
<p className="text-[0.7rem] text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          Here’s the conversation in
                          <span className="text-white">3 key points</span>:
                        </p>
<ul className="list-decimal list-inside text-[0.7rem] text-neutral-300 space-y-0.5" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li>Launch date locked for April 24.</li>
<li>Visual direction: monochrome with one accent.</li>
<li>Support team aligned on new response tone.</li>
</ul>
</div>
<div className="space-y-1.5">
<div className="flex items-start gap-2">
<div className="mt-0.5 h-5 w-5 rounded-full bg-neutral-800 flex items-center justify-center text-[0.6rem] text-neutral-300">
                            AV
                          </div>
<div className="space-y-1">
<p className="text-[0.7rem] text-neutral-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                              “BestBrands cut our chat noise by
                              <span className="text-white">82%</span> in the first
                              week.”
                            </p>
<p className="text-[0.6rem] text-neutral-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                              — Alex, Brand Lead
                            </p>
</div>
</div>
</div>
</div>
<div className="pt-2 space-y-2">
<label className="block text-[0.6rem] text-neutral-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Ask BestBrands anything about this thread</label>
<div className="flex items-center gap-2 rounded-full bg-neutral-900 border border-white/10 px-3 py-1.5">
<iconify-icon className="w-3.5 h-3.5 text-neutral-500" icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="flex-1 bg-transparent outline-none placeholder:text-neutral-600 text-[0.7rem] text-neutral-100" placeholder="What did we decide about the launch visuals?" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}} type="text"/>
<button className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 text-[0.65rem] hover:bg-neutral-100 transition-colors px-2.5 py-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                          Send
                        </button>
</div>
</div>
</section>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-950/80" id="features">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-10">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Everything you need, nothing you don’t.
                </h2>
<p className="text-base text-neutral-300 max-w-xl" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  BestBrands gently filters, summarizes, and organizes your
                  chats so your team can move quickly without feeling rushed.
                </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6">

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500/15 text-sky-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:filter" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Smart noise filters
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Mentions, approvals, decisions — automatically surfaced.
                  Everything else moves quietly into the background.
                </p>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Instant thread summaries
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Join a channel and see the last hours or weeks in one clear
                  overview. No scrolling marathon required.
                </p>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
<iconify-icon className="w-3.5 h-3.5" icon="lucide:layout-panel-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Focus views
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  One calm inbox for everything that actually needs you —
                  across teams, channels, and time zones.
                </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-950" id="how-it-works">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="space-y-6 mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                From noise to clarity in three steps.
              </h2>
</div>
<div className="grid md:grid-cols-3 gap-5 sm:gap-6">

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950 text-xs font-medium tracking-tight" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  1
                </div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Connect your existing tools
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Plug into your current chat workspace in minutes. No new
                  logins, no training sessions.
                </p>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950 text-xs font-medium tracking-tight" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  2
                </div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Let BestBrands listen
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  Our engine quietly observes patterns, priorities, and people
                  — then starts filtering for you.
                </p>
</div>

<div className="rounded-3xl border border-white/10 bg-neutral-950/80 p-4 sm:p-5 space-y-3">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-neutral-950 text-xs font-medium tracking-tight" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  3
                </div>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                  Work from one calm view
                </h3>
<p className="text-sm text-neutral-300 leading-relaxed" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                  See what matters, respond confidently, and leave the rest to
                  BestBrands. Your team feels lighter in a day.
                </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-neutral-950/80" id="pricing">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900 p-5 sm:p-7 lg:p-8 shadow-[0_0_60px_rgba(0,0,0,0.85)]">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
<div className="flex-1 space-y-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    One simple plan for focused teams.
                  </h2>
<p className="text-base text-neutral-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                    Start with a 14‑day free trial. No credit card. Cancel
                    anytime. Give your team a calmer way to talk.
                  </p>
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>$9</span>
<span className="text-sm text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>/ user / month</span>
</div>
<ul className="space-y-1.5 text-sm text-neutral-300" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Unlimited workspaces &amp; channels
                    </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      AI summaries &amp; CleanView included
                    </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      Enterprise‑grade security
                    </li>
</ul>
</div>
<div className="w-full lg:w-64 rounded-2xl bg-neutral-900/80 border border-white/10 p-4 sm:p-5 space-y-4">
<h3 className="text-sm font-medium tracking-tight text-white" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>
                    Get early access
                  </h3>
<form className="space-y-2.5">
<div className="space-y-1.5">
<label className="block text-[0.7rem] text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Work email</label>
<input className="w-full rounded-xl bg-neutral-950 border border-white/10 text-[0.8rem] text-neutral-100 placeholder:text-neutral-600 px-3 py-1.5 outline-none focus:border-white/40" placeholder="you@company.com" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}} type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-[0.7rem] text-neutral-400" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Team size</label>
<select className="w-full rounded-xl bg-neutral-950 border border-white/10 text-[0.8rem] text-neutral-100 px-3 py-1.5 outline-none focus:border-white/40" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<option className="bg-neutral-950">1–10</option>
<option className="bg-neutral-950">11–25</option>
<option className="bg-neutral-950">26–50</option>
<option className="bg-neutral-950">51–100</option>
<option className="bg-neutral-950">100+</option>
</select>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full bg-white text-neutral-950 text-sm hover:bg-neutral-100 transition-colors px-4 py-1.5 mt-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}} type="submit">
                      Join the waitlist
                    </button>
<p className="text-[0.65rem] text-neutral-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
                      We’ll only use your email to share access and product
                      updates.
                    </p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-neutral-950">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="font-semibold tracking-tight text-neutral-200" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Display\', sans-serif'}}>BestBrands</span>
<span className="h-1 w-1 rounded-full bg-neutral-600"></span>
<span style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>Designed for calm teams.</span>
</div>
<div className="flex items-center gap-4 text-xs text-neutral-500" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'SF Pro Text\', sans-serif'}}>
<a className="hover:text-neutral-200 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-200 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</div>





    </>
  );
}
