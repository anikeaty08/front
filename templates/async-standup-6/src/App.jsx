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



    // Initialize lucide icons
    lucide.createIcons({
      attrs: { 'stroke-width': 1.5 }
    });
    // Attach specific icons
    document.getElementById('icon-arrow-right').setAttribute('data-lucide', 'arrow-right');
    document.getElementById('icon-chevron-right-1').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-chevron-right-2').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-chevron-right-3').setAttribute('data-lucide', 'chevron-right');
    document.getElementById('icon-chevron-right-4').setAttribute('data-lucide', 'chevron-right');
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
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
      

<header className="w-full border-b border-white/5 bg-black/40 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-indigo-500/90 flex items-center justify-center text-xs font-semibold tracking-tight">
            H
          </div>
<span className="text-sm sm:text-base font-medium tracking-tight text-white group-hover:text-indigo-100 transition-colors">
            hallway
          </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-white transition-colors" href="#how-it-works">
            How it works
          </a>
<a className="text-slate-300 hover:text-white transition-colors" href="#use-cases">
            Use cases
          </a>
<a className="text-slate-300 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-slate-300 hover:text-white transition-colors" href="#faq">
            FAQ
          </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full border border-white/10 text-slate-200 hover:text-white hover:border-indigo-400/70 hover:bg-white/5 transition-colors">
            Talk to us
          </button>
<button className="inline-flex text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full bg-indigo-500 text-white font-medium tracking-tight hover:bg-indigo-400 hover:shadow-[0_0_0_1px_rgba(129,140,248,0.7)] transition">
            Get early access
          </button>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="border-b border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
<div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-12 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Async standups that actually get read</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.1rem] font-semibold tracking-tight text-white">
              Standups, without the <span className="text-slate-300">status meetings.</span>
</h1>
<p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Hallway replaces daily standups with a lightweight async check-in that takes
              under 60 seconds. Your team stays in sync without calendar Tetris or Zoom fatigue.
            </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
<div className="flex rounded-full bg-white/5 border border-white/10 pr-1.5 pl-3 py-1.5 w-full sm:w-auto items-center gap-2">
<span className="text-xs text-slate-300 whitespace-nowrap">Get started in Slack</span>
<button className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500 px-3.5 py-1.5 text-xs font-medium tracking-tight hover:bg-indigo-400 hover:shadow-[0_0_0_1px_rgba(129,140,248,0.7)] transition-colors w-full sm:w-auto justify-center">
<span>Install to Slack</span>
<span className="inline-flex" id="icon-arrow-right"></span>
</button>
</div>
<button className="text-xs text-slate-300 hover:text-white underline decoration-slate-500 hover:decoration-indigo-400 decoration-dotted underline-offset-4 text-left">
                See how a check-in looks
              </button>
</div>

<div className="pt-4 space-y-3">
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                TRUSTED BY FAST-MOVING TEAMS
              </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
<span>Remote product teams</span>
<span className="h-3 w-px bg-slate-700"></span>
<span>Engineering squads</span>
<span className="h-3 w-px bg-slate-700 hidden sm:inline"></span>
<span className="hidden sm:inline">Async-first companies</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-16 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.22),_transparent_60%)] opacity-70 pointer-events-none"></div>
<div className="relative rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl shadow-black/50 backdrop-blur-md overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-950/60">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Profile" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Profile" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Profile" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-xs">
<p className="text-slate-100 font-medium">Daily standup · Product Squad</p>
<p className="text-slate-400 text-[11px]">Happens automatically at 9:15am</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  12 responses today
                </span>
</div>

<div className="px-4 py-4 space-y-4 text-xs">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<img alt="Avatar" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="text-slate-100 font-medium">Alex Rivera</p>
<p className="text-[11px] text-slate-500">9:17 AM</p>
</div>
</div>
<div className="ml-9 space-y-1">
<p className="text-slate-300">
<span className="text-slate-400">Yesterday:</span> shipped onboarding checklist, fixed billing edge-case.
                    </p>
<p className="text-slate-300">
<span className="text-slate-400">Today:</span> pairing with Sam on search relevance, plan next sprint goals.
                    </p>
<p className="text-slate-300">
<span className="text-slate-400">Blocked:</span> waiting on product decision for rollout timing.
                    </p>
</div>
</div>
<div className="space-y-1.5 border-l border-dashed border-slate-700/70 pl-3 ml-2">
<p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
                    Team snapshot
                  </p>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-lg bg-slate-900/80 border border-slate-700/80 px-3 py-2">
<p className="text-[11px] text-slate-400">On track</p>
<p className="text-sm font-medium text-emerald-300">9 teammates</p>
</div>
<div className="rounded-lg bg-slate-900/80 border border-slate-700/80 px-3 py-2">
<p className="text-[11px] text-slate-400">Blocked</p>
<p className="text-sm font-medium text-amber-300">3 teammates</p>
</div>
</div>
</div>

<div className="mt-1 rounded-lg bg-slate-900/70 border border-slate-700/70 px-3 py-2.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-indigo-500/20 flex items-center justify-center text-[11px] text-indigo-100">
                      Mo
                    </div>
<div>
<p className="text-xs text-slate-100 font-medium">Async standup</p>
<p className="text-[11px] text-slate-400">Weekdays · 9:15am local time</p>
</div>
</div>
<span className="text-[11px] text-slate-300 bg-slate-800/90 px-2 py-0.5 rounded-full border border-slate-600/80">
                    No meeting on calendar
                  </span>
</div>
</div>
<div className="px-4 py-3 border-t border-white/5 bg-slate-950/60 flex items-center justify-between text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="inline-flex bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 rounded-full px-2 py-0.5">
                    +2 hours/day saved
                  </span>
<span>vs. synchronous standup</span>
</div>
<span className="hidden sm:inline">Runs inside your existing tools.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Built for async-first teams
            </h2>
<p className="text-sm text-slate-300 max-w-xl mt-2">
              Hallway turns noisy meetings into a focused, written habit that lives where your team already works.
            </p>
</div>
<p className="hidden sm:block text-[11px] text-slate-400 uppercase tracking-[0.16em]">
            THREE SIMPLE PIECES
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-xs text-indigo-100 border border-indigo-500/40">
                  1
                </div>
<h3 className="text-base font-medium tracking-tight text-white">
                  Pick your cadence
                </h3>
</div>
<span className="text-[11px] text-slate-400">Under 2 minutes</span>
</div>
<p className="text-sm text-slate-300 mb-4 flex-1">
              Choose which channels get a standup, when it runs, and what questions get asked. Hallway adapts to how your team already works.
            </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Weekday or custom schedules
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Time zone aware reminders
              </li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-xs text-emerald-100 border border-emerald-500/40">
                  2
                </div>
<h3 className="text-base font-medium tracking-tight text-white">
                  Your team replies in DMs
                </h3>
</div>
<span className="text-[11px] text-slate-400">60 sec / day</span>
</div>
<p className="text-sm text-slate-300 mb-4 flex-1">
              Each teammate gets a short DM they can answer in their own time. No pressure, no interruptions, just clear updates.
            </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Auto-nudges for missed updates
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Works across remote time zones
              </li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 flex flex-col">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-sky-500/15 flex items-center justify-center text-xs text-sky-100 border border-sky-500/40">
                  3
                </div>
<h3 className="text-base font-medium tracking-tight text-white">
                  Everyone sees the thread
                </h3>
</div>
<span className="text-[11px] text-slate-400">Instant clarity</span>
</div>
<p className="text-sm text-slate-300 mb-4 flex-1">
              Hallway posts a compact digest into your channel. Quickly scan what’s happening, who’s blocked, and what changed.
            </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                One scrollable thread per day
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                Follow-ups stay in context
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-slate-950/80" id="use-cases">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Less ceremony, more signal.
            </h2>
<p className="text-sm text-slate-300 mt-2 max-w-xl">
              Keep a written history of progress and blockers, without adding another tool or pulling people out of flow.
            </p>
</div>
<p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
            WHY TEAMS SWITCH
          </p>
</div>
<div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-start">

<div className="space-y-4">

<div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-5 sm:p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">
                  Cut standup time in half
                </h3>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-0.5">
                  5–10 min saved / dev
                </span>
</div>
<p className="text-sm text-slate-200 mb-3">
                Run standups in writing so engineers can answer when they’re between tasks—not mid-deep work.
              </p>
<ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-200">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  No more “who wants to go next?”
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  People respond in their local morning
                </li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">
                  Default to transparency
                </h3>
<span className="text-[11px] text-sky-300 bg-sky-500/10 border border-sky-500/30 rounded-full px-2 py-0.5">
                  Everything searchable
                </span>
</div>
<p className="text-sm text-slate-200 mb-3">
                Standup threads live in your channels, so new teammates can catch up on weeks of context in minutes.
              </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                  Browse past standups like a timeline
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-300"></span>
                  See who’s blocked at a glance
                </li>
</ul>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">
                  Respect time zones
                </h3>
<span className="text-[11px] text-slate-300 bg-slate-800/90 border border-slate-600/80 rounded-full px-2 py-0.5">
                  Async by design
                </span>
</div>
<p className="text-sm text-slate-200 mb-3">
                Hallway handles reminders and gentle nudges so everyone participates—whether they’re in SF, London, or Singapore.
              </p>
<ul className="space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  Local-time notifications
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                  Auto-skip holidays and weekends
                </li>
</ul>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 sm:p-6 flex flex-col justify-between min-h-[260px]">
<div className="mb-4">
<p className="text-[11px] uppercase tracking-[0.16em] text-slate-400 mb-2">
                FROM TEAMS USING HALLWAY
              </p>
<p className="text-sm text-slate-100">
                “We killed our daily standup meeting after a week with Hallway. The written updates are clearer, people are more honest about being blocked, and we got 4 hours back per week.”
              </p>
</div>
<div className="flex items-center gap-3 pt-2">
<img alt="Customer" className="h-9 w-9 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<p className="text-xs font-medium text-slate-100">Jordan Lee</p>
<p className="text-[11px] text-slate-400">VP Engineering · Remote SaaS team</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Simple pricing that scales with you
            </h2>
<p className="text-sm text-slate-300 mt-2 max-w-xl">
              Start free. Upgrade when you’re ready to roll it out to your whole company.
            </p>
</div>
<p className="text-[11px] text-slate-400 uppercase tracking-[0.16em]">
            NO LONG CONTRACTS
          </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 flex flex-col">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-white">
                Starter
              </h3>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-2 py-0.5">
                Best for small teams
              </span>
</div>
<p className="text-sm text-slate-300 mb-4">
              For early-stage teams trying out async standups.
            </p>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-3xl font-semibold tracking-tight text-white">$0</span>
<span className="text-xs text-slate-400">per teammate / month</span>
</div>
<ul className="space-y-2 text-xs text-slate-200 mb-5">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Up to 10 active teammates
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                1 standup channel
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Basic reminders
              </li>
</ul>
<button className="mt-auto inline-flex items-center justify-center w-full rounded-full bg-slate-100 text-slate-900 text-sm font-medium tracking-tight py-2.5 hover:bg-white hover:shadow-[0_0_0_1px_rgba(226,232,240,0.8)] transition-colors">
              Get started free
            </button>
</div>

<div className="rounded-2xl border border-indigo-500/50 bg-indigo-500/10 p-6 relative overflow-hidden">
<div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-3 relative">
<h3 className="text-base font-medium tracking-tight text-white">
                Teams
              </h3>
<span className="text-[11px] text-indigo-50 bg-indigo-500/80 border border-indigo-300/60 rounded-full px-2 py-0.5">
                Most popular
              </span>
</div>
<p className="text-sm text-slate-100 mb-4">
              For growing teams who want async standups across multiple squads.
            </p>
<div className="flex items-baseline gap-2 mb-4">
<span className="text-3xl font-semibold tracking-tight text-white">$4</span>
<span className="text-xs text-indigo-100">per active teammate / month</span>
</div>
<ul className="space-y-2 text-xs text-indigo-50 mb-5 relative">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Unlimited teammates &amp; standup channels
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Advanced reminder rules &amp; skip logic
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                Priority support &amp; onboarding help
              </li>
</ul>
<button className="mt-auto inline-flex items-center justify-center w-full rounded-full bg-white text-slate-900 text-sm font-medium tracking-tight py-2.5 hover:bg-slate-100 hover:shadow-[0_0_0_1px_rgba(226,232,240,0.8)] transition-colors relative">
              Talk to sales
            </button>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-slate-950/80" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="mb-8 sm:mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Questions, answered.
          </h2>
<p className="text-sm text-slate-300 mt-2 max-w-xl">
            Hallway is intentionally simple. Here are the things teams ask before switching.
          </p>
</div>
<div className="space-y-3">

<details className="group rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-slate-100">
                Do we still need a live standup?
              </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-slate-300 group-open:rotate-90 transition-transform">
<span className="inline-flex" id="icon-chevron-right-1"></span>
</span>
</summary>
<div className="mt-2 text-xs text-slate-300">
              Most teams using Hallway remove their daily standup entirely, or keep one short sync per week for higher-bandwidth topics.
            </div>
</details>
<details className="group rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-slate-100">
                Which tools does Hallway work with?
              </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-slate-300 group-open:rotate-90 transition-transform">
<span className="inline-flex" id="icon-chevron-right-2"></span>
</span>
</summary>
<div className="mt-2 text-xs text-slate-300">
              Hallway runs inside Slack today. If you’d like support for other tools, we’d love to hear from you.
            </div>
</details>
<details className="group rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-slate-100">
                How long does it take to set up?
              </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-slate-300 group-open:rotate-90 transition-transform">
<span className="inline-flex" id="icon-chevron-right-3"></span>
</span>
</summary>
<div className="mt-2 text-xs text-slate-300">
              Most teams are running their first async standup in under 5 minutes. No new accounts for teammates—everything happens in Slack.
            </div>
</details>
<details className="group rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-slate-100">
                What if people don’t respond?
              </span>
<span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-slate-300 group-open:rotate-90 transition-transform">
<span className="inline-flex" id="icon-chevron-right-4"></span>
</span>
</summary>
<div className="mt-2 text-xs text-slate-300">
              Hallway sends gentle nudges and makes missed updates visible in the channel, so it’s clear when someone is stuck or offline.
            </div>
</details>
</div>
</div>
</section>

<section className="border-b border-white/5">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="rounded-2xl border border-indigo-500/40 bg-gradient-to-r from-indigo-500/20 via-slate-900/80 to-sky-500/10 px-6 py-8 sm:px-8 sm:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<p className="text-[11px] uppercase tracking-[0.16em] text-indigo-100 mb-2">
              READY WHEN YOU ARE
            </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
              Try Hallway with your next standup.
            </h2>
<p className="text-sm text-indigo-50 max-w-md">
              Install it to one channel, keep your meeting on the calendar for a week, and see which version your team prefers.
            </p>
</div>
<div className="space-y-3 w-full md:w-auto">
<button className="inline-flex items-center justify-center w-full md:w-auto rounded-full bg-white text-slate-900 text-sm font-medium tracking-tight py-2.5 px-5 hover:bg-slate-100 hover:shadow-[0_0_0_1px_rgba(226,232,240,0.8)] transition-colors">
              Add to Slack
            </button>
<p className="text-[11px] text-indigo-100">
              No credit card. Just your workspace and 2 minutes of setup.
            </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
<div className="flex items-center gap-2">
<span className="text-xs font-medium tracking-tight text-slate-100">hallway</span>
<span className="h-3 w-px bg-slate-700"></span>
<span>Async standups for modern teams.</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-200 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-200 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-200 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
